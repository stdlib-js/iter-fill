// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var a,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||c.call(t,r)?(a=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=a):t[r]=e.value),y="get"in e,p="set"in e,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t};var a=r;function l(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&v.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=b()?function(t){var r,e,n;if(null==t)return s.call(t);e=t[m],r=d(t,m);try{t[m]=void 0}catch(r){return s.call(t)}return n=s.call(t),r?t[m]=e:delete t[m],n}:function(t){return s.call(t)},g=Number,j=g.prototype.toString;var _=b();function h(t){return"object"==typeof t&&(t instanceof g||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function S(t){return y(t)||h(t)}l(S,"isPrimitive",y),l(S,"isObject",h);var E=Number.POSITIVE_INFINITY,O=g.NEGATIVE_INFINITY,T=Math.floor;function I(t){return t<E&&t>O&&T(r=t)===r;var r}function P(t){return y(t)&&I(t)}function A(t){return h(t)&&I(t.valueOf())}function N(t){return P(t)||A(t)}function C(t){return P(t)&&t>=0}function x(t){return A(t)&&t.valueOf()>=0}function B(t){return C(t)||x(t)}l(N,"isPrimitive",P),l(N,"isObject",A),l(B,"isPrimitive",C),l(B,"isObject",x);var M=/./;function V(t){return"boolean"==typeof t}var F=Boolean.prototype.toString;var G=b();function k(t){return"object"==typeof t&&(t instanceof Boolean||(G?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function L(t){return V(t)||k(t)}function R(){return new Function("return this;")()}l(L,"isPrimitive",V),l(L,"isObject",k);var U="object"==typeof self?self:null,Y="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X="object"==typeof J?J:null;var q=function(t){if(arguments.length){if(!V(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return R()}if(U)return U;if(Y)return Y;if(X)return X;throw new Error("unexpected error. Unable to resolve global object.")}(),z=q.document&&q.document.childNodes,D=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var K=/^\s*function\s*([^(]*)/i;l(H,"REGEXP",K);var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function W(t){return null!==t&&"object"==typeof t}function Z(t){var r,e,n,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=K.exec(n.toString()))return r[1]}return W(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}l(W,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Q(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(W));var $="function"==typeof M||"object"==typeof D||"function"==typeof z?function(t){return Z(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Z(t).toLowerCase():r};function tt(t){return"function"===$(t)}function rt(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&tt(t.next)}var et="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function nt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var ot=1e308;function ut(t,r,e,n){var o,u,i,f,c;if(!rt(t))throw new TypeError(nt("0CM4J",t));if(arguments.length>2){if(!C(e))throw new TypeError(nt("0CM2y",e));if(i=e,arguments.length>3){if(!C(n))throw new TypeError(nt("0CM3C",n));f=n}else f=ot}else{if(arguments.length<2)throw new Error("insufficient arguments. Must provide both an iterator and a static value.");i=0,f=ot}return l(o={},"next",a),l(o,"return",y),et&&tt(t[et])&&l(o,et,p),c=-1,o;function a(){var e;return u?{done:!0}:(e=t.next(),c+=1,e.done?(u=!0,e):{value:c>=i&&c<f?r:e.value,done:!1})}function y(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function p(){return ut(t[et](),r,i,f)}}export{ut as default};
//# sourceMappingURL=mod.js.map
