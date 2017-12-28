webpackJsonp([46377859332056],{109:function(e,t,a){!function(t,n){e.exports=n(a(2),a(6),a(5))}(this,function(e,t,a){return function(e){function t(n){if(a[n])return a[n].exports;var l=a[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,a){"use strict";function n(e){console.warn("[react-ga]",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,a){"use strict";function n(e){return e.replace(/^\s+|\s+$/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function i(e){return(0,C.default)(e,M)}function o(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var l=a[0];if("function"==typeof q){if("string"!=typeof l)return void(0,S.default)("ga command must be a string");q.apply(void 0,a),Array.isArray(e)&&e.forEach(function(e){q.apply(void 0,r([e+"."+l].concat(a.slice(1))))})}}function u(e,t){return e?(t&&(t.debug&&t.debug===!0&&(N=!0),t.titleCase===!1&&(M=!1)),void(t&&t.gaOptions?q("create",e,t.gaOptions):q("create",e,"auto"))):void(0,S.default)("gaTrackingID is required in initialize()")}function d(e,t){return"undefined"!=typeof window&&((0,j.default)(),q=function(){var e;return(e=window).ga.apply(e,arguments)},Array.isArray(e)?e.forEach(function(e){return"object"!==("undefined"==typeof e?"undefined":v(e))?void(0,S.default)("All configs must be an object"):void u(e.trackingId,e)}):u(e,t),!0)}function c(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.length>0&&(q.apply(void 0,t),N&&((0,A.default)("called ga('arguments');"),(0,A.default)("with arguments: "+JSON.stringify(t)))),window.ga}function f(e,t){return e?"object"!==("undefined"==typeof e?"undefined":v(e))?void(0,S.default)("Expected `fieldsObject` arg to be an Object"):(0===Object.keys(e).length&&(0,S.default)("empty `fieldsObject` given to .set()"),o(t,"set",e),void(N&&((0,A.default)("called ga('set', fieldsObject);"),(0,A.default)("with fieldsObject: "+JSON.stringify(e))))):void(0,S.default)("`fieldsObject` is required in .set()")}function s(e,t){o(t,"send",e),N&&((0,A.default)("called ga('send', fieldObject);"),(0,A.default)("with fieldObject: "+JSON.stringify(e)),(0,A.default)("with trackers: "+JSON.stringify(t)))}function m(e,t){if(!e)return void(0,S.default)("path is required in .pageview()");var a=(0,T.default)(e);return""===a?void(0,S.default)("path cannot be an empty string in .pageview()"):void("function"==typeof c&&(o(t,"send","pageview",a),N&&((0,A.default)("called ga('send', 'pageview', path);"),(0,A.default)("with path: "+a))))}function p(e,t){if(!e)return void(0,S.default)("modalName is required in .modalview(modalName)");var a=(0,k.default)((0,T.default)(e));if(""===a)return void(0,S.default)("modalName cannot be an empty string or a single / in .modalview()");if("function"==typeof c){var n="/modal/"+a;o(t,"send","pageview",n),N&&((0,A.default)("called ga('send', 'pageview', path);"),(0,A.default)("with path: "+n))}}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,a=e.variable,n=e.value,l=e.label,r=arguments[1];if("function"==typeof c){if(!t||!a||!n||"number"!=typeof n)return void(0,S.default)("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");var o={hitType:"timing",timingCategory:i(t),timingVar:i(a),timingValue:n};l&&(o.timingLabel=i(l)),s(o,r)}}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],a=e.category,n=e.action,r=e.label,o=e.value,u=e.nonInteraction,d=e.transport,f=l(e,["category","action","label","value","nonInteraction","transport"]);if("function"==typeof c){if(!a||!n)return void(0,S.default)("args.category AND args.action are required in event()");var m={hitType:"event",eventCategory:i(a),eventAction:i(n)};r&&(m.eventLabel=i(r)),"undefined"!=typeof o&&("number"!=typeof o?(0,S.default)("Expected `args.value` arg to be a Number."):m.eventValue=o),"undefined"!=typeof u&&("boolean"!=typeof u?(0,S.default)("`args.nonInteraction` must be a boolean."):m.nonInteraction=u),"undefined"!=typeof d&&("string"!=typeof d?(0,S.default)("`args.transport` must be a string."):(["beacon","xhr","image"].indexOf(d)===-1&&(0,S.default)("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),m.transport=d)),Object.keys(f).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){m[e]=f[e]}),Object.keys(f).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){m[e]=f[e]}),s(m,t)}}function y(e,t){var a=e.description,n=e.fatal;if("function"==typeof c){var l={hitType:"exception"};a&&(l.exDescription=i(a)),"undefined"!=typeof n&&("boolean"!=typeof n?(0,S.default)("`args.fatal` must be a boolean."):l.exFatal=n),s(l,t)}}function b(e,t,a){if("function"!=typeof t)return void(0,S.default)("hitCallback function is required");if("function"==typeof c){if(!e||!e.label)return void(0,S.default)("args.label is required in outboundLink()");var n={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:i(e.label)},l=!1,r=function(){l=!0,t()},o=setTimeout(r,250),u=function(){clearTimeout(o),l||t()};n.hitCallback=u,s(n,a)}else setTimeout(t,0)}Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=t.plugin=void 0;var v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.initialize=d,t.ga=c,t.set=f,t.send=s,t.pageview=m,t.modalview=p,t.timing=g,t.event=h,t.exception=y,t.outboundLink=b;var E=a(3),C=n(E),w=a(6),k=n(w),_=a(1),T=n(_),O=a(7),j=n(O),x=a(0),S=n(x),z=a(8),A=n(z),B=a(9),P=n(B),N=!1,M=!0,q=function(){(0,S.default)("ReactGA.initialize must be called first")},L=t.plugin={require:function(e,t){if("function"==typeof c){if(!e)return void(0,S.default)("`name` is required in .require()");var a=(0,T.default)(e);if(""===a)return void(0,S.default)("`name` cannot be an empty string in .require()");if(t){if("object"!==("undefined"==typeof t?"undefined":v(t)))return void(0,S.default)("Expected `options` arg to be an Object");0===Object.keys(t).length&&(0,S.default)("Empty `options` given to .require()"),c("require",a,t),N&&(0,A.default)("called ga('require', '"+a+"', "+JSON.stringify(t))}else c("require",a),N&&(0,A.default)("called ga('require', '"+a+"');")}},execute:function(e,t){var a=void 0,n=void 0;if(1===(arguments.length<=2?0:arguments.length-2)?a=arguments.length<=2?void 0:arguments[2]:(n=arguments.length<=2?void 0:arguments[2],a=arguments.length<=3?void 0:arguments[3]),"function"==typeof c)if("string"!=typeof e)(0,S.default)("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)(0,S.default)("Expected `action` arg to be a String.");else{var l=e+":"+t;a=a||null,n&&a?(c(l,n,a),N&&((0,A.default)("called ga('"+l+"');"),(0,A.default)('actionType: "'+n+'" with payload: '+JSON.stringify(a)))):a?(c(l,a),N&&((0,A.default)("called ga('"+l+"');"),(0,A.default)("with payload: "+JSON.stringify(a)))):(c(l),N&&(0,A.default)("called ga('"+l+"');"))}}};P.default.origTrackLink=P.default.trackLink,P.default.trackLink=b;var D=t.OutboundLink=P.default;t.default={initialize:d,ga:c,set:f,send:s,pageview:m,modalview:p,timing:g,event:h,exception:y,plugin:L,outboundLink:b,OutboundLink:D}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return(0,i.default)(e)?((0,c.default)("This arg looks like an email address, redacting."),f):t?(0,u.default)(e):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var r=a(4),i=n(r),o=a(5),u=n(o),d=a(0),c=n(d),f="REDACTED (Potential Email Address)"},function(e,t,a){"use strict";function n(e){return/[^@]+@[^@]+/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return(0,i.default)(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,a){return t>0&&t+e.length!==a.length&&e.search(o)>-1&&":"!==a.charAt(t-2)&&("-"!==a.charAt(t+e.length)||"-"===a.charAt(t-1))&&a.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var r=a(1),i=n(r),o=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i},function(e,t,a){"use strict";function n(e){return"/"===e.substring(0,1)?e.substring(1):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){!function(e,t,a,n,l,r,i){e.GoogleAnalyticsObject=l,e[l]=e[l]||function(){(e[l].q=e[l].q||[]).push(arguments)},e[l].l=1*new Date,r=t.createElement(a),i=t.getElementsByTagName(a)[0],r.async=1,r.src=n,i.parentNode.insertBefore(r,i)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga")}},function(e,t,a){"use strict";function n(e){console.info("[react-ga]",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(10),d=n(u),c=a(11),f=n(c),s=a(12),m=n(s),p=a(0),g=n(p),h="_blank",y=1,b=function(e){function t(){var e,a,n,i;l(this,t);for(var o=arguments.length,u=Array(o),d=0;d<o;d++)u[d]=arguments[d];return a=n=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.handleClick=function(e){var a=n.props,l=a.target,r=a.eventLabel,i=a.to,o=a.onClick,u={label:r},d=l!==h,c=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===y);d&&c?(e.preventDefault(),t.trackLink(u,function(){window.location.href=i})):t.trackLink(u,function(){}),o&&o(e)},i=a,r(n,i)}return i(t,e),o(t,[{key:"render",value:function(){var e=(0,m.default)({},this.props,{href:this.props.to,onClick:this.handleClick});return delete e.eventLabel,d.default.createElement("a",e)}}]),t}(u.Component);b.propTypes={eventLabel:f.default.string.isRequired,target:f.default.string,to:f.default.string,onClick:f.default.func},b.defaultProps={target:null,to:null,onClick:null},b.trackLink=function(){(0,g.default)("ga tracking not enabled")},t.default=b},function(t,a){t.exports=e},function(e,a){e.exports=t},function(e,t){e.exports=a}])})},188:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(2),r=n(l),i=a(22),o=(n(i),a(109)),u=(n(o),a(61)),d=n(u),c=a(23),f=function(e){var t=e.data;return console.log(t),r.default.createElement("div",null,r.default.createElement(c.Jumbotron,{fluid:!0},r.default.createElement(c.Container,null,r.default.createElement("h1",{className:"display-3"},"Jumping Spider Enclosures"),r.default.createElement("p",{className:"lead"},"Jumping spiders are easy to house in a variety of enclosures from simple to elaborate."))),r.default.createElement(c.Container,null,r.default.createElement("p",null,"An ideal home for your jumping spider should have:"),r.default.createElement("ul",null,r.default.createElement("li",null,"Ventilation: air holes to allow in air and out moisture"),r.default.createElement("li",null,"An opening from the bottom or side: most jumping spiders will build their nest on the top of the enclosure, if it opens from the top you may disturb or destroy their nest"),r.default.createElement("li",null,"Placed in indirect sunlight or lighted (see Terrarium lighting section). Direct sunlight can overheat your spider and kill it."))),r.default.createElement(c.Container,null,r.default.createElement("h2",null,"Deli Cups"),r.default.createElement("em",null,"A simple budget option"),r.default.createElement("p",null,"A deli cup is a perfect option for a cheap no-frills spider home. Turn upside down so it opens on the bottom. Use a tack to make breathing holes on the sides and top. You can decorate with tape (spiders will not stick to the tape and actually seem to enjoy building on it) and paper."),r.default.createElement(c.CardDeck,null,r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.delismall.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Small"),r.default.createElement(c.CardSubtitle,null,"For spiderlings"),r.default.createElement(c.CardText,null),r.default.createElement(c.ButtonGroup,null,r.default.createElement(c.Button,null,"How to use (coming soon)"),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2o2Ejnb",target:"__blank"},"Purchase")))),r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.delilarge.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Large"),r.default.createElement(c.CardSubtitle,null,"For adult spiders or raising spiderlings"),r.default.createElement(c.CardText,null,"The placon lid ones have ventilation holes in the lid, but you can add your own ventilation holes to the sides and top to a regular one"),r.default.createElement(c.ButtonGroup,null,r.default.createElement(c.Button,null,"How to use (coming soon)"),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2DmbaXU",target:"__blank"},"Purchase")))))),r.default.createElement(c.Container,null,r.default.createElement("h2",null,"Display Cases"),r.default.createElement("em",null,"Attractive but requires some more advanced modification"),r.default.createElement("p",null,"These display cases are a popular option though they require either drilling holes with a special bit or purchasing already modified"),r.default.createElement(c.CardDeck,null,r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.displayCase.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Basic"),r.default.createElement(c.CardSubtitle,null,"A very cheap option but you'll need to drill the holes yourself"),r.default.createElement(c.CardText,null,"Use an acrylic bit to drill holes for ventilation"),r.default.createElement(c.ButtonGroup,null,r.default.createElement(c.Button,null,"How to use (coming soon)"),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2E08G2B",target:"__blank"},"Purchase")))),r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.displayCaseMod.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Modified Display Cases"),r.default.createElement(c.CardSubtitle,null,"Originally created for juvenile tarantulas, they come with vents already added"),r.default.createElement(c.CardText,null,"Comes with decorations and substrate too!"),r.default.createElement(c.Button,{color:"primary",href:"https://jamiestarantulas.com/arboreal-spiderling-enclosure-kit/",target:"__blank"},"Purchase")))),r.default.createElement(c.Media,null,r.default.createElement(c.Media,{left:!0,href:"#"},r.default.createElement(c.Media,{object:!0,src:t.keeper.childImageSharp.sizes.src,alt:"Generic placeholder image"})),r.default.createElement(c.Media,{body:!0},r.default.createElement(c.Media,{heading:!0},"Why not Kritter Keepers?"),"These are popular for keeping other bugs, but since they are not vertical and open at the top, they do not make ideal enclosures for jumping spiders."))),r.default.createElement(c.Container,null,r.default.createElement("h2",null,"Terrariums"),r.default.createElement("p",null,"If you want to create a beautiful living environment for your spiders, a terrarium is a great option. You can use live or fake plants."),r.default.createElement(c.CardDeck,null,r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.exoterra.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Exo Terra Nano Tall"),r.default.createElement(c.CardSubtitle,null,"A great option for a large adult spider and live or fake plants"),r.default.createElement(c.CardText,null,"Most pet jumping spider species are arboreal so prefer tall enclosures"),r.default.createElement(c.Button,null,"How to set up (coming soon)"),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2DsMZXU",target:"__blank"},"Purchase"))),r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.soil.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Substrate"),r.default.createElement(c.CardSubtitle,null,"Exo Terra plantation soil makes an excellent substrate and can be used for live plants"),r.default.createElement(c.CardText,null,"Layer some volcanic rock and charcoal on the bottom for ideal drainage"),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2Dstej4",target:"__blank"},"Purchase"))),r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.plants.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Plants"),r.default.createElement(c.CardSubtitle,null,"Live or pet-safe fake plants make great decorations and spiders love to climb on them"),r.default.createElement(c.Button,null,"Live plants (coming soon)"),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2DsTZE1",target:"__blank"},"Purchase fake plants")))),r.default.createElement("h3",null,"Heating/Lighting Terrariums"),r.default.createElement("p",null,"There are some situations where you may want to add heat and light to terrariums:"),r.default.createElement("ul",null,r.default.createElement("li",null,"You are keeping a species from a warm climate (like the regal/regius jumping spider) and your home is drafty or cool (under 60F) "),r.default.createElement("li",null,"You are keeping tropical plants")),r.default.createElement(c.Alert,{color:"warning"}," Do not place heating pads on plastic enclosures, they may melt or release toxic gases."),r.default.createElement(c.CardDeck,null,r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.canopy.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Light"),r.default.createElement(c.CardSubtitle,null,"Exo terra makes canopies and light bulbs that are perfect of your plants and animals"),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2zIFkST",target:"__blank"},"Nano Canopy"),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2DsPv0i",target:"__blank"},"Repti-Glo 2.0 Bulb"))),r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.heat.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Heat"),r.default.createElement(c.CardSubtitle,null,"Heating pads are the safest option for heating your terrarium"),r.default.createElement(c.CardText,null,"Place them underneath for best results. If you need additional heat, place another on the side."),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2C4W2lv",target:"__blank"},"Zilla Heat Mat Small"))),r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.thermpro.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Humidity/Temperature control"),r.default.createElement(c.CardSubtitle,null,"A Hygrometer/Themometer with min/max is ideal for monitoring"),r.default.createElement(c.CardText,null,"Regius do best above 50% humidity. The max allows you to make sure the terrarium isn't getting too hot."),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2zIGkq7",target:"__blank"},"ThermoPro TP50"))),r.default.createElement(c.Card,null,r.default.createElement(d.default,{className:"card-img-top",sizes:t.timer.childImageSharp.sizes,style:{width:"100%"}}),r.default.createElement(c.CardBody,null,r.default.createElement(c.CardTitle,null,"Timer"),r.default.createElement(c.CardSubtitle,null,"A great way to manage lights"),r.default.createElement(c.CardText,null,"Plug your canopy into this and it will turn off your lights at night."),r.default.createElement(c.Button,{color:"primary",href:"http://amzn.to/2CiBRjC",target:"__blank"},"Zoo Med Aquarium Timer"))))))};t.query="** extracted graphql fragment **";t.default=f}});
//# sourceMappingURL=component---src-pages-enclosure-js-ceb08f7c9c43816d6032.js.map