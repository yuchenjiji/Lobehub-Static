import{I as x,z as M,h as y,D as o,l as u,aw as I,aj as S,v as j}from"./index-CMYT05q7.js";import{r as d}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as i}from"../vendor/vendor-motion-ksfQGfvU.js";import{M as w}from"./index-C7P9lWxl.js";const c=e=>{switch(e?.type){case"divider":return e;case"group":{const{children:a,...r}=e;return{children:a?a?.map(s=>c(s)):void 0,...r}}default:{const{children:a,icon:r,...s}=e;return{children:a?a?.map(l=>c(l)):void 0,icon:r?d.isValidElement(r)?r:i.jsx(x,{icon:r,size:"small"}):void 0,...s}}}},n=y(({css:e,cssVar:a})=>({borderless:u(o.variantBorderlessWithoutHover,e`
      padding: 0;
      border-radius: unset;
    `),compact:e`
    &[class*='ant-menu'] {
      [class*='ant-menu-item-divider'] {
        margin: 0;
      }
    }
  `,filled:o.variantFilledWithoutHover,outlined:o.variantOutlinedWithoutHover,root:e`
    &[class*='ant-menu'] {
      flex: 1;

      padding: 4px;
      border: none !important;
      border-radius: ${a.borderRadiusLG};

      background: transparent;

      [class*='ant-menu-sub'][class*='ant-menu-inline'] {
        background: transparent;

        > [class*='ant-menu-item'] {
          padding-inline-start: 36px !important;
        }
      }

      [class*='ant-menu-item-divider'] {
        margin-block: 1em;
      }
    }
  `,shadow:o.shadow})),B=M(n.root,{defaultVariants:{compact:!1,shadow:!1,variant:"borderless"},variants:{variant:{filled:n.filled,outlined:n.outlined,borderless:n.borderless},shadow:{false:null,true:n.shadow},compact:{false:null,true:n.compact}}}),p=d.memo(({compact:e,shadow:a,variant:r="borderless",className:s,selectable:l,iconProps:v,items:m,ref:h,...f})=>{const t=I(),g=d.useMemo(()=>m.map(b=>c(b)),[m]);return i.jsx(S,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemActiveBg:t.isDarkMode?t.colorFillQuaternary:t.colorFillSecondary,itemBorderRadius:t.borderRadius,itemColor:t.colorTextSecondary,itemHoverBg:t.colorFillTertiary,itemMarginBlock:4,itemMarginInline:4,itemSelectedBg:t.colorFillSecondary}}},children:i.jsx(j,{config:{size:"small",...v},children:i.jsx(w,{className:u(B({compact:e,shadow:a,variant:r}),s),inlineIndent:12,items:g,mode:"vertical",ref:h,selectable:l,...f})})})});p.displayName="Menu";var E=p;export{E as M,c as m};
