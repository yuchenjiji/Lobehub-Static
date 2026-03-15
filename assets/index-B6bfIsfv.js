const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TagCloudCanvas-Bv8WGJcE.js","vendor/vendor-motion-D2gXNOxm.js","vendor/vendor-emotion-D8kPrniB.js","assets/index-CnQvfPte.js","i18n/i18n-zh-CN-X4QEO1fZ.js","i18n/i18n-en-US-CeDxYD3m.js","vendor/vendor-es-toolkit-BI0f0n_g.js","vendor/vendor-icons-UxbXHH06.js","assets/providerConfig-CULHvVzb.js","assets/index-HYzoGTHG.css","assets/UserAvatar-BHB4CYK0.js","assets/index-BCY_Gb4b.js","assets/index-CxL7N6oN.js","assets/index-DtM4hZl3.js","assets/index-DxIZ2SvD.js","assets/store-CwkT1znj.js","assets/GlobalAgentContextManager-DTs_48MV.js","assets/ipc-CNixsLkK.js","assets/sync-DwIwNDma.js"])))=>i.map(i=>d[i]);
import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{h as c,F as p,l as d,y as h,A as g,Q as y,a2 as j,bj as x}from"./index-CnQvfPte.js";import{N as b}from"./index-Di0uWh_L.js";import{W as T}from"./index-C9_lNNzH.js";import{W as _}from"./WideScreenButton-CPoQmnl3.js";import{M as u}from"./index-DqGZAwyG.js";import{S as k,M as z}from"./useScrollParent-yyOTxvrd.js";import{u as m}from"./store-D6-1vMuD.js";import{r as n}from"../vendor/vendor-emotion-D8kPrniB.js";import"./index-DryDygLO.js";import{M as P}from"./Markdown-Dcng-qkB.js";import{B as S}from"./Block-CMBYIh5M.js";import{d as v}from"./dynamic-Cw34escy.js";import{b_ as w,b$ as F}from"../vendor/vendor-icons-UxbXHH06.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./providerConfig-CULHvVzb.js";import"./ToggleLeftPanelButton-nJQa66lQ.js";import"./asyncTask-Deq5sCIJ.js";import"./index-CBsJREVB.js";import"./customParseFormat-PFiJ6rot.js";import"./index-C-Ll4l2S.js";import"./index-DxIZ2SvD.js";import"./Alert-BEJVvOAr.js";import"./AccordionItem-ET_ziiPp.js";import"./index-BbBpZ0jF.js";import"./index-DPBCj5K6.js";import"./progress-CJ8NRTn8.js";import"./Empty-BUYZYMe-.js";import"./useClientDataSWRWithSync-C2ahdL0l.js";import"./Modal-CgckoCfW.js";import"./Drawer-vmYk3mZO.js";import"./imperative-Sge6jm1o.js";import"./index-Lz3IUEOL.js";import"./index-DhdID5ao.js";import"./engine-compile-BBfmOsl0.js";import"./index-Bx8oz4k7.js";import"./Addon-B-s0TOE9.js";import"./Dropdown-DUf7dryE.js";import"./utils-BhKvqWyO.js";import"./index-C8Hl0-Ap.js";import"./LeftOutlined-CioaMl9n.js";import"./Dropdown-BmeBMNyN.js";import"./index-CzNOIklx.js";import"./EllipsisOutlined-Dhvu6BjS.js";import"./index-CCMY9gDw.js";import"./Popover-4ATUxUSU.js";import"./parseTrigger-CCq51Oae.js";import"./useOpenInteractionType-DFpPZZ2y.js";import"./TextArea-CDpgN2na.js";import"./style-CagF7x7c.js";import"./index-CTlWFP0_.js";import"./Input-B7gI0kiU.js";import"./EyeOutlined-C8oaiAip.js";import"./TextArea-CD7IzUMI.js";import"./katex-C-M49wc6.js";import"./index-Py1c-CDe.js";import"./index-CfJOsfFg.js";import"./ChatInputActions-Lmd_ZS6x.js";import"./useSize-B6bhL4Vm.js";import"./ReactCodemirrorNode-Bbk903bR.js";import"./Select-CNXlqpnT.js";import"./InputNumber-C6vh-Uz9.js";import"./index-BtzfPjkQ.js";import"./PlusOutlined-CGhZ0Op0.js";import"./index-I-sRi7YE.js";import"./ReactLinkPlugin-CQLdpZpD.js";import"./Input-C4kYKmzl.js";import"./ActionIconGroup-YIsjqom5.js";import"./DropdownMenu-CA032NYS.js";import"./getPseudoElementBounds-DbUPihC6.js";import"./useControlled-BpnhTZoG.js";import"./labPrefer-CNbyTXLF.js";import"./index-zK2mOBIy.js";import"./Snippet-Ba8kMufS.js";import"./Spotlight-DvAXW313.js";import"./useTranslation-tn1hyCOL.js";import"./image-nnCaCTxV.js";import"./index-BArWlHkc.js";import"./index-DYG7Sddo.js";import"./index-DtM4hZl3.js";import"./index-CEw2M9Sq.js";import"./ScrollShadow-ByBaUIKA.js";import"./index-Bu9jKxEl.js";const E=c(({css:t,cssVar:e})=>({markdown:t`
    h2 {
      margin-block: 24px 12px;
      font-size: 16px;
      font-weight: 600;
    }

    h3 {
      margin-block: 16px 8px;
      font-size: 14px;
      font-weight: 500;
    }

    p {
      margin-block-end: 8px;
      font-size: 14px;
      line-height: 1.6;
      color: ${e.colorTextSecondary};
    }

    ul {
      margin-block: 8px;
      margin-inline: 0;
      padding-inline-start: 20px;

      li {
        margin-block-end: 4px;
        font-size: 14px;
        line-height: 1.6;
        color: ${e.colorTextSecondary};
      }
    }

    strong {
      font-weight: 500;
      color: ${e.colorText};
    }
  `})),$=n.memo(({children:t})=>o.jsx(P,{className:E.markdown,enableImageGallery:!1,enableLatex:!1,children:t})),A=c(({css:t,cssVar:e})=>({summary:t`
    position: relative;

    padding-block: 16px;
    padding-inline: 20px;
    border-radius: 8px;

    font-size: 15px;
    font-style: italic;
    line-height: 1.6;
    color: ${e.colorText};

    background: ${e.colorFillQuaternary};

    &::before {
      content: '"';

      position: absolute;
      inset-block-start: 8px;
      inset-inline-start: 12px;

      font-family: Georgia, serif;
      font-size: 28px;
      font-style: normal;
      line-height: 1;
      color: ${e.colorTextQuaternary};
    }
  `})),L=n.memo(({children:t})=>o.jsx("div",{className:A.summary,children:t})),N=n.memo(({className:t})=>{const e=m(i=>i.useFetchPersona),r=m(i=>i.persona),{isLoading:a}=e();return a||!r?null:o.jsxs(p,{className:d(t),gap:24,children:[r.summary&&o.jsx(L,{children:r.summary}),o.jsx($,{children:r.content})]})}),I=c(({css:t,cssVar:e})=>({title:t`
    font-size: 28px;
    font-weight: 700;
    line-height: 1.4;
    color: ${e.colorText};
  `})),M=n.memo(()=>o.jsx(h,{as:"h1",className:I.title,children:"Persona"})),C=v(()=>j(()=>import("./TagCloudCanvas-Bv8WGJcE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18])),{loading:()=>o.jsx(x,{debugId:"TagCloud"}),ssr:!1}),l=c(({css:t})=>({fullscreen:t`
    position: absolute;
    z-index: 10;
    inset: 0;

    width: 100%;
    height: 100%;
    border-radius: 0;
  `,fullscreenAnimation:t`
    opacity: 0;
  `,icon:t`
    position: absolute;
    z-index: 10;
    inset-block-start: 6px;
    inset-inline-end: 6px;
  `,root:t`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 400px;

    .fullscreen-icon {
      opacity: 0;
    }

    &:hover {
      .fullscreen-icon {
        opacity: 1;
      }
    }
  `})),B=n.memo(({tags:t})=>{const[e,r]=n.useState(!1),[a,i]=n.useState(!1);return n.useEffect(()=>{i(!0),setTimeout(()=>{i(!1)},500)},[e]),t.length?o.jsxs(S,{variant:e?"borderless":"outlined",className:d(l.root,e&&l.fullscreen,a&&l.fullscreenAnimation),children:[o.jsx(g,{className:d("fullscreen-icon",l.icon),icon:e?w:F,size:y,onClick:()=>{r(!e)}}),o.jsx(C,{tags:t})]}):null}),gt=()=>{const t=m(s=>s.useFetchTags),e=m(s=>s.useFetchPersona),r=m(s=>s.roles),a=m(s=>s.persona),{isLoading:i}=t(),{isLoading:f}=e();return i||f?o.jsx(x,{debugId:"Home"}):o.jsxs(p,{flex:1,height:"100%",children:[o.jsx(b,{right:o.jsxs(p,{horizontal:!0,gap:8,children:[o.jsx(u,{iconOnly:!0}),o.jsx(_,{})]}),style:{zIndex:1}}),o.jsx(p,{height:"100%",id:k,style:{overflowY:"auto",paddingBottom:"16vh"},width:"100%",children:o.jsxs(T,{gap:32,paddingBlock:48,children:[r?.length>0&&o.jsx(B,{tags:r}),a?o.jsxs(o.Fragment,{children:[o.jsx(M,{}),o.jsx(N,{})]}):!r?.length&&o.jsx(z,{children:o.jsx(u,{})})]})})]})};export{gt as default};
