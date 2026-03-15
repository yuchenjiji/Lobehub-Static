import{z as b,h as x,D as t,l,aw as M,aj as y,v as S}from"./index-C3MhWRwW.js";import{m as j}from"./utils-JrkUmfrY.js";import{r as i}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as n}from"../vendor/vendor-motion-D2gXNOxm.js";import{M as w}from"./index-CuVXm4oj.js";const a=x(({css:r,cssVar:o})=>({borderless:l(t.variantBorderlessWithoutHover,r`
      padding: 0;
      border-radius: unset;
    `),compact:r`
    &[class*='ant-menu'] {
      [class*='ant-menu-item-divider'] {
        margin: 0;
      }
    }
  `,filled:t.variantFilledWithoutHover,outlined:t.variantOutlinedWithoutHover,root:r`
    &[class*='ant-menu'] {
      flex: 1;

      padding: 4px;
      border: none !important;
      border-radius: ${o.borderRadiusLG};

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
  `,shadow:t.shadow})),B=b(a.root,{defaultVariants:{compact:!1,shadow:!1,variant:"borderless"},variants:{variant:{filled:a.filled,outlined:a.outlined,borderless:a.borderless},shadow:{false:null,true:a.shadow},compact:{false:null,true:a.compact}}}),d=i.memo(({compact:r,shadow:o,variant:m="borderless",className:c,selectable:u,iconProps:p,items:s,ref:v,...f})=>{const e=M(),g=i.useMemo(()=>s.map(h=>j(h)),[s]);return n.jsx(y,{theme:{components:{Menu:{controlHeightLG:36,iconMarginInlineEnd:8,iconSize:16,itemActiveBg:e.isDarkMode?e.colorFillQuaternary:e.colorFillSecondary,itemBorderRadius:e.borderRadius,itemColor:e.colorTextSecondary,itemHoverBg:e.colorFillTertiary,itemMarginBlock:4,itemMarginInline:4,itemSelectedBg:e.colorFillSecondary}}},children:n.jsx(S,{config:{size:"small",...p},children:n.jsx(w,{className:l(B({compact:r,shadow:o,variant:m}),c),inlineIndent:12,items:g,mode:"vertical",ref:v,selectable:u,...f})})})});d.displayName="Menu";var z=d;export{z as M};
