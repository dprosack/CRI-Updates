(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed6af180"],{"008c":function(t,e,n){"use strict";n.d(e,"a",(function(){return I})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return S})),n.d(e,"e",(function(){return A})),n.d(e,"f",(function(){return G})),n.d(e,"g",(function(){return $}));var i=n("b2b2"),r=n("a9ab");const o=(t,e,n)=>[e,n],a=(t,e,n)=>[e,n,t[2]],c=(t,e,n)=>[e,n,t[2],t[3]];function l(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance]:[1,1],translate:Object(i["l"])(t.extent)?[t.extent.xmin,t.extent.ymax]:[0,0]}:null}function s({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function u({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function h(t,e,n){const i=[];let r,o,a,c;for(let l=0;l<n.length;l++){const h=n[l];l>0?(a=s(t,h[0]),c=u(t,h[1]),a===r&&c===o||(i.push(e(h,a-r,c-o)),r=a,o=c)):(r=s(t,h[0]),o=u(t,h[1]),i.push(e(h,r,o)))}return i.length>0?i:null}function f(t,e,n,i){return h(t,n?i?c:a:i?a:o,e)}function d(t,e,n,i){const r=[],l=n?i?c:a:i?a:o;for(let o=0;o<e.length;o++){const n=h(t,l,e[o]);n&&n.length>=3&&r.push(n)}return r.length?r:null}function g(t,e,n,i){const r=[],l=n?i?c:a:i?a:o;for(let o=0;o<e.length;o++){const n=h(t,l,e[o]);n&&n.length>=2&&r.push(n)}return r.length?r:null}function y({scale:t,translate:e},n){return n*t[0]+e[0]}function p({scale:t,translate:e},n){return e[1]-n*t[1]}function m(t,e,n){const i=new Array(n.length);if(!n.length)return i;const[r,o]=t.scale;let a=y(t,n[0][0]),c=p(t,n[0][1]);i[0]=e(n[0],a,c);for(let l=1;l<n.length;l++){const t=n[l];a+=t[0]*r,c-=t[1]*o,i[l]=e(t,a,c)}return i}function b(t,e,n){const i=new Array(n.length);for(let r=0;r<n.length;r++)i[r]=m(t,e,n[r]);return i}function x(t,e,n,i){return m(t,n?i?c:a:i?a:o,e)}function w(t,e,n,i){return b(t,n?i?c:a:i?a:o,e)}function j(t,e,n,i){return b(t,n?i?c:a:i?a:o,e)}function O(t,e,n,i,r){return e.xmin=s(t,n.xmin),e.ymin=u(t,n.ymin),e.xmax=s(t,n.xmax),e.ymax=u(t,n.ymax),e!==n&&(i&&(e.zmin=n.zmin,e.zmax=n.zmax),r&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}function k(t,e,n,i,r){return e.points=f(t,n.points,i,r),e}function v(t,e,n,i,r){return e.x=s(t,n.x),e.y=u(t,n.y),e!==n&&(i&&(e.z=n.z),r&&(e.m=n.m)),e}function M(t,e,n,i,r){const o=d(t,n.rings,i,r);return o?(e.rings=o,e):null}function z(t,e,n,i,r){const o=g(t,n.paths,i,r);return o?(e.paths=o,e):null}function I(t,e){return t&&e?Object(r["f"])(e)?v(t,{},e,!1,!1):Object(r["h"])(e)?z(t,{},e,!1,!1):Object(r["g"])(e)?M(t,{},e,!1,!1):Object(r["e"])(e)?k(t,{},e,!1,!1):Object(r["d"])(e)?O(t,{},e,!1,!1):null:null}function S(t,e,n,r,o){return Object(i["l"])(n)&&(e.points=x(t,n.points,r,o)),e}function A(t,e,n,r,o){return Object(i["k"])(n)||(e.x=y(t,n.x),e.y=p(t,n.y),e!==n&&(r&&(e.z=n.z),o&&(e.m=n.m))),e}function G(t,e,n,r,o){return Object(i["l"])(n)&&(e.rings=j(t,n.rings,r,o)),e}function $(t,e,n,r,o){return Object(i["l"])(n)&&(e.paths=w(t,n.paths,r,o)),e}},"4bad":function(t,e,n){"use strict";n.d(e,"a",(function(){return Y})),n.d(e,"b",(function(){return W}));var i=n("f7be"),r=n("2eab"),o=n("d329"),a=n("ce50"),c=n("c120"),l=(n("e6c2"),n("69e9")),s=n("9ef0"),u=n("2c63"),h=n("a29a"),f=(n("702a"),n("e92d"),n("d822"));const d="http://www.w3.org/2000/svg";let g=0,y=0;const p=Object(c["a"])("android"),m=Object(c["a"])("chrome")||p&&p>=4?"auto":"optimizeLegibility",b={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},x=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let w={},j={};const O={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},k=Math.PI;let v=1;function M(t,e){const n=t*(k/180);return Math.abs(e*Math.sin(n))+Math.abs(e*Math.cos(n))}function z(t){return t.map(t=>`${t.command} ${t.values.join(" ")}`).join(" ").trim()}function I(t,e,n,i){if(t){if("circle"===t.type)return Object(f["a"])("circle",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return Object(f["a"])("ellipse",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return Object(f["a"])("rect",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return Object(f["a"])("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const i="string"!=typeof t.path?z(t.path):t.path;return Object(f["a"])("path",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",d:i})}if("text"===t.type)return Object(f["a"])("text",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4","text-anchor":i.align,"text-decoration":i.decoration,kerning:i.kerning,rotate:i.rotate,"text-rendering":m,"font-style":i.font.style,"font-variant":i.font.variant,"font-weight":i.font.weight,"font-size":i.font.size,"font-family":i.font.family,x:t.x,y:t.y},t.text)}return null}function S(t){const e={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const n="patternId-"+ ++g;e.fill=`url(#${n})`,e.pattern={id:n,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const n="linearGradientId-"+ ++y;e.fill=`url(#${n})`,e.linearGradient={id:n,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map(t=>({offset:t.offset,color:t.color&&new s["a"](t.color).toString()}))}}else if(t){const n=new s["a"](t);e.fill=n.toString()}return e}function A(t){const e={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(e.width=t.width),t.cap&&(e.cap=t.cap),t.join&&(e.join=t.join.toString()),t.color&&(e.color=new s["a"](t.color).toString()),t.style)){let n=null;if(t.style in O&&(n=O[t.style]),Array.isArray(n)){n=n.slice(0);for(let e=0;e<n.length;++e)n[e]*=t.width;if("butt"!==t.cap){for(let e=0;e<n.length;e+=2)n[e]-=t.width,n[e]<1&&(n[e]=1);for(let e=1;e<n.length;e+=2)n[e]+=t.width}n=n.join(",")}e.dashArray=n}return e}function G(t,e){const n={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(n.align=t.align,n.decoration=t.decoration,n.kerning=t.kerning?"auto":"0",n.rotate=t.rotated?"90":"0",n.font.style=e.style||"normal",n.font.variant=e.variant||"normal",n.font.weight=e.weight||"normal",n.font.size=e.size&&e.size.toString()||"10pt",n.font.family=e.family||"serif"),n}function $(t){const{pattern:e,linearGradient:n}=t;if(e)return Object(f["a"])("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},Object(f["a"])("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(n){const t=n.stops.map((t,e)=>Object(f["a"])("stop",{key:e+"-stop",offset:t.offset,"stop-color":t.color}));return Object(f["a"])("linearGradient",{id:n.id,gradientUnits:"userSpaceOnUse",x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2},t)}return null}function D(t,e,n){return Object(h["h"])(t,Object(h["d"])(t),[e,n])}function N(t,e,n,i,r){return Object(h["g"])(t,Object(h["d"])(t),[e,n]),t[4]=t[4]*e-i*e+i,t[5]=t[5]*n-r*n+r,t}function C(t,e,n,i){const r=e%360*Math.PI/180;Object(h["f"])(t,Object(h["d"])(t),r);const o=Math.cos(r),a=Math.sin(r),c=t[4],l=t[5];return t[4]=c*o-l*a+i*a-n*o+n,t[5]=l*o+c*a-n*a-i*o+i,t}function P(t,e){w&&"left"in w?(w.left>t&&(w.left=t),w.right<t&&(w.right=t),w.top>e&&(w.top=e),w.bottom<e&&(w.bottom=e)):w={left:t,bottom:e,right:t,top:e}}function U(t){const e=t.args,n=e.length;let i;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(i=0;i<n;i+=2)P(e[i],e[i+1]);j.x=e[n-2],j.y=e[n-1];break;case"H":for(i=0;i<n;++i)P(e[i],j.y);j.x=e[n-1];break;case"V":for(i=0;i<n;++i)P(j.x,e[i]);j.y=e[n-1];break;case"m":{let t=0;"x"in j||(P(j.x=e[0],j.y=e[1]),t=2);for(i=t;i<n;i+=2)P(j.x+=e[i],j.y+=e[i+1]);break}case"l":case"t":for(i=0;i<n;i+=2)P(j.x+=e[i],j.y+=e[i+1]);break;case"h":for(i=0;i<n;++i)P(j.x+=e[i],j.y);break;case"v":for(i=0;i<n;++i)P(j.x,j.y+=e[i]);break;case"c":for(i=0;i<n;i+=6)P(j.x+e[i],j.y+e[i+1]),P(j.x+e[i+2],j.y+e[i+3]),P(j.x+=e[i+4],j.y+=e[i+5]);break;case"s":case"q":for(i=0;i<n;i+=4)P(j.x+e[i],j.y+e[i+1]),P(j.x+=e[i+2],j.y+=e[i+3]);break;case"A":for(i=0;i<n;i+=7)P(e[i+5],e[i+6]);j.x=e[n-2],j.y=e[n-1];break;case"a":for(i=0;i<n;i+=7)P(j.x+=e[i+5],j.y+=e[i+6])}}function F(t,e,n){const i=b[t.toLowerCase()];let r;"number"==typeof i&&(i?e.length>=i&&(r={action:t,args:e.slice(0,e.length-e.length%i)},n.push(r),U(r)):(r={action:t,args:[]},n.push(r),U(r)))}function V(t){const e=("string"!=typeof t.path?z(t.path):t.path).match(x),n=[];if(w={},j={},!e)return null;let i="",r=[];const o=e.length;for(let c=0;c<o;++c){const t=e[c],o=parseFloat(t);isNaN(o)?(i&&F(i,r,n),r=[],i=t):r.push(o)}F(i,r,n);const a={x:0,y:0,width:0,height:0};return w&&"left"in w&&(a.x=w.left,a.y=w.top,a.width=w.right-w.left,a.height=w.bottom-w.top),a}function L(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const n=V(t);e.x=n.x,e.y=n.y,e.width=n.width,e.height=n.height}return e}function T(t){const e={x:0,y:0,width:0,height:0};let n=null,i=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(const o of t)n?(n.x=Math.min(n.x,o.x),n.y=Math.min(n.y,o.y),i=Math.max(i,o.x+o.width),r=Math.max(r,o.y+o.height)):(n=e,n.x=o.x,n.y=o.y,i=o.x+o.width,r=o.y+o.height);return n&&(n.width=i-n.x,n.height=r-n.y),n}function B(t,e,n,i,r,o,a,c,l){let s=(a&&o?M(o,e):e)/2,f=(a&&o?M(o,n):n)/2;if(l){const t=l[0],e=l[1];s=(a&&o?M(o,t):t)/2,f=(a&&o?M(o,e):e)/2}const d=t.width+i,g=t.height+i,y=Object(u["a"])(),p=Object(u["a"])();let m=!1;if(r&&0!==d&&0!==g){const t=d/g,i=e>n?e:n;let r=1,o=1;isNaN(i)||(t>1?(r=i/d,o=i/t/g):(o=i/g,r=i*t/d)),Object(h["e"])(p,p,N(y,r,o,s,f)),m=!0}const b=t.x+(d-i)/2,x=t.y+(g-i)/2;if(Object(h["e"])(p,p,D(y,s-b,f-x)),!m&&(d>e||g>n)){const t=d/e>g/n,i=(t?e:n)/(t?d:g);Object(h["e"])(p,p,N(y,i,i,b,x))}return o&&Object(h["e"])(p,p,C(y,o,b,x)),c&&Object(h["e"])(p,p,D(y,c[0],c[1])),`matrix(${p[0]},${p[1]},${p[2]},${p[3]},${p[4]},${p[5]})`}function E(t,e,n){const i=null==t?void 0:t.effects.find(t=>"bloom"===t.type);if(!i)return null;const{strength:r,radius:o}=i,a=r>0?o:0,c=(r+a)*e,l=4*r+1;return Object(f["a"])("filter",{id:"bloom"+n,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},Object(f["a"])("feMorphology",{operator:"dilate",radius:(r+.5*a)*(5**(e/100)*(.4+e/100)),in:"SourceGraphic",result:"dilate"}),Object(f["a"])("feGaussianBlur",{in:"dilate",stdDeviation:c/25,result:"blur"}),Object(f["a"])("feGaussianBlur",{in:"blur",stdDeviation:c/50,result:"intensityBlur"}),Object(f["a"])("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},Object(f["a"])("feFuncR",{type:"linear",slope:l}),Object(f["a"])("feFuncG",{type:"linear",slope:l}),Object(f["a"])("feFuncB",{type:"linear",slope:l})),Object(f["a"])("feMerge",null,Object(f["a"])("feMergeNode",{in:"intensityBlur"}),Object(f["a"])("feMergeNode",{in:"intensityBrightness"}),Object(f["a"])("feGaussianBlur",{stdDeviation:r/10})))}function R(t,e,n,i){const r=[],o=[],a=++v,c=E(null==i?void 0:i.effectView,e,a);let l=null;if(c){var s;const t=null==i||null==(s=i.effectView)?void 0:s.effects.find(t=>"bloom"===t.type),r=(t.strength?t.strength+t.radius/2:0)/3,o=e+e*r,a=n+n*r;l=[Math.max(o,10),Math.max(a,10)]}for(const u of t){const t=[],a=[];let c=0,s=0,h=0;for(const e of u){const{shape:n,fill:i,stroke:o,font:l,offset:u}=e;c+=o&&o.width||0;const f=S(i),d=A(o),g="text"===n.type?G(n,l):null;r.push($(f)),t.push(I(n,f.fill,d,g)),a.push(L(n)),u&&(s+=u[0],h+=u[1])}const d=B(T(a),e,n,c,null==i?void 0:i.scale,null==i?void 0:i.rotation,null==i?void 0:i.useRotationSize,[s,h],l);o.push(Object(f["a"])("g",{transform:d},t))}return null!=i&&i.useRotationSize&&null!=i&&i.rotation&&(e=M(null==i?void 0:i.rotation,e),n=M(null==i?void 0:i.rotation,n)),c&&(e=l[0],n=l[1]),Object(f["a"])("svg",{xmlns:d,width:e,height:n},c,Object(f["a"])("defs",null,r),c?Object(f["a"])("g",{filter:`url(#bloom${a})`},o):o)}var q=n("ac8e");const J=Object(l["a"])();function Y(t,e,n){const i=Math.ceil(e[0]),r=Math.ceil(e[1]);if(!t.some(t=>!!t.length))return null;const o=n&&n.node||document.createElement("div");return null!=n.opacity&&(o.style.opacity=n.opacity.toString()),null!=n.effectView&&(o.style.filter=Object(q["e"])(n.effectView)),J.append(o,R.bind(null,t,i,r,n)),o}function Z(t,e){t=Math.ceil(t),e=Math.ceil(e);const n=document.createElement("canvas");n.width=t,n.height=e,n.style.width=t+"px",n.style.height=e+"px";const i=n.getContext("2d");return i.clearRect(0,0,t,e),i}function _(t,e,n){return t?Object(r["default"])(t,{responseType:"image"}).then(t=>{const i=t.data,r=i.width,o=i.height,a=r/o;let c=e;if(n){const t=Math.max(r,o);c=Math.min(c,t)}return{image:i,width:a<=1?Math.ceil(c*a):c,height:a<=1?c:Math.ceil(c/a)}}):Promise.reject(new a["a"]("renderUtils: imageDataSize","href not provided."))}function H(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}function Q(t,e,n,i,r){switch(r){case"multiply":t[e+0]*=n[0],t[e+1]*=n[1],t[e+2]*=n[2],t[e+3]*=n[3];break;default:{const r=Object(o["b"])({r:t[e+0],g:t[e+1],b:t[e+2]});r.h=i.h,r.s=i.s,r.v=r.v/100*i.v;const a=Object(o["e"])(r);t[e+0]=a.r,t[e+1]=a.g,t[e+2]=a.b,t[e+3]*=n[3];break}}}function W(t,e,n,r,a){return _(t,e,a).then(a=>{const l=a.width?a.width:e,s=a.height?a.height:e;if(a.image&&H(n,r)){let e=a.image.width,i=a.image.height;Object(c["a"])("edge")&&/\.svg$/i.test(t)&&(e-=1,i-=1);const u=Z(l,s);u.drawImage(a.image,0,0,e,i,0,0,l,s);const h=u.getImageData(0,0,l,s),f=[n.r/255,n.g/255,n.b/255,n.a],d=Object(o["b"])(n);for(let t=0;t<h.data.length;t+=4)Q(h.data,t,f,d,r);u.putImageData(h,0,0),t=u.canvas.toDataURL("image/png")}else{const e=i["b"]&&i["b"].findCredential(t);if(e&&e.token){const n=-1===t.indexOf("?")?"?":"&";t=`${t}${n}token=${e.token}`}}return{url:t,width:l,height:s}}).catch((function(){return{url:t,width:e,height:e}}))}},"661c":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var i=n("38a4");function r(t,e,n=0){const r=Object(i["d"])(t,0,l);for(let i=0;i<4;i++)e[n+i]=Math.floor(256*s(r*a[i]))}function o(t,e=0){let n=0;for(let i=0;i<4;i++)n+=t[e+i]*c[i];return n}const a=[1,256,65536,16777216],c=[1/256,1/65536,1/16777216,1/4294967296],l=o(new Uint8ClampedArray([255,255,255,255]));function s(t){return t-Math.floor(t)}},"89cb":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ce50"),r=n("e92d"),o=n("008c");function a(t,e,n,i,o){const a=t.referencesGeometry()&&o?l(e,i,o):e,c=t.repurposeFeature(a);try{return t.evaluate({...n,$feature:c})}catch(s){return r["a"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",s),null}}const c=new Map;function l(t,e,n){const{transform:i,hasZ:r,hasM:o}=n;c.has(e)||c.set(e,s(e));const a=c.get(e)(t.geometry,i,r,o);return{...t,geometry:a}}function s(t){const e={};switch(t){case"esriGeometryPoint":return(t,n,i,r)=>Object(o["e"])(n,e,t,i,r);case"esriGeometryPolygon":return(t,n,i,r)=>Object(o["f"])(n,e,t,i,r);case"esriGeometryPolyline":return(t,n,i,r)=>Object(o["g"])(n,e,t,i,r);case"esriGeometryMultipoint":return(t,n,i,r)=>Object(o["d"])(n,e,t,i,r);default:return r["a"].getLogger("esri.views.2d.support.arcadeOnDemand").error(new i["a"]("mapview-arcade","Unable to handle geometryType: "+t)),t=>t}}},fcb9:function(t,e,n){"use strict";n.r(e),n.d(e,"previewCIMSymbol",(function(){return s}));var i=n("a915"),r=n("6b49"),o=n("d445"),a=n("4bad");const c=new r["CIMSymbolRasterizer"](null,!0),l=120;async function s(t,e={}){const{size:n,maxSize:r,node:s,opacity:u}=e,h=e.cimOptions||e,{feature:f,fieldMap:d,geometryType:g,style:y}=h,p=Object(o["b"])(t),m=Math.min(null!=n?n:p,null!=r?r:Object(i["h"])(l));m!==p&&(t=t.clone(),Object(o["d"])(t,m,{preserveOutlineWidth:!0}));let b=3;t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(b=1);const x=await c.rasterizeCIMSymbolAsync(t,f,d,g,{scaleFactor:b,style:y}),w=document.createElement("canvas");w.width=x.imageData.width,w.height=x.imageData.height,w.getContext("2d").putImageData(x.imageData,0,0);let j=w.width/b,O=w.height/b;if(null!=n&&(null==(null==e?void 0:e.scale)||(null==e?void 0:e.scale))){const t=j/O;j=t<=1?Math.ceil(m*t):m,O=t<=1?m:Math.ceil(m/t)}const k=new Image(j,O);k.src=w.toDataURL(),null!=u&&(k.style.opacity=""+u);let v=k;if(null!=e.effectView){const t={shape:{type:"image",x:0,y:0,width:j,height:O,src:k.src},fill:null,stroke:null,offset:[0,0]};v=Object(a["a"])([[t]],[j,O],{effectView:e.effectView})}return s&&s.appendChild(v),v}}}]);
//# sourceMappingURL=chunk-ed6af180.0108babb.js.map