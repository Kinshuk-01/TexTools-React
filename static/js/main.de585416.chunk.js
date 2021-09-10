(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),l=c.n(a),r=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," sticky-top"),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsx)("label",{className:"form-check-label",htmlhtmlfor:"flexSwitchCheckDefault",children:"light"===e.mode?"Dark Mode":"Light Mode"})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Search"})]})]})]})})}function b(e){return Object(o.jsx)("div",{style:{height:"40px"},children:e.alert&&Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})}function d(e){var t=Object(s.useState)(""),c=Object(r.a)(t,2),n=c[0],a=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){a(e.target.value)},id:"mybox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toUpperCase();a(t),e.showAlert("Text converted to uppercase successfully.","success")},disabled:0===n.length,children:"Convert to Upper case"}),Object(o.jsx)("button",{className:"btn btn-outline-primary mx-1",onClick:function(){a(""),e.showAlert("Text cleared successfully.","success")},disabled:0===n.length,children:"Clear All"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-1",onClick:function(){var t=n.toLowerCase();a(t),e.showAlert("Text converted to lowercase successfully.","success")},disabled:0===n.length,children:"Convert to Lower case"}),Object(o.jsx)("button",{className:"btn btn-outline-primary mx-1",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied to keyboard successfully.","success")},disabled:0===n.length,children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.split(/[ ] + /);a(t.join(" ")),e.showAlert("Removed extra spaces successfully.","success")},disabled:0===n.length,children:"Remove Extra spaces"})]}),Object(o.jsxs)("div",{className:"container my-4",children:[Object(o.jsx)("h3",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("b",{children:"\u2022 Number of words:"})," ",n.split(" ").filter((function(e){return 0!==e.length})).length]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("b",{children:"\u2022 Number of Characters:"})," ",n.length]}),Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("b",{children:"\u2022 Minutes to read:"})," ",.008*n.split(" ").filter((function(e){return 0!==e.length})).length," mins"]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Nothing to Preview!!"})]})]})}i.defaultProps={title:"Set Title Here",aboutBtn:"Button"};var u=function(){var e=Object(s.useState)("light"),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),l=Object(r.a)(a,2),u=l[0],h=l[1],j=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TexTools",aboutBtn:"About",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="rgb(14,14,14)",document.body.style.color="white",j("Dark Mode has been enabled successfully","success")):(n("light"),document.body.style.backgroundColor="white",document.body.style.color="black",j("Light Mode has been enabled successfully","success"))}}),Object(o.jsx)(b,{alert:u}),Object(o.jsx)("div",{className:"container my-4",children:Object(o.jsx)(d,{showAlert:j,heading:"Enter you text to analyze below:"})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.de585416.chunk.js.map