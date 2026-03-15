import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{A as f,l as I,h as d,m as t}from"./index-Cbsc4Bbc.js";import{I as x}from"./index-Pbdzjq8W.js";import{r as E}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as k}from"./usePlatform-BtpLJfGD.js";import{aL as S}from"../vendor/vendor-icons-UxbXHH06.js";const b=64,r=d(({css:o})=>({deleteButton:o`
    color: #fff;
    background: ${t.colorBgMask};

    &:hover {
      background: ${t.colorError};
    }
  `,editableImage:o`
    background: ${t.colorBgContainer};
    box-shadow: 0 0 0 1px ${t.colorFill} inset;
  `,image:o`
    margin-block: 0 !important;

    .ant-image {
      height: 100% !important;

      img {
        height: 100% !important;
      }
    }
  `})),M=E.memo(({className:o,style:i,editable:a,alt:m,onRemove:n,url:c,loading:l,alwaysShowClose:g,preview:p})=>{const h=a?b:"100%",{isSafari:s}=k();return e.jsx(x,{alt:m||"",alwaysShowActions:g,classNames:{wrapper:I(r.image,a&&r.editableImage,o)},height:s?"auto":"100%",isLoading:l,preview:p,size:h,src:c,style:{height:s?"auto":"100%",width:"100%",...i},actions:a&&e.jsx(f,{glass:!0,className:r.deleteButton,icon:S,size:"small",onClick:u=>{u.stopPropagation(),n?.()}})})});export{M as I};
