import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-CxFhYAo2.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-Cixqm92B.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-biQ0XAZZ.js";import{U as u}from"./UserAvatar-AtefwPf3.js";import{A as b,T as f,a as v}from"./index-CrESe62X.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-B1iy9vYu.js";import"./index-4WbkH1N0.js";import"./useFillId-DV6h2AKm.js";import"./index-DbajkcRb.js";import"./index-CGSYz0Bu.js";import"./index-P8QfyMmD.js";import"./index-B2xRHnSv.js";import"./index-BEfPTCCM.js";import"./store-BAXSrKAT.js";import"./GlobalAgentContextManager-BazOTSeG.js";import"./ipc-CNixsLkK.js";import"./sync-DBxOhMx-.js";import"./FormGroup-BCJu-t8_.js";import"./Segmented-Bwtr91Yw.js";import"./index-CpFMStvy.js";import"./providerConfig-1m-1eqDJ.js";import"./Text-B9qrcSfO.js";import"./index-B8lneWgP.js";import"./index-DsRozgqS.js";import"./index-YYLtHD7c.js";import"./index-BP6yPa5T.js";import"./index-B93BbCMY.js";import"./index-CXsw29Yu.js";import"./SettingHeader-CSWYIuLP.js";import"./Block-DQnQVMG7.js";import"./index-fFo4dJH_.js";import"./index-Vm2mtq2v.js";import"./row-CeMEQmHp.js";import"./index-BY1HgoII.js";import"./EllipsisOutlined-CgBu5-_B.js";import"./PlusOutlined-DBn6uUOO.js";import"./Dropdown-CHoHmfwf.js";import"./index-DVeV13xd.js";import"./index-DysoUn50.js";import"./index-Cl1G5mMQ.js";import"./useForm-HWTQtc-7.js";import"./index-BlkyP1dS.js";import"./index-D0wdk0LI.js";import"./abortableRequest-CqTkNl3n.js";import"./format-D0Qv6cYp.js";import"./currency-iJxIWo9y.js";import"./time-BuIZ3RU4.js";import"./index-D5QEXf7f.js";import"./index-JbrybBbJ.js";import"./index-DJyOMKyN.js";import"./TextArea-DxPfTy1n.js";import"./Input-B01-d9th.js";import"./index-dQAkg_qZ.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-B1XJyP1p.js";import"./Drawer-CuZpVabz.js";import"./index-CZvxaIvu.js";import"./index-DgeomOP-.js";import"./base-AbuBx_QK.js";import"./Link-Dl5EBuMv.js";import"./Trans-Bt-JQpvl.js";import"./FormModal-7FLnOpYR.js";import"./index-0epESU1I.js";import"./useTranslation-DWes3zge.js";import"./form-CzkHLuiW.js";import"./useScreenshot-BJhpHDb3.js";import"./dynamic-Cw34escy.js";import"./index-D-lyVuDA.js";import"./Table-nMMK09rp.js";import"./index-7M7Ncvpy.js";import"./useBubbleLock-6kkEthu_.js";import"./index-lIe7bLGH.js";import"./LeftOutlined-DHfY1I1O.js";import"./index-CLF6VyY8.js";import"./index-BHuH8m9S.js";import"./Addon-BuThrggK.js";import"./index-C927X2WX.js";import"./scrollTo-CW5sb216.js";import"./Pagination-DRJtjw6J.js";import"./index-CHsSCDjA.js";import"./useQueryParam-B_DQV_Cu.js";import"./index-BqSGpuSO.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
