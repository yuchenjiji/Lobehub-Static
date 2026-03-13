import{f as E,j as i,aa as F,af as D,I as P,b4 as z}from"./index-DgmZNIaB.js";import{I as G}from"./Input-BmIFe2jN.js";import{S as H}from"./Spotlight-OwzPiFwG.js";import{r as o}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as s}from"../vendor/vendor-motion--v3N1cMI.js";import{f as L}from"./index-Dw18F9-S.js";import{aF as M,aG as O}from"../vendor/vendor-icons-DA3bMca7.js";const c=E(({css:t,cssVar:r})=>({icon:t`
    color: ${r.colorTextPlaceholder};
  `,search:t`
    position: relative;
    max-width: 100%;
  `,tag:i(F.blur,t`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 6px;
      transform: translateY(-50%);

      color: ${r.colorTextDescription};

      kbd {
        color: inherit;
      }
    `)})),h=o.memo(({defaultValue:t="",spotlight:r,className:x,value:g,onInputChange:S,placeholder:y,enableShortKey:l,shortKey:a="mod+k",onSearch:j,loading:u,style:k,onChange:v,onBlur:N,onPressEnter:T,onFocus:b,styles:{input:w,shortKey:C}={},classNames:{input:I,shortKey:_}={},...B})=>{const[n,m]=D(t,{defaultValue:t,onChange:S,value:g}),[R,p]=o.useState(!0),f=o.useRef(null),d=o.useMemo(()=>a.includes("+")?a:`mod+${a}`,[a]);return L(d,()=>{l&&f.current?.focus()},{enableOnFormTags:!0,enabled:!!l&&!!a,preventDefault:!0}),s.jsxs("div",{className:i(c.search,x),style:k,children:[r&&s.jsx(H,{}),s.jsx(G,{allowClear:!0,className:I,placeholder:y??"Type keywords...",ref:f,style:w,value:n,prefix:s.jsx(P,{className:c.icon,icon:u?M:O,size:"small",spin:u,style:{marginRight:4}}),onBlur:e=>{N?.(e),m(e.target.value),p(!0)},onChange:e=>{m(e.target.value),v?.(e)},onFocus:e=>{b?.(e),p(!1)},onPressEnter:e=>{T?.(e),j?.(n)},...B}),l&&R&&!n&&s.jsx(z,{compact:!0,className:i(c.tag,_),keys:d,style:C})]})});h.displayName="SearchBar";var W=h;export{W as S};
