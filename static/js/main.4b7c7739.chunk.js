(this["webpackJsonptools-parser-api"]=this["webpackJsonptools-parser-api"]||[]).push([[0],{103:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(10),o=t.n(l),c=(t(103),t(58)),i=t(78),u=t(27),m=function(e){return{type:"CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS",payload:e}},s=function(e){return{type:"CHANGE_EXPORT_FORMAT_VARIANTS",payload:e}},d=function(){return{type:"TOGGLE_MAX_CATEGORIES_RADIO_BUTTON"}},E=function(){return{type:"TOGGLE_MAX_PRODUCTS_RADIO_BUTTON"}},p=function(e){return{type:"SET_LIMIT_MAX_CATEGORIES_NUMBER",payload:e}},f=function(e){return{type:"SET_LIMIT_MAX_PRODUCTS_NUMBER",payload:e}},b=function(e){return{type:"SET_LOADING",payload:e}},h=function(){return{type:"TOGGLE_CACHED_DATA_RADIO_BUTTON"}},g=function(e){return{type:"SAVE_PRODUCT_ITEMS",payload:e}},C=function(e){return{type:"SAVE_TABLE_HEADER_FIELDS",payload:e}},x=t(11),v=t(62),O=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2?arguments[2]:void 0;return[].concat(Object(v.a)(e.slice(0,a)),[t],Object(v.a)(e.slice(a+1)))},y={isLoading:!1,requiredExportFields:[{isChecked:!0,name:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",key:"image"},{isChecked:!0,name:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",key:"name"},{isChecked:!0,name:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",key:"breadcrumbs"},{isChecked:!0,name:"\u0426\u0435\u043d\u0430",key:"price"},{isChecked:!0,name:"\u041c\u0430\u0441\u0441\u0430",key:"weight"},{isChecked:!0,name:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",key:"stock"},{isChecked:!1,name:"\u0411\u0416\u0423",key:"nutrition"},{isChecked:!0,name:"\u0421\u0441\u044b\u043b\u043a\u0430",key:"link"},{isChecked:!1,name:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",key:"description"},{isChecked:!1,name:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e",key:"properties"}],exportFormatVariants:[{type:"table",text:"\u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435",isChecked:!0},{type:"file",text:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432 \u0444\u0430\u0439\u043b",isChecked:!1}],needLimitMaxCategories:!1,needLimitMaxProducts:!0,limitMaxCategoriesNumber:10,limitMaxProductsNumber:5,needToGetCachedData:!0,productItems:null,tableHeaderFields:null},k=Object(u.c)({sberLenta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(console.log("sberLentaReducer action",a,"state",e),a.type){case"CHANGE_CHECKBOX_DEFAULT_EXPORT_FIELDS":var t=e.requiredExportFields.reduce((function(e,t,r){return t.key===a.payload?{changedIndex:r,replacedItem:Object(x.a)(Object(x.a)({},t),{},{isChecked:!t.isChecked})}:e}),{}),r=t.changedIndex,n=t.replacedItem,l=O(e.requiredExportFields,r,n);return Object(x.a)(Object(x.a)({},e),{},{requiredExportFields:l});case"CHANGE_EXPORT_FORMAT_VARIANTS":var o=e.exportFormatVariants.map((function(e){return e.isChecked=e.type===a.payload,e}));return Object(x.a)(Object(x.a)({},e),{},{exportFormatVariants:o});case"TOGGLE_MAX_PRODUCTS_RADIO_BUTTON":return Object(x.a)(Object(x.a)({},e),{},{needLimitMaxProducts:!e.needLimitMaxProducts});case"TOGGLE_MAX_CATEGORIES_RADIO_BUTTON":return Object(x.a)(Object(x.a)({},e),{},{needLimitMaxCategories:!e.needLimitMaxCategories});case"SET_LIMIT_MAX_CATEGORIES_NUMBER":return Object(x.a)(Object(x.a)({},e),{},{limitMaxCategoriesNumber:a.payload});case"SET_LIMIT_MAX_PRODUCTS_NUMBER":return Object(x.a)(Object(x.a)({},e),{},{limitMaxProductsNumber:a.payload});case"SET_LOADING":return Object(x.a)(Object(x.a)({},e),{},{isLoading:a.payload});case"TOGGLE_CACHED_DATA_RADIO_BUTTON":return Object(x.a)(Object(x.a)({},e),{},{needToGetCachedData:!e.needToGetCachedData});case"SAVE_PRODUCT_ITEMS":return Object(x.a)(Object(x.a)({},e),{},{productItems:a.payload});case"SAVE_TABLE_HEADER_FIELDS":return Object(x.a)(Object(x.a)({},e),{},{tableHeaderFields:a.payload});default:return e}}}),N=t(85),L=t(185),F=t(47),T=(t(109),Object(F.cn)("Page")),_=function(e){var a="Page";return e.className&&(a+=" "+e.className),n.a.createElement("div",{className:a},e.children)},M=t(186),I=t(4),A=t(7),P=t(189),j=t(192),D=t(79),S=t.n(D),R=(t(110),Object(I.a)((function(e){return{root:{backgroundColor:e.palette.grey[100],height:e.spacing(3),color:e.palette.grey[800],fontWeight:e.typography.fontWeightRegular,"&:hover, &:focus":{backgroundColor:e.palette.grey[300]},"&:active":{boxShadow:e.shadows[1],backgroundColor:Object(A.b)(e.palette.grey[300],.12)}}}}))(j.a)),G=n.a.memo((function(){return n.a.createElement(P.a,{className:Ue("Breadcrumbs"),separator:"\u203a","aria-label":"breadcrumb"},n.a.createElement(R,{label:"Parsers",icon:n.a.createElement(S.a,{fontSize:"small"})}),n.a.createElement(R,{label:"SberMarket"}),n.a.createElement(R,{label:"Lenta"}))})),H=t(83),B=t(188),w=t(166),V=t(167),U=t(168),X=t(169),q=t(193),W=t(187),z=t(119),J=t(175),K=t(194),Q=t(176),$=t(190),Y=t(177),Z=t(178),ee=t(74),ae=t.n(ee),te=t(75),re=t.n(te),ne=t(86),le=t(191),oe=t(76),ce=t.n(oe),ie=(t(112),n.a.memo((function(){return n.a.createElement(Y.a,{expandIcon:n.a.createElement(ce.a,null),"aria-label":"Expand","aria-controls":"additional-actions-content",id:"additional-actions-header"},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043f\u043e\u043b\u044f")}))),ue=n.a.memo((function(e){var a=e.changeCheckboxDefaultExportFields,t=e.requiredExportFields,r=e.expanded,l=e.setExpanded;if(!t||!a)return null;var o=function(e,a,t){var r=[];return e.reduce((function(e,l,o,c){var i=l.name,u=l.key,m=l.isChecked,s=n.a.createElement(U.a,{className:Ue("FormCheckbox"),key:i,control:n.a.createElement(B.a,{checked:m,onChange:t,name:u}),label:i});r.push(s);var d=c.length-1===o;return(r.length===a||d)&&(e.push(r),r=[]),e}),[])}(t,5,(function(e){var t=e.target.name;a(t)}));return n.a.createElement(V.a,{className:Ue("FormAccordion")},n.a.createElement($.a,{expanded:r,onChange:function(){return l(!r)}},n.a.createElement(ie,null),n.a.createElement(Z.a,null,n.a.createElement(J.a,{className:Ue("FormGroupControlsWrapper")},o.map((function(e,a){return n.a.createElement("div",{key:a,className:Ue("FormGroupControls")},e)}))))))}),(function(e,a){for(var t=0,r=a.requiredExportFields.length;t<r;t++)if(a.requiredExportFields[t].isChecked!==e.requiredExportFields[t].isChecked)return!1;return e.expanded===a.expanded})),me=n.a.memo((function(e){var a=e.exportFormatVariants,t=e.changeExportFormatVariants;if(!a)return null;var r=a.find((function(e){return e.isChecked}));if(!r)return null;return n.a.createElement(V.a,{className:Ue("FormControl")},n.a.createElement(X.a,{id:"export-format-control-label"},"\u0424\u043e\u0440\u043c\u0430\u0442 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"),n.a.createElement(W.a,{className:Ue("ExportFormatSelect")+" "+Ue("FormFixedControl"),labelId:"export-format-control-label",id:"export-format-control-label",value:r.type,onChange:function(e){t(e.target.value)}},a.map((function(e){return n.a.createElement(q.a,{key:e.type,value:e.type},e.text)}))))}),(function(e,a){for(var t=0,r=a.exportFormatVariants.length;t<r;t++)if(a.exportFormatVariants[t].isChecked!==e.exportFormatVariants[t].isChecked)return!1;return!0})),se=(n.a.memo((function(e){var a=e.needLimitMaxCategories,t=e.toggleMaxCategoriesRadioButton,r=e.limitMaxCategoriesNumber,l=e.setLimitMaxCategoriesNumber;return n.a.createElement(V.a,{className:Ue("FormControl")},n.a.createElement(z.a,{className:Ue("FormLabel")},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439"),n.a.createElement(J.a,null,n.a.createElement(U.a,{control:n.a.createElement(Q.a,{checked:a,onChange:function(){return t()},name:"max-categories-form-control",color:"primary"}),label:""})),a&&n.a.createElement(K.a,{className:Ue("FormFixedControl"),id:"max-results-limit",label:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439",type:"number",onChange:function(e){l(Number(e.target.value))},value:r,InputLabelProps:{shrink:!0}}))}),(function(e,a){return a.needLimitMaxCategories===e.needLimitMaxCategories&&a.limitMaxCategoriesNumber===e.limitMaxCategoriesNumber})),n.a.memo((function(e){var a=e.needLimitMaxProducts,t=e.toggleMaxProductsRadioButton;return n.a.createElement(J.a,null,n.a.createElement(U.a,{control:n.a.createElement(Q.a,{checked:a,onChange:function(){return t()},name:"max-products-form-control",color:"primary"}),label:""}))}),(function(e,a){return e.needLimitMaxProducts===a.needLimitMaxProducts}))),de=n.a.memo((function(e){var a=e.limitMaxProductsNumber,t=e.setLimitMaxProductsNumber;if(!e.needLimitMaxProducts)return null;return n.a.createElement(K.a,{className:Ue("FormFixedControl"),id:"max-products-limit",label:"\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432",type:"number",onChange:function(e){t(Number(e.target.value))},value:a,InputLabelProps:{shrink:!0}})}),(function(e,a){return e.limitMaxProductsNumber===a.limitMaxProductsNumber&&e.needLimitMaxProducts===a.needLimitMaxProducts})),Ee=n.a.memo((function(e){return n.a.createElement(V.a,{className:Ue("FormControl")},n.a.createElement(z.a,{className:Ue("FormLabel")},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"),n.a.createElement(se,e),n.a.createElement(de,e))})),pe=n.a.memo((function(e){var a=e.needToGetCachedData,t=e.toggleCachedDataRadioButton,r="\u0415\u0441\u043b\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0431\u044b\u043b\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u0430 \u0440\u0430\u043d\u0435\u0435 - \u0432\u0437\u044f\u0442\u044c \u0435\u0451. \u042d\u0442\u043e \u0443\u0441\u043a\u043e\u0440\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440.";return n.a.createElement(V.a,{className:Ue("FormControl")},n.a.createElement(z.a,{className:Ue("FormLabel")},"\u0412\u0437\u044f\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0438\u0437 \u043a\u044d\u0448\u0430",n.a.createElement(le.a,{title:r},n.a.createElement(ne.a,{className:Ue("FormQuestionTooltipIconButton"),size:"small","aria-label":r},n.a.createElement(re.a,{className:Ue("FormQuestionTooltipIcon")})))),n.a.createElement(J.a,null,n.a.createElement(U.a,{control:n.a.createElement(Q.a,{checked:a,onChange:function(){return t()},name:"max-products-form-control",color:"primary"}),label:""})))}),(function(e,a){return e.needToGetCachedData===a.needToGetCachedData})),fe=function(e){var a=e.setLoading,t=e.saveProductItems,r=e.saveTableHeaderFields,n=("localhost"===window.location.hostname?"http://localhost:3001":"https://tools-parser-api-backend.herokuapp.com")+"/api/parser/sberlenta",l=function(e){var a=e.exportFormatVariants,t=e.requiredExportFields,r=e.limitMaxProductsNumber,n=e.needLimitMaxProducts,l=e.needToGetCachedData;return{type:"sberlenta",options:{exportFormat:a.reduce((function(e,a){return a.isChecked?a.type:e}),""),fields:t.reduce((function(e,a){return a.isChecked&&e.push(a.key),e}),[]),maxProducts:n?r:null,cached:l}}}(e);fetch(n,{method:"POST",mode:"cors",headers:{"Access-Control-Allow-Origin":"*",Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(e){return e.json()})).then((function(e){a(!1),console.log(e),e.success&&(t(e.productItems),r(e.headerFields),localStorage.setItem("results",JSON.stringify(e)))})).catch((function(e){console.log("error",e),a(!1)}))},be=n.a.memo((function(e){var a=e.isLoading,t=e.setLoading;return n.a.createElement(w.a,{className:Ue("FormParseButton"),disabled:a,onClick:function(){t(!0),fe(e)},variant:"contained",color:"primary",endIcon:n.a.createElement(ae.a,null)},"\u0421\u0442\u0430\u0440\u0442")})),he=n.a.memo((function(e){var a=Object(r.useState)(!0),t=Object(H.a)(a,2),l=t[0],o=t[1];return n.a.createElement("form",{className:Ue("Form"),noValidate:!0,autoComplete:"off"},n.a.createElement(ue,Object.assign({},e,{expanded:l,setExpanded:o})),n.a.createElement(me,e),n.a.createElement(Ee,e),n.a.createElement(pe,e),n.a.createElement(be,e))})),ge=t(81),Ce=t.n(ge),xe=t(183),ve=t(181),Oe=t(182),ye=t(179),ke=t(180),Ne=t(174),Le=(t(113),n.a.memo((function(e){var a=e.tableHeaderFields;return a?n.a.createElement(ye.a,null,n.a.createElement(ke.a,null,n.a.createElement(Ie,null,"#"),a.map((function(e){return n.a.createElement(Ie,{key:e},e)})))):null}),(function(e,a){var t,r;if((null===(t=e.tableHeaderFields)||void 0===t?void 0:t.length)!==(null===(r=a.tableHeaderFields)||void 0===r?void 0:r.length))return!1;if(!a.tableHeaderFields||!e.tableHeaderFields)return!1;for(var n=0,l=null===(o=a.tableHeaderFields)||void 0===o?void 0:o.length;n<l;n++){var o;if(a.tableHeaderFields[n]!==e.tableHeaderFields[n])return!1}return!0}))),Fe=n.a.memo((function(e){var a=e.productItems;return a?n.a.createElement(ve.a,null,a.map((function(e,a){return n.a.createElement(Ve,{key:a,products:e,rowIndex:a})}))):null})),Te=n.a.memo((function(e){var a=e.productItems;Ce.a.polyfill();var t=n.a.useRef(null);if(n.a.useEffect((function(){a&&function(e){var a=e.current;a&&a.offsetTop&&a.scrollIntoView({behavior:"smooth"})}(t)}),[a]),!a||!a.length)return null;var r=document.documentElement.clientHeight-30+"px";return n.a.createElement(Oe.a,{ref:t,className:Ue("TableContainer"),component:Ne.a,style:{maxHeight:r}},n.a.createElement(xe.a,{className:Ue("Table"),stickyHeader:!0,size:"small","aria-label":"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430"},n.a.createElement(Le,e),n.a.createElement(Fe,e)))})),_e=t(184),Me=t(82),Ie=(t(114),Object(I.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(_e.a)),Ae=function(e){var a=e.value,t=e.url;return t?n.a.createElement(Ie,null,n.a.createElement(L.a,{underline:"none",className:Ue("CellLink"),href:t,target:"_blank",title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u043c \u043e\u043a\u043d\u0435"},a)):n.a.createElement(Ie,null,a)},Pe=function(e){var a=e.value;if(!a)return n.a.createElement(Se,null);var t=a.slice(0,50);return n.a.createElement(Ie,null,t,"\u2026")},je=function(e){var a=e.value;return a?n.a.createElement(Ie,null,n.a.createElement(Me.LazyLoadImage,{className:Ue("CellImage"),src:a})):n.a.createElement(Se,null)},De=function(e){var a=e.value;if(!a)return n.a.createElement(Se,null);var t=a.join(" / ");return n.a.createElement(Ie,null,t)},Se=n.a.memo((function(){return n.a.createElement(Ie,null,"-")})),Re=function(e){var a=e.value;return a&&a.default?a.default&&a.original?n.a.createElement(Ie,null,n.a.createElement("span",{className:Ue("CellPriceOriginal")},a.original),n.a.createElement("span",{className:Ue("CellPriceDefault",{"line-through":!0})},a.default)):n.a.createElement(Ie,{className:Ue("CellPriceDefault")},a.default):n.a.createElement(Se,null)},Ge=function(e){var a=e.value;if(!a)return n.a.createElement(Se,null);var t=a.reduce((function(e,a){return a.name&&a.value&&(e+=a.name+": "+a.value+"\n"),e}),"");return n.a.createElement(Ie,{className:Ue("CellWhiteSpace")},t)},He=function(e){var a=e.value;if(!a)return n.a.createElement(Se,null);var t=a.reduce((function(e,a){return a.name&&a.value&&(e+=a.name+": "+a.value+"\n"),e}),"");return n.a.createElement(Ie,{className:Ue("CellWhiteSpace")},t)},Be=n.a.memo((function(e){var a=e.value;return a?n.a.createElement(Ie,null,a):n.a.createElement(Se,null)})),we=(t(115),Object(I.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(ke.a)),Ve=n.a.memo((function(e){var a=e.products,t=e.rowIndex,r=a.find((function(e){return"link"===e.type})),l=r?r.value:null,o=a.map((function(e){var a=function(e,a){switch(e.type){case"name":return n.a.createElement(Ae,Object.assign({url:a},e));case"description":return n.a.createElement(Pe,e);case"image":return n.a.createElement(je,e);case"breadcrumbs":return n.a.createElement(De,e);case"price":return n.a.createElement(Re,e);case"nutrition":return n.a.createElement(Ge,e);case"properties":return n.a.createElement(He,e);case"stock":case"weight":return n.a.createElement(Be,e);case"link":return null;default:return n.a.createElement(Se,null)}}(e,l);return n.a.createElement(n.a.Fragment,{key:e.type+t},a)}));return n.a.createElement(we,null,n.a.createElement(Ie,null,t+1),o)})),Ue=(t(116),Object(F.cn)("SberLenta")),Xe=n.a.memo((function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(N.a,{paragraph:!0},'\u041f\u0430\u0440\u0441\u0435\u0440 \u0430\u0441\u0441\u043e\u0440\u0442\u0438\u043c\u0435\u043d\u0442\u0430 "\u041b\u0435\u043d\u0442\u0430" \u0421\u0431\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442 ',n.a.createElement(L.a,{className:Ue("SourceLink"),target:"_blank",href:"https://sbermarket.ru/lenta",title:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435"},"(sbermarket.ru/lenta)")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u043e\u0432\u0430\u0440\u0430\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435."),n.a.createElement(N.a,{className:T("TextOption")},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b."))})),qe={changeCheckboxDefaultExportFields:m,changeExportFormatVariants:s,toggleMaxCategoriesRadioButton:d,toggleMaxProductsRadioButton:E,setLimitMaxCategoriesNumber:p,setLimitMaxProductsNumber:f,setLoading:b,toggleCachedDataRadioButton:h,saveProductItems:g,saveTableHeaderFields:C},We=Object(c.b)((function(e){return{isLoading:e.sberLenta.isLoading,needToGetCachedData:e.sberLenta.needToGetCachedData,needLimitMaxCategories:e.sberLenta.needLimitMaxCategories,needLimitMaxProducts:e.sberLenta.needLimitMaxProducts,requiredExportFields:e.sberLenta.requiredExportFields,exportFormatVariants:e.sberLenta.exportFormatVariants,limitMaxCategoriesNumber:e.sberLenta.limitMaxCategoriesNumber,limitMaxProductsNumber:e.sberLenta.limitMaxProductsNumber,productItems:e.sberLenta.productItems,tableHeaderFields:e.sberLenta.tableHeaderFields}}),qe)((function(e){var a=e.isLoading;return n.a.createElement(_,{className:Ue()},n.a.createElement(G,null),n.a.createElement(Xe,null),n.a.createElement(he,e),a&&n.a.createElement(M.a,{className:Ue("Progress")}),n.a.createElement(Te,e))})),ze=(t(117),Object(u.d)(k,Object(u.a)(i.a))),Je=function(){return n.a.createElement(c.a,{store:ze},n.a.createElement("div",{className:"App"},n.a.createElement(We,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.Fragment,null,n.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,a,t){e.exports=t(118)}},[[98,1,2]]]);
//# sourceMappingURL=main.4b7c7739.chunk.js.map