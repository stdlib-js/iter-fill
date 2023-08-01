// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterFill=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||c.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&v.call(t,e)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var w=s()?function(t){var e,r,n;if(null==t)return b.call(t);r=t[m],e=d(t,m);try{t[m]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[m]=r:delete t[m],n}:function(t){return b.call(t)},g=Number,j=g.prototype.toString;var h=s();function _(t){return"object"==typeof t&&(t instanceof g||(h?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function S(t){return y(t)||_(t)}a(S,"isPrimitive",y),a(S,"isObject",_);var E=Number.POSITIVE_INFINITY,O=g.NEGATIVE_INFINITY,T=Math.floor;function I(t){return t<E&&t>O&&T(e=t)===e;var e}function P(t){return y(t)&&I(t)}function A(t){return _(t)&&I(t.valueOf())}function N(t){return P(t)||A(t)}function x(t){return P(t)&&t>=0}function C(t){return A(t)&&t.valueOf()>=0}function B(t){return x(t)||C(t)}a(N,"isPrimitive",P),a(N,"isObject",A),a(B,"isPrimitive",x),a(B,"isObject",C);var M=/./;function V(t){return"boolean"==typeof t}var F=Boolean.prototype.toString;var G=s();function k(t){return"object"==typeof t&&(t instanceof Boolean||(G?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function L(t){return V(t)||k(t)}function R(){return new Function("return this;")()}a(L,"isPrimitive",V),a(L,"isObject",k);var U="object"==typeof self?self:null,Y="object"==typeof window?window:null,J="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},X="object"==typeof J?J:null;var q=function(t){if(arguments.length){if(!V(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return R()}if(U)return U;if(Y)return Y;if(X)return X;throw new Error("unexpected error. Unable to resolve global object.")}(),z=q.document&&q.document.childNodes,D=Int8Array;function H(){return/^\s*function\s*([^(]*)/i}var K=/^\s*function\s*([^(]*)/i;a(H,"REGEXP",K);var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function W(t){return null!==t&&"object"==typeof t}function Z(t){var e,r,n,o;if(("Object"===(r=w(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=K.exec(n.toString()))return e[1]}return W(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(W,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!Q(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(W));var $="function"==typeof M||"object"==typeof D||"function"==typeof z?function(t){return Z(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Z(t).toLowerCase():e};function tt(t){return"function"===$(t)}function et(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&tt(t.next)}var rt="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function nt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var ot=1e308;return function t(e,r,n,o){var i,u,f,c,l;if(!et(e))throw new TypeError(nt("0CM4J",e));if(arguments.length>2){if(!x(n))throw new TypeError(nt("0CM2y",n));if(f=n,arguments.length>3){if(!x(o))throw new TypeError(nt("0CM3C",o));c=o}else c=ot}else{if(arguments.length<2)throw new Error("insufficient arguments. Must provide both an iterator and a static value.");f=0,c=ot}return a(i={},"next",y),a(i,"return",p),rt&&tt(e[rt])&&a(i,rt,s),l=-1,i;function y(){var t;return u?{done:!0}:(t=e.next(),l+=1,t.done?(u=!0,t):{value:l>=f&&l<c?r:t.value,done:!1})}function p(t){return u=!0,arguments.length?{value:t,done:!0}:{done:!0}}function s(){return t(e[rt](),r,f,c)}}}));
//# sourceMappingURL=browser.js.map
