import{s as U,n as D,b as O,r as ce,j as de,h as fe,o as ue}from"../chunks/scheduler.DJcLnUSX.js";import{S as R,i as P,e as w,c as y,y as M,k as p,g as I,d as g,u as J,s as E,a as T,v as q,f as C,p as _,w as j,h,l as V,m as B,x as N,z as he,t as ie,b as ne,A as ve,B as Q,C as me,o as pe,q as ge}from"../chunks/index.EcrCpfSL.js";import{u as W,d as K,s as G,g as be}from"../chunks/base.Cmuntu6m.js";const xe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Y(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}const we={};function X(o,e={}){o.classList.add("exio-component");let r=document.querySelector("#exio-styles");if(!r){r=document.createElement("style"),r.id="exio-styles";const t=window.location.protocol==="http:"?"http:":"https:";r.innerHTML=`
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
    `,document.head.appendChild(r)}return{...W(e,o,we),...K(()=>{o.classList.remove("exio-component")})}}const ee={borderStyle:"reactive",disableClicking:!1,focusable:!1},ye={borderWidth:{prop:"--exio-border-width",val:""},clickingScale:{prop:"--exio-clicking-scale",val:""},disabledFilter:{prop:"--exio-disabled-filter",val:""},focusedBorderColor:{prop:"--exio-focused-border-color",val:""},hoverBackgroundScale:{prop:"--exio-hover-background-scale",val:""},hoverBodyColor:{prop:"--exio-hover-body-color",val:""},hoverBorderColor:{prop:"--exio-hover-border-color",val:""},hoverBorderScale:{prop:"--exio-hover-border-scale",val:""},transitionDuration:{prop:"--exio-standard-transition-duration",val:""}};function ke(o,e=ee){const r={...ee,...e},t=X(o),s=G(o),i=(c=0,b=0,d=0,l=0)=>{const x=`calc(
      ${Math.max(d,l)}px * var(--exio-hover-border-scale)
    )`,f=r.borderStyle==="static",$=r.borderStyle==="hover",L=r.borderStyle==="none",S=f||$?"border: var(--exio-border-width) solid var(--exio-hover-border-color)":`border-image: radial-gradient(
          ${x} ${x} at var(--exio-mouse-x) var(--exio-mouse-y),
          var(--exio-hover-border-color) 0%,
          transparent calc(100% * var(--exio-hover-border-scale))
        ) 9 / var(--exio-border-width) / 0px stretch`,H=L?"":S,z=$?"":`
        background-image: radial-gradient(
          calc(
            ${Math.max(d,l)}px *
            var(--exio-hover-background-scale)
          ) at ${c}px ${b}px,
          var(--exio-hover-body-color) 0%,
          transparent 100%
        )
      `,k=r.focusable?"border: var(--exio-border-width) solid var(--exio-focused-border-color)":"",A=k?":not(:focus)":"";s.innerHTML=`
      .${s.id} {
        border: var(--exio-border-width) solid transparent;
        color: inherit;
        font-size: inherit;
        padding: 0.25em 0.75em;
        overflow: hidden;
        border-radius: 0px;
        ${f?H:""};

        --exio-mouse-x: ${c}px;
        --exio-mouse-y: ${b}px;
        transition: transform var(--exio-standard-transition-duration);
      }
      .${s.id}:hover:not(.${s.id}-active)${A} {
        ${H};
        background-size: calc(100% + 2 * var(--exio-border-width));
        background-position: center;
        ${z};
        transition: transform var(--exio-standard-transition-duration);
      }
      .${s.id}:focus {
        ${k};
      }
      .${s.id}.${s.id}-active {
        filter: brightness(0.8);
        transition: none;
        transform: scale(var(--exio-clicking-scale));
      }
      .${s.id}:disabled {
        pointer-events: none;
        touch-action: none;
        filter: var(--exio-disabled-filter);
      }
    `};i();function u(c){const{x:b,y:d,width:l,height:x}=be(o,c);o.removeEventListener("mousemove",u),o.matches(":hover")&&(i(b,d,l,x),o.addEventListener("mousemove",u,{passive:!0}))}o.addEventListener("mouseenter",u,{passive:!0});let v=!1;const a=()=>{o.classList.add(`${s.id}-active`),v=!0},n=c=>{v&&(o.classList.remove(`${s.id}-active`),v=!1)},m=c=>{v&&(o.classList.remove(`${s.id}-active`),c.button===0&&!o.matches(":hover")&&(c.preventDefault(),o.click()),v=!1)};return r.disableClicking||(o.addEventListener("touchstart",a,{passive:!0}),window.addEventListener("touchend",n),o.addEventListener("mousedown",a,{passive:!0}),window.addEventListener("mouseup",m),window.addEventListener("dragend",n)),K(()=>{o.removeEventListener("mouseenter",u),o.removeEventListener("mousemove",u),r.disableClicking||(o.removeEventListener("touchstart",a),window.removeEventListener("touchend",n),o.removeEventListener("mousedown",a),window.removeEventListener("mouseup",m),window.removeEventListener("dragend",n),o.remove(),s.remove()),t.destroy()})}const $e={backgroundColor:{prop:"background-color",val:""},textColor:{prop:"color",val:""},...ye};function _e(o,e={}){const r=X(o),t=ke(o),s=G(o);return s.innerHTML=`
    .${s.id} {
      user-select: none;
    }
  `,{...W(e,o,$e),...K(()=>{t.destroy(),s.remove(),r.destroy()})}}const Le={animationDuration:{prop:"animation-duration",val:""}};function le(o,e={}){const r=X(o),t=G(o);return t.innerHTML=`
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
  `,{...W(e,o,Le),...K(()=>{t.remove(),r.destroy()})}}const Te=.05;function Ee(o){let e,r="";return{c(){e=w("div"),e.innerHTML=r,this.h()},l(t){e=y(t,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1rdtpw4"&&(e.innerHTML=r),this.h()},h(){p(e,"class","wallpaper-wrapper svelte-1k5l47k")},m(t,s){I(t,e,s)},p:D,i:D,o:D,d(t){t&&g(e)}}}class Ce extends R{constructor(e){super(),P(this,e,null,Ee,U,{})}}function te(o,e,r){const t=o.slice();return t[2]=e[r],t[4]=r,t}function oe(o){let e,r,t,s,i=o[2].title+"",u,v,a,n;function m(...c){return o[1](o[2],...c)}return{c(){e=w("a"),r=w("div"),t=w("button"),s=w("div"),u=ie(i),v=E(),this.h()},l(c){e=y(c,"A",{href:!0,target:!0,style:!0,class:!0});var b=T(e);r=y(b,"DIV",{style:!0,class:!0});var d=T(r);t=y(d,"BUTTON",{class:!0});var l=T(t);s=y(l,"DIV",{class:!0});var x=T(s);u=ne(x,i),x.forEach(g),l.forEach(g),d.forEach(g),v=C(b),b.forEach(g),this.h()},h(){p(s,"class","title svelte-23a4y8"),p(t,"class","popup paper-link svelte-23a4y8"),t.disabled=!!("disabled"in o[2]&&o[2].disabled),_(r,"animation-delay",(o[4]+1)*Te+"s"),p(r,"class","svelte-23a4y8"),p(e,"href",o[2].url),p(e,"target","_blank"),_(e,"text-decoration","none"),p(e,"class","svelte-23a4y8")},m(c,b){I(c,e,b),h(e,r),h(r,t),h(t,s),h(s,u),h(e,v),a||(n=[O(_e.call(null,t)),O(le.call(null,r)),ve(e,"click",m)],a=!0)},p(c,b){o=c},d(c){c&&g(e),a=!1,ce(n)}}}function Ie(o){let e,r,t,s,i,u=`<div class="info svelte-23a4y8"><div class="name svelte-23a4y8">Joint-Task Regularization for Partially Labeled Multi-Task Learning</div> <div class="text-center svelte-23a4y8" style="font-weight: bold;">CVPR 2024</div> <div class="affiliation svelte-23a4y8"><div class="text-center svelte-23a4y8"><span class="no-break svelte-23a4y8"><a target="_blank" href="https://kentonishi.com/" class="svelte-23a4y8">Kento Nishi</a></span>,
            <span class="no-break svelte-23a4y8"><a target="_blank" href="https://sites.google.com/site/jskimcv/" class="svelte-23a4y8">Junsik Kim</a></span>,
            <span class="no-break svelte-23a4y8"><a target="_blank" href="https://li-wanhua.github.io/" class="svelte-23a4y8">Wanhua Li</a></span>,
            <span class="no-break svelte-23a4y8"><a target="_blank" href="https://vcg.seas.harvard.edu/" class="svelte-23a4y8">Hanspeter Pfister</a></span></div> <div class="text-center svelte-23a4y8">Harvard University</div></div></div>`,v,a,n,m,c;r=new Ce({});let b=Y(o[0]),d=[];for(let l=0;l<b.length;l+=1)d[l]=oe(te(o,b,l));return{c(){e=w("div"),J(r.$$.fragment),t=E(),s=w("div"),i=w("div"),i.innerHTML=u,v=E(),a=w("div");for(let l=0;l<d.length;l+=1)d[l].c();this.h()},l(l){e=y(l,"DIV",{class:!0,"data-theme":!0});var x=T(e);q(r.$$.fragment,x),t=C(x),s=y(x,"DIV",{class:!0,style:!0});var f=T(s);i=y(f,"DIV",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-6q0576"&&(i.innerHTML=u),v=C(f),a=y(f,"DIV",{class:!0});var $=T(a);for(let L=0;L<d.length;L+=1)d[L].l($);$.forEach(g),f.forEach(g),x.forEach(g),this.h()},h(){p(i,"class","profile svelte-23a4y8"),p(a,"class","links svelte-23a4y8"),p(s,"class","parent svelte-23a4y8"),_(s,"width","calc(100% - 2 * var(--grid-padding))"),p(e,"class","banner svelte-23a4y8"),p(e,"data-theme","light")},m(l,x){I(l,e,x),j(r,e,null),h(e,t),h(e,s),h(s,i),h(s,v),h(s,a);for(let f=0;f<d.length;f+=1)d[f]&&d[f].m(a,null);n=!0,m||(c=O(le.call(null,i)),m=!0)},p(l,[x]){if(x&1){b=Y(l[0]);let f;for(f=0;f<b.length;f+=1){const $=te(l,b,f);d[f]?d[f].p($,x):(d[f]=oe($),d[f].c(),d[f].m(a,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=b.length}},i(l){n||(V(r.$$.fragment,l),n=!0)},o(l){B(r.$$.fragment,l),n=!1},d(l){l&&g(e),N(r),he(d,l),m=!1,c()}}}function Se(o){return[[{title:"arXiv",url:"https://arxiv.org/abs/2404.01976"},{title:"CVPR",url:"",disabled:!0},{title:"GitHub",url:"https://github.com/KentoNishi/JTR-CVPR-2024",color:!0}],(t,s)=>{"disabled"in t&&t.disabled&&s.preventDefault()}]}class Me extends R{constructor(e){super(),P(this,e,Se,Ie,U,{})}}function re(o,{delay:e=0,duration:r=400,easing:t=de}={}){const s=+getComputedStyle(o).opacity;return{delay:e,duration:r,easing:t,css:i=>`opacity: ${i*s}`}}function ze(o){let e,r="",t,s;return{c(){e=w("div"),e.innerHTML=r,this.h()},l(i){e=y(i,"DIV",{style:!0,"data-svelte-h":!0}),M(e)!=="svelte-cp8nfx"&&(e.innerHTML=r),this.h()},h(){_(e,"position","fixed"),_(e,"width","100%"),_(e,"height","100%"),_(e,"top","0"),_(e,"left","0"),_(e,"display","flex"),_(e,"justify-content","center"),_(e,"align-items","center"),_(e,"background-color","white"),_(e,"z-index","100")},m(i,u){I(i,e,u),s=!0},p:D,i(i){s||(i&&fe(()=>{s&&(t||(t=Q(e,re,{},!0)),t.run(1))}),s=!0)},o(i){i&&(t||(t=Q(e,re,{},!1)),t.run(0)),s=!1},d(i){i&&g(e),i&&t&&t.end()}}}class Ve extends R{constructor(e){super(),P(this,e,null,ze,U,{})}}const De=""+new URL("../assets/teaser.D7HAocnu.png",import.meta.url).href,He=""+new URL("../assets/overview.D-xopdIH.png",import.meta.url).href;function Be(o){let e,r,t="TL;DR",s,i,u=`<span class="svelte-7nixce">Joint-Task Regularization (JTR) leverages cross-task relations
      to improve learning when data is not fully labeled for all tasks.</span> <img src="${De}" alt="Teaser" class="teaser svelte-7nixce"/>`,v,a,n="Abstract",m,c,b=`<span class="svelte-7nixce">Multi-task learning has become increasingly popular in the machine
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
      variety of partially labeled scenarios based on NYU-v2, Cityscapes, and Taskonomy.</span> <img src="${He}" alt="Overview" class="overview svelte-7nixce"/>`,d,l,x="BibTeX Citation",f,$,L,S,H;return{c(){e=w("div"),r=w("div"),r.textContent=t,s=E(),i=w("div"),i.innerHTML=u,v=E(),a=w("div"),a.textContent=n,m=E(),c=w("div"),c.innerHTML=b,d=E(),l=w("div"),l.textContent=x,f=E(),$=w("div"),L=w("span"),S=w("pre"),H=ie(o[0]),this.h()},l(z){e=y(z,"DIV",{class:!0});var k=T(e);r=y(k,"DIV",{class:!0,"data-svelte-h":!0}),M(r)!=="svelte-hiq7y6"&&(r.textContent=t),s=C(k),i=y(k,"DIV",{class:!0,"data-svelte-h":!0}),M(i)!=="svelte-2d7za2"&&(i.innerHTML=u),v=C(k),a=y(k,"DIV",{class:!0,"data-svelte-h":!0}),M(a)!=="svelte-nu0tzl"&&(a.textContent=n),m=C(k),c=y(k,"DIV",{class:!0,"data-svelte-h":!0}),M(c)!=="svelte-y8jso0"&&(c.innerHTML=b),d=C(k),l=y(k,"DIV",{class:!0,"data-svelte-h":!0}),M(l)!=="svelte-1mjc4gy"&&(l.textContent=x),f=C(k),$=y(k,"DIV",{class:!0});var A=T($);L=y(A,"SPAN",{class:!0});var F=T(L);S=y(F,"PRE",{class:!0});var Z=T(S);H=ne(Z,o[0]),Z.forEach(g),F.forEach(g),A.forEach(g),k.forEach(g),this.h()},h(){p(r,"class","heading svelte-7nixce"),p(i,"class","content svelte-7nixce"),p(a,"class","heading svelte-7nixce"),p(c,"class","content svelte-7nixce"),p(l,"class","heading svelte-7nixce"),p(S,"class","svelte-7nixce"),p(L,"class","svelte-7nixce"),p($,"class","content svelte-7nixce"),p(e,"class","paragraph svelte-7nixce")},m(z,k){I(z,e,k),h(e,r),h(e,s),h(e,i),h(e,v),h(e,a),h(e,m),h(e,c),h(e,d),h(e,l),h(e,f),h(e,$),h($,L),h(L,S),h(S,H)},p:D,i:D,o:D,d(z){z&&g(e)}}}function Ue(o){return[`@misc{nishi2024jointtask,
    title={Joint-Task Regularization for Partially Labeled Multi-Task Learning}, 
    author={Kento Nishi and Junsik Kim and Wanhua Li and Hanspeter Pfister},
    year={2024},
    eprint={2404.01976},
    archivePrefix={arXiv},
    primaryClass={cs.CV}
}`]}class Re extends R{constructor(e){super(),P(this,e,Ue,Be,U,{})}}const{document:se}=xe;function ae(o){let e,r;return e=new Ve({}),{c(){J(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){j(e,t,s),r=!0},i(t){r||(V(e.$$.fragment,t),r=!0)},o(t){B(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Pe(o){let e,r,t,s,i,u,v,a=!o[0]&&ae();return t=new Me({}),u=new Re({}),{c(){e=E(),a&&a.c(),r=E(),J(t.$$.fragment),s=E(),i=w("div"),J(u.$$.fragment),this.h()},l(n){me("svelte-1qummd3",se.head).forEach(g),e=C(n),a&&a.l(n),r=C(n),q(t.$$.fragment,n),s=C(n),i=y(n,"DIV",{class:!0});var c=T(i);q(u.$$.fragment,c),c.forEach(g),this.h()},h(){se.title="Joint-Task Regularization for Partially Labeled Multi-Task Learning",p(i,"class","padded svelte-60tdka")},m(n,m){I(n,e,m),a&&a.m(n,m),I(n,r,m),j(t,n,m),I(n,s,m),I(n,i,m),j(u,i,null),v=!0},p(n,[m]){n[0]?a&&(ge(),B(a,1,1,()=>{a=null}),pe()):a?m&1&&V(a,1):(a=ae(),a.c(),V(a,1),a.m(r.parentNode,r))},i(n){v||(V(a),V(t.$$.fragment,n),V(u.$$.fragment,n),v=!0)},o(n){B(a),B(t.$$.fragment,n),B(u.$$.fragment,n),v=!1},d(n){n&&(g(e),g(r),g(s),g(i)),a&&a.d(n),N(t,n),N(u)}}}function Ae(o,e,r){let t=!1;return ue(()=>{document.body.style.overflow="hidden",setTimeout(()=>{r(0,t=!0),document.body.style.overflow="auto"},0)}),[t]}class Ne extends R{constructor(e){super(),P(this,e,Ae,Pe,U,{})}}export{Ne as component};
