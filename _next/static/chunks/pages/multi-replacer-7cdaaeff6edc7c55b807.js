_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"6FTQ":function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}n.d(t,"a",(function(){return i}))},"6gqp":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var i=n("nKUr");var r=n("8rE2");function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,c=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(l){r=!0,c=l}finally{try{i||null==a.return||a.return()}finally{if(r)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=n("MX0m"),a=n.n(s),l=n("q1tI"),o=n("soUV");function x(){var e=Object(l.useState)(""),t=e[0],n=e[1],r=Object(l.useState)(""),s=r[0],x=r[1],u=Object(l.useState)(""),j=u[0],b=u[1],d="Multi Replacer";return Object(i.jsxs)(o.a,{title:d,children:[Object(i.jsxs)("main",{className:"jsx-2772604203",children:[Object(i.jsx)("h1",{className:"jsx-2772604203 title",children:d}),Object(i.jsx)("p",{className:"jsx-2772604203 description",children:"Development Utils"}),Object(i.jsxs)("div",{className:"jsx-2772604203",children:[Object(i.jsx)("p",{className:"jsx-2772604203",children:"source"}),Object(i.jsx)("textarea",{value:t,onChange:function(e){return n(e.target.value)},className:"jsx-2772604203 source-box"})]}),Object(i.jsxs)("div",{className:"jsx-2772604203",children:[Object(i.jsx)("p",{className:"jsx-2772604203",children:"pattern"}),Object(i.jsx)("p",{className:"jsx-2772604203",children:"replacement"}),Object(i.jsx)("textarea",{value:s,onChange:function(e){return x(e.target.value)},className:"jsx-2772604203 pattern-box"})]}),Object(i.jsx)("button",{onClick:function(){var e=s.split("\n"),n=t;e.forEach((function(e){var t=c(e.split(" "),2),i=t[0],r=t[1];n=n.replaceAll(i,r)})),b(n)},className:"jsx-2772604203",children:"replace"}),Object(i.jsx)("div",{className:"jsx-2772604203",children:Object(i.jsx)("textarea",{value:j,readOnly:!0,className:"jsx-2772604203 result-box"})})]}),Object(i.jsx)(a.a,{id:"2772604203",children:[".container.jsx-2772604203{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-2772604203{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".title.jsx-2772604203 a.jsx-2772604203{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-2772604203 a.jsx-2772604203:hover,.title.jsx-2772604203 a.jsx-2772604203:focus,.title.jsx-2772604203 a.jsx-2772604203:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-2772604203{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-2772604203,.description.jsx-2772604203{text-align:center;}",".description.jsx-2772604203{line-height:1.5;font-size:1.5rem;}",".source-box.jsx-2772604203{height:300px;width:300px;}",".pattern-box.jsx-2772604203{height:100px;width:300px;}",".result-box.jsx-2772604203{height:300px;width:300px;}"]})]})}},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("6FTQ");function r(e,t){if(e){if("string"===typeof e)return Object(i.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i.a)(e,t):void 0}}},s0pI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multi-replacer",function(){return n("6gqp")}])}},[["s0pI",0,1,2]]]);