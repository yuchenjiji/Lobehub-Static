import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-DuTkvx3R.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-Dv1KoD0_.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-CAMdMEXq.js";import{U as u}from"./UserAvatar-Ca0CPV6A.js";import{A as b,T as f,a as v}from"./index-BLtRxKoW.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-xFfwDBq8.js";import"./index-CNknNfMk.js";import"./useFillId-DV6h2AKm.js";import"./index-BV4dwSb7.js";import"./index-3_OIRYp9.js";import"./index-b6vSUHKH.js";import"./index-Dd3sJru5.js";import"./index-CS6LoGWM.js";import"./store-C8x-hpiL.js";import"./GlobalAgentContextManager-DPTKPH1l.js";import"./ipc-CNixsLkK.js";import"./sync-C8oUNzCo.js";import"./FormGroup-BEdkdDbP.js";import"./Segmented--TdbL1TU.js";import"./index-DRzut7J1.js";import"./providerConfig-DiGH8Npl.js";import"./Text-CkOz-Rca.js";import"./index-yUYzeI5l.js";import"./index-d2l14ppd.js";import"./index-CKHOwEpr.js";import"./index-B9PBP7fX.js";import"./index-BBvN0Mp6.js";import"./index-BuVnyVPZ.js";import"./SettingHeader-CfIdYSkR.js";import"./Block-DEfkToFX.js";import"./index-fFo4dJH_.js";import"./index-IQZCA99l.js";import"./row-FwwFzXMg.js";import"./index-Ta5FhJzD.js";import"./EllipsisOutlined-BKvaEn9k.js";import"./PlusOutlined-BMbukZKY.js";import"./Dropdown-b4dqDlKs.js";import"./index-CZNcROzQ.js";import"./index-DAj_7dEG.js";import"./index-Dd5nAky5.js";import"./useForm-C3PqnSFN.js";import"./index-aKYXlUKJ.js";import"./index-BYL58oom.js";import"./abortableRequest-CqTkNl3n.js";import"./format-CUbKZYXI.js";import"./currency-iJxIWo9y.js";import"./time-_NNnPPDU.js";import"./index-fuytKDAr.js";import"./index-rVIaLnR4.js";import"./index-Bbs_ICKt.js";import"./TextArea-CeY2UDNs.js";import"./Input-D3KRrQUd.js";import"./index-B8NDwsRF.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-B9x1oMV2.js";import"./Drawer-CtvjjSnS.js";import"./index-D6vjTF-U.js";import"./index-0gD3HE1u.js";import"./base-AbuBx_QK.js";import"./Link-DSX59rU3.js";import"./Trans-Cq-IUdrC.js";import"./FormModal-BIn1LY-c.js";import"./index-DXbe7zMA.js";import"./useTranslation-Bm881vNH.js";import"./form-CzkHLuiW.js";import"./useScreenshot-Wq1Q16QB.js";import"./dynamic-Cw34escy.js";import"./index-lnsxVcoS.js";import"./Table-Dlmv9AEy.js";import"./index-DzJtnp71.js";import"./useBubbleLock-6kkEthu_.js";import"./index-CirTHl37.js";import"./LeftOutlined-D8dpbkzp.js";import"./index-D3Ba1hCR.js";import"./index-BbOJuO_Q.js";import"./Addon-CMmcOYzy.js";import"./index-i4KDHg6s.js";import"./scrollTo-AVVbfwLM.js";import"./Pagination-JNBnqXZt.js";import"./index-DX3AmcIs.js";import"./useQueryParam-CrfZbefi.js";import"./index-Dd4tObWl.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
