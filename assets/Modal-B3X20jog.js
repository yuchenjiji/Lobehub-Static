import{f as $,e as G,ag as I,k as E,aQ as M,A as B,j as i,aC as K,I as Q}from"./index-DgmZNIaB.js";import{r as _}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as e}from"../vendor/vendor-motion--v3N1cMI.js";import{D as V}from"./Drawer-redVORT3.js";import{ax as X,ay as q,_ as z}from"../vendor/vendor-icons-DA3bMca7.js";const J=56,l=$(({css:o,cssVar:t})=>({content:o`
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
    `})),A=_.memo(({panelRef:o,allowFullscreen:t,children:c,title:f=" ",className:x,classNames:a,width:D=700,onCancel:d,open:g,destroyOnHidden:m,paddings:u,height:h="75dvh",enableResponsive:F=!0,footer:r,styles:n,okText:w,onOk:j,cancelText:y,okButtonProps:s,cancelButtonProps:b,confirmLoading:v,...C})=>{const[p,H]=_.useState(!1),{mobile:R}=G(),k=r===!1||r===null;return F&&R?e.jsx(I,{theme:{token:{colorBgElevated:E.colorBgContainer}},children:e.jsx(V,{className:i(l.drawerContent,x),closeIcon:e.jsx(B,{icon:z}),destroyOnHidden:m,height:p?"calc(100% - env(safe-area-inset-top))":h,open:g,panelRef:o,placement:"bottom",title:f,classNames:typeof a=="function"?a:{...a,wrapper:i(l.wrap,a?.wrapper)},extra:t&&e.jsx(B,{icon:p?X:q,onClick:()=>H(!p)}),footer:k?null:r||e.jsxs(e.Fragment,{children:[e.jsx(M,{color:"default",variant:"filled",onClick:d,...b,children:y||"Cancel"}),e.jsx(M,{loading:v,type:"primary",onClick:j,...s,style:{marginInlineStart:8,...s?.style},children:w||"OK"})]}),styles:typeof n=="function"?n:{...n,body:{paddingBlock:`16px ${r?0:"16px"}`,paddingInline:u?.desktop??16,...n?.body}},onClose:d,...C,children:c})}):e.jsx(I,{theme:{token:{colorBgElevated:E.colorBgContainer}},children:e.jsx(K,{closable:!0,maskClosable:!0,cancelText:y,className:i(l.content,x),closeIcon:e.jsx(Q,{icon:z,size:20}),confirmLoading:v,destroyOnHidden:m,footer:k?null:r,okButtonProps:s,okText:w,open:g,panelRef:o,title:f,width:D,cancelButtonProps:{color:"default",variant:"filled",...b},classNames:typeof a=="function"?a:{...a,wrapper:i(l.wrap,a?.wrapper)},styles:typeof n=="function"?n:{...n,body:{maxHeight:h,overflow:"hidden auto",paddingBlock:`0 ${r===null?"16px":0}`,paddingInline:u?.desktop??16,...n?.body}},onCancel:d,onOk:j,...C,children:c})})});A.displayName="Modal";var O=A;export{O as M};
