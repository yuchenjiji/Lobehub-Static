import{j as x}from"../vendor/vendor-motion-D2gXNOxm.js";import{B as d}from"./providerConfig-CULHvVzb.js";import{A}from"./index-D0uAch6x.js";import{O as i,a3 as a,ao as U,aq as h,m as l,h as g}from"./index-DTW0VVHo.js";import{r as k}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as E}from"./store-BjaY-VCv.js";import{e as N}from"./sync-M9fmyixa.js";const w=g(({css:r})=>({clickable:r`
    position: relative;
    transition: all 200ms ease-out 0s;

    &::before {
      content: '';

      position: absolute;
      transform: skewX(-45deg) translateX(-400%);

      overflow: hidden;

      box-sizing: border-box;
      width: 25%;
      height: 100%;

      background: rgb(255 255 255 / 50%);

      transition: all 200ms ease-out 0s;
    }

    &:hover {
      box-shadow: 0 0 0 2px ${l.colorPrimary};

      &::before {
        transform: skewX(-45deg) translateX(400%);
      }
    }
  `})),q=({ref:r,size:m=40,background:c,clickable:u,className:f,style:p,...S})=>{const[e,s,n]=i(o=>[a.userAvatar(o),a.nickName(o),a.username(o)]),t=i(U.isLogin),b=E(N.remoteServerUrl),v=k.useMemo(()=>{if(!t)return h;if(e)return e},[t,e,b]);return x.jsx(A,{alt:t?s||n||"User":d,avatar:v||s||n,background:c,className:u?w.clickable:f,ref:r,shape:"square",size:m,style:{color:l.colorText,flex:"none",...p},...S})};export{q as U};
