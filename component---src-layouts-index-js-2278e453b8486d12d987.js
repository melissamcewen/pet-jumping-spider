webpackJsonp([0x67ef26645b2a,60335399758886],{95:function(e,t){e.exports={layoutContext:{}}},189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),a=r(i),u=n(193),l=r(u),c=n(95),f=r(c);t.default=function(e){return a.default.createElement(l.default,o({},e,f.default))},e.exports=t.default},280:function(e,t){},87:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var s=u(e),d=u(t)}catch(e){return!1}if(s.length!=d.length)return!1;for(s.sort(),d.sort(),i=s.length-1;i>=0;i--)if(s[i]!=d[i])return!1;for(i=s.length-1;i>=0;i--)if(f=s[i],!c(e[f],t[f],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(89),l=n(88),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},88:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},89:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},91:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},114:function(e,t,n){!function(t,r){e.exports=r(n(1),n(6),n(5))}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function r(e){console.warn("[react-ga]",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e.replace(/^\s+|\s+$/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e){return(0,v.default)(e,k)}function u(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"==typeof G){if("string"!=typeof o)return void(0,R.default)("ga command must be a string");G.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){G.apply(void 0,i([e+"."+o].concat(n.slice(1))))})}}function l(e,t){return e?(t&&(t.debug&&t.debug===!0&&(j=!0),t.titleCase===!1&&(k=!1)),void(t&&t.gaOptions?G("create",e,t.gaOptions):G("create",e,"auto"))):void(0,R.default)("gaTrackingID is required in initialize()")}function c(e,t){return"undefined"!=typeof window&&((0,P.default)(),G=function(){var e;return(e=window).ga.apply(e,arguments)},Array.isArray(e)?e.forEach(function(e){return"object"!==("undefined"==typeof e?"undefined":g(e))?void(0,R.default)("All configs must be an object"):void l(e.trackingId,e)}):l(e,t),!0)}function f(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(G.apply(void 0,t),j&&((0,N.default)("called ga('arguments');"),(0,N.default)("with arguments: "+JSON.stringify(t)))),window.ga}function s(e,t){return e?"object"!==("undefined"==typeof e?"undefined":g(e))?void(0,R.default)("Expected `fieldsObject` arg to be an Object"):(0===Object.keys(e).length&&(0,R.default)("empty `fieldsObject` given to .set()"),u(t,"set",e),void(j&&((0,N.default)("called ga('set', fieldsObject);"),(0,N.default)("with fieldsObject: "+JSON.stringify(e))))):void(0,R.default)("`fieldsObject` is required in .set()")}function d(e,t){u(t,"send",e),j&&((0,N.default)("called ga('send', fieldObject);"),(0,N.default)("with fieldObject: "+JSON.stringify(e)),(0,N.default)("with trackers: "+JSON.stringify(t)))}function p(e,t){if(!e)return void(0,R.default)("path is required in .pageview()");var n=(0,S.default)(e);return""===n?void(0,R.default)("path cannot be an empty string in .pageview()"):void("function"==typeof f&&(u(t,"send","pageview",n),j&&((0,N.default)("called ga('send', 'pageview', path);"),(0,N.default)("with path: "+n))))}function T(e,t){if(!e)return void(0,R.default)("modalName is required in .modalview(modalName)");var n=(0,_.default)((0,S.default)(e));if(""===n)return void(0,R.default)("modalName cannot be an empty string or a single / in .modalview()");if("function"==typeof f){var r="/modal/"+n;u(t,"send","pageview",r),j&&((0,N.default)("called ga('send', 'pageview', path);"),(0,N.default)("with path: "+r))}}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments[1];if("function"==typeof f){if(!t||!n||!r||"number"!=typeof r)return void(0,R.default)("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");var u={hitType:"timing",timingCategory:a(t),timingVar:a(n),timingValue:r};o&&(u.timingLabel=a(o)),d(u,i)}}function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],n=e.category,r=e.action,i=e.label,u=e.value,l=e.nonInteraction,c=e.transport,s=o(e,["category","action","label","value","nonInteraction","transport"]);if("function"==typeof f){if(!n||!r)return void(0,R.default)("args.category AND args.action are required in event()");var p={hitType:"event",eventCategory:a(n),eventAction:a(r)};i&&(p.eventLabel=a(i)),"undefined"!=typeof u&&("number"!=typeof u?(0,R.default)("Expected `args.value` arg to be a Number."):p.eventValue=u),"undefined"!=typeof l&&("boolean"!=typeof l?(0,R.default)("`args.nonInteraction` must be a boolean."):p.nonInteraction=l),"undefined"!=typeof c&&("string"!=typeof c?(0,R.default)("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(c)===-1&&(0,R.default)("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),p.transport=c)),Object.keys(s).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){p[e]=s[e]}),Object.keys(s).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){p[e]=s[e]}),d(p,t)}}function b(e,t){var n=e.description,r=e.fatal;if("function"==typeof f){var o={hitType:"exception"};n&&(o.exDescription=a(n)),"undefined"!=typeof r&&("boolean"!=typeof r?(0,R.default)("`args.fatal` must be a boolean."):o.exFatal=r),d(o,t)}}function h(e,t,n){if("function"!=typeof t)return void(0,R.default)("hitCallback function is required");if("function"==typeof f){if(!e||!e.label)return void(0,R.default)("args.label is required in outboundLink()");var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:a(e.label)},o=!1,i=function(){o=!0,t()},u=setTimeout(i,250),l=function(){clearTimeout(u),o||t()};r.hitCallback=l,d(r,n)}else setTimeout(t,0)}Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=t.plugin=void 0;var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.initialize=c,t.ga=f,t.set=s,t.send=d,t.pageview=p,t.modalview=T,t.timing=y,t.event=E,t.exception=b,t.outboundLink=h;var m=n(3),v=r(m),A=n(6),_=r(A),O=n(1),S=r(O),w=n(7),P=r(w),M=n(0),R=r(M),C=n(8),N=r(C),I=n(9),L=r(I),j=!1,k=!0,G=function(){(0,R.default)("ReactGA.initialize must be called first")},x=t.plugin={require:function(e,t){if("function"==typeof f){if(!e)return void(0,R.default)("`name` is required in .require()");var n=(0,S.default)(e);if(""===n)return void(0,R.default)("`name` cannot be an empty string in .require()");if(t){if("object"!==("undefined"==typeof t?"undefined":g(t)))return void(0,R.default)("Expected `options` arg to be an Object");0===Object.keys(t).length&&(0,R.default)("Empty `options` given to .require()"),f("require",n,t),j&&(0,N.default)("called ga('require', '"+n+"', "+JSON.stringify(t))}else f("require",n),j&&(0,N.default)("called ga('require', '"+n+"');")}},execute:function(e,t){var n=void 0,r=void 0;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"function"==typeof f)if("string"!=typeof e)(0,R.default)("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)(0,R.default)("Expected `action` arg to be a String.");else{var o=e+":"+t;n=n||null,r&&n?(f(o,r,n),j&&((0,N.default)("called ga('"+o+"');"),(0,N.default)('actionType: "'+r+'" with payload: '+JSON.stringify(n)))):n?(f(o,n),j&&((0,N.default)("called ga('"+o+"');"),(0,N.default)("with payload: "+JSON.stringify(n)))):(f(o),j&&(0,N.default)("called ga('"+o+"');"))}}};L.default.origTrackLink=L.default.trackLink,L.default.trackLink=h;var H=t.OutboundLink=L.default;t.default={initialize:c,ga:f,set:s,send:d,pageview:p,modalview:T,timing:y,event:E,exception:b,plugin:x,outboundLink:h,OutboundLink:H}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return(0,a.default)(e)?((0,f.default)("This arg looks like an email address, redacting."),s):t?(0,l.default)(e):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(4),a=r(i),u=n(5),l=r(u),c=n(0),f=r(c),s="REDACTED (Potential Email Address)"},function(e,t,n){"use strict";function r(e){return/[^@]+@[^@]+/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(0,a.default)(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(u)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(1),a=r(i),u=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},function(e,t,n){"use strict";function r(e){return"/"===e.substring(0,1)?e.substring(1):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){!function(e,t,n,r,o,i,a){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,i=t.createElement(n),a=t.getElementsByTagName(n)[0],i.async=1,i.src=r,a.parentNode.insertBefore(i,a)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga")}},function(e,t,n){"use strict";function r(e){console.info("[react-ga]",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(10),c=r(l),f=n(11),s=r(f),d=n(12),p=r(d),T=n(0),y=r(T),E="_blank",b=1,h=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.handleClick=function(e){var n=r.props,o=n.target,i=n.eventLabel,a=n.to,u=n.onClick,l={label:i},c=o!==E,f=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===b);c&&f?(e.preventDefault(),t.trackLink(l,function(){window.location.href=a})):t.trackLink(l,function(){}),u&&u(e)},a=n,i(r,a)}return a(t,e),u(t,[{key:"render",value:function(){var e=(0,p.default)({},this.props,{href:this.props.to,onClick:this.handleClick});return delete e.eventLabel,c.default.createElement("a",e)}}]),t}(l.Component);h.propTypes={eventLabel:s.default.string.isRequired,target:s.default.string,to:s.default.string,onClick:s.default.func},h.defaultProps={target:null,to:null,onClick:null},h.trackLink=function(){(0,y.default)("ga tracking not enabled")},t.default=h},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])})},115:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),d=n(6),p=r(d),T=n(120),y=r(T),E=n(87),b=r(E),h=n(116),g=n(49),m=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,b.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.TAG_NAMES.SCRIPT:case g.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case g.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case g.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=a,t.titleAttributes=l({},i),t));case g.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},i)});case g.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},i)})}return l({},o,(n={},n[r.type]=l({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),l=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case g.TAG_NAMES.LINK:case g.TAG_NAMES.META:case g.TAG_NAMES.NOSCRIPT:case g.TAG_NAMES.SCRIPT:case g.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=l({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},v=function(){return null},A=(0,y.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(v),_=m(A);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},49:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},116:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(1),u=r(a),l=n(5),c=r(l),f=n(49),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=b(e,f.TAG_NAMES.TITLE),n=b(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=b(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return b(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},y=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&_("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();t.indexOf(l)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===f.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},b=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:y([f.TAG_PROPERTIES.HREF],e),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,e),defer:b(e,f.HELMET_PROPS.DEFER),encode:b(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,e),linkTags:E(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:E(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,e)}},g=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){g(t)},0)}}(),m=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,A="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,_=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,S=function(e){O&&A(O),e.defer?O=v(function(){w(e,function(){O=null})}):(w(e),O=null)},w=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,s=e.styleTags,d=e.title,p=e.titleAttributes;R(f.TAG_NAMES.BODY,r),R(f.TAG_NAMES.HTML,o),M(d,p);var T={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,i),metaTags:C(f.TAG_NAMES.META,a),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,u),scriptTags:C(f.TAG_NAMES.SCRIPT,c),styleTags:C(f.TAG_NAMES.STYLE,s)},y={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),l(e,y,E)},P=function(e){return Array.isArray(e)?e.join(""):e},M=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=P(e)),R(f.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var s=i.indexOf(l);s!==-1&&i.splice(s,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},N=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=N(n),i=P(t);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"},L=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),i=j(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,i,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},H=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return N(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return L(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,s=e.title,d=void 0===s?"":s,p=e.titleAttributes;return{base:H(f.TAG_NAMES.BASE,t,r),bodyAttributes:H(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(f.ATTRIBUTE_NAMES.HTML,o,r),link:H(f.TAG_NAMES.LINK,i,r),meta:H(f.TAG_NAMES.META,a,r),noscript:H(f.TAG_NAMES.NOSCRIPT,u,r),script:H(f.TAG_NAMES.SCRIPT,l,r),style:H(f.TAG_NAMES.STYLE,c,r),title:H(f.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=k,t.handleClientStateChange=S,t.mapStateOnServer=D,t.reducePropsToState=h,t.requestAnimationFrame=v,t.warn=_}).call(t,function(){return this}())},120:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(1),l=r(u),c=n(91),f=r(c),s=n(121),d=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function s(){T=e(p.map(function(e){return e.props})),y.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,y=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),s()},t.prototype.render=function(){return l.default.createElement(c,this.props)},t}(u.Component);return y.displayName="SideEffect("+r(c)+")",y.canUseDOM=f.default.canUseDOM,y}}},121:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!u(c))return!1;var f=e[c],s=t[c];if(o=n?n.call(r,f,s,c):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(18),f=n(279),s=r(f),d=function(e){function t(n){o(this,t);var r=i(this,e.call(this,n));return r.toggle=r.toggle.bind(r),r.state={isOpen:!1},r}return a(t,e),
t.prototype.toggle=function(){this.setState({isOpen:!this.state.isOpen})},t.prototype.render=function(){return l.default.createElement(c.Navbar,{color:"faded",light:!0,expand:"md"},l.default.createElement(c.NavbarBrand,{className:s.default.brand,href:"/"},"My Pet Jumping Spider"),l.default.createElement(c.NavbarToggler,{onClick:this.toggle}),l.default.createElement(c.Collapse,{isOpen:this.state.isOpen,navbar:!0},l.default.createElement(c.Nav,{className:"ml-auto",navbar:!0},l.default.createElement(c.UncontrolledDropdown,{nav:!0},l.default.createElement(c.DropdownToggle,{nav:!0,caret:!0},"Basic"),l.default.createElement(c.DropdownMenu,null,l.default.createElement(c.DropdownItem,{href:"/getting-started"},"Getting Started"),l.default.createElement(c.DropdownItem,{href:"/food"},"Food"),l.default.createElement(c.DropdownItem,{href:"/enclosure"},"Enclosures"),l.default.createElement(c.DropdownItem,{href:"/spider"},"Obtaining a spider"))),l.default.createElement(c.UncontrolledDropdown,{nav:!0},l.default.createElement(c.DropdownToggle,{nav:!0,caret:!0},"Advanced"),l.default.createElement(c.DropdownMenu,null,l.default.createElement(c.DropdownItem,{href:"/spiderlings"},"Raising spiderlings"),l.default.createElement(c.DropdownItem,{href:"/medicine"},"Helping a sick spider"),l.default.createElement(c.DropdownItem,{href:"/elder-spider"},"Spider aging"),l.default.createElement(c.DropdownItem,{href:"/appendix"},"Appendix"))),l.default.createElement(c.NavItem,null,l.default.createElement(c.NavLink,{href:"/faq"},"FAQ")),l.default.createElement(c.NavItem,null,l.default.createElement(c.NavLink,{href:"/community"},"Community")))))},t}(l.default.Component);t.default=d,e.exports=t.default},279:function(e,t){e.exports={brand:"src-components----nav-module---brand---1JcUQ"}},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(1),l=r(u),c=n(6),f=r(c),s=n(15),d=(r(s),n(115)),p=r(d),T=n(192),y=r(T),E=n(114),b=r(E);n(280);var h=function(){return l.default.createElement("div",{style:{background:"#7DCE82"}},l.default.createElement("div",null,l.default.createElement(y.default,null)))},g=function(e){console.log("Logged view on: ",window.location.pathname),e.set({page:window.location.pathname}),e.pageview(window.location.pathname)},m=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.prototype.componentDidMount=function(){b.default.initialize("UA-111691753-1",{}),g(b.default)},t.prototype.componentWillReceiveProps=function(){g(b.default)},t.prototype.render=function(){return l.default.createElement("div",null,l.default.createElement(p.default,{title:"My Pet Jumping Spider",meta:[{name:"description",content:"How to keep your own jumping spider"},{name:"keywords",content:"jumping spiders, pets, spiders, Salticidae"},{property:"og:image",content:"http://www.mypetjumpingspider.com/img/spider.jpg"}]}),l.default.createElement(h,null),l.default.createElement("div",null,this.props.children()))},t}(l.default.Component);m.propTypes={children:f.default.func},t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-2278e453b8486d12d987.js.map