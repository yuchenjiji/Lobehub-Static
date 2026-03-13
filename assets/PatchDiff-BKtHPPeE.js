import{f as Ze,aa as Y,j as I,a9 as je,ih as en,ii as nn,ij as tn,_ as Ie,ik as on,il as G,F as j,b1 as ze}from"./index-DgmZNIaB.js";import{r as C}from"../vendor/vendor-emotion-D8kPrniB.js";import{j as x}from"../vendor/vendor-motion--v3N1cMI.js";import{createHighlighter as an}from"./index-5voBrP2_.js";import{c as rn}from"./engine-compile-BBfmOsl0.js";const K="lobe-code-diff",D=Ze(({css:e,cssVar:n})=>({actions:e`
      position: absolute;
      z-index: 2;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      opacity: 0;
      transition: opacity 0.2s ${n.motionEaseInOut};
    `,additions:e`
      color: ${n.colorSuccess};
      font-family: ${n.fontFamilyCode};
      font-size: 12px;
    `,body:e`
      overflow: auto;

      width: 100%;

      font-family: ${n.fontFamilyCode};
      font-size: 13px;
      line-height: 1.6;

      /* Override @pierre/diffs shadow DOM CSS variables */
      --pdiff-font-family: ${n.fontFamilyCode};
      --pdiff-font-size: 13px;
      --pdiff-line-height: 1.6;
      --pdiff-bg-color: transparent;
      --pdiff-border-color: ${n.colorBorderSecondary};
      --pdiff-gutter-bg: ${n.colorFillQuaternary};
      --pdiff-gutter-color: ${n.colorTextQuaternary};
      --pdiff-added-bg: ${n.colorSuccessBgHover};
      --pdiff-added-highlight-bg: ${n.colorSuccessBg};
      --pdiff-removed-bg: ${n.colorErrorBgHover};
      --pdiff-removed-highlight-bg: ${n.colorErrorBg};
      --pdiff-info-bg: ${n.colorInfoBg};
    `,borderless:Y.variantBorderlessWithoutHover,deletions:e`
      color: ${n.colorError};
      font-family: ${n.fontFamilyCode};
      font-size: 12px;
    `,filled:I(Y.variantFilledWithoutHover,e`
        background: ${n.colorFillQuaternary};
      `),header:e`
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: space-between;

      padding: 8px 12px;

      font-family: ${n.fontFamilyCode};
      font-size: 13px;
      color: ${n.colorTextSecondary};

      border-block-end: 1px solid ${n.colorBorderSecondary};
    `,headerBorderless:e`
      padding-inline: 0;
      border-block-end: none;
    `,headerFilled:e`
      background: transparent;
    `,headerOutlined:e`
      background: ${n.colorFillQuaternary};
    `,outlined:Y.variantOutlinedWithoutHover,root:I(K,e`
        position: relative;

        overflow: hidden;

        width: 100%;
        border-radius: ${n.borderRadius};

        transition: background-color 100ms ${n.motionEaseOut};

        &:hover {
          .${K}-actions {
            opacity: 1;
          }
        }
      `),stats:e`
      display: flex;
      gap: 8px;
      align-items: center;
    `})),Pe=je(D.root,{defaultVariants:{variant:"filled"},variants:{variant:{filled:D.filled,outlined:D.outlined,borderless:D.borderless}}}),$e=je(D.header,{defaultVariants:{variant:"filled"},variants:{variant:{filled:D.headerFilled,outlined:D.headerOutlined,borderless:D.headerBorderless}}}),sn={position:"absolute",top:0,bottom:0,textAlign:"center"},U="diffs-container",ln=/(?=^From [a-f0-9]+ .+$)/m,Z=/(?=^diff --git)/gm,we=/(?=^---\s+\S)/gm,dn=/(?=^@@ )/gm,cn=/^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@(?: (.*))?/m,he=new RegExp("(?<=\\n)"),fn=/^(---|\+\+\+)\s+([^\t\r\n]+)/,hn=/^(---|\+\+\+)\s+[ab]\/([^\t\r\n]+)/,un=/^diff --git (?:"a\/(.+?)"|a\/(.+?)) (?:"b\/(.+?)"|b\/(.+?))$/,pn=/^index (?:[0-9a-f]+)\.\.(?:[0-9a-f]+)(?: (\d+))?/,ve="header-metadata",F={dark:"pierre-dark",light:"pierre-light"},We="data-unsafe-css";function V(e){return`annotation-${"side"in e?`${e.side}-`:""}${e.lineNumber}`}function _e(e,n){return typeof window>"u"&&n!=null?x.jsxs(x.Fragment,{children:[x.jsx("template",{shadowrootmode:"open",dangerouslySetInnerHTML:{__html:n}}),e]}):x.jsx(x.Fragment,{children:e})}const P=new Map,ee=new Map,ue=new Map,pe=new Set;function xe(e,n){e=Array.isArray(e)?e:[e];for(let t of e){let i;if(typeof t=="string"){if(i=P.get(t),i==null)throw new Error(`loadResolvedThemes: ${t} is not resolved, you must resolve it before calling loadResolvedThemes`)}else i=t,t=t.name,P.has(t)||P.set(t,i);pe.has(t)||(pe.add(t),n.loadThemeSync(i))}}const q=new Map,ne=new Map,me=new Set;function Le(e,n){e=Array.isArray(e)?e:[e];for(const t of e){if(me.has(t.name))continue;let i=q.get(t.name);i==null&&(i=t,q.set(t.name,i)),me.add(i.name),n.loadLanguageSync(i.data)}}function Ue(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}async function mn(e){if(Ue())throw new Error(`resolveLanguage("${e}") cannot be called from a worker context. Languages must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);const n=ne.get(e);if(n!=null)return n;try{const t=en[e];if(t==null)throw new Error(`resolveLanguage: "${e}" not found in bundled languages`);const i=t().then(({default:o})=>{const r={name:e,data:o};return q.has(e)||q.set(e,r),r});return ne.set(e,i),await i}finally{ne.delete(e)}}function gn(e){return q.get(e)??mn(e)}async function vn(e){if(Ue())throw new Error(`resolveTheme("${e}") cannot be called from a worker context. Themes must be pre-resolved on the main thread and passed to the worker via the resolvedLanguages parameter.`);const n=ee.get(e);if(n!=null)return n;try{const t=ue.get(e)??nn[e];if(t==null)throw new Error(`resolveTheme: No valid loader for ${e}`);const i=t().then(r=>bn(e,"default"in r?r.default:r));ee.set(e,i);const o=await i;if(o.name!==e)throw new Error(`resolvedTheme: themeName: ${e} does not match theme.name: ${o.name}`);return P.set(o.name,o),o}finally{ee.delete(e)}}function bn(e,n){const t=P.get(e);return t??(n=tn(n),P.set(e,n),n)}function yn(e){return P.get(e)??vn(e)}function qe(e,n){if(ue.has(e)){console.error("SharedHighlight.registerCustomTheme: theme name already registered",e);return}ue.set(e,n)}let O;async function kn({themes:e,langs:n}){O??=an({themes:[],langs:["text"],engine:rn()});const t=xn(O)?await O:O;O=t;const i=[];for(const r of n){if(r==="text"||r==="ansi")continue;const a=gn(r);"then"in a?i.push(a):Le(a,t)}const o=[];for(const r of e){const a=yn(r);"then"in a?o.push(a):xe(a,O)}return(i.length>0||o.length>0)&&await Promise.all([Promise.all(i).then(r=>{Le(r,t)}),Promise.all(o).then(r=>{xe(r,t)})]),t}function wn(){if(O!=null&&!("then"in O))return O}function xn(e=O){return e!=null&&"then"in e}qe("pierre-dark",()=>Ie(()=>import("./pierre-dark-BXuwtOqb.js"),[]));qe("pierre-light",()=>Ie(()=>import("./pierre-light-dckrK0oj.js"),[]));function Be(e=F){const n=[];return typeof e=="string"?n.push(e):(n.push(e.dark),n.push(e.light)),n}function Ge(e,n){return e==null||n==null||typeof e=="string"||typeof n=="string"?e===n:e.dark===n.dark&&e.light===n.light}const _={"1c":"1c",abap:"abap",as:"actionscript-3",ada:"ada",adb:"ada",ads:"ada",adoc:"asciidoc",asciidoc:"asciidoc","component.html":"angular-html","component.ts":"angular-ts",conf:"nginx",htaccess:"apache",cls:"tex",trigger:"apex",apl:"apl",applescript:"applescript",scpt:"applescript",ara:"ara",asm:"asm",s:"riscv",astro:"astro",awk:"awk",bal:"ballerina",sh:"zsh",bash:"zsh",bat:"cmd",cmd:"cmd",be:"berry",beancount:"beancount",bib:"bibtex",bicep:"bicep","blade.php":"blade",bsl:"bsl",c:"c",h:"objective-cpp",cs:"csharp",cpp:"cpp",hpp:"cpp",cc:"cpp",cxx:"cpp",hh:"cpp",cdc:"cdc",cairo:"cairo",clar:"clarity",clj:"clojure",cljs:"clojure",cljc:"clojure",soy:"soy",cmake:"cmake","CMakeLists.txt":"cmake",cob:"cobol",cbl:"cobol",cobol:"cobol",CODEOWNERS:"codeowners",ql:"ql",coffee:"coffeescript",lisp:"lisp",cl:"lisp",lsp:"lisp",log:"log",v:"verilog",cql:"cql",cr:"crystal",css:"css",csv:"csv",cue:"cue",cypher:"cypher",cyp:"cypher",d:"d",dart:"dart",dax:"dax",desktop:"desktop",diff:"diff",patch:"diff",Dockerfile:"dockerfile",dockerfile:"dockerfile",env:"dotenv",dm:"dream-maker",edge:"edge",el:"emacs-lisp",ex:"elixir",exs:"elixir",elm:"elm",erb:"erb",erl:"erlang",hrl:"erlang",f:"fortran-fixed-form",for:"fortran-fixed-form",fs:"fsharp",fsi:"fsharp",fsx:"fsharp",f03:"f03",f08:"f08",f18:"f18",f77:"f77",f90:"fortran-free-form",f95:"fortran-free-form",fnl:"fennel",fish:"fish",ftl:"ftl",tres:"gdresource",res:"gdresource",gd:"gdscript",gdshader:"gdshader",gs:"genie",feature:"gherkin",COMMIT_EDITMSG:"git-commit","git-rebase-todo":"git-rebase",gjs:"glimmer-js",gleam:"gleam",gts:"glimmer-ts",glsl:"glsl",vert:"glsl",frag:"glsl",shader:"shaderlab",gp:"gnuplot",plt:"gnuplot",gnuplot:"gnuplot",go:"go",graphql:"graphql",gql:"graphql",groovy:"groovy",gvy:"groovy",hack:"hack",haml:"haml",hbs:"handlebars",handlebars:"handlebars",hs:"haskell",lhs:"haskell",hx:"haxe",hcl:"hcl",hjson:"hjson",hlsl:"hlsl",fx:"hlsl",html:"html",htm:"html",http:"http",rest:"http",hxml:"hxml",hy:"hy",imba:"imba",ini:"ini",cfg:"ini",jade:"pug",pug:"pug",java:"java",js:"javascript",mjs:"javascript",cjs:"javascript",jinja:"jinja",jinja2:"jinja",j2:"jinja",jison:"jison",jl:"julia",json:"json",json5:"json5",jsonc:"jsonc",jsonl:"jsonl",jsonnet:"jsonnet",libsonnet:"jsonnet",jssm:"jssm",jsx:"jsx",kt:"kotlin",kts:"kts",kql:"kusto",tex:"tex",ltx:"tex",lean:"lean4",less:"less",liquid:"liquid",lit:"lit",ll:"llvm",logo:"logo",lua:"lua",luau:"luau",Makefile:"makefile",mk:"makefile",makefile:"makefile",md:"markdown",markdown:"markdown",marko:"marko",m:"wolfram",mat:"matlab",mdc:"mdc",mdx:"mdx",wiki:"wikitext",mediawiki:"wikitext",mmd:"mermaid",mermaid:"mermaid",mips:"mipsasm",mojo:"mojo","🔥":"mojo",move:"move",nar:"narrat",nf:"nextflow",nim:"nim",nims:"nim",nimble:"nim",nix:"nix",nu:"nushell",mm:"objective-cpp",ml:"ocaml",mli:"ocaml",mll:"ocaml",mly:"ocaml",pas:"pascal",p:"pascal",pl:"prolog",pm:"perl",t:"perl",raku:"raku",p6:"raku",pl6:"raku",php:"php",phtml:"php",pls:"plsql",sql:"sql",po:"po",polar:"polar",pcss:"postcss",pot:"pot",potx:"potx",pq:"powerquery",pqm:"powerquery",ps1:"powershell",psm1:"powershell",psd1:"powershell",prisma:"prisma",pro:"prolog",P:"prolog",properties:"properties",proto:"protobuf",pp:"puppet",purs:"purescript",py:"python",pyw:"python",pyi:"python",qml:"qml",qmldir:"qmldir",qss:"qss",r:"r",R:"r",rkt:"racket",rktl:"racket",razor:"razor",cshtml:"razor",rb:"ruby",rbw:"ruby",reg:"reg",regex:"regexp",rel:"rel",rs:"rust",rst:"rst",rake:"ruby",gemspec:"ruby",sas:"sas",sass:"sass",scala:"scala",sc:"scala",scm:"scheme",ss:"scheme",sld:"scheme",scss:"scss",sdbl:"sdbl",shadergraph:"shader",st:"smalltalk",sol:"solidity",sparql:"sparql",rq:"sparql",spl:"splunk",config:"ssh-config",do:"stata",ado:"stata",dta:"stata",styl:"stylus",stylus:"stylus",svelte:"svelte",swift:"swift",sv:"system-verilog",svh:"system-verilog",service:"systemd",socket:"systemd",device:"systemd",timer:"systemd",talon:"talonscript",tasl:"tasl",tcl:"tcl",templ:"templ",tf:"tf",tfvars:"tfvars",toml:"toml",ts:"typescript",tsp:"typespec",tsv:"tsv",tsx:"tsx",ttl:"turtle",twig:"twig",typ:"typst",vv:"v",vala:"vala",vapi:"vala",vb:"vb",vbs:"vb",bas:"vb",vh:"verilog",vhd:"vhdl",vhdl:"vhdl",vim:"vimscript",vue:"vue","vine.ts":"vue-vine",vy:"vyper",wasm:"wasm",wat:"wasm",wy:"文言",wgsl:"wgsl",wit:"wit",wl:"wolfram",nb:"wolfram",xml:"xml",xsl:"xsl",xslt:"xsl",yaml:"yaml",yml:"yml",zs:"zenscript",zig:"zig",zsh:"zsh",sty:"tex"};function X(e){if(_[e]!=null)return _[e];const n=e.match(/\.([^/\\]+\.[^/\\]+)$/);return n!=null&&_[n[1]]!=null?_[n[1]]??"text":_[e.match(/\.([^.]+)$/)?.[1]??""]??"text"}function W(e){return e.replace(/\n$|\r\n$/,"")}function z(e){return{type:"text",value:e}}function E({tagName:e,children:n=[],properties:t={}}){return{type:"element",tagName:e,properties:t,children:n}}function ge({name:e,width:n=16,height:t=16,properties:i}){return E({tagName:"svg",properties:{width:n,height:t,viewBox:"0 0 16 16",...i},children:[E({tagName:"use",properties:{href:`#${e.replace(/^#/,"")}`}})]})}function Ln(e){let n=e.children[0];for(;n!=null;){if(n.type==="element"&&n.tagName==="code")return n;"children"in n?n=n.children[0]:n=null}}function En(e,n,t){const i=typeof t.lineInfo=="function"?t.lineInfo(n):t.lineInfo[n];if(i==null)throw console.error({node:e,line:n,state:t}),new Error(`processLine: line ${n}, contains no state.lineInfo`);return e.tagName="span",e.properties["data-column-content"]="",e.children.length===0&&e.children.push(z(`
`)),E({tagName:"div",children:[E({tagName:"span",children:[E({tagName:"span",children:[{type:"text",value:`${i.lineNumber}`}],properties:{"data-line-number-content":""}})],properties:{"data-column-number":""}}),e],properties:{"data-line":i.lineNumber,"data-alt-line":i.altLineNumber,"data-line-type":i.type,"data-line-index":i.lineIndex}})}function Sn(e=!1){const n={lineInfo:{}},t=[{line(i){return delete i.properties.class,i},pre(i){const o=Ln(i),r=[];if(o!=null){let a=1;for(const s of o.children)s.type==="element"&&(r.push(En(s,a,n)),a++);o.children=r}return i}}];return e&&t.push(Cn,Ee),{state:n,transformers:t,toClass:Ee}}const Ee=on({classPrefix:"hl-"}),Cn={name:"token-style-normalizer",tokens(e){for(const n of e)for(const t of n){if(t.htmlStyle!=null)continue;const i={};t.color!=null&&(i.color=t.color),t.bgColor!=null&&(i["background-color"]=t.bgColor),t.fontStyle!=null&&t.fontStyle!==0&&((t.fontStyle&1)!==0&&(i["font-style"]="italic"),(t.fontStyle&2)!==0&&(i["font-weight"]="bold"),(t.fontStyle&4)!==0&&(i["text-decoration"]="underline")),Object.keys(i).length>0&&(t.htmlStyle=i)}}};function T(e){return`--${e==="token"?"diffs-token":"diffs"}-`}function Mn({theme:e=F,highlighter:n,prefix:t}){let i="";if(typeof e=="string"){const o=n.getTheme(e);i+=`color:${o.fg};`,i+=`background-color:${o.bg};`,i+=`${T("global")}fg:${o.fg};`,i+=`${T("global")}bg:${o.bg};`,i+=te(o,t)}else{let o=n.getTheme(e.dark);i+=`${T("global")}dark:${o.fg};`,i+=`${T("global")}dark-bg:${o.bg};`,i+=te(o,"dark"),o=n.getTheme(e.light),i+=`${T("global")}light:${o.fg};`,i+=`${T("global")}light-bg:${o.bg};`,i+=te(o,"light")}return i}function te(e,n){n=n!=null?`${n}-`:"";let t="";const i=e.colors?.["gitDecoration.addedResourceForeground"]??e.colors?.["terminal.ansiGreen"];i!=null&&(t+=`${T("global")}${n}addition-color:${i};`);const o=e.colors?.["gitDecoration.deletedResourceForeground"]??e.colors?.["terminal.ansiRed"];o!=null&&(t+=`${T("global")}${n}deletion-color:${o};`);const r=e.colors?.["gitDecoration.modifiedResourceForeground"]??e.colors?.["terminal.ansiBlue"];return r!=null&&(t+=`${T("global")}${n}modified-color:${r};`),t}function Se(e){let n=e.children[0];for(;n!=null;){if(n.type==="element"&&n.tagName==="code")return n.children;"children"in n?n=n.children[0]:n=null}throw console.error(e),new Error("getLineNodes: Unable to find children")}class be{diff(n,t,i={}){let o;typeof i=="function"?(o=i,i={}):"callback"in i&&(o=i.callback);const r=this.castInput(n,i),a=this.castInput(t,i),s=this.removeEmpty(this.tokenize(r,i)),l=this.removeEmpty(this.tokenize(a,i));return this.diffWithOptionsObj(s,l,i,o)}diffWithOptionsObj(n,t,i,o){var r;const a=d=>{if(d=this.postProcess(d,i),o){setTimeout(function(){o(d)},0);return}else return d},s=t.length,l=n.length;let f=1,c=s+l;i.maxEditLength!=null&&(c=Math.min(c,i.maxEditLength));const h=(r=i.timeout)!==null&&r!==void 0?r:1/0,u=Date.now()+h,p=[{oldPos:-1,lastComponent:void 0}];let g=this.extractCommon(p[0],t,n,0,i);if(p[0].oldPos+1>=l&&g+1>=s)return a(this.buildValues(p[0].lastComponent,t,n));let k=-1/0,w=1/0;const m=()=>{for(let d=Math.max(k,-f);d<=Math.min(w,f);d+=2){let v;const b=p[d-1],y=p[d+1];b&&(p[d-1]=void 0);let L=!1;if(y){const S=y.oldPos-d;L=y&&0<=S&&S<s}const M=b&&b.oldPos+1<l;if(!L&&!M){p[d]=void 0;continue}if(!M||L&&b.oldPos<y.oldPos?v=this.addToPath(y,!0,!1,0,i):v=this.addToPath(b,!1,!0,1,i),g=this.extractCommon(v,t,n,d,i),v.oldPos+1>=l&&g+1>=s)return a(this.buildValues(v.lastComponent,t,n))||!0;p[d]=v,v.oldPos+1>=l&&(w=Math.min(w,d-1)),g+1>=s&&(k=Math.max(k,d+1))}f++};if(o)(function d(){setTimeout(function(){if(f>c||Date.now()>u)return o(void 0);m()||d()},0)})();else for(;f<=c&&Date.now()<=u;){const d=m();if(d)return d}}addToPath(n,t,i,o,r){const a=n.lastComponent;return a&&!r.oneChangePerToken&&a.added===t&&a.removed===i?{oldPos:n.oldPos+o,lastComponent:{count:a.count+1,added:t,removed:i,previousComponent:a.previousComponent}}:{oldPos:n.oldPos+o,lastComponent:{count:1,added:t,removed:i,previousComponent:a}}}extractCommon(n,t,i,o,r){const a=t.length,s=i.length;let l=n.oldPos,f=l-o,c=0;for(;f+1<a&&l+1<s&&this.equals(i[l+1],t[f+1],r);)f++,l++,c++,r.oneChangePerToken&&(n.lastComponent={count:1,previousComponent:n.lastComponent,added:!1,removed:!1});return c&&!r.oneChangePerToken&&(n.lastComponent={count:c,previousComponent:n.lastComponent,added:!1,removed:!1}),n.oldPos=l,f}equals(n,t,i){return i.comparator?i.comparator(n,t):n===t||!!i.ignoreCase&&n.toLowerCase()===t.toLowerCase()}removeEmpty(n){const t=[];for(let i=0;i<n.length;i++)n[i]&&t.push(n[i]);return t}castInput(n,t){return n}tokenize(n,t){return Array.from(n)}join(n){return n.join("")}postProcess(n,t){return n}get useLongestToken(){return!1}buildValues(n,t,i){const o=[];let r;for(;n;)o.push(n),r=n.previousComponent,delete n.previousComponent,n=r;o.reverse();const a=o.length;let s=0,l=0,f=0;for(;s<a;s++){const c=o[s];if(c.removed)c.value=this.join(i.slice(f,f+c.count)),f+=c.count;else{if(!c.added&&this.useLongestToken){let h=t.slice(l,l+c.count);h=h.map(function(u,p){const g=i[f+p];return g.length>u.length?g:u}),c.value=this.join(h)}else c.value=this.join(t.slice(l,l+c.count));l+=c.count,c.added||(f+=c.count)}}return o}}class Dn extends be{}const Rn=new Dn;function Nn(e,n,t){return Rn.diff(e,n,t)}const Ce="a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";class Hn extends be{tokenize(n){const t=new RegExp(`(\\r?\\n)|[${Ce}]+|[^\\S\\n\\r]+|[^${Ce}]`,"ug");return n.match(t)||[]}}const Tn=new Hn;function Fn(e,n,t){return Tn.diff(e,n,t)}class An extends be{constructor(){super(...arguments),this.tokenize=jn}equals(n,t,i){return i.ignoreWhitespace?((!i.newlineIsToken||!n.includes(`
`))&&(n=n.trim()),(!i.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):i.ignoreNewlineAtEof&&!i.newlineIsToken&&(n.endsWith(`
`)&&(n=n.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(n,t,i)}}const On=new An;function Me(e,n,t){return On.diff(e,n,t)}function jn(e,n){n.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));const t=[],i=e.split(/(\n|\r\n)/);i[i.length-1]||i.pop();for(let o=0;o<i.length;o++){const r=i[o];o%2&&!n.newlineIsToken?t[t.length-1]+=r:t.push(r)}return t}const In={includeIndex:!0,includeUnderline:!0,includeFileHeaders:!0};function zn(e,n,t,i,o,r,a){let s;s={},typeof s.context>"u"&&(s.context=4);const l=s.context;if(s.newlineIsToken)throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");if(s.callback){const{callback:c}=s;Me(t,i,Object.assign(Object.assign({},s),{callback:h=>{const u=f(h);c(u)}}))}else return f(Me(t,i,s));function f(c){if(!c)return;c.push({value:"",lines:[]});function h(d){return d.map(function(v){return" "+v})}const u=[];let p=0,g=0,k=[],w=1,m=1;for(let d=0;d<c.length;d++){const v=c[d],b=v.lines||$n(v.value);if(v.lines=b,v.added||v.removed){if(!p){const y=c[d-1];p=w,g=m,y&&(k=l>0?h(y.lines.slice(-l)):[],p-=k.length,g-=k.length)}for(const y of b)k.push((v.added?"+":"-")+y);v.added?m+=b.length:w+=b.length}else{if(p)if(b.length<=l*2&&d<c.length-2)for(const y of h(b))k.push(y);else{const y=Math.min(b.length,l);for(const M of h(b.slice(0,y)))k.push(M);const L={oldStart:p,oldLines:w-p+y,newStart:g,newLines:m-g+y,lines:k};u.push(L),p=0,g=0,k=[]}w+=b.length,m+=b.length}}for(const d of u)for(let v=0;v<d.lines.length;v++)d.lines[v].endsWith(`
`)?d.lines[v]=d.lines[v].slice(0,-1):(d.lines.splice(v+1,0,"\\ No newline at end of file"),v++);return{oldFileName:e,newFileName:n,oldHeader:o,newHeader:r,hunks:u}}}function Ke(e,n){if(n||(n=In),Array.isArray(e)){if(e.length>1&&!n.includeFileHeaders)throw new Error("Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)");return e.map(i=>Ke(i,n)).join(`
`)}const t=[];n.includeIndex&&e.oldFileName==e.newFileName&&t.push("Index: "+e.oldFileName),n.includeUnderline&&t.push("==================================================================="),n.includeFileHeaders&&(t.push("--- "+e.oldFileName+(typeof e.oldHeader>"u"?"":"	"+e.oldHeader)),t.push("+++ "+e.newFileName+(typeof e.newHeader>"u"?"":"	"+e.newHeader)));for(let i=0;i<e.hunks.length;i++){const o=e.hunks[i];o.oldLines===0&&(o.oldStart-=1),o.newLines===0&&(o.newStart-=1),t.push("@@ -"+o.oldStart+","+o.oldLines+" +"+o.newStart+","+o.newLines+" @@");for(const r of o.lines)t.push(r)}return t.join(`
`)+`
`}function Pn(e,n,t,i,o,r,a){{const s=zn(e,n,t,i,o,r);return s?Ke(s,void 0):void 0}}function $n(e){const n=e.endsWith(`
`),t=e.split(`
`).map(i=>i+`
`);return n?t.pop():t.push(t.pop().slice(0,-1)),t}function De({line:e,spanStart:n,spanLength:t}){return{start:{line:e,character:n},end:{line:e,character:n+t},properties:{"data-diff-span":""},alwaysWrap:!0}}function B({item:e,arr:n,enableJoin:t,isNeutral:i=!1,isLastItem:o=!1}){const r=n[n.length-1];if(r==null||o||!t){n.push([i?0:1,e.value]);return}const a=r[0]===0;if(i===a||i&&e.value.length===1&&!a){r[1]+=e.value;return}n.push([i?0:1,e.value])}function Wn(e,n,t,i=!1){const o=(()=>{const f=t.theme??F;if(typeof f=="string")return n.getTheme(f).type})(),r=Mn({theme:t.theme,highlighter:n});if(e.newLines!=null&&e.oldLines!=null){const{oldContent:f,newContent:c,oldInfo:h,newInfo:u,oldDecorations:p,newDecorations:g}=Re({hunks:e.hunks,oldLines:e.oldLines,newLines:e.newLines,lineDiffType:t.lineDiffType});return{code:Ne({oldFile:{name:e.prevName??e.name,contents:f},oldInfo:h,oldDecorations:p,newFile:{name:e.name,contents:c},newInfo:u,newDecorations:g,highlighter:n,options:t,languageOverride:i?"text":e.lang}),themeStyles:r,baseThemeType:o}}const a=[];let s=0,l=0;for(const f of e.hunks){const{oldContent:c,newContent:h,oldInfo:u,newInfo:p,oldDecorations:g,newDecorations:k,splitLineIndex:w,unifiedLineIndex:m}=Re({hunks:[f],splitLineIndex:s,unifiedLineIndex:l,lineDiffType:t.lineDiffType}),d={name:e.prevName??e.name,contents:c},v={name:e.name,contents:h};a.push(Ne({oldFile:d,oldInfo:u,oldDecorations:g,newFile:v,newInfo:p,newDecorations:k,highlighter:n,options:t,languageOverride:i?"text":e.lang})),s=w,l=m}return{code:(()=>{if(a.length<=1){const f=a[0]??{oldLines:[],newLines:[]};if(f.newLines.length===0||f.oldLines.length===0)return f}return{hunks:a}})(),themeStyles:r,baseThemeType:o}}function _n({oldLine:e,newLine:n,oldLineIndex:t,newLineIndex:i,oldDecorations:o,newDecorations:r,lineDiffType:a}){if(e==null||n==null||a==="none")return;e=W(e),n=W(n);const s=a==="char"?Nn(e,n):Fn(e,n),l=[],f=[],c=a==="word-alt";for(const u of s){const p=u===s[s.length-1];!u.added&&!u.removed?(B({item:u,arr:l,enableJoin:c,isNeutral:!0,isLastItem:p}),B({item:u,arr:f,enableJoin:c,isNeutral:!0,isLastItem:p})):u.removed?B({item:u,arr:l,enableJoin:c,isLastItem:p}):B({item:u,arr:f,enableJoin:c,isLastItem:p})}let h=0;for(const u of l)u[0]===1&&o.push(De({line:t-1,spanStart:h,spanLength:u[1].length})),h+=u[1].length;h=0;for(const u of f)u[0]===1&&r.push(De({line:i-1,spanStart:h,spanLength:u[1].length})),h+=u[1].length}function Re({hunks:e,oldLines:n,newLines:t,splitLineIndex:i=0,unifiedLineIndex:o=0,lineDiffType:r}){const a={},s={},l=[],f=[];let c=1,h=1,u=1,p=1,g="",k="";for(const w of e){for(;n!=null&&t!=null&&c<w.additionStart&&h<w.deletionStart;)a[h]={type:"context-expanded",lineNumber:p,altLineNumber:u,lineIndex:`${o},${i}`},s[c]={type:"context-expanded",lineNumber:u,altLineNumber:p,lineIndex:`${o},${i}`},g+=n[h-1],k+=t[c-1],h++,c++,p++,u++,i++,o++;p=w.deletionStart,u=w.additionStart;for(const m of w.hunkContent)if(m.type==="context")for(const d of m.lines)a[h]={type:"context",lineNumber:p,altLineNumber:u,lineIndex:`${o},${i}`},s[c]={type:"context",lineNumber:u,altLineNumber:p,lineIndex:`${o},${i}`},g+=d,k+=d,h++,c++,u++,p++,i++,o++;else{const d=Math.max(m.additions.length,m.deletions.length);let v=0,b=o;for(;v<d;){const y=m.deletions[v],L=m.additions[v];_n({newLine:L,oldLine:y,oldLineIndex:h,newLineIndex:c,oldDecorations:l,newDecorations:f,lineDiffType:r}),y!=null&&(a[h]={type:"change-deletion",lineNumber:p,lineIndex:`${b},${i}`},g+=y,h++,p++),L!=null&&(s[c]={type:"change-addition",lineNumber:u,lineIndex:`${b+m.deletions.length},${i}`},k+=L,c++,u++),i++,b++,v++}o+=m.additions.length+m.deletions.length}if(!(n==null||t==null||w!==e[e.length-1]))for(;h<=n.length||c<=n.length;){const m=n[h-1],d=t[c-1];if(m==null&&d==null)break;m!=null&&(a[h]={type:"context-expanded",lineNumber:p,altLineNumber:u,lineIndex:`${o},${i}`},g+=m,h++,p++),d!=null&&(s[c]={type:"context-expanded",lineNumber:u,altLineNumber:p,lineIndex:`${o},${i}`},k+=d,c++,u++),i++,o++}}return{oldContent:g,newContent:k,oldInfo:a,newInfo:s,oldDecorations:l,newDecorations:f,splitLineIndex:i,unifiedLineIndex:o}}function Ne({oldFile:e,newFile:n,oldInfo:t,newInfo:i,highlighter:o,oldDecorations:r,newDecorations:a,languageOverride:s,options:{theme:l=F,...f}}){const c=s??X(e.name),h=s??X(n.name),{state:u,transformers:p}=Sn(),g=typeof l=="string"?{...f,lang:"text",theme:l,transformers:p,decorations:void 0,defaultColor:!1,cssVariablePrefix:T("token")}:{...f,lang:"text",themes:l,transformers:p,decorations:void 0,defaultColor:!1,cssVariablePrefix:T("token")};return{oldLines:e.contents===""?[]:(g.lang=c,u.lineInfo=t,g.decorations=r,Se(o.codeToHast(W(e.contents),g))),newLines:n.contents===""?[]:(g.lang=h,g.decorations=a,u.lineInfo=i,Se(o.codeToHast(W(n.contents),g)))}}const Un=C.createContext(void 0);function qn(e){const n=C.useRef(e);return C.useInsertionEffect(()=>{n.current=e}),C.useCallback((...t)=>n.current(...t),[])}function Bn(e,n){return e?.start===n?.start&&e?.end===n?.end&&e?.side===n?.side&&e?.endSide===n?.endSide}var Gn=class{pre;selectedRange=null;renderedSelectionRange;anchor;_queuedRender;constructor(e={}){this.options=e}setOptions(e){this.options={...this.options,...e},this.removeEventListeners(),this.options.enableLineSelection===!0&&this.attachEventListeners()}cleanUp(){this.removeEventListeners(),this._queuedRender!=null&&(cancelAnimationFrame(this._queuedRender),this._queuedRender=void 0),this.pre!=null&&delete this.pre.dataset.interactiveLineNumbers,this.pre=void 0}setup(e){this.setDirty(),this.pre!==e&&this.cleanUp(),this.pre=e;const{enableLineSelection:n=!1}=this.options;n?(this.pre.dataset.interactiveLineNumbers="",this.attachEventListeners()):(this.removeEventListeners(),delete this.pre.dataset.interactiveLineNumbers),this.setSelection(this.selectedRange)}setDirty(){this.renderedSelectionRange=void 0}isDirty(){return this.renderedSelectionRange===void 0}setSelection(e){const n=!(e===this.selectedRange||Bn(e??void 0,this.selectedRange??void 0));!this.isDirty()&&!n||(this.selectedRange=e,this.renderSelection(),n&&this.notifySelectionChange())}getSelection(){return this.selectedRange}attachEventListeners(){this.pre!=null&&(this.removeEventListeners(),this.pre.addEventListener("pointerdown",this.handleMouseDown))}removeEventListeners(){this.pre!=null&&(this.pre.removeEventListener("pointerdown",this.handleMouseDown),document.removeEventListener("pointermove",this.handleMouseMove),document.removeEventListener("pointerup",this.handleMouseUp))}handleMouseDown=e=>{const n=e.button===0?this.getMouseEventDataForPath(e.composedPath(),"click"):void 0;if(n==null)return;e.preventDefault();const{lineNumber:t,eventSide:i,lineIndex:o}=n;if(e.shiftKey&&this.selectedRange!=null){const r=this.deriveRowRangeFromDOM(this.selectedRange,this.pre?.dataset.type==="split");if(r==null)return;const a=r.start<=r.end?o>=r.start:o<=r.end;this.anchor={line:a?this.selectedRange.start:this.selectedRange.end,side:(a?this.selectedRange.side:this.selectedRange.endSide??this.selectedRange.side)??"additions"},this.updateSelection(t,i),this.notifySelectionStart(this.selectedRange)}else{if(this.selectedRange?.start===t&&this.selectedRange?.end===t){this.updateSelection(null),this.notifySelectionEnd(null),this.notifySelectionChange();return}this.selectedRange=null,this.anchor={line:t,side:i},this.updateSelection(t,i),this.notifySelectionStart(this.selectedRange)}document.addEventListener("pointermove",this.handleMouseMove),document.addEventListener("pointerup",this.handleMouseUp)};handleMouseMove=e=>{const n=this.getMouseEventDataForPath(e.composedPath(),"move");if(n==null||this.anchor==null)return;const{lineNumber:t,eventSide:i}=n;this.updateSelection(t,i)};handleMouseUp=()=>{this.anchor=void 0,document.removeEventListener("pointermove",this.handleMouseMove),document.removeEventListener("pointerup",this.handleMouseUp),this.notifySelectionEnd(this.selectedRange),this.notifySelectionChange()};updateSelection(e,n){if(e==null)this.selectedRange=null;else{const t=this.anchor?.side??n;this.selectedRange={start:this.anchor?.line??e,end:e,side:t,endSide:t!==n?n:void 0}}this._queuedRender??=requestAnimationFrame(this.renderSelection)}renderSelection=()=>{if(this._queuedRender!=null&&(cancelAnimationFrame(this._queuedRender),this._queuedRender=void 0),this.pre==null||this.renderedSelectionRange===this.selectedRange)return;const e=this.pre.querySelectorAll("[data-selected-line]");for(const s of e)s.removeAttribute("data-selected-line");if(this.renderedSelectionRange=this.selectedRange,this.selectedRange==null)return;const n=this.pre.querySelectorAll("[data-code]");if(n.length===0)return;if(n.length>2)throw console.error(n),new Error("LineSelectionManager.applySelectionToDOM: Somehow there are more than 2 code elements...");const t=this.pre.dataset.type==="split",i=this.deriveRowRangeFromDOM(this.selectedRange,t);if(i==null)throw console.error({rowRange:i,selectedRange:this.selectedRange}),new Error("LineSelectionManager.renderSelection: No valid rowRange");const o=i.start===i.end,r=Math.min(i.start,i.end),a=Math.max(i.start,i.end);for(const s of n)for(const l of s.children){if(!(l instanceof HTMLElement))continue;const f=this.getLineIndex(l,t);if((f??0)>a)break;if(f==null||f<r)continue;let c=o?"single":f===r?"first":f===a?"last":"";l.setAttribute("data-selected-line",c),l.nextSibling instanceof HTMLElement&&l.nextSibling.hasAttribute("data-line-annotation")&&(o?(c="last",l.setAttribute("data-selected-line","first")):f===r?c="":f===a&&l.setAttribute("data-selected-line",""),l.nextSibling.setAttribute("data-selected-line",c))}};deriveRowRangeFromDOM(e,n){if(e==null)return;const t=this.findRowIndexForLineNumber(e.start,e.side,n),i=e.end===e.start&&(e.endSide==null||e.endSide===e.side)?t:this.findRowIndexForLineNumber(e.end,e.endSide??e.side,n);return t!=null&&i!=null?{start:t,end:i}:void 0}findRowIndexForLineNumber(e,n="additions",t){if(this.pre==null)return;const i=Array.from(this.pre.querySelectorAll(`[data-line="${e}"]`));if(i.push(...Array.from(this.pre.querySelectorAll(`[data-alt-line="${e}"]`))),i.length!==0){for(const o of i)if(o instanceof HTMLElement){if(this.getLineSideFromElement(o)===n)return this.getLineIndex(o,t);if(parseInt(o.dataset.altLine??"")===e)return this.getLineIndex(o,t)}console.error("LineSelectionManager.findRowIndexForLineNumber: Invalid selection",e,n)}}notifySelectionChange(){const{onLineSelected:e}=this.options;e?.(this.selectedRange??null)}notifySelectionStart(e){const{onLineSelectionStart:n}=this.options;n?.(e)}notifySelectionEnd(e){const{onLineSelectionEnd:n}=this.options;n?.(e)}getMouseEventDataForPath(e,n){let t,i,o=!1,r;for(const a of e)if(a instanceof HTMLElement){if(a.hasAttribute("data-column-number")){o=!0;continue}if(a.hasAttribute("data-line")){if(t=this.getLineNumber(a),i=this.getLineIndex(a,this.pre?.dataset.type==="split"),a.dataset.lineType==="change-deletion"?r="deletions":a.dataset.lineType==="change-additions"&&(r="additions"),i==null||t==null){i=void 0,t=void 0;break}if(r!=null)break;continue}if(a.hasAttribute("data-code")){r??=a.hasAttribute("data-deletions")?"deletions":"additions";break}}if(!(n==="click"&&!o||i==null||t==null))return{lineIndex:i,lineNumber:t,eventSide:r??"additions"}}getLineNumber(e){const n=parseInt(e.dataset.line??"",10);return Number.isNaN(n)?void 0:n}getLineIndex(e,n){const t=(e.dataset.lineIndex??"").split(",").map(i=>parseInt(i)).filter(i=>!Number.isNaN(i));if(n&&t.length===2)return t[1];if(!n)return t[0]}getLineSideFromElement(e){if(e.dataset.lineType==="change-deletion")return"deletions";if(e.dataset.lineType==="change-addition")return"additions";const n=e.closest("[data-code]");return n instanceof HTMLElement&&n.hasAttribute("data-deletions")?"deletions":"additions"}};function He({enableLineSelection:e,onLineSelected:n,onLineSelectionStart:t,onLineSelectionEnd:i}){return{enableLineSelection:e,onLineSelected:n,onLineSelectionStart:t,onLineSelectionEnd:i}}function ie(e,n){return e==null?!1:n==="file"?e.type==="line":e.type==="diff-line"}function Kn(e){return e?.type==="line-info"}var Vn=class{hoveredLine;pre;hoverSlot;constructor(e,n){this.mode=e,this.options=n}setOptions(e){this.options=e}cleanUp(){this.pre?.removeEventListener("click",this.handleMouseClick),this.pre?.removeEventListener("pointermove",this.handleMouseMove),this.pre?.removeEventListener("pointerout",this.handleMouseLeave),delete this.pre?.dataset.interactiveLines,delete this.pre?.dataset.interactiveLineNumbers,this.pre=void 0}setup(e){const{__debugMouseEvents:n,onLineClick:t,onLineNumberClick:i,onLineEnter:o,onLineLeave:r,onHunkExpand:a,enableHoverUtility:s=!1}=this.options;if(this.cleanUp(),this.pre=e,s&&this.hoverSlot==null){this.hoverSlot=document.createElement("div"),this.hoverSlot.dataset.hoverSlot="";const l=document.createElement("slot");l.name="hover-slot",this.hoverSlot.appendChild(l)}else!s&&this.hoverSlot!=null&&(this.hoverSlot.parentNode?.removeChild(this.hoverSlot),this.hoverSlot=void 0);(t!=null||i!=null||a!=null)&&(e.addEventListener("click",this.handleMouseClick),t!=null?e.dataset.interactiveLines="":i!=null&&(e.dataset.interactiveLineNumbers=""),R(n,"click","FileDiff.DEBUG.attachEventListeners: Attaching click events for:",(()=>{const l=[];return(n==="both"||n==="click")&&(t!=null&&l.push("onLineClick"),i!=null&&l.push("onLineNumberClick"),a!=null&&l.push("expandable hunk separators")),l})())),(o!=null||r!=null||s)&&(e.addEventListener("pointermove",this.handleMouseMove),R(n,"move","FileDiff.DEBUG.attachEventListeners: Attaching pointer move event"),e.addEventListener("pointerleave",this.handleMouseLeave),R(n,"move","FileDiff.DEBUG.attachEventListeners: Attaching pointer leave event"))}getHoveredLine=()=>{if(this.hoveredLine!=null){if(this.mode==="diff"&&this.hoveredLine.type==="diff-line")return{lineNumber:this.hoveredLine.lineNumber,side:this.hoveredLine.annotationSide};if(this.mode==="file"&&this.hoveredLine.type==="line")return{lineNumber:this.hoveredLine.lineNumber}}};handleMouseClick=e=>{R(this.options.__debugMouseEvents,"click","FileDiff.DEBUG.handleMouseClick:",e),this.handleMouseEvent({eventType:"click",event:e})};handleMouseMove=e=>{R(this.options.__debugMouseEvents,"move","FileDiff.DEBUG.handleMouseMove:",e),this.handleMouseEvent({eventType:"move",event:e})};handleMouseLeave=e=>{const{__debugMouseEvents:n}=this.options;if(R(n,"move","FileDiff.DEBUG.handleMouseLeave: no event"),this.hoveredLine==null){R(n,"move","FileDiff.DEBUG.handleMouseLeave: returned early, no .hoveredLine");return}this.hoverSlot?.parentElement?.removeChild(this.hoverSlot),this.options.onLineLeave?.({...this.hoveredLine,event:e}),this.hoveredLine=void 0};handleMouseEvent({eventType:e,event:n}){const{__debugMouseEvents:t}=this.options,i=n.composedPath();R(t,e,"FileDiff.DEBUG.handleMouseEvent:",{eventType:e,composedPath:i});const o=this.getLineData(i);R(t,e,"FileDiff.DEBUG.handleMouseEvent: getLineData result:",o);const{onLineClick:r,onLineNumberClick:a,onLineEnter:s,onLineLeave:l,onHunkExpand:f}=this.options;switch(e){case"move":if(ie(o,this.mode)&&this.hoveredLine?.lineElement===o.lineElement){R(t,"move","FileDiff.DEBUG.handleMouseEvent: switch, 'move', returned early because same line");break}this.hoveredLine!=null&&(R(t,"move","FileDiff.DEBUG.handleMouseEvent: switch, 'move', clearing an existing hovered line and firing onLineLeave"),this.hoverSlot?.parentElement?.removeChild(this.hoverSlot),l?.({...this.hoveredLine,event:n}),this.hoveredLine=void 0),ie(o,this.mode)&&(R(t,"move","FileDiff.DEBUG.handleMouseEvent: switch, 'move', setting up a new hoveredLine and firing onLineEnter"),this.hoveredLine=o,this.hoverSlot!=null&&o.numberElement?.appendChild(this.hoverSlot),s?.({...this.hoveredLine,event:n}));break;case"click":if(R(t,"click","FileDiff.DEBUG.handleMouseEvent: switch, 'click', with data:",o),o==null)break;if(Kn(o)&&f!=null){R(t,"click","FileDiff.DEBUG.handleMouseEvent: switch, 'click', expanding a hunk"),f(o.hunkIndex,o.direction);break}ie(o,this.mode)&&(a!=null&&o.numberColumn?(R(t,"click","FileDiff.DEBUG.handleMouseEvent: switch, 'click', firing 'onLineNumberClick'"),a({...o,event:n})):r!=null?(R(t,"click","FileDiff.DEBUG.handleMouseEvent: switch, 'click', firing 'onLineClick'"),r({...o,event:n})):R(t,"click","FileDiff.DEBUG.handleMouseEvent: switch, 'click', fell through, no event to fire"));break}}getLineData(e){let n=!1;const t=e.find(a=>a instanceof HTMLElement?(n=n||"columnNumber"in a.dataset,"line"in a.dataset||"expandIndex"in a.dataset):!1);if(!(t instanceof HTMLElement))return;if(t.dataset.expandIndex!=null){const a=parseInt(t.dataset.expandIndex);if(isNaN(a))return;let s;for(const l of e)if(l===t||l instanceof HTMLElement&&(s=s??("expandUp"in l.dataset?"up":void 0)??("expandDown"in l.dataset?"down":void 0)??("expandBoth"in l.dataset?"both":void 0),s!=null))break;return s!=null?{type:"line-info",hunkIndex:a,direction:s}:void 0}const i=parseInt(t.dataset.line??"");if(isNaN(i))return;const o=t.dataset.lineType;if(o!=="context"&&o!=="context-expanded"&&o!=="change-deletion"&&o!=="change-addition")return;const r=(()=>{const a=t.children[0];return a instanceof HTMLElement&&a.dataset.columnNumber!=null?a:void 0})();return this.mode==="file"?{type:"line",lineElement:t,lineNumber:i,numberElement:r,numberColumn:n}:{type:"diff-line",annotationSide:(()=>{if(o==="change-deletion")return"deletions";if(o==="change-addition")return"additions";const a=t.closest("[data-code]");return a instanceof HTMLElement&&"deletions"in a.dataset?"deletions":"additions"})(),lineType:o,lineElement:t,numberElement:r,lineNumber:i,numberColumn:n}}};function R(e="none",n,...t){switch(e){case"none":return;case"both":break;case"click":if(n!=="click")return;break;case"move":if(n!=="move")return;break}console.log(...t)}function Te({onLineClick:e,onLineNumberClick:n,onLineEnter:t,onLineLeave:i,enableHoverUtility:o,__debugMouseEvents:r},a){return{onLineClick:e,onLineNumberClick:n,onLineEnter:t,onLineLeave:i,enableHoverUtility:o,__debugMouseEvents:r,onHunkExpand:a}}var Xn=class{observedNodes=new Map;cleanUp(){this.resizeObserver?.disconnect(),this.observedNodes.clear()}resizeObserver;setup(e){this.cleanUp();const n=e.querySelectorAll('[data-line-annotation*=","]');this.resizeObserver??=new ResizeObserver(this.handleResizeObserver);const t=e.querySelectorAll("code");for(const o of t){let r=o.querySelector("[data-column-number]");r instanceof HTMLElement||(r=null);const a={type:"code",codeElement:o,numberElement:r,codeWidth:"auto",numberWidth:0};this.observedNodes.set(o,a),this.resizeObserver.observe(o),r!=null&&(this.observedNodes.set(r,a),this.resizeObserver.observe(r))}if(t.length<=1)return;const i=new Map;for(const o of n){if(!(o instanceof HTMLElement))continue;const{lineAnnotation:r=""}=o.dataset;if(!/^\d+,\d+$/.test(r)){console.error("DiffFileRenderer.setupResizeObserver: Invalid element or annotation",{lineAnnotation:r,element:o});continue}let a=i.get(r);a==null&&(a=[],i.set(r,a)),a.push(o)}for(const[o,r]of i){if(r.length!==2){console.error("DiffFileRenderer.setupResizeObserver: Bad Pair",o,r);continue}const[a,s]=r,l=a.firstElementChild,f=s.firstElementChild;if(!(a instanceof HTMLElement)||!(s instanceof HTMLElement)||!(l instanceof HTMLElement)||!(f instanceof HTMLElement))continue;const c={type:"annotations",column1:{container:a,child:l,childHeight:0},column2:{container:s,child:f,childHeight:0},currentHeight:"auto"};this.observedNodes.set(l,c),this.observedNodes.set(f,c),this.resizeObserver.observe(l),this.resizeObserver.observe(f)}}handleResizeObserver=e=>{for(const n of e){const{target:t,borderBoxSize:i}=n;if(!(t instanceof HTMLElement)){console.error("FileDiff.handleResizeObserver: Invalid element for ResizeObserver",n);continue}const o=this.observedNodes.get(t);if(o==null){console.error("FileDiff.handleResizeObserver: Not a valid observed node",n);continue}const r=i[0];if(o.type==="annotations"){const a=(()=>{if(t===o.column1.child)return o.column1;if(t===o.column2.child)return o.column2})();if(a==null){console.error("FileDiff.handleResizeObserver: Couldn't find a column for",{item:o,target:t});continue}a.childHeight=r.blockSize;const s=Math.max(o.column1.childHeight,o.column2.childHeight);s!==o.currentHeight&&(o.currentHeight=Math.max(s,0),o.column1.container.style.setProperty("--diffs-annotation-min-height",`${o.currentHeight}px`),o.column2.container.style.setProperty("--diffs-annotation-min-height",`${o.currentHeight}px`))}else o.type==="code"&&(t===o.codeElement?r.inlineSize!==o.codeWidth&&(o.codeWidth=r.inlineSize,o.codeElement.style.setProperty("--diffs-column-content-width",`${Math.max(o.codeWidth-o.numberWidth,0)}px`),o.codeElement.style.setProperty("--diffs-column-width",`${o.codeWidth}px`)):t===o.numberElement&&r.inlineSize!==o.numberWidth&&(o.numberWidth=r.inlineSize,o.codeElement.style.setProperty("--diffs-column-number-width",`${o.numberWidth}px`),o.codeWidth!=="auto"&&o.codeElement.style.setProperty("--diffs-column-content-width",`${Math.max(o.codeWidth-o.numberWidth,0)}px`)))}}};function Fe(e){for(const n of Array.isArray(e)?e:[e])if(!me.has(n))return!1;return!0}function oe(e){for(const n of Be(e))if(!pe.has(n))return!1;return!0}function ae(e){return E({tagName:"div",children:[E({tagName:"div",children:e.annotations?.map(n=>E({tagName:"slot",properties:{name:n}})),properties:{"data-annotation-content":""}})],properties:{"data-line-annotation":`${e.hunkIndex},${e.lineIndex}`}})}function Qn(e){switch(e){case"file":return"diffs-icon-file-code";case"change":return"diffs-icon-symbol-modified";case"new":return"diffs-icon-symbol-added";case"deleted":return"diffs-icon-symbol-deleted";case"rename-pure":case"rename-changed":return"diffs-icon-symbol-moved"}}function Jn({fileOrDiff:e,themeStyles:n,themeType:t}){const i="type"in e?e:void 0,o={"data-diffs-header":"","data-change-type":i?.type,"data-theme-type":t!=="system"?t:void 0,style:n};return E({tagName:"div",children:[Yn({name:e.name,prevName:"prevName"in e?e.prevName:void 0,iconType:i?.type??"file"}),Zn(i)],properties:o})}function Yn({name:e,prevName:n,iconType:t}){const i=[ge({name:Qn(t),properties:{"data-change-icon":t}})];return n!=null&&(i.push(E({tagName:"div",children:[z(n)],properties:{"data-prev-name":""}})),i.push(ge({name:"diffs-icon-arrow-right-short",properties:{"data-rename-icon":""}}))),i.push(E({tagName:"div",children:[z(e)],properties:{"data-title":""}})),E({tagName:"div",children:i,properties:{"data-header-content":""}})}function Zn(e){const n=[];if(e!=null){let t=0,i=0;for(const o of e.hunks)t+=o.additionLines,i+=o.deletionLines;(i>0||t===0)&&n.push(E({tagName:"span",children:[z(`-${i}`)],properties:{"data-deletions-count":""}})),(t>0||i===0)&&n.push(E({tagName:"span",children:[z(`+${t}`)],properties:{"data-additions-count":""}}))}return n.push(E({tagName:"slot",properties:{name:ve}})),E({tagName:"div",children:n,properties:{"data-metadata":""}})}function et(e){return E({tagName:"pre",properties:nt(e)})}function nt({diffIndicators:e,disableBackground:n,disableLineNumbers:t,overflow:i,split:o,themeType:r,themeStyles:a,totalLines:s}){const l={"data-diffs":"","data-type":o?"split":"file","data-overflow":i,"data-disable-line-numbers":t?"":void 0,"data-background":n?void 0:"","data-indicators":e==="bars"||e==="classic"?e:void 0,"data-theme-type":r!=="system"?r:void 0,style:a,tabIndex:0};return l.style+=`--diffs-min-number-column-width-default:${`${s}`.length}ch;`,l}function tt(e,n){return{langs:[e??"text"],themes:Be(n.theme)}}const it=`<svg data-icon-sprite aria-hidden="true" width="0" height="0">
  <symbol id="diffs-icon-arrow-right-short" viewBox="0 0 16 16">
    <path d="M8.47 4.22a.75.75 0 0 0 0 1.06l1.97 1.97H3.75a.75.75 0 0 0 0 1.5h6.69l-1.97 1.97a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L9.53 4.22a.75.75 0 0 0-1.06 0"/>
  </symbol>
  <symbol id="diffs-icon-brand-github" viewBox="0 0 16 16">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/>
  </symbol>
  <symbol id="diffs-icon-chevron" viewBox="0 0 16 16">
    <path d="M1.47 4.47a.75.75 0 0 1 1.06 0L8 9.94l5.47-5.47a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-chevrons-narrow" viewBox="0 0 10 16">
    <path d="M4.47 2.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-1.06 1.06L5 3.81 2.28 6.53a.75.75 0 0 1-1.06-1.06zM1.22 9.47a.75.75 0 0 1 1.06 0L5 12.19l2.72-2.72a.75.75 0 0 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-diff-split" viewBox="0 0 16 16">
    <path d="M14 0H8.5v16H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1.5 6.5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0"/><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.5V0zm.5 7.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1" opacity=".3"/>
  </symbol>
  <symbol id="diffs-icon-diff-unified" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5h16zm-8-4a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1A.5.5 0 0 0 8 10" clip-rule="evenodd"/><path fill-rule="evenodd" d="M14 0a2 2 0 0 1 2 2v5.5H0V2a2 2 0 0 1 2-2zM6.5 3.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" clip-rule="evenodd" opacity=".4"/>
  </symbol>
  <symbol id="diffs-icon-expand" viewBox="0 0 16 16">
    <path d="M3.47 5.47a.75.75 0 0 1 1.06 0L8 8.94l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06"/>
  </symbol>
  <symbol id="diffs-icon-expand-all" viewBox="0 0 16 16">
    <path d="M11.47 9.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L8 12.94zM7.526 1.418a.75.75 0 0 1 1.004.052l4 4a.75.75 0 1 1-1.06 1.06L8 3.06 4.53 6.53a.75.75 0 1 1-1.06-1.06l4-4z"/>
  </symbol>
  <symbol id="diffs-icon-file-code" viewBox="0 0 16 16">
    <path d="M10.75 0c.199 0 .39.08.53.22l3.5 3.5c.14.14.22.331.22.53v9A2.75 2.75 0 0 1 12.25 16h-8.5A2.75 2.75 0 0 1 1 13.25V2.75A2.75 2.75 0 0 1 3.75 0zm-7 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h8.5c.69 0 1.25-.56 1.25-1.25V5h-1.25A2.25 2.25 0 0 1 10 2.75V1.5z"/><path d="M7.248 6.19a.75.75 0 0 1 .063 1.058L5.753 9l1.558 1.752a.75.75 0 0 1-1.122.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.06-.063M8.69 7.248a.75.75 0 1 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 1 1-1.12-.996L10.245 9z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-added" viewBox="0 0 16 16">
    <path d="M8 4a.75.75 0 0 1 .75.75v2.5h2.5a.75.75 0 0 1 0 1.5h-2.5v2.5a.75.75 0 0 1-1.5 0v-2.5h-2.5a.75.75 0 0 1 0-1.5h2.5v-2.5A.75.75 0 0 1 8 4"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-deleted" viewBox="0 0 16 16">
    <path d="M4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8"/><path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/>
  </symbol>
  <symbol id="diffs-icon-symbol-diffstat" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.75 4.296a.75.75 0 0 0-1.5 0V6.25h-2a.75.75 0 0 0 0 1.5h2v1.5h1.5v-1.5h2a.75.75 0 0 0 0-1.5h-2zM5.25 10a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ignored" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m11.53-2.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06z"/>
  </symbol>
  <symbol id="diffs-icon-symbol-modified" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706s.826.607 1.706.802c.898.2 2.091.288 3.704.288s2.806-.088 3.704-.288c.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5s-2.806.088-3.704.288c-.88.196-1.381.478-1.706.802s-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8M0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  </symbol>
  <symbol id="diffs-icon-symbol-moved" viewBox="0 0 16 16">
    <path d="M1.788 4.296c.196-.88.478-1.381.802-1.706s.826-.606 1.706-.802C5.194 1.588 6.387 1.5 8 1.5s2.806.088 3.704.288c.88.196 1.381.478 1.706.802s.607.826.802 1.706c.2.898.288 2.091.288 3.704s-.088 2.806-.288 3.704c-.195.88-.478 1.381-.802 1.706s-.826.607-1.706.802c-.898.2-2.091.288-3.704.288s-2.806-.088-3.704-.288c-.88-.195-1.381-.478-1.706-.802s-.606-.826-.802-1.706C1.588 10.806 1.5 9.613 1.5 8s.088-2.806.288-3.704M8 0C1.412 0 0 1.412 0 8s1.412 8 8 8 8-1.412 8-8-1.412-8-8-8"/><path d="M8.495 4.695a.75.75 0 0 0-.05 1.06L10.486 8l-2.041 2.246a.75.75 0 0 0 1.11 1.008l2.5-2.75a.75.75 0 0 0 0-1.008l-2.5-2.75a.75.75 0 0 0-1.06-.051m-4 0a.75.75 0 0 0-.05 1.06l2.044 2.248-1.796 1.995a.75.75 0 0 0 1.114 1.004l2.25-2.5a.75.75 0 0 0-.002-1.007l-2.5-2.75a.75.75 0 0 0-1.06-.05"/>
  </symbol>
  <symbol id="diffs-icon-symbol-ref" viewBox="0 0 16 16">
    <path d="M1.5 8c0 1.613.088 2.806.288 3.704.196.88.478 1.381.802 1.706.286.286.71.54 1.41.73V1.86c-.7.19-1.124.444-1.41.73-.324.325-.606.826-.802 1.706C1.588 5.194 1.5 6.387 1.5 8m4 6.397c.697.07 1.522.103 2.5.103 1.613 0 2.806-.088 3.704-.288.88-.195 1.381-.478 1.706-.802s.607-.826.802-1.706c.2-.898.288-2.091.288-3.704s-.088-2.806-.288-3.704c-.195-.88-.478-1.381-.802-1.706s-.826-.606-1.706-.802C10.806 1.588 9.613 1.5 8 1.5c-.978 0-1.803.033-2.5.103zM0 8c0-6.588 1.412-8 8-8s8 1.412 8 8-1.412 8-8 8-8-1.412-8-8m7-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/>
  </symbol>
</svg>`;function Ae(e,n){return e?.cacheKey===n?.cacheKey&&e?.contents===n?.contents&&e?.name===n?.name&&e?.lang===n?.lang}function ot(e){const n=document.createElement("div");return n.dataset.annotationSlot="",n.slot=e,n.style.whiteSpace="normal",n}function re({pre:e,columnType:n}={}){const t=document.createElement("code");return t.dataset.code="",n!=null&&(t.dataset[n]=""),e?.appendChild(t),t}function at(){const e=document.createElement("div");return e.slot="hover-slot",e.style.position="absolute",e.style.top="0",e.style.bottom="0",e.style.textAlign="center",e.style.whiteSpace="normal",e}function rt(){const e=document.createElement("style");return e.setAttribute(We,""),e}var st=`@layer base, theme, unsafe;

@layer base {
  :host {
    --diffs-bg: #fff;
    --diffs-fg: #000;
    --diffs-font-fallback:
      'SF Mono', Monaco, Consolas, 'Ubuntu Mono', 'Liberation Mono',
      'Courier New', monospace;
    --diffs-header-font-fallback:
      system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
      'Noto Sans', 'Liberation Sans', Arial, sans-serif;

    --diffs-mixer: light-dark(black, white);
    --diffs-gap-fallback: 8px;

    /*
    // Available CSS Color Overrides
    --diffs-bg-buffer-override
    --diffs-bg-hover-override
    --diffs-bg-context-override
    --diffs-bg-separator-override

    --diffs-fg-number-override
    --diffs-fg-number-addition-override
    --diffs-fg-number-deletion-override

    --diffs-deletion-color-override
    --diffs-addition-color-override
    --diffs-modified-color-override

    --diffs-bg-deletion-override
    --diffs-bg-deletion-number-override
    --diffs-bg-deletion-hover-override
    --diffs-bg-deletion-emphasis-override

    --diffs-bg-addition-override
    --diffs-bg-addition-number-override
    --diffs-bg-addition-hover-override
    --diffs-bg-addition-emphasis-override

    // Line Selection Color Overrides (for enableLineSelection)
    --diffs-selection-color-override
    --diffs-bg-selection-override
    --diffs-bg-selection-number-override
    --diffs-bg-selection-background-override
    --diffs-bg-selection-number-background-override

    // Available CSS Layout Overrides
    --diffs-gap-inline
    --diffs-gap-block
    --diffs-gap-style
    --diffs-tab-size
  */

    color-scheme: light dark;
    display: block;
    font-family: var(
      --diffs-header-font-family,
      var(--diffs-header-font-fallback)
    );
    font-size: var(--diffs-font-size, 13px);
    line-height: var(--diffs-line-height, 20px);
    font-feature-settings: var(--diffs-font-features);
  }

  /* NOTE(mdo): Some semantic HTML elements (e.g. \`pre\`, \`code\`) have default
 * user-agent styles. These must be overridden to use our custom styles. */
  pre,
  code,
  [data-error-wrapper] {
    margin: 0;
    padding: 0;
    display: block;
    outline: none;
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  [data-icon-sprite] {
    display: none;
  }

  /* NOTE(mdo): Headers and separators are within pre/code, so we need to reset
 * their font-family explicitly. */
  [data-diffs-header],
  [data-separator] {
    font-family: var(
      --diffs-header-font-family,
      var(--diffs-header-font-fallback)
    );
  }

  [data-file-info] {
    padding: 10px;
    font-weight: 700;
    color: var(--fg);
    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
   * and vscode use an older build of chrome that appears to have a bug with
   * color-mix and 'in oklch', so use 'in lab' instead */
    background-color: color-mix(in lab, var(--bg) 98%, var(--fg));
    border-block: 1px solid color-mix(in lab, var(--bg) 95%, var(--fg));
  }

  [data-diffs-header],
  [data-diffs],
  [data-error-wrapper] {
    --diffs-bg: light-dark(var(--diffs-light-bg), var(--diffs-dark-bg));
    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
   * and vscode use an older build of chrome that appears to have a bug with
   * color-mix and 'in oklch', so use 'in lab' instead */
    --diffs-bg-buffer: var(
      --diffs-bg-buffer-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 92%, var(--diffs-mixer))
      )
    );
    --diffs-bg-hover: var(
      --diffs-bg-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 97%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-mixer))
      )
    );
    --diffs-bg-context: var(
      --diffs-bg-context-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 98.5%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 92.5%, var(--diffs-mixer))
      )
    );
    --diffs-bg-separator: var(
      --diffs-bg-separator-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 96%, var(--diffs-mixer)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-mixer))
      )
    );

    --diffs-fg: light-dark(var(--diffs-light), var(--diffs-dark));
    --diffs-fg-number: var(
      --diffs-fg-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg)),
        color-mix(in lab, var(--diffs-fg) 65%, var(--diffs-bg))
      )
    );

    --diffs-deletion-base: var(
      --diffs-deletion-color-override,
      light-dark(
        var(
          --diffs-light-deletion-color,
          var(--diffs-deletion-color, rgb(255, 0, 0))
        ),
        var(
          --diffs-dark-deletion-color,
          var(--diffs-deletion-color, rgb(255, 0, 0))
        )
      )
    );
    --diffs-addition-base: var(
      --diffs-addition-color-override,
      light-dark(
        var(
          --diffs-light-addition-color,
          var(--diffs-addition-color, rgb(0, 255, 0))
        ),
        var(
          --diffs-dark-addition-color,
          var(--diffs-addition-color, rgb(0, 255, 0))
        )
      )
    );
    --diffs-modified-base: var(
      --diffs-modified-color-override,
      light-dark(
        var(
          --diffs-light-modified-color,
          var(--diffs-modified-color, rgb(0, 0, 255))
        ),
        var(
          --diffs-dark-modified-color,
          var(--diffs-modified-color, rgb(0, 0, 255))
        )
      )
    );

    /* NOTE(amadeus): we cannot use 'in oklch' because current versions of cursor
   * and vscode use an older build of chrome that appears to have a bug with
   * color-mix and 'in oklch', so use 'in lab' instead */
    --diffs-bg-deletion: var(
      --diffs-bg-deletion-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-number: var(
      --diffs-bg-deletion-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-hover: var(
      --diffs-bg-deletion-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-deletion-base)),
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-deletion-base))
      )
    );
    --diffs-bg-deletion-emphasis: var(
      --diffs-bg-deletion-emphasis-override,
      light-dark(
        rgb(from var(--diffs-deletion-base) r g b / 0.15),
        rgb(from var(--diffs-deletion-base) r g b / 0.2)
      )
    );

    --diffs-bg-addition: var(
      --diffs-bg-addition-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 88%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-number: var(
      --diffs-bg-addition-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 91%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 85%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-hover: var(
      --diffs-bg-addition-hover-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 80%, var(--diffs-addition-base)),
        color-mix(in lab, var(--diffs-bg) 70%, var(--diffs-addition-base))
      )
    );
    --diffs-bg-addition-emphasis: var(
      --diffs-bg-addition-emphasis-override,
      light-dark(
        rgb(from var(--diffs-addition-base) r g b / 0.15),
        rgb(from var(--diffs-addition-base) r g b / 0.2)
      )
    );

    --diffs-selection-base: var(--diffs-modified-base);
    --diffs-selection-number-fg: light-dark(
      color-mix(in lab, var(--diffs-selection-base) 65%, var(--diffs-mixer)),
      color-mix(in lab, var(--diffs-selection-base) 75%, var(--diffs-mixer))
    );
    --diffs-bg-selection: var(
      --diffs-bg-selection-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 82%, var(--diffs-selection-base)),
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-selection-base))
      )
    );
    --diffs-bg-selection-number: var(
      --diffs-bg-selection-number-override,
      light-dark(
        color-mix(in lab, var(--diffs-bg) 75%, var(--diffs-selection-base)),
        color-mix(in lab, var(--diffs-bg) 60%, var(--diffs-selection-base))
      )
    );

    background-color: var(--diffs-bg);
    color: var(--diffs-fg);
  }

  [data-diffs] {
    --diffs-code-grid: minmax(min-content, max-content) 1fr;

    [data-column-content] span {
      color: light-dark(
        var(--diffs-token-light, var(--diffs-light)),
        var(--diffs-token-dark, var(--diffs-dark))
      );
      font-weight: var(--diffs-token-light-font-weight, inherit);
      font-style: var(--diffs-token-light-font-style, inherit);
      -webkit-text-decoration: var(--diffs-token-light-text-decoration, inherit);
              text-decoration: var(--diffs-token-light-text-decoration, inherit);
    }
  }

  /* Since span is a pretty innocuous selector, we need to make sure we don't
   * apply tokenized BG colors to diff-spans */
  [data-column-content] span:not([data-diff-span]) {
    background-color: light-dark(
      var(--diffs-token-light-bg, inherit),
      var(--diffs-token-dark-bg, inherit)
    );
  }

  [data-column-content] {
    background-color: var(--diffs-line-bg, 'transparent');
    grid-column: 2 / 3;
  }

  [data-diffs][data-dehydrated] {
    --diffs-code-grid: minmax(min-content, max-content) minmax(0, 1fr);
  }

  @media (prefers-color-scheme: dark) {
    [data-diffs-header],
    [data-diffs] {
      color-scheme: dark;
    }

    [data-diffs] [data-column-content] span {
      font-weight: var(--diffs-token-dark-font-weight, inherit);
      font-style: var(--diffs-token-dark-font-style, inherit);
      -webkit-text-decoration: var(--diffs-token-dark-text-decoration, inherit);
              text-decoration: var(--diffs-token-dark-text-decoration, inherit);
    }
  }

  [data-diffs-header][data-theme-type='light'],
  [data-diffs][data-theme-type='light'] {
    color-scheme: light;
  }

  [data-diffs][data-theme-type='light'] [data-column-content] span {
    font-weight: var(--diffs-token-light-font-weight, inherit);
    font-style: var(--diffs-token-light-font-style, inherit);
    -webkit-text-decoration: var(--diffs-token-light-text-decoration, inherit);
            text-decoration: var(--diffs-token-light-text-decoration, inherit);
  }

  [data-diffs-header][data-theme-type='dark'],
  [data-diffs][data-theme-type='dark'] {
    color-scheme: dark;
  }

  [data-diffs][data-theme-type='dark'] [data-column-content] span {
    font-weight: var(--diffs-token-dark-font-weight, inherit);
    font-style: var(--diffs-token-dark-font-style, inherit);
    -webkit-text-decoration: var(--diffs-token-dark-text-decoration, inherit);
            text-decoration: var(--diffs-token-dark-text-decoration, inherit);
  }

  [data-type='split'][data-overflow='wrap'] {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(2, var(--diffs-code-grid));
  }

  [data-type='split'][data-overflow='scroll'] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }

  [data-code] {
    display: block;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: var(--diffs-code-grid);
    overflow: scroll clip;
    overscroll-behavior-x: none;
    tab-size: var(--diffs-tab-size, 2);
    align-self: flex-start;
    padding-top: var(--diffs-gap-block, var(--diffs-gap-fallback));
    padding-bottom: max(
      0px,
      calc(var(--diffs-gap-block, var(--diffs-gap-fallback)) - 6px)
    );
  }

  [data-code]::-webkit-scrollbar {
    width: 0;
    height: 6px;
  }

  [data-code]::-webkit-scrollbar-track {
    background: transparent;
  }

  [data-code]::-webkit-scrollbar-thumb {
    background-color: transparent;
    border: 1px solid transparent;
    background-clip: content-box;
    border-radius: 3px;
  }

  [data-diffs]:hover [data-code]::-webkit-scrollbar-thumb {
    background-color: var(--diffs-bg-context);
  }

  [data-code]::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  /*
   * If we apply these rules globally it will mean that webkit will opt into the
   * standards compliant version of custom css scrollbars, which we do not want
   * because the custom stuff will look better
  */
  @supports (-moz-appearance: none) {
    [data-code] {
      scrollbar-width: thin;
      scrollbar-color: var(--diffs-bg-context) transparent;
      padding-bottom: var(--diffs-gap-block, var(--diffs-gap-fallback));
    }
  }

  [data-diffs][data-type='split'][data-overflow='wrap'] {
    padding-block: var(--diffs-gap-block, var(--diffs-gap-fallback));
  }

  [data-diffs-header] ~ [data-diffs] [data-code],
  [data-diffs-header] ~ [data-diffs][data-overflow='wrap'] {
    padding-top: 0;
  }

  [data-type='split'][data-overflow='wrap'] [data-code] {
    display: contents;
  }

  [data-line-annotation],
  [data-no-newline],
  [data-line] {
    position: relative;
    display: grid;
    grid-template-columns: subgrid;
    grid-column: 1 / 3;
  }

  [data-line-annotation][data-selected-line] {
    background-color: unset;

    &::before {
      content: '';
      position: sticky;
      top: 0;
      left: 0;
      display: block;
      border-right: var(--diffs-gap-style, 1px solid var(--diffs-bg));
      background-color: var(--diffs-bg-selection-number);
    }

    [data-annotation-content] {
      background-color: var(--diffs-bg-selection);
    }
  }

  [data-interactive-lines] [data-line] {
    cursor: pointer;
  }

  [data-buffer] {
    position: sticky;
    left: 0;
    grid-column: 1 / 3;
    -webkit-user-select: none;
            user-select: none;
    /* We multiply by 1.414 (√2) to better approximate the diagonal repeat distance */
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent calc(3px * 1.414),
      var(--diffs-bg-buffer) calc(3px * 1.414),
      var(--diffs-bg-buffer) calc(4px * 1.414)
    );
    min-height: 1lh;
    width: var(--diffs-column-width, auto);
  }

  [data-separator] {
    grid-column: span 2;
  }

  [data-separator='metadata'],
  [data-separator]:empty {
    min-height: 4px;
    background-color: var(--diffs-bg-separator);
    display: grid;
    grid-template-columns: subgrid;
  }

  [data-separator-wrapper] {
    -webkit-user-select: none;
            user-select: none;
    fill: currentColor;
    overflow: hidden;
  }

  [data-separator='metadata'] [data-separator-wrapper] {
    grid-column: 2 / 3;
    width: var(--diffs-column-content-width);
    position: sticky;
    left: var(--diffs-column-number-width);
    padding: 4px 1ch;
  }

  [data-separator='line-info'] {
    margin-block: var(--diffs-gap-block, var(--diffs-gap-fallback));
  }

  [data-separator='line-info'][data-separator-first] {
    margin-top: 0;
  }

  [data-separator='line-info'][data-separator-last] {
    margin-bottom: 0;
  }

  [data-separator='line-info'] [data-separator-wrapper] {
    position: sticky;
    display: flex;
    align-items: center;
    gap: 2px;
    width: auto;
    width: calc(var(--diffs-column-width) - var(--diffs-gap-fallback));
    border-radius: 6px;
  }

  @media (pointer: fine) {
    [data-separator-wrapper][data-separator-multi-button] {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr);
      grid-template-rows: 15px 15px;

      [data-expand-button] {
        height: 15px;
      }
    }

    [data-type='split']
      [data-additions]
      [data-separator-wrapper][data-separator-multi-button] {
      grid-template-columns: minmax(0, 1fr) auto;
    }

    [data-type='split'] [data-additions] [data-expand-button] {
      grid-column: 2;
    }

    [data-type='split'] [data-additions] [data-separator-content] {
      grid-column: 1;
    }
  }

  [data-expand-button],
  [data-separator-content] {
    display: flex;
    align-items: center;
    background-color: var(--diffs-bg-separator);
  }

  [data-expand-button] {
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    width: 32px;
    height: 32px;
    opacity: 0.65;
  }

  [data-hover-slot] {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
  }

  @media (pointer: fine) {
    [data-expand-button]:hover {
      opacity: 1;
    }

    [data-line]:hover {
      z-index: 2;
    }
  }

  [data-expand-down] [data-icon] {
    transform: scaleY(-1);
  }

  [data-separator-content] {
    flex: 1 1 auto;
    padding: 0 1ch;
    height: 32px;
    opacity: 0.65;
    overflow: hidden;
    justify-content: flex-start;

    grid-column: 2;
    grid-row: 1 / -1;
  }

  [data-unmodified-lines] {
    display: block;
    overflow: hidden;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 0 1 auto;
  }

  [data-type='split'] [data-additions] [data-separator-content] {
    justify-content: flex-end;
  }

  [data-type='file']
    [data-code]
    [data-separator='line-info']
    [data-separator-wrapper] {
    left: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    margin-left: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    margin-right: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    width: calc(
      var(--diffs-column-width) -
        (var(--diffs-gap-inline, var(--diffs-gap-fallback)) * 2)
    );
  }

  [data-type='split']
    [data-deletions]
    [data-separator='line-info']
    [data-separator-wrapper] {
    left: var(--diffs-gap-fallback);
    margin-left: var(--diffs-gap-fallback);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  [data-type='split']
    [data-additions]
    [data-separator='line-info']
    [data-separator-wrapper] {
    left: 0;
    margin-right: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-direction: row-reverse;
  }

  [data-line] {
    background-color: var(--diffs-bg);
    color: var(--diffs-fg);
  }

  [data-type='split'][data-overflow='wrap'] [data-deletions] {
    [data-line-annotation],
    [data-buffer],
    [data-line],
    [data-separator] {
      grid-column: 1 / 3;
    }
  }

  [data-line-annotation] {
    min-height: var(--diffs-annotation-min-height, 0);
    background-color: var(--diffs-bg-context);
    z-index: 3;
  }

  [data-type='split'][data-overflow='wrap'] [data-additions] {
    [data-line-annotation],
    [data-buffer],
    [data-line],
    [data-separator] {
      margin-left: 2px;
      grid-column: 3 / 5;
    }
  }

  [data-separator='custom'] {
    display: grid;
    grid-template-columns: subgrid;
  }

  [data-column-content],
  [data-column-number] {
    position: relative;
    padding-inline: 1ch;
  }

  [data-indicators='classic'] [data-column-content] {
    padding-inline-start: 2ch;
  }

  [data-indicators='classic'] {
    [data-line-type='change-addition'] [data-column-content]::before,
    [data-line-type='change-deletion'] [data-column-content]::before {
      display: inline-block;
      width: 1ch;
      height: 1lh;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-user-select: none;
              user-select: none;
    }

    [data-line-type='change-addition'] [data-column-content]::before {
      content: '+';
      color: var(--diffs-addition-base);
    }

    [data-line-type='change-deletion'] [data-column-content]::before {
      content: '-';
      color: var(--diffs-deletion-base);
    }
  }

  [data-indicators='bars'] {
    [data-line-type='change-deletion'] [data-column-number]::before,
    [data-line-type='change-addition'] [data-column-number]::before {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      -webkit-user-select: none;
              user-select: none;
    }

    [data-line-type='change-deletion'] [data-column-number]::before {
      background-image: linear-gradient(
        0deg,
        var(--diffs-bg-deletion) 50%,
        var(--diffs-deletion-base) 50%
      );
      background-repeat: repeat;
      background-size: 2px 2px;
      background-size: calc(1lh / round(1lh / 2px)) calc(1lh / round(1lh / 2px));
    }

    [data-line-type='change-addition'] [data-column-number]::before {
      background-color: var(--diffs-addition-base);
    }
  }

  [data-overflow='wrap'] [data-column-content],
  [data-overflow='wrap'] [data-annotation-content] {
    white-space: pre-wrap;
    word-break: break-word;
  }

  [data-overflow='scroll'] [data-column-content] {
    white-space: pre;
    min-height: 1lh;
  }

  [data-column-number] {
    grid-column: 1 / 2;
    box-sizing: content-box;
    text-align: right;
    position: sticky;
    left: 0;
    -webkit-user-select: none;
            user-select: none;
    background-color: var(--diffs-bg);
    color: var(--diffs-fg-number);
    z-index: 1;
    min-width: var(
      --diffs-min-number-column-width,
      var(--diffs-min-number-column-width-default, 3ch)
    );
    padding-left: 2ch;
    border-right: var(--diffs-gap-style, 1px solid var(--diffs-bg));
  }

  [data-disable-line-numbers] {
    &[data-indicators='bars'] [data-column-number] {
      min-width: 4px;
      border-right: var(--diffs-gap-style, 1px solid var(--diffs-bg));
    }

    [data-column-number] {
      border-right: none;
      min-width: 0;
      padding: 0;
    }

    [data-line-number-content] {
      display: none;
    }

    [data-hover-slot] {
      right: unset;
      left: 0;
      justify-content: flex-start;
    }

    &[data-indicators='bars'] [data-hover-slot] {
      /* Using 5px here because theres a 1px separator after the bar */
      left: 5px;
    }
  }

  [data-interactive-line-numbers] [data-column-number] {
    cursor: pointer;
  }

  [data-diff-span] {
    border-radius: 3px;
    -webkit-box-decoration-break: clone;
            box-decoration-break: clone;
  }

  [data-line-type='change-addition'] {
    [data-column-number] {
      color: var(
        --diffs-fg-number-addition-override,
        var(--diffs-addition-base)
      );
    }

    [data-diff-span] {
      background-color: var(--diffs-bg-addition-emphasis);
    }
  }

  [data-line-type='change-deletion'] {
    [data-column-number] {
      color: var(
        --diffs-fg-number-deletion-override,
        var(--diffs-deletion-base)
      );
    }

    [data-diff-span] {
      background-color: var(--diffs-bg-deletion-emphasis);
    }
  }

  [data-background] [data-line-type='change-addition'] {
    --diffs-line-bg: var(--diffs-bg-addition);

    [data-column-number] {
      background-color: var(--diffs-bg-addition-number);
    }
  }

  [data-background] [data-line-type='change-deletion'] {
    --diffs-line-bg: var(--diffs-bg-deletion);

    [data-column-number] {
      background-color: var(--diffs-bg-deletion-number);
    }
  }

  [data-line-type='context-expanded'] {
    --diffs-line-bg: var(--diffs-bg-context);

    [data-column-number] {
      background-color: var(--diffs-bg-context);
    }
  }

  /* By wrapping hovers in a pointer: fine, we ensure that mobile devices don't
*  require a double click */
  @media (pointer: fine) {
    [data-line]:hover:not([data-selected-line]) {
      [data-column-number],
      [data-column-content] {
        background-color: var(--diffs-bg-hover);
      }
    }

    [data-background] [data-line]:hover:not([data-selected-line]) {
      &[data-line-type='change-deletion'] [data-column-number],
      &[data-line-type='change-deletion'] [data-column-content] {
        background-color: var(--diffs-bg-deletion-hover);
      }

      &[data-line-type='change-addition'] [data-column-number],
      &[data-line-type='change-addition'] [data-column-content] {
        background-color: var(--diffs-bg-addition-hover);
      }
    }
  }

  [data-diffs-header] {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    min-height: calc(
      1lh + (var(--diffs-gap-block, var(--diffs-gap-fallback)) * 3)
    );
    padding-inline: 16px;
  }

  [data-header-content] {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--diffs-gap-inline, var(--diffs-gap-fallback));
    min-width: 0;
    white-space: nowrap;
  }

  [data-header-content] [data-prev-name],
  [data-header-content] [data-title] {
    direction: rtl;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    white-space: nowrap;
  }

  [data-prev-name] {
    opacity: 0.7;
  }

  [data-rename-icon] {
    fill: currentColor;
    flex-shrink: 0;
    flex-grow: 0;
  }

  [data-diffs-header] [data-metadata] {
    display: flex;
    align-items: center;
    gap: 1ch;
    white-space: nowrap;
  }

  [data-diffs-header] [data-additions-count] {
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    color: var(--diffs-addition-base);
  }

  [data-diffs-header] [data-deletions-count] {
    font-family: var(--diffs-font-family, var(--diffs-font-fallback));
    color: var(--diffs-deletion-base);
  }

  [data-no-newline] {
    -webkit-user-select: none;
            user-select: none;

    [data-column-content] {
      opacity: 0.6;
    }
  }

  [data-annotation-content] {
    position: sticky;
    left: var(--diffs-column-number-width, 0);
    grid-column: 2 / -1;
    width: var(--diffs-column-content-width, auto);
    align-self: flex-start;
    z-index: 2;
    height: 100%;
  }

  /* Undo some of the stuff that the 'pre' tag does */
  [data-annotation-slot] {
    text-wrap-mode: wrap;
    word-break: normal;
    white-space-collapse: collapse;
  }

  [data-change-icon] {
    fill: currentColor;
    flex-shrink: 0;
  }

  [data-change-icon='change'],
  [data-change-icon='rename-pure'],
  [data-change-icon='rename-changed'] {
    color: var(--diffs-modified-base);
  }

  [data-change-icon='new'] {
    color: var(--diffs-addition-base);
  }

  [data-change-icon='deleted'] {
    color: var(--diffs-deletion-base);
  }

  [data-change-icon='file'] {
    opacity: 0.6;
  }

  /* Line selection highlighting */
  [data-line-type='context'][data-selected-line] {
    [data-column-number] {
      color: var(--diffs-selection-number-fg);
      background-color: var(--diffs-bg-selection-number);
    }

    [data-column-content] {
      background-color: var(--diffs-bg-selection);
    }
  }

  [data-line-type='context-expanded'],
  [data-line-type='change-addition'],
  [data-line-type='change-deletion'] {
    &[data-selected-line] {
      [data-column-content] {
        background-color: light-dark(
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 82%,
            var(--diffs-selection-base)
          ),
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 75%,
            var(--diffs-selection-base)
          )
        );
      }

      [data-column-number] {
        color: var(--diffs-selection-number-fg);
        background-color: light-dark(
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 75%,
            var(--diffs-selection-base)
          ),
          color-mix(
            in lab,
            var(--diffs-line-bg, var(--diffs-bg)) 60%,
            var(--diffs-selection-base)
          )
        );
      }
    }
  }

  [data-error-wrapper] {
    overflow: auto;
    padding: var(--diffs-gap-block, var(--diffs-gap-fallback))
      var(--diffs-gap-inline, var(--diffs-gap-fallback));
    max-height: 400px;
    scrollbar-width: none;

    [data-error-message] {
      font-weight: bold;
      font-size: 18px;
      color: var(--diffs-deletion-base);
    }

    [data-error-stack] {
      color: var(--diffs-fg-number);
    }
  }
}
`;const lt="@layer base, theme, unsafe;";function dt(e){return`${lt}
@layer unsafe {
  ${e}
}`}function ct(e,n){if(n==null)return;const t=e.shadowRoot??e.attachShadow({mode:"open"});t.innerHTML===""&&(t.innerHTML=n)}function ft({diffIndicators:e,disableBackground:n,disableLineNumbers:t,overflow:i,pre:o,split:r,themeStyles:a,themeType:s,totalLines:l}){switch(s==="system"?delete o.dataset.themeType:o.dataset.themeType=s,e){case"bars":case"classic":o.dataset.indicators=e;break;case"none":delete o.dataset.indicators;break}return t?o.dataset.disableLineNumbers="":delete o.dataset.disableLineNumbers,n?delete o.dataset.background:o.dataset.background="",o.dataset.type=r?"split":"file",o.dataset.overflow=i,o.dataset.diffs="",o.tabIndex=0,o.style=a,o.style.setProperty("--diffs-min-number-column-width-default",`${`${l}`.length}ch`),o}if(typeof HTMLElement<"u"&&customElements.get(U)==null){let e;class n extends HTMLElement{constructor(){if(super(),this.shadowRoot!=null)return;const i=this.attachShadow({mode:"open"});e==null&&(e=new CSSStyleSheet,e.replaceSync(st)),i.adoptedStyleSheets=[e]}}customElements.define(U,n)}const ht=!0;function ut(e,n,t){if(e===n||e==null||n==null)return e===n;const i=new Set(t),o=Object.keys(e),r=new Set(Object.keys(n));for(const a of o)if(r.delete(a),!i.has(a)&&(!(a in n)||e[a]!==n[a]))return!1;for(const a of Array.from(r))if(!i.has(a))return!1;return!0}function pt(e,n){return Ge(e?.theme??F,n?.theme??F)&&ut(e,n,["theme"])}function Ve({fileDiff:e,oldFile:n,newFile:t,renderHeaderMetadata:i,renderAnnotation:o,renderHoverUtility:r,lineAnnotations:a,getHoveredLine:s}){const l=i?.({fileDiff:e,oldFile:n,newFile:t});return x.jsxs(x.Fragment,{children:[l!=null&&x.jsx("div",{slot:ve,children:l}),o!=null&&a?.map((f,c)=>x.jsx("div",{slot:V(f),children:o(f)},c)),r!=null&&x.jsx("div",{slot:"hover-slot",style:sn,children:r(s)})]})}var mt=class{isDeletionsScrolling=!1;isAdditionsScrolling=!1;timeoutId=-1;codeDeletions;codeAdditions;enabled=!1;cleanUp(){this.enabled&&(this.codeDeletions?.removeEventListener("scroll",this.handleDeletionsScroll),this.codeAdditions?.removeEventListener("scroll",this.handleAdditionsScroll),clearTimeout(this.timeoutId),this.codeDeletions=void 0,this.codeAdditions=void 0,this.enabled=!1)}setup(e,n,t){if(n==null||t==null)for(const i of e.children??[])i instanceof HTMLElement&&("deletions"in i.dataset?n=i:"additions"in i.dataset&&(t=i));if(t==null||n==null){this.cleanUp();return}this.codeDeletions!==n&&(this.codeDeletions?.removeEventListener("scroll",this.handleDeletionsScroll),this.codeDeletions=n,n.addEventListener("scroll",this.handleDeletionsScroll,{passive:!0})),this.codeAdditions!==t&&(this.codeAdditions?.removeEventListener("scroll",this.handleAdditionsScroll),this.codeAdditions=t,t.addEventListener("scroll",this.handleAdditionsScroll,{passive:!0})),this.enabled=!0}handleDeletionsScroll=()=>{this.isAdditionsScrolling||(this.isDeletionsScrolling=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.isDeletionsScrolling=!1},300),this.codeAdditions?.scrollTo({left:this.codeDeletions?.scrollLeft}))};handleAdditionsScroll=()=>{this.isDeletionsScrolling||(this.isAdditionsScrolling=!0,clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.isAdditionsScrolling=!1},300),this.codeDeletions?.scrollTo({left:this.codeAdditions?.scrollLeft}))}};function $(e){return E({tagName:"div",properties:{"data-buffer":"",style:`grid-row: span ${e};min-height:calc(${e} * 1lh)`}})}function se(e){return E({tagName:"div",children:[E({tagName:"span",properties:{"data-column-number":""}}),E({tagName:"span",children:[z("No newline at end of file")],properties:{"data-column-content":""}})],properties:{"data-no-newline":"","data-line-type":e}})}function le(e){return E({tagName:"div",children:[ge({name:e==="both"?"diffs-icon-expand-all":"diffs-icon-expand",properties:{"data-icon":""}})],properties:{"data-expand-button":"","data-expand-both":e==="both"?"":void 0,"data-expand-up":e==="up"?"":void 0,"data-expand-down":e==="down"?"":void 0}})}function de({type:e,content:n,expandIndex:t,chunked:i=!1,slotName:o,isFirstHunk:r,isLastHunk:a}){const s=[];if(e==="metadata"&&n!=null&&s.push(E({tagName:"div",children:[z(n)],properties:{"data-separator-wrapper":""}})),e==="line-info"&&n!=null){const l=[];t!=null&&(i?(r||l.push(le("up")),a||l.push(le("down"))):l.push(le(!r&&!a?"both":r?"down":"up"))),l.push(E({tagName:"div",children:[E({tagName:"span",children:[z(n)],properties:{"data-unmodified-lines":""}})],properties:{"data-separator-content":""}})),s.push(E({tagName:"div",children:l,properties:{"data-separator-wrapper":"","data-separator-multi-button":l.length>2?"":void 0}}))}return e==="custom"&&o!=null&&s.push(E({tagName:"slot",properties:{name:o}})),E({tagName:"div",children:s,properties:{"data-separator":s.length===0?"":e,"data-expand-index":t,"data-separator-first":r?"":void 0,"data-separator-last":a?"":void 0}})}function gt(e,n){return`hunk-separator-${e}-${n}`}function vt(e){const n=e[e.length-1];return n==null?0:Math.max(n.additionStart+n.additionCount,n.deletionStart+n.deletionCount)}const bt={fromStart:0,fromEnd:0};var yt=class{highlighter;diff;expandedHunks=new Map;deletionAnnotations={};additionAnnotations={};computedLang="text";renderCache;constructor(e={theme:F},n,t){this.options=e,this.onRenderUpdate=n,this.workerManager=t,t?.isWorkingPool()!==!0&&(this.highlighter=oe(e.theme??F)?wn():void 0)}cleanUp(){this.highlighter=void 0,this.diff=void 0,this.renderCache=void 0,this.workerManager=void 0,this.onRenderUpdate=void 0}setOptions(e){this.options=e}mergeOptions(e){this.options={...this.options,...e}}setThemeType(e){this.getOptionsWithDefaults().themeType!==e&&this.mergeOptions({themeType:e})}expandHunk(e,n){const{expansionLineCount:t}=this.getOptionsWithDefaults(),i=this.expandedHunks.get(e)??{fromStart:0,fromEnd:0};(n==="up"||n==="both")&&(i.fromStart+=t),(n==="down"||n==="both")&&(i.fromEnd+=t),this.expandedHunks.set(e,i)}setLineAnnotations(e){this.additionAnnotations={},this.deletionAnnotations={};for(const n of e){const t=(()=>{switch(n.side){case"deletions":return this.deletionAnnotations;case"additions":return this.additionAnnotations}})(),i=t[n.lineNumber]??[];t[n.lineNumber]=i,i.push(n)}}getOptionsWithDefaults(){const{diffIndicators:e="bars",diffStyle:n="split",disableBackground:t=!1,disableFileHeader:i=!1,disableLineNumbers:o=!1,expandUnchanged:r=!1,expansionLineCount:a=100,hunkSeparators:s="line-info",lineDiffType:l="word-alt",maxLineDiffLength:f=1e3,overflow:c="scroll",theme:h=F,themeType:u="system",tokenizeMaxLineLength:p=1e3,useCSSClasses:g=!1}=this.options;return{diffIndicators:e,diffStyle:n,disableBackground:t,disableFileHeader:i,disableLineNumbers:o,expandUnchanged:r,expansionLineCount:a,hunkSeparators:s,lineDiffType:l,maxLineDiffLength:f,overflow:c,theme:this.workerManager?.getDiffRenderOptions().theme??h,themeType:u,tokenizeMaxLineLength:p,useCSSClasses:g}}async initializeHighlighter(){return this.highlighter=await kn(tt(this.computedLang,this.options)),this.highlighter}hydrate(e){if(e==null)return;this.diff=e;const{options:n}=this.getRenderOptions(e);let t=this.workerManager?.getDiffResultCache(e);t!=null&&!ce(n,t.options)&&(t=void 0),this.renderCache??={diff:e,highlighted:!0,options:n,result:t?.result},this.workerManager?.isWorkingPool()===!0&&this.renderCache.result==null?this.workerManager.highlightDiffAST(this,this.diff):this.asyncHighlight(e).then(({result:i,options:o})=>{this.onHighlightSuccess(e,i,o)})}getRenderOptions(e){const n=(()=>{if(this.workerManager?.isWorkingPool()===!0)return this.workerManager.getDiffRenderOptions();const{theme:i,tokenizeMaxLineLength:o,lineDiffType:r}=this.getOptionsWithDefaults();return{theme:i,tokenizeMaxLineLength:o,lineDiffType:r}})();this.getOptionsWithDefaults();const{renderCache:t}=this;return t?.result==null?{options:n,forceRender:!0}:e!==t.diff||!ce(n,t.options)?{options:n,forceRender:!0}:{options:n,forceRender:!1}}renderDiff(e=this.renderCache?.diff){if(e==null)return;const n=this.workerManager?.getDiffResultCache(e);n!=null&&this.renderCache==null&&(this.renderCache={diff:e,highlighted:!0,...n});const{options:t,forceRender:i}=this.getRenderOptions(e);if(this.renderCache??={diff:e,highlighted:!1,options:t,result:void 0},this.workerManager?.isWorkingPool()===!0)this.renderCache.result??=this.workerManager.getPlainDiffAST(e),(!this.renderCache.highlighted||i)&&this.workerManager.highlightDiffAST(this,e);else{this.computedLang=e.lang??X(e.name);const o=this.highlighter!=null&&oe(t.theme),r=this.highlighter!=null&&Fe(this.computedLang);if(this.highlighter!=null&&o&&(i||!this.renderCache.highlighted&&r||this.renderCache.result==null)){const{result:a,options:s}=this.renderDiffWithHighlighter(e,this.highlighter,!r);this.renderCache={diff:e,options:s,highlighted:r,result:a}}(!o||!r)&&this.asyncHighlight(e).then(({result:a,options:s})=>{this.onHighlightSuccess(e,a,s)})}return this.renderCache.result!=null?this.processDiffResult(this.renderCache.diff,this.renderCache.result):void 0}async asyncRender(e){const{result:n}=await this.asyncHighlight(e);return this.processDiffResult(e,n)}createPreElement(e,n,t,i){const{diffIndicators:o,disableBackground:r,disableLineNumbers:a,overflow:s,themeType:l}=this.getOptionsWithDefaults();return et({diffIndicators:o,disableBackground:r,disableLineNumbers:a,overflow:s,themeStyles:t,split:e,themeType:i??l,totalLines:n})}async asyncHighlight(e){this.computedLang=e.lang??X(e.name);const n=this.highlighter!=null&&oe(this.options.theme??F),t=this.highlighter!=null&&Fe(this.computedLang);return(this.highlighter==null||!n||!t)&&(this.highlighter=await this.initializeHighlighter()),this.renderDiffWithHighlighter(e,this.highlighter)}renderDiffWithHighlighter(e,n,t=!1){const{options:i}=this.getRenderOptions(e);return{result:Wn(e,n,i,t),options:i}}onHighlightSuccess(e,n,t){if(this.renderCache==null)return;const i=this.renderCache.diff!==e||!this.renderCache.highlighted||!ce(this.renderCache.options,t);this.renderCache={diff:e,options:t,highlighted:!0,result:n},i&&this.onRenderUpdate?.()}onHighlightError(e){console.error(e)}processDiffResult(e,{code:n,themeStyles:t,baseThemeType:i}){const{diffStyle:o,disableFileHeader:r}=this.getOptionsWithDefaults();this.diff=e;const a=o==="unified";let s=[],l=[],f=[],c=0;const h=[];let u,p=0;for(const w of e.hunks)p+=w.collapsedBefore,p=this.renderHunks({ast:n,hunk:w,prevHunk:u,hunkIndex:c,isLastHunk:c===e.hunks.length-1,additionsAST:s,deletionsAST:l,unifiedAST:f,hunkData:h,lineIndex:p}),c++,u=w;const g=Math.max(vt(e.hunks),e.newLines?.length??0,e.oldLines?.length??0);s=!a&&(n.hunks!=null||n.newLines.length>0)?s:void 0,l=!a&&(n.hunks!=null||n.oldLines.length>0)?l:void 0,f=f.length>0?f:void 0;const k=this.createPreElement(l!=null&&s!=null,g,t,i);return{additionsAST:s,deletionsAST:l,unifiedAST:f,hunkData:h,preNode:k,themeStyles:t,baseThemeType:i,headerElement:r?void 0:this.renderHeader(this.diff,t,i),totalLines:g,css:""}}renderFullAST(e,n=[]){return e.unifiedAST!=null&&n.push(E({tagName:"code",children:e.unifiedAST,properties:{"data-code":"","data-unified":""}})),e.deletionsAST!=null&&n.push(E({tagName:"code",children:e.deletionsAST,properties:{"data-code":"","data-deletions":""}})),e.additionsAST!=null&&n.push(E({tagName:"code",children:e.additionsAST,properties:{"data-code":"","data-additions":""}})),{...e.preNode,children:n}}renderFullHTML(e,n=[]){return G(this.renderFullAST(e,n))}renderPartialHTML(e,n){return n==null?G(e):G(E({tagName:"code",children:e,properties:{"data-code":"",[`data-${n}`]:""}}))}renderCollapsedHunks({ast:e,hunkData:n,hunkIndex:t,hunkSpecs:i,isFirstHunk:o,isLastHunk:r,rangeSize:a,lineIndex:s,additionLineNumber:l,deletionLineNumber:f,unifiedAST:c,deletionsAST:h,additionsAST:u}){if(a<=0)return;const{hunkSeparators:p,expandUnchanged:g,diffStyle:k,expansionLineCount:w}=this.getOptionsWithDefaults(),m=e.hunks==null&&e.newLines.length>0&&e.oldLines.length>0,d=this.expandedHunks.get(t)??bt,v=a>w,b=Math.max(g?0:a-(d.fromEnd+d.fromStart),0),y=({type:M,linesAST:S})=>{if(p==="line-info"||p==="custom"){const N=gt(M,t);S.push(de({type:p,content:kt(b),expandIndex:m?t:void 0,chunked:v,slotName:N,isFirstHunk:o,isLastHunk:r})),n.push({slotName:N,hunkIndex:t,lines:b,type:M,expandable:m?{up:m&&!o,down:m,chunked:v}:void 0})}else p==="metadata"&&i!=null?S.push(de({type:"metadata",content:i,isFirstHunk:o,isLastHunk:r})):p==="simple"&&t>0&&S.push(de({type:"simple",isFirstHunk:o,isLastHunk:!1}))},L=({rangeLen:M,fromStart:S})=>{if(e.newLines==null||e.oldLines==null)return;const N=r?0:S?a:M;let H=f-N,A=l-N,Q=s-N;for(let ye=0;ye<M;ye++){const ke=e.oldLines[H],J=e.newLines[A];if(ke==null||J==null)throw console.error({aLineNumber:A,dLineNumber:H,ast:e}),new Error("DiffHunksRenderer.renderHunks prefill context invalid. Must include data for old and new lines");H++,A++,k==="unified"?this.pushLineWithAnnotation({newLine:J,unifiedAST:c,unifiedSpan:this.getAnnotations("unified",H,A,t,Q)}):this.pushLineWithAnnotation({newLine:J,oldLine:ke,additionsAST:u,deletionsAST:h,...this.getAnnotations("split",H,A,t,Q)}),Q++}};m&&L({rangeLen:Math.min(b===0||g?a:d.fromStart,a),fromStart:!0}),b>0&&(k==="unified"?y({type:"unified",linesAST:c}):(y({type:"deletions",linesAST:h}),y({type:"additions",linesAST:u}))),b>0&&d.fromEnd>0&&!r&&L({rangeLen:Math.min(d.fromEnd,a),fromStart:!1})}renderHunks({hunk:e,hunkData:n,hunkIndex:t,lineIndex:i,isLastHunk:o,prevHunk:r,ast:a,deletionsAST:s,additionsAST:l,unifiedAST:f}){const{diffStyle:c}=this.getOptionsWithDefaults(),h=c==="unified";let u=e.additionStart-1,p=e.deletionStart-1;this.renderCollapsedHunks({additionLineNumber:u,additionsAST:l,ast:a,deletionLineNumber:p,deletionsAST:s,hunkData:n,hunkIndex:t,hunkSpecs:e.hunkSpecs,isFirstHunk:r==null,isLastHunk:!1,lineIndex:i,rangeSize:Math.max(e.collapsedBefore,0),unifiedAST:f});let{oldLines:g,newLines:k,oldIndex:w,newIndex:m}=(()=>{if(a.hunks!=null){const d=a.hunks[t];if(d==null)throw console.error({ast:a,hunkIndex:t}),new Error("DiffHunksRenderer.renderHunks: lineHunk doesn't exist");return{oldLines:d.oldLines,newLines:d.newLines,oldIndex:0,newIndex:0}}return{oldLines:a.oldLines,newLines:a.newLines,oldIndex:p,newIndex:u}})();for(const d of e.hunkContent)if(d.type==="context"){const{length:v}=d.lines;for(let b=0;b<v;b++){const y=g[w],L=k[m];if(w++,m++,u++,p++,h){if(L==null)throw new Error("DiffHunksRenderer.renderHunks: newLine doesnt exist for context...");this.pushLineWithAnnotation({newLine:L,unifiedAST:f,unifiedSpan:this.getAnnotations("unified",p,u,t,i)})}else{if(L==null||y==null)throw new Error("DiffHunksRenderer.renderHunks: newLine or oldLine doesnt exist for context...");this.pushLineWithAnnotation({oldLine:y,newLine:L,deletionsAST:s,additionsAST:l,...this.getAnnotations("split",p,u,t,i)})}i++}if(d.noEOFCR){const b=se("context");h?f.push(b):(s.push(b),l.push(b))}}else{const{length:v}=d.deletions,{length:b}=d.additions,y=h?v+b:Math.max(v,b);let L=0;for(let M=0;M<y;M++){const{oldLine:S,newLine:N}=(()=>{let H=g[w],A=k[m];if(h?M<v?A=void 0:H=void 0:(M>=v&&(H=void 0),M>=b&&(A=void 0)),H==null&&A==null)throw console.error({i:M,len:y,ast:a,hunkContent:d}),new Error("renderHunks: oldLine and newLine are null, something is wrong");return{oldLine:H,newLine:A}})();if(S!=null&&(w++,p++),N!=null&&(m++,u++),h)this.pushLineWithAnnotation({oldLine:S,newLine:N,unifiedAST:f,unifiedSpan:this.getAnnotations("unified",S!=null?p:void 0,N!=null?u:void 0,t,i)}),i++;else{(S==null||N==null)&&L++;const H=this.getAnnotations("split",S!=null?p:void 0,N!=null?u:void 0,t,i);H!=null&&L>0&&(b>v?s.push($(L)):l.push($(L)),L=0),this.pushLineWithAnnotation({newLine:N,oldLine:S,deletionsAST:s,additionsAST:l,...H}),i++}}h||(L>0&&(b>v?s.push($(L)):l.push($(L)),L=0),d.noEOFCRDeletions&&(s.push(se("change-deletion")),d.noEOFCRAdditions||l.push($(1))),d.noEOFCRAdditions&&(l.push(se("change-addition")),d.noEOFCRDeletions||s.push($(1))))}return o&&a.newLines!=null&&a.newLines.length>0&&this.renderCollapsedHunks({additionLineNumber:u,additionsAST:l,ast:a,deletionLineNumber:p,deletionsAST:s,hunkData:n,hunkIndex:t+1,hunkSpecs:void 0,isFirstHunk:!1,isLastHunk:!0,lineIndex:i,rangeSize:Math.max(a.newLines.length-Math.max(e.additionStart+e.additionCount-1,0),0),unifiedAST:f}),i}pushLineWithAnnotation({newLine:e,oldLine:n,unifiedAST:t,additionsAST:i,deletionsAST:o,unifiedSpan:r,deletionSpan:a,additionSpan:s}){t!=null?(n!=null?t.push(n):e!=null&&t.push(e),r!=null&&t.push(ae(r))):o!=null&&i!=null&&(n!=null&&o.push(n),e!=null&&i.push(e),a!=null&&o.push(ae(a)),s!=null&&i.push(ae(s)))}getAnnotations(e,n,t,i,o){const r={type:"annotation",hunkIndex:i,lineIndex:o,annotations:[]};if(n!=null)for(const s of this.deletionAnnotations[n]??[])r.annotations.push(V(s));const a={type:"annotation",hunkIndex:i,lineIndex:o,annotations:[]};if(t!=null)for(const s of this.additionAnnotations[t]??[])(e==="unified"?r:a).annotations.push(V(s));if(e==="unified")return r.annotations.length>0?r:void 0;if(!(a.annotations.length===0&&r.annotations.length===0))return{deletionSpan:r,additionSpan:a}}renderHeader(e,n,t){const{themeType:i}=this.getOptionsWithDefaults();return Jn({fileOrDiff:e,themeStyles:n,themeType:t??i})}};function ce(e,n){return Ge(e.theme,n.theme)&&e.tokenizeMaxLineLength===n.tokenizeMaxLineLength&&e.lineDiffType===n.lineDiffType}function kt(e){return`${e} unmodified line${e>1?"s":""}`}function wt(e){const n=e[0];if(n!=="+"&&n!=="-"&&n!==" "&&n!=="\\"){console.error(`parseLineType: Invalid firstChar: "${n}", full line: "${e}"`);return}const t=e.substring(1);return{line:t===""?`
`:t,type:n===" "?"context":n==="\\"?"metadata":n==="+"?"addition":"deletion"}}function xt(e,n){const t=Z.test(e),i=e.split(t?Z:we);let o;const r=[];let a;for(const s of i){if(t&&!Z.test(s)){o==null?o=s:console.error("parsePatchContent: unknown file blob:",s);continue}else if(!t&&!we.test(s)){o==null?o=s:console.error("parsePatchContent: unknown file blob:",s);continue}let l=0;const f=s.split(dn);a=void 0;for(const c of f){const h=c.split(he),u=h.shift();if(u==null){console.error("parsePatchContent: invalid hunk",c);continue}const p=u.match(cn),g=[];let k=0,w=0;if(p==null||a==null){if(a!=null){console.error("parsePatchContent: Invalid hunk",c);continue}a={name:"",prevName:void 0,type:"change",hunks:[],splitLineCount:0,unifiedLineCount:0,cacheKey:void 0},h.unshift(u);for(const d of h){const v=d.match(t?hn:fn);if(d.startsWith("diff --git")){const[,,b,,y]=d.trim().match(un)??[];a.name=y.trim(),b!==y&&(a.prevName=b.trim())}else if(v!=null){const[,b,y]=v;b==="---"&&y!=="/dev/null"?(a.prevName=y.trim(),a.name=y.trim()):b==="+++"&&y!=="/dev/null"&&(a.name=y.trim())}else if(t){if(d.startsWith("new mode ")&&(a.mode=d.replace("new mode","").trim()),d.startsWith("old mode ")&&(a.oldMode=d.replace("old mode","").trim()),d.startsWith("new file mode")&&(a.type="new",a.mode=d.replace("new file mode","").trim()),d.startsWith("deleted file mode")&&(a.type="deleted",a.mode=d.replace("deleted file mode","").trim()),d.startsWith("similarity index")&&(d.startsWith("similarity index 100%")?a.type="rename-pure":a.type="rename-changed"),d.startsWith("index ")){const[,b]=d.trim().match(pn)??[];b!=null&&(a.mode=b)}d.startsWith("rename from ")&&(a.prevName=d.replace("rename from ","")),d.startsWith("rename to ")&&(a.name=d.replace("rename to ","").trim())}}continue}else{let d,v;for(;h.length>0&&(h[h.length-1]===`
`||h[h.length-1]==="");)h.pop();for(const b of h){const y=wt(b);if(y==null)continue;const{type:L,line:M}=y;if(L==="addition")(d==null||d.type!=="change")&&(d=fe("change"),g.push(d)),d.additions.push(M),k++,v="addition";else if(L==="deletion")(d==null||d.type!=="change")&&(d=fe("change"),g.push(d)),d.deletions.push(M),w++,v="deletion";else if(L==="context")(d==null||d.type!=="context")&&(d=fe("context"),g.push(d)),d.lines.push(M),v="context";else if(L==="metadata"&&d!=null){if(d.type==="context")d.noEOFCR=!0;else if(v==="deletion"){d.noEOFCRDeletions=!0;const S=d.deletions.length-1;S>=0&&(d.deletions[S]=W(d.deletions[S]))}else if(v==="addition"){d.noEOFCRAdditions=!0;const S=d.additions.length-1;S>=0&&(d.additions[S]=W(d.additions[S]))}}}}const m={collapsedBefore:0,splitLineCount:0,splitLineStart:0,unifiedLineCount:0,unifiedLineStart:0,additionCount:parseInt(p[4]??"1"),additionStart:parseInt(p[3]),additionLines:k,deletionCount:parseInt(p[2]??"1"),deletionStart:parseInt(p[1]),deletionLines:w,hunkContent:g,hunkContext:p[5],hunkSpecs:u};if(isNaN(m.additionCount)||isNaN(m.deletionCount)||isNaN(m.additionStart)||isNaN(m.deletionStart)){console.error("parsePatchContent: invalid hunk metadata",m);continue}m.collapsedBefore=Math.max(m.additionStart-1-l,0),a.hunks.push(m),l=m.additionStart+m.additionCount-1;for(const d of g)d.type==="context"?(m.splitLineCount+=d.lines.length,m.unifiedLineCount+=d.lines.length):(m.splitLineCount+=Math.max(d.additions.length,d.deletions.length),m.unifiedLineCount+=d.deletions.length+d.additions.length);m.splitLineStart=a.splitLineCount,m.unifiedLineStart=a.unifiedLineCount,a.splitLineCount+=m.splitLineCount,a.unifiedLineCount+=m.unifiedLineCount}a!=null&&(!t&&a.prevName!=null&&a.name!==a.prevName&&(a.hunks.length>0?a.type="rename-changed":a.type="rename-pure"),a.type!=="rename-pure"&&a.type!=="rename-changed"&&(a.prevName=void 0),r.push(a))}return{patchMetadata:o,files:r}}function Xe(e,n){const t=[];for(const i of e.split(ln))try{t.push(xt(i,n!=null?`${n}-${t.length}`:void 0))}catch(o){console.error(o)}return t}function fe(e){return e==="change"?{type:"change",additions:[],deletions:[],noEOFCRAdditions:!1,noEOFCRDeletions:!1}:{type:"context",lines:[],noEOFCR:!1}}function Oe(e,n,t){const i=Xe(Pn(e.name,n.name,e.contents,n.contents,e.header,n.header))[0]?.files[0];if(i==null)throw new Error("parseDiffFrom: FileInvalid diff -- probably need to fix something -- if the files are the same maybe?");return i.oldLines=e.contents.split(he),i.newLines=n.contents.split(he),e.cacheKey!=null&&n.cacheKey!=null&&(i.cacheKey=`${e.cacheKey}:${n.cacheKey}`),i}let Lt=-1;var Et=class{static LoadedCustomComponent=ht;__id=++Lt;fileContainer;spriteSVG;pre;unsafeCSSStyle;hoverContent;headerElement;headerMetadata;customHunkElements=[];errorWrapper;hunksRenderer;resizeManager;scrollSyncManager;mouseEventManager;lineSelectionManager;annotationElements=[];lineAnnotations=[];oldFile;newFile;fileDiff;constructor(e={theme:F},n,t=!1){this.options=e,this.workerManager=n,this.isContainerManaged=t,this.hunksRenderer=new yt({...e,hunkSeparators:typeof e.hunkSeparators=="function"?"custom":e.hunkSeparators},this.handleHighlightRender,this.workerManager),this.resizeManager=new Xn,this.scrollSyncManager=new mt,this.mouseEventManager=new Vn("diff",Te(e,typeof e.hunkSeparators=="function"||(e.hunkSeparators??"line-info")==="line-info"?this.handleExpandHunk:void 0)),this.lineSelectionManager=new Gn(He(e)),this.workerManager?.subscribeToThemeChanges(this)}handleHighlightRender=()=>{this.rerender()};setOptions(e){e!=null&&(this.options=e,this.hunksRenderer.setOptions({...this.options,hunkSeparators:typeof e.hunkSeparators=="function"?"custom":e.hunkSeparators}),this.mouseEventManager.setOptions(Te(e,typeof e.hunkSeparators=="function"||(e.hunkSeparators??"line-info")==="line-info"?this.handleExpandHunk:void 0)),this.lineSelectionManager.setOptions(He(e)))}mergeOptions(e){this.options={...this.options,...e}}setThemeType(e){if((this.options.themeType??"system")!==e&&(this.mergeOptions({themeType:e}),this.hunksRenderer.setThemeType(e),this.headerElement!=null&&(e==="system"?delete this.headerElement.dataset.themeType:this.headerElement.dataset.themeType=e),this.pre!=null))switch(e){case"system":delete this.pre.dataset.themeType;break;case"light":case"dark":this.pre.dataset.themeType=e;break}}getHoveredLine=()=>this.mouseEventManager.getHoveredLine();setLineAnnotations(e){this.lineAnnotations=e}setSelectedLines(e){this.lineSelectionManager.setSelection(e)}cleanUp(){this.hunksRenderer.cleanUp(),this.resizeManager.cleanUp(),this.mouseEventManager.cleanUp(),this.scrollSyncManager.cleanUp(),this.lineSelectionManager.cleanUp(),this.workerManager?.unsubscribeToThemeChanges(this),this.workerManager=void 0,this.fileDiff=void 0,this.oldFile=void 0,this.newFile=void 0,this.isContainerManaged||this.fileContainer?.parentNode?.removeChild(this.fileContainer),this.fileContainer?.shadowRoot!=null&&(this.fileContainer.shadowRoot.innerHTML=""),this.fileContainer=void 0,this.pre=void 0,this.headerElement=void 0,this.errorWrapper=void 0}hydrate(e){const{fileContainer:n,prerenderedHTML:t}=e;ct(n,t);for(const i of Array.from(n.shadowRoot?.children??[])){if(i instanceof SVGElement){this.spriteSVG=i;continue}if(i instanceof HTMLElement){if(i instanceof HTMLPreElement){this.pre=i;continue}if("diffsHeader"in i.dataset){this.headerElement=i;continue}if(i instanceof HTMLStyleElement&&i.hasAttribute(We)){this.unsafeCSSStyle=i;continue}}}if(this.pre==null)this.render(e);else{const{lineAnnotations:i,oldFile:o,newFile:r,fileDiff:a}=e;this.fileContainer=n,delete this.pre.dataset.dehydrated,this.lineAnnotations=i??this.lineAnnotations,this.newFile=r,this.oldFile=o,this.fileDiff=a??(o!=null&&r!=null?Oe(o,r):void 0),this.hunksRenderer.hydrate(this.fileDiff),this.renderAnnotations(),this.renderHoverUtility(),this.injectUnsafeCSS(),this.mouseEventManager.setup(this.pre),this.lineSelectionManager.setup(this.pre),(this.options.overflow??"scroll")==="scroll"&&(this.resizeManager.setup(this.pre),(this.options.diffStyle??"split")==="split"&&this.scrollSyncManager.setup(this.pre))}}rerender(){this.fileDiff==null&&this.newFile==null&&this.oldFile==null||this.render({oldFile:this.oldFile,newFile:this.newFile,fileDiff:this.fileDiff,forceRender:!0})}handleExpandHunk=(e,n)=>{this.expandHunk(e,n)};expandHunk(e,n){this.hunksRenderer.expandHunk(e,n),this.rerender()}render({oldFile:e,newFile:n,fileDiff:t,forceRender:i=!1,lineAnnotations:o,fileContainer:r,containerWrapper:a}){const s=e!=null&&n!=null&&(!Ae(e,this.oldFile)||!Ae(n,this.newFile)),l=o!=null&&(o.length>0||this.lineAnnotations.length>0)?o!==this.lineAnnotations:!1;if(!i&&!l&&(t!=null&&t===this.fileDiff||t==null&&!s)||(this.oldFile=e,this.newFile=n,t!=null?this.fileDiff=t:e!=null&&n!=null&&s&&(this.fileDiff=Oe(e,n)),o!=null&&this.setLineAnnotations(o),this.fileDiff==null))return;this.hunksRenderer.setOptions({...this.options,hunkSeparators:typeof this.options.hunkSeparators=="function"?"custom":this.options.hunkSeparators}),this.hunksRenderer.setLineAnnotations(this.lineAnnotations);const{disableFileHeader:f=!1,disableErrorHandling:c=!1}=this.options;f&&this.headerElement!=null&&(this.headerElement.parentNode?.removeChild(this.headerElement),this.headerElement=void 0),r=this.getOrCreateFileContainer(r,a);try{const h=this.hunksRenderer.renderDiff(this.fileDiff);if(h==null){this.workerManager!=null&&!this.workerManager.isInitialized()&&this.workerManager.initialize().then(()=>this.rerender());return}h.headerElement!=null&&this.applyHeaderToDOM(h.headerElement,r);const u=this.getOrCreatePreNode(r);this.applyHunksToDOM(u,h),this.renderSeparators(h.hunkData),this.renderAnnotations(),this.renderHoverUtility()}catch(h){if(c)throw h;console.error(h),h instanceof Error&&this.applyErrorToDOM(h,r)}}renderSeparators(e){const{hunkSeparators:n}=this.options;if(!(this.isContainerManaged||this.fileContainer==null||typeof n!="function")){for(const t of this.customHunkElements)t.parentNode?.removeChild(t);this.customHunkElements.length=0;for(const t of e){const i=document.createElement("div");i.style.display="contents",i.slot=t.slotName,i.appendChild(n(t,this)),this.fileContainer.appendChild(i),this.customHunkElements.push(i)}}}renderAnnotations(){if(this.isContainerManaged||this.fileContainer==null)return;for(const n of this.annotationElements)n.parentNode?.removeChild(n);this.annotationElements.length=0;const{renderAnnotation:e}=this.options;if(e!=null&&this.lineAnnotations.length>0)for(const n of this.lineAnnotations){const t=e(n);if(t==null)continue;const i=ot(V(n));i.appendChild(t),this.annotationElements.push(i),this.fileContainer.appendChild(i)}}renderHoverUtility(){const{renderHoverUtility:e}=this.options;if(this.fileContainer==null||e==null)return;this.hoverContent==null&&(this.hoverContent=at(),this.fileContainer.appendChild(this.hoverContent));const n=e(this.mouseEventManager.getHoveredLine);this.hoverContent.innerHTML="",n!=null&&this.hoverContent.appendChild(n)}getOrCreateFileContainer(e,n){if(this.fileContainer=e??this.fileContainer??document.createElement(U),n!=null&&this.fileContainer.parentNode!==n&&n.appendChild(this.fileContainer),this.spriteSVG==null){const t=document.createElement("div");t.innerHTML=it;const i=t.firstChild;i instanceof SVGElement&&(this.spriteSVG=i,this.fileContainer.shadowRoot?.appendChild(this.spriteSVG))}return this.fileContainer}getFileContainer(){return this.fileContainer}getOrCreatePreNode(e){return this.pre==null?(this.pre=document.createElement("pre"),e.shadowRoot?.appendChild(this.pre)):this.pre.parentNode!==e&&e.shadowRoot?.appendChild(this.pre),this.pre}applyHeaderToDOM(e,n){this.cleanupErrorWrapper();const t=document.createElement("div");t.innerHTML=G(e);const i=t.firstElementChild;if(!(i instanceof HTMLElement)||(this.headerElement!=null?n.shadowRoot?.replaceChild(i,this.headerElement):n.shadowRoot?.prepend(i),this.headerElement=i,this.isContainerManaged))return;const{renderHeaderMetadata:o}=this.options;this.headerMetadata!=null&&this.headerMetadata.parentNode?.removeChild(this.headerMetadata);const r=o?.({oldFile:this.oldFile,newFile:this.newFile,fileDiff:this.fileDiff})??void 0;r!=null&&(this.headerMetadata=document.createElement("div"),this.headerMetadata.slot=ve,r instanceof Element?this.headerMetadata.appendChild(r):this.headerMetadata.innerText=`${r}`,n.appendChild(this.headerMetadata))}injectUnsafeCSS(){if(this.fileContainer?.shadowRoot==null)return;const{unsafeCSS:e}=this.options;e==null||e===""||(this.unsafeCSSStyle==null&&(this.unsafeCSSStyle=rt(),this.fileContainer.shadowRoot.appendChild(this.unsafeCSSStyle)),this.unsafeCSSStyle.innerText=dt(e))}applyHunksToDOM(e,n){this.cleanupErrorWrapper(),this.applyPreNodeAttributes(e,n),e.innerHTML="";let t,i;if(n.unifiedAST!=null){const o=re({columnType:"unified"});o.innerHTML=this.hunksRenderer.renderPartialHTML(n.unifiedAST),e.appendChild(o)}else n.deletionsAST!=null&&(t=re({columnType:"deletions"}),t.innerHTML=this.hunksRenderer.renderPartialHTML(n.deletionsAST),e.appendChild(t)),n.additionsAST!=null&&(i=re({columnType:"additions"}),i.innerHTML=this.hunksRenderer.renderPartialHTML(n.additionsAST),e.appendChild(i));this.injectUnsafeCSS(),this.mouseEventManager.setup(e),this.lineSelectionManager.setup(e),(this.options.overflow??"scroll")==="scroll"?(this.resizeManager.setup(e),(this.options.diffStyle??"split")==="split"?this.scrollSyncManager.setup(e,t,i):this.scrollSyncManager.cleanUp()):(this.resizeManager.cleanUp(),this.scrollSyncManager.cleanUp())}applyPreNodeAttributes(e,{themeStyles:n,baseThemeType:t,additionsAST:i,deletionsAST:o,totalLines:r}){const{diffIndicators:a="bars",disableBackground:s=!1,disableLineNumbers:l=!1,overflow:f="scroll",themeType:c="system",diffStyle:h="split"}=this.options;ft({pre:e,diffIndicators:a,disableBackground:s,disableLineNumbers:l,overflow:f,split:h==="unified"?!1:i!=null&&o!=null,themeStyles:n,themeType:t??c,totalLines:r})}applyErrorToDOM(e,n){this.cleanupErrorWrapper();const t=this.getOrCreatePreNode(n);t.innerHTML="",t.parentNode?.removeChild(t),this.pre=void 0;const i=n.shadowRoot??n.attachShadow({mode:"open"});this.errorWrapper??=document.createElement("div"),this.errorWrapper.dataset.errorWrapper="",this.errorWrapper.innerHTML="",i.appendChild(this.errorWrapper);const o=document.createElement("div");o.dataset.errorMessage="",o.innerText=e.message,this.errorWrapper.appendChild(o);const r=document.createElement("pre");r.dataset.errorStack="",r.innerText=e.stack??"No Error Stack",this.errorWrapper.appendChild(r)}cleanupErrorWrapper(){this.errorWrapper?.parentNode?.removeChild(this.errorWrapper),this.errorWrapper=void 0}};const St=typeof window>"u"?C.useEffect:C.useLayoutEffect;function Qe({oldFile:e,newFile:n,fileDiff:t,options:i,lineAnnotations:o,selectedLines:r,prerenderedHTML:a}){const s=C.useContext(Un),l=C.useRef(null),f=qn(c=>{if(c!=null){if(l.current!=null)throw new Error("useFileDiffInstance: An instance should not already exist when a node is created");l.current=new Et(i,s,!0),l.current.hydrate({fileDiff:t,oldFile:e,newFile:n,fileContainer:c,lineAnnotations:o,prerenderedHTML:a})}else{if(l.current==null)throw new Error("useFileDiffInstance: A FileDiff instance should exist when unmounting");l.current.cleanUp(),l.current=null}});return St(()=>{if(l.current==null)return;const c=l.current,h=!pt(c.options,i);c.setOptions(i),c.render({forceRender:h,fileDiff:t,oldFile:e,newFile:n,lineAnnotations:o}),r!==void 0&&c.setSelectedLines(r)}),{ref:f,getHoveredLine:C.useCallback(()=>l.current?.getHoveredLine(),[])}}function Ct({oldFile:e,newFile:n,options:t,lineAnnotations:i,selectedLines:o,className:r,style:a,prerenderedHTML:s,renderAnnotation:l,renderHeaderMetadata:f,renderHoverUtility:c}){const{ref:h,getHoveredLine:u}=Qe({oldFile:e,newFile:n,options:t,lineAnnotations:i,selectedLines:o,prerenderedHTML:s});return x.jsx(U,{ref:h,className:r,style:a,children:_e(Ve({oldFile:e,newFile:n,renderHeaderMetadata:f,renderAnnotation:l,lineAnnotations:i,renderHoverUtility:c,getHoveredLine:u}),s)})}function Mt(e){const n=Xe(e);if(n.length!==1)throw console.error(n),new Error("PatchDiff: Provided patch must include only 1 patch, with 1 diff");const{files:t}=n[0];if(t.length!==1)throw console.error(t),new Error("FileDiff: Provided patch must contain exactly 1 file diff");return t[0]}function Dt({patch:e,options:n,lineAnnotations:t,selectedLines:i,className:o,style:r,prerenderedHTML:a,renderAnnotation:s,renderHeaderMetadata:l,renderHoverUtility:f}){const c=Rt(e),{ref:h,getHoveredLine:u}=Qe({fileDiff:c,options:n,lineAnnotations:t,selectedLines:i,prerenderedHTML:a});return x.jsx(U,{ref:h,className:o,style:r,children:_e(Ve({fileDiff:c,renderHeaderMetadata:l,renderAnnotation:s,lineAnnotations:t,renderHoverUtility:f,getHoveredLine:u}),a)})}function Rt(e){return C.useMemo(()=>Mt(e),[e])}const Nt=(e,n)=>{const t=e.split(`
`),i=n.split(`
`),o=new Set(t),r=new Set(i);let a=0,s=0;for(const l of t)r.has(l)||a++;for(const l of i)o.has(l)||s++;return{additions:s,deletions:a}},Je=C.memo(({oldContent:e,newContent:n,language:t,fileName:i,viewMode:o="split",showHeader:r=!0,variant:a="filled",className:s,classNames:l,styles:f,actionsRender:c,diffOptions:h,...u})=>{const p=C.useMemo(()=>i||t||"diff",[i,t]),{additions:g,deletions:k}=C.useMemo(()=>Nt(e,n),[e,n]),w=C.useMemo(()=>c?c({newContent:n,oldContent:e,originalNode:null}):null,[c,e,n]),m=C.useMemo(()=>({contents:e,lang:t,name:i||"file"}),[e,t,i]),d=C.useMemo(()=>({contents:n,lang:t,name:i||"file"}),[n,t,i]),v=C.useMemo(()=>({diffStyle:o,disableFileHeader:!0,...h}),[o,h]);return x.jsxs(j,{className:I(Pe({variant:a}),s),"data-code-type":"code-diff",...u,children:[r&&x.jsxs("div",{className:I($e({variant:a}),l?.header),style:f?.header,children:[x.jsxs(j,{horizontal:!0,align:"center",gap:8,children:[x.jsx(ze,{filename:i||p,size:18,type:"file"}),x.jsx("span",{children:p})]}),x.jsxs(j,{horizontal:!0,align:"center",gap:8,children:[(k>0||g>0)&&x.jsxs(j,{horizontal:!0,className:D.stats,gap:8,children:[k>0&&x.jsxs("span",{className:D.deletions,children:["-",k]}),g>0&&x.jsxs("span",{className:D.additions,children:["+",g]})]}),w&&x.jsx(j,{align:"center",className:I(`${K}-actions`,D.actions),gap:4,children:w})]})]}),x.jsx("div",{className:I(D.body,l?.body),style:f?.body,children:x.jsx(Ct,{newFile:d,oldFile:m,options:v})})]})});Je.displayName="CodeDiff";var It=Je;const Ht=e=>{const n=e.split(`
`);let t=0,i=0;for(const o of n)o.startsWith("+")&&!o.startsWith("+++")?t++:o.startsWith("-")&&!o.startsWith("---")&&i++;return{additions:t,deletions:i}},Ye=C.memo(({patch:e,language:n,fileName:t,viewMode:i="split",showHeader:o=!0,variant:r="filled",className:a,classNames:s,styles:l,actionsRender:f,diffOptions:c,...h})=>{const u=C.useMemo(()=>{if(t)return t;const m=e.match(/^(?:-{3}|\+{3})\s+(?:a\/|b\/)?(.+?)(?:\t|$)/m);return m?.[1]?m[1]:n||"patch"},[t,e,n]),{additions:p,deletions:g}=C.useMemo(()=>Ht(e),[e]),k=C.useMemo(()=>f?f({originalNode:null,patch:e}):null,[f,e]),w=C.useMemo(()=>({diffStyle:i,disableFileHeader:!0,...c}),[i,c]);return x.jsxs(j,{className:I(Pe({variant:r}),a),"data-code-type":"patch-diff",...h,children:[o&&x.jsxs("div",{className:I($e({variant:r}),s?.header),style:l?.header,children:[x.jsxs(j,{horizontal:!0,align:"center",gap:8,children:[x.jsx(ze,{filename:t||u,size:18,type:"file"}),x.jsx("span",{children:u})]}),x.jsxs(j,{horizontal:!0,align:"center",gap:8,children:[(g>0||p>0)&&x.jsxs(j,{horizontal:!0,className:D.stats,gap:8,children:[g>0&&x.jsxs("span",{className:D.deletions,children:["-",g]}),p>0&&x.jsxs("span",{className:D.additions,children:["+",p]})]}),k&&x.jsx(j,{align:"center",className:I(`${K}-actions`,D.actions),gap:4,children:k})]})]}),x.jsx("div",{className:I(D.body,s?.body),style:l?.body,children:x.jsx(Dt,{options:w,patch:e})})]})});Ye.displayName="PatchDiff";var zt=Ye;export{It as C,zt as P};
