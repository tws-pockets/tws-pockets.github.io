"use strict";(self["webpackChunkui"]=self["webpackChunkui"]||[]).push([[551],{5792:function(){},7935:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(6768),l=n(4232),u=n(7498),o=n(1606),s=n(697);function a(e,t,n,a,c,f){return(0,r.uX)(),(0,r.Wv)(u.J,{flat:"",class:"text-productText"},{default:(0,r.k6)((()=>[(0,r.bF)(o.r,null,{default:(0,r.k6)((()=>[(0,r.eW)((0,l.v_)(e.$t("productIdea")),1)])),_:1}),(0,r.bF)(s.O,null,{default:(0,r.k6)((()=>[(0,r.eW)((0,l.v_)(e.$t("productIdeaDescription")),1)])),_:1})])),_:1})}var c={name:"ProductIdeaView"},f=n(1241);const i=(0,f.A)(c,[["render",a]]);var d=i},7565:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(6768),l=n(3813),u=n(5526);function o(e,t,n,o,s,a){const c=(0,r.g2)("idea"),f=(0,r.g2)("contents");return(0,r.uX)(),(0,r.Wv)(l.I,null,{default:(0,r.k6)((()=>[(0,r.bF)(u.B,{cols:"12",justify:"center",align:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(c),(0,r.bF)(f)])),_:1})])),_:1})}var s=n(2600),a=n(7935),c={name:"ProductIndexView",components:{contents:s["default"],idea:a["default"]}},f=n(1241);const i=(0,f.A)(c,[["render",o]]);var d=i},5526:function(e,t,n){n.d(t,{B:function(){return y}});n(4114),n(5792);var r=n(9262),l=n(8353),u=n(4663),o=n(4232),s=n(6768),a=n(4587),c=n(1247);const f=(()=>l.fi.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),i=(()=>l.fi.reduce(((e,t)=>{const n="offset"+(0,o.ZH)(t);return e[n]={type:[String,Number],default:null},e}),{}))(),d=(()=>l.fi.reduce(((e,t)=>{const n="order"+(0,o.ZH)(t);return e[n]={type:[String,Number],default:null},e}),{}))(),p={col:Object.keys(f),offset:Object.keys(i),order:Object.keys(d)};function v(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"===e&&(r="v-"+r),"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const b=["auto","start","end","center","baseline","stretch"],g=(0,a.j)({cols:{type:[Boolean,String,Number],default:!1},...f,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>b.includes(e)},...(0,r.u)(),...(0,u.X)()},"VCol"),y=(0,c.RW)()({name:"VCol",props:g(),setup(e,t){let{slots:n}=t;const r=(0,s.EW)((()=>{const t=[];let n;for(n in p)p[n].forEach((r=>{const l=e[r],u=v(n,r,l);u&&t.push(u)}));const r=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>(0,s.h)(e.tag,{class:[r.value,e.class],style:e.style},n.default?.())}})},3813:function(e,t,n){n.d(t,{I:function(){return i}});var r=n(6768),l=(n(5792),n(9262)),u=n(5296),o=n(4663),s=n(4587),a=n(1247),c=n(4600);const f=(0,s.j)({fluid:{type:Boolean,default:!1},...(0,l.u)(),...(0,o.X)()},"VContainer"),i=(0,a.RW)()({name:"VContainer",props:f(),setup(e,t){let{slots:n}=t;const{rtlClasses:l}=(0,u.IA)();return(0,c.C)((()=>(0,r.bF)(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},l.value,e.class],style:e.style},n))),{}}})}}]);
//# sourceMappingURL=page-product-index.f8397b51.js.map