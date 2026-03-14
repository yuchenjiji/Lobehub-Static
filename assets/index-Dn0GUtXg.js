import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{r as c}from"../vendor/vendor-emotion-D8kPrniB.js";import{h as w,j as y,bq as z,F as o,l as v,m as $,y as d,i as u,T as j}from"./index-DuTkvx3R.js";import{G as x}from"./Grid-Dv1KoD0_.js";import{u as m}from"./store-D0s_nhg5.js";import{g as P}from"./providerConfig-CULHvVzb.js";import{A as S}from"./index-3_OIRYp9.js";import{S as L}from"./index-rVIaLnR4.js";import{I as D}from"./index-wxZ_beZz.js";import{P as A}from"./index-BoCbj51-.js";import{P as E}from"./index-DX3AmcIs.js";import{D as C}from"./index-BuVnyVPZ.js";import{a as f}from"./selectors-Dd-eUbkn.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"../vendor/vendor-icons-UxbXHH06.js";import"./index-D1Zj94up.js";import"./currency-iJxIWo9y.js";import"./object-Cz6o-AEA.js";import"./index-b6vSUHKH.js";import"./index-Dd3sJru5.js";import"./index-CS6LoGWM.js";import"./Block-DEfkToFX.js";import"./index-BCGXIb_J.js";import"./providerConfig-DiGH8Npl.js";import"./Text-CkOz-Rca.js";import"./index-CNknNfMk.js";import"./useFillId-DV6h2AKm.js";import"./index-BV4dwSb7.js";import"./index-yUYzeI5l.js";import"./index-d2l14ppd.js";import"./index-CKHOwEpr.js";import"./index-B9PBP7fX.js";import"./index-xFfwDBq8.js";import"./index-BBvN0Mp6.js";function I(){return null}const F=({id:t,Component:r,enabled:n})=>{const[l]=m(a=>[a.toggleProviderEnabled]);return r?e.jsx(r,{enabled:n,id:t}):e.jsx(D,{enabled:n,size:"small",onChange:async a=>{await l(t,a)}})},p=w(({css:t,cssVar:r})=>({bannerDark:t`
    opacity: 0.9;
  `,bannerLight:t`
    opacity: 0.4;
  `,containerDark:t`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${r.colorBgContainer};
    box-shadow: 0 0 1px 1px ${r.colorFillQuaternary} inset;

    transition: box-shadow 0.2s ${r.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${r.colorFillSecondary} inset;
    }
  `,containerLight:t`
    position: relative;

    overflow: hidden;

    height: 100%;
    border-radius: 12px;

    background: ${r.colorBgContainer};
    box-shadow: 0 0 1px 1px ${r.colorFillSecondary} inset;

    transition: box-shadow 0.2s ${r.motionEaseInOut};

    &:hover {
      box-shadow: 0 0 1px 1px ${r.colorFill} inset;
    }
  `,desc:t`
    min-height: 44px;
    margin-block-end: 0 !important;
    color: ${r.colorTextDescription};
  `,tagBlue:t`
    color: ${r.geekblue};
    background: ${r.geekblue1};
  `,tagGreen:t`
    color: ${r.green};
    background: ${r.green1};
  `,time:t`
    color: ${r.colorTextDescription};
  `,title:t`
    zoom: 1.2;
    margin-block-end: 0 !important;
    font-size: 18px !important;
    font-weight: bold;
  `,token:t`
    font-family: ${r.fontFamilyCode};
  `})),h=c.memo(({id:t,description:r,name:n,enabled:l,source:a,logo:s,loading:g,onProviderSelect:i})=>{const{t:k}=y("providers"),b=z();return g?e.jsx(o,{className:v(b?p.containerDark:p.containerLight),gap:24,padding:16,children:e.jsx(L,{active:!0})}):t===P?e.jsx(I,{}):e.jsx(o,{className:v(b?p.containerDark:p.containerLight),gap:24,children:e.jsxs(o,{gap:12,padding:16,width:"100%",children:[e.jsx("div",{style:{cursor:"pointer"},onClick:()=>{i(t)},children:e.jsxs(o,{gap:12,width:"100%",children:[e.jsx(o,{horizontal:!0,align:"center",justify:"space-between",children:a==="builtin"?e.jsx(A,{provider:t,size:24,style:{color:$.colorText},title:n}):e.jsxs(o,{horizontal:!0,align:"center",gap:12,children:[s?e.jsx(S,{alt:n||t,avatar:s,size:28}):e.jsx(E,{provider:t,size:24,style:{borderRadius:6},type:"avatar"}),e.jsx(d,{style:{fontSize:16,fontWeight:"bold"},children:n||t})]})}),e.jsx(d,{className:p.desc,ellipsis:{rows:2},children:a==="custom"?r:k(`${t}.description`)})]})}),e.jsx(C,{style:{margin:"4px 0"}}),e.jsxs(o,{horizontal:!0,justify:"space-between",children:[e.jsx("div",{}),e.jsx(F,{enabled:l,id:t})]})]})})}),B=Array.from({length:12}).fill("-").map((t,r)=>`${r}x${t}`),fe=c.memo(t=>{const{onProviderSelect:r}=t,{t:n}=y("modelProvider"),l=m(f.enabledAiProviderList,u),a=m(f.disabledAiProviderList,u),s=m(f.disabledCustomAiProviderList,u),[g]=m(i=>[i.initAiProviderList]);return g?e.jsxs(e.Fragment,{children:[e.jsxs(o,{gap:24,children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.enabled")}),e.jsx(j,{children:l.length})]}),e.jsx(x,{gap:16,rows:3,children:l.map(i=>c.createElement(h,{...i,key:i.id,onProviderSelect:r}))})]}),s.length>0&&e.jsxs(o,{gap:24,children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.custom")}),e.jsx(j,{children:s.length})]}),e.jsx(x,{gap:16,rows:3,children:s.map(i=>c.createElement(h,{...i,key:i.id,onProviderSelect:r}))})]}),e.jsxs(o,{gap:24,children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(d,{strong:!0,style:{fontSize:18},children:n("list.title.disabled")}),e.jsx(j,{children:a.length})]}),e.jsx(x,{gap:16,rows:3,children:a.map(i=>c.createElement(h,{...i,key:i.id,onProviderSelect:r}))})]})]}):e.jsxs(o,{gap:24,paddingBlock:"0 16px",children:[e.jsx(o,{horizontal:!0,align:"center",gap:4,children:e.jsx(d,{strong:!0,style:{fontSize:16},children:n("list.title.enabled")})}),e.jsx(x,{gap:16,rows:3,children:B.map(i=>e.jsx(h,{loading:!0,enabled:!1,id:i,source:"builtin",onProviderSelect:r},i))})]})});export{fe as default};
