export const criConstants = {
  
    portalUrl: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/arcgis/rest/services/CRI_SurfType_Geom_view/FeatureServer/0",
    refernceLayer: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/CRI_Ref_Layers_view/FeatureServer/0", //"https://testportal.txdot.gov/sstestarcgis/rest/services/Hosted/CRI_Ref_Layers/FeatureServer/0",
    editsLayer: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/arcgis/rest/services/CRI_Edits_view/FeatureServer/0", //"https://testportal.txdot.gov/sstestarcgis/rest/services/Hosted/CRI_Edits/FeatureServer/0",
    assetLyrRdbSrf: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/CRI_Ref_Layers_view/FeatureServer/1",//"https://testportal.txdot.gov/sstestarcgis/rest/services/Hosted/CRI_Ref_Layers/FeatureServer/1",
    assetLyrRdbDsgn: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/CRI_Ref_Layers_view/FeatureServer/2",//"https://testportal.txdot.gov/sstestarcgis/rest/services/Hosted/CRI_Ref_Layers/FeatureServer/2",
    assetLyrRdbName: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/CRI_Ref_Layers_view/FeatureServer/3",//"https://testportal.txdot.gov/sstestarcgis/rest/services/Hosted/CRI_Ref_Layers/FeatureServer/3",
    assetLyrRdbLane: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/ArcGIS/rest/services/CRI_Ref_Layers_view/FeatureServer/4",//"https://testportal.txdot.gov/sstestarcgis/rest/services/Hosted/CRI_Ref_Layers/FeatureServer/4",
    txCounties: "https://services.arcgis.com/KTcxiTD9dsQw4r7Z/arcgis/rest/services/Texas_County_Boundaries/FeatureServer/0",
    geomTypeRd: "polyline",
    geomTypeCounty: "polygon",
    basemap: "topo-vector",
    zoomLevel: 9,
    roadSurfaceMouseType: "cursor:crosshair",

    fmeurl: 'http://api.fmeserver.com/js/v3/FMEServer.js',
    webhookUrl: "https://gis-batch-dev.txdot.gov/fmejobsubmitter/TPP/TPP_DEV_DUSA2Email.fmw?params=",
    headerName: "Authorization",
    headerValue: "fmetoken token=0f9f9976018726f7a4397a8e98294edc615a5512",
    
    design: [{num:'1', name:'One Way'}, {num:'2',name:'Two Way'}, {num:'3',name:'Boulevard'}],
    surface: [{num:10, name:'Paved'}, {num:11, name:'Brick'},{num:12, name:'Dirt/Natural'},{num:13, name:'Gravel'},{num:2, name:'Concrete'}],
    testRoadInfo: [{type:"Paved",bdfo:'0', edfo:'12'},{type:"Brick",bdfo:'12', edfo:'24'}],

    colorTable: {
      'Paved': "#FF6700",
      'Brick': "#FF0800",
      'Dirt/Natural': "#CF71AF",
      'Gravel': "#36454F",
      'Concrete': "#CFCFC4",
      'One Way': "#FFBF00",
      'Two-way': "#87A96B",
      'Boulevard': "#89CFF0",
      '1': "#5D8AA8",
      '2': "#FBCEB1",
      '3': "#848482",
      "4": "#318CE7",
      '5': "#BF94E4",
      '6': "#F0DC82"
    },
    
    editTypeColor:{
      'edit': [0, 0, 255],
      'delete': [227,38,54]
    }
}