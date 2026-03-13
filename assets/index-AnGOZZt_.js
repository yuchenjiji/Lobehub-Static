import{j as t}from"../vendor/vendor-motion--v3N1cMI.js";import{u as d,s as u,F as a,t as x,j as S,i as f,f as p,k as E}from"./index-DgmZNIaB.js";import{r}from"../vendor/vendor-emotion-D8kPrniB.js";const j=p(({css:s})=>({container:s`
    align-self: center;
    transition: width 0.25s ${E.motionEaseInOut};
  `})),y=r.memo(({children:s,className:i,onChange:n,wrapperStyle:o,onClick:c,minWidth:l,...m})=>{const e=d(u.wideScreen);return r.useEffect(()=>{n?.()},[e]),t.jsx(a,{style:o,width:"100%",onClick:c,children:t.jsx(a,{className:S(j.container,i),paddingInline:16,width:e?"100%":`min(${l||x}px, 100%)`,...m,children:s})})},f);export{y as W};
