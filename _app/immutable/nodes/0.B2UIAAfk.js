import{s as u,a as d,b as f,u as b,g as m,d as _}from"../chunks/scheduler.DJcLnUSX.js";import{S as p,i as h,e as g,c as y,a as k,d as c,k as v,g as $,l as w,m as S}from"../chunks/index.EcrCpfSL.js";import{s as j,u as I,d as L}from"../chunks/base.Cmuntu6m.js";const M=!1,O=!1,G=Object.freeze(Object.defineProperty({__proto__:null,prerender:M,ssr:O},Symbol.toStringTag,{value:"Module"})),T={};function V(s,e={}){const a=j(s);return a.innerHTML=`
    body {
      margin: 0;
      padding: 0;
    }

    * {
      font-family: 'Segoe UI';
    }

    * ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    
    * ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    * ::-webkit-scrollbar-thumb {
      background: #888;
    }
    
    * ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    * ::-webkit-scrollbar-corner {
      background: transparent;
    }
    
    * {
      scrollbar-width: thin;
      scrollbar-color: #888 transparent;
    }
  `,{...I(e,s,T),...L(()=>{a.remove()})}}function q(s){let e,a,n,i;const l=s[1].default,r=d(l,s,s[0],null);return{c(){e=g("div"),r&&r.c(),this.h()},l(t){e=y(t,"DIV",{"data-theme":!0});var o=k(e);r&&r.l(o),o.forEach(c),this.h()},h(){v(e,"data-theme","light")},m(t,o){$(t,e,o),r&&r.m(e,null),a=!0,n||(i=f(V.call(null,e)),n=!0)},p(t,[o]){r&&r.p&&(!a||o&1)&&b(r,l,t,t[0],a?_(l,t[0],o,null):m(t[0]),null)},i(t){a||(w(r,t),a=!0)},o(t){S(r,t),a=!1},d(t){t&&c(e),r&&r.d(t),n=!1,i()}}}function z(s,e,a){let{$$slots:n={},$$scope:i}=e;return s.$$set=l=>{"$$scope"in l&&a(0,i=l.$$scope)},[i,n]}class H extends p{constructor(e){super(),h(this,e,z,q,u,{})}}export{H as component,G as universal};
