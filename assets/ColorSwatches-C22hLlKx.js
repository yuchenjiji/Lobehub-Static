import{bK as N,bL as W,bM as A,bN as E,bO as M,bP as B,bQ as H,bR as I,bS as O,bT as K,bU as L,bV as Q,bW as U,bX as X,bY as Y,bZ as Z,b_ as $,f as q,af as D,k as l,F as G,av as k,C as J,I as V,b$ as ee,c0 as oe,j as v}from"./index-DgmZNIaB.js";import{r as y}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as s}from"../vendor/vendor-motion--v3N1cMI.js";import{c as ae}from"./index-Ciqn2WuZ.js";import{b9 as re}from"../vendor/vendor-icons-DA3bMca7.js";import{C as te}from"./ColorPicker-C13qwwP8.js";const a={blue:$.dark[9],cyan:Z.dark[9],geekblue:Y.dark[9],gold:X.dark[9],green:U.dark[9],lime:Q.dark[9],magenta:L.dark[9],orange:K.dark[9],purple:O.dark[9],red:I.dark[9],volcano:H.dark[9],yellow:B.dark[9]},ue=[a.red,a.orange,a.gold,a.yellow,a.lime,a.green,a.cyan,a.blue,a.geekblue,a.purple,a.magenta,a.volcano],n={mauve:M.dark[9],olive:E.dark[9],sage:A.dark[9],sand:W.dark[9],slate:N.dark[9]},pe=[n.mauve,n.slate,n.sage,n.olive,n.sand],me=(r,e)=>Object.entries(r==="primary"?a:n).find(u=>u[1]===e)?.[0],w="ant",i=q(({css:r,cssVar:e})=>({active:r`
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
    `})),_=({enableColorPicker:r,enableColorSwatches:e=!0,defaultValue:d,value:u,style:C,colors:c,onChange:S,size:b=24,shape:h="circle",texts:g,ref:z,...j})=>{const[t,p]=D(d,{defaultValue:d,onChange:S,value:u}),F=y.useMemo(()=>({"--color-swatches-size":`${b}px`}),[b]),P=y.useMemo(()=>t&&t!==l.colorPrimary&&!c.some(o=>o.color===t),[t,c]);return s.jsxs(G,{horizontal:!0,gap:6,ref:z,style:{...F,flexWrap:"wrap",...C},...j,children:[e&&c.map((o,R)=>{const m=o.color||l.colorPrimary,f=!t&&!o.color||m===t,x=o.color==="transparent"||o.color&&!o.color.startsWith("var(")&&(()=>{try{return ae(o.color).alpha()===0}catch{return!1}})(),T=o.color?.startsWith("var(")?l.colorPrimary:m;return s.jsx(k,{title:o.title,children:s.jsx(J,{className:v(i.container,x&&i.transparent,f&&i.active),style:{background:x?void 0:m,borderRadius:h==="circle"?"50%":l.borderRadius},onClick:()=>p(o.color||void 0),children:f&&s.jsx(V,{color:ee(oe(T),.33),icon:re,size:{size:14,strokeWidth:4},style:{pointerEvents:"none"}})})},o?.key||R)}),r&&s.jsx(k,{title:g?.custom||"Custom",children:s.jsx(te,{disabledAlpha:!0,arrow:!1,defaultValue:l.colorPrimary,format:"hex",value:e?void 0:t,className:v(i.picker,e&&i.conic,P&&i.active),presets:e?void 0:[{colors:c.map(o=>o.color),label:g?.presets||"Presets"}],style:{borderRadius:h==="circle"?"50%":l.borderRadius},onChangeComplete:o=>{o.toHexString()===l.colorPrimary?p(""):p(o.toHexString())}})})]})};_.displayName="ColorSwatches";var be=_;export{be as C,pe as a,ue as b,me as f,n,a as p};
