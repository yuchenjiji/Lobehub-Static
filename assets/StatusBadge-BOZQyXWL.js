import{j as i}from"../vendor/vendor-motion--v3N1cMI.js";import{g as t,I as l,f as s}from"./index-DgmZNIaB.js";import{r as p}from"../vendor/vendor-emotion-D8kPrniB.js";import{a8 as m,a9 as n,aa as u,ab as f,ac as d,ad as g}from"../vendor/vendor-icons-DA3bMca7.js";const c={aborted:{cls:"default",icon:g},completed:{cls:"success",icon:d},external:{cls:"warning",icon:f},failed:{cls:"error",icon:u},idle:{cls:"default",icon:n},pending:{cls:"warning",icon:n},running:{cls:"primary",icon:m}},e=s(({css:o,cssVar:r})=>({default:o`
    color: ${r.colorTextTertiary};
  `,error:o`
    color: ${r.colorError};
  `,primary:o`
    color: ${r.colorPrimary};
  `,success:o`
    color: ${r.colorSuccess};
  `,warning:o`
    color: ${r.colorWarning};
  `,wrapper:o`
    display: inline-flex;
    gap: 4px;
    align-items: center;

    font-size: 11px;
    font-weight: 500;
    line-height: 1;
  `})),h=p.memo(({status:o})=>{const{t:r}=t("eval"),a=c[o]||c.idle;return i.jsxs("span",{className:`${e.wrapper} ${e[a.cls]||e.default}`,children:[i.jsx(l,{icon:a.icon,size:12}),r(`run.status.${o}`)]})});export{h as S};
