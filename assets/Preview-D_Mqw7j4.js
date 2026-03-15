import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-CnQvfPte.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-TsyTblsj.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-B7zGqjrw.js";import{U as u}from"./UserAvatar-BHB4CYK0.js";import{A as b,T as f,a as v}from"./index-DyCfimr5.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-DvQhsLji.js";import"./index-Cyr5XSWu.js";import"./useFillId-DV6h2AKm.js";import"./index-CmuVGef_.js";import"./index-BCY_Gb4b.js";import"./index-CxL7N6oN.js";import"./index-DtM4hZl3.js";import"./index-DxIZ2SvD.js";import"./store-CwkT1znj.js";import"./GlobalAgentContextManager-DTs_48MV.js";import"./ipc-CNixsLkK.js";import"./sync-DwIwNDma.js";import"./FormGroup-BS5323xY.js";import"./Segmented-DMOYArNO.js";import"./index-CtabnHD7.js";import"./providerConfig-ChgRwkJS.js";import"./Text-BJWbX75c.js";import"./index-BtdxlY1D.js";import"./index-CMS3yRS6.js";import"./index-BdOjyMVe.js";import"./index-B6VYqtvD.js";import"./index-C9QF1idn.js";import"./index-BbBpZ0jF.js";import"./SettingHeader-DaV7plmt.js";import"./Block-CMBYIh5M.js";import"./index-fFo4dJH_.js";import"./index-BnisuevK.js";import"./row-D3LR-XPa.js";import"./index-Du78vELL.js";import"./EllipsisOutlined-Dhvu6BjS.js";import"./PlusOutlined-CGhZ0Op0.js";import"./Dropdown-BmeBMNyN.js";import"./index-gP2EfK4q.js";import"./index-CKlUY5qF.js";import"./index-CYrrQ6TL.js";import"./useForm-DIldd28t.js";import"./index-Byqv--K7.js";import"./index-DacURWq4.js";import"./abortableRequest-CqTkNl3n.js";import"./format-D0f5-nC3.js";import"./currency-iJxIWo9y.js";import"./time-C4tZGZRp.js";import"./index-Bi_U8hZM.js";import"./index-C338Mx3U.js";import"./index-EfuyILMY.js";import"./TextArea-CD7IzUMI.js";import"./Input-B7gI0kiU.js";import"./index-C-Ll4l2S.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-CgckoCfW.js";import"./Drawer-vmYk3mZO.js";import"./index-DYG7Sddo.js";import"./index-CJV-jP_3.js";import"./base-AbuBx_QK.js";import"./Link-BoDPWcAK.js";import"./Trans-rJk8oGSY.js";import"./FormModal-B8IAywND.js";import"./index-0bW8XQVi.js";import"./useTranslation-tn1hyCOL.js";import"./form-CzkHLuiW.js";import"./useScreenshot-3S26zNfE.js";import"./dynamic-Cw34escy.js";import"./index-N-7evQNV.js";import"./Table-prOqYfxV.js";import"./index-BCQfHk--.js";import"./useBubbleLock-6kkEthu_.js";import"./index-C8Hl0-Ap.js";import"./LeftOutlined-CioaMl9n.js";import"./index-CzNOIklx.js";import"./index-Bx8oz4k7.js";import"./Addon-B-s0TOE9.js";import"./index-B5q2c9Lf.js";import"./scrollTo-D2bNCOoo.js";import"./Pagination-Cpr7-sCr.js";import"./index-ZiplUfYl.js";import"./useQueryParam-2mFox01G.js";import"./index-CBsJREVB.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
