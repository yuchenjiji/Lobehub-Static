import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as k,aJ as y,F as s,I as f,A as u,m as w,h as D}from"./index-DpjtaJho.js";import{A as z}from"./index-BzTAHP7_.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as A}from"./PublishedTime-BZp_epLj.js";import{j as F}from"./index-B6oEY5mf.js";import{F as T,C as b}from"./FileTree-BrMVuI4V.js";import{as as g,at as N}from"../vendor/vendor-icons-UxbXHH06.js";import{I}from"./index-z5qOgXuq.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./providerConfig-CULHvVzb.js";import"./index-DIlc68oV.js";import"./index-CTxO1VLm.js";import"./index-2p2SP30-.js";import"./SiGithub-DNtfqf-n.js";import"./SiX-BjMBTAhr.js";import"./store-DtNTWLna.js";import"./abortableRequest-CqTkNl3n.js";import"./upload-DOqTZJKr.js";import"./index-8zQH3oAT.js";import"./currency-iJxIWo9y.js";import"./object-Cz6o-AEA.js";import"./_url-D62NrT3N.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-CWa-BFVM.js";import"./clientModelRuntime-BnIAirXG.js";import"./index-8HYjRtf2.js";import"./tslib.es6-BWnLUwbd.js";import"./_auth-BzqSi4BX.js";import"./purify.es-r8glNMJW.js";import"./store-CzcV0I_a.js";import"./selectors-B9QCb66Q.js";import"./tools-bLyMWaW5.js";import"./ipc-CNixsLkK.js";import"./discover-BAgP0vD9.js";import"./general-CJFisBVH.js";import"./index-BsIAcuRc.js";import"./store-B2Up0yTX.js";import"./index-D43lEilP.js";import"./mcp-bmlNDBWs.js";import"./GlobalAgentContextManager-Bpfb02Qb.js";import"./Markdown-DlCzbnQc.js";import"./index-BovAc7GI.js";import"./Snippet-BX6kAYdg.js";import"./Spotlight-BmHeH95T.js";import"./useTranslation-DKL2OgOQ.js";import"./image-nnCaCTxV.js";import"./index-0Kp4vh0t.js";import"./LeftOutlined-BxhwhsKm.js";import"./index-BQRH7ZgF.js";import"./index-BVVfT7eU.js";import"./index-CxbiTnez.js";import"./index-C0YudKP5.js";import"./katex-C-M49wc6.js";import"./Block-BUeflZIK.js";import"./ScrollShadow-DMWrT7wT.js";import"./index-CdBYwtbX.js";import"./index-CaNbf1f_.js";import"./index--G04yT75.js";import"./index-DC8mLPj8.js";const n=D(({css:r,cssVar:t})=>({description:r`
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
  `})),M=r=>{const t={},a=l=>{for(const i of l)i.type==="file"&&i.content!==void 0?t[i.path]=i.content:i.children&&a(i.children)};return a(r),t},_=d.memo(({skillId:r})=>{const{t}=k("setting"),[a,l]=d.useState("SKILL.md"),{data:i,isLoading:j}=F(S=>S.useFetchAgentSkillDetail)(r),o=i?.skillDetail,p=i?.resourceTree??[],v=d.useMemo(()=>M(p),[p]);if(j)return e.jsx(y,{active:!0,paragraph:{rows:8},style:{padding:16}});const h=o?.manifest?.version,x=o?.description||o?.manifest?.description,m=o?.manifest?.repository,c=o?.manifest?.sourceUrl;return e.jsxs(s,{style:{height:"100%",overflow:"hidden"},children:[o&&e.jsx("div",{className:n.meta,children:e.jsxs(s,{horizontal:!0,align:"center",gap:12,children:[e.jsx(z,{avatar:"🧩",shape:"square",size:40}),e.jsxs(s,{flex:1,gap:4,style:{overflow:"hidden"},children:[e.jsxs(s,{horizontal:!0,align:"center",gap:8,justify:"space-between",children:[e.jsxs(s,{horizontal:!0,align:"center",className:n.description,gap:4,children:[e.jsx("span",{className:n.name,children:o.name}),h&&e.jsxs(e.Fragment,{children:[e.jsx(f,{icon:g}),e.jsxs("span",{children:["v",h]})]}),e.jsx(f,{icon:g}),t("agentSkillDetail.updatedAt")," ",e.jsx(A,{date:new Date(o.updatedAt).toISOString(),template:"MMM DD, YYYY"})]}),(m||c)&&e.jsxs(s,{horizontal:!0,align:"center",gap:2,style:{flexShrink:0},children:[m&&e.jsx("a",{href:m,rel:"noreferrer",target:"_blank",children:e.jsx(u,{fill:w.colorTextDescription,icon:I,title:t("agentSkillDetail.repository")})}),c&&e.jsx("a",{href:c,rel:"noreferrer",target:"_blank",children:e.jsx(u,{icon:N,title:t("agentSkillDetail.sourceUrl")})})]})]}),x&&e.jsx("p",{className:n.description,children:x})]})]})}),e.jsxs(s,{horizontal:!0,style:{flex:1,overflow:"hidden"},children:[e.jsx("div",{className:n.left,children:e.jsx(T,{resourceTree:p,selectedFile:a,onSelectFile:l})}),e.jsx("div",{className:n.divider}),e.jsx("div",{className:n.right,children:e.jsx(b,{contentMap:v,selectedFile:a,skillDetail:o})},a)]})]})});_.displayName="AgentSkillDetail";export{_ as default};
