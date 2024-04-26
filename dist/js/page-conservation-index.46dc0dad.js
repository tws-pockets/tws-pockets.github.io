"use strict";(self["webpackChunkui"]=self["webpackChunkui"]||[]).push([[955],{5792:function(){},1595:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var l=n(6768),u=n(4232),r=n(7498),a=n(1606),o=n(697);function i(t,e,n,i,s,c){return(0,l.uX)(),(0,l.Wv)(r.J,{flat:"",class:"bg-background text-productText"},{default:(0,l.k6)((()=>[(0,l.bF)(a.r,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(t.$t("sustainability.enviroment.title")),1)])),_:1}),(0,l.bF)(o.O,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(t.$t("sustainability.enviroment.text")),1)])),_:1})])),_:1})}var s={name:"ProductEnviromentView"},c=n(1241);const f=(0,c.A)(s,[["render",i]]);var d=f},2613:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var l=n(6768),u=n(4232),r=n(3813),a=n(6756),o=n(5526);function i(t,e,n,i,s,c){const f=(0,l.g2)("production"),d=(0,l.g2)("enviroment"),g=(0,l.g2)("packaging");return(0,l.uX)(),(0,l.Wv)(r.I,{align:"center",class:"fill-height bg-background"},{default:(0,l.k6)((()=>[(0,l.bF)(a.L,{justify:"center"},{default:(0,l.k6)((()=>[(0,l.bF)(o.B,(0,l.v6)({cols:"8"},{cols:10,xl:8,md:10}),{default:(0,l.k6)((()=>[(0,l.bF)(f)])),_:1},16),(0,l.bF)(o.B,(0,u._B)((0,l.Ng)({cols:10,xl:8,md:10})),{default:(0,l.k6)((()=>[(0,l.bF)(d)])),_:1},16),(0,l.bF)(o.B,(0,u._B)((0,l.Ng)({cols:10,xl:8,md:10})),{default:(0,l.k6)((()=>[(0,l.bF)(g)])),_:1},16)])),_:1})])),_:1})}var s=n(1595),c=n(6527),f=n(4085),d={name:"SustainabilityView",components:{enviroment:s["default"],production:c["default"],packaging:f["default"]}},g=n(1241);const v=(0,g.A)(d,[["render",i]]);var p=v},4085:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var l=n(6768),u=n(4232),r=n(7498),a=n(1606),o=n(697);function i(t,e,n,i,s,c){return(0,l.uX)(),(0,l.Wv)(r.J,{flat:"",class:"bg-background text-productText"},{default:(0,l.k6)((()=>[(0,l.bF)(a.r,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(t.$t("sustainability.packaging.title")),1)])),_:1}),(0,l.bF)(o.O,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(t.$t("sustainability.packaging.text")),1)])),_:1})])),_:1})}var s={name:"ProductPackagingView"},c=n(1241);const f=(0,c.A)(s,[["render",i]]);var d=f},6527:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var l=n(6768),u=n(4232),r=n(7498),a=n(1606),o=n(697);function i(t,e,n,i,s,c){return(0,l.uX)(),(0,l.Wv)(r.J,{flat:"",class:"bg-background text-productText"},{default:(0,l.k6)((()=>[(0,l.bF)(a.r,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(t.$t("sustainability.production.title")),1)])),_:1}),(0,l.bF)(o.O,null,{default:(0,l.k6)((()=>[(0,l.eW)((0,u.v_)(t.$t("sustainability.production.text")),1)])),_:1})])),_:1})}var s={name:"ProductProductionView"},c=n(1241);const f=(0,c.A)(s,[["render",i]]);var d=f},5526:function(t,e,n){n.d(e,{B:function(){return y}});n(4114),n(5792);var l=n(9262),u=n(8353),r=n(4663),a=n(4232),o=n(6768),i=n(4587),s=n(1247);const c=(()=>u.fi.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),f=(()=>u.fi.reduce(((t,e)=>{const n="offset"+(0,a.ZH)(e);return t[n]={type:[String,Number],default:null},t}),{}))(),d=(()=>u.fi.reduce(((t,e)=>{const n="order"+(0,a.ZH)(e);return t[n]={type:[String,Number],default:null},t}),{}))(),g={col:Object.keys(c),offset:Object.keys(f),order:Object.keys(d)};function v(t,e,n){let l=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");l+=`-${n}`}return"col"===t&&(l="v-"+l),"col"!==t||""!==n&&!0!==n?(l+=`-${n}`,l.toLowerCase()):l.toLowerCase()}}const p=["auto","start","end","center","baseline","stretch"],b=(0,i.j)({cols:{type:[Boolean,String,Number],default:!1},...c,offset:{type:[String,Number],default:null},...f,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:t=>p.includes(t)},...(0,l.u)(),...(0,r.X)()},"VCol"),y=(0,s.RW)()({name:"VCol",props:b(),setup(t,e){let{slots:n}=e;const l=(0,o.EW)((()=>{const e=[];let n;for(n in g)g[n].forEach((l=>{const u=t[l],r=v(n,l,u);r&&e.push(r)}));const l=e.some((t=>t.startsWith("v-col-")));return e.push({"v-col":!l||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),e}));return()=>(0,o.h)(t.tag,{class:[l.value,t.class],style:t.style},n.default?.())}})},3813:function(t,e,n){n.d(e,{I:function(){return f}});var l=n(6768),u=(n(5792),n(9262)),r=n(5296),a=n(4663),o=n(4587),i=n(1247),s=n(4600);const c=(0,o.j)({fluid:{type:Boolean,default:!1},...(0,u.u)(),...(0,a.X)()},"VContainer"),f=(0,i.RW)()({name:"VContainer",props:c(),setup(t,e){let{slots:n}=e;const{rtlClasses:u}=(0,r.IA)();return(0,s.C)((()=>(0,l.bF)(t.tag,{class:["v-container",{"v-container--fluid":t.fluid},u.value,t.class],style:t.style},n))),{}}})},6756:function(t,e,n){n.d(e,{L:function(){return W}});n(4114),n(5792);var l=n(9262),u=n(8353),r=n(4663),a=n(4232),o=n(6768),i=n(4587),s=n(1247);const c=["start","end","center"],f=["space-between","space-around","space-evenly"];function d(t,e){return u.fi.reduce(((n,l)=>{const u=t+(0,a.ZH)(l);return n[u]=e(),n}),{})}const g=[...c,"baseline","stretch"],v=t=>g.includes(t),p=d("align",(()=>({type:String,default:null,validator:v}))),b=[...c,...f],y=t=>b.includes(t),k=d("justify",(()=>({type:String,default:null,validator:y}))),m=[...c,...f,"stretch"],_=t=>m.includes(t),j=d("alignContent",(()=>({type:String,default:null,validator:_}))),h={align:Object.keys(p),justify:Object.keys(k),alignContent:Object.keys(j)},C={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){let l=C[t];if(null!=n){if(e){const n=e.replace(t,"");l+=`-${n}`}return l+=`-${n}`,l.toLowerCase()}}const $=(0,i.j)({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v},...p,justify:{type:String,default:null,validator:y},...k,alignContent:{type:String,default:null,validator:_},...j,...(0,l.u)(),...(0,r.X)()},"VRow"),W=(0,s.RW)()({name:"VRow",props:$(),setup(t,e){let{slots:n}=e;const l=(0,o.EW)((()=>{const e=[];let n;for(n in h)h[n].forEach((l=>{const u=t[l],r=S(n,l,u);r&&e.push(r)}));return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e}));return()=>(0,o.h)(t.tag,{class:["v-row",l.value,t.class],style:t.style},n.default?.())}})}}]);
//# sourceMappingURL=page-conservation-index.46dc0dad.js.map