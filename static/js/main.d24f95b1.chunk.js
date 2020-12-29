(this["webpackJsonpreact-hook-code-talk"]=this["webpackJsonpreact-hook-code-talk"]||[]).push([[0],{499:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),r=n.n(a),i=n(10),s=n.n(i),l=n(14),o=n(546),d=n(565),j=n(550),u=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,display:"flex"},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}}));function b(e){var t=e.tab,n=e.setTab,a=u();return Object(c.jsx)("div",{className:a.root,children:Object(c.jsxs)(d.a,{className:a.tabs,orientation:"vertical",value:t,onChange:function(e,t){n(t)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(c.jsx)(j.a,{label:"Use State"}),Object(c.jsx)(j.a,{label:"Use Effect"}),Object(c.jsx)(j.a,{label:"Use Ref"}),Object(c.jsx)(j.a,{label:"Use Memo"}),Object(c.jsx)(j.a,{label:"Use Reducer"}),Object(c.jsx)(j.a,{label:"Use Context"}),Object(c.jsx)(j.a,{label:"Use Yair"})]})})}var O=n(551),f=n(178),h=n.n(f),x=n(179),p=n.n(x),g=n(180),m=n.n(g),v=n(552),y=n(501),C=Object(o.a)((function(e){return{root:{display:"flex",flex:1,justifyContent:"center",alignItems:"center"},content:{display:"flex",width:200,justifyContent:"space-around",alignItems:"center"}}}));function k(){var e=C(),t=Object(a.useState)(0),n=Object(l.a)(t,2),r=n[0],i=n[1],s=Object(a.useCallback)((function(){i(r+1)}),[r]),o=Object(a.useCallback)((function(){i(r-1)}),[]);return Object(c.jsx)("div",{className:e.root,children:Object(c.jsxs)("div",{className:e.content,children:[Object(c.jsx)(O.a,{color:"secondary",badgeContent:r,children:Object(c.jsx)(h.a,{})}),Object(c.jsxs)(v.a,{children:[Object(c.jsx)(y.a,{onClick:o,children:Object(c.jsx)(p.a,{fontSize:"small"})}),Object(c.jsx)(y.a,{onClick:s,children:Object(c.jsx)(m.a,{fontSize:"small"})})]})]})})}var S=n(54),w=n(127),N=n.n(w),P=Object(o.a)((function(e){return{root:{display:"flex",flex:1,justifyContent:"center",alignItems:"center",flexDirection:"column"},circles:{display:"flex",width:500,flexWrap:"wrap",justifyContent:"space-around"},circle:{cursor:"pointer",margin:20,width:100,height:100,border:"1px solid",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"},circleHighlight:{boxShadow:"0 0 10px 2px #3f51b5"}}}));function I(){var e=P(),t=Object(a.useMemo)((function(){return["red","green","gold","orange","pink"]}),[]),n=Object(a.useState)(null),r=Object(l.a)(n,2),i=r[0],s=r[1],o=Object(a.useState)(0),d=Object(l.a)(o,2),j=d[0],u=d[1],b=Object(a.useState)(0),O=Object(l.a)(b,2),f=O[0],h=O[1];Object(a.useEffect)((function(){if(i){var e=function(){return h((function(e){return e+1}))},t=function(){return u((function(e){return e+1}))};return i.addEventListener("mousemove",e),i.addEventListener("mousedown",t),function(){i.removeEventListener("mousemove",e),i.removeEventListener("mousedown",t),u(0),h(0)}}}),[i,t]);var x=Object(a.useCallback)((function(e){s(e.currentTarget)}),[]),p=Object(a.useCallback)((function(){s(null)}),[]);return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsxs)("div",{className:e.circles,children:[Object(c.jsx)("div",{className:N()(e.circle,Object(S.a)({},e.circleHighlight,!i)),onClick:p,children:" OFF "}),t.map((function(t,n){var r=Object(a.useRef)();return Object(c.jsx)("div",{ref:r,className:N()(e.circle,Object(S.a)({},e.circleHighlight,r.current===i)),style:{background:t},onClick:x},n)}))]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["mousemove: ",f]}),Object(c.jsxs)("p",{children:["mousedown: ",j]})]})]})}var R=Object(o.a)((function(e){return{root:{display:"flex",flex:1,justifyContent:"center",alignItems:"center"},content:{display:"flex",justifyContent:"space-around",alignItems:"center"},button:{margin:5}}}));function D(){var e=R(),t=Object(a.useRef)(0),n=Object(a.useState)(0),r=Object(l.a)(n,2),i=r[0],s=r[1],o=Object(a.useCallback)((function(){t.current=t.current+1,console.log("conutRef.current?",t.current)}),[t]);return Object(a.useEffect)((function(){console.log("effect via conutRef")}),[t]),Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsxs)("div",{className:e.content,children:[Object(c.jsx)(y.a,{className:e.button,variant:"contained",color:"primary",onClick:o,children:"Update Ref"}),Object(c.jsx)(y.a,{className:e.button,variant:"contained",color:"secondary",onClick:function(){return s((function(e){return e+1}))},children:"Update State"})]}),"ref result: ",t.current,"state result: ",i]})}var E=n(502),F=Object(o.a)((function(e){return{root:{display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},content:{display:"flex",justifyContent:"space-around",alignItems:"center"},button:{margin:50}}}));function B(){var e=F(),t=Object(a.useState)(0),n=Object(l.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(0),o=Object(l.a)(s,2),d=o[0],j=o[1],u=Object(a.useCallback)((function(){i(r+1)}),[r]);return Object(a.useEffect)((function(){j(2*r)}),[r]),Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(y.a,{className:e.button,variant:"contained",color:"primary",onClick:u,children:"Increase"}),Object(c.jsxs)(E.a,{children:["Counter: ",r]}),Object(c.jsxs)(E.a,{children:["Multi counter: ",d]})]})}var U=n(186),L=n(18),T=n(5),H=n(11),M=n(560),J=n(561),z=n(555),A=n(559),q=n(553),K=n(564),W=n(554),G=n(568),Y=n(556),Q=n(558),V=n(566),X=n(503),Z=n(569),$=n(562),_=n(563),ee=n(184),te=n.n(ee),ne=n(185),ce=n.n(ne);n(203);function ae(e,t,n,c,a){return{name:e,calories:t,fat:n,carbs:c,protein:a}}var re=[ae("Cupcake",305,3.7,67,4.3),ae("Donut",452,25,51,4.9),ae("Eclair",262,16,24,6),ae("Frozen yoghurt",159,6,24,4),ae("Gingerbread",356,16,49,3.9),ae("Honeycomb",408,3.2,87,6.5),ae("Ice cream sandwich",237,9,37,4.3),ae("Jelly Bean",375,0,94,0),ae("KitKat",518,26,65,7),ae("Lollipop",392,.2,98,0),ae("Marshmallow",318,0,81,2),ae("Nougat",360,19,9,37),ae("Oreo",437,18,63,4)];function ie(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function se(e,t){return"desc"===e?function(e,n){return ie(e,n,t)}:function(e,n){return-ie(e,n,t)}}function le(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var c=t(e[0],n[0]);return 0!==c?c:e[1]-n[1]})),n.map((function(e){return e[0]}))}var oe=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function de(e){var t=e.classes,n=e.onSelectAllClick,a=e.order,r=e.orderBy,i=e.numSelected,s=e.rowCount,l=e.onRequestSort;return Object(c.jsx)(q.a,{children:Object(c.jsxs)(W.a,{children:[Object(c.jsx)(z.a,{padding:"checkbox",children:Object(c.jsx)(V.a,{indeterminate:i>0&&i<s,checked:s>0&&i===s,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),oe.map((function(e){return Object(c.jsx)(z.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:r===e.id&&a,children:Object(c.jsxs)(G.a,{active:r===e.id,direction:r===e.id?a:"asc",onClick:(n=e.id,function(e){l(e,n)}),children:[e.label,r===e.id?Object(c.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})})}var je=Object(o.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(H.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),ue=function(e){var t=je(),n=e.numSelected;return Object(c.jsxs)(Y.a,{className:Object(T.a)(t.root,Object(S.a)({},t.highlight,n>0)),children:[n>0?Object(c.jsxs)(E.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):Object(c.jsx)(E.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Nutrition"}),n>0?Object(c.jsx)(Z.a,{title:"Delete",children:Object(c.jsx)(X.a,{"aria-label":"delete",children:Object(c.jsx)(te.a,{})})}):Object(c.jsx)(Z.a,{title:"Filter list",children:Object(c.jsx)(X.a,{"aria-label":"filter list",children:Object(c.jsx)(ce.a,{})})})]})},be=Object(o.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}})),Oe="setOrder",fe="setOrderBy",he="setSelected",xe="setPage",pe="setRowsPerPage",ge="toggleDense",me="toggleSelectAll",ve="toggleSelection",ye={order:"asc",orderBy:"calories",selected:[],page:0,dense:!1,rowsPerPage:5};function Ce(e,t){switch(t.type){case Oe:return Object(L.a)(Object(L.a)({},e),{},{order:t.payload});case fe:return Object(L.a)(Object(L.a)({},e),{},{orderBy:t.payload});case he:return Object(L.a)(Object(L.a)({},e),{},{selected:t.payload});case xe:return Object(L.a)(Object(L.a)({},e),{},{page:t.payload});case pe:return Object(L.a)(Object(L.a)({},e),{},{rowsPerPage:t.payload});case ge:return Object(L.a)(Object(L.a)({},e),{},{dense:!e.dense});case me:var n=e.selected.length==re.length;return Object(L.a)(Object(L.a)({},e),{},{selected:n?[]:re.map((function(e){return e.name}))});case ve:var c=e.selected.includes(t.payload)?e.selected.filter((function(e){return e!==t.payload})):[].concat(Object(U.a)(e.selected),[t.payload]);return Object(L.a)(Object(L.a)({},e),{},{selected:c});default:return e}}function ke(){var e=be(),t=Object(a.useReducer)(Ce,ye),n=Object(l.a)(t,2),r=n[0],i=n[1],s=r.order,o=r.orderBy,d=r.selected,j=r.page,u=r.dense,b=r.rowsPerPage,O=b-Math.min(b,re.length-j*b);return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsxs)(Q.a,{className:e.paper,children:[Object(c.jsx)(ue,{numSelected:d.length}),Object(c.jsx)(A.a,{children:Object(c.jsxs)(M.a,{className:e.table,"aria-labelledby":"tableTitle",size:u?"small":"medium","aria-label":"enhanced table",children:[Object(c.jsx)(de,{classes:e,numSelected:d.length,order:s,orderBy:o,onSelectAllClick:function(){i({type:me,payload:[]})},onRequestSort:function(e,t){i({type:Oe,payload:o===t&&"asc"===s?"desc":"asc"}),i({type:fe,payload:t})},rowCount:re.length}),Object(c.jsxs)(J.a,{children:[le(re,se(s,o)).slice(j*b,j*b+b).map((function(e,t){var n,a=(n=e.name,-1!==d.indexOf(n)),r="enhanced-table-checkbox-".concat(t);return Object(c.jsxs)(W.a,{hover:!0,onClick:function(t){return function(e,t){i({type:ve,payload:t})}(0,e.name)},role:"checkbox","aria-checked":a,tabIndex:-1,selected:a,children:[Object(c.jsx)(z.a,{padding:"checkbox",children:Object(c.jsx)(V.a,{checked:a,inputProps:{"aria-labelledby":r}})}),Object(c.jsx)(z.a,{component:"th",id:r,scope:"row",padding:"none",children:e.name}),Object(c.jsx)(z.a,{align:"right",children:e.calories}),Object(c.jsx)(z.a,{align:"right",children:e.fat}),Object(c.jsx)(z.a,{align:"right",children:e.carbs}),Object(c.jsx)(z.a,{align:"right",children:e.protein})]},e.name)})),O>0&&Object(c.jsx)(W.a,{style:{height:(u?33:53)*O},children:Object(c.jsx)(z.a,{colSpan:6})})]})]})}),Object(c.jsx)(K.a,{rowsPerPageOptions:[5,10,25],component:"div",count:re.length,rowsPerPage:b,page:j,onChangePage:function(e,t){i({type:xe,payload:t})},onChangeRowsPerPage:function(e){i({type:pe,payload:parseInt(e.target.value,10)}),i({type:xe,payload:0})}})]}),Object(c.jsx)($.a,{control:Object(c.jsx)(_.a,{checked:u,onChange:function(e){i({type:ge})}}),label:"Dense padding"})]})}var Se=Object(o.a)((function(e){return{root:{display:"flex",flex:1,justifyContent:"center",flexDirection:"column",alignItems:"center"},content:{display:"flex",width:200,justifyContent:"space-around",alignItems:"center"},timer:{margin:50}}})),we=function(e,t){var n=Object(a.useState)(e),c=Object(l.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(t),o=Object(l.a)(s,2),d=o[0],j=o[1];return Object(a.useEffect)((function(){var e=setInterval((function(){j((function(e){return e+r}))}),r);return function(){clearInterval(e)}}),[r]),[d,i]};function Ne(){var e=Se(),t=we(1e3,0),n=Object(l.a)(t,2),a=n[0],r=n[1],i=we(100,0),s=Object(l.a)(i,2),o=s[0],d=s[1];return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsxs)("div",{className:e.timer,children:[Object(c.jsxs)(E.a,{variant:"h4",children:["Tawil: ",a," "]}),Object(c.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){return r(100)},children:"Faster!"}),Object(c.jsx)(y.a,{variant:"contained",color:"secondary",onClick:function(){return r(1e3)},children:"Slower!"})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)(E.a,{variant:"h4",children:["Riklin: ",o]}),Object(c.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){return d(10)},children:"Faster!"}),Object(c.jsx)(y.a,{variant:"contained",color:"secondary",onClick:function(){return d(1e3)},children:"Slower!"})]})]})}var Pe=Object(a.createContext)("Default Shimi \ud83d\ude00"),Ie=Object(o.a)((function(e){return{root:{display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},content:{display:"flex",width:200,justifyContent:"space-around",alignItems:"center"}}}));function Re(){var e=Ie(),t=Object(a.useContext)(Pe);return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(E.a,{variant:"h4",children:JSON.stringify(t)}),Object(c.jsx)(Pe.Provider,{value:"Super Shimon Shvalb \ud83d\ude0e !",children:Object(c.jsx)(De,{})})]})}function De(){return Object(c.jsx)(Ee,{})}function Ee(){return Object(c.jsx)(Fe,{})}function Fe(){var e=Ie(),t=Object(a.useContext)(Pe);return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(E.a,{variant:"h4",children:JSON.stringify(t)})})}function Be(e){switch(e.tab){case 0:return Object(c.jsx)(k,{});case 1:return Object(c.jsx)(I,{});case 2:return Object(c.jsx)(D,{});case 3:return Object(c.jsx)(B,{});case 4:return Object(c.jsx)(ke,{});case 5:return Object(c.jsx)(Re,{});case 6:return Object(c.jsx)(Ne,{});default:return null}}var Ue=Object(o.a)((function(e){return{root:{display:"flex"}}}));var Le=function(){var e=Ue(),t=r.a.useState(0),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(b,{tab:a,setTab:i}),Object(c.jsx)(Be,{tab:a})]})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,570)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Le,{})}),document.getElementById("root")),Te()}},[[499,1,2]]]);
//# sourceMappingURL=main.d24f95b1.chunk.js.map