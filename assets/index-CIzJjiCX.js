import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{G as y}from"./Grid-Dv1KoD0_.js";import{j as x,C as b,e as k,br as c,F as n,L as p,bs as m,A as h,m as f,y as w,h as P}from"./index-DuTkvx3R.js";import{r as a}from"../vendor/vendor-emotion-D8kPrniB.js";import{E as _}from"./Empty-C6LcID4B.js";import{j as z,l as C}from"../vendor/vendor-icons-UxbXHH06.js";import{B as $}from"./Block-DEfkToFX.js";import{M as T}from"./MaskShadow-Dl-5iR16.js";import{P as B}from"./index-BoCbj51-.js";import{I as E}from"./index-B9PBP7fX.js";import{M as D}from"./index-ByZccbE0.js";const u=a.memo(({search:e,...r})=>{const{t}=x("discover");return o.jsx(b,{height:"100%",style:{minHeight:"50vh"},width:"100%",children:o.jsx(_,{description:t(e?"providers.empty.search":"providers.empty.description"),icon:z,title:e?void 0:t("providers.empty.title"),type:e?"default":"page",descriptionProps:{fontSize:14},style:{maxWidth:400},...r})})});u.displayName="ProviderEmpty";const l=P(({css:e,cssVar:r})=>({author:e`
      color: ${r.colorTextDescription};
    `,code:e`
      font-family: ${r.fontFamilyCode};
    `,desc:e`
      flex: none;
      margin: 0 !important;
      color: ${r.colorTextSecondary};
    `,footer:e`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${r.colorBorder};
      background: ${r.colorBgContainer};
    `,secondaryDesc:e`
      font-size: 12px;
      color: ${r.colorTextDescription};
    `,title:e`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${r.colorLink};
      }
    `})),I=a.memo(({url:e,name:r,description:t,identifier:i,models:g})=>{const j=k(),d=c("/community/provider",i),{t:v}=x(["discover","providers"]);return o.jsxs($,{clickable:!0,"data-testid":"provider-item",height:"100%",variant:"outlined",width:"100%",style:{overflow:"hidden",position:"relative"},onClick:()=>{j(d)},children:[o.jsxs(n,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:[o.jsxs(n,{title:i,style:{overflow:"hidden"},children:[o.jsx(p,{style:{color:"inherit",overflow:"hidden"},to:d,children:o.jsx(B,{provider:i,size:28,style:{flex:"none"}})}),o.jsxs("div",{className:l.author,children:["@",r]})]}),o.jsxs(n,{horizontal:!0,align:"center",children:[o.jsx("a",{href:e,rel:"noopener noreferrer",target:"_blank",onClick:m,children:o.jsx(h,{color:f.colorTextDescription,icon:C})}),o.jsx("a",{href:`https://github.com/lobehub/lobe-chat/blob/main/src/config/modelProviders/${i}.ts`,rel:"noopener noreferrer",target:"_blank",onClick:m,children:o.jsx(h,{fill:f.colorTextDescription,icon:E})})]})]}),o.jsx(n,{flex:1,gap:12,paddingInline:16,children:t&&o.jsx(w,{className:l.desc,ellipsis:{rows:3},children:v(`${i}.description`,{ns:"providers"})})}),o.jsx(n,{horizontal:!0,align:"center",className:l.footer,justify:"space-between",padding:16,children:o.jsx(T,{horizontal:!0,gap:6,position:"right",size:10,width:"100%",children:g.slice(0,6).filter(Boolean).map(s=>o.jsx(p,{to:c("/model",s),children:o.jsx(D,{model:s,style:{margin:0}})},s))})})]})}),q=a.memo(({data:e=[],rows:r=3})=>e.length===0?o.jsx(u,{}):o.jsx(y,{rows:r,width:"100%",children:e.map((t,i)=>o.jsx(I,{...t},i))}));export{q as P};
