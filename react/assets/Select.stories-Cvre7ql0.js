import{r as n,O as c,K as v,V as b,j as o}from"./index-CQvLnOzt.js";import{S as p}from"./SmileyHappy-BSiAnUfp.js";import{S as x}from"./SmileySad-D3kts0Th.js";import{S as r}from"./Select-BizdNTgp.js";import{M as m}from"./MenuItem-3XbmOhQ6.js";import"./Tag-B1e8e5MG.js";import"./LinkAction-2TLGLsKB.js";import"./Icon-UKC5y2xb.js";import"./List-moSXiJQy.js";import"./SvgCheckmark-CLWBBpQy.js";import"./SvgCaretDownSmall-BpvtEenS.js";import"./focusable-C-f1O5bg.js";import"./ListItem-DHkAbPWq.js";let i="…";const d=n.forwardRef((e,a)=>{let{text:t,endCharsCount:l,textRenderer:s,style:u,...h}=e;return n.createElement(c,{as:"span",style:{display:"flex",minWidth:0,flexGrow:1,whiteSpace:"nowrap",...u},itemsCount:t.length,...h,ref:a},n.createElement(v,null,n.createElement(b,null,t),n.createElement("slot",{"aria-hidden":!0,style:{pointerEvents:"none"}})),n.createElement(S,{text:t,endCharsCount:l,textRenderer:s}))});let S=e=>{let{text:a,endCharsCount:t=6,textRenderer:l}=e,{visibleCount:s}=c.useContext(),u=n.useMemo(()=>s<a.length?`${a.substring(0,s-t-i.length)}${i}${a.substring(a.length-t)}`:a,[t,a,s]);return(l==null?void 0:l(u,a))??u};const g=e=>n.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...e},n.createElement("path",{d:"M8 0a8 8 0 108 8 7.998 7.998 0 00-8-8zM5 5a1.147 1.147 0 011 1.25A1.147 1.147 0 015 7.5a1.147 1.147 0 01-1-1.25A1.147 1.147 0 015 5zm6.5 6h-7a.5.5 0 010-1h7a.5.5 0 010 1zM11 7.5a1.147 1.147 0 01-1-1.25A1.147 1.147 0 0111 5a1.147 1.147 0 011 1.25 1.147 1.147 0 01-1 1.25z"})),A={title:"Select",decorators:[(e,a)=>a.globalState.story.includes("truncate-middle-text")?o.jsx("div",{style:{minHeight:365,width:300},children:o.jsx(e,{})}):o.jsx("div",{style:{minHeight:365},children:o.jsx(e,{})})]},B=()=>{const e=[{value:"1",label:"Item #1"},{value:"2",label:"Item #2",disabled:!0},{value:"3",label:"Item #3"}];return o.jsx(r,{options:e,placeholder:"Placeholder text"})},F=()=>{const e=[{value:"happy",label:"Happy",startIcon:o.jsx(p,{})},{value:"neutral",label:"Neutral",startIcon:o.jsx(g,{})},{value:"sad",label:"Sad",startIcon:o.jsx(x,{})}],[a,t]=n.useState(void 0);return o.jsx(r,{options:e,value:a,onChange:t,placeholder:"How are you today?"})},_=()=>{const e=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],[a,t]=n.useState(2);return o.jsx(r,{options:e,value:a,onChange:t,placeholder:"Placeholder text",popoverProps:{visible:!0}})},W=()=>{const e=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],[a,t]=n.useState(void 0);return o.jsx("div",{style:{minHeight:350},children:o.jsx(r,{disabled:!0,options:e,value:a,onChange:t,placeholder:"Placeholder text"})})},N=()=>{const e=[{value:1,label:"Item #1"},{value:2,label:"Item #2"},{value:3,label:"Item #3"}],[a,t]=n.useState(2);return o.jsx("div",{style:{minHeight:350},children:o.jsx(r,{options:e,value:a,onChange:t,placeholder:"Placeholder text",disabled:!0})})},L=()=>{const[e,a]=n.useState(void 0);return o.jsx(r,{options:[...Array(20).fill(null)].map((t,l)=>({label:`Item #${l}`,value:l})),value:e,onChange:a,placeholder:"Placeholder text"})},$=()=>{const e=[{value:1,label:"Item #1",sublabel:"Sublabel #1"},{value:2,label:"Item #2",sublabel:"Sublabel #2"},{value:3,label:"Item #3",sublabel:"Sublabel #3"}],[a,t]=n.useState(void 0);return o.jsx(r,{options:e,value:a,onChange:t,placeholder:"Placeholder text",size:"large"})},z=()=>{const e=[{value:"yellow",label:"Yellow"},{value:"green",label:"Green"},{value:"red",label:"Red"}],[a,t]=n.useState(void 0);return o.jsx(r,{options:e,value:a,onChange:l=>t(l),placeholder:"Placeholder text",itemRenderer:l=>o.jsx(m,{style:{color:l.value},children:l.label}),selectedItemRenderer:l=>o.jsx("span",{style:{backgroundColor:l.value},children:l.label})})},O=()=>{const e=[{value:"MyFileWithAReallyLongNameThatWillBeTruncatedBecauseItIsReallyThatLongSoHardToBelieve_FinalVersion_V2.html",label:"MyFileWithAReallyLongNameThatWillBeTruncatedBecauseItIsReallyThatLongSoHardToBelieve_FinalVersion_V2.html"},{value:"ShortNameFile.jpg",label:"ShortNameFile.jpg"},{value:"SomeOtherFile.dgn",label:"SomeOtherFile.dgn"}],[a,t]=n.useState(e[0].value);return o.jsx(r,{options:e,value:a,onChange:t,placeholder:"Placeholder text",itemRenderer:l=>o.jsx(m,{children:o.jsx(d,{text:l.label})}),selectedItemRenderer:l=>o.jsx(d,{text:l.label})})},D=()=>{const[e,a]=n.useState([]);return o.jsx("div",{style:{minHeight:350},children:o.jsx(r,{options:[...Array(20).fill(null)].map((t,l)=>({label:`Item #${l}`,value:l})),value:e,onChange:(t,l)=>a(s=>l==="removed"?s.filter(u=>t!==u):[...s,t]),placeholder:"Placeholder text",multiple:!0})})},G=()=>{const[e,a]=n.useState([]);return o.jsx("div",{style:{minHeight:350},children:o.jsx(r,{options:[...Array(20).fill(null)].map((t,l)=>({label:`Item #${l}`,value:l})),value:e,onChange:(t,l)=>a(s=>l==="removed"?s.filter(u=>t!==u):[...s??[],t]),placeholder:"Placeholder text",multiple:!0,selectedItemRenderer:t=>o.jsx(o.Fragment,{children:t.map(l=>l.label).join(", ")})})})},k=()=>{const e=[{value:"1",label:"Item #1"},{value:"2",label:"Item #2",disabled:!0},{value:"3",label:"Item #3"},{value:"4",label:"Item #4"}];return o.jsx(r,{native:!0,options:e,placeholder:"Choose an option"})},K=()=>{const e=[{value:"1",label:"Item #1"},{value:"2",label:"Item #2",disabled:!0},{value:"3",label:"Item #3"}];return o.jsx(r,{native:!0,styleType:"borderless",defaultValue:"1",options:e})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{B as Basic,K as Borderless,z as Custom,W as Disabled,N as DisabledWithSelectedValue,L as ManyItems,D as Multi,G as MultiCustomRenderer,k as Native,$ as Sublabels,O as TruncateMiddleText,F as WithIcons,_ as WithSelectedValue,A as default};
