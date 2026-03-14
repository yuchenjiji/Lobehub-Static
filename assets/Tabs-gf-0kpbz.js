import{h as l,z as u,A as x,l as m}from"./index-DuTkvx3R.js";import{j as s}from"../vendor/vendor-motion-D2gXNOxm.js";import{T as c}from"./index-Ta5FhJzD.js";import{ax as h}from"../vendor/vendor-icons-UxbXHH06.js";const r="ant",o=l(({css:a,cssVar:t})=>({compact:a`
      &.${r}-tabs {
        .${r}-tabs-tab {
          margin: 4px;

          + [class*='ant-tabs-tab'] {
            margin: 4px;
          }
        }
      }
    `,dropdown:a`
      .${r}-tabs-dropdown-menu {
        padding: 4px;
        border: 1px solid ${t.colorBorderSecondary};

        .${r}-tabs-dropdown-menu-item {
          border-radius: ${t.borderRadius};
        }
      }
    `,hideHolder:a`
      &.${r}-tabs {
        .${r}-tabs-content-holder {
          display: none;
        }

        .${r}-tabs-nav {
          margin: 0;

          &::before {
            display: none;
          }
        }
      }
    `,margin:a`
      &.${r}-tabs {
        .${r}-tabs-tab {
          margin: 8px;

          + .${r}-tabs-tab {
            margin: 8px;
          }
        }
      }
    `,point:a`
      &.${r}-tabs {
        &.${r}-tabs-top {
          .${r}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-start-start-radius: 4px;
            border-start-end-radius: 4px;
          }
        }

        &.${r}-tabs-bottom {
          .${r}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-end-start-radius: 4px;
            border-end-end-radius: 4px;
          }
        }

        &.${r}-tabs-left {
          .${r}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-start-radius: 4px;
            border-end-start-radius: 4px;
          }
        }

        &.${r}-tabs-right {
          .${r}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-end-radius: 4px;
            border-end-end-radius: 4px;
          }
        }
      }
    `,root:a`
      &.${r}-tabs {
        .${r}-tabs-tab {
          padding-block: 8px;
          padding-inline: 12px;
          color: ${t.colorTextSecondary};
          transition: background-color 100ms ease-out;

          &:hover {
            border-radius: ${t.borderRadius};
            color: ${t.colorText};
            background: ${t.colorFillTertiary};
          }
        }
      }
    `,rounded:a`
      &.${r}-tabs {
        &.${r}-tabs-top {
          .${r}-tabs-ink-bar {
            height: 3px;
            border-start-start-radius: 3px;
            border-start-end-radius: 3px;
          }
        }

        &.${r}-tabs-bottom {
          .${r}-tabs-ink-bar {
            height: 3px;
            border-end-start-radius: 3px;
            border-end-end-radius: 3px;
          }
        }

        &.${r}-tabs-left {
          .${r}-tabs-ink-bar {
            width: 3px;
            border-start-start-radius: 3px;
            border-end-start-radius: 3px;
          }
        }

        &.${r}-tabs-right {
          .${r}-tabs-ink-bar {
            width: 3px;
            border-start-end-radius: 3px;
            border-end-end-radius: 3px;
          }
        }
      }
    `})),$=u(o.root,{defaultVariants:{compact:!1,underlined:!1,variant:"rounded"},variants:{variant:{square:null,rounded:o.rounded,point:o.point},compact:{false:o.margin,true:o.compact},underlined:{false:o.hideHolder,true:null}}}),n=({className:a,compact:t,variant:i="rounded",items:e,...d})=>{const b=e?.some(p=>!!p.children);return s.jsx(c,{className:m($({compact:t,underlined:b,variant:i}),a),items:e,...d,classNames:{...d?.classNames,popup:{root:o.dropdown,...d?.classNames?.popup}},more:{icon:s.jsx(x,{icon:h}),...d?.more}})};n.displayName="Tabs";var T=n;export{T};
