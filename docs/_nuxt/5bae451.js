(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{302:function(e,r,t){"use strict";t.r(r);var n=t(6),c=(t(48),{asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("https://jsonplaceholder.typicode.com/users/".concat(e.params.id));case 3:return t=r.sent,r.abrupt("return",{user:t.data});case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0),e.redirect(302,"/users");case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))()}}),o=t(37),component=Object(o.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("pre",[e._v("    "+e._s(e.user)+"\n  ")])])}),[],!1,null,"e5791d16",null);r.default=component.exports}}]);