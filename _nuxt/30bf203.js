(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{539:function(e,t,r){"use strict";r.r(t);r(14),r(11),r(13),r(22),r(23);var n=r(3),o=(r(16),r(77));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l={data:function(){return{observer:null}},props:["value"],mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t,r){t.forEach((function(t){t.isIntersecting&&e.setCurrentSection(t.target.getAttribute("id"))}))}),{}),this.observer.observe(this.$refs.targetElement)},destroyed:function(){this.observer.unobserve(this.$refs.targetElement),this.observer=void 0},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["setCurrentSection"]))},f=r(36),v=r(50),O=r.n(v),d=r(383),h=r(387),w=r(384),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"ma-0 pa-0 outliner",attrs:{fluid:""}},[r("v-row",{ref:"targetElement",staticClass:"ma-0 pa-0 d-flex flex-row aling-center justify-center",attrs:{"no-gutters":"",id:e.value.getAttribute("anchor")}},[r("v-col",{staticClass:"small-title text-uppercase d-flex flex-column align-center",attrs:{xl:"6",lg:"7",md:"8",sm:"9",cols:"10"}},[e._v("\n      "+e._s(e.value.innerHTML)+"\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VCol:d.a,VContainer:h.a,VRow:w.a})}}]);