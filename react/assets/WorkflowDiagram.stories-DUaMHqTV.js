import{r as e,B as s,c as p,T as f,j as d}from"./index-CQvLnOzt.js";const v=i=>{let{title:n,description:r,className:l,style:a,contentProps:t,...m}=i,o=e.createElement(s,{as:"li",className:p("iui-workflow-diagram-step",l),style:a,...m},e.createElement(s,{as:"span",...t,className:p("iui-workflow-diagram-content",t==null?void 0:t.className)},n));return r?e.createElement(f,{content:r},o):o},w=e.forwardRef((i,n)=>{let{steps:r,className:l,contentProps:a,wrapperProps:t,...m}=i;return e.createElement(s,{as:"div",...t,ref:n},e.createElement(s,{as:"ol",className:p("iui-workflow-diagram",l),...m},r.map((o,c)=>{let u=a==null?void 0:a(c);return e.createElement(v,{contentProps:u,key:c,title:o.name,description:o.description})})))}),k={title:"WorkflowDiagram"},S=()=>d.jsx(w,{steps:[{name:"Start"},{name:"Set parameters"},{name:"Invite collaborators"},{name:"Review & Approve"},{name:"Complete"}]}),T=()=>d.jsx(w,{steps:[{name:"Start",description:"Start Tooltip"},{name:"Set parameters",description:"Set parameters Tooltip"},{name:"Invite collaborators",description:"Invite collaborators Tooltip"},{name:"Review & Approve",description:"Review & Approve Tooltip"},{name:"Complete",description:"Complete Tooltip"}]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as Basic,T as WithTooltips,k as default};
