(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-703d78b0"],{"2dca":function(e,t,n){"use strict";n.r(t),n.d(t,"FeatureCollectionSnappingSource",(function(){return u}));var r=n("a4ee"),c=n("fc29"),o=n("b2b2"),a=n("59b2"),i=(n("b50f"),n("c120"),n("cea0"),n("d386")),s=n("59fd");let u=class extends c["a"]{constructor(e){super(e)}get availability(){return 1}refresh(){}async fetchCandidates(e,t){const n=this.layerSource.layer.source;return n.querySnapping?(await n.querySnapping({distance:e.distance,point:e.coordinateHelper.vectorToPoint(e.point).toJSON(),types:e.types,query:Object(o["l"])(e.filter)?e.filter.createQuery().toJSON():{where:"1=1"}},{signal:t})).candidates.map(t=>Object(s["a"])(t,e.coordinateHelper)):[]}};Object(r["a"])([Object(a["b"])({constructOnly:!0})],u.prototype,"layerSource",void 0),Object(r["a"])([Object(a["b"])({readOnly:!0})],u.prototype,"availability",null),u=Object(r["a"])([Object(i["a"])("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],u)},"59fd":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("dac3"),c=n("43e0"),o=n("92af"),a=n("b63c");class i extends o["a"]{constructor(e){super({...e,constraint:new c["d"](e.coordinateHelper,e.targetPoint)})}get hints(){return[new a["a"](this.targetPoint)]}}function s(e,t){switch(e.type){case"edge":return new r["a"]({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId});case"vertex":return new i({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId})}}},b63c:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("6706"),c=n("7dcb");class o extends c["a"]{constructor(e){super(),this.point=e}equals(e){return e instanceof o&&Object(r["d"])(this.point,e.point)}}}}]);
//# sourceMappingURL=chunk-703d78b0.504a3c19.js.map