import{j as e}from"../vendor/vendor-motion--v3N1cMI.js";import{g as C,C as k,I as P,k as N,a2 as R,bB as Z,F as u,f as z,ax as ee,ad as G,T as _,bk as te,v as re,al as oe,B as se,j as ie}from"./index-DgmZNIaB.js";import{r as a}from"../vendor/vendor-emotion-D8kPrniB.js";import{N as ne}from"./index-BHBaNMcZ.js";import{W as ae}from"./index-AnGOZZt_.js";import{W as ce}from"./WideScreenButton-DfiH4NVm.js";import{u as L}from"./useQueryParam-BojC8_q7.js";import{u as x,g as A,b as le,c as de}from"./hooks-DduCkgHf.js";import{u as me}from"./index-BsKVN9Fy.js";import{B as S}from"./Block-DajizTW3.js";import{M as pe}from"./Markdown-TJUkwStj.js";import{A as v}from"./asyncTask-Deq5sCIJ.js";import{d as ue}from"./downloadFile-DYbfnmZ_.js";import"../vendor/vendor-es-toolkit-b6vDTgOQ.js";import"./providerConfig-CULHvVzb.js";import{l as he}from"./index-Crk-7RRS.js";import{s as W,A as V,E as ge}from"./ElapsedTime-B0oIdZq-.js";import{c_ as fe,b7 as xe,cb as ye}from"../vendor/vendor-icons-DA3bMca7.js";import{P as je}from"./progress-Dr_MLeSv.js";import{S as we}from"./index-la9lrC3A.js";import{I as F}from"./index-BswEsENS.js";import{M as ve}from"./index-CzKtA-qQ.js";import{D as ke}from"./index-CANaa6Rt.js";import{T as Be}from"./TextArea-CXVosair.js";import{l as Ce}from"./loginRequiredNotification-BYS8yAH7.js";import{C as Se}from"./ChatInput-Dzf2ECZ7.js";import{S as w}from"./index-cZCHHjsi.js";import"../i18n/i18n-zh-CN-aruUKrGA.js";import"../i18n/i18n-en-US-DEYXbGUp.js";import"./ToggleLeftPanelButton-CcjmjHfy.js";import"./generationBatch-BIe8DnvJ.js";import"./store-D32LeddL.js";import"./selectors-BYGUcqAi.js";import"./index-BEgAIoMp.js";import"./SiGithub-vKMmMmoX.js";import"./SiX-BFNLciQi.js";import"./store-DNPqUhq6.js";import"./upload-CSS5WmEh.js";import"./_url-DaEEDvyc.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-DjN937yh.js";import"./clientModelRuntime-BhDeF7P4.js";import"./index-gtt7znXM.js";import"./tslib.es6-BWnLUwbd.js";import"./_auth-bw-DXrHs.js";import"./purify.es-r8glNMJW.js";import"./tools-BoOINYZn.js";import"./ipc-CNixsLkK.js";import"./discover-BbJ037cO.js";import"./general-B-aBv-kK.js";import"./object-4I4CqElr.js";import"./store-V9jz-vE5.js";import"./index-D8u-na80.js";import"./mcp-bmlNDBWs.js";import"./GlobalAgentContextManager-D9APKRR7.js";import"./index-B4s3gtS8.js";import"./Snippet-CxrGHEZZ.js";import"./Spotlight-OwzPiFwG.js";import"./useTranslation-Bg8umMAV.js";import"./image-nnCaCTxV.js";import"./index-hukXtzXd.js";import"./LeftOutlined-DNvVoWTJ.js";import"./index-Bmfsw1qi.js";import"./index-DgNzT6Qa.js";import"./index-SSl3WFHN.js";import"./index-BOwDcG70.js";import"./index-B4GpmpbP.js";import"./katex-C-M49wc6.js";import"./ScrollShadow-DylR1FOr.js";import"./index-DpThjf5-.js";import"./index-DAVuwEhc.js";import"./currency-iJxIWo9y.js";import"./ActionIconGroup-jOncTdN1.js";import"./DropdownMenu-EgsLu2fq.js";import"./getPseudoElementBounds-BFePzGAT.js";import"./useOpenInteractionType-DmYsIx8S.js";import"./index-CpRRKpf4.js";import"./parseTrigger-7fkEoBIz.js";import"./usePlatform-CIJ_mbqr.js";import"./index-CFDs4sKJ.js";import"./index-CBwc-0iu.js";import"./index-WrEkuwXj.js";import"./Text-D5SgKitX.js";import"./useFillId-W1O-92mO.js";import"./index-CJvCvP9c.js";import"./index-Nttcs32Q.js";import"./index-CmDqsugC.js";import"./style-OH5WesCm.js";import"./index-BgU0IxlJ.js";import"./index-DOWgPz6W.js";import"./Input-5ZuvCSLw.js";import"./index-DAbF17Is.js";import"./EyeOutlined-DxITo3I4.js";import"./index-Dq_SzPY7.js";import"./index-EhbbGvoG.js";import"./useSize-DCiB87oY.js";const Te=t=>t.isCreating,be={isCreating:Te},Y=a.memo(({generation:t,aspectRatio:r,onDelete:s,onCopyError:c})=>{const{t:l}=C("video"),{t:n}=C("error"),h=a.useMemo(()=>{if(!t.task.error)return"";const o=t.task.error,i=typeof o.body=="string"?o.body:o.body?.detail;if(i&&Object.values(he).includes(i)){const d=`response.${i}`,y=n(d);if(y===d||y.startsWith("response.")){const j=n(i);return j!==i?j:i}return y}return i||o.name||"Unknown error"},[t.task.error,n]);return e.jsxs(S,{align:"center",className:W.placeholderContainer,justify:"center",padding:16,variant:"filled",style:{aspectRatio:r?.includes(":")?r.replace(":","/"):"16/9",cursor:"pointer",width:"100%"},onClick:c,children:[e.jsxs(k,{gap:8,children:[e.jsx(P,{color:N.colorTextDescription,icon:fe,size:24}),e.jsx(R,{strong:!0,type:"secondary",children:l("generation.status.failed")}),t.task.error&&e.jsx(R,{code:!0,ellipsis:{rows:2},fontSize:10,title:l("generation.actions.copyError"),type:"secondary",style:{wordBreak:"break-all"},children:h})]}),e.jsx(V,{onDelete:s})]})});Y.displayName="VideoErrorItem";const Re=18e4,Ie=t=>`generation_start_time_${t}`,Ee=(t,r,s)=>{const[c,l]=a.useState(null);return a.useEffect(()=>{if(!s){l(null);return}const n=Ie(t),h=(()=>{const m=sessionStorage.getItem(n);if(m)return Number(m);const d=Date.now();return sessionStorage.setItem(n,d.toString()),d})(),o=()=>{const m=Date.now()-h,d=Math.min(Math.round(m/r*100),99);l(d)};o();const i=setInterval(o,1e3);return()=>clearInterval(i)},[s,r,t]),c},U=a.memo(({generation:t,aspectRatio:r,avgLatencyMs:s})=>{const c=s&&s>0?s:Re,l=t.task.status===v.Processing||t.task.status===v.Pending,n=Ee(t.id,c,l);return e.jsx(S,{align:"center",justify:"center",variant:"filled",style:{aspectRatio:r?.includes(":")?r.replace(":","/"):"16/9"},children:e.jsxs(k,{gap:8,children:[n!==null?e.jsx(je,{percent:n,size:48,type:"circle"}):e.jsx(we,{indicator:e.jsx(Z,{spin:!0})}),n===99&&e.jsx(ge,{generationId:t.id,isActive:l})]})})});U.displayName="VideoLoadingItem";const b=z(({css:t,cssVar:r})=>({frameEnd:t`
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
  `})),H=a.memo(({imageUrl:t,endImageUrl:r})=>!t&&!r?null:e.jsxs(u,{horizontal:!0,align:"center",gap:12,children:[t&&e.jsx("div",{className:b.frameStart,children:e.jsx("div",{className:b.frameInner,children:e.jsx(F,{alt:"Start frame",preview:{src:t},style:{height:"100%",width:"100%"},url:t})})}),r&&e.jsx("div",{className:b.frameEnd,children:e.jsx("div",{className:b.frameInner,children:e.jsx(F,{alt:"End frame",preview:{src:r},style:{height:"100%",width:"100%"},url:r})})})]}));H.displayName="VideoReferenceFrames";const K=a.memo(({generation:t,onDelete:r,onDownload:s})=>{const c=t.asset;return e.jsxs(S,{className:W.imageContainer,style:{width:"fit-content"},variant:"filled",children:[e.jsx("video",{controls:!0,loop:!0,playsInline:!0,poster:c.coverUrl||c.thumbnailUrl,src:c.url,style:{display:"block",maxHeight:"50vh",maxWidth:"100%"}}),e.jsx(V,{showDownload:!0,onDelete:r,onDownload:s})]})});K.displayName="VideoSuccessItem";const O=a.memo(({batch:t})=>{const{message:r}=ee.useApp(),{t:s}=C("video"),c=x(p=>p.useCheckGenerationStatus),l=x(p=>p.removeGeneration),n=x(p=>p.activeGenerationTopicId),h=a.useMemo(()=>G(t.createdAt).format("YYYY-MM-DD HH:mm:ss"),[t.createdAt]),o=t.generations[0],i=o?.task.status===v.Success||o?.task.status===v.Error;c(o?.id??"",o?.task.id??"",n,!i);const m=a.useCallback(async()=>{if(o)try{await l(o.id)}catch(p){console.error("Failed to delete generation:",p)}},[l,o?.id]),d=a.useCallback(async()=>{if(!o?.asset?.url)return;const p=G(o.createdAt).format("YYYY-MM-DD_HH-mm-ss"),T=`${t.prompt.slice(0,30).trim().replaceAll(/["%*/:<>?\\|]/g,"").replaceAll(/\s+/g,"_")||"Untitled"}_${p}.mp4`;try{await ue(o.asset.url,T,!1)}catch(B){console.error("Failed to download video:",B)}},[o?.asset?.url,o?.createdAt,t.prompt]),y=a.useCallback(async()=>{if(!o?.task.error)return;const p=typeof o.task.error.body=="string"?o.task.error.body:o.task.error.body?.detail||o.task.error.name||"Unknown error";try{await navigator.clipboard.writeText(p),r.success(s("generation.actions.errorCopied"))}catch(f){console.error("Failed to copy error message:",f),r.error(s("generation.actions.errorCopyFailed"))}},[o?.task.error,r,s]),j=a.useMemo(()=>{const p=t.config?.aspectRatio;if(p&&p!=="adaptive")return p;const f=o?.asset;if(f&&f.width&&f.height&&f.width>0&&f.height>0){const I=(T,B)=>B===0?T:I(B,T%B),E=I(f.width,f.height);return`${f.width/E}:${f.height/E}`}},[t.config?.aspectRatio,o?.asset]);if(!o)return null;const g=()=>o.task.status===v.Success&&o.asset?.url?e.jsx(K,{generation:o,onDelete:m,onDownload:d}):o.task.status===v.Error?e.jsx(Y,{aspectRatio:t.config?.aspectRatio,generation:o,onCopyError:y,onDelete:m}):e.jsx(U,{aspectRatio:t.config?.aspectRatio,avgLatencyMs:t.avgLatencyMs,generation:o}),X=t.config?.imageUrl||t.config?.endImageUrl,D=e.jsxs(e.Fragment,{children:[e.jsx(pe,{variant:"chat",children:t.prompt}),e.jsxs(u,{horizontal:!0,gap:4,style:{marginBottom:10},children:[e.jsx(ve,{model:t.model}),t.config?.resolution&&e.jsx(_,{children:t.config.resolution}),j&&e.jsx(_,{children:j})]})]});return e.jsxs(S,{gap:8,variant:"borderless",children:[X?e.jsxs(u,{horizontal:!0,align:"center",gap:16,children:[e.jsx(H,{endImageUrl:t.config?.endImageUrl,imageUrl:t.config?.imageUrl}),e.jsx(u,{flex:1,gap:8,children:D})]}):D,g(),e.jsx(R,{as:"time",fontSize:12,type:"secondary",children:h})]})});O.displayName="VideoGenerationBatchItem";const Q=a.memo(()=>{const[t,r]=me(),s=a.useRef(null),c=a.useRef(!0),l=a.useRef(0),n=x(A.currentGenerationBatches),h=(o="smooth")=>{if(!s.current)return;const i=s.current.closest('[style*="overflow"]')||document.documentElement,m=s.current.getBoundingClientRect(),d=i.getBoundingClientRect(),y=i.scrollTop+m.bottom-d.bottom+999;i.scrollTo({behavior:o,top:y})};return a.useEffect(()=>{const i=(n||[]).length,m=l.current;if(i===0){l.current=0;return}if(c.current)h("auto"),c.current=!1;else if(i>m){r(!1);const d=setTimeout(()=>{h("smooth"),r(!0)},50);return()=>clearTimeout(d)}l.current=i},[n,r]),!n||n.length===0?null:e.jsxs(u,{flex:1,style:{overflowY:"auto"},children:[e.jsx(u,{gap:16,ref:t,style:{paddingBottom:48},width:"100%",children:n.map((o,i)=>e.jsxs(a.Fragment,{children:[i!==0&&e.jsx(ke,{dashed:!0,style:{margin:0}}),e.jsx(O,{batch:o},o.id)]},o.id))}),e.jsx("div",{ref:s,style:{height:1}})]})});Q.displayName="GenerationFeed";function Ne(){return null}const Ae=()=>{const{t}=C("video");return e.jsxs(k,{horizontal:!0,gap:16,style:{width:"100%"},children:[e.jsx(k,{flex:"none",height:54,width:54,style:{backgroundColor:N.colorText,borderRadius:16},children:e.jsx(P,{color:N.colorBgLayout,icon:xe,size:32})}),e.jsx(R,{as:"h1",style:{margin:0},children:t("config.header.title")})]})},M=z(({css:t,cssVar:r})=>({container:t`
    box-shadow:
      ${r.boxShadowTertiary},
      0 0 0 ${r.colorBgContainer},
      0 32px 0 ${r.colorBgContainer};
  `,container_dark:t`
    box-shadow:
      ${r.boxShadowTertiary},
      0 0 48px 32px ${r.colorBgContainer},
      0 32px 0 ${r.colorBgContainer};
  `})),$=({showTitle:t=!1})=>{const r=te(),{t:s}=C("video"),{value:c,setValue:l}=le("prompt"),n=x(be.isCreating),h=x(g=>g.createVideo),o=re(oe.isLogin),[i,m]=L("prompt"),d=a.useRef(!1),y=async()=>{if(!o){Ce.redirect({timeout:2e3});return}await h()};a.useEffect(()=>{if(i&&!d.current&&o){const g=decodeURIComponent(i);l(g),d.current=!0,m(null),setTimeout(async()=>{await h()},100)}},[i,o,l,m,h]);const j=g=>{g.key==="Enter"&&!g.shiftKey&&!g.nativeEvent.isComposing&&(g.preventDefault(),!n&&c.trim()&&y())};return e.jsxs(u,{gap:32,width:"100%",children:[t&&e.jsx(Ae,{}),e.jsxs(u,{gap:8,children:[e.jsx(Se,{className:ie(M.container,r&&M.container_dark),styles:{body:{padding:8}},children:e.jsxs(u,{horizontal:!0,align:"flex-end",gap:12,height:"100%",width:"100%",children:[e.jsx(Be,{autoSize:{maxRows:6,minRows:3},placeholder:s("config.prompt.placeholder"),value:c,variant:"borderless",style:{borderRadius:0,padding:0},onChange:g=>l(g.target.value),onKeyDown:j}),e.jsx(se,{disabled:!c,icon:ye,loading:n,size:"large",type:"primary",style:{fontWeight:500,height:64,minWidth:64,width:64},title:s(n?"generation.status.generating":"generation.actions.generate"),onClick:y})]})}),e.jsx(Ne,{})]})]})},q=a.memo(()=>e.jsx(k,{height:"calc(100vh - 180px)",children:e.jsx($,{showTitle:!0})})),J=a.memo(()=>e.jsxs(u,{style:{minHeight:"calc(100vh - 44px)"},children:[e.jsx(S,{variant:"borderless",children:e.jsxs(u,{gap:12,children:[e.jsx(w.Button,{active:!0,style:{height:20,width:"95%"}}),e.jsxs(u,{horizontal:!0,gap:4,style:{marginBottom:10},children:[e.jsx(w.Button,{active:!0,style:{height:22,width:120}}),e.jsx(w.Button,{active:!0,style:{height:22,width:80}}),e.jsx(w.Button,{active:!0,style:{height:22,width:60}})]}),e.jsx(w.Button,{active:!0,style:{aspectRatio:"16/9",height:"auto",width:"100%"}}),e.jsx(w.Button,{active:!0,style:{height:14,width:140}})]})}),e.jsx("div",{style:{flex:1}}),e.jsx(k,{style:{bottom:24,position:"sticky",width:"100%"},children:e.jsx($,{disableAnimation:!0,showTitle:!1})})]}));J.displayName="SkeletonList";const $e=()=>{const t=x(de.activeGenerationTopicId),r=x(n=>n.useFetchGenerationBatches),s=x(A.isCurrentGenerationTopicLoaded);r(t);const c=x(A.currentGenerationBatches),l=c&&c.length>0;return s?l?e.jsxs(e.Fragment,{children:[e.jsx(Q,{},t),e.jsx($,{disableAnimation:!0,showTitle:!1})]}):e.jsx(q,{}):e.jsx(J,{})},De=()=>{const[t]=L("topic"),r=x(s=>s.isCreatingWithNewTopic);return!t||r?e.jsx(q,{}):e.jsx($e,{})},Ge=a.memo(()=>e.jsxs(e.Fragment,{children:[e.jsx(ne,{right:e.jsx(ce,{})}),e.jsx(u,{height:"100%",style:{overflowY:"auto",position:"relative"},width:"100%",children:e.jsx(ae,{height:"100%",wrapperStyle:{height:"100%"},children:e.jsx(De,{})})})]}));Ge.displayName="DesktopVideoPage";export{Ge as default};
