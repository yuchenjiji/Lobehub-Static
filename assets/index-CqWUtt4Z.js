import{j as e}from"../vendor/vendor-motion-ksfQGfvU.js";import{j as C,C as k,I as P,m as N,y as R,bU as Z,F as u,h as z,az as ee,a9 as G,T as F,bq as te,O as re,ao as oe,B as se,l as ie}from"./index-BTYm_psc.js";import{r as a}from"../vendor/vendor-emotion-D8kPrniB.js";import{N as ne}from"./index-Cdr-3tLV.js";import{W as ae}from"./index-BZoviJvp.js";import{W as ce}from"./WideScreenButton-D363SbyO.js";import{u as L}from"./useQueryParam-BkhxdwN-.js";import{u as x,g as A,b as le,c as de}from"./hooks-Douept8x.js";import{u as me}from"./index-BsKVN9Fy.js";import{B as S}from"./Block-CzvG4Myp.js";import{M as pe}from"./Markdown-D5Y6P-ze.js";import{A as v}from"./asyncTask-Deq5sCIJ.js";import{d as ue}from"./downloadFile-DYbfnmZ_.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./providerConfig-CULHvVzb.js";import{l as he}from"./index-BBk0XYR7.js";import{s as W,A as V,E as ge}from"./ElapsedTime-BYbm7Ttv.js";import{d3 as fe,aO as xe,ch as ye}from"../vendor/vendor-icons-UxbXHH06.js";import{P as je}from"./progress-LU_hV_iI.js";import{S as we}from"./index-BLXBbZqI.js";import{I as _}from"./index-DlS_I8gG.js";import{M as ve}from"./index-njnTDT7C.js";import{D as ke}from"./index-DdShcdJZ.js";import{T as Be}from"./TextArea-B0eAnq5_.js";import{l as Ce}from"./loginRequiredNotification-2YIO86ad.js";import{C as Se}from"./ChatInput-D5505zSQ.js";import{S as w}from"./index-Brfh3dbY.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"./ToggleLeftPanelButton-DHKeE9Nv.js";import"./generationBatch-DiTgvUGL.js";import"./store-CDs0Anux.js";import"./selectors-fKqCsZto.js";import"./index-CBFoF9CZ.js";import"./SiGithub-CcpD0QYC.js";import"./SiX-BdbMrv1x.js";import"./store-Cus1iPrP.js";import"./abortableRequest-CqTkNl3n.js";import"./upload-C0bB3V3X.js";import"./_url-HpanO-dJ.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-BuG2X0ZN.js";import"./clientModelRuntime-DOdWuwvf.js";import"./index-lf7D-6Pw.js";import"./tslib.es6-BWnLUwbd.js";import"./_auth-DUxC03Mn.js";import"./purify.es-r8glNMJW.js";import"./tools-DoBBVbea.js";import"./ipc-CNixsLkK.js";import"./discover-B1CC9PtN.js";import"./general-BFucUHLn.js";import"./object-Cz6o-AEA.js";import"./index-QPUT0VB3.js";import"./store-Cy7-zYG5.js";import"./index-BRZK_jYR.js";import"./mcp-bmlNDBWs.js";import"./GlobalAgentContextManager-CYAiW6O1.js";import"./index-F4b1vKi5.js";import"./Snippet-C9a4sdJ7.js";import"./Spotlight-CyHzcFn1.js";import"./useTranslation-CuvK4m8S.js";import"./image-nnCaCTxV.js";import"./index-BdUGsid-.js";import"./LeftOutlined-Dycim1qq.js";import"./index-wSg9csJd.js";import"./index-CMb12WLx.js";import"./index-BKs8zWty.js";import"./index-CHdO2sie.js";import"./index-BGdnojRv.js";import"./index-DA1zR2eM.js";import"./katex-C-M49wc6.js";import"./ScrollShadow-Bzml48OW.js";import"./index-CMdw2KTq.js";import"./index-BjfhIxPu.js";import"./currency-iJxIWo9y.js";import"./ActionIconGroup-Ds99R-4T.js";import"./DropdownMenu-B0MwWAFZ.js";import"./getPseudoElementBounds-Bx-pPxu3.js";import"./useOpenInteractionType-BSGRk0IV.js";import"./index-B__XFIr3.js";import"./parseTrigger-Cz5ufc-i.js";import"./useControlled-BpnhTZoG.js";import"./usePlatform-CCgVNL1u.js";import"./index-BXTuOr1p.js";import"./index-DVs0c_VD.js";import"./index-CJlem7yu.js";import"./Text-g1fr1el2.js";import"./useFillId-DV6h2AKm.js";import"./index-D5aWJskb.js";import"./index-CIZpB9an.js";import"./index-B1IwpZKJ.js";import"./style-DjFM5MBF.js";import"./index-Xifu1Le5.js";import"./index-B4Hvwfb1.js";import"./Addon-D4htfwbH.js";import"./index-L0S29iN_.js";import"./Input-Bdrgk0hH.js";import"./EyeOutlined-i2LDjxZj.js";import"./TextArea-DMrmu7l-.js";import"./index-Dq_SzPY7.js";import"./index-u27hoPym.js";import"./useSize-B6bhL4Vm.js";const Te=t=>t.isCreating,be={isCreating:Te},Y=a.memo(({generation:t,aspectRatio:r,onDelete:s,onCopyError:c})=>{const{t:l}=C("video"),{t:n}=C("error"),h=a.useMemo(()=>{if(!t.task.error)return"";const o=t.task.error,i=typeof o.body=="string"?o.body:o.body?.detail;if(i&&Object.values(he).includes(i)){const d=`response.${i}`,y=n(d);if(y===d||y.startsWith("response.")){const j=n(i);return j!==i?j:i}return y}return i||o.name||"Unknown error"},[t.task.error,n]);return e.jsxs(S,{align:"center",className:W.placeholderContainer,justify:"center",padding:16,variant:"filled",style:{aspectRatio:r?.includes(":")?r.replace(":","/"):"16/9",cursor:"pointer",width:"100%"},onClick:c,children:[e.jsxs(k,{gap:8,children:[e.jsx(P,{color:N.colorTextDescription,icon:fe,size:24}),e.jsx(R,{strong:!0,type:"secondary",children:l("generation.status.failed")}),t.task.error&&e.jsx(R,{code:!0,ellipsis:{rows:2},fontSize:10,title:l("generation.actions.copyError"),type:"secondary",style:{wordBreak:"break-all"},children:h})]}),e.jsx(V,{onDelete:s})]})});Y.displayName="VideoErrorItem";const Re=18e4,Ie=t=>`generation_start_time_${t}`,Ee=(t,r,s)=>{const[c,l]=a.useState(null);return a.useEffect(()=>{if(!s){l(null);return}const n=Ie(t),h=(()=>{const m=sessionStorage.getItem(n);if(m)return Number(m);const d=Date.now();return sessionStorage.setItem(n,d.toString()),d})(),o=()=>{const m=Date.now()-h,d=Math.min(Math.round(m/r*100),99);l(d)};o();const i=setInterval(o,1e3);return()=>clearInterval(i)},[s,r,t]),c},U=a.memo(({generation:t,aspectRatio:r,avgLatencyMs:s})=>{const c=s&&s>0?s:Re,l=t.task.status===v.Processing||t.task.status===v.Pending,n=Ee(t.id,c,l);return e.jsx(S,{align:"center",justify:"center",variant:"filled",style:{aspectRatio:r?.includes(":")?r.replace(":","/"):"16/9"},children:e.jsxs(k,{gap:8,children:[n!==null?e.jsx(je,{percent:n,size:48,type:"circle"}):e.jsx(we,{indicator:e.jsx(Z,{spin:!0})}),n===99&&e.jsx(ge,{generationId:t.id,isActive:l})]})})});U.displayName="VideoLoadingItem";const b=z(({css:t,cssVar:r})=>({frameEnd:t`
    position: relative;
    transform: rotate(3deg);

    flex-shrink: 0;

    width: 64px;
    height: 64px;

    transition: transform 0.2s ease;

    &::before {
      content: '';

      position: absolute;
      z-index: -1;
      inset: -4px;

      border: 1px solid ${r.colorBorder};
      border-radius: ${r.borderRadius}px;

      background: ${r.colorBgContainer};
      box-shadow: 0 2px 8px ${r.colorBgMask};
    }

    &:hover {
      transform: rotate(1deg) scale(1.05);
    }
  `,frameInner:t`
    overflow: hidden;

    width: 100%;
    height: 100%;
    border-radius: ${r.borderRadiusSM}px;

    background: ${r.colorBgLayout};
  `,frameStart:t`
    position: relative;
    transform: rotate(-3deg);

    flex-shrink: 0;

    width: 64px;
    height: 64px;

    transition: transform 0.2s ease;

    &::before {
      content: '';

      position: absolute;
      z-index: -1;
      inset: -4px;

      border: 1px solid ${r.colorBorder};
      border-radius: ${r.borderRadius}px;

      background: ${r.colorBgContainer};
      box-shadow: 0 2px 8px ${r.colorBgMask};
    }

    &:hover {
      transform: rotate(-1deg) scale(1.05);
    }
  `})),H=a.memo(({imageUrl:t,endImageUrl:r})=>!t&&!r?null:e.jsxs(u,{horizontal:!0,align:"center",gap:12,children:[t&&e.jsx("div",{className:b.frameStart,children:e.jsx("div",{className:b.frameInner,children:e.jsx(_,{alt:"Start frame",preview:{src:t},style:{height:"100%",width:"100%"},url:t})})}),r&&e.jsx("div",{className:b.frameEnd,children:e.jsx("div",{className:b.frameInner,children:e.jsx(_,{alt:"End frame",preview:{src:r},style:{height:"100%",width:"100%"},url:r})})})]}));H.displayName="VideoReferenceFrames";const K=a.memo(({generation:t,onDelete:r,onDownload:s})=>{const c=t.asset;return e.jsxs(S,{className:W.imageContainer,style:{width:"fit-content"},variant:"filled",children:[e.jsx("video",{controls:!0,loop:!0,playsInline:!0,poster:c.coverUrl||c.thumbnailUrl,src:c.url,style:{display:"block",maxHeight:"50vh",maxWidth:"100%"}}),e.jsx(V,{showDownload:!0,onDelete:r,onDownload:s})]})});K.displayName="VideoSuccessItem";const O=a.memo(({batch:t})=>{const{message:r}=ee.useApp(),{t:s}=C("video"),c=x(p=>p.useCheckGenerationStatus),l=x(p=>p.removeGeneration),n=x(p=>p.activeGenerationTopicId),h=a.useMemo(()=>G(t.createdAt).format("YYYY-MM-DD HH:mm:ss"),[t.createdAt]),o=t.generations[0],i=o?.task.status===v.Success||o?.task.status===v.Error;c(o?.id??"",o?.task.id??"",n,!i);const m=a.useCallback(async()=>{if(o)try{await l(o.id)}catch(p){console.error("Failed to delete generation:",p)}},[l,o?.id]),d=a.useCallback(async()=>{if(!o?.asset?.url)return;const p=G(o.createdAt).format("YYYY-MM-DD_HH-mm-ss"),T=`${t.prompt.slice(0,30).trim().replaceAll(/["%*/:<>?\\|]/g,"").replaceAll(/\s+/g,"_")||"Untitled"}_${p}.mp4`;try{await ue(o.asset.url,T,!1)}catch(B){console.error("Failed to download video:",B)}},[o?.asset?.url,o?.createdAt,t.prompt]),y=a.useCallback(async()=>{if(!o?.task.error)return;const p=typeof o.task.error.body=="string"?o.task.error.body:o.task.error.body?.detail||o.task.error.name||"Unknown error";try{await navigator.clipboard.writeText(p),r.success(s("generation.actions.errorCopied"))}catch(f){console.error("Failed to copy error message:",f),r.error(s("generation.actions.errorCopyFailed"))}},[o?.task.error,r,s]),j=a.useMemo(()=>{const p=t.config?.aspectRatio;if(p&&p!=="adaptive")return p;const f=o?.asset;if(f&&f.width&&f.height&&f.width>0&&f.height>0){const I=(T,B)=>B===0?T:I(B,T%B),E=I(f.width,f.height);return`${f.width/E}:${f.height/E}`}},[t.config?.aspectRatio,o?.asset]);if(!o)return null;const g=()=>o.task.status===v.Success&&o.asset?.url?e.jsx(K,{generation:o,onDelete:m,onDownload:d}):o.task.status===v.Error?e.jsx(Y,{aspectRatio:t.config?.aspectRatio,generation:o,onCopyError:y,onDelete:m}):e.jsx(U,{aspectRatio:t.config?.aspectRatio,avgLatencyMs:t.avgLatencyMs,generation:o}),X=t.config?.imageUrl||t.config?.endImageUrl,D=e.jsxs(e.Fragment,{children:[e.jsx(pe,{variant:"chat",children:t.prompt}),e.jsxs(u,{horizontal:!0,gap:4,style:{marginBottom:10},children:[e.jsx(ve,{model:t.model}),t.config?.resolution&&e.jsx(F,{children:t.config.resolution}),j&&e.jsx(F,{children:j})]})]});return e.jsxs(S,{gap:8,variant:"borderless",children:[X?e.jsxs(u,{horizontal:!0,align:"center",gap:16,children:[e.jsx(H,{endImageUrl:t.config?.endImageUrl,imageUrl:t.config?.imageUrl}),e.jsx(u,{flex:1,gap:8,children:D})]}):D,g(),e.jsx(R,{as:"time",fontSize:12,type:"secondary",children:h})]})});O.displayName="VideoGenerationBatchItem";const q=a.memo(()=>{const[t,r]=me(),s=a.useRef(null),c=a.useRef(!0),l=a.useRef(0),n=x(A.currentGenerationBatches),h=(o="smooth")=>{if(!s.current)return;const i=s.current.closest('[style*="overflow"]')||document.documentElement,m=s.current.getBoundingClientRect(),d=i.getBoundingClientRect(),y=i.scrollTop+m.bottom-d.bottom+999;i.scrollTo({behavior:o,top:y})};return a.useEffect(()=>{const i=(n||[]).length,m=l.current;if(i===0){l.current=0;return}if(c.current)h("auto"),c.current=!1;else if(i>m){r(!1);const d=setTimeout(()=>{h("smooth"),r(!0)},50);return()=>clearTimeout(d)}l.current=i},[n,r]),!n||n.length===0?null:e.jsxs(u,{flex:1,style:{overflowY:"auto"},children:[e.jsx(u,{gap:16,ref:t,style:{paddingBottom:48},width:"100%",children:n.map((o,i)=>e.jsxs(a.Fragment,{children:[i!==0&&e.jsx(ke,{dashed:!0,style:{margin:0}}),e.jsx(O,{batch:o},o.id)]},o.id))}),e.jsx("div",{ref:s,style:{height:1}})]})});q.displayName="GenerationFeed";function Ne(){return null}const Ae=()=>{const{t}=C("video");return e.jsxs(k,{horizontal:!0,gap:16,style:{width:"100%"},children:[e.jsx(k,{flex:"none",height:54,width:54,style:{backgroundColor:N.colorText,borderRadius:16},children:e.jsx(P,{color:N.colorBgLayout,icon:xe,size:32})}),e.jsx(R,{as:"h1",style:{margin:0},children:t("config.header.title")})]})},M=z(({css:t,cssVar:r})=>({container:t`
    box-shadow:
      ${r.boxShadowTertiary},
      0 0 0 ${r.colorBgContainer},
      0 32px 0 ${r.colorBgContainer};
  `,container_dark:t`
    box-shadow:
      ${r.boxShadowTertiary},
      0 0 48px 32px ${r.colorBgContainer},
      0 32px 0 ${r.colorBgContainer};
  `})),$=({showTitle:t=!1})=>{const r=te(),{t:s}=C("video"),{value:c,setValue:l}=le("prompt"),n=x(be.isCreating),h=x(g=>g.createVideo),o=re(oe.isLogin),[i,m]=L("prompt"),d=a.useRef(!1),y=async()=>{if(!o){Ce.redirect({timeout:2e3});return}await h()};a.useEffect(()=>{if(i&&!d.current&&o){const g=decodeURIComponent(i);l(g),d.current=!0,m(null),setTimeout(async()=>{await h()},100)}},[i,o,l,m,h]);const j=g=>{g.key==="Enter"&&!g.shiftKey&&!g.nativeEvent.isComposing&&(g.preventDefault(),!n&&c.trim()&&y())};return e.jsxs(u,{gap:32,width:"100%",children:[t&&e.jsx(Ae,{}),e.jsxs(u,{gap:8,children:[e.jsx(Se,{className:ie(M.container,r&&M.container_dark),styles:{body:{padding:8}},children:e.jsxs(u,{horizontal:!0,align:"flex-end",gap:12,height:"100%",width:"100%",children:[e.jsx(Be,{autoSize:{maxRows:6,minRows:3},placeholder:s("config.prompt.placeholder"),value:c,variant:"borderless",style:{borderRadius:0,padding:0},onChange:g=>l(g.target.value),onKeyDown:j}),e.jsx(se,{disabled:!c,icon:ye,loading:n,size:"large",type:"primary",style:{fontWeight:500,height:64,minWidth:64,width:64},title:s(n?"generation.status.generating":"generation.actions.generate"),onClick:y})]})}),e.jsx(Ne,{})]})]})},Q=a.memo(()=>e.jsx(k,{height:"calc(100vh - 180px)",children:e.jsx($,{showTitle:!0})})),J=a.memo(()=>e.jsxs(u,{style:{minHeight:"calc(100vh - 44px)"},children:[e.jsx(S,{variant:"borderless",children:e.jsxs(u,{gap:12,children:[e.jsx(w.Button,{active:!0,style:{height:20,width:"95%"}}),e.jsxs(u,{horizontal:!0,gap:4,style:{marginBottom:10},children:[e.jsx(w.Button,{active:!0,style:{height:22,width:120}}),e.jsx(w.Button,{active:!0,style:{height:22,width:80}}),e.jsx(w.Button,{active:!0,style:{height:22,width:60}})]}),e.jsx(w.Button,{active:!0,style:{aspectRatio:"16/9",height:"auto",width:"100%"}}),e.jsx(w.Button,{active:!0,style:{height:14,width:140}})]})}),e.jsx("div",{style:{flex:1}}),e.jsx(k,{style:{bottom:24,position:"sticky",width:"100%"},children:e.jsx($,{disableAnimation:!0,showTitle:!1})})]}));J.displayName="SkeletonList";const $e=()=>{const t=x(de.activeGenerationTopicId),r=x(n=>n.useFetchGenerationBatches),s=x(A.isCurrentGenerationTopicLoaded);r(t);const c=x(A.currentGenerationBatches),l=c&&c.length>0;return s?l?e.jsxs(e.Fragment,{children:[e.jsx(q,{},t),e.jsx($,{disableAnimation:!0,showTitle:!1})]}):e.jsx(Q,{}):e.jsx(J,{})},De=()=>{const[t]=L("topic"),r=x(s=>s.isCreatingWithNewTopic);return!t||r?e.jsx(Q,{}):e.jsx($e,{})},Ge=a.memo(()=>e.jsxs(e.Fragment,{children:[e.jsx(ne,{right:e.jsx(ce,{})}),e.jsx(u,{height:"100%",style:{overflowY:"auto",position:"relative"},width:"100%",children:e.jsx(ae,{height:"100%",wrapperStyle:{height:"100%"},children:e.jsx(De,{})})})]}));Ge.displayName="DesktopVideoPage";export{Ge as default};
