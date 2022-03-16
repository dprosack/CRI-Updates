(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2080c7"],{a2aa:function(e,t,s){"use strict";s.r(t),s.d(t,"scopeCss",(function(){return H}));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
const r=e=>{const t=[];let s,r=0;e=e.replace(/(\[[^\]]*\])/g,(e,s)=>{const c=`__ph-${r}__`;return t.push(s),r++,c}),s=e.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(e,s,c)=>{const n=`__ph-${r}__`;return t.push(c),r++,s+n});const c={content:s,placeholders:t};return c},c=(e,t)=>t.replace(/__ph-(\d+)__/g,(t,s)=>e[+s]),n="-shadowcsshost",o="-shadowcssslotted",l="-shadowcsscontext",i=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",a=new RegExp("("+n+i,"gim"),p=new RegExp("("+l+i,"gim"),h=new RegExp("("+o+i,"gim"),u=n+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,d=[/::shadow/g,/::content/g],m="([>\\s~+[.,{:][\\s\\S]*)?$",f=/-shadowcsshost/gim,x=/:host/gim,w=/::slotted/gim,$=/:host-context/gim,_=/\/\*\s*[\s\S]*?\*\//g,b=e=>e.replace(_,""),S=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,W=e=>e.match(S)||[],O=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,k=/([{}])/g,j="{",E="}",R="%BLOCK%",T=(e,t)=>{const s=C(e);let r=0;return s.escapedString.replace(O,(...e)=>{const c=e[2];let n="",o=e[4],l="";o&&o.startsWith("{"+R)&&(n=s.blocks[r++],o=o.substring(R.length+1),l="{");const i={selector:c,content:n},a=t(i);return`${e[1]}${a.selector}${e[3]}${l}${a.content}${o}`})},C=e=>{const t=e.split(k),s=[],r=[];let c=0,n=[];for(let l=0;l<t.length;l++){const e=t[l];e===E&&c--,c>0?n.push(e):(n.length>0&&(r.push(n.join("")),s.push(R),n=[]),s.push(e)),e===j&&c++}n.length>0&&(r.push(n.join("")),s.push(R));const o={escapedString:s.join(""),blocks:r};return o},L=e=>(e=e.replace($,l).replace(x,n).replace(w,o),e),B=(e,t,s)=>e.replace(t,(...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const n=t[c].trim();if(!n)break;r.push(s(u,n,e[3]))}return r.join(",")}return u+e[3]}),I=(e,t,s)=>e+t.replace(n,"")+s,J=e=>B(e,a,I),K=(e,t,s)=>t.indexOf(n)>-1?I(e,t,s):e+t+s+", "+t+" "+e+s,M=(e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(h,(...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],n=s+t+c;let o="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;o=t+o}const l=o+n,i=`${o.trimRight()}${n.trim()}`;if(l.trim()!==i.trim()){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return n}return u+e[3]}),{selectors:r,cssText:e}},U=e=>B(e,p,K),q=e=>d.reduce((e,t)=>e.replace(t," "),e),v=e=>{const t=/\[/g,s=/\]/g;return e=e.replace(t,"\\[").replace(s,"\\]"),new RegExp("^("+e+")"+m,"m")},y=(e,t)=>{const s=v(t);return!s.test(e)},z=(e,t,s)=>{if(f.lastIndex=0,f.test(e)){const t="."+s;return e.replace(g,(e,s)=>s.replace(/([^:]*)(:*)(.*)/,(e,s,r,c)=>s+t+r+c)).replace(f,t+" ")}return t+" "+e},A=(e,t,s)=>{const n=/\[is=([^\]]*)\]/g;t=t.replace(n,(e,...t)=>t[0]);const o="."+t,l=e=>{let r=e.trim();if(!r)return"";if(e.indexOf(u)>-1)r=z(e,t,s);else{const t=e.replace(f,"");if(t.length>0){const e=t.match(/([^:]*)(:*)(.*)/);e&&(r=e[1]+o+e[2]+e[3])}}return r},i=r(e);e=i.content;let a,p="",h=0;const g=/( |>|\+|~(?!=))\s*/g,d=e.indexOf(u)>-1;let m=!d;while(null!==(a=g.exec(e))){const t=a[1],s=e.slice(h,a.index).trim();m=m||s.indexOf(u)>-1;const r=m?l(s):s;p+=`${r} ${t} `,h=g.lastIndex}const x=e.substring(h);return m=m||x.indexOf(u)>-1,p+=m?l(x):x,c(i.placeholders,p)},D=(e,t,s,r)=>e.split(",").map(e=>r&&e.indexOf("."+r)>-1?e.trim():y(e,t)?A(e,t,s).trim():e.trim()).join(", "),F=(e,t,s,r,c)=>T(e,e=>{let c=e.selector,n=e.content;"@"!==e.selector[0]?c=D(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(n=F(e.content,t,s,r));const o={selector:c.replace(/\s{2,}/g," ").trim(),content:n};return o}),G=(e,t,s,r,c)=>{e=L(e),e=J(e),e=U(e);const n=M(e,r);return e=n.cssText,e=q(e),t&&(e=F(e,t,s,r)),e=e.replace(/-shadowcsshost-no-combinator/g,"."+s),e=e.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:e.trim(),slottedSelectors:n.selectors}},H=(e,t,s)=>{const r=t+"-h",c=t+"-s",n=W(e);e=b(e);const o=[];if(s){const t=e=>{const t=`/*!@___${o.length}___*/`,s=`/*!@${e.selector}*/`;return o.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=T(e,e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=T(e.content,t),e):e)}const l=G(e,t,r,c);return e=[l.cssText,...n].join("\n"),s&&o.forEach(({placeholder:t,comment:s})=>{e=e.replace(t,s)}),l.slottedSelectors.forEach(t=>{e=e.replace(t.orgSelector,t.updatedSelector)}),e}}}]);
//# sourceMappingURL=chunk-2d2080c7.7e981ab7.js.map