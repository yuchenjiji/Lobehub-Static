import{fh as ae,J as H,b as L,h as T,j as w,l as b,y as A,i as M,dm as se,F as g,A as W,O as Z,P as ie,d as le,aX as ce,Y as de,f2 as ue,a3 as he,B as G,I as pe,m as y,a6 as me,ai as fe,g as ge,fi as xe,fj as ve,fk as ye,as as be,bj as we,bq as Se}from"./index-Dw0E06JZ.js";import{r as i}from"../vendor/vendor-emotion-D8kPrniB.js";import{f as ke,J as Te,j as B,k as Ie,D as Ae,K as D,u as J}from"./index-DmLQxUtL.js";import{s as F,g as K}from"./index-CJOfn6Np.js";import{j as n}from"../vendor/vendor-motion-D2gXNOxm.js";import{P as Me}from"./PopoverGroup-BsZXC-Mn.js";import{B as je}from"./Block-MHS1RMdI.js";import{k as Ce}from"./Popover-MrtZ-CyU.js";import{u as P,i as _}from"./index-15pKLF4C.js";import{m as Pe}from"./markdownToTxt-Bj3muKq2.js";import{c as N}from"./useOperationState-GHrUgUDh.js";import{df as _e,b2 as Ne,aZ as q,bd as Ee}from"../vendor/vendor-icons-UxbXHH06.js";import"./providerConfig-CULHvVzb.js";import{A as ze}from"./Alert-_z4o-qr8.js";import{A as Q}from"./index-Bgs8TlXg.js";import{u as Y}from"./MarketAuthProvider-znwCpIzK.js";import{D as $e}from"./index-DfbBBsev.js";import{u as We,p as Be}from"./useQueryParam-DTF_nQmp.js";import{D as De}from"./index-CnpyjJpp.js";import{p as V,P as ee}from"./router-CYYHrl5R.js";import{M as He}from"./Modal-4AdmG9de.js";const Le=i.memo(()=>{const{analytics:e}=ae(),t=i.useCallback(()=>{const l=F.currentSession(K()),o=l?.id,c=F.defaultSessions(K()),r=H.showRightPanel(L.getState()),h=ke.activeDisplayMessages(Te());return{active_assistant:o==="inbox"?null:l?.meta?.title||null,has_chat_history:h.length>0,session_id:o||"inbox",sidebar_state:r?"expanded":"collapsed",visible_assistants_count:c.length}},[]);return i.useEffect(()=>{if(!e)return;const l=setTimeout(()=>{e.track({name:"main_page_view",properties:{...t(),spm:"main_page.interface.view"}})},1e3);return()=>clearTimeout(l)},[e,t]),null});Le.displayName="MainInterfaceTracker";const Re=T(({css:e,cssVar:t})=>({arrow:e`
    opacity: 0;
    transition: opacity ${t.motionDurationMid} ease;

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFill};
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px ${t.colorPrimaryBorder};
    }
  `,arrowVisible:e`
    opacity: 1;
  `,container:e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset-block: 16px 120px;
    inset-inline-end: 8px;

    width: 32px;
  `,rail:e`
    pointer-events: auto;

    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;
    justify-content: space-between;

    width: 100%;
    height: fit-content;
    margin-block: 0;
    margin-inline: auto;

    &:hover .arrow {
      opacity: 1;
    }
  `,railContent:e`
    scrollbar-width: none;

    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: end;
    justify-content: space-between;

    max-height: 50vh;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  `})),Oe=T(({css:e,cssVar:t})=>({indicator:e`
    flex-shrink: 0;

    min-width: 12px;
    height: 12px;
    padding-block: 5px;
    padding-inline: 4px;
  `,indicatorActive:e`
    transform: scaleX(1.1);
    background: ${t.colorPrimary};
    box-shadow: 0 0 0 1px ${t.colorPrimaryHover};
  `,indicatorContent:e`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: ${t.colorFillSecondary};
  `,indicatorContentActive:e`
    background: ${t.colorPrimary};
  `})),te=i.memo(({id:e,width:t,preview:l,role:o,virtuosoIndex:c,position:r,activePosition:h,onJump:m})=>{const{t:s}=w("chat"),a=Oe,u=h===r,d=s(o==="user"?"minimap.senderUser":"minimap.senderAssistant"),p=l?n.jsxs(n.Fragment,{children:[n.jsx(A,{fontSize:12,style:{marginBottom:4},type:"secondary",weight:500,children:d}),n.jsx(A,{as:"p",fontSize:12,children:l})]}):void 0;return n.jsx(Ce,{content:p,mouseEnterDelay:.1,placement:"left",styles:{content:{width:320}},children:n.jsx(je,{clickable:!0,align:"flex-end",style:{borderRadius:4},variant:"borderless",width:"100%",children:n.jsx("div",{"aria-current":u?"true":void 0,"aria-label":s("minimap.jumpToMessage",{index:r+1}),className:a.indicator,style:{width:t},onClick:()=>m(c),children:n.jsx("div",{className:b(a.indicatorContent,u&&a.indicatorContentActive)})})})},e)});te.displayName="MinimapIndicator";const E=12,Ue=24,Fe=320,Ke=e=>{if(!e)return E;const t=Math.min(e.length/Fe,1);return E+(Ue-E)*t},Xe=e=>{if(!e)return"";const l=Pe(e).replaceAll(/\s+/g," ").trim();return l?l.slice(0,100)+(l.length>100?"…":""):""},Ze=3,z=se("lobe-react:chat-minimap"),Ge=()=>{const e=P(N.virtuaScrollMethods),t=P(N.activeIndex),l=P(N.displayMessages,M),o=i.useMemo(()=>l.reduce((s,a,u)=>(a.role!=="user"&&a.role!=="assistant"||s.push({id:a.id,preview:Xe(a.content),role:a.role,virtuosoIndex:u,width:Ke(a.content)}),s),[]),[l]),c=i.useMemo(()=>{const s=new Map;return o.forEach(({virtuosoIndex:a},u)=>{s.set(a,u)}),s},[o]),r=i.useMemo(()=>t===null?null:(z("> activeIndex",t),z("> indicatorIndexMap",c),c.get(t)??null),[t,c]),h=i.useCallback(s=>{e?.scrollToIndex(s,{align:"start",smooth:!0})},[e]),m=i.useCallback(s=>{if(!e||o.length===0)return;let a;if(r!==null)z("activeIndicatorPosition",r),a=Math.min(Math.max(r+(s==="prev"?-1:1),0),Math.max(o.length-1,0));else if(t!==null)if(s==="prev"){let d=-1;for(let p=o.length-1;p>=0;p-=1)if(o[p].virtuosoIndex<t){d=p;break}a=d===-1?0:d}else{let d=o.length-1;for(const[p,x]of o.entries())if(x.virtuosoIndex>t){d=p;break}a=d}else a=s==="prev"?0:o.length-1;const u=o[a];u&&e.scrollToIndex(u.virtuosoIndex,{align:"start",smooth:!0})},[t,r,o,e]);return{activeIndicatorPosition:r,handleJump:h,handleStep:m,indicators:o}},Je=i.memo(()=>{const{t:e}=w("chat"),t=Re,[l,o]=i.useState(!1),{indicators:c,activeIndicatorPosition:r,handleJump:h,handleStep:m}=Ge();return c.length<=Ze?null:n.jsx(g,{align:"center",className:t.container,justify:"center",children:n.jsxs(g,{className:t.rail,role:"group",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[n.jsx(W,{"aria-label":e("minimap.previousMessage"),className:b(t.arrow,l&&t.arrowVisible),icon:_e,size:14,onClick:()=>m("prev")}),n.jsx(g,{className:t.railContent,children:n.jsx(Me,{contentLayoutAnimation:!0,children:c.map(({id:s,width:a,preview:u,role:d,virtuosoIndex:p},x)=>n.jsx(te,{activePosition:r,id:s,position:x,preview:u,role:d,virtuosoIndex:p,width:a,onJump:h},s))})}),n.jsx(W,{"aria-label":e("minimap.nextMessage"),className:b(t.arrow,l&&t.arrowVisible),icon:Ne,size:14,onClick:()=>m("next")})]})})});Je.displayName="ChatMinimap";const $=T(({css:e,cssVar:t})=>({closeButton:e`
    color: ${t.colorTextSecondary};
    transition: color 0.2s;

    &:hover {
      color: ${t.colorTextQuaternary};
    }
  `,container:e`
    position: fixed;
    z-index: 50;
    inset-block-start: 16px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    animation: fade-in-slide-down 300ms ease;

    @keyframes fade-in-slide-down {
      from {
        transform: translate(-50%, -16px);
        opacity: 0;
      }

      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }
  `,text:e`
    font-size: 16px;
    font-weight: 500;
    color: ${t.colorBgBase};
  `,toast:e`
    display: flex;
    align-items: center;

    padding-block: 8px;
    padding-inline: 24px;
    border-radius: 9999px;

    background: ${t.colorText};
    box-shadow: ${t.boxShadowSecondary};
  `})),qe=()=>{const{t:e}=w("chat"),[t,l]=i.useState(!0),o=Z(ie.getHotkeyById(le.ToggleZenMode));return i.useEffect(()=>{const c=setTimeout(()=>{l(!1)},2e3);return()=>clearTimeout(c)},[]),t?n.jsx("div",{className:$.container,children:n.jsx("div",{className:$.toast,children:n.jsxs(g,{horizontal:!0,align:"center",className:$.text,gap:8,children:[e("zenMode")," ",n.jsx(ce,{inverseTheme:!0,keys:o})]})})}):null},Ct=i.memo(()=>L(H.inZenMode)&&n.jsx(qe,{})),Qe=[{avatar:"💻",identifier:"lobe-cloud-sandbox",label:"Cloud Sandbox"}],Ye=1e3,Ve=15e3,ne=i.memo(({tool:e,onAuthComplete:t})=>{const{t:l}=w("chat"),[o,c]=i.useState(!1),[r,h]=i.useState(!1),m=i.useRef(null),s=i.useRef(null),a=i.useRef(null),u=i.useRef(null),d=Z(he.userId),p=B(f=>f.createKlavisServer),x=B(f=>f.refreshKlavisServerTools),S=i.useCallback(()=>{s.current&&(clearInterval(s.current),s.current=null),a.current&&(clearInterval(a.current),a.current=null),u.current&&(clearTimeout(u.current),u.current=null),m.current=null,h(!1)},[]);i.useEffect(()=>()=>{S()},[S]),i.useEffect(()=>{e.server?.status===D.CONNECTED&&r&&(S(),t())},[e.server?.status,r,S,t]);const I=i.useCallback(f=>{a.current||(a.current=setInterval(async()=>{try{await x(f)}catch(v){console.info("[Klavis] Polling check (expected during auth):",v)}},Ye),u.current=setTimeout(()=>{a.current&&(clearInterval(a.current),a.current=null),h(!1)},Ve))},[x]),R=i.useCallback((f,v)=>{s.current=setInterval(()=>{try{f.closed&&(s.current&&(clearInterval(s.current),s.current=null),m.current=null,I(v))}catch{s.current&&(clearInterval(s.current),s.current=null),I(v)}},500)},[x,I]),O=i.useCallback((f,v)=>{S(),h(!0);const C=window.open(f,"_blank","width=600,height=700");C?(m.current=C,R(C,v)):I(v)},[S,R,I]),U=async()=>{if(d){if(e.server?.status===D.PENDING_AUTH&&e.server.oauthUrl){O(e.server.oauthUrl,e.server.identifier);return}c(!0);try{const f=await p({identifier:e.identifier,serverName:e.serverName,userId:d});f&&(f.isAuthenticated?(await x(f.identifier),t()):f.oauthUrl&&O(f.oauthUrl,f.identifier))}catch(f){console.error("[ToolAuthAlert] Failed to create server:",f)}finally{c(!1)}}},oe=()=>typeof e.icon=="string"?n.jsx(Q,{alt:e.label,avatar:e.icon,size:20,style:{flex:"none"}}):n.jsx(pe,{fill:y.colorText,icon:e.icon,size:20}),j=o||r;return n.jsxs(g,{horizontal:!0,align:"center",gap:12,justify:"space-between",style:{cursor:"pointer"},onClick:U,children:[n.jsxs(g,{horizontal:!0,align:"center",gap:8,children:[oe(),n.jsx(A,{children:e.label})]}),n.jsx(G,{disabled:j,icon:q,loading:j,size:"small",type:"text",onClick:U,children:l(j?"toolAuth.authorizing":"toolAuth.authorize")})]})});ne.displayName="KlavisToolAuthItem";const re=i.memo(({tool:e})=>{const{t}=w("chat"),{signIn:l,isLoading:o}=Y(),c=async()=>{try{await l()}catch(r){console.error("[ToolAuthAlert] Market sign in failed:",r)}};return n.jsxs(g,{horizontal:!0,align:"center",gap:12,justify:"space-between",style:{cursor:"pointer"},onClick:c,children:[n.jsxs(g,{horizontal:!0,align:"center",gap:8,children:[n.jsx(Q,{alt:e.label,avatar:e.avatar,size:20,style:{flex:"none"}}),n.jsx(A,{children:e.label})]}),n.jsx(G,{disabled:o,icon:q,loading:o,size:"small",type:"text",onClick:c,children:t(o?"toolAuth.authorizing":"toolAuth.signIn")})]})});re.displayName="MarketToolAuthItem";const et=i.memo(()=>{const{t:e}=w("chat"),t=de(ue.currentAgentPlugins,M),l=B(Ie.getServers,M),{isAuthenticated:o}=Y(),c=i.useMemo(()=>{const r=[];for(const h of t){const m=Ae.find(a=>a.identifier===h);if(m){const a=l.find(u=>u.identifier===h);(!a||a.status===D.PENDING_AUTH)&&r.push({...m,authType:"klavis",server:a});continue}const s=Qe.find(a=>a.identifier===h);s&&!o&&r.push({...s,authType:"market"})}return r},[t,l,o]);return c.length===0?null:n.jsx(ze,{showIcon:!1,style:{width:"100%"},type:"secondary",description:n.jsxs(n.Fragment,{children:[e("toolAuth.hint"),n.jsx($e,{dashed:!0,style:{marginBlock:12}}),n.jsx(g,{gap:12,style:{marginTop:8},children:c.map(r=>r.authType==="klavis"?n.jsx(ne,{tool:r,onAuthComplete:()=>{}},r.identifier):n.jsx(re,{tool:r},r.identifier))})]}),title:n.jsx(g,{horizontal:!0,align:"center",gap:6,children:e("toolAuth.title")})})});et.displayName="ToolAuthAlert";const tt=()=>{const[e]=We("showMobileWorkspace",Be);return e},Pt=(e,t)=>{const l=me(h=>h.isMobile),o=tt(),[c,r]=fe(!1,{defaultValue:!1,onChange:t,value:e});return i.useEffect(()=>{l&&(o||r(!1))},[l,o]),[c,r]},X=T(({css:e,cssVar:t})=>({content:e`
    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;

    height: 100%;
    min-height: 100%;
    max-height: 100%;

    background: ${t.colorBgContainer};
  `,drawer:e`
    z-index: 10;
    height: 100%;
    background: ${t.colorBgContainer};
  `})),_t=i.memo(({children:e})=>{const[t,l,o,c]=J(d=>[_.showPortal(d),_.showPluginUI(d),_.showArtifactUI(d),V.showThread(d)]),[r,h]=L(d=>[H.portalWidth(d),d.updateSystemStatus]),[m,s]=i.useState(r);m!==r&&s(r);const{lg:a}=ge(),u=(d,p)=>{if(!p)return;const x=typeof p.width=="string"?Number.parseInt(p.width):p.width;x&&(M(x,r)||(s(x),h({portalWidth:x})))};return n.jsx(De,{className:X.drawer,defaultSize:{width:m},expand:t,expandable:!1,maxWidth:ye,mode:a?"fixed":"float",placement:"right",showHandleWhenCollapsed:!1,showHandleWideArea:!1,size:{height:"100%",width:r},classNames:{content:X.content},minWidth:o||l||c?xe:ve,onSizeChange:u,children:n.jsx(i.Activity,{mode:t?"visible":"hidden",name:"AgentPortal",children:e})})}),nt=be`
  :has(.portal-artifact) {
    overflow: hidden;
    padding-block-end: 12px;
  }
`,rt=({children:e})=>n.jsx(g,{className:b(nt,"portal-body"),height:"100%",style:{flex:1,height:0,position:"relative"},width:"100%",children:e}),ot=()=>n.jsx(ee,{renderBody:e=>n.jsx(rt,{children:e})}),at=T(({css:e,cssVar:t})=>({container:e`
    background: linear-gradient(${t.colorBgElevated}, ${t.colorBgContainer}) !important;
  `})),st=()=>{const[e,t,l]=J(r=>[r.showPortal,V.showThread(r),r.clearPortalStack]),{t:o}=w("portal"),c=r=>n.jsx(g,{gap:8,height:"calc(100% - 52px)",padding:"0 8px",style:{overflow:"hidden"},children:n.jsx(g,{height:"100%",style:{marginInline:-8,overflow:"hidden",position:"relative"},width:"calc(100% + 16px)",children:r})});return n.jsx(He,{allowFullscreen:!0,destroyOnHidden:!0,className:b(t&&at.container),footer:null,height:"95%",open:e,title:o("title"),styles:{body:{padding:0},header:{display:"none"}},onCancel:()=>l(),children:n.jsx(ee,{renderBody:c})})},it=i.memo(({mobile:e})=>{const t=e?st:ot;return n.jsx(i.Suspense,{fallback:n.jsx(we,{debugId:"PortalPanel"}),children:n.jsx(t,{})})});it.displayName="PortalPanel";const k=T(({css:e})=>({cancelIcon:e`
    position: absolute;
    z-index: 100;
    inset-block-start: 8px;
    inset-inline-end: 8px;
  `,container:e`
    position: absolute;
    z-index: 1100;
    inset-block-end: 16px;
    inset-inline-end: 20px;

    overflow: hidden;

    border: 1px solid ${y.colorSplit};
    border-radius: 8px;

    background: ${y.colorBgContainer};
    box-shadow: ${y.boxShadowSecondary};
  `,mobileContainer:e`
    inset-block-end: 8px;
    inset-inline-start: 8px;
  `,wrapper:e`
    background:
      linear-gradient(
        180deg,
        color-mix(in srgb, ${y.colorBgContainer} 0%, transparent),
        ${y.colorBgContainer} var(--gradient-stop, 140px)
      ),
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cg fill='${y.colorFillTertiary}' %3E %3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
  `,wrapperDark:e`
    --gradient-stop: 80px;
  `,wrapperLight:e`
    --gradient-stop: 140px;
  `})),Nt=i.memo(({mobile:e,children:t,show:l,onCancel:o,showCloseIcon:c=!0,width:r=422,height:h="auto",wrapper:m={},className:s,...a})=>{const u=Se(),{className:d,...p}=m;return l&&n.jsxs(g,{className:b(k.container,e&&k.mobileContainer,s),height:h,width:e?"calc(100% - 16px)":r,...a,children:[c&&n.jsx(W,{className:k.cancelIcon,icon:Ee,onClick:()=>o?.()}),n.jsx(g,{horizontal:!0,gap:16,padding:"20px 20px 16px",className:b(k.wrapper,u?k.wrapperDark:k.wrapperLight,d),...p,children:t})]})});export{Je as C,Le as M,Nt as N,_t as P,et as T,Ct as Z,it as a,Pt as u};
