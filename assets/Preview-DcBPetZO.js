import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-DTW0VVHo.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-DAom0ydE.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-CVwjdEF8.js";import{U as u}from"./UserAvatar-CXkBrZ-Y.js";import{A as b,T as f,a as v}from"./index-Dpm9fBWR.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-BCovK1BP.js";import"./index-DINRj93_.js";import"./useFillId-DV6h2AKm.js";import"./index-Ch0czQT6.js";import"./index-D0uAch6x.js";import"./index-CfrLcPZx.js";import"./index-CUmNpYG7.js";import"./index-Cn4Mh_Xa.js";import"./store-BjaY-VCv.js";import"./GlobalAgentContextManager-B9f-rQqp.js";import"./ipc-CNixsLkK.js";import"./sync-M9fmyixa.js";import"./FormGroup-BD6kG2TD.js";import"./Segmented-BrSoKQ3_.js";import"./index-t3ss45uG.js";import"./providerConfig-DKsriFZY.js";import"./Text-Z3ERccFC.js";import"./index-pieE0mTh.js";import"./index-D_v_YYtI.js";import"./index-CCqbXqFr.js";import"./index-DlFv65SE.js";import"./index-BiaXoIsY.js";import"./index-B-SAUIkD.js";import"./SettingHeader-CsqM-zNK.js";import"./Block-BgH28pIQ.js";import"./index-fFo4dJH_.js";import"./index-N3EyBETe.js";import"./row-D7QYvodH.js";import"./index-D-YDpA39.js";import"./EllipsisOutlined-FW_sqcjS.js";import"./PlusOutlined-OA9SN1tr.js";import"./Dropdown-Df44lZwD.js";import"./index-B5M6pcqm.js";import"./index-BuU1FNqQ.js";import"./index-Cu5zAp5w.js";import"./useForm-DPPHVFCg.js";import"./index-DdJv3LXI.js";import"./index-ClenKpbe.js";import"./abortableRequest-CqTkNl3n.js";import"./format-DA8XP49I.js";import"./currency-iJxIWo9y.js";import"./time-BCesATMW.js";import"./index--Dm2mxdO.js";import"./index-iEwlIla2.js";import"./index-DJeBZeOf.js";import"./TextArea-CudfbpwX.js";import"./Input-DO34Kln_.js";import"./index-CgpFu6Jk.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-mcqESmcN.js";import"./Drawer-C2RehMbm.js";import"./index-D-061mUE.js";import"./index-EC_eOyLi.js";import"./base-AbuBx_QK.js";import"./Link-C-3ydtCL.js";import"./Trans-DhgmgsnJ.js";import"./FormModal-CP5ZDGVY.js";import"./index-1YWhZHzU.js";import"./useTranslation-39Jdh-4K.js";import"./form-CzkHLuiW.js";import"./useScreenshot-CASbuB8B.js";import"./dynamic-Cw34escy.js";import"./index-_i4zHt5r.js";import"./Table-DoEM4zO9.js";import"./index-DIvAs_2W.js";import"./useBubbleLock-6kkEthu_.js";import"./index-Cd8Lyy0S.js";import"./LeftOutlined-BqYZEJnw.js";import"./index-CxZOca1-.js";import"./index-Cap7GQWv.js";import"./Addon-CCNe3Z5T.js";import"./index-Dzw78zzO.js";import"./scrollTo-CCYOTrn_.js";import"./Pagination-BSQQ-bz6.js";import"./index-D5aQSxct.js";import"./useQueryParam-D59prNlL.js";import"./index-CXiw98I8.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
