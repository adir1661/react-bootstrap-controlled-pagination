/*! For license information please see main.13a0b06f.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-bootstrap-pagination-example"]=this["webpackJsonpreact-bootstrap-pagination-example"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);n(7);var r=n(0),o=n.n(r),a=n(4),c=n.n(a),i=n(5),u=n(3),s=n.n(u),l=n(1);function f(e,t){return e(t={exports:{}},t.exports),t.exports}var p="function"===typeof Symbol&&Symbol.for,m=p?Symbol.for("react.element"):60103,y=p?Symbol.for("react.portal"):60106,b=p?Symbol.for("react.fragment"):60107,d=p?Symbol.for("react.strict_mode"):60108,S=p?Symbol.for("react.profiler"):60114,E=p?Symbol.for("react.provider"):60109,v=p?Symbol.for("react.context"):60110,O=p?Symbol.for("react.async_mode"):60111,h=p?Symbol.for("react.concurrent_mode"):60111,g=p?Symbol.for("react.forward_ref"):60112,C=p?Symbol.for("react.suspense"):60113,j=p?Symbol.for("react.suspense_list"):60120,$=p?Symbol.for("react.memo"):60115,_=p?Symbol.for("react.lazy"):60116,k=p?Symbol.for("react.block"):60121,w=p?Symbol.for("react.fundamental"):60117,x=p?Symbol.for("react.responder"):60118,P=p?Symbol.for("react.scope"):60119;function I(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case m:switch(e=e.type){case O:case h:case b:case S:case d:case C:return e;default:switch(e=e&&e.$$typeof){case v:case g:case _:case $:case E:return e;default:return t}}case y:return t}}}function T(e){return I(e)===h}var R={AsyncMode:O,ConcurrentMode:h,ContextConsumer:v,ContextProvider:E,Element:m,ForwardRef:g,Fragment:b,Lazy:_,Memo:$,Portal:y,Profiler:S,StrictMode:d,Suspense:C,isAsyncMode:function(e){return T(e)||I(e)===O},isConcurrentMode:T,isContextConsumer:function(e){return I(e)===v},isContextProvider:function(e){return I(e)===E},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===m},isForwardRef:function(e){return I(e)===g},isFragment:function(e){return I(e)===b},isLazy:function(e){return I(e)===_},isMemo:function(e){return I(e)===$},isPortal:function(e){return I(e)===y},isProfiler:function(e){return I(e)===S},isStrictMode:function(e){return I(e)===d},isSuspense:function(e){return I(e)===C},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===b||e===h||e===S||e===d||e===C||e===j||"object"===typeof e&&null!==e&&(e.$$typeof===_||e.$$typeof===$||e.$$typeof===E||e.$$typeof===v||e.$$typeof===g||e.$$typeof===w||e.$$typeof===x||e.$$typeof===P||e.$$typeof===k)},typeOf:I},M=(f((function(e,t){0})),f((function(e){e.exports=R})),Object.getOwnPropertySymbols),B=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;function F(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}})()&&Object.assign;var N="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function q(e,t,n,r,o){}q.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function L(){}function W(){}W.resetWarningCache=L;var z=f((function(e){e.exports=function(){function e(e,t,n,r,o,a){if(a!==N){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W,resetWarningCache:L};return n.PropTypes=n,n}()}));function D(e,t){var n=e.startButton,r=e.prev,a=e.endButton,c=e.next,i=e.onSelect,u=e.value,s=e.end,f=e.start;return o.a.createElement(l.a,{ref:t},n&&f+1<u&&o.a.createElement(l.a.First,{onClick:function(){return i(f)}}),r&&f<u&&o.a.createElement(l.a.Prev,{onClick:function(){return i(u-1)}}),u>f+5&&[o.a.createElement(l.a.Item,{onClick:function(){return i(u-5)}},u-5),o.a.createElement(l.a.Ellipsis,null)],u-2>=f&&o.a.createElement(l.a.Item,{onClick:function(){return i(u-2)}},u-2),u-1>=f&&o.a.createElement(l.a.Item,{onClick:function(){return i(u-1)}},u-1),o.a.createElement(l.a.Item,{active:!0},u),u+1<=s&&o.a.createElement(l.a.Item,{onClick:function(){return i(u+1)}},u+1),u+2<=s&&o.a.createElement(l.a.Item,{onClick:function(){return i(u+2)}},u+2),u<s-5&&[o.a.createElement(l.a.Ellipsis,null),o.a.createElement(l.a.Item,{onClick:function(){return i(u+5)}},u+5)],c&&s>u&&o.a.createElement(l.a.Next,{onClick:function(){return i(u+1)}}),a&&s-1>u&&o.a.createElement(l.a.Last,{onClick:function(){return i(s)}}))}(D=o.a.forwardRef(D)).propTypes={onSelect:z.func.isRequired,value:z.number.isRequired,start:z.number,end:z.number,startButton:z.bool,prev:z.bool,endButton:z.bool,next:z.bool},D.defaultProps={start:0,end:0,startButton:!0,prev:!0,endButton:!0,next:!0},console.log(s.a);var J=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),n=t[0],a=t[1];return o.a.createElement("div",{className:s.a.container},o.a.createElement("div",{className:s.a.number},n),o.a.createElement(D,{value:n,start:0,end:324,onSelect:a}))};c.a.render(o.a.createElement(J,null),document.getElementById("root"))},3:function(e,t,n){e.exports={container:"App_container__3MfAA",number:"App_number__2Stjl"}},6:function(e,t,n){e.exports=n(14)},7:function(e,t,n){}},[[6,1,2]]]);
//# sourceMappingURL=main.13a0b06f.chunk.js.map