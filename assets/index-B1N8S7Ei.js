const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/hooks-BBWgNK8v.js","assets/index-BzLMjSCA.js","vendor/vendor-motion-D2gXNOxm.js","vendor/vendor-emotion-D8kPrniB.js","i18n/i18n-zh-CN-X4QEO1fZ.js","i18n/i18n-en-US-CeDxYD3m.js","vendor/vendor-es-toolkit-BI0f0n_g.js","vendor/vendor-icons-UxbXHH06.js","assets/providerConfig-CULHvVzb.js","assets/index-HYzoGTHG.css","assets/store-BVltjyBN.js","assets/abortableRequest-CqTkNl3n.js","assets/upload-Dczyb-QY.js","assets/index-0VWuRELK.js","assets/currency-iJxIWo9y.js","assets/object-Cz6o-AEA.js","assets/_url-xP2ngzoi.js","assets/v4-BKrj-4V8.js","assets/useClientDataSWRWithSync-ChiMQvaN.js","assets/index-Ckbm5Z92.js","assets/tools-CMqMCKJi.js"])))=>i.map(i=>d[i]);
import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{r as g}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as O,C as U,F as u,y as C,m,bh as x,I as _,h as $,a2 as F,bj as z}from"./index-BzLMjSCA.js";import{F as W}from"./providerConfig-CULHvVzb.js";import{G as J,a as Z}from"./index-qkAT3QMb.js";import{N as B}from"./index-BHSR-b4N.js";import{u as H,I as M}from"./useNotionImport-6neZysuT.js";import{u as S,D as V}from"./store-BVltjyBN.js";import{u as y}from"./store-CBdPt0cb.js";import{s as q}from"./identifier-DNYzSWMy.js";import{aZ as K,a_ as Q}from"../vendor/vendor-icons-UxbXHH06.js";import{U as X}from"./index-DtyaMwUE.js";import{T as Y}from"./PageTitle-DTiBnBzr.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./ToggleLeftPanelButton-BePyCqyM.js";import"./index-spVtsZg1.js";import"./index-VyUSRxqe.js";import"./abortableRequest-CqTkNl3n.js";import"./upload-Dczyb-QY.js";import"./index-0VWuRELK.js";import"./currency-iJxIWo9y.js";import"./object-Cz6o-AEA.js";import"./_url-xP2ngzoi.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-ChiMQvaN.js";import"./DeleteOutlined-DFutYCzo.js";import"./EyeOutlined-DaqTlU1J.js";import"./progress-CUAx977N.js";import"./index-CuTnxV3I.js";import"./index-Dsy7EvgY.js";import"./store-CwSEntTa.js";import"./GlobalAgentContextManager-34-Qs1B7.js";import"./ipc-CNixsLkK.js";const w=80,r=$(({css:d,cssVar:s})=>({actionTitle:d`
    margin-block-start: 12px;
    font-size: 16px;
    color: ${s.colorTextSecondary};
  `,card:d`
    cursor: pointer;

    position: relative;

    overflow: hidden;

    width: 200px;
    height: 140px;
    border-radius: ${s.borderRadiusLG};

    font-weight: 500;
    text-align: center;

    background: ${s.colorFillTertiary};
    box-shadow: 0 0 0 1px ${s.colorFillTertiary} inset;

    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${s.colorFillSecondary};
    }
  `,glow:d`
    position: absolute;
    inset-block-end: -12px;
    inset-inline-end: 0;

    width: 48px;
    height: 48px;

    opacity: 0.5;
    filter: blur(24px);
  `,icon:d`
    position: absolute;
    z-index: 1;
    inset-block-end: -24px;
    inset-inline-end: 8px;

    flex: none;
  `})),ee=g.memo(({hasPages:d=!1,knowledgeBaseId:s})=>{const{t:n}=O(["file","common"]),[h,j]=g.useState(!1),[k,D,N,f,P]=y(t=>[t.createNewPage,t.createOptimisticPage,t.replaceTempPageWithReal,t.setSelectedPageId,t.fetchDocuments]),[T]=S(t=>[t.createDocument]),p=H({createDocument:T,currentFolderId:null,libraryId:s??null,refetchResources:async()=>{const{revalidateResources:t}=await F(async()=>{const{revalidateResources:i}=await import("./hooks-BBWgNK8v.js");return{revalidateResources:i}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]));await t(),await P()},t:n}),A=async t=>{await p.handleNotionImport(t),await P()},b=async(t,i)=>{if(!t){await k(i);return}const l=D(i);f(l,!1);try{const a=await T({content:t,knowledgeBaseId:s,title:i}),c={content:a.content||"",createdAt:a.createdAt?new Date(a.createdAt):new Date,editorData:typeof a.editorData=="string"?JSON.parse(a.editorData):a.editorData||null,fileType:"custom/document",filename:a.title||i,id:a.id,metadata:a.metadata||{},source:"document",sourceType:V.EDITOR,title:a.title||i,totalCharCount:a.content?.length||0,totalLineCount:0,updatedAt:a.updatedAt?new Date(a.updatedAt):new Date};N(l,c),f(a.id)}catch(a){throw console.error("Failed to create page:",a),y.getState().removeTempPage(l),f(null),a}},E=async t=>{try{j(!0);const i=t.name.split(".").pop()?.toLowerCase();if(i==="md"||i==="markdown"){const l=await t.text();await b(l,t.name.replace(/\.md$|\.markdown$/i,""))}else if(i==="pdf"||i==="docx"){const l=t.name.replace(/\.(pdf|docx)$/i,""),a=D(l);try{const c=await S.getState().uploadWithProgress({file:t,knowledgeBaseId:s});if(!c)throw new Error("Failed to upload file");const{lambdaClient:v}=await F(async()=>{const{lambdaClient:G}=await import("./index-Ckbm5Z92.js");return{lambdaClient:G}},__vite__mapDeps([19,1,2,3,4,5,6,7,8,9,20])),o=await v.document.parseDocument.mutate({id:c.id}),L={content:o.content||"",createdAt:o.createdAt?new Date(o.createdAt):new Date,editorData:typeof o.editorData=="string"?JSON.parse(o.editorData):o.editorData||null,fileType:o.fileType||"custom/document",filename:o.filename||l,id:o.id,metadata:o.metadata||{},source:o.source||"document",sourceType:o.sourceType||"file",title:o.title||l,totalCharCount:o.totalCharCount||0,totalLineCount:o.totalLineCount||0,updatedAt:o.updatedAt?new Date(o.updatedAt):new Date};N(a,L),f(o.id,!1);const I=q(o.id),R=I?`/page/${I}`:"/page";window.history.replaceState({},"",R)}catch(c){throw console.error("Failed to upload and parse file:",c),y.getState().removeTempPage(a),c}}}catch(i){console.error("Failed to upload file:",i)}finally{j(!1)}return!1};return e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsxs(U,{gap:24,height:"100%",style:{paddingBottom:100},width:"100%",children:[d&&e.jsxs(u,{justify:"center",style:{textAlign:"center"},children:[e.jsx(C,{as:"h4",children:n("pageEditor.empty.title")}),e.jsx(C,{type:"secondary",children:n("or",{ns:"common"})})]}),e.jsxs(u,{horizontal:!0,gap:12,children:[e.jsxs(u,{className:r.card,padding:16,onClick:()=>b("",n("pageList.untitled")),children:[e.jsx("span",{className:r.actionTitle,children:n("pageEditor.empty.createNewDocument")}),e.jsx("div",{className:r.glow,style:{background:m.purple}}),e.jsx(x,{className:r.icon,color:m.purple,icon:e.jsx(_,{color:"#fff",icon:K}),size:w,type:"file"})]}),e.jsx(X,{accept:".md,.markdown,.pdf,.docx",beforeUpload:E,disabled:h,multiple:!1,showUploadList:!1,children:e.jsxs(u,{className:r.card,padding:16,style:{opacity:h?.5:1},children:[e.jsx("span",{className:r.actionTitle,children:h?"Uploading...":n("pageEditor.empty.uploadFiles")}),e.jsx("div",{className:r.glow,style:{background:m.gold}}),e.jsx(x,{className:r.icon,color:m.gold,icon:e.jsx(_,{color:"#fff",icon:Q}),size:w,type:"file"})]})}),e.jsxs(u,{className:r.card,padding:16,onClick:p.handleOpenNotionGuide,children:[e.jsx("span",{className:r.actionTitle,children:n("pageEditor.empty.importNotion")}),e.jsx("div",{className:r.glow,style:{background:m.geekblue}}),e.jsx(x,{className:r.icon,color:m.geekblue,icon:e.jsx(M,{color:"#fff"}),size:w,type:"file"})]})]})]}),e.jsx(J,{cancelText:n("header.actions.notionGuide.cancel"),cover:e.jsx(Z,{height:269,src:W.importFromNotionGuide,width:358}),desc:n("header.actions.notionGuide.desc"),okText:n("header.actions.notionGuide.ok"),open:p.notionGuideOpen,title:n("header.actions.notionGuide.title"),onCancel:p.handleCloseNotionGuide,onOk:p.handleStartNotionImport}),e.jsx("input",{accept:".zip",ref:p.notionInputRef,style:{display:"none"},type:"file",onChange:A})]})}),te=g.memo(()=>e.jsxs(e.Fragment,{children:[e.jsx(Y,{}),e.jsx(g.Suspense,{fallback:e.jsx(z,{debugId:"PagesPage"}),children:e.jsx(ee,{})})]}));te.displayName="PagesPage";export{te as default};
