//import const from map.js
import {search, sketch, sketchPoint, view, featLayer, gLayer, countyOfficialInfo, txCounties, viewPoint, home, rdbdSrfcAsst, rdbdDsgnAsst, rdbdNameAsst, rdbdLaneAsst, editsLayer, rdbdAssetPt, rdbdAssetLine} from '../Map/map' //importing from ESRI API via map.js
import {cntyNbrNm} from '../../common/txCnt' //importing county name/nbr table via txCnt.js
import { criConstants } from '../../common/cri_constants';
//import esri js classes via ESM
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine";
import Graphic from "@arcgis/core/Graphic";
import Query from "@arcgis/core/rest/support/Query";
import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils"
import * as geodesicUtils from "@arcgis/core/geometry/support/geodesicUtils";
import {store} from '../../storeUpd'


//querys the Refernce Layer table return geometry/attributes
function queryFeat(qry){
  console.log(qry.results[0].graphic.attributes.OBJECTID)
  let queryFeat = featLayer.queryFeatures({
    objectIds: [qry.results[0].graphic.attributes.OBJECTID],
    outFields: ["*"],
    returnGeometry: true,
    returnM: true,
  })
  console.log(queryFeat)
  return queryFeat
}
//Querying asset (nonGeom) tables and pushing values to store
async function queryFeatureTables(tblqry){
  //let length = parseFloat(geometryEngine.geodesicLength(tblqry.features[0].geometry, "miles")).toFixed(3)
  //let featIndex = tblqry.features[0].geometry.paths[0].length-1
  const query = new Query();
  query.where = `RDBD_GMTRY_LN_ID = ${tblqry.features[0].attributes.GID}`
  query.outFields = [ "*" ]
  const rdbdSrfc = rdbdSrfcAsst.queryFeatures(query)
  const rdbdDsgn = rdbdDsgnAsst.queryFeatures(query)
  const rdbdName = rdbdNameAsst.queryFeatures(query)
  const rdbdLane = rdbdLaneAsst.queryFeatures(query)
  const rdbdSrfcAtt = await rdbdSrfc
  const rdbdDsgnAtt = await rdbdDsgn
  const rdbdNameAtt = await rdbdName
  const rdbdLaneAtt = await rdbdLane
  // parse and match coded values (cri_constants.js) and push to empty array
  let rdbdSrfArry = [];
  let rdbdDsgnArry = [];
  let rdbdNumLnArry = [];

  if(rdbdSrfArry.length){
    rdbdSrfArry.length = 0
  }

  for(let srf in rdbdSrfcAtt.features){
    let surface = criConstants.surface
    for(let i in surface){
      if(surface[i]['num'] === rdbdSrfcAtt.features[srf].attributes.SRFC_TYPE_ID){
        rdbdSrfcAtt.features[srf].attributes.SRFC_TYPE_ID = surface[i]['name']
      }
    }
    rdbdSrfArry.push(rdbdSrfcAtt.features[srf].attributes)
  }
  
  for(let z=0; z < rdbdDsgnAtt.features.length; z++){
    rdbdDsgnArry.push({
      SRFC_TYPE_ID: rdbdDsgnAtt.features[z].attributes.RDWAY_DSGN_TYPE_DSCR,
      ASSET_LN_BEGIN_DFO_MS: Number(rdbdDsgnAtt.features[z].attributes.ASSET_LN_BEGIN_DFO_MS.toFixed(3)),
      ASSET_LN_END_DFO_MS: Number(rdbdDsgnAtt.features[z].attributes.ASSET_LN_END_DFO_MS.toFixed(3)),
      OBJECTID: null
    })
  }

  for(let a=0; a < rdbdLaneAtt.features.length; a++){
    rdbdNumLnArry.push({
      SRFC_TYPE_ID:  rdbdLaneAtt.features[a].attributes.NBR_THRU_LANE_CNT.toString(),
      ASSET_LN_BEGIN_DFO_MS:  Number(rdbdLaneAtt.features[a].attributes.ASSET_LN_BEGIN_DFO_MS.toFixed(3)),
      ASSET_LN_END_DFO_MS:  Number(rdbdLaneAtt.features[a].attributes.ASSET_LN_END_DFO_MS.toFixed(3)),
      OBJECTID: null
    })
  }

  rdbdSrfArry.sort((a,b)=>(a.ASSET_LN_BEGIN_DFO_MS > b.ASSET_LN_BEGIN_DFO_MS)? 1:-1)
  rdbdDsgnArry.sort((a,b)=>(a.ASSET_LN_BEGIN_DFO_MS > b.ASSET_LN_BEGIN_DFO_MS)? 1:-1)
  rdbdNumLnArry.sort((a,b)=>(a.ASSET_LN_BEGIN_DFO_MS > b.ASSET_LN_BEGIN_DFO_MS)? 1:-1)

  //push values to setters and getters are in vue components
  for(let i=0; i < rdbdSrfArry.length; i++){
    rdbdSrfArry[i].ASSET_LN_BEGIN_DFO_MS = Number(rdbdSrfArry[i].ASSET_LN_BEGIN_DFO_MS.toFixed(3))
    rdbdSrfArry[i].ASSET_LN_END_DFO_MS = Number(rdbdSrfArry[i].ASSET_LN_END_DFO_MS.toFixed(3))
    delete rdbdSrfArry.objectid
  }

  setDataToStore(JSON.stringify(rdbdSrfArry), JSON.stringify(rdbdDsgnArry), rdbdNameAtt.features[0].attributes.ST_DEFN_NM, JSON.stringify(rdbdNumLnArry), tblqry.features[0].attributes.OBJECTID)
  
}
//Sets Road Data in the data store. 
function setDataToStore(surface, design, name, lane, objectid){
  store.commit('setRoadbedSurface', surface) //push surface type values to getSurface setter
  store.commit('setRoadbedDesign', design) 
  store.commit('setRoadbedName', name)
  store.commit('setNumLane', lane)
  store.commit('setObjectid', objectid)
}
//get county name and road totals. Filters county for map zoom and definition query
export async function countyInfo(){
  let countyInfoPromise =  new Promise(function(res){
    let queryUrl = window.location.href
    let crInfo = queryUrl.split('https://txdot.github.io/CRI-Updates/')[1]
    //console.log(crInfo.toString())
    for (let j=0; j < cntyNbrNm.length; j++){
      if(cntyNbrNm[j][crInfo]){
        let whereStatement = `County_NBR = '${crInfo}'`
        // roadInfo.getcntyNmbr = crInfo
        store.commit('setCntyNmbr', crInfo)
        // roadInfo.getcntyName = cntyNbrNm[j][crInfo]
        store.commit('setCntyName', cntyNbrNm[j][crInfo])
        const query = new Query();
        query.where = whereStatement
        query.outFields = [ "*" ]
        let newQuery = countyOfficialInfo.queryFeatures(query)
        // query county extent for dynamic home button
        const geomQuery = new Query();
        geomQuery.where = `CNTY_NM = '${store.getters.getCntyName}'`;
        geomQuery.outFields = [ "*" ];
        geomQuery.returnGeometry = true;
        let returnGeom = txCounties.queryFeatures(geomQuery);
        //Dynamically adding County NBR to search definition expression via data store
        search.sources._items[0].layer.definitionExpression = `CNTY_NBR = ${store.state.cntyNmbr}`
        let countyExtent = returnGeom;
        countyExtent.then(function(result) {
          viewPoint.targetGeometry = result.features[0].geometry.extent;
          //need to set a buffer on mapview zoom level
          home.viewpoint = viewPoint;
        });

        res({response:true, nbr:parseInt(crInfo), query:newQuery, extent: returnGeom})
      }
      else{
        res({response:false})
      }
    }
    //let crValidation = /^[0-9]{1,3}$/
  })
  
  let countyInfoReturn = await countyInfoPromise;
  return countyInfoReturn
}
// Adding a new Roadbed to map
export async function addRoadbed(){
  let addNewRoad = new Promise(function(res){
    sketch.create("polyline",{mode:"click", hasZ: false})
    sketch.on('create', (event) => {
      let lengthMiles;
      if(event.state === "complete"){
      //creating the length of road in miles for user
        lengthMiles = geometryEngine.geodesicLength(event.graphic.geometry, "miles")
        res([lengthMiles, event.graphic.geometry]);
        sketch.complete();
      }
    });
  })
  let returnAddNewRoad = await addNewRoad
  sketch.layer.graphics.items.at(-1).geometry.hasM = true
  //add reApply M Measures function
  sketch.layer.graphics.items.at(-1).attributes = {
    gid: 9999,
    objectid: Number(new Date().getTime().toFixed(7)),
    roadbedName: 'UNKNOWN',
    roadbedDesign: JSON.stringify(null),
    roadbedSurface: JSON.stringify(null),
    numLane: JSON.stringify(null),
    createDt: new Date().getTime(),
    createNm: store.getters.getUserName,
    isCreatedAssets: false,
  }
  sketch.layer.graphics.items.at(-1).symbol = {
    type: "simple-line",
    color: [141, 182, 0],
    width: 2,
    style: "dash"
  }

  reapplyM(gLayer.graphics.items.at(-1))
  store.commit('setDeltaDis',[Number(returnAddNewRoad[0].toFixed(5)), 'Add'])
  store.commit('setRoadGeom', gLayer.graphics.items.at(-1).geometry.clone())

  setDataToStore(sketch.layer.graphics.items.at(-1).attributes.roadbedSurface,
                 sketch.layer.graphics.items.at(-1).attributes.roadbedDesign,
                 sketch.layer.graphics.items.at(-1).attributes.roadbedName,
                 sketch.layer.graphics.items.at(-1).attributes.numLane,
                 sketch.layer.graphics.items.at(-1).attributes.objectid)
  
  return returnAddNewRoad[0]
}

//Modifying Existing Road and gathering existing road attributes based on clickType variable
//clickType = immediate-click; returns attributes
//clickType = double-click; creates graphic for editing
export async function modifyRoadbed(clickType, editType){
  let promise = new Promise(function(res){
    view.on(clickType,(event) => {
      let opts = { include: featLayer }
      view.hitTest(event, opts).then(function(response){
        for(let i=0; i < response.results.length; i++){
          if(response.results[i].graphic.geometry !== null && response.results[i].graphic.sourceLayer !== null){
            let test = queryFeat(response)
            test.then(result=>res(result))
          }
        }
      })
    })
  })

  let feature = await promise;
  store.commit('setRoadGeom', feature.features[0].geometry.clone())
  await queryFeatureTables(feature)
  defineGraphic(feature,clickType, editType)
  if(clickType === "pointer-move"){
    
    store.commit('setObjectid', feature.features[0].attributes.OBJECTID)
    //roadInfo.getObjectId = feature.features[0].attributes.OBJECTID
    return 1 //provide increments for stepper
  }
  return feature//geometryEngine.geodesicLength(feature.features[0].geometry, "miles")
}
//turn on/off imagery at zoom level 9; NeedsReview
// export function zoomExtents(){
//   //maybe introduce watcher
//   view.on('mouse-wheel',() => {
//     //console.log(view.zoom)
//     view.zoom < 9 ?  featLayer.visible = false : featLayer.visible = true;
//     view.zoom < 9 ? map.basemap = criConstants.basemap : map.basemap = 'satellite';
//     view.zoom > 9 ? map.basemap = 'satellite' : criConstants.basemap;
//   })
// }
//highlightes reference layer geometry when mouse moves over
// export function hightlightFeat(){
//   view.on('pointer-move', (event) => {
//     const opts = {include: featLayer}
//     view.hitTest(event, opts).then(function(response){
//       if (response.results.length) {
//         let editFeature = response.results[0].graphic;
//         view.whenLayerView(editFeature.layer).then(function(layerView){
//           let highlight = layerView.highlight(editFeature);
//           view.on('pointer-move', (event) => {
//             view.hitTest(event, opts).then(function(response){
//               if(response.results.length === 0){
//                 highlight.remove()
//               }
//             })
//           })
//         })
//       }
//     })
//   })
// }
//creating roadbed graphic and setting attributes to graphics layer (gLayer)
//called in modifyRoadbed function
async function defineGraphic(graphics, clickType, editType){
  let exist = gLayer.graphics.items.filter(x => x.attributes.objectid === graphics.features[0].attributes.OBJECTID)
  if(exist.length){
    return;
  }

  if (clickType === "click"){
    document.body.style.cursor = 'context-menu'
    let graphicPromise = new Promise(function(res){
      let newGraphic = new Graphic({
        geometry: {
          type: "polyline",
          paths: graphics.features[0].geometry.paths[0],
          hasM: true,
          spatialReference: {
            wkid: 3857
          }
        },
    
        attributes: {
          gid: graphics.features[0].attributes.GID,
          objectid: graphics.features[0].attributes.OBJECTID,
          roadbedName: store.getters.getRoadbedName,
          roadbedDesign: store.getters.getRoadbedDesign,
          roadbedSurface: store.getters.getRoadbedSurface,
          numLane: store.getters.getNumLane,
          isCreatedAssets: true,
          createDt: new Date().getTime(),
          createNm: "DPROSACK" //replace with user login info. TODO
        },
                  
        symbol: {
          type: "simple-line",
          color: criConstants.editTypeColor[`${editType}`],
          width: 2,
          style: "dash"
        }
      })
      gLayer.graphics.add(newGraphic);
      //sketch.update([newGraphic], {tool:'reshape'})
      res(gLayer)
    })

    let returnGraphicPromise = await graphicPromise
    //roadInfo.getObjectId = graphics.features[0].attributes.OBJECTID
    hideEditedRoads(returnGraphicPromise)
    
  //let objectidList = [];
  
  
  // for(let id in gLayer.graphics.items){
  //   if(gLayer.graphics.items[id].attributes !== null){
  //     objectidList.push(gLayer.graphics.items[id].attributes.objectid)
  //   }
  // }
  // featLayer.definitionExpression = `OBJECTID not in (${objectidList}) and CNTY_NM = '${store.getters.cntyName}'`
  //   if(gLayer.graphics.items[id].attributes !== null){
  //     objectidList.push(gLayer.graphics.items[id].attributes.objectid)
  //   }
  //   //Hides Reference Layer so it cant create multiple graphics. OBJECTID gets applied to objectidList array
  //   featLayer.definitionExpression = `OBJECTID not in (${objectidList}) and CNTY_NM = '${roadInfo.getcntyName}'` //add to go first, a new functoin
    //rdbdSrfcGeom.definitionExpression = `gid not in (${objectidList}) and cnty_nm = '${roadInfo.getcntyName}'` TODO - Hide rdbdSrfcGeom (split asset feature service)
    
  }
}

//hides feature roadbeds when converted to graphic
function hideEditedRoads(graphicL){
  let objectidList = [];
  for(let id in graphicL.graphics.items){
    if(graphicL.graphics.items[id].attributes !== null){
      objectidList.push(graphicL.graphics.items[id].attributes.objectid)
    }
  }
  featLayer.definitionExpression = `OBJECTID not in (${objectidList}) and CNTY_NM = '${store.getters.getCntyName}'`
}
//updateLength() gets new length of selected graphic and sends new length to store
export function updateLength(){
  try{
    setUpGraphic();
    sketch.on('update', (event)=>{
      if(event.state === 'complete'){
        let newLengths = Number(geometryEngine.geodesicLength(event.graphics[0].geometry, "miles").toFixed(5))
        store.commit('setDeltaDis',[newLengths, 'Edit'])
        store.commit('setRoadGeom', event.graphics[0].geometry.clone())
        reapplyM(event.graphics[0])
        // let returnRdSurf = JSON.parse(event.graphics[0].attributes.roadbedSurface)
        // returnRdSurf.forEach(x => x.OBJECTID = event.graphics[0].attributes.objectid)
        // applyMToAsset(returnRdSurf)
      }
    })
  }
  catch(Error){
    console.log('updateLength error', Error)
  }
}
//setUpGraphic() gets old length of selected graphic and send old length to store
function setUpGraphic(){
  view.on('click',(event)=>{
    if(sketch.state === 'active'){
      return;
    }
    let opts = [gLayer]
    view.hitTest(event,opts).then((response)=>{
      if(response.results.length && store.getters.getStepperClose === true && store.getters.getStepNumber > 1){
        return;
      }
      response.results.forEach((result)=>{
        if(result.graphic.layer === sketch.layer && result.graphic.attributes){
          sketch.update([result.graphic], {tool:"reshape"});
          let oldLength = Number(geometryEngine.geodesicLength(result.graphic.geometry, "miles").toFixed(5))
          store.commit('setOldLength',oldLength)
        }
      });
    });
  });
}
//Stop Editing by calling the sketch cancel() method.
export function stopEditing(){
  sketch.cancel()
}
export function stopEditingPoint(){
  sketchPoint.cancel()
}
//populates stepper form when graphic is clicked.
export async function getGraphic(){
  let getGraphPromise = new Promise(function(resp){
      view.on("click", function(event){
        let option = {include: [gLayer]}
        if (sketch.state === "active") {
          return;
        }
          view.when(function(){
            //get response from graphics and set getters in store.js
            view.hitTest(event,option)
            .then(function(response){
              if(response.results.length && store.getters.getStepperClose === true && store.getters.getStepNumber > 1){
                store.commit('setdenyFeatClick', true)
                return;
              }
              if(response.results.length){
                store.commit('setStepperClose', true)
                store.commit('setObjectid', response.results[0].graphic.attributes['objectid'])
                store.commit('setRoadbedName', response.results[0].graphic.attributes['roadbedName'])
                store.commit('setRoadbedDesign', response.results[0].graphic.attributes['roadbedDesign'])
                store.commit('setNumLane', response.results[0].graphic.attributes['numLane'])
                store.commit('setRoadbedSurface', response.results[0].graphic.attributes['roadbedSurface'])
                resp(response.results[0].graphic)
              }
            })
          })
      });
  });
  let returnGetGraph = await getGraphPromise;
  return returnGetGraph
}
//setting M-Vaules on geometry changes
function reapplyM(arr){
  let gl = gLayer.graphics.items.filter(x => x.objectid = arr.attributes.objectid).at(-1)
  let applyM = [];
  
  try{
    let segMil = arr.geometry.paths[0][0][2] ? arr.geometry.paths[0][0][2] : 0;
    arr.geometry.paths[0][0][2] ? applyM.push(arr.geometry.paths[0][0][2]) : applyM.push(0);
    for(let i=0; i < arr.geometry.paths[0].length; i++){
      
      let pointA = new Graphic({
        geometry:{
          type: "point",
          longitude: arr.geometry.paths[0][i][0],
          latitude: arr.geometry.paths[0][i][1]
        }
      })
        
      let pointB = new Graphic({
        geometry:{
          type: "point",
          longitude: arr.geometry.paths[0][i+1][0],
          latitude: arr.geometry.paths[0][i+1][1]
        }
      })
      let miles = geodesicUtils.geodesicDistance(webMercatorUtils.webMercatorToGeographic(pointB.geometry), webMercatorUtils.webMercatorToGeographic(pointA.geometry), "miles")
      segMil += miles.distance
      applyM.push(segMil)
    }
  }
  catch{
    console.log('end of the line')
  }
  if(gl){
    for(let j=0; j < applyM.length; j++){
      gl.geometry.setPoint(0,j,[arr.geometry.paths[0][j][0],arr.geometry.paths[0][j][1],applyM[j]])
    }
    //roadInfo.getSurface.at(-1).ASSET_LN_END_DFO_MS = Number(gl.geometry.paths[0].at(-1)[2].toFixed(3))
  }

  store.commit('setRoadGeom',gl.geometry.clone())
  return;
} //TODO
//push asset/geometry to edits feature layer
export function saveInfo(id){
  //get graphic layer and match by objectid
  const graphic = gLayer.graphics.items
  let geomPath;
  let createdate;
  let createName;
  let gid;
  for(let x in graphic){
    if(graphic[x].attributes.OBJECTID === id.objectid){
      geomPath = graphic[x].geometry
      createdate = graphic[x].attributes.createDt
      createName = graphic[x].attributes.createNm
      gid = graphic[x].attributes.gid
    }
  }
  //create new graphic and push new asset to edits feature layer
  const editGraphic = new Graphic({
    geometry: geomPath,
    attributes: {
      objectid: id.objectid,
      gid: gid,
      begin_dfo: 1, //TODO
      end_dfo: 1, //TODO
      seg_len:4, //TODO
      county: store.getters.getcntyNmbr,
      edit_type:'update',
      create_nm: createName,
      create_dt: createdate,
      edit_nm: id.editNm,
      edit_dt: id.editDt,
      submit: 0,
      cnty_nbr: store.getters.getcntyNmbr,
      srfc_type_id:id.rdbdSurfe,
      st_defn_nm: id.rdbdName,
      rdway_dsgn_type_dscr: id.rdbdDes,
      nbr_thru_lane_cnt: id.numLanes,
    }
  });
  
  editsLayer.applyEdits({
    addFeatures: [editGraphic]
    //updateFeatures - TODO
    //deleteFeatures - TODO
  });
}
//*************************************************************************************************/
//Drawing the new Asset Graphics on the route
function createAssetGraph(pathArr,y){
  let assetGeom = rdbdAssetLine.graphics.items
  for(let a=0; a<assetGeom.length; a++){
    if(assetGeom[a].attributes.objectid === y[0].OBJECTID){
      rdbdAssetLine.graphics.remove(assetGeom[a])
    }
  }
 
  let densUpdate = pathArr.paths[0]
  
  let mArr = [];
  if(mArr.length){
    mArr.length = 0
  }


  for(let i = 0; i < densUpdate.length; i++){
    mArr.push(Number(parseFloat(densUpdate[i][2]).toFixed(3))) //mval
  }

  for(let d=0; d < y.length; d++){
    delete y[d].ASSET_LN_END_DFO_MS
    delete y[d].ASSET_LN_BEGIN_DFO_MS

    let getstart = (element) => element >= y[d].ASSET_LN_BEGIN;
    let endstart = (element) => element >= y[d].ASSET_LN_END;

    //extract closest index for begin/end dfo values

    let geom = mArr.findIndex(endstart) === -1 ? densUpdate.slice(mArr.findIndex(getstart),) : densUpdate.slice(mArr.findIndex(getstart),mArr.findIndex(endstart)+1)
    //let geom = densUpdate.slice(mArr.findIndex(endstart)-1,mArr.findIndex(endstart)+1)
    //convert to points to graphic and plot on route
    let assetLineType = y[d].SRFC_TYPE


    const assetLineSym = {
      type: "simple-line",
      color: criConstants.colorTable[`${assetLineType}`],
      width: 5,
      style: "solid"
    }

    let pavement = new Graphic({
      geometry: {
        type: "polyline",
        paths: geom,
        hasM: true,
        spatialReference: {
          wkid: 3857
        }
      },
  
      attributes: {
        objectid: y[d].OBJECTID,
      },
                
      symbol: assetLineSym
    })
    rdbdAssetLine.graphics.add(pavement);
    
    //let addGeom = gLayer.graphics.items.filter(gl => gl.attributes.objectid === y[0].OBJECTID)
    //console.log(addGeom[0].geometry.paths = store.getters.roadGeometry)
    // if(densUpdate.at(-1)[2] !== Number(y[d].ASSET_LN_END)){
    //   let delIndex = densUpdate.findIndex(x=> x[2] === Number(y[d].ASSET_LN_END))
    //   console.log(densUpdate.splice(delIndex,1))
    // }

  }
  return;
}
//adding new Asset vertex to pre-existing geometry line. An Anchor vertex  
export function addAssetBreakPts(y, type)
{

  //need to loop through points and add to line
  let a = rdbdAssetPt.graphics.items.filter(al => al.attributes.objectid === y[0].OBJECTID)
  //let g = gLayer.graphics.items.filter(gl => gl.attributes.objectid === y[0].OBJECTID)
  //store.commit('setRoadbedSurface', JSON.stringify(y))
  //g[0].attributes.roadbedSurface = store.getters.getRoadbedSurface


  let updatedGeom;
  if(type !== 'click'){
    // let m = applyMToAsset(a)
    // console.log(m)
    for(let x=0; x<a.length; x++){
      if(!a[x].attributes.edit){
        let returnDFO = getNewDfoDist(a[x].attributes.objectid, a[x].geometry.x, a[x].geometry.y)
        updatedGeom = returnDFO[1]
      }
      else{
        console.log('fail',a[x])
      }
    }
  }
  createAssetGraph(updatedGeom,y)
  return;
}
//gets asset break points and plots on the route
export function getCoordsRange(y){
  try{
    if(rdbdAssetPt.length){
      rdbdAssetPt.length = 0
    }
    let dens;
    // if(check !== false){
      
      //get graphic layer geometry; matching on objectid 
      for(let id in gLayer.graphics.items){
        if(gLayer.graphics.items[id].attributes.objectid === y[0].OBJECTID){
          dens = gLayer.graphics.items[id].geometry
        } 
      }
      //get geometry x,y,m
      let densUpdate = dens.paths[0];
    
      let mArr = [];
      if(mArr.length){
        mArr.length = 0
      }
      //populates mArr with m-values
      for(let i = 0; i < densUpdate.length; i++){
        mArr.push(densUpdate[i][2]) //mval
      }
      //gets the closest M-values to the assetBegin/assetEnd DFO. Provided by the stepper
      
      for(let d in y){
        (element) => element >= y[d].ASSET_LN_BEGIN;
        let endstart = (element) => element >= y[d].ASSET_LN_END;
        //extract closest index for begin/end dfo values
        let geom = mArr.findIndex(endstart) === -1 ? densUpdate.slice(mArr.findIndex(endstart)-1,) : densUpdate.slice(mArr.findIndex(endstart)-1,mArr.findIndex(endstart)+1)
        //let geom = densUpdate.slice(mArr.findIndex(endstart)-1,mArr.findIndex(endstart)+1)
        //convert to points to graphic and plot on route

        const radius = (Math.abs(geom[0][2] - y[d].ASSET_LN_END)) * 1609.344
        const pointA =  new Graphic({
         geometry: {
            type: "point", 
            longitude: geom[0][0],
            latitude: geom[0][1]
          },
        })
        const pointB = new Graphic({
          geometry: {
            type: "point", 
            longitude: geom[1][0],
            latitude: geom[1][1]
          },
        })
        let a = webMercatorUtils.webMercatorToGeographic(pointA.geometry)
        let b = webMercatorUtils.webMercatorToGeographic(pointB.geometry)
            
        const findAzmith = geodesicUtils.geodesicDistance(a, b)
        const pointDFO = geodesicUtils.pointFromDistance(a, radius,findAzmith.azimuth)
        webMercatorUtils.geographicToWebMercator(pointDFO)
  
        let assetType = y[d].SRFC_TYPE
  
        const assetSym = {
          type: "simple-marker",
          color: criConstants.colorTable[`${assetType}`]
        }

        let assetPoint = new Graphic({
          geometry: {
            type: "point",
            hasM: true,
            longitude: pointDFO.x,
            latitude: pointDFO.y,
            spatialReference: {
              wkid: 3857
            }
          },
          attributes: {
            objectid: y[d].OBJECTID,
            assetTyp: assetType,
            bDfo: y[d].ASSET_LN_BEGIN,
            eDfo: y[d].ASSET_LN_END
          },
          symbol: assetSym
        })  

        rdbdAssetPt.graphics.add(assetPoint)
      }
    addAssetBreakPts(y)
  }
  catch(error){
    console.log(error)
    alert('You have selected a value that is greater than the length of road')
    return;
  }
 
  return;
}
//Getting new M-Value for new asset Point
function getNewDfoDist(objectid, x, y){
  console.log(objectid)
  let objid = store.getters.getRoadGeom;
  let newDfo;
  let mnbv;
  // if(objid.length){
  //   objid.length=0
  // }
  //new point clicked in the map
  let pointA = new Graphic({
    geometry:{
      type: "point",
      longitude: x,
      latitude: y
    }
  })
//convert new point to Geograpic i.e lat/long
  let webMercaPointA = webMercatorUtils.webMercatorToGeographic(pointA.geometry)
  // for(let id in gLayer.graphics.items){
  //   if(gLayer.graphics.items[id].attributes.objectid === objectid){
  //     objid = gLayer.graphics.items[id].geometry
  //   }
  // }
  //find neartest vertex for the new point along the line and return vertex Index
  let index = geometryEngine.nearestVertex(objid, pointA.geometry).vertexIndex
  let nearVert = objid.paths[0].at(index)
  let path;
 
  //determine the direction of the line 
  let x2 = nearVert[0]
  let y2 = nearVert[1]
  //neareast vertex point
  let pointB = new Graphic({
    geometry:{
      type: "point",
      longitude: x2,
      latitude: y2
    }
  })
  let webMercaPointB = webMercatorUtils.webMercatorToGeographic(pointB.geometry)
  //find distance between clicked point and nearest point
  const pointAPointB = geodesicUtils.geodesicDistance(webMercaPointB, webMercaPointA)
  console.log(pointAPointB)
  
  if(pointAPointB.distance === 0 && index === 0){
    newDfo = objid.paths[0].at(0)[2]
    return [newDfo, objid] 
  }

  if(pointAPointB.distance === 0 && index === objid.paths[0].at(-1)){
    newDfo = objid.paths[0].at(-1)[2]
    return [newDfo, objid]
  }

  else if(pointAPointB.distance === 0){
    newDfo = objid.paths[0].at(index)[2]
    return [newDfo, objid]
  }
  // if(objid.paths[0].at(0) === nearVert && pointAPointB.distance === 0){
  //   newDfo = objid.paths[0].at(0)[2]
  //   return [newDfo, objid]
  // }

  if(objid.paths[0].length === 2 && objid.paths[0].at(-1) === nearVert){
    newDfo = Math.abs(nearVert[2] - (pointAPointB.distance/1609.344))
    objid.insertPoint(0,1, [x, y, Number(newDfo.toFixed(3))])
    return [newDfo, objid];
  }

  if(objid.paths[0].length === 2 && objid.paths[0].at(0) === nearVert){
    newDfo = Math.abs(nearVert[2] - (pointAPointB.distance/1609.344))
    objid.insertPoint(0,1, [x, y, Number(newDfo.toFixed(3))])
    return [newDfo, objid];
  }
  else{
    path = objid.paths[0].slice(index-2, index)
  }
    // newDfo = objid.paths[0].at(-1) === 1 ? Math.abs(nearVert[2] - (pointAPointB.distance/1609.344)) : objid.paths[0].at(-1)[2]
    // console.log("End of the line")
   
    // objid.insertPoint(0,1, [x, y, Number(newDfo.toFixed(3))])
    //console.log(path)
    // newDfo = objid.paths[0].at(-1)[2]

    
  

  // let nextPt = objid.paths[0].at(index+1)
  // console.log(x2 > nextPt[0]) //true=line going to the left; false=line is going to the right

  //determine point is left or right of another point; (+) to the right. (-) to the left
  let dist = x - x2
  if(!path.length && dist > 0){
    if(objid.paths[0].length > 2 && index === 0){
      path = objid.paths[0].slice(0, 2)
    }
    else if(objid.paths[0].length > 2 && index === objid.paths[0].at(-1)){
      path = objid.paths[0].slice(objid.at(-2), objid.paths[0].at(-1))
    }
    else if(objid.paths[0].length === 2){
      path = objid.paths[0].slice(0, 2)
    }
    else{
      path = objid.paths[0].slice(index-1, index+2)
    }
    //path = objid.paths[0].slice(index-1, index+2)
  }
  if(!path.length && dist < 0){
    if(objid.paths[0].length > 2 && index === 0){
      path = objid.paths[0].slice(0, 2)
    }
    else if(objid.paths[0].length > 2 && index === objid.paths[0].at(-1)){
      path = objid.paths[0].slice(objid.at(-2), objid.paths[0].at(-1))
    }
    else if(objid.paths[0].length === 2){
      path = objid.paths[0].slice(0, 2)
    }
    else{
      path = objid.paths[0].slice(index-1, index+2)
    }
    
    //path = objid.paths[0].slice(index, index+2);
  }

  // console.log(path[0][0] > x)
  // console.log(path[1][0] < x)
  // if(path[0][0] > x && path[1][0] < x){
  //   path = objid.paths[0].slice(index-1, index+2)
  // }
  let dir2;
  if(dist === 0 ){
    dir2 = y - y2
  }
  let direction = path[0][0] > path[1][0]
  console.log(direction, dist)
  //convert GraphicB to Geographic i.e lat/long


  if(dist === 0){
    newDfo = nearVert[2]
    mnbv = index
  }
  if(dist < 0 && !direction){
    newDfo = Math.abs(nearVert[2] - (pointAPointB.distance/1609.344))
    mnbv = index
  }
  else if (dist > 0 && !direction){
    newDfo = Math.abs(nearVert[2] + (pointAPointB.distance/1609.344))
    mnbv = index+1
  }
  else if (dist < 0 && direction){
    newDfo = Math.abs(nearVert[2] + (pointAPointB.distance/1609.344))
    mnbv = index+1
  }
  else if (dist > 0 && direction){
    newDfo = Math.abs(nearVert[2] - (pointAPointB.distance/1609.344))
    mnbv = index
  }
  
  if(dist === 0 && dir2 < 0){
    newDfo = Math.abs(nearVert[2] - (pointAPointB.distance/1609.344))
  }
  else if(dist === 0 && dir2 > 0){
    newDfo = Math.abs(nearVert[2] + (pointAPointB.distance/1609.344))
  }

  if(!newDfo){
    return;
  }
  // if(Number(nearVert[2].toFixed(3)) === Number(newDfo.toFixed(3))){
  //   console.log('Points Match')
  //   return;
  // }
  objid.insertPoint(0,mnbv, [x, y, Number(newDfo.toFixed(3))])
  store.commit('setRoadGeom', objid)
  
  return [newDfo, objid];
  ///path[0][2] may be in correct, may need to be path[1][2]

//   let objid ={};
//   if(objid.length){
//     objid.length=0
//   }
//   //new point clicked in the map
//   let pointA = new Graphic({
//     geometry:{
//       type: "point",
//       longitude: x,
//       latitude: y
//     }
//   })
// //convert new point to Geograpic i.e lat/long
//   let webMercaPointA = webMercatorUtils.webMercatorToGeographic(pointA.geometry)
//   for(let id in gLayer.graphics.items){
//     if(gLayer.graphics.items[id].attributes.objectid === objectid){
//       objid = gLayer.graphics.items[id].geometry
//     }
//   }
//   //find neartest vertex for the new point along the line and return vertex Index
//   let index = geometryEngine.nearestVertex(objid, pointA.geometry).vertexIndex
//   let nearVert = objid.paths[0].at(index)
//   let isEndLine = objid.paths[0].at(-1) === nearVert
//   // let path;
//   // if(objid.paths[0].at(-1) === nearVert){
//   //   console.log("End of the line")
//   //   path = objid.paths[0].slice(index-2, index)
//   //   //console.log(path)
//   //   return;
//   // }
//   //determine the direction of the line 
//   let x2 = nearVert[0]
//   let y2 = nearVert[1]
//   //neareast vertex point
//   let pointB = new Graphic({
//     geometry:{
//       type: "point",
//       longitude: x2,
//       latitude: y2
//     }
//   })

//   let nextPt = isEndLine ? objid.paths[0].at(index-1) : objid.paths[0].at(index+1)
//   let direction = parseFloat(x2) > parseFloat(nextPt[0])
//    //true=line going to the left; false=line is going to the right
//   //console.log(pointA, pointB)
//   //determine point is left or right of another point; (+) to the right. (-) to the left
//   let dist = x - x2

//   // path = dist > 0 ? objid.paths[0].slice(index-1, index+2) : objid.paths[0].slice(index, index+2);
//   // console.log(path[0][0] > x)
//   // console.log(path[1][0] < x)
//   // if(path[0][0] > x && path[1][0] < x){
//   //   path = objid.paths[0].slice(index-1, index+2)
//   // }
//   // let dir2;
//   // if(dist === 0 ){
//   //   dir2 = y - y2
//   // }
//   // let direction = path[0][0] > path[1][0]
//   // console.log(direction, dist)
//   //convert GraphicB to Geographic i.e lat/long
//   let webMercaPointB = webMercatorUtils.webMercatorToGeographic(pointB.geometry)
//   //find distance between clicked point and nearest point
//   const pointAPointB = geodesicUtils.geodesicDistance(webMercaPointB, webMercaPointA)

//   let newDfo;
//   let mnbv;
//   if(dist === 0){
//     newDfo = nearVert[2]
//     mnbv = index
//   }
//   if(dist < 0 && !direction){
//     newDfo = Math.abs(nearVert[2] - (pointAPointB.distance/1609.344))
//     mnbv = index
//   }
//   else if (dist > 0 && !direction){
//     newDfo = Math.abs(nearVert[2] + (pointAPointB.distance/1609.344))
//     mnbv = index+1
//   }
//   else if (dist < 0 && direction){
//     newDfo = Math.abs(nearVert[2] + (pointAPointB.distance/1609.344))
//     mnbv = index+1
//   }
//   else if (dist > 0 && direction){
//     newDfo = Math.abs(nearVert[2] - (pointAPointB.distance/1609.344))
//     mnbv = index
//   }
  
//   // if(dist === 0 && dir2 < 0){
//   //   newDfo = Math.abs(nearVert[2] - (pointAPointB.distance/1609.344))
//   // }
//   // else if(dist === 0 && dir2 > 0){
//   //   newDfo = Math.abs(nearVert[2] + (pointAPointB.distance/1609.344))
//   // }

//   if(!newDfo){
//     return;
//   }
//   // if(Number(nearVert[2].toFixed(3)) === Number(newDfo.toFixed(3))){
//   //   console.log('Points Match')
//   //   return;
//   // }
//   objid.insertPoint(0,mnbv, [x, y, Number(newDfo.toFixed(3))])
  
//   return newDfo;
//   ///path[0][2] may be in correct, may need to be path[1][2]
}
//Edit the assest brake point on route via pencil icon in stepper
export async function updateAsset(y){
  //variable y is asset break object. Created in Stepper
  console.log("this point is being updated",y)
  let rdbdobj = [];
  if(rdbdobj.length){rdbdobj.length = 0}
  //gathering asset points and zooming to location. 
  for(let i in rdbdAssetPt.graphics.items){
    if((rdbdAssetPt.graphics.items[i].attributes.objectid === y[0].objectid) && (rdbdAssetPt.graphics.items[i].attributes.assetTyp === y[0].SRFC_TYPE_ID) && Number(rdbdAssetPt.graphics.items[i].attributes.eDfo) === y[0].ASSET_LN_END_DFO_MS){
      view.goTo({center: rdbdAssetPt.graphics.items[i].geometry, zoom: 20})
      rdbdAssetPt.graphics.items[i].attributes.edit = null
      rdbdobj = rdbdAssetPt.graphics.items[i]
    }
  }
  let returnAssetPt = await getSelectedDFO(rdbdobj.attributes.objectid);
  
  //start Sketch for placement of new asset break point
  // let assetPtPromise = new Promise(function(res){
  //   sketchPoint.create("point",{mode: "click"})
  //   sketchPoint.on("create",function(event){
  //     sketchPoint.cancel();
  //     res(event)
  //   })
  // })
  // //returns new point x,y
  // let returnAssetPt = await assetPtPromise

  //gets new DFO Distance (m-value) of new asset break point
  //let newDfo = getNewDfoDist(rdbdobj.attributes.objectid, returnAssetPt.graphic.geometry.x, returnAssetPt.graphic.geometry.y)
  let assetType = y[0].SRFC_TYPE_ID

  const assetSymb = {
    type: "simple-marker",
    color: criConstants.colorTable[`${assetType}`]
  } 
  //sets new asset point Graphic and converts point to Lat/Long
  const convertPt = new Graphic({
    geometry: {
      type: "point", 
      longitude: returnAssetPt[0].graphic.geometry.x,
      latitude: returnAssetPt[1].graphic.geometry.y,
      m: Number(parseFloat(returnAssetPt[0]).toFixed(3))
    },
  })

  let a = webMercatorUtils.webMercatorToGeographic(convertPt.geometry)
  let newAssetPt = new Graphic({
    geometry: {
      type: "point",
      hasM: true,
      longitude: a.x,
      latitude: a.y,
      spatialReference: {
        wkid: 3857
      }
    },
    attributes: {
      objectid: y[0].OBJECTID,
      assetTyp: assetType,
      bDfo: y[0].ASSET_LN_BEGIN_DFO_MS,
      eDfo: Number(parseFloat(returnAssetPt[0]).toFixed(3)),
      edit: true,
    },
    symbol: assetSymb
  });

  //removes old graphic and add new asset point
  rdbdAssetPt.graphics.remove(rdbdobj)
  rdbdAssetPt.graphics.add(newAssetPt)

  store.commit('setUpdateDfo',newAssetPt.attributes.eDfo)
  //returns all asset points related by objectid
  let currentAsst = rdbdAssetPt.graphics.items.filter(ca => ca.attributes.objectid === y[0].objectid)
  let assetArray=[]
  for(let x=0; x < currentAsst.length; x++){
    assetArray.push({
      SRFC_TYPE_ID: currentAsst[x].attributes.assetTyp,
      ASSET_LN_BEGIN_DFO_MS: Number(parseFloat(currentAsst[x].attributes.bDfo)),
      ASSET_LN_END_DFO_MS: Number(parseFloat(currentAsst[x].attributes.eDfo)),
      objectid: currentAsst[x].attributes.objectid,
      edit: currentAsst[x].attributes.edit
    })
  }
  //making sure there aren't any gaps/overlaps. Adjusting asset Break Dfos.
  let updateM = applyMToAsset(assetArray, "click")
  addAssetBreakPts(updateM, 'click')
  return updateM;
}
//******************************************************************************************************/
//Removes graphics points on click
export function removeAsstPoints(){
  rdbdAssetPt.graphics.removeAll();
  return;
}

export function applyMToAsset(assetArray, type){
  let length = []
  for(let x=0; x < gLayer.graphics.items.length; x++){
    if(gLayer.graphics.items[x].attributes.objectid === assetArray[0].OBJECTID){
      length.push(gLayer.graphics.items[x])
    }
  }

  // length[0].attributes.roadbedSurface = assetArray
  // for(let z=0; z < length[0].attributes.roadbedSurface.length; z++){
  //   if(typeof(length[0].attributes.roadbedSurface[z].ASSET_LN_BEGIN_DFO_MS) === "string" || typeof(length[0].attributes.roadbedSurface[z].ASSET_LN_END_DFO_MS) === "string" ){
  //     assetArray[z].edit = true;
  //   }
  // }
  rdbdAssetLine.removeAll();
  // let assetInfo = [];
  // if(assetInfo.length){
  //   assetInfo.length = 0
  // }

  // for(let h=0; h < assetArray.length; h++){
  //   console.log(h)
  //   let add = {srfcType: assetArray[h].srfcType, AssetBeginDfo: parseFloat(assetArray[h].AssetBeginDfo), AssetEndDfo: parseFloat(assetArray[h].AssetEndDfo), objectid: assetArray[h].objectid}
  //   console.log(add.AssetBeginDfo, add.AssetEndDfo)
  //   assetInfo.push(add)
  //   console.log(assetInfo)
  // }
//make a new function for these
  assetArray.sort((a,b) => a.ASSET_LN_BEGIN_DFO_MS > b.ASSET_LN_BEGIN_DFO_MS)

  for(let i=1; i<assetArray.length; i++){
    if(assetArray[i].edit){
      assetArray[i-1].ASSET_LN_END_DFO_MS = Number(assetArray[i].ASSET_LN_BEGIN_DFO_MS)
      if(assetArray[i+1]){
        assetArray[i+1].ASSET_LN_BEGIN_DFO_MS = Number(assetArray[i].ASSET_LN_END_DFO_MS)
      }
      
    }
    if(assetArray[i-1].edit){
      assetArray[i].ASSET_LN_BEGIN_DFO_MS = Number(assetArray[i-1].ASSET_LN_END_DFO_MS)
      if(assetArray[i+1]){
        assetArray[i+1].ASSET_LN_BEGIN_DFO_MS = Number(assetArray[i].ASSET_LN_END_DFO_MS)
      }
    }
  }
  if(assetArray.at(-1).ASSET_LN_END_DFO_MS !== Number(length[0].geometry.paths[0].at(-1)[2].toFixed(3))){
    assetArray.at(-1).ASSET_LN_END_DFO_MS = Number(length[0].geometry.paths[0].at(-1)[2].toFixed(3))
  }

  if(type!=='click'){
    rdbdAssetPt.removeAll();
    getCoordsRange(assetArray)
  }
  return assetArray
}

export function sketchCompete(){
  sketch.complete()
  return;
}

export async function autoDrawAsset(z){
  //1) need all geometries
  //2) need asset breaks
  //3) draw new assets
  const query = new Query();
  query.where = z
  query.outFields = [ "*" ]
  query.returnGeometry = true
  query.returnM = true
  await featLayer.queryFeatures(query)

  // for(i in featQuery.features){
  //   let gid = featQuery.features[i].attributes.GID
    

  // }

}
export async function getSelectedDFO(oid){
  let clickedPt = new Promise(function(res){
    sketchPoint.create("point",{mode: "click"})
    sketchPoint.on("create",function(event){
      sketchPoint.cancel();
      res(event)
    })
  })
  let returnClickedPt= await clickedPt
  if(!returnClickedPt.graphic){
    sketchPoint.cancel();
    return;
  }
  let newDfo = getNewDfoDist(oid, returnClickedPt.graphic.geometry.x, returnClickedPt.graphic.geometry.y)
  
  return [newDfo[0], returnClickedPt.graphic.geometry.x, returnClickedPt.graphic.geometry.y]
}

function assetCoverageCheck(x){

  let beginEndArr = []

  x.forEach(function(x){
    beginEndArr.push(x.ASSET_LN_BEGIN_DFO_MS + x.ASSET_LN_END_DFO_MS)
  })

  let initValue = 0
  let diff = beginEndArr.reduce((prevValue, currentValue) => 
    currentValue - prevValue, initValue
  )

  store.commit('setAssetCoverage', Number(diff.toFixed(3)))
  //this.setAssetCover = Number(diff.toFixed(3))
}

export function initLoadAssetGraphic(asset){
    let assetType = {
      surface: () =>{ return JSON.parse(graphicFilter[0].attributes.roadbedSurface)},
      design: ()=>{ return JSON.parse(graphicFilter[0].attributes.roadbedDesign)},
      numLane: ()=>{ return JSON.parse(graphicFilter[0].attributes.numLane)}
    }
    
    let objID = store.getters.getObjectid
    let graphicFilter = gLayer.graphics.items.filter(x => x.attributes.objectid === objID)
    let graphicAsset = assetType[asset]()
    store.commit('setRoadGeom', graphicFilter[0].geometry.clone())
    if(graphicAsset === null){
      return;
    }
    assetCoverageCheck(graphicAsset)
    if(graphicAsset){
      if(graphicAsset.OBJECTID !== objID){
        graphicAsset.forEach(x => x.OBJECTID = objID)
        let newGraphic = [];
        for(let i=0; i < graphicAsset.length; i++){
          newGraphic.push({
            SRFC_TYPE: graphicAsset[i].SRFC_TYPE_ID,
            ASSET_LN_BEGIN: graphicAsset[i].ASSET_LN_BEGIN_DFO_MS,
            ASSET_LN_END: graphicAsset[i].ASSET_LN_END_DFO_MS,
            OBJECTID: graphicAsset[i].OBJECTID
          })
        }
        applyMToAsset(newGraphic)
      }
      else{
        applyMToAsset(graphicAsset)
      }
    }
    else{
      console.warn('initLoadAssetGraphic didnt run!')
    }
}

