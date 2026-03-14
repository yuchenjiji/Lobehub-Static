import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-L1Lg0j_R.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-BgM3iNP7.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-DiJlJA2X.js";import{U as u}from"./UserAvatar-BCmUiCTL.js";import{A as b,T as f,a as v}from"./index-3ioZB7sT.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-BFuY_sRW.js";import"./index-Bi41_gvn.js";import"./useFillId-DV6h2AKm.js";import"./index-MWDRUnv3.js";import"./index-cAAtdjfR.js";import"./index-BUEPuGIb.js";import"./index-CnjYZMDw.js";import"./index-nciq6EJe.js";import"./store-CFiTKEOo.js";import"./GlobalAgentContextManager-p2g4KD1n.js";import"./ipc-CNixsLkK.js";import"./sync-D72NCP_2.js";import"./FormGroup-BP4816qM.js";import"./Segmented-BbvEmaH7.js";import"./index-BDZXlL38.js";import"./providerConfig-DCWCVR7e.js";import"./Text-dMZ-vyl7.js";import"./index-CDNGtPXR.js";import"./index-BSlK7a4S.js";import"./index-DgFtP0ij.js";import"./index-DdG2Gppx.js";import"./index-DDBmEtVH.js";import"./index-DE_k2j_3.js";import"./SettingHeader-BHAXuuMK.js";import"./Block-BoyxA3LG.js";import"./index-fFo4dJH_.js";import"./index-BxyeG7Cb.js";import"./row-DRspDD5y.js";import"./index-Dr2nnJdw.js";import"./EllipsisOutlined-Epces3Eu.js";import"./PlusOutlined-87J22zOV.js";import"./Dropdown-Cddm0YOv.js";import"./index-Deo2VdsD.js";import"./index-BWWnuEtf.js";import"./index-Cd10TS9Z.js";import"./useForm-CH8RQhNG.js";import"./index-B7kTixHo.js";import"./index-B8yDyZto.js";import"./abortableRequest-CqTkNl3n.js";import"./format-BZV-DxXi.js";import"./currency-iJxIWo9y.js";import"./time-BxjnFzJ-.js";import"./index-4ySBj31S.js";import"./index-BwRIdDGx.js";import"./index-Cg3T77QA.js";import"./TextArea-D4vVOEFi.js";import"./Input-AbbZppXw.js";import"./index-3D1xHeO8.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-Bx2sdTxR.js";import"./Drawer-CLleHXCB.js";import"./index-BuS6lYFC.js";import"./index-DaUfwhiE.js";import"./base-AbuBx_QK.js";import"./Link-C0vkeHVy.js";import"./Trans-scsYGEXY.js";import"./FormModal-D2gTLci2.js";import"./index-Boad2kPA.js";import"./useTranslation-CgnXecwk.js";import"./form-CzkHLuiW.js";import"./useScreenshot-CY2gFgZ0.js";import"./dynamic-Cw34escy.js";import"./index-CFw_RpXV.js";import"./Table-CgS8OKwS.js";import"./index-BfY9-Lv0.js";import"./useBubbleLock-6kkEthu_.js";import"./index-CN4uGf_p.js";import"./LeftOutlined-BTqt6E-S.js";import"./index-BJ_WwtC8.js";import"./index-DgcLzcp8.js";import"./Addon-HaZsIiui.js";import"./index-D6xaf3ir.js";import"./scrollTo-DJQ9Zgwo.js";import"./Pagination-Dd9aA1-R.js";import"./index-DrZTrLBD.js";import"./useQueryParam-4wEmNGDV.js";import"./index-xe8d0BKZ.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
