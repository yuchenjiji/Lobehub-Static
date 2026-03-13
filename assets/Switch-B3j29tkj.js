import{f as fe,a9 as J,dg as he,dh as me,di as pe,dj as xe,dk as be,dl as ge,ao as ye,dm as ke,dn as Ce,dp as ve,dq as W,bd as D,af as we,j as F,I as Se}from"./index-DgmZNIaB.js";import{r as a}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as i}from"../vendor/vendor-motion--v3N1cMI.js";import{u as je}from"./getPseudoElementBounds-BFePzGAT.js";import{f as Pe,u as Re,a as X,b as Ie,c as Te,d as Ee,e as Ne}from"./styles-C5AJlX_e.js";import{aF as Me}from"../vendor/vendor-icons-DA3bMca7.js";const d=fe(({css:e,cssVar:t})=>({icon:e`
    pointer-events: none;

    position: absolute;
    inset-block: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${t.colorTextLightSolid};
  `,iconLeft:e`
    inset-inline-start: 5px;
  `,iconLeftSmall:e`
    inset-inline-start: 4px;
  `,iconRight:e`
    inset-inline-end: 5px;
  `,iconRightSmall:e`
    inset-inline-end: 4px;
  `,iconThumb:e`
    position: relative;
    inset: unset;
    transform: none;
    color: ${t.colorPrimary};
  `,loading:e`
    @keyframes lobe-switch-loading {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }

    animation: lobe-switch-loading 1s linear infinite;
  `,root:e`
    cursor: pointer;
    user-select: none;

    position: relative;

    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    box-sizing: border-box;
    padding: 2px;
    border: 0;
    border-radius: 100px;

    background: ${t.colorTextQuaternary};
    outline: none;

    transition: background 150ms ${t.motionEaseOut};

    &:focus-visible {
      outline: 2px solid ${t.colorPrimaryBorder};
      outline-offset: 1px;
    }

    &:hover:not([data-disabled]) {
      background: ${t.colorTextTertiary};
    }

    &[data-checked] {
      justify-content: flex-end;
      background: ${t.colorPrimary};

      &:hover:not([data-disabled]) {
        background: ${t.colorPrimaryHover};
      }
    }

    &[data-disabled] {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,rootDefault:e`
    width: 44px;
    min-width: 44px;
    height: 22px;
  `,rootSmall:e`
    width: 28px;
    min-width: 28px;
    height: 16px;
  `,thumb:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${t.colorBgContainer};
    box-shadow:
      0 2px 4px 0 rgb(0 35 11 / 20%),
      0 1px 2px 0 rgb(0 0 0 / 8%);

    [data-disabled] > & {
      box-shadow: none;
    }
  `,thumbDefault:e`
    width: 18px;
    height: 18px;
  `,thumbSmall:e`
    width: 12px;
    height: 12px;
  `})),Be=J(d.root,{defaultVariants:{size:"default"},variants:{size:{default:d.rootDefault,small:d.rootSmall}}}),Le=J(d.thumb,{defaultVariants:{size:"default"},variants:{size:{default:d.thumbDefault,small:d.thumbSmall}}}),Y=a.createContext(void 0);function Fe(){const e=a.useContext(Y);if(e===void 0)throw new Error(he(63));return e}let G=(function(e){return e.checked="data-checked",e.unchecked="data-unchecked",e.disabled="data-disabled",e.readonly="data-readonly",e.required="data-required",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const Z={...Pe,checked(e){return e?{[G.checked]:""}:{[G.unchecked]:""}}},Ve=a.forwardRef(function(t,n){const{checked:p,className:s,defaultChecked:c,id:r,inputRef:u,name:f,nativeButton:x=!1,onCheckedChange:N,readOnly:g=!1,required:y=!1,disabled:P=!1,render:B,uncheckedValue:h,...k}=t,{clearErrors:m}=Re(),{state:b,setTouched:S,setDirty:R,validityData:M,setFilled:j,setFocused:I,shouldValidateOnChange:o,validationMode:oe,disabled:ae,name:ie,validation:C}=X(),{labelId:se}=Ie(),v=ae||P,T=ie??f,q=me(N),E=a.useRef(null),K=pe(E,u,C.inputRef),L=a.useRef(null),O=xe(),z=Te({id:r,implicit:!1,controlRef:L}),[l,H]=je({controlled:p,default:!!c,name:"Switch",state:"checked"});Ee({id:O,commit:C.commit,value:l,controlRef:L,name:T,getValue:()=>l}),be(()=>{E.current&&j(E.current.checked)},[E,j]),Ne(l,()=>{m(T),R(l!==M.initialValue),j(l),o()?C.commit(l):C.commit(l,!0)});const{getButtonProps:re,buttonRef:le}=ge({disabled:v,native:x}),de={id:O,role:"switch","aria-checked":l,"aria-readonly":g||void 0,"aria-labelledby":se,onFocus(){v||I(!0)},onBlur(){const w=E.current;!w||v||(S(!0),I(!1),oe==="onBlur"&&C.commit(w.checked))},onClick(w){g||v||(w.preventDefault(),E?.current?.click())}},ce=a.useMemo(()=>ye({checked:l,disabled:v,id:z,name:T,required:y,style:ke,tabIndex:-1,type:"checkbox","aria-hidden":!0,ref:K,onChange(w){if(w.nativeEvent.defaultPrevented)return;const Q=w.target.checked,U=Ce(ve,w.nativeEvent);q?.(Q,U),!U.isCanceled&&H(Q)},onFocus(){L.current?.focus()}},C.getInputValidationProps),[l,v,K,z,T,q,y,H,C]),_=a.useMemo(()=>({...b,checked:l,disabled:v,readOnly:g,required:y}),[b,l,v,g,y]),ue=W("span",t,{state:_,ref:[n,L,le],props:[de,C.getValidationProps,k,re],stateAttributesMapping:Z});return i.jsxs(Y.Provider,{value:_,children:[ue,!l&&T&&h!==void 0&&i.jsx("input",{type:"hidden",name:T,value:h}),i.jsx("input",{...ce})]})}),De=a.forwardRef(function(t,n){const{render:p,className:s,...c}=t,{state:r}=X(),u=Fe(),f={...r,...u};return W("span",t,{state:f,ref:n,stateAttributesMapping:Z,props:c})}),A=a.createContext(null),$=()=>{const e=a.use(A);if(!e)throw new Error("useSwitchContext must be used within a SwitchRoot");return e},ee=({checked:e,className:t,defaultChecked:n,onCheckedChange:p,onClick:s,size:c="default",children:r,disabled:u,readOnly:f,required:x,inputRef:N,id:g,name:y,...P})=>{const B=D(),[h,k]=a.useState(!1),m=a.useRef(null),[b,S]=we(n??!1,{defaultValue:n,onChange:o=>{m.current&&p?.(o,m.current)},value:e}),R=Be({size:c}),M=a.useMemo(()=>({isChecked:!!b,isPressed:h,setIsChecked:o=>S(o),setIsPressed:k}),[b,h,S]),j=o=>{m.current=o,s?.(!b,o)},I=o=>{(o.key==="Enter"||o.key===" ")&&(m.current=o),P.onKeyDown?.(o)};return i.jsx(A,{value:M,children:i.jsx(Ve,{checked:b,defaultChecked:n,disabled:u,id:g,inputRef:N,name:y,readOnly:f,required:x,render:i.jsx(B.button,{...P,className:F(R,t),initial:!1,whileTap:"tap",onClick:j,onKeyDown:I,onTap:()=>k(!1),onTapCancel:()=>k(!1),onTapStart:()=>k(!0)}),onCheckedChange:S,children:r})})};ee.displayName="SwitchRoot";const te=({className:e,pressedAnimation:t,size:n="default",transition:p={damping:25,stiffness:300,type:"spring"},children:s,...c})=>{const r=D(),{isPressed:u}=$(),f=Le({size:n}),x={width:n==="small"?16:22};return i.jsx(De,{render:i.jsx(r.span,{layout:!0,animate:u?t||x:void 0,className:F(f,e),transition:p,...c,children:s})})};te.displayName="SwitchThumb";const qe=(e,t)=>e==="thumb"?d.iconThumb:e==="left"?t==="small"?d.iconLeftSmall:d.iconLeft:t==="small"?d.iconRightSmall:d.iconRight,V=({children:e,className:t,position:n,transition:p={bounce:0,type:"spring"},...s})=>{const c=D(),{isChecked:r}=$(),u=s.size||"default",f=a.useMemo(()=>n==="right"?!r:n==="left"?r:n==="thumb",[n,r]),x=qe(n,u);return i.jsx(c.span,{animate:f?{opacity:1,scale:1}:{opacity:0,scale:0},className:F(d.icon,x,t),transition:p,...s,children:e})};V.displayName="SwitchIcon";const ne=a.memo(({autoFocus:e,checked:t,checkedChildren:n,className:p,classNames:s,defaultChecked:c,defaultValue:r,disabled:u,id:f,loading:x,name:N,onChange:g,onClick:y,ref:P,rootClassName:B,size:h="default",style:k,styles:m,tabIndex:b,title:S,unCheckedChildren:R,value:M})=>{const j=u||x,I=M??t,o=r??c;return i.jsxs(ee,{autoFocus:e,checked:I,className:F(p,B,s?.root),defaultChecked:o,disabled:j,id:f,name:N,ref:P,size:h,style:{...k,...m?.root},tabIndex:b,title:S,onCheckedChange:g,onClick:y,children:[n&&i.jsx(V,{className:s?.content,position:"left",size:h,style:m?.content,children:n}),R&&i.jsx(V,{className:s?.content,position:"right",size:h,style:m?.content,children:R}),i.jsx(te,{className:s?.thumb,size:h,style:m?.thumb,children:x&&i.jsx(Se,{className:d.loading,icon:Me,size:h==="small"?8:12,style:{color:"var(--lobe-color-primary)"}})})]})});ne.displayName="Switch";var Ue=ne;export{Ue as S};
