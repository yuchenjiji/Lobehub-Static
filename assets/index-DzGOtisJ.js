import{j as n}from"../vendor/vendor-motion-D2gXNOxm.js";import{K as w,ak as C,h as b}from"./index-DuTkvx3R.js";import{S as T}from"./Select-BkljGf6h.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";import{P as v,M as f,T as E}from"./index-jbKGvbEo.js";import{u as I}from"./useEnabledChatModels-DhqfnLwI.js";const p="ant",R=C(({css:t},{popupWidth:s})=>({popup:t`
    width: ${s?typeof s=="number"?`${s}px`:s:"max(360px, var(--anchor-width))"};
  `})),c=b(({css:t})=>({popup:t`
    &.${p}-select-dropdown .${p}-select-item-option-grouped {
      padding-inline-start: 12px;
    }
  `,select:t`
    .${p}-select-selection-item {
      .${E} {
        display: none;
      }
    }
  `})),k=d.memo(({value:t,onChange:s,showAbility:u=!0,requiredAbilities:r,loading:h,size:x,style:$,variant:g,initialWidth:y=!1,popupWidth:m})=>{const{styles:S}=R({popupWidth:m}),i=I(),M=d.useMemo(()=>{const o=e=>(r&&r.length>0?e.children.filter(l=>r.every(j=>!!l.abilities?.[j])):e.children).map(l=>({...l,label:n.jsx(f,{...l,...l.abilities,showInfoTag:!1}),provider:e.id,value:`${e.id}/${l.id}`}));if(i.length===1){const e=i[0];return o(e)}return i.map(e=>{const a=o(e);if(a.length!==0)return{label:n.jsx(v,{logo:e.logo,name:e.name,provider:e.id,source:e.source}),options:a}}).filter(Boolean)},[i,r,u]);return n.jsx(w,{children:n.jsx(T,{className:c.select,defaultValue:`${t?.provider}/${t?.model}`,loading:h,options:M,popupClassName:m?`${c.popup} ${S.popup}`:c.popup,popupMatchSelectWidth:!1,size:x,value:`${t?.provider}/${t?.model}`,variant:g,optionRender:o=>n.jsx(f,{...o,...o.abilities,showInfoTag:!1}),style:{minWidth:200,width:y?"initial":void 0,...$},onChange:(o,e)=>{const a=o.split("/").slice(1).join("/");s?.({model:a,provider:e.provider})}})})});export{k as M};
