import{z as m,h as f,D as s,l as c}from"./index-BTYm_psc.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as p}from"../vendor/vendor-motion-ksfQGfvU.js";import{S}from"./index-C9jENYvR.js";const e=f(({css:r,cssVar:a})=>({borderless:s.variantBorderlessWithoutHover,filled:r`
      border: 1px solid ${a.colorFillQuaternary};
      background: ${a.colorBgLayout};
    `,glass:s.blur,outlined:r`
      border: 1px solid ${a.colorBorderSecondary};
      background: transparent;
    `,root:r``,shadow:s.shadow})),b=m(e.root,{defaultVariants:{glass:!1,shadow:!1,variant:"filled"},variants:{variant:{filled:e.filled,outlined:e.outlined,borderless:e.borderless},glass:{false:null,true:e.glass},shadow:{false:null,true:e.shadow}}}),o=g.memo(({ref:r,padding:a,style:t,className:l,variant:d="filled",shadow:i,glass:n,...u})=>p.jsx(S,{className:c(b({glass:n,shadow:i,variant:d}),l),ref:r,style:{padding:a,...t},...u}));o.displayName="Segmented";var w=o;export{w as S};
