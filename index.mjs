// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";var o=1e308;function d(m,l,f,h){var p,u,v,j,a;if(!n(m))throw new TypeError(i("0Ot46",m));if(arguments.length>2){if(!t(f))throw new TypeError(i("0Ot2m",f));if(v=f,arguments.length>3){if(!t(h))throw new TypeError(i("0Ot30",h));j=h}else j=o}else{if(arguments.length<2)throw new Error(i("0Ot0J"));v=0,j=o}return e(p={},"next",(function(){var e;if(u)return{done:!0};if(e=m.next(),a+=1,e.done)return u=!0,e;return{value:a>=v&&a<j?l:e.value,done:!1}})),e(p,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&r(m[s])&&e(p,s,(function(){return d(m[s](),l,v,j)})),a=-1,p}export{d as default};
//# sourceMappingURL=index.mjs.map
