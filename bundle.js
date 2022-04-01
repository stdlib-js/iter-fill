// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFill=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var m=function(r){return"number"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return h&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=P,x=_,O=y;var S=E,V=function(r){var e,t,n;if(null==r)return O.call(r);t=r[x],e=T(r,x);try{r[x]=void 0}catch(e){return O.call(r)}return n=O.call(r),e?r[x]=t:delete r[x],n},k=b()?V:S,I=Number,A=I.prototype.toString;var F=k,R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},M=b();var C=function(r){return"object"==typeof r&&(r instanceof R||(M?$(r):"[object Number]"===F(r)))},N=m,B=C;var G=d,L=function(r){return N(r)||B(r)},Z=C;G(L,"isPrimitive",m),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=I.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=X,q=z,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,or=nr;var ar=d,ur=function(r){return ir(r)||or(r)},cr=nr;ar(ur,"isPrimitive",rr),ar(ur,"isObject",cr);var fr=ur,sr=fr.isPrimitive;var lr=function(r){return sr(r)&&r>=0},pr=fr.isObject;var vr=function(r){return pr(r)&&r.valueOf()>=0},gr=lr,dr=vr;var mr=d,hr=function(r){return gr(r)||dr(r)},br=vr;mr(hr,"isPrimitive",lr),mr(hr,"isObject",br);var yr=hr,wr=/./;var Er=function(r){return"boolean"==typeof r},jr=Boolean.prototype.toString;var Pr=k,_r=function(r){try{return jr.call(r),!0}catch(r){return!1}},Tr=b();var xr=function(r){return"object"==typeof r&&(r instanceof Boolean||(Tr?_r(r):"[object Boolean]"===Pr(r)))},Or=Er,Sr=xr;var Vr=d,kr=function(r){return Or(r)||Sr(r)},Ir=xr;Vr(kr,"isPrimitive",Er),Vr(kr,"isObject",Ir);var Ar=kr;var Fr=function(){return new Function("return this;")()},Rr="object"==typeof self?self:null,$r="object"==typeof window?window:null,Mr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Cr="object"==typeof Mr?Mr:null;module.exports=Cr;var Nr=Ar.isPrimitive,Br=Fr,Gr=Rr,Lr=$r,Zr=r(Object.freeze({__proto__:null}));var Wr=function(r){if(arguments.length){if(!Nr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Br()}if(Gr)return Gr;if(Lr)return Lr;if(Zr)return Zr;throw new Error("unexpected error. Unable to resolve global object.")},Xr=Wr(),zr=Xr.document&&Xr.document.childNodes,Ur=Int8Array,Yr=wr,Dr=zr,qr=Ur;var Hr=function(){return"function"==typeof Yr||"object"==typeof qr||"function"==typeof Dr};var Jr=function(){return/^\s*function\s*([^(]*)/i},Kr=Jr;d(Kr,"REGEXP",Jr());var Qr=Kr,re=k;var ee=Array.isArray?Array.isArray:function(r){return"[object Array]"===re(r)};var te=function(r){return null!==r&&"object"==typeof r};d(te,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ee(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(te));var ne=te;var ie=k,oe=Qr.REGEXP,ae=function(r){return ne(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ue=function(r){var e,t,n;if(("Object"===(t=ie(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=oe.exec(n.toString()))return e[1]}return ae(r)?"Buffer":t},ce=ue;var fe=ue;var se=function(r){var e;return null===r?"null":"object"===(e=typeof r)?ce(r).toLowerCase():e},le=function(r){return fe(r).toLowerCase()},pe=Hr()?le:se;var ve=function(r){return"function"===pe(r)},ge=ve;var de=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&ge(r.next)},me=P;var he=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&me(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var be=function(r){return"string"==typeof r},ye=String.prototype.valueOf;var we=k,Ee=function(r){try{return ye.call(r),!0}catch(r){return!1}},je=b();var Pe=function(r){return"object"==typeof r&&(r instanceof String||(je?Ee(r):"[object String]"===we(r)))},_e=be,Te=Pe;var xe=d,Oe=function(r){return _e(r)||Te(r)},Se=Pe;xe(Oe,"isPrimitive",be),xe(Oe,"isObject",Se);var Ve=Oe,ke=Y;var Ie=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ke(r.length)&&r.length>=0&&r.length<=9007199254740991};var Ae=function(r){return r!=r},Fe=W.isPrimitive,Re=Ae;var $e=function(r){return Fe(r)&&Re(r)},Me=W.isObject,Ce=Ae;var Ne=function(r){return Me(r)&&Ce(r.valueOf())},Be=$e,Ge=Ne;var Le=d,Ze=function(r){return Be(r)||Ge(r)},We=Ne;Le(Ze,"isPrimitive",$e),Le(Ze,"isObject",We);var Xe=Ie,ze=fr.isPrimitive,Ue=Ve.isPrimitive,Ye=Ze.isPrimitive;var De=function(r,e,t){var n,i,o;if(!Xe(r)&&!Ue(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ze(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ue(r)){if(!Ue(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ye(e)){for(o=i;o<n;o++)if(Ye(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},qe=De,He=Ve.isPrimitive;var Je=function(r){if(!He(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ke=Ve.isPrimitive;var Qe=function(r){if(!Ke(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},rt=Je,et=Qe,tt=Ve.isPrimitive;var nt=function(r){return tt(r)&&r===et(r)&&r!==rt(r)},it=X,ot=z;var at=function(r){return r==r&&r>ot&&r<it},ut=yr.isPrimitive,ct=Ve.isPrimitive;var ft=function(r,e){var t,n;if(!ct(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ut(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},st=fr.isPrimitive,lt=Ve.isPrimitive;var pt=function(r,e,t){var n,i;if(!lt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!lt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!st(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},vt=ft,gt=pt;var dt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(gt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+vt("0",i):vt("0",i)+r,n&&(r="-"+r)),r},mt=nt,ht=Qe,bt=Je,yt=at,wt=W.isPrimitive,Et=dt;var jt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!yt(n)){if(!wt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Et(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Et(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=mt(r.specifier)?ht(t):bt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Pt=Ve.isPrimitive,_t=/[-\/\\^$*+?.()|[\]{}]/g;var Tt=function(r){var e,t;if(!Pt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(_t,"\\$&"):(e=(e=r.substring(1,t)).replace(_t,"\\$&"),r=r[0]+e+r.substring(t))},xt=RegExp.prototype.exec;var Ot=k,St=function(r){try{return xt.call(r),!0}catch(r){return!1}},Vt=b();var kt=Tt,It=ve,At=Ve.isPrimitive,Ft=function(r){return"object"==typeof r&&(r instanceof RegExp||(Vt?St(r):"[object RegExp]"===Ot(r)))};var Rt=nt,$t=Qe,Mt=Je,Ct=function(r,e,t){if(!At(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(At(e))e=kt(e),e=new RegExp(e,"g");else if(!Ft(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!At(t)&&!It(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Nt=at,Bt=W.isPrimitive,Gt=function(r){return Math.abs(r)},Lt=/e\+(\d)$/,Zt=/e-(\d)$/,Wt=/^(\d+)$/,Xt=/^(\d+)e/,zt=/\.0$/,Ut=/\.0*e/,Yt=/(\..*[^0])0*e/;var Dt=function(r){var e,t,n=parseFloat(r.arg);if(!Nt(n)){if(!Bt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Gt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ct(t,Yt,"$1e"),t=Ct(t,Ut,"e"),t=Ct(t,zt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ct(t,Lt,"e+0$1"),t=Ct(t,Zt,"e-0$1"),r.alternate&&(t=Ct(t,Wt,"$1."),t=Ct(t,Xt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Rt(r.specifier)?$t(t):Mt(t)},qt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Ht=ft;var Jt=Ve.isPrimitive,Kt=qe,Qt=Ae,rn=jt,en=Dt,tn=function(r){var e,t,n,i,o;for(e=0,n=[],o=qt.exec(r);o;)(t=r.slice(e,qt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=qt.lastIndex,o=qt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},nn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ht(" ",n):Ht(" ",n)+r},on=dt,an=String.fromCharCode;var un=function(r){var e,t,n,i,o,a,u,c,f;if(!Jt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=tn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Jt(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Kt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Qt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Qt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=rn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Qt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Qt(o)?String(n.arg):an(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=en(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=on(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=nn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},cn=d,fn=yr.isPrimitive,sn=ve,ln=de,pn=he,vn=un,gn=1e308;var dn=function r(e,t,n,i){var o,a,u,c,f;if(!ln(e))throw new TypeError(vn("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(arguments.length>2){if(!fn(n))throw new TypeError(vn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(u=n,arguments.length>3){if(!fn(i))throw new TypeError(vn("invalid argument. Fourth argument must be a nonnegative integer. Value: `%s`.",i));c=i}else c=gn}else{if(arguments.length<2)throw new Error("insufficient input arguments. Must provide both an iterator and a static value.");u=0,c=gn}return cn(o={},"next",s),cn(o,"return",l),pn&&sn(e[pn])&&cn(o,pn,p),f=-1,o;function s(){var r;return a?{done:!0}:(r=e.next(),f+=1,r.done?(a=!0,r):{value:f>=u&&f<c?t:r.value,done:!1})}function l(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function p(){return r(e[pn](),t,u,c)}};return dn}));
//# sourceMappingURL=bundle.js.map
