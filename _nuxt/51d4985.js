(window.webpackJsonp=window.webpackJsonp||[]).push([[18,14],{385:function(e,t,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("7d02539d",content,!0,{sourceMap:!1})},386:function(e,t,n){"use strict";n.r(t);var o={props:["value","selected","position","type","color"],computed:{classes:function(){return this.position?this.position:[]}}},r=(n(387),n(46)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex justify-center",class:{horizontal:e.classes.includes("horizontal"),vertical:e.classes.includes("vertical")}},e._l(e.value,(function(t,o){return n("div",{key:"dot-"+o,staticClass:"inverted d-flex justify-center align-center clickable",class:{pagination:"number"===e.type,"pagination-dot-light":"dark"!==e.color,"pagination-dot-dark":"dark"===e.color,"pagination-selected":"number"===e.type&&o===e.selected,"pagination-dot ":"dot"===e.type,"pagination-dot-selected":"dot"===e.type&&o===e.selected},on:{click:function(t){return e.$emit("selection",o)}}},["number"===e.type?n("span",{staticClass:"pa-2"},[e._v(" "+e._s(o+1))]):e._e(),e._v(" "),n("div")])})),0)}),[],!1,null,"fe217d34",null);t.default=component.exports},387:function(e,t,n){"use strict";n(385)},388:function(e,t,n){var o=n(29)(!1);o.push([e.i,".horizontal[data-v-fe217d34]{flex-direction:row}.vertical[data-v-fe217d34]{flex-direction:column}",""]),e.exports=o},390:function(e,t,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("dffa4800",content,!0,{sourceMap:!1})},391:function(e,t,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("803803b8",content,!0,{sourceMap:!1})},398:function(e,t,n){"use strict";n(390)},399:function(e,t,n){var o=n(29)(!1);o.push([e.i,".swiper-wrapper{align-items:center}",""]),e.exports=o},400:function(e,t,n){"use strict";n(391)},401:function(e,t,n){var o=n(29)(!1);o.push([e.i,".swiper-container[data-v-c7b709aa]{display:flex;width:100%}.swiper-slide[data-v-c7b709aa]{text-align:center;font-size:18px;display:flex;justify-content:center;align-items:center}.swiper-slide img[data-v-c7b709aa]{display:block;width:100%}",""]),e.exports=o},409:function(e,t,n){"use strict";n.r(t);n(16);var o=n(406),r=(n(407),{data:function(){return{init:!1,slideIndex:0,swiperOptions:{autoHeight:!0,slidesPerView:1,spaceBetween:10}}},components:{Swiper:o.Swiper,SwiperSlide:o.SwiperSlide},props:["value","paginationColor"],computed:{swiper:function(){return this.$refs.mySwiper.$swiper},images:function(){var output=[];return this.value.getElementsByTagName("image").forEach((function(image){var e;output.push({src:null!==(e=image.getAttribute("websrc"))&&void 0!==e?e:"photos/".concat(image.getAttribute("src")),alt:image.getAttribute("alt")})})),output}},mounted:function(){var e=this;this.init=!0,this.slidesPerView=this.swiper.params.slidesPerView,this.swiper.on("slideChange",(function(data){e.slideIndex=data.snapIndex})),this.swiper.on("resize",(function(data){e.slidesPerView=data.params.slidesPerView}))},destroyed:function(){},methods:{setSlide:function(input){this.swiper.slideTo(input,1e3,!1)}}}),l=(n(398),n(400),n(46)),c=n(61),d=n.n(c),f=n(379),w=n(384),v=n(380),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0 ma-0"},[e.images?n("v-row",{ref:"galleryContainer",staticClass:"photo-gallery pa-0 ma-0 d-flex flex-row justify-center"},[n("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"11",sm:"10",md:"7"}},[e.images.length>1?n("pagination",{staticClass:"pb-2",attrs:{value:e.images.length,selected:e.slideIndex,position:["horizontal"],color:e.paginationColor,type:"dot"},on:{selection:function(t){return e.setSlide(t)}}}):e._e(),e._v(" "),n("swiper",{ref:"mySwiper",attrs:{options:e.swiperOptions}},e._l(e.images,(function(image){return n("swiper-slide",{key:e.$uid(image),staticClass:"d-flex flex-column"},[n("img",{attrs:{src:image.src,alt:image.alt}}),e._v(" "),n("p",{staticClass:"image-alt mt-3"},[e._v(e._s(image.alt))])])})),1)],1)],1):e._e()],1)}),[],!1,null,"c7b709aa",null);t.default=component.exports;d()(component,{Pagination:n(386).default}),d()(component,{VCol:f.a,VContainer:w.a,VRow:v.a})}}]);