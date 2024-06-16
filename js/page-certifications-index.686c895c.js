"use strict";(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[469,575,407],{5453:function(t,n,e){e.d(n,{A:function(){return m}});var a=e(5551),o=e(6768),l=e(4232),i=e(6548),r=e(1606),d=e(5832),s=e(697),u=e(3813),c=e(6756),k=e(5526);const y={key:1},f={key:1},p={key:1},h={key:1},B={key:1};function g(t,n,e,g,w,v){const b=a.A;return(0,o.uX)(),(0,o.Wv)(i.J,{class:"px-5"},{default:(0,o.k6)((()=>[(0,o.RG)(t.$slots,"body",(0,l._B)((0,o.Ng)({i18nBody:w.i18nBody})),(()=>[(0,o.RG)(t.$slots,"title",(0,l._B)((0,o.Ng)({i18nBody:w.i18nBody})),(()=>[w.i18nBody.title?.length>0?((0,o.uX)(),(0,o.Wv)(r.r,{key:0,align:"center"},{default:(0,o.k6)((()=>[e.withMarkdown?((0,o.uX)(),(0,o.Wv)(b,{key:0,"markdown-string":w.i18nBody.title},null,8,["markdown-string"])):((0,o.uX)(),(0,o.CE)("span",y,(0,l.v_)(w.i18nBody.title),1))])),_:1})):(0,o.Q3)("",!0)])),(0,o.RG)(t.$slots,"subtitle",(0,l._B)((0,o.Ng)({i18nBody:w.i18nBody})),(()=>[w.i18nBody.subtitle?.length>0?((0,o.uX)(),(0,o.Wv)(d.Z,{key:0},{default:(0,o.k6)((()=>[e.withMarkdown?((0,o.uX)(),(0,o.Wv)(b,{key:0,"markdown-string":w.i18nBody.subtitle},null,8,["markdown-string"])):((0,o.uX)(),(0,o.CE)("span",f,(0,l.v_)(w.i18nBody.subtitle),1))])),_:1})):(0,o.Q3)("",!0)])),(0,o.RG)(t.$slots,"prependContent",(0,l._B)((0,o.Ng)({i18nBody:w.i18nBody})),(()=>[w.i18nBody.prepend?.length>0?((0,o.uX)(),(0,o.Wv)(s.O,{key:0,align:"center",class:"text-card-text-color"},{default:(0,o.k6)((()=>[(0,o.bF)(u.I,null,{default:(0,o.k6)((()=>[e.withMarkdown?((0,o.uX)(),(0,o.Wv)(b,{key:0,"markdown-string":w.i18nBody.prepend},null,8,["markdown-string"])):((0,o.uX)(),(0,o.CE)("span",p,(0,l.v_)(w.i18nBody.prepend),1))])),_:1})])),_:1})):(0,o.Q3)("",!0)])),(0,o.bF)(s.O,{align:"center",class:"text-card-text-color"},{default:(0,o.k6)((()=>[(0,o.bF)(u.I,null,{default:(0,o.k6)((()=>[(0,o.bF)(c.L,null,{default:(0,o.k6)((()=>[(0,o.bF)(k.B,null,{default:(0,o.k6)((()=>[(0,o.RG)(t.$slots,"default",(0,l._B)((0,o.Ng)({i18nBody:w.i18nBody})),(()=>[e.withMarkdown?((0,o.uX)(),(0,o.Wv)(b,{key:0,"markdown-string":w.i18nBody.text},null,8,["markdown-string"])):((0,o.uX)(),(0,o.CE)("span",h,(0,l.v_)(w.i18nBody.text),1))]))])),_:3})])),_:3})])),_:3})])),_:3}),(0,o.RG)(t.$slots,"appendContent",(0,l._B)((0,o.Ng)({i18nBody:w.i18nBody}))),t.$slots?.footer||w.i18nBody.footer?.length>0||w.i18nBody.append?.length>0?((0,o.uX)(),(0,o.Wv)(s.O,{key:0,class:"text-card-text-color"},{default:(0,o.k6)((()=>[(0,o.RG)(t.$slots,"footer",(0,l._B)((0,o.Ng)({i18nBody:w.i18nBody})),(()=>[e.withMarkdown?((0,o.uX)(),(0,o.Wv)(b,{key:0,"markdown-string":w.i18nBody.footer||w.i18nBody.append},null,8,["markdown-string"])):((0,o.uX)(),(0,o.CE)("span",B,(0,l.v_)(w.i18nBody.footer||w.i18nBody.append),1))]))])),_:3})):(0,o.Q3)("",!0)])),(0,o.RG)(t.$slots,"actions")])),_:3})}var w=e(8001),v={name:"I18nCard",props:{path:{type:String,required:!0,default:""},withMarkdown:{type:Boolean,default:!0}},data(){return{i18nBody:{}}},computed:{locale(){return this.$i18n.locale},messages(){return(0,w.d)()}},watch:{locale(){this.updateI18nObject()}},methods:{updateI18nObject(t){const n=t||this.i18nPath,e=this.messages;console.debug(`Checking for i18n Value ${n}`,{local:e[this.$i18n.locale]?.company?.pages[n],fallbacklLocale:e[this.$i18n.fallbackLocale]?.company?.pages[n],global:e[this.$i18n.locale][`${n}`],fallbackGlobal:e[this.$i18n.fallbackLocale][n]}),this.i18nBody=e[this.$i18n.locale]?.company?.pages[n]||e[this.$i18n.fallbackLocale]?.company?.pages[n]||e[this.$i18n.locale][`${n}`]||e[this.$i18n.fallbackLocale][n]||`${n}`}},beforeMount(){this.updateI18nObject()}},b=e(1241);const _=(0,b.A)(v,[["render",g]]);var m=_},6125:function(t,n,e){e.d(n,{A:function(){return p}});var a=e(5453),o=e(5551),l=e(6768),i=e(4232),r=e(697),d=e(6756),s=e(5526);const u={key:1};function c(t,n,e,c,k,y){const f=o.A,p=a.A;return(0,l.uX)(),(0,l.Wv)(p,{path:e.path,"with-markdown":e.withMarkdown},{prependContent:(0,l.k6)((({i18nBody:n})=>[(0,l.bF)(r.O,null,{default:(0,l.k6)((()=>[(0,l.RG)(t.$slots,"text",(0,i._B)((0,l.Ng)({i18nBody:n})),(()=>[e.withMarkdown?((0,l.uX)(),(0,l.Wv)(f,{key:0,"markdown-string":n?.text},null,8,["markdown-string"])):((0,l.uX)(),(0,l.CE)("span",u,(0,i.v_)(n?.text),1))]))])),_:2},1024)])),default:(0,l.k6)((({i18nBody:t})=>[(0,l.bF)(d.L,{justify:"center"},{default:(0,l.k6)((()=>[(0,l.bF)(s.B,{cols:"auto"},{default:(0,l.k6)((()=>[(0,l.Lk)("ul",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(t?.list,(t=>((0,l.uX)(),(0,l.CE)("li",{key:t.id,class:"py-1"},(0,i.v_)(t),1)))),128))])])),_:2},1024)])),_:2},1024)])),_:3},8,["path","with-markdown"])}var k={inheritAttrs:!1,name:"I18nCardWitList",props:{withMarkdown:{type:Boolean,default:!0},path:String}},y=e(1241);const f=(0,y.A)(k,[["render",c]]);var p=f},3349:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var a=e(6125),o=e(6768);function l(t,n,e,l,i,r){const d=a.A;return(0,o.uX)(),(0,o.Wv)(d,{path:t.i18nPath},null,8,["path"])}var i={name:"CertificatesPage"},r=e(1241);const d=(0,r.A)(i,[["render",l]]);var s=d},1416:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var a=e(6768),o=e(3813),l=e(6756),i=e(5526);function r(t,n,e,r,d,s){const u=(0,a.g2)("standards"),c=(0,a.g2)("certificates");return(0,a.uX)(),(0,a.Wv)(o.I,null,{default:(0,a.k6)((()=>[(0,a.bF)(l.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(i.B,{cols:"12"},{default:(0,a.k6)((()=>[(0,a.bF)(u)])),_:1}),(0,a.bF)(i.B,{col:"12"},{default:(0,a.k6)((()=>[(0,a.bF)(c)])),_:1})])),_:1})])),_:1})}var d=e(3349),s=e(7033),u={name:"CertificationsIndex",components:{Standards:s["default"],Certificates:d["default"]}},c=e(1241);const k=(0,c.A)(u,[["render",r]]);var y=k},7033:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var a=e(6125),o=e(6768);function l(t,n,e,l,i,r){const d=a.A;return(0,o.uX)(),(0,o.Wv)(d,{path:t.i18nPath},null,8,["path"])}var i={name:"StandardsView",computed:{items(){return new Array(3).fill(0).map(((t,n)=>this.$t(`company.articles.standards.list.${n}`)))}}},r=e(1241);const d=(0,r.A)(i,[["render",l]]);var s=d}}]);
//# sourceMappingURL=page-certifications-index.686c895c.js.map