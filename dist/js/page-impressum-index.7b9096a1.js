(self["webpackChunkKussy"]=self["webpackChunkKussy"]||[]).push([[371],{4597:function(t,n,e){"use strict";e.d(n,{A:function(){return w}});var r=e(6768),s=e(4232),i=e(6548),o=e(1606),a=e(697),c=e(6756),l=e(5526);const p=["innerHTML"],u=["innerHTML"];function d(t,n,e,d,g,f){return(0,r.uX)(),(0,r.Wv)(i.J,{class:"bg-card-background text-card-text-color mt-5",align:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(o.r,null,{default:(0,r.k6)((()=>[(0,r.bF)(c.L,{justify:"center",align:"center"},{default:(0,r.k6)((()=>[(0,r.bF)(l.B,{cols:"12"},{default:(0,r.k6)((()=>[(0,r.Lk)("span",{innerHTML:f.render(f.title)},null,8,p)])),_:1}),(0,r.bF)(l.B,{cols:"12"},{default:(0,r.k6)((()=>[e.customIcon?((0,r.uX)(),(0,r.Wv)((0,r.$y)(e.customIcon),(0,s._B)((0,r.v6)({key:0},{width:"15%",height:"auto",...t.$props.iconProps})),null,16)):(0,r.Q3)("",!0)])),_:1})])),_:1})])),_:1}),(0,r.bF)(a.O,null,{default:(0,r.k6)((()=>[(0,r.Lk)("div",{innerHTML:f.render(f.body)},null,8,u)])),_:1}),(0,r.RG)(t.$slots,"append")])),_:3})}var g=e(642);e(4114),e(3375),e(9225),e(3972),e(9209),e(5714),e(7561),e(6197);const f=new Set([!0,!1,"alt","title"]);function h(t,n){return(Array.isArray(t)?t:[]).filter((([t])=>t!==n))}function _(t,n){t&&t.attrs&&(t.attrs=h(t.attrs,n))}function m(t,n){if(!f.has(t))throw new TypeError(`figcaption must be one of: ${[...f]}.`);if("alt"===t)return n.content;const e=n.attrs.find((([t])=>"title"===t));return Array.isArray(e)&&e[1]?(_(n,"title"),e[1]):void 0}function k(t,n){n=n||{},t.core.ruler.before("linkify","image_figures",(function(e){let r=1;for(let s=1,i=e.tokens.length;s<i-1;++s){const o=e.tokens[s];if("inline"!==o.type)continue;if(!o.children||1!==o.children.length&&3!==o.children.length)continue;if(1===o.children.length&&"image"!==o.children[0].type)continue;if(3===o.children.length){const[t,n,e]=o.children;if("link_open"!==t.type||"image"!==n.type||"link_close"!==e.type)continue}if(0!==s&&"paragraph_open"!==e.tokens[s-1].type)continue;if(s!==i-1&&"paragraph_close"!==e.tokens[s+1].type)continue;const a=e.tokens[s-1];let c;if(a.type="figure_open",a.tag="figure",e.tokens[s+1].type="figure_close",e.tokens[s+1].tag="figure",n.dataType&&e.tokens[s-1].attrPush(["data-type","image"]),n.link&&1===o.children.length){[c]=o.children;const t=new e.Token("link_open","a",1);t.attrPush(["href",c.attrGet("src")]),o.children.unshift(t),o.children.push(new e.Token("link_close","a",-1))}if(c=1===o.children.length?o.children[0]:o.children[1],n.figcaption){const r=m(n.figcaption,c);if(r){const[n]=t.parseInline(r,e.env);o.children.push(new e.Token("figcaption_open","figcaption",1)),o.children.push(...n.children),o.children.push(new e.Token("figcaption_close","figcaption",-1)),c.attrs&&(c.attrs=h(c.attrs,"title"))}}if(n.copyAttrs&&c.attrs){const t=!0===n.copyAttrs?"":n.copyAttrs;a.attrs=c.attrs.filter((([n])=>n.match(t))).map((t=>Array.from(t)))}if(n.tabindex&&(e.tokens[s-1].attrPush(["tabindex",r]),r++),n.lazy&&(c.attrs.some((([t])=>"loading"===t))||c.attrs.push(["loading","lazy"])),n.async&&(c.attrs.some((([t])=>"decoding"===t))||c.attrs.push(["decoding","async"])),n.classes&&"string"==typeof n.classes){let t=!1;for(let e=0,r=c.attrs.length;e<r&&!t;e++){const r=c.attrs[e];"class"===r[0]&&(r[1]=`${r[1]} ${n.classes}`,t=!0)}t||c.attrs.push(["class",n.classes])}if(n.removeSrc){const t=c.attrs.find((([t])=>"src"===t));c.attrs.push(["data-src",t[1]]),_(c,"src")}}}))}var b={name:"MarkdownCardWithIcon",props:{path:{type:String,required:!0},customIcon:{type:String,required:!1},iconProps:{type:Object,required:!1,default:()=>({})}},data(){return{}},computed:{md(){const t=new g.A({linkify:!0,html:!0});return t.renderer.rules.image=(t,n,r,s,i)=>{const o=t[n],a=o.attrIndex("src"),c=o.attrs[a][1];console.log("asd",{src:c});const l=e(290)(`./${c}`);return o.attrSet("src",l),o.attrSet("width","50%"),i.renderToken(t,n,r)},t.use(k),t.renderer.rules.bullet_list_open=function(t,n,e,r,s){return"<div class='v-card-text' ><div class='v-row' ><div class='v-col v-col-auto' style='margin:auto;'>"+s.renderToken(t,n,e)},t.renderer.rules.bullet_list_close=function(t,n,e,r,s){return"</div></div></div>"+s.renderToken(t,n,e)},t.renderer.rules.paragraph_open=function(t,n,e,r,s){return t[n].attrJoin("class","my-4"),s.renderToken(t,n,e)},t.renderer.rules.table_open=function(t,n,e,r,s){return console.debug("Table"),"<div class='align-center  v-table v-theme--light v-table--density-default text-card-text-color'><div class='v-table__wrapper'>"+s.renderToken(t,n,e)},t.renderer.rules.table_close=function(t,n,e,r,s){return console.debug("Table"),s.renderToken(t,n,e)+"</div></div>"},t.renderer.rules.thead_open=function(t,n,e,r,s){return s.renderToken(t,n,e)},t.renderer.rules.thead_close=function(t,n,e,r,s){return s.renderToken(t,n,e)},t.renderer.rules.tbody_open=function(t,n,e,r,s){return t[n].attrJoin("class","v-table__tbody"),s.renderToken(t,n,e)},t.renderer.rules.tr_open=function(t,n,e,r,s){return t[n].attrJoin("class","v-table__tr"),s.renderToken(t,n,e)},t.renderer.rules.th_open=function(t,n,e,r,s){return t[n].attrJoin("class","v-table__th"),s.renderToken(t,n,e)+"</td>"},t.renderer.rules.th_close=function(t,n,e,r,s){return s.renderToken(t,n,e)+"</th>"},t.renderer.rules.td_open=function(t,n,e,r,s){return t[n].attrJoin("class","v-table__td"),s.renderToken(t,n,e)},t},page(){return this.$content(this.$props.path)},markdown(){return this.page.content.trim()},title(){return(this.markdown.match(/^#+ .*/)||[""])[0].replace("#","").trim()},body(){return this.markdown.replace(this.title,"")}},methods:{render(t){return this.md.render(t)}}},y=e(1241);const v=(0,y.A)(b,[["render",d]]);var w=v},8705:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return l}});var r=e(4597),s=e(6768);function i(t,n,e,i,o,a){const c=r.A;return(0,s.uX)(),(0,s.Wv)(c,{path:"impressum","custom-icon":"ImpressumCardIcon"})}var o={name:"ImpressumPage"},a=e(1241);const c=(0,a.A)(o,[["render",i]]);var l=c},290:function(t,n,e){var r={"./logos/logo-with-large-name.png":2483,"./logos/logo.png":6918,"./logos/name-with-second-line.png":6929,"./logos/name.png":6250,"./pictures/founders/Henrik Weiss.png":9269,"./pictures/teasers/packaging.png":9983,"./plant1PNG/1000/plant1_1000.png":7482,"./plant1PNG/1000/plant1w_1000.png":3913,"./plant1PNG/250/plant1_250.png":3955,"./plant1PNG/250/plant1w_250.png":273,"./plant1PNG/500/plant1_500.png":2496,"./plant1PNG/500/plant1w_500.png":9725,"./plant2PNG/1000/plant2_1000.png":8732,"./plant2PNG/1000/plant2w_1000.png":1491,"./plant2PNG/2000/plant2_2000.png":8384,"./plant2PNG/2000/plant2w_2000.png":7513,"./plant2PNG/500/plant2_500.png":276,"./plant2PNG/500/plant2w_500.png":289,"./ui/branches/left.png":9319,"./ui/branches/right.png":3480};function s(t){var n=i(t);return e(n)}function i(t){if(!e.o(r,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=i,t.exports=s,s.id=290},2483:function(t,n,e){"use strict";t.exports=e.p+"img/logo-with-large-name.b04b3b1c.png"},6918:function(t,n,e){"use strict";t.exports=e.p+"img/logo.87cdd841.png"},6250:function(t,n,e){"use strict";t.exports=e.p+"img/name.78246397.png"},9983:function(t,n,e){"use strict";t.exports=e.p+"img/packaging.03b2ecb0.png"},7482:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_1000.0d4df275.png"},3913:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_1000.cc3aa6a4.png"},3955:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_250.6a009b85.png"},273:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_250.f73bdc1d.png"},2496:function(t,n,e){"use strict";t.exports=e.p+"img/plant1_500.cab1b223.png"},9725:function(t,n,e){"use strict";t.exports=e.p+"img/plant1w_500.0c54a5bb.png"},8732:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_1000.3694a247.png"},1491:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_1000.81a5a53a.png"},8384:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_2000.6a487a70.png"},7513:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_2000.4d5ee986.png"},276:function(t,n,e){"use strict";t.exports=e.p+"img/plant2_500.12e7811a.png"},289:function(t,n,e){"use strict";t.exports=e.p+"img/plant2w_500.ecf79d9a.png"},3480:function(t,n,e){"use strict";t.exports=e.p+"img/right.993d5111.png"}}]);
//# sourceMappingURL=page-impressum-index.7b9096a1.js.map