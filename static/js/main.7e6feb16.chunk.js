(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,r){},19:function(t,e,r){},21:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(7),i=r.n(a),c=(r(18),r(8)),u=r(1),l=r(2),s=r(4),h=r(3),f=r(5);var p=function(t){t.email;var e=t.id,r=t.name,n=t.pages,a=(t.author,t.language),i=t.link;return o.a.createElement("a",{href:i,target:"_blank",class:"link black"},o.a.createElement("div",{className:"bg-light-gray tc dib br3 ma3 pa2 grow bw2 shodow-5"},o.a.createElement("img",{alt:"robots",src:"https://books.google.com/books/content?id=".concat(e,"&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72y9i7dVgSRTjwICYMBmvE1zwJwYVPkarGCWJpaJgWVOspVpocueXAmwd9Z4LuV4A1wTNvLqX9dcqhWVt7gisZzzUYWO-dmsF9E_JiUqUMAMygaf7EiPF60_xU6rl0A_TjbQeci&source=gbs_api")}),o.a.createElement("div",null,o.a.createElement("h2",{className:"dim"},r.split(" ").filter(function(t){return""!==t}).length>6?function(t){for(var e=t.split(" "),r=[],n="",a=0;a<e.length;a++)(a+1)%5===0?(n+=e[a]+" ",r.push(n.trim()),n=""):n+=e[a]+" ";return""!==n.trim()&&r.push(n.trim()),o.a.createElement("div",null,r.map(function(t,e){return o.a.createElement(o.a.Fragment,{key:e},t,o.a.createElement("br",null))}))}(r):r),o.a.createElement("h3",{className:"ma2 pl0 pr0"},n," Page"),o.a.createElement("h3",{className:"ma2 pl0 pr0"},a))))},m=function(t){var e=t.data;return o.a.createElement("div",null,e.map(function(t,r){return o.a.createElement(p,{key:r,id:e[r].id,name:e[r].volumeInfo.title,username:e[r].volumeInfo.publishedDate,email:e[r].volumeInfo.publishedDate,pages:e[r].volumeInfo.pageCount,language:e[r].volumeInfo.language,link:e[r].volumeInfo.canonicalVolumeLink})}))},v=function(t){var e=t.searchChange;return o.a.createElement("div",null,o.a.createElement("input",{type:"search",placeholder:"Search Books",onChange:e,className:"br3 pa2 mb4 black-40"}))},d=(r(19),function(t){return o.a.createElement("div",{style:{overflow:"scroll",height:"450px"}},t.children)}),g=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).state={hasError:!1},t}return Object(f.a)(e,t),Object(l.a)(e,[{key:"componentDidCatch",value:function(t,e){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops. its an error"):this.props.children}}]),e}(n.Component);function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new O(o||[]);return n(i,"_invoke",{value:L(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var h={};function f(){}function p(){}function m(){}var v={};u(v,a,function(){return this});var d=Object.getPrototypeOf,g=d&&d(d(_([])));g&&g!==e&&r.call(g,a)&&(v=g);var w=m.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e(function(o,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(n,a,o,i)})}return o=o?o.then(i,i):i()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:p,configurable:!0}),p.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),u(w,c,"Generator"),u(w,a,function(){return this}),u(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var w=function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(s.a)(this,Object(h.a)(e).call(this))).onSearchChange=function(e){t.setState({inputfield:e.target.value})},t.state={data:[],inputfield:""},t}return Object(f.a)(e,t),Object(l.a)(e,[{key:"getCategories",value:function(){var t=Object(c.a)(y().mark(function t(){var e,r;return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.googleapis.com/books/v1/volumes?q=the&maxResults=40");case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,console.log(r.items),this.setState({data:r.items});case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=this;this.getCategories(),fetch("https://www.googleapis.com/books/v1/volumes?q=the&maxResults=40").then(function(t){return t.json()}).then(function(e){return t.setState({data:e.items})})}},{key:"render",value:function(){var t=this.state,e=t.data,r=t.inputfield,n=e.filter(function(t){return t.volumeInfo.title.toLowerCase().includes(r.toLowerCase())});return e.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Google Books"),o.a.createElement(v,{searchChange:this.onSearchChange}),o.a.createElement(d,null,o.a.createElement(g,null,o.a.createElement(m,{data:n})))):o.a.createElement("h1",null," No Books ")}}]),e}(o.a.Component),b=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,22)).then(function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),a(t),i(t)})};r(20);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null))),b()},9:function(t,e,r){t.exports=r(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.7e6feb16.chunk.js.map