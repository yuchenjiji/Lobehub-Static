import{j as m}from"../vendor/vendor-motion-D2gXNOxm.js";import{j as c,l as f,a9 as o,h as u,m as d}from"./index-Cbsc4Bbc.js";const i=new Date().toISOString(),l=t=>{try{return t?o(t).toISOString():i}catch{return i}},y=(t,e,s)=>{if(s)return o(t).format(s);const r=o(t),a=o();return r.isSame(a,"day")?e("time.today"):r.isSame(a.subtract(1,"day"),"day")?e("time.yesterday"):r.isSame(a,"year")?r.format(e("time.formatThisYear")):r.format(e("time.formatOtherYear"))},S=u(({css:t})=>({time:t`
      font-size: 12px;
      color: ${d.colorTextSecondary};
      letter-spacing: 0.02em;
    `})),T=({date:t,style:e,className:s,template:r})=>{const{t:a}=c("discover"),n=y(t,a,r);return m.jsx("time",{"aria-label":"published-date",className:f(S.time,s),dateTime:l(t),style:e,children:n})};export{T as P};
