import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-Dw0E06JZ.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-O0fnMOO2.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-Bu02BX-D.js";import{U as u}from"./UserAvatar-BysjUbQD.js";import{A as b,T as f,a as v}from"./index-CFEwb7Kg.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-D8iuHP9U.js";import"./index-DAKKMqxh.js";import"./useFillId-DV6h2AKm.js";import"./index-DyWSvD7d.js";import"./index-Bgs8TlXg.js";import"./index-Xv3wNnOc.js";import"./index-BVrOlRgI.js";import"./index-CLzLV2r3.js";import"./store-q5QTkhI5.js";import"./GlobalAgentContextManager-BJINC1PR.js";import"./ipc-CNixsLkK.js";import"./sync-WQ3D6n9Q.js";import"./FormGroup-zT2piPj-.js";import"./Segmented-CEsa4u2Z.js";import"./index-C9t-7jFf.js";import"./providerConfig-tgPoL10W.js";import"./Text-7767MUPc.js";import"./index-ChYEakRy.js";import"./index-C5GNH1wd.js";import"./index-Bmxojjg5.js";import"./index-DnL6B4Rx.js";import"./index-5e8Az2m8.js";import"./index-DfbBBsev.js";import"./SettingHeader-WvF4IHR7.js";import"./Block-MHS1RMdI.js";import"./index-fFo4dJH_.js";import"./index-BP626gDb.js";import"./row-CEbbnRAx.js";import"./index-VPLFSgvB.js";import"./EllipsisOutlined-BXZiYE0l.js";import"./PlusOutlined-CJHQE86d.js";import"./Dropdown-C_tOB3w5.js";import"./index-8YcLS_3Z.js";import"./index-BeJNNDTe.js";import"./index-BL20olcq.js";import"./useForm-CEKt_efh.js";import"./index-B75pGSv1.js";import"./index-Da1cnWS4.js";import"./abortableRequest-CqTkNl3n.js";import"./format-Bh0V7abg.js";import"./currency-iJxIWo9y.js";import"./time-D98D34PT.js";import"./index-CNUlcyUk.js";import"./index-DxOkZSvZ.js";import"./index-BGaFXZ9v.js";import"./TextArea-CcvCKYak.js";import"./Input-C-AQmTeO.js";import"./index-Ctjs0Ta4.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-4AdmG9de.js";import"./Drawer-Bdmtt2r2.js";import"./index-Bh0Ip9Tr.js";import"./index-Blh5HBSK.js";import"./base-AbuBx_QK.js";import"./Link-QXpuhcCR.js";import"./Trans-9pilnPW7.js";import"./FormModal-DXRR8D65.js";import"./index-DjXedtpL.js";import"./useTranslation-BixUBwIT.js";import"./form-CzkHLuiW.js";import"./useScreenshot-Dq_91Ubx.js";import"./dynamic-Cw34escy.js";import"./index-DQaTHLxL.js";import"./Table-DeRiQV1m.js";import"./index-DYrfpaW0.js";import"./useBubbleLock-6kkEthu_.js";import"./index-uHKV9upx.js";import"./LeftOutlined-zb6GBid6.js";import"./index-CkqIjDgx.js";import"./index-Cweb8oJZ.js";import"./Addon-BaF9PMn_.js";import"./index-BBJjuJlI.js";import"./scrollTo-B9lrhoiJ.js";import"./Pagination-BklIazS6.js";import"./index-CYx_6byl.js";import"./useQueryParam-DTF_nQmp.js";import"./index-CDdkPVd3.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
