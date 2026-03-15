import{bw as N,bx as T,by as E,bz as W,bA as B,bB as H,bC as I,bD as M,bE as O,bF as D,bG as G,bH as J,bI as K,bJ as L,bK as q,bL as Q,bM as U,h as X,ai as Y,m as l,F as Z,ax as k,C as $,I as V,bN as ee,bO as oe,l as v}from"./index-BA-ev5QK.js";import{r as y}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as s}from"../vendor/vendor-motion-D2gXNOxm.js";import{c as ae}from"./index-Ciqn2WuZ.js";import{b9 as re}from"../vendor/vendor-icons-UxbXHH06.js";import{C as te}from"./ColorPicker-BmcTexFa.js";const a={blue:U.dark[9],cyan:Q.dark[9],geekblue:q.dark[9],gold:L.dark[9],green:K.dark[9],lime:J.dark[9],magenta:G.dark[9],orange:D.dark[9],purple:O.dark[9],red:M.dark[9],volcano:I.dark[9],yellow:H.dark[9]},ue=[a.red,a.orange,a.gold,a.yellow,a.lime,a.green,a.cyan,a.blue,a.geekblue,a.purple,a.magenta,a.volcano],n={mauve:B.dark[9],olive:W.dark[9],sage:E.dark[9],sand:T.dark[9],slate:N.dark[9]},pe=[n.mauve,n.slate,n.sage,n.olive,n.sand],me=(r,e)=>Object.entries(r==="primary"?a:n).find(u=>u[1]===e)?.[0],w="ant",i=X(({css:r,cssVar:e})=>({active:r`
      box-shadow: inset 0 0 0 1px ${e.colorFill};
    `,conic:r`
      background: conic-gradient(
        ${e.red},
        ${e.volcano},
        ${e.orange},
        ${e.gold},
        ${e.yellow},
        ${e.lime},
        ${e.green},
        ${e.cyan},
        ${e.blue},
        ${e.geekblue},
        ${e.purple},
        ${e.magenta},
        ${e.red}
      );
      .${w}-color-picker-color-block {
        opacity: 0;
      }
    `,container:r`
      cursor: pointer;

      flex: none;

      width: var(--color-swatches-size, 24px);
      min-width: var(--color-swatches-size, 24px);
      height: var(--color-swatches-size, 24px);
      min-height: var(--color-swatches-size, 24px);

      background: ${e.colorBgContainer};
      box-shadow: inset 0 0 0 1px ${e.colorFillSecondary};

      &:hover {
        box-shadow:
          inset 0 0 0 1px rgba(0, 0, 0, 5%),
          0 0 0 2px ${e.colorText};
      }
    `,picker:r`
      overflow: hidden;
      flex: none;

      width: var(--color-swatches-size, 24px);
      min-width: var(--color-swatches-size, 24px);
      height: var(--color-swatches-size, 24px);
      min-height: var(--color-swatches-size, 24px);
      padding: 0;
      border: none;

      box-shadow: inset 0 0 0 1px ${e.colorFillSecondary};

      &:hover {
        box-shadow:
          inset 0 0 0 1px ${e.colorFillSecondary},
          0 0 0 2px ${e.colorText};
      }

      .${w}-color-picker-color-block {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: inherit;
      }
    `,transparent:r`
      background-image: conic-gradient(
        ${e.colorFillSecondary} 25%,
        transparent 25% 50%,
        ${e.colorFillSecondary} 50% 75%,
        transparent 75% 100%
      );
      background-size: 50% 50%;
    `})),C=({enableColorPicker:r,enableColorSwatches:e=!0,defaultValue:c,value:u,style:_,colors:d,onChange:z,size:b=24,shape:h="circle",texts:g,ref:S,...F})=>{const[t,p]=Y(c,{defaultValue:c,onChange:z,value:u}),j=y.useMemo(()=>({"--color-swatches-size":`${b}px`}),[b]),P=y.useMemo(()=>t&&t!==l.colorPrimary&&!d.some(o=>o.color===t),[t,d]);return s.jsxs(Z,{horizontal:!0,gap:6,ref:S,style:{...j,flexWrap:"wrap",..._},...F,children:[e&&d.map((o,R)=>{const m=o.color||l.colorPrimary,x=!t&&!o.color||m===t,f=o.color==="transparent"||o.color&&!o.color.startsWith("var(")&&(()=>{try{return ae(o.color).alpha()===0}catch{return!1}})(),A=o.color?.startsWith("var(")?l.colorPrimary:m;return s.jsx(k,{title:o.title,children:s.jsx($,{className:v(i.container,f&&i.transparent,x&&i.active),style:{background:f?void 0:m,borderRadius:h==="circle"?"50%":l.borderRadius},onClick:()=>p(o.color||void 0),children:x&&s.jsx(V,{color:ee(oe(A),.33),icon:re,size:{size:14,strokeWidth:4},style:{pointerEvents:"none"}})})},o?.key||R)}),r&&s.jsx(k,{title:g?.custom||"Custom",children:s.jsx(te,{disabledAlpha:!0,arrow:!1,defaultValue:l.colorPrimary,format:"hex",value:e?void 0:t,className:v(i.picker,e&&i.conic,P&&i.active),presets:e?void 0:[{colors:d.map(o=>o.color),label:g?.presets||"Presets"}],style:{borderRadius:h==="circle"?"50%":l.borderRadius},onChangeComplete:o=>{o.toHexString()===l.colorPrimary?p(""):p(o.toHexString())}})})]})};C.displayName="ColorSwatches";var be=C;export{be as C,pe as a,ue as b,me as f,n,a as p};
