/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{238:function(D,F,C){"use strict";C.d(F,"a",(function(){return B}));var E=C(33),t=(C(111),C(38),C(62),C(167),C(81),/(^\s+|\s+$)/g),e=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function n(element,D,F){for(var C=element.firstChild,E=[];C;)3===C.nodeType?E.push.apply(E,r((C.nodeValue+"").replace(/^\n+/g,"").replace(/\s+/g," "),D,F)):"br"===(C.nodeName+"").toLowerCase()?E[E.length-1]+="<br>":E.push(C.outerHTML),C=C.nextSibling;return E}function r(text,D,F){if(text+="",F&&(text=text.replace(t,"")),D&&""!==D)return text.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(D);for(var C,E,n=[],r=text.length,i=0;i<r;i++)((E=text.charAt(i)).charCodeAt(0)>=55296&&E.charCodeAt(0)<=56319||text.charCodeAt(i+1)>=65024&&text.charCodeAt(i+1)<=65039)&&(C=((text.substr(i,12).split(e)||[])[1]||"").length||2,E=text.substr(i,C),n.emoji=1,i+=C-1),n.push(">"===E?"&gt;":"<"===E?"&lt;":E);return n}var o,l,B={version:"3.6.1",name:"text",init:function(D,F,C){var t,text,e,r,o,B,d,s,i=D.nodeName.toUpperCase(),data=this;if(data.svg=D.getBBox&&("TEXT"===i||"TSPAN"===i),!("innerHTML"in D)&&!data.svg)return!1;if(data.target=D,"object"!==Object(E.a)(F)&&(F={value:F}),"value"in F){for(data.delimiter=F.delimiter||"",e=n(D,data.delimiter),l||(l=document.createElement("div")),l.innerHTML=F.value,text=n(l,data.delimiter),data.from=C._from,data.from&&(i=e,e=text,text=i),data.hasClass=!(!F.newClass&&!F.oldClass),data.newClass=F.newClass,data.oldClass=F.oldClass,t=(i=e.length-text.length)<0?e:text,data.fillChar=F.fillChar||(F.padSpace?"&nbsp;":""),i<0&&(i=-i);--i>-1;)t.push(data.fillChar);if("diff"===F.type){for(r=0,o=[],B=[],d="",i=0;i<text.length;i++)(s=text[i])===e[i]?d+=s:(o[r]=d+s,B[r++]=d+e[i],d="");text=o,e=B,d&&(text.push(d),e.push(d))}F.speed&&C.duration(Math.min(.05/F.speed*t.length,F.maxDuration||9999)),this.original=e,this.text=text,this._props.push("text")}else data.text=data.original=[""]},render:function(D,data){D>1?D=1:D<0&&(D=0),data.from&&(D=1-D);var F,C,E,text=data.text,t=data.hasClass,e=data.newClass,n=data.oldClass,r=data.delimiter,o=data.target,l=data.fillChar,B=data.original,d=text.length,i=D*d+.5|0;t?(C=n&&i!==d,E=((F=e&&i)?"<span class='"+e+"'>":"")+text.slice(0,i).join(r)+(F?"</span>":"")+(C?"<span class='"+n+"'>":"")+r+B.slice(i).join(r)+(C?"</span>":"")):E=text.slice(0,i).join(r)+r+B.slice(i).join(r),data.svg?o.textContent=E:o.innerHTML="&nbsp;"===l&&~E.indexOf("  ")?E.split("  ").join("&nbsp;&nbsp;"):E}};B.splitInnerHTML=n,B.emojiSafeSplit=r,B.getText=function D(F){var C=F.nodeType,E="";if(1===C||9===C||11===C){if("string"==typeof F.textContent)return F.textContent;for(F=F.firstChild;F;F=F.nextSibling)E+=D(F)}else if(3===C||4===C)return F.nodeValue;return E},(o||"undefined"!=typeof window&&(o=window.gsap)&&o.registerPlugin&&o)&&o.registerPlugin(B)},245:function(D,F,C){var content=C(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[D.i,content,""]]),content.locals&&(D.exports=content.locals);(0,C(61).default)("4493cb92",content,!0,{sourceMap:!1})},268:function(D,F,C){"use strict";C(245)},269:function(D,F,C){var E=C(60)(!1);E.push([D.i,"*[data-v-7f3d1576]{background:#333;color:#d4e735}.main[data-v-7f3d1576]{min-height:100vh;justify-content:center}.container[data-v-7f3d1576],.main[data-v-7f3d1576]{display:flex;align-items:center}.container[data-v-7f3d1576]{background:#333;height:100vh;flex-direction:column;color:#d4e735;padding-top:50px;font-size:40px}.hover[data-v-7f3d1576]{transition:.5s}.hover[data-v-7f3d1576]:hover{transform:scale(1.2)}ul[data-v-7f3d1576]{margin-top:20px;font-size:25px;list-style:none;padding-left:0}ul li[data-v-7f3d1576]{margin-bottom:10px}.task[data-v-7f3d1576],ul li[data-v-7f3d1576]{cursor:pointer}.task[data-v-7f3d1576]{font-size:50px}",""]),D.exports=E},291:function(D,F,C){"use strict";C.r(F);var E=C(228),t=C(238);E.a.registerPlugin(t.a);var e={data:function(){return{str:"Lorem ipsum dolor sit amet.",step:1,nameTransition:"fade"}},methods:{leave:function(D,F){return D.classList.contains("task")?function(D,F){var C=E.a.timeline({onComplete:F,clearProps:"all"});return C.add(E.a.to(D,{y:100,duration:1,ease:"bounce.out"})),C.add(E.a.to(D,{transformOrigin:"100% 100%",rotate:-15,rotateX:90,duration:1.2,ease:"power4.in"})),C}(D,F):E.a.to(D,{x:"-50%",opacity:0,duration:1,onComplete:F})},enter:function(D,F){return D.classList.contains("task")?function(D,F){return E.a.from(D,{y:-200,opacity:0,duration:1,onComplete:F,clearProps:"all",ease:"bounce.out"})}(D,F):E.a.from("ul li",{x:-200,opacity:0,duration:1,stagger:{each:.1,from:"center"},onComplete:F,clearProps:"all"})},goToList:function(){this.step=1},goToTask:function(i){console.log(i),this.step++,this.str+=" "+i}},mounted:function(){var D=E.a.timeline(),a=E.a.from("ul li",{duration:.6,stagger:.2,x:E.a.utils.wrap([-150,150,300]),opacity:0,rotate:E.a.utils.wrap([-15,15]),clearProps:"all"});D.add(a),D.set("ul li",{className:"hover"})}},n=(C(268),C(37)),component=Object(n.a)(e,(function(){var D=this,F=D.$createElement,C=D._self._c||F;return C("div",{staticClass:"main"},[C("transition",{attrs:{name:D.nameTransition,mode:"out-in"},on:{leave:D.leave,enter:D.enter}},[1==D.step?C("div",{key:"st1",staticClass:"container"},[D._v("\n      Your Tasks\n      "),C("ul",D._l(10,(function(F){return C("li",{key:F,on:{click:function(C){return D.goToTask(F)}}},[D._v("\n          Lorem ipsum dolor sit amet. "+D._s(F)+"\n        ")])})),0)]):D._e(),D._v(" "),2==D.step?C("div",{key:"st2",staticClass:"task",on:{click:D.goToList}},[D._v("\n      "+D._s(D.str)+"\n    ")]):D._e()])],1)}),[],!1,null,"7f3d1576",null);F.default=component.exports}}]);