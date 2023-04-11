/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new WeakMap;let n=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}};const o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var r;const a=window,l=a.trustedTypes,c=l?l.emptyScript:"",h=a.reactiveElementPolyfillSupport,d={toAttribute(t,i){switch(i){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},u=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};let p=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const n=this[t];this[i]=s,this.requestUpdate(t,n,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(o(t))}else void 0!==t&&i.push(o(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=v){var s;const n=this.constructor._$Ep(t,e);if(void 0!==n&&!0===e.reflect){const o=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:d).toAttribute(i,e.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:d;this._$El=n,this[n]=o.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(r=a.reactiveElementVersions)&&void 0!==r?r:a.reactiveElementVersions=[]).push("1.6.1");const f=window,g=f.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",y=`lit$${(Math.random()+"").slice(9)}$`,x="?"+y,w=`<${x}>`,k=document,$=()=>k.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,R="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,I=/>/g,j=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),E=/'/g,U=/"/g,z=/^(?:script|style|textarea|title)$/i,O=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),T=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),L=new WeakMap,P=k.createTreeWalker(k,129,null,!1),q=(t,i)=>{const e=t.length-1,s=[];let n,o=2===i?"<svg>":"",r=N;for(let i=0;i<e;i++){const e=t[i];let a,l,c=-1,h=0;for(;h<e.length&&(r.lastIndex=h,l=r.exec(e),null!==l);)h=r.lastIndex,r===N?"!--"===l[1]?r=C:void 0!==l[1]?r=I:void 0!==l[2]?(z.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=j):void 0!==l[3]&&(r=j):r===j?">"===l[0]?(r=null!=n?n:N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?j:'"'===l[3]?U:E):r===U||r===E?r=j:r===C||r===I?r=N:(r=j,n=void 0);const d=r===j&&t[i+1].startsWith("/>")?" ":"";o+=r===N?e+w:c>=0?(s.push(a),e.slice(0,c)+b+e.slice(c)+y+d):e+y+(-2===c?(s.push(void 0),i):d)}const a=o+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,s]};class B{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=q(t,i);if(this.el=B.createElement(l,e),P.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=P.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith(b)||i.startsWith(y)){const e=c[o++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+b).split(y),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?F:"?"===i[1]?J:"@"===i[1]?Z:D})}else a.push({type:6,index:n})}for(const i of t)s.removeAttribute(i)}if(z.test(s.tagName)){const t=s.textContent.split(y),i=t.length-1;if(i>0){s.textContent=g?g.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],$()),P.nextNode(),a.push({type:2,index:++n});s.append(t[i],$())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)a.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,i){const e=k.createElement("template");return e.innerHTML=t,e}}function G(t,i,e=t,s){var n,o,r,a;if(i===T)return i;let l=void 0!==s?null===(n=e._$Co)||void 0===n?void 0:n[s]:e._$Cl;const c=S(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,e,s)),void 0!==s?(null!==(r=(a=e)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:e._$Cl=l),void 0!==l&&(i=G(t,l._$AS(t,i.values),l,s)),i}class W{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:e},parts:s}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:k).importNode(e,!0);P.currentNode=n;let o=P.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new K(o,o.nextSibling,this,t):1===l.type?i=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(i=new V(o,this,t)),this.u.push(i),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=P.nextNode(),r++)}return n}p(t){let i=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class K{constructor(t,i,e,s){var n;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=G(this,t,i),S(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==T&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==M&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.p(e);else{const t=new W(n,this),i=t.v(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let i=L.get(t.strings);return void 0===i&&L.set(t.strings,i=new B(t)),i}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const n of t)s===i.length?i.push(e=new K(this.S($()),this.S($()),this,this.options)):e=i[s],e._$AI(n),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class D{constructor(t,i,e,s,n){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const n=this.strings;let o=!1;if(void 0===n)t=G(this,t,i,0),o=!S(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=G(this,s[e+r],i,r),a===T&&(a=this._$AH[r]),o||(o=!S(a)||a!==this._$AH[r]),a===M?t=M:t!==M&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const H=g?g.emptyScript:"";class J extends D{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class Z extends D{constructor(t,i,e,s,n){super(t,i,e,s,n),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=G(this,t,i,0))&&void 0!==e?e:M)===T)return;const s=this._$AH,n=t===M&&s!==M||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==M&&(s===M||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const Y=f.litHtmlPolyfillSupport;null==Y||Y(B,K),(null!==(_=f.litHtmlVersions)&&void 0!==_?_:f.litHtmlVersions=[]).push("2.7.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,X;class tt extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,n;const o=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==e?void 0:e.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new K(i.insertBefore($(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return T}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.3.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;const nt=((t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new n(s,t,e)})`
  :host {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  p {
    margin: 0;
  }
  .container {
    width: 100%;
    height: 300px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
  }
  .image-container {
    width: 25%;
    height: 100%;
  }
  .image-container img {
    max-width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }
  .hotel-info {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    margin: 10px 20px;
  }
  .display-css {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .m-10 {
    margin: 10px;
  }
  .m-right-left-10 {
    margin-right: 10px;
  }
  .hotel-name {
    color: #006ce4;
  }
  .location-and-map-info a {
    color: #006ce4;
  }
  .distance-from-beach {
    margin: 10px 0;
  }
  .free-cancellation-text {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 10px;
    color: #008234;
  }
  .remaining-rooms-text {
    color: #d4111e;
  }
  .pricing-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
    /* justify-content: flex-end; */
    width: 25%;
  }
  .review-and-rating-badge {
    display: flex;
    justify-content: end;
  }
  .total-review p,
  h3 {
    margin: 0 8px 0 0;
  }
  .rating-badge {
    /* margin: 0 10px; */
  }
  .rating-badge p {
    margin: 0;
    padding: 5px;
    background: #003b95;
    border-radius: 5px;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }
  .price-and-taxes {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    justify-content: flex-end;
  }
  .price-and-taxes p,
  h2 {
    margin: 5px 0;
  }
  .strike-out-price {
    display: flex;
    align-items: center;
  }
  .strike-out-price p {
    margin-right: 5px;
  }
  .see-availability-button {
    width: 70%;
    height: 40px;
    background-color: #006ce4;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: none;
    border: none;
    font-weight: bold;
    text-align: center;
  }
`,ot=[{native_ad_id:"",soldout:0,mobile_discount_percentage:0,cc1:"in",city:"Baga",hotel_id:4575421,hotel_has_vb_boost:0,district_id:0,unit_configuration_label:"<b>Entire apartment – 117 m²</b>: 5 beds • 2 bedrooms • 1 living room • 2 bathrooms",is_no_prepayment_block:0,longitude:73.763933,hotel_include_breakfast:0,cc_required:1,review_score:8.9,distance_to_cc:"1.45",type:"property_card",review_score_word:"Fabulous",address:"Calangute - Arpora Road The eternal wave probo waddo calangute",updated_checkin:null,preferred_plus:1,price_is_final:1,checkin:{until:"23:30",from:"13:00"},main_photo_id:224463704,main_photo_url:"https://cf.bstatic.com/xdata/images/hotel/square250/224463704.jpg?k=d898a8fdbf8e69cbe6f6b9e4d9b8f4af3942432b0b441d2daf023c3181e349ca&o=",native_ads_cpc:0,cant_book:0,block_ids:["457542105_335356040_6_0_0"],districts:"",review_nr:46,matching_units_configuration:{matching_units_common_config:{localized_area:"117",unit_type_id:1}},accommodation_type:201,hotel_name:"Aarju Luxurious Wave",default_language:"xu",hotel_name_trans:"Aarju Luxurious Wave",distance_to_cc_formatted:"1.4 km",zip:"403519",timezone:"Asia/Kolkata",distance:"1.42",is_mobile_deal:0,price_breakdown:{has_incalculable_charges:0,has_tax_exceptions:0,gross_price:"7616.00",has_fine_print_charges:0,currency:"INR",all_inclusive_price:7616,sum_excluded_raw:"0.00"},children_not_allowed:0,default_wishlist_name:"Calangute",distances:[{text:"1.4 km from centre",icon_set:null,icon_name:"bui_geo_pin"},{icon_name:"bui_distance",text:"1.2 km from beach",icon_set:null}],extended:0,currencycode:"INR",is_city_center:0,city_trans:"Calangute",accommodation_type_name:"Apartment",hotel_facilities:"452,471,56,5,17,456,46,468,460,161,222,453,44,14,140,461,160,16,449,454,467,47,305,457,64,425,488,48,163,96,158,181,450,458,462,22,109,418,8,455,107,28,119,301,101,193,419,129,485,127,91,2,423,433,445,424,104,304,436,465",id:"property_card_4575421",url:"https://www.booking.com/hotel/in/aarju-luxurious-stay-wave.html",review_recommendation:"",in_best_district:0,class_is_estimated:0,currency_code:"INR",bwallet:{hotel_eligibility:0},is_beach_front:0,district:"",selected_review_topic:null,min_total_price:7615.99998176098,checkout:{from:"",until:"10:00"},preferred:1,address_trans:"Calangute - Arpora Road The eternal wave probo waddo calangute",city_name_en:"Baga",is_genius_deal:0,badges:[],ufi:-2093662,latitude:15.556296,countrycode:"in",genius_discount_percentage:0,country_trans:"India",updated_checkout:null,city_in_trans:"in Calangute",wishlist_count:0,is_free_cancellable:1,has_swimming_pool:1,class:0,booking_home:{segment:1,is_single_unit_property:"",is_booking_home:1,quality_class:4,group:"apartment_like"},native_ads_tracking:"",composite_price_breakdown:{gross_amount_per_night:{value:7615.99998176098,currency:"INR"},excluded_amount:{value:0,currency:"INR"},all_inclusive_amount:{currency:"INR",value:7615.99998176098},product_price_breakdowns:[{gross_amount_per_night:{value:7615.99998176098,currency:"INR"},all_inclusive_amount:{value:7615.99998176098,currency:"INR"},excluded_amount:{value:0,currency:"INR"},gross_amount_hotel_currency:{currency:"INR",value:7615.99998176098},included_taxes_and_charges_amount:{currency:"INR",value:815.999981760979},items:[{item_amount:{currency:"INR",value:815.999981760979},base:{base_amount:0,kind:"variable_amount"},name:"Goods & services tax",details:"Goods & services tax",inclusion_type:"included",kind:"charge"}],benefits:[],net_amount:{currency:"INR",value:6800},gross_amount:{currency:"INR",value:7615.99998176098}}],items:[{kind:"charge",details:"Goods & services tax",inclusion_type:"included",base:{base_amount:0,kind:"variable_amount"},name:"Goods & services tax",item_amount:{currency:"INR",value:815.999981760979}}],included_taxes_and_charges_amount:{currency:"INR",value:815.999981760979},gross_amount_hotel_currency:{currency:"INR",value:7615.99998176098},benefits:[],net_amount:{currency:"INR",value:6800},gross_amount:{currency:"INR",value:7615.99998176098}},has_free_parking:1,is_geo_rate:"",is_smart_deal:0,max_photo_url:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/224463704.jpg?k=d898a8fdbf8e69cbe6f6b9e4d9b8f4af3942432b0b441d2daf023c3181e349ca&o=",max_1440_photo_url:"https://cf.bstatic.com/xdata/images/hotel/1440x1440/224463704.jpg?k=d898a8fdbf8e69cbe6f6b9e4d9b8f4af3942432b0b441d2daf023c3181e349ca&o="}];var rt=function(t,i,e,s){for(var n,o=arguments.length,r=o<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,e,r):n(i,e))||r);return o>3&&r&&Object.defineProperty(i,e,r),r};let at=class extends tt{constructor(){super(...arguments),this.hotelInfo=ot[0]}render(){return O`
      <div class="container">
        <div class="image-container">
          <img src="${this.hotelInfo.main_photo_url}" alt="" />
        </div>
        <div class="hotel-info">
          <div class="name-and-rating-block display-css">
            <h2 class="hotel-name m-right-left-10">
              ${this.hotelInfo.hotel_name}
            </h2>
            <span class="hotel-rating">4 star</span>
          </div>
          <div class="location-and-map-info display-css">
            <p class="location-info">
              <a href="" class="m-right-left-10"
                >${this.hotelInfo.city_trans}</a
              >
            </p>
            <a class="m-right-left-10" href="">Show on map</a>
            <p>${this.hotelInfo.distances[0].text}</p>
          </div>
          <div class="distance-from-beach">
            <p>${this.hotelInfo.distances[1].text}</p>
          </div>
          <div class="configuration-label">
            <p class="m-right-left-10">
              <strong>${this.hotelInfo.accommodation_type_name}</strong>
            </p>
          </div>
          <div class="unit-configuration-label">
            <p>${this.hotelInfo.unit_configuration_label}</p>
          </div>
          <div class="free-cancellation-text">
            <p><strong>Free Cancellation</strong></p>
            <p>You can cancel later, so lock in this great price today.</p>
            <p class="remaining-rooms-text">
              Only 1 left at this price on our site
            </p>
          </div>
        </div>
        <div class="pricing-container">
          <div class="review-and-rating-badge">
            <div class="total-review">
              <h3>${this.hotelInfo.review_score_word}</h3>
              <p>${this.hotelInfo.review_nr} reviews</p>
            </div>
            <div class="rating-badge">
              <p>${this.hotelInfo.review_score}</p>
            </div>
          </div>
          <div class="price-and-taxes">
            <p>2 nights, 2 adults</p>
            <div class="strike-out-price">
              <p>
                <strike>11,020</strike>
              </p>
              <h2>9,918</h2>
            </div>

            <p>+1,190 taxes and charges</p>
            <button class="see-availability-button">See availability ></button>
          </div>
        </div>
      </div>
      <slot></slot>
    `}};at.styles=nt,rt([function(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):et(t,i)}()],at.prototype,"hotelInfo",void 0),at=rt([(t=>i=>"function"==typeof i?((t,i)=>(customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){customElements.define(t,i)}}})(t,i))("hotel-card")],at);export{at as hotelCard};
