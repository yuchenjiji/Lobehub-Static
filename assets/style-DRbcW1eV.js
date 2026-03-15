import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{C as c,l,m as f,F as i,h as u}from"./index-C3MhWRwW.js";import{A as g}from"./index-Csk4ZgJo.js";import{r as m}from"../vendor/vendor-emotion-D8kPrniB.js";const n=u(({css:t,cssVar:r})=>({container:t`
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
  `})),C=m.memo(({children:t,className:r,gap:o=24,padding:a=24,...s})=>e.jsx(c,{className:l(n.container,r),gap:o,padding:a,...s,children:t})),F=m.memo(({children:t,background:r,title:o,description:a,avatar:s,animation:d,className:x,gap:p=16,...h})=>e.jsxs(c,{className:l(n.form,x),gap:p,...h,children:[e.jsx(g,{animation:d,avatar:s,background:r??f.colorFillContent,gap:12,shape:"square",size:80}),e.jsxs(i,{gap:8,width:"100%",children:[e.jsx(i,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:o}),e.jsx(i,{className:n.desc,children:a})]}),t]}));export{C as E,F};
