(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},22:function(e,t,n){},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),o=n.n(c),i=(n(22),n(7)),l=n(10),s=n(1);n(23);var u=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"box",onClick:function(){""===c&&(o(e.currentState),e.changeTurn(e.row,e.col))}},c)},f=[[],[],[]];var m=function(){var e=Object(a.useState)("X"),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),m=Object(i.a)(o,2),h=m[0],d=m[1],v=Object(a.useState)(!1),g=Object(i.a)(v,2),w=g[0],E=g[1],p=Object(a.useState)(!1),b=Object(i.a)(p,2),S=b[0],T=b[1],N=function(e,t){c((function(e){return"X"===e?"O":"X"})),f[e][t]=n;var a=O();a?a&&(d("'"+a+"'- Wins \ud83d\ude01"),E(!0)):(T(!0),E(!0))},O=function(){for(var e=0;e<f.length;e++){var t=f[e];if(t[0]===t[1]&&t[1]===t[2]&&t[0])return t[0]}for(var n=0;n<f.length;n++){var a=f[0][n],r=f[1][n],c=f[2][n];if(a===r&&r===c&&a)return a}var o=f[0][0],i=f[1][1],l=f[2][2];if(o===i&&i===l&&o)return o;var s=f[0][2],u=f[1][1],m=f[2][0];return!(s!==u||u!==m||!s)&&s};return r.a.createElement("div",{id:"game"},r.a.createElement(l.a,null,r.a.createElement("h1",{className:"winner"},"Tic-Tac-Toe"),r.a.createElement(s.a,{path:"/",exact:!0,render:function(){return r.a.createElement("div",null,r.a.createElement(l.b,{to:"/play",className:"again"},"Start game"),r.a.createElement("h4",{className:"winner"},"NOTE : ",n," starts first"))}}),r.a.createElement(s.a,{path:"/play",exact:!0,render:function(){return r.a.createElement("div",{className:"maingame"},S?r.a.createElement("h2",{className:"winner"},h):"",r.a.createElement("div",{className:"row"},r.a.createElement(u,{row:0,col:0,currentState:n,changeTurn:N}),r.a.createElement(u,{row:0,col:1,currentState:n,changeTurn:N}),r.a.createElement(u,{row:0,col:2,currentState:n,changeTurn:N})),r.a.createElement("div",{className:"row"},r.a.createElement(u,{row:1,col:0,currentState:n,changeTurn:N}),r.a.createElement(u,{row:1,col:1,currentState:n,changeTurn:N}),r.a.createElement(u,{row:1,col:2,currentState:n,changeTurn:N})),r.a.createElement("div",{className:"row"},r.a.createElement(u,{row:2,col:0,currentState:n,changeTurn:N}),r.a.createElement(u,{row:2,col:1,currentState:n,changeTurn:N}),r.a.createElement(u,{row:2,col:2,currentState:n,changeTurn:N})),w?r.a.createElement("a",{href:"http://tictactoe11.netlify.app",className:"again"}," Play again \u2618"):"")}})))};var h=function(){return r.a.createElement(m,null)},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");d?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.d02a38bf.chunk.js.map