import{h as F,D as b,l as n,a9 as L,F as c,cB as P,I,y as k}from"./index-L1Lg0j_R.js";import{r as C}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{bO as R,aI as S}from"../vendor/vendor-icons-UxbXHH06.js";const s=F(({css:t,cssVar:i})=>({actions:t`
      position: absolute;
      inset-block-start: 50%;
      inset-inline-end: 16px;
      transform: translateY(-50%);
    `,active:b.active,content:t`
      position: relative;
      overflow: hidden;
      flex: 1;
      align-self: center;
    `,date:t`
      font-size: 12px;
      color: ${i.colorTextPlaceholder};
    `,desc:t`
      width: 100%;
      margin: 0;

      font-size: 12px;
      line-height: 1.2;
      color: ${i.colorTextDescription};
    `,pin:t`
      position: absolute;
      inset-block-start: 6px;
      inset-inline-end: 6px;
    `,root:n(b.variantBorderless,t`
        cursor: pointer;
        position: relative;
        border-radius: ${i.borderRadius};
        color: ${i.colorTextTertiary};
      `),title:t`
      width: 100%;
      margin: 0;

      font-size: 14px;
      font-weight: 500;
      line-height: 1.2;
      color: ${i.colorText};
    `,triangle:t`
      width: 10px;
      height: 10px;
      border-radius: 2px;

      opacity: 0.5;
      background: ${i.colorPrimaryBorder};
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    `})),O=t=>{const i=L(t);return i.isSame(L(),"day")?i.format("HH:mm"):i.format("MM-DD")},T=C.memo(({ref:t,active:i,avatar:x,loading:h,description:d,date:p,title:u,onHoverChange:r,actions:l,className:f,style:g,showAction:m,children:y,classNames:a,addon:v,pin:j,styles:o,...N})=>{const D=e.jsx(I,{spin:!0,icon:S}),M=j&&e.jsx("div",{className:n(s.pin,a?.pin),style:o?.pin,children:e.jsx("div",{className:s.triangle})}),B=l&&e.jsx(c,{horizontal:!0,className:n(s.actions,a?.actions),gap:4,style:{display:m?void 0:"none",...o?.actions},onClick:P,children:l}),E=p&&e.jsx("div",{className:n(s.date,a?.date),style:{opacity:m?0:void 0,...o?.date},children:O(p)});return e.jsxs(c,{horizontal:!0,align:"flex-start",className:n(s.root,i&&s.active,f),distribution:"space-between",gap:8,padding:12,ref:t,style:g,onMouseEnter:()=>{r?.(!0)},onMouseLeave:()=>{r?.(!1)},...N,children:[M,e.jsxs(c,{horizontal:!0,align:"flex-start",className:a?.container,flex:1,gap:8,style:{overflow:"hidden",...o?.container},children:[x??e.jsx(I,{icon:R,style:{marginTop:4}}),e.jsxs(c,{className:n(s.content,a?.content),gap:4,style:o?.content,children:[e.jsx(k,{ellipsis:!0,as:"h3",className:n(s.title,a?.title),style:o?.title,children:u}),d&&e.jsx(k,{ellipsis:!0,className:n(s.desc,a?.desc),style:o?.desc,children:d}),v]})]}),h?D:e.jsxs(e.Fragment,{children:[B,E]}),y]})});T.displayName="ListItem";var w=T;const z=C.memo(({ref:t,activeKey:i,classNames:x,styles:h,onClick:d,items:p,...u})=>e.jsx(c,{gap:4,padding:4,...u,children:p.map(r=>{const{key:l,onClick:f,className:g,style:m,...y}=r,{item:a,...v}=x||{},{item:j,...o}=h||{};return e.jsx(w,{active:r.key===i,className:n(a,g),classNames:v,ref:t,style:{...j,...m},styles:o,onClick:N=>{d?.({item:r,key:l}),f?.(N)},...y},l)})}));z.displayName="List";var q=z;const _=q;_.Item=w;var J=_;export{J as L,w as a};
