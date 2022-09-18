(function(q){typeof define=="function"&&define.amd?define(q):q()})(function(){"use strict";var q=Object.defineProperty,ce=Object.defineProperties,de=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,xt=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,Ct=(t,e,s)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,T=(t,e)=>{for(var s in e||(e={}))ue.call(e,s)&&Ct(t,s,e[s]);if(xt)for(var s of xt(e))pe.call(e,s)&&Ct(t,s,e[s]);return t},Q=(t,e)=>ce(t,he(e)),c=(t,e,s,i)=>{for(var o=i>1?void 0:i?de(e,s):e,a=t.length-1,r;a>=0;a--)(r=t[a])&&(o=(i?r(e,s,o):r(o))||o);return i&&o&&q(e,s,o),o},Et=new Map,ve=new WeakMap;function be(t){return t!=null?t:{keyframes:[],options:{duration:0}}}function St(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function L(t,e){Et.set(t,be(e))}function j(t,e,s){const i=ve.get(t);if(i!=null&&i[e])return St(i[e],s.dir);const o=Et.get(e);return o?St(o,s.dir):{keyframes:[],options:{duration:0}}}var fe=0;function kt(){return++fe}var ot=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),Tt=new Map,Lt=class{constructor(t,e){if(this._$cssResult$=!0,e!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Tt.get(this.cssText);return ot&&t===void 0&&(Tt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},ge=t=>new Lt(typeof t=="string"?t:t+"",rt),P=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,o,a)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[a+1],t[0]);return new Lt(s,rt)},me=(t,e)=>{ot?t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet):e.forEach(s=>{const i=document.createElement("style"),o=window.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=s.cssText,t.appendChild(i)})},Pt=ot?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return ge(s)})(t):t,at,zt=window.trustedTypes,ye=zt?zt.emptyScript:"",Ut=window.reactiveElementPolyfillSupport,nt={toAttribute(t,e){switch(e){case Boolean:t=t?ye:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Mt=(t,e)=>e!==t&&(e==e||t==t),lt={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:Mt},M=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Eh(s,e);i!==void 0&&(this._$Eu.set(i,s),t.push(i))}),t}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||lt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Pt(i))}else t!==void 0&&e.push(Pt(t));return e}static _$Eh(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=lt){var i,o;const a=this.constructor._$Eh(t,s);if(a!==void 0&&s.reflect===!0){const r=((o=(i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&o!==void 0?o:nt.toAttribute)(e,s.type);this._$Ei=t,r==null?this.removeAttribute(a):this.setAttribute(a,r),this._$Ei=null}}_$AK(t,e){var s,i,o;const a=this.constructor,r=a._$Eu.get(t);if(r!==void 0&&this._$Ei!==r){const l=a.getPropertyOptions(r),n=l.converter,d=(o=(i=(s=n)===null||s===void 0?void 0:s.fromAttribute)!==null&&i!==void 0?i:typeof n=="function"?n:null)!==null&&o!==void 0?o:nt.fromAttribute;this._$Ei=r,this[r]=d(e,l.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Ei!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,o)=>this[o]=i),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(s)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$ES(s,this[s],e)),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}};M.finalized=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},Ut==null||Ut({ReactiveElement:M}),((at=globalThis.reactiveElementVersions)!==null&&at!==void 0?at:globalThis.reactiveElementVersions=[]).push("1.3.2");var ct,O=globalThis.trustedTypes,Ot=O?O.createPolicy("lit-html",{createHTML:t=>t}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,Ht="?"+S,_e=`<${Ht}>`,H=document,K=(t="")=>H.createComment(t),V=t=>t===null||typeof t!="object"&&typeof t!="function",Nt=Array.isArray,we=t=>{var e;return Nt(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Rt=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Bt=/'/g,Dt=/"/g,Ft=/^(?:script|style|textarea|title)$/i,$e=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),w=$e(1),k=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),qt=new WeakMap,Ae=(t,e,s)=>{var i,o;const a=(i=s==null?void 0:s.renderBefore)!==null&&i!==void 0?i:e;let r=a._$litPart$;if(r===void 0){const l=(o=s==null?void 0:s.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=r=new et(e.insertBefore(K(),l),l,void 0,s!=null?s:{})}return r._$AI(t),r},N=H.createTreeWalker(H,129,null,!1),xe=(t,e)=>{const s=t.length-1,i=[];let o,a=e===2?"<svg>":"",r=W;for(let n=0;n<s;n++){const d=t[n];let v,h,g=-1,J=0;for(;J<d.length&&(r.lastIndex=J,h=r.exec(d),h!==null);)J=r.lastIndex,r===W?h[1]==="!--"?r=It:h[1]!==void 0?r=Rt:h[2]!==void 0?(Ft.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=z):h[3]!==void 0&&(r=z):r===z?h[0]===">"?(r=o!=null?o:W,g=-1):h[1]===void 0?g=-2:(g=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?z:h[3]==='"'?Dt:Bt):r===Dt||r===Bt?r=z:r===It||r===Rt?r=W:(r=z,o=void 0);const U=r===z&&t[n+1].startsWith("/>")?" ":"";a+=r===W?d+_e:g>=0?(i.push(v),d.slice(0,g)+"$lit$"+d.slice(g)+S+U):d+S+(g===-2?(i.push(void 0),n):U)}const l=a+(t[s]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ot!==void 0?Ot.createHTML(l):l,i]},tt=class{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,a=0;const r=t.length-1,l=this.parts,[n,d]=xe(t,e);if(this.el=tt.createElement(n,s),N.currentNode=this.el.content,e===2){const v=this.el.content,h=v.firstChild;h.remove(),v.append(...h.childNodes)}for(;(i=N.nextNode())!==null&&l.length<r;){if(i.nodeType===1){if(i.hasAttributes()){const v=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(S)){const g=d[a++];if(v.push(h),g!==void 0){const J=i.getAttribute(g.toLowerCase()+"$lit$").split(S),U=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:U[2],strings:J,ctor:U[1]==="."?Ee:U[1]==="?"?ke:U[1]==="@"?Te:st})}else l.push({type:6,index:o})}for(const h of v)i.removeAttribute(h)}if(Ft.test(i.tagName)){const v=i.textContent.split(S),h=v.length-1;if(h>0){i.textContent=O?O.emptyScript:"";for(let g=0;g<h;g++)i.append(v[g],K()),N.nextNode(),l.push({type:2,index:++o});i.append(v[h],K())}}}else if(i.nodeType===8)if(i.data===Ht)l.push({type:2,index:o});else{let v=-1;for(;(v=i.data.indexOf(S,v+1))!==-1;)l.push({type:7,index:o}),v+=S.length-1}o++}}static createElement(t,e){const s=H.createElement("template");return s.innerHTML=t,s}};function I(t,e,s=t,i){var o,a,r,l;if(e===k)return e;let n=i!==void 0?(o=s._$Cl)===null||o===void 0?void 0:o[i]:s._$Cu;const d=V(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==d&&((a=n==null?void 0:n._$AO)===null||a===void 0||a.call(n,!1),d===void 0?n=void 0:(n=new d(t),n._$AT(t,s,i)),i!==void 0?((r=(l=s)._$Cl)!==null&&r!==void 0?r:l._$Cl=[])[i]=n:s._$Cu=n),n!==void 0&&(e=I(t,n._$AS(t,e.values),n,i)),e}var Ce=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:H).importNode(s,!0);N.currentNode=o;let a=N.nextNode(),r=0,l=0,n=i[0];for(;n!==void 0;){if(r===n.index){let d;n.type===2?d=new et(a,a.nextSibling,this,t):n.type===1?d=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(d=new Le(a,this,t)),this.v.push(d),n=i[++l]}r!==(n==null?void 0:n.index)&&(a=N.nextNode(),r++)}return o}m(t){let e=0;for(const s of this.v)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},et=class{constructor(t,e,s,i){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),V(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==k&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):we(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==p&&V(this._$AH)?this._$AA.nextSibling.data=t:this.k(H.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=tt.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(s);else{const a=new Ce(o,this),r=a.p(this.options);a.m(s),this.k(r),this._$AH=a}}_$AC(t){let e=qt.get(t.strings);return e===void 0&&qt.set(t.strings,e=new tt(t)),e}S(t){Nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new et(this.M(K()),this.M(K()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},st=class{constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const o=this.strings;let a=!1;if(o===void 0)t=I(this,t,e,0),a=!V(t)||t!==this._$AH&&t!==k,a&&(this._$AH=t);else{const r=t;let l,n;for(t=o[0],l=0;l<o.length-1;l++)n=I(this,r[s+l],e,l),n===k&&(n=this._$AH[l]),a||(a=!V(n)||n!==this._$AH[l]),n===p?t=p:t!==p&&(t+=(n!=null?n:"")+o[l+1]),this._$AH[l]=n}a&&!i&&this.C(t)}C(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}},Ee=class extends st{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===p?void 0:t}},Se=O?O.emptyScript:"",ke=class extends st{constructor(){super(...arguments),this.type=4}C(t){t&&t!==p?this.element.setAttribute(this.name,Se):this.element.removeAttribute(this.name)}},Te=class extends st{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){var s;if((t=(s=I(this,t,e,0))!==null&&s!==void 0?s:p)===k)return;const i=this._$AH,o=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==p&&(i===p||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},Le=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}},jt=window.litHtmlPolyfillSupport;jt==null||jt(tt,et),((ct=globalThis.litHtmlVersions)!==null&&ct!==void 0?ct:globalThis.litHtmlVersions=[]).push("2.2.4");var dt,ht,$=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return k}};$.finalized=!0,$._$litElement$=!0,(dt=globalThis.litElementHydrateSupport)===null||dt===void 0||dt.call(globalThis,{LitElement:$});var Kt=globalThis.litElementPolyfillSupport;Kt==null||Kt({LitElement:$}),((ht=globalThis.litElementVersions)!==null&&ht!==void 0?ht:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R=P`
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
`,Pe=P`
  ${R}

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
`,ut=new Set,ze=new MutationObserver(Gt),B=new Map,Vt=document.documentElement.dir||"ltr",Wt=document.documentElement.lang||navigator.language,G;ze.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ue(...t){t.map(e=>{const s=e.$code.toLowerCase();B.has(s)?B.set(s,Object.assign(Object.assign({},B.get(s)),e)):B.set(s,e),G||(G=e)}),Gt()}function Gt(){Vt=document.documentElement.dir||"ltr",Wt=document.documentElement.lang||navigator.language,[...ut.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Me=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){ut.add(this.host)}hostDisconnected(){ut.delete(this.host)}dir(){return`${this.host.dir||Vt}`.toLowerCase()}lang(){return`${this.host.lang||Wt}`.toLowerCase()}term(t,...e){const s=this.lang().toLowerCase().slice(0,2),i=this.lang().length>2?this.lang().toLowerCase():"",o=B.get(i),a=B.get(s);let r;if(o&&o[t])r=o[t];else if(a&&a[t])r=a[t];else if(G&&G[t])r=G[t];else return console.error(`No translation found for: ${String(t)}`),t;return typeof r=="function"?r(...e):r}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,e)}},pt=class extends Me{},Oe={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Ue(Oe);var Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Yt=t=>(...e)=>({_$litDirective$:t,values:e}),Zt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X=Yt(class extends Zt{constructor(t){var e;if(super(t),t.type!==Xt.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,i;if(this.et===void 0){this.et=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((s=this.st)===null||s===void 0)&&s.has(a))&&this.et.add(a);return this.render(e)}const o=t.element.classList;this.et.forEach(a=>{a in e||(o.remove(a),this.et.delete(a))});for(const a in e){const r=!!e[a];r===this.et.has(a)||((i=this.st)===null||i===void 0?void 0:i.has(a))||(r?(o.add(a),this.et.add(a)):(o.remove(a),this.et.delete(a)))}return k}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(t,e){const s=T({waitUntilFirstUpdate:!1},e);return(i,o)=>{const{update:a}=i;if(t in i){const r=t;i.update=function(l){if(l.has(r)){const n=l.get(r),d=this[r];n!==d&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[o](n,d)}a.call(this,l)}}}}function b(t,e,s){const i=new CustomEvent(e,T({bubbles:!0,cancelable:!1,composed:!0,detail:{}},s));return t.dispatchEvent(i),i}function Jt(t,e){return new Promise(s=>{function i(o){o.target===t&&(t.removeEventListener(e,i),s())}t.addEventListener(e,i)})}var D=t=>e=>typeof e=="function"?((s,i)=>(window.customElements.define(s,i),i))(t,e):((s,i)=>{const{kind:o,elements:a}=i;return{kind:o,elements:a,finisher(r){window.customElements.define(s,r)}}})(t,e),He=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Q(T({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function u(t){return(e,s)=>s!==void 0?((i,o,a)=>{o.constructor.createProperty(a,i)})(t,e,s):He(t,e)}function vt(t){return u(Q(T({},t),{state:!0}))}var Ne=({finisher:t,descriptor:e})=>(s,i)=>{var o;if(i===void 0){const a=(o=s.originalKey)!==null&&o!==void 0?o:s.key,r=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(s.key)}:Q(T({},s),{key:a});return t!=null&&(r.finisher=function(l){t(l,a)}),r}{const a=s.constructor;e!==void 0&&Object.defineProperty(s,i,e(i)),t==null||t(a,i)}};function C(t,e){return Ne({descriptor:s=>{const i={get(){var o,a;return(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(t))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){const o=typeof s=="symbol"?Symbol():"__"+s;i.get=function(){var a,r;return this[o]===void 0&&(this[o]=(r=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(t))!==null&&r!==void 0?r:null),this[o]}}return i}})}var bt;((bt=window.HTMLSlotElement)===null||bt===void 0?void 0:bt.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _=class extends ${constructor(){super(...arguments),this.localize=new pt(this),this.attrId=kt(),this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}handleCloseClick(){b(this,"sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return this.id=this.id.length>0?this.id:this.componentId,w`
      <div
        part="base"
        class=${X({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex="0"
      >
        <slot></slot>
        ${this.closable?w`
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
    `}};_.styles=Pe,c([C(".tab")],_.prototype,"tab",2),c([u({reflect:!0})],_.prototype,"panel",2),c([u({type:Boolean,reflect:!0})],_.prototype,"active",2),c([u({type:Boolean})],_.prototype,"closable",2),c([u({type:Boolean,reflect:!0})],_.prototype,"disabled",2),c([u()],_.prototype,"lang",2),c([x("active")],_.prototype,"handleActiveChange",1),c([x("disabled")],_.prototype,"handleDisabledChange",1),_=c([D("sl-tab")],_);var Ie=P`
  ${R}

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
`,Qt=Symbol.for(""),Re=t=>{var e,s;if(((e=t)===null||e===void 0?void 0:e.r)===Qt)return(s=t)===null||s===void 0?void 0:s._$litStatic$},te=(t,...e)=>({_$litStatic$:e.reduce((s,i,o)=>s+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[o+1],t[0]),r:Qt}),ee=new Map,Be=t=>(e,...s)=>{const i=s.length;let o,a;const r=[],l=[];let n,d=0,v=!1;for(;d<i;){for(n=e[d];d<i&&(a=s[d],(o=Re(a))!==void 0);)n+=o+e[++d],v=!0;l.push(a),r.push(n),d++}if(d===i&&r.push(e[i]),v){const h=r.join("$$lit$$");(e=ee.get(h))===void 0&&(r.raw=r,ee.set(h,e=r)),s=l}return t(e,...s)},De=Be(w);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var f=t=>t!=null?t:p;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var y=class extends ${constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,b(this,"sl-blur")}handleFocus(){this.hasFocus=!0,b(this,"sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?te`a`:te`button`;return De`
      <${e}
        part="base"
        class=${X({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${f(t?void 0:this.disabled)}
        type=${f(t?void 0:"button")}
        href=${f(t?this.href:void 0)}
        target=${f(t?this.target:void 0)}
        download=${f(t?this.download:void 0)}
        rel=${f(t&&this.target?"noreferrer noopener":void 0)}
        role=${f(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${f(this.name)}
          library=${f(this.library)}
          src=${f(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};y.styles=Ie,c([vt()],y.prototype,"hasFocus",2),c([C(".icon-button")],y.prototype,"button",2),c([u()],y.prototype,"name",2),c([u()],y.prototype,"library",2),c([u()],y.prototype,"src",2),c([u()],y.prototype,"href",2),c([u()],y.prototype,"target",2),c([u()],y.prototype,"download",2),c([u()],y.prototype,"label",2),c([u({type:Boolean,reflect:!0})],y.prototype,"disabled",2),y=c([D("sl-icon-button")],y);var ft="";function se(t){ft=t}function Fe(){if(!ft){const t=[...document.getElementsByTagName("script")],e=t.find(s=>s.hasAttribute("data-shoelace"));if(e)se(e.getAttribute("data-shoelace"));else{const s=t.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let i="";s&&(i=s.getAttribute("src")),se(i.split("/").slice(0,-1).join("/"))}}return ft.replace(/\/$/,"")}var qe={name:"default",resolver:t=>`${Fe()}/assets/icons/${t}.svg`},je=qe,ie={"check-lg":`
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
  `},Ke={name:"system",resolver:t=>t in ie?`data:image/svg+xml,${encodeURIComponent(ie[t])}`:""},Ve=Ke,We=[je,Ve],gt=[];function Ge(t){gt.push(t)}function Xe(t){gt=gt.filter(e=>e!==t)}function oe(t){return We.find(e=>e.name===t)}var mt=new Map;function Ye(t,e="cors"){if(mt.has(t))return mt.get(t);const s=fetch(t,{mode:e}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return mt.set(t,s),s}var yt=new Map;async function Ze(t){if(yt.has(t))return yt.get(t);const e=await Ye(t),s={ok:e.ok,status:e.status,svg:null};if(e.ok){const i=document.createElement("div");i.innerHTML=e.html;const o=i.firstElementChild;s.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return yt.set(t,s),s}var Je=P`
  ${R}

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
`,_t=class extends Zt{constructor(t){if(super(t),this.it=p,t.type!==Xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===p||t==null)return this.ft=void 0,this.it=t;if(t===k)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};_t.directiveName="unsafeHTML",_t.resultType=1;var wt=class extends _t{};wt.directiveName="unsafeSVG",wt.resultType=2;var Qe=Yt(wt),$t,E=class extends ${constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Ge(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xe(this)}getUrl(){const t=oe(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=oe(this.library),s=this.getUrl();if($t||($t=new DOMParser),s)try{const i=await Ze(s);if(s!==this.getUrl())return;if(i.ok){const a=$t.parseFromString(i.svg,"text/html").body.querySelector("svg");a!==null?((t=e==null?void 0:e.mutator)==null||t.call(e,a),this.svg=a.outerHTML,b(this,"sl-load")):(this.svg="",b(this,"sl-error"))}else this.svg="",b(this,"sl-error")}catch{b(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t=typeof this.label=="string"&&this.label.length>0;return w` <div
      part="base"
      class="icon"
      role=${f(t?"img":void 0)}
      aria-label=${f(t?this.label:void 0)}
      aria-hidden=${f(t?void 0:"true")}
    >
      ${Qe(this.svg)}
    </div>`}};E.styles=Je,c([vt()],E.prototype,"svg",2),c([u({reflect:!0})],E.prototype,"name",2),c([u()],E.prototype,"src",2),c([u()],E.prototype,"label",2),c([u({reflect:!0})],E.prototype,"library",2),c([x("name"),x("src"),x("library")],E.prototype,"setIcon",1),E=c([D("sl-icon")],E);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ts=P`
  ${R}

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
`,F=class extends ${constructor(){super(...arguments),this.attrId=kt(),this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return w`
      <div
        part="base"
        class=${X({"tab-panel":!0,"tab-panel--active":this.active})}
      >
        <slot></slot>
      </div>
    `}};F.styles=ts,c([u({reflect:!0})],F.prototype,"name",2),c([u({type:Boolean,reflect:!0})],F.prototype,"active",2),c([x("active")],F.prototype,"handleActiveChange",1),F=c([D("sl-tab-panel")],F);var es=P`
  ${R}

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
`;function ss(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var At=new Set;function re(t){At.add(t),document.body.classList.add("sl-scroll-lock")}function ae(t){At.delete(t),At.size===0&&document.body.classList.remove("sl-scroll-lock")}function ne(t,e,s="vertical",i="smooth"){const o=ss(t,e),a=o.top+e.scrollTop,r=o.left+e.scrollLeft,l=e.scrollLeft,n=e.scrollLeft+e.offsetWidth,d=e.scrollTop,v=e.scrollTop+e.offsetHeight;(s==="horizontal"||s==="both")&&(r<l?e.scrollTo({left:r,behavior:i}):r+t.clientWidth>n&&e.scrollTo({left:r-e.offsetWidth+t.clientWidth,behavior:i})),(s==="vertical"||s==="both")&&(a<d?e.scrollTo({top:a,behavior:i}):a+t.clientHeight>v&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:i}))}var m=class extends ${constructor(){super(...arguments),this.localize=new pt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.preventIndicatorTransition(),this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(e=>!["aria-labelledby","aria-controls"].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,s)=>{var i;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),s.unobserve(e[0].target))}).observe(this.tabGroup)})}disconnectedCallback(){this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(s=>t.includeDisabled?s.tagName.toLowerCase()==="sl-tab":s.tagName.toLowerCase()==="sl-tab"&&!s.disabled)}getAllPanels(){return[...this.body.querySelector("slot").assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");(s==null?void 0:s.closest("sl-tab-group"))===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if((s==null?void 0:s.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const o=document.activeElement,a=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let r=this.tabs.indexOf(o);t.key==="Home"?r=0:t.key==="End"?r=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?r--:(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&r++,r<0&&(r=this.tabs.length-1),r>this.tabs.length-1&&(r=0),this.tabs[r].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[r],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&ne(this.tabs[r],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}setActiveTab(t,e){if(e=T({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.map(i=>i.active=i===this.activeTab),this.panels.map(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&ne(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&b(this,"sl-tab-hide",{detail:{name:s.panel}}),b(this,"sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),r=o.slice(0,o.indexOf(t)).reduce((l,n)=>({left:l.left+n.clientWidth,top:l.top+n.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.transform=i?`translateX(${-1*r.left}px)`:`translateX(${r.left}px)`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.transform=`translateY(${r.top}px)`;break}}preventIndicatorTransition(){const t=this.indicator.style.transition;this.indicator.style.transition="none",requestAnimationFrame(()=>{this.indicator.style.transition=t})}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator()}render(){const t=this.localize.dir()==="rtl";return w`
      <div
        part="base"
        class=${X({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?w`
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

          ${this.hasScrollControls?w`
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
    `}};m.styles=es,c([C(".tab-group")],m.prototype,"tabGroup",2),c([C(".tab-group__body")],m.prototype,"body",2),c([C(".tab-group__nav")],m.prototype,"nav",2),c([C(".tab-group__indicator")],m.prototype,"indicator",2),c([vt()],m.prototype,"hasScrollControls",2),c([u()],m.prototype,"placement",2),c([u()],m.prototype,"activation",2),c([u({attribute:"no-scroll-controls",type:Boolean})],m.prototype,"noScrollControls",2),c([u()],m.prototype,"lang",2),c([x("noScrollControls",{waitUntilFirstUpdate:!0})],m.prototype,"updateScrollControls",1),c([x("placement",{waitUntilFirstUpdate:!0})],m.prototype,"syncIndicator",1),m=c([D("sl-tab-group")],m);function le(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function is(t){var e,s;const i=[];function o(l){l instanceof HTMLElement&&(i.push(l),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&o(l.shadowRoot)),[...l.children].forEach(n=>o(n))}o(t);const a=(e=i.find(l=>le(l)))!=null?e:null,r=(s=i.reverse().find(l=>le(l)))!=null?s:null;return{start:a,end:r}}var Y=[],os=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Y.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Y=Y.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Y[Y.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=is(this.element),s=this.tabDirection==="forward"?t:e;typeof(s==null?void 0:s.focus)=="function"&&s.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}},rs=P`
  ${R}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`;function Z(t,e,s){return new Promise(i=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,Q(T({},s),{duration:as()?0:s.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function as(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function it(t){return Promise.all(t.getAnimations().map(e=>new Promise(s=>{const i=requestAnimationFrame(s);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}var ns=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}},A=class extends ${constructor(){super(...arguments),this.hasSlotController=new ns(this,"footer"),this.localize=new pt(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new os(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),re(this))}disconnectedCallback(){super.disconnectedCallback(),ae(this)}async show(){if(!this.open)return this.open=!0,Jt(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Jt(this,"sl-after-hide")}requestClose(t){if(b(this,"sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=j(this,"dialog.denyClose",{dir:this.localize.dir()});Z(this.panel,s.keyframes,s.options);return}this.hide()}handleKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){b(this,"sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),re(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([it(this.dialog),it(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{b(this,"sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=j(this,"dialog.show",{dir:this.localize.dir()}),s=j(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Z(this.panel,e.keyframes,e.options),Z(this.overlay,s.keyframes,s.options)]),b(this,"sl-after-show")}else{b(this,"sl-hide"),this.modal.deactivate(),await Promise.all([it(this.dialog),it(this.overlay)]);const t=j(this,"dialog.hide",{dir:this.localize.dir()}),e=j(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Z(this.panel,t.keyframes,t.options),Z(this.overlay,e.keyframes,e.options)]),this.dialog.hidden=!0,ae(this);const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),b(this,"sl-after-hide")}}render(){return w`
      <div
        part="base"
        class=${X({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${f(this.noHeader?this.label:void 0)}
          aria-labelledby=${f(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":w`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};A.styles=rs,c([C(".dialog")],A.prototype,"dialog",2),c([C(".dialog__panel")],A.prototype,"panel",2),c([C(".dialog__overlay")],A.prototype,"overlay",2),c([u({type:Boolean,reflect:!0})],A.prototype,"open",2),c([u({reflect:!0})],A.prototype,"label",2),c([u({attribute:"no-header",type:Boolean,reflect:!0})],A.prototype,"noHeader",2),c([x("open",{waitUntilFirstUpdate:!0})],A.prototype,"handleOpenChange",1),A=c([D("sl-dialog")],A),L("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}}),L("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}}),L("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}}),L("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),L("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),L("dialog.show",{keyframes:[{opacity:0,transform:"translate3d(0px, -20px, 0px)"},{opacity:1,transform:"translate3d(0px, 0px, 0px)"}],options:{duration:250,easing:"cubic-bezier(0.785, 0.135, 0.150, 0.860)"}}),L("dialog.hide",{keyframes:[{opacity:1,transform:"translate3d(0px, 0px, 0px)"},{opacity:0,transform:"translate3d(0px, 20px, 0px)"}],options:{duration:250,easing:"cubic-bezier(0.785, 0.135, 0.150, 0.860)"}})});
