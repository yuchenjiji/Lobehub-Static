import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as a,C as p,F as e,a5 as s,h as d,l as n,D as l,r as c,aR as h}from"./index-C5zbgvwz.js";import"./providerConfig-CULHvVzb.js";import{G as x}from"./Grid-DBbb4F1b.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as m}from"./index-BpYwl28h.js";import{U as u}from"./UserAvatar-Bs4RaWxN.js";import{A as b,T as f,a as v}from"./index-DhVmJzxZ.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-C_WKpN5F.js";import"./index-DqSEMWER.js";import"./useFillId-DV6h2AKm.js";import"./index-DInHbZ_a.js";import"./index-Bv_c-ZRT.js";import"./index-D8P_Ja1q.js";import"./index-DL5m1iHk.js";import"./index-Ar4KhFnc.js";import"./store-CXA9yX9c.js";import"./GlobalAgentContextManager-QgcT9GJz.js";import"./ipc-CNixsLkK.js";import"./sync-DB2UsAsS.js";import"./FormGroup-DUqIYmYQ.js";import"./Segmented-BO5LmVFr.js";import"./index-CJ7-GqnD.js";import"./providerConfig-BBdonAyO.js";import"./Text-9eTrLhGb.js";import"./index-vhClPCyJ.js";import"./index-BqJ7kkjT.js";import"./index-DkOCukg1.js";import"./index-CYYnDHcE.js";import"./index-BhHEjs9g.js";import"./index-CXdQUuZG.js";import"./SettingHeader-Jp0F0crz.js";import"./Block-UAMP4nj4.js";import"./index-fFo4dJH_.js";import"./index-D7obfuFU.js";import"./row-CNC2zMuA.js";import"./index-Dw6s47us.js";import"./EllipsisOutlined-ClapHBS-.js";import"./PlusOutlined-YbQX6OW4.js";import"./Dropdown-_bybfa42.js";import"./index-U7FO3EL6.js";import"./index-DcbrbIty.js";import"./index-BJfhmekG.js";import"./useForm-CZNop9z3.js";import"./index-CyXqTsJB.js";import"./index-CZucshgf.js";import"./abortableRequest-CqTkNl3n.js";import"./format-BZrVXdNl.js";import"./currency-iJxIWo9y.js";import"./time-CRdKpJod.js";import"./index-BpFzxA3l.js";import"./index-DU0CwqWq.js";import"./index-D3DpOoF_.js";import"./TextArea-ChyWBsMD.js";import"./Input-B2YxDM_u.js";import"./index-Dd5DHJV3.js";import"./_baseAssignValue-DpCK6oG2.js";import"./debounce-hAQ801r4.js";import"./tiny-invariant-CopsF_GD.js";import"./step-B6EOmCqb.js";import"./index-Chjiymov.js";import"./band-CquvqAHh.js";import"./init-Dmth1JHB.js";import"./ordinal-DILIJJjt.js";import"./linear-BkEJkjA2.js";import"./defaultLocale-DX6XiGOO.js";import"./time-DAeG9hya.js";import"./index-Ciqn2WuZ.js";import"./Modal-Ds6YT6ie.js";import"./Drawer-GxKHEtZR.js";import"./index-BF_WOMIE.js";import"./index-DIxI-24S.js";import"./base-AbuBx_QK.js";import"./Link-DrNDIPhj.js";import"./Trans-IOkzw7Ui.js";import"./FormModal-DPX9h0Zp.js";import"./index-Did6IDA7.js";import"./useTranslation-5trCtzSD.js";import"./form-CzkHLuiW.js";import"./useScreenshot-DJZf6oHj.js";import"./dynamic-Cw34escy.js";import"./index--4FzuckB.js";import"./Table-BNwJN8Kx.js";import"./index-Bob_iapA.js";import"./useBubbleLock-6kkEthu_.js";import"./index-CtGcNZdU.js";import"./LeftOutlined-BedGXtja.js";import"./index-BcfjwlL0.js";import"./index-BLr7vUX7.js";import"./Addon-DYHeKYea.js";import"./index-C0si2a-U.js";import"./scrollTo-EQcPlhuD.js";import"./Pagination-OpTQ2CFZ.js";import"./index-CjCUDMwI.js";import"./useQueryParam-Def09iue.js";import"./index-SKEynUaP.js";import"./customParseFormat-PFiJ6rot.js";const i=d(({css:t,cssVar:r})=>({avatar:t`
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
