import{h as se,w as ce,ai as de,l as v,F as ue}from"./index-VN8sB35D.js";import{R as fe}from"./index-DegL51NT.js";import{r as M}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as he}from"./useSize-B6bhL4Vm.js";import{j as g}from"../vendor/vendor-motion-D2gXNOxm.js";var N,A,D,E,I,T,L,$,B;function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var c=se(function(t){var e=t.css,n=t.cssVar;return{bodyEditor:e(N||(N=s([`
    z-index: 0;
    flex: 1;
  `]))),containerDark:e(A||(A=s([`
    position: relative;

    display: flex;
    flex-direction: column;

    height: 100%;
    border: 1px solid `,`;
    border-radius: `,`;

    background-color: `,`;
    box-shadow: 0 4px 4px color-mix(in srgb, #000 40%, transparent);
  `])),n.colorFillSecondary,n.borderRadiusLG,n.colorBgElevated),containerLight:e(D||(D=s([`
    position: relative;

    display: flex;
    flex-direction: column;

    height: 100%;
    border: 1px solid `,`;
    border-radius: `,`;

    background-color: `,`;
    box-shadow: 0 4px 4px color-mix(in srgb, #000 4%, transparent);
  `])),n.colorFill,n.borderRadiusLG,n.colorBgElevated),editor:e(E||(E=s([`
    cursor: text;

    overflow: hidden auto;
    flex: 1;

    width: 100%;
    padding-block: 8px 0;
    padding-inline: 12px;
  `]))),footer:e(I||(I=s([`
    z-index: 1;
    width: 100%;
  `]))),header:e(T||(T=s([`
    z-index: 1;
    width: 100%;
  `]))),resizableContainer:e(L||(L=s([`
    position: relative;

    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-self: flex-end;

    width: 100%;

    &:hover .resize-handle {
      opacity: 1;
    }
  `]))),resizeHandle:e($||($=s([`
    position: absolute;
    inset-block-start: -4px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    width: 100%;
    height: 8px;

    opacity: 0;

    transition: opacity 0.2s ease-in-out;

    &::before {
      content: '';

      position: absolute;
      inset-block-start: 0;
      inset-inline-start: 50%;
      transform: translateX(-50%);

      width: 32px;
      height: 4px;
      border-radius: 4px;

      background-color: `,`;
      box-shadow: 0 1px 2px color-mix(in srgb, `,` 12.5%, transparent);
    }

    &:hover {
      opacity: 1 !important;

      &::before {
        background-color: `,`;
        box-shadow: 0 2px 4px color-mix(in srgb, `,` 25%, transparent);
      }
    }

    &:active {
      &::before {
        background-color: `,`;
      }
    }
  `])),n.colorPrimary,n.colorTextSecondary,n.colorPrimaryHover,n.colorTextSecondary,n.colorPrimaryActive),root:e(B||(B=s([`
    position: relative;
  `])))}});function m(t){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(t)}var ge=["defaultHeight","height","maxHeight","minHeight","resizeMaxHeightOffset","resize","onSizeChange","onSizeDragging","className","children","footer","header","style","slashMenuRef","classNames","fullscreen","showResizeHandle","onBodyClick","styles"];function F(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?F(Object(n),!0).forEach(function(r){be(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function be(t,e,n){return e=ye(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ye(t){var e=me(t,"string");return m(e)=="symbol"?e:String(e)}function me(t,e){if(m(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(m(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pe(t,e){return je(t)||Oe(t,e)||xe(t,e)||ve()}function ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xe(t,e){if(t){if(typeof t=="string")return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(t,e)}}function V(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Oe(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,u,f=[],h=!0,b=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(h=(r=o.call(n)).done)&&(f.push(r.value),f.length!==e);h=!0);}catch(O){b=!0,i=O}finally{try{if(!h&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(b)throw i}}return f}}function je(t){if(Array.isArray(t))return t}function He(t,e){if(t==null)return{};var n=we(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function we(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var Se=function(e){var n=e.defaultHeight,r=n===void 0?e.defaultHeight||e.minHeight||64:n,i=e.height,o=e.maxHeight,u=o===void 0?320:o,f=e.minHeight,h=f===void 0?64:f,b=e.resizeMaxHeightOffset,O=b===void 0?120:b,H=e.resize,w=H===void 0?!0:H,W=e.onSizeChange,p=e.onSizeDragging,X=e.className,G=e.children,K=e.footer,S=e.header,U=e.style,z=e.slashMenuRef,a=e.classNames,d=e.fullscreen,q=e.showResizeHandle,J=e.onBodyClick,l=e.styles,Q=He(e,ge),Y=ce(),Z=Y.isDarkMode,_=he(),ee=_.ref,P=_.height,te=P===void 0?0:P,ne=de(r,{defaultValue:r,onChange:W,value:i}),C=pe(ne,2),re=C[0],k=C[1],ie=M.useCallback(function(ae,le,y){var j=y.style.height?parseInt(y.style.height):r;k(j)},[k,r]),oe=M.useCallback(function(ae,le,y){var j=y.style.height?parseInt(y.style.height):r;p?.(j)},[p,r]),R=g.jsx("div",{className:v(c.editor,c.bodyEditor,a?.body),draggable:!1,onClick:J,style:x(x({},l?.body),{},{maxHeight:d?"100%":u,minHeight:w?re:h}),children:G});return g.jsxs(ue,x(x({className:v(Z?c.containerDark:c.containerLight,c.root,X),height:d?"100%":void 0,style:U,width:"100%"},Q),{},{children:[z&&g.jsx("div",{ref:z}),g.jsx("div",{className:v(c.header,a?.header),ref:ee,style:l?.header,children:S}),w?g.jsx(fe,{className:c.resizableContainer,enable:d?!1:{top:!0},handleClasses:{top:q?c.resizeHandle:void 0},handleStyles:{top:{backgroundColor:"transparent",borderRadius:"4px",cursor:"ns-resize",height:"8px",left:"50%",top:S?-3-te:-3,transform:"translateX(-50%)",width:"100%"}},maxHeight:d?void 0:u+O,minHeight:d?void 0:h,onResize:oe,onResizeStop:ie,size:{height:d?void 0:"auto",width:"100%"},style:d?{flex:1,overflow:"hidden",position:"relative"}:void 0,children:R}):R,g.jsx("div",{className:v(c.footer,a?.footer),style:l?.footer,children:K})]}))};Se.displayName="ChatInput";export{Se as C};
