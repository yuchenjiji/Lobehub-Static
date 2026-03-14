import{B as M}from"./Block-BeaZPAE6.js";import{A as x}from"./index-DowEgs2W.js";import{G as S}from"./Grid-DDIgIJfp.js";import{z as b,h as k,l as q}from"./index-ByRn-atB.js";import{r as f}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as p}from"../vendor/vendor-motion-D2gXNOxm.js";const z=(e,s=4)=>{const t=e/2,r=[];for(let o=0;o<=360;o+=2){const n=o*Math.PI/180,l=Math.cos(n),g=Math.sin(n),a=t*Math.sign(l)*Math.pow(Math.abs(l),2/s),u=t*Math.sign(g)*Math.pow(Math.abs(g),2/s);r.push(`${t+a},${t+u}`)}return`M${r[0]}L${r.slice(1).join("L")}Z`},d=(e={})=>{const{size:s=100,cornerValue:t=4}=e,r=`
    <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
      <path d="${z(s,t)}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g," ");return`data:image/svg+xml;base64,${btoa(r)}`},A=(e={})=>{const{size:s=100}=e,t=s/2,r=`
    <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${t}" cy="${t}" r="${t}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g," ");return`data:image/svg+xml;base64,${btoa(r)}`},y=(e={})=>{const{size:s=100,borderRadius:t=15}=e,r=`
    <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${s}" height="${s}" rx="${t}" ry="${t}" fill="white"/>
    </svg>
  `.trim().replaceAll(/\s+/g," ");return`data:image/svg+xml;base64,${btoa(r)}`},j={circle:A(),ios:d({cornerValue:5}),sharp:d({cornerValue:6}),smooth:d({cornerValue:3}),square:y({borderRadius:15}),squircle:d({cornerValue:4})},c=k(({css:e})=>{const s=t=>e`
    mask-image: url('${j[t]}');
    mask-position: center;
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  `;return{circle:s("circle"),ios:s("ios"),root:e`
      overflow: hidden;
      flex: none;

      /* Fallback for browsers without mask support */
      border-radius: 15%;

      /* Apply smooth corners mask with fallback */
      @supports (mask-image: url('data:image/svg+xml;base64,')) {
        border-radius: 0;
      }
    `,sharp:s("sharp"),smooth:s("smooth"),square:s("square"),squircle:s("squircle")}}),R=b(c.root,{defaultVariants:{cornerShape:"squircle"},variants:{cornerShape:{circle:c.circle,ios:c.ios,sharp:c.sharp,smooth:c.smooth,square:c.square,squircle:c.squircle}}}),V=({className:e,style:s,avatars:t=[],size:r=32,grid:o=2,cornerShape:n="square",avatarShape:l="square",...g})=>{const a=f.useMemo(()=>{const h=t.length,i=o==="auto"?h>4?3:2:o,v=n==="circle",m=Math.floor(r/i*(v?.65:.75)),$=Math.floor((r-m*i)/(v?6:4));return{avatarSize:m,gapSize:$,gridSize:i,gridWidth:m*i+$,maxItemWidth:m-1}},[t,o,r,n]),u=f.useMemo(()=>t?.slice(0,a.gridSize*a.gridSize),[t,a.gridSize]),w=u?.length===1;return p.jsx(M,{align:"center",className:q(R({cornerShape:n}),e),height:r,justify:"center",style:s,width:r,...g,children:p.jsx(S,{gap:a.gapSize,maxItemWidth:0,rows:a.gridSize,width:a.gridWidth,children:u.map((h,i)=>typeof h=="string"?p.jsx(x,{avatar:h,shape:l,size:w?r*.8:a.avatarSize},i):p.jsx(x,{...h,shape:l,size:w?r*.8:a.avatarSize},i))})})};var I=V;export{I as G};
