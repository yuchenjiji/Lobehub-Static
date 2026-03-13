import{a9 as m,f,aa as s,j as c}from"./index-DgmZNIaB.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as p}from"../vendor/vendor-motion--v3N1cMI.js";import{S}from"./index-B7hDKUjx.js";const e=f(({css:a,cssVar:r})=>({borderless:s.variantBorderlessWithoutHover,filled:a`
      border: 1px solid ${r.colorFillQuaternary};
      background: ${r.colorBgLayout};
    `,glass:s.blur,outlined:a`
      border: 1px solid ${r.colorBorderSecondary};
      background: transparent;
    `,root:a``,shadow:s.shadow})),b=m(e.root,{defaultVariants:{glass:!1,shadow:!1,variant:"filled"},variants:{variant:{filled:e.filled,outlined:e.outlined,borderless:e.borderless},glass:{false:null,true:e.glass},shadow:{false:null,true:e.shadow}}}),o=g.memo(({ref:a,padding:r,style:t,className:l,variant:d="filled",shadow:i,glass:n,...u})=>p.jsx(S,{className:c(b({glass:n,shadow:i,variant:d}),l),ref:a,style:{padding:r,...t},...u}));o.displayName="Segmented";var w=o;export{w as S};
