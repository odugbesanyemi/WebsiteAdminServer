import{_ as T,D as k,b as y,H as p,r as n,o as r,c as a,a as e,g as I,e as u,E as g,G as _,F as x,i as b,f as h,J as P,h as d,t as c,K as v,L as B}from"./index-d2762744.js";import M from"./addMedia-b401c6ef.js";import{d as A}from"./documentIcon-3fbcb264.js";import{p as N}from"./pagination-172d70a3.js";import{r as V}from"./MagnifyingGlassIcon-c56e5513.js";import{r as j}from"./XMarkIcon-360d76fa.js";import"./loading-58ec714e.js";import"./ChevronLeftIcon-e0555cea.js";const L="/assets/mp4-icon-6248d624.png",m=k(),q={components:{addMediaComponent:M,MagnifyingGlassIcon:V,XMarkIcon:j,pagination:N},data(){return{showNew:!1,records:[],files:[],DocumentImage:A,videoImage:L,selectedFile:"",filterByDate:"all",filterByType:"all",searchQuery:"",filterDates:[],pagination:{currPage:0,limit:10}}},methods:{getFiles(){y.get("https://bluvardadmin.onrender.com/files").then(o=>{this.files=o.data,this.records=o.data})},showimage(o){return"https://bluvard.org/assets/"+o},showDetails(o){this.selectedFile=o,this.$router.push({query:{item:this.selectedFile}})},closeAttachment(){this.selectedFile="",this.$router.replace({})},async copyToClipboard(o){try{await navigator.clipboard.writeText(o),m.setToast("Success: content Copied to clipboard.")}catch{m.setToast("cannot complete your request.")}},updateFilterType(){this.$router.push({query:{type:this.filterByType}}),this.filterByType!="all"?(this.files=this.records,this.files=[...this.getFilterByType]):this.files=this.records},searchData(){this.$router.push({query:{Search:this.searchQuery}}),this.searchQuery!==""?(this.files=this.records,this.files=this.query):this.files=this.records},chooseCurrPage(o){this.paginate.currPage=o},chooseItemsPerPage(o){this.paginate.itemsPerPage=o},isAdded(o){o&&this.getFiles()},async deleteFile(o,s){p.start();try{await y.post(`https://bluvardadmin.onrender.com/files/delete/${o}`,{filename:s}),m.setToast("File deleted Successfully!"),p.done(),this.closeAttachment(),this.getFiles()}catch(f){m.setToast(f.response.data),p.done(),this.closeAttachment()}}},mounted(){this.getFiles()},updated(){document.title="Library | Site Admin"},computed:{getSelectedFile(){return this.files.filter(o=>o.id==this.$route.query.item)[0]},getFilterByType(){return[...this.files].filter(s=>s.mime_type.split("/")[0]==this.filterByType)},getFilterByDate(){},query(){return this.files.filter(o=>o.file_name.toLowerCase().includes(this.searchQuery.toLowerCase()))},dataCount(){return this.files.length}}},Q={class:"bg-gray-50"},U={class:"content max-w-6xl mx-auto p-10 max-md:py-10 max-md:px-2"},G={class:"flex justify-between gap-3 items-center"},X=e("p",{class:"md:text-4xl max-md:text-xl text-3xl text-gray-700"},"Media Library",-1),z={class:"header md:flex my-5 gap-1 grid grid-cols-2"},E=e("option",{value:"all",selected:"true"},"All Media Items",-1),H=e("option",{value:"image"},"Images",-1),K=e("option",{value:"video"},"Videos",-1),J=e("option",{value:"application"},"Documents",-1),R=[E,H,K,J],O=e("option",{value:"all",selected:""},"All Dates",-1),W=["value"],Y={class:"max-md:col-span-2 max-md:sticky max-md:top-2 max-md:w-full w-full bg-white border searchbtn px-3 flex items-center gap-2 group focus-within:ring transition-all"},Z={class:"w-full p-5 max-md:p-2 bg-white border my-5 grid md:grid-cols-5 grid-cols-2 gap-4"},$=["onClick"],ee=["src"],te={key:0,class:"p-5 text-2xl whitespace-nowrap"},se={key:0,class:"relative top-5"},ie={class:"fixed top-20 md:w-7/12 w-11/12 max-md:overflow-y-scroll bg-white border left-1/2 -translate-x-1/2",style:{"max-height":"80vh"}},le={class:"header flex justify-between items-center"},oe=e("p",{class:"font-semibold px-3 text-md"},"Attachment Details",-1),re={class:"attachment-body md:flex justify-between bg-white h-3/5 p-2 border-t"},ae={class:"image-show p-2"},ne=["src"],de={class:"controls px-5 md:border-l"},ce={class:"border-b p-2 text-xs"},me=e("span",{class:"font-normal pr-2"},"Uploaded on:",-1),pe=e("span",{class:"font-normal pr-2"},"File name:",-1),ue=e("span",{class:"font-normal pr-2"},"File Type:",-1),ge=e("span",{class:"font-normal pr-2"},"File Size:",-1),he={class:"edit-controls p-2 text-xs"},fe=B('<div class="flex gap-3 items-center mb-2 justify-between"><label for="">Title:</label><input type="text" class="border rounded w-64 text-xs"></div><div class="flex gap-3 items-center mb-2 justify-between"><label for="">Caption:</label><textarea type="text" class="border rounded w-64 text-xs"></textarea></div>',2),ye={class:"flex gap-3 items-center mb-2 justify-between"},_e=e("label",{for:""},"File URL:",-1),xe=["value"],be={class:"flex gap-2"};function ve(o,s,f,we,t,i){const w=n("addMediaComponent"),F=n("MagnifyingGlassIcon"),D=n("pagination"),C=n("XMarkIcon");return r(),a("main",Q,[e("div",U,[e("div",G,[X,e("button",{class:"border-gray-500 p-2 px-3 text-sm max-md:text-xs rounded bg-gradient-to-t from-gray-400 to-gray-500 text-white font-semibold",onClick:s[0]||(s[0]=l=>t.showNew=!t.showNew)},"Add New")]),t.showNew?(r(),I(w,{key:0,onDone:i.isAdded},null,8,["onDone"])):u("",!0),e("div",z,[g(e("select",{"onUpdate:modelValue":s[1]||(s[1]=l=>t.filterByType=l),id:"",class:"border-slate-300 max-md:w-full",onChange:s[2]||(s[2]=l=>i.updateFilterType())},R,544),[[_,t.filterByType]]),g(e("select",{"onUpdate:modelValue":s[3]||(s[3]=l=>t.filterByDate=l),id:"",class:"border-slate-300 max-md:w-full"},[O,(r(!0),a(x,null,b(t.filterDates,l=>(r(),a("option",{value:"all"},"date",8,W))),256))],512),[[_,t.filterByDate]]),e("div",Y,[h(F,{class:"w-6 h-6 text-slate-400"}),g(e("input",{type:"search",placeholder:"search Image",class:"w-full border-0 focus:outline-none focus:border-none focus:ring-0","onUpdate:modelValue":s[4]||(s[4]=l=>t.searchQuery=l),onKeyup:s[5]||(s[5]=l=>i.searchData())},null,544),[[P,t.searchQuery]])])]),e("div",Z,[(r(!0),a(x,null,b(t.files.slice(t.pagination.currPage*t.pagination.limit,(t.pagination.currPage+1)*t.pagination.limit),(l,S)=>(r(),a("div",{key:S},[e("div",{class:"border hover:shadow-lg min-h-full cursor-pointer",onClick:Fe=>i.showDetails(l.id)},[e("img",{src:[l.mime_type=="image/png"||l.mime_type=="image/jpeg"||l.mime_type=="image/gif"?i.showimage(l.file_name):l.mime_type.split("/")[0]=="video"?t.videoImage:t.DocumentImage],alt:"",class:"h-full object-cover"},null,8,ee)],8,$)]))),128)),t.files.slice(t.pagination.currPage*t.pagination.limit,(t.pagination.currPage+1)*t.pagination.limit).length?u("",!0):(r(),a("h2",te," No Data Here!"))]),h(D,{modelValue:t.files,"onUpdate:modelValue":s[6]||(s[6]=l=>t.files=l),limit:t.pagination.limit,"curr-page":t.pagination.currPage,onPrevPage:s[7]||(s[7]=l=>t.pagination.currPage--),onNextPage:s[8]||(s[8]=l=>t.pagination.currPage++)},null,8,["modelValue","limit","curr-page"])]),t.selectedFile?(r(),a("div",se,[e("span",{class:"fixed w-full h-full inset-0 bg-black/70",onClick:s[9]||(s[9]=(...l)=>i.closeAttachment&&i.closeAttachment(...l))}),e("div",ie,[e("div",le,[oe,h(C,{class:"w-6 m-2 border cursor-pointer",onClick:i.closeAttachment},null,8,["onClick"])]),e("div",re,[e("div",ae,[e("img",{src:[i.getSelectedFile.mime_type.split("/")[0]=="image"?i.showimage(i.getSelectedFile.file_name):i.getSelectedFile.mime_type.split("/")[0]=="video"?t.videoImage:t.DocumentImage],alt:""},null,8,ne)]),e("div",de,[e("div",ce,[e("p",null,[me,d(c(i.getSelectedFile.date_added.toString()),1)]),e("p",null,[pe,d(c(i.getSelectedFile.file_name),1)]),e("p",null,[ue,d(" "+c(i.getSelectedFile.mime_type),1)]),e("p",null,[ge,d(c(i.getSelectedFile.size/1e3)+"kb ",1)])]),e("div",he,[e("form",null,[fe,e("div",ye,[_e,e("input",{type:"text",class:"border rounded w-64 text-xs",value:i.showimage(i.getSelectedFile.file_name),disabled:""},null,8,xe)]),e("div",be,[e("button",{class:"text-sm bg-slate-200 rounded my-4 p-3",onClick:s[10]||(s[10]=v(l=>i.copyToClipboard(i.showimage(i.getSelectedFile.file_name)),["prevent"]))},"Copy to Clipboard"),e("button",{class:"p-3 rounded bg-red-400 hover:bg-red-500 text-sm text-red-50 my-4",onClick:s[11]||(s[11]=v(l=>i.deleteFile(i.getSelectedFile.id,i.getSelectedFile.file_name),["prevent"]))},"Delete")])])])])])])])):u("",!0)])}const Me=T(q,[["render",ve]]);export{Me as default};
