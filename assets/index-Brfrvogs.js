import{j as n}from"../vendor/vendor-motion--v3N1cMI.js";import{g as A,F as u,aQ as v,T as _,f as K,ax as L,M as C,au as Q,j as W,I as O,am as R,b9 as Y}from"./index-DgmZNIaB.js";import{r}from"../vendor/vendor-emotion-D8kPrniB.js";import{N as G}from"./index-BHBaNMcZ.js";import{C as F}from"./const-BkAt90to.js";import{A as z}from"./Alert-B1MsUext.js";import{F as J}from"./index-C92QB5hn.js";import{u as X}from"./useAppOrigin-DeeeIl_E.js";import{F as f}from"./FormInput-B7EnRdjF.js";import{F as m}from"./FormPassword-CDkMUzqU.js";import{F as U}from"./index-BFj-M3Tp.js";import{S as Z}from"./index-CpRRKpf4.js";import{bc as V,bg as ee,bU as ne,cf as ae}from"../vendor/vendor-icons-DA3bMca7.js";import{T as oe}from"./Trans-wfJ_H-85.js";import"../i18n/i18n-zh-CN-aruUKrGA.js";import"../i18n/i18n-en-US-DEYXbGUp.js";import"../vendor/vendor-es-toolkit-b6vDTgOQ.js";import"./providerConfig-CULHvVzb.js";import"./ToggleLeftPanelButton-CcjmjHfy.js";import"./index-CBwc-0iu.js";import"./AccordionItem-BDh7Kae9.js";import"./index-CANaa6Rt.js";import"./Block-DajizTW3.js";import"./index-BIt1FtPj.js";import"./FormGroup-C1v22WSR.js";import"./useTranslation-Bg8umMAV.js";import"./form-CzkHLuiW.js";import"./store-B860Cwgp.js";import"./GlobalAgentContextManager-D9APKRR7.js";import"./ipc-CNixsLkK.js";import"./sync-BUFHYvKf.js";import"./Input-BmIFe2jN.js";import"./style-OH5WesCm.js";import"./index-BgU0IxlJ.js";import"./index-DOWgPz6W.js";import"./Input-5ZuvCSLw.js";import"./index-DAbF17Is.js";import"./EyeOutlined-DxITo3I4.js";import"./InputPassword-DTsTzZ4m.js";import"./useForm-BnQPWPAd.js";import"./row-QxnN2HAb.js";import"./index-DgNzT6Qa.js";const te=(e,o,a)=>[{children:n.jsx(f,{placeholder:e("channel.applicationIdPlaceholder")}),desc:e("channel.applicationIdHint"),label:e("channel.applicationId"),name:"applicationId",rules:[{required:!0}],tag:a.fieldTags.appId},{children:n.jsx(m,{autoComplete:"new-password",placeholder:e(o?"channel.botTokenPlaceholderExisting":"channel.botTokenPlaceholderNew")}),desc:e("channel.botTokenEncryptedHint"),label:e("channel.botToken"),name:"botToken",rules:[{required:!0}],tag:a.fieldTags.token},{children:n.jsx(f,{placeholder:e("channel.publicKeyPlaceholder")}),desc:e("channel.publicKeyHint"),label:e("channel.publicKey"),name:"publicKey",tag:a.fieldTags.publicKey}],le=(e,o,a)=>[{children:n.jsx(f,{placeholder:e("channel.applicationIdPlaceholder")}),desc:e("channel.applicationIdHint"),label:e("channel.applicationId"),name:"applicationId",rules:[{required:!0}],tag:a.fieldTags.appId},{children:n.jsx(m,{autoComplete:"new-password",placeholder:e(o?"channel.botTokenPlaceholderExisting":"channel.appSecretPlaceholder")}),desc:e("channel.botTokenEncryptedHint"),label:e("channel.appSecret"),name:"appSecret",rules:[{required:!0}],tag:a.fieldTags.appSecret},{children:n.jsx(f,{placeholder:e("channel.verificationTokenPlaceholder")}),desc:e("channel.verificationTokenHint"),label:e("channel.verificationToken"),name:"verificationToken",tag:a.fieldTags.verificationToken},{children:n.jsx(m,{placeholder:e("channel.encryptKeyPlaceholder")}),desc:e("channel.encryptKeyHint"),label:e("channel.encryptKey"),name:"encryptKey",tag:a.fieldTags.encryptKey}],ie=(e,o,a)=>[{children:n.jsx(f,{placeholder:e("channel.applicationIdPlaceholder")}),desc:e("channel.applicationIdHint"),label:e("channel.applicationId"),name:"applicationId",rules:[{required:!0}],tag:a.fieldTags.appId},{children:n.jsx(m,{autoComplete:"new-password",placeholder:e(o?"channel.botTokenPlaceholderExisting":"channel.appSecretPlaceholder")}),desc:e("channel.botTokenEncryptedHint"),label:e("channel.appSecret"),name:"appSecret",rules:[{required:!0}],tag:a.fieldTags.appSecret},{children:n.jsx(f,{placeholder:e("channel.verificationTokenPlaceholder")}),desc:e("channel.verificationTokenHint"),label:e("channel.verificationToken"),name:"verificationToken",tag:a.fieldTags.verificationToken},{children:n.jsx(m,{placeholder:e("channel.encryptKeyPlaceholder")}),desc:e("channel.encryptKeyHint"),label:e("channel.encryptKey"),name:"encryptKey",tag:a.fieldTags.encryptKey}],ce=(e,o,a)=>[{children:n.jsx(f,{placeholder:e("channel.applicationIdPlaceholder")}),desc:e("channel.qq.appIdHint"),label:e("channel.applicationId"),name:"applicationId",rules:[{required:!0}],tag:a.fieldTags.appId},{children:n.jsx(m,{autoComplete:"new-password",placeholder:e(o?"channel.botTokenPlaceholderExisting":"channel.appSecretPlaceholder")}),desc:e("channel.botTokenEncryptedHint"),label:e("channel.appSecret"),name:"appSecret",rules:[{required:!0}],tag:a.fieldTags.appSecret}],re=(e,o,a)=>[{children:n.jsx(m,{autoComplete:"new-password",placeholder:e(o?"channel.botTokenPlaceholderExisting":"channel.botTokenPlaceholderNew")}),desc:e("channel.botTokenEncryptedHint"),label:e("channel.botToken"),name:"botToken",rules:[{required:!0}],tag:a.fieldTags.token},{children:n.jsx(m,{placeholder:e("channel.secretTokenPlaceholder")}),desc:e("channel.secretTokenHint"),label:e("channel.secretToken"),name:"secretToken",tag:a.fieldTags.secretToken}],M="ant",$=K(({css:e,cssVar:o})=>({actionBar:e`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block-start: 16px;
  `,form:e`
    .${M}-form-item-control:has(.${M}-input, .${M}-select) {
      flex: none;
    }
  `,bottom:e`
    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;
    max-width: 1024px;
    margin-block: 0;
    margin-inline: auto;
    padding-block: 0 24px;
    padding-inline: 24px;
  `,webhookBox:e`
    overflow: hidden;
    flex: 1;

    height: ${o.controlHeight};
    padding-inline: 12px;
    border: 1px solid ${o.colorBorder};
    border-radius: ${o.borderRadius};

    font-family: monospace;
    font-size: 13px;
    line-height: ${o.controlHeight};
    color: ${o.colorTextSecondary};
    text-overflow: ellipsis;
    white-space: nowrap;

    background: ${o.colorFillQuaternary};
  `})),se={discord:te,feishu:le,lark:ie,qq:ce,telegram:re},de=r.memo(({provider:e,form:o,hasConfig:a,currentConfig:c,saveResult:i,saving:h,testing:l,testResult:s,onSave:d,onDelete:g,onTestConnection:w,onToggleEnable:B,onCopied:I})=>{const{t:p}=A("agent"),y=X(),P=U.useWatch("applicationId",o),b=P?`${y}/api/agent/webhooks/${e.id}/${P}`:`${y}/api/agent/webhooks/${e.id}`,S=se[e.id],T=S?S(p,a,e):[],H="Color"in e.icon?e.icon.Color:e.icon,E=n.jsxs(u,{horizontal:!0,align:"center",gap:8,children:[n.jsx(H,{size:32}),e.name]}),N=c?n.jsx(Z,{checked:c.enabled,onChange:B}):void 0,q={children:T,defaultActive:!0,extra:N,title:E};return n.jsxs(n.Fragment,{children:[n.jsx(J,{className:$.form,form:o,itemMinWidth:"max(50%, 400px)",items:[q],requiredMark:!1,style:{maxWidth:1024,padding:24,width:"100%"},variant:"borderless"}),n.jsxs("div",{className:$.bottom,children:[n.jsxs("div",{className:$.actionBar,children:[a?n.jsx(v,{danger:!0,icon:n.jsx(V,{size:16}),type:"primary",onClick:g,children:p("channel.removeChannel")}):n.jsx("div",{}),n.jsxs(u,{horizontal:!0,gap:12,children:[a&&n.jsx(v,{icon:n.jsx(ee,{size:16}),loading:l,onClick:w,children:p("channel.testConnection")}),n.jsx(v,{icon:n.jsx(ne,{size:16}),loading:h,type:"primary",onClick:d,children:p("channel.save")})]})]}),i&&n.jsx(z,{closable:!0,showIcon:!0,description:i.type==="error"?i.errorDetail:void 0,title:i.type==="success"?p("channel.saved"):p("channel.saveFailed"),type:i.type}),s&&n.jsx(z,{closable:!0,showIcon:!0,description:s.type==="error"?s.errorDetail:void 0,type:s.type,title:s.type==="success"?p("channel.testSuccess"):p("channel.testFailed")}),a&&e.webhookMode!=="auto"&&n.jsxs(u,{gap:8,children:[n.jsxs(u,{horizontal:!0,align:"center",gap:8,children:[n.jsx("span",{style:{fontWeight:600},children:p("channel.endpointUrl")}),e.fieldTags.webhook&&n.jsx(_,{children:e.fieldTags.webhook})]}),n.jsxs(u,{horizontal:!0,gap:8,children:[n.jsx("div",{className:$.webhookBox,children:b}),n.jsx(v,{onClick:()=>{navigator.clipboard.writeText(b),I()},children:p("channel.copy")})]}),n.jsx(z,{showIcon:!0,type:"info",message:n.jsx(oe,{components:{bold:n.jsx("strong",{})},i18nKey:"channel.endpointUrlHint",ns:"agent",values:{fieldName:e.fieldTags.webhook,name:e.name}})})]})]})]})}),pe=K(({css:e,cssVar:o})=>({main:e`
    position: relative;

    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;

    background: ${o.colorBgContainer};
  `})),he=r.memo(({provider:e,agentId:o,currentConfig:a})=>{const{t:c}=A("agent"),{message:i,modal:h}=L.useApp(),[l]=U.useForm(),[s,d,g,w]=C(t=>[t.createBotProvider,t.deleteBotProvider,t.updateBotProvider,t.connectBot]),[B,I]=r.useState(!1),[p,y]=r.useState(),[P,b]=r.useState(!1),[S,T]=r.useState();r.useEffect(()=>{l.resetFields()},[e.id,l]),r.useEffect(()=>{a&&l.setFieldsValue({applicationId:a.applicationId||"",appSecret:a.credentials?.appSecret||"",botToken:a.credentials?.botToken||"",encryptKey:a.credentials?.encryptKey||"",publicKey:a.credentials?.publicKey||"",secretToken:a.credentials?.secretToken||"",verificationToken:a.credentials?.verificationToken||"",webhookProxyUrl:a.credentials?.webhookProxyUrl||""})},[a,l]);const H=r.useCallback(async()=>{try{const t=await l.validateFields();I(!0),y(void 0);let k=t.applicationId;if(e.autoAppId&&t.botToken){const D=t.botToken.indexOf(":");D!==-1&&(k=t.botToken.slice(0,D),l.setFieldValue("applicationId",k))}const x=e.authMode==="app-secret"?{appId:k,appSecret:t.appSecret||""}:{botToken:t.botToken};e.fieldTags.publicKey&&(x.publicKey=t.publicKey||"default"),e.fieldTags.secretToken&&t.secretToken&&(x.secretToken=t.secretToken),e.fieldTags.verificationToken&&t.verificationToken&&(x.verificationToken=t.verificationToken),e.fieldTags.encryptKey&&t.encryptKey&&(x.encryptKey=t.encryptKey),e.webhookMode==="auto"&&t.webhookProxyUrl&&(x.webhookProxyUrl=t.webhookProxyUrl),a?await g(a.id,o,{applicationId:k,credentials:x}):await s({agentId:o,applicationId:k,credentials:x,platform:e.id}),y({type:"success"})}catch(t){if(t?.errorFields)return;console.error(t),y({errorDetail:t?.message||String(t),type:"error"})}finally{I(!1)}},[o,e.id,e.autoAppId,e.authMode,e.fieldTags,e.webhookMode,l,a,s,g]),E=r.useCallback(async()=>{a&&h.confirm({okButtonProps:{danger:!0},onOk:async()=>{try{await d(a.id,o),i.success(c("channel.removed")),l.resetFields()}catch{i.error(c("channel.removeFailed"))}},title:c("channel.deleteConfirm")})},[a,o,d,i,c,h,l]),N=r.useCallback(async t=>{if(a)try{await g(a.id,o,{enabled:t})}catch{i.error(c("channel.updateFailed"))}},[a,o,g,i,c]),q=r.useCallback(async()=>{if(!a){i.warning(c("channel.saveFirstWarning"));return}b(!0),T(void 0);try{await w({applicationId:a.applicationId,platform:e.id}),T({type:"success"})}catch(t){T({errorDetail:t?.message||String(t),type:"error"})}finally{b(!1)}},[a,e.id,w,i,c]);return n.jsx("main",{className:pe.main,children:n.jsx(de,{currentConfig:a,form:l,hasConfig:!!a,provider:e,saveResult:p,saving:B,testResult:S,testing:P,onCopied:()=>i.success(c("channel.copied")),onDelete:E,onSave:H,onTestConnection:q,onToggleEnable:N})})}),j=K(({css:e,cssVar:o})=>({root:e`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    width: 260px;
    border-inline-end: 1px solid ${o.colorBorder};
  `,item:e`
    cursor: pointer;

    display: flex;
    gap: 12px;
    align-items: center;

    width: 100%;
    padding-block: 10px;
    padding-inline: 12px;
    border: none;
    border-radius: ${o.borderRadius};

    color: ${o.colorTextSecondary};
    text-align: start;

    background: transparent;

    transition: all 0.2s;

    &:hover {
      color: ${o.colorText};
      background: ${o.colorFillTertiary};
    }

    &.active {
      font-weight: 500;
      color: ${o.colorText};
      background: ${o.colorFillSecondary};
    }
  `,list:e`
    overflow-y: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 4px;

    padding: 12px;
    padding-block-start: 16px;
  `,statusDot:e`
    width: 8px;
    height: 8px;
    border-radius: 50%;

    background: ${o.colorSuccess};
    box-shadow: 0 0 0 1px ${o.colorBgContainer};
  `,title:e`
    padding-inline: 4px;
    font-size: 12px;
    font-weight: 600;
    color: ${o.colorTextQuaternary};
  `})),me=r.memo(({providers:e,activeId:o,connectedPlatforms:a,onSelect:c})=>{const{t:i}=A("agent"),h=Q();return n.jsxs("aside",{className:j.root,children:[n.jsxs("div",{className:j.list,children:[n.jsx("div",{className:j.title,children:i("channel.platforms")}),e.map(l=>{const s=l.icon,d="Color"in s?s.Color:s;return n.jsxs("button",{className:W(j.item,o===l.id&&"active"),onClick:()=>c(l.id),children:[n.jsx(d,{size:20}),n.jsx("span",{style:{flex:1},children:l.name}),a.has(l.id)&&n.jsx("div",{className:j.statusDot})]},l.id)})]}),n.jsx("div",{style:{borderTop:`1px solid ${h.colorBorder}`,padding:12},children:n.jsxs("a",{href:"https://lobehub.com/docs/usage/channels/overview",rel:"noopener noreferrer",target:"_blank",style:{alignItems:"center",color:h.colorTextSecondary,display:"flex",fontSize:12,gap:4},children:[n.jsx(O,{icon:ae,size:"small"})," ",i("channel.documentation")]})})]})}),xe=K(({css:e})=>({container:e`
    overflow: hidden;
    display: flex;
    flex: 1;

    width: 100%;
    height: 100%;
  `})),on=r.memo(()=>{const{aid:e}=R(),[o,a]=r.useState(F[0].id),{data:c,isLoading:i}=C(d=>d.useFetchBotProviders(e)),h=r.useMemo(()=>new Set(c?.map(d=>d.platform)??[]),[c]),l=r.useMemo(()=>F.find(d=>d.id===o)||F[0],[o]),s=r.useMemo(()=>c?.find(d=>d.platform===o),[c,o]);return e?n.jsxs(u,{flex:1,height:"100%",children:[n.jsx(G,{}),n.jsxs(u,{flex:1,style:{overflowY:"auto"},children:[i&&n.jsx(Y,{debugId:"ChannelPage"}),!i&&n.jsxs("div",{className:xe.container,children:[n.jsx(me,{activeId:o,connectedPlatforms:h,providers:F,onSelect:a}),n.jsx(he,{agentId:e,currentConfig:s,provider:l})]})]})]}):null});export{on as default};
