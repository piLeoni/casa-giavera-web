(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{434:function(t,e,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("d1e0507c",content,!0,{sourceMap:!1})},485:function(t,e,n){"use strict";n(434)},486:function(t,e,n){var r=n(29)(!1);r.push([t.i,".left-navigation-drawer[data-v-e55b55b6]{position:fixed;height:100%;display:flex;flex-direction:column;justify-content:center}",""]),t.exports=r},517:function(t,e,n){"use strict";n.r(e);n(14),n(11),n(13),n(22),n(16),n(23);var r=n(3),o=n(76);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{drawer:!0}},methods:{navigateTo:function(input){try{document.getElementById(input).scrollIntoView({behavior:"smooth"})}catch(t){console.log(t.message)}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)(["navigation","currentSection"]))},f=(n(485),n(46)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left-navigation-drawer"},t._l(t.navigation,(function(link){return n("div",{key:t.$uid(link),staticClass:"ml-6 mb-2 pagination",class:{"pagination-selected":link.getAttribute("anchor")===t.currentSection},on:{click:function(e){t.navigateTo(link.getAttribute("anchor"))}}},[t._v("\n    "+t._s(link.getAttribute("label"))+"\n  ")])})),0)}),[],!1,null,"e55b55b6",null);e.default=component.exports}}]);