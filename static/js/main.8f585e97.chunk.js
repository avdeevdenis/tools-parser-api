(this["webpackJsonptools-parser-api"]=this["webpackJsonptools-parser-api"]||[]).push([[0],{102:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),o=(t(102),t(58)),i=t(78),u=t(27),s=function(e){return{type:"CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS",payload:e}},m=function(e){return{type:"CHANGE_EXPORT_FORMAT_VARIANTS",payload:e}},d=function(){return{type:"TOGGLE_MAX_CATEGORIES_RADIO_BUTTON"}},E=function(){return{type:"TOGGLE_MAX_PRODUCTS_RADIO_BUTTON"}},p=function(e){return{type:"SET_LIMIT_MAX_CATEGORIES_NUMBER",payload:e}},f=function(e){return{type:"SET_LIMIT_MAX_PRODUCTS_NUMBER",payload:e}},b=function(e){return{type:"SET_LOADING",payload:e}},h=function(){return{type:"TOGGLE_CACHED_DATA_RADIO_BUTTON"}},g=function(e){return{type:"SAVE_PRODUCT_ITEMS",payload:e}},C=function(e){return{type:"SAVE_TABLE_HEADER_FIELDS",payload:e}},O=t(11),x=t(62),v=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0;return[].concat(Object(x.a)(e.slice(0,a)),[t],Object(x.a)(e.slice(a+1)))},y={isLoading:!1,requiredExportFields:[{isChecked:!0,name:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",key:"image"},{isChecked:!0,name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",key:"name"},{isChecked:!0,name:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",key:"breadcrumbs"},{isChecked:!0,name:"\u0426\u0435\u043d\u0430",key:"price"},{isChecked:!0,name:"\u041c\u0430\u0441\u0441\u0430",key:"weight"},{isChecked:!0,name:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",key:"stock"},{isChecked:!1,name:"\u0411\u0416\u0423",key:"nutrition"},{isChecked:!0,name:"\u0421\u0441\u044b\u043b\u043a\u0430",key:"link"},{isChecked:!1,name:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",key:"description"},{isChecked:!1,name:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",key:"properties"}],exportFormatVariants:[{type:"table",text:"\u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",isChecked:!0},{type:"file",text:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 \u0444\u0430\u0439\u043b",isChecked:!1}],needLimitMaxCategories:!1,needLimitMaxProducts:!0,limitMaxCategoriesNumber:10,limitMaxProductsNumber:5,needToGetCachedData:!0,productItems:null,tableHeaderFields:null},T=Object(u.c)({sberLenta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(console.log("sberLentaReducer action",a,"state",e),a.type){case"CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS":var t=e.requiredExportFields.reduce((function(e,t,n){return t.key===a.payload?{changedIndex:n,replacedItem:Object(O.a)(Object(O.a)({},t),{},{isChecked:!t.isChecked})}:e}),{}),n=t.changedIndex,r=t.replacedItem,c=v(e.requiredExportFields,n,r);return Object(O.a)(Object(O.a)({},e),{},{requiredExportFields:c});case"CHANGE_EXPORT_FORMAT_VARIANTS":var l=e.exportFormatVariants.map((function(e){return e.isChecked=e.type===a.payload,e}));return Object(O.a)(Object(O.a)({},e),{},{exportFormatVariants:l});case"TOGGLE_MAX_PRODUCTS_RADIO_BUTTON":return Object(O.a)(Object(O.a)({},e),{},{needLimitMaxProducts:!e.needLimitMaxProducts});case"TOGGLE_MAX_CATEGORIES_RADIO_BUTTON":return Object(O.a)(Object(O.a)({},e),{},{needLimitMaxCategories:!e.needLimitMaxCategories});case"SET_LIMIT_MAX_CATEGORIES_NUMBER":return Object(O.a)(Object(O.a)({},e),{},{limitMaxCategoriesNumber:a.payload});case"SET_LIMIT_MAX_PRODUCTS_NUMBER":return Object(O.a)(Object(O.a)({},e),{},{limitMaxProductsNumber:a.payload});case"SET_LOADING":return Object(O.a)(Object(O.a)({},e),{},{isLoading:a.payload});case"TOGGLE_CACHED_DATA_RADIO_BUTTON":return Object(O.a)(Object(O.a)({},e),{},{needToGetCachedData:!e.needToGetCachedData});case"SAVE_PRODUCT_ITEMS":return Object(O.a)(Object(O.a)({},e),{},{productItems:a.payload});case"SAVE_TABLE_HEADER_FIELDS":return Object(O.a)(Object(O.a)({},e),{},{tableHeaderFields:a.payload});default:return e}}}),k=t(84),_=t(184),N=t(47),L=(t(108),Object(N.cn)("Page")),F=function(e){var a="Page";return e.className&&(a+=" "+e.className),r.a.createElement("div",{className:a},e.children)},I=t(185),A=t(4),M=t(7),j=t(188),P=t(191),S=t(79),D=t.n(S),R=(t(109),Object(A.a)((function(e){return{root:{backgroundColor:e.palette.grey[100],height:e.spacing(3),color:e.palette.grey[800],fontWeight:e.typography.fontWeightRegular,"&:hover, &:focus":{backgroundColor:e.palette.grey[300]},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(M.b)(e.palette.grey[300],.12)}}}}))(P.a)),G=function(e){return r.a.createElement(j.a,{className:Ge("Breadcrumbs"),separator:"\u203a","aria-label":"breadcrumb"},r.a.createElement(R,{label:"Parsers",icon:r.a.createElement(D.a,{fontSize:"small"})}),r.a.createElement(R,{label:"SberMarket"}),r.a.createElement(R,{label:"Lenta"}))},B=t(82),w=t(187),H=t(165),U=t(166),V=t(167),X=t(168),q=t(192),W=t(186),z=t(118),J=t(174),K=t(193),Q=t(175),$=t(189),Y=t(176),Z=t(177),ee=t(74),ae=t.n(ee),te=t(75),ne=t.n(te),re=t(85),ce=t(190),le=t(76),oe=t.n(le),ie=(t(111),function(e){var a=e.changeCheckboxDefaultExportFields,t=e.requiredExportFields,n=e.expanded,c=e.setExpanded;if(!t||!a)return null;var l=function(e,a,t){var n=[];return e.reduce((function(e,c,l,o){var i=c.name,u=c.key,s=c.isChecked,m=r.a.createElement(V.a,{className:Ge("FormCheckbox"),key:i,control:r.a.createElement(w.a,{checked:s,onChange:t,name:u}),label:i});n.push(m);var d=o.length-1===l;return(n.length===a||d)&&(e.push(n),n=[]),e}),[])}(t,5,(function(e){var t=e.target.name;a(t)}));return r.a.createElement(U.a,{className:Ge("FormAccordion")},r.a.createElement($.a,{expanded:n,onChange:function(){return c(!n)}},r.a.createElement(Y.a,{expandIcon:r.a.createElement(oe.a,null),"aria-label":"Expand","aria-controls":"additional-actions-content",id:"additional-actions-header"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043f\u043e\u043b\u044f"),r.a.createElement(Z.a,null,r.a.createElement(J.a,{className:Ge("FormGroupControlsWrapper")},l.map((function(e,a){return r.a.createElement("div",{key:a,className:Ge("FormGroupControls")},e)}))))))}),ue=function(e){var a=e.exportFormatVariants,t=e.changeExportFormatVariants;if(!a)return null;var n=a.find((function(e){return e.isChecked}));if(!n)return null;return r.a.createElement(U.a,{className:Ge("FormControl")},r.a.createElement(X.a,{id:"export-format-control-label"},"\u0424\u043e\u0440\u043c\u0430\u0442 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),r.a.createElement(W.a,{className:Ge("ExportFormatSelect")+" "+Ge("FormFixedControl"),labelId:"export-format-control-label",id:"export-format-control-label",value:n.type,onChange:function(e){t(e.target.value)}},a.map((function(e){return r.a.createElement(q.a,{key:e.type,value:e.type},e.text)}))))},se=function(e){var a=e.needLimitMaxProducts,t=e.toggleMaxProductsRadioButton,n=e.limitMaxProductsNumber,c=e.setLimitMaxProductsNumber;return r.a.createElement(U.a,{className:Ge("FormControl")},r.a.createElement(z.a,{className:Ge("FormLabel")},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"),r.a.createElement(J.a,null,r.a.createElement(V.a,{control:r.a.createElement(Q.a,{checked:a,onChange:function(){return t()},name:"max-products-form-control",color:"primary"}),label:""})),a&&r.a.createElement(K.a,{className:Ge("FormFixedControl"),id:"max-products-limit",label:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432",type:"number",onChange:function(e){c(Number(e.target.value))},value:n,InputLabelProps:{shrink:!0}}))},me=r.a.memo((function(e){var a=e.needToGetCachedData,t=e.toggleCachedDataRadioButton,n="\u0415\u0441\u043b\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0430 \u0440\u0430\u043d\u0435\u0435 - \u0432\u0437\u044f\u0442\u044c \u0435\u0451. \u042d\u0442\u043e \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440.";return r.a.createElement(U.a,{className:Ge("FormControl")},r.a.createElement(z.a,{className:Ge("FormLabel")},"\u0412\u0437\u044f\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438\u0437 \u043a\u044d\u0448\u0430",r.a.createElement(ce.a,{title:n},r.a.createElement(re.a,{className:Ge("FormQuestionTooltipIconButton"),size:"small","aria-label":n},r.a.createElement(ne.a,{className:Ge("FormQuestionTooltipIcon")})))),r.a.createElement(J.a,null,r.a.createElement(V.a,{control:r.a.createElement(Q.a,{checked:a,onChange:function(){return t()},name:"max-products-form-control",color:"primary"}),label:""})))})),de=function(e){var a=e.setLoading,t=e.saveProductItems,n=e.saveTableHeaderFields,r=("localhost"===window.location.hostname?"http://localhost:3001":"https://tools-parser-api-backend.herokuapp.com")+"/api/parser/sberlenta",c=function(e){var a=e.exportFormatVariants,t=e.requiredExportFields,n=e.limitMaxProductsNumber,r=e.needLimitMaxProducts,c=e.needToGetCachedData;return{type:"sberlenta",options:{exportFormat:a.reduce((function(e,a){return a.isChecked?a.type:e}),""),fields:t.reduce((function(e,a){return a.isChecked&&e.push(a.key),e}),[]),maxProducts:r?n:null,cached:c}}}(e);fetch(r,{method:"POST",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){a(!1),console.log(e),e.success&&(t(e.productItems),n(e.headerFields),localStorage.setItem("results",JSON.stringify(e)))})).catch((function(e){console.log("error",e),a(!1)}))},Ee=function(e){var a=e.isLoading,t=e.setLoading;return r.a.createElement(H.a,{className:Ge("FormParseButton"),disabled:a,onClick:function(){t(!0),de(e)},variant:"contained",color:"primary",endIcon:r.a.createElement(ae.a,null)},"\u0421\u0442\u0430\u0440\u0442")},pe=function(e){var a=Object(n.useState)(!0),t=Object(B.a)(a,2),c=t[0],l=t[1];return r.a.createElement("form",{className:Ge("Form"),noValidate:!0,autoComplete:"off"},r.a.createElement(ie,Object.assign({},e,{expanded:c,setExpanded:l})),r.a.createElement(ue,e),r.a.createElement(se,e),r.a.createElement(me,e),r.a.createElement(Ee,e))},fe=t(182),be=t(180),he=t(181),ge=t(178),Ce=t(179),Oe=t(173),xe=(t(112),function(e){var a=e.tableHeaderFields;return a?r.a.createElement(ge.a,null,r.a.createElement(Ce.a,null,r.a.createElement(_e,null,"#"),a.map((function(e){return r.a.createElement(_e,{key:e},e)})))):null}),ve=function(e){var a=e.productItems;return a?r.a.createElement(be.a,null,a.map((function(e,a){return r.a.createElement(Re,{key:a,products:e,rowIndex:a})}))):null},ye=function(e){var a=e.productItems,t=r.a.useRef(null);if(r.a.useEffect((function(){a&&function(e){var a=e.current;a&&a.offsetTop&&window.scrollTo({top:a.offsetTop,behavior:"smooth"})}(t)}),[a]),!a||!a.length)return null;var n=document.documentElement.clientHeight-30+"px";return r.a.createElement(he.a,{ref:t,className:Ge("TableContainer"),component:Oe.a,style:{maxHeight:n}},r.a.createElement(fe.a,{className:Ge("Table"),stickyHeader:!0,size:"small","aria-label":"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430"},r.a.createElement(xe,e),r.a.createElement(ve,e)))},Te=t(183),ke=t(81),_e=(t(113),Object(A.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(Te.a)),Ne=function(e){var a=e.value,t=e.url;return t?r.a.createElement(_e,null,r.a.createElement(_.a,{underline:"none",className:Ge("CellLink"),href:t,target:"_blank",title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435"},a)):r.a.createElement(_e,null,a)},Le=function(e){var a=e.value;if(!a)return r.a.createElement(Ae,null);var t=a.slice(0,50);return r.a.createElement(_e,null,t,"\u2026")},Fe=function(e){var a=e.value;return a?r.a.createElement(_e,null,r.a.createElement(ke.LazyLoadImage,{className:Ge("CellImage"),src:a})):r.a.createElement(Ae,null)},Ie=function(e){var a=e.value;if(!a)return r.a.createElement(Ae,null);var t=a.join(" / ");return r.a.createElement(_e,null,t)},Ae=function(){return r.a.createElement(_e,null,"-")},Me=function(e){var a=e.value;return a&&a.default?a.default&&a.original?r.a.createElement(_e,null,r.a.createElement("span",{className:Ge("CellPriceOriginal")},a.original),r.a.createElement("span",{className:Ge("CellPriceDefault",{"line-through":!0})},a.default)):r.a.createElement(_e,{className:Ge("CellPriceDefault")},a.default):r.a.createElement(Ae,null)},je=function(e){var a=e.value;if(!a)return r.a.createElement(Ae,null);var t=a.reduce((function(e,a){return a.name&&a.value&&(e+=a.name+": "+a.value+"\n"),e}),"");return r.a.createElement(_e,{className:Ge("CellWhiteSpace")},t)},Pe=function(e){var a=e.value;if(!a)return r.a.createElement(Ae,null);var t=a.reduce((function(e,a){return a.name&&a.value&&(e+=a.name+": "+a.value+"\n"),e}),"");return r.a.createElement(_e,{className:Ge("CellWhiteSpace")},t)},Se=function(e){var a=e.value;return a?r.a.createElement(_e,null,a):r.a.createElement(Ae,null)},De=(t(114),Object(A.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(Ce.a)),Re=function(e){var a=e.products,t=e.rowIndex,n=a.find((function(e){return"link"===e.type})),c=n?n.value:null,l=a.map((function(e){var a=function(e,a){switch(e.type){case"name":return r.a.createElement(Ne,Object.assign({url:a},e));case"description":return r.a.createElement(Le,e);case"image":return r.a.createElement(Fe,e);case"breadcrumbs":return r.a.createElement(Ie,e);case"price":return r.a.createElement(Me,e);case"nutrition":return r.a.createElement(je,e);case"properties":return r.a.createElement(Pe,e);case"stock":case"weight":return r.a.createElement(Se,e);case"link":return null;default:return r.a.createElement(Ae,null)}}(e,c);return r.a.createElement(r.a.Fragment,{key:e.type+t},a)}));return r.a.createElement(De,null,r.a.createElement(_e,null,t+1),l)},Ge=(t(115),Object(N.cn)("SberLenta")),Be={changeCheckboxDefaultExportFields:s,changeExportFormatVariants:m,toggleMaxCategoriesRadioButton:d,toggleMaxProductsRadioButton:E,setLimitMaxCategoriesNumber:p,setLimitMaxProductsNumber:f,setLoading:b,toggleCachedDataRadioButton:h,saveProductItems:g,saveTableHeaderFields:C},we=Object(o.b)((function(e){return{isLoading:e.sberLenta.isLoading,needToGetCachedData:e.sberLenta.needToGetCachedData,needLimitMaxCategories:e.sberLenta.needLimitMaxCategories,needLimitMaxProducts:e.sberLenta.needLimitMaxProducts,requiredExportFields:e.sberLenta.requiredExportFields,exportFormatVariants:e.sberLenta.exportFormatVariants,limitMaxCategoriesNumber:e.sberLenta.limitMaxCategoriesNumber,limitMaxProductsNumber:e.sberLenta.limitMaxProductsNumber,productItems:e.sberLenta.productItems,tableHeaderFields:e.sberLenta.tableHeaderFields}}),Be)((function(e){var a=e.isLoading;return r.a.createElement(F,{className:Ge()},r.a.createElement(G,e),r.a.createElement(k.a,{paragraph:!0},'\u041f\u0430\u0440\u0441\u0435\u0440 \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 "\u041b\u0435\u043d\u0442\u0430" \u0421\u0431\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442 ',r.a.createElement(_.a,{className:Ge("SourceLink"),target:"_blank",href:"https://sbermarket.ru/lenta",title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435"},"(sbermarket.ru/lenta)")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u043e\u0432\u0430\u0440\u0430\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435."),r.a.createElement(k.a,{className:L("TextOption")},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."),r.a.createElement(pe,e),a&&r.a.createElement(I.a,{className:Ge("Progress")}),r.a.createElement(ye,e))})),He=(t(116),Object(u.d)(T,Object(u.a)(i.a))),Ue=function(){return r.a.createElement(o.a,{store:He},r.a.createElement("div",{className:"App"},r.a.createElement(we,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,a,t){e.exports=t(117)}},[[97,1,2]]]);
//# sourceMappingURL=main.8f585e97.chunk.js.map