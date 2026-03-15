import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-Co46OOry.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-YKmYLalR.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-DWX9rhIb.js";import{U as u}from"./UserAvatar-Cn4JWx3j.js";import{A as b,T as f,a as v}from"./index-BKU75hda.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-ChskZ5h_.js";import"./index-B7S4FLKw.js";import"./useFillId-DV6h2AKm.js";import"./index-B5fa_jiQ.js";import"./index-CMPDGxbE.js";import"./index-cXSBe9G0.js";import"./index-BP-9hJFu.js";import"./index-Tnw7UMgW.js";import"./store-dwtQqkr6.js";import"./GlobalAgentContextManager-CBCbXFgV.js";import"./ipc-CNixsLkK.js";import"./sync-CNeDs2r7.js";import"./FormGroup-DSGFGSRk.js";import"./Segmented-C9SuSuxb.js";import"./index-vOFl8Grb.js";import"./providerConfig-CawElqcZ.js";import"./Text-BtBtItuJ.js";import"./index-DJdhBQ14.js";import"./index-DsDcoqjD.js";import"./index-CBrU9vN7.js";import"./index-kjTeSXtb.js";import"./index-BbwM_-VY.js";import"./index-STNGqpwv.js";import"./SettingHeader-BzHi22V8.js";import"./Block-DTrzmjZ1.js";import"./index-fFo4dJH_.js";import"./index-Cq_Xg_xn.js";import"./row-DEzHf7l1.js";import"./index-CDeX135d.js";import"./EllipsisOutlined-CGJYRTbr.js";import"./PlusOutlined-CHMXKujE.js";import"./Dropdown-E59tEqdx.js";import"./index-Deyi_hEp.js";import"./index-t8-2X6wl.js";import"./index-B0DrcYTv.js";import"./useForm-DEE6a4GA.js";import"./index-CSVu88a3.js";import"./index-BEWRKprQ.js";import"./abortableRequest-CqTkNl3n.js";import"./format-CS5m722Q.js";import"./currency-iJxIWo9y.js";import"./time-BCbXYvlx.js";import"./index-Yc38871w.js";import"./index-D3_cOfIP.js";import"./index-DZomJJVw.js";import"./TextArea-WM7ohBpG.js";import"./Input-D66QE2T1.js";import"./index-CYIcqqsJ.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-C9AneL8v.js";import"./Drawer-9_ArTfmI.js";import"./index-Dr_kZtYn.js";import"./index-6ukAjWqM.js";import"./base-AbuBx_QK.js";import"./Link-B-yrim2f.js";import"./Trans-5LGzFU87.js";import"./FormModal-WEbgP0kP.js";import"./index-BzYNY1YV.js";import"./useTranslation-DJA9MqT_.js";import"./form-CzkHLuiW.js";import"./useScreenshot-CFSmLEYW.js";import"./dynamic-Cw34escy.js";import"./index-BmGhRPfE.js";import"./Table-jzc7tZWz.js";import"./index-CPuxBiS3.js";import"./useBubbleLock-6kkEthu_.js";import"./index-ClIOgtNB.js";import"./LeftOutlined-e6mUbGnU.js";import"./index-CT0l17fa.js";import"./index-CVjNP41S.js";import"./Addon-vra2xggg.js";import"./index-w94xxhG1.js";import"./scrollTo-CRnU52X3.js";import"./Pagination-CQqxASzo.js";import"./index-DVuzETe3.js";import"./useQueryParam-D-2aWm9B.js";import"./index-BZOMnmCo.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
