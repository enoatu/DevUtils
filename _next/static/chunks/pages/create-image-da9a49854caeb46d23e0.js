_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{MV7e:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var c=n("nKUr"),s=n("MX0m"),i=n.n(s),a=n("q1tI"),l=n("soUV"),r=n("rZY9"),x=n("9Koi");function o(){var e=Object(x.a)("create-image"),t=e.t;e.i18n.addResourceBundle("ja","create-image",{height:"\u9ad8\u3055",width:"\u6a2a\u5e45",text:"\u30c6\u30ad\u30b9\u30c8","text size":"\u30c6\u30ad\u30b9\u30c8\u30b5\u30a4\u30ba","text color":"\u30c6\u30ad\u30b9\u30c8\u306e\u8272","background color:":"\u80cc\u666f\u306e\u8272","Click Image for download!":"\u753b\u50cf\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"});var n=Object(a.useState)(300),s=n[0],o=n[1],j=Object(a.useState)(300),d=j[0],u=j[1],b=Object(a.useState)(""),m=b[0],f=b[1],h=Object(a.useState)(0),p=h[0],O=h[1],g=Object(a.useState)("#ccc"),v=g[0],w=g[1],k=Object(a.useState)("#f00"),N=k[0],y=k[1],_=Object(a.useRef)(null);return Object(a.useEffect)((function(){!function(){var e=s||0,t=d||0,n=_.current.getContext("2d");n.clearRect(0,0,e,t),n.fillStyle=v,n.strokeStyle=v,n.rect(0,0,e,t),n.fill(),n.stroke(),n.fillStyle=N;var c=0;c=e-t>0?0===p?1*t/3:2*t/3:0===p?1*e/3:2*e/3,n.font="".concat(c,"px '\uff2d\uff33 \u30b4\u30b7\u30c3\u30af'"),n.textAlign="center",n.textBaseline="middle";var i=m||"w".concat(e,"px \xd7 h").concat(t,"px");n.fillText(i,e/2,t/2,e)}()}),[s,d,m,p,N,v]),Object(c.jsxs)(l.a,{title:t("title"),children:[Object(c.jsxs)("main",{className:"jsx-2781106983",children:[Object(c.jsx)("h1",{className:"jsx-2781106983 title",children:t("title")}),Object(c.jsx)("p",{className:"jsx-2781106983 description",children:t("description")}),Object(c.jsxs)("div",{className:"jsx-2781106983",children:[Object(c.jsx)("p",{className:"jsx-2781106983",children:t("width")}),Object(c.jsx)("input",{type:"number",value:s,onChange:function(e){return o(parseInt(e.target.value))},className:"jsx-2781106983 num-box"})]}),Object(c.jsxs)("div",{className:"jsx-2781106983",children:[Object(c.jsx)("p",{className:"jsx-2781106983",children:t("height")}),Object(c.jsx)("input",{type:"number",value:d,onChange:function(e){return u(parseInt(e.target.value))},className:"jsx-2781106983 num-box"})]}),Object(c.jsxs)(r.a,{children:[Object(c.jsxs)("div",{className:"jsx-2781106983",children:[Object(c.jsx)("p",{className:"jsx-2781106983",children:t("text")}),Object(c.jsx)("input",{type:"text",value:m,onChange:function(e){return f(e.target.value)},className:"jsx-2781106983 text-box"})]}),Object(c.jsxs)("div",{className:"jsx-2781106983",children:[Object(c.jsx)("p",{className:"jsx-2781106983",children:t("text size")}),Object(c.jsxs)("select",{value:p,onChange:function(e){return O(parseInt(e.target.value))},className:"jsx-2781106983 num-box",children:[Object(c.jsx)("option",{value:"0",className:"jsx-2781106983",children:"normal"}),Object(c.jsx)("option",{value:"1",className:"jsx-2781106983",children:"big"})]})]}),Object(c.jsxs)("div",{className:"jsx-2781106983",children:[Object(c.jsx)("p",{className:"jsx-2781106983",children:t("text color")}),Object(c.jsx)("input",{type:"text",value:N,onChange:function(e){return y(e.target.value)},className:"jsx-2781106983 text-box"})]}),Object(c.jsxs)("div",{className:"jsx-2781106983",children:[Object(c.jsx)("p",{className:"jsx-2781106983",children:t("background color")}),Object(c.jsx)("input",{type:"text",value:v,onChange:function(e){return w(e.target.value)},className:"jsx-2781106983 text-box"})]})]}),Object(c.jsx)("p",{className:"jsx-2781106983",children:t("Click Image for download!")}),Object(c.jsx)("canvas",{ref:_,width:s,height:d,onClick:function(){var e=_.current.toDataURL("image/png"),t=document.createElement("a");t.href=e,t.setAttribute("download","".concat(m,".png")),t.click()},className:"jsx-2781106983"})]}),Object(c.jsx)(i.a,{id:"2781106983",children:[".container.jsx-2781106983{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-2781106983{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".title.jsx-2781106983 a.jsx-2781106983{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-2781106983 a.jsx-2781106983:hover,.title.jsx-2781106983 a.jsx-2781106983:focus,.title.jsx-2781106983 a.jsx-2781106983:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-2781106983{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-2781106983,.description.jsx-2781106983{text-align:center;}",".description.jsx-2781106983{line-height:1.5;font-size:1.5rem;}",".num-box.jsx-2781106983{width:300px;}"]})]})}},ZKUB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-image",function(){return n("MV7e")}])},rZY9:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("nKUr"),s=n("q1tI"),i=n("9Koi");function a(e){var t=Object(i.a)("utils"),n=t.t;t.i18n.addResourceBundle("ja","utils",{"Additional Options":"\u8ffd\u52a0\u30aa\u30d7\u30b7\u30e7\u30f3"});var a=Object(s.useState)(!1),l=a[0],r=a[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return r(!l)},children:n("Additional Options")}),l&&Object(c.jsx)("div",{children:e.children})]})}}},[["ZKUB",0,2,1,3]]]);