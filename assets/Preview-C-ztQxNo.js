import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-Cbsc4Bbc.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-BE8NL_63.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-B86mdThb.js";import{U as u}from"./UserAvatar-DJFqvZhi.js";import{A as b,T as f,a as v}from"./index-rFYkBKqY.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-B6FQ9pG7.js";import"./index-DZ3dHt9E.js";import"./useFillId-DV6h2AKm.js";import"./index-Dpk1gNUg.js";import"./index-Dqkj3OU3.js";import"./index-DcIHB0uR.js";import"./index-sc-I71Eb.js";import"./index-BUIXHVtG.js";import"./store-BLj2lE78.js";import"./GlobalAgentContextManager-BNl1IhnL.js";import"./ipc-CNixsLkK.js";import"./sync-Dflcso61.js";import"./FormGroup-CDDlwvnJ.js";import"./Segmented-DXIof1b5.js";import"./index-CwprNu8X.js";import"./providerConfig-s52i76-P.js";import"./Text-CfsjhCzQ.js";import"./index-BQHmm5h9.js";import"./index-lnE88HA8.js";import"./index-D_Q08TtM.js";import"./index-DkaiIYaY.js";import"./index-BbS18ssD.js";import"./index-Dgj-BlpT.js";import"./SettingHeader-DRL_QOCG.js";import"./Block-B7Wwf0Pg.js";import"./index-fFo4dJH_.js";import"./index-CMOwqlis.js";import"./row-D2ecpczz.js";import"./index-BAC3Yir3.js";import"./EllipsisOutlined-XdRn1CM7.js";import"./PlusOutlined-BsduHN_Q.js";import"./Dropdown-Dpyk3MJB.js";import"./index-BKbFLSkY.js";import"./index-DzgkZQ5H.js";import"./index-DsTXqjor.js";import"./useForm-CT5Qe__1.js";import"./index-D49eVKhS.js";import"./index-Cka0_jwF.js";import"./abortableRequest-CqTkNl3n.js";import"./format-B_ObzesU.js";import"./currency-iJxIWo9y.js";import"./time-D4CcOj_M.js";import"./index-DlaPpbeA.js";import"./index-DfeCloMb.js";import"./index-oP_hnEmX.js";import"./TextArea-DBdEYVUq.js";import"./Input-BLyXeXNO.js";import"./index-BoKdL3KT.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-BUUJgFpO.js";import"./Drawer-KzeGqrMB.js";import"./index-CZUOUpNQ.js";import"./index-BzgXRT4G.js";import"./base-AbuBx_QK.js";import"./Link-C-97RzQP.js";import"./Trans-DDW1JaH6.js";import"./FormModal-BWeuofkk.js";import"./index-CbbKShSW.js";import"./useTranslation-HSC9sEns.js";import"./form-CzkHLuiW.js";import"./useScreenshot-CDWVn8Z8.js";import"./dynamic-Cw34escy.js";import"./index-DS0sMiUT.js";import"./Table-oegGHkx-.js";import"./index-B0DT-BOK.js";import"./useBubbleLock-6kkEthu_.js";import"./index--3CgWjkj.js";import"./LeftOutlined-D3LJSxae.js";import"./index-BYA6zDr_.js";import"./index-B-TfYDu1.js";import"./Addon-DISrJSNy.js";import"./index-cRbfdIde.js";import"./scrollTo-BRMvk2RN.js";import"./Pagination-D7ifNDpc.js";import"./index-YOrY2cFw.js";import"./useQueryParam-YP8E6VMl.js";import"./index-NK4HQKhr.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
