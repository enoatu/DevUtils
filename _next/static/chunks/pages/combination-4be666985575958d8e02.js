(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{987:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5893),s=n(5988),a=n(9008);function r(){return(0,i.jsxs)("footer",{className:"jsx-1619381455",children:[(0,i.jsxs)("a",{href:"./",rel:"noopener noreferrer",className:"jsx-1619381455",children:["Powered by ",(0,i.jsx)("img",{src:"./enoatu.svg",alt:"Enoatu Logo",className:"jsx-1619381455 logo"})]}),(0,i.jsx)(s.default,{id:"1619381455",children:[".logo.jsx-1619381455{height:1em;}","footer.jsx-1619381455{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-1619381455 img.jsx-1619381455{margin-left:0.5rem;}","footer.jsx-1619381455 a.jsx-1619381455{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]})]})}var l=n(4155);function c(e){var t=e.children,n=e.title,c=void 0===n?"This is the default title":n,o=l.env.NEXT_PUBLIC_GA_ID,x="https://www.googletagmanager.com/gtag/js?id=".concat(o),d={__html:"\n    window.dataLayer = window.dataLayer || []\n    function gtag(){dataLayer.push(arguments)}\n    gtag('js', new Date())\n    gtag('config', '".concat(o,"', {\n      page_path: window.location.pathname,\n    })")};return(0,i.jsxs)("div",{className:"jsx-4280763151 container",children:[(0,i.jsxs)(a.default,{children:[o&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("script",{async:!0,src:x,className:"jsx-4280763151"}),(0,i.jsx)("script",{dangerouslySetInnerHTML:d,className:"jsx-4280763151"})]}),(0,i.jsxs)("title",{className:"jsx-4280763151",children:["DevUtils | ",c]}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-4280763151"})]}),t,(0,i.jsx)(r,{}),(0,i.jsx)(s.default,{id:"3621368397",children:[".container.jsx-4280763151{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]}),(0,i.jsx)(s.default,{id:"3379920139",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}","*{box-sizing:border-box;}"]})]})}},1133:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(5893),s=n(5988),a=n(7294),r=n(987);function l(){var e=(0,a.useState)(""),t=e[0],n=e[1],l=(0,a.useState)(""),c=l[0],o=l[1],x=(0,a.useState)("\u2192"),d=x[0],u=x[1],f=(0,a.useState)(2),j=f[0],p=f[1],m=function e(t,n){var i=[];if(t.length<n)return[];if(1===n)for(var s=0;s<t.length;s++)i[s]=[t[s]];else for(var a=0;a<t.length-n+1;a++)for(var r=e(t.slice(a+1),n-1),l=0;l<r.length;l++)i.push([t[a]].concat(r[l]));return i},b="combination";return(0,i.jsxs)(r.Z,{title:b,children:[(0,i.jsxs)("main",{className:"jsx-1285918432",children:[(0,i.jsx)("h1",{className:"jsx-1285918432 title",children:b}),(0,i.jsx)("p",{className:"jsx-1285918432 description",children:"Development Utils"}),(0,i.jsxs)("div",{className:"jsx-1285918432 input-wrapper",children:[(0,i.jsx)("p",{className:"jsx-1285918432",children:"source"}),(0,i.jsx)("textarea",{value:t,onChange:function(e){return n(e.target.value)},placeholder:"hoge\nfuga\npiyo",className:"jsx-1285918432 source-box"})]}),(0,i.jsxs)("div",{className:"jsx-1285918432 input-wrapper",children:[(0,i.jsx)("p",{className:"jsx-1285918432",children:"count"}),(0,i.jsx)("input",{type:"number",value:j,onChange:function(e){return p(parseInt(e.target.value))},className:"jsx-1285918432"})]}),(0,i.jsxs)("div",{className:"jsx-1285918432 input-wrapper",children:[(0,i.jsx)("p",{className:"jsx-1285918432",children:"separator(option)"}),(0,i.jsx)("input",{type:"text",value:d,onChange:function(e){return u(e.target.value)},className:"jsx-1285918432"})]}),(0,i.jsx)("div",{className:"jsx-1285918432 input-wrapper",children:(0,i.jsx)("button",{onClick:function(){return function(e){var n=e(t.split("\n"),j).map((function(e){return e.join(" \u2192 ")})).sort().join("\n");o(n)}(m)},className:"jsx-1285918432 go-button",children:"Go!"})}),(0,i.jsx)("div",{className:"jsx-1285918432 input-wrapper",children:(0,i.jsx)("textarea",{value:c,readOnly:!0,className:"jsx-1285918432 result-box"})})]}),(0,i.jsx)(s.default,{id:"1285918432",children:[".container.jsx-1285918432{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-1285918432{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:300px;}",".title.jsx-1285918432 a.jsx-1285918432{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-1285918432 a.jsx-1285918432:hover,.title.jsx-1285918432 a.jsx-1285918432:focus,.title.jsx-1285918432 a.jsx-1285918432:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-1285918432{margin:0;line-height:1.15;font-size:3rem;}",".title.jsx-1285918432,.description.jsx-1285918432{text-align:center;}",".description.jsx-1285918432{line-height:1.5;font-size:1.5rem;}",".source-box.jsx-1285918432{height:300px;width:100%;}",".go-button.jsx-1285918432{width:50px;height:50px;border-radius:30px;margin:auto;border-color:#0070f3;}",".result-box.jsx-1285918432{height:300px;width:100%;}",".input-wrapper.jsx-1285918432{width:100%;}"]})]})}},9762:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/combination",function(){return n(1133)}])}},function(e){e.O(0,[12,774,888,179],(function(){return t=9762,e(e.s=t);var t}));var t=e.O();_N_E=t}]);