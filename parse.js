!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}({1:function(t,e,n){"use strict";var o,i;function r(t,e){return t&&"object"==typeof t&&t._type==e}function u(){let t="abcdefhijkmnprstwxyz",e=t.length,n="";for(let o=0;o<6;o++)n+=t.charAt(Math.floor(Math.random()*e));return"u_"+n}n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return O})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return s})),function(t){t[t.FRAME=0]="FRAME",t[t.NODE=1]="NODE",t[t.PIN=2]="PIN",t[t.JOINT=3]="JOINT",t[t.CONNECTION=4]="CONNECTION"}(o||(o={})),function(t){t.each=function(t,...e){e.forEach(e=>{e&&e.forEach(t)})},t.find=function(t,...e){let n;return e.find(e=>{if(e)return n=e.find(e=>t(e))}),n}}(i||(i={}));const s="UNDEFINED_FRAME_LABEL";var c=n(2);function p(t){let e=t;e._exe||(e._exe=function(n,i,r,u){if(!v())return;const s=t.finishPin.forkedFrom||t.finishPin;if("function"!=typeof s._exe){const n=Object(c.isTypeof)(t.startPin.parent,o.NODE)?t.startPin.parent:void 0;throw new Error(`连接(来自:${n?n.runtime.title:"未知组件"}，${e.title})已断开.`)}E.debug&&E.debug.stepTime,s._exe(n,i,r,u)})}function f(t,e,n="runtime"){t.conAry&&t.conAry.forEach(t=>{p(t)}),t._exe=function(i,u,s,c){if(!v())return;I.execute&&I.execute(o.PIN,t.id,u);let p=i;if(!p)if(r(t.parent,o.NODE)){const e=t.parent.parent;p=e._scopeManager.getCurrentScope(!e._exeAsRoot_&&e.parent?e.parent.runtime.id:void 0,e.id)}else if(r(t.parent,o.FRAME)){const e=t.parent;p=e._scopeManager.getCurrentScope(!e._exeAsRoot_&&e.parent?e.parent.runtime.id:void 0,e.id)}let f=e.pin?e.pin(t):void 0;if(f){if(!1===f.exe(u,c))return}const a=e=>{f&&f.exe(e,t,"返回"),"function"==typeof s&&s(e)};if("input"==t.direction)if(t.proxyPin&&t.proxyPin._exe){t.proxyPin.parent._exe(p,{[t.hostId]:u},void 0,t.direction)}else t.parent._exe(p,void 0,{[t.hostId]:u},a);else if("inner-input"===t.direction){if(!t.proxyPin||!t.proxyPin._exe)return;t.proxyPin._exe(p.parent,u,a,c)}else if("output"==t.direction||"inner-output"==t.direction)if(t.proxyPin&&t.proxyPin._exe)t.proxyPin._exe(i.parent,u,a,c);else{let e;"mock"===n&&t.mockData&&(e=t.mockData),t.conAry&&t.conAry.length>0&&t.conAry.forEach((n,o)=>{let i;a&&(void 0!==e?a(JSON.parse(t.mockData)):i=function(t){a(t)}),n._exe(p,u,i,t)})}}}function a(t,e,n="runtime"){i.each(t=>f(t,e,n),t.inputPins,t.inputPinExts,t.inputPinsInModel),i.each(t=>f(t,e,n),t.outputPins,t.inputPinExts,t.outputPinsInModel);const o=t,r=e.node(t),u={};o._exe=function(e,n,o,c){let p;i.each(t=>{void 0!==t.dummyData&&(!p&&(p={}),p[t.hostId]=t.dummyData)},t.inputPins,t.inputPinsInModel),o=p?Object.assign(p,o):o,u[e.id]||(!function(e,n=s){if("function"!=typeof r.render)throw new Error("Render config function for node not found.");const o=e.path,i={};t.frames&&t.frames.forEach(t=>{i[t.id]=function(n,o=s){const i=t._exe(e,n,o);if(i)return i.path}});const u={inst:r.render(o,n,i,e),scopes:[]};e.comInsts[t.runtime.id]=u}(e,n),u[e.id]=!0);const f=e.comInsts[t.runtime.id];if(o)for(let t in o){const e=o[t];f.inst.inputs[t]=[e,c]}r.exe&&r.exe(f.inst,o,c)},t.frames&&t.frames.forEach(t=>{h(t,e)})}let d=new WeakMap;function l(t,e,n="runtime"){const o=t.parent.parent.runtime;t.from?p(t.from):console.warn(`组件(${o.title},${o.def.namespace})存在连接断开.`),t.to?p(t.to):console.warn(`组件(${o.title},${o.def.namespace})存在连接断开.`);t._exe=function(n,o,i){const r=e.joint?e.joint(t):void 0,u=t.parent.parent;if("input"==t.type){let e=n.comInsts[u.runtime.id].scopes.find(e=>e.hostId===t.parent.id);const s=e=>{r&&r.exe(o),t.to&&t.to._exe(e,o,i,t.type)};if(e){let t=e.hostId;e.parent.comInsts[u.runtime.id].scopes.forEach(e=>{e.hostId==t&&s(e)})}else{let e=d.get(t);e||d.set(t,e=new WeakMap);let o=e.get(n);o||e.set(n,o=[]),o.push(s)}}else r&&"function"==typeof r.exe&&r.exe(o),t.to&&t.to._exe(n.parent,o,i,t.type)}}function _(){let t;function e(e,n,o){let i=t[e];i||(t[e]=i={}),i[n]=o}return{applyScope(t,n){const o=function t(n,o,i,r){let s={id:u(),instId:o,hostId:i,path:void 0,parent:n,returnParams:{},resolve:null,comInsts:{},applyScope(n,o,i,r){const u=t(s,n,i,r);let c=s.comInsts[n];return c&&(!c.scopes&&(c.scopes=[]),c.scopes.push(u)),e(n,i,u),u}};if(r)s.path=s.id;else{const t=[s.id];let e=s.parent;for(;e;)e.parent&&t.push(e.id),e=e.parent;s.path=t.reverse().join(":")}return s}(void 0,t,n);return e(t,n,o),o},getCurrentScope(e,n){var o;return null===(o=t[e])||void 0===o?void 0:o[n]},start(){t={}},stop(){t={}}}}function h(t,e,n="runtime"){t.comAry&&t.comAry.forEach(t=>{a(t,e,n)}),t.inputPins&&t.inputPins.forEach(t=>f(t,e,n)),t.outputPins&&t.outputPins.forEach(t=>f(t,e,n)),t.inputJoints&&t.inputJoints.forEach(t=>l(t,e,n)),t.outputJoints&&t.outputJoints.forEach(t=>l(t,e,n));const o=t,i={};o._startScope=function(){this._scopeManager=_(),this._scopeManager.start()},o._clearScope=function(){this._scopeManager&&(this._scopeManager.stop(),this._scopeManager=void 0)},o._update=function(o,r,u=s){const c=u+o.id,{curScope:p,coms:f}=i[c];t.comAry.forEach(t=>{f.push(t.runtime.id),"function"!=typeof t._exe&&(a(t,e,n),t._exe(p,u,void 0,void 0))})},o._exe=function(r,u,c=s,p,f){if(!r){if(t.parent){const e=o._scopeManager.getCurrentScope(t.parent?t.parent.runtime.id:t.id,t.id);e&&(r=e.parent)}r||(r=o._scopeManager.applyScope(void 0,t.id+"-parent"))}const l=c+r.id;let _=!1;if(i[l]){const e=i[l].coms;(e.length!==t.comAry.length||t.comAry.find(t=>e.indexOf(t.runtime.id)<0))&&(_=!0)}if(!i[l]||_){let u,d;if(o._exeAsRoot_=!!f,c=void 0!==c?c:s,o._exeAsRoot_)u={inst:void 0,scopes:[]};else if(u=r.comInsts[t.parent.runtime.id],!u&&t._rootF)return;const _=[];"input"==(p="string"==typeof p?p:"input")&&(d=r.applyScope(!o._exeAsRoot_&&t.parent?t.parent.runtime.id:void 0,c,t.id,t._rootF),t.comAry.forEach(t=>{_.push(t.runtime.id),"function"!=typeof t._exe&&a(t,e,n),t._exe(d,c,void 0,void 0)})),i[l]={myInstScope:u,curScope:d,coms:_}}const{curScope:h}=i[l];if("input"==(p="string"==typeof p?p:"input")){const e={};if("mock"===n&&t.inputPins.length>0&&t.inputPins.forEach(t=>{t.mockData&&(e[t.hostId]=t.mockData)}),u=Object.assign(e,u))for(let e in u){const n=t.inputPins.find(t=>t.hostId==e);n?n._exe(h,u[e],void 0,void 0):"undefined"!=typeof console&&"function"==typeof console.error&&console.error(`No inputPin(id=${e}) found`)}return t.inputJoints&&t.inputJoints.forEach(t=>{!function(t,e){let n=e.parent,o=d.get(t);if(o){let t=o.get(n);t&&t.forEach(t=>{t(e)})}}(t,h)}),h}if(p.match(/^(output)|(inner-input)$/gi)){let e=h;if(t.outputPins.length){if(u)for(let t in u)e.returnParams[t]=u[t]||null;t.outputPins.find(t=>null==e.returnParams[t.hostId])||e.resolve()}}}}let m,y,x,g=null;let P="stop";function v(){return"running"===P}let E={},I={};function b(t,e,n="runtime"){return function(t,e){if(!r(t,e))throw new Error("Invalid item type")}(t,o.FRAME),h(t,e,n),g={on(t,e){t&&"string"==typeof t&&"function"==typeof e&&(I[t.toLowerCase()]=e)},run(e=t,n){if(e._startScope(),function(t){return Object.assign(E,t||{}),y=[],x=[],!0}(n))return function(){function t(t){try{t.exe&&t.exe()}catch(t){I.error?I.error(t):console.error(t)}e(m)}function e(n){if("stop"==P||n!==m)return;let o;if("pause"==P&&setTimeout(e,1e3),x.length>0?o=x.shift():y.length>0&&(o=y.shift()),o){E.debug?setTimeout(()=>{t(o)},o.debugSleep):"number"==typeof o.sleep&&o.sleep>-1?setTimeout(()=>{t(o)},0):t(o)}else setTimeout(t=>e(n))}P="running",m=u(),e(m),new Promise((t,e)=>{})}(),t=>{t&&t.outputs&&e.outputPins&&e.outputPins.forEach(e=>{const n=t.outputs[e.id];"function"==typeof n&&(e.proxyPin={_exe(t,e,o,i){n(e)}})});const n=e._exe(void 0,null==t?void 0:t.inputParams,void 0,"input",!0);return t.inputs&&e.inputPins&&Object.keys(t.inputs).forEach(n=>{const o=t.inputs[n],i=e.inputPins.find(t=>t.id===n);i&&i.conAry.length>0&&o(t=>{i._exe(void 0,t,void 0,void 0)})}),n}},update:(e,n=t)=>(n._update(e,void 0,void 0),!0),pause:M,stop(){const e=(P="stop",!0);return g=null,y=void 0,x=void 0,t._clearScope(),e}}}function M(){return P="pause",!0}function O(t,e){const n={_all:{},_waiting:{},has(t){return"function"==typeof this._all[t]},set(t,e){this._all[t]=e;const n=this._waiting[t];if(n)try{n.forEach(t=>{e(t)}),delete this._waiting[t]}finally{}return!0},get(t){return this._all[t]},waiting(t,e){let n=this._waiting[t];n||(n=this._waiting[t]=[]),n.push(e)}},o=u();let r;const s={};let c;return{inputs:new Proxy({_setInterseptor(t){r=t}},{ownKeys(e){const n=[];return i.each(t=>{n.push(t.hostId)},t.inputPins,t.inputPinsInModel),n},getOwnPropertyDescriptor:t=>({enumerable:!0,configurable:!0}),get:(t,e,i)=>"__id__"===e?o:"_setInterseptor"===e?t[e]:function(t){if(r){const n=r[e];"function"==typeof n&&n(t),r=void 0}n.set(e,(function(n){const o=s[e];if(void 0!==n&&o){s[e]=void 0;const[o,i]=n;t(o,(function(t){"function"==typeof i&&i(t)}))}}))},set(t,o,i,r){s[o]=i;const u=n.get(o);return u?((null==e?void 0:e.input)&&e.input(),u(i)):n.waiting(o,i),!0}}),outputs:new Proxy({_setInterseptor(t){c=t}},{ownKeys(e){const n=[];return i.each(t=>{n.push(t.hostId)},t.outputPins,t.outputPinsInModel),n},getOwnPropertyDescriptor:t=>({enumerable:!0,configurable:!0}),get(n,r,u){if("__id__"===r)return o;if("_setInterseptor"===r)return n[r];if(t.outputPins||t.outputPinsInModel){const n=i.find(({hostId:t})=>r==t,t.outputPins,t.outputPinsInModel);if(n){let o;return function(i,u){if(t.outputPins){o=u;const s=function(t){"function"==typeof o&&o(t)};if((null==e?void 0:e.output)&&e.output(i),c){const t=c[r];"function"==typeof t&&t(i)}n._exe(null,i,s,t)}}}}}})}}},2:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o,i;function r(t,e){return t&&"object"==typeof t&&t._type==e}function u(){let t="abcdefhijkmnprstwxyz",e=t.length,n="";for(let o=0;o<6;o++)n+=t.charAt(Math.floor(Math.random()*e));return"u_"+n}n.r(e),n.d(e,"T_Scope",(function(){})),n.d(e,"compile",(function(){return E})),n.d(e,"createIO",(function(){return b})),n.d(e,"E_ItemType",(function(){return o})),n.d(e,"isTypeof",(function(){return r})),n.d(e,"UNDEFINED_FRAME_LABEL",(function(){return s})),function(t){t[t.FRAME=0]="FRAME",t[t.NODE=1]="NODE",t[t.PIN=2]="PIN",t[t.JOINT=3]="JOINT",t[t.CONNECTION=4]="CONNECTION"}(o||(o={})),function(t){t.each=function(t,...e){e.forEach(e=>{e&&e.forEach(t)})},t.find=function(t,...e){let n;return e.find(e=>{if(e)return n=e.find(e=>t(e))}),n}}(i||(i={}));const s="UNDEFINED_FRAME_LABEL";function c(t){let e=t;e._exe||(e._exe=function(n,i,u,s){if(!g())return;const c=t.finishPin.forkedFrom||t.finishPin;if("function"!=typeof c._exe){const n=r(t.startPin.parent,o.NODE)?t.startPin.parent:void 0;throw new Error(`连接(来自:${n?n.runtime.title:"未知组件"}，${e.title})已断开.`)}P.debug&&P.debug.stepTime,c._exe(n,i,u,s)})}function p(t,e,n="runtime"){t.conAry&&t.conAry.forEach(t=>{c(t)}),t._exe=function(i,u,s,c){if(!g())return;v.execute&&v.execute(o.PIN,t.id,u);let p=i;if(!p)if(r(t.parent,o.NODE)){const e=t.parent.parent;p=e._scopeManager.getCurrentScope(!e._exeAsRoot_&&e.parent?e.parent.runtime.id:void 0,e.id)}else if(r(t.parent,o.FRAME)){const e=t.parent;p=e._scopeManager.getCurrentScope(!e._exeAsRoot_&&e.parent?e.parent.runtime.id:void 0,e.id)}let f=e.pin?e.pin(t):void 0;if(f&&!1===f.exe(u,c))return;const a=e=>{f&&f.exe(e,t,"返回"),"function"==typeof s&&s(e)};if("input"==t.direction)t.proxyPin&&t.proxyPin._exe?t.proxyPin.parent._exe(p,{[t.hostId]:u},void 0,t.direction):t.parent._exe(p,void 0,{[t.hostId]:u},a);else if("inner-input"===t.direction){if(!t.proxyPin||!t.proxyPin._exe)return;t.proxyPin._exe(p.parent,u,a,c)}else if("output"==t.direction||"inner-output"==t.direction)if(t.proxyPin&&t.proxyPin._exe)t.proxyPin._exe(i.parent,u,a,c);else{let e;"mock"===n&&t.mockData&&(e=t.mockData),t.conAry&&t.conAry.length>0&&t.conAry.forEach((n,o)=>{let i;a&&(void 0!==e?a(JSON.parse(t.mockData)):i=function(t){a(t)}),n._exe(p,u,i,t)})}}}function f(t,e,n="runtime"){i.each(t=>p(t,e,n),t.inputPins,t.inputPinExts,t.inputPinsInModel),i.each(t=>p(t,e,n),t.outputPins,t.inputPinExts,t.outputPinsInModel);const o=t,r=e.node(t),u={};o._exe=function(e,n,o,c){let p;i.each(t=>{void 0!==t.dummyData&&(!p&&(p={}),p[t.hostId]=t.dummyData)},t.inputPins,t.inputPinsInModel),o=p?Object.assign(p,o):o,u[e.id]||(function(e,n=s){if("function"!=typeof r.render)throw new Error("Render config function for node not found.");const o=e.path,i={};t.frames&&t.frames.forEach(t=>{i[t.id]=function(n,o=s){const i=t._exe(e,n,o);if(i)return i.path}});const u={inst:r.render(o,n,i,e),scopes:[]};e.comInsts[t.runtime.id]=u}(e,n),u[e.id]=!0);const f=e.comInsts[t.runtime.id];if(o)for(let t in o){const e=o[t];f.inst.inputs[t]=[e,c]}r.exe&&r.exe(f.inst,o,c)},t.frames&&t.frames.forEach(t=>{l(t,e)})}let a=new WeakMap;function d(t,e,n="runtime"){const o=t.parent.parent.runtime;t.from?c(t.from):console.warn(`组件(${o.title},${o.def.namespace})存在连接断开.`),t.to?c(t.to):console.warn(`组件(${o.title},${o.def.namespace})存在连接断开.`),t._exe=function(n,o,i){const r=e.joint?e.joint(t):void 0,u=t.parent.parent;if("input"==t.type){let e=n.comInsts[u.runtime.id].scopes.find(e=>e.hostId===t.parent.id);const s=e=>{r&&r.exe(o),t.to&&t.to._exe(e,o,i,t.type)};if(e){let t=e.hostId;e.parent.comInsts[u.runtime.id].scopes.forEach(e=>{e.hostId==t&&s(e)})}else{let e=a.get(t);e||a.set(t,e=new WeakMap);let o=e.get(n);o||e.set(n,o=[]),o.push(s)}}else r&&"function"==typeof r.exe&&r.exe(o),t.to&&t.to._exe(n.parent,o,i,t.type)}}function l(t,e,n="runtime"){t.comAry&&t.comAry.forEach(t=>{f(t,e,n)}),t.inputPins&&t.inputPins.forEach(t=>p(t,e,n)),t.outputPins&&t.outputPins.forEach(t=>p(t,e,n)),t.inputJoints&&t.inputJoints.forEach(t=>d(t,e,n)),t.outputJoints&&t.outputJoints.forEach(t=>d(t,e,n));const o=t,i={};o._startScope=function(){this._scopeManager=function(){let t;function e(e,n,o){let i=t[e];i||(t[e]=i={}),i[n]=o}return{applyScope(t,n){const o=function t(n,o,i,r){let s={id:u(),instId:o,hostId:i,path:void 0,parent:n,returnParams:{},resolve:null,comInsts:{},applyScope(n,o,i,r){const u=t(s,n,i,r);let c=s.comInsts[n];return c&&(!c.scopes&&(c.scopes=[]),c.scopes.push(u)),e(n,i,u),u}};if(r)s.path=s.id;else{const t=[s.id];let e=s.parent;for(;e;)e.parent&&t.push(e.id),e=e.parent;s.path=t.reverse().join(":")}return s}(void 0,t,n);return e(t,n,o),o},getCurrentScope(e,n){var o;return null===(o=t[e])||void 0===o?void 0:o[n]},start(){t={}},stop(){t={}}}}(),this._scopeManager.start()},o._clearScope=function(){this._scopeManager&&(this._scopeManager.stop(),this._scopeManager=void 0)},o._update=function(o,r,u=s){const c=u+o.id,{curScope:p,coms:a}=i[c];t.comAry.forEach(t=>{a.push(t.runtime.id),"function"!=typeof t._exe&&(f(t,e,n),t._exe(p,u,void 0,void 0))})},o._exe=function(r,u,c=s,p,d){if(!r){if(t.parent){const e=o._scopeManager.getCurrentScope(t.parent?t.parent.runtime.id:t.id,t.id);e&&(r=e.parent)}r||(r=o._scopeManager.applyScope(void 0,t.id+"-parent"))}const l=c+r.id;let _=!1;if(i[l]){const e=i[l].coms;(e.length!==t.comAry.length||t.comAry.find(t=>e.indexOf(t.runtime.id)<0))&&(_=!0)}if(!i[l]||_){let u,a;if(o._exeAsRoot_=!!d,c=void 0!==c?c:s,o._exeAsRoot_)u={inst:void 0,scopes:[]};else if(u=r.comInsts[t.parent.runtime.id],!u&&t._rootF)return;const _=[];"input"==(p="string"==typeof p?p:"input")&&(a=r.applyScope(!o._exeAsRoot_&&t.parent?t.parent.runtime.id:void 0,c,t.id,t._rootF),t.comAry.forEach(t=>{_.push(t.runtime.id),"function"!=typeof t._exe&&f(t,e,n),t._exe(a,c,void 0,void 0)})),i[l]={myInstScope:u,curScope:a,coms:_}}const{curScope:h}=i[l];if("input"==(p="string"==typeof p?p:"input")){const e={};if("mock"===n&&t.inputPins.length>0&&t.inputPins.forEach(t=>{t.mockData&&(e[t.hostId]=t.mockData)}),u=Object.assign(e,u))for(let e in u){const n=t.inputPins.find(t=>t.hostId==e);n?n._exe(h,u[e],void 0,void 0):"undefined"!=typeof console&&"function"==typeof console.error&&console.error(`No inputPin(id=${e}) found`)}return t.inputJoints&&t.inputJoints.forEach(t=>{!function(t,e){let n=e.parent,o=a.get(t);if(o){let t=o.get(n);t&&t.forEach(t=>{t(e)})}}(t,h)}),h}if(p.match(/^(output)|(inner-input)$/gi)){let e=h;if(t.outputPins.length){if(u)for(let t in u)e.returnParams[t]=u[t]||null;t.outputPins.find(t=>null==e.returnParams[t.hostId])||e.resolve()}}}}let _,h,m,y=null,x="stop";function g(){return"running"===x}let P={},v={};function E(t,e,n="runtime"){return function(t,e){if(!r(t,e))throw new Error("Invalid item type")}(t,o.FRAME),l(t,e,n),y={on(t,e){t&&"string"==typeof t&&"function"==typeof e&&(v[t.toLowerCase()]=e)},run(e=t,n){if(e._startScope(),function(t){return Object.assign(P,t||{}),h=[],m=[],!0}(n))return function(){function t(t){try{t.exe&&t.exe()}catch(t){v.error?v.error(t):console.error(t)}e(_)}function e(n){if("stop"==x||n!==_)return;let o;"pause"==x&&setTimeout(e,1e3),m.length>0?o=m.shift():h.length>0&&(o=h.shift()),o?P.debug?setTimeout(()=>{t(o)},o.debugSleep):"number"==typeof o.sleep&&o.sleep>-1?setTimeout(()=>{t(o)},0):t(o):setTimeout(t=>e(n))}x="running",_=u(),e(_),new Promise((t,e)=>{})}(),t=>{t&&t.outputs&&e.outputPins&&e.outputPins.forEach(e=>{const n=t.outputs[e.id];"function"==typeof n&&(e.proxyPin={_exe(t,e,o,i){n(e)}})});const n=e._exe(void 0,null==t?void 0:t.inputParams,void 0,"input",!0);return t.inputs&&e.inputPins&&Object.keys(t.inputs).forEach(n=>{const o=t.inputs[n],i=e.inputPins.find(t=>t.id===n);i&&i.conAry.length>0&&o(t=>{i._exe(void 0,t,void 0,void 0)})}),n}},update:(e,n=t)=>(n._update(e,void 0,void 0),!0),pause:I,stop(){const e=(x="stop",!0);return y=null,h=void 0,m=void 0,t._clearScope(),e}}}function I(){return x="pause",!0}function b(t,e){const n={_all:{},_waiting:{},has(t){return"function"==typeof this._all[t]},set(t,e){this._all[t]=e;const n=this._waiting[t];if(n)try{n.forEach(t=>{e(t)}),delete this._waiting[t]}finally{}return!0},get(t){return this._all[t]},waiting(t,e){let n=this._waiting[t];n||(n=this._waiting[t]=[]),n.push(e)}},o=u();let r;const s={};let c;return{inputs:new Proxy({_setInterseptor(t){r=t}},{ownKeys(e){const n=[];return i.each(t=>{n.push(t.hostId)},t.inputPins,t.inputPinsInModel),n},getOwnPropertyDescriptor:t=>({enumerable:!0,configurable:!0}),get:(t,e,i)=>"__id__"===e?o:"_setInterseptor"===e?t[e]:function(t){if(r){const n=r[e];"function"==typeof n&&n(t)}n.set(e,(function(n){const o=s[e];if(void 0!==n&&o){s[e]=void 0;const[o,i]=n;t(o,(function(t){"function"==typeof i&&i(t)}))}}))},set(t,o,i,r){s[o]=i;const u=n.get(o);return u?((null==e?void 0:e.input)&&e.input(),u(i)):n.waiting(o,i),!0}}),outputs:new Proxy({_setInterseptor(t){c=t}},{ownKeys(e){const n=[];return i.each(t=>{n.push(t.hostId)},t.outputPins,t.outputPinsInModel),n},getOwnPropertyDescriptor:t=>({enumerable:!0,configurable:!0}),get(n,r,u){if("__id__"===r)return o;if("_setInterseptor"===r)return n[r];if(t.outputPins||t.outputPinsInModel){const n=i.find(({hostId:t})=>r==t,t.outputPins,t.outputPinsInModel);if(n){let o;return function(i,u){if(t.outputPins){o=u;const s=function(t){"function"==typeof o&&o(t)};if((null==e?void 0:e.output)&&e.output(i),c){const t=c[r];"function"==typeof t&&t(i)}n._exe(null,i,s,t)}}}}}})}}}])},function(t,e,n){"use strict";var o,i;function r(t,e){return t&&"object"==typeof t&&t._type==e}function u(){let t="abcdefhijkmnprstwxyz",e=t.length,n="";for(let o=0;o<6;o++)n+=t.charAt(Math.floor(Math.random()*e));return"u_"+n}n.r(e),n.d(e,"T_Scope",(function(){})),n.d(e,"compile",(function(){return I})),n.d(e,"createIO",(function(){return M})),n.d(e,"E_ItemType",(function(){return o})),n.d(e,"isTypeof",(function(){return r})),n.d(e,"UNDEFINED_FRAME_LABEL",(function(){return s})),function(t){t[t.FRAME=0]="FRAME",t[t.NODE=1]="NODE",t[t.PIN=2]="PIN",t[t.JOINT=3]="JOINT",t[t.CONNECTION=4]="CONNECTION"}(o||(o={})),function(t){t.each=function(t,...e){e.forEach(e=>{e&&e.forEach(t)})},t.find=function(t,...e){let n;return e.find(e=>{if(e)return n=e.find(e=>t(e))}),n}}(i||(i={}));const s="UNDEFINED_FRAME_LABEL";var c=n(0);function p(t){let e=t;e._exe||(e._exe=function(n,i,r,u){if(!P())return;const s=t.finishPin.forkedFrom||t.finishPin;if("function"!=typeof s._exe){const n=Object(c.isTypeof)(t.startPin.parent,o.NODE)?t.startPin.parent:void 0;throw new Error(`连接(来自:${n?n.runtime.title:"未知组件"}，${e.title})已断开.`)}v.debug&&v.debug.stepTime,s._exe(n,i,r,u)})}function f(t,e,n="runtime"){t.conAry&&t.conAry.forEach(t=>{p(t)}),t._exe=function(i,u,s,c){if(!P())return;E.execute&&E.execute(o.PIN,t.id,u);let p=i;if(!p)if(r(t.parent,o.NODE)){const e=t.parent.parent;p=e._scopeManager.getCurrentScope(!e._exeAsRoot_&&e.parent?e.parent.runtime.id:void 0,e.id)}else if(r(t.parent,o.FRAME)){const e=t.parent;p=e._scopeManager.getCurrentScope(!e._exeAsRoot_&&e.parent?e.parent.runtime.id:void 0,e.id)}let f=e.pin?e.pin(t):void 0;if(f&&!1===f.exe(u,c))return;const a=e=>{f&&f.exe(e,t,"返回"),"function"==typeof s&&s(e)};if("input"==t.direction)t.proxyPin&&t.proxyPin._exe?t.proxyPin.parent._exe(p,{[t.hostId]:u},void 0,t.direction):t.parent._exe(p,void 0,{[t.hostId]:u},a);else if("inner-input"===t.direction){if(!t.proxyPin||!t.proxyPin._exe)return;t.proxyPin._exe(p.parent,u,a,c)}else if("output"==t.direction||"inner-output"==t.direction)if(t.proxyPin&&t.proxyPin._exe)t.proxyPin._exe(i.parent,u,a,c);else{let e;"mock"===n&&t.mockData&&(e=t.mockData),t.conAry&&t.conAry.length>0&&t.conAry.forEach((n,o)=>{let i;a&&(void 0!==e?a(JSON.parse(t.mockData)):i=function(t){a(t)}),n._exe(p,u,i,t)})}}}function a(t,e,n="runtime"){i.each(t=>f(t,e,n),t.inputPins,t.inputPinExts,t.inputPinsInModel),i.each(t=>f(t,e,n),t.outputPins,t.inputPinExts,t.outputPinsInModel);const o=t,r=e.node(t),u={};o._exe=function(e,n,o,c){let p;i.each(t=>{void 0!==t.dummyData&&(!p&&(p={}),p[t.hostId]=t.dummyData)},t.inputPins,t.inputPinsInModel),o=p?Object.assign(p,o):o,u[e.id]||(function(e,n=s){if("function"!=typeof r.render)throw new Error("Render config function for node not found.");const o=e.path,i={};t.frames&&t.frames.forEach(t=>{i[t.id]=function(n,o=s){const i=t._exe(e,n,o);if(i)return i.path}});const u={inst:r.render(o,n,i,e),scopes:[]};e.comInsts[t.runtime.id]=u}(e,n),u[e.id]=!0);const f=e.comInsts[t.runtime.id];if(o)for(let t in o){const e=o[t];f.inst.inputs[t]=[e,c]}r.exe&&r.exe(f.inst,o,c)},t.frames&&t.frames.forEach(t=>{_(t,e)})}let d=new WeakMap;function l(t,e,n="runtime"){const o=t.parent.parent.runtime;t.from?p(t.from):console.warn(`组件(${o.title},${o.def.namespace})存在连接断开.`),t.to?p(t.to):console.warn(`组件(${o.title},${o.def.namespace})存在连接断开.`),t._exe=function(n,o,i){const r=e.joint?e.joint(t):void 0,u=t.parent.parent;if("input"==t.type){let e=n.comInsts[u.runtime.id].scopes.find(e=>e.hostId===t.parent.id);const s=e=>{r&&r.exe(o),t.to&&t.to._exe(e,o,i,t.type)};if(e){let t=e.hostId;e.parent.comInsts[u.runtime.id].scopes.forEach(e=>{e.hostId==t&&s(e)})}else{let e=d.get(t);e||d.set(t,e=new WeakMap);let o=e.get(n);o||e.set(n,o=[]),o.push(s)}}else r&&"function"==typeof r.exe&&r.exe(o),t.to&&t.to._exe(n.parent,o,i,t.type)}}function _(t,e,n="runtime"){t.comAry&&t.comAry.forEach(t=>{a(t,e,n)}),t.inputPins&&t.inputPins.forEach(t=>f(t,e,n)),t.outputPins&&t.outputPins.forEach(t=>f(t,e,n)),t.inputJoints&&t.inputJoints.forEach(t=>l(t,e,n)),t.outputJoints&&t.outputJoints.forEach(t=>l(t,e,n));const o=t,i={};o._startScope=function(){this._scopeManager=function(){let t;function e(e,n,o){let i=t[e];i||(t[e]=i={}),i[n]=o}return{applyScope(t,n){const o=function t(n,o,i,r){let s={id:u(),instId:o,hostId:i,path:void 0,parent:n,returnParams:{},resolve:null,comInsts:{},applyScope(n,o,i,r){const u=t(s,n,i,r);let c=s.comInsts[n];return c&&(!c.scopes&&(c.scopes=[]),c.scopes.push(u)),e(n,i,u),u}};if(r)s.path=s.id;else{const t=[s.id];let e=s.parent;for(;e;)e.parent&&t.push(e.id),e=e.parent;s.path=t.reverse().join(":")}return s}(void 0,t,n);return e(t,n,o),o},getCurrentScope(e,n){var o;return null===(o=t[e])||void 0===o?void 0:o[n]},start(){t={}},stop(){t={}}}}(),this._scopeManager.start()},o._clearScope=function(){this._scopeManager&&(this._scopeManager.stop(),this._scopeManager=void 0)},o._update=function(o,r,u=s){const c=u+o.id,{curScope:p,coms:f}=i[c];t.comAry.forEach(t=>{f.push(t.runtime.id),"function"!=typeof t._exe&&(a(t,e,n),t._exe(p,u,void 0,void 0))})},o._exe=function(r,u,c=s,p,f){if(!r){if(t.parent){const e=o._scopeManager.getCurrentScope(t.parent?t.parent.runtime.id:t.id,t.id);e&&(r=e.parent)}r||(r=o._scopeManager.applyScope(void 0,t.id+"-parent"))}const l=c+r.id;let _=!1;if(i[l]){const e=i[l].coms;(e.length!==t.comAry.length||t.comAry.find(t=>e.indexOf(t.runtime.id)<0))&&(_=!0)}if(!i[l]||_){let u,d;if(o._exeAsRoot_=!!f,c=void 0!==c?c:s,o._exeAsRoot_)u={inst:void 0,scopes:[]};else if(u=r.comInsts[t.parent.runtime.id],!u&&t._rootF)return;const _=[];"input"==(p="string"==typeof p?p:"input")&&(d=r.applyScope(!o._exeAsRoot_&&t.parent?t.parent.runtime.id:void 0,c,t.id,t._rootF),t.comAry.forEach(t=>{_.push(t.runtime.id),"function"!=typeof t._exe&&a(t,e,n),t._exe(d,c,void 0,void 0)})),i[l]={myInstScope:u,curScope:d,coms:_}}const{curScope:h}=i[l];if("input"==(p="string"==typeof p?p:"input")){const e={};if("mock"===n&&t.inputPins.length>0&&t.inputPins.forEach(t=>{t.mockData&&(e[t.hostId]=t.mockData)}),u=Object.assign(e,u))for(let e in u){const n=t.inputPins.find(t=>t.hostId==e);n?n._exe(h,u[e],void 0,void 0):"undefined"!=typeof console&&"function"==typeof console.error&&console.error(`No inputPin(id=${e}) found`)}return t.inputJoints&&t.inputJoints.forEach(t=>{!function(t,e){let n=e.parent,o=d.get(t);if(o){let t=o.get(n);t&&t.forEach(t=>{t(e)})}}(t,h)}),h}if(p.match(/^(output)|(inner-input)$/gi)){let e=h;if(t.outputPins.length){if(u)for(let t in u)e.returnParams[t]=u[t]||null;t.outputPins.find(t=>null==e.returnParams[t.hostId])||e.resolve()}}}}let h,m,y,x=null,g="stop";function P(){return"running"===g}let v={},E={};function I(t,e,n="runtime"){return function(t,e){if(!r(t,e))throw new Error("Invalid item type")}(t,o.FRAME),_(t,e,n),x={on(t,e){t&&"string"==typeof t&&"function"==typeof e&&(E[t.toLowerCase()]=e)},run(e=t,n){if(e._startScope(),function(t){return Object.assign(v,t||{}),m=[],y=[],!0}(n))return function(){function t(t){try{t.exe&&t.exe()}catch(t){E.error?E.error(t):console.error(t)}e(h)}function e(n){if("stop"==g||n!==h)return;let o;"pause"==g&&setTimeout(e,1e3),y.length>0?o=y.shift():m.length>0&&(o=m.shift()),o?v.debug?setTimeout(()=>{t(o)},o.debugSleep):"number"==typeof o.sleep&&o.sleep>-1?setTimeout(()=>{t(o)},0):t(o):setTimeout(t=>e(n))}g="running",h=u(),e(h),new Promise((t,e)=>{})}(),t=>{t&&t.outputs&&e.outputPins&&e.outputPins.forEach(e=>{const n=t.outputs[e.id];"function"==typeof n&&(e.proxyPin={_exe(t,e,o,i){n(e)}})});const n=e._exe(void 0,null==t?void 0:t.inputParams,void 0,"input",!0);return t.inputs&&e.inputPins&&Object.keys(t.inputs).forEach(n=>{const o=t.inputs[n],i=e.inputPins.find(t=>t.id===n);i&&i.conAry.length>0&&o(t=>{i._exe(void 0,t,void 0,void 0)})}),n}},update:(e,n=t)=>(n._update(e,void 0,void 0),!0),pause:b,stop(){const e=(g="stop",!0);return x=null,m=void 0,y=void 0,t._clearScope(),e}}}function b(){return g="pause",!0}function M(t,e){const n={_all:{},_waiting:{},has(t){return"function"==typeof this._all[t]},set(t,e){this._all[t]=e;const n=this._waiting[t];if(n)try{n.forEach(t=>{e(t)}),delete this._waiting[t]}finally{}return!0},get(t){return this._all[t]},waiting(t,e){let n=this._waiting[t];n||(n=this._waiting[t]=[]),n.push(e)}},o=u();let r;const s={};let c;return{inputs:new Proxy({_setInterseptor(t){r=t}},{ownKeys(e){const n=[];return i.each(t=>{n.push(t.hostId)},t.inputPins,t.inputPinsInModel),n},getOwnPropertyDescriptor:t=>({enumerable:!0,configurable:!0}),get:(t,e,i)=>"__id__"===e?o:"_setInterseptor"===e?t[e]:function(t){if(r){const n=r[e];"function"==typeof n&&n(t)}n.set(e,(function(n){const o=s[e];if(void 0!==n&&o){s[e]=void 0;const[o,i]=n;t(o,(function(t){"function"==typeof i&&i(t)}))}}))},set(t,o,i,r){s[o]=i;const u=n.get(o);return u?((null==e?void 0:e.input)&&e.input(),u(i)):n.waiting(o,i),!0}}),outputs:new Proxy({_setInterseptor(t){c=t}},{ownKeys(e){const n=[];return i.each(t=>{n.push(t.hostId)},t.outputPins,t.outputPinsInModel),n},getOwnPropertyDescriptor:t=>({enumerable:!0,configurable:!0}),get(n,r,u){if("__id__"===r)return o;if("_setInterseptor"===r)return n[r];if(t.outputPins||t.outputPinsInModel){const n=i.find(({hostId:t})=>r==t,t.outputPins,t.outputPinsInModel);if(n){let o;return function(i,u){if(t.outputPins){o=u;const s=function(t){"function"==typeof o&&o(t)};if((null==e?void 0:e.output)&&e.output(i),c){const t=c[r];"function"==typeof t&&t(i)}n._exe(null,i,s,t)}}}}}})}}}])},9:function(t,e,n){"use strict";n.r(e),n.d(e,"parse",(function(){return s}));var o=n(1);let i,r,u;function s(t){const e=JSON.parse(JSON.stringify(t));u=new WeakMap,r={};const n=e["xg.desn.stageview"],{def:s,refs:p}=n;i=p;const f=[],a=c(s._ref_).mainModule;if(a.frame){!function t(e){e.comAry&&e.comAry.forEach(e=>{if(Object(o.e)(e,o.a.NODE)){const{runtime:n}=e,o=n.def.namespace+"@"+n.def.version;f.indexOf(o)<=0&&f.push(o),e.frames&&e.frames.forEach(e=>t(e))}})}(a.frame)}return i=void 0,r=void 0,u=void 0,{mainModule:a,requireComs:f}}function c(t){let e=r[t];return e||(r[t]=e=i[t],function t(e){if(e&&u.has(e))return u.get(e);if("object"==typeof e&&e){let n;return e._ref_?(n=c(e._ref_),u.set(e,n)):(u.set(e,e),Object.keys(e).forEach(n=>{let o=e[n];Array.isArray(o)?o.forEach((e,n)=>{o[n]=t(e)}):e[n]=t(o)}),n=e),n}return e}(e),e)}}})}));