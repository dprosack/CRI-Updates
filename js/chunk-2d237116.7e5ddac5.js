(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237116"],{fa16:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return y}));var n=r("a4ee"),i=r("ce50"),a=r("b2b2"),s=r("59b2"),o=(r("b50f"),r("c120"),r("cea0"),r("d386")),c=r("2edc"),l=r("189c6"),d=r("45a5");function u(e,t){if(Object(a["k"])(e)&&Object(a["k"])(t))return null;const r={};return Object(a["l"])(t)&&(r.geometry=t.toJSON()),Object(a["l"])(e)&&(r.where=e),r}let p=class extends l["default"]{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",()=>this._update())])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new i["a"]("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),n=this;return{remove(){r.remove(),"data-received"===e&&(n._proxy.closed||n.hasEventListener("data-received")||n._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new i["a"]("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then(e=>{const t=c["default"].fromJSON(e);return t.features.forEach(e=>{e.layer=this.layer,e.sourceLayer=this.layer}),t})}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(u(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map(e=>e.toJSON()),n=Object(d["b"])(e.geometryType),i=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:n,objectIdField:t,timeInfo:i,source:this.layer.parsedUrl,serviceFilter:u(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};Object(n["a"])([Object(s["b"])()],p.prototype,"errorString",void 0),Object(n["a"])([Object(s["b"])({readOnly:!0})],p.prototype,"connectionError",null),Object(n["a"])([Object(s["b"])()],p.prototype,"connectionStatus",void 0),p=Object(n["a"])([Object(o["a"])("esri.views.2d.layers.StreamLayerView2D")],p);const y=p}}]);
//# sourceMappingURL=chunk-2d237116.7e5ddac5.js.map