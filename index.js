// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterLogit=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function A(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function x(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,f,l,s,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(u(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function F(r){var t,e,n,o;for(e=[],o=0,n=U.exec(r);n;)(t=r.slice(o,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),o=U.lastIndex,n=U.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function k(r){return"string"==typeof r}function N(r){var t,e,n;if(!k(r))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=F(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return O.apply(null,e)}var I,V=Object.prototype,P=V.toString,$=V.__defineGetter__,C=V.__defineSetter__,B=V.__lookupGetter__,L=V.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(B.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=V,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&$&&$.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var R=I;function G(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Z=/./;function W(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return M&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,t){return null!=r&&z.call(r,t)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=X()?function(r){var t,e,n;if(null==r)return Y.call(r);e=r[H],t=q(r,H);try{r[H]=void 0}catch(t){return Y.call(r)}return n=Y.call(r),t?r[H]=e:delete r[H],n}:function(r){return Y.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return W(r)||tr(r)}function nr(){return new Function("return this;")()}G(er,"isPrimitive",W),G(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof global?global:null,cr="object"==typeof globalThis?globalThis:null;var ur=function(r){if(arguments.length){if(!W(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),fr=ur.document&&ur.document.childNodes,lr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var pr=/^\s*function\s*([^(]*)/i;G(sr,"REGEXP",pr);var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function vr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=pr.exec(n.toString()))return t[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}G(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(dr));var gr="function"==typeof Z||"object"==typeof lr||"function"==typeof fr?function(r){return vr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?vr(r).toLowerCase():t};function br(r){return"function"===gr(r)}function hr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&br(r.next)}function wr(r){return"number"==typeof r}var mr=Number,jr=mr.prototype.toString;var Ar=X();function _r(r){return"object"==typeof r&&(r instanceof mr||(Ar?function(r){try{return jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Er(r){return wr(r)||_r(r)}G(Er,"isPrimitive",wr),G(Er,"isObject",_r);var Sr="function"==typeof D&&"symbol"==typeof D("foo")&&q(D,"iterator")&&"symbol"==typeof D.iterator?Symbol.iterator:null;var xr,Or=Object,Ur=Object.getPrototypeOf;xr=br(Object.getPrototypeOf)?Ur:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Tr=xr;var Fr=Object.prototype;function kr(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=Or(r),Tr(r))}(r),!t||!q(r,"constructor")&&q(t,"constructor")&&br(t.constructor)&&"[object Function]"===J(t.constructor)&&q(t,"isPrototypeOf")&&br(t.isPrototypeOf)&&(t===Fr||function(r){var t;for(t in r)if(!q(r,t))return!1;return!0}(r)))}function Nr(r,t){return kr(t)?(q(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Ir(r,t,e){var n,o,i,a;if(!hr(r))throw new TypeError(N("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!br(t))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Nr(n,e)))throw i;return G(o={},"next",c),G(o,"return",u),Sr&&br(r[Sr])&&G(o,Sr,f),o;function c(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:wr(e.value)?t(e.value):n.invalid,done:!1}}function u(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Ir(r[Sr](),t,n)}}function Vr(r){return r!=r}var Pr="function"==typeof Uint32Array;var $r="function"==typeof Uint32Array?Uint32Array:null;var Cr,Br="function"==typeof Uint32Array?Uint32Array:void 0;Cr=function(){var r,t,e;if("function"!=typeof $r)return!1;try{t=new $r(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(Pr&&e instanceof Uint32Array||"[object Uint32Array]"===J(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Br:function(){throw new Error("not implemented")};var Lr=Cr,Rr="function"==typeof Float64Array;var Gr="function"==typeof Float64Array?Float64Array:null;var Zr,Wr="function"==typeof Float64Array?Float64Array:void 0;Zr=function(){var r,t,e;if("function"!=typeof Gr)return!1;try{t=new Gr([1,3.14,-3.14,NaN]),e=t,r=(Rr&&e instanceof Float64Array||"[object Float64Array]"===J(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Mr=Zr,Xr="function"==typeof Uint8Array;var Yr="function"==typeof Uint8Array?Uint8Array:null;var zr,qr="function"==typeof Uint8Array?Uint8Array:void 0;zr=function(){var r,t,e;if("function"!=typeof Yr)return!1;try{t=new Yr(t=[1,3.14,-3.14,256,257]),e=t,r=(Xr&&e instanceof Uint8Array||"[object Uint8Array]"===J(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Dr=zr,Hr="function"==typeof Uint16Array;var Jr="function"==typeof Uint16Array?Uint16Array:null;var Kr,Qr="function"==typeof Uint16Array?Uint16Array:void 0;Kr=function(){var r,t,e;if("function"!=typeof Jr)return!1;try{t=new Jr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Hr&&e instanceof Uint16Array||"[object Uint16Array]"===J(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rt,tt={uint16:Kr,uint8:Dr};(rt=new tt.uint16(1))[0]=4660;var et=52===new tt.uint8(rt.buffer)[0],nt=!0===et?1:0,ot=new Mr(1),it=new Lr(ot.buffer);function at(r){return ot[0]=r,it[nt]}var ct=!0===et?1:0,ut=new Mr(1),ft=new Lr(ut.buffer);var lt=mr.NEGATIVE_INFINITY;var st=.6931471803691238,pt=1.9082149292705877e-10,yt=1048575;function dt(r){var t,e,n,o,i,a,c,u,f,l,s,p;return 0===r?lt:Vr(r)||r<0?NaN:(i=0,(e=at(r))<1048576&&(i-=54,e=at(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(u=(e&=yt)+614244&1048576|0)>>20|0,c=(r=function(r,t){return ut[0]=r,ft[ct]=t>>>0,ut[0]}(r,e|1072693248^u))-1,(yt&2+e)<3?0===c?0===i?0:i*st+i*pt:(a=c*c*(.5-.3333333333333333*c),0===i?c-a:i*st-(a-i*pt-c)):(u=e-398458|0,f=440401-e|0,o=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=n+o,(u|=f)>0?(t=.5*c*c,0===i?c-(t-l*(t+a)):i*st-(t-(l*(t+a)+i*pt)-c)):0===i?c-l*(c-a):i*st-(l*(c-a)-i*pt-c))))}var vt=Number.POSITIVE_INFINITY;function gt(r){return Vr(r)?r:(t=r)>=0&&t<=1?0===r?lt:1===r?vt:dt(r/(1-r)):NaN;var t}return function(r){return Ir(r,gt)}}));
//# sourceMappingURL=index.js.map
