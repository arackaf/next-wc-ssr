if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,o)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),l={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>l[e]||r(e)))).then((e=>(o(...e),c)))}}define(["./workbox-d12a13bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.registerRoute(/shoelace.*\.css/i,new e.CacheFirst({matchOptions:{ignoreVary:!0},cacheName:"shoelace-styles",plugins:[new e.ExpirationPlugin({maxEntries:3,maxAgeSeconds:63072e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/shoelace-bundle.*\.js/i,new e.CacheFirst({matchOptions:{ignoreVary:!0},cacheName:"shoelace-js",plugins:[new e.ExpirationPlugin({maxEntries:3,maxAgeSeconds:63072e3}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
