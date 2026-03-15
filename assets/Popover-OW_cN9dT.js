import{r as o}from"../vendor/vendor-emotion-D8kPrniB.js";import{d5 as _e,h as We,dQ as X,g6 as Ye,g7 as Ke,eD as Ve,g8 as Xe,eo as q,eB as se,g9 as qe,ga as Qe,W as ae,dG as ie,dL as Ze,gb as Je,gc as et,fN as $,gd as tt,ge as ot,gf as nt,dC as V,gg as le,gh as rt,fS as st,fT as me,b8 as at,dS as it,gi as lt,gj as pt,gk as ct,dT as ut,fV as dt,fX as gt,dW as Y,ew as ft,dy as J,gl as vt,er as mt,gm as ht,dB as yt,es as bt,eq as de,fY as xt,gn as Pt,go as Ct,gp as he,f_ as St,gq as Et,dw as Z,g3 as ye,f$ as be,gr as Rt,g0 as te,fM as Tt,fQ as wt,gs as Ot,gt as Mt,dE as It,g2 as xe,gu as kt,eh as Nt,l as K,p as pe,gv as jt,gw as ce,t as Pe,bP as Ce,d4 as Bt}from"./index-BzLMjSCA.js";import{u as Ft,p as Se}from"./parseTrigger-NsGKSR99.js";import{j as i}from"../vendor/vendor-motion-D2gXNOxm.js";import{u as At,b as Dt,a as Ht,I as Lt,c as Gt,F as zt,C as $t}from"./useOpenInteractionType-B0CGbEqx.js";const Ee=i.jsxs("svg",{"aria-hidden":"true",height:"6",viewBox:"0 0 12 6",width:"12",children:[i.jsx("path",{d:"M0 6L6 0L12 6Z","data-role":"fill"}),i.jsx("path",{d:"M0 6L6 0L12 6","data-role":"stroke"})]}),Re=t=>{const e=_e();return typeof document>"u"?null:t??e??document.body},oe=We(({css:t,cssVar:e})=>({arrow:t`
    --lobe-popover-arrow-offset-block: 5px;
    --lobe-popover-arrow-offset-inline: 8px;

    pointer-events: none;

    position: absolute;
    transform-origin: center;

    display: flex;

    width: 12px;
    height: 6px;

    transition: inset-inline-start var(--lobe-popover-animation-duration)
      var(--lobe-popover-animation-ease-out);

    & > svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    & [data-role='fill'] {
      fill: ${e.colorBgElevated};
    }

    & [data-role='stroke'] {
      fill: none;
      stroke: ${e.colorBorder};
      stroke-width: 1px;
    }

    &[data-side='top'] {
      inset-block-end: calc(var(--lobe-popover-arrow-offset-block) * -1);
      transform: rotate(180deg);
    }

    &[data-side='left'] {
      inset-inline-end: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(90deg);
    }

    &[data-side='right'] {
      inset-inline-start: calc(var(--lobe-popover-arrow-offset-inline) * -1);
      transform: rotate(-90deg);
    }

    &[data-side='bottom'] {
      inset-block-start: calc(var(--lobe-popover-arrow-offset-block) * -1);
    }
  `,popup:t`
    position: relative;
    transform-origin: var(--transform-origin);

    min-width: 120px;
    max-width: var(--available-width);
    border-radius: ${e.borderRadius};

    color: ${e.colorText};

    background: ${e.colorBgElevated};
    outline: none;
    box-shadow:
      0 0 15px 0 #00000008,
      0 2px 30px 0 #00000014,
      0 0 0 1px ${e.colorBorder} inset;

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: opacity, transform;

    &[data-layout-animation] {
      transition-property: opacity, transform, width, height;
    }

    &[data-starting-style],
    &[data-ending-style] {
      transform: translate3d(var(--lobe-popover-translate-x), var(--lobe-popover-translate-y), 0)
        scale(var(--lobe-popover-animation-scale));
      opacity: 0;
    }

    &[data-ending-style] {
      transition-timing-function: var(--lobe-popover-animation-ease-in);
      transition-duration: var(--lobe-popover-animation-duration-exit);
    }

    &[data-instant] {
      transition: none;
    }
  `,positioner:t`
    --lobe-popover-animation-duration: 150ms;
    --lobe-popover-animation-translate: 6px;
    --lobe-popover-animation-scale: 0.96;
    --lobe-popover-animation-ease-in: ease-in;
    --lobe-popover-animation-duration-exit: 75ms;
    --lobe-popover-animation-ease-out: ${e.motionEaseOut};
    --lobe-popover-translate-x: 0;
    --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);

    z-index: 1100;

    width: min(var(--positioner-width), var(--available-width));
    height: var(--positioner-height);

    transition-timing-function: var(--lobe-popover-animation-ease-out);
    transition-duration: var(--lobe-popover-animation-duration);
    transition-property: none;

    &[data-layout-animation] {
      transition-property:
        inset-block-start, inset-inline-start, inset-inline-end, inset-block-end, transform;
    }

    &[data-instant] {
      transition: none;
    }

    /* Fallback: never show a popover when the anchor is hidden or the positioner falls back to (0,0). */
    &[data-anchor-hidden],
    &[data-zero-origin='true'] {
      pointer-events: none;
      visibility: hidden;
    }

    &[data-placement='top'],
    &[data-placement='topLeft'],
    &[data-placement='topRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: var(--lobe-popover-animation-translate);
    }

    &[data-placement='bottom'],
    &[data-placement='bottomLeft'],
    &[data-placement='bottomRight'] {
      --lobe-popover-translate-x: 0;
      --lobe-popover-translate-y: calc(var(--lobe-popover-animation-translate) * -1);
    }

    &[data-placement='left'],
    &[data-placement='leftTop'],
    &[data-placement='leftBottom'] {
      --lobe-popover-translate-x: var(--lobe-popover-animation-translate);
      --lobe-popover-translate-y: 0;
    }

    &[data-placement='right'],
    &[data-placement='rightTop'],
    &[data-placement='rightBottom'] {
      --lobe-popover-translate-x: calc(var(--lobe-popover-animation-translate) * -1);
      --lobe-popover-translate-y: 0;
    }
  `,root:t`
    user-select: none;
    position: relative;
    filter: drop-shadow(0 2px 8px rgb(0 0 0 / 12%));
  `,viewport:t`
    --lobe-popover-viewport-inline-padding: 12px;

    position: relative;

    overflow: clip;

    max-width: var(--available-width);
    padding-block: 12px;
    padding-inline: var(--lobe-popover-viewport-inline-padding);

    [data-previous],
    [data-current] {
      transform: translateX(0);
      opacity: 1;
      transition:
        transform var(--lobe-popover-animation-duration) var(--lobe-popover-animation-ease-out),
        opacity calc(var(--lobe-popover-animation-duration) / 2)
          var(--lobe-popover-animation-ease-out);
    }

    [data-previous] {
      position: absolute;
      inset-block-start: 12px;
      inset-inline-start: var(--lobe-popover-viewport-inline-padding);
    }

    &[data-activation-direction~='right'] [data-previous][data-ending-style] {
      transform: translateX(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='right'] [data-current][data-starting-style] {
      transform: translateX(50%);
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-previous][data-ending-style] {
      transform: translateX(50%);
      opacity: 0;
    }

    &[data-activation-direction~='left'] [data-current][data-starting-style] {
      transform: translateX(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-previous][data-ending-style] {
      transform: translateY(-50%);
      opacity: 0;
    }

    &[data-activation-direction~='down'] [data-current][data-starting-style] {
      transform: translateY(50%);
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-previous][data-ending-style] {
      transform: translateY(50%);
      opacity: 0;
    }

    &[data-activation-direction~='up'] [data-current][data-starting-style] {
      transform: translateY(-50%);
      opacity: 0;
    }
  `})),Te=o.createContext(void 0);function _(t){const e=o.useContext(Te);if(e===void 0&&!t)throw new Error(X(47));return e}function Ut(){return{...et(),disabled:!1,modal:!1,instantType:void 0,openMethod:null,openChangeReason:null,titleElementId:void 0,descriptionElementId:void 0,stickIfOpen:!0,nested:!1,openOnHover:!1,closeDelay:0}}const _t={...Xe,disabled:$(t=>t.disabled),instantType:$(t=>t.instantType),openMethod:$(t=>t.openMethod),openChangeReason:$(t=>t.openChangeReason),modal:$(t=>t.modal),stickIfOpen:$(t=>t.stickIfOpen),titleElementId:$(t=>t.titleElementId),descriptionElementId:$(t=>t.descriptionElementId),openOnHover:$(t=>t.openOnHover),closeDelay:$(t=>t.closeDelay)};class ne extends Ye{constructor(e){const n={...Ut(),...e};n.open&&e?.mounted===void 0&&(n.mounted=!0),super(n,{popupRef:o.createRef(),backdropRef:o.createRef(),internalBackdropRef:o.createRef(),onOpenChange:void 0,onOpenChangeComplete:void 0,triggerFocusTargetRef:o.createRef(),beforeContentFocusGuardRef:o.createRef(),stickIfOpenTimeout:new Ve,triggerElements:new Ke},_t)}setOpen=(e,n)=>{const l=n.reason===q,c=n.reason===se&&n.event.detail===0,a=!e&&(n.reason===qe||n.reason==null);if(n.preventUnmountOnClose=()=>{this.set("preventUnmountingOnClose",!0)},this.context.onOpenChange?.(e,n),n.isCanceled)return;const p={open:e,nativeEvent:n.event,reason:n.reason,nested:this.state.nested,triggerElement:n.trigger};this.state.floatingRootContext.context.events?.emit("openchange",p);const r=()=>{const u={open:e,openChangeReason:n.reason},s=n.trigger?.id??null;(s||e)&&(u.activeTriggerId=s,u.activeTriggerElement=n.trigger??null),this.update(u)};l?(this.set("stickIfOpen",!0),this.context.stickIfOpenTimeout.start(Qe,()=>{this.set("stickIfOpen",!1)}),ae.flushSync(r)):r(),c||a?this.set("instantType",c?"click":"dismiss"):n.reason===ie?this.set("instantType","focus"):this.set("instantType",void 0)};static useStore(e,n){const l=Ze(()=>e??new ne(n)).current;return Je(l.disposeEffect),l}disposeEffect=()=>this.context.stickIfOpenTimeout.disposeEffect()}function ge({props:t}){const{children:e,open:n,defaultOpen:l=!1,onOpenChange:c,onOpenChangeComplete:a,modal:p=!1,handle:f,triggerId:r,defaultTriggerId:u=null}=t,s=ne.useStore(f?.store,{open:n??l,modal:p,activeTriggerId:r!==void 0?r:u});s.useControlledProp("open",n,l),s.useControlledProp("activeTriggerId",r,u);const v=s.useState("open"),m=s.useState("positionerElement"),y=s.useState("payload"),E=s.useState("openChangeReason");s.useContextCallback("onOpenChange",c),s.useContextCallback("onOpenChangeComplete",a);const{openMethod:d,triggerProps:h,reset:b}=At(v);ot(s);const{forceUnmount:g}=nt(v,s,()=>{s.update({stickIfOpen:!0,openChangeReason:null}),b()});Dt(v&&p===!0&&E!==q&&d!=="touch",m),o.useEffect(()=>{v||s.context.stickIfOpenTimeout.clear()},[s,v]);const k=o.useCallback(T=>{const j=V(T);return j.preventUnmountOnClose=()=>{s.set("preventUnmountingOnClose",!0)},j},[s]),P=o.useCallback(()=>{s.setOpen(!1,k(le))},[s,k]);o.useImperativeHandle(t.actionsRef,()=>({unmount:g,close:P}),[g,P]);const R=rt({popupStore:s,onOpenChange:s.setOpen}),w=st(R,{outsidePressEvent:{mouse:p==="trap-focus"?"sloppy":"intentional",touch:"sloppy"}}),S=Ft(R),{getReferenceProps:N,getFloatingProps:O,getTriggerProps:x}=me([w,S]),L=o.useMemo(()=>N(h),[N,h]),F=o.useMemo(()=>x(h),[x,h]),A=o.useMemo(()=>O(),[O]);s.useSyncedValues({modal:p,openMethod:d,activeTriggerProps:L,inactiveTriggerProps:F,popupProps:A,floatingRootContext:R,nested:at()!=null});const D=o.useMemo(()=>({store:s}),[s]);return i.jsx(Te.Provider,{value:D,children:typeof e=="function"?e({payload:y}):e})}function Wt(t){return _(!0)?i.jsx(ge,{props:t}):i.jsx(tt,{children:i.jsx(ge,{props:t})})}const Yt=300,ee=o.forwardRef(function(e,n){const{render:l,className:c,disabled:a=!1,nativeButton:p=!0,handle:f,payload:r,openOnHover:u=!1,delay:s=Yt,closeDelay:v=0,id:m,...y}=e,E=_(!0),d=f?.store??E?.store;if(!d)throw new Error(X(74));const h=it(m),b=d.useState("isTriggerActive",h),g=d.useState("floatingRootContext"),k=d.useState("isOpenedByTrigger",h),P=o.useRef(null),{registerTrigger:R,isMountedByThisTrigger:w}=lt(h,P,d,{payload:r,disabled:a,openOnHover:u,closeDelay:v}),S=d.useState("openChangeReason"),N=d.useState("stickIfOpen"),O=d.useState("openMethod"),x=pt(g,{enabled:g!=null&&u&&(O!=="touch"||S!==se),mouseOnly:!0,move:!1,handleClose:ct(),restMs:s,delay:{close:v},triggerElementRef:P,isActiveTrigger:b}),L=Ht(g,{enabled:g!=null,stickIfOpen:N}),F=me([L]),A=d.useState("triggerProps",w),D=o.useMemo(()=>({disabled:a,open:k}),[a,k]),{getButtonProps:T,buttonRef:j}=ut({disabled:a,native:p}),H=o.useMemo(()=>({open(C){return C&&S===se?dt.open(C):gt.open(C)}}),[S]),B=Y("button",e,{state:D,ref:[j,n,R,P],props:[F.getReferenceProps(),x,A,{[ft]:"",id:h},y,T],stateAttributesMapping:H}),G=o.useRef(null),z=J(C=>{ae.flushSync(()=>{d.setOpen(!1,V(ie,C.nativeEvent,C.currentTarget))}),vt(G.current)?.focus()}),U=J(C=>{const M=d.select("positionerElement");if(M&&mt(C,M))d.context.beforeContentFocusGuardRef.current?.focus();else{ae.flushSync(()=>{d.setOpen(!1,V(ie,C.nativeEvent,C.currentTarget))});let I=ht(P.current);for(;I!==null&&yt(M,I)||I?.hasAttribute("aria-hidden");){const W=I;if(I=bt(I),I===W)break}I?.focus()}});return b?i.jsxs(o.Fragment,{children:[i.jsx(de,{ref:G,onFocus:z}),i.jsx(o.Fragment,{children:B},h),i.jsx(de,{ref:d.context.triggerFocusTargetRef,onFocus:U})]}):i.jsx(o.Fragment,{children:B},h)}),we=o.createContext(void 0);function Kt(){const t=o.useContext(we);if(t===void 0)throw new Error(X(45));return t}const Vt=o.forwardRef(function(e,n){const{keepMounted:l=!1,...c}=e,{store:a}=_();return a.useState("mounted")||l?i.jsx(we.Provider,{value:l,children:i.jsx(xt,{ref:n,...c,renderGuards:!1})}):null}),Oe=o.createContext(void 0);function Me(){const t=o.useContext(Oe);if(!t)throw new Error(X(46));return t}const Xt=o.forwardRef(function(e,n){const{render:l,className:c,anchor:a,positionMethod:p="absolute",side:f="bottom",align:r="center",sideOffset:u=0,alignOffset:s=0,collisionBoundary:v="clipping-ancestors",collisionPadding:m=5,arrowPadding:y=5,sticky:E=!1,disableAnchorTracking:d=!1,collisionAvoidance:h=Pt,...b}=e,{store:g}=_(),k=Kt(),P=Ct(),R=g.useState("floatingRootContext"),w=g.useState("mounted"),S=g.useState("open"),N=g.useState("openChangeReason"),O=g.useState("activeTriggerElement"),x=g.useState("modal"),L=g.useState("positionerElement"),F=g.useState("instantType"),A=g.useState("transitionStatus"),D=o.useRef(null),T=he(L,!1,!1),j=St({anchor:a,floatingRootContext:R,positionMethod:p,mounted:w,side:f,sideOffset:u,align:r,alignOffset:s,arrowPadding:y,collisionBoundary:v,collisionPadding:m,sticky:E,disableAnchorTracking:d,keepMounted:k,nodeId:P,collisionAvoidance:h,adaptiveOrigin:Et}),H=o.useMemo(()=>{const M={};return S||(M.pointerEvents="none"),{role:"presentation",hidden:!w,style:{...j.positionerStyles,...M}}},[S,w,j.positionerStyles]),B=o.useMemo(()=>({props:H,...j}),[H,j]),G=R?.select("domReferenceElement");Z(()=>{const M=G,I=D.current;if(M&&(D.current=M),I&&M&&M!==I){g.set("instantType",void 0);const W=new AbortController;return T(()=>{g.set("instantType","trigger-change")},W.signal),()=>{W.abort()}}},[G,T,g]);const z=o.useMemo(()=>({open:S,side:B.side,align:B.align,anchorHidden:B.anchorHidden,instant:F}),[S,B.side,B.align,B.anchorHidden,F]),U=o.useCallback(M=>{g.set("positionerElement",M)},[g]),C=Y("div",e,{state:z,props:[B.props,ye(A),b],ref:[n,U],stateAttributesMapping:te});return i.jsxs(Oe.Provider,{value:B,children:[w&&x===!0&&N!==q&&i.jsx(Lt,{ref:g.context.internalBackdropRef,inert:be(!S),cutout:O}),i.jsx(Rt,{id:P,children:C})]})}),qt={...te,...xe},Qt=o.forwardRef(function(e,n){const{className:l,render:c,initialFocus:a,finalFocus:p,...f}=e,{store:r}=_(),u=Me(),s=Gt()!=null,v=Tt(),m=r.useState("open"),y=r.useState("openMethod"),E=r.useState("instantType"),d=r.useState("transitionStatus"),h=r.useState("popupProps"),b=r.useState("titleElementId"),g=r.useState("descriptionElementId"),k=r.useState("modal"),P=r.useState("mounted"),R=r.useState("openChangeReason"),w=r.useState("popupElement"),S=r.useState("payload"),N=r.useState("positionerElement"),O=r.useState("activeTriggerElement"),x=r.useState("floatingRootContext");wt({open:m,ref:r.context.popupRef,onComplete(){m&&r.context.onOpenChangeComplete?.(!0)}});const L=r.useState("disabled"),F=r.useState("openOnHover"),A=r.useState("closeDelay");Ot(x,{enabled:F&&!L,closeDelay:A});function D(C){return C==="touch"?r.context.popupRef.current:!0}const T=a===void 0?D:a,j=o.useMemo(()=>({open:m,side:u.side,align:u.align,instant:E,transitionStatus:d}),[m,u.side,u.align,E,d]),H=o.useCallback(C=>{r.set("popupElement",C)},[r]);function B(){x.context.events.emit("measure-layout")}function G(C,M){x.context.events.emit("measure-layout-complete",{previousDimensions:C,nextDimensions:M})}const z=o.useCallback(()=>r.context.triggerElements.size>1,[r]);Mt({popupElement:w,positionerElement:N,mounted:P,content:S,enabled:z,onMeasureLayout:B,onMeasureLayoutComplete:G,side:u.side,direction:v});const U=Y("div",e,{state:j,ref:[n,r.context.popupRef,H],props:[h,{"aria-labelledby":b,"aria-describedby":g,onKeyDown(C){s&&$t.has(C.key)&&C.stopPropagation()}},ye(d),f],stateAttributesMapping:qt});return i.jsx(zt,{context:x,openInteractionType:y,modal:k==="trap-focus",disabled:!P||R===q,initialFocus:T,returnFocus:p,restoreFocus:"popup",previousFocusableElement:It(O)?O:void 0,nextFocusableElement:r.context.triggerFocusTargetRef,beforeContentFocusGuardRef:r.context.beforeContentFocusGuardRef,children:U})}),Zt=o.forwardRef(function(e,n){const{className:l,render:c,...a}=e,{store:p}=_(),f=p.useState("open"),{arrowRef:r,side:u,align:s,arrowUncentered:v,arrowStyles:m}=Me(),y=o.useMemo(()=>({open:f,side:u,align:s,uncentered:v}),[f,u,s,v]);return Y("div",e,{state:y,ref:[n,r],props:[{style:m,"aria-hidden":!0},a],stateAttributesMapping:te})}),Jt={...te,...xe},Ie=o.forwardRef(function(e,n){const{className:l,render:c,...a}=e,{store:p}=_(),f=p.useState("open"),r=p.useState("mounted"),u=p.useState("transitionStatus"),s=p.useState("openChangeReason"),v=o.useMemo(()=>({open:f,transitionStatus:u}),[f,u]);return Y("div",e,{state:v,ref:[p.context.backdropRef,n],props:[{role:"presentation",hidden:!r,style:{pointerEvents:s===q?"none":void 0,userSelect:"none",WebkitUserSelect:"none"}},a],stateAttributesMapping:Jt})});let fe=(function(t){return t.popupWidth="--popup-width",t.popupHeight="--popup-height",t})({});const eo={activationDirection:t=>t?{"data-activation-direction":t}:null},to=o.forwardRef(function(e,n){const{render:l,className:c,children:a,...p}=e,{store:f}=_(),r=f.useState("activeTriggerElement"),u=f.useState("open"),s=f.useState("floatingRootContext"),v=kt(u?r:null),m=o.useRef(null),[y,E]=o.useState(null),[d,h]=o.useState(null),b=o.useRef(null),g=o.useRef(null),k=he(b,!0,!1),P=Nt(),[R,w]=o.useState(null),[S,N]=o.useState(!1);Z(()=>{const T=b.current;if(!T)return;const j=document.createElement("div");for(const H of Array.from(T.childNodes))j.appendChild(H.cloneNode(!0));m.current=j});const O=J(()=>{b.current?.style.setProperty("animation","none"),b.current?.style.setProperty("transition","none"),g.current?.style.setProperty("display","none")}),x=J(T=>{b.current?.style.removeProperty("animation"),b.current?.style.removeProperty("transition"),g.current?.style.removeProperty("display"),R||w(T.previousDimensions)});o.useEffect(()=>(s.context.events.on("measure-layout",O),s.context.events.on("measure-layout-complete",x),()=>{s.context.events.off("measure-layout",O),s.context.events.off("measure-layout-complete",x)}),[s,O,x]);const L=o.useRef(null);Z(()=>{if(r&&v&&r!==v&&L.current!==r&&m.current){E(m.current),N(!0);const T=no(v,r);h(T),P.request(()=>{P.request(()=>{N(!1),k(()=>{E(null),w(null),m.current=null})})}),L.current=r}},[r,v,y,k,P]);const F=y!=null;let A;F?A=i.jsxs(o.Fragment,{children:[i.jsx("div",{"data-previous":!0,inert:be(!0),ref:g,style:{[fe.popupWidth]:`${R?.width}px`,[fe.popupHeight]:`${R?.height}px`,position:"absolute"},"data-ending-style":S?void 0:""},"previous"),i.jsx("div",{"data-current":!0,ref:b,"data-starting-style":S?"":void 0,children:a},"current")]}):A=i.jsx("div",{"data-current":!0,ref:b,children:a},"current"),Z(()=>{const T=g.current;!T||!y||T.replaceChildren(...Array.from(y.childNodes))},[y]);const D=o.useMemo(()=>({activationDirection:oo(d),transitioning:F}),[d,F]);return Y("div",e,{state:D,ref:n,props:[p,{children:A}],stateAttributesMapping:eo})});function oo(t){if(t)return`${ve(t.horizontal,5,"right","left")} ${ve(t.vertical,5,"down","up")}`}function ve(t,e,n,l){return t>e?n:t<-e?l:""}function no(t,e){const n=t.getBoundingClientRect(),l=e.getBoundingClientRect(),c={x:n.left+n.width/2,y:n.top+n.height/2},a={x:l.left+l.width/2,y:l.top+l.height/2};return{horizontal:a.x-c.x,vertical:a.y-c.y}}class ro{constructor(){this.store=new ne}open(e){const n=e?this.store.context.triggerElements.getById(e)??void 0:void 0;if(e&&!n)throw new Error(X(80,e));this.store.setOpen(!0,V(le,void 0,n))}close(){this.store.setOpen(!1,V(le,void 0,void 0))}get isOpen(){return this.store.state.open}}function so(){return new ro}const ao=Wt,ho=Ie,ke=({children:t,className:e,nativeButton:n,ref:l,...c})=>{const{isNativeButtonTriggerElement:a,resolvedNativeButton:p}=ce({children:t,nativeButton:n});return o.isValidElement(t)?i.jsx(ee,{...c,nativeButton:p,render:(f,r)=>{const u=(()=>{if(a)return f;const{type:y,ref:E,...d}=f;return d})(),s=Pe(t.props,u),v=typeof s.className=="function"?s.className(r):s.className,m=typeof e=="function"?e(r):e;return o.cloneElement(t,{...s,className:K(v,m),ref:Ce([t.ref,f.ref,l])})}}):i.jsx(ee,{...c,className:e,nativeButton:p,ref:l,children:t})};ke.displayName="PopoverTriggerElement";const Ne=({container:t,root:e,children:n,...l})=>{const c=Re(e),a=t??c;return a?i.jsx(Vt,{container:a,...l,children:n}):null};Ne.displayName="PopoverPortal";const je=({children:t,className:e,hoverTrigger:n,placement:l,align:c,side:a,sideOffset:p,...f})=>{const r=l?pe[l]:void 0,[u,s]=o.useState(null);return i.jsx(Xt,{align:c??r?.align??"center","data-hover-trigger":n||void 0,"data-placement":l,ref:s,side:a??r?.side??"bottom",sideOffset:p??6,className:v=>K(oe.positioner,typeof e=="function"?e(v):e),...f,children:i.jsx(jt,{value:u,children:t})})};je.displayName="PopoverPositioner";const Be=({className:t,...e})=>i.jsx(Qt,{className:n=>K(oe.popup,typeof t=="function"?t(n):t),...e});Be.displayName="PopoverPopup";const Fe=({className:t,children:e,...n})=>i.jsx(Zt,{className:l=>K(oe.arrow,typeof t=="function"?t(l):t),...n,children:e??Ee});Fe.displayName="PopoverArrow";const Ae=({className:t,...e})=>i.jsx(to,{className:n=>K(oe.viewport,typeof t=="function"?t(n):t),...e});Ae.displayName="PopoverViewport";const io=()=>{},De=o.createContext({close:io}),lo=o.memo(({children:t,value:e})=>i.jsx(De,{value:e,children:t})),yo=()=>o.use(De),He=o.createContext(null),po=o.createContext(null),co=t=>{const e=o.useContext(po),{arrow:n,trigger:l,placement:c,className:a,classNames:p,styles:f,onOpenChange:r,content:u,closeDelay:s,disabled:v,getPopupContainer:m,mouseEnterDelay:y,mouseLeaveDelay:E,nativeButton:d,openDelay:h,zIndex:b,positionerProps:g,triggerProps:k,popupProps:P,backdropProps:R}=t,w=o.useMemo(()=>{if(!(!e?.className&&!a))return[e?.className,a].filter(Boolean).join(" ")},[a,e?.className]),S=o.useMemo(()=>{if(!(!e?.classNames&&!p))return{...e?.classNames,...p}},[p,e?.classNames]),N=o.useMemo(()=>{if(!(!e?.styles&&!f))return{...e?.styles,...f}},[e?.styles,f]),O=o.useMemo(()=>{if(!(!e?.onOpenChange&&!r))return x=>{e?.onOpenChange?.(x),r?.(x)}},[r,e?.onOpenChange]);return o.useMemo(()=>({arrow:n??e?.arrow??!1,backdropProps:R??e?.backdropProps,className:w,classNames:S,closeDelay:s??e?.closeDelay,content:u,disabled:v??e?.disabled,getPopupContainer:m??e?.getPopupContainer,mouseEnterDelay:y??e?.mouseEnterDelay,mouseLeaveDelay:E??e?.mouseLeaveDelay,nativeButton:d??e?.nativeButton,onOpenChange:O,openDelay:h??e?.openDelay,placement:c??e?.placement??"top",popupProps:P??e?.popupProps,positionerProps:g??e?.positionerProps,styles:N,trigger:l??e?.trigger??"hover",triggerProps:k??e?.triggerProps,zIndex:b??e?.zIndex}),[n,R,s,u,v,m,w,S,O,N,y,E,d,h,c,P,g,e?.arrow,e?.backdropProps,e?.closeDelay,e?.disabled,e?.getPopupContainer,e?.mouseEnterDelay,e?.mouseLeaveDelay,e?.nativeButton,e?.openDelay,e?.placement,e?.popupProps,e?.positionerProps,e?.trigger,e?.triggerProps,e?.zIndex,l,k,b])},Le=({children:t,ref:e,...n})=>{const l=o.use(He),c=co(n),{openOnHover:a}=o.useMemo(()=>Se(c.trigger??"hover"),[c.trigger]),p=c.openDelay??(c.mouseEnterDelay??.1)*1e3,f=c.closeDelay??(c.mouseLeaveDelay??.1)*1e3,r=!!c.disabled,{isNativeButtonTriggerElement:u,resolvedNativeButton:s}=ce({children:t,nativeButton:c.nativeButton});if(!c.content)return t;const v={closeDelay:f,delay:p,disabled:r,openOnHover:a&&!r,payload:c},m=c.classNames?.trigger;return o.isValidElement(t)?i.jsx(ee,{handle:l??void 0,...v,nativeButton:s,render:y=>{const E=(()=>{if(u)return y;const{type:h,ref:b,...g}=y;return g})(),d=Pe(t.props,E);return o.cloneElement(t,{...d,className:K(d.className,m),ref:Ce([t.ref,y.ref,e])})}}):i.jsx(ee,{handle:l??void 0,...v,className:m,nativeButton:s,ref:e,children:t})};Le.displayName="PopoverInGroup";const Ge=o.memo(({children:t,content:e,arrow:n=!1,trigger:l="hover",placement:c="top",styles:a,classNames:p,className:f,open:r,onOpenChange:u,defaultOpen:s=!1,mouseEnterDelay:v=.1,mouseLeaveDelay:m=.1,openDelay:y,closeDelay:E,getPopupContainer:d,disabled:h=!1,zIndex:b,nativeButton:g,ref:k,positionerProps:P,triggerProps:R,popupProps:w,backdropProps:S,portalProps:N})=>{const O=Bt(),x=o.useMemo(()=>so(),[]),[L,F]=o.useState(!!s),A=o.useCallback(()=>{x.close()},[x]),D=o.useMemo(()=>({close:A}),[A]),T=h?!1:r??L,j=o.useCallback(re=>{h&&re||(u?.(re),r===void 0&&F(re))},[u,r,h]),{openOnHover:H}=o.useMemo(()=>Se(l),[l]),B=y??v*1e3,G=E??m*1e3,z=pe[c]??pe.top,U=n?10:6,C=Re(),{resolvedNativeButton:M}=ce({children:t,nativeButton:g}),I=o.useMemo(()=>({arrow:p?.arrow,popup:f,positioner:p?.root,trigger:p?.trigger,viewport:p?.content}),[f,p?.arrow,p?.content,p?.root,p?.trigger]),W=o.useMemo(()=>i.jsx(ke,{handle:x,closeDelay:G,delay:B,disabled:h,openOnHover:H&&!h,...R,className:I.trigger,nativeButton:M,ref:k,children:t}),[t,h,H,x,k,I.trigger,M,B,G,R]),$e=o.useMemo(()=>{},[d,O]),Q=o.useMemo(()=>({arrow:a?.arrow,positioner:{...a?.root,zIndex:b??1100},viewport:a?.content}),[a?.arrow,a?.content,a?.root,b]),Ue=o.useMemo(()=>i.jsx(je,{align:z.align,className:I.positioner,hoverTrigger:H,placement:c,side:z.side,sideOffset:U,style:Q.positioner,...P,children:i.jsxs(Be,{className:I.popup,...w,children:[n&&i.jsx(Fe,{className:I.arrow,style:Q.arrow,children:Ee}),i.jsx(Ae,{className:I.viewport,style:Q.viewport,children:i.jsx(lo,{value:D,children:e})})]})}),[n,e,D,H,c,z.align,z.side,w,P,I,U,Q]);if(!e)return t;const ue=$e??C;return i.jsxs(ao,{defaultOpen:s,handle:x,open:T,onOpenChange:j,children:[W,S&&i.jsx(Ie,{...S}),ue?i.jsx(Ne,{container:ue,...N,children:Ue}):null]})});Ge.displayName="PopoverStandalone";const ze=t=>o.use(He)&&t.open===void 0&&t.defaultOpen===void 0&&!t.standalone?i.jsx(Le,{...t}):i.jsx(Ge,{...t});ze.displayName="Popover";var bo=ze;export{He as P,po as a,Wt as b,so as c,lo as d,je as e,Be as f,Fe as g,Ee as h,Ae as i,Ne as j,bo as k,yo as l,ao as m,ho as n,ke as o,Re as u};
