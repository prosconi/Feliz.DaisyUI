"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{85:()=>{},926:(e,t,n)=>{function r(e){return Array.isArray(e)||ArrayBuffer.isView(e)}function o(e,t){return Object.getPrototypeOf(e).constructor===Object.getPrototypeOf(t).constructor}class i{constructor(e){this.iter=e}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const e=this.iter.next();return this.current=e.value,!e.done}"System.Collections.IEnumerator.Reset"(){throw new Error("JS iterators cannot be reset")}Dispose(){}}function s(e){return"function"==typeof e.GetEnumerator?e.GetEnumerator():new i(e[Symbol.iterator]())}function u(e){return{[Symbol.iterator](){return this},next(){const t=e["System.Collections.IEnumerator.MoveNext"]();return{done:!t,value:t?e["System.Collections.IEnumerator.get_Current"]():void 0}}}}function l(e,t){let n=e.toString(10);for(;n.length<t;)n="0"+n;return n}function c(e){const t=e;return"number"==typeof t.offset?t.offset:1===e.kind?0:-6e4*e.getTimezoneOffset()}function a(e,t){return(e=e<0&&null!=t&&10!==t?4294967295+e+1:e).toString(t)}class f{static id(e){return f.idMap.has(e)||f.idMap.set(e,++f.count),f.idMap.get(e)}}function d(e){return 2654435761*e|0}function h(e){return 0===e.length?0:e.reduce(((e,t)=>(e<<5)+e^t))}function m(e){if(null==e)return 0;switch(typeof e){case"boolean":return e?1:0;case"number":return d(e);case"string":return function(e){let t=0,n=5381;const r=e.length;for(;t<r;)n=33*n^e.charCodeAt(t++);return n}(e);default:return function(e){return"function"==typeof e.GetHashCode}(e)?e.GetHashCode():r(e)?function(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=m(e[r]);return h(n)}(e):e instanceof Date?function(e){return e.getTime()}(e):Object.getPrototypeOf(e).constructor===Object?h(Object.values(e).map((e=>m(e)))):d(f.id(e))}}function p(e,t){return function(e,t,n){if(null==e)return null==t;if(null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}(e,t,g)}function g(e,t){return e===t||(null==e?null==t:null!=t&&"object"==typeof e&&(function(e){return"function"==typeof e.Equals}(e)?e.Equals(t):r(e)?r(t)&&p(e,t):e instanceof Date?t instanceof Date&&0===y(e,t):Object.getPrototypeOf(e).constructor===Object&&function(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;n.sort(),r.sort();for(let o=0;o<n.length;o++)if(n[o]!==r[o]||!g(e[n[o]],t[r[o]]))return!1;return!0}(e,t)))}function y(e,t){let n,r;return"offset"in e&&"offset"in t?(n=e.getTime(),r=t.getTime()):(n=e.getTime()+c(e),r=t.getTime()+c(t)),n===r?0:n<r?-1:1}function E(e,t){return e===t?0:e<t?-1:1}function w(e,t){return function(e,t,n){if(null==e)return null==t?0:1;if(null==t)return-1;if(e.length!==t.length)return e.length<t.length?-1:1;for(let r=0,o=0;r<e.length;r++)if(o=n(e[r],t[r]),0!==o)return o;return 0}(e,t,v)}function v(e,t){return e===t?0:null==e?null==t?0:-1:null==t?1:"object"!=typeof e?e<t?-1:1:function(e){return"function"==typeof e.CompareTo}(e)?e.CompareTo(t):r(e)?r(t)?w(e,t):-1:e instanceof Date?t instanceof Date?y(e,t):-1:Object.getPrototypeOf(e).constructor===Object?function(e,t){const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return n.length<r.length?-1:1;n.sort(),r.sort();for(let o=0,i=0;o<n.length;o++){const s=n[o];if(s!==r[o])return s<r[o]?-1:1;if(i=v(e[s],t[s]),0!==i)return i}return 0}(e,t):-1}function b(e,t,n){return e(t,n)>0?t:n}function C(e){const t={};for(const n of e)t[n[0]]=n[1];return t}f.idMap=new WeakMap,f.count=0;const S=Symbol("curried");function x(e,t){if(null==t||t.length>1)return t;const n=(...n)=>{let r=t;for(let t=0;t<e;t++)r=r(n[t]);return r};return n[S]=t,n}function N(e,t,n){return r=>1===t?n(...e.concat([r])):N(e.concat([r]),t-1,n)}function I(e,t){return null==t||1===t.length?t:S in t?t[S]:N([],e,t)}function O(e,t=0){if(null!=e&&"object"==typeof e){if("function"==typeof e.toString)return e.toString();if(Symbol.iterator in e)return function(e){let t=0,n="[";for(const r of e){if(0===t)n+=O(r);else{if(100===t){n+="; ...";break}n+="; "+O(r)}t++}return n+"]"}(e);{const n=Object.getPrototypeOf(e).constructor;return n===Object&&t<10?"{ "+Object.entries(e).map((([e,n])=>e+" = "+O(n,t+1))).join("\n  ")+" }":n.name}}return String(e)}class A{get name(){return this.cases()[this.tag]}toJSON(){return 0===this.fields.length?this.name:[this.name].concat(this.fields)}toString(){return function(e,t){if(0===t.length)return e;{let n="",r=!0;return 1===t.length?(n=O(t[0]),r=n.indexOf(" ")>=0):n=t.map((e=>O(e))).join(", "),e+(r?" (":" ")+n+(r?")":"")}}(this.name,this.fields)}GetHashCode(){const e=this.fields.map((e=>m(e)));return e.splice(0,0,d(this.tag)),h(e)}Equals(e){return this===e||!!o(this,e)&&this.tag===e.tag&&p(this.fields,e.fields)}CompareTo(e){return this===e?0:o(this,e)?this.tag===e.tag?w(this.fields,e.fields):this.tag<e.tag?-1:1:-1}}class T{toJSON(){return function(e){const t={},n=Object.keys(e);for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}(this)}toString(){return function(e){return"{ "+Object.entries(e).map((([e,t])=>e+" = "+O(t))).join("\n  ")+" }"}(this)}GetHashCode(){return function(e){return h(Object.values(e).map((e=>m(e))))}(this)}Equals(e){return function(e,t){if(e===t)return!0;if(o(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++)if(!g(e[n[r]],t[n[r]]))return!1;return!0}return!1}(this,e)}CompareTo(e){return function(e,t){if(e===t)return 0;if(o(e,t)){const n=Object.keys(e);for(let r=0;r<n.length;r++){const o=v(e[n[r]],t[n[r]]);if(0!==o)return o}return 0}return-1}(this,e)}}function k(e){const t=e<0,n=(e=Math.abs(e))%36e5/6e4;return(t?"-":"+")+l(~~(e/36e5),2)+":"+l(n,2)}function D(e,t){const n=e.toISOString();return"first"===t?n.substring(0,n.indexOf("T")):n.substring(n.indexOf("T")+1,n.length-1)}function M(e,t,n){return t.replace(/(\w)\1*/g,(t=>{let r=Number.NaN;switch(t.substring(0,1)){case"y":const o=n?e.getUTCFullYear():e.getFullYear();r=t.length<4?o%100:o;break;case"M":r=(n?e.getUTCMonth():e.getMonth())+1;break;case"d":r=n?e.getUTCDate():e.getDate();break;case"H":r=n?e.getUTCHours():e.getHours();break;case"h":const i=n?e.getUTCHours():e.getHours();r=i>12?i%12:i;break;case"m":r=n?e.getUTCMinutes():e.getMinutes();break;case"s":r=n?e.getUTCSeconds():e.getSeconds();break;case"f":r=n?e.getUTCMilliseconds():e.getMilliseconds()}return Number.isNaN(r)?t:r<10&&t.length>1?"0"+r:""+r}))}const j=Symbol("numeric");function U(e,t){return"number"==typeof e?e.toPrecision(t):e[j]().toPrecision(t)}function G(e,t){return"number"==typeof e?e.toExponential(t):e[j]().toExponential(t)}function _(e){return"number"==typeof e?(Number(e)>>>0).toString(16):e[j]().toHex()}function L(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}const H=/(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;function P(e){return{input:e,cont:(t=e,e=>{H.lastIndex=0;const n=[],r=[];let o=0,i=H.exec(t);for(;i;){const e=i.index+(i[1]||"").length;n.push(t.substring(o,e).replace(/%%/g,"%")),r.push(i),o=H.lastIndex,H.lastIndex-=1,i=H.exec(t)}return 0===n.length?e(t.replace(/%%/g,"%")):(n.push(t.substring(o).replace(/%%/g,"%")),F(e,n,r))})};var t}function R(e){return function(e,t){return"string"==typeof t?e(t):t.cont(e)}((e=>e),e)}function q(e,t,n,r,o){let i="";if(t=t||"",o=o||"","number"==typeof(s=e)||(null==s?void 0:s[j]))switch("x"!==o.toLowerCase()&&(function(e,t){return function(e,t){return"number"==typeof e?e<t?-1:e>t?1:0:e.CompareTo(t)}(e,t)<0}(e,0)?(e=function(e,t){return"number"==typeof e?-1*e:e[j]().multiply(-1)}(e),i="-"):t.indexOf(" ")>=0?i=" ":t.indexOf("+")>=0&&(i="+")),r=null==r?null:parseInt(r,10),o){case"f":case"F":e=function(e,t){return"number"==typeof e?e.toFixed(t):e[j]().toFixed(t)}(e,r=null!=r?r:6);break;case"g":case"G":e=null!=r?U(e,r):U(e);break;case"e":case"E":e=null!=r?G(e,r):G(e);break;case"x":e=_(e);break;case"X":e=_(e).toUpperCase();break;default:e=String(e)}else e=e instanceof Date?function(e,t,n){return null!=e.offset?function(e,t){var n,r,o;const i=new Date(e.getTime()+(null!==(n=e.offset)&&void 0!==n?n:0));if("string"!=typeof t)return i.toISOString().replace(/\.\d+/,"").replace(/[A-Z]|\.\d+/g," ")+k(null!==(r=e.offset)&&void 0!==r?r:0);if(1!==t.length)return M(i,t,!0);switch(t){case"D":case"d":return D(i,"first");case"T":case"t":return D(i,"second");case"O":case"o":return function(e,t){const n=e.toISOString();return n.substring(0,n.length-1)+k(t)}(i,null!==(o=e.offset)&&void 0!==o?o:0);default:throw new Error("Unrecognized Date print format")}}(e,t):function(e,t){const n=1===e.kind;if("string"!=typeof t)return n?e.toUTCString():e.toLocaleString();if(1!==t.length)return M(e,t,n);switch(t){case"D":case"d":return n?D(e,"first"):e.toLocaleDateString();case"T":case"t":return n?D(e,"second"):e.toLocaleTimeString();case"O":case"o":return function(e,t){if(t)return e.toISOString();{const t=null==e.kind||2===e.kind;return l(e.getFullYear(),4)+"-"+l(e.getMonth()+1,2)+"-"+l(e.getDate(),2)+"T"+l(e.getHours(),2)+":"+l(e.getMinutes(),2)+":"+l(e.getSeconds(),2)+"."+l(e.getMilliseconds(),3)+(t?k(-6e4*e.getTimezoneOffset()):"")}}(e,n);default:throw new Error("Unrecognized Date print format")}}(e,t)}(e):O(e);var s;if(n="number"==typeof n?n:parseInt(n,10),isNaN(n))e=i+e;else{const r=t.indexOf("0")>=0,o=t.indexOf("-")>=0,s=o||!r?" ":"0";e="0"===s?i+(e=Y(e,n-i.length,s,o)):Y(i+e,n,s,o)}return e}function F(e,t,n,r="",o=-1){return(...i)=>{let s=r;const u=t.slice(),l=n.slice();for(const e of i){const[,,t,n,r,i]=l[0];let c=n;if(o>=0)c=o,o=-1;else if("*"===c){if(e<0)throw new Error("Non-negative number required");o=e;continue}s+=u[0],s+=q(e,t,c,r,i),u.splice(0,1),l.splice(0,1)}return 0===l.length?(s+=u[0],e(s)):F(e,u,l,s,o)}}function z(e,t){return Array.isArray(t)?t.join(e):Array.from(t).join(e)}function Y(e,t,n,r){n=n||" ",t-=e.length;for(let o=0;o<t;o++)e=r?e+n:n+e;return e}function W(e,t,n,r){if(r="number"==typeof r?r:0,(n="number"==typeof n?n:void 0)&&n<0)throw new Error("Count cannot be less than zero");if(0===n)return[];const o=1==(1&r),i=2==(2&r);t=(t=(t=t||[]).filter((e=>e)).map(L)).length>0?t:["\\s"];const s=[],u=new RegExp(t.join("|"),"g");let l=!0,c=0;do{const t=u.exec(e);if(null===t){const t=i?e.substring(c).trim():e.substring(c);(!o||t.length>0)&&s.push(t),l=!1}else{const r=i?e.substring(c,t.index).trim():e.substring(c,t.index);(!o||r.length>0)&&(null!=n&&s.length+1===n?(s.push(i?e.substring(c).trim():e.substring(c)),l=!1):s.push(r)),c=u.lastIndex}}while(l);return s}function J(e,t,n){if(t+(n||0)>e.length)throw new Error("Invalid startIndex and/or length");return null!=n?e.substr(t,n):e.substr(t)}class V{constructor(e){this.value=e}toJSON(){return this.value}toString(){return String(this.value)}GetHashCode(){return m(this.value)}Equals(e){return null!=e&&g(this.value,e instanceof V?e.value:e)}CompareTo(e){return null==e?1:v(this.value,e instanceof V?e.value:e)}}function $(e){return null==e||e instanceof V?new V(e):e}function B(e){if(null==e)throw new Error("Option has no value");return e instanceof V?e.value:e}function X(e,t){return null!=e?B(e):t}function Z(e,t){return null!=e?B(e):t()}function K(e,t){return null!=t?$(e(B(t))):void 0}class Q extends T{constructor(e,t){super(),this.head=e,this.tail=t}toString(){return"["+z("; ",this)+"]"}Equals(e){return this===e||((e,t)=>{e:for(;;){const n=e,r=t,o=[n.tail,r.tail];if(null!=o[0]){if(null!=o[1]){const i=o[0],s=o[1];if(g(n.head,r.head)){e=i,t=s;continue e}return!1}return!1}return null==o[1]}})(this,e)}GetHashCode(){return 0|((e,t,n)=>{for(;;){const r=e,o=t,i=n,s=i.tail;if(null==s)return 0|o;{const u=s;if(r>18)return 0|o;e=r+1,t=(o<<1)+m(i.head)+631*r,n=u}}})(0,0,this)}toJSON(e){return Array.from(this)}CompareTo(e){return 0|((e,t)=>{e:for(;;){const n=e,r=t,o=[n.tail,r.tail];if(null!=o[0]){if(null!=o[1]){const i=o[0],s=o[1],u=0|v(n.head,r.head);if(0===u){e=i,t=s;continue e}return 0|u}return 1}return null!=o[1]?-1:0}})(this,e)}GetEnumerator(){return new ee(this)}[Symbol.iterator](){return u(this.GetEnumerator())}"System.Collections.IEnumerable.GetEnumerator"(){return s(this)}}class ee{constructor(e){this.xs=e,this.it=this.xs,this.current=null}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current}"System.Collections.IEnumerator.get_Current"(){return this.current}"System.Collections.IEnumerator.MoveNext"(){const e=this,t=e.it.tail;if(null!=t){const n=t;return e.current=e.it.head,e.it=n,!0}return!1}"System.Collections.IEnumerator.Reset"(){const e=this;e.it=e.xs,e.current=null}Dispose(){}}function te(){return new Q(null,void 0)}function ne(e,t){return new Q(e,t)}function re(e){return null==e.tail}function oe(e){if(null!=e.tail)return e.head;throw new Error("List was empty\\nParameter name: list")}function ie(e){const t=e.tail;if(null!=t)return t;throw new Error("List was empty\\nParameter name: list")}function se(){return te()}function ue(e,t){return ne(e,t)}function le(e){return ne(e,te())}function ce(e){return re(e)}function ae(e){return oe(e)}function fe(e){return ie(e)}function de(e,t,n){let r=t,o=n;for(;!re(o);)r=e(r,oe(o)),o=ie(o);return r}function he(e){return de(((e,t)=>ne(t,e)),te(),e)}function me(e,t){de(((t,n)=>{e(n)}),void 0,t)}function pe(e){return function(e,t){let n=t;for(let t=e.length-1;t>=0;t--)n=ne(e[t],n);return n}(e,te())}function ge(e,t){return de(((e,t)=>ne(t,e)),t,he(e))}function ye(e,t){const n=te(),r=de(((t,n)=>{const r=new Q(e(n),void 0);return t.tail=r,r}),n,t),o=te();return r.tail=o,ie(n)}function Ee(e,t){const n=te(),r=de(((t,n)=>{const r=e(n);if(null==r)return t;{const e=new Q(B(r),void 0);return t.tail=e,e}}),n,t),o=te();return r.tail=o,ie(n)}function we(e,t,n){me((n=>{try{n(t)}catch(t){e(t)}}),n)}function ve(){return se()}function be(e,t,n){if(null==t)return null==n;if(null==n)return!1;{let r=0,o=!0;const i=0|t.length,s=0|n.length;if(i>s)return!1;if(i<s)return!1;for(;r<i&&o;)o=e(t[r],n[r]),r=r+1|0;return o}}const Ce="The input sequence has an insufficient number of elements.";function Se(){throw new Error("Enumeration has not started. Call MoveNext.")}function xe(){throw new Error("Enumeration already finished.")}class Ne{constructor(e){this.f=e}toString(){let e=0,t="seq [";const n=s(this);try{for(;e<4&&n["System.Collections.IEnumerator.MoveNext"]();)e>0&&(t+="; "),t+=O(n["System.Collections.Generic.IEnumerator`1.get_Current"]()),e=e+1|0;return 4===e&&(t+="; ..."),t+"]"}finally{n.Dispose()}}GetEnumerator(){return this.f()}[Symbol.iterator](){return u(this.GetEnumerator())}"System.Collections.IEnumerable.GetEnumerator"(){return this.f()}}class Ie{constructor(e,t,n){this.current=e,this.next=t,this.dispose=n}"System.Collections.Generic.IEnumerator`1.get_Current"(){return this.current()}"System.Collections.IEnumerator.get_Current"(){return this.current()}"System.Collections.IEnumerator.MoveNext"(){return this.next()}"System.Collections.IEnumerator.Reset"(){!function(){throw new Error("Reset is not supported on this enumerator.")}()}Dispose(){this.dispose()}}function Oe(e,t,n){return new Ie(e,t,n)}function Ae(e,t,n){let r,o=!1,i=$(e());const s=()=>{if(null!=i){const e=B(i);try{n(e)}finally{i=void 0}}},u=()=>{try{s()}finally{r=void 0}};return Oe((()=>(o||Se(),null!=r?B(r):xe())),(()=>{if(o||(o=!0),null!=i){const e=B(i);let n;try{n=t(e)}catch(e){throw u(),e}return null!=n?(r=n,!0):(u(),!1)}return!1}),s)}function Te(e){return function(e){return new Ne(e)}(e)}function ke(e){return t="source",null==e&&function(e){throw new Error(e)}(t),s(e);var t}function De(e){return Te((()=>s(e())))}function Me(e){return Te((()=>function(e){let t,n,r,o=!1,i=!1;const u=()=>{if(i=!0,null!=n){const e=n;try{e.Dispose()}finally{n=void 0}}if(null!=t){const e=t;try{e.Dispose()}finally{t=void 0}}};return Oe((()=>(o?i&&xe():Se(),null!=r?B(r):xe())),(()=>{let l;if(o||(o=!0),i)return!1;{let o;for(;null==o;){const i=[t,n];if(null!=i[0])if(null!=i[1]){const e=i[1];if(e["System.Collections.IEnumerator.MoveNext"]())r=$(e["System.Collections.Generic.IEnumerator`1.get_Current"]()),o=!0;else try{e.Dispose()}finally{n=void 0}}else{const e=i[0];e["System.Collections.IEnumerator.MoveNext"]()?(l=e["System.Collections.Generic.IEnumerator`1.get_Current"](),n=s(l)):(u(),o=!1)}else t=s(e)}return B(o)}}),(()=>{i||u()}))}(e)))}function je(){return De((()=>new Array(0)))}function Ue(e){return De((()=>function(e,t){const n=function(e,t){return"function"==typeof e?new e(t):new Array(t)}(void 0,1);return n[0]=e,n}(e)))}function Ge(e){return r(e)?pe(e):e instanceof Q?e:function(e){let t,n;if(r(e))return pe(e);if(e instanceof Q)return e;{const r=te();let o=r;const i=s(e);try{for(;i["System.Collections.IEnumerator.MoveNext"]();){const e=i["System.Collections.Generic.IEnumerator`1.get_Current"]();t=o,n=new Q(e,void 0),t.tail=n,o=n}}finally{i.Dispose()}const u=o,l=te();return u.tail=l,ie(r)}}(e)}function _e(e,t,n){return Te((()=>{let r=-1;return Ae(e,(e=>(r=r+1|0,t(r,e))),n)}))}function Le(e,t){return Me([e,t])}function He(e,t){return n=()=>ke(t),r=t=>t["System.Collections.IEnumerator.MoveNext"]()?$(e(t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0,o=e=>{e.Dispose()},Te((()=>Ae(n,r,o)));var n,r,o}function Pe(e,t){return Te((()=>{const n=ke(t);try{for(let t=1;t<=e;t++)if(!n["System.Collections.IEnumerator.MoveNext"]())throw new Error(Ce+"\\nParameter name: source");return function(e,t){return Oe((()=>t["System.Collections.Generic.IEnumerator`1.get_Current"]()),(()=>t["System.Collections.IEnumerator.MoveNext"]()),(()=>{try{t.Dispose()}finally{e()}}))}((()=>{}),n)}catch(e){throw n.Dispose(),e}}))}function Re(e,t,n,r,o){const i=function(e,t,n,r){const o=0|v(e,n);if(0===o)throw new Error("The step of a range cannot be zero");const i=o>0;return n=>{const o=0|v(n,t);return i&&o<=0||!i&&o>=0?[n,r(n,e)]:void 0}}(t,n,r,o);return De((()=>{return t=i,n=e,Te((()=>function(e,t){let n,r=t;return Oe((()=>{if(null!=n){const e=n[0];return n[1],e}return Se()}),(()=>{if(n=e(r),null!=n){n[0];const e=n[1];return r=e,!0}return!1}),(()=>{}))}(t,n)));var t,n}))}Symbol.iterator;class qe extends A{constructor(e,...t){super(),this.tag=0|e,this.fields=t}cases(){return["Writable","ReadWritable"]}}class Fe{constructor(e){var t,n;this.state=new qe(0,(t=new Array(b(((e,t)=>E(e,t)),e,10)),n=b(((e,t)=>E(e,t)),e,10),t.fill(null,0,0+n)),0)}}function ze(e){const t=e.state;if(1===t.tag){const n=0|t.fields[1],r=0|t.fields[2],o=t.fields[0],i=(r+1)%o.length|0;return e.state=i===n?new qe(0,o,n):new qe(1,o,n,i),$(o[r])}}class Ye extends T{constructor(e,t,n,r,o,i,s){super(),this.init=e,this.update=t,this.subscribe=n,this.view=r,this.setState=o,this.onError=i,this.syncDispatch=s}}function We(e,t){const n=t.init(e),o=n[0],i=new Fe(10);let u=!1,l=o;const c=function(e,t,n){if(null!=t){if(S in t){t=t[S];for(let e=0;e<n.length;e++)t=t(n[e]);return t}return N(n,1,t)}}(0,t.syncDispatch,[e=>{if(u)!function(e,t){const n=e.state;if(1===n.tag){const i=0|n.fields[1],s=0|n.fields[2],u=n.fields[0];u[i]=t;const l=(i+1)%u.length|0;e.state=l===s?new qe(1,(r=s,o=u,Array.from(De((()=>Le(Pe(r,o),De((()=>{return Le((e=r,t=o,_e((()=>ke(t)),((t,n)=>{if(t<e){if(n["System.Collections.IEnumerator.MoveNext"]())return $(n["System.Collections.Generic.IEnumerator`1.get_Current"]());throw new Error(Ce+"\\nParameter name: source")}}),(e=>{e.Dispose()}))),De((()=>{return e=e=>Ue(null),n=o.length,t=Re(0,1,n,0,((e,t)=>e+t)),De((()=>Me(He(e,t))));var e,t,n})));var e,t}))))))),u.length,0):new qe(1,u,l,s)}else{const r=0|n.fields[1],o=n.fields[0];o[r]=t;const i=(r+1)%o.length|0;e.state=new qe(1,o,i,r)}var r,o}(i,e);else{u=!0;let n=$(e);for(;null!=n;){const e=B(n);try{const n=t.update(e,l),r=n[0];t.setState(r,c),we((n=>{t.onError([R(P("Error in command while handling: %A"))(e),n])}),c,n[1]),l=r}catch(n){t.onError([R(P("Unable to process the message: %A"))(e),n])}n=ze(i)}u=!1}}]);t.setState(o,c),we((e=>{t.onError(["Error intitializing:",e])}),c,function(e){const t=te();let n=t;const o=e=>{n=de(((e,t)=>{const n=new Q(t,void 0);return e.tail=n,n}),n,e)};if(r(e))e.forEach(o);else if(e instanceof Q)me(o,e);else{const t=s(e);try{for(;t["System.Collections.IEnumerator.MoveNext"]();)o(t["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{t.Dispose()}}const i=n,u=te();return i.tail=u,ie(t)}(pe([(()=>{try{return t.subscribe(o)}catch(e){return t.onError(["Unable to subscribe:",e]),ve()}})(),n[1]])))}var Je=n(961),Ve=n(526);class $e extends T{constructor(e,t,n){super(),this.model=e,this.render=t,this.equal=n}}class Be extends Ve.Component{constructor(e){super(e)}shouldComponentUpdate(e,t){return!this.props.equal(this.props.model,e.model)}render(){return this.props.render()}}const Xe=Ve;function Ze(e){return{Dispose(){e()}}}function Ke(e){var t;t=e,(0,Ve.useEffect)((()=>{const e=t();return()=>{e.Dispose()}}))}function Qe(e,t){return Xe.useMemo(e,X(t,[]))}function et(e){const t=(r=e,Xe.useRef(r)),n=(o=e=>t.current(e),i=[],Xe.useCallback(o,X(i,[])));var r,o,i,s,u;return s=()=>{t.current=e},u=e=>(s(),Ze((()=>{}))),(0,Ve.useLayoutEffect)((()=>{const e=u();return()=>{e.Dispose()}})),n}const tt=(()=>{try{"undefined"!=typeof window&&"function"==typeof window.addEventListener&&(window.addEventListener("testPassiveEventSupport",(e=>{}),{passive:!0}),window.removeEventListener("testPassiveEventSupport",(e=>{})))}catch(e){}return!1})();function nt(e){return K((e=>e.passive&&!tt?{capture:e.capture,once:e.once,passive:!1}:e),e)}function rt(e){return null!=(t=e)?(e=>e.capture?{capture:!0}:void 0)(B(t)):void 0;var t}function ot(e,t){return 0===t.indexOf(e)?t:void 0}function it(e,t){return function(e,t){const n=e.lastIndexOf(t);return n>=0&&n===e.length-t.length}(t,e)?t:void 0}function st(e){const t=z("&",ye((e=>z("=",[encodeURIComponent(e[0]),encodeURIComponent(e[1])])),e));return""===t?"":"?"+t}function ut(e,t){return function(e){return 1===e?e=>{let t,n,r,o,i,s;return t=ot("/",e),null!=t?(n=t,"#"+n):(r=ot("#/",e),null!=r?(o=r,o):(i=ot("#",e),null!=i?(s=i,"#/"+J(s,1,s.length-1)):"#/"+e))}:e=>{let t,n;return t=ot("/",e),null!=t?(n=t,n):"/"+e}}(t)(z("/",ye((e=>e.indexOf("?")>=0||0===e.indexOf("#")||0===e.indexOf("/")?e:encodeURIComponent(e)),e)))}function lt(e){const t=he(e);return ce(t)?void 0:ce(fe(t))?[se(),ae(t)]:[he(fe(t)),ae(t)]}function ct(e,t,n){1===t?history.pushState(void 0,"",ut(e,n)):history.replaceState(void 0,"",ut(e,n));const r=document.createEvent("CustomEvent");r.initEvent("CUSTOM_NAVIGATION_EVENT",!0,!0),window.dispatchEvent(r)}function at(e,t){return function(e,t){let n,r;const o=te();let i=o,s=t;for(;!re(s);){let t=e(oe(s));for(;!re(t);)n=i,r=new Q(oe(t),void 0),n.tail=r,i=r,t=ie(t);s=ie(s)}const u=i,l=te();return u.tail=l,ie(o)}((e=>{if("string"!=typeof(t=e)||/^\s*$/.test(t))return se();{const t=function(e,...t){return 0===t.length?e.trimEnd():e.replace(new RegExp("["+L(t.join(""))+"]+$"),"")}(e,"#");if("?"===t)return se();if(null!=ot("?",t))return le(t);{const e=t.split("?");if(be(((e,t)=>e===t),e,null)||1!==e.length){if(be(((e,t)=>e===t),e,null)||2!==e.length)return se();if(""===e[1]){const t=e[0];return le(decodeURIComponent(t))}{const t=e[0],n=e[1];return pe([decodeURIComponent(t),"?"+n])}}{const t=e[0];return le(decodeURIComponent(t))}}}var t}),pe(W(null!=ot("#",e)?J(e,1,e.length-1):1!==t||null==it("#",e)&&null==it("#/",e)?e:"",["/"],null,0)))}const ft=function(e,t,n,r){const o=Xe.memo(e,x(2,X(I(2,n),null)));var i,s;return i=t=>{e.displayName=t},function(e,t,n){const r=ke(n);try{let n=t;for(;r["System.Collections.IEnumerator.MoveNext"]();)n=e(n,r["System.Collections.Generic.IEnumerator`1.get_Current"]())}finally{r.Dispose()}}(((e,t)=>{i(t)}),void 0,null==(s=t)?[]:[B(s)]),e=>Xe.createElement(o,function(e,t){if(null==e)return t;{const n=e;return t.key=n(t),t}}(r,e))}((e=>{const t=et((t=>{const n=X(e.onUrlChanged,(e=>{}));!function(e,t,n){t(at(2===e?window.location.pathname+window.location.search:window.location.hash,e))}(X(e.hashMode,1),n)}));if(window.navigator.userAgent.indexOf("Trident")>=0||window.navigator.userAgent.indexOf("MSIE")>=0){const e="hashchange",n=e=>{t(e)},r=void 0,o=Qe((()=>nt(r)),[r]),i=Qe((()=>rt(r)),[r]),s=Qe((()=>e=>{n(e)}),[n]);Ke(et((()=>(null==o?window.addEventListener(e,s):window.addEventListener(e,s,o),Ze((()=>{null==i?window.removeEventListener(e,s):window.removeEventListener(e,s,i)}))))))}else{const e="popstate",n=t,r=void 0,o=Qe((()=>nt(r)),[r]),i=Qe((()=>rt(r)),[r]),s=Qe((()=>e=>{n(e)}),[n]);Ke(et((()=>(null==o?window.addEventListener(e,s):window.addEventListener(e,s,o),Ze((()=>{null==i?window.removeEventListener(e,s):window.removeEventListener(e,s,i)}))))))}const n="CUSTOM_NAVIGATION_EVENT",r=t,o=void 0,i=Qe((()=>nt(o)),[o]),s=Qe((()=>rt(o)),[o]),u=Qe((()=>e=>{r(e)}),[r]);Ke(et((()=>(null==i?window.addEventListener(n,u):window.addEventListener(n,u,i),Ze((()=>{null==s?window.removeEventListener(n,u):window.removeEventListener(n,u,s)}))))));const l=e.application;return null==l?null:l}),void 0,undefined,undefined);class dt extends A{constructor(e,...t){super(),this.tag=0|e,this.fields=t}cases(){return["Install","Themes","Colors","Alert"]}}const ht=new dt(0);function mt(e){let t;switch(t=ce(e)?3:"themes"===ae(e)?ce(fe(e))?0:4:"colors"===ae(e)?ce(fe(e))?1:4:"alert"===ae(e)&&ce(fe(e))?2:4,t){case 0:return new dt(1);case 1:return new dt(2);case 2:return new dt(3);case 3:return new dt(0);case 4:return ht}}function pt(e){return[e,se()]}function gt(e){switch(e.tag){case 1:return pt(le("themes"));case 2:return pt(le("colors"));case 3:return pt(le("alert"));default:return pt(se())}}function yt(e){const t=gt(e);return n=e=>{const n=t[1];Z(K((e=>{ct(ge(e[0],le(e[1]+st(n))),1,2)}),lt(t[0])),(()=>{ct(le(st(n)),1,2)}))},le(n);var n}function Et(e,t){const n=function(e){return de(x(2,(e=>{const t=e[0],n=e[1];return e=>{const r=e;return"className"===r[0]?[ue(O(r[1]),t),n]:[t,ue(e,n)]}})),[se(),se()],he(e))}(t);return ue(["className",z(" ",ue(e,n[0]))],n[1])}function wt(){return(0,Ve.createElement)("div",{children:["WIP"]})}function vt(e,t,n){let r,o;const i=W(t,["\n"],null,0),s=pe([(0,Ve.createElement)("div",{className:"description",children:Xe.Children.toArray([e])}),(r=pe([(o=le((0,Ve.createElement)("div",{className:"mockup-code",children:Xe.Children.toArray(Array.from((u=(e,t)=>(0,Ve.createElement)("pre",C(Ge(De((()=>Le(Ue(["data-prefix",a(e+1)]),De((()=>Le(t.indexOf("// ")>=0?Ue(["className","text-warning"]):je(),De((()=>Ue(["children",Xe.Children.toArray([(0,Ve.createElement)("code",{children:[t]})])])))))))))))),l=i,_e((()=>ke(l)),((e,t)=>t["System.Collections.IEnumerator.MoveNext"]()?$(u(e,t["System.Collections.Generic.IEnumerator`1.get_Current"]())):void 0),(e=>{e.Dispose()})))))})),(0,Ve.createElement)("div",{className:"w-full",children:Xe.Children.toArray(Array.from(o))})),(0,Ve.createElement)("div",C(Et("divider",pe([["className","divider-vertical"],["children","👉"],["className","text-neutral"],["className","after:bg-opacity-30 before:bg-opacity-30"]])))),(0,Ve.createElement)("div",{className:"w-full",children:Xe.Children.toArray([n])})]),(0,Ve.createElement)("div",{className:"flex lg:flex-row w-full",children:Xe.Children.toArray(Array.from(r))}))]);var u,l;return(0,Ve.createElement)("div",{className:"mb-10",children:Xe.Children.toArray(Array.from(s))})}const bt=(()=>{const e=(0,Ve.createElement)("div",{"data-theme":"cupcake",children:Xe.Children.toArray([(0,Ve.createElement)("button",C(Et("btn",pe([["className","btn-primary"],["children","This is haloween style button"]]))))])});return vt((0,Ve.createElement)("div",{dangerouslySetInnerHTML:{__html:"Use <code class='code'>theme.YOUR_THEME</code> to apply one of existing themes to any element on a page."}}),'Html.div [\n    theme.cupcake // <-- this is the theme\n    prop.children [\n        Daisy.button.button [\n            button.primary\n            prop.text "This is haloween style button"\n        ]\n    ]\n]',e)})(),Ct=(()=>{let e,t;const n=le((0,Ve.createElement)("div",C(Et("card",pe([["data-theme","cyberpunk"],["className","bordered"],["children",Xe.Children.toArray([(e=le((0,Ve.createElement)("img",{src:"https://picsum.photos/id/1005/400/250"})),(0,Ve.createElement)("figure",{children:Xe.Children.toArray(Array.from(e))})),(0,Ve.createElement)("div",{className:"card-body",children:Xe.Children.toArray([(0,Ve.createElement)("h2",{className:"card-title",children:"Some title"}),(0,Ve.createElement)("p",{children:["What a cool library, isn't it?"]}),(0,Ve.createElement)("div",{className:"card-actions",children:Xe.Children.toArray([(0,Ve.createElement)("button",C(Et("btn",pe([["className","btn-primary"],["children","Click or something"]]))))])})])})])]])))));return t=(0,Ve.createElement)("div",{className:"max-w-lg",children:Xe.Children.toArray(Array.from(n))}),vt((0,Ve.createElement)("div",{dangerouslySetInnerHTML:{__html:"You can even use it on any element or any part of page. Yes, also for whole <code class='code'>&lt;body&gt;</code>!"}}),'Daisy.card [\n    theme.cyberpunk // <-- use cyberpunk here\n    card.bordered\n    prop.children [\n        Html.figure [\n            Html.img [ prop.src "https://picsum.photos/id/1005/400/250" ]\n        ]\n        Daisy.cardBody [\n            Daisy.cardTitle "Some title"\n            Html.p "What a cool library, isn\'t it?"\n            Daisy.cardActions [\n                Daisy.button.button [\n                    button.primary\n                    prop.text "Click or something"\n                ]\n            ]\n        ]\n    ]\n]',t)})();function St(){return Ve.createElement(Ve.Fragment,{},bt,Ct)}const xt=(()=>{const e=(0,Ve.createElement)("div",{"data-theme":"cupcake",children:Xe.Children.toArray([(0,Ve.createElement)("button",C(Et("btn",pe([["className","btn-primary"],["children","This is haloween style button"]]))))])});return vt((0,Ve.createElement)("div",{dangerouslySetInnerHTML:{__html:"Use <code class='code'>theme.YOUR_THEME</code> to apply one of existing themes to any element on a page."}}),'Html.div [\n    theme.cupcake // <-- this is the theme\n    prop.children [\n        Daisy.button.button [\n            button.primary\n            prop.text "This is haloween style button"\n        ]\n    ]\n]',e)})();function Nt(){return Ve.createElement(Ve.Fragment,{},xt)}class It extends A{constructor(e,...t){super(),this.tag=0|e,this.fields=t}cases(){return["UrlChanged"]}}class Ot extends T{constructor(e){super(),this.Page=e}}function At(e,t,n){let r,o;const i=(e,n)=>{const r=le((0,Ve.createElement)("a",C(Ge(De((()=>Le(g(t,n)?Ue(["className","active"]):je(),De((()=>Le(Ue(["children",e]),De((()=>{let e,t;return Le(Ue(["href",(e=gt(n),t=e[1],Z(K((e=>ut(ge(e[0],le(e[1]+st(t))),2)),lt(e[0])),(()=>ut(le(st(t)),2))))]),De((()=>Ue(["onClick",e=>{!function(e){e.preventDefault(),ct(le(e.currentTarget.attributes.href.value),1,2)}(e)}]))))}))))))))))));return(0,Ve.createElement)("li",{children:Xe.Children.toArray(Array.from(r))})};return(0,Ve.createElement)("div",C(Et("drawer",pe([["className","drawer-mobile"],["children",Xe.Children.toArray([(0,Ve.createElement)("input",C(Et("drawer-toggle",pe([["type","checkbox"],["id","main-menu"]])))),(0,Ve.createElement)("div",{className:"drawer-side",children:Xe.Children.toArray([(0,Ve.createElement)("label",C(Et("drawer-overlay",le(["htmlFor","main-menu"])))),(0,Ve.createElement)("aside",{className:"flex flex-col border-r w-80",children:Xe.Children.toArray([(r=pe([(0,Ve.createElement)("span",{className:"text-primary",children:"Feliz."}),"DaisyUI"]),(0,Ve.createElement)("div",{className:"inline-block text-3xl font-title px-5 py-5 font-bold",children:Xe.Children.toArray(Array.from(r))})),(0,Ve.createElement)("ul",C(Et("menu",pe([["className","compact"],["className","flex flex-col p-4 pt-0"],["children",Xe.Children.toArray([(0,Ve.createElement)("li",{className:"menu-title",children:Xe.Children.toArray([(0,Ve.createElement)("span",{children:["Docs"]})])}),i("Install",new dt(0)),i("Themes",new dt(1)),i("Colors",new dt(2))])]])))),(0,Ve.createElement)("ul",C(Et("menu",pe([["className","compact"],["className","flex flex-col p-4 pt-0"],["children",Xe.Children.toArray([(0,Ve.createElement)("li",{className:"menu-title",children:Xe.Children.toArray([(0,Ve.createElement)("span",{children:["Components"]})])}),i("Alert",new dt(3))])]]))))])})])}),(0,Ve.createElement)("div",{className:"drawer-content",children:Xe.Children.toArray([(o=pe([(0,Ve.createElement)("h2",C(pe([(s=["className","text-primary"],u=["className","my-6 text-5xl font-bold"],["className",z(" ",Ee((e=>{const t=e;return"className"===t[0]?O(t[1]):void 0}),pe([s,u])))]),["children",e]]))),n]),(0,Ve.createElement)("div",{className:"px-5 py-5",children:Xe.Children.toArray(Array.from(o))}))])})])]]))));var s,u}function Tt(e){const t=e.dispatch,n=e.state;let r;switch(n.Page.tag){case 0:r=["Installation",(0,Ve.createElement)(wt,null)];break;case 1:r=["Themes",(0,Ve.createElement)(St,null)];break;case 2:r=["Colors",(0,Ve.createElement)(Nt,null)];break;default:throw new Error("Match failure: Docs.Router.Page")}return ft({hashMode:2,onUrlChanged:e=>{t(new It(0,mt(e)))},application:Ve.createElement(Ve.Fragment,{},At(r[0],n.Page,r[1]))})}var kt;(0,Ve.createElement)("div",{}),function(e){We(void 0,e)}(("safer-app",function(e,t,n){return function(e,t){return new Ye(t.init,t.update,t.subscribe,t.view,e,t.onError,t.syncDispatch)}(((r,o)=>{Je.render(e(((e,t)=>e===t),x(2,function(e){return I(2,e.view)}(n)),r,o),document.getElementById(t))}),n)}(((e,t,n,r)=>function(e,t,n,r){return Ve.createElement(Be,new $e(n,(()=>t(n,r)),e))}(e,t,n,r)),"safer-app",new Ye((function(){const e=mt(at(window.location.pathname+window.location.search,2));return[new Ot(e),yt(e)]}),((e,t)=>function(e,t){return[new Ot(e.fields[0]),ve()]}(e)),(e=>ve()),kt=(e,t)=>(0,Ve.createElement)(Tt,{state:e,dispatch:t}),((e,t)=>{kt(e,t)}),(e=>{var t,n;t=e[0],n=e[1],console.error(t,n)}),x(2,(e=>e))))))}},e=>{var t=t=>e(e.s=t);e.O(0,[216],(()=>(t(926),t(85)))),e.O()}]);
//# sourceMappingURL=app.0feb45a87db592037759.js.map