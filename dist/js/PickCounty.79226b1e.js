(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PickCounty"],{"019d":function(e,t,a){},"0f53":function(e,t,a){},"3b64":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{height:"700",elevation:"0"}},[n("div",[n("img",{staticStyle:{"max-width":"34%"},attrs:{src:a("f0ca")}}),n("p",[n("br"),n("br"),e._v("The County Road Inventory Map is closed following the August 31st deadline while we transition to the next data year."),n("br"),n("br"),e._v(" The map will reopen on September 15th. "),n("br"),n("br"),e._v(" Thank You! ")])])])},r=[],o={name:"EoyDataProcessing",data(){return{}},beforeRouteLeave(e,t,a){a(!1)},mounted(){},watch:{}},s=o,i=(a("8e3a"),a("2877")),l=Object(i["a"])(s,n,r,!1,null,"87669614",null);t["default"]=l.exports},"8e3a":function(e,t,a){"use strict";a("019d")},9708:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-dialog",{staticClass:"borderRadius",attrs:{persistent:"","max-width":"320"},model:{value:e.pick,callback:function(t){e.pick=t},expression:"pick"}},[a("v-card",{staticClass:"borderRadius",attrs:{height:"200","max-width":"100%"}},[a("v-card-title",{staticClass:"surfaceTitle"},[a("v-card-text",{attrs:{id:"pickerTitle"}},[e._v("County Road Inventory Map")])],1),a("v-card-text",{staticClass:"textSymb",attrs:{id:"pickerTxt"}},[e._v(" Select a county to begin work. ")]),a("v-autocomplete",{staticClass:"countyPicker",attrs:{id:"pickCount","persistent-placeholder":"",outlined:"",dense:"",tile:"",items:e.cntyNames,label:"County Name"},model:{value:e.pickCounty,callback:function(t){e.pickCounty=t},expression:"pickCounty"}}),a("div",[a("v-btn",{attrs:{disabled:0===e.pickCounty.length,outlined:"",id:"continueBtn",depressed:"",color:"#204E70",tile:""},on:{click:function(t){return e.getCountyInfo()}}},[a("u",[e._v("Continue")])]),a("v-btn",{attrs:{id:"cancelBtn",depressed:"",text:"",color:"#204E70",tile:""},on:{click:function(t){return e.cancel()}}},[a("u",[e._v("Cancel")])])],1)],1)],1),e.load?a("loader"):e._e()],1)},r=[],o=a("3514"),s=a("9e3e"),i=a("1baa"),l=a("69dd"),c=a("f596"),u=a("d81c8"),d={name:"PickCounty",components:{loader:c["a"]},props:["id"],data(){return{cntyNames:["Anderson","Andrews","Angelina","Aransas","Archer","Armstrong","Atascosa","Austin","Bailey","Bandera","Bastrop","Baylor","Bee","Bell","Bexar","Blanco","Borden","Bosque","Bowie","Brazoria","Brazos","Brewster","Briscoe","Brooks","Brown","Burleson","Burnet","Caldwell","Calhoun","Callahan","Cameron","Camp","Carson","Cass","Castro","Chambers","Cherokee","Childress","Clay","Cochran","Coke","Coleman","Collin","Collingsworth","Colorado","Comal","Comanche","Concho","Cooke","Coryell","Cottle","Crane","Crockett","Crosby","Culberson","Dallam","Dallas","Dawson","De Witt","Deaf Smith","Delta","Denton","Dickens","Dimmit","Donley","Duval","Eastland","Ector","Edwards","El Paso","Ellis","Erath","Falls","Fannin","Fayette","Fisher","Floyd","Foard","Fort Bend","Franklin","Freestone","Frio","Gaines","Galveston","Garza","Gillespie","Glasscock","Goliad","Gonzales","Gray","Grayson","Gregg","Grimes","Guadalupe","Hale","Hall","Hamilton","Hansford","Hardeman","Hardin","Harris","Harrison","Hartley","Haskell","Hays","Hemphill","Henderson","Hidalgo","Hill","Hockley","Hood","Hopkins","Houston","Howard","Hudspeth","Hunt","Hutchinson","Irion","Jack","Jackson","Jasper","Jeff Davis","Jefferson","Jim Hogg","Jim Wells","Johnson","Jones","Karnes","Kaufman","Kendall","Kenedy","Kent","Kerr","Kimble","King","Kinney","Kleberg","Knox","La Salle","Lamar","Lamb","Lampasas","Lavaca","Lee","Leon","Liberty","Limestone","Lipscomb","Live Oak","Llano","Loving","Lubbock","Lynn","Madison","Marion","Martin","Mason","Matagorda","Maverick","McCulloch","McLennan","McMullen","Medina","Menard","Midland","Milam","Mills","Mitchell","Montague","Montgomery","Moore","Morris","Motley","Nacogdoches","Navarro","Newton","Nolan","Nueces","Ochiltree","Oldham","Orange","Palo Pinto","Panola","Parker","Parmer","Pecos","Polk","Potter","Presidio","Rains","Randall","Reagan","Real","Red River","Reeves","Refugio","Roberts","Robertson","Rockwall","Runnels","Rusk","Sabine","San Augustine","San Jacinto","San Patricio","San Saba","Schleicher","Scurry","Shackelford","Shelby","Sherman","Smith","Somervell","Starr","Stephens","Sterling","Stonewall","Sutton","Tarrant","Taylor","Terrell","Terry","Throckmorton","Titus","Tom Green","Travis","Trinity","Tyler","Upshur","Upton","Uvalde","Val Verde","Van Zandt","Victoria","Walker","Waller","Ward","Washington","Webb","Wharton","Wheeler","Wichita","Wilbarger","Willacy","Williamson","Wilson","Winkler","Wise","Wood","Yoakum","Young","Zapata","Zavala","Swisher"],pickCounty:"",pick:!0,load:!1,isCertify:!1}},methods:{cancel(){u["default"].checkSignInStatus("https://txdot.maps.arcgis.com/sharing").then(()=>{u["default"].destroyCredentials(),this.$router.push("/login")}).catch(()=>{this.$router.push("/login")})},getCountyInfo(){this.pick=!1,this.load=!0;let e=Object.keys(i["a"][0]).find(e=>i["a"][0][e]===this.pickCounty),t=`CNTY_NBR = '${e}'`;const a=new l["a"];a.where=t,a.outFields=["*"];let n=o["countyOfficialInfo"].queryFeatures(a);n.then(t=>{this.countyNumber=e,this.countyName=this.pickCounty,this.judgeCntyOid=t.features[0].attributes["OBJECTID"],this.countyMiles=t.features[0].attributes["TOT_MLGE"],this.judgeNameSend=t.features[0].attributes["JUDGE_NM"].trim(),this.judgeEmailSend=t.features[0].attributes["JUDGE_EML"],this.isCertify="Y"===t.features[0].attributes["CERTFD"],this.loadData(this.pickCounty,e)})},async loadData(e,t){Object(s["b"])(e,t).then(()=>{this.$router.push("/map"),this.load=!1}).catch(e=>{console.log(e),this.$router.push({name:"error"})})}},computed:{countyName:{get(){return this.$store.state.cntyName},set(e){this.$store.commit("setCntyName",e)}},countyNumber:{get(){return this.$store.state.cntyNmbr},set(e){this.$store.commit("setCntyNmbr",e)}},countyMiles:{get(){return this.$store.state.cntyMiles},set(e){this.$store.commit("setCntyMiles",e)}},userName:{get(){return this.$store.state.username},set(e){this.$store.commit("setUserName",e)}},judgeNameSend:{get(){return this.$store.state.judgeName},set(e){this.$store.commit("setJudgeName",e)}},judgeEmailSend:{get(){return this.$store.state.judgeEmail},set(e){this.$store.commit("setJudgeEmail",e)}},judgeCntyOid:{get(){return this.$store.state.judgeObjectId},set(e){this.$store.commit("setJudgeObjectId",e)}}}},h=d,m=(a("dbbb"),a("2877")),y=Object(m["a"])(h,n,r,!1,null,"40ca8b7c",null);t["default"]=y.exports},dbbb:function(e,t,a){"use strict";a("0f53")},f0ca:function(e,t,a){e.exports=a.p+"img/TxDOT Logo Vertical RGB.89ed01f7.svg"},f596:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-progress-circular",{staticStyle:{top:"400px"},attrs:{indeterminate:"",color:"primary"}})},r=[],o={name:"loader"},s=o,i=a("2877"),l=Object(i["a"])(s,n,r,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=PickCounty.79226b1e.js.map