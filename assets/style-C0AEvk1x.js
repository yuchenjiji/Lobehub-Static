import{j as e}from"../vendor/vendor-motion--v3N1cMI.js";import{C as c,j as l,k as h,F as i,f as u}from"./index-DgmZNIaB.js";import{A as j}from"./index-C03wQVBa.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";const n=u(({css:t,cssVar:r})=>({container:t`
    border: 1px solid ${r.colorSplit};
    border-radius: 8px;
    color: ${r.colorText};
    background: ${r.colorBgContainer};
  `,desc:t`
    color: ${r.colorTextTertiary};
    text-align: center;
  `,form:t`
    width: 100%;
    max-width: 360px;

    @media (width <= 768px) {
      max-width: 90%;
    }
  `})),C=d.memo(({children:t,className:r,gap:o=24,padding:a=24,...s})=>e.jsx(c,{className:l(n.container,r),gap:o,padding:a,...s,children:t})),F=d.memo(({children:t,background:r,title:o,description:a,avatar:s,animation:m,className:x,gap:p=16,...f})=>e.jsxs(c,{className:l(n.form,x),gap:p,...f,children:[e.jsx(j,{animation:m,avatar:s,background:r??h.colorFillContent,gap:12,shape:"square",size:80}),e.jsxs(i,{gap:8,width:"100%",children:[e.jsx(i,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:o}),e.jsx(i,{className:n.desc,children:a})]}),t]}));export{C as E,F};
