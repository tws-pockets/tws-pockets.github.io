"use strict";(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[964],{6303:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var r=a(894),l=a(6768),s=a(4232),u=a(6548),n=a(1606),o=a(697),d=a(8815),i=a(6756),p=a(5526),g=a(1822);function c(e,t,a,c,m,f){const y=r.A;return(0,l.uX)(),(0,l.Wv)(y,{path:e.i18nPath},{default:(0,l.k6)((({i18nBody:e})=>[(0,l.bF)(d.$,{search:m.search,items:e.list,class:"my-5"},(0,l.eX)({default:(0,l.k6)((({items:e})=>[(0,l.bF)(i.L,null,{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e,((e,t)=>((0,l.uX)(),(0,l.Wv)(p.B,{key:t},{default:(0,l.k6)((()=>[(0,l.bF)(u.J,null,{default:(0,l.k6)((()=>[(0,l.bF)(n.r,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.raw.title),1)])),_:2},1024),(0,l.bF)(o.O,{align:"start"},{default:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.raw.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),["no-data"]:(0,l.k6)((()=>[(0,l.eW)((0,s.v_)(e.noData),1)])),_:2},[e.list?.length>0?{name:"header",fn:(0,l.k6)((()=>[(0,l.bF)(i.L,{justify:"center"},{default:(0,l.k6)((()=>[(0,l.bF)(p.B,(0,s._B)((0,l.Ng)({md:6})),{default:(0,l.k6)((()=>[(0,l.bF)(g.W,{"prepend-inner-icon":"mdi-magnify",placeholder:e.placeholder,modelValue:m.search,"onUpdate:modelValue":t[0]||(t[0]=e=>m.search=e)},null,8,["placeholder","modelValue"])])),_:2},1040)])),_:2},1024)])),key:"0"}:void 0]),1032,["search","items"])])),_:1},8,["path"])}var m={name:"FaqsView",data(){return{search:""}},methods:{}},f=a(1241);const y=(0,f.A)(m,[["render",c]]);var h=y},8815:function(e,t,a){a.d(t,{$:function(){return S}});var r=a(6768),l=a(6962),s=a(5682),u=a(5761),n=a(3962),o=a(921),d=a(6005),i=(a(4114),a(4587)),p=a(9094);const g=(0,i.j)({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items");function c(e,t){const a=e.returnObject?t:(0,p.TD)(t,e.itemValue),r=(0,p.TD)(t,e.itemSelectable,!0);return{type:"item",value:a,selectable:r,raw:t}}function m(e,t){const a=[];for(const r of t)a.push(c(e,r));return a}function f(e){const t=(0,r.EW)((()=>m(e,e.items)));return{items:t}}var y=a(9262),h=a(6547),v=a(2067),P=a(4663),k=a(144),I=a(1247),B=a(4600);const b=(0,i.j)({search:String,loading:Boolean,...(0,y.u)(),...g(),...(0,o.rX)(),...(0,d.xQ)(),...(0,n.OZ)({itemsPerPage:5}),...(0,l.R)(),...(0,s.KL)(),...(0,h.tk)(),...(0,P.X)()},"VDataIterator"),S=(0,I.RW)()({name:"VDataIterator",props:b(),emits:{"update:modelValue":e=>!0,"update:groupBy":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,t){let{slots:a}=t;const i=(0,v.q)(e,"groupBy"),p=(0,k.lW)(e,"search"),{items:g}=f(e),{filteredItems:c}=(0,h.U2)(e,g,p,{transform:e=>e.raw}),{sortBy:m,multiSort:y,mustSort:P}=(0,d.VA)(e),{page:I,itemsPerPage:b}=(0,n.lS)(e),{toggleSort:S}=(0,d._1)({sortBy:m,multiSort:y,mustSort:P,page:I}),{sortByWithGroups:x,opened:_,extractRows:F,isGroupOpen:V,toggleGroup:W}=(0,s.Ux)({groupBy:i,sortBy:m}),{sortedItems:E}=(0,d.Vd)(e,c,x),{flatItems:w}=(0,s["if"])(E,i,_),A=(0,r.EW)((()=>w.value.length)),{startIndex:C,stopIndex:D,pageCount:O,prevPage:X,nextPage:j,setItemsPerPage:G,setPage:K}=(0,n.qV)({page:I,itemsPerPage:b,itemsLength:A}),{paginatedItems:L}=(0,n.V0)({items:w,startIndex:C,stopIndex:D,itemsPerPage:b}),q=(0,r.EW)((()=>F(L.value))),{isSelected:R,select:U,selectAll:T,toggleSelect:$}=(0,o.C_)(e,{allItems:g,currentPage:q}),{isExpanded:J,toggleExpand:N}=(0,l.dr)(e);(0,u.I)({page:I,itemsPerPage:b,sortBy:m,groupBy:i,search:p});const Q=(0,r.EW)((()=>({page:I.value,itemsPerPage:b.value,sortBy:m.value,pageCount:O.value,toggleSort:S,prevPage:X,nextPage:j,setPage:K,setItemsPerPage:G,isSelected:R,select:U,selectAll:T,toggleSelect:$,isExpanded:J,toggleExpand:N,isGroupOpen:V,toggleGroup:W,items:q.value,groupedItems:L.value})));return(0,B.C)((()=>(0,r.bF)(e.tag,{class:["v-data-iterator",e.class],style:e.style},{default:()=>[a.header?.(Q.value),L.value.length?a.default?.(Q.value):a["no-data"]?.(),a.footer?.(Q.value)]}))),{}}})}}]);
//# sourceMappingURL=page-faqs.dac9e7a3.js.map