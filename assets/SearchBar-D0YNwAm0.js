import{h as D,l as c,D as E,ai as F,I as P,aX as z}from"./index-C3MhWRwW.js";import{I as H}from"./Input-BXaztJrE.js";import{S as J}from"./Spotlight-DF3apNXb.js";import{r as o}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as s}from"../vendor/vendor-motion-D2gXNOxm.js";import{f as L}from"./index-DuVU6IFm.js";import{aI as M,aJ as O}from"../vendor/vendor-icons-UxbXHH06.js";const i=D(({css:t,cssVar:r})=>({icon:t`
    color: ${r.colorTextPlaceholder};
  `,search:t`
    position: relative;
    max-width: 100%;
  `,tag:c(E.blur,t`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 6px;
      transform: translateY(-50%);

      color: ${r.colorTextDescription};

      kbd {
        color: inherit;
      }
    `)})),h=o.memo(({defaultValue:t="",spotlight:r,className:x,value:g,onInputChange:S,placeholder:y,enableShortKey:l,shortKey:a="mod+k",onSearch:j,loading:u,style:k,onChange:v,onBlur:I,onPressEnter:N,onFocus:T,styles:{input:w,shortKey:C}={},classNames:{input:_,shortKey:b}={},...B})=>{const[n,m]=F(t,{defaultValue:t,onChange:S,value:g}),[R,p]=o.useState(!0),f=o.useRef(null),d=o.useMemo(()=>a.includes("+")?a:`mod+${a}`,[a]);return L(d,()=>{l&&f.current?.focus()},{enableOnFormTags:!0,enabled:!!l&&!!a,preventDefault:!0}),s.jsxs("div",{className:c(i.search,x),style:k,children:[r&&s.jsx(J,{}),s.jsx(H,{allowClear:!0,className:_,placeholder:y??"Type keywords...",ref:f,style:w,value:n,prefix:s.jsx(P,{className:i.icon,icon:u?M:O,size:"small",spin:u,style:{marginRight:4}}),onBlur:e=>{I?.(e),m(e.target.value),p(!0)},onChange:e=>{m(e.target.value),v?.(e)},onFocus:e=>{T?.(e),p(!1)},onPressEnter:e=>{N?.(e),j?.(n)},...B}),l&&R&&!n&&s.jsx(z,{compact:!0,className:c(i.tag,b),keys:d,style:C})]})});h.displayName="SearchBar";var U=h;export{U as S};
