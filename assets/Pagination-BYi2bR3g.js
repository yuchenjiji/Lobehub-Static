import{j as u}from"../vendor/vendor-motion-ksfQGfvU.js";import{r as S}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as d}from"./useQuery-D8BazRgN.js";import{S as f}from"./const-lbjNOSiN.js";import{P as h}from"./Pagination-x4VxgUNe.js";import{e as b,f as $,g as y,h as C}from"./index-CMYT05q7.js";const P="lobe-mobile-scroll-container",x="ant",R=C(({css:e,cssVar:o})=>({page:e`
      .${x}-pagination-item-active {
        border-color: ${o.colorFillSecondary};
        background: ${o.colorFillSecondary};

        &:hover {
          border-color: ${o.colorFill};
          background: ${o.colorFill};
        }
      }
    `})),_=S.memo(({tab:e,currentPage:o,total:n,pageSize:s})=>{const{page:t}=d(),i=b(),l=$(),{mobile:c}=y(),m=g=>{const r=new URLSearchParams(l.search);r.set("page",String(g)),i(`/community/${e}?${r.toString()}`);const p=c?P:f,a=document?.querySelector(`#${p}`);a&&a.scrollTo({behavior:"smooth",top:0})};return u.jsx(h,{className:R.page,current:t?Number(t):o,"data-testid":"pagination",pageSize:s,showSizeChanger:!1,total:n,style:{alignSelf:"flex-end"},onChange:m})});export{_ as P};
