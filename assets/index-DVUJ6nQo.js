import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{r as n}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as W,a as we}from"./MarketAuthProvider-xvs28EUv.js";import{u as _,s as ke}from"./store-Bl9BQYu_.js";import{N as ve}from"./NotFound-C6_Ntn79.js";import{j as P,B as V,F as o,y as S,C as Ce,h as Q,r as X,m as ee,K as H,ax as F,A as O,aF as Ae,e as K,az as te,Y as Se,br as D,aA as $e,I as v,bs as R,l as re,L as se,T as $,a6 as ze,bv as Ue,ap as Te}from"./index-BzLMjSCA.js";import{A as Y}from"./index-C2Bs0zJB.js";import{S as Ne}from"./SiGithub-DNtfqf-n.js";import{S as Pe}from"./SiX-BjMBTAhr.js";import{l as Fe,at as Le,P as ne,cY as oe,aN as ae,bz as ie,cx as le,b4 as De,b5 as ce,a9 as ue,a2 as Ge,ba as Ie}from"../vendor/vendor-icons-UxbXHH06.js";import{G as de}from"./Grid-D4IlJX72.js";import{A as Be}from"./AssistantEmpty-DyXc224h.js";import{B as pe}from"./Block-DisZY_e8.js";import{D as he}from"./DropdownMenu-BCHFZUyt.js";import{q as ge}from"./base-AbuBx_QK.js";import{P as me}from"./PublishedTime-CEiPLR0g.js";import{d as Ee}from"./discover-DRhSsoew.js";import{o as _e,F as L}from"./index-B76dLkYX.js";import{a as I}from"./format-Ns5ZgsQk.js";import{I as xe}from"./index-D4A48Xe5.js";import{P as fe}from"./Pagination-DrcG9rqT.js";import{S as Z}from"./index-BEQ9h0_F.js";import{L as Me}from"./ListLoading-zMIuK3iX.js";import"./_url-xP2ngzoi.js";import"./providerConfig-CULHvVzb.js";import"./Modal-Ds-3kfE8.js";import"./Drawer-Hm2Pb34R.js";import"./Trans-ctdj3yt3.js";import"./Input-upQwBEwQ.js";import"./style-BxTkysqP.js";import"./TextArea-BueNO2bk.js";import"./index-DlQ2NYHX.js";import"./EmojiPicker-C8-hOm5f.js";import"./useTranslation-BHsOfDM0.js";import"./emojiPicker-fXP8_c7a.js";import"./Popover-OW_cN9dT.js";import"./parseTrigger-NsGKSR99.js";import"./useOpenInteractionType-B0CGbEqx.js";import"./Tabs-V6BgPJ9H.js";import"./index-DtneZUvo.js";import"./EllipsisOutlined-DaWNeruF.js";import"./PlusOutlined-1mZvwt0F.js";import"./Dropdown-D9jCtlUN.js";import"./index-DtyaMwUE.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"./DeleteOutlined-DFutYCzo.js";import"./EyeOutlined-DaqTlU1J.js";import"./progress-CUAx977N.js";import"./index-CuTnxV3I.js";import"./index-Ciqn2WuZ.js";import"./general-DOYskArM.js";import"./store-BVltjyBN.js";import"./abortableRequest-CqTkNl3n.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./upload-Dczyb-QY.js";import"./index-0VWuRELK.js";import"./currency-iJxIWo9y.js";import"./object-Cz6o-AEA.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-ChiMQvaN.js";import"./index-nupYNZmn.js";import"./useForm-VLrgfUEK.js";import"./row-BsQCwDmk.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"./index-C-vrAyHP.js";import"./index-DfQYUH17.js";import"./Empty-XQ9oDkc5.js";import"./getPseudoElementBounds-FLOnm5G8.js";import"./index-DyqjIjsb.js";import"./useControlled-BpnhTZoG.js";import"./clientModelRuntime-BqAGPvEX.js";import"./index-B8rphmhS.js";import"./tslib.es6-BWnLUwbd.js";import"./_auth-Cqlss8g1.js";import"./purify.es-r8glNMJW.js";import"./store-Fmjx2HjO.js";import"./selectors-B0huh2rE.js";import"./tools-CMqMCKJi.js";import"./ipc-CNixsLkK.js";import"./index-BrR67f9G.js";import"./store-2BfUexLU.js";import"./index-D1uWC5j0.js";import"./mcp-bmlNDBWs.js";import"./GlobalAgentContextManager-34-Qs1B7.js";import"./index-B1cenqWv.js";import"./Addon-Dcnlt-VM.js";import"./index-C_jL-jeT.js";import"./Input-GUFL8d4e.js";import"./TextArea-DKzrab1C.js";import"./LeftOutlined-UeqPNbIG.js";const je=n.createContext(null),qe=n.memo(({children:r,config:t})=>e.jsx(je,{value:t,children:r})),G=()=>{const r=n.use(je);if(!r)throw new Error("useUserDetailContext must be used within UserDetailProvider");return r},Oe=n.memo(({userId:r})=>{const{t}=P("discover"),{isAuthenticated:l,signIn:d,session:f}=W(),[m,b]=n.useState(!1),x=_(c=>c.useFollowStatus),a=_(c=>c.follow),p=_(c=>c.unfollow);f?.accessToken&&ke.setAccessToken(f.accessToken);const{data:g,mutate:i}=x(r),u=g?.isFollowing??!1,y=async()=>{if(!l){await d();return}b(!0);try{u?await p(r):await a(r),await i()}catch(c){console.error("Follow action failed:",c)}finally{b(!1)}};return e.jsx(V,{loading:m,shape:"round",size:"large",type:u?"default":"primary",style:{fontWeight:500,minWidth:120},onClick:y,children:t(u?"user.unfollow":"user.follow")})}),Re=n.memo(()=>{const{t:r}=P("discover"),{user:t}=G(),l=t.followingCount??0,d=t.followersCount??0;return e.jsxs(o,{horizontal:!0,align:"center",gap:16,children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(S,{style:{fontWeight:600},children:l}),e.jsx(S,{type:"secondary",children:r("user.following")})]}),e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(S,{style:{fontWeight:600},children:d}),e.jsx(S,{type:"secondary",children:r("user.followers")})]})]})}),E=Q(({css:r,cssVar:t})=>({banner:r`
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;

    width: 100%;
    height: 160px;
    padding: 16px;

    ${X.sm} {
      position: relative;

      width: calc(100% + 32px);
      height: 120px;
      margin-block: -16px 0;
      margin-inline: -16px;
    }

    @media (width <= 1720px) {
      height: 144px;
      padding: 0;
    }
  `,bannerAvatar:r`
    filter: blur(100px);
  `,bannerInner:r`
    position: relative;

    overflow: hidden;

    width: 100%;
    height: 100%;
    border-radius: ${t.borderRadiusLG};

    background: ${t.colorFillTertiary};

    @media (width <= 1720px) {
      border-radius: 0;
    }
  `,button:r`
    position: absolute;
    inset-block-end: -16px;
    inset-inline-end: 16px;
  `,placeholder:r`
    position: relative;
    width: 100%;
    height: 64px;
    min-height: 64px;

    ${X.sm} {
      display: none;
    }
  `})),be=n.memo(({avatar:r,bannerUrl:t})=>{const l=t||r,d=!t&&!!r;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:E.banner,children:e.jsx(Ce,{className:E.bannerInner,children:l&&e.jsx("div",{className:d?E.bannerAvatar:void 0,style:{backgroundImage:`url(${l})`,backgroundPosition:"center",backgroundSize:"cover",height:"100%",width:"100%"}})})}),e.jsx("div",{className:E.placeholder})]})}),We=n.memo(()=>{const{t:r}=P("discover"),{user:t,isOwner:l,onEditProfile:d}=G(),f=t.displayName||t.userName||t.namespace,m=t.userName||t.namespace,b=n.useMemo(()=>{if(t.avatarUrl)return t.avatarUrl.startsWith("/")?`${window.location.origin}${t.avatarUrl}`:t.avatarUrl},[t.avatarUrl]),x=n.useMemo(()=>t.bannerUrl?t.bannerUrl.startsWith("/")?`${window.location.origin}${t.bannerUrl}`:t.bannerUrl:null,[t.bannerUrl]);return e.jsxs(e.Fragment,{children:[e.jsx(be,{avatar:b,bannerUrl:x}),e.jsxs(o,{gap:16,children:[e.jsx(Y,{avatar:b,shape:"square",size:64,style:{boxShadow:`0 0 0 4px ${ee.colorBgContainer}`,flexShrink:0}}),e.jsxs(o,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",children:[e.jsxs(o,{gap:4,style:{overflow:"hidden"},children:[e.jsx(S,{ellipsis:!0,as:"h1",fontSize:24,style:{margin:0},weight:"bold",children:f}),e.jsxs(S,{ellipsis:!0,fontSize:12,type:"secondary",children:["@",m]})]}),l?d&&e.jsx(V,{shape:"round",onClick:()=>d(),children:r("user.editProfile")}):e.jsx(Oe,{userId:t.id})]}),e.jsx(Re,{}),t.description&&e.jsx(S,{as:"p",children:t.description}),e.jsx(H,{children:e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[t.socialLinks?.github&&e.jsx(F,{title:`@${t.socialLinks?.github}`,children:e.jsx("a",{href:`https://github.com/${t?.socialLinks?.github}`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(O,{icon:e.jsx(Ne,{size:16}),size:20,variant:"outlined"})})}),t.socialLinks?.twitter&&e.jsx(F,{title:`@${t.socialLinks?.twitter}`,children:e.jsx("a",{href:`https://twitter.com/${t?.socialLinks?.twitter}`,rel:"noopener noreferrer",target:"_blank",children:e.jsx(O,{icon:e.jsx(Pe,{size:16}),size:20,variant:"outlined"})})}),t.socialLinks?.website&&e.jsx(F,{title:t.socialLinks?.website,children:e.jsx("a",{href:t?.socialLinks?.website,rel:"noopener noreferrer",target:"_blank",children:e.jsx(O,{icon:Fe,size:20,variant:"outlined"})})})]})})]})]})}),ye=n.memo(({value:r,onChange:t})=>{const{t:l}=P("discover"),d=[{label:l("user.statusFilter.published"),value:"published"},{label:l("user.statusFilter.unpublished"),value:"unpublished"},{label:l("user.statusFilter.deprecated"),value:"deprecated"},{label:l("user.statusFilter.archived"),value:"archived"},{label:l("user.statusFilter.forked"),value:"forked"},{label:l("user.statusFilter.favorite"),value:"favorite"}];return e.jsx(Ae,{options:d,style:{minWidth:120},value:r,onChange:t})}),Qe=r=>{switch(r){case"published":return"green";case"unpublished":return"orange";case"deprecated":return"red";case"archived":return"default";default:return"default"}},N=Q(({css:r,cssVar:t})=>({author:r`
      color: ${t.colorTextDescription};
    `,desc:r`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:r`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,moreButton:r`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `,secondaryDesc:r`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,statTag:r`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `,title:r`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `,wrapper:r`
      &:hover .more-button {
        opacity: 1;
      }
    `})),He=n.memo(({avatar:r,backgroundColor:t,title:l,description:d,createdAt:f,category:m,tokenUsage:b,forkCount:x,status:a,identifier:p,isValidated:g})=>{const{t:i}=P(["discover","setting"]),u=K(),{message:y}=te.useApp(),{isOwner:c,onStatusChange:j}=G(),[,k]=n.useState(!1),s=Se(A=>A.createAgent),h=_e(A=>A.refreshAgentList),w=ge.stringifyUrl({query:{source:"new"},url:D("/community/agent",p)},{skipNull:!0}),C=a==="published",T=n.useCallback(()=>{window.open(D("/community/agent",p),"_blank")},[p]),M=n.useCallback(async()=>{k(!0);try{const A=await $e.getAgentByMarketIdentifier(p);if(A)u(D("/agent",A,"profile"));else{const z=await Ee.getAssistantDetail({identifier:p,source:"new"});if(!z){y.error(i("setting:myAgents.errors.fetchFailed"));return}const J=await s({config:{...z.config,avatar:z.avatar,backgroundColor:z.backgroundColor,description:z.description,editorData:z.editorData,marketIdentifier:p,tags:z.tags,title:z.title}});await h(),J.agentId&&u(D("/agent",J.agentId,"profile"))}}catch(A){console.error("[UserAgentCard] handleEdit error:",A),y.error(i("setting:myAgents.errors.editFailed"))}finally{k(!1)}},[p,u,s,h,y,i]),B=n.useCallback(A=>{j?.(p,A)},[p,j]),q=c?[{icon:e.jsx(v,{icon:Le}),key:"viewDetail",label:i("setting:myAgents.actions.viewDetail"),onClick:T},{icon:e.jsx(v,{icon:ne}),key:"edit",label:i("setting:myAgents.actions.edit"),onClick:M},{type:"divider"},{icon:e.jsx(v,{icon:C?oe:ae}),key:"togglePublish",label:i(C?"setting:myAgents.actions.unpublish":"setting:myAgents.actions.publish"),onClick:()=>B(C?"unpublish":"publish")},{danger:!0,icon:e.jsx(v,{icon:ie}),key:"deprecate",label:i("setting:myAgents.actions.deprecate"),onClick:()=>B("deprecate")}]:[];return e.jsxs(pe,{clickable:!0,className:N.wrapper,height:"100%",variant:"outlined",width:"100%",style:{cursor:"pointer",overflow:"hidden",position:"relative"},onClick:()=>u(w),children:[c&&e.jsx("div",{onClick:R,children:e.jsx(he,{items:q,children:e.jsx("div",{className:re("more-button",N.moreButton),children:e.jsx(v,{icon:le,size:16,style:{cursor:"pointer"}})})})}),e.jsx(o,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:e.jsxs(o,{horizontal:!0,gap:12,style:{overflow:"hidden"},children:[e.jsx(Y,{avatar:r,background:t||"transparent",shape:"square",size:40,style:{flex:"none"}}),e.jsx(o,{flex:1,gap:2,style:{overflow:"hidden"},children:e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(se,{style:{color:"inherit",flex:1,overflow:"hidden"},to:w,onClick:A=>A.stopPropagation(),children:e.jsx(S,{ellipsis:!0,as:"h3",className:N.title,style:{flex:1},children:l})}),g===!1?e.jsx($,{color:"orange",style:{flexShrink:0,margin:0},children:i("assistant.underReview",{defaultValue:"Under Review"})}):c&&a&&e.jsx($,{color:Qe(a),style:{flexShrink:0,margin:0},children:i(`setting:myAgents.status.${a}`)})]})})]})}),e.jsxs(o,{flex:1,gap:12,paddingInline:16,children:[e.jsx(S,{as:"p",className:N.desc,ellipsis:{rows:3},children:d}),e.jsx(H,{children:e.jsxs(o,{horizontal:!0,align:"center",gap:4,children:[e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:i("assistants.tokenUsage"),children:e.jsx($,{className:N.statTag,icon:e.jsx(v,{icon:De}),children:I(b)})}),!!(x&&x>0)&&e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:i("fork.forksCount",{count:x}),children:e.jsx($,{className:N.statTag,icon:e.jsx(v,{icon:ce}),children:I(x)})})]})})]}),e.jsx(o,{horizontal:!0,align:"center",className:N.footer,justify:"space-between",padding:16,children:e.jsxs(o,{horizontal:!0,align:"center",className:N.secondaryDesc,justify:"space-between",children:[e.jsxs(o,{horizontal:!0,align:"center",gap:4,children:[e.jsx(v,{icon:ue,size:14}),e.jsx(me,{className:N.secondaryDesc,date:f})]}),m&&i(`category.assistant.${m}`)]})})]})}),Ke=n.memo(({rows:r=4,pageSize:t=8})=>{const{t:l}=P("discover"),{agents:d,agentCount:f,forkedAgents:m=[],favoriteAgents:b=[],isOwner:x}=G(),[a,p]=n.useState(1),[g,i]=n.useState("published"),[u,y]=n.useState(""),c=n.useMemo(()=>{let s=[...d];if(g==="forked"?s=m:g==="favorite"?s=b:s=s.filter(h=>h.status===g),u.trim()){const h=u.toLowerCase();s=s.filter(w=>{const C=w?.title?.toLowerCase()||"",T=w?.description?.toLowerCase()||"";return C.includes(h)||T.includes(h)})}return s},[d,m,g,u]),j=n.useMemo(()=>{const s=(a-1)*t;return c.slice(s,s+t)},[c,a,t]);if(n.useMemo(()=>{p(1)},[g,u]),d.length===0&&m.length===0)return e.jsx(Be,{});const k=c.length>t;return e.jsxs(o,{gap:16,children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(S,{fontSize:16,weight:500,children:l("user.publishedAgents")}),f>0&&e.jsx($,{children:c.length})]}),x&&e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(xe.Search,{allowClear:!0,placeholder:l("user.searchPlaceholder"),style:{width:200},value:u,onChange:s=>y(s.target.value)}),e.jsx(ye,{value:g,onChange:s=>i(s)})]})]}),e.jsx(de,{rows:r,width:"100%",children:j.map((s,h)=>e.jsx(He,{...s},s.identifier||h))}),k&&e.jsx(o,{align:"center",justify:"center",children:e.jsx(fe,{current:a,pageSize:t,showSizeChanger:!1,total:c.length,onChange:s=>p(s)})})]})}),Ye=r=>{switch(r){case"published":return"green";case"unpublished":return"orange";case"deprecated":return"red";case"archived":return"default";default:return"default"}},U=Q(({css:r,cssVar:t})=>({desc:r`
      flex: 1;
      margin: 0 !important;
      color: ${t.colorTextSecondary};
    `,footer:r`
      margin-block-start: 16px;
      border-block-start: 1px dashed ${t.colorBorder};
      background: ${t.colorBgContainer};
    `,moreButton:r`
      position: absolute;
      z-index: 10;
      inset-block-start: 12px;
      inset-inline-end: 12px;

      opacity: 0;

      transition: opacity 0.2s;
    `,secondaryDesc:r`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,statTag:r`
      border-radius: 4px;

      font-family: ${t.fontFamilyCode};
      font-size: 11px;
      color: ${t.colorTextSecondary};

      background: ${t.colorFillTertiary};
    `,title:r`
      margin: 0 !important;
      font-size: 16px !important;
      font-weight: 500 !important;

      &:hover {
        color: ${t.colorLink};
      }
    `,wrapper:r`
      &:hover .more-button {
        opacity: 1;
      }
    `})),Je=n.memo(({avatar:r,title:t,description:l,createdAt:d,category:f,forkCount:m,installCount:b,identifier:x,memberCount:a,status:p,isValidated:g})=>{const{t:i}=P(["discover","setting"]),u=K(),{isOwner:y,onStatusChange:c}=G(),j=ge.stringifyUrl({query:{source:"new"},url:D("/community/group_agent",x)},{skipNull:!0}),k=p==="published",s=n.useCallback(()=>{u(j)},[j,u]),h=n.useCallback(()=>{u(D("/group",x,"profile"))},[x,u]),w=n.useCallback(T=>{c?.(x,T,"group")},[x,c]),C=y?[{icon:e.jsx(v,{icon:ne}),key:"edit",label:i("setting:myAgents.actions.edit"),onClick:h},{type:"divider"},{icon:e.jsx(v,{icon:k?oe:ae}),key:"togglePublish",label:i(k?"setting:myAgents.actions.unpublish":"setting:myAgents.actions.publish"),onClick:()=>w(k?"unpublish":"publish")},{danger:!0,icon:e.jsx(v,{icon:ie}),key:"deprecate",label:i("setting:myAgents.actions.deprecate"),onClick:()=>w("deprecate")}]:[];return e.jsxs(pe,{clickable:!0,className:U.wrapper,height:"100%",variant:"outlined",width:"100%",style:{cursor:"pointer",overflow:"hidden",position:"relative"},onClick:s,children:[y&&e.jsx("div",{onClick:R,children:e.jsx(he,{items:C,children:e.jsx("div",{className:re("more-button",U.moreButton),children:e.jsx(v,{icon:le,size:16,style:{cursor:"pointer"}})})})}),e.jsx(o,{horizontal:!0,align:"flex-start",gap:16,justify:"space-between",padding:16,width:"100%",children:e.jsxs(o,{horizontal:!0,gap:12,style:{overflow:"hidden"},children:[e.jsx(Y,{avatar:r,shape:"square",size:40,style:{flex:"none"}}),e.jsx(o,{flex:1,gap:2,style:{overflow:"hidden"},children:e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(se,{style:{color:"inherit",flex:1,overflow:"hidden"},to:j,onClick:R,children:e.jsx(S,{ellipsis:!0,as:"h3",className:U.title,style:{flex:1},children:t})}),g===!1?e.jsx($,{color:"orange",style:{flexShrink:0,margin:0},children:i("groupAgents.underReview",{defaultValue:"Under Review"})}):y&&p&&e.jsx($,{color:Ye(p),style:{flexShrink:0,margin:0},children:i(`setting:myAgents.status.${p}`)})]})})]})}),e.jsxs(o,{flex:1,gap:12,paddingInline:16,children:[e.jsx(S,{as:"p",className:U.desc,ellipsis:{rows:3},children:l}),e.jsx(H,{children:e.jsxs(o,{horizontal:!0,align:"center",gap:4,children:[a!==void 0&&a>0&&e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:i("groupAgents.memberCount",{defaultValue:"Members"}),children:e.jsx($,{className:U.statTag,icon:e.jsx(v,{icon:Ge}),children:I(a)})}),!!(m&&m>0)&&e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:i("fork.forksCount",{count:m}),children:e.jsx($,{className:U.statTag,icon:e.jsx(v,{icon:ce}),children:I(m)})}),b!==void 0&&b>0&&e.jsx(F,{placement:"top",styles:{root:{pointerEvents:"none"}},title:i("groupAgents.downloads",{defaultValue:"Downloads"}),children:e.jsx($,{className:U.statTag,icon:e.jsx(v,{icon:Ie}),children:I(b)})})]})})]}),e.jsx(o,{horizontal:!0,align:"center",className:U.footer,justify:"space-between",padding:16,children:e.jsxs(o,{horizontal:!0,align:"center",className:U.secondaryDesc,justify:"space-between",children:[e.jsxs(o,{horizontal:!0,align:"center",gap:4,children:[e.jsx(v,{icon:ue,size:14}),e.jsx(me,{className:U.secondaryDesc,date:d})]}),f&&i(`category.groupAgent.${f}`,{defaultValue:f})]})})]})}),Xe=n.memo(({rows:r=4,pageSize:t=8})=>{const{t:l}=P("discover"),{agentGroups:d=[],groupCount:f,forkedAgentGroups:m=[],favoriteAgentGroups:b=[],isOwner:x}=G(),[a,p]=n.useState(1),[g,i]=n.useState("published"),[u,y]=n.useState(""),c=n.useMemo(()=>{let s=[...d];if(g==="forked"?s=m:g==="favorite"?s=b:s=s.filter(h=>h.status===g),u.trim()){const h=u.toLowerCase();s=s.filter(w=>{const C=w?.title?.toLowerCase()||"",T=w?.description?.toLowerCase()||"";return C.includes(h)||T.includes(h)})}return s},[d,m,g,u]),j=n.useMemo(()=>{const s=(a-1)*t;return c.slice(s,s+t)},[c,a,t]);if(n.useMemo(()=>{p(1)},[g,u]),d.length===0&&m.length===0)return null;const k=c.length>t;return e.jsxs(o,{gap:16,children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(S,{fontSize:16,weight:500,children:l("user.publishedGroups",{defaultValue:"创作的群组"})}),f>0&&e.jsx($,{children:c.length})]}),x&&e.jsxs(o,{horizontal:!0,align:"center",gap:8,children:[e.jsx(xe.Search,{allowClear:!0,placeholder:l("user.searchPlaceholder"),style:{width:200},value:u,onChange:s=>y(s.target.value)}),e.jsx(ye,{value:g,onChange:s=>i(s)})]})]}),e.jsx(de,{rows:r,width:"100%",children:j.map((s,h)=>e.jsx(Je,{...s},s.identifier||h))}),k&&e.jsx(o,{align:"center",justify:"center",children:e.jsx(fe,{current:a,pageSize:t,showSizeChanger:!1,total:c.length,onChange:s=>p(s)})})]})}),Ze=n.memo(()=>e.jsxs(o,{gap:32,children:[e.jsx(Ke,{}),e.jsx(Xe,{})]})),Ve=({onMutate:r}={})=>{const{t}=P("setting"),{message:l,modal:d}=te.useApp(),{session:f}=W(),m=ze(Ue.enableMarketTrustedClient);return{handleStatusChange:n.useCallback(async(x,a,p="agent")=>{if(!m&&!f?.accessToken){l.error(t("myAgents.errors.notAuthenticated"));return}const g=`${p}-status-${a}`,i=t(`myAgents.actions.${a}Loading`),u=t(`myAgents.actions.${a}Success`),y=t(`myAgents.actions.${a}Error`);async function c(j,k,s){try{if(l.loading({content:i,key:g}),L.setAccessToken(f.accessToken),s==="group")switch(k){case"publish":{await L.publishAgentGroup(j);break}case"unpublish":{await L.unpublishAgentGroup(j);break}case"deprecate":{await L.deprecateAgentGroup(j);break}}else switch(k){case"publish":{await L.publishAgent(j);break}case"unpublish":{await L.unpublishAgent(j);break}case"deprecate":{await L.deprecateAgent(j);break}}l.success({content:u,key:g}),r?.()}catch(h){console.error(`[useUserDetail] ${k} ${s} error:`,h),l.error({content:`${y}: ${h instanceof Error?h.message:"Unknown error"}`,key:g})}}if(a==="deprecate"){d.confirm({cancelText:t("myAgents.actions.cancel"),content:t("myAgents.actions.deprecateConfirmContent"),okButtonProps:{danger:!0},okText:t("myAgents.actions.confirmDeprecate"),onOk:async()=>{await c(x,a,p)},title:t("myAgents.actions.deprecateConfirmTitle")});return}await c(x,a,p)},[m,f?.accessToken,l,d,t,r])}},et=n.memo(()=>e.jsxs(o,{gap:24,width:"100%",children:[e.jsx(be,{}),e.jsxs(o,{gap:16,children:[e.jsx(Z.Avatar,{shape:"square",size:64,style:{boxShadow:`0 0 0 4px ${ee.colorBgContainer}`,flexShrink:0}}),e.jsx(Z,{paragraph:{rows:1}})]}),e.jsx(Me,{length:4,rows:4})]})),tt=n.memo(({mobile:r})=>{const t=Te(),l=decodeURIComponent(t.slug??""),d=K(),{getCurrentUserInfo:f,isAuthenticated:m,openProfileSetup:b}=W(),x=_(s=>s.useUserProfile),{data:a,isLoading:p,mutate:g}=x({username:l}),i=f(),{data:u}=we(i?.sub),y=m&&!!i&&a?.user?.namespace===u?.namespace,{handleStatusChange:c}=Ve({onMutate:g}),j=n.useCallback(s=>{const h=a?.user?.userName||a?.user?.namespace;b(w=>{s?.(w),g();const C=w.userName||w.namespace;C&&C!==h&&d(`/community/user/${C}`,{replace:!0})})},[a?.user?.userName,a?.user?.namespace,b,d,g]),k=n.useMemo(()=>{if(!a||!a.user)return null;const{user:s,agents:h,agentGroups:w,forkedAgents:C,forkedAgentGroups:T,favoriteAgents:M,favoriteAgentGroups:B}=a,q=h.reduce((A,z)=>A+(z.installCount||0),0);return{agentCount:h.length,agentGroups:w||[],agents:h,favoriteAgentGroups:B||[],favoriteAgents:M||[],forkedAgentGroups:T||[],forkedAgents:C||[],groupCount:w?.length||0,isOwner:y,mobile:r,onEditProfile:j,onStatusChange:y?c:void 0,totalInstalls:q,user:s}},[a,y,r,j,c]);return p?e.jsx(et,{}):k?e.jsxs(qe,{config:k,children:[e.jsx(We,{}),e.jsx(Ze,{})]}):e.jsx(ve,{})}),Br=n.memo(()=>e.jsx(tt,{mobile:!0}));export{Br as MobileUserDetailPage,tt as default};
