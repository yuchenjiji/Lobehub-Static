import{j as t}from"../vendor/vendor-motion-D2gXNOxm.js";import{r as m}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as c}from"./store-DhxPVVxD.js";import{A as j}from"./assistants-Bnb1hBSy.js";import{M as k}from"./mcp-bmlNDBWs.js";import{T as s}from"./Title-DgN4-Guf.js";import{A as L}from"./index-Ba9-mqev.js";import{M as _}from"./index-BLx9P2j6.js";import{j as p,bq as w,F as g,l as n,B as v,h as y,r as i}from"./index-Dw0E06JZ.js";import{L as h}from"./ListLoading-ChnYuXX6.js";import"./discover-D-8XxlvF.js";import"./general-BeKmVzAZ.js";import"./object-Cz6o-AEA.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./const-lbjNOSiN.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./Grid-O0fnMOO2.js";import"./AssistantEmpty-bEbGR2VF.js";import"./Empty-BChRtU5Z.js";import"./Block-MHS1RMdI.js";import"./index-Bgs8TlXg.js";import"./index-Xv3wNnOc.js";import"./index-BVrOlRgI.js";import"./index-CLzLV2r3.js";import"./base-AbuBx_QK.js";import"./PublishedTime-C_bgElk_.js";import"./useQuery-Ds4uzAo5.js";import"./navigation-BMyAEX95.js";import"./format-Bh0V7abg.js";import"./currency-iJxIWo9y.js";import"./providerConfig-CULHvVzb.js";import"./index-OYc0uVb5.js";import"./index-DAKKMqxh.js";import"./index-DyWSvD7d.js";import"./Spotlight-jOzkAn-w.js";import"./Link-QXpuhcCR.js";import"./index-DnL6B4Rx.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"./index-DxOkZSvZ.js";const r=y(({css:e})=>({banner:e`
    position: relative;

    width: 100%;
    padding-block: 24px;
    padding-inline: 32px;
    border-radius: 12px;

    ${i.sm} {
      padding-block: 16px;
      padding-inline: 20px;
    }
  `,banner_dark:e`
    background: linear-gradient(135deg, #5c3d0e 0%, #7a4f10 50%, #6b3a08 100%);
  `,banner_light:e`
    background: linear-gradient(135deg, #fceabb 0%, #f8b500 50%, #e88a20 100%);
  `,subtitle:e`
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;

    ${i.sm} {
      font-size: 12px;
    }
  `,subtitle_dark:e`
    color: rgb(255 255 255 / 65%);
  `,subtitle_light:e`
    color: rgb(0 0 0 / 65%);
  `,symbols:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;
    inset-inline-end: 0;

    overflow: hidden;

    width: 50%;
    border-radius: 0 12px 12px 0;

    background: url('/images/banner_creator.png') right center / auto 100% no-repeat;

    ${i.sm} {
      display: none;
    }
  `,title:e`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.3;

    ${i.sm} {
      font-size: 18px;
    }
  `,title_dark:e`
    color: rgb(255 255 255 / 88%);
  `,title_light:e`
    color: rgb(0 0 0 / 88%);
  `})),u=m.memo(()=>{const{t:e}=p("discover"),o=w();return t.jsxs(g,{className:n(r.banner,o?r.banner_dark:r.banner_light),width:"100%",children:[t.jsxs(g,{gap:8,style:{position:"relative",zIndex:1},children:[t.jsx("h2",{className:n(r.title,o?r.title_dark:r.title_light),children:e("home.creatorReward.title")}),t.jsx("p",{className:n(r.subtitle,o?r.subtitle_dark:r.subtitle_light),children:e("home.creatorReward.subtitle")}),t.jsx("div",{style:{marginBlockStart:4},children:t.jsx("a",{href:"https://lobehub.com/creator?utm_source=lobehub",rel:"noopener noreferrer",target:"_blank",children:t.jsx(v,{type:"primary",children:e("home.creatorReward.action")})})})]}),t.jsx("div",{className:r.symbols})]})}),A=m.memo(()=>{const{t:e}=p("discover");return t.jsxs(t.Fragment,{children:[t.jsx(u,{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/agent",children:e("home.featuredAssistants")}),t.jsx(h,{length:8,rows:4}),t.jsx("div",{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/mcp",children:e("home.featuredTools")}),t.jsx(h,{length:8,rows:4})]})}),gt=m.memo(()=>{const{t:e}=p("discover"),o=c(a=>a.useAssistantList),x=c(a=>a.useFetchMcpList),{data:l,isLoading:b}=o({page:1,pageSize:12,sort:j.Recommended}),{data:d,isLoading:f}=x({page:1,pageSize:12,sort:k.Recommended});return b||f||!l||!d?t.jsx(A,{}):t.jsxs(t.Fragment,{children:[t.jsx(u,{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/agent",children:e("home.featuredAssistants")}),t.jsx(L,{data:l.items,rows:4}),t.jsx("div",{}),t.jsx(s,{more:e("home.more"),moreLink:"/community/mcp",children:e("home.featuredTools")}),t.jsx(_,{data:d.items,rows:4})]})});export{gt as default};
