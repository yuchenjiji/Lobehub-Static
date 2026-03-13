import{j as e}from"../vendor/vendor-motion--v3N1cMI.js";import{g as S,aH as y,F as s,I as x,A as g,k as w,f as D}from"./index-DgmZNIaB.js";import{A as z}from"./index-C03wQVBa.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as A}from"./PublishedTime-D6gS1LVR.js";import{j as F}from"./index-BEgAIoMp.js";import{F as T,C as b}from"./FileTree-Dp-FOg08.js";import{as as u,at as N}from"../vendor/vendor-icons-DA3bMca7.js";import{I}from"./index-DKYC4dDs.js";import"../i18n/i18n-zh-CN-aruUKrGA.js";import"../i18n/i18n-en-US-DEYXbGUp.js";import"../vendor/vendor-es-toolkit-b6vDTgOQ.js";import"./providerConfig-CULHvVzb.js";import"./index-DkFth1RV.js";import"./index-Bmfsw1qi.js";import"./index-DgNzT6Qa.js";import"./SiGithub-vKMmMmoX.js";import"./SiX-BFNLciQi.js";import"./store-DNPqUhq6.js";import"./upload-CSS5WmEh.js";import"./index-Crk-7RRS.js";import"./currency-iJxIWo9y.js";import"./object-4I4CqElr.js";import"./_url-DaEEDvyc.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-DjN937yh.js";import"./clientModelRuntime-BhDeF7P4.js";import"./index-gtt7znXM.js";import"./tslib.es6-BWnLUwbd.js";import"./_auth-bw-DXrHs.js";import"./purify.es-r8glNMJW.js";import"./store-D32LeddL.js";import"./selectors-BYGUcqAi.js";import"./tools-BoOINYZn.js";import"./ipc-CNixsLkK.js";import"./discover-BbJ037cO.js";import"./general-B-aBv-kK.js";import"./store-V9jz-vE5.js";import"./index-D8u-na80.js";import"./mcp-bmlNDBWs.js";import"./GlobalAgentContextManager-D9APKRR7.js";import"./Markdown-TJUkwStj.js";import"./index-B4s3gtS8.js";import"./Snippet-CxrGHEZZ.js";import"./Spotlight-OwzPiFwG.js";import"./useTranslation-Bg8umMAV.js";import"./image-nnCaCTxV.js";import"./index-hukXtzXd.js";import"./LeftOutlined-DNvVoWTJ.js";import"./index-SSl3WFHN.js";import"./index-BOwDcG70.js";import"./index-B4GpmpbP.js";import"./katex-C-M49wc6.js";import"./Block-DajizTW3.js";import"./ScrollShadow-DylR1FOr.js";import"./index-DpThjf5-.js";import"./index-DAVuwEhc.js";import"./index-CBwc-0iu.js";import"./index-WrEkuwXj.js";const n=D(({css:r,cssVar:t})=>({description:r`
    overflow: hidden;

    margin: 0;

    font-size: 13px;
    line-height: 1.5;
    color: ${t.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;
  `,divider:r`
    flex-shrink: 0;
    width: 1px;
    background: ${t.colorBorderSecondary};
  `,left:r`
    overflow-y: auto;
    flex-shrink: 0;
    width: 240px;
    padding: 8px;
  `,meta:r`
    flex-shrink: 0;
    padding: 16px;
    border-block-end: 1px solid ${t.colorBorderSecondary};
  `,name:r`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
    color: ${t.colorText};
  `,right:r`
    container-type: size;
    overflow: auto;
    flex: 1;
  `})),M=r=>{const t={},a=l=>{for(const i of l)i.type==="file"&&i.content!==void 0?t[i.path]=i.content:i.children&&a(i.children)};return a(r),t},_=d.memo(({skillId:r})=>{const{t}=S("setting"),[a,l]=d.useState("SKILL.md"),{data:i,isLoading:j}=F(v=>v.useFetchAgentSkillDetail)(r),o=i?.skillDetail,p=i?.resourceTree??[],k=d.useMemo(()=>M(p),[p]);if(j)return e.jsx(y,{active:!0,paragraph:{rows:8},style:{padding:16}});const f=o?.manifest?.version,h=o?.description||o?.manifest?.description,m=o?.manifest?.repository,c=o?.manifest?.sourceUrl;return e.jsxs(s,{style:{height:"100%",overflow:"hidden"},children:[o&&e.jsx("div",{className:n.meta,children:e.jsxs(s,{horizontal:!0,align:"center",gap:12,children:[e.jsx(z,{avatar:"🧩",shape:"square",size:40}),e.jsxs(s,{flex:1,gap:4,style:{overflow:"hidden"},children:[e.jsxs(s,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(s,{horizontal:!0,align:"center",className:n.description,gap:4,children:[e.jsx("span",{className:n.name,children:o.name}),f&&e.jsxs(e.Fragment,{children:[e.jsx(x,{icon:u}),e.jsxs("span",{children:["v",f]})]}),e.jsx(x,{icon:u}),t("agentSkillDetail.updatedAt")," ",e.jsx(A,{date:new Date(o.updatedAt).toISOString(),template:"MMM DD, YYYY"})]}),(m||c)&&e.jsxs(s,{horizontal:!0,align:"center",gap:2,style:{flexShrink:0},children:[m&&e.jsx("a",{href:m,rel:"noreferrer",target:"_blank",children:e.jsx(g,{fill:w.colorTextDescription,icon:I,title:t("agentSkillDetail.repository")})}),c&&e.jsx("a",{href:c,rel:"noreferrer",target:"_blank",children:e.jsx(g,{icon:N,title:t("agentSkillDetail.sourceUrl")})})]})]}),h&&e.jsx("p",{className:n.description,children:h})]})]})}),e.jsxs(s,{horizontal:!0,style:{flex:1,overflow:"hidden"},children:[e.jsx("div",{className:n.left,children:e.jsx(T,{resourceTree:p,selectedFile:a,onSelectFile:l})}),e.jsx("div",{className:n.divider}),e.jsx("div",{className:n.right,children:e.jsx(b,{contentMap:k,selectedFile:a,skillDetail:o})},a)]})]})});_.displayName="AgentSkillDetail";export{_ as default};
