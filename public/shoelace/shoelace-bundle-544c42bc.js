(function(X){typeof define=="function"&&define.amd?define(X):X()})(function(){"use strict";var X=0;function $t(){return++X}var tt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),At=new Map,xt=class{constructor(t,e){if(this._$cssResult$=!0,e!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=At.get(this.cssText);return tt&&t===void 0&&(At.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},te=t=>new xt(typeof t=="string"?t:t+"",et),S=(t,...e)=>{const i=t.length===1?t[0]:e.reduce((s,r,a)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[a+1],t[0]);return new xt(i,et)},ee=(t,e)=>{tt?t.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):e.forEach(i=>{const s=document.createElement("style"),r=window.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=i.cssText,t.appendChild(s)})},Ct=tt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return te(i)})(t):t,it,Et=window.trustedTypes,ie=Et?Et.emptyScript:"",St=window.reactiveElementPolyfillSupport,st={toAttribute(t,e){switch(e){case Boolean:t=t?ie:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=t!==null;break;case Number:i=t===null?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},Tt=(t,e)=>e!==t&&(e==e||t==t),rt={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:Tt},U=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=rt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||rt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Ct(s))}else t!==void 0&&e.push(Ct(t));return e}static _$Eh(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ee(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=rt){var s,r;const a=this.constructor._$Eh(t,i);if(a!==void 0&&i.reflect===!0){const o=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:st.toAttribute)(e,i.type);this._$Ei=t,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const a=this.constructor,o=a._$Eu.get(t);if(o!==void 0&&this._$Ei!==o){const c=a.getPropertyOptions(o),l=c.converter,h=(r=(s=(i=l)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof l=="function"?l:null)!==null&&r!==void 0?r:st.fromAttribute;this._$Ei=o,this[o]=h(e,c.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Tt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,r)=>this[r]=s),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$ES(i,this[i],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};U.finalized=!0,U.elementProperties=new Map,U.elementStyles=[],U.shadowRootOptions={mode:"open"},St==null||St({ReactiveElement:U}),((it=globalThis.reactiveElementVersions)!==null&&it!==void 0?it:globalThis.reactiveElementVersions=[]).push("1.3.2");var ot,I=globalThis.trustedTypes,kt=I?I.createPolicy("lit-html",{createHTML:t=>t}):void 0,T=`lit$${(Math.random()+"").slice(9)}$`,Pt="?"+T,se=`<${Pt}>`,R=document,V=(t="")=>R.createComment(t),F=t=>t===null||typeof t!="object"&&typeof t!="function",zt=Array.isArray,re=t=>{var e;return zt(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Ot=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Mt=/'/g,Ut=/"/g,It=/^(?:script|style|textarea|title)$/i,oe=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),_=oe(1),C=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Rt=new WeakMap,ae=(t,e,i)=>{var s,r;const a=(s=i==null?void 0:i.renderBefore)!==null&&s!==void 0?s:e;let o=a._$litPart$;if(o===void 0){const c=(r=i==null?void 0:i.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=o=new Z(e.insertBefore(V(),c),c,void 0,i!=null?i:{})}return o._$AI(t),o},H=R.createTreeWalker(R,129,null,!1),le=(t,e)=>{const i=t.length-1,s=[];let r,a=e===2?"<svg>":"",o=W;for(let l=0;l<i;l++){const h=t[l];let p,u,f=-1,G=0;for(;G<h.length&&(o.lastIndex=G,u=o.exec(h),u!==null);)G=o.lastIndex,o===W?u[1]==="!--"?o=Lt:u[1]!==void 0?o=Ot:u[2]!==void 0?(It.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=k):u[3]!==void 0&&(o=k):o===k?u[0]===">"?(o=r!=null?r:W,f=-1):u[1]===void 0?f=-2:(f=o.lastIndex-u[2].length,p=u[1],o=u[3]===void 0?k:u[3]==='"'?Ut:Mt):o===Ut||o===Mt?o=k:o===Lt||o===Ot?o=W:(o=k,r=void 0);const M=o===k&&t[l+1].startsWith("/>")?" ":"";a+=o===W?h+se:f>=0?(s.push(p),h.slice(0,f)+"$lit$"+h.slice(f)+T+M):h+T+(f===-2?(s.push(void 0),l):M)}const c=a+(t[i]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[kt!==void 0?kt.createHTML(c):c,s]},Y=class{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,a=0;const o=t.length-1,c=this.parts,[l,h]=le(t,e);if(this.el=Y.createElement(l,i),H.currentNode=this.el.content,e===2){const p=this.el.content,u=p.firstChild;u.remove(),p.append(...u.childNodes)}for(;(s=H.nextNode())!==null&&c.length<o;){if(s.nodeType===1){if(s.hasAttributes()){const p=[];for(const u of s.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(T)){const f=h[a++];if(p.push(u),f!==void 0){const G=s.getAttribute(f.toLowerCase()+"$lit$").split(T),M=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:M[2],strings:G,ctor:M[1]==="."?ce:M[1]==="?"?he:M[1]==="@"?ue:J})}else c.push({type:6,index:r})}for(const u of p)s.removeAttribute(u)}if(It.test(s.tagName)){const p=s.textContent.split(T),u=p.length-1;if(u>0){s.textContent=I?I.emptyScript:"";for(let f=0;f<u;f++)s.append(p[f],V()),H.nextNode(),c.push({type:2,index:++r});s.append(p[u],V())}}}else if(s.nodeType===8)if(s.data===Pt)c.push({type:2,index:r});else{let p=-1;for(;(p=s.data.indexOf(T,p+1))!==-1;)c.push({type:7,index:r}),p+=T.length-1}r++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}};function N(t,e,i=t,s){var r,a,o,c;if(e===C)return e;let l=s!==void 0?(r=i._$Cl)===null||r===void 0?void 0:r[s]:i._$Cu;const h=F(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),h===void 0?l=void 0:(l=new h(t),l._$AT(t,i,s)),s!==void 0?((o=(c=i)._$Cl)!==null&&o!==void 0?o:c._$Cl=[])[s]=l:i._$Cu=l),l!==void 0&&(e=N(t,l._$AS(t,e.values),l,s)),e}var ne=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:R).importNode(i,!0);H.currentNode=r;let a=H.nextNode(),o=0,c=0,l=s[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Z(a,a.nextSibling,this,t):l.type===1?h=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(h=new pe(a,this,t)),this.v.push(h),l=s[++c]}o!==(l==null?void 0:l.index)&&(a=H.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Z=class{constructor(t,e,i,s){var r;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),F(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==C&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):re(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==v&&F(this._$AH)?this._$AA.nextSibling.data=t:this.k(R.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Y.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const a=new ne(r,this),o=a.p(this.options);a.m(i),this.k(o),this._$AH=a}}_$AC(t){let e=Rt.get(t.strings);return e===void 0&&Rt.set(t.strings,e=new Y(t)),e}S(t){zt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new Z(this.M(V()),this.M(V()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},J=class{constructor(t,e,i,s,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let a=!1;if(r===void 0)t=N(this,t,e,0),a=!F(t)||t!==this._$AH&&t!==C,a&&(this._$AH=t);else{const o=t;let c,l;for(t=r[0],c=0;c<r.length-1;c++)l=N(this,o[i+c],e,c),l===C&&(l=this._$AH[c]),a||(a=!F(l)||l!==this._$AH[c]),l===v?t=v:t!==v&&(t+=(l!=null?l:"")+r[c+1]),this._$AH[c]=l}a&&!s&&this.C(t)}C(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},ce=class extends J{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===v?void 0:t}},de=I?I.emptyScript:"",he=class extends J{constructor(){super(...arguments),this.type=4}C(t){t&&t!==v?this.element.setAttribute(this.name,de):this.element.removeAttribute(this.name)}},ue=class extends J{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=N(this,t,e,0))!==null&&i!==void 0?i:v)===C)return;const s=this._$AH,r=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==v&&(s===v||r);r&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},pe=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}},Ht=window.litHtmlPolyfillSupport;Ht==null||Ht(Y,Z),((ot=globalThis.litHtmlVersions)!==null&&ot!==void 0?ot:globalThis.litHtmlVersions=[]).push("2.2.4");var at,lt,w=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return C}};w.finalized=!0,w._$litElement$=!0,(at=globalThis.litElementHydrateSupport)===null||at===void 0||at.call(globalThis,{LitElement:w});var Nt=globalThis.litElementPolyfillSupport;Nt==null||Nt({LitElement:w}),((lt=globalThis.litElementVersions)!==null&&lt!==void 0?lt:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var P=S`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,ve=S`
  ${P}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }
`,nt=new Set,be=new MutationObserver(jt),B=new Map,Bt=document.documentElement.dir||"ltr",Dt=document.documentElement.lang||navigator.language,q;be.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function fe(...t){t.map(e=>{const i=e.$code.toLowerCase();B.has(i)?B.set(i,Object.assign(Object.assign({},B.get(i)),e)):B.set(i,e),q||(q=e)}),jt()}function jt(){Bt=document.documentElement.dir||"ltr",Dt=document.documentElement.lang||navigator.language,[...nt.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var ge=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){nt.add(this.host)}hostDisconnected(){nt.delete(this.host)}dir(){return`${this.host.dir||Bt}`.toLowerCase()}lang(){return`${this.host.lang||Dt}`.toLowerCase()}term(t,...e){const i=this.lang().toLowerCase().slice(0,2),s=this.lang().length>2?this.lang().toLowerCase():"",r=B.get(s),a=B.get(i);let o;if(r&&r[t])o=r[t];else if(a&&a[t])o=a[t];else if(q&&q[t])o=q[t];else return console.error(`No translation found for: ${String(t)}`),t;return typeof o=="function"?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}},Q=class extends ge{},me={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};fe(me);var ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dt=t=>(...e)=>({_$litDirective$:t,values:e}),ht=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K=dt(class extends ht{constructor(t){var e;if(super(t),t.type!==ct.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.et===void 0){this.et=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((i=this.st)===null||i===void 0)&&i.has(a))&&this.et.add(a);return this.render(e)}const r=t.element.classList;this.et.forEach(a=>{a in e||(r.remove(a),this.et.delete(a))});for(const a in e){const o=!!e[a];o===this.et.has(a)||((s=this.st)===null||s===void 0?void 0:s.has(a))||(o?(r.add(a),this.et.add(a)):(r.remove(a),this.et.delete(a)))}return C}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vt=Object.defineProperty,ye=Object.defineProperties,_e=Object.getOwnPropertyDescriptor,we=Object.getOwnPropertyDescriptors,Ft=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,Wt=(t,e,i)=>e in t?Vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,D=(t,e)=>{for(var i in e||(e={}))$e.call(e,i)&&Wt(t,i,e[i]);if(Ft)for(var i of Ft(e))Ae.call(e,i)&&Wt(t,i,e[i]);return t},ut=(t,e)=>ye(t,we(e)),n=(t,e,i,s)=>{for(var r=s>1?void 0:s?_e(e,i):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(s?o(e,i,r):o(r))||r);return s&&r&&Vt(e,i,r),r};function $(t,e){const i=D({waitUntilFirstUpdate:!1},e);return(s,r)=>{const{update:a}=s;if(t in s){const o=t;s.update=function(c){if(c.has(o)){const l=c.get(o),h=this[o];l!==h&&(!i.waitUntilFirstUpdate||this.hasUpdated)&&this[r](l,h)}a.call(this,c)}}}}function x(t,e,i){const s=new CustomEvent(e,D({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return t.dispatchEvent(s),s}var z=t=>e=>typeof e=="function"?((i,s)=>(window.customElements.define(i,s),s))(t,e):((i,s)=>{const{kind:r,elements:a}=s;return{kind:r,elements:a,finisher(o){window.customElements.define(i,o)}}})(t,e),xe=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?ut(D({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function d(t){return(e,i)=>i!==void 0?((s,r,a)=>{r.constructor.createProperty(a,s)})(t,e,i):xe(t,e)}function pt(t){return d(ut(D({},t),{state:!0}))}var Ce=({finisher:t,descriptor:e})=>(i,s)=>{var r;if(s===void 0){const a=(r=i.originalKey)!==null&&r!==void 0?r:i.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(i.key)}:ut(D({},i),{key:a});return t!=null&&(o.finisher=function(c){t(c,a)}),o}{const a=i.constructor;e!==void 0&&Object.defineProperty(i,s,e(s)),t==null||t(a,s)}};function L(t,e){return Ce({descriptor:i=>{const s={get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){const r=typeof i=="symbol"?Symbol():"__"+i;s.get=function(){var a,o;return this[r]===void 0&&(this[r]=(o=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(t))!==null&&o!==void 0?o:null),this[r]}}return s}})}var vt;((vt=window.HTMLSlotElement)===null||vt===void 0?void 0:vt.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var A=class extends w{constructor(){super(...arguments),this.localize=new Q(this),this.attrId=$t(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleCloseClick(){x(this,"sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return this.id=this.id.length>0?this.id:this.componentId,_`
      <div
        part="base"
        class=${K({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex="0"
      >
        <slot></slot>
        ${this.closable?_`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};A.styles=ve,n([L(".tab")],A.prototype,"tab",2),n([d({reflect:!0})],A.prototype,"panel",2),n([d({type:Boolean,reflect:!0})],A.prototype,"active",2),n([d({type:Boolean})],A.prototype,"closable",2),n([d({type:Boolean,reflect:!0})],A.prototype,"disabled",2),n([d()],A.prototype,"lang",2),n([$("active")],A.prototype,"handleActiveChange",1),n([$("disabled")],A.prototype,"handleDisabledChange",1),A=n([z("sl-tab")],A);var Ee=S`
  ${P}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,qt=Symbol.for(""),Se=t=>{var e,i;if(((e=t)===null||e===void 0?void 0:e.r)===qt)return(i=t)===null||i===void 0?void 0:i._$litStatic$},Kt=(t,...e)=>({_$litStatic$:e.reduce((i,s,r)=>i+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[r+1],t[0]),r:qt}),Gt=new Map,Te=t=>(e,...i)=>{const s=i.length;let r,a;const o=[],c=[];let l,h=0,p=!1;for(;h<s;){for(l=e[h];h<s&&(a=i[h],(r=Se(a))!==void 0);)l+=r+e[++h],p=!0;c.push(a),o.push(l),h++}if(h===s&&o.push(e[s]),p){const u=o.join("$$lit$$");(e=Gt.get(u))===void 0&&(o.raw=o,Gt.set(u,e=o)),i=c}return t(e,...i)},ke=Te(_);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var b=t=>t!=null?t:v;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var y=class extends w{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,x(this,"sl-blur")}handleFocus(){this.hasFocus=!0,x(this,"sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?Kt`a`:Kt`button`;return ke`
      <${e}
        part="base"
        class=${K({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${b(t?void 0:this.disabled)}
        type=${b(t?void 0:"button")}
        href=${b(t?this.href:void 0)}
        target=${b(t?this.target:void 0)}
        download=${b(t?this.download:void 0)}
        rel=${b(t&&this.target?"noreferrer noopener":void 0)}
        role=${b(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${b(this.name)}
          library=${b(this.library)}
          src=${b(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};y.styles=Ee,n([pt()],y.prototype,"hasFocus",2),n([L(".icon-button")],y.prototype,"button",2),n([d()],y.prototype,"name",2),n([d()],y.prototype,"library",2),n([d()],y.prototype,"src",2),n([d()],y.prototype,"href",2),n([d()],y.prototype,"target",2),n([d()],y.prototype,"download",2),n([d()],y.prototype,"label",2),n([d({type:Boolean,reflect:!0})],y.prototype,"disabled",2),y=n([z("sl-icon-button")],y);var bt="";function Xt(t){bt=t}function Pe(){if(!bt){const t=[...document.getElementsByTagName("script")],e=t.find(i=>i.hasAttribute("data-shoelace"));if(e)Xt(e.getAttribute("data-shoelace"));else{const i=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let s="";i&&(s=i.getAttribute("src")),Xt(s.split("/").slice(0,-1).join("/"))}}return bt.replace(/\/$/,"")}var ze={name:"default",resolver:t=>`${Pe()}/assets/icons/${t}.svg`},Le=ze,Yt={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Oe={name:"system",resolver:t=>t in Yt?`data:image/svg+xml,${encodeURIComponent(Yt[t])}`:""},Me=Oe,Ue=[Le,Me],ft=[];function Ie(t){ft.push(t)}function Re(t){ft=ft.filter(e=>e!==t)}function Zt(t){return Ue.find(e=>e.name===t)}var gt=new Map;function He(t,e="cors"){if(gt.has(t))return gt.get(t);const i=fetch(t,{mode:e}).then(async s=>({ok:s.ok,status:s.status,html:await s.text()}));return gt.set(t,i),i}var mt=new Map;async function Ne(t){if(mt.has(t))return mt.get(t);const e=await He(t),i={ok:e.ok,status:e.status,svg:null};if(e.ok){const s=document.createElement("div");s.innerHTML=e.html;const r=s.firstElementChild;i.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return mt.set(t,i),i}var Be=S`
  ${P}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,yt=class extends ht{constructor(t){if(super(t),this.it=v,t.type!==ct.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===v||t==null)return this.ft=void 0,this.it=t;if(t===C)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};yt.directiveName="unsafeHTML",yt.resultType=1;var _t=class extends yt{};_t.directiveName="unsafeSVG",_t.resultType=2;var De=dt(_t),wt,E=class extends w{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Ie(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Re(this)}getUrl(){const t=Zt(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=Zt(this.library),i=this.getUrl();if(wt||(wt=new DOMParser),i)try{const s=await Ne(i);if(i!==this.getUrl())return;if(s.ok){const a=wt.parseFromString(s.svg,"text/html").body.querySelector("svg");a!==null?((t=e==null?void 0:e.mutator)==null||t.call(e,a),this.svg=a.outerHTML,x(this,"sl-load")):(this.svg="",x(this,"sl-error"))}else this.svg="",x(this,"sl-error")}catch{x(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t=typeof this.label=="string"&&this.label.length>0;return _` <div
      part="base"
      class="icon"
      role=${b(t?"img":void 0)}
      aria-label=${b(t?this.label:void 0)}
      aria-hidden=${b(t?void 0:"true")}
    >
      ${De(this.svg)}
    </div>`}};E.styles=Be,n([pt()],E.prototype,"svg",2),n([d({reflect:!0})],E.prototype,"name",2),n([d()],E.prototype,"src",2),n([d()],E.prototype,"label",2),n([d({reflect:!0})],E.prototype,"library",2),n([$("name"),$("src"),$("library")],E.prototype,"setIcon",1),E=n([z("sl-icon")],E);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je=S`
  ${P}

  :host {
    --padding: 0;

    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: var(--padding);
  }

  .tab-panel:not(.tab-panel--active) {
    display: none;
  }
`,j=class extends w{constructor(){super(...arguments),this.attrId=$t(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return _`
      <div
        part="base"
        class=${K({"tab-panel":!0,"tab-panel--active":this.active})}
      >
        <slot></slot>
      </div>
    `}};j.styles=je,n([d({reflect:!0})],j.prototype,"name",2),n([d({type:Boolean,reflect:!0})],j.prototype,"active",2),n([$("active")],j.prototype,"handleActiveChange",1),j=n([z("sl-tab-panel")],j);var Ve=S`
  ${P}

  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function Fe(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}function Jt(t,e,i="vertical",s="smooth"){const r=Fe(t,e),a=r.top+e.scrollTop,o=r.left+e.scrollLeft,c=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,h=e.scrollTop,p=e.scrollTop+e.offsetHeight;(i==="horizontal"||i==="both")&&(o<c?e.scrollTo({left:o,behavior:s}):o+t.clientWidth>l&&e.scrollTo({left:o-e.offsetWidth+t.clientWidth,behavior:s})),(i==="vertical"||i==="both")&&(a<h?e.scrollTo({top:a,behavior:s}):a+t.clientHeight>p&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:s}))}var g=class extends w{constructor(){super(...arguments),this.localize=new Q(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,i)=>{var s;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((s=this.getActiveTab())!=null?s:this.tabs[0],{emitEvents:!1}),i.unobserve(e[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(t){const e=this.tabs.find(i=>i.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(i=>t.includeDisabled?i.tagName.toLowerCase()==="sl-tab":i.tagName.toLowerCase()==="sl-tab"&&!i.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const i=t.target.closest("sl-tab");(i==null?void 0:i.closest("sl-tab-group"))===this&&i!==null&&this.setActiveTab(i,{scrollBehavior:"smooth"})}handleKeyDown(t){const i=t.target.closest("sl-tab");if((i==null?void 0:i.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&i!==null&&(this.setActiveTab(i,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=document.activeElement,a=this.localize.dir()==="rtl";if((r==null?void 0:r.tagName.toLowerCase())==="sl-tab"){let o=this.tabs.indexOf(r);t.key==="Home"?o=0:t.key==="End"?o=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?o--:(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&o++,o<0&&(o=this.tabs.length-1),o>this.tabs.length-1&&(o=0),this.tabs[o].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[o],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&Jt(this.tabs[o],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(t,e){if(e=D({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.map(s=>s.active=s===this.activeTab),this.panels.map(s=>{var r;return s.active=s.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Jt(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&x(this,"sl-tab-hide",{detail:{name:i.panel}}),x(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(i=>i.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s=this.localize.dir()==="rtl",r=this.getAllTabs(),o=r.slice(0,r.indexOf(t)).reduce((c,l)=>({left:c.left+l.clientWidth,top:c.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.transform=s?`translateX(${-1*o.left}px)`:`translateX(${o.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.transform=`translateY(${o.top}px)`;break}}preventIndicatorTransition(){const t=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=t})}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const t=this.localize.dir()==="rtl";return _`
      <div
        part="base"
        class=${K({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?_`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?_`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `}};g.styles=Ve,n([L(".tab-group")],g.prototype,"tabGroup",2),n([L(".tab-group__body")],g.prototype,"body",2),n([L(".tab-group__nav")],g.prototype,"nav",2),n([L(".tab-group__indicator")],g.prototype,"indicator",2),n([pt()],g.prototype,"hasScrollControls",2),n([d()],g.prototype,"placement",2),n([d()],g.prototype,"activation",2),n([d({attribute:"no-scroll-controls",type:Boolean})],g.prototype,"noScrollControls",2),n([d()],g.prototype,"lang",2),n([$("noScrollControls",{waitUntilFirstUpdate:!0})],g.prototype,"updateScrollControls",1),n([$("placement",{waitUntilFirstUpdate:!0})],g.prototype,"syncIndicator",1),g=n([z("sl-tab-group")],g);var We=S`
  ${P}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }
`;function qe(t,e){function i(r){const a=t.getBoundingClientRect(),o=t.ownerDocument.defaultView,c=a.left+o.pageXOffset,l=a.top+o.pageYOffset,h=r.pageX-c,p=r.pageY-l;e!=null&&e.onMove&&e.onMove(h,p)}function s(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",s),e!=null&&e.onStop&&e.onStop()}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",s),e!=null&&e.initialEvent&&i(e.initialEvent)}function Qt(t,e,i){return t<e?e:t>i?i:t}var m=class extends w{constructor(){super(...arguments),this.localize=new Q(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.preventDefault(),qe(this,{onMove:(i,s)=>{let r=this.vertical?s:i;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(o=>{let c;o.endsWith("%")?c=this.size*(parseFloat(o)/100):c=parseFloat(o),e&&!this.vertical&&(c=this.size-c),r>=c-this.snapThreshold&&r<=c+this.snapThreshold&&(r=c)}),this.position=Qt(this.pixelsToPercentage(r),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=i),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=i),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),this.position=Qt(e,0,100)}}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),x(this,"sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${r}`,this.style[e]="",_`
      <div part="panel start" class="start">
        <slot name="start"></slot>
      </div>

      <div
        part="divider"
        class="divider"
        tabindex=${b(this.disabled?void 0:"0")}
        role="separator"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="handle"></slot>
      </div>

      <div part="panel end" class="end">
        <slot name="end"></slot>
      </div>
    `}};m.styles=We,n([L(".divider")],m.prototype,"divider",2),n([d({type:Number,reflect:!0})],m.prototype,"position",2),n([d({attribute:"position-in-pixels",type:Number})],m.prototype,"positionInPixels",2),n([d({type:Boolean,reflect:!0})],m.prototype,"vertical",2),n([d({type:Boolean,reflect:!0})],m.prototype,"disabled",2),n([d()],m.prototype,"primary",2),n([d()],m.prototype,"snap",2),n([d({type:Number,attribute:"snap-threshold"})],m.prototype,"snapThreshold",2),n([$("position")],m.prototype,"handlePositionChange",1),n([$("positionInPixels")],m.prototype,"handlePositionInPixelsChange",1),n([$("vertical")],m.prototype,"handleVerticalChange",1),m=n([z("sl-split-panel")],m);var Ke=S`
  ${P}

  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      inset-inline-start: -50%;
      width: 50%;
    }
    75%,
    100% {
      inset-inline-start: 100%;
      width: 50%;
    }
  }
`,Ge=dt(class extends ht{constructor(t){var e;if(super(t),t.type!==ct.ATTRIBUTE||t.name!=="style"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return s==null?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(this.ct===void 0){this.ct=new Set;for(const s in e)this.ct.add(s);return this.render(e)}this.ct.forEach(s=>{e[s]==null&&(this.ct.delete(s),s.includes("-")?i.removeProperty(s):i[s]="")});for(const s in e){const r=e[s];r!=null&&(this.ct.add(s),s.includes("-")?i.setProperty(s,r):i[s]=r)}return C}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O=class extends w{constructor(){super(...arguments),this.localize=new Q(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return _`
      <div
        part="base"
        class=${K({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate})}
        role="progressbar"
        title=${b(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Ge({width:`${this.value}%`})}>
          ${this.indeterminate?"":_`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              `}
        </div>
      </div>
    `}};O.styles=Ke,n([d({type:Number,reflect:!0})],O.prototype,"value",2),n([d({type:Boolean,reflect:!0})],O.prototype,"indeterminate",2),n([d()],O.prototype,"label",2),n([d()],O.prototype,"lang",2),O=n([z("sl-progress-bar")],O)});
