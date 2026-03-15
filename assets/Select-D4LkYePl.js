import{z as m,h as f,D as a,w as v,aF as h,I as p,l as S}from"./index-DTW0VVHo.js";import{r as w}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as o}from"../vendor/vendor-motion-D2gXNOxm.js";import{aK as x}from"../vendor/vendor-icons-UxbXHH06.js";const s=f(({css:e,cssVar:t})=>({borderless:e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${a.variantBorderless}
        }
      }
    `,filled:e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${a.variantFilled}
        }
      }
    `,outlined:e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${a.variantOutlined}
        }
      }
    `,root:e`
      &[class*='ant-select'] {
        &[class*='ant-select-focused'] {
          > [class*='ant-select-selector'] {
            background: ${t.colorFillTertiary} !important;
          }
        }
      }
    `,shadow:e`
      &[class*='ant-select'] {
        > [class*='ant-select-selector'] {
          ${a.shadow}
        }
      }
    `})),y=m(s.root,{defaultVariants:{shadow:!1},variants:{variant:{filled:s.filled,outlined:s.outlined,borderless:s.borderless,underlined:null},shadow:{false:null,true:s.shadow}}}),n=w.memo(({ref:e,variant:t,suffixIconProps:l,suffixIcon:c,shadow:i,className:d,...u})=>{const{isDarkMode:r}=v();return o.jsx(h,{ref:e,variant:t||(r?"filled":"outlined"),className:S(y({shadow:i,variant:t||(r?"filled":"outlined")}),d),suffixIcon:o.jsx(p,{icon:c||x,size:"small",...l,style:{pointerEvents:"none",...l?.style}}),...u})});n.displayName="Select";var F=n;export{F as S};
