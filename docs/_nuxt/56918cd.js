(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{230:function(t,n,e){t.exports=e.p+"img/end.8b09adf.jpg"},231:function(t,n,e){t.exports=e.p+"img/s-2.145fcff.jpg"},232:function(t,n,e){t.exports=e.p+"img/s-1.cc6525f.jpg"},233:function(t,n,e){t.exports=e.p+"img/s-3.9864b94.jpg"},234:function(t,n,e){t.exports=e.p+"img/s-4.783a252.jpg"},235:function(t,n,e){t.exports=e.p+"img/s-6.941c6ca.jpg"},253:function(t,n,e){var content=e(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(61).default)("09be35ab",content,!0,{sourceMap:!1})},281:function(t,n,e){"use strict";e(253)},282:function(t,n,e){var o=e(60),r=e(252),c=e(230),l=e(231),d=e(232),f=e(233),v=e(234),h=e(235),m=o(!1),_=r(c),x=r(l),k=r(d),w=r(f),C=r(v),y=r(h);m.push([t.i,".nav[data-v-b9797be8]{bottom:0;z-index:2;position:fixed;display:flex}.nav span[data-v-b9797be8]{background:rgba(0,0,0,.67843);color:#fff;cursor:pointer;padding:20px;font-weight:700}.box[data-v-b9797be8]{overflow-y:hidden;width:100%;overflow-x:hidden;min-height:100vh}.container[data-v-b9797be8]{width:500%;height:100vh;display:flex}.panel[data-v-b9797be8]{color:#fff;will-change:transform}.panel[data-v-b9797be8],.sart-panel[data-v-b9797be8]{width:100%;height:100vh;background-size:cover}.sart-panel[data-v-b9797be8]{position:fixed;background-image:url("+_+");background-position:50%}.red[data-v-b9797be8]{background-image:url("+x+")}.orange[data-v-b9797be8]{background-image:url("+k+")}.purple[data-v-b9797be8]{background-image:url("+w+")}.green[data-v-b9797be8]{background-image:url("+C+")}.gray[data-v-b9797be8]{background-image:url("+y+")}",""]),t.exports=m},297:function(t,n,e){"use strict";e.r(n);e(27);var o=e(228),r=e(250);o.a.registerPlugin(r.a);var c={data:function(){return{startParent:null,endParent:null,mainWidth:null}},mounted:function(){var t=o.a.timeline();o.a.utils.toArray(".panel").forEach((function(n,i){var e=-100*(i+1)+100+"%",o=-100*(i+1)+200+"%";t.fromTo(n,{x:o,opacity:.4},{x:e,opacity:1})})),this.mainWidth=this.$el.querySelector(".container").offsetWidth/2,this.startParent=this.$el.querySelector(".box").offsetTop,this.endParent=this.$el.querySelector(".box").offsetHeight+this.startParent,console.log(this.endParent),r.a.create({animation:t,trigger:".box",start:"top top",end:this.mainWidth,scrub:!0,pin:!0})},methods:{toGo:function(t){var n=this.startParent,s=this.mainWidth/5,e=n+s*t;console.log(s),window.scroll(0,e)}}},l=(e(281),e(37)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"box"},[e("div",{staticClass:"nav"},[e("span",{staticClass:"link",on:{click:function(n){return t.toGo(1)}}},[t._v("one")]),e("span",{staticClass:"link",on:{click:function(n){return t.toGo(2)}}},[t._v("two")]),e("span",{staticClass:"link",on:{click:function(n){return t.toGo(3)}}},[t._v("three")]),e("span",{staticClass:"link",on:{click:function(n){return t.toGo(4)}}},[t._v("four")]),e("span",{staticClass:"link",on:{click:function(n){return t.toGo(5)}}},[t._v("five")])]),t._v(" "),e("section",{staticClass:" sart-panel"},[t._v("\n      ZERO\n    ")]),t._v(" "),t._m(0)])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("section",{staticClass:"panel red"},[t._v("\n        ONE\n      ")]),t._v(" "),e("section",{staticClass:"panel orange"},[t._v("\n        TWO\n      ")]),t._v(" "),e("section",{staticClass:"panel purple"},[t._v("\n        THREE\n      ")]),t._v(" "),e("section",{staticClass:"panel green"},[t._v("\n        FOUR\n      ")]),t._v(" "),e("section",{staticClass:"panel gray"},[t._v("\n        FIVE\n      ")])])}],!1,null,"b9797be8",null);n.default=component.exports}}]);