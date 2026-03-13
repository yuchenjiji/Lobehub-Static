import{f as c,F as x,j as n}from"./index-DgmZNIaB.js";import{r as f}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as g}from"../vendor/vendor-motion--v3N1cMI.js";import{h as i}from"../vendor/vendor-es-toolkit-b6vDTgOQ.js";const u=c(({css:s})=>s`
    --rows: var(--grid-rows, 3);
    --max-item-width: var(--grid-max-item-width, 240px);
    --gap: var(--grid-gap, 1em);

    display: grid !important;
    grid-template-columns: repeat(
      auto-fill,
      minmax(
        max(var(--max-item-width), calc((100% - var(--gap) * (var(--rows) - 1)) / var(--rows))),
        1fr
      )
    );
  `),e=({className:s,gap:r="1em",rows:t=3,children:m,maxItemWidth:a=240,ref:o,style:d,...l})=>{const p=f.useMemo(()=>({"--grid-gap":i(r)?r:`${r}px`,"--grid-max-item-width":i(a)?a:`${a}px`,"--grid-rows":`${t}`}),[r,a,t]);return g.jsx(x,{className:n(u,s),gap:r,ref:o,style:{...p,...d},...l,children:m})};e.displayName="Grid";var G=e;export{G};
