import{r as e,B as r,k as p,c as l,K as v,V as x}from"./index-CQvLnOzt.js";const N=e.forwardRef((s,n)=>{let{value:t,indeterminate:d=t===void 0,labels:i=[],isAnimated:o=!1,status:u,className:c,labelGroupProps:a,...m}=s,g=p(t??100,0,100);return e.createElement(r,{className:l("iui-progress-indicator-linear",c),ref:n,"data-iui-status":u,"data-iui-indeterminate":d?"true":void 0,"data-iui-animated":o?"true":void 0,...m,style:{"--iui-progress-percentage":`${g}%`,...s.style}},e.createElement(v,null,t!==100&&e.createElement(x,null,"Loading."),e.createElement("slot",null)),i.length>0&&e.createElement(r,{as:"div",...a,className:l("iui-progress-indicator-linear-label",a==null?void 0:a.className)},i.map((E,f)=>e.createElement("span",{key:f},E))))});export{N as P};
