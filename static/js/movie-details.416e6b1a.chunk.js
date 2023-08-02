/*! For license information please see movie-details.416e6b1a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[321],{8603:function(t,n,e){e.r(n),e.d(n,{default:function(){return K}});var r,o,i,a,c,s,u,l,h,f,p,d,v,g,x,m=e(5861),y=e(9439),w=e(2791),b=e(7689),j=e(5218),Z=e(1786),L=e(4227),_=e(6856),P=e(168),E=e(5867),k=e(1087),O=(0,E.ZP)(k.OL)(r||(r=(0,P.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  margin: 20px 0 20px 0;\n\n\n  \n\n  &:hover,\n  :focus {\n    color: rgb(81, 124, 232);\n  }\n"]))),F=e(184),G=function(t){var n=t.to;return(0,F.jsxs)(O,{to:n,children:[(0,F.jsx)(_.lrP,{}),"Go back"]})},N=e(9366),S=E.ZP.main(o||(o=(0,P.Z)(["\n    width: 1200px;\n   \n"]))),z=E.ZP.div(i||(i=(0,P.Z)(["\n  display: flex;\n\n\n  \n"]))),T=E.ZP.h2(a||(a=(0,P.Z)(["\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 1.5;\n    text-transform: uppercase;\n    margin-bottom: 28px;\n\n"]))),A=E.ZP.img(c||(c=(0,P.Z)(["\n    width: 320px;\n    margin-right: 20px;\n\n\n"]))),I=E.ZP.p(s||(s=(0,P.Z)(["\n    display: flex;\n    color: gray;\n    margin-right: 20px;\n\n    font-size: 24px;\n    line-height: 16px;\n    color: #8c8c8c;\n\n    width: 160px;\n    margin-right: 40px;\n"]))),Y=E.ZP.div(u||(u=(0,P.Z)(["\n    display: flex;\n    align-items:baseline;\n    margin: 30px 0px 30px 0px;\n"]))),C=E.ZP.h2(l||(l=(0,P.Z)(["\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1.6;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n"]))),U=E.ZP.h2(h||(h=(0,P.Z)(["\n\n  text-align: center;\n    font-weight: 500;\n    font-size: 32px;\n    line-height: 1.5;\n    text-transform: uppercase;\n    margin: 30px 0 28px 0;\n"]))),V=E.ZP.p(f||(f=(0,P.Z)(["\n   \n    margin: 8px 0 20px;\n    font-size: 25px;\n    line-height: 1;\n    font-weight: 400;\n"]))),D=E.ZP.div(p||(p=(0,P.Z)(["\n margin-left: 50px;\n\n"]))),H=E.ZP.div(d||(d=(0,P.Z)(["\n \n  list-style: none;\n  display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: 20px;\n    margin-bottom: 40px;\n\n"]))),R=(0,E.ZP)(k.OL)(v||(v=(0,P.Z)(["\n    \n    display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  text-decoration: none;\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.17;\n  text-transform: uppercase;\n  color: #212121;\n\n  border: none;\n  border-radius: 5px;\n  width: 160px;\n  height: 44px;\n  background-color: rgb(112, 128, 144);\n  box-shadow: 0px 9px 8px 0px rgba(34, 60, 80, 0.2);\n  transition-property: background-color, color, border;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n  cursor: pointer;\n\n\n\n  &.active {\n    background-color: rgb(81, 124, 232);\n    color: #ffffff;\n    border: transparent;\n\n  }\n\n  &:hover,\n  :focus:not(.active) {\n    background-color: rgb(81, 124, 232);\n    color: #ffffff;\n    border: transparent;\n    \n  }\n  \n"]))),q=(E.ZP.li(g||(g=(0,P.Z)(["\n\n"]))),E.ZP.span(x||(x=(0,P.Z)(["\n    font-size: 24px;\n  line-height: 16px;\n    \n\n\n"])))),B=function(t){var n,e,r,o,i=t.movie,a=(0,b.TH)(),c=null!==(n=null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",s=null!==(r=null===(o=a.state)||void 0===o?void 0:o.from)&&void 0!==r?r:"/movies",u=i.title,l=i.release_date,h=i.poster_path,f=i.vote_average,p=i.vote_count,d=i.popularity,v=i.overview,g=i.genres,x=void 0===g?[]:g;return(0,F.jsx)(F.Fragment,{children:i&&(0,F.jsxs)(S,{children:[(0,F.jsx)(G,{to:s}),(0,F.jsxs)(z,{children:[(0,F.jsx)(A,{src:h?"https://image.tmdb.org/t/p/w500"+h:N,alt:u}),(0,F.jsxs)(D,{children:[(0,F.jsxs)(T,{children:[u," ",l&&(new Date(l).getFullYear()||"Unknown")]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(I,{children:"Vote/Votes"}),(0,F.jsxs)(q,{children:[f&&Number(f).toFixed(2)," / ",p]})]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(I,{children:"Popularity"}),(0,F.jsx)(q,{children:d&&Number(d).toFixed(1)})]}),(0,F.jsxs)(Y,{children:[(0,F.jsx)(I,{children:"Genres"}),(0,F.jsx)(q,{children:x.map((function(t){return t.name})).join(", ")})]}),(0,F.jsx)(C,{children:"About "}),(0,F.jsx)(V,{children:v})]})]}),(0,F.jsx)(U,{children:"Additional information"}),(0,F.jsxs)(D,{children:[(0,F.jsxs)(H,{children:[(0,F.jsx)(R,{to:"cast",state:{from:c},children:"Cast"}),(0,F.jsx)(R,{to:"reviews",state:{from:c},children:"Reviews"})]}),(0,F.jsx)("hr",{})]})]})})};function J(){J=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(k){s=function(t,n,e){return t[n]=e}}function u(t,n,e,o){var i=n&&n.prototype instanceof f?n:f,a=Object.create(i.prototype),c=new _(o||[]);return r(a,"_invoke",{value:b(t,e,c)}),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var h={};function f(){}function p(){}function d(){}var v={};s(v,i,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(P([])));x&&x!==n&&e.call(x,i)&&(v=x);var m=d.prototype=f.prototype=Object.create(v);function y(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function o(r,i,a,c){var s=l(t[r],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&e.call(h,"__await")?n.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return i=i?i.then(r,r):r()}})}function b(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=l(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function j(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,j(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,h):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function Z(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function P(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=d,r(m,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=s(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new w(u(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(m),s(m,c,"Generator"),s(m,i,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),h},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),h}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:P(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}var K=function(){var t=(0,b.UO)().movieId,n=(0,w.useState)([]),e=(0,y.Z)(n,2),r=e[0],o=e[1],i=(0,w.useState)(!1),a=(0,y.Z)(i,2),c=a[0],s=a[1];return(0,w.useEffect)((function(){var n=function(){var n=(0,m.Z)(J().mark((function n(){var e;return J().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s(!0),n.next=4,(0,Z.Y5)(t);case 4:e=n.sent,o(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),j.Am.error("Sorry, we could not find info about this movie");case 11:return n.prev=11,s(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,F.jsxs)(F.Fragment,{children:[c&&(0,F.jsx)(L.a,{loading:c}),(0,F.jsx)(B,{movie:r}),(0,F.jsx)(b.j3,{})]})}}}]);
//# sourceMappingURL=movie-details.416e6b1a.chunk.js.map