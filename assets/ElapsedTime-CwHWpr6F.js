import{j as d}from"../vendor/vendor-motion-D2gXNOxm.js";import{A as g}from"./ActionIconGroup-DraSFlPJ.js";import{h as x,l as y,j as b,y as h}from"./index-DTW0VVHo.js";import{r as a}from"../vendor/vendor-emotion-D8kPrniB.js";import{ba as A,bb as S,bc as T}from"../vendor/vendor-icons-UxbXHH06.js";const k=x(({css:e,cssVar:t})=>({generationActionButton:y("generation-actions",e`
      position: absolute;
      z-index: 10;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      opacity: 0;

      transition: opacity 0.1s ${t.motionEaseInOut};
    `),imageContainer:e`
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover .generation-actions {
      opacity: 1;
    }
  `,loadingContent:e`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    color: ${t.colorTextTertiary};
  `,placeholderContainer:e`
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover .generation-actions {
      opacity: 1;
    }
  `,spinIcon:e`
    color: ${t.colorPrimary};
  `})),v={tooltipProps:{placement:"left"}},B=a.memo(({onDelete:e,onDownload:t,onCopySeed:r,showDownload:s=!1,showCopySeed:n=!1,seedTooltip:c})=>{const{t:l}=b("image");return d.jsx(g,{actionIconProps:v,className:k.generationActionButton,horizontal:!1,variant:"outlined",items:a.useMemo(()=>[!!(s&&t)&&{icon:A,key:"download",label:l("generation.actions.download"),onClick:t},!!(n&&r)&&{icon:S,key:"copySeed",label:c,onClick:r},{danger:!0,icon:T,key:"delete",label:l("generation.actions.delete"),onClick:e}].filter(Boolean),[s,t,n,r,c,e])})});B.displayName="ActionButtons";const p=e=>`generation_start_time_${e}`;function I({generationId:e,isActive:t}){const[r,s]=a.useState(null),n=a.useRef(null),c=a.useRef(0);a.useEffect(()=>{if(!t){n.current&&(cancelAnimationFrame(n.current),n.current=null);const o=p(e);sessionStorage.removeItem(o),s(null);return}const i=p(e),m=(()=>{const o=sessionStorage.getItem(i);if(o)return Number(o);const u=Date.now();return sessionStorage.setItem(i,u.toString()),u})(),f=o=>{if(o-c.current>=100){const u=(Date.now()-m)/100;s(Math.max(0,u)),c.current=o}n.current=requestAnimationFrame(f)};return n.current=requestAnimationFrame(f),()=>{n.current&&cancelAnimationFrame(n.current)}},[e,t]);const l=(()=>{if(r===null)return"";const i=r/10;return i<60?`${i.toFixed(1)}s`:`${(i/60).toFixed(1)}min`})();return d.jsx(h,{code:!0,fontSize:10,type:"secondary",children:l})}export{B as A,I as E,k as s};
