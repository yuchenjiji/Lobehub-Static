import{f as b,j as l,aa as x,af as T,F as c,bh as _,I as A}from"./index-DgmZNIaB.js";import{r as C}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as t}from"../vendor/vendor-motion--v3N1cMI.js";const o=b(({css:r,cssVar:a})=>({active:r`
      color: ${a.colorText};
    `,container:r`
      cursor: pointer;
      color: ${a.colorTextDescription};
    `,img:l(x.variantFilled,r`
        border-radius: ${a.borderRadius};

        &:hover {
          box-shadow: 0 0 0 2px ${a.colorText};
        }
      `),imgActive:l(x.active,r`
        box-shadow: 0 0 0 2px ${a.colorTextTertiary};
      `)})),m=C.memo(({ref:r,className:a,style:g,value:p,defaultValue:s,onChange:d,options:v,width:i=144,height:n=86,styles:f,classNames:j,unoptimized:h,...y})=>{const[I,S]=T(s,{defaultValue:s,onChange:d,value:p});return t.jsx(c,{horizontal:!0,className:a,gap:16,ref:r,style:g,...y,children:v?.map(e=>{const u=e.value===I;return t.jsxs(c,{align:"center",className:l(o.container,u&&o.active),gap:4,onClick:()=>S(e.value),children:[t.jsx(_,{alt:e.alt||e.value,className:l(o.img,u&&o.imgActive,j?.img),height:n,src:e.img,unoptimized:h,width:i,style:{...f?.img,height:n,width:i}}),t.jsxs(c,{horizontal:!0,align:"center",gap:4,children:[e.icon&&t.jsx(A,{icon:e.icon}),e.label]})]},e.value)})})});m.displayName="ImageSelect";var E=m;export{E as I};
