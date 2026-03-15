import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as k,aJ as y,F as s,I as f,A as u,m as w,h as D}from"./index-BzLMjSCA.js";import{A as z}from"./index-C2Bs0zJB.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as A}from"./PublishedTime-CEiPLR0g.js";import{j as F}from"./index-B76dLkYX.js";import{F as T,C as b}from"./FileTree-BVk6fU3V.js";import{as as g,at as N}from"../vendor/vendor-icons-UxbXHH06.js";import{I}from"./index-BgUMxTsT.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./providerConfig-CULHvVzb.js";import"./index-C-vrAyHP.js";import"./index-DfQYUH17.js";import"./index-CuTnxV3I.js";import"./SiGithub-DNtfqf-n.js";import"./SiX-BjMBTAhr.js";import"./store-BVltjyBN.js";import"./abortableRequest-CqTkNl3n.js";import"./upload-Dczyb-QY.js";import"./index-0VWuRELK.js";import"./currency-iJxIWo9y.js";import"./object-Cz6o-AEA.js";import"./_url-xP2ngzoi.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-ChiMQvaN.js";import"./clientModelRuntime-BqAGPvEX.js";import"./index-B8rphmhS.js";import"./tslib.es6-BWnLUwbd.js";import"./_auth-Cqlss8g1.js";import"./purify.es-r8glNMJW.js";import"./store-Fmjx2HjO.js";import"./selectors-B0huh2rE.js";import"./tools-CMqMCKJi.js";import"./ipc-CNixsLkK.js";import"./discover-DRhSsoew.js";import"./general-DOYskArM.js";import"./index-BrR67f9G.js";import"./store-2BfUexLU.js";import"./index-D1uWC5j0.js";import"./mcp-bmlNDBWs.js";import"./GlobalAgentContextManager-34-Qs1B7.js";import"./Markdown-DSwlkTjn.js";import"./index-D3arNAIO.js";import"./Snippet-CvXVmVAE.js";import"./Spotlight-D7Cpra7R.js";import"./useTranslation-BHsOfDM0.js";import"./image-nnCaCTxV.js";import"./index-XYr1UhsT.js";import"./LeftOutlined-UeqPNbIG.js";import"./index-D4q2aEH9.js";import"./index-znnAxA8b.js";import"./index-CL6wj0dN.js";import"./index-BYmf3W8M.js";import"./katex-C-M49wc6.js";import"./Block-DisZY_e8.js";import"./ScrollShadow-DdI3YOHp.js";import"./index-CMXMjjsL.js";import"./index-CYhK0Nc6.js";import"./index-spVtsZg1.js";import"./index-VyUSRxqe.js";const n=D(({css:r,cssVar:t})=>({description:r`
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
