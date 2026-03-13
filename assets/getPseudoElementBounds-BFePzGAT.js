import{r as m}from"../vendor/vendor-emotion-D8kPrniB.js";import{dI as ke,dJ as L,dK as ie,dL as W,dM as U,dN as Ae,aS as Be,dO as V,aT as He,dP as Ye,dk as D,dQ as je,dh as _,dR as ze,dS as qe,dT as Fe,dn as he,dU as Ee,dV as Ke,dW as Je,dX as Qe,dY as Ve,dZ as Xe,d_ as Ze,d$ as $e,f as et,e0 as _e}from"./index-DgmZNIaB.js";import{e as tt}from"./useOpenInteractionType-DmYsIx8S.js";import{j as nt}from"../vendor/vendor-motion--v3N1cMI.js";function pe(e,t,o){return Math.floor(e/t)!==o}function re(e,t){return t<0||t>=e.current.length}function Me(e,t){return P(e,{disabledIndices:t})}function ve(e,t){return P(e,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function P(e,{startingIndex:t=-1,decrement:o=!1,disabledIndices:n,amount:d=1}={}){let r=t;do r+=o?-d:d;while(r>=0&&r<=e.current.length-1&&oe(e,r,n));return r}function rt(e,{event:t,orientation:o,loopFocus:n,rtl:d,cols:r,disabledIndices:h,minIndex:l,maxIndex:w,prevIndex:u,stopEvent:p=!1}){let a=u;const M=[],S={};let R=!1;{let i=null,g=-1;e.current.forEach((O,f)=>{if(O==null)return;const y=O.closest('[role="row"]');y&&(R=!0),(y!==i||g===-1)&&(i=y,g+=1,M[g]=[]),M[g].push(f),S[f]=g})}const b=R&&M.length>0&&M.some(i=>i.length!==r);function C(i){if(!b||u===-1)return;const g=S[u];if(g==null)return;const O=M[g].indexOf(u);let f=i==="up"?g-1:g+1;n&&(f<0?f=M.length-1:f>=M.length&&(f=0));const y=new Set;for(;f>=0&&f<M.length&&!y.has(f);){y.add(f);const E=M[f];if(E.length===0){f=i==="up"?f-1:f+1;continue}const F=Math.min(O,E.length-1);for(let A=F;A>=0;A-=1){const X=E[A];if(!oe(e,X,h))return X}f=i==="up"?f-1:f+1,n&&(f<0?f=M.length-1:f>=M.length&&(f=0))}}if(t.key===ke){const i=C("up");if(i!==void 0)p&&L(t),a=i;else{if(p&&L(t),u===-1)a=w;else if(a=P(e,{startingIndex:a,amount:r,decrement:!0,disabledIndices:h}),n&&(u-r<l||a<0)){const g=u%r,O=w%r,f=w-(O-g);O===g?a=w:a=O>g?f:f-r}re(e,a)&&(a=u)}}if(t.key===ie){const i=C("down");i!==void 0?(p&&L(t),a=i):(p&&L(t),u===-1?a=l:(a=P(e,{startingIndex:u,amount:r,disabledIndices:h}),n&&u+r>w&&(a=P(e,{startingIndex:u%r-r,amount:r,disabledIndices:h}))),re(e,a)&&(a=u))}if(o==="both"){const i=Ae(u/r);t.key===(d?W:U)&&(p&&L(t),u%r!==r-1?(a=P(e,{startingIndex:u,disabledIndices:h}),n&&pe(a,r,i)&&(a=P(e,{startingIndex:u-u%r-1,disabledIndices:h}))):n&&(a=P(e,{startingIndex:u-u%r-1,disabledIndices:h})),pe(a,r,i)&&(a=u)),t.key===(d?U:W)&&(p&&L(t),u%r!==0?(a=P(e,{startingIndex:u,decrement:!0,disabledIndices:h}),n&&pe(a,r,i)&&(a=P(e,{startingIndex:u+(r-u%r),decrement:!0,disabledIndices:h}))):n&&(a=P(e,{startingIndex:u+(r-u%r),decrement:!0,disabledIndices:h})),pe(a,r,i)&&(a=u));const g=Ae(w/r)===i;re(e,a)&&(n&&g?a=t.key===(d?U:W)?w:P(e,{startingIndex:u-u%r-1,disabledIndices:h}):a=u)}return a}function ot(e,t,o){const n=[];let d=0;return e.forEach(({width:r,height:h},l)=>{let w=!1;for(o&&(d=0);!w;){const u=[];for(let p=0;p<r;p+=1)for(let a=0;a<h;a+=1)u.push(d+p+a*t);d%t+r<=t&&u.every(p=>n[p]==null)?(u.forEach(p=>{n[p]=l}),w=!0):d+=1}}),[...n]}function it(e,t,o,n,d){if(e===-1)return-1;const r=o.indexOf(e),h=t[e];switch(d){case"tl":return r;case"tr":return h?r+h.width-1:r;case"bl":return h?r+(h.height-1)*n:r;case"br":return o.lastIndexOf(e);default:return-1}}function at(e,t){return t.flatMap((o,n)=>e.includes(o)?[n]:[])}function oe(e,t,o){if(typeof o=="function")return o(t);if(o)return o.includes(t);const n=e.current[t];return n?n.hasAttribute("disabled")||n.getAttribute("aria-disabled")==="true":!1}const ut="Escape";function ye(e,t,o){switch(e){case"vertical":return t;case"horizontal":return o;default:return t||o}}function we(e,t){return ye(t,e===ke||e===ie,e===W||e===U)}function Te(e,t,o){return ye(t,e===ie,o?e===W:e===U)||e==="Enter"||e===" "||e===""}function st(e,t,o){return ye(t,o?e===W:e===U,e===ie)}function ct(e,t,o,n){const d=o?e===U:e===W,r=e===ke;return t==="both"||t==="horizontal"&&n&&n>1?e===ut:ye(t,d,r)}function xt(e,t){const o="rootStore"in e?e.rootStore:e,n=o.useState("open"),d=o.useState("floatingElement"),r=o.useState("domReferenceElement"),h=o.context.dataRef,{listRef:l,activeIndex:w,onNavigate:u=()=>{},enabled:p=!0,selectedIndex:a=null,allowEscape:M=!1,loopFocus:S=!1,nested:R=!1,rtl:b=!1,virtual:C=!1,focusItemOnOpen:i="auto",focusItemOnHover:g=!0,openOnArrowKeyDown:O=!0,disabledIndices:f=void 0,orientation:y="vertical",parentOrientation:E,cols:F=1,scrollItemIntoView:A=!0,itemSizes:X,dense:ae=!1,id:q,resetOnPointerLeave:B=!0,externalTree:ue}=t,se=Be(d),v=V(se),J=He(),H=Ye(ue);D(()=>{h.current.orientation=y},[h,y]);const xe=je(r),Y=m.useRef(i),x=m.useRef(a??-1),j=m.useRef(null),Q=m.useRef(!0),I=_(s=>{u(x.current===-1?null:x.current,s)}),Se=m.useRef(I),Z=m.useRef(!!d),Ie=m.useRef(n),K=m.useRef(!1),ce=m.useRef(!1),be=V(f),le=V(n),We=V(A),$=V(a),Ne=V(B),Re=_(()=>{function s(N){C?H?.events.emit("virtualfocus",N):tt(N,{sync:K.current,preventScroll:!0})}const T=l.current[x.current],c=ce.current;T&&s(T),(K.current?N=>N():requestAnimationFrame)(()=>{const N=l.current[x.current]||T;if(!N)return;T||s(N);const z=We.current;z&&Oe&&(c||!Q.current)&&N.scrollIntoView?.(typeof z=="boolean"?{block:"nearest",inline:"nearest"}:z)})});D(()=>{p&&(n&&d?(x.current=a??-1,Y.current&&a!=null&&(ce.current=!0,I())):Z.current&&(x.current=-1,Se.current()))},[p,n,d,a,I]),D(()=>{if(p){if(!n){K.current=!1;return}if(d)if(w==null){if(K.current=!1,$.current!=null)return;if(Z.current&&(x.current=-1,Re()),(!Ie.current||!Z.current)&&Y.current&&(j.current!=null||Y.current===!0&&j.current==null)){let s=0;const T=()=>{l.current[0]==null?(s<2&&(s?requestAnimationFrame:queueMicrotask)(T),s+=1):(x.current=j.current==null||Te(j.current,y,b)||R?Me(l):ve(l),j.current=null,I())};T()}}else re(l,w)||(x.current=w,Re(),ce.current=!1)}},[p,n,d,w,$,R,l,y,b,I,Re,be]),D(()=>{if(!p||d||!H||C||!Z.current)return;const s=H.nodesRef.current,T=s.find(N=>N.id===J)?.context?.elements.floating,c=ze(qe(d)),k=s.some(N=>N.context&&Fe(N.context.elements.floating,c));T&&!k&&Q.current&&T.focus({preventScroll:!0})},[p,d,H,J,C]),D(()=>{Se.current=I,Ie.current=n,Z.current=!!d}),D(()=>{n||(j.current=null,Y.current=i)},[n,i]);const Pe=w!=null,Oe=m.useMemo(()=>{function s(c){if(!le.current)return;const k=l.current.indexOf(c.currentTarget);k!==-1&&x.current!==k&&(x.current=k,I(c))}return{onFocus(c){K.current=!0,s(c)},onClick:({currentTarget:c})=>c.focus({preventScroll:!0}),onMouseMove(c){K.current=!0,ce.current=!1,g&&s(c)},onPointerLeave(c){if(!le.current||!Q.current||c.pointerType==="touch")return;K.current=!0;const k=c.relatedTarget;!g||l.current.includes(k)||Ne.current&&(x.current=-1,I(c),C||v.current?.focus({preventScroll:!0}))}}},[le,v,g,l,I,Ne,C]),fe=m.useCallback(()=>E??H?.nodesRef.current.find(s=>s.id===J)?.context?.dataRef?.current.orientation,[J,H,E]),ee=_(s=>{if(Q.current=!1,K.current=!0,s.which===229||!le.current&&s.currentTarget===v.current)return;if(R&&ct(s.key,y,b,F)){we(s.key,fe())||L(s),o.setOpen(!1,he(Ee,s.nativeEvent)),Ke(r)&&(C?H?.events.emit("virtualfocus",r):r.focus());return}const T=x.current,c=Me(l,f),k=ve(l,f);if(xe||(s.key==="Home"&&(L(s),x.current=c,I(s)),s.key==="End"&&(L(s),x.current=k,I(s))),F>1){const N=X||Array.from({length:l.current.length},()=>({width:1,height:1})),z=ot(N,F,ae),te=z.findIndex(G=>G!=null&&!oe(l,G,f)),Ce=z.reduce((G,ne,Ue)=>ne!=null&&!oe(l,ne,f)?Ue:G,-1),me=z[rt({current:z.map(G=>G!=null?l.current[G]:null)},{event:s,orientation:y,loopFocus:S,rtl:b,cols:F,disabledIndices:at([...(typeof f!="function"?f:null)||l.current.map((G,ne)=>oe(l,ne,f)?ne:void 0),void 0],z),minIndex:te,maxIndex:Ce,prevIndex:it(x.current>k?c:x.current,N,z,F,s.key===ie?"bl":s.key===(b?W:U)?"tr":"tl"),stopEvent:!0})];if(me!=null&&(x.current=me,I(s)),y==="both")return}if(we(s.key,y)){if(L(s),n&&!C&&ze(s.currentTarget.ownerDocument)===s.currentTarget){x.current=Te(s.key,y,b)?c:k,I(s);return}Te(s.key,y,b)?S?T>=k?M&&T!==l.current.length?x.current=-1:(K.current=!1,x.current=c):x.current=P(l,{startingIndex:T,disabledIndices:f}):x.current=Math.min(k,P(l,{startingIndex:T,disabledIndices:f})):S?T<=c?M&&T!==-1?x.current=l.current.length:(K.current=!1,x.current=k):x.current=P(l,{startingIndex:T,decrement:!0,disabledIndices:f}):x.current=Math.max(c,P(l,{startingIndex:T,decrement:!0,disabledIndices:f})),re(l,x.current)&&(x.current=-1),I(s)}}),de=m.useMemo(()=>C&&n&&Pe&&{"aria-activedescendant":`${q}-${w}`},[C,n,Pe,q,w]),Le=m.useMemo(()=>({"aria-orientation":y==="both"?void 0:y,...xe?{}:de,onKeyDown(s){if(s.key==="Tab"&&s.shiftKey&&n&&!C){const T=Je(s.nativeEvent);if(T&&!Fe(v.current,T))return;L(s),o.setOpen(!1,he(Qe,s.nativeEvent)),Ke(r)&&r.focus();return}ee(s)},onPointerMove(){Q.current=!0}}),[de,ee,v,y,xe,o,n,C,r]),ge=m.useMemo(()=>{function s(c){i==="auto"&&Ve(c.nativeEvent)&&(Y.current=!C)}function T(c){Y.current=i,i==="auto"&&Xe(c.nativeEvent)&&(Y.current=!0)}return{onKeyDown(c){const k=o.select("open");Q.current=!1;const N=c.key.startsWith("Arrow"),z=st(c.key,fe(),b),te=we(c.key,y),Ce=(R?z:te)||c.key==="Enter"||c.key.trim()==="";if(C&&k)return ee(c);if(!(!k&&!O&&N)){if(Ce){const me=we(c.key,fe());j.current=R&&me?null:c.key}if(R){z&&(L(c),k?(x.current=Me(l,be.current),I(c)):o.setOpen(!0,he(Ee,c.nativeEvent,c.currentTarget)));return}te&&($.current!=null&&(x.current=$.current),L(c),!k&&O?o.setOpen(!0,he(Ee,c.nativeEvent,c.currentTarget)):ee(c),k&&I(c))}},onFocus(c){o.select("open")&&!C&&(x.current=-1,I(c))},onPointerDown:T,onPointerEnter:T,onMouseDown:s,onClick:s}},[ee,be,i,l,R,I,o,O,y,fe,b,$,C]),De=m.useMemo(()=>({...de,...ge}),[de,ge]);return m.useMemo(()=>p?{reference:De,floating:Le,item:Oe,trigger:ge}:{},[p,De,Le,ge,Oe])}function bt(e,t){const o="rootStore"in e?e.rootStore:e,n=o.useState("open"),d=o.context.dataRef,{listRef:r,activeIndex:h,onMatch:l,onTypingChange:w,enabled:u=!0,findMatch:p=null,resetMs:a=750,ignoreKeys:M=$e,selectedIndex:S=null}=t,R=Ze(),b=m.useRef(""),C=m.useRef(S??h??-1),i=m.useRef(null);D(()=>{n&&(R.clear(),i.current=null,b.current="")},[n,R]),D(()=>{n&&b.current===""&&(C.current=S??h??-1)},[n,S,h]);const g=_(E=>{E?d.current.typing||(d.current.typing=E,w?.(E)):d.current.typing&&(d.current.typing=E,w?.(E))}),O=_(E=>{function F(B,ue,se){const v=p?p(ue,se):ue.find(J=>J?.toLocaleLowerCase().indexOf(se.toLocaleLowerCase())===0);return v?B.indexOf(v):-1}const A=r.current;if(b.current.length>0&&b.current[0]!==" "&&(F(A,A,b.current)===-1?g(!1):E.key===" "&&L(E)),A==null||M.includes(E.key)||E.key.length!==1||E.ctrlKey||E.metaKey||E.altKey)return;n&&E.key!==" "&&(L(E),g(!0)),A.every(B=>B?B[0]?.toLocaleLowerCase()!==B[1]?.toLocaleLowerCase():!0)&&b.current===E.key&&(b.current="",C.current=i.current),b.current+=E.key,R.start(a,()=>{b.current="",C.current=i.current,g(!1)});const ae=C.current,q=F(A,[...A.slice((ae||0)+1),...A.slice(0,(ae||0)+1)],b.current);q!==-1?(l?.(q),i.current=q):E.key!==" "&&(b.current="",g(!1))}),f=m.useMemo(()=>({onKeyDown:O}),[O]),y=m.useMemo(()=>({onKeyDown:O,onKeyUp(E){E.key===" "&&g(!1)}}),[O,g]);return m.useMemo(()=>u?{reference:f,floating:y}:{},[u,f,y])}const Rt=et(({css:e,cssVar:t})=>({danger:e`
    color: ${t.colorError} !important;

    &:hover {
      background: ${t.colorErrorBg} !important;
    }
  `,empty:e`
    cursor: default;
    font-style: italic;
    color: ${t.colorTextTertiary};
  `,extra:e`
    margin-inline-start: auto;
    padding-inline-start: 16px;
    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,groupLabel:e`
    user-select: none;

    padding-block: 8px 4px;
    padding-inline: 12px;

    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: ${t.colorTextTertiary};
    text-transform: capitalize;
  `,icon:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 16px;
    height: 16px;
    margin-inline-end: 8px;
  `,item:e`
    cursor: pointer;
    user-select: none;

    position: relative;

    overflow: hidden;
    display: flex;
    align-items: center;

    width: 100%;
    min-height: 36px;
    padding-block: 8px;
    padding-inline: 12px;
    border-radius: ${t.borderRadiusSM};

    font-size: 14px;
    line-height: 20px;
    color: ${t.colorText};

    outline: none;

    transition: all 150ms ${t.motionEaseOut};

    &:hover {
      background: ${t.colorFillTertiary};
    }

    &:active {
      background: ${t.colorFillSecondary};
    }

    &[data-disabled] {
      cursor: not-allowed;
      color: ${t.colorTextDisabled};
      opacity: 0.5;

      &:hover {
        background: transparent;
      }
    }

    &[data-highlighted]:not([data-disabled]) {
      background: ${t.colorFillTertiary};
    }

    &[data-state='open']:not([data-disabled]),
    &[data-open]:not([data-disabled]),
    &[aria-expanded='true']:not([data-disabled]) {
      background: ${t.colorFillTertiary};
    }
  `,itemContent:e`
    display: flex;
    flex: 1;
    gap: 0;
    align-items: center;
  `,itemContentAlignStart:e`
    align-items: flex-start;
  `,iconAlignStart:e`
    align-self: flex-start;
    margin-block-start: 2px;
  `,label:e`
    overflow: hidden;
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;

    & a,
    & a:visited,
    & a:hover,
    & a:active {
      color: inherit;
    }
  `,labelGroup:e`
    overflow: hidden;
    display: flex;
    flex: 1;
    flex-direction: column;

    min-width: 0;
  `,desc:e`
    overflow: hidden;

    font-size: 12px;
    line-height: 16px;
    color: ${t.colorTextTertiary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,popup:e`
    min-width: 120px;
    padding: 4px;
    border-radius: ${t.borderRadius};

    background: ${t.colorBgElevated};
    outline: none;
    box-shadow:
      0 0 15px 0 #00000008,
      0 2px 30px 0 #00000014,
      0 0 0 1px ${t.colorBorder} inset;
  `,positioner:e`
    --lobe-dropdown-animation-duration: 140ms;
    --lobe-dropdown-animation-scale-y: 0.92;
    --lobe-dropdown-animation-ease-in: ease-in;
    --lobe-dropdown-animation-ease-out: ${t.motionEaseOut};

    z-index: 1100;

    & > * {
      will-change: opacity, transform;
      transform-origin: var(--transform-origin);
      animation: none;
    }

    &[data-open] > * {
      transform: scaleY(1);
      opacity: 1;
      transition:
        opacity var(--lobe-dropdown-animation-duration) var(--lobe-dropdown-animation-ease-out),
        transform var(--lobe-dropdown-animation-duration) var(--lobe-dropdown-animation-ease-out);
    }

    &[data-open] > *[data-starting-style] {
      transform: scaleY(var(--lobe-dropdown-animation-scale-y));
      opacity: 0;
    }

    &[data-closed] > * {
      transform: scaleY(var(--lobe-dropdown-animation-scale-y));
      opacity: 0;
      transition:
        opacity var(--lobe-dropdown-animation-duration) var(--lobe-dropdown-animation-ease-in),
        transform var(--lobe-dropdown-animation-duration) var(--lobe-dropdown-animation-ease-in);
    }

    &[data-hover-trigger] {
      --lobe-dropdown-animation-duration: 140ms;
    }

    &[data-submenu],
    &[data-nested] {
      --lobe-dropdown-animation-duration: 0ms;
      --lobe-dropdown-animation-scale-y: 1;
    }
  `,separator:e`
    height: 1px;
    margin-block: 4px;
    margin-inline: 0;
    background: ${t.colorBorder};
  `,submenuArrow:e`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    margin-inline-start: auto;
    padding-inline-start: 8px;
  `}));function Ot({controlled:e,default:t,name:o,state:n="value"}){const{current:d}=m.useRef(e!==void 0),[r,h]=m.useState(t),l=d?e:r,w=m.useCallback(u=>{d||h(u)},[]);return[l,w]}const Ge=m.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},elementsRef:{current:[]},nextIndexRef:{current:0}});function lt(){return m.useContext(Ge)}let ft=(function(e){return e[e.None=0]="None",e[e.GuessFromOrder=1]="GuessFromOrder",e})({});function Ct(e={}){const{label:t,metadata:o,textRef:n,indexGuessBehavior:d,index:r}=e,{register:h,unregister:l,subscribeMapChange:w,elementsRef:u,labelsRef:p,nextIndexRef:a}=lt(),M=m.useRef(-1),[S,R]=m.useState(r??(d===ft.GuessFromOrder?()=>{if(M.current===-1){const i=a.current;a.current+=1,M.current=i}return M.current}:-1)),b=m.useRef(null),C=m.useCallback(i=>{if(b.current=i,S!==-1&&i!==null&&(u.current[S]=i,p)){const g=t!==void 0;p.current[S]=g?t:n?.current?.textContent??i.textContent}},[S,u,p,t,n]);return D(()=>{if(r!=null)return;const i=b.current;if(i)return h(i,o),()=>{l(i)}},[r,h,l,o]),D(()=>{if(r==null)return w(i=>{const g=b.current?i.get(b.current)?.index:null;g!=null&&R(g)})},[r,w,R]),m.useMemo(()=>({ref:C,index:S}),[S,C])}function Et(e){const{children:t,elementsRef:o,labelsRef:n,onMapChange:d}=e,r=_(d),h=m.useRef(0),l=_e(gt).current,w=_e(dt).current,[u,p]=m.useState(0),a=m.useRef(u),M=_((i,g)=>{w.set(i,g??null),a.current+=1,p(a.current)}),S=_(i=>{w.delete(i),a.current+=1,p(a.current)}),R=m.useMemo(()=>{const i=new Map;return Array.from(w.keys()).filter(O=>O.isConnected).sort(mt).forEach((O,f)=>{const y=w.get(O)??{};i.set(O,{...y,index:f})}),i},[w,u]);D(()=>{if(typeof MutationObserver!="function"||R.size===0)return;const i=new MutationObserver(g=>{const O=new Set,f=y=>O.has(y)?O.delete(y):O.add(y);g.forEach(y=>{y.removedNodes.forEach(f),y.addedNodes.forEach(f)}),O.size===0&&(a.current+=1,p(a.current))});return R.forEach((g,O)=>{O.parentElement&&i.observe(O.parentElement,{childList:!0})}),()=>{i.disconnect()}},[R]),D(()=>{a.current===u&&(o.current.length!==R.size&&(o.current.length=R.size),n&&n.current.length!==R.size&&(n.current.length=R.size),h.current=R.size),r(R)},[r,R,o,n,u]),D(()=>()=>{o.current=[]},[o]),D(()=>()=>{n&&(n.current=[])},[n]);const b=_(i=>(l.add(i),()=>{l.delete(i)}));D(()=>{l.forEach(i=>i(R))},[l,R]);const C=m.useMemo(()=>({register:M,unregister:S,subscribeMapChange:b,elementsRef:o,labelsRef:n,nextIndexRef:h}),[M,S,b,o,n,h]);return nt.jsx(Ge.Provider,{value:C,children:t})}function dt(){return new Map}function gt(){return new Set}function mt(e,t){const o=e.compareDocumentPosition(t);return o&Node.DOCUMENT_POSITION_FOLLOWING||o&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:o&Node.DOCUMENT_POSITION_PRECEDING||o&Node.DOCUMENT_POSITION_CONTAINS?1:0}function Mt(e){const t=e.getBoundingClientRect(),o=window.getComputedStyle(e,"::before"),n=window.getComputedStyle(e,"::after");if(!(o.content!=="none"||n.content!=="none"))return t;const r=parseFloat(o.width)||0,h=parseFloat(o.height)||0,l=parseFloat(n.width)||0,w=parseFloat(n.height)||0,u=Math.max(t.width,r,l),p=Math.max(t.height,h,w),a=u-t.width,M=p-t.height;return{left:t.left-a/2,right:t.right+a/2,top:t.top-M/2,bottom:t.bottom+M/2}}export{Et as C,ft as I,xt as a,bt as b,Ct as c,Mt as g,Rt as s,Ot as u};
