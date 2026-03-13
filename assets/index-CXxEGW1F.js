import{j as e}from"../vendor/vendor-motion--v3N1cMI.js";import{G as v}from"./Grid-Cbhffbjc.js";import{g as h,C as b,av as z,I as x,k as w,c as k,bl as M,F as s,L as T,a2 as m,ad as I,T as _,f as $}from"./index-DgmZNIaB.js";import{r as n}from"../vendor/vendor-emotion-D8kPrniB.js";import{E as C}from"./Empty-GrClWxIz.js";import{bh as N,b7 as P,bi as S,bj as B,x as D,bk as E,I as L,bl as F,au as G,a9 as R}from"../vendor/vendor-icons-DA3bMca7.js";import{B as W}from"./Block-DajizTW3.js";import{k as q}from"./Popover-IZP5_4IC.js";import{a as A}from"./index-CTMEitso.js";import{P as H}from"./PublishedTime-D6gS1LVR.js";import{s as J}from"../vendor/vendor-es-toolkit-b6vDTgOQ.js";import{M as O}from"./index-CFDs4sKJ.js";import{P as p}from"./index-CrF2Gtoh.js";const u=n.memo(({search:t,...o})=>{const{t:a}=h("discover");return e.jsx(b,{height:"100%",style:{minHeight:"50vh"},width:"100%",children:e.jsx(C,{description:a(t?"models.empty.search":"models.empty.description"),icon:N,title:t?void 0:a("models.empty.title"),type:t?"default":"page",descriptionProps:{fontSize:14},style:{maxWidth:400},...o})})});u.displayName="ModelEmpty";const K={chat:G,embedding:F,image:L,realtime:E,stt:D,text2music:B,tts:S,video:P},Q=n.memo(({type:t,size:o=20})=>e.jsx(z,{title:`${J(t)} Model`,children:e.jsx(x,{color:w.colorTextDescription,icon:K?.[t],size:o})})),i=$(({css:t,cssVar:o})=>({author:t`
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
    `})),U=n.memo(({identifier:t,displayName:o,contextWindowTokens:a,releasedAt:d,type:f,abilities:g,providers:l})=>{const{t:j}=h(["models","discover"]),y=k(),c=M("/community/model",t);return e.jsxs(W,{clickable:!0,"data-testid":"model-item",height:"100%",variant:"outlined",width:"100%",style:{overflow:"hidden",position:"relative"},onClick:()=>{y(c)},children:[e.jsxs(s,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:[e.jsxs(s,{horizontal:!0,gap:12,title:t,style:{overflow:"hidden"},children:[e.jsx(O,{model:t,size:40,style:{flex:"none"},type:"avatar"}),e.jsxs(s,{flex:1,gap:2,style:{overflow:"hidden"},children:[e.jsx(s,{horizontal:!0,align:"center",flex:1,gap:8,style:{overflow:"hidden"},children:e.jsx(T,{style:{color:"inherit",overflow:"hidden"},to:c,children:e.jsx(m,{ellipsis:!0,as:"h2",className:i.title,children:o})})}),e.jsx("div",{className:i.author,children:t})]})]}),e.jsx(s,{horizontal:!0,align:"center",gap:4,children:e.jsx(Q,{type:f})})]}),e.jsxs(s,{flex:1,gap:12,paddingInline:16,children:[e.jsx(A,{directionReverse:!0,contextWindowTokens:a,...g}),e.jsx(m,{as:"p",className:i.desc,ellipsis:{rows:3},children:j(`${t}.description`)})]}),e.jsx(s,{horizontal:!0,align:"center",className:i.footer,justify:"space-between",padding:16,children:e.jsxs(s,{horizontal:!0,align:"center",className:i.secondaryDesc,justify:"space-between",children:[e.jsxs(s,{horizontal:!0,align:"center",gap:4,children:[e.jsx(x,{icon:R,size:14}),e.jsx(H,{className:i.secondaryDesc,date:d||I().toISOString()})]}),e.jsx(q,{content:e.jsx(s,{horizontal:!0,gap:6,wrap:"wrap",style:{maxWidth:175},children:l.map(r=>e.jsx(p,{provider:r,size:24},r))}),children:e.jsxs(s,{horizontal:!0,align:"center",gap:6,children:[l.slice(0,6).map(r=>e.jsx(p,{provider:r,size:14,type:"mono"},r)),l.length>6&&e.jsx(_,{size:"small",children:l.length})]})})]})})]})}),de=n.memo(({data:t=[],rows:o=3})=>t.length===0?e.jsx(u,{}):e.jsx(v,{rows:o,width:"100%",children:t.map((a,d)=>e.jsx(U,{...a},d))}));export{de as M,Q as a};
