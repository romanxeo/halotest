(this.webpackJsonphalotest=this.webpackJsonphalotest||[]).push([[0],{2:function(e,t,n){e.exports={backgroundModal:"ModalBuyButton_backgroundModal__zMoWU",modalContainer:"ModalBuyButton_modalContainer__Lq0Wj",inputContainer:"ModalBuyButton_inputContainer__27anF",input:"ModalBuyButton_input__25YET",cut:"ModalBuyButton_cut__1GAgl","cut-short":"ModalBuyButton_cut-short__10IoQ",placeholder:"ModalBuyButton_placeholder__huWpe",buttonBuy:"ModalBuyButton_buttonBuy__3mEse",buttonOrder:"ModalBuyButton_buttonOrder__1gse5",error:"ModalBuyButton_error__35e_V"}},30:function(e,t,n){},4:function(e,t,n){e.exports={container:"Item_container__pUZsa",category:"Item_category__2Boc-",name:"Item_name__3cFqF",symbol:"Item_symbol__2aNCb",price:"Item_price__3P_8c",buttonContainer:"Item_buttonContainer__2VcMR"}},56:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(10),r=n.n(c),o=(n(30),n(7)),i=n.n(o),s=n(5),l=n(12),u=n(24),d=n.n(u).a.create({baseURL:"https://run.mocky.io/v3/"}),b=function(){return d.get("b7d36eea-0b3f-414a-ba44-711b5f5e528e")},j={items:[],minPriceItem:{name:"",category:"",price:0}},m=n(4),O=n.n(m),h=n(6),_=n(2),p=n.n(_),v=n(1),f=function(e){var t=e.item,n=e.title,c=Object(s.c)((function(e){return e.test.minPriceItem})),r={name:"",category:"",price:0};r=void 0===t?c:t;var o=Object(a.useState)(!1),i=Object(h.a)(o,2),l=i[0],u=i[1],d=Object(a.useState)(""),b=Object(h.a)(d,2),j=b[0],m=b[1],_=Object(a.useState)(""),f=Object(h.a)(_,2),g=f[0],x=f[1],y=Object(a.useState)(""),N=Object(h.a)(y,2),B=N[0],C=N[1],M=Object(a.useState)(""),S=Object(h.a)(M,2),T=S[0],I=S[1],k=Object(a.useState)(!1),w=Object(h.a)(k,2),E=w[0],F=w[1];Object(a.useEffect)((function(){F(!B&&!T)}),[B,T]);var P=function(e){switch(e.target.name){case"name":if(""===j)return C("This field in required");break;case"number":if(""===g)return I("This field in required");if(g.length<12)return I("Should contain 12 characters")}};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{className:void 0===n?p.a.buttonBuy:p.a.buttonOrder,onClick:function(){u(!0)},children:void 0===n?"BUY":n}),l&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:p.a.backgroundModal,onClick:function(){u(!1),m(""),x(""),C(""),I(""),F(!1)}}),Object(v.jsxs)("form",{className:p.a.modalContainer,children:[Object(v.jsx)("div",{className:O.a.category,children:r.category}),Object(v.jsx)("div",{className:O.a.name,children:r.name}),Object(v.jsx)("div",{className:O.a.symbol,children:"$"}),Object(v.jsx)("div",{className:O.a.price,children:r.price}),Object(v.jsxs)("div",{className:p.a.inputContainer,children:[Object(v.jsx)("input",{onChange:function(e){return m((t=e).target.value),void(!/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+$/.test(String(t.target.value).toLowerCase())&&t.target.value.length>0?C("Only letters allowed"):C(""));var t},value:j,onBlur:function(e){return P(e)},name:"name",className:p.a.input,type:"text",placeholder:" "}),Object(v.jsx)("div",{className:p.a.cut}),Object(v.jsx)("label",{className:p.a.placeholder,children:"Name"})]}),Object(v.jsx)("div",{className:p.a.error,children:B&&B}),Object(v.jsxs)("div",{className:p.a.inputContainer,children:[Object(v.jsx)("input",{onChange:function(e){return x((t=e).target.value),void(!/^[0-9]+$/.test(String(t.target.value).toLowerCase())&&t.target.value.length>0?I("Only numbers allowed"):t.target.value.length>12?I("Should contain 12 characters"):I(""));var t},value:g,onBlur:function(e){return P(e)},name:"number",className:p.a.input,type:"text",placeholder:" "}),Object(v.jsx)("div",{className:p.a.cut}),Object(v.jsx)("label",{className:p.a.placeholder,children:"Number"})]}),Object(v.jsx)("div",{className:p.a.error,children:T&&T}),Object(v.jsx)("button",{disabled:!E,type:"submit",className:p.a.buttonOrder,onClick:function(){console.log(j),console.log(g),console.log(r.name),console.log(r.category),console.log(r.price),u(!1),m(""),x("")},children:"ORDER"})]})]})]})},g=function(e){var t=e.item;return Object(v.jsxs)("div",{className:O.a.container,children:[Object(v.jsx)("div",{className:O.a.category,children:t.category}),Object(v.jsx)("div",{className:O.a.name,children:t.name}),Object(v.jsx)("div",{className:O.a.symbol,children:"$"}),Object(v.jsx)("div",{className:O.a.price,children:t.price}),Object(v.jsx)("div",{className:O.a.buttonContainer,children:Object(v.jsx)(f,{item:t})})]})};var x=function(){var e=Object(s.c)((function(e){return e.test.items})),t=Object(s.b)();Object(a.useEffect)((function(){t((function(e){b().then((function(t){e({type:"TEST/fetchData",items:t.data}),e({type:"TEST/selectMinPrice"})})).catch((function(e){alert("error")}))}))}));var n=e.map((function(e,t){return Object(v.jsx)(g,{item:e},t)}));return Object(v.jsxs)("div",{className:i.a.container,children:[Object(v.jsx)("div",{className:i.a.itemContainer,children:n}),Object(v.jsx)("div",{className:i.a.footer,children:Object(v.jsx)("div",{className:i.a.buttonContainer,children:Object(v.jsx)(f,{title:"Buy cheapest"})})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},N=n(11),B=n(25),C=Object(N.b)({test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEST/fetchData":return Object(l.a)(Object(l.a)({},e),{},{items:t.items});case"TEST/selectMinPrice":var n=Object(l.a)({},e),a=n.items.reduce((function(e,t){return e.price<t.price?e:t}));return n.minPriceItem=a,n;default:return e}}}),M=Object(N.c)(C,Object(N.a)(B.a));window.store=M,r.a.render(Object(v.jsx)(s.a,{store:M,children:Object(v.jsx)(x,{})}),document.getElementById("root")),y()},7:function(e,t,n){e.exports={container:"App_container__Ox8U_",itemContainer:"App_itemContainer__24Xvt",footer:"App_footer__164kh",buttonContainer:"App_buttonContainer__bAmdd"}}},[[56,1,2]]]);
//# sourceMappingURL=main.5420bd82.chunk.js.map