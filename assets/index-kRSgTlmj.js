import{j as t}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as D,f1 as Te,l as R,a4 as B,ax as I,y as g,F as u,m as j,aT as ze,B as re,h as ke,bs as le}from"./index-DuTkvx3R.js";import{A as O}from"./index-3_OIRYp9.js";import{C as ae}from"./index-C4tkYPlx.js";import{E as P}from"./Empty-C6LcID4B.js";import{M as we}from"./Modal-B9x1oMV2.js";import{L as ne}from"./index-DQgyhugs.js";import{S as Ae}from"./SearchBar-D1raqoLp.js";import{r as s}from"../vendor/vendor-emotion-D8kPrniB.js";import{G as $e}from"./index-CizQNCJ6.js";import{M as Re}from"./index-DzGOtisJ.js";import{u as We}from"./useEnabledChatModels-DhqfnLwI.js";import{u as Le}from"./index-BpcyUtFx.js";import{x as _e}from"../vendor/vendor-es-toolkit-BI0f0n_g.js";import{S as K}from"./index-BCGXIb_J.js";import{a2 as W}from"../vendor/vendor-icons-UxbXHH06.js";const Ne=()=>{const{t:r}=D("welcome");return["brainstorm","analysis","writing","planning","product","game"].map(m=>({description:r(`guide.groupTemplates.${m}.description`),id:m,members:r(`guide.groupTemplates.${m}.members`,{returnObjects:!0}),title:r(`guide.groupTemplates.${m}.title`)}))},Pe=s.memo(({template:r,isSelected:n,onToggle:m,styles:p,cx:z})=>{const{t:l}=D("chat");return t.jsx("div",{className:z(p.listItem),onClick:()=>m(r.id),children:t.jsxs(u,{horizontal:!0,align:"center",gap:12,width:"100%",children:[t.jsx(ae,{checked:n,onChange:()=>m(r.id),onClick:le}),t.jsx($e,{size:40,avatars:r.members.filter(a=>a!=null).map(a=>({avatar:a.avatar||B,background:a.backgroundColor||void 0}))}),t.jsxs(u,{flex:1,gap:2,children:[t.jsx(g,{className:p.title,children:r.title}),t.jsx(g,{ellipsis:!0,className:p.description,children:r.description}),t.jsxs(u,{horizontal:!0,align:"center",gap:4,children:[t.jsx(W,{size:11,style:{color:"#999"}}),t.jsx(g,{style:{fontSize:11},type:"secondary",children:l("groupWizard.memberCount",{count:r.members.filter(a=>a!=null).length})})]})]})]})})}),Be=s.memo(({agent:r,isSelected:n,onToggle:m,styles:p,cx:z})=>{const{t:l}=D(["chat","common"]),a=r.config?.id,S=r.meta?.title||l("defaultSession",{ns:"common"}),C=r.meta?.description||"",x=r.meta?.avatar||B,k=r.meta?.backgroundColor;return a?t.jsx("div",{className:z(p.listItem),onClick:()=>m(a),children:t.jsxs(u,{horizontal:!0,align:"center",gap:12,width:"100%",children:[t.jsx(ae,{checked:n,onChange:()=>m(a),onClick:le}),t.jsx(O,{avatar:x,background:k,size:40}),t.jsxs(u,{flex:1,gap:2,style:{minWidth:0},children:[t.jsx(g,{className:p.title,children:S}),C&&t.jsx(g,{ellipsis:!0,className:p.description,children:C})]})]})}):null}),f=ke(({css:r,cssVar:n})=>({container:r`
    display: flex;
    flex-direction: row;

    height: 500px;
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: ${n.borderRadius};
  `,description:r`
    font-size: 12px;
    line-height: 1.2;
    color: ${n.colorTextSecondary};
  `,hostCard:r`
    margin-block-start: ${n.paddingSM};
    margin-inline: ${n.paddingSM};
    padding: ${n.padding};
    border: 1px solid ${n.colorBorderSecondary};
    border-radius: ${n.borderRadiusLG};

    background: ${n.colorFillTertiary};
  `,leftColumn:r`
    user-select: none;

    overflow-y: auto;
    flex: 1;

    padding: 0;
    border-inline-end: 1px solid ${n.colorBorderSecondary};
  `,listHeader:r`
    padding: 0;
    color: ${n.colorTextDescription};
  `,listItem:r`
    cursor: pointer;

    position: relative;

    margin-block: 2px;
    padding: ${n.paddingSM} !important;
    border-radius: ${n.borderRadius};

    transition: all 0.2s ease;

    &:hover {
      background: ${n.colorFillTertiary};
    }
  `,memberDescription:r`
    display: block;
    padding-inline-end: 48px;
  `,modelSelectDisabled:r`
    pointer-events: none;
  `,rightColumn:r`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;

    padding: 0;
  `,title:r`
    font-size: 14px;
    font-weight: 500;
  `})),De=s.memo(({onCancel:r,onCreateFromTemplate:n,onCreateCustom:m,open:p,isCreatingFromTemplate:z})=>{const{t:l}=D(["chat","common"]),a=Ne(),S=We(),C=Le(e=>(e.sessions||[]).filter(o=>o.type===Te.Agent)),x=s.useMemo(()=>C.filter(e=>!e.config?.virtual),[C]),k=s.useMemo(()=>R(f.description,f.memberDescription),[R,f.description,f.memberDescription]),h=s.useMemo(()=>{if(S.length>0&&S[0].children.length>0){const e=S[0];return{model:e.children[0].id,provider:e.id}}return{model:void 0,provider:void 0}},[S]),[ce,U]=s.useState(""),[b,Y]=s.useState(""),[c,E]=s.useState(""),[v,w]=s.useState([]),[L,_]=s.useState({}),[M,F]=s.useState(!1),[H,q]=s.useState(h.model&&h.provider?h:{}),[de,J]=s.useState(!1),[ue,Q]=s.useState("templates"),y=s.useRef(null),me=z??!1,pe=s.useCallback(e=>{E(o=>{const i=o===e?"":e;return i!==o&&(_({}),F(!1)),i&&w([]),i})},[]),fe=s.useCallback(e=>{E(""),_({}),w(o=>o.includes(e)?o.filter(i=>i!==e):[...o,e])},[]),X=s.useCallback(e=>{w(o=>o.filter(i=>i!==e))},[]),G=()=>{E(""),w([]),U(""),Y(""),_({}),F(!1),q(h.model&&h.provider?h:{}),y.current&&clearTimeout(y.current)},ge=s.useCallback(e=>{q(e)},[]),he=s.useCallback((e,o,i)=>{_(d=>{const A=d[e]||[];if(i){const T=A.filter($=>$!==o);return T.length===0?_e(d,[e]):{...d,[e]:T}}return A.includes(o)?d:{...d,[e]:[...A,o]}})},[]),xe=s.useCallback(e=>{F(!e)},[]),Ce=s.useCallback(e=>{const o=e.target.value;U(o),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{Y(o)},300)},[]),Z=x.length;s.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]),s.useEffect(()=>{p&&Q(Z>2?"agents":"templates")},[p,Z]),s.useEffect(()=>{w(e=>e.filter(o=>x.some(i=>i.config?.id===o)))},[x]);const ve=s.useCallback(e=>{if(!e)return;const o=Array.isArray(e)?e[0]:e;(o==="templates"||o==="agents")&&Q(o)},[]),V=s.useMemo(()=>{const e=b.trim().toLowerCase();return e?a.filter(o=>o.title.toLowerCase().includes(e)||o.description.toLowerCase().includes(e)?!0:o.members.some(i=>i!=null&&i.title.toLowerCase().includes(e))):a},[a,b]),ee=s.useMemo(()=>{const e=b.trim().toLowerCase();return e?x.filter(o=>{const i=o.meta?.title||"",d=o.meta?.description||"";return i.toLowerCase().includes(e)||d.toLowerCase().includes(e)}):x},[x,b]),N=s.useMemo(()=>{if(!c)return[];const e=a.find(i=>i.id===c);if(!e)return[];const o=new Set(L[c]||[]);return e.members.filter(i=>i!=null).map(i=>({avatar:i.avatar||B,backgroundColor:i.backgroundColor,description:i.systemRole,isRemoved:o.has(i.title),key:`${c}-${i.title}`,systemRole:i.systemRole,title:i.title}))},[c,L,a]),ye=s.useMemo(()=>N.filter(e=>!e.isRemoved).length,[N]),te=s.useMemo(()=>v.map(e=>{const o=C.find($=>$.config?.id===e);if(!o)return null;const i=o.meta?.title||l("defaultSession",{ns:"common"}),d=o.meta?.avatar||B,A=o.meta?.backgroundColor,T=o.meta?.description||"";return{actions:t.jsx(K,{checked:!0,size:"small",onChange:$=>{$||X(e)}}),avatar:t.jsx(O,{avatar:d,background:A,size:40}),description:T?t.jsx(I,{title:T,children:t.jsx(g,{className:k,ellipsis:{rows:1},children:T})}):null,key:e,showAction:!0,title:i}}).filter(e=>!!e),[v,C,l,X,k]),je=s.useMemo(()=>{const e=H.model??h.model,o=H.provider??h.provider;if(!(!e||!o))return{model:e,provider:o}},[H,h]),oe=s.useCallback(async()=>{if(c)try{const e=a.find(d=>d.id===c),o=new Set(L[c]||[]),i=(e?.members||[]).filter(d=>d!=null&&!o.has(d.title)).map(d=>d.title);await n(c,i),G()}catch(e){console.error("Failed to create group from template:",e)}},[c,n,a,L]),se=s.useCallback(async()=>{if(v.length!==0)try{J(!0),await m(v),G(),r()}catch(e){console.error("Failed to create group with selected members:",e)}finally{J(!1)}},[v,m,r]),Se=s.useCallback(async()=>{if(c){await oe();return}await se()},[c,oe,se]),ie=()=>{G(),r()},be=c?ye===0&&M:v.length===0,Me=c?me:de;return t.jsx(we,{open:p,title:l("groupWizard.title"),width:900,footer:t.jsxs(u,{horizontal:!0,gap:8,justify:"end",children:[t.jsx(re,{onClick:ie,children:l("cancel",{ns:"common"})}),t.jsx(re,{disabled:be,loading:Me,type:"primary",onClick:Se,children:l("groupWizard.createGroup")})]}),onCancel:ie,children:t.jsxs(u,{horizontal:!0,className:f.container,children:[t.jsxs(u,{className:f.leftColumn,flex:1,gap:12,children:[t.jsx(Ae,{allowClear:!0,placeholder:l("memberSelection.searchAgents"),style:{margin:`${j.paddingSM} ${j.paddingSM} 0 ${j.paddingSM}`},value:ce,variant:"filled",onChange:Ce}),t.jsx(u,{flex:1,style:{overflowY:"auto",padding:`0 ${j.paddingSM}`},children:t.jsx(ze,{accordion:!0,collapsible:!0,activeKey:ue,expandIconPlacement:"end",gap:12,size:"small",variant:"borderless",items:[{children:V.length===0?t.jsx(P,{descriptionProps:{fontSize:14},icon:W,style:{maxWidth:400},description:l(b?"groupWizard.noMatchingTemplates":"groupWizard.noTemplates")}):t.jsx(u,{gap:4,children:V.map(e=>t.jsx(Pe,{cx:R,isSelected:c===e.id,styles:f,template:e,onToggle:pe},e.id))}),key:"templates",label:l("groupWizard.useTemplate")},{children:ee.length===0?t.jsx(P,{descriptionProps:{fontSize:14},icon:W,style:{maxWidth:400},description:b?l("noMatchingAgents",{ns:"chat"}):l("noAvailableAgents",{ns:"chat"})}):t.jsx(u,{gap:4,children:ee.map(e=>t.jsx(Be,{agent:e,cx:R,isSelected:v.includes(e.config?.id||""),styles:f,onToggle:fe},e.id))}),key:"agents",label:l("groupWizard.existingMembers")}],styles:{header:{color:j.colorTextDescription,fontSize:j.fontSize,padding:0}},onChange:ve})})]}),t.jsx(u,{className:f.rightColumn,flex:1,children:t.jsxs(u,{flex:1,gap:16,style:{overflowY:"auto"},children:[t.jsxs(u,{horizontal:!0,align:"center",className:f.hostCard,gap:12,children:[t.jsxs(u,{flex:1,gap:2,children:[t.jsx(g,{style:{fontSize:14,fontWeight:500},type:M?"secondary":void 0,children:l("groupWizard.host.title")}),t.jsx(g,{style:{color:"#999",fontSize:12},type:M?"secondary":void 0,children:l("groupWizard.host.description")})]}),t.jsxs(u,{horizontal:!0,align:"center",gap:12,children:[t.jsx("div",{className:R(M&&f.modelSelectDisabled),style:{opacity:M?.6:1},children:t.jsx(Re,{requiredAbilities:["functionCall"],value:je,onChange:ge})}),t.jsx(I,{title:l("groupWizard.host.tooltip"),children:t.jsx(K,{checked:!M,size:"small",onChange:e=>xe(e)})})]})]}),t.jsx(u,{style:{padding:`0 ${j.paddingSM}`},children:c?N.length>0?t.jsx(ne,{items:N.map(e=>({actions:t.jsx(K,{checked:!e.isRemoved,size:"small",onChange:o=>he(c,e.title,o)}),avatar:t.jsx(O,{avatar:e.avatar,background:e.backgroundColor,size:40}),description:e.systemRole?t.jsx(I,{title:e.systemRole,children:t.jsx(g,{className:k,ellipsis:{rows:1},type:e.isRemoved?"secondary":void 0,children:e.systemRole})}):null,key:e.key,showAction:!0,title:t.jsx(g,{type:e.isRemoved?"secondary":void 0,children:e.title})}))}):t.jsx(P,{description:l("groupWizard.noTemplateMembers"),descriptionProps:{fontSize:14},icon:W,style:{maxWidth:400}}):te.length>0?t.jsx(ne,{items:te}):t.jsx(P,{description:l("memberSelection.noSelectedAgents"),descriptionProps:{fontSize:14},icon:W,style:{maxWidth:400}})})]})})]})})}),tt=Object.freeze(Object.defineProperty({__proto__:null,ChatGroupWizard:De},Symbol.toStringTag,{value:"Module"}));export{De as C,tt as i,Ne as u};
