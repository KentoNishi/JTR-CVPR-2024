import{s as B,b as J,n as j,r as ce,j as de,h as fe,o as ue}from"../chunks/scheduler.DJcLnUSX.js";import{S as P,i as R,e as g,s as _,c as x,a as $,y as z,f as L,d as b,k as p,p as y,g as I,h as u,z as he,t as ae,b as ne,A as ve,B as Z,u as q,C as me,v as N,w as O,l as D,m as H,o as pe,x as K,q as be}from"../chunks/index.EcrCpfSL.js";import{u as W,d as A,s as F,g as ge}from"../chunks/base.Cmuntu6m.js";const xe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Q(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}const we={};function G(o,e={}){o.classList.add("exio-component");let r=document.querySelector("#exio-styles");if(!r){r=document.createElement("style"),r.id="exio-styles";const t=window.location.protocol==="http:"?"http:":"https:";r.innerHTML=`
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
    `,document.head.appendChild(r)}return{...W(e,o,we),...A(()=>{o.classList.remove("exio-component")})}}const ee={borderStyle:"reactive",disableClicking:!1,focusable:!1},ke={borderWidth:{prop:"--exio-border-width",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""},focusedBorderColor:{prop:"--exio-focused-border-color",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},hoverBorderColor:{prop:"--exio-hover-border-color",val:""},hoverBorderScale:{prop:"--exio-hover-border-scale",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""}};function ye(o,e=ee){const r={...ee,...e},t=G(o),i=F(o),l=(s=0,v=0,d=0,m=0)=>{const k=`calc(
      ${Math.max(d,m)}px * var(--exio-hover-border-scale)
    )`,M=r.borderStyle==="static",T=r.borderStyle==="hover",E=r.borderStyle==="none",C=M||T?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
          ${k} ${k} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-border-color) 0%,
          transparent calc(100% * var(--exio-hover-border-scale))
        ) 9 / var(--exio-border-width) / 0px stretch`,V=E?"":C,S=T?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(d,m)}px *
            var(--exio-hover-background-scale)
          ) at ${s}px ${v}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `,w=r.focusable?"border: var(--exio-border-width) solid var(--exio-focused-border-color)":"",U=w?":not(:focus)":"";i.innerHTML=`
      .${i.id} {
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        padding: 0.25em 0.75em;
        overflow: hidden;
        border-radius: 0px;
        ${M?V:""};

        --exio-mouse-x: ${s}px;
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
    `};l();function f(s){const{x:v,y:d,width:m,height:k}=ge(o,s);o.removeEventListener("mousemove",f),o.matches(":hover")&&(l(v,d,m,k),o.addEventListener("mousemove",f,{passive:!0}))}o.addEventListener("mouseenter",f,{passive:!0});let h=!1;const n=()=>{o.classList.add(`${i.id}-active`),h=!0},a=s=>{h&&(o.classList.remove(`${i.id}-active`),h=!1)},c=s=>{h&&(o.classList.remove(`${i.id}-active`),s.button===0&&!o.matches(":hover")&&(s.preventDefault(),o.click()),h=!1)};return r.disableClicking||(o.addEventListener("touchstart",n,{passive:!0}),window.addEventListener("touchend",a),o.addEventListener("mousedown",n,{passive:!0}),window.addEventListener("mouseup",c),window.addEventListener("dragend",a)),A(()=>{o.removeEventListener("mouseenter",f),o.removeEventListener("mousemove",f),r.disableClicking||(o.removeEventListener("touchstart",n),window.removeEventListener("touchend",a),o.removeEventListener("mousedown",n),window.removeEventListener("mouseup",c),window.removeEventListener("dragend",a),o.remove(),i.remove()),t.destroy()})}const $e={backgroundColor:{prop:"background-color",val:""},textColor:{prop:"color",val:""},...ke};function _e(o,e={}){const r=G(o),t=ye(o),i=F(o);return i.innerHTML=`
    .${i.id} {
      user-select: none;
    }
  `,{...W(e,o,$e),...A(()=>{t.destroy(),i.remove(),r.destroy()})}}const Le={animationDuration:{prop:"animation-duration",val:""}};function le(o,e={}){const r=G(o),t=F(o);return t.innerHTML=`
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
  `,{...W(e,o,Le),...A(()=>{t.remove(),r.destroy()})}}const Te=.05;function te(o,e,r){const t=o.slice();return t[2]=e[r],t[4]=r,t}function oe(o){let e,r,t,i,l=o[2].title+"",f,h,n,a;function c(...s){return o[1](o[2],...s)}return{c(){e=g("a"),r=g("div"),t=g("button"),i=g("div"),f=ae(l),h=_(),this.h()},l(s){e=x(s,"A",{href:!0,target:!0,style:!0,class:!0});var v=$(e);r=x(v,"DIV",{style:!0,class:!0});var d=$(r);t=x(d,"BUTTON",{class:!0});var m=$(t);i=x(m,"DIV",{class:!0});var k=$(i);f=ne(k,l),k.forEach(b),m.forEach(b),d.forEach(b),h=L(v),v.forEach(b),this.h()},h(){p(i,"class","title svelte-1b6p00k"),p(t,"class","popup paper-link svelte-1b6p00k"),t.disabled=!!("disabled"in o[2]&&o[2].disabled),y(r,"animation-delay",(o[4]+1)*Te+"s"),p(r,"class","svelte-1b6p00k"),p(e,"href",o[2].url),p(e,"target","_blank"),y(e,"text-decoration","none"),p(e,"class","svelte-1b6p00k")},m(s,v){I(s,e,v),u(e,r),u(r,t),u(t,i),u(i,f),u(e,h),n||(a=[J(_e.call(null,t)),J(le.call(null,r)),ve(e,"click",c)],n=!0)},p(s,v){o=s},d(s){s&&b(e),n=!1,ce(a)}}}function Ee(o){let e,r,t,i=`<div class="info svelte-1b6p00k"><div class="name svelte-1b6p00k">Joint-Task Regularization for Partially Labeled Multi-Task Learning</div> <div class="text-center svelte-1b6p00k" style="font-weight: bold;">CVPR 2024</div> <div class="affiliation svelte-1b6p00k"><div class="text-center svelte-1b6p00k"><span class="no-break svelte-1b6p00k"><a target="_blank" href="https://kentonishi.com/" class="svelte-1b6p00k">Kento Nishi</a>*</span>,
            <span class="no-break svelte-1b6p00k"><a target="_blank" href="https://sites.google.com/site/jskimcv/" class="svelte-1b6p00k">Junsik Kim</a>*</span>,
            <span class="no-break svelte-1b6p00k"><a target="_blank" href="https://li-wanhua.github.io/" class="svelte-1b6p00k">Wanhua Li</a></span>,
            <span class="no-break svelte-1b6p00k"><a target="_blank" href="https://vcg.seas.harvard.edu/" class="svelte-1b6p00k">Hanspeter Pfister</a></span></div> <div class="text-center svelte-1b6p00k">Harvard University</div></div></div>`,l,f,h,n,a=Q(o[0]),c=[];for(let s=0;s<a.length;s+=1)c[s]=oe(te(o,a,s));return{c(){e=g("div"),r=g("div"),t=g("div"),t.innerHTML=i,l=_(),f=g("div");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){e=x(s,"DIV",{class:!0,"data-theme":!0});var v=$(e);r=x(v,"DIV",{class:!0,style:!0});var d=$(r);t=x(d,"DIV",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-k5iy32"&&(t.innerHTML=i),l=L(d),f=x(d,"DIV",{class:!0});var m=$(f);for(let k=0;k<c.length;k+=1)c[k].l(m);m.forEach(b),d.forEach(b),v.forEach(b),this.h()},h(){p(t,"class","profile svelte-1b6p00k"),p(f,"class","links svelte-1b6p00k"),p(r,"class","parent svelte-1b6p00k"),y(r,"width","calc(100% - 2 * var(--grid-padding))"),p(e,"class","banner svelte-1b6p00k"),p(e,"data-theme","light")},m(s,v){I(s,e,v),u(e,r),u(r,t),u(r,l),u(r,f);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(f,null);h||(n=J(le.call(null,t)),h=!0)},p(s,[v]){if(v&1){a=Q(s[0]);let d;for(d=0;d<a.length;d+=1){const m=te(s,a,d);c[d]?c[d].p(m,v):(c[d]=oe(m),c[d].c(),c[d].m(f,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=a.length}},i:j,o:j,d(s){s&&b(e),he(c,s),h=!1,n()}}}function Ce(o){return[[{title:"arXiv",url:"https://arxiv.org/abs/2404.01976"},{title:"CVPR Page",url:"https://cvpr.thecvf.com/virtual/2024/poster/29723"},{title:"GitHub",url:"https://github.com/KentoNishi/JTR-CVPR-2024",color:!0}],(t,i)=>{"disabled"in t&&t.disabled&&i.preventDefault()}]}class Ie extends P{constructor(e){super(),R(this,e,Ce,Ee,B,{})}}function re(o,{delay:e=0,duration:r=400,easing:t=de}={}){const i=+getComputedStyle(o).opacity;return{delay:e,duration:r,easing:t,css:l=>`opacity: ${l*i}`}}function Se(o){let e,r="",t,i;return{c(){e=g("div"),e.innerHTML=r,this.h()},l(l){e=x(l,"DIV",{style:!0,"data-svelte-h":!0}),z(e)!=="svelte-cp8nfx"&&(e.innerHTML=r),this.h()},h(){y(e,"position","fixed"),y(e,"width","100%"),y(e,"height","100%"),y(e,"top","0"),y(e,"left","0"),y(e,"display","flex"),y(e,"justify-content","center"),y(e,"align-items","center"),y(e,"background-color","white"),y(e,"z-index","100")},m(l,f){I(l,e,f),i=!0},p:j,i(l){i||(l&&fe(()=>{i&&(t||(t=Z(e,re,{},!0)),t.run(1))}),i=!0)},o(l){l&&(t||(t=Z(e,re,{},!1)),t.run(0)),i=!1},d(l){l&&b(e),l&&t&&t.end()}}}class ze extends P{constructor(e){super(),R(this,e,null,Se,B,{})}}const Me=""+new URL("../assets/Poster.77Oatf5Y.png",import.meta.url).href,Ve=""+new URL("../assets/overview.D-xopdIH.png",import.meta.url).href,De=""+new URL("../assets/Poster.DiPP0HiF.pdf",import.meta.url).href;function je(o){let e,r,t="TL;DR",i,l,f=`<span class="svelte-19njere">Joint-Task Regularization (JTR) leverages cross-task relations
      to improve learning when data is not fully labeled for all tasks.</span> <a href="${De}" target="_blank" style="width: 100%;"><img src="${Me}" alt="Poster" class="teaser svelte-19njere"/></a>`,h,n,a="Abstract",c,s,v=`<span class="svelte-19njere">Multi-task learning has become increasingly popular in the machine
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
      variety of partially labeled scenarios based on NYU-v2, Cityscapes, and Taskonomy.</span> <img src="${Ve}" alt="Overview" class="overview svelte-19njere"/>`,d,m,k="BibTeX Citation",M,T,E,C,V;return{c(){e=g("div"),r=g("div"),r.textContent=t,i=_(),l=g("div"),l.innerHTML=f,h=_(),n=g("div"),n.textContent=a,c=_(),s=g("div"),s.innerHTML=v,d=_(),m=g("div"),m.textContent=k,M=_(),T=g("div"),E=g("span"),C=g("pre"),V=ae(o[0]),this.h()},l(S){e=x(S,"DIV",{class:!0});var w=$(e);r=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(r)!=="svelte-hiq7y6"&&(r.textContent=t),i=L(w),l=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(l)!=="svelte-zoh29f"&&(l.innerHTML=f),h=L(w),n=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(n)!=="svelte-nu0tzl"&&(n.textContent=a),c=L(w),s=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-y8jso0"&&(s.innerHTML=v),d=L(w),m=x(w,"DIV",{class:!0,"data-svelte-h":!0}),z(m)!=="svelte-1mjc4gy"&&(m.textContent=k),M=L(w),T=x(w,"DIV",{class:!0});var U=$(T);E=x(U,"SPAN",{class:!0});var X=$(E);C=x(X,"PRE",{class:!0});var Y=$(C);V=ne(Y,o[0]),Y.forEach(b),X.forEach(b),U.forEach(b),w.forEach(b),this.h()},h(){p(r,"class","heading svelte-19njere"),p(l,"class","content svelte-19njere"),p(n,"class","heading svelte-19njere"),p(s,"class","content svelte-19njere"),p(m,"class","heading svelte-19njere"),p(C,"class","svelte-19njere"),p(E,"class","svelte-19njere"),p(T,"class","content svelte-19njere"),p(e,"class","paragraph svelte-19njere")},m(S,w){I(S,e,w),u(e,r),u(e,i),u(e,l),u(e,h),u(e,n),u(e,c),u(e,s),u(e,d),u(e,m),u(e,M),u(e,T),u(T,E),u(E,C),u(C,V)},p:j,i:j,o:j,d(S){S&&b(e)}}}function He(o){return[`@misc{nishi2024jointtask,
    title={Joint-Task Regularization for Partially Labeled Multi-Task Learning}, 
    author={Kento Nishi and Junsik Kim and Wanhua Li and Hanspeter Pfister},
    year={2024},
    eprint={2404.01976},
    archivePrefix={arXiv},
    primaryClass={cs.CV}
}`]}class Ue extends P{constructor(e){super(),R(this,e,He,je,B,{})}}const{document:se}=xe;function ie(o){let e,r;return e=new ze({}),{c(){q(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,i){O(e,t,i),r=!0},i(t){r||(D(e.$$.fragment,t),r=!0)},o(t){H(e.$$.fragment,t),r=!1},d(t){K(e,t)}}}function Be(o){let e,r,t,i,l,f,h,n=!o[0]&&ie();return t=new Ie({}),f=new Ue({}),{c(){e=_(),n&&n.c(),r=_(),q(t.$$.fragment),i=_(),l=g("div"),q(f.$$.fragment),this.h()},l(a){me("svelte-1qummd3",se.head).forEach(b),e=L(a),n&&n.l(a),r=L(a),N(t.$$.fragment,a),i=L(a),l=x(a,"DIV",{class:!0});var s=$(l);N(f.$$.fragment,s),s.forEach(b),this.h()},h(){se.title="Joint-Task Regularization for Partially Labeled Multi-Task Learning",p(l,"class","padded svelte-60tdka")},m(a,c){I(a,e,c),n&&n.m(a,c),I(a,r,c),O(t,a,c),I(a,i,c),I(a,l,c),O(f,l,null),h=!0},p(a,[c]){a[0]?n&&(be(),H(n,1,1,()=>{n=null}),pe()):n?c&1&&D(n,1):(n=ie(),n.c(),D(n,1),n.m(r.parentNode,r))},i(a){h||(D(n),D(t.$$.fragment,a),D(f.$$.fragment,a),h=!0)},o(a){H(n),H(t.$$.fragment,a),H(f.$$.fragment,a),h=!1},d(a){a&&(b(e),b(r),b(i),b(l)),n&&n.d(a),K(t,a),K(f)}}}function Pe(o,e,r){let t=!1;return ue(()=>{document.body.style.overflow="hidden",setTimeout(()=>{r(0,t=!0),document.body.style.overflow="auto"},250)}),[t]}class qe extends P{constructor(e){super(),R(this,e,Pe,Be,B,{})}}export{qe as component};
