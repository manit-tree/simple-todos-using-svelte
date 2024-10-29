(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("@layer reset{:root{box-sizing:border-box;-moz-text-size-adjust:none;text-size-adjust:none;line-height:1.4}*,:before,:after{box-sizing:interit}:focus-visible{outline:0}body,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;font-weight:400}img{max-width:100%;height:auto}}@layer base-color{:root{--bg-color:#121212;--text-color:#eee;--primary:#15a6f0;--divider-color:#ffffff26}}html,body{height:100%}#app{color:var(--text-color);background-color:var(--bg-color);place-content:center;width:100%;height:100%;font-family:sans-serif,tahoma;display:grid;position:fixed;top:0;bottom:0;left:0;right:0}main.svelte-14i64sa{flex-direction:column;gap:1em;width:440px;display:flex}main.svelte-14i64sa h1:where(.svelte-14i64sa){align-self:center}main.svelte-14i64sa input[type=text]:where(.svelte-14i64sa){box-sizing:border-box;border:0;border-radius:14px;outline:0;width:100%;padding:.5em 1em}main.svelte-14i64sa ul:where(.svelte-14i64sa){padding:0;list-style:none}main.svelte-14i64sa ul:where(.svelte-14i64sa) li:where(.svelte-14i64sa){border-bottom:1px solid var(--divider-color);justify-content:space-between;padding:.5em 0;display:flex}main.svelte-14i64sa ul:where(.svelte-14i64sa) li:where(.svelte-14i64sa):last-child{border-bottom:0}main.svelte-14i64sa ul:where(.svelte-14i64sa) li:where(.svelte-14i64sa) a:where(.svelte-14i64sa){color:red;text-decoration:none}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const dr=!1;var ge=Array.isArray,ye=Array.from,hr=Object.defineProperty,j=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,wr=Object.prototype,gr=Array.prototype,_e=Object.getPrototypeOf;function yr(e){for(var r=0;r<e.length;r++)e[r]()}const B=2,Be=4,ie=8,Ee=16,A=32,le=64,W=128,ne=256,N=512,q=1024,Z=2048,D=4096,z=8192,Er=16384,Ve=32768,mr=1<<18,xr=1<<19,re=Symbol("$state"),Tr=Symbol("");function br(e){return e===this.v}function Nr(e,r){return e!=e?r==r:e!==r||e!==null&&typeof e=="object"||typeof e=="function"}function kr(e){return!Nr(e,this.v)}function Or(e){throw new Error("effect_in_teardown")}function Ar(){throw new Error("effect_in_unowned_derived")}function Sr(e){throw new Error("effect_orphan")}function Cr(){throw new Error("effect_update_depth_exceeded")}function Dr(){throw new Error("state_descriptors_fixed")}function Ir(){throw new Error("state_prototype_fixed")}function Rr(){throw new Error("state_unsafe_local_read")}function Pr(){throw new Error("state_unsafe_mutation")}function b(e){return{f:0,v:e,reactions:null,equals:br,version:0}}function Mr(e){return Lr(b(e))}function Fr(e,r=!1){var t;const n=b(e);return r||(n.equals=kr),y!==null&&y.l!==null&&((t=y.l).s??(t.s=[])).push(n),n}function Lr(e){return w!==null&&w.f&B&&(O===null?rn([e]):O.push(e)),e}function S(e,r){return w!==null&&Oe()&&w.f&(B|Ee)&&(O===null||!O.includes(e))&&Pr(),He(e,r)}function He(e,r){return e.equals(r)||(e.v=r,e.version=lr(),Ue(e,q),Oe()&&h!==null&&h.f&N&&!(h.f&A)&&(E!==null&&E.includes(e)?(I(h,q),fe(h)):F===null?nn([e]):F.push(e))),r}function Ue(e,r){var n=e.reactions;if(n!==null)for(var t=Oe(),i=n.length,l=0;l<i;l++){var o=n[l],v=o.f;v&q||!t&&o===h||(I(o,r),v&(N|W)&&(v&B?Ue(o,Z):fe(o)))}}const qr=1,Br=2,Vr=16,Hr=2,x=Symbol();let Ur=!1;function L(e,r=null,n){if(typeof e!="object"||e===null||re in e)return e;const t=_e(e);if(t!==wr&&t!==gr)return e;var i=new Map,l=ge(e),o=b(0);l&&i.set("length",b(e.length));var v;return new Proxy(e,{defineProperty(c,u,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Dr();var s=i.get(u);return s===void 0?(s=b(f.value),i.set(u,s)):S(s,L(f.value,v)),!0},deleteProperty(c,u){var f=i.get(u);if(f===void 0)u in c&&i.set(u,b(x));else{if(l&&typeof u=="string"){var s=i.get("length"),a=Number(u);Number.isInteger(a)&&a<s.v&&S(s,a)}S(f,x),Se(o)}return!0},get(c,u,f){var d;if(u===re)return e;var s=i.get(u),a=u in c;if(s===void 0&&(!a||(d=j(c,u))!=null&&d.writable)&&(s=b(L(a?c[u]:x,v)),i.set(u,s)),s!==void 0){var _=C(s);return _===x?void 0:_}return Reflect.get(c,u,f)},getOwnPropertyDescriptor(c,u){var f=Reflect.getOwnPropertyDescriptor(c,u);if(f&&"value"in f){var s=i.get(u);s&&(f.value=C(s))}else if(f===void 0){var a=i.get(u),_=a==null?void 0:a.v;if(a!==void 0&&_!==x)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return f},has(c,u){var _;if(u===re)return!0;var f=i.get(u),s=f!==void 0&&f.v!==x||Reflect.has(c,u);if(f!==void 0||h!==null&&(!s||(_=j(c,u))!=null&&_.writable)){f===void 0&&(f=b(s?L(c[u],v):x),i.set(u,f));var a=C(f);if(a===x)return!1}return s},set(c,u,f,s){var k;var a=i.get(u),_=u in c;if(l&&u==="length")for(var d=f;d<a.v;d+=1){var g=i.get(d+"");g!==void 0?S(g,x):d in c&&(g=b(x),i.set(d+"",g))}a===void 0?(!_||(k=j(c,u))!=null&&k.writable)&&(a=b(void 0),S(a,L(f,v)),i.set(u,a)):(_=a.v!==x,S(a,L(f,v)));var p=Reflect.getOwnPropertyDescriptor(c,u);if(p!=null&&p.set&&p.set.call(s,f),!_){if(l&&typeof u=="string"){var m=i.get("length"),R=Number(u);Number.isInteger(R)&&R>=m.v&&S(m,R+1)}Se(o)}return!0},ownKeys(c){C(o);var u=Reflect.ownKeys(c).filter(a=>{var _=i.get(a);return _===void 0||_.v!==x});for(var[f,s]of i)s.v!==x&&!(f in c)&&u.push(f);return u},setPrototypeOf(){Ir()}})}function Se(e,r=1){S(e,e.v+r)}var Ce,Ye,Ke;function Yr(){if(Ce===void 0){Ce=window;var e=Element.prototype,r=Node.prototype;Ye=j(r,"firstChild").get,Ke=j(r,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function $e(e=""){return document.createTextNode(e)}function We(e){return Ye.call(e)}function me(e){return Ke.call(e)}function ae(e,r){return We(e)}function ce(e,r=1,n=!1){let t=e;for(;r--;)t=me(t);return t}function Kr(e){e.textContent=""}function je(e){var r=e.children;if(r!==null){e.children=null;for(var n=0;n<r.length;n+=1){var t=r[n];t.f&B?xe(t):V(t)}}}function Ge(e){var r,n=h;$(e.parent);try{je(e),r=ur(e)}finally{$(n)}return r}function Xe(e){var r=Ge(e),n=(U||e.f&W)&&e.deps!==null?Z:N;I(e,n),e.equals(r)||(e.v=r,e.version=lr())}function xe(e){je(e),X(e,0),I(e,z),e.v=e.children=e.deps=e.ctx=e.reactions=null}function $r(e){h===null&&w===null&&Sr(),w!==null&&w.f&W&&Ar(),ke&&Or()}function Wr(e,r){var n=r.last;n===null?r.last=r.first=e:(n.next=e,e.prev=n,r.last=e)}function J(e,r,n,t=!0){var i=(e&le)!==0,l=h,o={ctx:y,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|q,first:null,fn:r,last:null,next:null,parent:i?null:l,prev:null,teardown:null,transitions:null,version:0};if(n){var v=Y;try{De(!0),ue(o),o.f|=Er}catch(f){throw V(o),f}finally{De(v)}}else r!==null&&fe(o);var c=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&xr)===0;if(!c&&!i&&t&&(l!==null&&Wr(o,l),w!==null&&w.f&B)){var u=w;(u.children??(u.children=[])).push(o)}return o}function jr(e){$r();var r=h!==null&&(h.f&A)!==0&&y!==null&&!y.m;if(r){var n=y;(n.e??(n.e=[])).push({fn:e,effect:h,reaction:w})}else{var t=Te(e);return t}}function Gr(e){const r=J(le,e,!0);return()=>{V(r)}}function Te(e){return J(Be,e,!1)}function Xr(e){return J(ie,e,!0)}function Zr(e){return Ze(e)}function Ze(e,r=0){return J(ie|Ee|r,e,!0)}function be(e,r=!0){return J(ie|A,e,!0,r)}function ze(e){var r=e.teardown;if(r!==null){const n=ke,t=w;Ie(!0),K(null);try{r.call(null)}finally{Ie(n),K(t)}}}function Je(e){var r=e.deriveds;if(r!==null){e.deriveds=null;for(var n=0;n<r.length;n+=1)xe(r[n])}}function Qe(e,r=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var t=n.next;V(n,r),n=t}}function zr(e){for(var r=e.first;r!==null;){var n=r.next;r.f&A||V(r),r=n}}function V(e,r=!0){var n=!1;if((r||e.f&mr)&&e.nodes_start!==null){for(var t=e.nodes_start,i=e.nodes_end;t!==null;){var l=t===i?null:me(t);t.remove(),t=l}n=!0}Je(e),Qe(e,r&&!n),X(e,0),I(e,z);var o=e.transitions;if(o!==null)for(const c of o)c.stop();ze(e);var v=e.parent;v!==null&&v.first!==null&&er(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function er(e){var r=e.parent,n=e.prev,t=e.next;n!==null&&(n.next=t),t!==null&&(t.prev=n),r!==null&&(r.first===e&&(r.first=t),r.last===e&&(r.last=n))}function Jr(e,r){var n=[];Ne(e,n,!0),rr(n,()=>{V(e),r&&r()})}function rr(e,r){var n=e.length;if(n>0){var t=()=>--n||r();for(var i of e)i.out(t)}else r()}function Ne(e,r,n){if(!(e.f&D)){if(e.f^=D,e.transitions!==null)for(const o of e.transitions)(o.is_global||n)&&r.push(o);for(var t=e.first;t!==null;){var i=t.next,l=(t.f&Ve)!==0||(t.f&A)!==0;Ne(t,r,l?n:!1),t=i}}}function nr(e){tr(e,!0)}function tr(e,r){if(e.f&D){e.f^=D,Q(e)&&ue(e);for(var n=e.first;n!==null;){var t=n.next,i=(n.f&Ve)!==0||(n.f&A)!==0;tr(n,i?r:!1),n=t}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&l.in()}}let de=!1,he=[];function Qr(){de=!1;const e=he.slice();he=[],yr(e)}function en(e){de||(de=!0,queueMicrotask(Qr)),he.push(e)}let te=!1,Y=!1,ke=!1;function De(e){Y=e}function Ie(e){ke=e}let pe=[],G=0;let w=null;function K(e){w=e}let h=null;function $(e){h=e}let O=null;function rn(e){O=e}let E=null,T=0,F=null;function nn(e){F=e}let ir=0,U=!1,y=null;function lr(){return++ir}function Oe(){return y!==null&&y.l===null}function Q(e){var o,v;var r=e.f;if(r&q)return!0;if(r&Z){var n=e.deps,t=(r&W)!==0;if(n!==null){var i;if(r&ne){for(i=0;i<n.length;i++)((o=n[i]).reactions??(o.reactions=[])).push(e);e.f^=ne}for(i=0;i<n.length;i++){var l=n[i];if(Q(l)&&Xe(l),t&&h!==null&&!U&&!((v=l==null?void 0:l.reactions)!=null&&v.includes(e))&&(l.reactions??(l.reactions=[])).push(e),l.version>e.version)return!0}}t||I(e,N)}return!1}function tn(e,r,n){throw e}function ur(e){var a;var r=E,n=T,t=F,i=w,l=U,o=O,v=y,c=e.f;E=null,T=0,F=null,w=c&(A|le)?null:e,U=!Y&&(c&W)!==0,O=null,y=e.ctx;try{var u=(0,e.fn)(),f=e.deps;if(E!==null){var s;if(X(e,T),f!==null&&T>0)for(f.length=T+E.length,s=0;s<E.length;s++)f[T+s]=E[s];else e.deps=f=E;if(!U)for(s=T;s<f.length;s++)((a=f[s]).reactions??(a.reactions=[])).push(e)}else f!==null&&T<f.length&&(X(e,T),f.length=T);return u}finally{E=r,T=n,F=t,w=i,U=l,O=o,y=v}}function ln(e,r){let n=r.reactions;if(n!==null){var t=n.indexOf(e);if(t!==-1){var i=n.length-1;i===0?n=r.reactions=null:(n[t]=n[i],n.pop())}}n===null&&r.f&B&&(E===null||!E.includes(r))&&(I(r,Z),r.f&(W|ne)||(r.f^=ne),X(r,0))}function X(e,r){var n=e.deps;if(n!==null)for(var t=r;t<n.length;t++)ln(e,n[t])}function ue(e){var r=e.f;if(!(r&z)){I(e,N);var n=h;h=e;try{Je(e),r&Ee?zr(e):Qe(e),ze(e);var t=ur(e);e.teardown=typeof t=="function"?t:null,e.version=ir}catch(i){tn(i)}finally{h=n}}}function un(){G>1e3&&(G=0,Cr()),G++}function fn(e){var r=e.length;if(r!==0){un();var n=Y;Y=!0;try{for(var t=0;t<r;t++){var i=e[t];i.f&N||(i.f^=N);var l=[];fr(i,l),sn(l)}}finally{Y=n}}}function sn(e){var r=e.length;if(r!==0)for(var n=0;n<r;n++){var t=e[n];!(t.f&(z|D))&&Q(t)&&(ue(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?er(t):t.fn=null))}}function on(){if(te=!1,G>1001)return;const e=pe;pe=[],fn(e),te||(G=0)}function fe(e){te||(te=!0,queueMicrotask(on));for(var r=e;r.parent!==null;){r=r.parent;var n=r.f;if(n&(le|A)){if(!(n&N))return;r.f^=N}}pe.push(r)}function fr(e,r){var n=e.first,t=[];e:for(;n!==null;){var i=n.f,l=(i&A)!==0,o=l&&(i&N)!==0;if(!o&&!(i&D))if(i&ie){l?n.f^=N:Q(n)&&ue(n);var v=n.first;if(v!==null){n=v;continue}}else i&Be&&t.push(n);var c=n.next;if(c===null){let s=n.parent;for(;s!==null;){if(e===s)break e;var u=s.next;if(u!==null){n=u;continue e}s=s.parent}}n=c}for(var f=0;f<t.length;f++)v=t[f],r.push(v),fr(v,r)}function C(e){var v;var r=e.f,n=(r&B)!==0;if(n&&r&z){var t=Ge(e);return xe(e),t}if(w!==null){O!==null&&O.includes(e)&&Rr();var i=w.deps;E===null&&i!==null&&i[T]===e?T++:E===null?E=[e]:E.push(e),F!==null&&h!==null&&h.f&N&&!(h.f&A)&&F.includes(e)&&(I(h,q),fe(h))}else if(n&&e.deps===null){var l=e,o=l.parent;o!==null&&!((v=o.deriveds)!=null&&v.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return n&&(l=e,Q(l)&&Xe(l)),e.v}function an(e){const r=w;try{return w=null,e()}finally{w=r}}const cn=~(q|Z|N);function I(e,r){e.f=e.f&cn|r}function sr(e,r=!1,n){y={p:y,c:null,e:null,m:!1,s:e,x:null,l:null},r||(y.l={s:null,u:null,r1:[],r2:b(!1)})}function or(e){const r=y;if(r!==null){const o=r.e;if(o!==null){var n=h,t=w;r.e=null;try{for(var i=0;i<o.length;i++){var l=o[i];$(l.effect),K(l.reaction),Te(l.fn)}}finally{$(n),K(t)}}y=r.p,r.m=!0}return{}}const ar=new Set,we=new Set;function vn(e){for(var r=0;r<e.length;r++)ar.add(e[r]);for(var n of we)n(e)}function ee(e){var R;var r=this,n=r.ownerDocument,t=e.type,i=((R=e.composedPath)==null?void 0:R.call(e))||[],l=i[0]||e.target,o=0,v=e.__root;if(v){var c=i.indexOf(v);if(c!==-1&&(r===document||r===window)){e.__root=r;return}var u=i.indexOf(r);if(u===-1)return;c<=u&&(o=c)}if(l=i[o]||e.target,l!==r){hr(e,"currentTarget",{configurable:!0,get(){return l||n}});var f=w,s=h;K(null),$(null);try{for(var a,_=[];l!==null;){var d=l.assignedSlot||l.parentNode||l.host||null;try{var g=l["__"+t];if(g!==void 0&&!l.disabled)if(ge(g)){var[p,...m]=g;p.apply(l,[e,...m])}else g.call(l,e)}catch(k){a?_.push(k):a=k}if(e.cancelBubble||d===r||d===null)break;l=d}if(a){for(let k of _)queueMicrotask(()=>{throw k});throw a}}finally{e.__root=r,delete e.currentTarget,K(f),$(s)}}}function _n(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function dn(e,r){var n=h;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=r)}function cr(e,r){var n=(r&Hr)!==0,t,i=!e.startsWith("<!>");return()=>{t===void 0&&(t=_n(i?e:"<!>"+e),t=We(t));var l=n?document.importNode(t,!0):t.cloneNode(!0);return dn(l,l),l}}function Re(e,r){e!==null&&e.before(r)}const hn=["touchstart","touchmove"];function pn(e){return hn.includes(e)}function wn(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function gn(e,r){return yn(e,r)}const H=new Map;function yn(e,{target:r,anchor:n,props:t={},events:i,context:l,intro:o=!0}){Yr();var v=new Set,c=s=>{for(var a=0;a<s.length;a++){var _=s[a];if(!v.has(_)){v.add(_);var d=pn(_);r.addEventListener(_,ee,{passive:d});var g=H.get(_);g===void 0?(document.addEventListener(_,ee,{passive:d}),H.set(_,1)):H.set(_,g+1)}}};c(ye(ar)),we.add(c);var u=void 0,f=Gr(()=>{var s=n??r.appendChild($e());return be(()=>{if(l){sr({});var a=y;a.c=l}i&&(t.$$events=i),u=e(s,t)||{},l&&or()}),()=>{var d;for(var a of v){r.removeEventListener(a,ee);var _=H.get(a);--_===0?(document.removeEventListener(a,ee),H.delete(a)):H.set(a,_)}we.delete(c),Pe.delete(u),s!==n&&((d=s.parentNode)==null||d.removeChild(s))}});return Pe.set(u,f),u}let Pe=new WeakMap,ve=null;function En(e,r){return r}function mn(e,r,n,t){for(var i=[],l=r.length,o=0;o<l;o++)Ne(r[o].e,i,!0);var v=l>0&&i.length===0&&n!==null;if(v){var c=n.parentNode;Kr(c),c.append(n),t.clear(),M(e,r[0].prev,r[l-1].next)}rr(i,()=>{for(var u=0;u<l;u++){var f=r[u];v||(t.delete(f.k),M(e,f.prev,f.next)),V(f.e,!v)}})}function xn(e,r,n,t,i,l=null){var o=e,v={flags:r,items:new Map,first:null};{var c=e;o=c.appendChild($e())}var u=null,f=!1;Ze(()=>{var s=n(),a=ge(s)?s:s==null?[]:ye(s),_=a.length;f&&_===0||(f=_===0,Tn(a,v,o,i,r,t),l!==null&&(_===0?u?nr(u):u=be(()=>l(o)):u!==null&&Jr(u,()=>{u=null})),n())})}function Tn(e,r,n,t,i,l){var o=e.length,v=r.items,c=r.first,u=c,f,s=null,a=[],_=[],d,g,p,m;for(m=0;m<o;m+=1){if(d=e[m],g=l(d,m),p=v.get(g),p===void 0){var R=u?u.e.nodes_start:n;s=Nn(R,r,s,s===null?r.first:s.next,d,g,m,t,i),v.set(g,s),a=[],_=[],u=s.next;continue}if(bn(p,d,m),p.e.f&D&&nr(p.e),p!==u){if(f!==void 0&&f.has(p)){if(a.length<_.length){var k=_[0],P;s=k.prev;var Ae=a[0],se=a[a.length-1];for(P=0;P<a.length;P+=1)Me(a[P],k,n);for(P=0;P<_.length;P+=1)f.delete(_[P]);M(r,Ae.prev,se.next),M(r,s,Ae),M(r,se,k),u=k,s=se,m-=1,a=[],_=[]}else f.delete(p),Me(p,u,n),M(r,p.prev,p.next),M(r,p,s===null?r.first:s.next),M(r,s,p),s=p;continue}for(a=[],_=[];u!==null&&u.k!==g;)u.e.f&D||(f??(f=new Set)).add(u),_.push(u),u=u.next;if(u===null)continue;p=u}a.push(p),s=p,u=p.next}if(u!==null||f!==void 0){for(var oe=f===void 0?[]:ye(f);u!==null;)u.e.f&D||oe.push(u),u=u.next;var vr=oe.length;if(vr>0){var _r=o===0?n:null;mn(r,oe,_r,v)}}h.first=r.first&&r.first.e,h.last=s&&s.e}function bn(e,r,n,t){He(e.v,r),e.i=n}function Nn(e,r,n,t,i,l,o,v,c){var u=ve;try{var f=(c&qr)!==0,s=(c&Vr)===0,a=f?s?Fr(i):b(i):i,_=c&Br?b(o):o,d={i:_,v:a,k:l,a:null,e:null,prev:n,next:t};return ve=d,d.e=be(()=>v(e,a,_),Ur),d.e.prev=n&&n.e,d.e.next=t&&t.e,n===null?r.first=d:(n.next=d,n.e.next=d.e),t!==null&&(t.prev=d,t.e.prev=d.e),d}finally{ve=u}}function Me(e,r,n){for(var t=e.next?e.next.e.nodes_start:n,i=r?r.e.nodes_start:n,l=e.e.nodes_start;l!==t;){var o=me(l);i.before(l),l=o}}function M(e,r,n){r===null?e.first=n:(r.next=n,r.e.next=n&&n.e),n!==null&&(n.prev=r,n.e.prev=r&&r.e)}function Fe(e,r,n,t){var i=e.__attributes??(e.__attributes={});i[r]!==(i[r]=n)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Tr]=n),n==null?e.removeAttribute(r):typeof n!="string"&&kn(e).includes(r)?e[r]=n:e.setAttribute(r,n))}var Le=new Map;function kn(e){var r=Le.get(e.nodeName);if(r)return r;Le.set(e.nodeName,r=[]);for(var n,t=_e(e),i=Element.prototype;i!==t;){n=pr(t);for(var l in n)n[l].set&&r.push(l);t=_e(t)}return r}function qe(e,r){return e===r||(e==null?void 0:e[re])===r}function On(e={},r,n,t){return Te(()=>{var i,l;return Xr(()=>{i=l,l=[],an(()=>{e!==n(...l)&&(r(e,...l),i&&qe(n(...i),e)&&r(null,...i))})}),()=>{en(()=>{l&&qe(n(...l),e)&&r(null,...l)})}}),e}const An="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(An);function Sn(e,r){e.preventDefault();let t=e.target.closest("li").getAttribute("data-id");S(r,L(C(r).filter(i=>i.id!=t)))}var Cn=cr('<li class="svelte-14i64sa"><span> </span><a class="svelte-14i64sa">x</a></li>'),Dn=cr('<main class="svelte-14i64sa"><h1 class="svelte-14i64sa">Todos</h1> <input type="text" class="svelte-14i64sa"> <ul class="svelte-14i64sa"></ul></main>');function In(e,r){sr(r,!0);let n=0,t,i=Mr(L([{id:(n+=1)-1,title:"Read a Book"},{id:(n+=1)-1,title:"Hang out with friends"},{id:(n+=1)-1,title:"Go to shopping"}]));function l(u){if(u.key=="Enter"){let f=t.value.trim();f&&(C(i).push({id:(n+=1)-1,title:f}),t.value="")}}jr(()=>{console.log("effect executed!"),t.focus()});var o=Dn(),v=ce(ae(o),2);On(v,u=>t=u,()=>t),v.__keydown=l;var c=ce(v,2);xn(c,21,()=>C(i),En,(u,f)=>{var s=Cn(),a=ae(s),_=ae(a),d=ce(a);Fe(d,"href","#"),d.__click=[Sn,i],Zr(()=>{Fe(s,"data-id",C(f).id),wn(_,C(f).title)}),Re(u,s)}),Re(e,o),or()}vn(["keydown","click"]);gn(In,{target:document.getElementById("app")});