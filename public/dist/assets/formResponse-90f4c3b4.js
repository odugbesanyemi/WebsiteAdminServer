import{o as p,c as u,a as n,l as K,A as $,h as R,t as _,_ as Y,D as Q,b as D,H as P,r as w,E,G as Z,F,i as B,f as x,J as ee,n as W,e as N,L as te,w as H,N as X}from"./index-d2762744.js";import{m as se}from"./send-message-f0249515.js";import{p as oe}from"./pagination-172d70a3.js";import{r as ne}from"./MagnifyingGlassIcon-c56e5513.js";import{r as re}from"./XMarkIcon-360d76fa.js";import{r as le}from"./Bars3Icon-a1f7020e.js";import"./loading-58ec714e.js";import"./Editor-8afb130e.js";import"./ChevronLeftIcon-e0555cea.js";function ie(e,t){return p(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})])}function ae(e,t){return p(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})])}function ce(e,t){return p(),u("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"})])}var de=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function pe(e,t){return t={exports:{}},e(t,t.exports),t.exports}var ue=pe(function(e,t){(function(o,r){e.exports=r()})(de,function(){return function o(r,s,d){var i=window,g="application/octet-stream",f=d||g,a=r,b=!s&&!d&&a,m=document.createElement("a"),S=function(h){return String(h)},y=i.Blob||i.MozBlob||i.WebKitBlob||S,l=s||"download",c,v;if(y=y.call?y.bind(i):Blob,String(this)==="true"&&(a=[a,f],f=a[0],a=a[1]),b&&b.length<2048&&(l=b.split("/").pop().split("?")[0],m.href=b,m.href.indexOf(b)!==-1)){var C=new XMLHttpRequest;return C.open("GET",b,!0),C.responseType="blob",C.onload=function(h){o(h.target.response,l,g)},setTimeout(function(){C.send()},0),C}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(a))if(a.length>1024*1024*1.999&&y!==S)a=U(a),f=a.type||g;else return navigator.msSaveBlob?navigator.msSaveBlob(U(a),l):T(a);else if(/([\x80-\xff])/.test(a)){var M=0,j=new Uint8Array(a.length),z=j.length;for(M;M<z;++M)j[M]=a.charCodeAt(M);a=new y([j],{type:f})}c=a instanceof y?a:new y([a],{type:f});function U(h){var k=h.split(/[:;,]/),V=k[1],J=k[2]=="base64"?atob:decodeURIComponent,O=J(k.pop()),q=O.length,A=0,G=new Uint8Array(q);for(A;A<q;++A)G[A]=O.charCodeAt(A);return new y([G],{type:V})}function T(h,k){if("download"in m)return m.href=h,m.setAttribute("download",l),m.className="download-js-link",m.innerHTML="downloading...",m.style.display="none",document.body.appendChild(m),setTimeout(function(){m.click(),document.body.removeChild(m),k===!0&&setTimeout(function(){i.URL.revokeObjectURL(m.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(h)&&(h="data:"+h.replace(/^data:([\w\/\-\+]+)/,g)),window.open(h)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=h),!0;var V=document.createElement("iframe");document.body.appendChild(V),!k&&/^data:/.test(h)&&(h="data:"+h.replace(/^data:([\w\/\-\+]+)/,g)),V.src=h,setTimeout(function(){document.body.removeChild(V)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(c,l);if(i.URL)T(i.URL.createObjectURL(c),!0);else{if(typeof c=="string"||c.constructor===S)try{return T("data:"+f+";base64,"+i.btoa(c))}catch{return T("data:"+f+","+encodeURIComponent(c))}v=new FileReader,v.onload=function(h){T(this.result)},v.readAsDataURL(c)}return!0}})}),L=K({props:{type:{type:String,default:"xls"},data:{type:Array,required:!1,default:null},fields:{type:Object,default:()=>null},exportFields:{type:Object,default:()=>null},defaultValue:{type:String,required:!1,default:""},header:{default:null},footer:{default:null},name:{type:String,default:"data.xls"},fetch:{type:Function},meta:{type:Array,default:()=>[]},worksheet:{type:String,default:"Sheet1"},beforeGenerate:{type:Function},beforeFinish:{type:Function},escapeCsv:{type:Boolean,default:!0},stringifyLongNum:{type:Boolean,default:!1}},computed:{idName(){var e=new Date().getTime();return"export_"+e},downloadFields(){if(this.fields)return this.fields;if(this.exportFields)return this.exportFields}},methods:{async generate(){typeof this.beforeGenerate=="function"&&await this.beforeGenerate();let e=this.data;if((typeof this.fetch=="function"||!e)&&(e=await this.fetch()),!e||!e.length)return;let t=this.getProcessedJson(e,this.downloadFields);return this.type==="html"?this.export(this.jsonToXLS(t),this.name.replace(".xls",".html"),"text/html"):this.type==="csv"?this.export(this.jsonToCSV(t),this.name.replace(".xls",".csv"),"application/csv"):this.export(this.jsonToXLS(t),this.name,"application/vnd.ms-excel")},export:async function(e,t,o){let r=this.base64ToBlob(e,o);typeof this.beforeFinish=="function"&&await this.beforeFinish(),ue(r,t,o)},jsonToXLS(e){let t='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta name=ProgId content=Excel.Sheet> <meta name=Generator content="Microsoft Excel 11"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>br {mso-data-placement: same-cell;}</style></head><body><table>${table}</table></body></html>',o="<thead>";const r=Object.keys(e[0]).length;let s=this;const d=this.header||this.$attrs.title;d&&(o+=this.parseExtraData(d,'<tr><th colspan="'+r+'">${data}</th></tr>')),o+="<tr>";for(let i in e[0])o+="<th>"+i+"</th>";return o+="</tr>",o+="</thead>",o+="<tbody>",e.map(function(i,g){o+="<tr>";for(let f in i)o+="<td>"+s.preprocessLongNum(s.valueReformattedForMultilines(i[f]))+"</td>";o+="</tr>"}),o+="</tbody>",this.footer!=null&&(o+="<tfoot>",o+=this.parseExtraData(this.footer,'<tr><td colspan="'+r+'">${data}</td></tr>'),o+="</tfoot>"),t.replace("${table}",o).replace("${worksheet}",this.worksheet)},jsonToCSV(e){let t=this;var o=[];const r=this.header||this.$attrs.title;r&&o.push(this.parseExtraData(r,"${data}\r\n"));for(let s in e[0])o.push(s),o.push(",");return o.pop(),o.push(`\r
`),e.map(function(s){for(let d in s){let i=s[d]+"";t.escapeCsv&&(i='="'+i+'"',i.match(/[,"\n]/)&&(i='"'+i.replace(/\"/g,'""')+'"')),o.push(i),o.push(",")}o.pop(),o.push(`\r
`)}),this.footer!=null&&o.push(this.parseExtraData(this.footer,"${data}\r\n")),o.join("")},getProcessedJson(e,t){let o=this.getKeys(e,t),r=[],s=this;return e.map(function(d,i){let g={};for(let f in o){let a=o[f];g[f]=s.getValue(a,d)}r.push(g)}),r},getKeys(e,t){if(t)return t;let o={};for(let r in e[0])o[r]=r;return o},parseExtraData(e,t){let o="";if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&(o+=t.replace("${data}",e[r]));else o+=t.replace("${data}",e);return o},getValue(e,t){const o=typeof e!="object"?e:e.field;let r=typeof o!="string"?[]:o.split("."),s=this.defaultValue;return o?r.length>1?s=this.getValueFromNestedItem(t,r):s=this.parseValue(t[o]):s=t,e.hasOwnProperty("callback")&&(s=this.getValueFromCallback(s,e.callback)),s},valueReformattedForMultilines(e){return typeof e=="string"?e.replace(/\n/gi,"<br/>"):e},preprocessLongNum(e){if(this.stringifyLongNum){if(String(e).startsWith("0x"))return e;if(!isNaN(e)&&e!=""&&(e>99999999999||e<1e-13))return'="'+e+'"'}return e},getValueFromNestedItem(e,t){let o=e;for(let r of t)o&&(o=o[r]);return this.parseValue(o)},getValueFromCallback(e,t){if(typeof t!="function")return this.defaultValue;const o=t(e);return this.parseValue(o)},parseValue(e){return e||e===0||typeof e=="boolean"?e:this.defaultValue},base64ToBlob(e,t){let o=window.btoa(window.unescape(encodeURIComponent(e))),r=atob(o),s=r.length,d=new Uint8ClampedArray(s);for(;s--;)d[s]=r.charCodeAt(s);return new Blob([d],{type:t})}}});const he=["id"];function fe(e,t,o,r,s,d){return p(),u("div",{id:e.idName,onClick:t[0]||(t[0]=(...i)=>e.generate&&e.generate(...i))},[$(e.$slots,"default",{},()=>[R(" Download "+_(e.name),1)])],8,he)}L.render=fe;L.__file="JsonExcel.vue";const I=Q(),me={components:{MagnifyingGlassIcon:ne,PaperAirplaneIcon:ae,XMarkIcon:re,sendMessage:se,Bars3Icon:le,ArrowDownTrayIcon:ie,downloadExcel:L,pagination:oe,TableCellsIcon:ce},data(){return{responses:[],responseViewOpen:!1,filtered:[],composeMessage:!1,mailProgress:!1,filterBySource:"all",filterByDate:"",query:"",selectedResponse:[],checkedResponse:{id:"",responses:[],all:!1},selectedFile:{name:"",file:[]},pagination:{limit:5,currPage:0}}},methods:{getAllForms(){D.get("https://bluvardadmin.onrender.com/forms").then(e=>{this.responses=e.data,this.filtered=e.data})},filterBySources(){this.$router.push({query:{source:this.filterBySource}}),this.filterBySource!="all"?(this.responses=this.filtered,this.responses=this.getFilterBySources):this.responses=this.filtered},searchForm(){this.$router.push({query:{q:this.query}}),this.responses=this.filtered,this.responses=this.searchResult},viewResponse(e,t,o){this.selectedResponse="",this.selectedFile.name=t,this.$router.replace({query:{type:t}}),this.checkedResponse.id=e,this.checkedResponse.responses=[],this.checkedResponse.all=!1,D.get(`https://bluvardadmin.onrender.com/forms/response/${o}`).then(r=>{this.selectedResponse=r.data}).catch(r=>{})},closeViewResponse(){this.$router.replace({}),this.checkedResponse.responses=[],this.checkedResponse.all=!1,this.selectedResponse.length=0},checkAll(){let e=[];if(this.checkedResponse.all){for(const t in this.selectedResponse)e.push(this.selectedResponse[t].email);e==this.checkedResponse.responses?this.checkedResponse.all=!0:this.checkedResponse.responses=e}else this.checkedResponse.responses=[]},sendMail(e,t,o){if(e.length&&t&&o){this.mailProgress=!0;const r={recipients:e,subject:o,content:t};D.post("https://bluvardadmin.onrender.com/newsletter",r).then(s=>{this.mailProgress=!1,I.setToast("Mail Sent Successfully")}).catch(s=>{this.mailProgress=!1,I.setToast("Encountered an error. Please try later.")})}else I.setToast("kindly check that all required inputs are filled.")},fetchTable(e){this.selectedFile=[],P.start(),D.get(`https://bluvardadmin.onrender.com/forms/response/${e}`).then(t=>{this.selectedFile=t.data,P.done()}).catch(t=>{P.done(),I.setToast("Error! Data unavailable.")})}},mounted(){this.getAllForms(),this.$router.replace({})},computed:{getFilterBySources(){return this.filtered.filter(e=>e.form_name==this.filterBySource)},searchResult(){return this.responses.filter(e=>e.form_name.includes(this.query))},responseHeader(){return this.selectedResponse.length?Object.keys(this.selectedResponse[0]).slice(1):[]},responseCopy(){return this.responses.map(e=>({...e,opened:!1}))}}},ge={class:"bg-gray-50 min-h-screen"},xe={class:"content max-w-6xl mx-auto p-10 max-md:py-10 max-md:px-2 relative"},ye=n("div",{class:"flex gap-3"},[n("p",{class:"text-3xl text-gray-700 max-md:text-xl font-medium"},"Form Responses")],-1),be={class:"header md:flex gap-3 sticky top-14 z-10 bg-gray-50 py-5"},we={class:"flex w-full gap-2 max-md:mb-2"},ve=n("option",{value:"all"},"All Sources",-1),_e=["value"],ke=n("select",{name:"",id:"",class:"w-full text-sm border border-gray-300"},[n("option",{value:""},"All Dates")],-1),Re={class:"w-full border border-gray-300 bg-white searchbtn max-md:mb-2 px-3 flex items-center gap-2 group focus-within:ring transition-all"},Se={class:"actions flex max-md:w-full"},Ce=["disabled"],Me={class:"w-full bg-white border my-5 overflow-x-auto"},Te={class:"overflow-hidden overflow-x-auto"},Ve={class:"table divide-y divide-gray-200 table-auto w-full"},Ae=te('<div class="bg-gray-600"><div class="flex justify-between text-slate-50"><div scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"> Form Name</div><div scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"> Data Source</div><div scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"> Date Created </div><div scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"> Action</div></div></div>',1),Fe={class:"bg-white divide-y divide-gray-200 min-w-full"},Be={class:""},De={class:"flex justify-between min-w-full"},Ee={class:"px-6 py-4"},Ne={class:"px-6 py-4"},Ie={class:"px-6 py-4"},je={class:"px-6 py-4"},Pe={class:"flex text-xs text-slate-600"},Le=["onClick"],Ue={class:"hover:text-red-600 transition-all"},Oe={class:"hidden absolute z-10 text-xs group-hover:grid grid-cols-1 bg-white text-gray-600 right-5"},qe={class:"p-2 hover:bg-gray-100 flex items-center gap-2"},Ge={class:"p-2 hover:bg-gray-100 flex items-center gap-2"},We={key:0,class:"viewResponse bg-slate-500 text-slate-50 min-w-full"},He={key:0,class:"overflow-hidden overflow-x-auto"},Xe={class:"table-fixed w-full"},ze={scope:"col",class:"relative px-6 py-3 whitespace-nowrap align-baseline"},Je=n("span",{class:"sr-only"},"Select All",-1),Ke=n("span",{class:"text-xs text-gray-400 ml-2"}," select all",-1),$e={scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider"},Ye={class:"tbody justify-between min-w-full"},Qe={class:"tr flex items-center justify-between border-b border-slate-50/20 text-slate-50 hover:bg-slate-600 hover:text-slate-100 w-full"},Ze={class:"px-6 py-4"},et=n("span",{class:"sr-only"},"Select All",-1),tt=["value"],st={class:"px-1 py-2 text-xs align-middle"},ot={class:"pagination bg-white text-gray-700"},nt={key:1,class:"p-5 text-2xl border border-dashed"},rt={key:0,class:"p-5 text-2xl"},lt=n("p",null,"NO DATA FOUND !",-1),it=[lt],at={key:0,class:"bg-white fixed w-full z-30 mx-auto top-0 left-1/2 -translate-x-1/2"},ct={class:"header bg-gray-700 text-white text-sm p-2 flex flex-row justify-between items-center"},dt=n("span",null,"Compose Message",-1),pt={class:"controls"};function ut(e,t,o,r,s,d){const i=w("MagnifyingGlassIcon"),g=w("PaperAirplaneIcon"),f=w("XMarkIcon"),a=w("ArrowDownTrayIcon"),b=w("TableCellsIcon"),m=w("download-excel"),S=w("pagination"),y=w("sendMessage");return p(),u("main",ge,[n("div",xe,[ye,n("div",be,[n("div",we,[E(n("select",{"onUpdate:modelValue":t[0]||(t[0]=l=>s.filterBySource=l),id:"",class:"w-full text-sm border border-gray-300",onChange:t[1]||(t[1]=l=>d.filterBySources())},[ve,(p(!0),u(F,null,B(s.filtered,l=>(p(),u("option",{value:l.form_name},_(l.form_name),9,_e))),256))],544),[[Z,s.filterBySource]]),ke]),n("div",Re,[x(i,{class:"w-6 h-6 text-slate-400"}),E(n("input",{type:"search",onKeyup:t[2]||(t[2]=l=>d.searchForm()),"onUpdate:modelValue":t[3]||(t[3]=l=>s.query=l),placeholder:"search Response Type",class:"w-full border-0 focus:outline-none focus:border-none focus:ring-0"},null,544),[[ee,s.query]])]),n("div",Se,[n("button",{disabled:!s.checkedResponse.responses.length,onClick:t[4]||(t[4]=l=>s.composeMessage=!s.composeMessage),class:W({"px-4 py-1 items-center flex outline-1 outline bg-gray-400  text-gray-50 gap-2":s.checkedResponse.responses.length," px-4 py-1 items-center flex outline-1 outline bg-gray-400 text-gray-50 gap-2 opacity-40":!s.checkedResponse.responses.length})},[R("Reply "),x(g,{class:"w-6"})],10,Ce)])]),n("div",Me,[n("div",Te,[n("div",Ve,[Ae,n("div",Fe,[(p(!0),u(F,null,B(s.responses,l=>(p(),u("div",Be,[n("div",De,[n("div",Ee,_(l.form_name),1),n("div",Ne,_(l.source),1),n("div",Ie,_(new Date(l.date_created).toLocaleDateString()),1),n("div",je,[n("div",Pe,[n("button",{class:"px-3 py-2 bg-slate-700 text-slate-50 hover:bg-slate-900 focus:no-underline",onClick:c=>d.viewResponse(l.id,l.form_name,l.table_name)},"view ",8,Le),n("button",{class:"flex items-center gap-2 bg-red-600 hover:bg-red-700 p-2 text-white",onClick:t[5]||(t[5]=c=>d.closeViewResponse())},[R("close "),x(f,{class:"w-4"})]),s.selectedFile.name==l.form_name?(p(),u("div",{key:0,class:W(["group transition-all",{"":s.selectedResponse.length,hidden:!s.selectedResponse.length}])},[n("button",Ue,[x(a,{class:"w-10 p-1 px-2"})]),n("span",Oe,[n("button",qe,[x(b,{class:"w-4"}),x(m,{name:l.form_name,data:s.selectedResponse},{default:H(()=>[R(" Download xls ")]),_:2},1032,["name","data"])]),n("button",Ge,[x(b,{class:"w-4"}),x(m,{name:l.form_name,type:"csv",data:s.selectedResponse},{default:H(()=>[R(" Download csv ")]),_:2},1032,["name","data"])])])],2)):N("",!0)])])]),l.form_name==this.$route.query.type?(p(),u("div",We,[s.selectedResponse.length?(p(),u("div",He,[n("div",Xe,[n("div",{ref_for:!0,ref:l.form_name,id:"Hellow",class:"thead flex justify-between min-w-full bg-slate-700 items-center border-b"},[n("div",ze,[Je,E(n("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=c=>s.checkedResponse.all=c),onChange:t[7]||(t[7]=c=>d.checkAll())},null,544),[[X,s.checkedResponse.all]]),R(),Ke]),(p(!0),u(F,null,B(d.responseHeader,c=>(p(),u("div",$e,_(c),1))),256))],512),n("div",Ye,[(p(!0),u(F,null,B(s.selectedResponse.slice(s.pagination.currPage*s.pagination.limit,(s.pagination.currPage+1)*s.pagination.limit),c=>(p(),u("div",Qe,[n("div",Ze,[et,E(n("input",{type:"checkbox",value:c.email,"onUpdate:modelValue":t[8]||(t[8]=v=>s.checkedResponse.responses=v)},null,8,tt),[[X,s.checkedResponse.responses]])]),(p(!0),u(F,null,B(Object.values(c).slice(1),v=>(p(),u("div",st,_(v),1))),256))]))),256))]),n("div",ot,[x(S,{class:"p-0",modelValue:s.selectedResponse,"onUpdate:modelValue":t[9]||(t[9]=c=>s.selectedResponse=c),limit:s.pagination.limit,"curr-page":s.pagination.currPage,onPrevPage:t[10]||(t[10]=c=>s.pagination.currPage--),onNextPage:t[11]||(t[11]=c=>s.pagination.currPage++)},null,8,["modelValue","limit","curr-page"])])])])):(p(),u("div",nt," NO RESPONSE YET! "))])):N("",!0)]))),256))])]),s.responses.length?N("",!0):(p(),u("div",rt,it))])])]),s.composeMessage?(p(),u("div",at,[n("div",ct,[dt,n("div",pt,[n("button",{class:"close",onClick:t[12]||(t[12]=l=>s.composeMessage=!s.composeMessage)},[x(f,{class:"w-8 p-1 border"})])])]),x(y,{class:"text-sm",recipients:s.checkedResponse.responses,onSubmitMail:d.sendMail,progress:s.mailProgress,type:"blogpost"},null,8,["recipients","onSubmitMail","progress"])])):N("",!0)])}const _t=Y(me,[["render",ut]]);export{_t as default};
