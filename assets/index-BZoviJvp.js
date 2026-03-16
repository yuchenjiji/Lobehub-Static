import{j as t}from"../vendor/vendor-motion-ksfQGfvU.js";import{b as d,J as x,F as a,N as S,l as p,i as u,h as f,m as E}from"./index-BTYm_psc.js";import{r}from"../vendor/vendor-emotion-D8kPrniB.js";const h=f(({css:s})=>({container:s`
    align-self: center;
    transition: width 0.25s ${E.motionEaseInOut};
  `})),j=r.memo(({children:s,className:i,onChange:n,wrapperStyle:o,onClick:c,minWidth:l,...m})=>{const e=d(x.wideScreen);return r.useEffect(()=>{n?.()},[e]),t.jsx(a,{style:o,width:"100%",onClick:c,children:t.jsx(a,{className:p(h.container,i),paddingInline:16,width:e?"100%":`min(${l||S}px, 100%)`,...m,children:s})})},u);export{j as W};
