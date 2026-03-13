const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mermaid.core-DYJL6SIE.js","assets/index-DgmZNIaB.js","vendor/vendor-motion--v3N1cMI.js","vendor/vendor-emotion-D8kPrniB.js","i18n/i18n-zh-CN-aruUKrGA.js","i18n/i18n-en-US-DEYXbGUp.js","vendor/vendor-es-toolkit-b6vDTgOQ.js","vendor/vendor-icons-DA3bMca7.js","assets/providerConfig-CULHvVzb.js","assets/index-yzzpVuwK.css","assets/purify.es-r8glNMJW.js","assets/step-B6EOmCqb.js","assets/isEmpty-BeBJq_Ex.js"])))=>i.map(i=>d[i]);
import{ia as vt,f as G,aa as O,a9 as se,c$ as V,m as kt,F as T,A as z,j as N,I as ce,$ as Mt,aH as ze,k as Oe,au as _e,ib as Nt,_ as jt,Z as Ct,b6 as Pe,bm as It,ic as Tt,id as Et,ie as Be,b1 as Dt,a2 as St,ig as he,T as Lt,ho as Ue,aG as At}from"./index-DgmZNIaB.js";import{r as h,g as Rt}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as p}from"../vendor/vendor-motion--v3N1cMI.js";import{eF as zt,eG as Ot,aQ as _t,di as Pt,eH as Bt,eI as Ut,dk as Ft,ez as Qt,_ as Fe,aH as Gt,dv as Ht,eJ as Yt,eK as Zt}from"../vendor/vendor-icons-DA3bMca7.js";import{l as Qe,z as Wt}from"../vendor/vendor-es-toolkit-b6vDTgOQ.js";import{S as $t}from"./Snippet-CxrGHEZZ.js";import{u as Jt}from"./useTranslation-Bg8umMAV.js";import{i as Xt}from"./image-nnCaCTxV.js";import{I as Ge}from"./index-hukXtzXd.js";import{a as qt}from"./index-Bmfsw1qi.js";import{j as ye,v as Vt}from"./index-SSl3WFHN.js";const Kt=e=>h.memo(t=>h.createElement(e,t)),He=e=>{const t=h.use(vt)?.aAs||"a";return p.jsx(h.useMemo(()=>Kt(t),[t]),{...e})};He.displayName="A";var er=He;const Gn={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},tr=async(e,t)=>new Promise((r,n)=>{try{const o=document.createElement("a");o.href=e,o.download=t,o.style.display="none",document.body.append(o),o.click(),o.remove(),r()}catch(o){n(o)}}),B="ant",L=G(({css:e,cssVar:t})=>({actionsHidden:e`
      cursor: pointer;

      position: absolute;
      z-index: 1;
      inset-block-start: 0;
      inset-inline-end: 0;

      opacity: 0;
    `,actionsVisible:e`
      cursor: pointer;

      position: absolute;
      z-index: 1;
      inset-block-start: 0;
      inset-inline-end: 0;

      opacity: 1;
    `,borderless:O.variantBorderlessWithoutHover,filled:e`
      ${O.variantOutlinedWithoutHover};
      ${O.variantFilledWithoutHover};
    `,image:e`
      display: flex;
      align-items: center;
      justify-content: center;

      width: auto;
      height: auto;
    `,mask:e`
      ${O.blur};
      backdrop-filter: blur(8px);
    `,outlined:O.variantOutlinedWithoutHover,preview:e`
      .${B}-image-preview-mask {
        background: color-mix(in srgb, ${t.colorBgLayout} 90%, transparent);
      }

      .${B}-image-preview-close {
        color: ${t.colorTextDescription};
        background: ${t.colorBgContainer};
        box-shadow: ${t.boxShadowTertiary};

        svg {
          stroke: ${t.colorTextDescription};
        }

        &:hover {
          color: ${t.colorText};
          background: ${t.colorBgContainer};

          svg {
            stroke: ${t.colorText};
          }
        }
      }

      .${B}-image-preview-img {
        width: 100%;
      }

      .${B}-image-preview-switch {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;
        padding: 0;

        color: ${t.colorTextDescription};

        background: ${t.colorBgContainer};
        box-shadow: ${t.boxShadowTertiary};

        svg {
          transform: scale(0.75);
        }

        &:hover {
          color: ${t.colorText};
          background: ${t.colorBgContainer};
        }
      }

      .${B}-image-preview-switch-disabled {
        display: none;
      }

      .ant-image-preview-progress {
        color: ${t.colorTextDescription};
      }

      img {
        min-width: 100%;
      }
    `,root:e`
      cursor: pointer;
      user-select: none;

      position: relative;

      overflow: hidden;

      width: fit-content;
      border-radius: ${t.borderRadius};

      line-height: 1;

      .${B}-image-cover {
        display: none !important;
      }

      &:hover {
        .actions-hidden {
          opacity: 1;
        }
      }
    `,toolbar:e`
      ${O.variantOutlinedWithoutHover};
      padding: 4px;
      border-color: ${t.colorFillTertiary};
      border-radius: ${t.borderRadiusLG};
    `,wrapper:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;
      height: auto;
    `})),rr=se(L.root,{defaultVariants:{variant:"filled"},variants:{variant:{filled:L.filled,outlined:L.outlined,borderless:L.borderless}}}),nr="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjM0IzQjNCIi8+CjxwYXRoIGQ9Ik0xNTYuODg4IDkxLjAwMkgxMDAuMTEyQzk1LjYzMjkgOTEuMDAyIDkyLjAwMTUgOTQuNjMzNCA5Mi4wMDE1IDk5LjExMjdWMTU1Ljg4OEM5Mi4wMDE1IDE2MC4zNjcgOTUuNjMyOSAxNjMuOTk5IDEwMC4xMTIgMTYzLjk5OUgxNTYuODg4QzE2MS4zNjcgMTYzLjk5OSAxNjQuOTk4IDE2MC4zNjcgMTY0Ljk5OCAxNTUuODg4Vjk5LjExMjdDMTY0Ljk5OCA5NC42MzM0IDE2MS4zNjcgOTEuMDAyIDE1Ni44ODggOTEuMDAyWiIgc3Ryb2tlPSIjNjI2MjYyIiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTY0Ljk5OCAxMzkuNjY4TDE1Mi40ODQgMTI3LjE1M0MxNTAuOTYyIDEyNS42MzIgMTQ4LjkgMTI0Ljc3OCAxNDYuNzQ5IDEyNC43NzhDMTQ0LjU5OSAxMjQuNzc4IDE0Mi41MzYgMTI1LjYzMiAxNDEuMDE1IDEyNy4xNTNMMTA0LjE2OCAxNjRNMTE2LjMzNCAxMjMuNDQ1QzEyMC44MTMgMTIzLjQ0NSAxMjQuNDQ1IDExOS44MTQgMTI0LjQ0NSAxMTUuMzM0QzEyNC40NDUgMTEwLjg1NSAxMjAuODEzIDEwNy4yMjQgMTE2LjMzNCAxMDcuMjI0QzExMS44NTUgMTA3LjIyNCAxMDguMjIzIDExMC44NTUgMTA4LjIyMyAxMTUuMzM0QzEwOC4yMjMgMTE5LjgxNCAxMTEuODU1IDEyMy40NDUgMTE2LjMzNCAxMjMuNDQ1WiIgc3Ryb2tlPSIjNjI2MjYyIiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",or="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRUNFQ0VDIi8+CjxwYXRoIGQ9Ik0xNTYuODg4IDkxLjAwMkgxMDAuMTEyQzk1LjYzMjkgOTEuMDAyIDkyLjAwMTUgOTQuNjMzNCA5Mi4wMDE1IDk5LjExMjdWMTU1Ljg4OEM5Mi4wMDE1IDE2MC4zNjcgOTUuNjMyOSAxNjMuOTk5IDEwMC4xMTIgMTYzLjk5OUgxNTYuODg4QzE2MS4zNjcgMTYzLjk5OSAxNjQuOTk4IDE2MC4zNjcgMTY0Ljk5OCAxNTUuODg4Vjk5LjExMjdDMTY0Ljk5OCA5NC42MzM0IDE2MS4zNjcgOTEuMDAyIDE1Ni44ODggOTEuMDAyWiIgc3Ryb2tlPSIjRDdEN0Q3IiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTY0Ljk5OCAxMzkuNjY4TDE1Mi40ODQgMTI3LjE1M0MxNTAuOTYyIDEyNS42MzIgMTQ4LjkgMTI0Ljc3OCAxNDYuNzQ5IDEyNC43NzhDMTQ0LjU5OSAxMjQuNzc4IDE0Mi41MzYgMTI1LjYzMiAxNDEuMDE1IDEyNy4xNTNMMTA0LjE2OCAxNjRNMTE2LjMzNCAxMjMuNDQ1QzEyMC44MTMgMTIzLjQ0NSAxMjQuNDQ1IDExOS44MTQgMTI0LjQ0NSAxMTUuMzM0QzEyNC40NDUgMTEwLjg1NSAxMjAuODEzIDEwNy4yMjQgMTE2LjMzNCAxMDcuMjI0QzExMS44NTUgMTA3LjIyNCAxMDguMjIzIDExMC44NTUgMTA4LjIyMyAxMTUuMzM0QzEwOC4yMjMgMTE5LjgxNCAxMTEuODU1IDEyMy40NDUgMTE2LjMzNCAxMjMuNDQ1WiIgc3Ryb2tlPSIjRDdEN0Q3IiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K",ir=h.memo(({children:e,visible:t})=>{const r=h.useRef(null);return h.useEffect(()=>{if(!r.current)return;const n=o=>{o.preventDefault()};t?r.current.addEventListener("wheel",n,{passive:!1}):r.current.removeEventListener("wheel",n)},[t]),p.jsx("div",{ref:r,children:e})});var Ye=ir;const ar=e=>new Promise((t,r)=>{const n=new Image,o=URL.createObjectURL(e);n.onload=()=>{URL.revokeObjectURL(o);const a=document.createElement("canvas");a.width=n.naturalWidth,a.height=n.naturalHeight;const i=a.getContext("2d");if(!i){r(new Error("Canvas context not available"));return}i.drawImage(n,0,0),a.toBlob(l=>{l?t(l):r(new Error("Failed to convert to PNG"))},"image/png",1)},n.onerror=()=>{URL.revokeObjectURL(o),r(new Error("Failed to load image"))},n.src=o}),lr=async e=>{const t=(e.type||"").toLowerCase();return t==="image/png"||t==="image/svg+xml"?{[t]:e}:{"image/png":await ar(e)}},sr=e=>{try{const t=new URL(e).pathname.match(/\/([^/]+)$/);return t?decodeURIComponent(t[1]):"image"}catch{return"image"}},cr=e=>({"image/svg+xml":"svg","image/png":"png","image/jpeg":"jpg","image/jpg":"jpg","image/webp":"webp","image/gif":"gif"})[e?.toLowerCase()]||e?.split("/")[1]?.split("+")[0]||"png",dr=h.memo(({children:e,info:t,minScale:r,maxScale:n})=>{const{t:o}=Jt(Xt),[a,i]=h.useState(null),[l,c]=h.useState(!1),[d,s]=h.useState(!1),{transform:{scale:u},actions:{onFlipY:m,onFlipX:g,onRotateLeft:f,onRotateRight:w,onZoomOut:y,onZoomIn:x},image:{url:b}}=t,k=h.useCallback(async()=>{s(!0);try{const j=await(await fetch(b,{mode:"cors"})).blob(),D=URL.createObjectURL(j);let I=sr(b);const S=cr(j.type);I.includes(".")?I.endsWith(".svg+xml")&&(I=I.replace(/\.svg\+xml$/i,".svg")):I=`${I}.${S}`,await tr(D,I),URL.revokeObjectURL(D),V.success(o("image.downloadSuccess"))}catch{V.error(o("image.downloadFailed"))}finally{s(!1)}},[b,o]),E=h.useCallback(async()=>{c(!0);try{const j=await lr(await(await fetch(b,{mode:"cors"})).blob());await navigator.clipboard.write([new ClipboardItem(j)]),V.success(o("image.copySuccess"))}catch{V.error(o("image.copyFailed"))}finally{c(!1)}},[b,o]);return p.jsx(kt,{popupContainer:a??void 0,children:p.jsxs(T,{horizontal:!0,className:L.toolbar,gap:4,ref:i,children:[p.jsx(z,{icon:zt,title:o("image.flipHorizontal"),onClick:g}),p.jsx(z,{icon:Ot,title:o("image.flipVertical"),onClick:m}),p.jsx(z,{icon:_t,title:o("image.rotateLeft"),onClick:f}),p.jsx(z,{icon:Pt,title:o("image.rotateRight"),onClick:w}),p.jsx(z,{disabled:u===r,icon:Bt,title:o("image.zoomOut"),onClick:y}),p.jsx(z,{disabled:u===n,icon:Ut,title:o("image.zoomIn"),onClick:x}),p.jsx(z,{icon:Ft,loading:l,title:o("image.copy"),onClick:E}),p.jsx(z,{icon:Qt,loading:d,title:o("image.download"),onClick:k}),e]})})});var Ze=dr;const ur=e=>{const[t,r]=h.useState(!1);return h.useMemo(()=>{if(e===!1)return e;const{onVisibleChange:n,onOpenChange:o,minScale:a=.32,maxScale:i=32,toolbarAddon:l,rootClassName:c,imageRender:d,toolbarRender:s,...u}=e===!0?{}:e||{};return{actionsRender:(m,g)=>{const f=p.jsx(Ze,{info:g,maxScale:i,minScale:a,children:l});return s?s(f,g):f},closeIcon:p.jsx(ce,{color:"#fff",icon:Fe}),imageRender:(m,g)=>{const f=p.jsx(Ye,{visible:t,children:m});return d?d(f,g):f},maxScale:i,minScale:a,onOpenChange:(m,g)=>{r(m),o?.(m,g),n?.(m,!m,g.current)},rootClassName:N(L.preview,c),...u}},[e,t,L])};var pr=ur;const{PreviewGroup:mr}=Ge,We=h.memo(({items:e,children:t,enable:r=!0,preview:n})=>{const o=pr(n);return r?p.jsx(mr,{items:e,preview:o,children:t}):t});We.displayName="PreviewGroup";var fr=We;const gr=e=>{const[t,r]=h.useState(!1);return h.useMemo(()=>{if(e===!1)return e;const{onVisibleChange:n,onOpenChange:o,minScale:a=.32,maxScale:i=32,toolbarAddon:l,rootClassName:c,imageRender:d,toolbarRender:s,actionsRender:u,...m}=e===!0?{}:e||{};return{actionsRender:u||((g,f)=>{const w=p.jsx(Ze,{info:f,maxScale:i,minScale:a,children:l});return s?s(w,f):w}),closeIcon:p.jsx(ce,{color:"#fff",icon:Fe}),imageRender:(g,f)=>{const w=p.jsx(Ye,{visible:t,children:g});return d?d(w,f):w},maxScale:i,minScale:a,onOpenChange:g=>{r(g),o?.(g),n?.(g,!g)},rootClassName:N(L.preview,c),styles:{mask:{backdropFilter:"blur(8px)"}},...m}},[e,t,L])};var hr=gr;const $e=h.memo(({ref:e,style:t,preview:r,isLoading:n,maxHeight:o="100%",maxWidth:a="100%",minHeight:i,minWidth:l,actions:c,className:d,alwaysShowActions:s,variant:u="filled",objectFit:m="cover",classNames:g,styles:f,onClick:w,width:y,height:x,...b})=>{const{isDarkMode:k}=Mt(),E=s?L.actionsVisible:L.actionsHidden,j=hr(r);return n?p.jsx("div",{onClick:w,children:p.jsx(ze.Avatar,{active:!0,style:{borderRadius:Oe.borderRadius,height:x,maxHeight:o,maxWidth:a,minHeight:i,minWidth:l,width:y}})}):p.jsxs(T,{className:N(rr({variant:u}),d),ref:e,style:t,children:[c&&p.jsx("div",{className:N(E,s?"":"actions-hidden"),children:c}),p.jsx(Ge,{className:N(L.image,g?.image),fallback:k?nr:or,height:x,loading:"lazy",preview:r===!1?!1:j,width:y,classNames:{root:N(L.wrapper,g?.wrapper)},style:{maxHeight:o,maxWidth:a,minHeight:i,minWidth:l,objectFit:m||"cover",...f?.image},styles:{root:f?.wrapper},onClick:w,...b})]})});$e.displayName="Image";var yr=$e;const Je=yr;Je.PreviewGroup=fr;var de=Je;const Xe=[{displayName:"Lobe Theme",id:"lobe-theme"},{background:"#fbf9ff",displayName:"Mermaid Default",id:"default"},{background:"#fffcf8",displayName:"Mermaid Base",id:"base"},{background:"#000",displayName:"Mermaid Dark",id:"dark"},{background:"#f9ffeb",displayName:"Mermaid Forest",id:"forest"},{background:"#fff",displayName:"Mermaid Neutral",id:"neutral"}],br=1e4,P=new Map,be=500,xr=()=>{if(P.size>be){const e=Math.floor(be*.2),t=Array.from(P.keys()).slice(0,e);for(const r of t)P.delete(r)}};let ie=null;const qe=()=>typeof window>"u"?Promise.resolve(null):(ie||(ie=jt(()=>import("./mermaid.core-DYJL6SIE.js").then(e=>e.at),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(e=>e.default)),ie),Ve=(e,t)=>({fontFamily:e.fontFamilyCode,gantt:{useWidth:1920},securityLevel:"loose",startOnLoad:!1,theme:t||(e.isDarkMode?"dark":"neutral"),themeVariables:t?void 0:{errorBkgColor:e.colorTextDescription,errorTextColor:e.colorTextDescription,fontFamily:e.fontFamily,lineColor:e.colorTextSecondary,mainBkg:e.colorBgContainer,noteBkgColor:e.colorInfoBg,noteTextColor:e.colorInfoText,pie1:e.geekblue,pie2:e.colorWarning,pie3:e.colorSuccess,pie4:e.colorError,primaryBorderColor:e.colorBorder,primaryColor:e.colorBgContainer,primaryTextColor:e.colorText,secondaryBorderColor:e.colorInfoBorder,secondaryColor:e.colorInfoBg,secondaryTextColor:e.colorInfoText,tertiaryBorderColor:e.colorSuccessBorder,tertiaryColor:e.colorSuccessBg,tertiaryTextColor:e.colorSuccessText,textColor:e.colorText}}),wr=(e,{id:t,theme:r})=>{const n=_e(),[o,a]=h.useState(""),i=h.useMemo(()=>Ve(n,r),[n.fontFamilyCode,n.isDarkMode,n.colorTextDescription,n.fontFamily,n.colorTextSecondary,n.colorBgContainer,n.colorInfoBg,n.colorInfoText,n.geekblue,n.colorWarning,n.colorSuccess,n.colorError,n.colorBorder,n.colorInfoBorder,n.colorSuccessBorder,n.colorSuccessBg,n.colorSuccessText,n.colorText,r]),l=h.useMemo(()=>{const c=e.length<br?e:Nt.hashStr(e);return[t,r||(n.isDarkMode?"d":"l"),c].filter(Boolean).join("-")},[e,t,n.isDarkMode,r]);return h.useEffect(()=>{const c=P.get(l);if(c){c.then(s=>{a(s)}).catch(()=>{});return}const d=(async()=>{try{const s=await qe();if(!s)return"";if(await s.parse(e)){s.initialize(i);const{svg:u}=await s.render(t,e);return u}else throw new Error("Mermaid 语法无效")}catch(s){return console.error("Mermaid 解析错误:",s),""}})();P.set(l,d),xr(),d.then(s=>{P.get(l)===d&&a(s)}).catch(()=>{P.get(l)===d&&P.delete(l)})},[l,e,t,i]),o},Ke=h.memo(({children:e,className:t,fallbackClassName:r,ref:n,style:o,theme:a,variant:i})=>{const l=e??"",c=a==="lobe-theme"||!a,d=h.useMemo(()=>{if(!c)return Xe.find(f=>f.id===a)?.background},[c,a]),s=wr(l,{id:Qe(`mermaid-${h.useId()}`),theme:c?void 0:a}),u=!s,[m,g]=h.useState();return h.useEffect(()=>()=>{m&&URL.revokeObjectURL(m)},[m]),h.useEffect(()=>{if(u||!s)return;let f=s;if(typeof window<"u"&&typeof navigator<"u"&&navigator.userAgent.includes("Firefox")){const y=new DOMParser().parseFromString(s,"image/svg+xml"),x=y.documentElement;if(x&&x.hasAttribute("viewBox")){const b=x.getAttribute("viewBox").split(" ");Array.isArray(b)&&b.length===4&&(x.setAttribute("width",b[2]),x.setAttribute("height",b[3])),f=new XMLSerializer().serializeToString(y)}}const w=new Blob([f],{type:"image/svg+xml"});g(URL.createObjectURL(w))},[u,s]),m?p.jsx(de,{alt:"mermaid",className:t,maxHeight:480,minWidth:300,objectFit:"contain",ref:n,src:m,variant:"borderless",width:"100%",style:{background:i==="filled"?d:void 0,borderRadius:0,margin:0,minWidth:300,padding:i==="borderless"?0:16,position:"relative",width:"100%",...o}}):p.jsx("div",{className:r,style:o,children:p.jsx("div",{style:{padding:16},children:"Loading..."})})});Ke.displayName="StaticMermaid";var vr=Ke;const kr=(e,{enabled:t=!0,id:r,theme:n})=>{const o=_e(),[a,i]=h.useState(""),l=h.useRef(""),c=h.useRef(e),d=h.useRef(void 0),s=h.useMemo(()=>Ve(o,n),[o.fontFamilyCode,o.isDarkMode,o.colorTextDescription,o.fontFamily,o.colorTextSecondary,o.colorBgContainer,o.colorInfoBg,o.colorInfoText,o.geekblue,o.colorWarning,o.colorSuccess,o.colorError,o.colorBorder,o.colorInfoBorder,o.colorSuccessBorder,o.colorSuccessBg,o.colorSuccessText,o.colorText,n]);return h.useEffect(()=>{c.current=e},[e]),h.useEffect(()=>{if(!t){i(""),l.current="";const g=d.current;g&&clearTimeout(g);return}const u=c.current;if(u===l.current&&a)return;const m=d.current;return m&&clearTimeout(m),d.current=setTimeout(async()=>{const g=c.current;if(g===u)try{const f=await qe();if(!f)return;if(await f.parse(g)){f.initialize(s);const{svg:w}=await f.render(r,g);c.current===g&&(i(w),l.current=g)}}catch(f){g===c.current&&console.error("Mermaid 解析错误:",f)}},300),()=>{const g=d.current;g&&clearTimeout(g)}},[t,e,r,s,a]),a},et=h.memo(({children:e,className:t,fallbackClassName:r,ref:n,style:o,theme:a,variant:i})=>{const l=e??"",c=a==="lobe-theme"||!a,d=h.useMemo(()=>{if(!c)return Xe.find(f=>f.id===a)?.background},[c,a]),s=kr(l,{enabled:!0,id:Qe(`mermaid-${h.useId()}`),theme:c?void 0:a}),u=!s,[m,g]=h.useState();return h.useEffect(()=>()=>{m&&URL.revokeObjectURL(m)},[m]),h.useEffect(()=>{if(u||!s){g(void 0);return}let f=s;if(typeof window<"u"&&typeof navigator<"u"&&navigator.userAgent.includes("Firefox")){const y=new DOMParser().parseFromString(s,"image/svg+xml"),x=y.documentElement;if(x&&x.hasAttribute("viewBox")){const b=x.getAttribute("viewBox").split(" ");Array.isArray(b)&&b.length===4&&(x.setAttribute("width",b[2]),x.setAttribute("height",b[3])),f=new XMLSerializer().serializeToString(y)}}const w=new Blob([f],{type:"image/svg+xml"});g(URL.createObjectURL(w))},[u,s]),m?p.jsx(de,{alt:"mermaid",className:t,maxHeight:480,minWidth:300,objectFit:"contain",ref:n,src:m,variant:"borderless",width:"100%",style:{background:i==="filled"?d:void 0,borderRadius:0,margin:0,minWidth:300,padding:i==="borderless"?0:16,position:"relative",width:"100%",...o}}):p.jsx("div",{className:r,style:o,children:p.jsx("div",{style:{padding:16},children:"Rendering..."})})});et.displayName="StreamMermaid";var Mr=et;const Nr=Ct`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,_=G(({css:e,cssVar:t})=>({animated:e`
      img {
        opacity: 1;
        animation: ${Nr} 0.5s ease-in-out;
      }
    `,mermaid:N("ant-mermaid-mermaid",e`
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      `),noBackground:e`
      img {
        background: transparent !important;
      }
    `,noPadding:e`
      padding: 0;
    `,padding:e`
      padding: 16px;
    `,root:e`
      direction: ltr;
      margin: 0;
      padding: 0;
      text-align: start;
    `,unmermaid:e`
      color: ${t.colorTextDescription};
    `})),xe=se(_.root,{defaultVariants:{animated:!1,mermaid:!0,showBackground:!1,variant:"borderless"},variants:{mermaid:{false:_.unmermaid,true:_.mermaid},showBackground:{false:_.noBackground,true:null},animated:{true:_.animated,false:null},variant:{filled:_.padding,outlined:_.padding,borderless:_.noPadding}}}),tt=h.memo(({animated:e,children:t,className:r,fallbackClassName:n,ref:o,style:a,theme:i,variant:l="borderless"})=>{const c=i==="lobe-theme"||!i,d=!c&&l==="filled",s=c?void 0:i,u=N(xe({animated:e,mermaid:!0,showBackground:d,variant:l}),r),m=N(xe({animated:e,mermaid:!1,showBackground:d,variant:l}),n);return e?p.jsx(Mr,{className:u,fallbackClassName:m,ref:o,style:a,theme:s,variant:l,children:t}):p.jsx(vr,{className:u,fallbackClassName:m,ref:o,style:a,theme:s,variant:l,children:t})},(e,t)=>e.children===t.children&&e.animated===t.animated);tt.displayName="SyntaxMermaid";var jr=tt;const Cr=h.memo(({fileName:e,language:t,showLanguage:r})=>r?p.jsxs(T,{horizontal:!0,align:"center",className:"languageTitle",flex:1,gap:4,justify:"flex-start",paddingInline:8,children:[p.jsx(Dt,{fallbackUnknownType:!1,filename:e||t,size:18,type:"file",variant:"raw"}),p.jsx(St,{ellipsis:!0,fontSize:13,children:e||"Mermaid"})]}):null,(e,t)=>e.fileName===t.fileName&&e.language===t.language&&e.showLanguage===t.showLanguage),Ir=h.memo(({showLanguage:e,styles:t,classNames:r,content:n,children:o,className:a,copyable:i,actionsRender:l,style:c,variant:d,shadow:s,language:u="mermaid",fileName:m,defaultExpand:g=!0,...f})=>{const[w,y]=h.useState(g),x=h.useRef(n);h.useEffect(()=>{x.current=n},[n]);const b=h.useCallback(()=>x.current,[]),k=h.useMemo(()=>i?p.jsx(Pe,{content:b,size:"small"}):null,[i,b]),E=h.useMemo(()=>l?l({actionIconSize:"small",content:n,getContent:b,originalNode:k}):k,[l,n,b,k]),j=h.useCallback(()=>{y(D=>!D)},[]);return p.jsxs(T,{className:N(Be({shadow:s,variant:d}),a),"data-code-type":"mermaid",style:c,...f,children:[p.jsxs(T,{horizontal:!0,align:"center",className:N(Tt({variant:d}),r?.header),justify:"space-between",style:t?.header,onClick:j,children:[p.jsx(Cr,{fileName:m,language:u,showLanguage:e}),p.jsxs(T,{horizontal:!0,align:"center",flex:"none",gap:4,onClick:It,children:[p.jsx(T,{horizontal:!0,align:"center",className:"panel-actions",flex:"none",gap:4,children:E}),p.jsx(z,{icon:w?Gt:Ht,size:"small",onClick:j})]})]}),p.jsx(T,{className:N(Et({expand:w}),r?.body),style:t?.body,children:o})]})});var Tr=Ir;const rt=h.memo(({actionIconSize:e,animated:t,bodyRender:r,children:n,classNames:o,className:a,copyable:i=!0,defaultExpand:l=!0,fileName:c,fullFeatured:d,language:s="mermaid",actionsRender:u,shadow:m,showLanguage:g=!0,style:f,styles:w,theme:y,variant:x="filled",...b})=>{const k=n.trim(),E=h.useRef(k);h.useEffect(()=>{E.current=k},[k]);const j=h.useCallback(()=>E.current,[]),D=h.useMemo(()=>i?p.jsx(Pe,{content:j,size:e||{blockSize:28,size:16}}):null,[e,i,j]),I=h.useMemo(()=>u?u({actionIconSize:e,content:k,getContent:j,originalNode:D}):D,[e,u,j,D,k]),S=h.useMemo(()=>p.jsx(jr,{animated:t,className:o?.content,style:w?.content,theme:y,variant:x,children:k}),[t,y,k,x,o?.content,w?.content]),R=h.useMemo(()=>r?r({content:k,originalNode:S}):S,[r,S,k]);return d?p.jsx(Tr,{actionsRender:u,className:a,classNames:o,content:k,copyable:i,defaultExpand:l,fileName:c,language:s,shadow:m,showLanguage:g,style:f,styles:w,variant:x,...b,children:R}):p.jsxs("div",{className:N(Be({shadow:m,variant:x}),a),"data-code-type":"mermaid",style:f,...b,children:[p.jsx(T,{horizontal:!0,align:"center",className:he.actions,flex:"none",gap:4,children:I}),g&&p.jsx(Lt,{className:he.lang,children:s.toLowerCase()}),R]})});rt.displayName="Mermaid";var Er=rt;const we="lobe-video-mask",Q=G(({css:e,cssVar:t})=>{const r=e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    width: 100%;
    height: 100%;

    opacity: 0;
    background: ${t.colorBgMask};

    transition: opacity 0.2s ease;
  `;return{borderless:O.variantBorderlessWithoutHover,filled:N(O.variantOutlinedWithoutHover,O.variantFilledWithoutHover),mask:N(we,r),outlined:O.variantOutlinedWithoutHover,root:e`
      position: relative;

      overflow: hidden;

      width: 100%;
      min-width: var(--video-min-width, unset);
      max-width: var(--video-max-width, 100%);
      height: auto;
      min-height: var(--video-min-height, unset);
      max-height: var(--video-max-height, 100%);
      margin-block: 0 1em;
      border-radius: ${t.borderRadius};

      background: ${t.colorFillTertiary};

      &:hover {
        [class*='${we}'] {
          opacity: 1;
        }
      }
    `,video:e`
      cursor: pointer;
      width: 100%;
    `}}),Dr=se(Q.root,{defaultVariants:{variant:"filled"},variants:{variant:{filled:Q.filled,outlined:Q.outlined,borderless:Q.borderless}}}),nt=h.memo(({ref:e,preload:t="auto",src:r,style:n,classNames:o,className:a,maxHeight:i="100%",maxWidth:l="100%",minHeight:c,minWidth:d,onEnded:s,onPause:u,onPlay:m,onPlaying:g,width:f,height:w,onMouseEnter:y,styles:x,onMouseLeave:b,preview:k=!0,isLoading:E,variant:j="filled",autoPlay:D,...I})=>{const[S,R]=h.useState(!1),[q,Y]=h.useState(!1),oe=h.useMemo(()=>{const C={};return i!==void 0&&(C["--video-max-height"]=typeof i=="number"?`${i}px`:i),l!==void 0&&(C["--video-max-width"]=typeof l=="number"?`${l}px`:l),c!==void 0&&(C["--video-min-height"]=typeof c=="number"?`${c}px`:c),d!==void 0&&(C["--video-min-width"]=typeof d=="number"?`${d}px`:d),C},[i,l,c,d]);return E?p.jsx(ze.Avatar,{active:!0,style:{borderRadius:Oe.borderRadiusLG,height:w,maxHeight:i,maxWidth:l,minHeight:c,minWidth:d,width:f}}):p.jsxs(T,{className:N(Dr({variant:j}),a,o?.wrapper),height:w,ref:e,width:f,style:{...oe,...n,...x?.wrapper},children:[k&&!S&&p.jsx(T,{align:"center",className:N(Q.mask,o?.mask),justify:"center",style:x?.mask,children:p.jsx(z,{color:"#fff",icon:Yt,variant:"filled"})}),p.jsx("video",{autoPlay:D,className:N(Q.video,o?.video),controls:q,height:w,preload:t,width:f,style:{height:"auto",maxWidth:"100%",...x?.video},onEnded:C=>{R(!1),s?.(C)},onMouseEnter:C=>{Y(!0),y?.(C)},onMouseLeave:C=>{Y(!1),b?.(C)},onPause:C=>{R(!1),u?.(C)},onPlay:C=>{R(!0),m?.(C)},onPlaying:C=>{R(!0),g?.(C)},...I,children:p.jsx("source",{src:r})})]})});nt.displayName="Video";var Sr=nt;const Lr=".ignore-markdown-style",Ar=G(({cssVar:e,css:t})=>{const r=t`
    --lobe-markdown-font-size: 16px;
    --lobe-markdown-header-multiple: 1;
    --lobe-markdown-margin-multiple: 2;
    --lobe-markdown-line-height: 1.8;
    --lobe-markdown-border-radius: ${e.borderRadiusLG};
    --lobe-markdown-border-color: ${e.colorFillQuaternary};

    position: relative;

    width: 100%;
    max-width: 100%;
    padding-inline: 1px;

    font-size: var(--lobe-markdown-font-size);
    line-height: var(--lobe-markdown-line-height);
    word-break: break-word;
  `,n=t`
    a {
      color: ${e.colorInfoText};

      &:hover {
        color: ${e.colorInfoHover};
      }
    }
  `,o=t`
    blockquote {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      margin-inline: 0;
      padding-block: 0;
      padding-inline: 1em;
      border-inline-start: solid 4px ${e.colorBorder};

      color: ${e.colorTextSecondary};
    }
  `,a=t`
    code {
      &:not(:has(span)) {
        display: inline;

        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;
        border: 1px solid var(--lobe-markdown-border-color);
        border-radius: 0.25em;

        font-family: ${e.fontFamilyCode};
        font-size: 0.875em;
        line-height: 1;
        word-break: break-word;
        white-space: break-spaces;

        background: ${e.colorFillSecondary};
      }
    }
  `,i=t`
    del {
      color: ${e.colorTextDescription};
      text-decoration: line-through;
    }
  `,l=t`
    details {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      padding-block: 0.75em;
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      background: ${e.colorFillTertiary};
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);

      summary {
        cursor: pointer;
        display: flex;
        align-items: center;
        list-style: none;

        &::before {
          content: '';

          position: absolute;
          inset-inline-end: 1.25em;
          transform: rotateZ(-45deg);

          display: block;

          width: 0.4em;
          height: 0.4em;
          border-block-end: 1.5px solid ${e.colorTextSecondary};
          border-inline-end: 1.5px solid ${e.colorTextSecondary};

          font-family: ${e.fontFamily};

          transition: transform 200ms ${e.motionEaseOut};
        }
      }

      &[open] {
        summary {
          padding-block-end: 0.75em;
          border-block-end: 1px dashed ${e.colorBorder};

          &::before {
            transform: rotateZ(45deg);
          }
        }
      }
    }
  `,c=t`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block: max(
        calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.4em),
        var(--lobe-markdown-font-size)
      );
      font-weight: bold;
      line-height: 1.25;
    }

    h1 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
      );
    }

    h2 {
      font-size: calc(var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple)));
    }

    h3 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
      );
    }

    h4 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
      );
    }

    h5,
    h6 {
      font-size: calc(var(--lobe-markdown-font-size) * 1);
    }
  `,d=t`
    hr {
      width: 100%;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);
      border-color: ${e.colorBorder};
      border-style: dashed;
      border-width: 1px;
      border-block-start: none;
      border-inline-start: none;
      border-inline-end: none;
    }
  `,s=t`
    img {
      max-width: 100%;
    }

    > img,
    > p > img {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    }
  `,u=t`
    li {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.33em);

      p:first-child {
        display: inline;
      }
    }

    ul,
    ol {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      margin-inline-start: 1em;
      padding-inline-start: 0;
      list-style-position: outside;

      > ul,
      > ol {
        margin-block: 0;
      }

      > li {
        margin-inline-start: 1em;
      }
    }

    ol {
      list-style: auto;
    }

    ul {
      list-style-type: none;

      > li {
        &::before {
          content: '-';

          position: absolute;

          display: inline-block;

          margin-inline: -1em 0.5em;

          opacity: 0.5;
        }
      }
    }

    .task-list-item {
      &::before {
        display: none !important;
      }

      input[type='checkbox'] {
        margin-block: 0 0.25em;
        margin-inline: -1.6em 0.2em;
        vertical-align: middle;
      }

      input[type='checkbox']:dir(rtl) {
        margin: 0 -1.6em 0.25em 0.2em;
      }
    }
  `,m=t`
    p {
      margin-block: 4px;
      line-height: var(--lobe-markdown-line-height);
      letter-spacing: 0.02em;

      &:not(:first-child) {
        margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      &:not(:last-child) {
        margin-block-end: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }
    }
  `,g=t`
    pre {
      font-size: calc(var(--lobe-markdown-font-size) * 0.85);
    }
  `,f=t`
    strong {
      font-weight: 600;
    }
  `,w=t`
    svg {
      line-height: 1;
    }
  `,y=t`
    table {
      unicode-bidi: isolate;
      overflow: auto hidden;
      display: block;
      border-spacing: 0;
      border-collapse: collapse;

      box-sizing: border-box;
      width: max-content;
      max-width: 100%;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      text-align: start;
      text-indent: initial;
      text-wrap: pretty;
      word-break: auto-phrase;
      overflow-wrap: break-word;

      background: ${e.colorFillQuaternary};
      box-shadow: 0 0 0 1px ${e.colorBorderSecondary};

      code {
        word-break: break-word;
      }

      thead {
        background: ${e.colorFillQuaternary};
      }

      tr {
        box-shadow: 0 1px 0 ${e.colorBorderSecondary};
      }

      th,
      td {
        min-width: 120px;
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
      }
    }
  `,x=t`
    > video,
    > p > video {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    }

    video {
      max-width: 100%;
    }
  `,b=t`
    .footnotes {
      margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 1em);
      font-size: smaller;
      color: #8b949e;

      #footnote-label {
        display: none;
      }

      > ol {
        margin: 0 !important;
      }
    }
  `,k=t`
    sup {
      position: relative;
      inset-block-start: -0.25em;

      font-size: 0.75em;
      line-height: var(--lobe-markdown-line-height);
      vertical-align: baseline;
    }
  `;return{root:t`
      :not(:has(${Lr})),
      .markdown {
        ${[r,n,o,a,i,l,c,d,s,u,m,g,f,w,y,x,b,t`
    sub {
      position: relative;
      inset-block-end: -0.25em;

      font-size: 0.75em;
      line-height: var(--lobe-markdown-line-height);
      vertical-align: baseline;
    }
  `,k]}
      }
    `}}),ot=h.memo(({ref:e,children:t,className:r,fontSize:n=16,headerMultiple:o=1,marginMultiple:a=2,lineHeight:i=1.8,borderRadius:l=8,style:c,...d})=>p.jsx("article",{className:N(Ar.root,r),ref:e,style:{"--lobe-markdown-border-radius":l,"--lobe-markdown-font-size":`${n}px`,"--lobe-markdown-header-multiple":o,"--lobe-markdown-line-height":i,"--lobe-markdown-margin-multiple":a,...c},...d,children:t}));ot.displayName="Typography";var Hn=ot;const ue=G(({css:e})=>({container:e`
    overflow: hidden;
    margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
    border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
    box-shadow: 0 0 0 1px var(--lobe-markdown-border-color) inset;
  `})),it=({fullFeatured:e,fileName:t,allowChangeLanguage:r,language:n=Ue,children:o,className:a,style:i,variant:l="filled",icon:c,theme:d,...s})=>p.jsx(At,{allowChangeLanguage:r,className:N(ue.container,a),fileName:t,fullFeatured:e,icon:c,language:n,style:i,theme:d,variant:l,...s,children:o}),Yn=({language:e=Ue,children:t,className:r,style:n,variant:o="filled",...a})=>p.jsx($t,{className:N(ue.container,r),"data-code-type":"highlighter",language:e,style:n,variant:o,...a,children:t}),Zn=({animated:e,fullFeatured:t,children:r,className:n,style:o,variant:a="filled",theme:i,...l})=>p.jsx(Er,{animated:e,className:N(ue.container,n),fullFeatured:t,style:o,theme:i,variant:a,...l,children:r});it.displayName="MdxPre";var Wn=it;const at=({style:e,alt:t="img",...r})=>p.jsx(de,{alt:t,style:{borderRadius:"calc(var(--lobe-markdown-border-radius) * 1px)",marginBlock:"calc(var(--lobe-markdown-margin-multiple) * 1em)",...e},...r});at.displayName="MdxImage";var $n=at;const Rr=e=>{if(typeof e!="string")return;let t;try{t=JSON.parse(e)}catch{return}return t},J=G(({css:e,cssVar:t})=>({container:e`
    display: inline-flex;
    line-height: var(--lobe-markdown-line-height);
    vertical-align: baseline;

    a {
      color: inherit;
    }
  `,link:e`
    cursor: pointer;
    color: ${t.colorTextSecondary};

    :hover {
      color: ${t.colorText};
    }
  `,supContainer:e`
    vertical-align: super;
  `,url:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    max-width: 400px;

    text-overflow: ellipsis;
  `})),lt=({children:e,usePopover:t,title:r,alt:n,url:o})=>{const[a,i,l]=h.useMemo(()=>{try{const c=new URL(o),d=c.host;let s=r;r===o&&(s="");let u=c.hostname.replace("www.","");return s||(u=o),[s,u,d]}catch{return[r,o,o]}},[o,r]);return t&&o?p.jsx(qt,{arrow:!1,trigger:"hover",content:p.jsxs(T,{gap:8,children:[p.jsxs(T,{horizontal:!0,className:J.link,gap:12,justify:"space-between",onClick:()=>{window.open(o,"_blank")},children:[p.jsxs(T,{horizontal:!0,align:"center",gap:4,children:[p.jsx("img",{alt:n||r||o,height:14,src:`https://icons.duckduckgo.com/ip3/${l}.ico`,style:{borderRadius:4},width:14}),p.jsx("span",{className:J.url,children:i})]}),p.jsx(ce,{icon:Zt})]}),a]}),children:e}):e};lt.displayName="MdxPopoverPanel";var ve=lt;const st=({children:e,href:t,inSup:r,id:n,citationDetail:o})=>{const a=!Wt(o),i=o?.url||t;return r?p.jsx(ve,{...o,usePopover:a,children:p.jsx("span",{className:J.container,children:p.jsx("a",{"aria-describedby":"footnote-label","data-footnote-ref":"true",href:i,id:n,rel:"noreferrer",target:o?.url?"_blank":void 0,children:e})})}):p.jsx(ve,{...o,usePopover:a,children:p.jsx("sup",{className:N(J.container,J.supContainer),children:i?p.jsx("a",{"aria-describedby":"footnote-label","data-footnote-ref":!0,href:i,rel:"noreferrer",target:"_blank",children:e}):p.jsx("span",{"aria-describedby":"footnote-label","data-footnote-ref":!0,children:e})})})};st.displayName="MdxCitation";var ke=st;const ct=({href:e,target:t,citations:r,...n})=>{if(n["data-footnote-ref"])return p.jsx(ke,{inSup:!0,citationDetail:Rr(n["data-link"]),href:e,id:n.id,children:n.children});const o=e?.match(/citation-(\d+)/);if(o){const i=Number.parseInt(o[1])-1,l=r?.[i];return p.jsx(ke,{citationDetail:l,id:o[1],children:o[1]})}const a=e?.startsWith("http");return p.jsx(er,{href:e,target:t||a?"_blank":void 0,...n})};ct.displayName="MdxLink";var Jn=ct;const dt=({style:e,...t})=>p.jsx(Sr,{preview:!1,style:{borderRadius:"calc(var(--lobe-markdown-border-radius) * 1px)",marginBlock:"calc(var(--lobe-markdown-margin-multiple) * 1em)",...e},...t});dt.displayName="MdxVdieo";var Xn=dt;const ut=-1,ne=0,X=1,te=2,pe=3,me=4,fe=5,ge=6,pt=7,mt=8,Me=typeof self=="object"?self:globalThis,zr=(e,t)=>{const r=(o,a)=>(e.set(a,o),o),n=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case ne:case ut:return r(i,o);case X:{const l=r([],o);for(const c of i)l.push(n(c));return l}case te:{const l=r({},o);for(const[c,d]of i)l[n(c)]=n(d);return l}case pe:return r(new Date(i),o);case me:{const{source:l,flags:c}=i;return r(new RegExp(l,c),o)}case fe:{const l=r(new Map,o);for(const[c,d]of i)l.set(n(c),n(d));return l}case ge:{const l=r(new Set,o);for(const c of i)l.add(n(c));return l}case pt:{const{name:l,message:c}=i;return r(new Me[l](c),o)}case mt:return r(BigInt(i),o);case"BigInt":return r(Object(BigInt(i)),o);case"ArrayBuffer":return r(new Uint8Array(i).buffer,i);case"DataView":{const{buffer:l}=new Uint8Array(i);return r(new DataView(l),i)}}return r(new Me[a](i),o)};return n},Ne=e=>zr(new Map,e)(0),U="",{toString:Or}={},{keys:_r}=Object,Z=e=>{const t=typeof e;if(t!=="object"||!e)return[ne,t];const r=Or.call(e).slice(8,-1);switch(r){case"Array":return[X,U];case"Object":return[te,U];case"Date":return[pe,U];case"RegExp":return[me,U];case"Map":return[fe,U];case"Set":return[ge,U];case"DataView":return[X,r]}return r.includes("Array")?[X,r]:r.includes("Error")?[pt,r]:[te,r]},K=([e,t])=>e===ne&&(t==="function"||t==="symbol"),Pr=(e,t,r,n)=>{const o=(i,l)=>{const c=n.push(i)-1;return r.set(l,c),c},a=i=>{if(r.has(i))return r.get(i);let[l,c]=Z(i);switch(l){case ne:{let s=i;switch(c){case"bigint":l=mt,s=i.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);s=null;break;case"undefined":return o([ut],i)}return o([l,s],i)}case X:{if(c){let m=i;return c==="DataView"?m=new Uint8Array(i.buffer):c==="ArrayBuffer"&&(m=new Uint8Array(i)),o([c,[...m]],i)}const s=[],u=o([l,s],i);for(const m of i)s.push(a(m));return u}case te:{if(c)switch(c){case"BigInt":return o([c,i.toString()],i);case"Boolean":case"Number":case"String":return o([c,i.valueOf()],i)}if(t&&"toJSON"in i)return a(i.toJSON());const s=[],u=o([l,s],i);for(const m of _r(i))(e||!K(Z(i[m])))&&s.push([a(m),a(i[m])]);return u}case pe:return o([l,i.toISOString()],i);case me:{const{source:s,flags:u}=i;return o([l,{source:s,flags:u}],i)}case fe:{const s=[],u=o([l,s],i);for(const[m,g]of i)(e||!(K(Z(m))||K(Z(g))))&&s.push([a(m),a(g)]);return u}case ge:{const s=[],u=o([l,s],i);for(const m of i)(e||!K(Z(m)))&&s.push(a(m));return u}}const{message:d}=i;return o([l,{name:c,message:d}],i)};return a},je=(e,{json:t,lossy:r}={})=>{const n=[];return Pr(!(t||r),!!t,new Map,n)(e),n},re=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Ne(je(e,t)):structuredClone(e):(e,t)=>Ne(je(e,t)),ft=ht("end"),gt=ht("start");function ht(e){return t;function t(r){const n=r&&r.position&&r.position[e]||{};if(typeof n.line=="number"&&n.line>0&&typeof n.column=="number"&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset=="number"&&n.offset>-1?n.offset:void 0}}}function Br(e){const t=gt(e),r=ft(e);if(t&&r)return{start:t,end:r}}function H(e){const t=[];let r=-1,n=0,o=0;for(;++r<e.length;){const a=e.charCodeAt(r);let i="";if(a===37&&ye(e.charCodeAt(r+1))&&ye(e.charCodeAt(r+2)))o=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(i=String.fromCharCode(a));else if(a>55295&&a<57344){const l=e.charCodeAt(r+1);a<56320&&l>56319&&l<57344?(i=String.fromCharCode(a,l),o=1):i="�"}else i=String.fromCharCode(a);i&&(t.push(e.slice(n,r),encodeURIComponent(i)),n=r+o+1,i=""),o&&(r+=o,o=0)}return t.join("")+e.slice(n)}const Ur=/[$_\p{ID_Start}]/u,Fr=/[$_\u{200C}\u{200D}\p{ID_Continue}]/u,Qr=/[-$_\u{200C}\u{200D}\p{ID_Continue}]/u,Gr=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Hr=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yt={};function qn(e){return e?Ur.test(String.fromCodePoint(e)):!1}function Vn(e,t){const n=(t||yt).jsx?Qr:Fr;return e?n.test(String.fromCodePoint(e)):!1}function Kn(e,t){return((t||yt).jsx?Hr:Gr).test(e)}var F={},ae,Ce;function Yr(){if(Ce)return ae;Ce=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t=/\n/g,r=/^\s*/,n=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,i=/^[;\s]*/,l=/^\s+|\s+$/g,c=`
`,d="/",s="*",u="",m="comment",g="declaration";function f(y,x){if(typeof y!="string")throw new TypeError("First argument must be a string");if(!y)return[];x=x||{};var b=1,k=1;function E(M){var v=M.match(t);v&&(b+=v.length);var A=M.lastIndexOf(c);k=~A?M.length-A:k+M.length}function j(){var M={line:b,column:k};return function(v){return v.position=new D(M),R(),v}}function D(M){this.start=M,this.end={line:b,column:k},this.source=x.source}D.prototype.content=y;function I(M){var v=new Error(x.source+":"+b+":"+k+": "+M);if(v.reason=M,v.filename=x.source,v.line=b,v.column=k,v.source=y,!x.silent)throw v}function S(M){var v=M.exec(y);if(v){var A=v[0];return E(A),y=y.slice(A.length),v}}function R(){S(r)}function q(M){var v;for(M=M||[];v=Y();)v!==!1&&M.push(v);return M}function Y(){var M=j();if(!(d!=y.charAt(0)||s!=y.charAt(1))){for(var v=2;u!=y.charAt(v)&&(s!=y.charAt(v)||d!=y.charAt(v+1));)++v;if(v+=2,u===y.charAt(v-1))return I("End of comment missing");var A=y.slice(2,v-2);return k+=2,E(A),y=y.slice(v),k+=2,M({type:m,comment:A})}}function oe(){var M=j(),v=S(n);if(v){if(Y(),!S(o))return I("property missing ':'");var A=S(a),wt=M({type:g,property:w(v[0].replace(e,u)),value:A?w(A[0].replace(e,u)):u});return S(i),wt}}function C(){var M=[];q(M);for(var v;v=oe();)v!==!1&&(M.push(v),q(M));return M}return R(),C()}function w(y){return y?y.replace(l,u):u}return ae=f,ae}var Ie;function Zr(){if(Ie)return F;Ie=1;var e=F&&F.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(F,"__esModule",{value:!0}),F.default=r;const t=e(Yr());function r(n,o){let a=null;if(!n||typeof n!="string")return a;const i=(0,t.default)(n),l=typeof o=="function";return i.forEach(c=>{if(c.type!=="declaration")return;const{property:d,value:s}=c;l?o(d,s,c):s&&(a=a||{},a[d]=s)}),a}return F}var W={},Te;function Wr(){if(Te)return W;Te=1,Object.defineProperty(W,"__esModule",{value:!0}),W.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,t=/-([a-z])/g,r=/^[^-]+$/,n=/^-(webkit|moz|ms|o|khtml)-/,o=/^-(ms)-/,a=function(d){return!d||r.test(d)||e.test(d)},i=function(d,s){return s.toUpperCase()},l=function(d,s){return"".concat(s,"-")},c=function(d,s){return s===void 0&&(s={}),a(d)?d:(d=d.toLowerCase(),s.reactCompat?d=d.replace(o,l):d=d.replace(n,l),d.replace(t,i))};return W.camelCase=c,W}var $,Ee;function $r(){if(Ee)return $;Ee=1;var e=$&&$.__importDefault||function(o){return o&&o.__esModule?o:{default:o}},t=e(Zr()),r=Wr();function n(o,a){var i={};return!o||typeof o!="string"||(0,t.default)(o,function(l,c){l&&c&&(i[(0,r.camelCase)(l,a)]=c)}),i}return n.default=n,$=n,$}var Jr=$r();const eo=Rt(Jr);function Xr(e,t){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,r),e.applyData(t,r)}function qr(e,t){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,r),[e.applyData(t,r),{type:"text",value:`
`}]}function Vr(e,t){const r=t.value?t.value+`
`:"",n={},o=t.lang?t.lang.split(/\s+/):[];o.length>0&&(n.className=["language-"+o[0]]);let a={type:"element",tagName:"code",properties:n,children:[{type:"text",value:r}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(t,a),a}function Kr(e,t){const r={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function en(e,t){const r={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function tn(e,t){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=String(t.identifier).toUpperCase(),o=H(n.toLowerCase()),a=e.footnoteOrder.indexOf(n);let i,l=e.footnoteCounts.get(n);l===void 0?(l=0,e.footnoteOrder.push(n),i=e.footnoteOrder.length):i=a+1,l+=1,e.footnoteCounts.set(n,l);const c={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+o,id:r+"fnref-"+o+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(i)}]};e.patch(t,c);const d={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,d),e.applyData(t,d)}function rn(e,t){const r={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function nn(e,t){if(e.options.allowDangerousHtml){const r={type:"raw",value:t.value};return e.patch(t,r),e.applyData(t,r)}}function bt(e,t){const r=t.referenceType;let n="]";if(r==="collapsed"?n+="[]":r==="full"&&(n+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+n}];const o=e.all(t),a=o[0];a&&a.type==="text"?a.value="["+a.value:o.unshift({type:"text",value:"["});const i=o[o.length-1];return i&&i.type==="text"?i.value+=n:o.push({type:"text",value:n}),o}function on(e,t){const r=String(t.identifier).toUpperCase(),n=e.definitionById.get(r);if(!n)return bt(e,t);const o={src:H(n.url||""),alt:t.alt};n.title!==null&&n.title!==void 0&&(o.title=n.title);const a={type:"element",tagName:"img",properties:o,children:[]};return e.patch(t,a),e.applyData(t,a)}function an(e,t){const r={src:H(t.url)};t.alt!==null&&t.alt!==void 0&&(r.alt=t.alt),t.title!==null&&t.title!==void 0&&(r.title=t.title);const n={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,n),e.applyData(t,n)}function ln(e,t){const r={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,r);const n={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(t,n),e.applyData(t,n)}function sn(e,t){const r=String(t.identifier).toUpperCase(),n=e.definitionById.get(r);if(!n)return bt(e,t);const o={href:H(n.url||"")};n.title!==null&&n.title!==void 0&&(o.title=n.title);const a={type:"element",tagName:"a",properties:o,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function cn(e,t){const r={href:H(t.url)};t.title!==null&&t.title!==void 0&&(r.title=t.title);const n={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function dn(e,t,r){const n=e.all(t),o=r?un(r):xt(t),a={},i=[];if(typeof t.checked=="boolean"){const s=n[0];let u;s&&s.type==="element"&&s.tagName==="p"?u=s:(u={type:"element",tagName:"p",properties:{},children:[]},n.unshift(u)),u.children.length>0&&u.children.unshift({type:"text",value:" "}),u.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<n.length;){const s=n[l];(o||l!==0||s.type!=="element"||s.tagName!=="p")&&i.push({type:"text",value:`
`}),s.type==="element"&&s.tagName==="p"&&!o?i.push(...s.children):i.push(s)}const c=n[n.length-1];c&&(o||c.type!=="element"||c.tagName!=="p")&&i.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:a,children:i};return e.patch(t,d),e.applyData(t,d)}function un(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const r=e.children;let n=-1;for(;!t&&++n<r.length;)t=xt(r[n])}return t}function xt(e){const t=e.spread;return t??e.children.length>1}function pn(e,t){const r={},n=e.all(t);let o=-1;for(typeof t.start=="number"&&t.start!==1&&(r.start=t.start);++o<n.length;){const i=n[o];if(i.type==="element"&&i.tagName==="li"&&i.properties&&Array.isArray(i.properties.className)&&i.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const a={type:"element",tagName:t.ordered?"ol":"ul",properties:r,children:e.wrap(n,!0)};return e.patch(t,a),e.applyData(t,a)}function mn(e,t){const r={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function fn(e,t){const r={type:"root",children:e.wrap(e.all(t))};return e.patch(t,r),e.applyData(t,r)}function gn(e,t){const r={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function hn(e,t){const r=e.all(t),n=r.shift(),o=[];if(n){const i={type:"element",tagName:"thead",properties:{},children:e.wrap([n],!0)};e.patch(t.children[0],i),o.push(i)}if(r.length>0){const i={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},l=gt(t.children[1]),c=ft(t.children[t.children.length-1]);l&&c&&(i.position={start:l,end:c}),o.push(i)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(o,!0)};return e.patch(t,a),e.applyData(t,a)}function yn(e,t,r){const n=r?r.children:void 0,a=(n?n.indexOf(t):1)===0?"th":"td",i=r&&r.type==="table"?r.align:void 0,l=i?i.length:t.children.length;let c=-1;const d=[];for(;++c<l;){const u=t.children[c],m={},g=i?i[c]:void 0;g&&(m.align=g);let f={type:"element",tagName:a,properties:m,children:[]};u&&(f.children=e.all(u),e.patch(u,f),f=e.applyData(u,f)),d.push(f)}const s={type:"element",tagName:"tr",properties:{},children:e.wrap(d,!0)};return e.patch(t,s),e.applyData(t,s)}function bn(e,t){const r={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}const De=9,Se=32;function xn(e){const t=String(e),r=/\r?\n|\r/g;let n=r.exec(t),o=0;const a=[];for(;n;)a.push(Le(t.slice(o,n.index),o>0,!0),n[0]),o=n.index+n[0].length,n=r.exec(t);return a.push(Le(t.slice(o),o>0,!1)),a.join("")}function Le(e,t,r){let n=0,o=e.length;if(t){let a=e.codePointAt(n);for(;a===De||a===Se;)n++,a=e.codePointAt(n)}if(r){let a=e.codePointAt(o-1);for(;a===De||a===Se;)o--,a=e.codePointAt(o-1)}return o>n?e.slice(n,o):""}function wn(e,t){const r={type:"text",value:xn(String(t.value))};return e.patch(t,r),e.applyData(t,r)}function vn(e,t){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,r),e.applyData(t,r)}const kn={blockquote:Xr,break:qr,code:Vr,delete:Kr,emphasis:en,footnoteReference:tn,heading:rn,html:nn,imageReference:on,image:an,inlineCode:ln,linkReference:sn,link:cn,listItem:dn,list:pn,paragraph:mn,root:fn,strong:gn,table:hn,tableCell:bn,tableRow:yn,text:wn,thematicBreak:vn,toml:ee,yaml:ee,definition:ee,footnoteDefinition:ee};function ee(){}function Mn(e,t){const r=[{type:"text",value:"↩"}];return t>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),r}function Nn(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function jn(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||Mn,n=e.options.footnoteBackLabel||Nn,o=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",i=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const d=e.footnoteById.get(e.footnoteOrder[c]);if(!d)continue;const s=e.all(d),u=String(d.identifier).toUpperCase(),m=H(u.toLowerCase());let g=0;const f=[],w=e.footnoteCounts.get(u);for(;w!==void 0&&++g<=w;){f.length>0&&f.push({type:"text",value:" "});let b=typeof r=="string"?r:r(c,g);typeof b=="string"&&(b={type:"text",value:b}),f.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+m+(g>1?"-"+g:""),dataFootnoteBackref:"",ariaLabel:typeof n=="string"?n:n(c,g),className:["data-footnote-backref"]},children:Array.isArray(b)?b:[b]})}const y=s[s.length-1];if(y&&y.type==="element"&&y.tagName==="p"){const b=y.children[y.children.length-1];b&&b.type==="text"?b.value+=" ":y.children.push({type:"text",value:" "}),y.children.push(...f)}else s.push(...f);const x={type:"element",tagName:"li",properties:{id:t+"fn-"+m},children:e.wrap(s,!0)};e.patch(d,x),l.push(x)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...re(i),id:"footnote-label"},children:[{type:"text",value:o}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const le={}.hasOwnProperty,Cn={};function In(e,t){const r=t||Cn,n=new Map,o=new Map,a=new Map,i={...kn,...r.handlers},l={all:d,applyData:En,definitionById:n,footnoteById:o,footnoteCounts:a,footnoteOrder:[],handlers:i,one:c,options:r,patch:Tn,wrap:Sn};return Vt(e,function(s){if(s.type==="definition"||s.type==="footnoteDefinition"){const u=s.type==="definition"?n:o,m=String(s.identifier).toUpperCase();u.has(m)||u.set(m,s)}}),l;function c(s,u){const m=s.type,g=l.handlers[m];if(le.call(l.handlers,m)&&g)return g(l,s,u);if(l.options.passThrough&&l.options.passThrough.includes(m)){if("children"in s){const{children:w,...y}=s,x=re(y);return x.children=l.all(s),x}return re(s)}return(l.options.unknownHandler||Dn)(l,s,u)}function d(s){const u=[];if("children"in s){const m=s.children;let g=-1;for(;++g<m.length;){const f=l.one(m[g],s);if(f){if(g&&m[g-1].type==="break"&&(!Array.isArray(f)&&f.type==="text"&&(f.value=Ae(f.value)),!Array.isArray(f)&&f.type==="element")){const w=f.children[0];w&&w.type==="text"&&(w.value=Ae(w.value))}Array.isArray(f)?u.push(...f):u.push(f)}}}return u}}function Tn(e,t){e.position&&(t.position=Br(e))}function En(e,t){let r=t;if(e&&e.data){const n=e.data.hName,o=e.data.hChildren,a=e.data.hProperties;if(typeof n=="string")if(r.type==="element")r.tagName=n;else{const i="children"in r?r.children:[r];r={type:"element",tagName:n,properties:{},children:i}}r.type==="element"&&a&&Object.assign(r.properties,re(a)),"children"in r&&r.children&&o!==null&&o!==void 0&&(r.children=o)}return r}function Dn(e,t){const r=t.data||{},n="value"in t&&!(le.call(r,"hProperties")||le.call(r,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Sn(e,t){const r=[];let n=-1;for(t&&r.push({type:"text",value:`
`});++n<e.length;)n&&r.push({type:"text",value:`
`}),r.push(e[n]);return t&&e.length>0&&r.push({type:"text",value:`
`}),r}function Ae(e){let t=0,r=e.charCodeAt(t);for(;r===9||r===32;)t++,r=e.charCodeAt(t);return e.slice(t)}function Re(e,t){const r=In(e,t),n=r.one(e,void 0),o=jn(r),a=Array.isArray(n)?{type:"root",children:n}:n||{type:"root",children:[]};return o&&a.children.push({type:"text",value:`
`},o),a}function to(e,t){return e&&"run"in e?async function(r,n){const o=Re(r,{file:n,...t});await e.run(o,n)}:function(r,n){return Re(r,{file:n,...e||t})}}export{er as A,de as I,Jn as L,Er as M,Zn as P,jr as S,Hn as T,Xn as V,$n as a,Yn as b,Wn as c,ft as d,re as e,fr as f,tr as g,Gn as h,Sr as i,it as j,Br as k,qn as l,Xe as m,Kn as n,Vn as o,gt as p,to as r,eo as s};
