(function(e){function t(t){for(var s,i,o=t[0],d=t[1],c=t[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var d=a[o];0!==n[d]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"039c":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("header"),a("router-view")],1)},r=[],i={name:"app",components:{}},o=i,d=(a("5c0b"),a("2877")),c=Object(d["a"])(o,n,r,!1,null,null,null),l=c.exports,u=a("8c4f"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{attrs:{id:"home"}},[a("h1",[e._v("datavisualisatie id")]),a("section",{staticClass:"active"},[a("h2",[e._v("Supermegabelangrijke vraag. Waar gaat je hart naar uit?")]),a("SwitchBetween",{staticClass:"choices",on:{"nike-click":function(t){e.choice="nike"},"adidas-click":function(t){e.choice="adidas"},"idgaf-click":function(t){e.choice="idgaf"}}}),"nike"===e.choice?a("div",[a("Nike",{attrs:{title:"Nike",category:"nike"}})],1):e._e(),"adidas"===e.choice?a("div",[a("Adidas",{attrs:{title:"Adidas",category:"adidas"}})],1):e._e(),"idgaf"===e.choice?a("div",[a("Idgaf",{attrs:{title:"Idgaf",category:"idgaf"}})],1):e._e()],1)])},b=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"switchBetween",on:{change:e.onSwitch}},[a("input",{staticClass:"switchBetween_radio",attrs:{type:"radio",id:"nike",name:"switchBetween-input",value:"nike",checked:""}}),a("label",{staticClass:"switchBetween_label",attrs:{for:"nike"}},[e._v(" Nike ")]),a("input",{staticClass:"switchBetween_radio",attrs:{type:"radio",id:"adidas",name:"switchBetween-input",value:"adidas"}}),a("label",{staticClass:"switchBetween_label",attrs:{for:"adidas"}},[e._v(" Adidas ")]),a("input",{staticClass:"switchBetween_radio",attrs:{type:"radio",id:"idgaf",name:"switchBetween-input",value:"idgaf"}}),a("label",{staticClass:"switchBetween_label",attrs:{for:"idgaf"}},[e._v(" Idgaf ")])])},h=[],g={methods:{onSwitch(e){return"nike"===e.target.value?this.$emit("nike-click"):"adidas"===e.target.value?this.$emit("adidas-click"):"idgaf"===e.target.value?this.$emit("idgaf-click"):void 0}}},p=g,m=(a("68d8"),Object(d["a"])(p,j,h,!1,null,null,null)),v=m.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:e.category}},[a("h2",{staticClass:"nikeHeader"},[e._v(e._s(e.title))]),a("div",[a("pie-chart",{attrs:{title:"tweeDingenEnzo"}})],1),a("article",{attrs:{id:"stats-1"}},[a("p",{staticClass:"nikeIntro"},[e._v("Nice. Dan heb je dus dezelfde voorkeur als..")]),a("div",[a("h3",[e._v("13% van de studenten in Information Design!")]),a("p",[e._v("Zou je nog meer gemeen hebben met deze studenten dan alleen jullie lievelingsmerk?")]),a("button",{staticClass:"nikeButton1",attrs:{href:"#stats-2"},on:{click:function(t){e.show1=!e.show1}}},[e._v("Let's find out!")])])]),a("transition",{attrs:{name:"fade"}},[e.show1?a("article",{attrs:{id:"stats-2"}},[a("h3",[e._v("1 nog meer stats!")]),a("div",[a("line-chart",{attrs:{title:"drieDingenEnzo"}})],1),a("button",{staticClass:"nikeButton1",attrs:{href:"#stats-3"},on:{click:function(t){e.show2=!e.show2}}},[e._v("nog meer dingen")])]):e._e()]),a("transition",{attrs:{name:"fade"}},[e.show2?a("article",{attrs:{id:"stats-3"}},[a("h3",[e._v("2 nog meer stats!")]),a("div",[a("bar-chart",{attrs:{title:"dingenEnzo"}})],1)]):e._e()])],1)},_=[],y=a("1fca"),w={extends:y["a"],props:{data:["data","options"],title:{type:String,required:!0}},components:{Bar:y["a"]},mounted(){this.renderBarChart()},methods:{renderBarChart(){this.renderChart({labels:["Nike","Adidas","Geen","Anders"],datasets:[{data:[11,5,5,62],label:this.title,backgroundColor:["rgba(226,20,45, 0.5)","rgba(55,23,119, 0.5)","rgba(211,211,211, 0.5)","rgba(119,136,153, 0.4)"],borderColor:["rgba(226,20,45, 1)","rgba(55,23,119, 1)","rgba(211,211,211, 1)","rgba(119,136,153, 1)"],borderWidth:1}]},{responsive:!0,title:{display:!0,text:"Favoriete merk onder ID20-studenten"},maintainAspectRatio:!0})}}},C={extends:y["c"],props:{data:["data","options"],title:{type:String,required:!0}},components:{Pie:y["c"]},mounted(){this.renderPieChart()},methods:{renderPieChart(){this.renderChart({labels:["Nike","Adidas","Geen","Anders"],datasets:[{data:[11,5,5,62],label:this.title,backgroundColor:["rgba(226,20,45, 0.5)","rgba(55,23,119, 0.5)","rgba(211,211,211, 0.5)","rgba(119,136,153, 0.4)"],borderColor:["rgba(226,20,45, 1)","rgba(55,23,119, 1)","rgba(211,211,211, 1)","rgba(119,136,153, 1)"],borderWidth:1}]},{responsive:!0,title:{display:!0,text:"Favoriete merk onder ID20-studenten"},maintainAspectRatio:!0})}}},z={extends:y["b"],props:{data:["data","options"],title:{type:String,required:!0}},components:{Line:y["b"]},mounted(){this.renderLineChart()},methods:{renderLineChart(){this.renderChart({labels:["Nike","Adidas","Geen","Anders"],datasets:[{data:[11,5,5,62],label:this.title,backgroundColor:["rgba(226,20,45, 0.5)","rgba(55,23,119, 0.5)","rgba(211,211,211, 0.5)","rgba(119,136,153, 0.4)"],borderColor:["rgba(226,20,45, 1)","rgba(55,23,119, 1)","rgba(211,211,211, 1)","rgba(119,136,153, 1)"],borderWidth:1}]},{responsive:!0,title:{display:!0,text:"Favoriete merk onder ID20-studenten"},maintainAspectRatio:!0})}}},x={name:"category",components:{BarChart:w,PieChart:C,LineChart:z},data(){return{show1:!1,show2:!1}},methods:{showSecond:function(){this.message=this.message.split("").reverse().join("")}},props:{title:{type:String,required:!0},category:{type:String,required:!0}}},O=x,S=Object(d["a"])(O,k,_,!1,null,null,null),B=S.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:e.category}},[a("h2",[e._v(e._s(e.title))]),a("div",{staticClass:"content"},e._l(e.results,(function(t,s){return a("a",{key:s,attrs:{href:t.url}},[a("section",[a("h3",[e._v(e._s(t.title.value))]),a("p",[e._v("▼ "+e._s(t.location.value))]),a("img",{staticClass:"images",attrs:{src:t.img.value,alt:"result.title.value"}})])])})),0)])},A=[],$={name:"category",data(){return{results:[]}},props:{title:{type:String,required:!0},category:{type:String,required:!0}}},q=$,P=Object(d["a"])(q,E,A,!1,null,null,null),I=P.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:e.category}},[a("h2",[e._v(e._s(e.title))]),a("div",{staticClass:"content"},e._l(e.results,(function(t,s){return a("a",{key:s,attrs:{href:t.url}},[a("section",[a("h3",[e._v(e._s(t.title.value))]),a("p",[e._v("▼ "+e._s(t.location.value))]),a("img",{staticClass:"images",attrs:{src:t.img.value,alt:"result.title.value"}})])])})),0)])},D=[],L={name:"category",data(){return{results:[]}},props:{title:{type:String,required:!0},category:{type:String,required:!0}}},M=L,W=Object(d["a"])(M,N,D,!1,null,null,null),F=W.exports,T={name:"home",data(){return{choice:"nike"}},methods:{},components:{SwitchBetween:v,Nike:B,Adidas:I,Idgaf:F}},G=T,R=Object(d["a"])(G,f,b,!1,null,null,null),H=R.exports,J=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{attrs:{id:"info"}},[a("h1",[e._v("Info fotografiesoorten")]),a("h2",[e._v("foto's")]),a("p",[e._v(" Een foto is een afbeelding op een plat vlak vervaardigd door middel van fotografie. Een foto geeft relaties weer van objecten, voorwerpen, mensen of dieren uit de werkelijke wereld zoals gezien door de lens van een camera gedurende een (meestal korte) tijdperiode ")]),a("h2",[e._v("negatieven")]),a("p",[e._v(" Een negatief is een tussenstadium in het fotografisch procedé dat bij gebruik van de meest gangbare lichtgevoelige materialen noodzakelijk is om een beeld te kunnen maken. Het is een transparante drager - vroeger glasplaat, celluloid en later polyester - met een lichtgevoelige laag. ")]),a("h2",[e._v("dia's")]),a("p",[e._v(" en dia (of diapositief) is een (met een zogenaamd omkeerprocedé) positief ontwikkelde kleuren- of zwart-witfoto op transparant materiaal. Voordat de digitale camera gemeengoed werd werden kleurenfoto's voor publicatiedoeleinden meestal als dia gemaakt. ")]),a("p",{staticClass:"source"},[e._v("Bron: Wikipedia")])])}],V={name:"info"},Z=V,K=Object(d["a"])(Z,J,U,!1,null,null,null),Q=K.exports;s["a"].use(u["a"]);const X=[{path:"/",component:H,children:[{path:"/adidas",component:I},{path:"/nike",component:B},{path:"/idgaf",component:F}]},{path:"/info",component:Q}],Y=new u["a"]({routes:X});s["a"].config.productionTip=!1,new s["a"]({render:e=>e(l),router:Y}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"68d8":function(e,t,a){"use strict";var s=a("039c"),n=a.n(s);n.a},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.86b60e63.js.map