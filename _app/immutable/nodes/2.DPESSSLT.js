import{s as R,b as q,n as H,r as ce,j as de,h as fe,o as ue}from"../chunks/scheduler.DJcLnUSX.js";import{S as P,i as A,e as g,s as _,c as x,a as $,y as z,f as L,d as b,k as p,p as y,g as I,h as u,z as he,t as ae,b as ne,A as ve,B as Q,u as j,C as me,v as N,w as K,l as D,m as B,o as pe,x as O,q as be}from"../chunks/index.EcrCpfSL.js";import{u as W,d as J,s as G,g as ge}from"../chunks/base.Cmuntu6m.js";const xe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Y(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}const we={};function X(o,e={}){o.classList.add("exio-component");let s=document.querySelector("#exio-styles");if(!s){s=document.createElement("style"),s.id="exio-styles";const t=window.location.protocol==="http:"?"http:":"https:";s.innerHTML=`
      .exio-component {
        /* --------------------------- */
        /* CUSTOMIZABLE EXIO VARIABLES */
        /* --------------------------- */
        /* backdrop color for dialogs and other popups */
        --exio-backdrop-color: rgba(128, 128, 128, 0.2);
        /* border width for various effects */
        --exio-border-width: 2px;
        /* scaling factor for elements while being clicked */
        --exio-clicking-scale: 0.95;
        /* color of checkbox checkmarks when selected */
        --exio-checkbox-checkmark-color: white;
        /* color of checkbox fill when selected */
        --exio-checkbox-checked-fill-color: black;
        /* filter for disabled fields */
        --exio-disabled-filter: brightness(1.2) grayscale(0.5);
        /* border color for focused elements */
        --exio-focused-border-color: rgba(0, 0, 0, 0.5);
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-background-scale: 4;
        /* body color for the acrylic hover highlight effect */
        --exio-hover-body-color: rgba(128, 128, 128, 0.3);
        /* border color for the acrylic hover highlight effect */
        --exio-hover-border-color: rgba(0, 0, 0, 0.25);
        /* scaling factor for the acrylic hover highlight effect */
        --exio-hover-border-scale: 2;
        /* fill color for progress bars and loaders */
        --exio-loader-fill-color: black;
        /* animation duration for progress bars and loaders */
        --exio-loader-duration: 1s;
        /* color of radio indicators */
        --exio-radio-indicator-color: black;
        /* color of slider thumbs */
        --exio-slider-thumb-color: black;
        /* size of slider thumbs */
        --exio-slider-thumb-size: 12px;
        /* size of slider thumbs outlines when hovered */
        --exio-slider-thumb-hover-outline-size: 18px;
        /* size of slider thumb outlines when grabbing */
        --exio-slider-thumb-grab-outline-size: 25px;
        /* size of slider tracks */
        --exio-slider-track-size: 4px;
        /* fast transition duration */
        --exio-fast-transition-duration: 0.1s;
        /* slow transition duration */
        --exio-slow-transition-duration: 0.4s;
        /* standard transition duration */
        --exio-standard-transition-duration: 0.2s;
        /* shadow color for dropdowns and other floating elements */
        --exio-shadow-color: rgba(220, 230, 230, 1);
        /* shadow size for dropdowns and other floating elements */
        --exio-shadow-size: 2px;
        /* color of switch background when selected */
        --exio-switch-checked-fill-color: darkgray;
        /* switch thumb color */
        --exio-switch-thumb-color: black;
        /* default text color for components */
        --exio-default-text-color: black;
        /* scaling factor for the zoom in animation */
        --exio-zoom-in-animation-scale: 97.5%;
      }
      .exio-component {
        --is-exio-component: true;
        --exio-theme: light;
        color: var(--exio-default-text-color);
        font-family: Segoe UI;
      }
      [data-theme="dark"] .exio-component, .exio-component[data-theme="dark"] {
        --exio-disabled-filter: brightness(0.6) grayscale(0.5);
        --exio-focused-border-color: rgba(255, 255, 255, 1);
        --exio-hover-background-scale: 4;
        --exio-hover-body-color: rgba(128, 128, 128, 0.3);
        --exio-hover-border-color: rgba(255, 255, 255, 0.5);
        --exio-hover-border-scale: 2;
        --exio-loader-fill-color: white;
        --exio-loader-duration: 1s;
        --exio-switch-checked-fill-color: white;
        --exio-checkbox-checkmark-color: black;
        --exio-checkbox-checked-fill-color: white;
        --exio-shadow-color: rgba(25, 25, 25, 1);
        --exio-slider-thumb-color: white;
        --exio-switch-thumb-color: white;
        --exio-radio-indicator-color: white;
        --exio-theme: dark;
        --exio-default-text-color: white;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI Light'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff2) format('woff2'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.woff) format('woff'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/light/latest.ttf) format('truetype');
        font-weight: 100;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI Semilight'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff2) format('woff2'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.woff) format('woff'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semilight/latest.ttf) format('truetype');
        font-weight: 200;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff2) format('woff2'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.woff) format('woff'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/normal/latest.ttf) format('truetype');
        font-weight: 400;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI Semibold'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff2) format('woff2'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.woff) format('woff'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/semibold/latest.ttf) format('truetype');
        font-weight: 600;
      }
      @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI Bold'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff2) format('woff2'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.woff) format('woff'),
          url(${t}//c.s-microsoft.com/static/fonts/segoe-ui/west-european/bold/latest.ttf) format('truetype');
        font-weight: 700;
      }
    `,document.head.appendChild(s)}return{...W(e,o,we),...J(()=>{o.classList.remove("exio-component")})}}const ee={borderStyle:"reactive",disableClicking:!1,focusable:!1},ke={borderWidth:{prop:"--exio-border-width",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""},focusedBorderColor:{prop:"--exio-focused-border-color",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},hoverBorderColor:{prop:"--exio-hover-border-color",val:""},hoverBorderScale:{prop:"--exio-hover-border-scale",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""}};function ye(o,e=ee){const s={...ee,...e},t=X(o),i=G(o),l=(r=0,v=0,d=0,m=0)=>{const k=`calc(
      ${Math.max(d,m)}px * var(--exio-hover-border-scale)
    )`,M=s.borderStyle==="static",T=s.borderStyle==="hover",E=s.borderStyle==="none",C=M||T?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
          ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-border-color) 0%,
          transparent calc(100% * var(--exio-hover-border-scale))
        ) 9 / var(--exio-border-width) / 0px stretch`,V=E?"":C,S=T?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(d,m)}px *
            var(--exio-hover-background-scale)
          ) at ${r}px ${v}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `,w=s.focusable?"border: var(--exio-border-width) solid var(--exio-focused-border-color)":"",U=w?":not(:focus)":"";i.innerHTML=`
      .${i.id} {
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        padding: 0.25em 0.75em;
        overflow: hidden;
        border-radius: 0px;
        ${M?V:""};

        --exio-mouse-x: ${r}px;
        --exio-mouse-y: ${v}px;
        transition: transform var(--exio-standard-transition-duration);
      }
      .${i.id}:hover:not(.${i.id}-active)${U} {
        ${V};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${S};
        transition: transform var(--exio-standard-transition-duration);
      }
      .${i.id}:focus {
        ${w};
      }
      .${i.id}.${i.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-clicking-scale));
      }
      .${i.id}:disabled {
        pointer-events: none;
        touch-action: none;
        filter: var(--exio-disabled-filter);
      }
    `};l();function f(r){const{x:v,y:d,width:m,height:k}=ge(o,r);o.removeEventListener("mousemove",f),o.matches(":hover")&&(l(v,d,m,k),o.addEventListener("mousemove",f,{passive:!0}))}o.addEventListener("mouseenter",f,{passive:!0});let h=!1;const n=()=>{o.classList.add(`${i.id}-active`),h=!0},a=r=>{h&&(o.classList.remove(`${i.id}-active`),h=!1)},c=r=>{h&&(o.classList.remove(`${i.id}-active`),r.button===0&&!o.matches(":hover")&&(r.preventDefault(),o.click()),h=!1)};return s.disableClicking||(o.addEventListener("touchstart",n,{passive:!0}),window.addEventListener("touchend",a),o.addEventListener("mousedown",n,{passive:!0}),window.addEventListener("mouseup",c),window.addEventListener("dragend",a)),J(()=>{o.removeEventListener("mouseenter",f),o.removeEventListener("mousemove",f),s.disableClicking||(o.removeEventListener("touchstart",n),window.removeEventListener("touchend",a),o.removeEventListener("mousedown",n),window.removeEventListener("mouseup",c),window.removeEventListener("dragend",a),o.remove(),i.remove()),t.destroy()})}const $e={backgroundColor:{prop:"background-color",val:""},textColor:{prop:"color",val:""},...ke};function _e(o,e={}){const s=X(o),t=ye(o),i=G(o);return i.innerHTML=`
    .${i.id} {
      user-select: none;
    }
  `,{...W(e,o,$e),...J(()=>{t.destroy(),i.remove(),s.destroy()})}}const Le={animationDuration:{prop:"animation-duration",val:""}};function le(o,e={}){const s=X(o),t=G(o);return t.innerHTML=`
    @keyframes exio-fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .${t.id} {
      animation: exio-fade-in;
      animation-duration: 0.6s;
      animation-fill-mode: forwards;
      opacity: 0;
    }
  `,{...W(e,o,Le),...J(()=>{t.remove(),s.destroy()})}}const Te=.05;function te(o,e,s){const t=o.slice();return t[2]=e[s],t[4]=s,t}function oe(o){let e,s,t,i,l=o[2].title+"",f,h,n,a;function c(...r){return o[1](o[2],...r)}return{c(){e=g("a"),s=g("div"),t=g("button"),i=g("div"),f=ae(l),h=_(),this.h()},l(r){e=x(r,"A",{href:!0,target:!0,style:!0,class:!0});var v=$(e);s=x(v,"DIV",{style:!0,class:!0});var d=$(s);t=x(d,"BUTTON",{class:!0});var m=$(t);i=x(m,"DIV",{class:!0});var k=$(i);f=ne(k,l),k.forEach(b),m.forEach(b),d.forEach(b),h=L(v),v.forEach(b),this.h()},h(){p(i,"class","title svelte-1b6p00k"),p(t,"class","popup paper-link svelte-1b6p00k"),t.disabled=!!("disabled"in o[2]&&o[2].disabled),y(s,"animation-delay",(o[4]+1)*Te+"s"),p(s,"class","svelte-1b6p00k"),p(e,"href",o[2].url),p(e,"target","_blank"),y(e,"text-decoration","none"),p(e,"class","svelte-1b6p00k")},m(r,v){I(r,e,v),u(e,s),u(s,t),u(t,i),u(i,f),u(e,h),n||(a=[q(_e.call(null,t)),q(le.call(null,s)),ve(e,"click",c)],n=!0)},p(r,v){o=r},d(r){r&&b(e),n=!1,ce(a)}}}function Ee(o){let e,s,t,i=`<div class="info svelte-1b6p00k"><div class="name svelte-1b6p00k">Joint-Task Regularization for Partially Labeled Multi-Task Learning</div> <div class="text-center svelte-1b6p00k" style="font-weight: bold;">CVPR 2024</div> <div class="affiliation svelte-1b6p00k"><div class="text-center svelte-1b6p00k"><span class="no-break svelte-1b6p00k"><a target="_blank" href="https://kentonishi.com/" class="svelte-1b6p00k">Kento Nishi</a></span>,
            <span class="no-break svelte-1b6p00k"><a target="_blank" href="https://sites.google.com/site/jskimcv/" class="svelte-1b6p00k">Junsik Kim</a></span>,
            <span class="no-break svelte-1b6p00k"><a target="_blank" href="https://li-wanhua.github.io/" class="svelte-1b6p00k">Wanhua Li</a></span>,
            <span class="no-break svelte-1b6p00k"><a target="_blank" href="https://vcg.seas.harvard.edu/" class="svelte-1b6p00k">Hanspeter Pfister</a></span></div> <div class="text-center svelte-1b6p00k">Harvard University</div></div></div>`,l,f,h,n,a=Y(o[0]),c=[];for(let r=0;r<a.length;r+=1)c[r]=oe(te(o,a,r));return{c(){e=g("div"),s=g("div"),t=g("div"),t.innerHTML=i,l=_(),f=g("div");for(let r=0;r<c.length;r+=1)c[r].c();this.h()},l(r){e=x(r,"DIV",{class:!0,"data-theme":!0});var v=$(e);s=x(v,"DIV",{class:!0,style:!0});var d=$(s);t=x(d,"DIV",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-6q0576"&&(t.innerHTML=i),l=L(d),f=x(d,"DIV",{class:!0});var m=$(f);for(let k=0;k<c.length;k+=1)c[k].l(m);m.forEach(b),d.forEach(b),v.forEach(b),this.h()},h(){p(t,"class","profile svelte-1b6p00k"),p(f,"class","links svelte-1b6p00k"),p(s,"class","parent svelte-1b6p00k"),y(s,"width","calc(100% - 2 * var(--grid-padding))"),p(e,"class","banner svelte-1b6p00k"),p(e,"data-theme","light")},m(r,v){I(r,e,v),u(e,s),u(s,t),u(s,l),u(s,f);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(f,null);h||(n=q(le.call(null,t)),h=!0)},p(r,[v]){if(v&1){a=Y(r[0]);let d;for(d=0;d<a.length;d+=1){const m=te(r,a,d);c[d]?c[d].p(m,v):(c[d]=oe(m),c[d].c(),c[d].m(f,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=a.length}},i:H,o:H,d(r){r&&b(e),he(c,r),h=!1,n()}}}function Ce(o){return[[{title:"arXiv",url:"https://arxiv.org/abs/2404.01976"},{title:"CVPR Page",url:"https://cvpr.thecvf.com/virtual/2024/poster/29723"},{title:"GitHub",url:"https://github.com/KentoNishi/JTR-CVPR-2024",color:!0}],(t,i)=>{"disabled"in t&&t.disabled&&i.preventDefault()}]}class Ie extends P{constructor(e){super(),A(this,e,Ce,Ee,R,{})}}function se(o,{delay:e=0,duration:s=400,easing:t=de}={}){const i=+getComputedStyle(o).opacity;return{delay:e,duration:s,easing:t,css:l=>`opacity: ${l*i}`}}function Se(o){let e,s="",t,i;return{c(){e=g("div"),e.innerHTML=s,this.h()},l(l){e=x(l,"DIV",{style:!0,"data-svelte-h":!0}),z(e)!=="svelte-cp8nfx"&&(e.innerHTML=s),this.h()},h(){y(e,"position","fixed"),y(e,"width","100%"),y(e,"height","100%"),y(e,"top","0"),y(e,"left","0"),y(e,"display","flex"),y(e,"justify-content","center"),y(e,"align-items","center"),y(e,"background-color","white"),y(e,"z-index","100")},m(l,f){I(l,e,f),i=!0},p:H,i(l){i||(l&&fe(()=>{i&&(t||(t=Q(e,se,{},!0)),t.run(1))}),i=!0)},o(l){l&&(t||(t=Q(e,se,{},!1)),t.run(0)),i=!1},d(l){l&&b(e),l&&t&&t.end()}}}class ze extends P{constructor(e){super(),A(this,e,null,Se,R,{})}}const Me=""+new URL("../assets/teaser.D7HAocnu.png",import.meta.url).href,Ve=""+new URL("../assets/overview.D-xopdIH.png",import.meta.url).href;function De(o){let e,s,t="TL;DR",i,l,f=`<span class="svelte-7nixce">Joint-Task Regularization (JTR) leverages cross-task relations
      to improve learning when data is not fully labeled for all tasks.</span> <img src="${Me}" alt="Teaser" class="teaser svelte-7nixce"/>`,h,n,a="Abstract",c,r,v=`<span class="svelte-7nixce">Multi-task learning has become increasingly popular in the machine
      learning field, but its practicality is hindered by the need for large,
      labeled datasets. Most multi-task learning methods depend on fully labeled
      datasets wherein each input example is accompanied by ground-truth labels
      for all target tasks. Unfortunately, curating such datasets can be prohibitively
      expensive and impractical, especially for dense prediction tasks which require
      per-pixel labels for each image. With this in mind, we propose Joint-Task
      Regularization (JTR), an intuitive technique which leverages cross-task
      relations to simultaneously regularize all tasks in a single joint-task
      latent space to improve learning when data is not fully labeled for all tasks.
      JTR stands out from existing approaches in that it regularizes all tasks jointly
      rather than separately in pairs -- therefore, it achieves linear complexity relative
      to the number of tasks while previous methods scale quadratically. To demonstrate
      the validity of our approach, we extensively benchmark our method across a wide
      variety of partially labeled scenarios based on NYU-v2, Cityscapes, and Taskonomy.</span> <img src="${Ve}" alt="Overview" class="overview svelte-7nixce"/>`,d,m,k="BibTeX Citation",M,T,E,C,V;return{c(){e=g("div"),s=g("div"),s.textContent=t,i=_(),l=g("div"),l.innerHTML=f,h=_(),n=g("div"),n.textContent=a,c=_(),r=g("div"),r.innerHTML=v,d=_(),m=g("div"),m.textContent=k,M=_(),T=g("div"),E=g("span"),C=g("pre"),V=ae(o[0]),this.h()},l(S){e=x(S,"DIV",{class:!0});var w=$(e);s=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-hiq7y6"&&(s.textContent=t),i=L(w),l=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(l)!=="svelte-2d7za2"&&(l.innerHTML=f),h=L(w),n=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(n)!=="svelte-nu0tzl"&&(n.textContent=a),c=L(w),r=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-y8jso0"&&(r.innerHTML=v),d=L(w),m=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(m)!=="svelte-1mjc4gy"&&(m.textContent=k),M=L(w),T=x(w,"DIV",{class:!0});var U=$(T);E=x(U,"SPAN",{class:!0});var F=$(E);C=x(F,"PRE",{class:!0});var Z=$(C);V=ne(Z,o[0]),Z.forEach(b),F.forEach(b),U.forEach(b),w.forEach(b),this.h()},h(){p(s,"class","heading svelte-7nixce"),p(l,"class","content svelte-7nixce"),p(n,"class","heading svelte-7nixce"),p(r,"class","content svelte-7nixce"),p(m,"class","heading svelte-7nixce"),p(C,"class","svelte-7nixce"),p(E,"class","svelte-7nixce"),p(T,"class","content svelte-7nixce"),p(e,"class","paragraph svelte-7nixce")},m(S,w){I(S,e,w),u(e,s),u(e,i),u(e,l),u(e,h),u(e,n),u(e,c),u(e,r),u(e,d),u(e,m),u(e,M),u(e,T),u(T,E),u(E,C),u(C,V)},p:H,i:H,o:H,d(S){S&&b(e)}}}function He(o){return[`@misc{nishi2024jointtask,
    title={Joint-Task Regularization for Partially Labeled Multi-Task Learning}, 
    author={Kento Nishi and Junsik Kim and Wanhua Li and Hanspeter Pfister},
    year={2024},
    eprint={2404.01976},
    archivePrefix={arXiv},
    primaryClass={cs.CV}
}`]}class Be extends P{constructor(e){super(),A(this,e,He,De,R,{})}}const{document:re}=xe;function ie(o){let e,s;return e=new ze({}),{c(){j(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,i){K(e,t,i),s=!0},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){B(e.$$.fragment,t),s=!1},d(t){O(e,t)}}}function Ue(o){let e,s,t,i,l,f,h,n=!o[0]&&ie();return t=new Ie({}),f=new Be({}),{c(){e=_(),n&&n.c(),s=_(),j(t.$$.fragment),i=_(),l=g("div"),j(f.$$.fragment),this.h()},l(a){me("svelte-1qummd3",re.head).forEach(b),e=L(a),n&&n.l(a),s=L(a),N(t.$$.fragment,a),i=L(a),l=x(a,"DIV",{class:!0});var r=$(l);N(f.$$.fragment,r),r.forEach(b),this.h()},h(){re.title="Joint-Task Regularization for Partially Labeled Multi-Task Learning",p(l,"class","padded svelte-60tdka")},m(a,c){I(a,e,c),n&&n.m(a,c),I(a,s,c),K(t,a,c),I(a,i,c),I(a,l,c),K(f,l,null),h=!0},p(a,[c]){a[0]?n&&(be(),B(n,1,1,()=>{n=null}),pe()):n?c&1&&D(n,1):(n=ie(),n.c(),D(n,1),n.m(s.parentNode,s))},i(a){h||(D(n),D(t.$$.fragment,a),D(f.$$.fragment,a),h=!0)},o(a){B(n),B(t.$$.fragment,a),B(f.$$.fragment,a),h=!1},d(a){a&&(b(e),b(s),b(i),b(l)),n&&n.d(a),O(t,a),O(f)}}}function Re(o,e,s){let t=!1;return ue(()=>{document.body.style.overflow="hidden",setTimeout(()=>{s(0,t=!0),document.body.style.overflow="auto"},250)}),[t]}class qe extends P{constructor(e){super(),A(this,e,Re,Ue,R,{})}}export{qe as component};
