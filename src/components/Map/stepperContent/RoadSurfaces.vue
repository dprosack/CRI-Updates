<template>
  <div class="scroller" style="min-height: 0vh; display:flex; flex-direction: column; height:30vh; overflow-y: auto;"> 
  <!-- Loop through asset breaks assigned in rdbdSurf. Assign surface type lable and dfo values -->
  <!-- <v-col v-for="(item,index) in rdbdSurf" :key="index" > -->
  <v-card class="card" v-if="isAssetType=== true" elevation="0">
    <v-card-title class="surfaceTitle">
      <v-card-text class="cardText">What's the Surface Type?</v-card-text>
    </v-card-title>
    <v-flex v-for="(item, index) in assetTypeOpt" :key="index">
      <v-select v-model="assetType" :items="item.types" outlined dense placeholder="Pick a Surface type" @change="selectAssetType"></v-select>
    </v-flex>
    <v-btn class="cancelButton" style="bottom: 10px; padding:0px; left:80px;" text tile color="#204E70" @click="isAssetType = isAssetStart = isAssetEnd = false; isAssetFinished = true; cancelNewAsset()">
      <u>Cancel</u>
    </v-btn>
    <v-btn style="bottom: 10px; padding:0px; right:0px; border: 1px solid black;" tile absolute outlined color="#204E70" @click="isAssetType = isAssetEnd = isAssetFinished = isAssetStart = false; isAssetFullLen = true;">
      <u>Skip</u>
    </v-btn>
    <!-- <v-btn style="bottom: 10px; padding:0px; right:1px;" tile absolute outlined  @click="isAssetType = isAssetEnd = isAssetFinished = false; isAssetStart = true;">
      <u>Continue</u>
    </v-btn> -->
  </v-card>

  <v-card class="card" v-if="isAssetFullLen === true" height="80" elevation="0">
    <v-card-title class="surfaceTitle">
      <v-card-text class="cardText">Is the {{assetType}} Surface full length?</v-card-text>
    </v-card-title>
    <div style="outline: 1px solid black; height: 3rem; width: 99.3%; left: 0.05rem; position: relative;">
      <v-btn style="top: 5px; padding:0px; right:131px;" depressed text tile color="#204E70" @click= "isAssetFinished = isAssetStart = isAssetEnd = isAssetFullLen = false;  isAssetType= true;">
        Back
      </v-btn>
      <v-btn  style="bottom: 0px; padding:0px; right:26px; top:5px;" depressed text tile color="#204E70" @click= "isAssetType = isAssetStart = isAssetEnd = isAssetFullLen = false; isAssetFinished = true; cancelNewAsset()">
        <u>Cancel</u>
      </v-btn>
      <v-btn style="bottom: 7px; padding:0px; right:6px; border: 1px solid black;" tile absolute outlined color="#204E70" @click="isAssetType = isAssetEnd = isAssetStart = isAssetFullLen = false; isAssetFinished = true; atBegin(); atEnd(); updateMileInfo(); updateGraphic();">
        <u>Yes</u>
      </v-btn>
      <v-btn style="bottom: 7px; padding:0px; right:76px; border: 1px solid black;" tile absolute outlined color="#204E70" @click="isAssetType = isAssetEnd = isAssetFinished = isAssetFullLen = false; isAssetStart = true;">
        <u>No</u>
      </v-btn>
    </div>
    
  </v-card>             
    <v-card class="card" v-if="isAssetStart === true" elevation="0">
      <v-card-title class="surfaceTitle">
        <v-card-text class="cardText">Where Does the {{assetType}} Surface Start?</v-card-text>
      </v-card-title>
      <v-flex v-for="(item, i) in selectionBegin" :key="i">
        <v-select placeholder="Select an option" outlined dense v-model="assetStartDfo" :items="item.types" @input="selectAssetDFO" ></v-select>
      </v-flex>
      <v-btn class="cancelButton" style="border: 1px solid black" text tile color="#204E70" absolute outlined @click="isAssetType = isAssetEnd = isAssetStart = isAssetFullLen = false; isAssetFinished = true; isCanceled = true; cancelDfoLocation(); resetAsset();">
        <u>Cancel</u>
      </v-btn>
      <v-btn class="continueButton" text tile color="#204E70" @click="isAssetStart = isAssetEnd = isAssetFinished = isAssetType = false; isAssetFullLen = true; cancelDfoLocation()">
        Back
      </v-btn>
          <!-- <v-btn tile absolute left small @click="atBegin(); isAssetStartDisable=false; cancelDfoLocation()" color="#15648C" text active-class="border" style="top:35px;" retain-focus-on-click>
            <v-icon style="padding:0px;">mdi-map-marker</v-icon>At The beginning of the Road
          </v-btn>
          <v-col style="position:absolute; right: 80px; top:50px; font-size: 13px;">OR</v-col>
          <v-btn tile class="mileButton" absolute left small @click="isAssetStartDisable=true; cancelDfoLocation()" color="#15648C" text active-class="border" style="top: 80px; width: 130px;" retain-focus-on-click>
            <v-icon style="padding:0px;">mdi-plus</v-icon>At this mile: 
          </v-btn>
          <v-text-field @click="isAssetStartDisable=true;" :solo="isAssetStartDisable ? false: true" :flat="isAssetStartDisable ? false: true" class="enterMile" v-model="assetStartDfo" dense absolute :outlined="isAssetStartDisable" :label="isAssetStartDisable ? 'Enter Mile' : ''" :style="[isAssetStartDisable ? {'position': 'relative', 'top':'42px', 'left':'140px'} : {'position': 'relative', 'top':'42px', 'left':'140px'}]"></v-text-field>
          <v-col style="position:absolute; right: 80px; top:95px; font-size: 13px;">OR</v-col>
            <v-btn tile class="chooseMapBtn" absolute left small @click="getDfoLocation('start'); isAssetStartDisable=false" color="#15648C" text active-class="border" style="top:130px" retain-focus-on-click>
              <v-icon style="padding:0px;">mdi-map-plus</v-icon>Choose on the Map
            </v-btn>
            <v-btn class="cancelButton" depressed plain @click="isAssetStart = isAssetEnd = isAssetFinished = false; isAssetType = true;" style="bottom: 20px; right:10px;">
              Cancel
            </v-btn>
            <v-btn class="continueButton" absolute outlined tile @click="isAssetStart =  isAssetType = isAssetFinished= false; isAssetEnd = true;" style="bottom: 20px; right:10px;">
              <u>Continue</u>
            </v-btn> -->
    </v-card>
  <!-- <v-expand-x-transition>             -->
  <v-card class="card" v-if="isAssetEnd === true" elevation="0">
    <v-card-title class="surfaceTitle">
      <v-card-text class="cardText">Where Does the {{assetType}} Surface <span id="assetEnd">End</span>?</v-card-text>
    </v-card-title>
    <v-flex v-for="(item, i) in selectionEnd" :key="i">
      <v-select placeholder="Select an option" outlined dense v-model="assetEndDfo" :items="item.types" @input="selectAssetDFO" item-color="none" validate-on-blur></v-select>
    </v-flex>
    <v-btn class="cancelButton" style="border: 1px solid black" text tile color="#204E70" absolute outlined @click="isAssetType = isAssetEnd = isAssetStart = isAssetFullLen = false; isAssetFinished = true; isCanceled = true; cancelDfoLocation(); resetAsset(); ">
      <u>Cancel</u>
    </v-btn>
    <v-btn class="continueButton" text tile color="#204E70" @click="isAssetEnd = isAssetFinished = isAssetType = isAssetFullLen = false; isAssetStart = true; cancelDfoLocation()">
      Back
    </v-btn>
      <!-- <v-btn absolute left small @click="atEnd(); isAssetEndDisable=false; cancelDfoLocation()" color="#15648C" text active-class="border" style="top:35px;" retain-focus-on-click>
        <v-icon style="padding:0px;">mdi-map-marker</v-icon>At The End of the Road?
      </v-btn>
      <v-col style="position:absolute; right: 80px; top:50px; font-size: 13px;">OR</v-col>
      <v-btn class="mileButton" absolute left small @click="isAssetEndDisable=true; cancelDfoLocation()" color="#15648C" text active-class="border" style="top: 80px; width: 130px;" retain-focus-on-click>
        <v-icon style="padding:0px;">mdi-plus</v-icon>At this mile: 
      </v-btn>
      <v-text-field  @click="isAssetEndDisable=true;" :solo="isAssetEndDisable ? false: true" :flat="isAssetEndDisable ? false: true" class="enterMile" v-model="assetEndDfo" dense absolute :outlined="isAssetEndDisable" :label="isAssetEndDisable ? 'Enter Mile' : ''" :style="[isAssetEndDisable ? {'position': 'relative', 'top':'42px', 'left':'140px'} : {'position': 'relative', 'top':'42px', 'left':'140px'}]"></v-text-field> 
       <v-col style="position:absolute; right: 80px; top:95px; font-size: 13px;">OR</v-col>
        <v-btn class="chooseMapBtn" absolute left small @click="getDfoLocation('end'); isAssetEndDisable=false" color="#15648C" text active-class="border" style="top:130px" retain-focus-on-click>
          <v-icon style="padding:0px;">mdi-map-plus</v-icon>Choose on the Map
        </v-btn>
        <v-btn class="cancelButton" depressed plain @click="isAssetEnd = isAssetType = isAssetFinished = false; isAssetStart = true" style="bottom: 20px; right:10px;">
          Cancel
        </v-btn>
        <v-btn class="continueButton" absolute outlined tile @click="isAssetEnd = isAssetStart = isAssetType = false;  isAssetFinished = true; updateMileInfo(); updateGraphic();" style="bottom: 20px; right:10px;">
          <u>Continue</u>
        </v-btn> -->
  </v-card>
  <!-- </v-expand-x-transition> -->
  <v-card class="card" v-if="isAssetFinished=== true" absolute left flat >
    <assetAlert/>
      <v-col  v-for="(item,index) in mileInfo" :key="index">
        <v-row style="border: 1px solid #204E70; height: 70px;" width="800px"> <!-- add for loop to display items; previous button should create an object, which can be displayed below info -->
          <v-card-text style="position: relative; left:1px; text-align: left;" >This road is <em style="color:white" :style="{backgroundColor:`${assetColorTable[item.SRFC_TYPE]}`}">{{item.SRFC_TYPE}}</em> between {{item.ASSET_LN_BEGIN}} miles<br> and {{item.ASSET_LN_END}} miles</v-card-text>
          <v-btn v-if="!infoRoad" text color="#204E70" style="left:270px; bottom: 63px;" @click="editAsset(index)"><v-icon>mdi-pencil</v-icon></v-btn>
          <small v-if="!infoRoad" style="color:#204E70; left:222px; bottom:33px; position: relative;">EDIT</small>
          <v-btn v-if="!infoRoad" text style="left:230px; bottom:63px;" @click="deleteSurface(index);updateGraphic(); cancelDfoLocation()" :disabled="mileInfo.length === 1"><v-icon color="red">mdi-delete</v-icon></v-btn>
          <small v-if="!infoRoad" style="color:red; left:175px; bottom:33px; position: relative;" :style="[mileInfo.length === 1 ? {'color':'grey'} : {'color':'red'}]">DELETE</small>
        </v-row>
        <v-spacer></v-spacer>
      </v-col>
    <a v-if="!infoRoad" @click="isAssetFinished = isAssetFullLen = false; isAssetType = true; addRoadSurface(); isAddNew = true;" style="position: absolute; left:0%; font-size: small; top: 110%; padding-bottom: 5px; color:#204E70"><v-icon color="#204E70">mdi-plus-thick</v-icon><u>Add another segment</u></a>
  
    <!-- <v-btn depressed plain class="nextAssetBtns" @click="isAssetEnd = false; isAssetStart = true; isAssetFinished=false; isAssetType = false; nextStep(2)"> 
      Cancel
    </v-btn> -->
    <v-btn v-if="!infoRoad" outlined class="nextAssetBtns" tile @click="nextStep(4); initLoadAsset('design')" color="#204E70" :disabled="!setAssetCover[0]"> 
      <u>Next Step</u>
    </v-btn>
  </v-card>
  </div> 
</template>

<script>

import {mouseHoverDfoDisplay, getGraphic, getSelectedDFO, applyMToAsset, stopEditingPoint, initLoadAssetGraphic} from '../editFunc'
import {criConstants} from '../../../common/cri_constants'
import {gLayer} from '../map'
import assetAlert from '../stepperContent/assetAlert.vue'
export default {
    components: {assetAlert},
    name: 'roadSurface',
    data(){
      return{
        mileInfo:[],
        assetType: null,
        assetNull: null,
        assetStartDfo: null,
        assetEndDfo: null,
        assetFinished: [],
        isAssetType: true,
        isAssetFullLen: false,
        isAssetStart: false,
        isAssetEnd: false,
        isAssetFinished: false,
        isAssetStartDisable: false,
        isAssetEndDisable: false,
        isCanceled: false,
        isAddNew: false,
        assetTypeOpt: [{
          types:[{text: 'Paved'},
                 {text: 'Brick'},
                 {text: 'Dirt/Natural'},
                 {text: 'Gravel'},
                 {text: 'Concrete'},
                 ]
        }],
        emptyValues:[v => !!v || 'Road Name is required'],
        selectionBegin:[{
          types:[
            {text: 'At the beginning of the road'},
            {text: 'Choose the beginning point on the map'}
          ]
        }],
        selectionEnd:[{
          types:[
            {text: 'At the end of the road'},
            {text: 'Choose the ending point on the map'}
          ]
        }],
        graphic: true,
        disabled: false,
        newDfo: 0,
        countG: null,
        objectids:0,
        editIndex: -1,
        assetColorTable: criConstants.colorTable,
        
      }
    },
    methods:{
      resetDfoValue(){
        this.resetDfo = 0
      },
      cancelNewAsset(){
        if(this.isAddNew === true){
          this.deleteSurface(-1)
          return;
        }
        return;
      },
      resetAsset(){
        this.cancelNewAsset();
        let getCurrentItem = this.mileInfo.at(this.editIndex)
        this.assetType = getCurrentItem.SRFC_TYPE
        this.assetStartDfo = getCurrentItem.ASSET_LN_BEGIN
        this.assetEndDfo = getCurrentItem.ASSET_LN_END
      },
      returnDFO(){
        this.getDfoBool = true;
        mouseHoverDfoDisplay('dfo')
      },
      selectAssetDFO(text){
        let type = {
          'At the beginning of the road': ()=>{
            this.atBegin();
            this.isAssetStart = this.isAssetType = this.isAssetFinished = this.isAssetFullLen = false; 
            this.isAssetEnd = true; 
            this.cancelDfoLocation()
          },
          'Choose the beginning point on the map': async ()=>{
            this.isAssetEndDisable=false;
            this.returnDFO() 
            await this.getDfoLocation('start')
            this.isCanceled === true ? this.isAssetStart = this.isAssetType = this.isAssetFullLen = this.isAssetEnd = false : this.isAssetStart = this.isAssetType = this.isAssetFinished = this.isAssetFullLen = false;
            // this.isAssetStart = this.isAssetType = this.isAssetFinished = this.isAssetFullLen = false; 
            this.isCanceled === true ? this.isAssetFinished = true : this.isAssetEnd = true
            //this.this.isAssetFullLen = true; 
            this.cancelDfoLocation()
            this.resetDfoValue()
            this.getDfoBool = false
          },
          'At the end of the road': ()=>{
            this.atEnd();
            this.isAssetEnd = this.isAssetStart = this.isAssetType = this.isAssetFullLen = false;
            this.isAssetFinished = true;
            this.updateMileInfo();
            this.updateGraphic();
            this.cancelDfoLocation()
            this.isAddNew = false
          },
          'Choose the ending point on the map': async ()=>{
            this.isAssetStartDisable=false;
            this.returnDFO()
            await this.getDfoLocation('end')
            this.isCanceled === true ? this.isAssetStart = this.isAssetType = this.isAssetFullLen = this.isAssetEnd = false : this.isAssetStart = this.isAssetType = this.isAssetEnd = this.isAssetFullLen = false;
            // this.isAssetStart = this.isAssetType = this.isAssetFinished = this.isAssetFullLen = false; 
            this.isCanceled === true ? this.isAssetFinished = true : this.isAssetFinished = true;
            this.updateMileInfo();
            this.updateGraphic();
            this.cancelDfoLocation()
            this.resetDfoValue()
            this.isAddNew = false
            this.getDfoBool = false
          }
        }
        type[`${text}`]()
      },

      selectAssetType(text){
        this.assetType = text
        this.assetNull = null
        this.isAssetType = this.isAssetEnd = this.isAssetFinished = this.isAssetStart = false;
        this.isAssetFullLen = true;
      },
      initLoadAsset(asset){
        initLoadAssetGraphic(asset)
      },
      nextStep(x){
        this.returnStep = x
      },
      cancelDfoLocation(){
        stopEditingPoint()
      },
      editAsset(index){
        let getCurrentItem = this.mileInfo.at(index)
        this.assetType = getCurrentItem.SRFC_TYPE
        this.assetStartDfo = getCurrentItem.ASSET_LN_BEGIN
        this.assetEndDfo = getCurrentItem.ASSET_LN_END
        this.isAssetType = true
        this.isAssetFinished = false
        this.editIndex = index
        this.isCanceled = false
        this.isAddNew = false
        
      },
      async getDfoLocation(type){
        try{
          let returnSelectedDFO = await getSelectedDFO(this.objid);
          if(!returnSelectedDFO) return;
          type === 'start' ? this.assetStartDfo = Number(returnSelectedDFO[0].toFixed(3)) : this.assetEndDfo = Number(returnSelectedDFO[0].toFixed(3))
          //type === 'start' ? this.assetStartDfo = Number(returnSelectedDFO[0].toFixed(3)) : this.assetEndDfo = Number(returnSelectedDFO[0].toFixed(3))
        }
        catch{
          console.log("canceled")
        }
       
      },

      atBegin(){
        this.cancelDfoLocation();
        let id = gLayer.graphics.items.filter(x=>x.attributes.objectid === this.objid);
        this.assetStartDfo = Number(id[0].geometry.paths[0][0][2].toFixed(3))
        
        //this.$set(this.mileInfo[0], 'ASSET_LN_BEGIN_DFO_MS', id[0].geometry.paths[0][0][2])
      },

      atEnd(){
        this.cancelDfoLocation();
        let id = gLayer.graphics.items.filter(x=>x.attributes.objectid === this.objid);
        this.assetEndDfo = Number(id[0].geometry.paths[0].at(-1)[2].toFixed(3))
        this.getDfoBool = false
        //this.$set(this.mileInfo[0], 'ASSET_LN_END_DFO_MS', Number(id[0].geometry.paths[0].at(-1)[2]).toFixed(3))
      },

      updateMileInfo(){
        this.$set(this.mileInfo.at(this.editIndex), 'SRFC_TYPE', this.assetType)
        this.$set(this.mileInfo.at(this.editIndex), 'ASSET_LN_BEGIN', Number(this.assetStartDfo))
        this.$set(this.mileInfo.at(this.editIndex), 'ASSET_LN_END', Number(this.assetEndDfo))
        this.$set(this.mileInfo.at(this.editIndex), 'OBJECTID', this.objid)
        // this.rdbdSurf.at(-1).SRFC_TYPE_ID = this.assetType
        // this.rdbdSurf.at(-1).ASSET_LN_BEGIN_DFO_MS = this.assetStartDfo
        // this.rdbdSurf.at(-1).ASSET_LN_END_DFO_MS = this.assetEndDfo
        // beginEndArr.push(this.mileInfo.at(0).ASSET_LN_BEGIN, this.mileInfo.at(-1).ASSET_LN_END)
        this.checkFullCoverage();
        this.executeDFOgraph('point', 'click')
      },

      checkFullCoverage(){
        let beginEndArr = []
        this.mileInfo.sort((a,b)=>(a.ASSET_LN_BEGIN > b.ASSET_LN_BEGIN)? 1:-1)
        this.mileInfo.forEach(function(x){
          beginEndArr.push([x.ASSET_LN_BEGIN, x.ASSET_LN_END])
        })
        beginEndArr.sort((a,b)=>(a[0] > b[0])? 1:-1)
        this.setAssetCover = beginEndArr
      },

      updateGraphic(){
        let x=[];
        for(let i=0; i < this.mileInfo.length; i++){
            x.push({
              SRFC_TYPE_ID: this.mileInfo[i].SRFC_TYPE,
              ASSET_LN_BEGIN_DFO_MS: Number(this.mileInfo[i].ASSET_LN_BEGIN),
              ASSET_LN_END_DFO_MS: Number(this.mileInfo[i].ASSET_LN_END),
              OBJECTID: this.objid
            })
        }
        for(let z=0; z < gLayer.graphics.items.length; z++){
          if(gLayer.graphics.items[z].attributes.objectid === this.objid){
            gLayer.graphics.items[z].attributes.roadbedSurface = JSON.stringify(x)
            this.rdbdSurf = JSON.parse(gLayer.graphics.items[z].attributes.roadbedSurface)
          }
        }
      },

      resetItems(){
        this.assetType=this.assetStartDfo=this.assetEndDfo = null;
        this.isAssetFinished = false
        this.isAssetType = true
        this.editIndex = -1
      },

      executeDFOgraph(){
        this.newDfo = applyMToAsset(this.mileInfo)
      },

      deleteSurface(index){
        this.mileInfo.splice(index, 1)
        this.checkFullCoverage()
        applyMToAsset(this.mileInfo)
      },
      
      addRoadSurface(){
        this.mileInfo.push({
          SRFC_TYPE:'',
          ASSET_LN_BEGIN: 0,
          ASSET_LN_END:0,
          EDIT: true,
          OBJECTID: this.objid
        })
        this.editIndex = -1
      },
    },

    watch:{
      objid:{
        handler: async function(){
          this.resetItems();
          if(this.mileInfo.length){
            this.mileInfo.length = 0
            this.addRoadSurface()
          }
          getGraphic()
          this.feature = false;
          this.graphic = true;
          //this.numLane = roadInfo.getLan
          this.stepperClose = true;
          //this.rdbdSurf
        }, 
        immediate: true,
      },
      rdbdSurf:{
        handler: function(){
          if(this.mileInfo.length){
            this.mileInfo.length = 0
          }
          if(this.rdbdSurf){
            //let lenghtArr = this.rdbdSurf.length
            for(let i=0; i < this.rdbdSurf.length; i++){
              this.mileInfo.push({
                SRFC_TYPE: this.rdbdSurf[i].SRFC_TYPE_ID,
                ASSET_LN_BEGIN: this.rdbdSurf[i].ASSET_LN_BEGIN_DFO_MS,
                ASSET_LN_END: this.rdbdSurf[i].ASSET_LN_END_DFO_MS,
                EDIT: true,
                OBJECTID: this.objid
              })
            }
            this.isAssetFinished = true
            this.isAssetType = this.isAssetStart = this.isAssetEnd = this.isAssetFullLen = false
          }
          else{
            this.resetItems()
            this.mileInfo.push({
              SRFC_TYPE: '',
              ASSET_LN_BEGIN: 0,
              ASSET_LN_END: 0,
              EDIT: true,
              OBJECTID: this.objid
            })
          }
        }, 
        immediate: true,
      }, 
    },
    computed:{
      getDfoBool:{
        get(){
          return this.$store.state.isDfoReturn
        },
        set(bool){
          this.$store.commit('setIsDfoReturn', bool)
        }
      },
      newHeight(x){
        return x+76
      },
      returnStep:{
        get(){
          return this.$store.state.stepNumber
        },
        set(x){
          this.$store.commit('setStepNumber', Number(x))
        }
      },
      rdbdSurf:{
        get(){
          if(typeof(this.$store.state.roadbedSurface) === 'string'){
            return JSON.parse(this.$store.state.roadbedSurface) 
          }
          else{
            return this.$store.state.roadbedSurface
          }
        },
        set(x){
          this.$store.commit('setRoadbedSurface',JSON.stringify(x))
        }   
      },
      objid:{
        get(){
          return this.$store.state.objectid
        }
      },
      setAssetCover:{
        get(){
          return this.$store.state.assetCoverage
        },
        set(x){
          this.$store.commit('setAssetCoverage', x)
        }
      },
      infoRoad:{
        get(){
          return this.$store.state.infoRd
        },
        set(info){
          this.$store.commit('setInfoRd', info)
        }
      },
      resetDfo:{
        get(){
          return this.$store.state.dfoReturn
        },
        set(dfo){
          this.$store.commit('setDfoReturn', dfo)
        }
      },
    }
}
</script>
<style scoped>
.card{
  border-radius: 0px;
  max-width: 99%;
}
.surfaceTitle{
  background-color: #204E70;
  color: white;
  height:30px;
  width: 100%;
  font-size: 25px; 
}

.cancelButton{
  bottom: 10px;
  left: 300px;
  padding:0px;
}
.continueButton{
  bottom: 9px;
  padding:0px;
  right:160px;
}
.cardText{
  position:relative;
  right: 18px;
  bottom:27px;
  font-size: 15px;
  text-align: left;
}

.nextAssetBtns{
  position: absolute;
  right:0%;
  top: 106%;
}
.mileButton{
  top:75px;
}
.chooseMapBtn{
  top:120px;
}
#assetEnd{
  font-weight: bold;
  text-decoration: underline;
  display: -moz-inline-stack;
  display: inline-block;
  animation: pulse-title 2s linear;
}
@keyframes pulse-title{
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.3);
  }
  70%{
    transform: scale(1);
  }
  80%{
    transform: scale(.5);
  }
  90%{
    transform: scale(.1);
  }
  100%{
    transform: scale(.2)
  }
}
</style>