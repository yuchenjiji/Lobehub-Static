import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-BzLMjSCA.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-D4IlJX72.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-DA3ExhJP.js";import{U as u}from"./UserAvatar-BzofcZpV.js";import{A as b,T as f,a as v}from"./index-B0rnS_0Z.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-Czew5JYm.js";import"./index-spVtsZg1.js";import"./useFillId-DV6h2AKm.js";import"./index-VyUSRxqe.js";import"./index-C2Bs0zJB.js";import"./index-C-vrAyHP.js";import"./index-DfQYUH17.js";import"./index-CuTnxV3I.js";import"./store-CwSEntTa.js";import"./GlobalAgentContextManager-34-Qs1B7.js";import"./ipc-CNixsLkK.js";import"./sync-DLSxsBdv.js";import"./FormGroup-CCcilxr-.js";import"./Segmented-CH3zfExi.js";import"./index-CCOlTqYC.js";import"./providerConfig-BlDIVXRt.js";import"./Text-CBxYgam6.js";import"./index-CWtwc1BC.js";import"./index-D1dMCR4I.js";import"./index-DYVElKhm.js";import"./index-BgUMxTsT.js";import"./index-BjnmM9wD.js";import"./index-C01IaG9-.js";import"./SettingHeader-zXLL1-2E.js";import"./Block-DisZY_e8.js";import"./index-fFo4dJH_.js";import"./index-CYUoKOZF.js";import"./row-BsQCwDmk.js";import"./index-DtneZUvo.js";import"./EllipsisOutlined-DaWNeruF.js";import"./PlusOutlined-1mZvwt0F.js";import"./Dropdown-D9jCtlUN.js";import"./index-B-DrTuHc.js";import"./index-CJ9jXIiA.js";import"./index-nupYNZmn.js";import"./useForm-VLrgfUEK.js";import"./index-B2titnPd.js";import"./index-BrR67f9G.js";import"./abortableRequest-CqTkNl3n.js";import"./format-Ns5ZgsQk.js";import"./currency-iJxIWo9y.js";import"./time-FQOi1Vk7.js";import"./index-mCIGSM8v.js";import"./index-BEQ9h0_F.js";import"./index-BqdNM2To.js";import"./TextArea-DKzrab1C.js";import"./Input-GUFL8d4e.js";import"./index-C_jL-jeT.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-Ds-3kfE8.js";import"./Drawer-Hm2Pb34R.js";import"./index-D4q2aEH9.js";import"./index-CQ3HIhe5.js";import"./base-AbuBx_QK.js";import"./Link-BU74LNx6.js";import"./Trans-ctdj3yt3.js";import"./FormModal-CiukAdGw.js";import"./index-EZv-Npah.js";import"./useTranslation-BHsOfDM0.js";import"./form-CzkHLuiW.js";import"./useScreenshot-CkcOSFU5.js";import"./dynamic-Cw34escy.js";import"./index-DBcDCP-o.js";import"./Table-CqSMO04a.js";import"./index-Cr1Zvt1Z.js";import"./useBubbleLock-6kkEthu_.js";import"./index-DmgOtmIf.js";import"./LeftOutlined-UeqPNbIG.js";import"./index-CGcGELKS.js";import"./index-B1cenqWv.js";import"./Addon-Dcnlt-VM.js";import"./index-6tR_yV2b.js";import"./scrollTo-XhO8_D_I.js";import"./Pagination-DrcG9rqT.js";import"./index-BwUPH0--.js";import"./useQueryParam-CEOp4T9d.js";import"./index--iHxC2T_.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
