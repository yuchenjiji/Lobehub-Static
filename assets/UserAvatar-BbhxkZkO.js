import{j as x}from"../vendor/vendor-motion--v3N1cMI.js";import{B as d}from"./providerConfig-CULHvVzb.js";import{A}from"./index-C03wQVBa.js";import{v as i,Q as s,al as U,ap as g,k as l,f as h}from"./index-DgmZNIaB.js";import{r as k}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as E}from"./store-B860Cwgp.js";import{e as N}from"./sync-BUFHYvKf.js";const w=h(({css:r})=>({clickable:r`
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
  `})),B=({ref:r,size:c=40,background:m,clickable:u,className:f,style:p,...v})=>{const[e,a,n]=i(o=>[s.userAvatar(o),s.nickName(o),s.username(o)]),t=i(U.isLogin),S=E(N.remoteServerUrl),b=k.useMemo(()=>{if(!t)return g;if(e)return e},[t,e,S]);return x.jsx(A,{alt:t?a||n||"User":d,avatar:b||a||n,background:m,className:u?w.clickable:f,ref:r,shape:"square",size:c,style:{color:l.colorText,flex:"none",...p},...v})};export{B as U};
