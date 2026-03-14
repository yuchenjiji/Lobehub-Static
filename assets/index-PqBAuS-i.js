import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as k,aJ as y,F as s,I as f,A as u,m as w,h as D}from"./index-DuTkvx3R.js";import{A as z}from"./index-3_OIRYp9.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as A}from"./PublishedTime-DVrpz2sg.js";import{j as F}from"./index-D46V-v4f.js";import{F as T,C as b}from"./FileTree-BAhmiYjH.js";import{as as g,at as N}from"../vendor/vendor-icons-UxbXHH06.js";import{I}from"./index-B9PBP7fX.js";import"../i18n/i18n-zh-CN-X4QEO1fZ.js";import"../i18n/i18n-en-US-CeDxYD3m.js";import"../vendor/vendor-es-toolkit-BI0f0n_g.js";import"./providerConfig-CULHvVzb.js";import"./index-b6vSUHKH.js";import"./index-Dd3sJru5.js";import"./index-CS6LoGWM.js";import"./SiGithub-DNtfqf-n.js";import"./SiX-BjMBTAhr.js";import"./store-CnJca9nG.js";import"./abortableRequest-CqTkNl3n.js";import"./upload-BzGJPrh8.js";import"./index-D1Zj94up.js";import"./currency-iJxIWo9y.js";import"./object-Cz6o-AEA.js";import"./_url-BtBd8FsZ.js";import"./v4-BKrj-4V8.js";import"./useClientDataSWRWithSync-UclrJIwp.js";import"./clientModelRuntime-BUlm4gph.js";import"./index-Bkn1wHpH.js";import"./tslib.es6-BWnLUwbd.js";import"./_auth-Bw7t01am.js";import"./purify.es-r8glNMJW.js";import"./store-D0s_nhg5.js";import"./selectors-Dd-eUbkn.js";import"./tools-CMB0Rj0Y.js";import"./ipc-CNixsLkK.js";import"./discover-BqWIOWKh.js";import"./general-B-HxTqt0.js";import"./index-BYL58oom.js";import"./store-B4z4yQCy.js";import"./index-B-HzjgT-.js";import"./mcp-bmlNDBWs.js";import"./GlobalAgentContextManager-DPTKPH1l.js";import"./Markdown-DduJmnjo.js";import"./index-CIz-XH4v.js";import"./Snippet-DMiDJMCG.js";import"./Spotlight-BGIvLV4j.js";import"./useTranslation-Bm881vNH.js";import"./image-nnCaCTxV.js";import"./index-K2RUFBzZ.js";import"./LeftOutlined-D8dpbkzp.js";import"./index-D6vjTF-U.js";import"./index-Bgf4AOmx.js";import"./index-CfmTt_aq.js";import"./index-C1eCZp0q.js";import"./katex-C-M49wc6.js";import"./Block-DEfkToFX.js";import"./ScrollShadow-Dp1jQd3q.js";import"./index-dtrOosv-.js";import"./index-BdVboqIi.js";import"./index-CNknNfMk.js";import"./index-BV4dwSb7.js";const n=D(({css:r,cssVar:t})=>({description:r`
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
