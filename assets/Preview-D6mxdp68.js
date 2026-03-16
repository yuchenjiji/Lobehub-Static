import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-BlXf1DT_.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-ChxLixBg.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-Cxk4Lpd6.js";import{U as u}from"./UserAvatar-CO7JILi4.js";import{A as b,T as f,a as v}from"./index-EOBz6Q2t.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-C6HbAgX2.js";import"./index-D1v0H7N8.js";import"./useFillId-DV6h2AKm.js";import"./index-BrCZ3dQH.js";import"./index-QeoY0oy6.js";import"./index-CZ2N4Hp5.js";import"./index-CptiTFY4.js";import"./index-Ch2yGWrP.js";import"./store-YJ16RB_9.js";import"./GlobalAgentContextManager-CeO74fNb.js";import"./ipc-CNixsLkK.js";import"./sync-dPgyYfb-.js";import"./FormGroup-DY0qU3kz.js";import"./Segmented-BWAB9pOT.js";import"./index-B0GJP2ud.js";import"./providerConfig-UAXxoBn0.js";import"./Text-D5YBWJ7m.js";import"./index-DiO2XNkQ.js";import"./index-DyTrDJ5j.js";import"./index-DhnHfSu2.js";import"./index-C54z7vhu.js";import"./index-BIq71AE5.js";import"./index-C74cxLxW.js";import"./SettingHeader-COz48axk.js";import"./Block-CaxDTBwJ.js";import"./index-fFo4dJH_.js";import"./index-D_Nlr9un.js";import"./row-DxCUW653.js";import"./index-C-vzoELR.js";import"./EllipsisOutlined-DX6cMWFS.js";import"./PlusOutlined-C2s-yQzb.js";import"./Dropdown-MbmpwoFb.js";import"./index-CJCxrmNg.js";import"./index-CFfV9a5X.js";import"./index-ConHfvRV.js";import"./useForm-Buul26ph.js";import"./index-2KKJpWiq.js";import"./index-CUGtqNNO.js";import"./abortableRequest-CqTkNl3n.js";import"./format-xziyf958.js";import"./currency-iJxIWo9y.js";import"./time-CXwYWNyM.js";import"./index-BLypu2Uy.js";import"./index-DmK6jkcV.js";import"./index-BB_XEtXt.js";import"./TextArea-AfgZNbfB.js";import"./Input-BLU0gM8q.js";import"./index-FJdICAgV.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-BRe8tRgU.js";import"./Drawer-CAiWKI7n.js";import"./index-IAM7PWR_.js";import"./index-DI3jXjdC.js";import"./base-AbuBx_QK.js";import"./Link-yeJL-nF2.js";import"./Trans-CUifXJYb.js";import"./FormModal-D_11A2Ir.js";import"./index-Bc29rn14.js";import"./useTranslation-CyBOA_Iv.js";import"./form-CzkHLuiW.js";import"./useScreenshot-S39Nt29Y.js";import"./dynamic-Cw34escy.js";import"./index-BsnqJp7E.js";import"./Table-CY7MYqTN.js";import"./index-B41xVdsr.js";import"./useBubbleLock-6kkEthu_.js";import"./index-DIcE_cbo.js";import"./LeftOutlined-D7lAaNRY.js";import"./index-CYHE1iCL.js";import"./index-BaIKQ5wY.js";import"./Addon-MwbA8QIw.js";import"./index-Ly5lSnEu.js";import"./scrollTo-C_MlXhSM.js";import"./Pagination-fyT87F3p.js";import"./index-a8lU-7C_.js";import"./useQueryParam-BZnR0abI.js";import"./index-DyUd6p--.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
