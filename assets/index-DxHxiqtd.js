import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{m as r,aj as p,aE as u,F as x,l as h,h as g}from"./index-DpjtaJho.js";import{r as l}from"../vendor/vendor-emotion-D8kPrniB.js";const s="ant",n=g(({css:e})=>({content:e`
      .${s}-modal-footer {
        margin: 0;
        padding: 16px;
      }
      .${s}-modal-header {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;

        height: 56px;
        margin-block-end: 0;
        padding: 16px;
      }
      .${s}-modal-container {
        overflow: hidden;
        padding: 0;
        border: 1px solid ${r.colorSplit};
        border-radius: ${r.borderRadiusLG};
      }
    `,wrap:e`
      overflow: hidden auto;
    `})),y=l.memo(({className:e,title:t,desc:a,cover:i,width:d=360,...c})=>{const m=l.useMemo(()=>({token:{colorBgElevated:`color-mix(in srgb, ${r.colorBgContainer} 99.5%, white)`}}),[]);return o.jsx(p,{theme:m,children:o.jsxs(u,{centered:!0,maskClosable:!0,className:h(n.content,e),closable:!1,width:d,wrapClassName:n.wrap,...c,children:[i,o.jsxs(x,{padding:16,children:[o.jsx("h3",{style:{fontWeight:"bold"},children:t}),o.jsx("p",{style:{marginBottom:0},children:a})]})]})})}),w=l.memo(({height:e,width:t,src:a})=>o.jsx("video",{autoPlay:!0,loop:!0,muted:!0,controls:!1,height:e,src:a,width:t,style:{background:r.colorFillSecondary,height:"auto",width:"100%"}}));export{y as G,w as a};
