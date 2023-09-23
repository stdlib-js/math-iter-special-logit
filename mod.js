// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,b=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,w,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,v,"e-0$1"),r.alternate&&(n=s.call(n,b,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function _(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var S=String.fromCharCode,A=isNaN,E=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function O(r){var t,e,n,i,a,l,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,p=0;p<r.length;p++)if(c(n=r[p]))l+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function P(r){var t,e,n,o;for(e=[],o=0,n=F.exec(r);n;)(t=r.slice(o,F.lastIndex-n[0].length)).length&&e.push(t),e.push(x(n)),o=F.lastIndex,n=F.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function V(r){return"string"==typeof r}function k(r){var t,e,n;if(!V(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=P(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return O.apply(null,e)}var U,B=Object.prototype,N=B.toString,I=B.__defineGetter__,C=B.__defineSetter__,G=B.__lookupGetter__,L=B.__lookupSetter__;U=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(G.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=B,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,t,e.get),a&&C&&C.call(r,t,e.set),r};var R=U;function $(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var M=/./;function X(r){return"boolean"==typeof r}function Z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var W=Z();function Y(){return W&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function D(r,t){return null!=r&&q.call(r,t)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=Y()?function(r){var t,e,n;if(null==r)return z.call(r);e=r[J],t=D(r,J);try{r[J]=void 0}catch(t){return z.call(r)}return n=z.call(r),t?r[J]=e:delete r[J],n}:function(r){return z.call(r)},Q=Boolean,rr=Boolean.prototype.toString;var tr=Y();function er(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===K(r)))}function nr(r){return X(r)||er(r)}function or(){return new Function("return this;")()}$(nr,"isPrimitive",X),$(nr,"isObject",er);var ir="object"==typeof self?self:null,ar="object"==typeof window?window:null,ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},cr="object"==typeof ur?ur:null,lr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!X(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(lr)return lr;if(ir)return ir;if(ar)return ar;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=fr.document&&fr.document.childNodes,sr=Int8Array;function yr(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;$(yr,"REGEXP",vr);var br=Z();var gr=Object.prototype.toString;var dr="function"==typeof H?H.toStringTag:"";var wr,hr=br&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return gr.call(r);e=r[dr],t=D(r,dr);try{r[dr]=void 0}catch(t){return gr.call(r)}return n=gr.call(r),t?r[dr]=e:delete r[dr],n}:function(r){return gr.call(r)};wr=Array.isArray?Array.isArray:function(r){return"[object Array]"===hr(r)};var mr=wr;function jr(r){return null!==r&&"object"==typeof r}var _r=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!mr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(jr);function Sr(r){var t,e,n,o;if(("Object"===(e=K(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=vr.exec(n.toString()))return t[1]}return jr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}$(jr,"isObjectLikeArray",_r);var Ar="function"==typeof M||"object"==typeof sr||"function"==typeof pr?function(r){return Sr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Sr(r).toLowerCase():t};function Er(r){return"function"===Ar(r)}var Tr=/./,Or="function"==typeof Object.defineProperty?Object.defineProperty:null;var Fr,xr=Object.defineProperty,Pr=Object.prototype,Vr=Pr.toString,kr=Pr.__defineGetter__,Ur=Pr.__defineSetter__,Br=Pr.__lookupGetter__,Nr=Pr.__lookupSetter__;Fr=function(){try{return Or({},"x",{}),!0}catch(r){return!1}}()?xr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Vr.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Vr.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Br.call(r,t)||Nr.call(r,t)?(n=r.__proto__,r.__proto__=Pr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&kr&&kr.call(r,t,e.get),a&&Ur&&Ur.call(r,t,e.set),r};var Ir=Fr;function Cr(r,t,e){Ir(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Gr(r){return"boolean"==typeof r}var Lr=Z();function Rr(){return Lr&&"symbol"==typeof Symbol.toStringTag}var $r=Object.prototype.toString;var Mr="function"==typeof H?H.toStringTag:"";var Xr=Rr()?function(r){var t,e,n;if(null==r)return $r.call(r);e=r[Mr],t=D(r,Mr);try{r[Mr]=void 0}catch(t){return $r.call(r)}return n=$r.call(r),t?r[Mr]=e:delete r[Mr],n}:function(r){return $r.call(r)},Zr=Boolean.prototype.toString;var Wr=Rr();function Yr(r){return"object"==typeof r&&(r instanceof Q||(Wr?function(r){try{return Zr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Xr(r)))}function zr(r){return Gr(r)||Yr(r)}function qr(){return new Function("return this;")()}Cr(zr,"isPrimitive",Gr),Cr(zr,"isObject",Yr);var Dr="object"==typeof self?self:null,Hr="object"==typeof window?window:null,Jr="object"==typeof ur?ur:null,Kr="object"==typeof globalThis?globalThis:null;var Qr=function(r){if(arguments.length){if(!Gr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return qr()}if(Kr)return Kr;if(Dr)return Dr;if(Hr)return Hr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),rt=Qr.document&&Qr.document.childNodes,tt=Int8Array;function et(){return/^\s*function\s*([^(]*)/i}var nt=/^\s*function\s*([^(]*)/i;function ot(r){return null!==r&&"object"==typeof r}Cr(et,"REGEXP",nt);var it=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!mr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ot);function at(r){var t,e,n,o;if(("Object"===(e=Xr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=nt.exec(n.toString()))return t[1]}return ot(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Cr(ot,"isObjectLikeArray",it);var ut="function"==typeof Tr||"object"==typeof tt||"function"==typeof rt?function(r){return at(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?at(r).toLowerCase():t};function ct(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===ut(r)}(r.next)}function lt(r){return"number"==typeof r}var ft=Number,pt=ft.prototype.toString;var st=Y();function yt(r){return"object"==typeof r&&(r instanceof ft||(st?function(r){try{return pt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===K(r)))}function vt(r){return lt(r)||yt(r)}$(vt,"isPrimitive",lt),$(vt,"isObject",yt);var bt="function"==typeof H&&"symbol"==typeof H("foo")&&D(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;var gt=/./,dt="function"==typeof Object.defineProperty?Object.defineProperty:null;var wt,ht=Object.defineProperty,mt=Object.prototype,jt=mt.toString,_t=mt.__defineGetter__,St=mt.__defineSetter__,At=mt.__lookupGetter__,Et=mt.__lookupSetter__;wt=function(){try{return dt({},"x",{}),!0}catch(r){return!1}}()?ht:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===jt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===jt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(At.call(r,t)||Et.call(r,t)?(n=r.__proto__,r.__proto__=mt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&_t&&_t.call(r,t,e.get),a&&St&&St.call(r,t,e.set),r};var Tt=wt;function Ot(r,t,e){Tt(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ft(r){return"boolean"==typeof r}var xt=Z();function Pt(){return xt&&"symbol"==typeof Symbol.toStringTag}var Vt=Object.prototype.toString;var kt="function"==typeof H?H.toStringTag:"";var Ut=Pt()?function(r){var t,e,n;if(null==r)return Vt.call(r);e=r[kt],t=D(r,kt);try{r[kt]=void 0}catch(t){return Vt.call(r)}return n=Vt.call(r),t?r[kt]=e:delete r[kt],n}:function(r){return Vt.call(r)},Bt=Boolean.prototype.toString;var Nt=Pt();function It(r){return"object"==typeof r&&(r instanceof Q||(Nt?function(r){try{return Bt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Ut(r)))}function Ct(r){return Ft(r)||It(r)}function Gt(){return new Function("return this;")()}Ot(Ct,"isPrimitive",Ft),Ot(Ct,"isObject",It);var Lt="object"==typeof self?self:null,Rt="object"==typeof window?window:null,$t="object"==typeof ur?ur:null,Mt="object"==typeof globalThis?globalThis:null;var Xt=function(r){if(arguments.length){if(!Ft(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Gt()}if(Mt)return Mt;if(Lt)return Lt;if(Rt)return Rt;if($t)return $t;throw new Error("unexpected error. Unable to resolve global object.")}(),Zt=Xt.document&&Xt.document.childNodes,Wt=Int8Array;function Yt(){return/^\s*function\s*([^(]*)/i}var zt=/^\s*function\s*([^(]*)/i;function qt(r){return null!==r&&"object"==typeof r}Ot(Yt,"REGEXP",zt);var Dt=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!mr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(qt);function Ht(r){var t,e,n,o;if(("Object"===(e=Ut(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=zt.exec(n.toString()))return t[1]}return qt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ot(qt,"isObjectLikeArray",Dt);var Jt="function"==typeof gt||"object"==typeof Wt||"function"==typeof Zt?function(r){return Ht(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Ht(r).toLowerCase():t};function Kt(r){return"function"===Jt(r)}var Qt=Object,re=/./,te="function"==typeof Object.defineProperty?Object.defineProperty:null;var ee,ne=Object.defineProperty,oe=Object.prototype,ie=oe.toString,ae=oe.__defineGetter__,ue=oe.__defineSetter__,ce=oe.__lookupGetter__,le=oe.__lookupSetter__;ee=function(){try{return te({},"x",{}),!0}catch(r){return!1}}()?ne:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ie.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===ie.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(ce.call(r,t)||le.call(r,t)?(n=r.__proto__,r.__proto__=oe,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ae&&ae.call(r,t,e.get),a&&ue&&ue.call(r,t,e.set),r};var fe=ee;function pe(r,t,e){fe(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function se(r){return"boolean"==typeof r}var ye=Z();function ve(){return ye&&"symbol"==typeof Symbol.toStringTag}var be=Object.prototype.toString;var ge="function"==typeof H?H.toStringTag:"";var de=ve()?function(r){var t,e,n;if(null==r)return be.call(r);e=r[ge],t=D(r,ge);try{r[ge]=void 0}catch(t){return be.call(r)}return n=be.call(r),t?r[ge]=e:delete r[ge],n}:function(r){return be.call(r)},we=Boolean.prototype.toString;var he=ve();function me(r){return"object"==typeof r&&(r instanceof Q||(he?function(r){try{return we.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===de(r)))}function je(r){return se(r)||me(r)}function _e(){return new Function("return this;")()}pe(je,"isPrimitive",se),pe(je,"isObject",me);var Se="object"==typeof self?self:null,Ae="object"==typeof window?window:null,Ee="object"==typeof ur?ur:null,Te="object"==typeof globalThis?globalThis:null;var Oe=function(r){if(arguments.length){if(!se(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return _e()}if(Te)return Te;if(Se)return Se;if(Ae)return Ae;if(Ee)return Ee;throw new Error("unexpected error. Unable to resolve global object.")}(),Fe=Oe.document&&Oe.document.childNodes,xe=Int8Array;function Pe(){return/^\s*function\s*([^(]*)/i}var Ve=/^\s*function\s*([^(]*)/i;function ke(r){return null!==r&&"object"==typeof r}pe(Pe,"REGEXP",Ve);var Ue=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!mr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ke);function Be(r){var t,e,n,o;if(("Object"===(e=de(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Ve.exec(n.toString()))return t[1]}return ke(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}pe(ke,"isObjectLikeArray",Ue);var Ne="function"==typeof re||"object"==typeof xe||"function"==typeof Fe?function(r){return Be(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Be(r).toLowerCase():t};var Ie,Ce,Ge=Object.getPrototypeOf;Ce=Object.getPrototypeOf,Ie="function"===Ne(Ce)?Ge:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===de(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Le=Ie;var Re=Object.prototype;function $e(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!mr(r)}(r)&&(t=function(r){return null==r?null:(r=Qt(r),Le(r))}(r),!t||!D(r,"constructor")&&D(t,"constructor")&&Kt(t.constructor)&&"[object Function]"===Ut(t.constructor)&&D(t,"isPrototypeOf")&&Kt(t.isPrototypeOf)&&(t===Re||function(r){var t;for(t in r)if(!D(r,t))return!1;return!0}(r)))}function Me(r,t){return $e(t)?(D(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Xe(r,t,e){var n,o,i,a;if(!ct(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!Er(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Me(n,e)))throw i;return $(o={},"next",u),$(o,"return",c),bt&&Er(r[bt])&&$(o,bt,l),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:lt(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return Xe(r[bt](),t,n)}}function Ze(r){return r!=r}var We=Z();var Ye=Object.prototype.toString;var ze="function"==typeof H?H.toStringTag:"";var qe=We&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Ye.call(r);e=r[ze],t=D(r,ze);try{r[ze]=void 0}catch(t){return Ye.call(r)}return n=Ye.call(r),t?r[ze]=e:delete r[ze],n}:function(r){return Ye.call(r)},De="function"==typeof Uint32Array;var He="function"==typeof Uint32Array?Uint32Array:null;var Je,Ke="function"==typeof Uint32Array?Uint32Array:void 0;Je=function(){var r,t;if("function"!=typeof He)return!1;try{r=function(r){return De&&r instanceof Uint32Array||"[object Uint32Array]"===qe(r)}(t=new He(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ke:function(){throw new Error("not implemented")};var Qe=Je,rn=Z();var tn=Object.prototype.toString;var en="function"==typeof H?H.toStringTag:"";var nn=rn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return tn.call(r);e=r[en],t=D(r,en);try{r[en]=void 0}catch(t){return tn.call(r)}return n=tn.call(r),t?r[en]=e:delete r[en],n}:function(r){return tn.call(r)},on="function"==typeof Float64Array;var an="function"==typeof Float64Array?Float64Array:null;var un,cn="function"==typeof Float64Array?Float64Array:void 0;un=function(){var r,t;if("function"!=typeof an)return!1;try{r=function(r){return on&&r instanceof Float64Array||"[object Float64Array]"===nn(r)}(t=new an([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?cn:function(){throw new Error("not implemented")};var ln=un,fn=Z();var pn=Object.prototype.toString;var sn="function"==typeof H?H.toStringTag:"";var yn=fn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return pn.call(r);e=r[sn],t=D(r,sn);try{r[sn]=void 0}catch(t){return pn.call(r)}return n=pn.call(r),t?r[sn]=e:delete r[sn],n}:function(r){return pn.call(r)},vn="function"==typeof Uint8Array;var bn="function"==typeof Uint8Array?Uint8Array:null;var gn,dn="function"==typeof Uint8Array?Uint8Array:void 0;gn=function(){var r,t;if("function"!=typeof bn)return!1;try{r=function(r){return vn&&r instanceof Uint8Array||"[object Uint8Array]"===yn(r)}(t=new bn(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?dn:function(){throw new Error("not implemented")};var wn=gn,hn=Z();var mn=Object.prototype.toString;var jn="function"==typeof H?H.toStringTag:"";var _n=hn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return mn.call(r);e=r[jn],t=D(r,jn);try{r[jn]=void 0}catch(t){return mn.call(r)}return n=mn.call(r),t?r[jn]=e:delete r[jn],n}:function(r){return mn.call(r)},Sn="function"==typeof Uint16Array;var An="function"==typeof Uint16Array?Uint16Array:null;var En,Tn="function"==typeof Uint16Array?Uint16Array:void 0;En=function(){var r,t;if("function"!=typeof An)return!1;try{r=function(r){return Sn&&r instanceof Uint16Array||"[object Uint16Array]"===_n(r)}(t=new An(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Tn:function(){throw new Error("not implemented")};var On,Fn={uint16:En,uint8:wn};(On=new Fn.uint16(1))[0]=4660;var xn=52===new Fn.uint8(On.buffer)[0],Pn=!0===xn?1:0,Vn=new ln(1),kn=new Qe(Vn.buffer);function Un(r){return Vn[0]=r,kn[Pn]}var Bn=Z();var Nn=Object.prototype.toString;var In="function"==typeof H?H.toStringTag:"";var Cn=Bn&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return Nn.call(r);e=r[In],t=D(r,In);try{r[In]=void 0}catch(t){return Nn.call(r)}return n=Nn.call(r),t?r[In]=e:delete r[In],n}:function(r){return Nn.call(r)},Gn="function"==typeof Float64Array;var Ln="function"==typeof Float64Array?Float64Array:null;var Rn,$n="function"==typeof Float64Array?Float64Array:void 0;Rn=function(){var r,t;if("function"!=typeof Ln)return!1;try{r=function(r){return Gn&&r instanceof Float64Array||"[object Float64Array]"===Cn(r)}(t=new Ln([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?$n:function(){throw new Error("not implemented")};var Mn=!0===xn?1:0,Xn=new Rn(1),Zn=new Qe(Xn.buffer);var Wn=Number.NEGATIVE_INFINITY;var Yn=.6931471803691238,zn=1.9082149292705877e-10;function qn(r){var t,e,n,o,i,a,u,c,l,f,p,s;return 0===r?Wn:Ze(r)||r<0?NaN:(i=0,(e=Un(r))<1048576&&(i-=54,e=Un(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(c=(e&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,t){return Xn[0]=r,Zn[Mn]=t>>>0,Xn[0]}(r,e|1072693248^c))-1,(1048575&2+e)<3?0===u?0===i?0:i*Yn+i*zn:(a=u*u*(.5-.3333333333333333*u),0===i?u-a:i*Yn-(a-i*zn-u)):(c=e-398458|0,l=440401-e|0,o=(p=(s=(f=u/(2+u))*f)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=n+o,(c|=l)>0?(t=.5*u*u,0===i?u-(t-f*(t+a)):i*Yn-(t-(f*(t+a)+i*zn)-u)):0===i?u-f*(u-a):i*Yn-(f*(u-a)-i*zn-u))))}var Dn=Number.POSITIVE_INFINITY;function Hn(r){return Ze(r)?r:(t=r)>=0&&t<=1?0===r?Wn:1===r?Dn:qn(r/(1-r)):NaN;var t}function Jn(r){return Xe(r,Hn)}export{Jn as default};
//# sourceMappingURL=mod.js.map
