(this.webpackJsonppemi=this.webpackJsonppemi||[]).push([[0],{20:function(n,e,t){"use strict";var i=t(1),r=t(4),c=t(5);function a(){var n=Object(r.a)(["\n  display: inline-block;\n  width: 5rem;\n  height: 5rem;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return a=function(){return n},n}function o(){var n=Object(r.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return o=function(){return n},n}var s=c.a.div(o()),d=c.a.div(a());e.a=function(){return Object(i.jsx)(s,{children:Object(i.jsx)(d,{})})}},30:function(n,e,t){},36:function(n,e,t){},37:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t(0),c=t.n(r),a=t(19),o=t.n(a),s=t(9),d=(t(30),t(2)),l=t(4),u=t(5);function p(){var n=Object(l.a)(["\ndisplay: flex;\nalign-items: center;\n  box-sizing: border-box;\n  min-height: 10vh;\n  width: 100%;\n  justify-content: space-between;\n  @media screen and (max-width:500px){\n    flex-direction: column;\n    justify-content: unset;\n  }\n"]);return p=function(){return n},n}var j=u.a.div(p()),m=t.p+"static/media/PEMI-ORIGIN.f0ff6b9f.png";function x(){var n=Object(l.a)(["\ndisplay: block;\nheight: 100%;\n@media screen and (max-width: 500px) {\n  position: relative;\n  margin: 0 auto;\n} \n"]);return x=function(){return n},n}function b(){var n=Object(l.a)(["\ndisplay: block;\nheight: 10vh;\npadding: 5px;\n"]);return b=function(){return n},n}var h=Object(u.a)(s.b)(b()),f=u.a.img.attrs((function(){return{src:m}}))(x()),g=function(){return Object(i.jsx)(h,{to:"/pemi/",children:Object(i.jsx)(f,{})})};function O(){var n=Object(l.a)(["\n  color: inherit;\n  padding: 10px 15px;\n  cursor: pointer;\n  text-decoration: none;\n  @media screen and (max-width:1120px){\n    ","\n  }\n  @media screen and (max-width:980px){\n    ","\n  }\n  @media screen and (max-width:500px){\n    ","\n  }\n  "]);return O=function(){return n},n}function y(){var n=Object(l.a)(["\nalign-self: stretch;\n  background-color: ",";\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 2rem;\n  @media screen and (max-width:1120px){\n    ","\n  }\n  @media screen and (max-width:980px){\n    ","\n  }\n  @media screen and (max-width:500px){\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n    ","\n  }\n"]);return y=function(){return n},n}var v=u.a.div(y(),(function(n){return n.primary?"rgba(164, 32, 32, 0.7)\n  ":"transparent"}),(function(n){return n.primary?"white":"black"}),(function(n){return n.primary?"":"flex-direction: column;   justify-content: center;\n    "}),(function(n){return n.primary?"\n    flex-direction: column; text-align: center;":"flex-direction: column;   justify-content: center;\n    "}),(function(n){return n.primary?"\n    align-items: unset;":""})),A=Object(u.a)(s.b)(O(),(function(n){return n.primary?"":"padding: 0;"}),(function(n){return n.primary?"\n    padding: 10px 15px;":"padding: 0;"}),(function(n){return n.primary?"\n    padding: 0 5px;":"padding-left: 10px;"})),w=function(n){var e=n.primary;return Object(i.jsxs)(v,{primary:e,children:[Object(i.jsx)(A,{primary:e,to:"/pemi/kontakt",children:"KONTAKT"}),Object(i.jsx)(A,{primary:e,to:"/pemi/moja_praca",children:"MOJA PR\xc1CA"})]})},k=function(){return Object(i.jsxs)(j,{children:[Object(i.jsx)(g,{}),Object(i.jsx)(w,{primary:!0})]})};function N(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  span {\n    width: 52px;\n    height: 50px;\n    background-image: url(",");\n    background-size: cover;\n    margin-left: 10px;\n  }\n"]);return N=function(){return n},n}function X(){var n=Object(l.a)(["\n  height: 6rem;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, max-content);\n  grid-template-rows: 100%;\n  justify-content: space-around;\n  position: absolute;\n  bottom: 0;\n  font-size: 2rem;\n\n  ul {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n  }\n  li {\n    list-style-type: none;\n    padding: 0 1.5rem;\n    margin: 0 auto;\n    font-size: 2rem;\n  }\n\n  @media screen and (max-width: 1280px) {\n    ul {\n      display: grid;\n      grid-template-columns: repeat(2, max-content);\n    }\n  }\n  @media screen and (max-width: 1120px) {\n    p {\n      display: none;\n    }\n  }\n  @media screen and (max-width: 800px) {\n    grid-template-columns: repeat(2, max-content);\n    ul {\n      display: none;\n    }\n  }\n"]);return X=function(){return n},n}var z=u.a.div(X()),E=u.a.div(N(),"data:image/png;base64,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"),S=function(){return Object(i.jsxs)(z,{children:[Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Peter Mikolaj"}),Object(i.jsx)("li",{children:"0903 914 821"}),Object(i.jsx)("li",{children:"I\u010cO: 5451361"}),Object(i.jsx)("li",{children:"Pri \u0161tadi\xf3ne 11, 085 01"})]}),Object(i.jsx)(w,{}),Object(i.jsxs)(E,{children:[Object(i.jsx)("p",{children:"\xa9 Pavol Har\u010darik 2021"}),Object(i.jsx)("span",{})]})]})},U=t.p+"static/media/homePage-bg-img.1291ddcf.jpg";function C(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 20px;\n  text-transform: uppercase;\n  text-align: center;\n  h1 {\n    letter-spacing: 6px;\n  }\n   li {\n    list-style-type: none;\n    letter-spacing: 2px;\n    line-height: 32px;\n  }\n  \n"]);return C=function(){return n},n}function G(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 45%);\n  align-content: center;\n  justify-content: center;\n  min-height: calc(90vh - 6rem);\n  width: 100%;\n  background-image: linear-gradient(\n      rgba(255, 255, 255, 0.8),\n      rgba(255, 255, 255, 0.8)\n    ),\n    url(",");\n  background-size: cover;\n  background-position: top;\n  @media screen and (max-width:600px){\n    grid-template-columns: 90vw;\n  }\n  "]);return G=function(){return n},n}var P=u.a.div(G(),U),q=u.a.div(C()),F=function(){return Object(i.jsxs)(P,{children:[Object(i.jsxs)(q,{children:[Object(i.jsx)("h1",{children:"pre va\u0161u dom\xe1cnos\u0165"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"In\u0161tal\xe1cia a rekon\u0161trukcia vodovodn\xfdch rozvodov"}),Object(i.jsx)("li",{children:"kanaliz\xe1ci\xed"}),Object(i.jsx)("li",{children:"vykurovania"}),Object(i.jsx)("li",{children:"plynov\xe9 pr\xedpojky opz"})]})]}),Object(i.jsxs)(q,{children:[Object(i.jsx)("h1",{children:"pre v\xe1\u0161 automobil"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Mechanick\xe9 opravy"}),Object(i.jsx)("li",{children:"Zv\xe1racie pr\xe1ce"}),Object(i.jsx)("li",{children:"le\u0161tenie"}),Object(i.jsx)("li",{children:"pr\xedprava vozidiel na stk"})]})]})]})},I=(t(36),t(20)),Z=Object(r.lazy)((function(){return Promise.all([t.e(3),t.e(6)]).then(t.bind(null,62))})),T=Object(r.lazy)((function(){return t.e(5).then(t.bind(null,63))})),D=Object(r.lazy)((function(){return t.e(4).then(t.bind(null,64))})),R=Object(r.lazy)((function(){return t.e(7).then(t.bind(null,65))})),Y=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(k,{}),Object(i.jsx)(r.Suspense,{fallback:Object(i.jsx)(I.a,{}),children:Object(i.jsx)("div",{id:"splitter",children:Object(i.jsxs)(d.c,{children:[Object(i.jsx)(d.a,{exact:!0,path:"/pemi/",component:F}),Object(i.jsx)(d.a,{exact:!0,path:"/pemi/kontakt",component:Z}),Object(i.jsx)(d.a,{exact:!0,path:"/pemi/moja_praca",component:T}),Object(i.jsx)(d.a,{exact:!0,path:"/pemi/moja_praca/:category",component:D}),Object(i.jsx)(d.a,{path:"/pemi/moja_praca/pemi/:src",component:R})]})})}),Object(i.jsx)(S,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=function(n){n&&n instanceof Function&&t.e(8).then(t.bind(null,61)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),r(n),c(n),a(n)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(s.a,{children:Object(i.jsx)(Y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)})),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.85a7aa3b.chunk.js.map