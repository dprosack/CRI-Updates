(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PickCounty"],{"132c":function(e,t,a){},9708:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-dialog",{staticStyle:{"border-radius":"0%"},attrs:{persistent:"","max-width":"550"},model:{value:e.pick,callback:function(t){e.pick=t},expression:"pick"}},[a("v-card",{staticStyle:{"border-radius":"0%"}},[a("v-card-title",{staticClass:"surfaceTitle"},[a("v-card-text",{staticStyle:{bottom:"120px",right:"10px",position:"absolute","font-size":"15px","text-align":"right",color:"white"}},[e._v("USERNAME: "),a("b",[e._v(e._s(e.userName))])])],1),a("v-card-text",{staticStyle:{color:"black","text-align":"left",top:"30px"}},[e._v(" Your username does not specify a county. Please a select a county to enter the County Road Inventory App. ")]),a("v-autocomplete",{staticStyle:{width:"fit-content",left:"10rem",bottom:"10px"},attrs:{items:e.cntyNames,placeholder:"County Name"},on:{change:function(t){return e.getUserName()}},model:{value:e.pickCounty,callback:function(t){e.pickCounty=t},expression:"pickCounty"}})],1)],1),e.load?a("loader"):e._e()],1)},o=[],r=a("1da1"),s=(a("96cf"),a("7db0"),a("d3b7"),a("b64b"),a("99af"),a("3514")),i=a("2316"),l=a("1baa"),c=a("69dd"),u=a("f596"),d={name:"PickCounty",components:{loader:u["a"]},props:["id"],data:function(){return{cntyNames:["Anderson","Andrews","Angelina","Aransas","Archer","Armstrong","Atascosa","Austin","Bailey","Bandera","Bastrop","Baylor","Bee","Bell","Bexar","Blanco","Borden","Bosque","Bowie","Brazoria","Brazos","Brewster","Briscoe","Brooks","Brown","Burleson","Burnet","Caldwell","Calhoun","Callahan","Cameron","Camp","Carson","Cass","Castro","Chambers","Cherokee","Childress","Clay","Cochran","Coke","Coleman","Collin","Collingsworth","Colorado","Comal","Comanche","Concho","Cooke","Coryell","Cottle","Crane","Crockett","Crosby","Culberson","Dallam","Dallas","Dawson","De Witt","Deaf Smith","Delta","Denton","Dickens","Dimmit","Donley","Duval","Eastland","Ector","Edwards","El Paso","Ellis","Erath","Falls","Fannin","Fayette","Fisher","Floyd","Foard","Fort Bend","Franklin","Freestone","Frio","Gaines","Galveston","Garza","Gillespie","Glasscock","Goliad","Gonzales","Gray","Grayson","Gregg","Grimes","Guadalupe","Hale","Hall","Hamilton","Hansford","Hardeman","Hardin","Harris","Harrison","Hartley","Haskell","Hays","Hemphill","Henderson","Hidalgo","Hill","Hockley","Hood","Hopkins","Houston","Howard","Hudspeth","Hunt","Hutchinson","Irion","Jack","Jackson","Jasper","Jeff Davis","Jefferson","Jim Hogg","Jim Wells","Johnson","Jones","Karnes","Kaufman","Kendall","Kenedy","Kent","Kerr","Kimble","King","Kinney","Kleberg","Knox","La Salle","Lamar","Lamb","Lampasas","Lavaca","Lee","Leon","Liberty","Limestone","Lipscomb","Live Oak","Llano","Loving","Lubbock","Lynn","Madison","Marion","Martin","Mason","Matagorda","Maverick","McCulloch","McLennan","McMullen","Medina","Menard","Midland","Milam","Mills","Mitchell","Montague","Montgomery","Moore","Morris","Motley","Nacogdoches","Navarro","Newton","Nolan","Nueces","Ochiltree","Oldham","Orange","Palo Pinto","Panola","Parker","Parmer","Pecos","Polk","Potter","Presidio","Rains","Randall","Reagan","Real","Red River","Reeves","Refugio","Roberts","Robertson","Rockwall","Runnels","Rusk","Sabine","San Augustine","San Jacinto","San Patricio","San Saba","Schleicher","Scurry","Shackelford","Shelby","Sherman","Smith","Somervell","Starr","Stephens","Sterling","Stonewall","Sutton","Tarrant","Taylor","Terrell","Terry","Throckmorton","Titus","Tom Green","Travis","Trinity","Tyler","Upshur","Upton","Uvalde","Val Verde","Van Zandt","Victoria","Walker","Waller","Ward","Washington","Webb","Wharton","Wheeler","Wichita","Wilbarger","Willacy","Williamson","Wilson","Winkler","Wise","Wood","Yoakum","Young","Zapata","Zavala","Swisher"],pickCounty:"",pick:!0,load:!1}},methods:{getUserName:function(){var e=this;console.log("autocopmplete"),this.pick=!1,this.load=!0;var t=Object.keys(l["a"][0]).find((function(t){return l["a"][0][t]===e.pickCounty})),a="County_NBR = '".concat(t,"'"),n=new c["a"];n.where=a,n.outFields=["*"];var o=s["countyOfficialInfo"].queryFeatures(n);o.then((function(a){console.log(a,a.features[0].attributes["Total_Mileage"],t),e.countyNumber=t,e.countyName=e.pickCounty,e.countyMiles=a.features[0].attributes["Total_Mileage"],e.goToMap(e.pickCounty,e.getCountyNbr)}))},goToMap:function(e,t){var a=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var o,r,l,u,d,m,y;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(i["n"])();case 2:for(l in o=n.sent,r=[],o.features)null!==o.features[l].attributes&&(u=o.features[l].attributes.objectid||o.features[l].attributes.OBJECTID,r.push(u));return console.log(r),s["featLayer"].definitionExpression=r.length?"OBJECTID not in (".concat(r,") and CNTY_TYPE_NM = '").concat(e,"'"):"CNTY_TYPE_NM = '".concat(e,"'"),console.log(t),s["txCounties"].definitionExpression="CNTY_NM='".concat(e,"'"),d=new c["a"],d.where="CNTY_NM = '".concat(e,"'"),d.outFields=["*"],d.returnGeometry=!0,m=s["txCounties"].queryFeatures(d),n.next=16,m;case 16:y=n.sent,s["view"].goTo({target:y.features[0].geometry}),console.log(s["viewPoint"]),a.$router.push("/map"),a.load=!1;case 21:case"end":return n.stop()}}),n)})))()}},computed:{countyName:{get:function(){return this.$store.state.cntyName},set:function(e){this.$store.commit("setCntyName",e)}},countyNumber:{get:function(){return this.$store.state.cntyNmbr},set:function(e){console.log(e),this.$store.commit("setCntyNmbr",e)}},countyMiles:{get:function(){return this.$store.state.cntyMiles},set:function(e){this.$store.commit("setCntyMiles",e)}},userName:{get:function(){return this.$store.state.username},set:function(e){this.$store.commit("setUserName",e)}}}},m=d,y=(a("e18d"),a("2877")),h=Object(y["a"])(m,n,o,!1,null,"d8352932",null);t["default"]=h.exports},b64b:function(e,t,a){var n=a("23e7"),o=a("7b0b"),r=a("df75"),s=a("d039"),i=s((function(){r(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(e){return r(o(e))}})},e18d:function(e,t,a){"use strict";a("132c")},f596:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-progress-circular",{staticStyle:{top:"400px"},attrs:{indeterminate:"",color:"primary"}})},o=[],r={name:"loader"},s=r,i=a("2877"),l=Object(i["a"])(s,n,o,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=PickCounty.62ce59ba.js.map