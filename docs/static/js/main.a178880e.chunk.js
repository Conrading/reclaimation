(this.webpackJsonpreclaimation=this.webpackJsonpreclaimation||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(3),i=n.n(s),r=(n(12),n(4)),l=n(5),d=n(7),o=n(6),j=(n(13),n(0)),b=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={"ka\u017cdy":[{month:"July",start:5,last:31,pto:[],bank:[]},{month:"August",start:1,last:31,pto:[],bank:[15]},{month:"September",start:4,last:30,pto:[26,27,28,29,30],bank:[]},{month:"Octobor",start:6,last:31,pto:[3,4,5,6,7],bank:[]}],remark:null},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.ka\u017cdy.map((function(t){for(var n=[],a=0;a<t.start;a++)n.push(null);for(var c=0;c<t.last;c++)n.push(c+1);var s=n.map((function(n){for(var a=0;a<t.pto.length;a++)if(n===t.pto[a])return!1,Object(j.jsx)("div",{className:"dni-pto-text",onClick:function(){e.setState({remark:"I am on PTO from September 26 to Octobor 7, will be back on Octobor 10 Monday"})},children:n});for(var c=0;c<t.bank.length;c++)if(n===t.bank[c])return!1,Object(j.jsx)("div",{className:"dni-bank-text",children:n});if(!0)return Object(j.jsx)("div",{className:"centeringText",children:n})}));return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"card-project",children:[Object(j.jsx)("div",{className:"miesi\u0105c",children:t.month}),Object(j.jsx)("div",{className:"limit-width-sieben",children:Object(j.jsx)("hr",{})}),Object(j.jsxs)("div",{className:"tydzie\u0144",children:[Object(j.jsx)("div",{className:"tydzie\u0144-sunday centeringText",children:"Sun"}),Object(j.jsx)("div",{className:"centeringText",children:"Mon"}),Object(j.jsx)("div",{className:"centeringText",children:"Tue"}),Object(j.jsx)("div",{className:"centeringText",children:"Wed"}),Object(j.jsx)("div",{className:"centeringText",children:"Thu"}),Object(j.jsx)("div",{className:"centeringText",children:"Fri"}),Object(j.jsx)("div",{className:"tydzie\u0144-saturday",children:"Sat"})]}),Object(j.jsx)("div",{className:"dni-container",children:s})]})})}));return Object(j.jsxs)("body",{children:[Object(j.jsx)("div",{className:"main-title",children:"2022 Calendar"}),Object(j.jsx)("div",{className:"center-by-margin",children:t}),Object(j.jsx)("div",{className:"remark-frame",children:Object(j.jsx)("div",{className:"remark",onClick:function(){e.setState({remark:null})},children:this.state.remark})}),Object(j.jsxs)("div",{className:"bottom-note",children:[Object(j.jsx)("div",{className:"bottom-note-bank",children:"* Bank Holiday in Poland"}),Object(j.jsx)("div",{className:"bottom-note-PTO",children:"* PTO duration"})]})]})}}]),n}(a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.a178880e.chunk.js.map