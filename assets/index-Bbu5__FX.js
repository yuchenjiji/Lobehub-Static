import{L as F,V as z,a as B}from"./index-F4b1vKi5.js";import{h as m,aw as A,m as p,F as g,I as y,l as t,aZ as M,T as E}from"./index-BTYm_psc.js";import{r as v}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as r}from"../vendor/vendor-motion-ksfQGfvU.js";import{ay as W,cV as L,aA as O,cW as R,cX as G}from"../vendor/vendor-icons-UxbXHH06.js";import{G as $}from"./Grid-DtLYEWzq.js";import{A as q}from"./index-wSg9csJd.js";import{B as D}from"./Block-CzvG4Myp.js";import{T as H}from"./Tabs-CgGv-Y-3.js";const f=m(({css:e})=>({container:e`
      --lobe-markdown-margin-multiple: 1;

      overflow: hidden;
      gap: 0.75em;

      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
    `,content:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * -1em);

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }

      p {
        color: inherit !important;
      }
    `,underlineAnchor:e`
      a {
        text-decoration: underline;
      }
    `})),w=({children:e,type:a="info",className:o,style:i,...l})=>{const n=A(),d=v.useMemo(()=>({error:{background:n.colorErrorFillTertiary,color:p.colorError,icon:G},important:{background:n.purpleFillTertiary,color:p.purple,icon:R},info:{background:n.colorInfoFillTertiary,color:p.colorInfo,icon:O},tip:{background:n.colorSuccessFillTertiary,color:p.colorSuccess,icon:L},warning:{background:n.colorWarningFillTertiary,color:p.colorWarning,icon:W}}),[n]),{icon:u,color:c,background:s}=d?.[a]||d.info;return r.jsxs(g,{horizontal:!0,align:"flex-start",className:t(f.container,o),style:{background:s,boxShadow:`0 0 0 1px ${s} inset`,color:c,...i},...l,children:[r.jsx(y,{icon:u,size:{size:"1.2em"},style:{marginBlock:"0.25em"}}),r.jsx("div",{className:t(f.content,a==="info"&&f.underlineAnchor),children:r.jsx("div",{children:e})})]})};w.displayName="MdxCallout";var K=w;const X=m(({css:e})=>({container:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

      > div {
        margin: 0 !important;
      }
    `})),T=({children:e,className:a,maxItemWidth:o=250,rows:i=3,...l})=>r.jsx($,{className:t(X.container,a),maxItemWidth:o,rows:i,...l,children:e});T.displayName="MdxCards";var Z=T;const x=m(({css:e,cssVar:a})=>({card:e`
      --lobe-markdown-header-multiple: 0.2;
      --lobe-markdown-margin-multiple: 1;

      overflow: hidden;
      height: 100%;
      color: ${a.colorText};

      h3,
      p {
        margin-block: 0 !important;
      }

      p {
        color: ${a.colorTextDescription};
        transition: color 0.2s ${a.motionEaseInOut};
      }

      &:hover {
        p {
          color: ${a.colorTextSecondary};
        }

        .mdx-card-icon {
          opacity: 1;
        }
      }
    `,content:e`
      width: 100%;
      padding: 1.4em;
    `,icon:e`
      margin-block: 0.1em;
      opacity: 0.5;
      transition: opacity 0.2s ${a.motionEaseInOut};
    `})),j=({tag:e,tagColor:a="blue",icon:o,title:i,desc:l,href:n,iconProps:d,className:u,image:c,variant:s="filled",...h})=>r.jsx(q,{href:n,children:r.jsxs(D,{clickable:!0,align:"flex-start",className:t(x.card,u),variant:s,...h,children:[c&&r.jsx(M,{alt:i,height:100,src:c,style:{height:"auto",width:"100%"},width:250}),e&&r.jsx(g,{align:"flex-start",className:x.content,style:{paddingBottom:"0.2em",paddingTop:"1.8em"},children:r.jsx(E,{color:a,style:{borderRadius:"1em",fontSize:"0.8em",fontWeight:500,paddingBlock:"0.1em",paddingInline:"0.6em"},children:e})}),r.jsxs(g,{horizontal:!0,align:l?"flex-start":"center",className:x.content,gap:"0.75em",children:[!c&&o&&r.jsx(y,{className:t(x.icon,"mdx-card-icon"),icon:o,size:{size:"1.5em"},...d}),r.jsxs(g,{gap:"0.2em",children:[r.jsx("h3",{children:i}),l&&r.jsx("p",{children:l})]})]})]})});j.displayName="MdxCard";var J=j;const P=m(({css:e,cssVar:a})=>({container:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-block: 0.75em;
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      color: ${a.colorTextSecondary};

      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    `,folder:e`
      cursor: pointer;

      &:hover {
        color: ${a.colorText};
      }
    `,folderChildren:e`
      padding-inline-start: 1em;
    `})),N=({children:e,className:a,...o})=>r.jsx("div",{className:t(P.container,a),...o,children:e});N.displayName="MdxFileTree";var Q=N;const U=m(({css:e,cssVar:a})=>({container:e`
      --lobe-markdown-header-multiple: 0.5;
      --lobe-markdown-margin-multiple: 1;

      position: relative;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-inline-start: 2.5em;

      &::before {
        content: '';

        position: absolute;
        inset-block-start: 0.25em;
        inset-inline-start: 0.9em;

        display: block;

        width: 1px;
        height: calc(100% - 0.5em);

        background: ${a.colorBorderSecondary};
      }

      h3 {
        counter-increment: step;

        &::before {
          content: counter(step);

          position: absolute;
          z-index: 1;
          inset-inline-start: 0;

          display: inline-block;

          width: 1.8em;
          height: 1.8em;
          margin-block-start: -0.05em;
          border-radius: 9999px;

          font-size: 0.8em;
          font-weight: 500;
          line-height: 1.8em;
          color: ${a.colorTextSecondary};
          text-align: center;

          background: ${a.colorBgElevated};
          box-shadow: 0 0 0 2px ${a.colorBgLayout};
        }

        &:not(:first-child) {
          margin-block-start: 2em;
        }
      }
    `})),C=({children:e,className:a,...o})=>r.jsx("div",{className:t(U.container,a),...o,children:e});C.displayName="MdxSteps";var V=C;const k=m(({css:e})=>({body:e`
      padding-inline: 1em;

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }
    `,container:e`
      /* Container styles */
    `,header:e`
      /* Header styles */
    `})),Y=({defaultIndex:e="0",items:a,children:o,className:i,tabNavProps:l={},...n})=>{const{className:d,onChange:u,...c}=l,[s,h]=v.useState(String(e)),S=Number(s);return r.jsxs(g,{className:t(k.container,i),...n,children:[r.jsx(H,{compact:!0,activeKey:s,className:t(k.header,d),items:a.map((b,I)=>({key:String(I),label:b})),onChange:b=>{h(b),u?.(b)},...c}),o?.[S]||""]})};var ee=Y;const _=({children:e,className:a,...o})=>r.jsx("div",{className:t(k.body,a),...o,children:r.jsx("div",{children:e})});_.displayName="MdxTab";var ae=_;const re={Callout:K,Card:J,Cards:Z,FileTree:Q,Image:B,Steps:V,Tab:ae,Tabs:ee,Video:z,a:F};var ue=re;export{ue as m};
