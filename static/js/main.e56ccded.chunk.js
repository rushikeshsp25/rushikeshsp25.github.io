(this["webpackJsonpcountry-app"]=this["webpackJsonpcountry-app"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){e.exports=n.p+"static/media/logo-light.1ebfb62e.png"},39:function(e,t,n){e.exports=n.p+"static/media/logo-dark.5648fe32.png"},41:function(e,t,n){e.exports=n.p+"static/media/rotating-globe-light.499dd868.gif"},42:function(e,t,n){e.exports=n(80)},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(37),l=n.n(c),o=(n(47),n(8)),i=n(38),u=n.n(i),s=n(39),m=n.n(s),g=(n(48),n(11)),p=n(12);var f=function(e){var t=r.a.useContext(H);return r.a.createElement("span",null,r.a.createElement("span",{className:"sun-icon ".concat(t),style:{marginRight:"5px",fontSize:"22px"}},r.a.createElement(g.a,{icon:p.b})),r.a.createElement("label",{className:"switch ".concat(t)},r.a.createElement("input",{type:"checkbox",checked:e.isChecked,onChange:function(){"function"===typeof e.onThemeToggle&&e.onThemeToggle()}}),r.a.createElement("span",{className:"slider ".concat(t)})))},E=(n(53),n(10));var d=function(e){var t=r.a.useContext(H);return r.a.createElement("nav",{className:"topnav ".concat(t)},r.a.createElement(E.b,{to:"/"},r.a.createElement("img",{className:"logo",src:"light"===t?u.a:m.a,alt:"World"})),r.a.createElement(f,{isChecked:"light"!==t,onThemeToggle:e.onThemeToggle}))},h=n(2),v=n(14),y=n.n(v),b=n(4),N=n(19),x="https://restcountries.eu/rest/v2",C={defaultPageSize:18,defaultTotalRecords:250,apiDelay:0};n(57);var O=function(e){return r.a.createElement("div",{className:"row"},e.children)};n(58);var S=function(e){return r.a.createElement("div",{className:"col-".concat(e.type?e.type+"-":"").concat(e.span," ").concat(e.className||"")},e.children)};var j=function(e){return r.a.createElement("label",{className:"region-select"},r.a.createElement("select",{value:e.initialRegion||"",onChange:function(t){t.persist();var n="All Regions"!==t.target.value?t.target.value:null;e.onRegionChange(n)}},r.a.createElement("option",{value:""},"All Regions"),e.regions&&e.regions.map((function(e,t){return r.a.createElement("option",{key:"region-".concat(t),value:e},e)}))))};n(28);var R=function(e){var t=r.a.useState(e.initialCountry||""),n=Object(o.a)(t,2),a=n[0],c=n[1],l=r.a.useState(null),i=Object(o.a)(l,2),u=i[0],s=i[1],m=function(t){c(t),t||s(null);var n=function(e,t){return t&&e?e.filter((function(e){return e.match(new RegExp(t,"i"))})).slice(0,5):null}(e.countries,t);n&&s(n)};return r.a.createElement("div",{className:"search-container"},r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"search-form"},r.a.createElement("input",{type:"text",placeholder:"Search For Countries..",value:a,onChange:function(e){return m(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Search",onClick:function(t){t.preventDefault(),"function"===typeof e.onCountrySearch&&e.onCountrySearch(a)}}))),r.a.createElement("div",{className:"search-suggestions"},u?r.a.createElement("ul",null,u.map((function(e,t){return r.a.createElement("li",{key:"suggestion-".concat(t),onClick:function(){return c(e),void s(null)}},e)}))):null))};var k=function(e){var t=r.a.useContext(H);return r.a.createElement("div",{className:"filter-menu ".concat(t)},r.a.createElement(O,null,r.a.createElement(S,{span:6,type:"lg"},r.a.createElement(R,{onCountrySearch:e.onCountrySearch,countries:e.countries,initialCountry:e.initialCountry})),r.a.createElement(S,{span:6,type:"lg"},r.a.createElement(j,{onRegionChange:e.onRegionChange,regions:e.regions,initialRegion:e.initialRegion}))))};n(59);var w=function(e){var t=r.a.useContext(H);return r.a.createElement(r.a.Fragment,null,e.country?r.a.createElement(E.b,{to:"/country/".concat(e.country.alpha3Code)},r.a.createElement("div",{className:"card ".concat(t)},r.a.createElement("div",{className:"card-image",style:{backgroundImage:"url(".concat(e.country.flag,")")}}),r.a.createElement("div",{className:"card-description"},r.a.createElement("p",{className:"sub-heading no-text-overflow"},e.country.name),r.a.createElement("div",null,r.a.createElement("span",{className:"capital no-text-overflow"},r.a.createElement(g.a,{className:"info-text",icon:p.a}),r.a.createElement("span",{className:"info-text",style:{marginLeft:"5px"}},e.country.capital)),r.a.createElement("span",{className:"population no-text-overflow"},r.a.createElement(g.a,{className:"info-text",icon:p.c}),r.a.createElement("span",{className:"info-text",style:{marginLeft:"5px"}},e.country.population)))))):null)},T=(n(60),n(41)),z=n.n(T);var P=function(e){return r.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},r.a.createElement("img",{className:"globe",src:z.a,alt:"Loader..."}),r.a.createElement("p",{style:{color:"gray"}},e.message))};var A=function(e){return r.a.createElement("div",{className:"filtered-countries"},e.countries?r.a.createElement(O,null,e.countries.map((function(e){return r.a.createElement(S,{key:"county-".concat(e.name),span:2},r.a.createElement(w,{country:e}))}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),r.a.createElement("p",{style:{textAlign:"center",margin:"50px"},className:"info-text"},"No Countries Are Found!")))},I=n(16);function D(e){if(!e)return null;var t=new Set;return e.forEach((function(e){e.region&&t.add(e.region)})),Object(I.a)(t)}function F(e){if(!e)return null;var t=new Set;return e.forEach((function(e){e.name&&t.add(e.name)})),Object(I.a)(t)}function B(e,t,n){return e?e.slice((t-1)*n,t*n):null}function L(e,t){if(!e)return null;var n=e.filter((function(e){if(t.country&&e.name===t.country){if(!t.region||t.region&&e.region===t.region)return!0}else if(!t.country&&(!t.region||t.region&&e.region===t.region))return!0;return!1}));return n.length>0?n:null}var J=n(24),W=n.n(J);function M(e){return new Promise((function(t,n){setTimeout((function(){W.a.get(x+"/alpha/".concat(e)).then((function(e){t(e.data)})).catch((function(e){n(e)}))}),C.apiDelay)}))}n(77);var U=function(e){var t=r.a.useContext(H),n=Math.ceil(e.totalRecords/e.pageSize);return e.totalRecords&&e.pageSize?r.a.createElement("div",{className:"pagination-container ".concat(t)},r.a.createElement("span",{className:"pagination"},r.a.createElement("a",{href:"#",onClick:function(t){1!==e.pageNo&&(t.preventDefault(),e.onPageChange(e.pageNo-1))},className:1===e.pageNo?"disabled":""},"\xab"),Object(I.a)(Array(n)).map((function(t,n){return r.a.createElement("a",{href:"#",key:n+1,className:e.pageNo===n+1?"active":"",onClick:function(t){return a=n+1,t.preventDefault(),void e.onPageChange(a);var a}},n+1)})),r.a.createElement("a",{href:"#",onClick:function(t){e.pageNo!==n&&(t.preventDefault(),e.onPageChange(e.pageNo+1))},className:e.pageNo===n?"disabled":""},"\xbb"))):null},Y=function(){var e=JSON.parse(localStorage.getItem("filters")),t=JSON.parse(localStorage.getItem("paginationOptions"));return{filters:{country:e&&"country"in e?e.country:null,region:e&&"region"in e?e.region:null},pagination:{totalRecords:t&&"totalRecords"in t?t.totalRecords:C.defaultTotalRecords,pageNo:t&&"pageNo"in t?t.pageNo:1,pageSize:t&&"pageSize"in t?t.pageSize:C.defaultPageSize}}};var $=function(){var e=r.a.useRef(!1),t=r.a.useState(null),n=Object(o.a)(t,2),a=n[0],c=n[1],l=r.a.useState(null),i=Object(o.a)(l,2),u=i[0],s=i[1],m=r.a.useState(Y().filters),g=Object(o.a)(m,2),p=g[0],f=g[1],E=r.a.useState(Y().pagination),d=Object(o.a)(E,2),h=d[0],v=d[1];return r.a.useEffect((function(){e.current?(localStorage.setItem("filters",JSON.stringify(p)),localStorage.setItem("paginationOptions",JSON.stringify(h))):e.current=!0}),[p,h]),r.a.useEffect((function(){try{Object(N.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){setTimeout((function(){W.a.get(x+"/all?fields=name;alpha3Code;capital;region;population;flag").then((function(t){e(t.data)})).catch((function(e){t(e)}))}),C.apiDelay)}));case 2:t=e.sent,c(t),p&&(p.country||p.region)?(n=L(t,p),s(n),v((function(e){return Object(b.a)(Object(b.a)({},e),{},{totalRecords:n?n.length:0})}))):(s(t),v((function(e){return Object(b.a)(Object(b.a)({},e),{},{totalRecords:t.length})})));case 5:case"end":return e.stop()}}),e)})))()}catch(e){console.log(e)}}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{initialCountry:p.country,initialRegion:p.region,countries:F(a),onCountrySearch:function(e){f((function(t){return Object(b.a)(Object(b.a)({},t),{},{country:e})}));var t=L(a,Object(b.a)(Object(b.a)({},p),{},{country:e}));v((function(e){return Object(b.a)(Object(b.a)({},e),{},{pageNo:1,totalRecords:t?t.length:0})})),s(t)},regions:D(a),onRegionChange:function(e){f((function(t){return Object(b.a)(Object(b.a)({},t),{},{region:e})}));var t=L(a,Object(b.a)(Object(b.a)({},p),{},{region:e}));v((function(e){return Object(b.a)(Object(b.a)({},e),{},{pageNo:1,totalRecords:t?t.length:0})})),s(t)}}),r.a.createElement(U,Object.assign({totalRecords:100},h,{onPageChange:function(e){v((function(t){return Object(b.a)(Object(b.a)({},t),{},{pageNo:e})}))}})),r.a.createElement(A,{countries:B(u,h.pageNo,h.pageSize)})):r.a.createElement(P,{message:"Fetching Countries"}))};n(78);var q=function(e){var t=r.a.useContext(H),n=r.a.useState(),a=Object(o.a)(n,2),c=a[0],l=a[1];return r.a.useEffect((function(){l(null);try{Object(N.a)(y.a.mark((function t(){var n;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e.match.params.name);case 2:n=t.sent,l(n);case 4:case"end":return t.stop()}}),t)})))()}catch(t){console.log(t)}}),[e.match.params.name]),r.a.createElement("div",null,c?r.a.createElement("div",{className:"country-detail-card ".concat(t)},r.a.createElement("div",{className:"heading",style:{textAlign:"center",padding:"20px",marginBottom:"20px",borderBottom:"1px solid #d5d5d5"}},"COUNTRY DETAILS"),r.a.createElement(O,null,r.a.createElement(S,{span:6,type:"lg"},r.a.createElement("img",{width:"100%",src:c.flag,alt:"Country Flag"})),r.a.createElement(S,{span:6,type:"lg"},r.a.createElement("p",{className:"heading"},c.name,c.name!==c.nativeName?" | "+c.nativeName:null),r.a.createElement("p",{className:"sub-heading"},r.a.createElement(g.a,{icon:p.a}),r.a.createElement("span",{style:{marginLeft:"10px"}},c.capital)),r.a.createElement("div",{className:"country-info-table-conatainer"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Region")),r.a.createElement("td",null,c.region," - ",c.subregion)),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Area")),r.a.createElement("td",null,c.area," km\xb2")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Population")),r.a.createElement("td",null,c.population.toLocaleString())),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Timezones")),r.a.createElement("td",null,c.timezones.join(", "))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Languages")),r.a.createElement("td",null,c.languages.map((function(e){return e.name})).join(", "))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Currencies")),r.a.createElement("td",null,c.currencies.map((function(e){return e.symbol+" - "+e.name})).join(", "))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("b",null,"Baorder Shared With")),r.a.createElement("td",null,c.borders.map((function(e,t){return r.a.createElement("span",{key:"outer-span-".concat(t)},r.a.createElement(E.b,{key:"link-".concat(t),to:"/country/".concat(e)},e),t!==c.borders.length-1?r.a.createElement("span",{key:"span-".concat(t),style:{marginRight:"6px"}},","):null)})))))))))):r.a.createElement(P,{message:"Breathe In, Breathe Out :D"}))};var G=function(e){return r.a.createElement(E.a,null,e.children,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:$}),r.a.createElement(h.a,{exact:!0,path:"/country/:name",component:q}),r.a.createElement(h.a,{path:"*",exact:!0,component:function(){return r.a.createElement("h3",{style:{textAlign:"center",marginTop:"50px"}},"404 Page Not Found")}})))},H=(n(79),r.a.createContext());var K=function(){var e=r.a.useState(localStorage.getItem("currentTheme")||"light"),t=Object(o.a)(e,2),n=t[0],a=t[1];return r.a.createElement(H.Provider,{value:n},r.a.createElement("div",{className:"body ".concat(n)},r.a.createElement(G,null,r.a.createElement(d,{onThemeToggle:function(){var e;a(e="light"===n?"dark":"light"),localStorage.setItem("currentTheme",e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e56ccded.chunk.js.map