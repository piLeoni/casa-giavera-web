(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12,14],{384:function(e,t,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("670aae7b",content,!0,{sourceMap:!1})},385:function(e,t,n){"use strict";n.r(t);var l={props:["value","selected","position","type","color"],computed:{classes:function(){return this.position?this.position:[]}}},o=(n(386),n(46)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-center",class:{horizontal:e.classes.includes("horizontal"),vertical:e.classes.includes("vertical")}},e._l(e.value,(function(t,l){return n("div",{key:"dot-"+l,staticClass:"inverted d-flex justify-center align-center",class:{pagination:"number"===e.type,"pagination-dot-light":"dark"!==e.color,"pagination-dot-dark":"dark"===e.color,"pagination-selected":"number"===e.type&&l===e.selected,"pagination-dot ":"dot"===e.type,"pagination-dot-selected":"dot"===e.type&&l===e.selected},on:{click:function(t){return e.$emit("selection",l)}}},["number"===e.type?n("span",{staticClass:"pa-2"},[e._v(" "+e._s(l+1))]):e._e(),e._v(" "),n("div")])})),0)}),[],!1,null,"590dbee4",null);t.default=component.exports},386:function(e,t,n){"use strict";n(384)},387:function(e,t,n){var l=n(29)(!1);l.push([e.i,".horizontal[data-v-590dbee4]{flex-direction:row}.vertical[data-v-590dbee4]{flex-direction:column}",""]),e.exports=l},402:function(e,t,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("34da28dc",content,!0,{sourceMap:!1})},415:function(e,t,n){"use strict";n(402)},416:function(e,t,n){var l=n(29)(!1);l.push([e.i,".gallery-wrapper[data-v-94aa17d0]{position:relative}.gallery-container[data-v-94aa17d0]{height:auto;box-sizing:border-box!important;z-index:10}.gallery-container-open[data-v-94aa17d0]{height:100vh}.gallery-image[data-v-94aa17d0]{overflow:hidden;width:100%;z-index:10}.gallery-col[data-v-94aa17d0]{height:100%}",""]),e.exports=l},442:function(e,t,n){"use strict";n.r(t);n(16);var l=n(443),o={data:function(){return{imageIndex:0,lastIndexChange:0,galleryOpen:!1}},props:["value"],computed:{columns:function(){return this.$vuetify.breakpoint.md||this.$vuetify.breakpoint.sm||this.$vuetify.breakpoint.xs||1===this.images.length?1:2},images:function(){var output=[];return this.value.getElementsByTagName("image").forEach((function(image){var e;output.push({src:null!==(e=image.getAttribute("websrc"))&&void 0!==e?e:"photos/".concat(image.getAttribute("src")),alt:image.getAttribute("alt")})})),output}},methods:{toggleGallery:function(){var e=this;console.log("gallery",this.$refs.gallery),this.galleryOpen=!this.galleryOpen,this.galleryOpen?(document.documentElement.style.overflow="hidden",l.a.to(this.$refs.galleryContainer,{height:"100vh",duration:.1,onComplete:function(){console.log("ciao"),e.$refs.gallery.scrollIntoView({behavior:"smooth"})}})):(l.a.to(this.$refs.galleryContainer,{height:"auto",duration:.1,onComplete:function(){console.log("ciao"),e.$refs.gallery.scrollIntoView({behavior:"smooth"})}}),document.documentElement.style.overflow="auto")},scrollHandler:function(e){this.imageIndex;this.galleryOpen&&(e.preventDefault(),(e.deltaY<-150||e.deltaY<0&&Date.now()-this.lastIndexChange>1e3)&&(console.log(e.deltaY),this.imageIndex--,this.lastIndexChange=Date.now()),(e.deltaY>150||e.deltaY>0&&Date.now()-this.lastIndexChange>1e3)&&(console.log(e.deltaY),this.imageIndex++,this.lastIndexChange=Date.now()),this.imageIndex<0&&(this.imageIndex=(this.images.length-1)/this.columns),this.imageIndex>(this.images.length-1)/this.columns&&(this.imageIndex=0))}}},r=(n(415),n(46)),c=n(61),d=n.n(c),m=n(378),h=n(383),f=n(526),v=n(379),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"ma-0 pa-0 outliner",attrs:{fluid:""}},[n("v-row",{staticClass:"ma-0 pa-0 d-flex justify-center"},[n("v-col",{staticClass:"ma-0 pa-0",attrs:{cols:"11",sm:"10",md:"7"}},[n("div",{ref:"gallery",staticClass:"gallery-wrapper d-flex"},[e.images.length>1?n("div",{staticClass:"gallery-expansion"},[n("div",{staticClass:"expansion-icon",class:{"expansion-icon-active":e.galleryOpen},on:{click:e.toggleGallery}},[e._v("\n            +\n          ")])]):e._e(),e._v(" "),n("pagination",{key:"contante-pagination",staticClass:"pagination-section",class:{"pagination-hidden":!e.galleryOpen},attrs:{value:Math.ceil(e.images.length/e.columns),selected:e.imageIndex,position:["vertical"],type:"dot",color:"light"},on:{selection:function(t){return e.imageIndex=t}}}),e._v(" "),n("v-container",{ref:"galleryContainer",staticClass:"gallery-container pa-0",class:{"gallery-container-open___":e.galleryOpen},attrs:{fluid:""},on:{wheel:e.scrollHandler}},[n("v-row",{staticClass:"gallery-row fill-height",attrs:{"no-gutters":""}},e._l(e.columns,(function(t,l){return n("v-col",{key:"column-"+l,staticClass:"\n                gallery-col\n                px-5\n                d-flex\n                flex-column\n                align-center\n                justify-center\n              ",attrs:{cols:12/e.columns}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.images[l+e.imageIndex*e.columns]?n("span",{key:"image-"+e.images[l+e.imageIndex*e.columns].src},[n("img",{staticClass:"gallery-image",attrs:{eager:"",src:e.images[l+e.imageIndex*e.columns].src,alt:e.images[l+e.imageIndex*e.columns].alt}}),e._v(" "),e.images[l+e.imageIndex*e.columns]?n("p",{staticClass:"image-alt mt-3",class:{"white--text":e.galleryOpen}},[e._v("\n                    "+e._s(e.images[l+e.imageIndex*e.columns].alt)+"\n                  ")]):e._e()]):e._e()])],1)})),1)],1),e._v(" "),e.galleryOpen?n("v-overlay",{attrs:{opacity:"1",color:"#1E1E1E"},on:{wheel:function(e){e.preventDefault()},scroll:function(e){e.preventDefault()}}}):e._e()],1)])],1)],1)}),[],!1,null,"94aa17d0",null);t.default=component.exports;d()(component,{Pagination:n(385).default}),d()(component,{VCol:m.a,VContainer:h.a,VOverlay:f.a,VRow:v.a})},525:function(e,t,n){"use strict";n.r(t);var l={components:{desktopGallery:n(442).default},props:["value"],computed:{galleryComponent:function(){return this.$vuetify.breakpoint.xs||this.$vuetify.breakpoint.sm?"simpleswipegallery":"desktopGallery"}}},o=n(46),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n(e.galleryComponent,{tag:"components",attrs:{value:e.value,paginationColor:"dark"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);