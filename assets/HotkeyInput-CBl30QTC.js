import{h as fe,D as p,z as pe,w as he,aV as me,ai as ye,aW as P,F as E,aX as X,A as q,l as ke,aY as ve}from"./index-Cbsc4Bbc.js";import{u as xe}from"./useTranslation-HSC9sEns.js";import{h as be}from"./hotkey-ii61g0AV.js";import{r}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as t}from"../vendor/vendor-motion-D2gXNOxm.js";import{l as ge,f as je}from"./index-DuVU6IFm.js";import{f as Ce}from"../vendor/vendor-es-toolkit-BI0f0n_g.js";import{aH as Ie,X as Te}from"../vendor/vendor-icons-UxbXHH06.js";const s=fe(({css:a,cssVar:l})=>({borderless:p.variantBorderless,disabled:p.disabled,error:a`
      border: 1px solid ${l.colorError};
    `,errorText:a`
      font-size: 12px;
      color: ${l.colorError};
    `,filled:p.variantFilled,focused:a`
      background: ${l.colorFillSecondary} !important;
    `,hiddenInput:a`
      cursor: text;

      position: absolute;
      z-index: -1;
      inset-block-start: 0;
      inset-inline-start: 0;

      width: 100%;
      height: 100%;

      opacity: 0;
    `,outlined:p.variantOutlined,placeholder:a`
      color: ${l.colorTextDescription};
    `,root:a`
      cursor: pointer;

      position: relative;

      max-width: 100%;
      height: 36px;
      padding-block: 0;
      padding-inline: 12px;
      border-radius: ${l.borderRadius};
    `,shadow:p.shadow})),Ee=pe(s.root,{defaultVariants:{disabled:!1,error:!1,shadow:!1,variant:"outlined"},variants:{variant:{filled:s.filled,outlined:s.outlined,borderless:s.borderless},shadow:{false:null,true:s.shadow},focused:{false:null,true:s.focused},error:{fales:null,true:s.error},disabled:{false:null,true:s.disabled}}}),L=r.memo(({value:a="",defaultValue:l="",resetValue:h="",onChange:U,onClear:V,onConflict:w,placeholder:W,disabled:n,shadow:Y,allowClear:D,allowReset:F=!0,style:G,className:J,hotkeyConflicts:H=[],variant:Q,texts:m,isApple:S,onBlur:Z,onReset:$,onFocus:ee})=>{const[g,y]=r.useState(!1),[z,i]=r.useState(!1),[N,d]=r.useState(!1),j=r.useRef(null),{isDarkMode:te}=he(),{t:u}=xe(be),R=r.useMemo(()=>me(S),[S]),[c,k]=ye(l,{defaultValue:l,onChange:U,value:a}),[C,{start:se,stop:I,isRecording:v,resetKeys:K}]=ge();je("*",()=>{j.current?.blur()},{enableOnContentEditable:!0,enableOnFormTags:!0,enabled:v&&!n,keydown:!1,keyup:!0,preventDefault:!0});const{isValid:O,keys:_}=r.useCallback(e=>{const o=[],x=[];for(const b of e){const f=b.toLowerCase();ve.includes(f)?!R&&f==="ctrl"||R&&f==="meta"?o.includes("mod")||o.push("mod"):o.includes(f)||o.push(f):x.push(b)}if(o.length===0&&x.length>0)return{isValid:!1,keys:[]};const A=[o,x.length>0?[x.at(-1)]:[]];return{isValid:A.every(b=>b.length>0),keys:A.flat()}},[])(C),T=_.join("+"),B=r.useCallback(e=>H.filter(o=>o!==h).some(o=>Ce(P(e),P(o))),[H]);r.useEffect(()=>{if(C.size>0&&!v){if(!O){d(!0),i(!1);return}d(!1);const e=T;B(e)?(i(!0),w?.(e)):(i(!1),k?.(e))}},[C,v,O,T,B,k,w]);const oe=e=>{n||(y(!0),i(!1),d(!1),se(),ee?.(e))},re=e=>{y(!1),I(),Z?.(e)},ae=e=>{e.preventDefault(),e.stopPropagation(),k?.(""),K(),i(!1),d(!1),y(!1),I(),V?.(c)},le=e=>{e.preventDefault(),e.stopPropagation(),k?.(h),K(),i(!1),d(!1),y(!1),I(),$?.(c,h)},ne=e=>{e.preventDefault(),e.stopPropagation(),!(n||g)&&j.current?.focus()},M=W??u("hotkey.placeholder"),ie=m?.reset??u("hotkey.reset"),ce=m?.clear??u("hotkey.clear"),de=m?.conflicts??u("hotkey.conflict"),ue=m?.invalidCombination??u("hotkey.invalidCombination");return t.jsxs(E,{className:J,gap:8,style:{position:"relative",...G},children:[t.jsxs(E,{horizontal:!0,align:"center",justify:"space-between",className:ke(Ee({disabled:n,error:z||N,focused:g,shadow:Y,variant:Q||(te?"filled":"outlined")})),onClick:ne,children:[t.jsx("div",{style:{pointerEvents:"none"},children:v?t.jsx("span",{className:s.placeholder,children:_.length>0?t.jsx(X,{keys:T}):M}):c?t.jsx(X,{keys:c}):t.jsx("span",{className:s.placeholder,children:M})}),t.jsx("input",{readOnly:!0,className:s.hiddenInput,disabled:n,ref:j,style:{pointerEvents:"none"},onBlur:re,onFocus:oe}),!g&&c&&!n&&(F||D)&&t.jsxs(E,{horizontal:!0,gap:4,children:[F&&c!==h&&t.jsx(q,{icon:Ie,size:"small",title:ie,variant:"filled",onClick:le}),D&&t.jsx(q,{icon:Te,size:"small",title:ce,variant:"filled",onClick:ae})]})]}),z&&t.jsx("div",{className:s.errorText,children:de}),N&&t.jsx("div",{className:s.errorText,children:ue})]})});L.displayName="HotkeyInput";var Ke=L;export{Ke as H};
