(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[618],{6202:function(t,n,e){"use strict";e.d(n,{A:function(){return c}});var r=e(6768),o=e(4232),i=e(3490);function s(t,n,e,s,a,l){return(0,r.uX)(),(0,r.Wv)(i.D,{variant:"outlined",color:a.isHovering?e.mouseoncolor:e.mouseoffcolor,onMouseenter:n[0]||(n[0]=t=>a.isHovering=!0),onMouseleave:n[1]||(n[1]=t=>a.isHovering=!1)},{default:(0,r.k6)((()=>[(0,r.eW)((0,o.v_)(a.isHovering?e.mouseonlabel:e.mouseofflabel),1)])),_:1},8,["color"])}var a={name:"HoverButton",props:{mouseonlabel:{type:String,default:"",required:!1},mouseoncolor:{type:String,default:"",required:!1},mouseoffcolor:{type:String,default:"action-button-color",required:!1},mouseofflabel:{type:String,default:"",required:!1}},data(){return{isHovering:!1}}},l=e(1241);const u=(0,l.A)(a,[["render",s]]);var c=u},338:function(t,n,e){"use strict";e.d(n,{A:function(){return w}});var r=e(6768),o=e(4232),i=e(6548),s=e(1606),a=e(697),l=e(6756),u=e(5526);const c=["innerHTML"],p=["innerHTML"];function d(t,n,e,d,g,f){return(0,r.uX)(),(0,r.Wv)(i.J,{class:"bg-card-background text-card-text-color mt-5",align:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(s.r,null,{default:(0,r.k6)((()=>[(0,r.bF)(l.L,{justify:"center",align:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(u.B,{cols:"12",class:"text-h4"},{default:(0,r.k6)((()=>[(0,r.Lk)("span",{innerHTML:f.render(f.title)},null,8,c)])),_:1}),(0,r.bF)(u.B,{cols:"12"},{default:(0,r.k6)((()=>[e.customIcon?((0,r.uX)(),(0,r.Wv)((0,r.$y)(e.customIcon),(0,o._B)((0,r.v6)({key:0},{width:"15%",height:"auto",...t.$props.iconProps})),null,16)):(0,r.Q3)("",!0)])),_:1})])),_:1})])),_:1}),(0,r.bF)(a.O,null,{default:(0,r.k6)((()=>[(0,r.Lk)("div",{innerHTML:f.render(f.body)},null,8,p)])),_:1}),(0,r.RG)(t.$slots,"append")])),_:3})}var g=e(642);e(4114),e(3375),e(9225),e(3972),e(9209),e(5714),e(7561),e(6197);const f=new Set([!0,!1,"alt","title"]);function h(t,n){return(Array.isArray(t)?t:[]).filter((([t])=>t!==n))}function b(t,n){t&&t.attrs&&(t.attrs=h(t.attrs,n))}function m(t,n){if(!f.has(t))throw new TypeError(`figcaption must be one of: ${[...f]}.`);if("alt"===t)return n.content;const e=n.attrs.find((([t])=>"title"===t));return Array.isArray(e)&&e[1]?(b(n,"title"),e[1]):void 0}function k(t,n){n=n||{},t.core.ruler.before("linkify","image_figures",(function(e){let r=1;for(let o=1,i=e.tokens.length;o<i-1;++o){const s=e.tokens[o];if("inline"!==s.type)continue;if(!s.children||1!==s.children.length&&3!==s.children.length)continue;if(1===s.children.length&&"image"!==s.children[0].type)continue;if(3===s.children.length){const[t,n,e]=s.children;if("link_open"!==t.type||"image"!==n.type||"link_close"!==e.type)continue}if(0!==o&&"paragraph_open"!==e.tokens[o-1].type)continue;if(o!==i-1&&"paragraph_close"!==e.tokens[o+1].type)continue;const a=e.tokens[o-1];let l;if(a.type="figure_open",a.tag="figure",e.tokens[o+1].type="figure_close",e.tokens[o+1].tag="figure",n.dataType&&e.tokens[o-1].attrPush(["data-type","image"]),n.link&&1===s.children.length){[l]=s.children;const t=new e.Token("link_open","a",1);t.attrPush(["href",l.attrGet("src")]),s.children.unshift(t),s.children.push(new e.Token("link_close","a",-1))}if(l=1===s.children.length?s.children[0]:s.children[1],n.figcaption){const r=m(n.figcaption,l);if(r){const[n]=t.parseInline(r,e.env);s.children.push(new e.Token("figcaption_open","figcaption",1)),s.children.push(...n.children),s.children.push(new e.Token("figcaption_close","figcaption",-1)),l.attrs&&(l.attrs=h(l.attrs,"title"))}}if(n.copyAttrs&&l.attrs){const t=!0===n.copyAttrs?"":n.copyAttrs;a.attrs=l.attrs.filter((([n])=>n.match(t))).map((t=>Array.from(t)))}if(n.tabindex&&(e.tokens[o-1].attrPush(["tabindex",r]),r++),n.lazy&&(l.attrs.some((([t])=>"loading"===t))||l.attrs.push(["loading","lazy"])),n.async&&(l.attrs.some((([t])=>"decoding"===t))||l.attrs.push(["decoding","async"])),n.classes&&"string"==typeof n.classes){let t=!1;for(let e=0,r=l.attrs.length;e<r&&!t;e++){const r=l.attrs[e];"class"===r[0]&&(r[1]=`${r[1]} ${n.classes}`,t=!0)}t||l.attrs.push(["class",n.classes])}if(n.removeSrc){const t=l.attrs.find((([t])=>"src"===t));l.attrs.push(["data-src",t[1]]),b(l,"src")}}}))}var _={name:"MarkdownCardWithIcon",props:{path:{type:String,required:!0},customIcon:{type:String,required:!1},iconProps:{type:Object,required:!1,default:()=>({})}},data(){return{}},computed:{md(){const t=new g.A({linkify:!0,html:!0});return t.renderer.rules.image=(t,n,r,o,i)=>{const s=t[n],a=s.attrIndex("src"),l=s.attrs[a][1];console.log("asd",{src:l});const u=e(290)(`./${l}`);return s.attrSet("src",u),s.attrSet("width","50%"),i.renderToken(t,n,r)},t.use(k),t.renderer.rules.bullet_list_open=function(t,n,e,r,o){return"<div class='v-card-text' ><div class='v-row' ><div class='v-col v-col-auto' style='margin:auto;'>"+o.renderToken(t,n,e)},t.renderer.rules.bullet_list_close=function(t,n,e,r,o){return"</div></div></div>"+o.renderToken(t,n,e)},t.renderer.rules.paragraph_open=function(t,n,e,r,o){return t[n].attrJoin("class","my-4"),o.renderToken(t,n,e)},t},page(){return this.$content(this.$props.path)},markdown(){return this.page.content.trim()},title(){return(this.markdown.match(/^#+ .*/)||[""])[0].replace("#","").trim()},body(){return this.markdown.replace(this.title,"")}},methods:{render(t){return this.md.render(t)}}},v=e(1241);const y=(0,v.A)(_,[["render",d]]);var w=y},9764:function(t,n,e){"use strict";e.d(n,{A:function(){return f}});var r=e(6768);const o={class:"ribbon-container"},i=["data-ribbon","title"];function s(t,n,e,s,a,l){return(0,r.uX)(),(0,r.CE)("div",o,[(0,r.Lk)("span",{class:"github-fork-ribbon","data-ribbon":e.text,title:e.text},null,8,i),(0,r.RG)(t.$slots,"default")])}var a=e(5130);const l={props:{right:{type:Boolean,default:!0},text:String},computed:{ribbonClasses(){return{ribbon:!0,"shift-right":this.right}},v(){return this.$vuetify}}},u=()=>{(0,a.$9)((t=>({"056ab2d3":t.$vuetify.theme.current.colors["coming-soon-color"]})))},c=l.setup;l.setup=c?(t,n)=>(u(),c(t,n)):u;var p=l,d=e(1241);const g=(0,d.A)(p,[["render",s]]);var f=g},8438:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return F}});var r=e(9764),o=e(6202),i=e(338),s=e(8818),a=e(6768),l=e(4232),u=e(9983),c=e(3490),p=e(697),d=e(6548),g=e(3745),f=e(3813),h=e(6756),b=e(5526),m=e(1720),k=e(4011);const _={align:"center",style:{"font-weight":"bold",opacity:"0.3"}};function v(t,n,e,v,y,w){const x=s.A,F=i.A,A=o.A,T=r.A;return(0,a.uX)(),(0,a.Wv)(f.I,{align:"center"},{default:(0,a.k6)((()=>[(0,a.bF)(h.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(b.B,null,{default:(0,a.k6)((()=>[(0,a.bF)(F,{path:"together/index","custom-icon":"TogetherIntroductionCardIcon"},{append:(0,a.k6)((()=>[(0,a.bF)(p.O,null,{default:(0,a.k6)((()=>[(0,a.bF)(m.h),(0,a.bF)(c.D,{size:"x-large",color:"action-button-color",rounded:"xl",to:"additional"},{append:(0,a.k6)((()=>[(0,a.bF)(x,{color:"white"})])),default:(0,a.k6)((()=>[(0,a.eW)((0,l.v_)(t.$t("ui.buttons.goToAdditional")),1)])),_:1}),(0,a.bF)(m.h)])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(h.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(b.B,null,{default:(0,a.k6)((()=>[(0,a.bF)(F,{path:"together/how","custom-icon":"TogetherHowCardIcon"})])),_:1})])),_:1}),(0,a.bF)(h.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(b.B,null,{default:(0,a.k6)((()=>[(0,a.bF)(F,{path:"together/where","custom-icon":"TogetherWhereCardIcon"})])),_:1})])),_:1}),(0,a.bF)(h.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(b.B)])),_:1}),(0,a.bF)(h.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(b.B,null,{default:(0,a.k6)((()=>[(0,a.bF)(T,{text:t.$t("phrases.comingSoon")},{default:(0,a.k6)((()=>[(0,a.bF)(d.J,null,{default:(0,a.k6)((()=>[(0,a.bF)(p.O,null,{default:(0,a.k6)((()=>[(0,a.bF)(f.I,{style:{"margin-top":"20px"}},{default:(0,a.k6)((()=>[(0,a.bF)(h.L,null,{default:(0,a.k6)((()=>[(0,a.bF)(b.B,null,{default:(0,a.k6)((()=>[(0,a.Lk)("figure",null,[(0,a.bF)(k.y,{src:u,"max-height":"33vh"}),(0,a.Lk)("figcaption",_,(0,l.v_)(t.$t("phrases.disclaimers.teaserImage")),1)])])),_:1})])),_:1})])),_:1})])),_:1}),(0,a.bF)(g.S,null,{default:(0,a.k6)((()=>[(0,a.bF)(m.h),(0,a.bF)(A,{mouseonlabel:t.$t("phrases.comingSoon"),mouseofflabel:t.$t("phrases.buyMe")},null,8,["mouseonlabel","mouseofflabel"]),(0,a.bF)(m.h)])),_:1})])),_:1})])),_:1},8,["text"])])),_:1})])),_:1})])),_:1})}var y={name:"TogetherPage",data(){return{isHoveringButton:!1}}},w=e(1241);const x=(0,w.A)(y,[["render",v]]);var F=x},290:function(t,n,e){var r={"./logos/logo-with-large-name.png":2483,"./logos/logo.png":6918,"./logos/name-with-second-line.png":6929,"./logos/name.png":6250,"./pictures/founders/Henrik Weiss.png":9269,"./pictures/teasers/packaging.png":9983,"./plant1PNG/1000/plant1_1000.png":7482,"./plant1PNG/1000/plant1w_1000.png":3913,"./plant1PNG/250/plant1_250.png":3955,"./plant1PNG/250/plant1w_250.png":273,"./plant1PNG/500/plant1_500.png":2496,"./plant1PNG/500/plant1w_500.png":9725,"./plant2PNG/1000/plant2_1000.png":8732,"./plant2PNG/1000/plant2w_1000.png":1491,"./plant2PNG/2000/plant2_2000.png":8384,"./plant2PNG/2000/plant2w_2000.png":7513,"./plant2PNG/500/plant2_500.png":276,"./plant2PNG/500/plant2w_500.png":289,"./ui/branches/left.png":9319,"./ui/branches/right.png":3480};function o(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=290},2483:function(t,n,e){"use strict";t.exports=e.p+"img/logo-with-large-name.b04b3b1c.png"},6918:function(t,n,e){"use strict";t.exports=e.p+"img/logo.87cdd841.png"},6250:function(t,n,e){"use strict";t.exports=e.p+"img/name.78246397.png"},9983:function(t,n,e){"use strict";t.exports=e.p+"img/packaging.03b2ecb0.png"},7482:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_1000.0d4df275.png"},3913:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_1000.cc3aa6a4.png"},3955:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_250.6a009b85.png"},273:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_250.f73bdc1d.png"},2496:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_500.cab1b223.png"},9725:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_500.0c54a5bb.png"},8732:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_1000.3694a247.png"},1491:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_1000.81a5a53a.png"},8384:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_2000.6a487a70.png"},7513:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_2000.4d5ee986.png"},276:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_500.12e7811a.png"},289:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_500.ecf79d9a.png"},3480:function(t,n,e){"use strict";t.exports=e.p+"img/right.993d5111.png"}}]);
//# sourceMappingURL=page-together-index.c68f6dfd.js.map