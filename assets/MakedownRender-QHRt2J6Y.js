import{j as n}from"../vendor/vendor-motion-D2gXNOxm.js";import{m as h,I as H,l as g,h as j,j as y,C as b}from"./index-BlXf1DT_.js";import{E}from"./Empty-DYKpC2V7.js";import{M as k}from"./Markdown-CB8idFrE.js";import{r as a}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as C}from"./useToc-VN7kVHwZ.js";import{l as M}from"../vendor/vendor-es-toolkit-BI0f0n_g.js";import{aQ as _,aR as w,aS as I,aT as S,F as T}from"../vendor/vendor-icons-UxbXHH06.js";const u=e=>{let r="";return a.Children.forEach(e,t=>{typeof t=="string"||typeof t=="number"?r+=t:a.isValidElement(t)&&t.props.children&&(r+=u(t.props.children))}),r},F={h2:S,h3:I,h4:w,h5:_},p=j(({cx:e,css:r,cssVar:t})=>({anchor:e("toc-anchor",r`
      display: none;
      margin-inline-start: 0.5rem;
      color: ${t.colorTextDescription} !important;
    `),container:r`
    &:hover {
      .toc-anchor {
        display: inline;
      }
    }
  `})),i=e=>({children:t,className:o,style:l,...c})=>{const{setToc:m,setFinished:d}=C(),f=a.useMemo(()=>u(t),[t]),s=M(f);return a.useEffect(()=>{m&&((e==="h2"||e==="h3")&&m?.((x=[])=>[...x,{href:`#${s}`,level:e==="h2"?2:3,title:f}]),d())},[s]),e==="h1"?n.jsx(e,{style:{color:h.colorText,...l},...c,id:s,children:t}):n.jsxs(e,{className:g(p.container,o),style:{color:h.colorText,...l},...c,id:s,children:[t,n.jsx("a",{"aria-label":"Permalink for this section",className:p.anchor,href:`#${s}`,style:{scrollMarginTop:96},children:n.jsx(H,{icon:F[e]})})]})},R=i("h1"),V=i("h2"),W=i("h3"),$=i("h4"),v=i("h5"),q=a.memo(({children:e})=>{const{t:r}=y("common");return e?n.jsx(k,{allowHtml:!0,enableImageGallery:!1,enableLatex:!1,components:{a:({href:t,...o})=>t&&t.startsWith("http")?n.jsx("a",{...o,href:t,rel:"noreferrer",target:"_blank"}):o?.children,h1:R,h2:V,h3:W,h4:$,h5:v,img:({src:t,...o})=>typeof t!="string"||t.includes("glama.ai")?null:t.startsWith("http")?n.jsx("img",{src:t,...o}):null},children:e}):n.jsx(b,{paddingBlock:32,width:"100%",children:n.jsx(E,{description:r("noContent"),descriptionProps:{fontSize:14},icon:T,style:{maxWidth:400}})})});export{q as M};
