import{r as a,B as b,c as M,j as r,T as f}from"./index-CQvLnOzt.js";import{A as c}from"./Avatar-DGq3Wa-V.js";import{g as u}from"./colors-ymlpSE_k.js";const d=a.forwardRef((i,e)=>{let t=99,{children:n,animated:g=!1,stacked:o=!0,maxIcons:s=5,iconSize:l="small",countIconProps:m,className:A,...j}=i,p=a.Children.toArray(n),h=p.length,y=v=>p.slice(0,v).map(x=>a.cloneElement(x,{status:void 0,size:l}));return a.createElement(b,{className:M("iui-avatar-list",{"iui-animated":g,"iui-stacked":o},A),ref:e,...j},p.length<=s+1&&y(s+1),p.length>s+1&&a.createElement(a.Fragment,null,y(s),a.createElement(b,{...m,className:M("iui-avatar","iui-avatar-count",m==null?void 0:m.className),"data-iui-size":l!=="medium"?l:void 0},h<=t?`${h-s}`:`${t}+`)))}),$={title:"AvatarGroup"},N=()=>{const i=["Terry Rivers","Robin Mercer","Morgan Vera","Ace Cash","Tanner Fraser","Ashley Miles","Jean Mullins"];return r.jsx(d,{iconSize:"medium",children:i.map((e,t)=>r.jsx(c,{abbreviation:e.split(" ").map(n=>n[0]).join(""),backgroundColor:u(e),title:e},`${e}-${t}`))})},T=()=>{const i=["Terry Rivers","Robin Mercer","Morgan Vera","Jean Mullins","Ashley Miles"];return r.jsx(d,{animated:!0,iconSize:"medium",children:i.map((e,t)=>r.jsx(c,{abbreviation:e.split(" ").map(n=>n[0]).join(""),backgroundColor:u(e),title:e},`${e}-${t}`))})},k=()=>{const i=["Terry Rivers","Robin Mercer","Morgan Vera","Ace Cash","Tanner Fraser","Ashley Miles","Jean Mullins","Nico Triplett","Drew Abel","Kendall Simons","Kennedy Gray","Charlie Mayfield","Peyton Pennington","Justice Harrington","Jessie Dodd"];return r.jsx(r.Fragment,{children:r.jsx(d,{iconSize:"large",children:Array(110).fill(null).map((e,t)=>i[t%i.length]).map((e,t)=>r.jsx(c,{abbreviation:e.split(" ").map(n=>n[0]).join(""),backgroundColor:u(e),title:e},`${e}-${t}`))})})},w=()=>{const i=["Terry Rivers","Robin Mercer","Morgan Vera","Ashley Miles","Jean Mullins","Charlie Mayfield","Peyton Pennington","Justice Harrington"];return r.jsx(d,{stacked:!1,iconSize:"medium",children:i.map((e,t)=>r.jsx(c,{abbreviation:e.split(" ").map(n=>n[0]).join(""),backgroundColor:u(e),title:e},`${e}-${t}`))})},J=()=>{const i=["Terry Rivers","Robin Mercer","Morgan Vera","Ashley Miles","Jean Mullins","Charlie Mayfield","Peyton Pennington","Justice Harrington"],[e,t]=a.useState(null),g=i.slice(5).join(`
`);return r.jsxs(r.Fragment,{children:[r.jsx(d,{countIconProps:{ref:t},iconSize:"medium",children:i.map((o,s)=>r.jsx(c,{abbreviation:o.split(" ").map(l=>l[0]).join(""),backgroundColor:u(o),title:o},`${o}-${s}`))}),r.jsx(f,{reference:e,content:g,placement:"right",style:{whiteSpace:"pre"}})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Animated,N as Basic,k as ManyAvatars,w as NonStacked,J as WithTooltip,$ as default};
