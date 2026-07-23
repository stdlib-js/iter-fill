"use strict";var E=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}}};var p=E(function(I,d){"use strict";var f=require("@stdlib/utils-define-nonenumerable-read-only-property"),m=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,x=require("@stdlib/assert-is-function"),F=require("@stdlib/assert-is-iterator-like"),s=require("@stdlib/symbol-iterator"),g=require("@stdlib/string-format"),N=0,c=1e308;function h(r,e,n,v){var i,l,u,a,o;if(!F(r))throw new TypeError(g("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(arguments.length>2){if(!m(n))throw new TypeError(g("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(u=n,arguments.length>3){if(!m(v))throw new TypeError(g("invalid argument. Fourth argument must be a nonnegative integer. Value: `%s`.",v));a=v}else a=c}else{if(arguments.length<2)throw new Error("insufficient arguments. Must provide both an iterator and a static value.");u=N,a=c}return i={},f(i,"next",w),f(i,"return",q),s&&x(r[s])&&f(i,s,y),o=-1,i;function w(){var t;return l?{done:!0}:(t=r.next(),o+=1,t.done?(l=!0,t):{value:o>=u&&o<a?e:t.value,done:!1})}function q(t){return l=!0,arguments.length?{value:t,done:!0}:{done:!0}}function y(){return h(r[s](),e,u,a)}}d.exports=h});var b=p();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
