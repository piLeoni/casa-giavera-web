(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{495:function(t,e,r){var content=r(496);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("7132a15d",content,!0,{sourceMap:!1})},496:function(t,e,r){var n=r(29)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},531:function(t,e,r){"use strict";r.r(e);var n={props:["value"],computed:{dimension:function(){var span=this.value.getAttribute("span");return"full"===span||"paragraph"===span?span:"quote"}},mounted:function(){}},o=r(36),l=r(50),d=r.n(l),c=r(383),v=r(387),h=(r(14),r(11),r(13),r(22),r(16),r(23),r(3));r(495);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x=r(83).a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:f({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:f({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),w=r(384),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[r("v-row",{staticClass:"pa-0 ma-0 d-flex justify-center"},["full"===t.dimension?r("v-col",{staticClass:"ma-0 pa-0"},[r("v-divider",{staticClass:"divider"})],1):t._e(),t._v(" "),"paragraph"===t.dimension?r("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"10",xl:"4",lg:"5",md:"6",sm:"8"}},[r("v-divider",{staticClass:"divider"})],1):t._e(),t._v(" "),"quote"===t.dimension?r("v-col",{staticClass:"ma-0 pa-0",attrs:{xl:"6",lg:"7",md:"8",sm:"9",cols:"10"}},[r("v-divider",{staticClass:"divider"})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCol:c.a,VContainer:v.a,VDivider:x,VRow:w.a})}}]);