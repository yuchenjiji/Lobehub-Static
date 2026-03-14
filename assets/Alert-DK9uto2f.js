import{A as z,a as H}from"./AccordionItem-fqsDQ4i1.js";import{z as x,h as B,D as _,aw as R,I as D,m as F,A as G,l as K,F as b}from"./index-DuTkvx3R.js";import{r as L}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as n}from"../vendor/vendor-motion-D2gXNOxm.js";import{A as X}from"./index-CMlkI4y2.js";import{ay as w,az as q,aA as J,aB as M,X as O}from"../vendor/vendor-icons-UxbXHH06.js";import{g as I}from"../vendor/vendor-es-toolkit-BI0f0n_g.js";const l="ant",o=B(({css:e,cssVar:a})=>({banner:e`
      border: none !important;
      border-radius: 0 !important;
    `,borderless:e`
      padding: 0 !important;
      border: none !important;
      background: transparent !important;
    `,borderlessExtraHeaderNoTitle:e`
      margin-block-start: 8px;
      padding-inline: 0;
    `,borderlessExtraHeaderWithTitle:e`
      margin-block-start: 16px;
      padding-inline: 0;
    `,colorfulText:e`
      .${l}-alert-message,.${l}-alert-description {
        color: inherit;
      }
    `,expandText:e`
      padding-inline-end: 12px;

      &:hover {
        cursor: pointer;
      }
    `,extra:e`
      position: relative;

      overflow: hidden;

      max-width: 100%;
      border: 1px solid;
      border-block-start: none;
      border-end-start-radius: ${a.borderRadiusLG};
      border-end-end-radius: ${a.borderRadiusLG};
    `,extraHeader:e`
      border-block-start: 1px dashed;
      border-radius: 0;
      background: transparent !important;
    `,filled:e``,glass:_.blur,hasExtra:e`
      border-block-end: none;
      border-end-start-radius: 0;
      border-end-end-radius: 0;
    `,outlined:e`
      background: transparent !important;
    `,rootBase:e`
      position: relative;

      display: flex;
      flex-direction: row;
      align-items: flex-start;

      max-width: 100%;

      .${l}-alert-icon {
        display: flex;
        align-items: center;
        height: 24px;
        margin: 0;
      }
      .${l}-alert-close-icon {
        display: flex;
        align-items: center;
        height: 24px;
        margin: 0;
      }
    `,rootNoTitleNoIconNoClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 12px;

      .${l}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleNoIconWithClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 12px 9px;

      .${l}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleWithIconNoClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 9px 12px;

      .${l}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootNoTitleWithIconWithClosable:e`
      gap: 8px;
      padding-block: 8px;
      padding-inline: 9px;

      .${l}-alert-title {
        font-weight: 400;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
    `,rootWithTitleNoIconNoClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 16px;

      .${l}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${l}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleNoIconWithClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 16px 12px;

      .${l}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${l}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleWithIconNoClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 12px 16px;

      .${l}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${l}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `,rootWithTitleWithIconWithClosable:e`
      gap: 12px;
      padding-block: 16px;
      padding-inline: 12px;

      .${l}-alert-title {
        font-weight: 500;
        line-height: 24px;
        color: inherit;
        word-break: normal;
      }
      .${l}-alert-description {
        line-height: 1.5;
        word-break: normal;
        opacity: 0.75;
      }
    `})),P=x(o.extra,{defaultVariants:{variant:"filled"},variants:{variant:{filled:o.filled,outlined:o.outlined,borderless:o.borderless},banner:{false:null,true:o.banner}}}),Q=x(o.rootBase,{compoundVariants:[{class:o.rootNoTitleNoIconNoClosable,closable:!1,hasTitle:!1,showIcon:!1},{class:o.rootNoTitleNoIconWithClosable,closable:!0,hasTitle:!1,showIcon:!1},{class:o.rootNoTitleWithIconNoClosable,closable:!1,hasTitle:!1,showIcon:!0},{class:o.rootNoTitleWithIconWithClosable,closable:!0,hasTitle:!1,showIcon:!0},{class:o.rootWithTitleNoIconNoClosable,closable:!1,hasTitle:!0,showIcon:!1},{class:o.rootWithTitleNoIconWithClosable,closable:!0,hasTitle:!0,showIcon:!1},{class:o.rootWithTitleWithIconNoClosable,closable:!1,hasTitle:!0,showIcon:!0},{class:o.rootWithTitleWithIconWithClosable,closable:!0,hasTitle:!0,showIcon:!0}],defaultVariants:{closable:!1,colorfulText:!0,glass:!1,hasTitle:!1,showIcon:!1,variant:"filled"},variants:{closable:{false:null,true:null},colorfulText:{false:null,true:o.colorfulText},glass:{false:null,true:o.glass},hasTitle:{false:null,true:null},showIcon:{false:null,true:null},variant:{borderless:o.borderless,filled:o.filled,outlined:o.outlined},hasExtra:{false:null,true:o.hasExtra}}}),U=x(o.extraHeader,{compoundVariants:[{class:o.borderlessExtraHeaderNoTitle,hasTitle:!1,variant:"borderless"},{class:o.borderlessExtraHeaderWithTitle,hasTitle:!0,variant:"borderless"}],defaultVariants:{hasTitle:!1,variant:"filled"},variants:{hasTitle:{false:null,true:null},variant:{borderless:null,filled:null,outlined:null}}}),Y={error:M,info:J,secondary:w,success:q,warning:w},i=(e,a="info",...s)=>a==="secondary"?e[I(["color",...s].join("-"))]:e[I(["color",a,...s].join("-"))],k=L.memo(({closable:e=!1,description:a,showIcon:s=!0,type:r="info",glass:N,icon:C,colorfulText:u=!0,iconProps:W,style:v,extra:d,classNames:c,styles:h,text:y,extraDefaultExpand:A=!1,extraIsolate:g,banner:m,variant:p="filled",ref:j,...E})=>{const t=R(),T=!!a,S=!!e,V=!!s,f=n.jsx(X,{banner:m,description:a,ref:j,showIcon:s,type:r==="secondary"?"info":r,className:K(Q({closable:S,colorfulText:u,glass:N,hasExtra:!!(!g&&d),hasTitle:T,showIcon:V,variant:p}),c?.alert),closable:typeof e=="boolean"?e:{closeIcon:n.jsx(G,{color:i(t,r),icon:O,size:"small"}),...e},icon:n.jsx(D,{color:r==="secondary"?F.colorTextSecondary:void 0,icon:C||Y[r],size:a?24:18,...W}),style:{background:i(t,r,"fillTertiary"),borderColor:i(t,r,"fillSecondary"),color:u?i(t,r):void 0,...v,...h?.alert},...E});return d?g?n.jsxs(b,{className:c?.container,gap:8,children:[f,d]}):n.jsxs(b,{className:c?.container,style:h?.container,children:[f,n.jsx(b,{className:P({banner:m,variant:p}),style:{background:i(t,r,"fillTertiary"),borderColor:i(t,r,"fillSecondary"),color:i(t,r),fontSize:a?14:12},children:n.jsx(z,{defaultExpandedKeys:A?["extra"]:[],children:n.jsx(H,{itemKey:"extra",title:y?.detail||"Show Details",classNames:{content:c?.extraContent,header:U({hasTitle:T,variant:p})},styles:{content:{fontSize:12,...h?.extraContent},header:{borderColor:i(t,r,"fillSecondary")},indicator:{color:i(t,r)},title:{color:i(t,r),fontSize:12}},children:d})})})]}):f});k.displayName="Alert";var te=k;export{te as A};
