(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30452446"],{"280d":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"dragula"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12 grid-margin"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[e._v("Simple Dragula")]),n("div",{staticClass:"examples"},[n("div",{staticClass:"parent"},[n("p",{staticClass:"card-description"},[e._v("Drag and drop between Team A and Team B")]),n("div",{staticClass:"row"},[n("div",{staticClass:"container col-md-6"},[n("h6",{staticClass:"card-title"},[e._v("Team A")]),n("div",{directives:[{name:"dragula",rawName:"v-dragula",value:e.colOne,expression:"colOne"}],staticClass:"bg-dark p-4",attrs:{drake:"first"}},e._l(e.colOne,(function(t){return n("div",{key:t,on:{click:e.onClick}},[n("div",{staticClass:"card rounded mb-2"},[n("div",{staticClass:"card-body p-3"},[n("div",{staticClass:"media"},[n("div",{staticClass:"d-flex"},[n("div",[n("h6",{staticClass:"mb-1"},[e._v(e._s(t))])])])])])])])})),0)]),n("div",{staticClass:"container col-md-6"},[n("h6",{staticClass:"card-title mt-3 mt-sm-0"},[e._v("Team B")]),n("div",{directives:[{name:"dragula",rawName:"v-dragula",value:e.colTwo,expression:"colTwo"}],staticClass:"bg-dark p-4",attrs:{drake:"first"}},e._l(e.colTwo,(function(t){return n("div",{key:t},[n("div",{staticClass:"card rounded mb-2"},[n("div",{staticClass:"card-body p-3"},[n("div",{staticClass:"media"},[n("div",{staticClass:"d-flex"},[n("div",[n("h6",{staticClass:"mb-1"},[e._v(e._s(t))])])])])])])])})),0)])])])])])])])])])},o=[],r=n("2b0e"),a=n("8d68");r["default"].use(a["Vue2Dragula"],{logging:{service:!0}});var s={name:"globalService",data:function(){return{colOne:["Rebecca young","Jacob march","Catherine"],colTwo:["Keto Philip","Jacob Stephen","March Creg"],categories:[[1,2,3],[4,5,6]]}},created:function(){var e=this.$dragula.$service;e.options("first",{}),e.options("second",{}),e.options("third",{copy:!0})},methods:{onClick:function(){window.alert("click event")},testModify:function(){this.categories=[["a","b","c"],["d","e","f"]]}}},l=s,c=n("2877"),d=Object(c["a"])(l,i,o,!1,null,null,null);t["default"]=d.exports},"8d68":function(e,t,n){(function(n,i){var o,r;
/*!
 * vue-dragula v2.5.3
 * (c) 2018 Yichang Liu
 * Released under the MIT License.
 */(function(e,n){n(t)})(0,(function(t){"use strict";var a="undefined"!==typeof window?window:"undefined"!==typeof n?n:"undefined"!==typeof self?self:{};function s(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}function l(e,t){return t={exports:{}},e(t,t.exports),t.exports}var c=l((function(e){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}})),d=s(c),u=Object.freeze({default:d}),v=l((function(e){var t,n="function"===typeof setImmediate;t=n?function(e){setImmediate(e)}:"undefined"!==typeof i&&i.nextTick?i.nextTick:function(e){setTimeout(e,0)},e.exports=t})),h=s(v),f=Object.freeze({default:h}),g=l((function(e){var t=s(f);e.exports=function(e,n,i){e&&t((function(){e.apply(i||null,n||[])}))}})),m=s(g),p=Object.freeze({default:m}),y=l((function(e){var t=s(u),n=s(p);e.exports=function(e,i){var o=i||{},r={};return void 0===e&&(e={}),e.on=function(t,n){return r[t]?r[t].push(n):r[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var i=arguments.length;if(1===i)delete r[t];else if(0===i)r={};else{var o=r[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var n=t(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(i){var a=(r[i]||[]).slice(0);return function(){var r=t(arguments),s=this||e;if("error"===i&&!1!==o.throws&&!a.length)throw 1===r.length?r[0]:r;return a.forEach((function(t){o.async?n(t,r,s):t.apply(s,r),t._once&&e.off(i,t)})),e}},e}})),k=s(y),M=Object.freeze({default:k}),b=l((function(e){var t=a.CustomEvent;function n(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}e.exports=n()?t:"function"===typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}})),x=s(b),E=Object.freeze({default:x}),w=l((function(e){var t=[],n="",i=/^on/;for(n in a)i.test(n)&&t.push(n.slice(2));e.exports=t})),C=s(w),I=Object.freeze({default:C}),O=l((function(e){var t=s(E),n=s(I),i=a.document,o=c,r=u,l=[];function c(e,t,n,i){return e.addEventListener(t,n,i)}function d(e,t,n){return e.attachEvent("on"+t,g(e,t,n))}function u(e,t,n,i){return e.removeEventListener(t,n,i)}function v(e,t,n){var i=m(e,t,n);if(i)return e.detachEvent("on"+t,i)}function h(e,o,r){var a=-1===n.indexOf(o)?l():s();function s(){var e;return i.createEvent?(e=i.createEvent("Event"),e.initEvent(o,!0,!0)):i.createEventObject&&(e=i.createEventObject()),e}function l(){return new t(o,{detail:r})}e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+o,a)}function f(e,t,n){return function(t){var i=t||a.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function(){i.cancelBubble=!0},i.which=i.which||i.keyCode,n.call(e,i)}}function g(e,t,n){var i=m(e,t,n)||f(e,t,n);return l.push({wrapper:i,element:e,type:t,fn:n}),i}function m(e,t,n){var i=p(e,t,n);if(i){var o=l[i].wrapper;return l.splice(i,1),o}}function p(e,t,n){var i,o;for(i=0;i<l.length;i++)if(o=l[i],o.element===e&&o.type===t&&o.fn===n)return i}a.addEventListener||(o=d,r=v),e.exports={add:o,remove:r,fabricate:h}})),A=s(O),N=O.add,T=O.remove,_=O.fabricate,S=Object.freeze({default:A,add:N,remove:T,fabricate:_}),B=l((function(e){var t={},n="(?:^|\\s)",i="(?:\\s|$)";function o(e){var o=t[e];return o?o.lastIndex=0:t[e]=o=new RegExp(n+e+i,"g"),o}function r(e,t){var n=e.className;n.length?o(t).test(n)||(e.className+=" "+t):e.className=t}function a(e,t){e.className=e.className.replace(o(t)," ").trim()}e.exports={add:r,rm:a}})),D=s(B),j=B.add,z=B.rm,R=Object.freeze({default:D,add:j,rm:z}),Y=l((function(e){var t=s(M),n=s(S),i=s(R),o=document,r=o.documentElement;function l(e,a){var s,l,v,M,b,E,C,I,O,A,N,T=arguments.length;1===T&&!1===Array.isArray(e)&&(a=e,e=[]);var _,S=null,B=a||{};void 0===B.moves&&(B.moves=g),void 0===B.accepts&&(B.accepts=g),void 0===B.invalid&&(B.invalid=V),void 0===B.containers&&(B.containers=e||[]),void 0===B.isContainer&&(B.isContainer=f),void 0===B.copy&&(B.copy=!1),void 0===B.copySortSource&&(B.copySortSource=!1),void 0===B.revertOnSpill&&(B.revertOnSpill=!1),void 0===B.removeOnSpill&&(B.removeOnSpill=!1),void 0===B.direction&&(B.direction="vertical"),void 0===B.ignoreInputTextSelection&&(B.ignoreInputTextSelection=!0),void 0===B.mirrorContainer&&(B.mirrorContainer=o.body);var D=t({containers:B.containers,start:X,end:K,cancel:Z,remove:Q,destroy:F,canMove:U,dragging:!1});return!0===B.removeOnSpill&&D.on("over",oe).on("out",re),z(),D;function j(e){return-1!==D.containers.indexOf(e)||B.isContainer(e)}function z(e){var t=e?"remove":"add";c(r,t,"mousedown",L),c(r,t,"mouseup",q)}function R(e){var t=e?"remove":"add";c(r,t,"mousemove",$)}function Y(e){var t=e?"remove":"add";n[t](r,"selectstart",P),n[t](r,"click",P)}function F(){z(!0),q({})}function P(e){_&&e.preventDefault()}function L(e){E=e.clientX,C=e.clientY;var t=1!==d(e)||e.metaKey||e.ctrlKey;if(!t){var n=e.target,i=H(n);i&&(_=i,R(),"mousedown"===e.type&&(k(n)?n.focus():e.preventDefault()))}}function $(e){if(_)if(0!==d(e)){if(void 0===e.clientX||e.clientX!==E||void 0===e.clientY||e.clientY!==C){if(B.ignoreInputTextSelection){var t=w("clientX",e),n=w("clientY",e),r=o.elementFromPoint(t,n);if(k(r))return}var a=_;R(!0),Y(),K(),J(a);var s=u(v);M=w("pageX",e)-s.left,b=w("pageY",e)-s.top,i.add(A||v,"gu-transit"),ae(),ie(e)}}else q({})}function H(e){if((!D.dragging||!s)&&!j(e)){var t=e;while(y(e)&&!1===j(y(e))){if(B.invalid(e,t))return;if(e=y(e),!e)return}var n=y(e);if(n&&!B.invalid(e,t)){var i=B.moves(e,n,t,x(e));if(i)return{item:e,source:n}}}}function U(e){return!!H(e)}function X(e){var t=H(e);t&&J(t)}function J(e){de(e.item,e.source)&&(A=e.item.cloneNode(!0),D.emit("cloned",A,e.item,"copy")),l=e.source,v=e.item,I=O=x(e.item),D.dragging=!0,D.emit("drag",v,l)}function V(){return!1}function K(){if(D.dragging){var e=A||v;G(e,y(e))}}function W(){_=!1,R(!0),Y(!0)}function q(e){if(W(),D.dragging){var t=A||v,n=w("clientX",e),i=w("clientY",e),o=h(s,n,i),r=ne(o,n,i);r&&(A&&B.copySortSource||!A||r!==l)?G(t,r):B.removeOnSpill?Q():Z()}}function G(e,t){var n=y(e);A&&B.copySortSource&&t===l&&n.removeChild(v),te(t)?D.emit("cancel",e,l,l):D.emit("drop",e,t,l,O),ee()}function Q(){if(D.dragging){var e=A||v,t=y(e);t&&t.removeChild(e),D.emit(A?"cancel":"remove",e,t,l),ee()}}function Z(e){if(D.dragging){var t=arguments.length>0?e:B.revertOnSpill,n=A||v,i=y(n),o=te(i);!1===o&&t&&(A?i&&i.removeChild(A):l.insertBefore(n,I)),o||t?D.emit("cancel",n,l,l):D.emit("drop",n,i,l,O),ee()}}function ee(){var e=A||v;W(),se(),e&&i.rm(e,"gu-transit"),N&&clearTimeout(N),D.dragging=!1,S&&D.emit("out",e,S,l),D.emit("dragend",e),l=v=A=I=O=N=S=null}function te(e,t){var n;return n=void 0!==t?t:s?O:x(A||v),e===l&&n===I}function ne(e,t,n){var i=e;while(i&&!o())i=y(i);return i;function o(){var o=j(i);if(!1===o)return!1;var r=le(i,e),a=ce(i,r,t,n),s=te(i,a);return!!s||B.accepts(v,i,l,a)}}function ie(e){if(s){e.preventDefault();var t=w("clientX",e),n=w("clientY",e),i=t-M,o=n-b;s.style.left=i+"px",s.style.top=o+"px";var r=A||v,a=h(s,t,n),c=ne(a,t,n),d=null!==c&&c!==S;(d||null===c)&&(k(),S=c,p());var u=y(r);if(c!==l||!A||B.copySortSource){var f,g=le(c,a);if(null!==g)f=ce(c,g,t,n);else{if(!0!==B.revertOnSpill||A)return void(A&&u&&u.removeChild(r));f=I,c=l}(null===f&&d||f!==r&&f!==x(r))&&(O=f,c.insertBefore(r,f),D.emit("shadow",r,c,l))}else u&&u.removeChild(r)}function m(e){D.emit(e,r,S,l)}function p(){d&&m("over")}function k(){S&&m("out")}}function oe(e){i.rm(e,"gu-hide")}function re(e){D.dragging&&i.add(e,"gu-hide")}function ae(){if(!s){var e=v.getBoundingClientRect();s=v.cloneNode(!0),s.style.width=m(e)+"px",s.style.height=p(e)+"px",i.rm(s,"gu-transit"),i.add(s,"gu-mirror"),B.mirrorContainer.appendChild(s),c(r,"add","mousemove",ie),i.add(B.mirrorContainer,"gu-unselectable"),D.emit("cloned",s,v,"mirror")}}function se(){s&&(i.rm(B.mirrorContainer,"gu-unselectable"),c(r,"remove","mousemove",ie),y(s).removeChild(s),s=null)}function le(e,t){var n=t;while(n!==e&&y(n)!==e)n=y(n);return n===r?null:n}function ce(e,t,n,i){var o="horizontal"===B.direction,r=t!==e?s():a();return r;function a(){var t,r,a,s=e.children.length;for(t=0;t<s;t++){if(r=e.children[t],a=r.getBoundingClientRect(),o&&a.left+a.width/2>n)return r;if(!o&&a.top+a.height/2>i)return r}return null}function s(){var e=t.getBoundingClientRect();return l(o?n>e.left+m(e)/2:i>e.top+p(e)/2)}function l(e){return e?x(t):t}}function de(e,t){return"boolean"===typeof B.copy?B.copy:B.copy(e,t)}}function c(e,t,i,o){var r={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},s={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},l={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};a.navigator.pointerEnabled?n[t](e,s[i],o):a.navigator.msPointerEnabled?n[t](e,l[i],o):(n[t](e,r[i],o),n[t](e,i,o))}function d(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function u(e){var t=e.getBoundingClientRect();return{left:t.left+v("scrollLeft","pageXOffset"),top:t.top+v("scrollTop","pageYOffset")}}function v(e,t){return"undefined"!==typeof a[t]?a[t]:r.clientHeight?r[e]:o.body[e]}function h(e,t,n){var i,r=e||{},a=r.className;return r.className+=" gu-hide",i=o.elementFromPoint(t,n),r.className=a,i}function f(){return!1}function g(){return!0}function m(e){return e.width||e.right-e.left}function p(e){return e.height||e.bottom-e.top}function y(e){return e.parentNode===o?null:e.parentNode}function k(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||b(e)}function b(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||b(y(e))))}function x(e){return e.nextElementSibling||t();function t(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}}function E(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function w(e,t){var n=E(t),i={pageX:"clientX",pageY:"clientY"};return e in i&&!(e in n)&&i[e]in n&&(e=i[e]),n[e]}e.exports=l})),F=s(Y),P=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),$=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},U=window.requestAnimationFrame;function X(e){U((function(){U(e)}))}function J(e){window.setTimeout(e,50)}var V=U?X:J;function K(e){return e===Object(e)}var W=function(){function e(t){var n=t.ctx,i=t.name,o=t.drake;t.options;P(this,e),this.dragElm=null,this.dragIndex=null,this.dropIndex=null,this.sourceModel=null,this.logging=n.logging,this.ctx=n,this.serviceName=n.name,this.modelManager=n.modelManager,this.drake=o,this.name=i,this.eventBus=n.eventBus,this.findModelForContainer=n.findModelForContainer.bind(n),this.domIndexOf=n.domIndexOf.bind(n)}return L(e,[{key:"log",value:function(e){var t;if(this.shouldLog){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];(t=console).log.apply(t,[this.clazzName+" ["+this.name+"] :",e].concat(i))}}},{key:"removeModel",value:function(){this.log("removeModel",{sourceModel:this.sourceModel,dragIndex:this.dragIndex}),this.sourceModel.removeAt(this.dragIndex)}},{key:"dropModelSame",value:function(){this.log("dropModelSame",{sourceModel:this.sourceModel,dragIndex:this.dragIndex,dropIndex:this.dropIndex}),this.sourceModel.move({dropIndex:this.dropIndex,dragIndex:this.dragIndex})}},{key:"insertModel",value:function(e,t,n){this.log("insertModel",{targetModel:e,dropIndex:this.dropIndex,dropElmModel:t,elements:n}),e.insertAt(this.dropIndex,t),this.emit("insertAt",{elements:n,targetModel:e,transitModel:t,dragIndex:this.dragIndex,dropIndex:this.dropIndex,models:{source:this.sourceModel,target:e,transit:t},indexes:{source:this.dragIndex,target:this.dropIndex}})}},{key:"notCopy",value:function(){var e=this;V((function(){e.sourceModel.removeAt(e.dragIndex)}))}},{key:"cancelDrop",value:function(e){this.log("No targetModel could be found for target:",{target:e}),this.log("in drake:",{drake:this.drake}),this.drake.cancel(!0)}},{key:"dropModelTarget",value:function(e,t,n){this.log("dropModelTarget",{dropElm:e,target:t,source:n});var i=this.dragElm===e,o=this.getModel(t),r=i?this.dropElmModel():this.jsonDropElmModel();if(i&&this.notCopy(),!o)return this.cancelDrop(t);var a={drop:e,target:t,source:n};this.insertModel(o,r,a)}},{key:"dropModel",value:function(e,t,n){this.log("dropModel",{dropElm:e,target:t,source:n}),t===n?this.dropModelSame():this.dropModelTarget(e,t,n)}},{key:"emit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.log("emit",{eventName:e,opts:t}),t.sourceModel=this.sourceModel,t.name=this.name,this.eventBus.$emit(e,t),this.log("emit service",{serviceEventName:n,eventName:e,opts:t});var n=this.serviceName+":"+e;this.eventBus.$emit(n,t)}},{key:"getModel",value:function(e){var t=this.findModelForContainer(e,this.drake);return this.log("getModel",{location:e,model:t}),this.modelManager.createFor({name:this.name,drake:this.drake,logging:this.logging,model:t})}},{key:"remove",value:function(e,t,n){this.log("remove",{el:e,container:t,source:n}),this.drake.models?(this.sourceModel=this.getModel(n),this.removeModel(),this.drake.cancel(!0),this.emit("removeModel",{el:e,source:n,dragIndex:this.dragIndex})):this.log("Warning: Can NOT remove it. Must have models:",this.drake.models)}},{key:"drag",value:function(e,t){this.log("drag",{el:e,source:t}),this.dragElm=e,this.dragIndex=this.domIndexOf(e,t)}},{key:"drop",value:function(e,t,n){this.log("drop",{dropEl:e,target:t,source:n}),this.drake.models||t?(this.dropIndex=this.domIndexOf(e,t),this.sourceModel=this.getModel(n),this.dropModel(e,t,n),this.emit("dropModel",{target:t,source:n,el:e,dragIndex:this.dragIndex,dropIndex:this.dropIndex})):this.log("Warning: Can NOT drop it. Must have either models:",this.drake.models," or target:",t)}},{key:"dropElmModel",value:function(){return this.sourceModel.at(this.dragIndex)}},{key:"jsonDropElmModel",value:function(){var e=this.sourceModel.at(this.dragIndex),t=e?e.model||e.stringable:e,n=t||e;K(n)||this.log("jsonDropElmModel","invalid element model, must be some sort of Object",t,e);try{var i=JSON.stringify(t||e);return JSON.parse(i)}catch(o){this.log("jsonDropElmModel","JSON stringify/parse error",o)}}},{key:"clazzName",get:function(){return this.constructor.name||"DragHandler"}},{key:"shouldLog",get:function(){return this.logging&&this.logging.dragHandler}}]),e}(),q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P(this,e),Array.isArray(t)&&(t={model:t}),t.drake=t.drake||{},this.opts=t,this.copy=t.copy||t.drake.copy,this.name=t.name,this.drake=t.drake,this.logging=t.logging,this.logging=t.logging,this.modelRef=t.model||[]}return L(e,[{key:"log",value:function(e){var t;if(this.shouldLog){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];(t=console).log.apply(t,[this.clazzName+" ["+this.name+"] :",e].concat(i))}}},{key:"notYet",value:function(e){this.log(e,"not yet implemented")}},{key:"undo",value:function(){this.notYet("undo")}},{key:"redo",value:function(){this.notYet("redo")}},{key:"at",value:function(e){this.notYet("at")}},{key:"clear",value:function(){this.notYet("clear")}},{key:"createModel",value:function(e){this.notYet("createModel")}},{key:"createFor",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.notYet("createFor")}},{key:"removeAt",value:function(e){this.notYet("removeAt")}},{key:"insertAt",value:function(e,t){this.notYet("removeAt")}},{key:"move",value:function(e){e.dragIndex,e.dropIndex;this.notYet("move")}},{key:"clazzName",get:function(){return this.constructor.name||"BaseModelManager"}},{key:"shouldLog",get:function(){return this.logging&&this.logging.modelManager}}]),e}(),G=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.model=n.createModel(n.modelRef),n.log("CREATE",e),n}return $(t,e),L(t,[{key:"log",value:function(e){var t;if(this.shouldLog){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];(t=console).log.apply(t,[this.clazzName+" ["+this.name+"] :",e].concat(i))}}},{key:"undo",value:function(){this.log("undo","not yet implemented")}},{key:"redo",value:function(){this.log("redo","not yet implemented")}},{key:"at",value:function(e){return this.model.get?this.model.get(e):this.model[e]}},{key:"clear",value:function(){this.model=this.createModel()}},{key:"createModel",value:function(e){return this.model||e||[]}},{key:"createFor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new t(e)}},{key:"removeAt",value:function(e){if(!this.copy){this.log("removeAt",{model:this.model,index:e});var t=this.model.splice(e,1),n=this.model;return this.log({splicedModel:t,removedModel:n}),t}}},{key:"insertAt",value:function(e,t){this.log("insertAt",{model:this.model,index:e,insertModel:t});var n=this.model.splice(e,0,t),i=this.model;return this.log("insertAt",{splicedModel:n,modelAfterInsert:i}),i}},{key:"move",value:function(e){var t=e.dragIndex,n=e.dropIndex;if(!this.copy){this.log("move",{model:this.model,dragIndex:t,dropIndex:n});var i=this.model.splice(t,1),o=i[0],r=this.model.splice(n,0,o),a=this.model;return this.log("move",{splicedRemainder:i,modelAfterRemove:r,movedModel:a}),r}}},{key:"clazzName",get:function(){return this.constructor.name||"ModelManager"}},{key:"shouldLog",get:function(){return this.logging&&this.logging.modelManager}}]),t}(q);if(!F)throw new Error("[vue-dragula] cannot locate dragula.");function Q(e){var t=e.ctx,n=e.name,i=e.drake;return new W({ctx:t,name:n,drake:i})}function Z(e){return new G(e)}var ee=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P(this,e);var n=t.name,i=t.eventBus,o=t.drakes,r=t.options;r=r||{},this.options=r,this.logging=r.logging,this.log("CREATE DragulaService",t),this.name=n,this.drakes=o||{},this.eventBus=i,this.createDragHandler=r.createDragHandler||Q,this.createModelManager=r.createModelManager||Z,this.modelManager=this.createModelManager(r),this.events=["cancel","cloned","drag","dragend","drop","out","over","remove","shadow","dropModel","removeModel","accepts","moves","invalid"]}return L(e,[{key:"addEvents",value:function(){var e;this.events=(e=this.events).concat.apply(e,arguments)}},{key:"removeEvents",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];this.events=this.events.filter((function(e){return t.includes(e)}))}},{key:"createModel",value:function(){return this.modelManager.createModel()}},{key:"log",value:function(e){var t;if(this.shouldLog){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];(t=console).log.apply(t,["DragulaService ["+this.name+"] :",e].concat(i))}}},{key:"error",value:function(e){throw console.error(e),new Error(e)}},{key:"_validate",value:function(e,t){t||this.error(e+" must take a drake name as the first argument")}},{key:"add",value:function(e,t){if(this.log("add (drake)",e,t),this._validate("add",e),this.find(e)){this.log("existing drakes",this.drakeNames);var n='Drake named: "'+e+'" already exists for this service ['+this.name+"].\n      Most likely this error in cause by a race condition evaluating multiple template elements with\n      the v-dragula directive having the same drake name. Please initialise the drake in the created() life cycle hook of the VM to fix this problem.";this.error(n)}return this.drakes[e]=t,t.models&&this.handleModels(e,t),t.initEvents||this.setupEvents(e,t),t}},{key:"find",value:function(e){return this.log("find (drake) by name",e),this._validate("find",e),this.drakes[e]}},{key:"handleModels",value:function(e,t){if(this.log("handleModels",e,t),this._validate("handleModels",e),t.registered)this.log("handleModels","already registered");else{var n=this.createDragHandler({ctx:this,name:e,drake:t});this.log("created dragHandler for service",n),t.on("remove",n.remove.bind(n)),t.on("drag",n.drag.bind(n)),t.on("drop",n.drop.bind(n)),t.registered=!0}}},{key:"on",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.log("on (events) ",t),Object.keys(t).forEach((function(n){var i=t[n];e.log("$on",n,i),e.eventBus.$on(n,i)}))}},{key:"destroy",value:function(e){this.log("destroy (drake) ",e),this._validate("destroy",e);var t=this.find(e);t&&(t.destroy(),this._delete(e))}},{key:"_delete",value:function(e){delete this.drakes[e]}},{key:"setOptions",value:function(e,t){this.log("setOptions (drake)",e,t),this._validate("setOptions",e);var n=this.add(e,F(t));return this.handleModels(e,n),this}},{key:"calcOpts",value:function(e,t){function n(){return{}}var i=this.argsEventMap[e]||this.argsEventMap.defaultEvent||n;return i(t)}},{key:"setupEvents",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.log("setupEvents",e,t),this._validate("setupEvents",e),t.initEvents=!0;var n=this,i=function(i){function o(){var o=Array.prototype.slice.call(arguments),r=n.calcOpts(e,o);r.name=e,r.service=this,r.drake=t,n.log("eventBus.$emit",i,e,r),n.eventBus.$emit(i,r),n.eventBus.$emit(this.name+":"+i,r)}n.log("emitter",i),t.on(i,o)};this.events.forEach(i)}},{key:"domIndexOf",value:function(e,t){return Array.prototype.indexOf.call(t.children,e)}},{key:"findModelForContainer",value:function(e,t){return this.log("findModelForContainer",e,t),(this.findModelContainerByContainer(e,t)||{}).model}},{key:"findModelContainerByContainer",value:function(e,t){if(t.models){var n=t.models.find((function(t){return t.container===e}));return n||(this.log("No matching model could be found for container:",e),this.log("in drake",t.name," models:",t.models)),n}this.log("findModelContainerByContainer","warning: no models found")}},{key:"shouldLog",get:function(){return this.logging&&this.logging.service}},{key:"drakeNames",get:function(){return Object.keys(this.drakes)}},{key:"argsEventMap",get:function(){return this._argsEventMap=this._argsEventMap||this.defaultArgsEventMap,this._argsEventMap},set:function(e){this._argsEventMap=e}},{key:"defaultArgsEventMap",get:function(){return{cloned:function(e){return{clone:e[0],original:e[1],type:e[2]}},moves:function(e){return{el:e[0],source:e[1],handle:e[2],sibling:e[3]}},copy:function(e){return{el:e[0],source:e[1]}},accepts:function(e){return{el:e[0],target:e[1],source:e[2],sibling:e[3]}},invalid:function(e){return{el:e[0],handle:e[1]}},drag:function(e){return{el:e[0],source:e[1]}},dragend:function(e){return{el:e[0]}},drop:function(e){return{el:e[0],target:e[1],source:e[2],sibling:e[3]}},defaultEvent:function(e){return{el:e[0],container:e[1],source:e[2]}}}}}]),e}();if(!F)throw new Error("[vue-dragula] cannot locate dragula.");var te={createService:function(e){var t=e.name,n=e.eventBus,i=e.drakes,o=e.options;return new ee({name:t,eventBus:n,drakes:i,options:o})},createEventBus:function(e){return new e}};function ne(e){return!e||0===e.length}function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(){var e;if(t.logging&&t.logging.plugin){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];(e=console).log.apply(e,["vue-dragula plugin"].concat(i))}}function i(){var e;if(t.logging&&t.logging.service){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];(e=console).log.apply(e,["vue-dragula service config: "].concat(i))}}function o(){var e;if(t.logging&&t.logging.directive){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];(e=console).log.apply(e,["v-dragula directive"].concat(i))}}!0===t.logging&&(t.logging={plugin:!0,directive:!0,service:!0,dragHandler:!0}),n("Initializing vue-dragula plugin",t);var r=t.createService||te.createService,a=t.createEventBus||te.createEventBus||new e;n("create eventBus",a);var s=a(e,t);if(!s)throw console.warn("Eventbus could not be created"),new Error("Eventbus could not be created");n("eventBus created",s);var l=r({name:"global.dragula",eventBus:s,drakes:t.drakes,options:t}),c="globalDrake",d=function(){function e(t){P(this,e),this.options=t,this.$service={options:l.setOptions.bind(l),find:l.find.bind(l),eventBus:l.eventBus},this.$service.options("default",{}),this.createServices=this.createService}return L(e,[{key:"optionsFor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.service(e).setOptions(t),this}},{key:"createService",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i("createService",n),this._serviceMap=this._serviceMap||{};var o=n.names||[],a=n.name||[],s=n.drakes||{},c=n.drake,d=Object.assign({},t,n);o=o.length>0?o:[a];var u=n.eventBus||l.eventBus;return u||console.warn("Eventbus could not be created",u),i("names",o),o.forEach((function(t){var n={name:t,eventBus:u,options:d};i("create DragulaService",t,n),e._serviceMap[t]=r(n),s.default||(s.default=c||!0),e.drakesFor(t,s)})),this}},{key:"drakesFor",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i("drakesFor",e,t);var n=this.service(e);return Array.isArray(t)&&(t=t.reduce((function(e,t){return e[t]=!0,e}),{})),Object.keys(t).forEach((function(e){var i=t[e];!0===i&&(i={}),n.setOptions(e,i)})),this}},{key:"on",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i("on",e,n),"object"===("undefined"===typeof e?"undefined":_typeof(e))){n=e;var o=this.serviceNames;return!o||o.length<1?(console.warn("vue-dragula: No services found to add events handlers for",this._serviceMap),this):(i("add event handlers for",o),o.forEach((function(e){t.on(e,n)})),this)}var r=this.service(e);return r?(i("service.on",r,n),r.on(n),this):(console.warn("vue-dragula: no service "+e+" to add event handlers for"),this)}},{key:"service",value:function(e){if(this._serviceMap){var t=this._serviceMap[e];if(i("lookup service",e,t),!t){i("not found by name, get default");var n=this.serviceNames;n&&(t=this._serviceMap[n[0]])}return t}}},{key:"serviceNames",get:function(){return Object.keys(this._serviceMap)}},{key:"services",get:function(){return Object.values(this._serviceMap)}}]),e}();e.$dragula=new d(t);var u={};function v(e,t,n){if(t){var i=t.context.$dragula;if(i){o("trying to find and use component service");var r=i.service(n);if(r)return o("using component service",r),r}}return o("using global service",l),l}function h(e,t,n){var i=t?t.data.attrs.drake:this.params.drake,o=t?t.data.attrs.service:this.params.service;return void 0!==i&&0!==i.length&&(e=i),i=ne(i)?"default":i,{name:e,drakeName:i,serviceName:o}}function f(e,t,n,i){o("updateDirective");var r=n?t.value:e;if(r){var a=h(c,n,this),s=a.name,l=a.drakeName,d=a.serviceName,f=v(s,n,d),g=f.find(l,n);u[l]=u[l]||[];var m=u[l];if(m){var p=m.find((function(t){return t===e}));if(p)return void o("already has drake container configured",l,e)}if(f){g.models||(g.models=[]),n||(e=this.el);var y=f.findModelContainerByContainer(e,g);m.push(e),o("DATA",{service:{name:d,instance:f},drake:{name:l,instance:g},container:e,modelContainer:y}),y?(o("set model of container",r),y.model=r):(o("push model and container on drake",r,e),g.models.push({model:r,container:e}))}else o("no service found",s,l)}}e.prototype.$dragula=e.$dragula,e.directive("dragula",{params:["drake","service"],bind:function(e,t,n){o("BIND",e,t,n);var i=h(c,n,this),r=i.name,a=i.drakeName,s=i.serviceName,l=v(r,n,s),d=l.find(a,n);if(n||(e=this.el),o({service:{name:s,instance:l},drake:{name:a,instance:d},container:e}),d)d.containers.push(e);else{var u=F({containers:[e]});l.add(r,u),l.handleModels(r,u)}},update:function(t,n,i,r){o("UPDATE",t,n,i),1===e.version&&f(t,n,i,r)},componentUpdated:function(e,t,n,i){o("COMPONENT UPDATED",e,t,n)},inserted:function(e,t,n,i){o("INSERTED",e,t,n),f(e,t,n,i)},unbind:function(e,t,n){o("UNBIND",e,t,n);var i=h(c,n,this),r=i.name,a=i.drakeName,s=i.serviceName,l=v(r,n,s),d=l.find(a,n);if(o({service:{name:s,instance:l},drake:{name:a,instance:d},container:e}),d){var u=d.containers.indexOf(e);u>-1&&(o("remove container",u),d.containers.splice(u,1)),0===d.containers.length&&(o("destroy service"),l.destroy(r))}}})}var oe=function(){function e(t){var n=t.name,i=t.model,o=t.modelRef,r=t.history,a=t.logging;P(this,e),this.name=n||"default",this.model=i,this.modelRef=o,this.logging=a,this.history=r||this.createHistory(),this.history.push(this.model),this.timeIndex=0}return L(e,[{key:"log",value:function(e){var t;if(this.shouldLog){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];(t=console).log.apply(t,[this.clazzName+" ["+this.name+"] :",e].concat(i))}}},{key:"createHistory",value:function(){return this.history||[]}},{key:"timeTravel",value:function(e){return this.log("timeTravel to",e),this.model=this.history[e],this.updateModelRef(),this}},{key:"updateModelRef",value:function(){var e=this;this.modelRef.splice(0,this.modelRef.length),this.model.forEach((function(t){e.modelRef.push(t)}))}},{key:"undo",value:function(){return this.log("undo timeIndex",this.timeIndex),0!==this.timeIndex&&(this.timeIndex--,this.timeTravel(this.timeIndex),this)}},{key:"redo",value:function(){return this.log("redo timeIndex",this.timeIndex,this.history.length),!(this.timeIndex>this.history.length-1)&&(this.timeIndex++,this.timeTravel(this.timeIndex),this)}},{key:"addToHistory",value:function(e){return this.log("addToHistory"),this.log("old",this.model),this.log("new",e),this.model=e,this.log("model was set to",this.model),this.history.push(e),this.timeIndex++,this.updateModelRef(),this}},{key:"shouldLog",get:function(){return this.logging&&this.logging.modelManager}},{key:"clazzName",get:function(){return this.constructor.name||"TimeMachine"}}]),e}(),re=function(e){return new oe(e)},ae=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.timeOut=e.timeOut||800;var i=e.createTimeMachine||re;return n.timeMachine=i(Object.assign(e,{model:n.model,modelRef:n.modelRef})),n}return $(t,e),L(t,[{key:"timeTravel",value:function(e){return this.timeMachine.timeTravel(e)}},{key:"undo",value:function(){return this.timeMachine.undo(),this}},{key:"redo",value:function(){return this.timeMachine.redo(),this}},{key:"addToHistory",value:function(e){return this.timeMachine.addToHistory(e),this}},{key:"createModel",value:function(e){return e||[]}},{key:"createFor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new t(e)}},{key:"isEmpty",value:function(){return 0===this.model.length}},{key:"actionUpdateModel",value:function(e){var t=this;setTimeout((function(){t.addToHistory(e)}),this.timeOut||800)}},{key:"removeAt",value:function(e){if(!this.copy){this.log("removeAt",{model:this.model,index:e});var t=this.model.slice(0,e),n=this.model.slice(e+1);this.log("removeAt: concat",t,n);var i=this.createModel().concat(t,n);return this.actionUpdateModel(i),i}}},{key:"insertAt",value:function(e,t){this.log("insertAt",{model:this.model,index:e,insertModel:t});var n=this.sliceBefore(e),i=this._sliceAfter(e);this.log("insertAt: concat",{itemsBefore:n,insertModel:t,itemsAfter:i});var o=this._createNewModelFromInsert(n,t,i);return this.log({newModel:o}),this.actionUpdateModel(o),o}},{key:"_createNewModelFromInsert",value:function(e,t,n){return this.createModel().concat(e,t,n)}},{key:"_sliceBefore",value:function(e){return this.model.slice(0,e)}},{key:"_sliceAfter",value:function(e){this.model.slice(e)}},{key:"move",value:function(e){var t=e.dragIndex,n=e.dropIndex;if(!this.copy)return this.log("move",{model:this.model,dragIndex:t,dropIndex:n}),this.timeMachine.undo(),this}},{key:"clazzName",get:function(){return this.constructor.name||"ImmutableModelManager"}},{key:"model",get:function(){return this.timeMachine?this.timeMachine.model:this._model}},{key:"history",get:function(){return this.timeMachine.history}},{key:"timeIndex",get:function(){return this.timeMachine.timeIndex}},{key:"first",get:function(){return this.at(0)}},{key:"last",get:function(){return this.at(this.model.length-1)}}]),t}(G),se=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};P(this,e),this.name=t.name||"default",this.logging=t.logging,this.observer={undo:function(e){},redo:function(e){}},this.actions={done:[],undone:[]}}return L(e,[{key:"log",value:function(e){var t;if(this.shouldLog){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];(t=console).log.apply(t,[this.clazzName+" ["+this.name+"] :",e].concat(i))}}},{key:"clear",value:function(){this.actions.done=[],this.actions.undone=[]}},{key:"doAct",value:function(e,t){this.log("doAct",{container:e,action:t});var n=e[t].bind(e);if(!n)throw new Error(e,"missing",t,"method");n()}},{key:"isSourceContainerAction",value:function(e){return"copy"!==e}},{key:"isTargetContainerAction",value:function(e){return!0}},{key:"do",value:function(e){var t=e.name,n=e.container,i=n.do,o=n.undo;if(i.length){var r=i.pop(),a=r.models;this.log("do",{name:t,action:r,source:s,target:l});var s=a.source,l=a.target;this.isSourceContainerAction(r)&&this.doAct(s,t),this.isTargetContainerAction(r)&&this.doAct(l,t),this.emitAction(t,r),o.push(r)}}},{key:"emitAction",value:function(e,t){this.log("emitAction",{name:e,action:t});var n=this.observer[e];"function"===typeof n&&n(t)}},{key:"onUndo",value:function(e){this.observer.undo=e}},{key:"onRedo",value:function(e){this.observer.redo=e}},{key:"undo",value:function(){this.log("UNDO"),this.do({name:"undo",container:{do:this.actions.done,undo:this.actions.undone}})}},{key:"redo",value:function(){this.log("REDO"),this.do({name:"redo",container:{do:this.actions.undone,undo:this.actions.done}})}},{key:"act",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.models,i=e.indexes,o=e.elements;this.log("act (store action on stack)",{name:t,models:n,indexes:i,elements:o}),this.actions.done.push(e)}},{key:"clazzName",get:function(){return this.constructor.name||"ActionManager"}},{key:"shouldLog",get:function(){return this.logging}}]),e}();function le(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};le.installed&&console.warn("[vue-dragula] already installed."),console.log("Add Dragula plugin:",t),ie(e,t)}le.version="2.0.1";var ce=le;o=[],r=function(){}.apply(t,o),void 0===r||(e.exports=r),t.Vue2Dragula=ce,t.DragulaService=ee,t.DragHandler=W,t.ModelManager=G,t.ImmutableModelManager=ae,t.TimeMachine=oe,t.ActionManager=se}))}).call(this,n("c8ba"),n("4362"))}}]);
//# sourceMappingURL=chunk-30452446.8831ddf7.js.map