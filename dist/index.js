"use strict";var E=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=E(function(I,d){"use strict";var f=require("@stdlib/utils-define-nonenumerable-read-only-property"),m=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,x=require("@stdlib/assert-is-function"),F=require("@stdlib/assert-is-iterator-like"),o=require("@stdlib/symbol-iterator"),g=require("@stdlib/string-format"),N=0,c=1e308;function h(e,r,s,v){var n,l,a,i,u;if(!F(e))throw new TypeError(g("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(arguments.length>2){if(!m(s))throw new TypeError(g("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",s));if(a=s,arguments.length>3){if(!m(v))throw new TypeError(g("invalid argument. Fourth argument must be a nonnegative integer. Value: `%s`.",v));i=v}else i=c}else{if(arguments.length<2)throw new Error("insufficient arguments. Must provide both an iterator and a static value.");a=N,i=c}return n={},f(n,"next",w),f(n,"return",q),o&&x(e[o])&&f(n,o,y),u=-1,n;function w(){var t;return l?{done:!0}:(t=e.next(),u+=1,t.done?(l=!0,t):{value:u>=a&&u<i?r:t.value,done:!1})}function q(t){return l=!0,arguments.length?{value:t,done:!0}:{done:!0}}function y(){return h(e[o](),r,a,i)}}d.exports=h});var b=p();module.exports=b;
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
