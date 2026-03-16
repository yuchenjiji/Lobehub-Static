import{j as o}from"../vendor/vendor-motion-ksfQGfvU.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-BTYm_psc.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-DtLYEWzq.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-CsDwq3GP.js";import{U as u}from"./UserAvatar-Cc-x6VMh.js";import{A as b,T as f,a as v}from"./index-C219buJS.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-DDWxvSD1.js";import"./index-DVs0c_VD.js";import"./useFillId-DV6h2AKm.js";import"./index-CJlem7yu.js";import"./index-C8i9ldt0.js";import"./index-CrDNjW5_.js";import"./index-CMb12WLx.js";import"./index-BKs8zWty.js";import"./store--jHKZsvt.js";import"./GlobalAgentContextManager-CYAiW6O1.js";import"./ipc-CNixsLkK.js";import"./sync-MI5iQw2W.js";import"./FormGroup-Dd5hVZjb.js";import"./Segmented-CWIA9tRe.js";import"./index-C9jENYvR.js";import"./providerConfig-DNuvPu5A.js";import"./Text-g1fr1el2.js";import"./index-DXqVm7KO.js";import"./index-D5aWJskb.js";import"./index-CIZpB9an.js";import"./index-CfxvUzvV.js";import"./index-B1IwpZKJ.js";import"./index-DdShcdJZ.js";import"./SettingHeader-BJ_eiu1D.js";import"./Block-CzvG4Myp.js";import"./index-fFo4dJH_.js";import"./index-D45GiGBh.js";import"./row-l60Sfv2K.js";import"./index-BryhekM3.js";import"./EllipsisOutlined-DpgiB_Fq.js";import"./PlusOutlined-BjOizlV_.js";import"./Dropdown-BZQBS7VM.js";import"./index-B-Y_gySn.js";import"./index-C7clpSzY.js";import"./index-A8s_dT6W.js";import"./useForm-CaKsFAlO.js";import"./index-BLXBbZqI.js";import"./index-QPUT0VB3.js";import"./abortableRequest-CqTkNl3n.js";import"./format-tdCMj1QR.js";import"./currency-iJxIWo9y.js";import"./time-HTmszkvf.js";import"./index-K9JkSlyl.js";import"./index-Brfh3dbY.js";import"./index-9ZpeqtqY.js";import"./TextArea-DMrmu7l-.js";import"./Input-Bdrgk0hH.js";import"./index-L0S29iN_.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-DBI8gkBV.js";import"./Drawer-BhNvJ4HY.js";import"./index-wSg9csJd.js";import"./index-BXTuOr1p.js";import"./base-AbuBx_QK.js";import"./Link-C3W_i-sf.js";import"./Trans-CUA0Drds.js";import"./FormModal-BSB6gsz2.js";import"./index--9LceGH1.js";import"./useTranslation-CuvK4m8S.js";import"./form-CzkHLuiW.js";import"./useScreenshot-DwyRm2ON.js";import"./dynamic-04g-Kqqi.js";import"./index-E4R7L9v9.js";import"./Table-DWWqLwQP.js";import"./index-DDZMbJR2.js";import"./useBubbleLock-jaHyx18n.js";import"./index-Tm2VBgSy.js";import"./LeftOutlined-Dycim1qq.js";import"./index-ClYTx8vz.js";import"./index-B4Hvwfb1.js";import"./Addon-D4htfwbH.js";import"./index-3VupkVrs.js";import"./scrollTo-CjA55vJc.js";import"./Pagination-1VxNBExY.js";import"./index-D_7OUHL9.js";import"./useQueryParam-BkhxdwN-.js";import"./index-BAGG2Vwi.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
