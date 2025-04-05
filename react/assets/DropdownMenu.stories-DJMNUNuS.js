import{r as s,j as e,I as l,R as v}from"./index-CQvLnOzt.js";import{S as c}from"./More-Bs48QnoR.js";import{S as a}from"./Placeholder-BX9VxzUh.js";import{D as d,M as o}from"./MenuItem-3XbmOhQ6.js";import{M as j}from"./MenuDivider-1i-HSnjH.js";import{M as C}from"./MenuExtraContent-DOj96Ryq.js";import{T as x}from"./Text-BxBc9K-H.js";import{S as k}from"./Select-BizdNTgp.js";import"./focusable-C-f1O5bg.js";import"./ListItem-DHkAbPWq.js";import"./LinkAction-2TLGLsKB.js";import"./Tag-B1e8e5MG.js";import"./Icon-UKC5y2xb.js";import"./List-moSXiJQy.js";import"./SvgCheckmark-CLWBBpQy.js";import"./SvgCaretDownSmall-BpvtEenS.js";const u=n=>s.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...n},s.createElement("path",{d:"M11.1 1.5v-.2c0-.1 0-.1-.1-.1H9.4V0h-3v1.2H4.8c-.1 0-.1 0-.1.1v.2H2V16h12V1.5zM13 15H3V2h1.7v.6c0 .1 0 .1.1.1H11c.1 0 .1 0 .1-.1V2H13z"})),I=n=>s.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...n},s.createElement("path",{d:"M2 2V0h2v12h12v2h-2v2h-2v-2H2V4H0V2z"}),s.createElement("path",{d:"M14 11V2H5v2h7v7z"})),p=n=>s.createElement("svg",{viewBox:"0 0 16 16",width:"1rem",height:"1rem",fill:"var(--iui-color-icon-muted, currentColor)",...n},s.createElement("path",{d:"M16 8l-3-3v2H9V3h2L8 0 5 3h2v4H3V5L0 8l3 3V9h4v4H5l3 3 3-3H9V9h4v2z"})),_={title:"DropdownMenu"},M=()=>{const n=r=>()=>{console.log(`Item #${r} clicked!`)};return e.jsx(d,{closeOnItemClick:!0,menuItems:e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:n(1),children:"Item #1"}),e.jsx(o,{onClick:n(2),children:"Item #2"}),e.jsx(o,{onClick:n(3),disabled:!0,children:"Item #3"})]}),children:e.jsx(l,{label:"More options",children:e.jsx(c,{})})})};M.decorators=[n=>e.jsx("div",{style:{minHeight:150},children:e.jsx(n,{})})];const g=()=>{const n=(t,i)=>()=>{console.log(`${t} clicked!`),i()},r=t=>[e.jsx(o,{onClick:n("Crop",t),startIcon:e.jsx(I,{}),children:"Crop"},1),e.jsx(o,{onClick:n("Paste",t),startIcon:e.jsx(u,{}),children:"Paste"},2),e.jsx(o,{onClick:n("Move",t),startIcon:e.jsx(p,{}),children:"Move"},3)];return e.jsx(d,{menuItems:r,children:e.jsx(l,{label:"More options",children:e.jsx(c,{})})})};g.decorators=[n=>e.jsx("div",{style:{minHeight:150},children:e.jsx(n,{})})];const b=()=>{const n=(t,i)=>()=>{console.log(`${t} clicked!`),i()},r=t=>[e.jsx(o,{onClick:n("Crop",t),endIcon:e.jsx(I,{}),children:"Crop"},1),e.jsx(o,{onClick:n("Paste",t),endIcon:e.jsx(u,{}),children:"Paste"},2),e.jsx(o,{onClick:n("Move",t),endIcon:e.jsx(p,{}),children:"Move"},3)];return e.jsx(d,{menuItems:r,children:e.jsx(l,{label:"More options",children:e.jsx(c,{})})})};b.decorators=[n=>e.jsx("div",{style:{minHeight:150},children:e.jsx(n,{})})];const w=()=>{const n=(t,i)=>()=>{console.log(`Item #${t} clicked!`),i()},r=t=>[e.jsx(o,{onClick:n(1,t),startIcon:e.jsx(a,{}),sublabel:"Sublabel #1",children:"Item #1"},1),e.jsx(o,{onClick:n(2,t),startIcon:e.jsx(a,{}),sublabel:"Sublabel #2",children:"Item #2"},2),e.jsx(o,{onClick:n(3,t),startIcon:e.jsx(a,{}),sublabel:"Sublabel #3",children:"Item #3"},3)];return e.jsx("div",{style:{minHeight:200},children:e.jsx(d,{menuItems:r,children:e.jsx(l,{label:"More options",children:e.jsx(c,{})})})})};w.decorators=[n=>e.jsx("div",{style:{minHeight:150},children:e.jsx(n,{})})];const H=()=>{const n=(t,i)=>()=>{console.log(`Item #${t} clicked!`),i()},r=t=>[e.jsx(o,{onClick:n(1,t),children:"Item #1"},1),e.jsx(o,{onClick:n(2,t),children:"Item #2"},2),e.jsx(o,{subMenuItems:[e.jsx(o,{subMenuItems:[e.jsx(o,{onClick:n(7,t),children:"Item #7"},7),e.jsx(o,{onClick:n(8,t),children:"Item #8"},8)],children:"Item #4"},4),e.jsx(o,{onClick:n(5,t),children:"Item #5"},5),e.jsx(o,{subMenuItems:[e.jsx(o,{onClick:n(9,t),children:"Item #9"},9),e.jsx(o,{onClick:n(10,t),children:"Item #10"},10)],children:"Item #6"},6)],children:"Item #3"},3)];return e.jsx(d,{menuItems:r,children:e.jsx(l,{label:"More options",children:e.jsx(c,{})})})};H.decorators=[n=>e.jsx("div",{style:{minHeight:150},children:e.jsx(n,{})})];const S=()=>{const n=(t,i)=>()=>{console.log(`Item #${t} clicked!`),i()},r=t=>[e.jsx(o,{onClick:n(1,t),children:"Item #1"},1),e.jsx(o,{onClick:n(2,t),children:"Item #2"},2),e.jsx(j,{},3),e.jsx(o,{onClick:n(3,t),disabled:!0,children:"Item #3"},4),e.jsx(o,{onClick:n(4,t),children:"Item #4"},5)];return e.jsx(d,{menuItems:r,children:e.jsx(l,{label:"More options",children:e.jsx(c,{})})})};S.decorators=[n=>e.jsx("div",{style:{minHeight:200},children:e.jsx(n,{})})];const f=()=>{const n=(m,h)=>()=>{console.log(`'${m}' clicked!`),h()},[r,t]=v.useState("User"),i=m=>[e.jsx(C,{children:e.jsxs(e.Fragment,{children:[e.jsx(x,{variant:"leading",children:"Terry Rivers"}),e.jsx(x,{isMuted:!0,style:{marginBottom:8},children:"terry.rivers@email.com"}),e.jsx(k,{options:[{value:"User",label:"User"},{value:"Moderator",label:"Moderator"},{value:"Administrator",label:"Administrator"}],value:r,onChange:h=>t(h)})]})},0),e.jsx(j,{},1),e.jsx(o,{onClick:n("View profile",m),children:"View profile"},2),e.jsx(o,{onClick:n("Sign out",m),children:"Sign out"},3)];return e.jsx(d,{menuItems:i,children:e.jsx(l,{label:"Toggle user info",children:e.jsx(c,{})})})};f.decorators=[n=>e.jsx("div",{style:{minHeight:250},children:e.jsx(n,{})})];typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{M as Basic,H as Submenu,f as WithContent,b as WithEndIcons,S as WithSeparator,g as WithStartIcons,w as WithSublabels,_ as default};
