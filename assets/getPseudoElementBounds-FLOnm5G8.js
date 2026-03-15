import{r as w}from"../vendor/vendor-emotion-D8kPrniB.js";import{dn as ke,dp as P,dq as ie,dr as W,ds as B,dt as Ae,b7 as He,du as X,b8 as Ue,dv as je,dw as D,dx as Ye,dy as _,dz as ze,dA as qe,dB as Fe,dC as he,dD as Ce,dE as Ke,dF as Je,dG as Qe,dH as Xe,dI as Ze,dJ as Ve,dK as $e,h as et,dL as _e}from"./index-BzLMjSCA.js";import{e as tt}from"./useOpenInteractionType-B0CGbEqx.js";import{j as nt}from"../vendor/vendor-motion-D2gXNOxm.js";function pe(e,t,o){return Math.floor(e/t)!==o}function re(e,t){return t<0||t>=e.current.length}function Me(e,t){return N(e,{disabledIndices:t})}function Ge(e,t){return N(e,{decrement:!0,startingIndex:e.current.length,disabledIndices:t})}function N(e,{startingIndex:t=-1,decrement:o=!1,disabledIndices:n,amount:d=1}={}){let r=t;do r+=o?-d:d;while(r>=0&&r<=e.current.length-1&&oe(e,r,n));return r}function rt(e,{event:t,orientation:o,loopFocus:n,rtl:d,cols:r,disabledIndices:h,minIndex:f,maxIndex:y,prevIndex:s,stopEvent:m=!1}){let a=s;const M=[],S={};let R=!1;{let i=null,g=-1;e.current.forEach((O,l)=>{if(O==null)return;const p=O.closest('[role="row"]');p&&(R=!0),(p!==i||g===-1)&&(i=p,g+=1,M[g]=[]),M[g].push(l),S[l]=g})}const b=R&&M.length>0&&M.some(i=>i.length!==r);function E(i){if(!b||s===-1)return;const g=S[s];if(g==null)return;const O=M[g].indexOf(s);let l=i==="up"?g-1:g+1;n&&(l<0?l=M.length-1:l>=M.length&&(l=0));const p=new Set;for(;l>=0&&l<M.length&&!p.has(l);){p.add(l);const C=M[l];if(C.length===0){l=i==="up"?l-1:l+1;continue}const F=Math.min(O,C.length-1);for(let A=F;A>=0;A-=1){const Z=C[A];if(!oe(e,Z,h))return Z}l=i==="up"?l-1:l+1,n&&(l<0?l=M.length-1:l>=M.length&&(l=0))}}if(t.key===ke){const i=E("up");if(i!==void 0)m&&P(t),a=i;else{if(m&&P(t),s===-1)a=y;else if(a=N(e,{startingIndex:a,amount:r,decrement:!0,disabledIndices:h}),n&&(s-r<f||a<0)){const g=s%r,O=y%r,l=y-(O-g);O===g?a=y:a=O>g?l:l-r}re(e,a)&&(a=s)}}if(t.key===ie){const i=E("down");i!==void 0?(m&&P(t),a=i):(m&&P(t),s===-1?a=f:(a=N(e,{startingIndex:s,amount:r,disabledIndices:h}),n&&s+r>y&&(a=N(e,{startingIndex:s%r-r,amount:r,disabledIndices:h}))),re(e,a)&&(a=s))}if(o==="both"){const i=Ae(s/r);t.key===(d?W:B)&&(m&&P(t),s%r!==r-1?(a=N(e,{startingIndex:s,disabledIndices:h}),n&&pe(a,r,i)&&(a=N(e,{startingIndex:s-s%r-1,disabledIndices:h}))):n&&(a=N(e,{startingIndex:s-s%r-1,disabledIndices:h})),pe(a,r,i)&&(a=s)),t.key===(d?B:W)&&(m&&P(t),s%r!==0?(a=N(e,{startingIndex:s,decrement:!0,disabledIndices:h}),n&&pe(a,r,i)&&(a=N(e,{startingIndex:s+(r-s%r),decrement:!0,disabledIndices:h}))):n&&(a=N(e,{startingIndex:s+(r-s%r),decrement:!0,disabledIndices:h})),pe(a,r,i)&&(a=s));const g=Ae(y/r)===i;re(e,a)&&(n&&g?a=t.key===(d?B:W)?y:N(e,{startingIndex:s-s%r-1,disabledIndices:h}):a=s)}return a}function ot(e,t,o){const n=[];let d=0;return e.forEach(({width:r,height:h},f)=>{let y=!1;for(o&&(d=0);!y;){const s=[];for(let m=0;m<r;m+=1)for(let a=0;a<h;a+=1)s.push(d+m+a*t);d%t+r<=t&&s.every(m=>n[m]==null)?(s.forEach(m=>{n[m]=f}),y=!0):d+=1}}),[...n]}function it(e,t,o,n,d){if(e===-1)return-1;const r=o.indexOf(e),h=t[e];switch(d){case"tl":return r;case"tr":return h?r+h.width-1:r;case"bl":return h?r+(h.height-1)*n:r;case"br":return o.lastIndexOf(e);default:return-1}}function at(e,t){return t.flatMap((o,n)=>e.includes(o)?[n]:[])}function oe(e,t,o){if(typeof o=="function")return o(t);if(o)return o.includes(t);const n=e.current[t];return n?n.hasAttribute("disabled")||n.getAttribute("aria-disabled")==="true":!1}const ut="Escape";function ye(e,t,o){switch(e){case"vertical":return t;case"horizontal":return o;default:return t||o}}function we(e,t){return ye(t,e===ke||e===ie,e===W||e===B)}function Te(e,t,o){return ye(t,e===ie,o?e===W:e===B)||e==="Enter"||e===" "||e===""}function st(e,t,o){return ye(t,o?e===W:e===B,e===ie)}function ct(e,t,o,n){const d=o?e===B:e===W,r=e===ke;return t==="both"||t==="horizontal"&&n&&n>1?e===ut:ye(t,d,r)}function xt(e,t){const o="rootStore"in e?e.rootStore:e,n=o.useState("open"),d=o.useState("floatingElement"),r=o.useState("domReferenceElement"),h=o.context.dataRef,{listRef:f,activeIndex:y,onNavigate:s=()=>{},enabled:m=!0,selectedIndex:a=null,allowEscape:M=!1,loopFocus:S=!1,nested:R=!1,rtl:b=!1,virtual:E=!1,focusItemOnOpen:i="auto",focusItemOnHover:g=!0,openOnArrowKeyDown:O=!0,disabledIndices:l=void 0,orientation:p="vertical",parentOrientation:C,cols:F=1,scrollItemIntoView:A=!0,itemSizes:Z,dense:ae=!1,id:q,resetOnPointerLeave:H=!0,externalTree:ue}=t,se=He(d),G=X(se),J=Ue(),U=je(ue);D(()=>{h.current.orientation=p},[h,p]);const xe=Ye(r),j=w.useRef(i),x=w.useRef(a??-1),Y=w.useRef(null),Q=w.useRef(!0),I=_(u=>{s(x.current===-1?null:x.current,u)}),Se=w.useRef(I),V=w.useRef(!!d),Ie=w.useRef(n),K=w.useRef(!1),ce=w.useRef(!1),be=X(l),le=X(n),We=X(A),$=X(a),Le=X(H),Re=_(()=>{function u(L){E?U?.events.emit("virtualfocus",L):tt(L,{sync:K.current,preventScroll:!0})}const T=f.current[x.current],c=ce.current;T&&u(T),(K.current?L=>L():requestAnimationFrame)(()=>{const L=f.current[x.current]||T;if(!L)return;T||u(L);const z=We.current;z&&Oe&&(c||!Q.current)&&L.scrollIntoView?.(typeof z=="boolean"?{block:"nearest",inline:"nearest"}:z)})});D(()=>{m&&(n&&d?(x.current=a??-1,j.current&&a!=null&&(ce.current=!0,I())):V.current&&(x.current=-1,Se.current()))},[m,n,d,a,I]),D(()=>{if(m){if(!n){K.current=!1;return}if(d)if(y==null){if(K.current=!1,$.current!=null)return;if(V.current&&(x.current=-1,Re()),(!Ie.current||!V.current)&&j.current&&(Y.current!=null||j.current===!0&&Y.current==null)){let u=0;const T=()=>{f.current[0]==null?(u<2&&(u?requestAnimationFrame:queueMicrotask)(T),u+=1):(x.current=Y.current==null||Te(Y.current,p,b)||R?Me(f):Ge(f),Y.current=null,I())};T()}}else re(f,y)||(x.current=y,Re(),ce.current=!1)}},[m,n,d,y,$,R,f,p,b,I,Re,be]),D(()=>{if(!m||d||!U||E||!V.current)return;const u=U.nodesRef.current,T=u.find(L=>L.id===J)?.context?.elements.floating,c=ze(qe(d)),k=u.some(L=>L.context&&Fe(L.context.elements.floating,c));T&&!k&&Q.current&&T.focus({preventScroll:!0})},[m,d,U,J,E]),D(()=>{Se.current=I,Ie.current=n,V.current=!!d}),D(()=>{n||(Y.current=null,j.current=i)},[n,i]);const Ne=y!=null,Oe=w.useMemo(()=>{function u(c){if(!le.current)return;const k=f.current.indexOf(c.currentTarget);k!==-1&&x.current!==k&&(x.current=k,I(c))}return{onFocus(c){K.current=!0,u(c)},onClick:({currentTarget:c})=>c.focus({preventScroll:!0}),onMouseMove(c){K.current=!0,ce.current=!1,g&&u(c)},onPointerLeave(c){if(!le.current||!Q.current||c.pointerType==="touch")return;K.current=!0;const k=c.relatedTarget;!g||f.current.includes(k)||Le.current&&(x.current=-1,I(c),E||G.current?.focus({preventScroll:!0}))}}},[le,G,g,f,I,Le,E]),fe=w.useCallback(()=>C??U?.nodesRef.current.find(u=>u.id===J)?.context?.dataRef?.current.orientation,[J,U,C]),ee=_(u=>{if(Q.current=!1,K.current=!0,u.which===229||!le.current&&u.currentTarget===G.current)return;if(R&&ct(u.key,p,b,F)){we(u.key,fe())||P(u),o.setOpen(!1,he(Ce,u.nativeEvent)),Ke(r)&&(E?U?.events.emit("virtualfocus",r):r.focus());return}const T=x.current,c=Me(f,l),k=Ge(f,l);if(xe||(u.key==="Home"&&(P(u),x.current=c,I(u)),u.key==="End"&&(P(u),x.current=k,I(u))),F>1){const L=Z||Array.from({length:f.current.length},()=>({width:1,height:1})),z=ot(L,F,ae),te=z.findIndex(v=>v!=null&&!oe(f,v,l)),Ee=z.reduce((v,ne,Be)=>ne!=null&&!oe(f,ne,l)?Be:v,-1),me=z[rt({current:z.map(v=>v!=null?f.current[v]:null)},{event:u,orientation:p,loopFocus:S,rtl:b,cols:F,disabledIndices:at([...(typeof l!="function"?l:null)||f.current.map((v,ne)=>oe(f,ne,l)?ne:void 0),void 0],z),minIndex:te,maxIndex:Ee,prevIndex:it(x.current>k?c:x.current,L,z,F,u.key===ie?"bl":u.key===(b?W:B)?"tr":"tl"),stopEvent:!0})];if(me!=null&&(x.current=me,I(u)),p==="both")return}if(we(u.key,p)){if(P(u),n&&!E&&ze(u.currentTarget.ownerDocument)===u.currentTarget){x.current=Te(u.key,p,b)?c:k,I(u);return}Te(u.key,p,b)?S?T>=k?M&&T!==f.current.length?x.current=-1:(K.current=!1,x.current=c):x.current=N(f,{startingIndex:T,disabledIndices:l}):x.current=Math.min(k,N(f,{startingIndex:T,disabledIndices:l})):S?T<=c?M&&T!==-1?x.current=f.current.length:(K.current=!1,x.current=k):x.current=N(f,{startingIndex:T,decrement:!0,disabledIndices:l}):x.current=Math.max(c,N(f,{startingIndex:T,decrement:!0,disabledIndices:l})),re(f,x.current)&&(x.current=-1),I(u)}}),de=w.useMemo(()=>E&&n&&Ne&&{"aria-activedescendant":`${q}-${y}`},[E,n,Ne,q,y]),Pe=w.useMemo(()=>({"aria-orientation":p==="both"?void 0:p,...xe?{}:de,onKeyDown(u){if(u.key==="Tab"&&u.shiftKey&&n&&!E){const T=Je(u.nativeEvent);if(T&&!Fe(G.current,T))return;P(u),o.setOpen(!1,he(Qe,u.nativeEvent)),Ke(r)&&r.focus();return}ee(u)},onPointerMove(){Q.current=!0}}),[de,ee,G,p,xe,o,n,E,r]),ge=w.useMemo(()=>{function u(c){i==="auto"&&Xe(c.nativeEvent)&&(j.current=!E)}function T(c){j.current=i,i==="auto"&&Ze(c.nativeEvent)&&(j.current=!0)}return{onKeyDown(c){const k=o.select("open");Q.current=!1;const L=c.key.startsWith("Arrow"),z=st(c.key,fe(),b),te=we(c.key,p),Ee=(R?z:te)||c.key==="Enter"||c.key.trim()==="";if(E&&k)return ee(c);if(!(!k&&!O&&L)){if(Ee){const me=we(c.key,fe());Y.current=R&&me?null:c.key}if(R){z&&(P(c),k?(x.current=Me(f,be.current),I(c)):o.setOpen(!0,he(Ce,c.nativeEvent,c.currentTarget)));return}te&&($.current!=null&&(x.current=$.current),P(c),!k&&O?o.setOpen(!0,he(Ce,c.nativeEvent,c.currentTarget)):ee(c),k&&I(c))}},onFocus(c){o.select("open")&&!E&&(x.current=-1,I(c))},onPointerDown:T,onPointerEnter:T,onMouseDown:u,onClick:u}},[ee,be,i,f,R,I,o,O,p,fe,b,$,E]),De=w.useMemo(()=>({...de,...ge}),[de,ge]);return w.useMemo(()=>m?{reference:De,floating:Pe,item:Oe,trigger:ge}:{},[m,De,Pe,ge,Oe])}function bt(e,t){const o="rootStore"in e?e.rootStore:e,n=o.useState("open"),d=o.context.dataRef,{listRef:r,activeIndex:h,onMatch:f,onTypingChange:y,enabled:s=!0,findMatch:m=null,resetMs:a=750,ignoreKeys:M=$e,selectedIndex:S=null}=t,R=Ve(),b=w.useRef(""),E=w.useRef(S??h??-1),i=w.useRef(null);D(()=>{n&&(R.clear(),i.current=null,b.current="")},[n,R]),D(()=>{n&&b.current===""&&(E.current=S??h??-1)},[n,S,h]);const g=_(C=>{C?d.current.typing||(d.current.typing=C,y?.(C)):d.current.typing&&(d.current.typing=C,y?.(C))}),O=_(C=>{function F(H,ue,se){const G=m?m(ue,se):ue.find(J=>J?.toLocaleLowerCase().indexOf(se.toLocaleLowerCase())===0);return G?H.indexOf(G):-1}const A=r.current;if(b.current.length>0&&b.current[0]!==" "&&(F(A,A,b.current)===-1?g(!1):C.key===" "&&P(C)),A==null||M.includes(C.key)||C.key.length!==1||C.ctrlKey||C.metaKey||C.altKey)return;n&&C.key!==" "&&(P(C),g(!0)),A.every(H=>H?H[0]?.toLocaleLowerCase()!==H[1]?.toLocaleLowerCase():!0)&&b.current===C.key&&(b.current="",E.current=i.current),b.current+=C.key,R.start(a,()=>{b.current="",E.current=i.current,g(!1)});const ae=E.current,q=F(A,[...A.slice((ae||0)+1),...A.slice(0,(ae||0)+1)],b.current);q!==-1?(f?.(q),i.current=q):C.key!==" "&&(b.current="",g(!1))}),l=w.useMemo(()=>({onKeyDown:O}),[O]),p=w.useMemo(()=>({onKeyDown:O,onKeyUp(C){C.key===" "&&g(!1)}}),[O,g]);return w.useMemo(()=>s?{reference:l,floating:p}:{},[s,l,p])}const Rt=et(({css:e,cssVar:t})=>({danger:e`
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
  `})),ve=w.createContext({register:()=>{},unregister:()=>{},subscribeMapChange:()=>()=>{},elementsRef:{current:[]},nextIndexRef:{current:0}});function lt(){return w.useContext(ve)}let ft=(function(e){return e[e.None=0]="None",e[e.GuessFromOrder=1]="GuessFromOrder",e})({});function Ot(e={}){const{label:t,metadata:o,textRef:n,indexGuessBehavior:d,index:r}=e,{register:h,unregister:f,subscribeMapChange:y,elementsRef:s,labelsRef:m,nextIndexRef:a}=lt(),M=w.useRef(-1),[S,R]=w.useState(r??(d===ft.GuessFromOrder?()=>{if(M.current===-1){const i=a.current;a.current+=1,M.current=i}return M.current}:-1)),b=w.useRef(null),E=w.useCallback(i=>{if(b.current=i,S!==-1&&i!==null&&(s.current[S]=i,m)){const g=t!==void 0;m.current[S]=g?t:n?.current?.textContent??i.textContent}},[S,s,m,t,n]);return D(()=>{if(r!=null)return;const i=b.current;if(i)return h(i,o),()=>{f(i)}},[r,h,f,o]),D(()=>{if(r==null)return y(i=>{const g=b.current?i.get(b.current)?.index:null;g!=null&&R(g)})},[r,y,R]),w.useMemo(()=>({ref:E,index:S}),[S,E])}function Et(e){const{children:t,elementsRef:o,labelsRef:n,onMapChange:d}=e,r=_(d),h=w.useRef(0),f=_e(gt).current,y=_e(dt).current,[s,m]=w.useState(0),a=w.useRef(s),M=_((i,g)=>{y.set(i,g??null),a.current+=1,m(a.current)}),S=_(i=>{y.delete(i),a.current+=1,m(a.current)}),R=w.useMemo(()=>{const i=new Map;return Array.from(y.keys()).filter(O=>O.isConnected).sort(mt).forEach((O,l)=>{const p=y.get(O)??{};i.set(O,{...p,index:l})}),i},[y,s]);D(()=>{if(typeof MutationObserver!="function"||R.size===0)return;const i=new MutationObserver(g=>{const O=new Set,l=p=>O.has(p)?O.delete(p):O.add(p);g.forEach(p=>{p.removedNodes.forEach(l),p.addedNodes.forEach(l)}),O.size===0&&(a.current+=1,m(a.current))});return R.forEach((g,O)=>{O.parentElement&&i.observe(O.parentElement,{childList:!0})}),()=>{i.disconnect()}},[R]),D(()=>{a.current===s&&(o.current.length!==R.size&&(o.current.length=R.size),n&&n.current.length!==R.size&&(n.current.length=R.size),h.current=R.size),r(R)},[r,R,o,n,s]),D(()=>()=>{o.current=[]},[o]),D(()=>()=>{n&&(n.current=[])},[n]);const b=_(i=>(f.add(i),()=>{f.delete(i)}));D(()=>{f.forEach(i=>i(R))},[f,R]);const E=w.useMemo(()=>({register:M,unregister:S,subscribeMapChange:b,elementsRef:o,labelsRef:n,nextIndexRef:h}),[M,S,b,o,n,h]);return nt.jsx(ve.Provider,{value:E,children:t})}function dt(){return new Map}function gt(){return new Set}function mt(e,t){const o=e.compareDocumentPosition(t);return o&Node.DOCUMENT_POSITION_FOLLOWING||o&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:o&Node.DOCUMENT_POSITION_PRECEDING||o&Node.DOCUMENT_POSITION_CONTAINS?1:0}function Ct(e){const t=e.getBoundingClientRect(),o=window.getComputedStyle(e,"::before"),n=window.getComputedStyle(e,"::after");if(!(o.content!=="none"||n.content!=="none"))return t;const r=parseFloat(o.width)||0,h=parseFloat(o.height)||0,f=parseFloat(n.width)||0,y=parseFloat(n.height)||0,s=Math.max(t.width,r,f),m=Math.max(t.height,h,y),a=s-t.width,M=m-t.height;return{left:t.left-a/2,right:t.right+a/2,top:t.top-M/2,bottom:t.bottom+M/2}}export{Et as C,ft as I,bt as a,Ot as b,Ct as g,Rt as s,xt as u};
