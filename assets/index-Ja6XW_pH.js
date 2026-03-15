import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{G as v}from"./Grid-D4IlJX72.js";import{j as h,C as z,ax as b,I as x,m as w,e as M,br as T,F as s,L as k,y as m,a9 as I,T as _,h as $}from"./index-BzLMjSCA.js";import{r as n}from"../vendor/vendor-emotion-D8kPrniB.js";import{E as C}from"./Empty-XQ9oDkc5.js";import{bh as N,aO as P,bi as S,bj as B,x as D,bk as E,I as L,bl as F,au as G,a9 as O}from"../vendor/vendor-icons-UxbXHH06.js";import{B as R}from"./Block-DisZY_e8.js";import{k as W}from"./Popover-OW_cN9dT.js";import{a as q}from"./index-C3GATFoO.js";import{P as A}from"./PublishedTime-CEiPLR0g.js";import{s as H}from"../vendor/vendor-es-toolkit-BI0f0n_g.js";import{M as J}from"./index-CQ3HIhe5.js";import{P as p}from"./index-BwUPH0--.js";const u=n.memo(({search:t,...o})=>{const{t:a}=h("discover");return e.jsx(z,{height:"100%",style:{minHeight:"50vh"},width:"100%",children:e.jsx(C,{description:a(t?"models.empty.search":"models.empty.description"),icon:N,title:t?void 0:a("models.empty.title"),type:t?"default":"page",descriptionProps:{fontSize:14},style:{maxWidth:400},...o})})});u.displayName="ModelEmpty";const K={chat:G,embedding:F,image:L,realtime:E,stt:D,text2music:B,tts:S,video:P},Q=n.memo(({type:t,size:o=20})=>e.jsx(b,{title:`${H(t)} Model`,children:e.jsx(x,{color:w.colorTextDescription,icon:K?.[t],size:o})})),r=$(({css:t,cssVar:o})=>({author:t`
      color: ${o.colorTextDescription};
    `,code:t`
      font-family: ${o.fontFamilyCode};
    `,desc:t`
      flex: 1;
      margin: 0 !important;
      color: ${o.colorTextSecondary};
    `,footer:t`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${o.colorBorder};
      background: ${o.colorBgContainer};
    `,secondaryDesc:t`
      font-size: 12px;
      color: ${o.colorTextDescription};
    `,title:t`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${o.colorLink};
      }
    `})),U=n.memo(({identifier:t,displayName:o,contextWindowTokens:a,releasedAt:d,type:f,abilities:g,providers:l})=>{const{t:j}=h(["models","discover"]),y=M(),c=T("/community/model",t);return e.jsxs(R,{clickable:!0,"data-testid":"model-item",height:"100%",variant:"outlined",width:"100%",style:{overflow:"hidden",position:"relative"},onClick:()=>{y(c)},children:[e.jsxs(s,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:[e.jsxs(s,{horizontal:!0,gap:12,title:t,style:{overflow:"hidden"},children:[e.jsx(J,{model:t,size:40,style:{flex:"none"},type:"avatar"}),e.jsxs(s,{flex:1,gap:2,style:{overflow:"hidden"},children:[e.jsx(s,{horizontal:!0,align:"center",flex:1,gap:8,style:{overflow:"hidden"},children:e.jsx(k,{style:{color:"inherit",overflow:"hidden"},to:c,children:e.jsx(m,{ellipsis:!0,as:"h2",className:r.title,children:o})})}),e.jsx("div",{className:r.author,children:t})]})]}),e.jsx(s,{horizontal:!0,align:"center",gap:4,children:e.jsx(Q,{type:f})})]}),e.jsxs(s,{flex:1,gap:12,paddingInline:16,children:[e.jsx(q,{directionReverse:!0,contextWindowTokens:a,...g}),e.jsx(m,{as:"p",className:r.desc,ellipsis:{rows:3},children:j(`${t}.description`)})]}),e.jsx(s,{horizontal:!0,align:"center",className:r.footer,justify:"space-between",padding:16,children:e.jsxs(s,{horizontal:!0,align:"center",className:r.secondaryDesc,justify:"space-between",children:[e.jsxs(s,{horizontal:!0,align:"center",gap:4,children:[e.jsx(x,{icon:O,size:14}),e.jsx(A,{className:r.secondaryDesc,date:d||I().toISOString()})]}),e.jsx(W,{content:e.jsx(s,{horizontal:!0,gap:6,wrap:"wrap",style:{maxWidth:175},children:l.map(i=>e.jsx(p,{provider:i,size:24},i))}),children:e.jsxs(s,{horizontal:!0,align:"center",gap:6,children:[l.slice(0,6).map(i=>e.jsx(p,{provider:i,size:14,type:"mono"},i)),l.length>6&&e.jsx(_,{size:"small",children:l.length})]})})]})})]})}),de=n.memo(({data:t=[],rows:o=3})=>t.length===0?e.jsx(u,{}):e.jsx(v,{rows:o,width:"100%",children:t.map((a,d)=>e.jsx(U,{...a},d))}));export{de as M,Q as a};
