import{j as i}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as t,I as l,h as s}from"./index-CxFhYAo2.js";import{r as p}from"../vendor/vendor-emotion-D8kPrniB.js";import{a8 as m,a9 as n,aa as u,ab as d,ac as f,ad as g}from"../vendor/vendor-icons-UxbXHH06.js";const c={aborted:{cls:"default",icon:g},completed:{cls:"success",icon:f},external:{cls:"warning",icon:d},failed:{cls:"error",icon:u},idle:{cls:"default",icon:n},pending:{cls:"warning",icon:n},running:{cls:"primary",icon:m}},e=s(({css:o,cssVar:r})=>({default:o`
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
  `})),w=p.memo(({status:o})=>{const{t:r}=t("eval"),a=c[o]||c.idle;return i.jsxs("span",{className:`${e.wrapper} ${e[a.cls]||e.default}`,children:[i.jsx(l,{icon:a.icon,size:12}),r(`run.status.${o}`)]})});export{w as S};
