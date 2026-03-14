import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-DpjtaJho.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-C4F_FKJH.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-V90D4XWS.js";import{U as u}from"./UserAvatar-Bm2EZRHM.js";import{A as b,T as f,a as v}from"./index-DM7kYxqc.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-DR4UJ3CD.js";import"./index--G04yT75.js";import"./useFillId-DV6h2AKm.js";import"./index-DC8mLPj8.js";import"./index-BzTAHP7_.js";import"./index-DIlc68oV.js";import"./index-CTxO1VLm.js";import"./index-2p2SP30-.js";import"./store-CWprGR4h.js";import"./GlobalAgentContextManager-Bpfb02Qb.js";import"./ipc-CNixsLkK.js";import"./sync-CY6krWtw.js";import"./FormGroup-CcAse9D-.js";import"./Segmented-b3GoRYM9.js";import"./index-U2WP-LLp.js";import"./providerConfig-BOZNS-NT.js";import"./Text-BfIl3Vy9.js";import"./index-BR3LWp0b.js";import"./index-Dz-FwJyZ.js";import"./index-Ba1NRaIZ.js";import"./index-z5qOgXuq.js";import"./index-CrfUc5HK.js";import"./index-CDOSUgZb.js";import"./SettingHeader-onG_kYkH.js";import"./Block-BUeflZIK.js";import"./index-fFo4dJH_.js";import"./index-Cto_q_GS.js";import"./row-CQlNgydC.js";import"./index-I-HMzgns.js";import"./EllipsisOutlined-BMxYjEQs.js";import"./PlusOutlined-oCD6jTki.js";import"./Dropdown-DKgcfeH3.js";import"./index-qyjfu3FT.js";import"./index-kIEdsrtV.js";import"./index-BOl-jBsD.js";import"./useForm-C9YZGXsr.js";import"./index-BVmOHV1f.js";import"./index-BsIAcuRc.js";import"./abortableRequest-CqTkNl3n.js";import"./format-Gy4trASU.js";import"./currency-iJxIWo9y.js";import"./time-Dscy6wdX.js";import"./index-DGC7yg8a.js";import"./index-Chn5HXuX.js";import"./index-CDfEbV9d.js";import"./TextArea-DcgXV2rk.js";import"./Input-in1VCKCM.js";import"./index-B2wb1f57.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-CkXXIJVM.js";import"./Drawer-Blq-HK9q.js";import"./index-BQRH7ZgF.js";import"./index-CFyNlgOm.js";import"./base-AbuBx_QK.js";import"./Link-BiPkJ_R_.js";import"./Trans-BNyvGgko.js";import"./FormModal-DChsTenz.js";import"./index-DHHvHfhA.js";import"./useTranslation-DKL2OgOQ.js";import"./form-CzkHLuiW.js";import"./useScreenshot-C9V3pUNq.js";import"./dynamic-Cw34escy.js";import"./index-BpcHwU9y.js";import"./Table-BJn4qnA8.js";import"./index-CaM06fnG.js";import"./useBubbleLock-6kkEthu_.js";import"./index-DU6RS91i.js";import"./LeftOutlined-BxhwhsKm.js";import"./index-DkEoSRWK.js";import"./index-bxSXfZvI.js";import"./Addon-JgN9hHh0.js";import"./index-3p9Bm76P.js";import"./scrollTo-DOMg2V1t.js";import"./Pagination-PU9Z02X7.js";import"./index-CUipAeSJ.js";import"./useQueryParam-BG-ZFShe.js";import"./index-egouSnUm.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
    box-sizing: content-box;
    border: 4px solid ${r.colorBgLayout};
    background: ${r.colorText};
  `,background:t`
    position: relative;

    width: 100%;
    padding: 24px;

    background-color: ${r.colorBgLayout};
    background-image: url(${h("screenshot_background.webp")});
    background-position: center;
    background-size: 120% 120%;
  `,container:t`
    position: relative;

    overflow: hidden;

    width: 100%;
    border: 1px solid ${r.colorBorder};
    border-radius: calc(${r.borderRadiusLG} * 2);

    background: ${r.colorBgLayout};
    box-shadow: ${r.boxShadow};
  `,decs:t`
    font-size: 12px;
    color: ${r.colorTextDescription};
  `,footer:t`
    font-size: 12px;
    color: ${r.colorTextDescription};
  `,heatmaps:t`
    .legend-month,
    footer {
      display: none;
    }
  `,preview:n(l.noScrollbar,t`
      overflow: hidden scroll;

      width: 100%;
      max-height: 70dvh;
      border: 1px solid ${r.colorBorder};
      border-radius: ${r.borderRadiusLG};

      background: ${r.colorBgLayout};

      * {
        pointer-events: none;

        ::-webkit-scrollbar {
          width: 0 !important;
          height: 0 !important;
        }
      }

      ${c.sm} {
        max-height: 40dvh;
      }
    `),title:t`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `})),xr=g.memo(()=>{const{t}=a("auth");return o.jsx("div",{className:i.preview,children:o.jsx("div",{className:i.background,id:"preview",children:o.jsxs(p,{className:i.container,gap:12,padding:24,children:[o.jsx(m,{size:24,type:"text"}),o.jsx("div",{className:i.title,children:t("stats.share.title")}),o.jsxs(e,{horizontal:!0,align:"center",children:[o.jsx(u,{className:i.avatar,shape:"circle",size:48,style:{marginRight:-12,zIndex:2}}),o.jsx(p,{className:i.avatar,height:48,width:48,style:{borderRadius:"50%",zIndex:1},children:o.jsx(m,{size:40})})]}),o.jsxs(e,{gap:12,paddingBlock:12,width:"100%",children:[o.jsx(b,{inShare:!0,blockMargin:2,blockRadius:1,blockSize:4.5,className:i.heatmaps,width:"100%",style:{marginTop:-12}}),o.jsxs(x,{gap:8,maxItemWidth:100,rows:2,width:"100%",children:[o.jsx(f,{inShare:!0}),o.jsx(v,{inShare:!0})]})]}),o.jsx("div",{className:i.footer,children:s})]})})})});export{xr as default};
