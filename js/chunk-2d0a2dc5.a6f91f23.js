(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a2dc5"],{"005d":function(e,r,n){"use strict";n.r(r),n.d(r,"clearBoundingBoxCache",(function(){return l})),n.d(r,"computeIconLayerResourceSize",(function(){return b})),n.d(r,"computeLayerResourceSize",(function(){return y})),n.d(r,"computeLayerSize",(function(){return d})),n.d(r,"computeObjectLayerResourceSize",(function(){return m}));var t=n("2eab"),o=n("ce50"),i=n("d7f2"),c=n("b2b2"),u=n("4261"),s=n("af3d");let a=f();function f(){return new i["a"](50)}function l(){a=f()}function y(e,r){if("icon"===e.type)return b(e,r);if("object"===e.type)return m(e,r);throw new o["a"]("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function d(e,r){if("icon"===e.type)return h(e,r);if("object"===e.type)return w(e,r);throw new o["a"]("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function b(e,r){if(e.resource.href)return p(e.resource.href).then(e=>[e.width,e.height]);if(e.resource.primitive)return Object(c["l"])(r)?[r,r]:[256,256];throw new o["a"]("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function h(e,r){return b(e,r).then(r=>{if(null==e.size)return r;const n=r[0]/r[1];return n>1?[e.size,e.size/n]:[e.size*n,e.size]})}function p(e){return Object(t["default"])(e,{responseType:"image"}).then(e=>e.data)}function m(e,r){return v(e,r).then(e=>Object(u["z"])(e))}async function w(e,r){const n=await m(e,r);return Object(s["d"])(n,e)}async function v(e,r){if(!e.isPrimitive){const r=e.resource.href,t=a.get(r);if(void 0!==t)return Promise.resolve(t);const o=await Promise.all([n.e("chunk-4e7277d5"),n.e("chunk-3659ce29"),n.e("chunk-3847c0de")]).then(n.bind(null,"94a6")),i=await o.fetch(r,{disableTextures:!0});return a.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let t=null;if(e.resource&&e.resource.primitive&&(t=Object(u["f"])(Object(s["c"])(e.resource.primitive)),Object(c["l"])(r)))for(let n=0;n<t.length;n++)t[n]*=r;return t?Promise.resolve(t):Promise.reject(new o["a"]("symbol:invalid-resource","The symbol does not have a valid resource"))}}}]);
//# sourceMappingURL=chunk-2d0a2dc5.a6f91f23.js.map