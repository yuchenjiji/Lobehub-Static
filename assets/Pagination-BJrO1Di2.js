import{j as u}from"../vendor/vendor-motion--v3N1cMI.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as S}from"./useQuery-DB05Qkuk.js";import{S as f}from"./const-lbjNOSiN.js";import{P as h}from"./Pagination-DQ1euRo8.js";import{c as b,d as $,e as y,f as C}from"./index-DgmZNIaB.js";const P="lobe-mobile-scroll-container",x="ant",R=C(({css:e,cssVar:o})=>({page:e`
      .${x}-pagination-item-active {
        border-color: ${o.colorFillSecondary};
        background: ${o.colorFillSecondary};

        &:hover {
          border-color: ${o.colorFill};
          background: ${o.colorFill};
        }
      }
    `})),_=d.memo(({tab:e,currentPage:o,total:n,pageSize:s})=>{const{page:t}=S(),i=b(),c=$(),{mobile:l}=y(),m=g=>{const r=new URLSearchParams(c.search);r.set("page",String(g)),i(`/community/${e}?${r.toString()}`);const p=l?P:f,a=document?.querySelector(`#${p}`);a&&a.scrollTo({behavior:"smooth",top:0})};return u.jsx(h,{className:R.page,current:t?Number(t):o,"data-testid":"pagination",pageSize:s,showSizeChanger:!1,total:n,style:{alignSelf:"flex-end"},onChange:m})});export{_ as P};
