import{h as N,ai as w,l as j,F as _,y as P}from"./index-DTW0VVHo.js";import{B as $}from"./Block-BgH28pIQ.js";import{j as a}from"../vendor/vendor-motion-D2gXNOxm.js";import{bo as I,b9 as L}from"../vendor/vendor-icons-UxbXHH06.js";const f=N(({css:o,cssVar:r})=>({checked:o`
      border-color: ${r.colorPrimary};
      color: ${r.colorBgLayout};
      background-color: ${r.colorPrimary};
    `,disabled:o`
      cursor: not-allowed;

      border-color: ${r.colorFill};

      color: ${r.colorText};

      opacity: 0.25;
      background-color: ${r.colorFill};
    `,indeterminate:o`
      border-color: ${r.colorPrimary};
      color: ${r.colorBgLayout};
      background-color: ${r.colorPrimary};
    `,root:o`
      cursor: pointer;
      display: inline-flex;
    `})),B=({checked:o,defaultChecked:r,onChange:k,size:l=16,className:m,style:p,children:d,textProps:h,backgroundColor:n,classNames:t,styles:s,shape:i="square",disabled:c,indeterminate:e,...u})=>{const[x,G]=w(r||!1,{defaultValue:r,onChange:k,value:o}),C={borderRadius:i==="square"?`max(4px, ${Math.round(l/4)}px)`:"50%",...p,...s?.checkbox},g=M=>{c||(M?.preventDefault(),G(!x))},b=e,y=!b&&x,v=a.jsx($,{align:"center",flex:"none",height:l,justify:"center",variant:"outlined",width:l,className:j(f.root,y&&f.checked,b&&f.indeterminate,c&&f.disabled,m,t?.checkbox),style:n&&(y||b)?{backgroundColor:n,borderColor:n,...C}:{...C},onClick:g,...u,children:b?a.jsx(I,{size:l,strokeWidth:3,style:{transform:`scale(${i==="square"?.75:.66})`}}):y?a.jsx(L,{size:l,strokeWidth:3,style:{transform:`scale(${i==="square"?.75:.66})`}}):null});return d?a.jsxs(_,{horizontal:!0,align:"center",className:t?.wrapper,gap:Math.floor(l/2),style:{cursor:c?"not-allowed":"pointer",userSelect:"none",...s?.wrapper},onClick:g,children:[v,a.jsx(P,{as:"span",className:j(t?.text),style:s?.text,...h,type:c?"secondary":h?.type,children:d})]}):v};B.displayName="Checkbox";var S=B;const q=({defaultValue:o,disabled:r,onChange:k,options:l,textProps:m,value:p,shape:d,size:h,...n})=>{const[t,s]=w(o||[],{defaultValue:o,onChange:k,value:p}),i=(e,u)=>{s(u?[...t,e]:t.filter(x=>x!==e))},c=l.map(e=>typeof e=="string"?{disabled:!1,label:e,value:e}:e);return a.jsx(_,{horizontal:!0,align:"center",gap:16,wrap:"wrap",...n,children:c.map(e=>a.jsx(S,{checked:t.includes(e.value),disabled:r||e.disabled,shape:d,size:h,textProps:m,onChange:u=>i(e.value,u),children:e.label},String(e.value)))})};q.displayName="CheckboxGroup";var R=q;const F=S;F.Group=R;var O=F;export{O as C,R as a};
