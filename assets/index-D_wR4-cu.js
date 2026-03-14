import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as k,aJ as y,F as s,I as f,A as u,m as w,h as D}from"./index-Dw0E06JZ.js";import{A as z}from"./index-Bgs8TlXg.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as A}from"./PublishedTime-C_bgElk_.js";import{j as F}from"./index-DmLQxUtL.js";import{F as T,C as b}from"./FileTree-KKiitoPt.js";import{as as g,at as N}from"../vendor/vendor-icons-UxbXHH06.js";import{I}from"./index-DnL6B4Rx.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./providerConfig-CULHvVzb.js";import"./index-Xv3wNnOc.js";import"./index-BVrOlRgI.js";import"./index-CLzLV2r3.js";import"./SiGithub-DNtfqf-n.js";import"./SiX-BjMBTAhr.js";import"./store-B1eRWrtc.js";import"./abortableRequest-CqTkNl3n.js";import"./upload-Bfs3WBmw.js";import"./index-BBK4KMlW.js";import"./currency-iJxIWo9y.js";import"./object-Cz6o-AEA.js";import"./_url-COSJmhiC.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-BzU8JjXB.js";import"./clientModelRuntime-BKfdL3OR.js";import"./index-Bw-uh4k1.js";import"./tslib.es6-BWnLUwbd.js";import"./_auth-C9yzCINy.js";import"./purify.es-r8glNMJW.js";import"./store-D9JVfudu.js";import"./selectors-6upTBxj2.js";import"./tools-392X-kHN.js";import"./ipc-CNixsLkK.js";import"./discover-D-8XxlvF.js";import"./general-BeKmVzAZ.js";import"./index-Da1cnWS4.js";import"./store-BAf6sMsf.js";import"./index-CXMMdfiA.js";import"./mcp-bmlNDBWs.js";import"./GlobalAgentContextManager-BJINC1PR.js";import"./Markdown-DBTQWf59.js";import"./index-DCemqeta.js";import"./Snippet-C1PCRfsw.js";import"./Spotlight-jOzkAn-w.js";import"./useTranslation-BixUBwIT.js";import"./image-nnCaCTxV.js";import"./index-FA43iTmi.js";import"./LeftOutlined-zb6GBid6.js";import"./index-Bh0Ip9Tr.js";import"./index-DLmWV07J.js";import"./index-CifLrK13.js";import"./index-B9323840.js";import"./katex-C-M49wc6.js";import"./Block-MHS1RMdI.js";import"./ScrollShadow-DfJwqEdV.js";import"./index-CjLAcp8x.js";import"./index-CH4DJ39Y.js";import"./index-DAKKMqxh.js";import"./index-DyWSvD7d.js";const n=D(({css:r,cssVar:t})=>({description:r`
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
