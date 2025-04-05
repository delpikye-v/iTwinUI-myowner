import{r,j as e}from"./index-CQvLnOzt.js";import{B as t}from"./Button-yVJDKh0p.js";import{D as c,a as C,b as O}from"./Dialog-p3omBbS-.js";import"./ProgressRadial-Ddgwu_-e.js";import"./useEventListener-uvI_g4WG.js";import"./focusable-C-f1O5bg.js";const u=r.forwardRef((n,i)=>{let{isOpen:o=!1,isDismissible:s=!0,closeOnEsc:l=!0,closeOnExternalClick:a=!0,onClose:p,title:y,children:h,portal:x=!0,wrapperProps:g,backdropProps:b,titleBarProps:f,...j}=n;return r.createElement(c,{isOpen:o,closeOnEsc:l,closeOnExternalClick:a,isDismissible:s,onClose:p,preventDocumentScroll:!0,trapFocus:!0,setFocus:!0,ref:i,portal:x,...g},r.createElement(c.Backdrop,b),r.createElement(c.Main,{"aria-modal":!0,...j},r.createElement(c.TitleBar,{titleText:y,...f}),h))}),d=Object.assign({},C),m=Object.assign({},O),B={title:"Modal"},w=()=>{const[n,i]=r.useState(!1),o=()=>{i(!1)},s=()=>{console.log("onClose"),o()},l=()=>{console.log("Primary button"),o()},a=()=>{console.log("Secondary button"),o()};return e.jsxs(e.Fragment,{children:[e.jsx(t,{styleType:"high-visibility",onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{isOpen:n,title:"This is the title",onClose:s,onKeyDown:()=>console.log("onKeyDown"),children:[e.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs(m,{children:[e.jsx(t,{styleType:"high-visibility",onClick:l,children:"Primary"}),e.jsx(t,{onClick:a,children:"Secondary"})]})]})]})},T=()=>{const[n,i]=r.useState(!1),o=()=>{i(!1)},s=()=>{console.log("onClose"),o()},l=()=>{console.log("Primary button"),o()},a=()=>{console.log("Secondary button"),o()};return e.jsxs(e.Fragment,{children:[e.jsx(t,{styleType:"high-visibility",onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{isOpen:n,title:"This is the title",onClose:s,onKeyDown:()=>console.log("onKeyDown"),isDismissible:!1,children:[e.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs(m,{children:[e.jsx(t,{styleType:"high-visibility",onClick:l,children:"Primary"}),e.jsx(t,{onClick:a,children:"Secondary"})]})]})]})},P=()=>{const[n,i]=r.useState(!1),o=()=>{i(!1)},s=()=>{console.log("onClose"),o()},l=()=>{console.log("Primary button"),o()},a=()=>{console.log("Secondary button"),o()};return e.jsxs(e.Fragment,{children:[e.jsx(t,{styleType:"high-visibility",onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{isOpen:n,title:"This is the title",onClose:s,onKeyDown:()=>console.log("onKeyDown"),closeOnEsc:!1,closeOnExternalClick:!1,children:[e.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs(m,{children:[e.jsx(t,{styleType:"high-visibility",onClick:l,children:"Primary"}),e.jsx(t,{onClick:a,children:"Secondary"})]})]})]})},S=()=>{const[n,i]=r.useState(!1),o=()=>{i(!1)},s=()=>{console.log("onClose"),o()},l=()=>{console.log("Primary button"),o()},a=()=>{console.log("Secondary button"),o()};return e.jsxs(e.Fragment,{children:[e.jsx(t,{styleType:"high-visibility",onClick:()=>i(!0),children:"Open Modal"}),e.jsxs(u,{isOpen:n,title:"This is the title",onClose:s,onKeyDown:()=>console.log("onKeyDown"),styleType:"fullPage",children:[e.jsx(d,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsxs(m,{children:[e.jsx(t,{styleType:"high-visibility",onClick:l,children:"Primary"}),e.jsx(t,{onClick:a,children:"Secondary"})]})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Basic,S as FullPageModal,T as NonDismissibleModal,P as OutsideClickAndEscDoesNotClose,B as default};
