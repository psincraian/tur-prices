(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{5531:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(2265);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(...e)=>e.filter((e,r,t)=>!!e&&t.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:a="",children:c,iconNode:l,...u},d)=>(0,n.createElement)("svg",{ref:d,...s,width:r,height:r,stroke:e,strokeWidth:i?24*Number(t)/Number(r):t,className:o("lucide",a),...u},[...l.map(([e,r])=>(0,n.createElement)(e,r)),...Array.isArray(c)?c:[c]])),c=(e,r)=>{let t=(0,n.forwardRef)(({className:t,...s},c)=>(0,n.createElement)(a,{ref:c,iconNode:r,className:o(`lucide-${i(e)}`,t),...s}));return t.displayName=`${e}`,t}},4542:function(e,r,t){Promise.resolve().then(t.bind(t,10)),Promise.resolve().then(t.bind(t,1169))},10:function(e,r,t){"use strict";t.r(r),t.d(r,{CodeBlock:function(){return l}});var n=t(7437),i=t(2265),o=t(3023),s=t(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s.Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),c=(0,s.Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);function l(e){let{code:r,language:t}=e,[s,l]=(0,i.useState)(!1),u=async()=>{await navigator.clipboard.writeText(r),l(!0),setTimeout(()=>l(!1),2e3)};return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("pre",{className:"language-".concat(t," p-4 rounded-lg bg-muted overflow-x-auto"),children:(0,n.jsx)("code",{children:r})}),(0,n.jsx)(o.z,{size:"icon",variant:"ghost",className:"absolute top-2 right-2",onClick:u,children:s?(0,n.jsx)(a,{className:"h-4 w-4"}):(0,n.jsx)(c,{className:"h-4 w-4"})})]})}},1169:function(e,r,t){"use strict";t.r(r),t.d(r,{SearchBar:function(){return l}});var n=t(7437),i=t(2265),o=t(9311);let s=i.forwardRef((e,r)=>{let{className:t,type:i,...s}=e;return(0,n.jsx)("input",{type:i,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});s.displayName="Input";var a=t(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,a.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function l(){let[e,r]=(0,i.useState)("");return(0,n.jsxs)("div",{className:"relative mb-8",children:[(0,n.jsx)(c,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4"}),(0,n.jsx)(s,{type:"search",placeholder:"Search documentation...",className:"pl-10",value:e,onChange:e=>{r(e.target.value)}})]})}},3023:function(e,r,t){"use strict";t.d(r,{z:function(){return s}});var n=t(7437),i=t(2265),o=t(9311);let s=i.forwardRef((e,r)=>{let{className:t,variant:i="default",...s}=e;return(0,n.jsx)("button",{className:(0,o.cn)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50","default"===i&&"bg-primary text-primary-foreground hover:bg-primary/90","outline"===i&&"border border-input bg-background hover:bg-accent hover:text-accent-foreground","h-10 px-4 py-2",t),ref:r,...s})});s.displayName="Button"},9311:function(e,r,t){"use strict";t.d(r,{cn:function(){return o}});var n=t(7042),i=t(4769);function o(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.m6)((0,n.W)(r))}}},function(e){e.O(0,[895,971,864,744],function(){return e(e.s=4542)}),_N_E=e.O()}]);