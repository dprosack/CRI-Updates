(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-232cb488"],{"0613":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));const n=2.1},"087c":function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s}));var n=r("a21b"),o=r("1038");function s(t,e=o["d"]){return"number"==typeof t?e(t):Object(n["i"])(t)||Object(n["k"])(t)?new Uint32Array(t):t}function i(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2)}else{let e=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=t[o],s=t[o+1],i=t[o+2];n[e++]=r,n[e++]=s,n[e++]=i}else{const r=t[o+1],s=t[o],i=t[o+2];n[e++]=r,n[e++]=s,n[e++]=i}}return n}function c(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}{const e=t[0];let o=t[1],s=0;for(let i=0;i<r;++i){const r=t[i+2];n[s++]=e,n[s++]=o,n[s++]=r,o=r}return n}}},"0fc4":function(t,e,r){"use strict";function n(){return[0,0,0,0]}function o(t){return[t[0],t[1],t[2],t[3]]}function s(t,e,r,n){return[t,e,r,n]}function i(t){const e=n(),r=Math.min(4,t.length);for(let n=0;n<r;++n)e[n]=t[n];return e}function c(t,e){return new Float64Array(t,e,4)}function a(){return n()}function u(){return s(1,1,1,1)}function f(){return s(1,0,0,0)}function l(){return s(0,1,0,0)}function d(){return s(0,0,1,0)}function b(){return s(0,0,0,1)}r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return p})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return o})),r.d(e,"e",(function(){return n})),r.d(e,"f",(function(){return i})),r.d(e,"g",(function(){return s}));const p=a(),h=u(),m=f(),O=l(),y=d(),j=b();Object.freeze({__proto__:null,create:n,clone:o,fromValues:s,fromArray:i,createView:c,zeros:a,ones:u,unitX:f,unitY:l,unitZ:d,unitW:b,ZEROS:p,ONES:h,UNIT_X:m,UNIT_Y:O,UNIT_Z:y,UNIT_W:j})},1038:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return h})),r.d(e,"d",(function(){return b})),r.d(e,"e",(function(){return p}));var n=r("e431"),o=r("0b2d"),s=r("2119"),i=(r("3349"),r("bd7e"));r("7361");function c(t,e,r){return Object(n["j"])(a,e,t),Object(n["j"])(u,r,t),Object(n["p"])(Object(n["g"])(a,a,u))/2}new s["a"](i["d"]),new s["a"](()=>({p0:null,p1:null,p2:null}));const a=Object(o["f"])(),u=Object(o["f"])();let f=(()=>{const t=new Uint32Array(131072);for(let e=0;e<t.length;++e)t[e]=e;return t})();const l=new Uint16Array([0]),d=(()=>{const t=new Uint16Array(65536);for(let e=0;e<t.length;++e)t[e]=e;return t})();function b(t){if(1===t)return l;if(t<d.length)return new Uint16Array(d.buffer,0,t);if(t>f.length){const e=Math.max(2*f.length,t);f=new Uint32Array(e);for(let t=0;t<f.length;t++)f[t]=t}return new Uint32Array(f.buffer,0,t)}function p(t){if(1===t)return new Uint16Array(l);if(t<d.length)return new Uint16Array(d.slice(0,t));if(t>f.length){const e=new Uint32Array(t);for(let t=0;t<e.length;t++)e[t]=t;return e}return new Uint32Array(f.slice(0,t))}function h(t,e,r){if(!t)return!1;const{size:o,data:s}=t;Object(n["w"])(r,0,0,0),Object(n["w"])(g,0,0,0);let i=0,a=0;for(let u=0;u<e.length-2;u+=3){const t=e[u+0]*o,f=e[u+1]*o,l=e[u+2]*o;Object(n["w"])(y,s[t+0],s[t+1],s[t+2]),Object(n["w"])(j,s[f+0],s[f+1],s[f+2]),Object(n["w"])(w,s[l+0],s[l+1],s[l+2]);const d=c(y,j,w);d?(Object(n["f"])(y,y,j),Object(n["f"])(y,y,w),Object(n["e"])(y,y,1/3*d),Object(n["f"])(r,r,y),i+=d):(Object(n["f"])(g,g,y),Object(n["f"])(g,g,j),Object(n["f"])(g,g,w),a+=3)}return(0!==a||0!==i)&&(0!==i?(Object(n["e"])(r,r,1/i),!0):0!==a&&(Object(n["e"])(r,g,1/a),!0))}function m(t,e,r){if(!t||!e)return!1;const{size:o,data:s}=t;Object(n["w"])(r,0,0,0);let i=-1,c=0;for(let n=0;n<e.length;n++){const t=e[n]*o;i!==t&&(r[0]+=s[t+0],r[1]+=s[t+1],r[2]+=s[t+2],c++),i=t}return c>1&&Object(n["e"])(r,r,1/c),c>0}function O(t,e,r,o){if(!t)return!1;const{size:s,data:i}=t;Object(n["w"])(o,0,0,0),Object(n["w"])(g,0,0,0);let c=0,a=0;const u=e?e.length-1:i.length/s-1,f=u+(r?2:0);for(let l=0;l<f;l+=2){const t=l<u?l:u,r=l<u?l+1:0,f=(e?e[t]:t)*s,d=(e?e[r]:r)*s;y[0]=i[f+0],y[1]=i[f+1],y[2]=i[f+2],j[0]=i[d+0],j[1]=i[d+1],j[2]=i[d+2],Object(n["e"])(y,Object(n["f"])(y,y,j),.5);const b=Object(n["n"])(y,j);b>0?(Object(n["f"])(o,o,Object(n["e"])(y,y,b)),c+=b):(Object(n["f"])(g,g,y),a++)}return 0!==c?(Object(n["e"])(o,o,1/c),!0):0!==a&&(Object(n["e"])(o,g,1/a),!0)}const y=Object(o["f"])(),j=Object(o["f"])(),w=Object(o["f"])(),g=Object(o["f"])()},"1c20":function(t,e,r){"use strict";function n(t,e,r){const n=t.typedBuffer,o=t.typedBufferStride,s=e.typedBuffer,i=e.typedBufferStride,c=r?r.count:e.count;let a=(r&&r.dstIndex?r.dstIndex:0)*o,u=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<c;++f)n[a]=s[u],n[a+1]=s[u+1],n[a+2]=s[u+2],n[a+3]=s[u+3],a+=o,u+=i}function o(t,e,r,n,o,s){var i,c;const a=t.typedBuffer,u=t.typedBufferStride,f=null!=(i=null==s?void 0:s.count)?i:t.count;let l=(null!=(c=null==s?void 0:s.dstIndex)?c:0)*u;for(let d=0;d<f;++d)a[l]=e,a[l+1]=r,a[l+2]=n,a[l+3]=o,l+=u}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));Object.freeze({__proto__:null,copy:n,fill:o})},2119:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("2ab7");class o{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this.grow()}get(){return 0===this._itemsPtr&&Object(n["a"])(()=>this.reset()),this._itemsPtr===this._items.length&&this.grow(),this._items[this._itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*s);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,s));t++)this._items.push(this.allocator())}}const s=1024},"2b60":function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("2eab"),o=r("792b"),s=r("ce50"),i=r("b2b2"),c=r("f4cc"),a=r("e041");class u{constructor(t){this.streamDataRequester=t}async loadJSON(t,e){return this.load("json",t,e)}async loadBinary(t,e){return Object(a["u"])(t)?(Object(c["u"])(e),Object(a["j"])(t)):this.load("binary",t,e)}async loadImage(t,e){return this.load("image",t,e)}async load(t,e,r){if(Object(i["k"])(this.streamDataRequester))return(await Object(n["default"])(e,{responseType:f[t]})).data;const a=await Object(o["c"])(this.streamDataRequester.request(e,t,r));if(!0===a.ok)return a.value;throw Object(c["t"])(a.error),new s["a"]("","Request for resource failed: "+a.error)}}const f={image:"image",binary:"array-buffer",json:"json"}},"3c3b":function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));var n=r("b2b2"),o=r("afe1"),s=r("ce50"),i=r("e92d");const c=i["a"].getLogger("esri.views.3d.glTF");class a{error(t){throw new s["a"]("gltf-loader-error",t)}errorUnsupported(t){throw new s["a"]("gltf-loader-unsupported-feature",t)}errorUnsupportedIf(t,e){t&&this.errorUnsupported(e)}assert(t,e){t||this.error(e)}warn(t){c.warn(t)}warnUnsupported(t){this.warn("[Unsupported Feature] "+t)}warnUnsupportedIf(t,e){t&&this.warnUnsupported(e)}}function u(t={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...t}}function f(t,e={}){return{data:t,parameters:{wrap:{s:10497,t:10497,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}var l=r("6c97"),d=r("28eb"),b=r("e041"),p=r("549a"),h=r("d791"),m=r("04f0"),O=r("b139"),y=r("8190"),j=r("7cfb");class w{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const e=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,e,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}const g={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},x={pbrMetallicRoughness:g,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},T={ESRI_externalColorMixMode:"tint"},v=(t={})=>{const e={...g,...t.pbrMetallicRoughness},r=S({...T,...t.extras});return{...x,...t,pbrMetallicRoughness:e,extras:r}};function S(t){switch(t.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(l["a"])(t.ESRI_externalColorMixMode),t.ESRI_externalColorMixMode="tint"}return t}const _={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},C=t=>({..._,...t});function I(t){let e,r;return t.replace(/^(.*\/)?([^/]*)$/,(t,n,o)=>(e=n||"",r=o||"","")),{dirPart:e,filePart:r}}const B={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class A{constructor(t,e,r,n,o){this.context=t,this.errorContext=e,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=I(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),e.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),e.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),e.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(t,e,r,n){if(Object(b["u"])(r)){const n=Object(b["i"])(r);if("model/gltf-binary"!==n.mediaType)try{const o=JSON.parse(n.isBase64?atob(n.data):n.data);return new A(t,e,r,o)}catch{}const o=Object(b["j"])(r);if(A.isGLBData(o))return this.fromGLBData(t,e,r,o)}if(r.endsWith(".gltf")){const o=await t.loadJSON(r,n);return new A(t,e,r,o)}const o=await t.loadBinary(r,n);if(A.isGLBData(o))return this.fromGLBData(t,e,r,o);const s=await t.loadJSON(r,n);return new A(t,e,r,s)}static isGLBData(t){const e=new w(t);return e.remainingBytes()>=4&&e.readUint32()===B.MAGIC}static async fromGLBData(t,e,r,n){const o=await A.parseGLBData(e,n);return new A(t,e,r,o.json,o.binaryData)}static async parseGLBData(t,e){const r=new w(e);t.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();t.assert(n===B.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),t.assert(e.byteLength>=s,"GLB binary data is smaller than header specifies."),t.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,c,a=0;for(;r.remainingBytes()>=8;){const e=r.readUint32(),n=r.readUint32();0===a?(t.assert(n===B.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),t.assert(e>=0,"No JSON data found."),i=await P(r.readUint8Array(e))):1===a?(t.errorUnsupportedIf(n!==B.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),c=r.readUint8Array(e)):t.warnUnsupported("More than 2 GLB chunks detected. Skipping."),a+=1}return i||t.error("No GLB JSON chunk detected."),{json:i,binaryData:c}}async getBuffer(t,e){const r=this.json.buffers[t],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const o=await this.getBufferLoader(t,e);return n.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match."),o}async getBufferLoader(t,e){const r=this.bufferLoaders.get(t);if(r)return r;const n=this.json.buffers[t],o=this.context.loadBinary(this.resolveUri(n.uri),e).then(t=>new Uint8Array(t));return this.bufferLoaders.set(t,o),o}async getAccessor(t,e){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const n=this.json.accessors[t];r.errorUnsupportedIf(null==(null==n?void 0:n.bufferView),"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(n.type in["MAT2","MAT3","MAT4"],`AttributeType ${n.type} is not supported`);const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,e),i=R[n.type],c=E[n.componentType],a=i*c,u=o.byteStride||a;return{raw:s.buffer,byteStride:u,byteOffset:s.byteOffset+(o.byteOffset||0)+(n.byteOffset||0),entryCount:n.count,isDenselyPacked:u===a,componentCount:i,componentByteSize:c,componentType:n.componentType,min:n.min,max:n.max,normalized:!!n.normalized}}async getIndexData(t,e){if(null==t.indices)return null;const r=await this.getAccessor(t.indices,e);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Object(j["a"])(this.wrapAccessor(y["l"],r));case 5123:return Object(j["a"])(this.wrapAccessor(y["j"],r));case 5125:return Object(j["a"])(this.wrapAccessor(y["k"],r))}}async getPositionData(t,e){const r=this.errorContext;r.errorUnsupportedIf(null==t.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(t.attributes.POSITION,e);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+D[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(y["u"],n)}async getNormalData(t,e){const r=this.errorContext;r.assert(null!=t.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(t.attributes.NORMAL,e);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+D[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(y["u"],n)}async getTangentData(t,e){const r=this.errorContext;r.assert(null!=t.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(t.attributes.TANGENT,e);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+D[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new y["C"](n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(t,e){const r=this.errorContext;r.assert(null!=t.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(t.attributes.TEXCOORD_0,e);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(y["m"],n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),L(n))}async getVertexColors(t,e){const r=this.errorContext;r.assert(null!=t.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(t.attributes.COLOR_0,e);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(y["C"],n);if(5121===n.componentType)return this.wrapAccessor(y["J"],n);if(5123===n.componentType)return this.wrapAccessor(y["H"],n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(y["u"],n);if(5121===n.componentType)return this.wrapAccessor(y["B"],n);if(5123===n.componentType)return this.wrapAccessor(y["z"],n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+D[n.componentType])}hasPositions(t){return void 0!==t.attributes.POSITION}hasNormals(t){return void 0!==t.attributes.NORMAL}hasVertexColors(t){return void 0!==t.attributes.COLOR_0}hasTextureCoordinates(t){return void 0!==t.attributes.TEXCOORD_0}hasTangents(t){return void 0!==t.attributes.TANGENT}async getMaterial(t,e,r){let n=this.materialCache.get(t.material);if(!n){const o=null!=t.material?v(this.json.materials[t.material]):v(),s=o.pbrMetallicRoughness,i=this.hasVertexColors(t),c=this.getTexture(s.baseColorTexture,e),a=this.getTexture(o.normalTexture,e),u=r?this.getTexture(o.occlusionTexture,e):null,f=r?this.getTexture(o.emissiveTexture,e):null,l=r?this.getTexture(s.metallicRoughnessTexture,e):null,d=null!=t.material?t.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await c,normalTexture:await a,name:o.name,id:d,occlusionTexture:await u,emissiveTexture:await f,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await l,vertexColors:i,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return n}async getTexture(t,e){if(!t)return null;this.errorContext.errorUnsupportedIf(0!==(t.texCoord||0),"Only TEXCOORD with index 0 is supported.");const r=t.index,n=this.errorContext,o=this.json.textures[r],s=C(null!=o.sampler?this.json.samplers[o.sampler]:{});n.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source],c=await this.loadTextureImageData(r,o,e);return Object(d["b"])(this.textureCache,r,()=>{const t=t=>33071===t||33648===t||10497===t,e=t=>(n.error(`Unexpected TextureSampler WrapMode: ${t}. Using default REPEAT(10497).`),10497);return{data:c,wrapS:t(s.wrapS)?s.wrapS:e(s.wrapS),wrapT:t(s.wrapT)?s.wrapT:e(s.wrapT),minFilter:s.minFilter,name:i.name,id:r}})}getNodeTransform(t){if(void 0===t)return U;let e=this.nodeTransformCache.get(t);if(!e){const r=this.getNodeTransform(this.getNodeParent(t)),n=this.json.nodes[t];n.matrix?e=Object(h["n"])(Object(o["d"])(),r,n.matrix):n.translation||n.rotation||n.scale?(e=Object(o["c"])(r),n.translation&&Object(h["b"])(e,e,n.translation),n.rotation&&(N[3]=Object(m["b"])(N,n.rotation),Object(h["f"])(e,e,N[3],N)),n.scale&&Object(h["g"])(e,e,n.scale)):e=r,this.nodeTransformCache.set(t,e)}return e}wrapAccessor(t,e){return new t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}resolveUri(t){return Object(b["A"])(t,this.baseUri)}getNodeParent(t){return this.nodeParentMap.get(t)}checkVersionSupported(){const t=p["a"].parse(this.json.asset.version,"glTF");M.validate(t)}checkRequiredExtensionsSupported(){const t=this.json,e=this.errorContext;t.extensionsRequired&&0!==t.extensionsRequired.length&&e.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach((t,e)=>{t.children&&t.children.forEach(t=>{this.nodeParentMap.set(t,e)})})}async loadTextureImageData(t,e,r){const n=this.textureLoaders.get(t);if(n)return n;const o=this.createTextureLoader(e,r);return this.textureLoaders.set(t,o),o}async createTextureLoader(t,e){const r=this.json.images[t.source];if(r.uri)return this.context.loadImage(this.resolveUri(r.uri),e);const n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),n.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,e);return n.errorUnsupportedIf(null!=o.byteStride,"byteStride not supported for image buffer"),F(new Uint8Array(s.buffer,s.byteOffset+(o.byteOffset||0),o.byteLength),r.mimeType)}}const M=new p["a"](2,0,"glTF"),U=Object(h["u"])(Object(o["d"])(),Math.PI/2),N=Object(O["b"])(),R={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},E={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function L(t){switch(t.componentType){case 5120:return new y["q"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new y["t"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new y["o"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new y["r"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new y["s"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new y["m"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void Object(l["a"])(t.componentType)}}async function P(t){return new Promise((e,r)=>{const n=new Blob([t]),o=new FileReader;o.onload=()=>{const t=o.result;e(JSON.parse(t))},o.onerror=t=>{r(t)},o.readAsText(n)})}async function F(t,e){return new Promise((r,n)=>{const o=new Blob([t],{type:e}),s=URL.createObjectURL(o),i=new Image;i.addEventListener("load",()=>{URL.revokeObjectURL(s),"decode"in i?i.decode().then(()=>r(i),()=>r(i)):r(i)}),i.addEventListener("error",t=>{URL.revokeObjectURL(s),n(t)}),i.src=s})}const D={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let G=0;async function k(t,e,r={},s=!0){const i=await A.load(t,J,e,r),c="gltf_"+G++,a={lods:[],materials:new Map,textures:new Map,meta:z(i)},u=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type),f=new Map;await V(i,async(t,e,u,l)=>{var d;const b=null!=(d=f.get(u))?d:0;f.set(u,b+1);const p=void 0!==t.mode?t.mode:4,h=4===p||5===p||6===p?p:null;if(Object(n["k"])(h))return void J.warnUnsupported("Unsupported primitive mode ("+X[p]+"). Skipping primitive.");if(!i.hasPositions(t))return void J.warn("Skipping primitive without POSITION vertex attribute.");const m=i.getPositionData(t,r),O=i.getMaterial(t,r,s),y=i.hasNormals(t)?i.getNormalData(t,r):null,j=i.hasTangents(t)?i.getTangentData(t,r):null,w=i.hasTextureCoordinates(t)?i.getTextureCoordinates(t,r):null,g=i.hasVertexColors(t)?i.getVertexColors(t,r):null,x=i.getIndexData(t,r),T={transform:Object(o["c"])(e),attributes:{position:await m,normal:y?await y:null,texCoord0:w?await w:null,color:g?await g:null,tangent:j?await j:null},indices:await x,primitiveType:h,material:q(a,await O,c)};let v=null;Object(n["l"])(a.meta)&&Object(n["l"])(a.meta.ESRI_lod)&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(v=a.meta.ESRI_lod.thresholds[u]),a.lods[u]=a.lods[u]||{parts:[],name:l,lodThreshold:v},a.lods[u].parts[b]=T});for(const n of a.lods)n.parts=n.parts.filter(t=>!!t);return{model:a,meta:{isEsriSymbolResource:u,uri:i.uri},customMeta:{}}}function z(t){const e=t.json;let r=null;return e.nodes.forEach(t=>{const e=t.extras;Object(n["l"])(e)&&(e.ESRI_proxyEllipsoid||e.ESRI_lod)&&(r=e)}),r}async function V(t,e){const r=t.json,n=r.scenes[r.scene||0].nodes,o=n.length>1,s=[];for(const c of n){const t=r.nodes[c];s.push(i(c,0)),$(t)&&!o&&t.extensions.MSFT_lod.ids.forEach((t,e)=>i(t,e+1))}async function i(n,o){const c=r.nodes[n],a=t.getNodeTransform(n);if(J.warnUnsupportedIf(null!=c.weights,"Morph targets are not supported."),null!=c.mesh){const t=r.meshes[c.mesh];for(const r of t.primitives)s.push(e(r,a,o,t.name))}for(const t of c.children||[])s.push(i(t,o))}await Promise.all(s)}function $(t){return t.extensions&&t.extensions.MSFT_lod&&Array.isArray(t.extensions.MSFT_lod.ids)}function q(t,e,r){const n=e=>{const n=`${r}_tex_${e&&e.id}${e&&e.name?"_"+e.name:""}`;if(e&&!t.textures.has(n)){const r=f(e.data,{wrap:{s:e.wrapS,t:e.wrapT},mipmap:H.some(t=>t===e.minFilter),noUnpackFlip:!0});t.textures.set(n,r)}return n},o=`${r}_mat_${e.id}_${e.name}`;if(!t.materials.has(o)){const r=u({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?n(e.colorTexture):void 0,textureNormal:e.normalTexture?n(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?n(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?n(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?n(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor});t.materials.set(o,r)}return o}const J=new a,H=[9987,9985],X=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},"549a":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("ce50");class o{constructor(t,e,r=""){this.major=t,this.minor=e,this._context=r}lessThan(t,e){return this.major<t||t===this.major&&this.minor<e}since(t,e){return!this.lessThan(t,e)}validate(t){if(this.major!==t.major){const e=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n["a"](e+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:t})}}clone(){return new o(this.major,this.minor,this._context)}static parse(t,e=""){const[r,s]=t.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new n["a"]((e&&e+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!s||!s.match||!s.match(i))throw new n["a"]((e&&e+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const c=parseInt(r,10),a=parseInt(s,10);return new o(c,a,e)}}},7361:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return b})),r.d(e,"e",(function(){return p}));var n=r("2ab7"),o=r("dae5"),s=r("afe1"),i=r("b139"),c=r("02f1"),a=r("0b2d"),u=r("0fc4");class f{constructor(t,e,r){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this.itemByteSize)}get(){0===this._itemsPtr&&Object(n["a"])(()=>this.reset());const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=l){return new f(16,c["c"],t)}static createVec3f64(t=l){return new f(24,a["e"],t)}static createVec4f64(t=l){return new f(32,u["c"],t)}static createMat3f64(t=l){return new f(72,o["a"],t)}static createMat4f64(t=l){return new f(128,s["b"],t)}static createQuatf64(t=l){return new f(32,i["d"],t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const l=4096,d=f.createVec2f64(),b=f.createVec3f64(),p=f.createVec4f64(),h=(f.createMat3f64(),f.createMat4f64()),m=f.createQuatf64()},"7cfb":function(t,e,r){"use strict";function n(t,e,r){const n=t.typedBuffer,o=t.typedBufferStride,s=e.typedBuffer,i=e.typedBufferStride,c=r?r.count:e.count;let a=(r&&r.dstIndex?r.dstIndex:0)*o,u=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<c;++f)n[a]=s[u],a+=o,u+=i}function o(t,e){const r=t.count;e||(e=new t.TypedArrayConstructor(r));for(let n=0;n<r;n++)e[n]=t.get(n);return e}r.d(e,"a",(function(){return o}));Object.freeze({__proto__:null,copy:n,makeDense:o})},"7e2d":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("c6ac");function o(t,e,r){const n=t.typedBuffer,o=t.typedBufferStride,s=e.typedBuffer,i=e.typedBufferStride,c=r?r.count:e.count;let a=(r&&r.dstIndex?r.dstIndex:0)*o,u=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<c;++f){for(let t=0;t<9;++t)n[a+t]=s[u+t];a+=o,u+=i}}Object.freeze({__proto__:null,copy:o});function s(t,e,r){const n=t.typedBuffer,o=t.typedBufferStride,s=e.typedBuffer,i=e.typedBufferStride,c=r?r.count:e.count;let a=(r&&r.dstIndex?r.dstIndex:0)*o,u=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<c;++f){for(let t=0;t<16;++t)n[a+t]=s[u+t];a+=o,u+=i}}Object.freeze({__proto__:null,copy:s});r("7cfb"),r("dc56"),r("4c96"),r("1c20");function i(t,e){return new t(new ArrayBuffer(e*t.ElementCount*Object(n["a"])(t.ElementType)))}},bd7e:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"b",(function(){return m})),r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return a})),r.d(e,"e",(function(){return b})),r.d(e,"f",(function(){return d})),r.d(e,"g",(function(){return l})),r.d(e,"h",(function(){return p})),r.d(e,"i",(function(){return h}));var n=r("38a4"),o=r("2119"),s=r("e431"),i=r("0b2d"),c=r("7361");function a(t){return t?{origin:Object(i["d"])(t.origin),vector:Object(i["d"])(t.vector)}:{origin:Object(i["f"])(),vector:Object(i["f"])()}}function u(t,e){const r=w.get();return r.origin=t,r.vector=e,r}function f(t,e=a()){return l(t.origin,t.vector,e)}function l(t,e,r=a()){return Object(s["k"])(r.origin,t),Object(s["k"])(r.vector,e),r}function d(t,e,r=a()){return Object(s["k"])(r.origin,t),Object(s["j"])(r.vector,e,t),r}function b(t,e){const r=Object(s["j"])(c["d"].get(),e,t.origin),o=Object(s["h"])(t.vector,r),i=Object(s["h"])(t.vector,t.vector),a=Object(n["d"])(o/i,0,1),u=Object(s["j"])(c["d"].get(),Object(s["e"])(c["d"].get(),t.vector,a),r);return Object(s["h"])(u,u)}function p(t,e,r){return Object(s["f"])(r,t.origin,Object(s["e"])(r,t.vector,e))}function h(t,e,r,o,i){const{vector:a,origin:u}=t,f=Object(s["j"])(c["d"].get(),e,u),l=Object(s["h"])(a,f)/Object(s["t"])(a);return Object(s["e"])(i,a,Object(n["d"])(l,r,o)),Object(s["f"])(i,i,t.origin)}function m(t,e){if(y(t,u(e.origin,e.direction),!1,j)){const{tA:e,pB:r,distance2:n}=j;if(e>=0&&e<=1)return n;if(e<0)return Object(s["l"])(t.origin,r);if(e>1)return Object(s["l"])(Object(s["f"])(c["d"].get(),t.origin,t.vector),r)}return null}function O(t,e,r){return!!y(t,e,!0,j)&&(Object(s["k"])(r,j.pA),!0)}function y(t,e,r,o){const i=1e-6,a=t.origin,u=Object(s["f"])(c["d"].get(),a,t.vector),f=e.origin,l=Object(s["f"])(c["d"].get(),f,e.vector),d=c["d"].get(),b=c["d"].get();if(d[0]=a[0]-f[0],d[1]=a[1]-f[1],d[2]=a[2]-f[2],b[0]=l[0]-f[0],b[1]=l[1]-f[1],b[2]=l[2]-f[2],Math.abs(b[0])<i&&Math.abs(b[1])<i&&Math.abs(b[2])<i)return!1;const p=c["d"].get();if(p[0]=u[0]-a[0],p[1]=u[1]-a[1],p[2]=u[2]-a[2],Math.abs(p[0])<i&&Math.abs(p[1])<i&&Math.abs(p[2])<i)return!1;const h=d[0]*b[0]+d[1]*b[1]+d[2]*b[2],m=b[0]*p[0]+b[1]*p[1]+b[2]*p[2],O=d[0]*p[0]+d[1]*p[1]+d[2]*p[2],y=b[0]*b[0]+b[1]*b[1]+b[2]*b[2],j=(p[0]*p[0]+p[1]*p[1]+p[2]*p[2])*y-m*m;if(Math.abs(j)<i)return!1;let w=(h*m-O*y)/j,g=(h+m*w)/y;r&&(w=Object(n["d"])(w,0,1),g=Object(n["d"])(g,0,1));const x=c["d"].get(),T=c["d"].get();return x[0]=a[0]+w*p[0],x[1]=a[1]+w*p[1],x[2]=a[2]+w*p[2],T[0]=f[0]+g*b[0],T[1]=f[1]+g*b[1],T[2]=f[2]+g*b[2],o.tA=w,o.tB=g,o.pA=x,o.pB=T,o.distance2=Object(s["l"])(x,T),!0}const j={tA:0,tB:0,pA:Object(i["f"])(),pB:Object(i["f"])(),distance2:0},w=new o["a"](()=>({origin:null,vector:null}))},c6ac:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return i}));r("c120");function n(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function o(t){switch(t){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function s(t){switch(t){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(t){switch(t){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},dc56:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return s}));var n=r("c6ac");function o(t,e,r){const n=t.typedBuffer,o=t.typedBufferStride,s=e.typedBuffer,i=e.typedBufferStride,c=r?r.count:e.count;let a=(r&&r.dstIndex?r.dstIndex:0)*o,u=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<c;++f)n[a]=s[u],n[a+1]=s[u+1],a+=o,u+=i}function s(t,e,r){const s=t.typedBuffer,i=t.typedBufferStride,c=e.typedBuffer,a=e.typedBufferStride,u=r?r.count:e.count;let f=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*a;if(Object(n["b"])(e.elementType)){const t=Object(n["d"])(e.elementType);if(Object(n["c"])(e.elementType))for(let e=0;e<u;++e)s[f]=Math.max(c[l]/t,-1),s[f+1]=Math.max(c[l+1]/t,-1),f+=i,l+=a;else for(let e=0;e<u;++e)s[f]=c[l]/t,s[f+1]=c[l+1]/t,f+=i,l+=a}else o(t,e,r);return t}function i(t,e,r,n){var o,s;const i=t.typedBuffer,c=t.typedBufferStride,a=null!=(o=null==n?void 0:n.count)?o:t.count;let u=(null!=(s=null==n?void 0:n.dstIndex)?s:0)*c;for(let f=0;f<a;++f)i[u]=e,i[u+1]=r,u+=c}Object.freeze({__proto__:null,copy:o,normalizeIntegerBuffer:s,fill:i})},dc7a:function(t,e,r){"use strict";r.r(e),r.d(e,"loadGLTFMesh",(function(){return I}));var n=r("9ef0"),o=r("2eab"),s=r("28eb"),i=r("b2b2"),c=r("1c92"),a=r("dae5"),u=r("0b2d"),f=r("0fc4"),l=r("f0ba"),d=r("83fa"),b=r("88da"),p=r("f5e7"),h=r("8190"),m=r("668b"),O=r("e4c1"),y=r("7e2d"),j=r("e9ba"),w=r("2b60"),g=r("3c3b"),x=r("087c"),T=r("1038"),v=r("0613"),S=r("4c96"),_=r("1c20"),C=r("dc56");async function I(t,e,r){const n=new w["a"](B(r)),o=(await Object(g["a"])(n,e,r,!0)).model,s=o.lods.shift(),c=new Map,a=new Map;o.textures.forEach((t,e)=>c.set(e,N(t))),o.materials.forEach((t,e)=>a.set(e,R(t,c)));const u=U(s);for(const i of u.parts)E(u,i,a);const{position:f,normal:l,tangent:d,color:b,texCoord0:h}=u.vertexAttributes,m={position:f.typedBuffer,normal:Object(i["l"])(l)?l.typedBuffer:null,tangent:Object(i["l"])(d)?d.typedBuffer:null,uv:Object(i["l"])(h)?h.typedBuffer:null,color:Object(i["l"])(b)?b.typedBuffer:null},O=Object(j["c"])(m,t,r);return{transform:O.transform,components:u.components,spatialReference:t.spatialReference,vertexAttributes:new p["c"]({position:O.vertexAttributes.position,normal:O.vertexAttributes.normal,tangent:O.vertexAttributes.tangent,color:m.color,uv:m.uv})}}function B(t){return null!=t&&t.resolveFile?{busy:!1,request:async(e,r,n)=>{const s=t.resolveFile(e),c="image"===r?"image":"binary"===r?"array-buffer":"json";return(await Object(o["default"])(s,{responseType:c,signal:Object(i["l"])(n)?n.signal:null})).data}}:null}function A(t,e){if(Object(i["k"])(t))return"-";const r=t.typedBuffer;return`${Object(s["b"])(e,r.buffer,()=>e.size)}/${r.byteOffset}/${r.byteLength}`}function M(t){return Object(i["l"])(t)?t.toString():"-"}function U(t){let e=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,o=new Map,i=[];for(const c of t.parts){const{attributes:{position:t,normal:a,color:u,tangent:f,texCoord0:l}}=c,d=`\n      ${A(t,n)}/\n      ${A(a,n)}/\n      ${A(u,n)}/\n      ${A(f,n)}/\n      ${A(l,n)}/\n      ${M(c.transform)}\n    `;let b=!1;const p=Object(s["b"])(o,d,()=>(b=!0,{start:e,length:t.count}));b&&(e+=t.count),a&&(r.normal=!0),u&&(r.color=!0),f&&(r.tangent=!0),l&&(r.texCoord0=!0),i.push({gltf:c,writeVertices:b,region:p})}return{vertexAttributes:{position:Object(y["a"])(h["v"],e),normal:r.normal?Object(y["a"])(h["u"],e):null,tangent:r.tangent?Object(y["a"])(h["C"],e):null,color:r.color?Object(y["a"])(h["J"],e):null,texCoord0:r.texCoord0?Object(y["a"])(h["m"],e):null},parts:i,components:[]}}function N(t){return new b["a"]({data:t.data,wrap:D(t.parameters.wrap)})}function R(t,e){const r=new n["a"](z(t.color,t.opacity)),o=t.emissiveFactor?new n["a"](V(t.emissiveFactor)):null;return new d["a"]({color:r,colorTexture:Object(i["t"])(Object(i["c"])(t.textureColor,t=>e.get(t))),normalTexture:Object(i["t"])(Object(i["c"])(t.textureNormal,t=>e.get(t))),emissiveColor:o,emissiveTexture:Object(i["t"])(Object(i["c"])(t.textureEmissive,t=>e.get(t))),occlusionTexture:Object(i["t"])(Object(i["c"])(t.textureOcclusion,t=>e.get(t))),alphaMode:F(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:Object(i["t"])(Object(i["c"])(t.textureMetallicRoughness,t=>e.get(t)))})}function E(t,e,r){e.writeVertices&&L(t,e);const n=e.gltf,o=P(n.indices||n.attributes.position.count,n.primitiveType),s=e.region.start;if(s)for(let i=0;i<o.length;i++)o[i]+=s;t.components.push(new l["a"]({faces:o,material:r.get(n.material),trustSourceNormals:!0}))}function L(t,e){const{position:r,normal:n,tangent:o,color:s,texCoord0:u}=t.vertexAttributes,f=e.region.start,{attributes:l,transform:d}=e.gltf,b=l.position.count;if(Object(m["e"])(r.slice(f,b),l.position,d),Object(i["l"])(l.normal)&&Object(i["l"])(n)){const t=Object(c["a"])(Object(a["b"])(),d);Object(m["a"])(n.slice(f,b),l.normal,t)}else Object(i["l"])(n)&&Object(S["b"])(n,0,0,1,{dstIndex:f,count:b});if(Object(i["l"])(l.tangent)&&Object(i["l"])(o)){const t=Object(c["a"])(Object(a["b"])(),d);Object(O["c"])(o.slice(f,b),l.tangent,t)}else Object(i["l"])(o)&&Object(_["b"])(o,0,0,1,1,{dstIndex:f,count:b});if(Object(i["l"])(l.texCoord0)&&Object(i["l"])(u)?Object(C["b"])(u.slice(f,b),l.texCoord0):Object(i["l"])(u)&&Object(C["a"])(u,0,0,{dstIndex:f,count:b}),Object(i["l"])(l.color)&&Object(i["l"])(s)){const t=l.color,e=s.slice(f,b);if(4===t.elementCount)t instanceof h["C"]?Object(O["b"])(e,t,255):t instanceof h["J"]?Object(_["a"])(e,t):t instanceof h["H"]&&Object(O["a"])(e,t,8);else{Object(_["b"])(e,255,255,255,255);const r=h["B"].fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof h["u"]?Object(m["d"])(r,t,255):t instanceof h["B"]?Object(S["a"])(r,t):t instanceof h["z"]&&Object(m["b"])(r,t,8)}}else Object(i["l"])(s)&&Object(_["b"])(s.slice(f,b),255,255,255,255)}function P(t,e){switch(e){case 4:return Object(x["c"])(t,T["e"]);case 5:return Object(x["b"])(t);case 6:return Object(x["a"])(t)}}function F(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function D(t){return{horizontal:G(t.s),vertical:G(t.t)}}function G(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function k(t){return t**(1/v["a"])*255}function z(t,e){return Object(f["g"])(k(t[0]),k(t[1]),k(t[2]),e)}function V(t){return Object(u["h"])(k(t[0]),k(t[1]),k(t[2]))}},e4c1:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return i})),r.d(e,"c",(function(){return s}));var n=r("6415");function o(t,e,r){if(t.count!==e.count)return void n["a"].error("source and destination buffers need to have the same number of elements");const o=t.count,s=r[0],i=r[1],c=r[2],a=r[3],u=r[4],f=r[5],l=r[6],d=r[7],b=r[8],p=r[9],h=r[10],m=r[11],O=r[12],y=r[13],j=r[14],w=r[15],g=t.typedBuffer,x=t.typedBufferStride,T=e.typedBuffer,v=e.typedBufferStride;for(let n=0;n<o;n++){const t=n*x,e=n*v,r=T[e],o=T[e+1],S=T[e+2],_=T[e+3];g[t]=s*r+u*o+b*S+O*_,g[t+1]=i*r+f*o+p*S+y*_,g[t+2]=c*r+l*o+h*S+j*_,g[t+3]=a*r+d*o+m*S+w*_}}function s(t,e,r){if(t.count!==e.count)return void n["a"].error("source and destination buffers need to have the same number of elements");const o=t.count,s=r[0],i=r[1],c=r[2],a=r[3],u=r[4],f=r[5],l=r[6],d=r[7],b=r[8],p=t.typedBuffer,h=t.typedBufferStride,m=e.typedBuffer,O=e.typedBufferStride;for(let n=0;n<o;n++){const t=n*h,e=n*O,r=m[e],o=m[e+1],y=m[e+2],j=m[e+3];p[t]=s*r+a*o+l*y,p[t+1]=i*r+u*o+d*y,p[t+2]=c*r+f*o+b*y,p[t+3]=j}}function i(t,e,r){const n=Math.min(t.count,e.count),o=t.typedBuffer,s=t.typedBufferStride,i=e.typedBuffer,c=e.typedBufferStride;for(let a=0;a<n;a++){const t=a*s,e=a*c;o[t]=r*i[e],o[t+1]=r*i[e+1],o[t+2]=r*i[e+2],o[t+3]=r*i[e+3]}}function c(t,e,r){const n=Math.min(t.count,e.count),o=t.typedBuffer,s=t.typedBufferStride,i=e.typedBuffer,c=e.typedBufferStride;for(let a=0;a<n;a++){const t=a*s,e=a*c;o[t]=i[e]>>r,o[t+1]=i[e+1]>>r,o[t+2]=i[e+2]>>r,o[t+3]=i[e+3]>>r}}Object.freeze({__proto__:null,transformMat4:o,transformMat3:s,scale:i,shiftRight:c})}}]);
//# sourceMappingURL=chunk-232cb488.38e48b77.js.map