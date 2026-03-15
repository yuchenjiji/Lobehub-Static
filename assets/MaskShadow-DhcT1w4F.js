import{z as l,h as m,F as h,l as w}from"./index-BA-ev5QK.js";import{r as s}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as c}from"../vendor/vendor-motion-D2gXNOxm.js";const t=m(({css:a})=>({bottomShadow:a`
      mask-image: linear-gradient(
        180deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,leftShadow:a`
      mask-image: linear-gradient(
        270deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,rightShadow:a`
      mask-image: linear-gradient(
        90deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `,root:a`
      scrollbar-width: none;
      position: relative;
      overflow: hidden;

      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `,topShadow:a`
      mask-image: linear-gradient(
        0deg,
        #000 calc(100% - var(--mask-shadow-size, 40%)),
        transparent
      );
    `})),p=l(t.root,{defaultVariants:{position:"bottom"},variants:{position:{top:t.topShadow,bottom:t.bottomShadow,left:t.leftShadow,right:t.rightShadow}}}),r=s.memo(({className:a,children:i,position:n="bottom",size:o=40,...e})=>{const d=s.useMemo(()=>({"--mask-shadow-size":`${o}%`}),[o]);return c.jsx(h,{className:w(p({position:n}),a),style:{...d,...e.style},...e,children:i})});r.displayName="MaskShadow";var f=r;export{f as M};
