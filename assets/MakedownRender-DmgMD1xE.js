import{j as n}from"../vendor/vendor-motion--v3N1cMI.js";import{k as h,I as H,j as g,f as j,g as y,C as b}from"./index-DgmZNIaB.js";import{E as k}from"./Empty-GrClWxIz.js";import{M as E}from"./Markdown-TJUkwStj.js";import{r as a}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as C}from"./useToc-hOm3fCFT.js";import{l as M}from"../vendor/vendor-es-toolkit-b6vDTgOQ.js";import{aI as I,aJ as _,aK as w,aL as F,F as S}from"../vendor/vendor-icons-DA3bMca7.js";const u=e=>{let r="";return a.Children.forEach(e,t=>{typeof t=="string"||typeof t=="number"?r+=t:a.isValidElement(t)&&t.props.children&&(r+=u(t.props.children))}),r},T={h2:F,h3:w,h4:_,h5:I},p=j(({cx:e,css:r,cssVar:t})=>({anchor:e("toc-anchor",r`
      display: none;
      margin-inline-start: 0.5rem;
      color: ${t.colorTextDescription} !important;
    `),container:r`
    &:hover {
      .toc-anchor {
        display: inline;
      }
    }
  `})),i=e=>({children:t,className:o,style:l,...c})=>{const{setToc:m,setFinished:d}=C(),f=a.useMemo(()=>u(t),[t]),s=M(f);return a.useEffect(()=>{m&&((e==="h2"||e==="h3")&&m?.((x=[])=>[...x,{href:`#${s}`,level:e==="h2"?2:3,title:f}]),d())},[s]),e==="h1"?n.jsx(e,{style:{color:h.colorText,...l},...c,id:s,children:t}):n.jsxs(e,{className:g(p.container,o),style:{color:h.colorText,...l},...c,id:s,children:[t,n.jsx("a",{"aria-label":"Permalink for this section",className:p.anchor,href:`#${s}`,style:{scrollMarginTop:96},children:n.jsx(H,{icon:T[e]})})]})},V=i("h1"),W=i("h2"),$=i("h3"),v=i("h4"),L=i("h5"),K=a.memo(({children:e})=>{const{t:r}=y("common");return e?n.jsx(E,{allowHtml:!0,enableImageGallery:!1,enableLatex:!1,components:{a:({href:t,...o})=>t&&t.startsWith("http")?n.jsx("a",{...o,href:t,rel:"noreferrer",target:"_blank"}):o?.children,h1:V,h2:W,h3:$,h4:v,h5:L,img:({src:t,...o})=>typeof t!="string"||t.includes("glama.ai")?null:t.startsWith("http")?n.jsx("img",{src:t,...o}):null},children:e}):n.jsx(b,{paddingBlock:32,width:"100%",children:n.jsx(k,{description:r("noContent"),descriptionProps:{fontSize:14},icon:S,style:{maxWidth:400}})})});export{K as M};
