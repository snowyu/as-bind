let idofCounter=0;const idof=()=>idofCounter++;!function(){"use strict";var n=function(){},e={},t=[],r=[];function o(e,o){var i,a,s,l,c=r;for(l=arguments.length;l-- >2;)t.push(arguments[l]);for(o&&null!=o.children&&(t.length||t.push(o.children),delete o.children);t.length;)if((a=t.pop())&&void 0!==a.pop)for(l=a.length;l--;)t.push(a[l]);else"boolean"==typeof a&&(a=null),(s="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(s=!1)),s&&i?c[c.length-1]+=a:c===r?c=[a]:c.push(a),i=s;var d=new n;return d.nodeName=e,d.children=c,d.attributes=null==o?void 0:o,d.key=null==o?void 0:o.key,d}function i(n,e){for(var t in e)n[t]=e[t];return n}function a(n,e){n&&("function"==typeof n?n(e):n.current=e)}var s="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,l=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=[];function d(n){!n._dirty&&(n._dirty=!0)&&1==c.push(n)&&s(p)}function p(){for(var n;n=c.pop();)n._dirty&&I(n)}function u(n,e,t){return"string"==typeof e||"number"==typeof e?void 0!==n.splitText:"string"==typeof e.nodeName?!n._componentConstructor&&f(n,e.nodeName):t||n._componentConstructor===e.nodeName}function f(n,e){return n.normalizedNodeName===e||n.nodeName.toLowerCase()===e.toLowerCase()}function h(n){var e=i({},n.attributes);e.children=n.children;var t=n.nodeName.defaultProps;if(void 0!==t)for(var r in t)void 0===e[r]&&(e[r]=t[r]);return e}function m(n){var e=n.parentNode;e&&e.removeChild(n)}function b(n,e,t,r,o){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)a(t,null),a(r,n);else if("class"!==e||o)if("style"===e){if(r&&"string"!=typeof r&&"string"!=typeof t||(n.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof t)for(var i in t)i in r||(n.style[i]="");for(var i in r)n.style[i]="number"==typeof r[i]&&!1===l.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===e)r&&(n.innerHTML=r.__html||"");else if("o"==e[0]&&"n"==e[1]){var s=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),r?t||n.addEventListener(e,y,s):n.removeEventListener(e,y,s),(n._listeners||(n._listeners={}))[e]=r}else if("list"!==e&&"type"!==e&&!o&&e in n){try{n[e]=null==r?"":r}catch(n){}null!=r&&!1!==r||"spellcheck"==e||n.removeAttribute(e)}else{var c=o&&e!==(e=e.replace(/^xlink:?/,""));null==r||!1===r?c?n.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):n.removeAttribute(e):"function"!=typeof r&&(c?n.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),r):n.setAttribute(e,r))}else n.className=r||""}function y(n){return this._listeners[n.type](n)}var g=[],w=0,x=!1,v=!1;function _(){for(var n;n=g.shift();)n.componentDidMount&&n.componentDidMount()}function A(n,e,t,r,o,i){w++||(x=null!=o&&void 0!==o.ownerSVGElement,v=null!=n&&!("__preactattr_"in n));var a=k(n,e,t,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--w||(v=!1,i||_()),a}function k(n,e,t,r,o){var i=n,a=x;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return n&&void 0!==n.splitText&&n.parentNode&&(!n._component||o)?n.nodeValue!=e&&(n.nodeValue=e):(i=document.createTextNode(e),n&&(n.parentNode&&n.parentNode.replaceChild(i,n),S(n,!0))),i.__preactattr_=!0,i;var s,l,c=e.nodeName;if("function"==typeof c)return function(n,e,t,r){var o=n&&n._component,i=o,a=n,s=o&&n._componentConstructor===e.nodeName,l=s,c=h(e);for(;o&&!l&&(o=o._parentComponent);)l=o.constructor===e.nodeName;o&&l&&(!r||o._component)?(O(o,c,3,t,r),n=o.base):(i&&!s&&(z(i),n=a=null),o=E(e.nodeName,c,t),n&&!o.nextBase&&(o.nextBase=n,a=null),O(o,c,1,t,r),n=o.base,a&&n!==a&&(a._component=null,S(a,!1)));return n}(n,e,t,r);if(x="svg"===c||"foreignObject"!==c&&x,c=String(c),(!n||!f(n,c))&&(s=c,(l=x?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,i=l,n)){for(;n.firstChild;)i.appendChild(n.firstChild);n.parentNode&&n.parentNode.replaceChild(i,n),S(n,!0)}var d=i.firstChild,p=i.__preactattr_,y=e.children;if(null==p){p=i.__preactattr_={};for(var g=i.attributes,w=g.length;w--;)p[g[w].name]=g[w].value}return!v&&y&&1===y.length&&"string"==typeof y[0]&&null!=d&&void 0!==d.splitText&&null==d.nextSibling?d.nodeValue!=y[0]&&(d.nodeValue=y[0]):(y&&y.length||null!=d)&&function(n,e,t,r,o){var i,a,s,l,c,d=n.childNodes,p=[],f={},h=0,b=0,y=d.length,g=0,w=e?e.length:0;if(0!==y)for(var x=0;x<y;x++){var v=d[x],_=v.__preactattr_;null!=(A=w&&_?v._component?v._component.__key:_.key:null)?(h++,f[A]=v):(_||(void 0!==v.splitText?!o||v.nodeValue.trim():o))&&(p[g++]=v)}if(0!==w)for(x=0;x<w;x++){var A;if(c=null,null!=(A=(l=e[x]).key))h&&void 0!==f[A]&&(c=f[A],f[A]=void 0,h--);else if(b<g)for(i=b;i<g;i++)if(void 0!==p[i]&&u(a=p[i],l,o)){c=a,p[i]=void 0,i===g-1&&g--,i===b&&b++;break}c=k(c,l,t,r),s=d[x],c&&c!==n&&c!==s&&(null==s?n.appendChild(c):c===s.nextSibling?m(s):n.insertBefore(c,s))}if(h)for(var x in f)void 0!==f[x]&&S(f[x],!1);for(;b<=g;)void 0!==(c=p[g--])&&S(c,!1)}(i,y,t,r,v||null!=p.dangerouslySetInnerHTML),function(n,e,t){var r;for(r in t)e&&null!=e[r]||null==t[r]||b(n,r,t[r],t[r]=void 0,x);for(r in e)"children"===r||"innerHTML"===r||r in t&&e[r]===("value"===r||"checked"===r?n[r]:t[r])||b(n,r,t[r],t[r]=e[r],x)}(i,e.attributes,p),x=a,i}function S(n,e){var t=n._component;t?z(t):(null!=n.__preactattr_&&a(n.__preactattr_.ref,null),!1!==e&&null!=n.__preactattr_||m(n),C(n))}function C(n){for(n=n.lastChild;n;){var e=n.previousSibling;S(n,!0),n=e}}var T=[];function E(n,e,t){var r,o=T.length;for(n.prototype&&n.prototype.render?(r=new n(e,t),U.call(r,e,t)):((r=new U(e,t)).constructor=n,r.render=j);o--;)if(T[o].constructor===n)return r.nextBase=T[o].nextBase,T.splice(o,1),r;return r}function j(n,e,t){return this.constructor(n,t)}function O(n,t,r,o,i){n._disable||(n._disable=!0,n.__ref=t.ref,n.__key=t.key,delete t.ref,delete t.key,void 0===n.constructor.getDerivedStateFromProps&&(!n.base||i?n.componentWillMount&&n.componentWillMount():n.componentWillReceiveProps&&n.componentWillReceiveProps(t,o)),o&&o!==n.context&&(n.prevContext||(n.prevContext=n.context),n.context=o),n.prevProps||(n.prevProps=n.props),n.props=t,n._disable=!1,0!==r&&(1!==r&&!1===e.syncComponentUpdates&&n.base?d(n):I(n,1,i)),a(n.__ref,n))}function I(n,e,t,r){if(!n._disable){var o,a,s,l=n.props,c=n.state,d=n.context,p=n.prevProps||l,u=n.prevState||c,f=n.prevContext||d,m=n.base,b=n.nextBase,y=m||b,x=n._component,v=!1,k=f;if(n.constructor.getDerivedStateFromProps&&(c=i(i({},c),n.constructor.getDerivedStateFromProps(l,c)),n.state=c),m&&(n.props=p,n.state=u,n.context=f,2!==e&&n.shouldComponentUpdate&&!1===n.shouldComponentUpdate(l,c,d)?v=!0:n.componentWillUpdate&&n.componentWillUpdate(l,c,d),n.props=l,n.state=c,n.context=d),n.prevProps=n.prevState=n.prevContext=n.nextBase=null,n._dirty=!1,!v){o=n.render(l,c,d),n.getChildContext&&(d=i(i({},d),n.getChildContext())),m&&n.getSnapshotBeforeUpdate&&(k=n.getSnapshotBeforeUpdate(p,u));var C,T,j=o&&o.nodeName;if("function"==typeof j){var U=h(o);(a=x)&&a.constructor===j&&U.key==a.__key?O(a,U,1,d,!1):(C=a,n._component=a=E(j,U,d),a.nextBase=a.nextBase||b,a._parentComponent=n,O(a,U,0,d,!1),I(a,1,t,!0)),T=a.base}else s=y,(C=x)&&(s=n._component=null),(y||1===e)&&(s&&(s._component=null),T=A(s,o,d,t||!m,y&&y.parentNode,!0));if(y&&T!==y&&a!==x){var N=y.parentNode;N&&T!==N&&(N.replaceChild(T,y),C||(y._component=null,S(y,!1)))}if(C&&z(C),n.base=T,T&&!r){for(var P=n,B=n;B=B._parentComponent;)(P=B).base=T;T._component=P,T._componentConstructor=P.constructor}}for(!m||t?g.push(n):v||n.componentDidUpdate&&n.componentDidUpdate(p,u,k);n._renderCallbacks.length;)n._renderCallbacks.pop().call(n);w||r||_()}}function z(n){var e=n.base;n._disable=!0,n.componentWillUnmount&&n.componentWillUnmount(),n.base=null;var t=n._component;t?z(t):e&&(null!=e.__preactattr_&&a(e.__preactattr_.ref,null),n.nextBase=e,m(e),T.push(n),C(e)),a(n.__ref,null)}function U(n,e){this._dirty=!0,this.context=e,this.props=n,this.state=this.state||{},this._renderCallbacks=[]}function N(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function P(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?N(Object(t),!0).forEach((function(e){B(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function B(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}i(U.prototype,{setState:function(n,e){this.prevState||(this.prevState=this.state),this.state=i(i({},this.state),"function"==typeof n?n(this.state,this.props):n),e&&this._renderCallbacks.push(e),d(this)},forceUpdate:function(n){n&&this._renderCallbacks.push(n),I(this,2)},render:function(){}});const M="undefined"!=typeof BigUint64Array,$=Symbol(),D=new TextDecoder("utf-16le",{fatal:!0});function F(n,e){let t=new Uint32Array(n)[e+-4>>>2]>>>1;const r=new Uint16Array(n,e,t);if(t<=192)return String.fromCharCode(...r);try{return D.decode(r)}catch{let n="",e=0;for(;t-e>1024;)n+=String.fromCharCode(...r.subarray(e,e+=1024));return n+String.fromCharCode(...r.subarray(e))}}function W(n){const e={};function t(n,e){return n?F(n.buffer,e):"<yet unknown>"}const r=n.env=n.env||{};return r.abort=r.abort||function(n,o,i,a){const s=e.memory||r.memory;throw Error(`abort: ${t(s,n)} at ${t(s,o)}:${i}:${a}`)},r.trace=r.trace||function(n,o,...i){const a=e.memory||r.memory;console.log(`trace: ${t(a,n)}${o?" ":""}${i.slice(0,o).join(", ")}`)},r.seed=r.seed||Date.now,n.Math=n.Math||Math,n.Date=n.Date||Date,e}const J=function(){throw Error("Operation requires compiling with --exportRuntime")};function R(n,e){const t=e.exports,r=t.memory,o=t.table,i=t.__new||J,a=t.__pin||J,s=t.__unpin||J,l=t.__collect||J,c=t.__rtti_base,d=c?function(n){return n[c>>>2]}:J;function p(n){const e=function(n){const e=new Uint32Array(r.buffer);if((n>>>=0)>=d(e))throw Error(`invalid id: ${n}`);return e[(c+4>>>2)+2*n]}(n);if(!(7&e))throw Error(`not an array: ${n}, flags=${e}`);return e}function u(n){const e=new Uint32Array(r.buffer);if((n>>>=0)>=d(e))throw Error(`invalid id: ${n}`);return e[(c+4>>>2)+2*n+1]}function f(n){return 31-Math.clz32(n>>>6&31)}function h(n,e,t){const o=r.buffer;if(t)switch(n){case 2:return new Float32Array(o);case 3:return new Float64Array(o)}else switch(n){case 0:return new(e?Int8Array:Uint8Array)(o);case 1:return new(e?Int16Array:Uint16Array)(o);case 2:return new(e?Int32Array:Uint32Array)(o);case 3:return new(e?BigInt64Array:BigUint64Array)(o)}throw Error(`unsupported align: ${n}`)}function m(n){const e=new Uint32Array(r.buffer),t=p(e[n+-8>>>2]),o=f(t);let i=4&t?n:e[n+4>>>2];const a=2&t?e[n+12>>>2]:e[i+-4>>>2]>>>o;return h(o,2048&t,4096&t).subarray(i>>>=o,i+a)}function b(n,e,t){return new n(y(n,e,t))}function y(n,e,t){const o=r.buffer,i=new Uint32Array(o),a=i[t+4>>>2];return new n(o,a,i[a+-4>>>2]>>>e)}function g(e,t,r){n[`__get${t}`]=b.bind(null,e,r),n[`__get${t}View`]=y.bind(null,e,r)}return n.__new=i,n.__pin=a,n.__unpin=s,n.__collect=l,n.__newString=function(n){if(null==n)return 0;const e=n.length,t=i(e<<1,1),o=new Uint16Array(r.buffer);for(var a=0,s=t>>>1;a<e;++a)o[s+a]=n.charCodeAt(a);return t},n.__newArrayBuffer=function(n){if(null==n)return 0;const e=new Uint8Array(n),t=i(e.length,0);return new Uint8Array(r.buffer).set(e,t),t},n.__getString=function(n){if(!n)return null;const e=r.buffer;if(1!==new Uint32Array(e)[n+-8>>>2])throw Error(`not a string: ${n}`);return F(e,n)},n.__newArray=function(n,e){const t=p(n),o=f(t),l=e.length,c=i(l<<o,4&t?n:0);let d;if(4&t)d=c;else{a(c);const e=i(2&t?16:12,n);s(c);const p=new Uint32Array(r.buffer);p[e+0>>>2]=c,p[e+4>>>2]=c,p[e+8>>>2]=l<<o,2&t&&(p[e+12>>>2]=l),d=e}const u=h(o,2048&t,4096&t);if(16384&t)for(let n=0;n<l;++n){const t=e[n];u[(c>>>o)+n]=t}else u.set(e,c>>>o);return d},n.__getArrayView=m,n.__getArray=function(n){const e=m(n),t=e.length,r=new Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r},n.__getArrayBuffer=function(n){const e=r.buffer,t=new Uint32Array(e)[n+-4>>>2];return e.slice(n,n+t)},[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((n=>{g(n,n.name,31-Math.clz32(n.BYTES_PER_ELEMENT))})),M&&[BigUint64Array,BigInt64Array].forEach((n=>{g(n,n.name.slice(3),3)})),n.__instanceof=function(n,e){const t=new Uint32Array(r.buffer);let o=t[n+-8>>>2];if(o<=d(t))do{if(o==e)return!0;o=u(o)}while(o);return!1},n.memory=n.memory||r,n.table=n.table||o,G(t,n)}function L(n){return"undefined"!=typeof Response&&n instanceof Response}function V(n){return n instanceof WebAssembly.Module}async function H(n,e={}){if(L(n=await n))return q(n,e);const t=V(n)?n:await WebAssembly.compile(n),r=W(e),o=await WebAssembly.instantiate(t,e);return{module:t,instance:o,exports:R(r,o)}}async function q(n,e={}){if(!WebAssembly.instantiateStreaming)return H(L(n=await n)?n.arrayBuffer():n,e);const t=W(e),r=await WebAssembly.instantiateStreaming(n,e),o=R(t,r.instance);return P(P({},r),{},{exports:o})}function G(n,e={}){const t=n.__argumentsLength?e=>{n.__argumentsLength.value=e}:n.__setArgumentsLength||n.__setargc||(()=>{});for(let r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;const o=n[r];let i=r.split("."),a=e;for(;i.length>1;){let n=i.shift();Object.prototype.hasOwnProperty.call(a,n)||(a[n]={}),a=a[n]}let s=i[0],l=s.indexOf("#");if(l>=0){const e=s.substring(0,l),i=a[e];if(void 0===i||!i.prototype){const n=function(...e){return n.wrap(n.prototype.constructor(0,...e))};n.prototype={valueOf(){return this[$]}},n.wrap=function(e){return Object.create(n.prototype,{[$]:{value:e,writable:!1}})},i&&Object.getOwnPropertyNames(i).forEach((e=>Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e)))),a[e]=n}if(s=s.substring(l+1),a=a[e].prototype,/^(get|set):/.test(s)){if(!Object.prototype.hasOwnProperty.call(a,s=s.substring(4))){let e=n[r.replace("set:","get:")],t=n[r.replace("get:","set:")];Object.defineProperty(a,s,{get(){return e(this[$])},set(n){t(this[$],n)},enumerable:!0})}}else"constructor"===s?(a[s]=(...n)=>(t(n.length),o(...n))).original=o:(a[s]=function(...n){return t(n.length),o(this[$],...n)}).original=o}else/^(get|set):/.test(s)?Object.prototype.hasOwnProperty.call(a,s=s.substring(4))||Object.defineProperty(a,s,{get:n[r.replace("set:","get:")],set:n[r.replace("get:","set:")],enumerable:!0}):"function"==typeof o&&o!==t?(a[s]=(...n)=>(t(n.length),o(...n))).original=o:a[s]=o}return e}var Y={instantiate:H,instantiateSync:function(n,e={}){const t=V(n)?n:new WebAssembly.Module(n),r=W(e),o=new WebAssembly.Instance(t,e);return{module:t,instance:o,exports:R(r,o)}},instantiateStreaming:q,demangle:G};function K(n,e,t){return e}function Q(n,e,t){return n.exports[`__get${function(n){return n.startsWith("~lib/typedarray/")?((n=n.slice("~lib/typedarray/".length)).startsWith("Big")&&(n=n.slice(3)),n):n}(t)}View`](e)}function X(n,e,t){return n.exports.__newArray(n.getTypeId(t),e)}function Z(n){if(!n.startsWith("~lib/array/Array"))throw Error(`${JSON.stringify(n)} is not an array type`);return n.slice("~lib/array/Array<".length,-1)}const nn=new Map([["void",{ascToJs:K,jsToAsc:K}],[/^(i|u|f)(8|16|32|64)|[ui]size|bool|externref$/,{ascToJs:K,jsToAsc:K}],["~lib/string/String",{ascToJs:function(n,e,t){return n.exports.__getString(e)},jsToAsc:function(n,e,t){return n.exports.__newString(e)}}],["~lib/typedarray/Int8Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Int16Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Int32Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Uint8Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Uint16Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Uint32Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Int64Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Uint64Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Uint8ClampedArray",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Float32Array",{ascToJs:Q,jsToAsc:X}],["~lib/typedarray/Float64Array",{ascToJs:Q,jsToAsc:X}],["~lib/arraybuffer/ArrayBuffer",{ascToJs:function(n,e,t){return n.exports.__getArrayBuffer(e)},jsToAsc:function(n,e,t){const r=n.exports.__new(e.byteLength,n.getTypeId(t));return new Uint8Array(n.exports.memory.buffer,r,e.byteLength).set(new Uint8Array(e)),r}}],[/^~lib\/array\/Array<.+>$/,{ascToJs:function(n,e,t){const r=Z(t),o=tn(r);return n.exports.__getArray(e).map((e=>o.ascToJs(n,e,r)))},jsToAsc:function(n,e,t){const r=Z(t),o=tn(r),i=e.map((e=>o.jsToAsc(n,e,r)));return n.exports.__newArray(n.getTypeId(t),i)}}]]),en=new Set;function tn(n){for(const[e,t]of nn)if("string"!=typeof e){if(e.test(n))return t}else if(e===n)return t;return en.has(n)||(console.warn(`No converter for ${JSON.stringify(n)}, using pass-through`),en.add(n)),{ascToJs:K,jsToAsc:K}}function rn(n){var e;return null===(e=tn(n))||void 0===e?void 0:e.ascToJs}function on(n){var e;return null===(e=tn(n))||void 0===e?void 0:e.jsToAsc}function an(n,e,t){const r=t.parameters.map(rn),o=on(t.returnType);return function(...i){if(i.length!=r.length)throw Error(`Expected ${r.length} arguments, got ${i.length}`);const a=i.map(((e,o)=>r[o](n,e,t.parameters[o]))),s=e(...a);return o(n,s,t.returnType)}}function sn(n,e,t){const r=t.parameters.map(on),o=rn(t.returnType);return(...i)=>{if(i.length!=r.length)throw Error(`Expected ${r.length} arguments, got ${i.length}`);const a=[],s=i.map(((e,o)=>{const i=r[o](n,e,t.parameters[o]);return i!==e&&(n.exports.__pin(i),a.push(i)),i})),l=e(...s);return a.forEach((e=>n.exports.__unpin(e))),o(n,l,t.returnType)}}function ln(n,{depth:e=Number.POSITIVE_INFINITY}={}){return e<=0||!n||"object"!=typeof n?n:Object.fromEntries(Object.entries(n).map((([n,t])=>[n,ln(t,{depth:e-1})])))}function cn(n){const e=WebAssembly.Module.customSections(n,"as-bind_bindings"),t=new TextDecoder("utf8").decode(new Uint8Array(e[0]));try{return JSON.parse(t)}catch(n){throw Error(`Couldn’t decode type descriptor: ${n.message}`)}}class dn{constructor(){this.unboundExports={},this.exports={},this.importObject={}}getTypeId(n){if(n in this.typeDescriptor.typeIds)return this.typeDescriptor.typeIds[n].id;throw Error(`Unknown type ${JSON.stringify(n)}`)}getTypeSize(n){if(n in this.typeDescriptor.typeIds)return this.typeDescriptor.typeIds[n].byteSize;throw Error(`Unknown type ${JSON.stringify(n)}`)}_validate(){if(!WebAssembly.Module.exports(this.module).find((n=>"__new"===n.name)))throw Error("The AssemblyScript wasm module was not built with --exportRuntime, which is required.");if(1!==WebAssembly.Module.customSections(this.module,"as-bind_bindings").length)throw new Error("The AssemblyScript wasm module was not built with the as-bind transform.")}async _instantiate(n,e){this.module=await async function(n){if(n=await Promise.resolve(n),"undefined"!=typeof Response&&n instanceof Response){if(WebAssembly.compileStreaming)return WebAssembly.compileStreaming(n);n=await n.arrayBuffer()}return WebAssembly.compile(n)}(n),this._validate(),this.typeDescriptor=cn(this.module),this._instantiateBindImportFunctions(e),this.loadedModule=await async function(n,e){return Y.instantiate(n,e)}(this.module,this.importObject),this._instantiateBindUnboundExports()}_instantiateSync(n,e){this.module=new WebAssembly.Module(n),this._validate(),this.typeDescriptor=cn(this.module),this._instantiateBindImportFunctions(e),this.loadedModule=function(n,e){return Y.instantiateSync(n,e)}(this.module,this.importObject),this._instantiateBindUnboundExports()}_instantiateBindImportFunctions(n){this.importObject=ln(n,{depth:2});for(const[e,t]of Object.entries(this.typeDescriptor.importedFunctions))for(const[r,o]of Object.entries(t))this.importObject[e][`__asbind_unbound_${r}`]=n[e][r],this.importObject[e][r]=an(this,n[e][r],o)}_instantiateBindUnboundExports(){const n=this.loadedModule.exports;this.exports=ln(n,{depth:1});for(const[e,t]of Object.entries(this.typeDescriptor.exportedFunctions))this.exports[e]=sn(this,n[e],t)}}new Array(0);!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}('/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n/* Sakura.css v1.3.0\n * ================\n * Minimal css theme.\n * Project: https://github.com/oxalorg/sakura/\n */\n\n/* Body */\n\nhtml {\n  font-size: 62.5%;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif; }\n\nbody {\n  font-size: 1.8rem;\n  line-height: 1.618;\n  max-width: 38em;\n  margin: auto;\n  color: #4a4a4a;\n  background-color: #f9f9f9;\n  padding: 13px; }\n\n@media (max-width: 684px) {\n  body {\n    font-size: 1.53rem; } }\n\n@media (max-width: 382px) {\n  body {\n    font-size: 1.35rem; } }\n\nh1, h2, h3, h4, h5, h6 {\n  line-height: 1.1;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;\n  font-weight: 700;\n  margin-top: 3rem;\n  margin-bottom: 1.5rem;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -ms-word-break: break-all;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\nh1 {\n  font-size: 2.35em; }\n\nh2 {\n  font-size: 2.00em; }\n\nh3 {\n  font-size: 1.75em; }\n\nh4 {\n  font-size: 1.5em; }\n\nh5 {\n  font-size: 1.25em; }\n\nh6 {\n  font-size: 1em; }\n\np {\n  margin-top: 0px;\n  margin-bottom: 2.5rem; }\n\nsmall, sub, sup {\n  font-size: 75%; }\n\nhr {\n  border-color: #2c8898; }\n\na {\n  text-decoration: none;\n  color: #2c8898; }\n\na:hover {\n    color: #982c61;\n    border-bottom: 2px solid #4a4a4a; }\n\nul {\n  padding-left: 1.4em;\n  margin-top: 0px;\n  margin-bottom: 2.5rem; }\n\nli {\n  margin-bottom: 0.4em; }\n\nblockquote {\n  margin-left: 0px;\n  margin-right: 0px;\n  padding-left: 1em;\n  padding-top: 0.8em;\n  padding-bottom: 0.8em;\n  padding-right: 0.8em;\n  border-left: 5px solid #2c8898;\n  margin-bottom: 2.5rem;\n  background-color: #f1f1f1; }\n\nblockquote p {\n  margin-bottom: 0; }\n\nimg {\n  height: auto;\n  max-width: 100%;\n  margin-top: 0px;\n  margin-bottom: 2.5rem; }\n\n/* Pre and Code */\n\npre {\n  background-color: #f1f1f1;\n  display: block;\n  padding: 1em;\n  overflow-x: auto;\n  margin-top: 0px;\n  margin-bottom: 2.5rem; }\n\ncode {\n  font-size: 0.9em;\n  padding: 0 0.5em;\n  background-color: #f1f1f1;\n  white-space: pre-wrap; }\n\npre > code {\n  padding: 0;\n  background-color: transparent;\n  white-space: pre; }\n\n/* Tables */\n\ntable {\n  text-align: justify;\n  width: 100%;\n  border-collapse: collapse; }\n\ntd, th {\n  padding: 0.5em;\n  border-bottom: 1px solid #f1f1f1; }\n\n/* Buttons, forms and input */\n\ninput, textarea {\n  border: 1px solid #4a4a4a; }\n\ninput:focus, textarea:focus {\n    border: 1px solid #2c8898; }\n\ntextarea {\n  width: 100%; }\n\n.button, button, input[type="submit"], input[type="reset"], input[type="button"] {\n  display: inline-block;\n  padding: 5px 10px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: #2c8898;\n  color: #f9f9f9;\n  border-radius: 1px;\n  border: 1px solid #2c8898;\n  cursor: pointer;\n  box-sizing: border-box; }\n\n.button[disabled], button[disabled], input[type="submit"][disabled], input[type="reset"][disabled], input[type="button"][disabled] {\n    cursor: default;\n    opacity: .5; }\n\n.button:focus:enabled, .button:hover:enabled, button:focus:enabled, button:hover:enabled, input[type="submit"]:focus:enabled, input[type="submit"]:hover:enabled, input[type="reset"]:focus:enabled, input[type="reset"]:hover:enabled, input[type="button"]:focus:enabled, input[type="button"]:hover:enabled {\n    background-color: #982c61;\n    border-color: #982c61;\n    color: #f9f9f9;\n    outline: 0; }\n\ntextarea, select, input[type] {\n  color: #4a4a4a;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  margin-bottom: 10px;\n  background-color: #f1f1f1;\n  border: 1px solid #f1f1f1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n\ntextarea:focus, select:focus, input[type]:focus {\n    border: 1px solid #2c8898;\n    outline: 0; }\n\ninput[type="checkbox"]:focus {\n  outline: 1px dotted #2c8898; }\n\nlabel, legend, fieldset {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\n\nhtml,\nbody {\n  padding: 0px;\n  margin: 0px;\n  height: 100vh;\n  max-width: none;\n}\n\ntextarea {\n  background-color: #fff;\n  color: #000;\n}\n\n#root,\n.app {\n  width: 100%;\n  height: 100%;\n}\n\n.app {\n  display: flex;\n  flex-direction: column;\n}\n\n.app > h1 {\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.description {\n  width: 95%;\n  max-width: 950px;\n\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.link-row {\n  margin: 5px;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.editor-container {\n  flex-grow: 1;\n  overflow: hidden;\n}\n\n.editor {\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.markdown {\n  min-width: 350px;\n  width: 45%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.markdown > h2 {\n  text-align: center;\n}\n\n.markdown textarea {\n  flex-grow: 1;\n}\n\n.result {\n  min-width: 350px;\n  width: 45%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.result > h2 {\n  text-align: center;\n}\n\n.result-html {\n  flex-grow: 1;\n  overflow: auto;\n\n  margin-bottom: 10px;\n}\n\ncode {\n  display: block;\n  white-space: pre-line;\n}\n\n.markdown textarea,\n.result .result-html {\n  padding: 5px;\n  border: 2px solid #000;\n}\n\n@media only screen and (max-width: 800px) {\n  .editor {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .editor-container {\n    overflow: initial;\n  }\n\n  .markdown,\n  .result {\n    min-width: 200px;\n    width: 90%;\n    height: 500px;\n\n    margin: 5px;\n  }\n}\n');let pn=async function(n,e){let t=new dn;return await t._instantiate(n,e),t}(fetch("index.wasm"),{util:{consoleLog:n=>{console.log(n)}},env:{abort:()=>{console.error("AssemblyScript Import Object Aborted!")}}});var un,fn,hn;un=o(class extends U{constructor(){super(),this.state={markdown:'# __as-bind__ ~~convert~~ **markdown** to     html\n\n      * Item 1\n      * Item 2\n      * Item 3\n\n      ===\n\n      ## And now we are back!\n\n      Here is a [link to the source code](https://github.com/torch2424/as-bind)\n\n      And an image of the author!\n\n      ![torch2424 avatar](https://avatars1.githubusercontent.com/u/1448289?s=460&v=4)\n\n      ---\n\n      ### More items\n\n      1. one\n      1. two\n      1. three\n\n      ===\n\n      #### Let\'s write some quotes and code and stuff\n\n      > WebAssembly is cool - Torch2424, 2019\n\n      `npm install as-bind`\n\n      ```\n        const someCode = "hello world!";\n        // Yup we writing some code in here\n      ```\n\n      # The End!\n',html:""}}componentDidMount(){this.handleChange()}async handleChange(n){let e=this.state.markdown;n&&(e=n.target.value);let t=(await pn).exports.convertMarkdownToHTML(e);console.log(`\nInput Markdown:\n\n${e}\n\n------\n\nas-bind response:\n\n${t}\n`),this.setState({markdown:e,html:t})}render(){return o("div",{class:"app"},o("h1",null,"as-bind Markdown Parser Demo"),o("p",{class:"description"},"as-bind is a library to handle passing high-level data structures between AssemblyScript and JavaScript. This demo takes the input from the markdown text area, and passes the string directly to and exported function of the as-bind instantiated AssemblyScript module, and then binds the returned string to the result div. The input and response are logged into the JavaScript console."),o("p",{class:"description"},o("b",null,"as-bind version:")," ","0.8.2"),o("nav",{class:"link-row"},o("div",null,o("a",{href:"https://github.com/torch2424/as-bind"},"Source Code (Github)"))),o("div",{class:"editor-container"},o("div",{class:"editor"},o("div",{class:"markdown"},o("h2",null,"Markdown"),o("textarea",{value:this.state.markdown,onInput:n=>this.handleChange(n)})),o("div",{class:"result"},o("h2",null,"Result"),o("div",{class:"result-html",dangerouslySetInnerHTML:{__html:this.state.html}})))))}},null),fn=document.querySelector("#root"),A(hn,un,{},!1,fn,!1)}();
