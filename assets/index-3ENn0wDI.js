import{q as Re}from"./providerConfig-CULHvVzb.js";import{j as u}from"../vendor/vendor-motion-D2gXNOxm.js";import{bq as Ue,ai as Ie,m as f,C as ne,y as G,j as I,az as H,h as K,gV as ie,l as $,F as U,A as M,b as ke,O as $e,ao as Me,g as Le,i as q}from"./index-BzLMjSCA.js";import{B as J}from"./Block-DisZY_e8.js";import{G as Pe}from"./Grid-D4IlJX72.js";import{r as m}from"../vendor/vendor-emotion-D8kPrniB.js";import{u as Ee}from"./store-BVltjyBN.js";import{bd as ze,I as Ae,aZ as C,aL as Fe}from"../vendor/vendor-icons-UxbXHH06.js";import{S as _e}from"./index-BEQ9h0_F.js";import{u as Ge}from"./index-BsKVN9Fy.js";import{u as Ce}from"./index-DfWug-xA.js";import{A as Be}from"./index-C2Bs0zJB.js";import{k as Oe}from"./Popover-OW_cN9dT.js";import{g as We}from"./general-DOYskArM.js";import{u as He}from"./useQueryParam-CEOp4T9d.js";import{D as Ke,b as Ve}from"./index-LrvwreA7.js";var Xe=214013,qe=2531011,Je=4294967295,Ze=(1<<31)-1,E=function(e){return e*Xe+qe&Je},z=function(e){return(e&Ze)>>16},ae=(function(){function e(t){this.seed=t}return e.prototype.clone=function(){return new e(this.seed)},e.prototype.next=function(){var t=new e(this.seed),r=t.unsafeNext();return[r,t]},e.prototype.unsafeNext=function(){var t=E(this.seed),r=z(t),n=E(t),i=z(n);this.seed=E(n);var a=z(this.seed),o=a+(i+(r<<15)<<15);return o|0},e.prototype.getState=function(){return[this.seed]},e})();function Qe(e){var t=e.length===1;if(!t)throw new Error("The state must have been produced by a congruential32 RandomGenerator");return new ae(e[0])}var Ye=Object.assign(function(e){return new ae(e)},{fromState:Qe}),et=function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=n.next()).done;)a.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a},tt=function(e,t,r){if(r||arguments.length===2)for(var n=0,i=t.length,a;n<i;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))},oe=(function(){function e(t,r){this.states=t,this.index=r}return e.twist=function(t){for(var r=t.slice(),n=0;n!==e.N-e.M;++n){var i=(r[n]&e.MASK_UPPER)+(r[n+1]&e.MASK_LOWER);r[n]=r[n+e.M]^i>>>1^-(i&1)&e.A}for(var n=e.N-e.M;n!==e.N-1;++n){var a=(r[n]&e.MASK_UPPER)+(r[n+1]&e.MASK_LOWER);r[n]=r[n+e.M-e.N]^a>>>1^-(a&1)&e.A}var o=(r[e.N-1]&e.MASK_UPPER)+(r[0]&e.MASK_LOWER);return r[e.N-1]=r[e.M-1]^o>>>1^-(o&1)&e.A,r},e.seeded=function(t){var r=Array(e.N);r[0]=t;for(var n=1;n!==e.N;++n){var i=r[n-1]^r[n-1]>>>30;r[n]=Math.imul(e.F,i)+n|0}return r},e.from=function(t){return new e(e.twist(e.seeded(t)),0)},e.prototype.clone=function(){return new e(this.states,this.index)},e.prototype.next=function(){var t=new e(this.states,this.index),r=t.unsafeNext();return[r,t]},e.prototype.unsafeNext=function(){var t=this.states[this.index];return t^=this.states[this.index]>>>e.U,t^=t<<e.S&e.B,t^=t<<e.T&e.C,t^=t>>>e.L,++this.index>=e.N&&(this.states=e.twist(this.states),this.index=0),t},e.prototype.getState=function(){return tt([this.index],et(this.states),!1)},e.fromState=function(t){var r=t.length===e.N+1&&t[0]>=0&&t[0]<e.N;if(!r)throw new Error("The state must have been produced by a mersenne RandomGenerator");return new e(t.slice(1),t[0])},e.N=624,e.M=397,e.R=31,e.A=2567483615,e.F=1812433253,e.U=11,e.S=7,e.B=2636928640,e.T=15,e.C=4022730752,e.L=18,e.MASK_LOWER=Math.pow(2,e.R)-1,e.MASK_UPPER=Math.pow(2,e.R),e})();function rt(e){return oe.fromState(e)}var nt=Object.assign(function(e){return oe.from(e)},{fromState:rt}),se=(function(){function e(t,r,n,i){this.s01=t,this.s00=r,this.s11=n,this.s10=i}return e.prototype.clone=function(){return new e(this.s01,this.s00,this.s11,this.s10)},e.prototype.next=function(){var t=new e(this.s01,this.s00,this.s11,this.s10),r=t.unsafeNext();return[r,t]},e.prototype.unsafeNext=function(){var t=this.s00^this.s00<<23,r=this.s01^(this.s01<<23|this.s00>>>9),n=t^this.s10^(t>>>18|r<<14)^(this.s10>>>5|this.s11<<27),i=r^this.s11^r>>>18^this.s11>>>5,a=this.s00+this.s10|0;return this.s01=this.s11,this.s00=this.s10,this.s11=i,this.s10=n,a},e.prototype.jump=function(){var t=new e(this.s01,this.s00,this.s11,this.s10);return t.unsafeJump(),t},e.prototype.unsafeJump=function(){for(var t=0,r=0,n=0,i=0,a=[1667051007,2321340297,1548169110,304075285],o=0;o!==4;++o)for(var s=1;s;s<<=1)a[o]&s&&(t^=this.s01,r^=this.s00,n^=this.s11,i^=this.s10),this.unsafeNext();this.s01=t,this.s00=r,this.s11=n,this.s10=i},e.prototype.getState=function(){return[this.s01,this.s00,this.s11,this.s10]},e})();function it(e){var t=e.length===4;if(!t)throw new Error("The state must have been produced by a xorshift128plus RandomGenerator");return new se(e[0],e[1],e[2],e[3])}var at=Object.assign(function(e){return new se(-1,~e,e|0,0)},{fromState:it}),le=(function(){function e(t,r,n,i){this.s01=t,this.s00=r,this.s11=n,this.s10=i}return e.prototype.clone=function(){return new e(this.s01,this.s00,this.s11,this.s10)},e.prototype.next=function(){var t=new e(this.s01,this.s00,this.s11,this.s10),r=t.unsafeNext();return[r,t]},e.prototype.unsafeNext=function(){var t=this.s00+this.s10|0,r=this.s10^this.s00,n=this.s11^this.s01,i=this.s00,a=this.s01;return this.s00=i<<24^a>>>8^r^r<<16,this.s01=a<<24^i>>>8^n^(n<<16|r>>>16),this.s10=n<<5^r>>>27,this.s11=r<<5^n>>>27,t},e.prototype.jump=function(){var t=new e(this.s01,this.s00,this.s11,this.s10);return t.unsafeJump(),t},e.prototype.unsafeJump=function(){for(var t=0,r=0,n=0,i=0,a=[3639956645,3750757012,1261568508,386426335],o=0;o!==4;++o)for(var s=1;s;s<<=1)a[o]&s&&(t^=this.s01,r^=this.s00,n^=this.s11,i^=this.s10),this.unsafeNext();this.s01=t,this.s00=r,this.s11=n,this.s10=i},e.prototype.getState=function(){return[this.s01,this.s00,this.s11,this.s10]},e})();function ot(e){var t=e.length===4;if(!t)throw new Error("The state must have been produced by a xoroshiro128plus RandomGenerator");return new le(e[0],e[1],e[2],e[3])}var st=Object.assign(function(e){return new le(-1,~e,e|0,0)},{fromState:ot});function ce(e,t){if(e.sign!==t.sign)return V(e,{sign:-t.sign,data:t.data});for(var r=[],n=0,i=e.data,a=t.data,o=i.length-1,s=a.length-1;o>=0||s>=0;--o,--s){var l=o>=0?i[o]:0,c=s>=0?a[s]:0,d=l+c+n;r.push(d>>>0),n=~~(d/4294967296)}return n!==0&&r.push(n),{sign:e.sign,data:r.reverse()}}function lt(e){e.sign=1;for(var t=e.data,r=t.length-1;r>=0;--r)if(t[r]===4294967295)t[r]=0;else return t[r]+=1,e;return t.unshift(1),e}function ct(e,t){for(var r=Math.max(e.length,t.length),n=0;n<r;++n){var i=n+e.length-r,a=n+t.length-r,o=i>=0?e[i]:0,s=a>=0?t[a]:0;if(o<s)return!0;if(o>s)return!1}return!1}function V(e,t){if(e.sign!==t.sign)return ce(e,{sign:-t.sign,data:t.data});var r=e.data,n=t.data;if(ct(r,n)){var i=V(t,e);return i.sign=-i.sign,i}for(var a=[],o=0,s=r.length-1,l=n.length-1;s>=0||l>=0;--s,--l){var c=s>=0?r[s]:0,d=l>=0?n[l]:0,h=c-d-o;a.push(h>>>0),o=h<0?1:0}return{sign:e.sign,data:a.reverse()}}function Z(e){for(var t=e.data,r=0;r!==t.length&&t[r]===0;++r);return r===t.length?(e.sign=1,e.data=[0],e):(t.splice(0,r),e)}function ue(e,t){for(var r=e>2?~~(4294967296/e)*e:4294967296,n=t.unsafeNext()+2147483648;n>=r;)n=t.unsafeNext()+2147483648;return n%e}function de(e,t,r){for(var n=t.length;;){for(var i=0;i!==n;++i){var a=i===0?t[0]+1:4294967296,o=ue(a,r);e[i]=o}for(var i=0;i!==n;++i){var s=e[i],l=t[i];if(s<l)return e;if(s>l)break}}}function B(e,t,r){var n=Z(lt(V(t,e))),i=n.data.slice(0),a=de(i,n.data,r);return Z(ce({sign:1,data:a},e))}function ut(e,t,r){if(r!=null){var n=r.clone();return[B(e,t,n),n]}return function(i){var a=i.clone();return[B(e,t,a),a]}}var Q=typeof BigInt<"u"?BigInt:void 0,dt=typeof BigInt<"u"?BigInt(1):void 0,fe=typeof BigInt<"u"?BigInt(32):void 0,ft=typeof BigInt<"u"?BigInt(4294967296):void 0;function O(e,t,r){for(var n=t-e+dt,i=ft,a=1;i<n;)i<<=fe,++a;var o=Y(a,r);if(o<n)return o+e;if(o+n<i)return o%n+e;for(var s=i-i%n;o>=s;)o=Y(a,r);return o%n+e}function Y(e,t){for(var r=Q(t.unsafeNext()+2147483648),n=1;n<e;++n){var i=t.unsafeNext();r=(r<<fe)+Q(i+2147483648)}return r}function ht(e,t,r){if(r!=null){var n=r.clone();return[O(e,t,n),n]}return function(i){var a=i.clone();return[O(e,t,a),a]}}function A(e,t){if(t<0){var r=-t;e.sign=-1,e.data[0]=~~(r/4294967296),e.data[1]=r>>>0}else e.sign=1,e.data[0]=~~(t/4294967296),e.data[1]=t>>>0;return e}function pt(e,t,r){var n=t.data[1],i=t.data[0],a=t.sign,o=r.data[1],s=r.data[0],l=r.sign;if(e.sign=1,a===1&&l===-1){var c=n+o,d=i+s+(c>4294967295?1:0);return e.data[0]=d>>>0,e.data[1]=c>>>0,e}var h=n,p=i,g=o,v=s;a===-1&&(h=o,p=s,g=n,v=i);var S=0,y=h-g;return y<0&&(S=1,y=y>>>0),e.data[0]=p-v-S,e.data[1]=y,e}var mt=Number.MAX_SAFE_INTEGER,gt={sign:1,data:[0,0]},vt={sign:1,data:[0,0]},ee={sign:1,data:[0,0]},F=[0,0];function xt(e,t,r,n){var i=r<=mt?A(ee,r):pt(ee,A(gt,t),A(vt,e));return i.data[1]===4294967295?(i.data[0]+=1,i.data[1]=0):i.data[1]+=1,de(F,i.data,n),F[0]*4294967296+F[1]+e}function W(e,t,r){var n=t-e;if(n<=4294967295){var i=ue(n+1,r);return i+e}return xt(e,t,n,r)}function yt(e,t,r){if(r!=null){var n=r.clone();return[W(e,t,n),n]}return function(i){var a=i.clone();return[W(e,t,a),a]}}function he(e,t){for(var r=0;r!=t;++r)e.unsafeNext()}function wt(e,t){var r=e.clone();return he(r,t),r}function pe(e,t){for(var r=[],n=0;n!=t;++n)r.push(e.unsafeNext());return r}function St(e,t){var r=e.clone(),n=pe(r,t);return[n,r]}var bt="module",Tt="7.0.1",Nt="2248506b66d969d1a8b477a4dde8e24cbac33e6a";const te=Object.freeze(Object.defineProperty({__proto__:null,__commitHash:Nt,__type:bt,__version:Tt,congruential32:Ye,generateN:St,mersenne:nt,skipN:wt,uniformArrayIntDistribution:ut,uniformBigIntDistribution:ht,uniformIntDistribution:yt,unsafeGenerateN:pe,unsafeSkipN:he,unsafeUniformArrayIntDistribution:B,unsafeUniformBigIntDistribution:O,unsafeUniformIntDistribution:W,xoroshiro128plus:st,xorshift128plus:at},Symbol.toStringTag,{value:"Module"}));function tr(e){const t=Date.now();let r=te.xoroshiro128plus(t);const n=new Set;for(;n.size<e;){const[i,a]=te.uniformIntDistribution(0,Re,r);r=a,n.add(i)}return Array.from(n)}const jt=e=>{const t=e.split(":");if(t.length!==2)return!1;const[r,n]=t.map(Number);return!isNaN(r)&&!isNaN(n)&&r>0&&n>0},rr=m.memo(({options:e,onChange:t,value:r,defaultValue:n,...i})=>{const a=Ue(),[o,s]=Ie("1:1",{defaultValue:n||"1:1",onChange:t,value:r});return u.jsx(J,{padding:4,variant:"filled",...i,children:u.jsx(Pe,{gap:4,maxItemWidth:48,rows:16,children:e?.map(l=>{const c=o===l.value;let d;if(jt(l.value)){const[h,p]=l.value.split(":").map(Number),g=h>p;d=u.jsx("div",{style:{aspectRatio:`${h} / ${p}`,border:`2px solid ${c?f.colorText:f.colorTextDescription}`,borderRadius:3,height:g?void 0:16,width:g?16:void 0}})}else d=u.jsx("div",{style:{border:`2px dashed ${c?f.colorText:f.colorTextDescription}`,borderRadius:3,height:16,width:16}});return u.jsxs(J,{clickable:!0,align:"center",gap:4,justify:"center",padding:8,shadow:c&&!a,variant:"filled",style:{backgroundColor:c?f.colorBgElevated:"transparent"},onClick:()=>{s(l.value),t?.(l.value)},children:[u.jsx(ne,{height:16,style:{marginTop:4},width:16,children:d}),u.jsx(G,{fontSize:12,type:c?void 0:"secondary",children:l.label||l.value})]},l.value)})})})}),Dt=({onDrop:e,accept:t="image/*"})=>{const[r,n]=m.useState(!1),i=m.useRef(0);return{dragHandlers:{onDragEnter:c=>{c.preventDefault(),c.stopPropagation(),c.dataTransfer.types.includes("Files")&&(i.current++,n(!0))},onDragLeave:c=>{c.preventDefault(),c.stopPropagation(),i.current--,i.current===0&&n(!1)},onDragOver:c=>{c.preventDefault(),c.stopPropagation()},onDrop:async c=>{c.preventDefault(),c.stopPropagation(),i.current=0,n(!1);const h=Array.from(c.dataTransfer.files).filter(p=>{if(t==="*/*")return!0;if(t.endsWith("/*")){const g=t.slice(0,-2);return p.type.startsWith(g)}return p.type===t});h.length>0&&e(h)}},isDragOver:r}},k=e=>{if(e===0)return"0 B";const t=1024,r=["B","KB","MB","GB"],n=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/Math.pow(t,n)).toFixed(1))} ${r[n]}`},Rt=(e,t)=>{const n=t??10485760;return e.size>n?{actualSize:e.size,error:"fileSizeExceeded",fileName:e.name,maxSize:n,valid:!1}:{valid:!0}},Ut=(e,t)=>t?e>t?{error:"imageCountExceeded",valid:!1}:{valid:!0}:{valid:!0},It=e=>new Promise((t,r)=>{const n=URL.createObjectURL(e),i=new globalThis.Image;i.onload=()=>{URL.revokeObjectURL(n),t({height:i.naturalHeight,width:i.naturalWidth})},i.onerror=()=>{URL.revokeObjectURL(n),r(new Error("Failed to load image"))},i.src=n}),kt=async(e,t)=>{const{width:r,height:n}=await It(e),i=t.width?.min,a=t.width?.max,o=t.height?.min,s=t.height?.max;if(i&&r<i||o&&n<o)return{error:"imageDimensionTooSmall",fileName:e.name,height:n,minHeight:o,minWidth:i,valid:!1,width:r};if(a&&r>a||s&&n>s)return{error:"imageDimensionTooLarge",fileName:e.name,height:n,maxHeight:s,maxWidth:a,valid:!1,width:r};const l=r/n,c=t.aspectRatio?.min,d=t.aspectRatio?.max;return c&&l<c||d&&l>d?{error:"imageAspectRatioInvalid",fileName:e.name,height:n,valid:!1,width:r}:{valid:!0}},$t=(e,t)=>{const r=[],n=[],i=[],a=Ut(e.length,t.maxAddedFiles);return!a.valid&&a.error&&r.push(a.error),e.forEach(o=>{const s=Rt(o,t.maxFileSize);n.push(s),!s.valid&&s.error&&(r.push(s.error),i.push(s))}),{errors:Array.from(new Set(r)),failedFiles:i,fileResults:n,valid:r.length===0}},Mt=(e,t,r)=>{const{t:n}=I("components"),{message:i}=H.useApp(),a=m.useCallback((s,l=0)=>{const c=$t(s,{maxAddedFiles:e?e-l:void 0,maxFileSize:t});return c.valid?!0:(c.errors.forEach(d=>{if(d==="fileSizeExceeded"){const h=c.failedFiles?.filter(p=>p.error==="fileSizeExceeded"&&p.actualSize&&p.maxSize)||[];if(h.length===1){const p=h[0],g=k(p.actualSize),v=k(p.maxSize),S=p.fileName||"File";i.error(n("MultiImagesUpload.validation.fileSizeExceededDetail",{actualSize:g,fileName:S,maxSize:v}))}else if(h.length>1){const p=k(h[0].maxSize),g=h.map(v=>`${v.fileName||"File"} (${k(v.actualSize)})`).join(", ");i.error(n("MultiImagesUpload.validation.fileSizeExceededMultiple",{count:h.length,fileList:g,maxSize:p}))}}else d==="imageCountExceeded"&&i.error(n("MultiImagesUpload.validation.imageCountExceeded"))}),!1)},[e,t,i,n]);return{validateDimensions:m.useCallback(async s=>{if(!r)return!0;try{const l=await kt(s,r);if(!l.valid){if(l.error==="imageDimensionTooSmall"){const c=[];l.minWidth&&c.push(`width ≥ ${l.minWidth}px`),l.minHeight&&c.push(`height ≥ ${l.minHeight}px`),i.error(n("ImageUpload.validation.imageDimensionTooSmall",{fileName:l.fileName||s.name,height:l.height,minDimension:c.join(", "),width:l.width}))}else if(l.error==="imageDimensionTooLarge"){const c=[];l.maxWidth&&c.push(`width ≤ ${l.maxWidth}px`),l.maxHeight&&c.push(`height ≤ ${l.maxHeight}px`),i.error(n("ImageUpload.validation.imageDimensionTooLarge",{fileName:l.fileName||s.name,height:l.height,maxDimension:c.join(", "),width:l.width}))}else if(l.error==="imageAspectRatioInvalid"){const c=l.width&&l.height?(l.width/l.height).toFixed(2):"?",d=r.aspectRatio?.min,h=r.aspectRatio?.max,p=d&&h?`${d}–${h}`:d?`≥ ${d}`:`≤ ${h}`;i.error(n("ImageUpload.validation.imageAspectRatioInvalid",{actualRatio:c,fileName:l.fileName||s.name,range:p}))}return!1}}catch{}return!0},[r,i,n]),validateFiles:a}},me=K(({css:e,cssVar:t})=>({dragOver:e`
    transform: scale(1.02);
    border-color: ${t.colorPrimary} !important;
    box-shadow: 0 0 0 2px color-mix(in srgb, ${t.colorPrimary} 12.5%, transparent);
    transition: transform 0.2s ease;
  `,dragTransition:e`
    transition:
      transform 0.2s ease,
      border-color 0.2s ease,
      box-shadow 0.2s ease;
  `})),T=K(({css:e})=>({changeButton:e`
      cursor: pointer;

      padding-block: 8px;
      padding-inline: 16px;
      border: 1px solid ${f.colorBorder};
      border-radius: ${f.borderRadius};

      font-size: 12px;
      font-weight: 500;
      color: ${f.colorText};

      background: ${f.colorBgContainer};
      box-shadow: ${f.boxShadowSecondary};

      &:hover {
        border-color: ${f.colorPrimary};
        color: ${f.colorPrimary};
        background: ${f.colorBgElevated};
      }
    `,changeOverlay:e`
      position: absolute;
      z-index: 5;
      inset: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      opacity: 0;
      background: ${f.colorBgMask};

      transition: opacity ${f.motionDurationMid} ease;
    `,container:e`
      width: 100%;
    `,deleteIcon:e`
      cursor: pointer;

      position: absolute;
      z-index: 10;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 24px;
      height: 24px;
      border-radius: 50%;

      color: ${f.colorTextLightSolid};

      opacity: 0;
      background: ${f.colorBgMask};

      transition: opacity ${f.motionDurationMid} ease;

      &:hover {
        color: ${f.colorError};
        background: ${f.colorErrorBg};
      }
    `,placeholder:e`
      cursor: pointer;

      width: 100%;
      height: 160px;
      border: 1px solid ${f.colorBorder};
      border-radius: ${f.borderRadiusLG};

      background: ${f.colorFillTertiary};

      transition: all ${f.motionDurationMid} ease;

      &:hover {
        background: ${f.colorFillSecondary};
      }

      &.drag-over {
        transform: scale(1.02);
        border-color: ${f.colorPrimary};
        background: ${f.colorPrimaryBg};
      }
    `,placeholderIcon:e`
      color: ${f.colorTextTertiary};
    `,placeholderText:e`
      font-size: 12px;
      line-height: 1.4;
      color: ${f.colorTextSecondary};
      text-align: center;
    `,successDisplay:e`
      cursor: pointer;

      position: relative;

      overflow: hidden;

      width: 100%;
      height: 160px;
      border: 2px solid transparent;
      border-radius: ${f.borderRadiusLG};

      background: ${f.colorBgContainer};

      transition: all ${f.motionDurationMid} ease;

      &:hover .change-overlay {
        opacity: 1;
      }

      &:hover .delete-icon {
        opacity: 1;
      }

      &.drag-over {
        transform: scale(1.02);
        border-color: ${f.colorPrimary};
        background: ${f.colorPrimaryBg};
      }
    `,uploadingDisplay:e`
      position: relative;

      overflow: hidden;

      width: 100%;
      height: 160px;
      border: 2px solid ${f.colorPrimary};
      border-radius: ${f.borderRadiusLG};

      background: ${f.colorFillSecondary};
    `,uploadingOverlay:e`
      position: absolute;
      z-index: 5;
      inset: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${f.colorBgMask};
    `})),_=e=>e.startsWith("blob:"),ge=m.memo(({value:e,size:t=60,strokeWidth:r=6,showText:n=!0})=>{const i=Math.min(100,Math.max(0,e)),a=(t-r)/2,o=a*2*Math.PI,s=o-i/100*o;return u.jsxs("div",{style:{alignItems:"center",display:"flex",height:t,justifyContent:"center",position:"relative",width:t},children:[u.jsx("svg",{height:t,style:{position:"absolute",transform:"rotate(-90deg)"},width:t,children:u.jsx("circle",{cx:t/2,cy:t/2,fill:"none",r:a,stroke:f.colorBorder,strokeWidth:r})}),u.jsx("svg",{height:t,style:{position:"absolute",transform:"rotate(-90deg)"},width:t,children:u.jsx("circle",{cx:t/2,cy:t/2,fill:"none",r:a,stroke:f.colorPrimary,strokeDasharray:o,strokeDashoffset:s,strokeLinecap:"round",strokeWidth:r,style:{transition:"stroke-dashoffset 0.2s ease-in-out"}})}),n&&u.jsxs("span",{style:{color:f.colorPrimary,fontSize:"12px",fontWeight:600,position:"relative",zIndex:1},children:[Math.round(i),"%"]})]})});ge.displayName="CircularProgress";const ve=m.memo(({isDragOver:e,onClick:t,height:r})=>{const n=me,{t:i}=I("components");return u.jsxs(ne,{gap:16,horizontal:!1,style:r?{height:r}:void 0,className:$(T.placeholder,n.dragTransition,e&&n.dragOver),onClick:t,children:[u.jsx(Ae,{className:T.placeholderIcon,size:48,strokeWidth:1.5}),u.jsxs("div",{className:T.placeholderText,children:[i("ImageUpload.placeholder.primary"),u.jsx("br",{}),i("ImageUpload.placeholder.secondary")]})]})});ve.displayName="Placeholder";const xe=m.memo(({previewUrl:e,progress:t})=>u.jsxs("div",{className:T.uploadingDisplay,children:[u.jsx(ie,{fill:!0,unoptimized:!0,alt:"Uploading preview",src:e,style:{objectFit:"cover"}}),u.jsx("div",{className:T.uploadingOverlay,children:u.jsx(ge,{value:t})})]}));xe.displayName="UploadingDisplay";const ye=m.memo(({imageUrl:e,isDragOver:t,onDelete:r,onChangeImage:n})=>{const i=me,{t:a}=I("components"),o=l=>{l.stopPropagation(),r?.()},s=l=>{l.stopPropagation(),n?.()};return u.jsxs("div",{className:$(T.successDisplay,i.dragTransition,t&&i.dragOver),onClick:n,children:[u.jsx(ie,{fill:!0,unoptimized:!0,alt:"Uploaded image",src:e,style:{objectFit:"cover"}}),u.jsx("div",{className:$(T.deleteIcon,"delete-icon"),onClick:o,children:u.jsx(ze,{size:14})}),u.jsx("div",{className:$(T.changeOverlay,"change-overlay"),onClick:s,children:u.jsx("button",{className:T.changeButton,type:"button",children:a("ImageUpload.actions.changeImage")})})]})});ye.displayName="SuccessDisplay";const Lt=m.memo(({value:e,onChange:t,style:r,className:n,maxFileSize:i,imageConstraints:a,placeholderHeight:o})=>{const s=m.useRef(null),l=Ee(N=>N.uploadWithProgress),[c,d]=m.useState(null),{t:h}=I("components"),{message:p}=H.useApp(),{validateFiles:g,validateDimensions:v}=Mt(void 0,i,a);m.useEffect(()=>()=>{c?.previewUrl&&_(c.previewUrl)&&URL.revokeObjectURL(c.previewUrl)},[c?.previewUrl]);const S=()=>{s.current?.click()},y=async N=>{const b=N.target.files?.[0];if(!b||!g([b])||!await v(b))return;const j=URL.createObjectURL(b);d({previewUrl:j,progress:0,status:"pending"});try{const x=await l({file:b,onStatusUpdate:w=>{w.type==="updateFile"?d(D=>{if(!D)return null;const R=w.value.status;return R?{...D,error:R==="error"?"Upload failed":void 0,progress:w.value.uploadState?.progress||0,status:R}:D}):w.type==="removeFile"&&d(null)},skipCheckFileType:!0});if(x?.url){const w=x.dimensions?{dimensions:x.dimensions,url:x.url}:x.url;t?.(w)}}catch{d(x=>x?{...x,error:"Upload failed",status:"error"}:null)}finally{_(j)&&URL.revokeObjectURL(j),setTimeout(()=>{d(null)},1e3)}},P=()=>{t?.(void 0)},Te=async N=>{N.length>1&&p.warning(h("ImageUpload.actions.dropMultipleFiles"));const b=N[0];if(!g([b])||!await v(b))return;const j=URL.createObjectURL(b);d({previewUrl:j,progress:0,status:"pending"});try{const x=await l({file:b,onStatusUpdate:w=>{w.type==="updateFile"?d(D=>{if(!D)return null;const R=w.value.status;return R?{...D,error:R==="error"?"Upload failed":void 0,progress:w.value.uploadState?.progress||0,status:R}:D}):w.type==="removeFile"&&d(null)},skipCheckFileType:!0});if(x?.url){const w=x.dimensions?{dimensions:x.dimensions,url:x.url}:x.url;t?.(w)}}catch{d(x=>x?{...x,error:"Upload failed",status:"error"}:null)}finally{_(j)&&URL.revokeObjectURL(j),setTimeout(()=>{d(null)},1e3)}},{isDragOver:X,dragHandlers:Ne}=Dt({accept:"image/*",onDrop:Te}),je=!!e,De=!!c;return u.jsxs("div",{className:n,...Ne,style:r,children:[u.jsx("input",{accept:"image/*",ref:s,style:{display:"none"},type:"file",onChange:y,onClick:N=>{N.currentTarget.value=""}}),De&&c?u.jsx(xe,{previewUrl:c.previewUrl,progress:c.progress}):je?u.jsx(ye,{imageUrl:e,isDragOver:X,onChangeImage:S,onDelete:P}):u.jsx(ve,{height:o,isDragOver:X,onClick:S})]})});Lt.displayName="ImageUpload";const we=m.createContext(null),L=()=>{const e=m.use(we);if(!e)throw new Error("useGenerationTopicContext must be used within GenerationTopicStoreProvider");return e},nr=we.Provider,Se=m.memo(({count:e,onClick:t,showMoreInfo:r})=>{const{namespace:n}=L(),{t:i}=I(n);return r?u.jsxs(U,{horizontal:!0,align:"center",gap:8,justify:"space-between",width:"100%",style:{marginBottom:12},children:[u.jsxs("div",{children:[i("topic.title")," ",e||""]}),u.jsx(M,{icon:C,size:"small",title:i("topic.createNew"),tooltipProps:{placement:"left"},onClick:t})]}):u.jsx(M,{icon:C,title:i("topic.createNew"),variant:"filled",size:{blockSize:48,size:20},tooltipProps:{placement:"left"},onClick:t})});Se.displayName="NewTopicButton";const Pt=6,Et=m.memo(()=>u.jsxs(U,{align:"center",gap:6,width:"100%",children:[u.jsx(M,{icon:C,variant:"filled",size:{blockSize:48,size:20}}),Array.from({length:5}).map((e,t)=>u.jsx("div",{children:u.jsx(_e.Avatar,{active:!0,size:48,style:{borderRadius:Pt}})},t))]}));Et.displayName="SkeletonList";const zt=(e,t)=>new Intl.DateTimeFormat(t,{day:"numeric",month:"long"}).format(new Date(e)),be=m.memo(({topic:e,showMoreInfo:t,style:r})=>{const{useStore:n,namespace:i}=L(),{t:a}=I(i),{modal:o}=H.useApp(),s=ke(We.currentLanguage),l=n(y=>y.loadingGenerationTopicIds.includes(e.id)),c=n(y=>y.removeGenerationTopic),d=n(y=>y.switchGenerationTopic),p=n(y=>y.activeGenerationTopicId)===e.id,g=()=>{d(e.id)},v=y=>{y.stopPropagation(),o.confirm({cancelText:a("cancel",{ns:"common"}),content:a("topic.deleteConfirmDesc"),okButtonProps:{danger:!0},okText:a("delete",{ns:"common"}),onOk:async()=>{try{await c(e.id)}catch(P){console.error("Delete topic failed:",P)}},title:a("topic.deleteConfirm")})},S=u.jsxs(U,{horizontal:!0,align:"center",flex:1,gap:16,justify:"space-between",style:{overflow:"hidden"},children:[u.jsxs(U,{flex:1,style:{overflow:"hidden"},children:[u.jsx(G,{ellipsis:!0,fontSize:14,weight:500,children:e.title||a("topic.untitled")}),u.jsx(G,{ellipsis:!0,fontSize:12,type:"secondary",children:zt(e.updatedAt,s)})]}),u.jsx(M,{danger:!0,icon:Fe,size:"small",onClick:v})]});return u.jsx(Oe,{content:S,placement:"left",trigger:t?[]:["hover"],styles:{content:{width:200}},children:u.jsxs(U,{horizontal:!0,align:"center",gap:12,justify:"center",width:"100%",style:{cursor:"pointer",...r},onClick:g,children:[u.jsx(Be,{avatar:e.coverUrl??"",background:f.colorFillSecondary,bordered:p,loading:l,shape:"square",size:48,style:{flex:"none"}}),t&&S]})})});be.displayName="TopicItem";const At=m.memo(()=>{const{useStore:e}=L(),t=$e(Me.isLogin);e(d=>d.useFetchGenerationTopics)(!!t);const n=m.useRef(null),{width:i=80}=Ce(n)||{},[a]=Ge(),o=e(d=>d.generationTopics),s=e(d=>d.openNewGenerationTopic),l=i>120;return!o||o.length===0?null:u.jsxs(U,{align:"center",gap:12,padding:12,ref:n,width:"100%",style:{maxHeight:"100%",overflowY:"auto"},children:[u.jsx(Se,{count:o?.length,showMoreInfo:l,onClick:s}),u.jsx(U,{align:"center",gap:12,ref:a,width:"100%",children:o.map((d,h)=>u.jsx(be,{showMoreInfo:l,topic:d,style:{padding:o.length===1?"4px 0":h===o.length-1?"0 0 4px":"0"}},d.id))})]})});At.displayName="TopicsList";const ir=()=>{const{useStore:e}=L(),[t,r]=He("topic",{history:"replace",throttleMs:500});return m.useLayoutEffect(()=>{e.setState({activeGenerationTopicId:t??null})},[t,e]),m.useLayoutEffect(()=>{let n=e.getState().activeGenerationTopicId;const i=e.subscribe(a=>{a.activeGenerationTopicId!==n&&(n=a.activeGenerationTopicId,r(a.activeGenerationTopicId||null))});return()=>{i()}},[r,e]),null},re=K(({css:e})=>({content:e`
    height: 100%;
    background: ${f.colorBgContainer};
  `,handle:e`
    background: ${f.colorBgContainer} !important;
  `})),Ft=m.memo(({children:e,panelWidth:t,showPanel:r,onExpandChange:n,onSizeChange:i})=>{const{md:a=!0}=Le(),[o,s]=m.useState(t);o!==t&&s(t);const[l,c]=m.useState(!!r),d=p=>{q(p,r)||(n(p),c(p))};m.useEffect(()=>{a&&l&&n(!0),a||n(!1)},[a,l]);const h=(p,g)=>{if(!g)return;const v=typeof g.width=="string"?Number.parseInt(g.width):g.width;v&&(q(v,t)||(s(v),i(v)))};return u.jsx(Ke,{defaultSize:{width:o},expand:r,maxWidth:320,minWidth:80,mode:a?"fixed":"float",placement:"right",size:{height:"100%",width:t},classNames:{content:re.content,handle:re.handle},onExpandChange:d,onSizeChange:h,children:u.jsx(Ve,{style:{flex:"none",height:"100%",minWidth:80},children:e})})});Ft.displayName="GenerationTopicPanel";export{rr as A,nr as G,Lt as I,Et as S,At as T,Ft as a,ir as b,Dt as c,me as d,tr as g,Mt as u};
