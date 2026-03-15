import{h as R,g as $,aj as k,m as E,aU as M,A as B,l,aE as K,I as U}from"./index-Br4NLp7q.js";import{r as F}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as e}from"../vendor/vendor-motion-D2gXNOxm.js";import{D as V}from"./Drawer-DWSO549a.js";import{aF as X,aG as q,X as _}from"../vendor/vendor-icons-UxbXHH06.js";const J=56,i=R(({css:o,cssVar:t})=>({content:o`
      [class*='ant-modal-footer'] {
        margin: 0;
        padding: 16px;
      }

      [class*='ant-modal-header'] {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;

        height: 56px;
        margin-block-end: 0;
        padding: 16px;
      }

      [class*='ant-modal-container'] {
        overflow: hidden;
        padding: 0;
        border: 1px solid ${t.colorSplit};
        border-radius: ${t.borderRadiusLG};
      }
    `,drawerContent:o`
      [class*='ant-drawer-close'] {
        padding: 0;
      }

      [class*='ant-drawer-header'] {
        flex: none;
        height: ${J}px !important;
        padding-block: 0;
        padding-inline: 16px;
      }

      [class*='ant-drawer-footer'] {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        padding: 16px;
        border: none;
      }
    `,wrap:o`
      overflow: hidden auto;
    `})),z=F.memo(({panelRef:o,allowFullscreen:t,children:c,title:f=" ",className:x,classNames:a,width:A=700,onCancel:d,open:g,destroyOnHidden:m,paddings:u,height:h="75dvh",enableResponsive:D=!0,footer:r,styles:n,okText:w,onOk:j,cancelText:b,okButtonProps:s,cancelButtonProps:y,confirmLoading:v,...C})=>{const[p,G]=F.useState(!1),{mobile:H}=$(),I=r===!1||r===null;return D&&H?e.jsx(k,{theme:{token:{colorBgElevated:E.colorBgContainer}},children:e.jsx(V,{className:l(i.drawerContent,x),closeIcon:e.jsx(B,{icon:_}),destroyOnHidden:m,height:p?"calc(100% - env(safe-area-inset-top))":h,open:g,panelRef:o,placement:"bottom",title:f,classNames:typeof a=="function"?a:{...a,wrapper:l(i.wrap,a?.wrapper)},extra:t&&e.jsx(B,{icon:p?X:q,onClick:()=>G(!p)}),footer:I?null:r||e.jsxs(e.Fragment,{children:[e.jsx(M,{color:"default",variant:"filled",onClick:d,...y,children:b||"Cancel"}),e.jsx(M,{loading:v,type:"primary",onClick:j,...s,style:{marginInlineStart:8,...s?.style},children:w||"OK"})]}),styles:typeof n=="function"?n:{...n,body:{paddingBlock:`16px ${r?0:"16px"}`,paddingInline:u?.desktop??16,...n?.body}},onClose:d,...C,children:c})}):e.jsx(k,{theme:{token:{colorBgElevated:E.colorBgContainer}},children:e.jsx(K,{closable:!0,maskClosable:!0,cancelText:b,className:l(i.content,x),closeIcon:e.jsx(U,{icon:_,size:20}),confirmLoading:v,destroyOnHidden:m,footer:I?null:r,okButtonProps:s,okText:w,open:g,panelRef:o,title:f,width:A,cancelButtonProps:{color:"default",variant:"filled",...y},classNames:typeof a=="function"?a:{...a,wrapper:l(i.wrap,a?.wrapper)},styles:typeof n=="function"?n:{...n,body:{maxHeight:h,overflow:"hidden auto",paddingBlock:`0 ${r===null?"16px":0}`,paddingInline:u?.desktop??16,...n?.body}},onCancel:d,onOk:j,...C,children:c})})});z.displayName="Modal";var O=z;export{O as M};
