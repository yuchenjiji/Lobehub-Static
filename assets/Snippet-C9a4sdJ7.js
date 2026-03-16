import{h as g,D as a,z as x,F as m,aS as v,a_ as S,l as w}from"./index-BTYm_psc.js";import{S as y}from"./Spotlight-CyHzcFn1.js";import{j as i}from"../vendor/vendor-motion-ksfQGfvU.js";const t=g(({css:e,cssVar:l})=>({borderless:a.variantBorderlessWithoutHover,filled:a.variantFilledWithoutHover,hightlight:e`
      overflow: auto hidden;
      flex: 1;
      height: 100%;
      padding: 0;

      pre {
        display: flex;
        align-items: center;
        height: 100%;
      }
    `,outlined:a.variantOutlinedWithoutHover,root:e`
      position: relative;

      overflow: hidden;

      max-width: 100%;
      height: 38px;
      padding-block: 0;
      padding-inline: 12px 8px;
      border-radius: ${l.borderRadius};
    `,shadow:a.shadow})),j=x(t.root,{defaultVariants:{shadow:!1,variant:"filled"},variants:{variant:{filled:t.filled,outlined:t.outlined,borderless:t.borderless},shadow:{false:null,true:t.shadow}}}),r=({ref:e,prefix:l,language:o="tsx",children:d,copyable:n=!0,variant:h="filled",spotlight:p,shadow:u,className:f,...c})=>{const s=d.trim();return i.jsxs(m,{horizontal:!0,align:"center",className:w(j({shadow:u,variant:h}),f),"data-code-type":"highlighter",gap:8,ref:e,...c,children:[p&&i.jsx(y,{}),i.jsx(v,{className:t.hightlight,language:o,children:[l,s].filter(Boolean).join(" ")}),n&&i.jsx(S,{content:s,size:"small"})]})};r.displayName="Snippet";var H=r;export{H as S};
