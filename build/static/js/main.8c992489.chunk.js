(this["webpackJsonpantd-staubli"]=this["webpackJsonpantd-staubli"]||[]).push([[0],{104:function(t,e){},136:function(t,e,a){},162:function(t,e){},163:function(t,e){},164:function(t,e){},165:function(t,e){},166:function(t,e){},169:function(t,e,a){},172:function(t,e,a){var n={"./281.pdf":173,"./569.pdf":174,"./570.pdf":175,"./7079.pdf":176,"./7081.pdf":177};function i(t){var e=c(t);return a(e)}function c(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=c,t.exports=i,i.id=172},173:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/281.55c188b1.pdf"},174:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/569.55c188b1.pdf"},175:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/570.55c188b1.pdf"},176:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/7079.0f662e5a.pdf"},177:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/7081.0f662e5a.pdf"},250:function(t,e,a){var n={"./281.jpg":251,"./569.jpg":252,"./570.jpg":253,"./7079.jpg":254,"./7081.jpg":255};function i(t){var e=c(t);return a(e)}function c(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=c,t.exports=i,i.id=250},251:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/281.4d0c74db.jpg"},252:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/569.4d0c74db.jpg"},253:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/570.4d0c74db.jpg"},254:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/7079.e6cacdc0.jpg"},255:function(t,e,a){"use strict";a.r(e),e.default=a.p+"static/media/7081.e6cacdc0.jpg"},256:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(25),s=a.n(c),o=(a(136),a(115)),d=a(116),r=a(130),u=a(127),f=(a.p,a(262),a(261)),p=a(260),l=a(65),j=a(67),b=(a(169),a(27)),g=function(t){Object(r.a)(n,t);var e=Object(u.a)(n);function n(t){var a;Object(o.a)(this,n),(a=e.call(this,t)).onMessageReceived=function(t){t.data.taskId===a.state.taskIdRequestData&&a.update(t)},a.requestData=function(){window.parent.postMessage({iframe:a.state.id,taskId:a.state.taskIdRequestData,query:[{api:"/api/rd/v1/Catalog",function:"getInitData",arguments:[{fakekey:"fakevalue"}]}],response:[],status:"request"},"https://eusb.webcomcpq.com/")},a.update=function(t){var e=t.data.response.find((function(t){return"/api/rd/v1/Catalog"===t.api&&"getInitData"===t.function}));a.setState({loading:!1,data:e.data})},a.showModal=function(){a.setState({isModalVisible:!0})},a.handleExit=function(){a.setState({isModalVisible:!1})},j.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(j.c.version,"/pdf.worker.js");var i="antd-staubli-catalog";return a.state={loading:!0,id:i,taskIdRequestData:"".concat(i,"-requestData"),data:{Products:[]},isModalVisible:!1},window.addEventListener("message",a.onMessageReceived,!1),a.requestData(),a}return Object(d.a)(n,[{key:"showSpecTx2_40",value:function(){this.setState({showSpecTx2_40:!0,showSpecTx2_90:!1})}},{key:"showSpecTx2_90",value:function(){this.setState({showSpecTx2_40:!1,showSpecTx2_90:!0})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("div",{className:"App-content",children:[this.state.loading&&Object(b.jsx)("span",{children:"loading data..."}),!this.state.loading&&Object(b.jsx)(p.b,{dataSource:this.state.data.Products,grid:{gutter:0,column:4},renderItem:function(t){return Object(b.jsxs)(p.b.Item,{children:[Object(b.jsx)(p.b.Item.Meta,{title:t.Name}),Object(b.jsx)("img",{width:"200",height:"200",src:a(250)("./".concat(t.Id,".jpg")).default}),Object(b.jsx)(l.a,{type:"secondary",disabled:!t.CanConfigure,onClick:function(){return function(t){f.a.info({title:"Datasheet",width:"90%",style:{top:"25px"},content:Object(b.jsx)(j.a,{file:a(172)("./".concat(t.Id,".pdf")).default,children:Object(b.jsx)(j.b,{pageNumber:2,scale:1,width:800})}),onOk:function(){}})}(t)},children:"Datasheet"}),Object(b.jsx)(l.a,{type:"primary",disabled:!t.CanConfigure,href:"/Configurator.aspx?pid=".concat(t.Id,"&cid=").concat(t.CategoryId),children:"Configure"})]})}})]})})}}]),n}(i.a.Component),h=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,263)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),n(t),i(t),c(t),s(t)}))};s.a.render(Object(b.jsx)(g,{}),document.getElementById("root")),h()}},[[256,1,2]]]);
//# sourceMappingURL=main.8c992489.chunk.js.map