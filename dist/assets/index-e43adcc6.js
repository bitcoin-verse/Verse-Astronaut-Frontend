(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function kf(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Qe={},Ai=[],tn=()=>{},Lm=()=>!1,jm=/^on[^a-z]/,Ec=e=>jm.test(e),Rf=e=>e.startsWith("onUpdate:"),ut=Object.assign,Mf=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Wm=Object.prototype.hasOwnProperty,$e=(e,t)=>Wm.call(e,t),Ee=Array.isArray,Ci=e=>_c(e)==="[object Map]",fp=e=>_c(e)==="[object Set]",Pe=e=>typeof e=="function",ft=e=>typeof e=="string",$f=e=>typeof e=="symbol",et=e=>e!==null&&typeof e=="object",dp=e=>et(e)&&Pe(e.then)&&Pe(e.catch),hp=Object.prototype.toString,_c=e=>hp.call(e),zm=e=>_c(e).slice(8,-1),pp=e=>_c(e)==="[object Object]",Nf=e=>ft(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ba=kf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sc=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Hm=/-(\w)/g,En=Sc(e=>e.replace(Hm,(t,n)=>n?n.toUpperCase():"")),Vm=/\B([A-Z])/g,Xi=Sc(e=>e.replace(Vm,"-$1").toLowerCase()),Pc=Sc(e=>e.charAt(0).toUpperCase()+e.slice(1)),El=Sc(e=>e?`on${Pc(e)}`:""),jo=(e,t)=>!Object.is(e,t),ma=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Oa=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},hu=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sd;const pu=()=>Sd||(Sd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uf(e){if(Ee(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=ft(r)?Qm(r):Uf(r);if(o)for(const i in o)t[i]=o[i]}return t}else{if(ft(e))return e;if(et(e))return e}}const qm=/;(?![^(]*\))/g,Gm=/:([^]+)/,Km=/\/\*[^]*?\*\//g;function Qm(e){const t={};return e.replace(Km,"").split(qm).forEach(n=>{if(n){const r=n.split(Gm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ff(e){let t="";if(ft(e))t=e;else if(Ee(e))for(let n=0;n<e.length;n++){const r=Ff(e[n]);r&&(t+=r+" ")}else if(et(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ym=kf(Zm);function gp(e){return!!e||e===""}const ai=e=>ft(e)?e:e==null?"":Ee(e)||et(e)&&(e.toString===hp||!Pe(e.toString))?JSON.stringify(e,wp,2):String(e),wp=(e,t)=>t&&t.__v_isRef?wp(e,t.value):Ci(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:fp(t)?{[`Set(${t.size})`]:[...t.values()]}:et(t)&&!Ee(t)&&!pp(t)?String(t):t;let Gt;class Jm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Gt,!t&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Gt;try{return Gt=this,t()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Xm(e,t=Gt){t&&t.active&&t.effects.push(e)}function e2(){return Gt}const Lf=e=>{const t=new Set(e);return t.w=0,t.n=0,t},bp=e=>(e.w&cr)>0,mp=e=>(e.n&cr)>0,t2=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=cr},n2=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];bp(o)&&!mp(o)?o.delete(e):t[n++]=o,o.w&=~cr,o.n&=~cr}t.length=n}},gu=new WeakMap;let _o=0,cr=1;const wu=30;let Zt;const Nr=Symbol(""),bu=Symbol("");class jf{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xm(this,r)}run(){if(!this.active)return this.fn();let t=Zt,n=or;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Zt,Zt=this,or=!0,cr=1<<++_o,_o<=wu?t2(this):Pd(this),this.fn()}finally{_o<=wu&&n2(this),cr=1<<--_o,Zt=this.parent,or=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Zt===this?this.deferStop=!0:this.active&&(Pd(this),this.onStop&&this.onStop(),this.active=!1)}}function Pd(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let or=!0;const yp=[];function eo(){yp.push(or),or=!1}function to(){const e=yp.pop();or=e===void 0?!0:e}function Bt(e,t,n){if(or&&Zt){let r=gu.get(e);r||gu.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=Lf()),vp(o)}}function vp(e,t){let n=!1;_o<=wu?mp(e)||(e.n|=cr,n=!bp(e)):n=!e.has(Zt),n&&(e.add(Zt),Zt.deps.push(e))}function jn(e,t,n,r,o,i){const s=gu.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(n==="length"&&Ee(e)){const c=Number(r);s.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(s.get(n)),t){case"add":Ee(e)?Nf(n)&&a.push(s.get("length")):(a.push(s.get(Nr)),Ci(e)&&a.push(s.get(bu)));break;case"delete":Ee(e)||(a.push(s.get(Nr)),Ci(e)&&a.push(s.get(bu)));break;case"set":Ci(e)&&a.push(s.get(Nr));break}if(a.length===1)a[0]&&mu(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);mu(Lf(c))}}function mu(e,t){const n=Ee(e)?e:[...e];for(const r of n)r.computed&&Dd(r);for(const r of n)r.computed||Dd(r)}function Dd(e,t){(e!==Zt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const r2=kf("__proto__,__v_isRef,__isVue"),xp=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($f)),i2=Wf(),o2=Wf(!1,!0),s2=Wf(!0),Id=a2();function a2(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Ue(this);for(let i=0,s=this.length;i<s;i++)Bt(r,"get",i+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(Ue)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){eo();const r=Ue(this)[t].apply(this,n);return to(),r}}),e}function c2(e){const t=Ue(this);return Bt(t,"has",e),t.hasOwnProperty(e)}function Wf(e=!1,t=!1){return function(r,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&i===(e?t?E2:Sp:t?_p:Ep).get(r))return r;const s=Ee(r);if(!e){if(s&&$e(Id,o))return Reflect.get(Id,o,i);if(o==="hasOwnProperty")return c2}const a=Reflect.get(r,o,i);return($f(o)?xp.has(o):r2(o))||(e||Bt(r,"get",o),t)?a:yt(a)?s&&Nf(o)?a:a.value:et(a)?e?Dp(a):Rs(a):a}}const l2=Ap(),u2=Ap(!0);function Ap(e=!1){return function(n,r,o,i){let s=n[r];if(Di(s)&&yt(s)&&!yt(o))return!1;if(!e&&(!Ba(o)&&!Di(o)&&(s=Ue(s),o=Ue(o)),!Ee(n)&&yt(s)&&!yt(o)))return s.value=o,!0;const a=Ee(n)&&Nf(r)?Number(r)<n.length:$e(n,r),c=Reflect.set(n,r,o,i);return n===Ue(i)&&(a?jo(o,s)&&jn(n,"set",r,o):jn(n,"add",r,o)),c}}function f2(e,t){const n=$e(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&jn(e,"delete",t,void 0),r}function d2(e,t){const n=Reflect.has(e,t);return(!$f(t)||!xp.has(t))&&Bt(e,"has",t),n}function h2(e){return Bt(e,"iterate",Ee(e)?"length":Nr),Reflect.ownKeys(e)}const Cp={get:i2,set:l2,deleteProperty:f2,has:d2,ownKeys:h2},p2={get:s2,set(e,t){return!0},deleteProperty(e,t){return!0}},g2=ut({},Cp,{get:o2,set:u2}),zf=e=>e,Dc=e=>Reflect.getPrototypeOf(e);function ra(e,t,n=!1,r=!1){e=e.__v_raw;const o=Ue(e),i=Ue(t);n||(t!==i&&Bt(o,"get",t),Bt(o,"get",i));const{has:s}=Dc(o),a=r?zf:n?qf:Wo;if(s.call(o,t))return a(e.get(t));if(s.call(o,i))return a(e.get(i));e!==o&&e.get(t)}function ia(e,t=!1){const n=this.__v_raw,r=Ue(n),o=Ue(e);return t||(e!==o&&Bt(r,"has",e),Bt(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function oa(e,t=!1){return e=e.__v_raw,!t&&Bt(Ue(e),"iterate",Nr),Reflect.get(e,"size",e)}function Td(e){e=Ue(e);const t=Ue(this);return Dc(t).has.call(t,e)||(t.add(e),jn(t,"add",e,e)),this}function Od(e,t){t=Ue(t);const n=Ue(this),{has:r,get:o}=Dc(n);let i=r.call(n,e);i||(e=Ue(e),i=r.call(n,e));const s=o.call(n,e);return n.set(e,t),i?jo(t,s)&&jn(n,"set",e,t):jn(n,"add",e,t),this}function Bd(e){const t=Ue(this),{has:n,get:r}=Dc(t);let o=n.call(t,e);o||(e=Ue(e),o=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return o&&jn(t,"delete",e,void 0),i}function kd(){const e=Ue(this),t=e.size!==0,n=e.clear();return t&&jn(e,"clear",void 0,void 0),n}function sa(e,t){return function(r,o){const i=this,s=i.__v_raw,a=Ue(s),c=t?zf:e?qf:Wo;return!e&&Bt(a,"iterate",Nr),s.forEach((l,u)=>r.call(o,c(l),c(u),i))}}function aa(e,t,n){return function(...r){const o=this.__v_raw,i=Ue(o),s=Ci(i),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,l=o[e](...r),u=n?zf:t?qf:Wo;return!t&&Bt(i,"iterate",c?bu:Nr),{next(){const{value:f,done:g}=l.next();return g?{value:f,done:g}:{value:a?[u(f[0]),u(f[1])]:u(f),done:g}},[Symbol.iterator](){return this}}}}function Zn(e){return function(...t){return e==="delete"?!1:this}}function w2(){const e={get(i){return ra(this,i)},get size(){return oa(this)},has:ia,add:Td,set:Od,delete:Bd,clear:kd,forEach:sa(!1,!1)},t={get(i){return ra(this,i,!1,!0)},get size(){return oa(this)},has:ia,add:Td,set:Od,delete:Bd,clear:kd,forEach:sa(!1,!0)},n={get(i){return ra(this,i,!0)},get size(){return oa(this,!0)},has(i){return ia.call(this,i,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:sa(!0,!1)},r={get(i){return ra(this,i,!0,!0)},get size(){return oa(this,!0)},has(i){return ia.call(this,i,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:sa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=aa(i,!1,!1),n[i]=aa(i,!0,!1),t[i]=aa(i,!1,!0),r[i]=aa(i,!0,!0)}),[e,n,t,r]}const[b2,m2,y2,v2]=w2();function Hf(e,t){const n=t?e?v2:y2:e?m2:b2;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get($e(n,o)&&o in r?n:r,o,i)}const x2={get:Hf(!1,!1)},A2={get:Hf(!1,!0)},C2={get:Hf(!0,!1)},Ep=new WeakMap,_p=new WeakMap,Sp=new WeakMap,E2=new WeakMap;function _2(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function S2(e){return e.__v_skip||!Object.isExtensible(e)?0:_2(zm(e))}function Rs(e){return Di(e)?e:Vf(e,!1,Cp,x2,Ep)}function Pp(e){return Vf(e,!1,g2,A2,_p)}function Dp(e){return Vf(e,!0,p2,C2,Sp)}function Vf(e,t,n,r,o){if(!et(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const s=S2(e);if(s===0)return e;const a=new Proxy(e,s===2?r:n);return o.set(e,a),a}function Ei(e){return Di(e)?Ei(e.__v_raw):!!(e&&e.__v_isReactive)}function Di(e){return!!(e&&e.__v_isReadonly)}function Ba(e){return!!(e&&e.__v_isShallow)}function Ip(e){return Ei(e)||Di(e)}function Ue(e){const t=e&&e.__v_raw;return t?Ue(t):e}function Tp(e){return Oa(e,"__v_skip",!0),e}const Wo=e=>et(e)?Rs(e):e,qf=e=>et(e)?Dp(e):e;function Op(e){or&&Zt&&(e=Ue(e),vp(e.dep||(e.dep=Lf())))}function Bp(e,t){e=Ue(e);const n=e.dep;n&&mu(n)}function yt(e){return!!(e&&e.__v_isRef===!0)}function Kt(e){return kp(e,!1)}function P2(e){return kp(e,!0)}function kp(e,t){return yt(e)?e:new D2(e,t)}class D2{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Ue(t),this._value=n?t:Wo(t)}get value(){return Op(this),this._value}set value(t){const n=this.__v_isShallow||Ba(t)||Di(t);t=n?t:Ue(t),jo(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Wo(t),Bp(this))}}function Ur(e){return yt(e)?e.value:e}const I2={get:(e,t,n)=>Ur(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return yt(o)&&!yt(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Rp(e){return Ei(e)?e:new Proxy(e,I2)}class T2{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new jf(t,()=>{this._dirty||(this._dirty=!0,Bp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=Ue(this);return Op(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function O2(e,t,n=!1){let r,o;const i=Pe(e);return i?(r=e,o=tn):(r=e.get,o=e.set),new T2(r,o,i||!o,n)}function sr(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){Ic(i,t,n)}return o}function nn(e,t,n,r){if(Pe(e)){const i=sr(e,t,n,r);return i&&dp(i)&&i.catch(s=>{Ic(s,t,n)}),i}const o=[];for(let i=0;i<e.length;i++)o.push(nn(e[i],t,n,r));return o}function Ic(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,s,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){sr(c,null,10,[e,s,a]);return}}B2(e,n,o,r)}function B2(e,t,n,r=!0){console.error(e)}let zo=!1,yu=!1;const mt=[];let xn=0;const _i=[];let Nn=null,Or=0;const Mp=Promise.resolve();let Gf=null;function $p(e){const t=Gf||Mp;return e?t.then(this?e.bind(this):e):t}function k2(e){let t=xn+1,n=mt.length;for(;t<n;){const r=t+n>>>1;Ho(mt[r])<e?t=r+1:n=r}return t}function Kf(e){(!mt.length||!mt.includes(e,zo&&e.allowRecurse?xn+1:xn))&&(e.id==null?mt.push(e):mt.splice(k2(e.id),0,e),Np())}function Np(){!zo&&!yu&&(yu=!0,Gf=Mp.then(Fp))}function R2(e){const t=mt.indexOf(e);t>xn&&mt.splice(t,1)}function M2(e){Ee(e)?_i.push(...e):(!Nn||!Nn.includes(e,e.allowRecurse?Or+1:Or))&&_i.push(e),Np()}function Rd(e,t=zo?xn+1:0){for(;t<mt.length;t++){const n=mt[t];n&&n.pre&&(mt.splice(t,1),t--,n())}}function Up(e){if(_i.length){const t=[...new Set(_i)];if(_i.length=0,Nn){Nn.push(...t);return}for(Nn=t,Nn.sort((n,r)=>Ho(n)-Ho(r)),Or=0;Or<Nn.length;Or++)Nn[Or]();Nn=null,Or=0}}const Ho=e=>e.id==null?1/0:e.id,$2=(e,t)=>{const n=Ho(e)-Ho(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Fp(e){yu=!1,zo=!0,mt.sort($2);const t=tn;try{for(xn=0;xn<mt.length;xn++){const n=mt[xn];n&&n.active!==!1&&sr(n,null,14)}}finally{xn=0,mt.length=0,Up(),zo=!1,Gf=null,(mt.length||_i.length)&&Fp()}}function N2(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Qe;let o=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:f,trim:g}=r[u]||Qe;g&&(o=n.map(w=>ft(w)?w.trim():w)),f&&(o=n.map(hu))}let a,c=r[a=El(t)]||r[a=El(En(t))];!c&&i&&(c=r[a=El(Xi(t))]),c&&nn(c,e,6,o);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,nn(l,e,6,o)}}function Lp(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let s={},a=!1;if(!Pe(e)){const c=l=>{const u=Lp(l,t,!0);u&&(a=!0,ut(s,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(et(e)&&r.set(e,null),null):(Ee(i)?i.forEach(c=>s[c]=null):ut(s,i),et(e)&&r.set(e,s),s)}function Tc(e,t){return!e||!Ec(t)?!1:(t=t.slice(2).replace(/Once$/,""),$e(e,t[0].toLowerCase()+t.slice(1))||$e(e,Xi(t))||$e(e,t))}let Wt=null,Oc=null;function ka(e){const t=Wt;return Wt=e,Oc=e&&e.type.__scopeId||null,t}function jp(e){Oc=e}function Wp(){Oc=null}function U2(e,t=Wt,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Vd(-1);const i=ka(t);let s;try{s=e(...o)}finally{ka(i),r._d&&Vd(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function _l(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:i,propsOptions:[s],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:g,setupState:w,ctx:b,inheritAttrs:v}=e;let A,_;const m=ka(e);try{if(n.shapeFlag&4){const x=o||r;A=yn(u.call(x,x,f,i,w,g,b)),_=c}else{const x=t;A=yn(x.length>1?x(i,{attrs:c,slots:a,emit:l}):x(i,null)),_=t.props?c:F2(c)}}catch(x){ko.length=0,Ic(x,e,1),A=vt(zr)}let C=A;if(_&&v!==!1){const x=Object.keys(_),{shapeFlag:E}=C;x.length&&E&7&&(s&&x.some(Rf)&&(_=L2(_,s)),C=Ii(C,_))}return n.dirs&&(C=Ii(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),A=C,ka(m),A}const F2=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ec(n))&&((t||(t={}))[n]=e[n]);return t},L2=(e,t)=>{const n={};for(const r in e)(!Rf(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function j2(e,t,n){const{props:r,children:o,component:i}=e,{props:s,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Md(r,s,l):!!s;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(s[g]!==r[g]&&!Tc(l,g))return!0}}}else return(o||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?Md(r,s,l):!0:!!s;return!1}function Md(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Tc(n,i))return!0}return!1}function W2({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const z2=e=>e.__isSuspense;function H2(e,t){t&&t.pendingBranch?Ee(e)?t.effects.push(...e):t.effects.push(e):M2(e)}const ca={};function ya(e,t,n){return zp(e,t,n)}function zp(e,t,{immediate:n,deep:r,flush:o,onTrack:i,onTrigger:s}=Qe){var a;const c=e2()===((a=pt)==null?void 0:a.scope)?pt:null;let l,u=!1,f=!1;if(yt(e)?(l=()=>e.value,u=Ba(e)):Ei(e)?(l=()=>e,r=!0):Ee(e)?(f=!0,u=e.some(x=>Ei(x)||Ba(x)),l=()=>e.map(x=>{if(yt(x))return x.value;if(Ei(x))return kr(x);if(Pe(x))return sr(x,c,2)})):Pe(e)?t?l=()=>sr(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return g&&g(),nn(e,c,3,[w])}:l=tn,t&&r){const x=l;l=()=>kr(x())}let g,w=x=>{g=m.onStop=()=>{sr(x,c,4)}},b;if(qo)if(w=tn,t?n&&nn(t,c,3,[l(),f?[]:void 0,w]):l(),o==="sync"){const x=F3();b=x.__watcherHandles||(x.__watcherHandles=[])}else return tn;let v=f?new Array(e.length).fill(ca):ca;const A=()=>{if(m.active)if(t){const x=m.run();(r||u||(f?x.some((E,P)=>jo(E,v[P])):jo(x,v)))&&(g&&g(),nn(t,c,3,[x,v===ca?void 0:f&&v[0]===ca?[]:v,w]),v=x)}else m.run()};A.allowRecurse=!!t;let _;o==="sync"?_=A:o==="post"?_=()=>St(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),_=()=>Kf(A));const m=new jf(l,_);t?n?A():v=m.run():o==="post"?St(m.run.bind(m),c&&c.suspense):m.run();const C=()=>{m.stop(),c&&c.scope&&Mf(c.scope.effects,m)};return b&&b.push(C),C}function V2(e,t,n){const r=this.proxy,o=ft(e)?e.includes(".")?Hp(r,e):()=>r[e]:e.bind(r,r);let i;Pe(t)?i=t:(i=t.handler,n=t);const s=pt;Ti(this);const a=zp(o,i.bind(r),n);return s?Ti(s):Fr(),a}function Hp(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function kr(e,t){if(!et(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),yt(e))kr(e.value,t);else if(Ee(e))for(let n=0;n<e.length;n++)kr(e[n],t);else if(fp(e)||Ci(e))e.forEach(n=>{kr(n,t)});else if(pp(e))for(const n in e)kr(e[n],t);return e}function q2(e,t){const n=Wt;if(n===null)return e;const r=$c(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,a,c,l=Qe]=t[i];s&&(Pe(s)&&(s={mounted:s,updated:s}),s.deep&&kr(a),o.push({dir:s,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return e}function Sr(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let s=0;s<o.length;s++){const a=o[s];i&&(a.oldValue=i[s].value);let c=a.dir[r];c&&(eo(),nn(c,n,8,[e.el,a,e,t]),to())}}function Vp(e,t){return Pe(e)?(()=>ut({name:e.name},t,{setup:e}))():e}const va=e=>!!e.type.__asyncLoader,qp=e=>e.type.__isKeepAlive;function G2(e,t){Gp(e,"a",t)}function K2(e,t){Gp(e,"da",t)}function Gp(e,t,n=pt){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Bc(t,r,n),n){let o=n.parent;for(;o&&o.parent;)qp(o.parent.vnode)&&Q2(r,t,n,o),o=o.parent}}function Q2(e,t,n,r){const o=Bc(t,e,r,!0);Kp(()=>{Mf(r[t],o)},n)}function Bc(e,t,n=pt,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;eo(),Ti(n);const a=nn(t,n,e,s);return Fr(),to(),a});return r?o.unshift(i):o.push(i),i}}const qn=e=>(t,n=pt)=>(!qo||e==="sp")&&Bc(e,(...r)=>t(...r),n),Z2=qn("bm"),Y2=qn("m"),J2=qn("bu"),X2=qn("u"),e3=qn("bum"),Kp=qn("um"),t3=qn("sp"),n3=qn("rtg"),r3=qn("rtc");function i3(e,t=pt){Bc("ec",e,t)}const Qp="components";function o3(e,t){return a3(Qp,e,!0,t)||e}const s3=Symbol.for("v-ndc");function a3(e,t,n=!0,r=!1){const o=Wt||pt;if(o){const i=o.type;if(e===Qp){const a=$3(i,!1);if(a&&(a===t||a===En(t)||a===Pc(En(t))))return i}const s=$d(o[e]||i[e],t)||$d(o.appContext[e],t);return!s&&r?i:s}}function $d(e,t){return e&&(e[t]||e[En(t)]||e[Pc(En(t))])}const vu=e=>e?ag(e)?$c(e)||e.proxy:vu(e.parent):null,Bo=ut(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vu(e.parent),$root:e=>vu(e.root),$emit:e=>e.emit,$options:e=>Qf(e),$forceUpdate:e=>e.f||(e.f=()=>Kf(e.update)),$nextTick:e=>e.n||(e.n=$p.bind(e.proxy)),$watch:e=>V2.bind(e)}),Sl=(e,t)=>e!==Qe&&!e.__isScriptSetup&&$e(e,t),c3={get({_:e},t){const{ctx:n,setupState:r,data:o,props:i,accessCache:s,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const w=s[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(Sl(r,t))return s[t]=1,r[t];if(o!==Qe&&$e(o,t))return s[t]=2,o[t];if((l=e.propsOptions[0])&&$e(l,t))return s[t]=3,i[t];if(n!==Qe&&$e(n,t))return s[t]=4,n[t];xu&&(s[t]=0)}}const u=Bo[t];let f,g;if(u)return t==="$attrs"&&Bt(e,"get",t),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==Qe&&$e(n,t))return s[t]=4,n[t];if(g=c.config.globalProperties,$e(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return Sl(o,t)?(o[t]=n,!0):r!==Qe&&$e(r,t)?(r[t]=n,!0):$e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:i}},s){let a;return!!n[s]||e!==Qe&&$e(e,s)||Sl(t,s)||(a=i[0])&&$e(a,s)||$e(r,s)||$e(Bo,s)||$e(o.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Nd(e){return Ee(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let xu=!0;function l3(e){const t=Qf(e),n=e.proxy,r=e.ctx;xu=!1,t.beforeCreate&&Ud(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:s,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:g,beforeUpdate:w,updated:b,activated:v,deactivated:A,beforeDestroy:_,beforeUnmount:m,destroyed:C,unmounted:x,render:E,renderTracked:P,renderTriggered:h,errorCaptured:D,serverPrefetch:$,expose:F,inheritAttrs:z,components:ie,directives:le,filters:we}=t;if(l&&u3(l,r,null),s)for(const Q in s){const te=s[Q];Pe(te)&&(r[Q]=te.bind(n))}if(o){const Q=o.call(n,n);et(Q)&&(e.data=Rs(Q))}if(xu=!0,i)for(const Q in i){const te=i[Q],Be=Pe(te)?te.bind(n,n):Pe(te.get)?te.get.bind(n,n):tn,Ne=!Pe(te)&&Pe(te.set)?te.set.bind(n):tn,ve=Yt({get:Be,set:Ne});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>ve.value,set:me=>ve.value=me})}if(a)for(const Q in a)Zp(a[Q],r,n,Q);if(c){const Q=Pe(c)?c.call(n):c;Reflect.ownKeys(Q).forEach(te=>{xa(te,Q[te])})}u&&Ud(u,e,"c");function oe(Q,te){Ee(te)?te.forEach(Be=>Q(Be.bind(n))):te&&Q(te.bind(n))}if(oe(Z2,f),oe(Y2,g),oe(J2,w),oe(X2,b),oe(G2,v),oe(K2,A),oe(i3,D),oe(r3,P),oe(n3,h),oe(e3,m),oe(Kp,x),oe(t3,$),Ee(F))if(F.length){const Q=e.exposed||(e.exposed={});F.forEach(te=>{Object.defineProperty(Q,te,{get:()=>n[te],set:Be=>n[te]=Be})})}else e.exposed||(e.exposed={});E&&e.render===tn&&(e.render=E),z!=null&&(e.inheritAttrs=z),ie&&(e.components=ie),le&&(e.directives=le)}function u3(e,t,n=tn){Ee(e)&&(e=Au(e));for(const r in e){const o=e[r];let i;et(o)?"default"in o?i=Fn(o.from||r,o.default,!0):i=Fn(o.from||r):i=Fn(o),yt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[r]=i}}function Ud(e,t,n){nn(Ee(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zp(e,t,n,r){const o=r.includes(".")?Hp(n,r):()=>n[r];if(ft(e)){const i=t[e];Pe(i)&&ya(o,i)}else if(Pe(e))ya(o,e.bind(n));else if(et(e))if(Ee(e))e.forEach(i=>Zp(i,t,n,r));else{const i=Pe(e.handler)?e.handler.bind(n):t[e.handler];Pe(i)&&ya(o,i,e)}}function Qf(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,a=i.get(t);let c;return a?c=a:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(l=>Ra(c,l,s,!0)),Ra(c,t,s)),et(t)&&i.set(t,c),c}function Ra(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&Ra(e,i,n,!0),o&&o.forEach(s=>Ra(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const a=f3[s]||n&&n[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const f3={data:Fd,props:Ld,emits:Ld,methods:So,computed:So,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:So,directives:So,watch:h3,provide:Fd,inject:d3};function Fd(e,t){return t?e?function(){return ut(Pe(e)?e.call(this,this):e,Pe(t)?t.call(this,this):t)}:t:e}function d3(e,t){return So(Au(e),Au(t))}function Au(e){if(Ee(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function xt(e,t){return e?[...new Set([].concat(e,t))]:t}function So(e,t){return e?ut(Object.create(null),e,t):t}function Ld(e,t){return e?Ee(e)&&Ee(t)?[...new Set([...e,...t])]:ut(Object.create(null),Nd(e),Nd(t??{})):t}function h3(e,t){if(!e)return t;if(!t)return e;const n=ut(Object.create(null),e);for(const r in t)n[r]=xt(e[r],t[r]);return n}function Yp(){return{app:null,config:{isNativeTag:Lm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p3=0;function g3(e,t){return function(r,o=null){Pe(r)||(r=ut({},r)),o!=null&&!et(o)&&(o=null);const i=Yp(),s=new Set;let a=!1;const c=i.app={_uid:p3++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:L3,get config(){return i.config},set config(l){},use(l,...u){return s.has(l)||(l&&Pe(l.install)?(s.add(l),l.install(c,...u)):Pe(l)&&(s.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const g=vt(r,o);return g.appContext=i,u&&t?t(g,l):e(g,l,f),a=!0,c._container=l,l.__vue_app__=c,$c(g.component)||g.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Ma=c;try{return l()}finally{Ma=null}}};return c}}let Ma=null;function xa(e,t){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[e]=t}}function Fn(e,t,n=!1){const r=pt||Wt;if(r||Ma){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ma._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Pe(t)?t.call(r&&r.proxy):t}}function w3(e,t,n,r=!1){const o={},i={};Oa(i,Rc,1),e.propsDefaults=Object.create(null),Jp(e,t,o,i);for(const s in e.propsOptions[0])s in o||(o[s]=void 0);n?e.props=r?o:Pp(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function b3(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:s}}=e,a=Ue(o),[c]=e.propsOptions;let l=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(Tc(e.emitsOptions,g))continue;const w=t[g];if(c)if($e(i,g))w!==i[g]&&(i[g]=w,l=!0);else{const b=En(g);o[b]=Cu(c,a,b,w,e,!1)}else w!==i[g]&&(i[g]=w,l=!0)}}}else{Jp(e,t,o,i)&&(l=!0);let u;for(const f in a)(!t||!$e(t,f)&&((u=Xi(f))===f||!$e(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(o[f]=Cu(c,a,f,void 0,e,!0)):delete o[f]);if(i!==a)for(const f in i)(!t||!$e(t,f))&&(delete i[f],l=!0)}l&&jn(e,"set","$attrs")}function Jp(e,t,n,r){const[o,i]=e.propsOptions;let s=!1,a;if(t)for(let c in t){if(ba(c))continue;const l=t[c];let u;o&&$e(o,u=En(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Tc(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,s=!0)}if(i){const c=Ue(n),l=a||Qe;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Cu(o,c,f,l[f],e,!$e(l,f))}}return s}function Cu(e,t,n,r,o,i){const s=e[n];if(s!=null){const a=$e(s,"default");if(a&&r===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Pe(c)){const{propsDefaults:l}=o;n in l?r=l[n]:(Ti(o),r=l[n]=c.call(null,t),Fr())}else r=c}s[0]&&(i&&!a?r=!1:s[1]&&(r===""||r===Xi(n))&&(r=!0))}return r}function Xp(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const i=e.props,s={},a=[];let c=!1;if(!Pe(e)){const u=f=>{c=!0;const[g,w]=Xp(f,t,!0);ut(s,g),w&&a.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return et(e)&&r.set(e,Ai),Ai;if(Ee(i))for(let u=0;u<i.length;u++){const f=En(i[u]);jd(f)&&(s[f]=Qe)}else if(i)for(const u in i){const f=En(u);if(jd(f)){const g=i[u],w=s[f]=Ee(g)||Pe(g)?{type:g}:ut({},g);if(w){const b=Hd(Boolean,w.type),v=Hd(String,w.type);w[0]=b>-1,w[1]=v<0||b<v,(b>-1||$e(w,"default"))&&a.push(f)}}}const l=[s,a];return et(e)&&r.set(e,l),l}function jd(e){return e[0]!=="$"}function Wd(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function zd(e,t){return Wd(e)===Wd(t)}function Hd(e,t){return Ee(t)?t.findIndex(n=>zd(n,e)):Pe(t)&&zd(t,e)?0:-1}const eg=e=>e[0]==="_"||e==="$stable",Zf=e=>Ee(e)?e.map(yn):[yn(e)],m3=(e,t,n)=>{if(t._n)return t;const r=U2((...o)=>Zf(t(...o)),n);return r._c=!1,r},tg=(e,t,n)=>{const r=e._ctx;for(const o in e){if(eg(o))continue;const i=e[o];if(Pe(i))t[o]=m3(o,i,r);else if(i!=null){const s=Zf(i);t[o]=()=>s}}},ng=(e,t)=>{const n=Zf(t);e.slots.default=()=>n},y3=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Ue(t),Oa(t,"_",n)):tg(t,e.slots={})}else e.slots={},t&&ng(e,t);Oa(e.slots,Rc,1)},v3=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,s=Qe;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(ut(o,t),!n&&a===1&&delete o._):(i=!t.$stable,tg(t,o)),s=t}else t&&(ng(e,t),s={default:1});if(i)for(const a in o)!eg(a)&&!(a in s)&&delete o[a]};function Eu(e,t,n,r,o=!1){if(Ee(e)){e.forEach((g,w)=>Eu(g,t&&(Ee(t)?t[w]:t),n,r,o));return}if(va(r)&&!o)return;const i=r.shapeFlag&4?$c(r.component)||r.component.proxy:r.el,s=o?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===Qe?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ft(l)?(u[l]=null,$e(f,l)&&(f[l]=null)):yt(l)&&(l.value=null)),Pe(c))sr(c,a,12,[s,u]);else{const g=ft(c),w=yt(c);if(g||w){const b=()=>{if(e.f){const v=g?$e(f,c)?f[c]:u[c]:c.value;o?Ee(v)&&Mf(v,i):Ee(v)?v.includes(i)||v.push(i):g?(u[c]=[i],$e(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else g?(u[c]=s,$e(f,c)&&(f[c]=s)):w&&(c.value=s,e.k&&(u[e.k]=s))};s?(b.id=-1,St(b,n)):b()}}}const St=H2;function x3(e){return A3(e)}function A3(e,t){const n=pu();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:s,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:g,setScopeId:w=tn,insertStaticContent:b}=e,v=(I,T,B,L=null,W=null,V=null,ne=!1,Z=null,G=!!T.dynamicChildren)=>{if(I===T)return;I&&!mo(I,T)&&(L=N(I),me(I,W,V,!0),I=null),T.patchFlag===-2&&(G=!1,T.dynamicChildren=null);const{type:j,ref:J,shapeFlag:X}=T;switch(j){case kc:A(I,T,B,L);break;case zr:_(I,T,B,L);break;case Aa:I==null&&m(T,B,L,ne);break;case Qt:ie(I,T,B,L,W,V,ne,Z,G);break;default:X&1?E(I,T,B,L,W,V,ne,Z,G):X&6?le(I,T,B,L,W,V,ne,Z,G):(X&64||X&128)&&j.process(I,T,B,L,W,V,ne,Z,G,H)}J!=null&&W&&Eu(J,I&&I.ref,V,T||I,!T)},A=(I,T,B,L)=>{if(I==null)r(T.el=a(T.children),B,L);else{const W=T.el=I.el;T.children!==I.children&&l(W,T.children)}},_=(I,T,B,L)=>{I==null?r(T.el=c(T.children||""),B,L):T.el=I.el},m=(I,T,B,L)=>{[I.el,I.anchor]=b(I.children,T,B,L,I.el,I.anchor)},C=({el:I,anchor:T},B,L)=>{let W;for(;I&&I!==T;)W=g(I),r(I,B,L),I=W;r(T,B,L)},x=({el:I,anchor:T})=>{let B;for(;I&&I!==T;)B=g(I),o(I),I=B;o(T)},E=(I,T,B,L,W,V,ne,Z,G)=>{ne=ne||T.type==="svg",I==null?P(T,B,L,W,V,ne,Z,G):$(I,T,W,V,ne,Z,G)},P=(I,T,B,L,W,V,ne,Z)=>{let G,j;const{type:J,props:X,shapeFlag:se,transition:ue,dirs:be}=I;if(G=I.el=s(I.type,V,X&&X.is,X),se&8?u(G,I.children):se&16&&D(I.children,G,null,L,W,V&&J!=="foreignObject",ne,Z),be&&Sr(I,null,L,"created"),h(G,I,I.scopeId,ne,L),X){for(const d in X)d!=="value"&&!ba(d)&&i(G,d,null,X[d],V,I.children,L,W,xe);"value"in X&&i(G,"value",null,X.value),(j=X.onVnodeBeforeMount)&&dn(j,L,I)}be&&Sr(I,null,L,"beforeMount");const y=(!W||W&&!W.pendingBranch)&&ue&&!ue.persisted;y&&ue.beforeEnter(G),r(G,T,B),((j=X&&X.onVnodeMounted)||y||be)&&St(()=>{j&&dn(j,L,I),y&&ue.enter(G),be&&Sr(I,null,L,"mounted")},W)},h=(I,T,B,L,W)=>{if(B&&w(I,B),L)for(let V=0;V<L.length;V++)w(I,L[V]);if(W){let V=W.subTree;if(T===V){const ne=W.vnode;h(I,ne,ne.scopeId,ne.slotScopeIds,W.parent)}}},D=(I,T,B,L,W,V,ne,Z,G=0)=>{for(let j=G;j<I.length;j++){const J=I[j]=Z?Xn(I[j]):yn(I[j]);v(null,J,T,B,L,W,V,ne,Z)}},$=(I,T,B,L,W,V,ne)=>{const Z=T.el=I.el;let{patchFlag:G,dynamicChildren:j,dirs:J}=T;G|=I.patchFlag&16;const X=I.props||Qe,se=T.props||Qe;let ue;B&&Pr(B,!1),(ue=se.onVnodeBeforeUpdate)&&dn(ue,B,T,I),J&&Sr(T,I,B,"beforeUpdate"),B&&Pr(B,!0);const be=W&&T.type!=="foreignObject";if(j?F(I.dynamicChildren,j,Z,B,L,be,V):ne||te(I,T,Z,null,B,L,be,V,!1),G>0){if(G&16)z(Z,T,X,se,B,L,W);else if(G&2&&X.class!==se.class&&i(Z,"class",null,se.class,W),G&4&&i(Z,"style",X.style,se.style,W),G&8){const y=T.dynamicProps;for(let d=0;d<y.length;d++){const p=y[d],S=X[p],O=se[p];(O!==S||p==="value")&&i(Z,p,S,O,W,I.children,B,L,xe)}}G&1&&I.children!==T.children&&u(Z,T.children)}else!ne&&j==null&&z(Z,T,X,se,B,L,W);((ue=se.onVnodeUpdated)||J)&&St(()=>{ue&&dn(ue,B,T,I),J&&Sr(T,I,B,"updated")},L)},F=(I,T,B,L,W,V,ne)=>{for(let Z=0;Z<T.length;Z++){const G=I[Z],j=T[Z],J=G.el&&(G.type===Qt||!mo(G,j)||G.shapeFlag&70)?f(G.el):B;v(G,j,J,null,L,W,V,ne,!0)}},z=(I,T,B,L,W,V,ne)=>{if(B!==L){if(B!==Qe)for(const Z in B)!ba(Z)&&!(Z in L)&&i(I,Z,B[Z],null,ne,T.children,W,V,xe);for(const Z in L){if(ba(Z))continue;const G=L[Z],j=B[Z];G!==j&&Z!=="value"&&i(I,Z,j,G,ne,T.children,W,V,xe)}"value"in L&&i(I,"value",B.value,L.value)}},ie=(I,T,B,L,W,V,ne,Z,G)=>{const j=T.el=I?I.el:a(""),J=T.anchor=I?I.anchor:a("");let{patchFlag:X,dynamicChildren:se,slotScopeIds:ue}=T;ue&&(Z=Z?Z.concat(ue):ue),I==null?(r(j,B,L),r(J,B,L),D(T.children,B,J,W,V,ne,Z,G)):X>0&&X&64&&se&&I.dynamicChildren?(F(I.dynamicChildren,se,B,W,V,ne,Z),(T.key!=null||W&&T===W.subTree)&&rg(I,T,!0)):te(I,T,B,J,W,V,ne,Z,G)},le=(I,T,B,L,W,V,ne,Z,G)=>{T.slotScopeIds=Z,I==null?T.shapeFlag&512?W.ctx.activate(T,B,L,ne,G):we(T,B,L,W,V,ne,G):ge(I,T,G)},we=(I,T,B,L,W,V,ne)=>{const Z=I.component=O3(I,L,W);if(qp(I)&&(Z.ctx.renderer=H),B3(Z),Z.asyncDep){if(W&&W.registerDep(Z,oe),!I.el){const G=Z.subTree=vt(zr);_(null,G,T,B)}return}oe(Z,I,T,B,W,V,ne)},ge=(I,T,B)=>{const L=T.component=I.component;if(j2(I,T,B))if(L.asyncDep&&!L.asyncResolved){Q(L,T,B);return}else L.next=T,R2(L.update),L.update();else T.el=I.el,L.vnode=T},oe=(I,T,B,L,W,V,ne)=>{const Z=()=>{if(I.isMounted){let{next:J,bu:X,u:se,parent:ue,vnode:be}=I,y=J,d;Pr(I,!1),J?(J.el=be.el,Q(I,J,ne)):J=be,X&&ma(X),(d=J.props&&J.props.onVnodeBeforeUpdate)&&dn(d,ue,J,be),Pr(I,!0);const p=_l(I),S=I.subTree;I.subTree=p,v(S,p,f(S.el),N(S),I,W,V),J.el=p.el,y===null&&W2(I,p.el),se&&St(se,W),(d=J.props&&J.props.onVnodeUpdated)&&St(()=>dn(d,ue,J,be),W)}else{let J;const{el:X,props:se}=T,{bm:ue,m:be,parent:y}=I,d=va(T);if(Pr(I,!1),ue&&ma(ue),!d&&(J=se&&se.onVnodeBeforeMount)&&dn(J,y,T),Pr(I,!0),X&&he){const p=()=>{I.subTree=_l(I),he(X,I.subTree,I,W,null)};d?T.type.__asyncLoader().then(()=>!I.isUnmounted&&p()):p()}else{const p=I.subTree=_l(I);v(null,p,B,L,I,W,V),T.el=p.el}if(be&&St(be,W),!d&&(J=se&&se.onVnodeMounted)){const p=T;St(()=>dn(J,y,p),W)}(T.shapeFlag&256||y&&va(y.vnode)&&y.vnode.shapeFlag&256)&&I.a&&St(I.a,W),I.isMounted=!0,T=B=L=null}},G=I.effect=new jf(Z,()=>Kf(j),I.scope),j=I.update=()=>G.run();j.id=I.uid,Pr(I,!0),j()},Q=(I,T,B)=>{T.component=I;const L=I.vnode.props;I.vnode=T,I.next=null,b3(I,T.props,L,B),v3(I,T.children,B),eo(),Rd(),to()},te=(I,T,B,L,W,V,ne,Z,G=!1)=>{const j=I&&I.children,J=I?I.shapeFlag:0,X=T.children,{patchFlag:se,shapeFlag:ue}=T;if(se>0){if(se&128){Ne(j,X,B,L,W,V,ne,Z,G);return}else if(se&256){Be(j,X,B,L,W,V,ne,Z,G);return}}ue&8?(J&16&&xe(j,W,V),X!==j&&u(B,X)):J&16?ue&16?Ne(j,X,B,L,W,V,ne,Z,G):xe(j,W,V,!0):(J&8&&u(B,""),ue&16&&D(X,B,L,W,V,ne,Z,G))},Be=(I,T,B,L,W,V,ne,Z,G)=>{I=I||Ai,T=T||Ai;const j=I.length,J=T.length,X=Math.min(j,J);let se;for(se=0;se<X;se++){const ue=T[se]=G?Xn(T[se]):yn(T[se]);v(I[se],ue,B,null,W,V,ne,Z,G)}j>J?xe(I,W,V,!0,!1,X):D(T,B,L,W,V,ne,Z,G,X)},Ne=(I,T,B,L,W,V,ne,Z,G)=>{let j=0;const J=T.length;let X=I.length-1,se=J-1;for(;j<=X&&j<=se;){const ue=I[j],be=T[j]=G?Xn(T[j]):yn(T[j]);if(mo(ue,be))v(ue,be,B,null,W,V,ne,Z,G);else break;j++}for(;j<=X&&j<=se;){const ue=I[X],be=T[se]=G?Xn(T[se]):yn(T[se]);if(mo(ue,be))v(ue,be,B,null,W,V,ne,Z,G);else break;X--,se--}if(j>X){if(j<=se){const ue=se+1,be=ue<J?T[ue].el:L;for(;j<=se;)v(null,T[j]=G?Xn(T[j]):yn(T[j]),B,be,W,V,ne,Z,G),j++}}else if(j>se)for(;j<=X;)me(I[j],W,V,!0),j++;else{const ue=j,be=j,y=new Map;for(j=be;j<=se;j++){const ye=T[j]=G?Xn(T[j]):yn(T[j]);ye.key!=null&&y.set(ye.key,j)}let d,p=0;const S=se-be+1;let O=!1,k=0;const U=new Array(S);for(j=0;j<S;j++)U[j]=0;for(j=ue;j<=X;j++){const ye=I[j];if(p>=S){me(ye,W,V,!0);continue}let Re;if(ye.key!=null)Re=y.get(ye.key);else for(d=be;d<=se;d++)if(U[d-be]===0&&mo(ye,T[d])){Re=d;break}Re===void 0?me(ye,W,V,!0):(U[Re-be]=j+1,Re>=k?k=Re:O=!0,v(ye,T[Re],B,null,W,V,ne,Z,G),p++)}const pe=O?C3(U):Ai;for(d=pe.length-1,j=S-1;j>=0;j--){const ye=be+j,Re=T[ye],Ke=ye+1<J?T[ye+1].el:L;U[j]===0?v(null,Re,B,Ke,W,V,ne,Z,G):O&&(d<0||j!==pe[d]?ve(Re,B,Ke,2):d--)}}},ve=(I,T,B,L,W=null)=>{const{el:V,type:ne,transition:Z,children:G,shapeFlag:j}=I;if(j&6){ve(I.component.subTree,T,B,L);return}if(j&128){I.suspense.move(T,B,L);return}if(j&64){ne.move(I,T,B,H);return}if(ne===Qt){r(V,T,B);for(let X=0;X<G.length;X++)ve(G[X],T,B,L);r(I.anchor,T,B);return}if(ne===Aa){C(I,T,B);return}if(L!==2&&j&1&&Z)if(L===0)Z.beforeEnter(V),r(V,T,B),St(()=>Z.enter(V),W);else{const{leave:X,delayLeave:se,afterLeave:ue}=Z,be=()=>r(V,T,B),y=()=>{X(V,()=>{be(),ue&&ue()})};se?se(V,be,y):y()}else r(V,T,B)},me=(I,T,B,L=!1,W=!1)=>{const{type:V,props:ne,ref:Z,children:G,dynamicChildren:j,shapeFlag:J,patchFlag:X,dirs:se}=I;if(Z!=null&&Eu(Z,null,B,I,!0),J&256){T.ctx.deactivate(I);return}const ue=J&1&&se,be=!va(I);let y;if(be&&(y=ne&&ne.onVnodeBeforeUnmount)&&dn(y,T,I),J&6)Se(I.component,B,L);else{if(J&128){I.suspense.unmount(B,L);return}ue&&Sr(I,null,T,"beforeUnmount"),J&64?I.type.remove(I,T,B,W,H,L):j&&(V!==Qt||X>0&&X&64)?xe(j,T,B,!1,!0):(V===Qt&&X&384||!W&&J&16)&&xe(G,T,B),L&&ce(I)}(be&&(y=ne&&ne.onVnodeUnmounted)||ue)&&St(()=>{y&&dn(y,T,I),ue&&Sr(I,null,T,"unmounted")},B)},ce=I=>{const{type:T,el:B,anchor:L,transition:W}=I;if(T===Qt){Ae(B,L);return}if(T===Aa){x(I);return}const V=()=>{o(B),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(I.shapeFlag&1&&W&&!W.persisted){const{leave:ne,delayLeave:Z}=W,G=()=>ne(B,V);Z?Z(I.el,V,G):G()}else V()},Ae=(I,T)=>{let B;for(;I!==T;)B=g(I),o(I),I=B;o(T)},Se=(I,T,B)=>{const{bum:L,scope:W,update:V,subTree:ne,um:Z}=I;L&&ma(L),W.stop(),V&&(V.active=!1,me(ne,I,T,B)),Z&&St(Z,T),St(()=>{I.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},xe=(I,T,B,L=!1,W=!1,V=0)=>{for(let ne=V;ne<I.length;ne++)me(I[ne],T,B,L,W)},N=I=>I.shapeFlag&6?N(I.component.subTree):I.shapeFlag&128?I.suspense.next():g(I.anchor||I.el),q=(I,T,B)=>{I==null?T._vnode&&me(T._vnode,null,null,!0):v(T._vnode||null,I,T,null,null,null,B),Rd(),Up(),T._vnode=I},H={p:v,um:me,m:ve,r:ce,mt:we,mc:D,pc:te,pbc:F,n:N,o:e};let Y,he;return t&&([Y,he]=t(H)),{render:q,hydrate:Y,createApp:g3(q,Y)}}function Pr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rg(e,t,n=!1){const r=e.children,o=t.children;if(Ee(r)&&Ee(o))for(let i=0;i<r.length;i++){const s=r[i];let a=o[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=o[i]=Xn(o[i]),a.el=s.el),n||rg(s,a)),a.type===kc&&(a.el=s.el)}}function C3(e){const t=e.slice(),n=[0];let r,o,i,s,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(o=n[n.length-1],e[o]<l){t[r]=o,n.push(r);continue}for(i=0,s=n.length-1;i<s;)a=i+s>>1,e[n[a]]<l?i=a+1:s=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const E3=e=>e.__isTeleport,Qt=Symbol.for("v-fgt"),kc=Symbol.for("v-txt"),zr=Symbol.for("v-cmt"),Aa=Symbol.for("v-stc"),ko=[];let Jt=null;function je(e=!1){ko.push(Jt=e?null:[])}function _3(){ko.pop(),Jt=ko[ko.length-1]||null}let Vo=1;function Vd(e){Vo+=e}function ig(e){return e.dynamicChildren=Vo>0?Jt||Ai:null,_3(),Vo>0&&Jt&&Jt.push(e),e}function He(e,t,n,r,o,i){return ig(K(e,t,n,r,o,i,!0))}function og(e,t,n,r,o){return ig(vt(e,t,n,r,o,!0))}function _u(e){return e?e.__v_isVNode===!0:!1}function mo(e,t){return e.type===t.type&&e.key===t.key}const Rc="__vInternal",sg=({key:e})=>e??null,Ca=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ft(e)||yt(e)||Pe(e)?{i:Wt,r:e,k:t,f:!!n}:e:null);function K(e,t=null,n=null,r=0,o=null,i=e===Qt?0:1,s=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sg(t),ref:t&&Ca(t),scopeId:Oc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Wt};return a?(Yf(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ft(n)?8:16),Vo>0&&!s&&Jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Jt.push(c),c}const vt=S3;function S3(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===s3)&&(e=zr),_u(e)){const a=Ii(e,t,!0);return n&&Yf(a,n),Vo>0&&!i&&Jt&&(a.shapeFlag&6?Jt[Jt.indexOf(e)]=a:Jt.push(a)),a.patchFlag|=-2,a}if(N3(e)&&(e=e.__vccOpts),t){t=P3(t);let{class:a,style:c}=t;a&&!ft(a)&&(t.class=Ff(a)),et(c)&&(Ip(c)&&!Ee(c)&&(c=ut({},c)),t.style=Uf(c))}const s=ft(e)?1:z2(e)?128:E3(e)?64:et(e)?4:Pe(e)?2:0;return K(e,t,n,r,o,s,i,!0)}function P3(e){return e?Ip(e)||Rc in e?ut({},e):e:null}function Ii(e,t,n=!1){const{props:r,ref:o,patchFlag:i,children:s}=e,a=t?D3(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&sg(a),ref:t&&t.ref?n&&o?Ee(o)?o.concat(Ca(t)):[o,Ca(t)]:Ca(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Qt?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ii(e.ssContent),ssFallback:e.ssFallback&&Ii(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function jt(e=" ",t=0){return vt(kc,null,e,t)}function Mc(e,t){const n=vt(Aa,null,e);return n.staticCount=t,n}function Je(e="",t=!1){return t?(je(),og(zr,null,e)):vt(zr,null,e)}function yn(e){return e==null||typeof e=="boolean"?vt(zr):Ee(e)?vt(Qt,null,e.slice()):typeof e=="object"?Xn(e):vt(kc,null,String(e))}function Xn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ii(e)}function Yf(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Ee(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Yf(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Rc in t)?t._ctx=Wt:o===3&&Wt&&(Wt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Pe(t)?(t={default:t,_ctx:Wt},n=32):(t=String(t),r&64?(n=16,t=[jt(t)]):n=8);e.children=t,e.shapeFlag|=n}function D3(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Ff([t.class,r.class]));else if(o==="style")t.style=Uf([t.style,r.style]);else if(Ec(o)){const i=t[o],s=r[o];s&&i!==s&&!(Ee(i)&&i.includes(s))&&(t[o]=i?[].concat(i,s):s)}else o!==""&&(t[o]=r[o])}return t}function dn(e,t,n,r=null){nn(e,t,7,[n,r])}const I3=Yp();let T3=0;function O3(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||I3,i={uid:T3++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xp(r,o),emitsOptions:Lp(r,o),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:r.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=N2.bind(null,i),e.ce&&e.ce(i),i}let pt=null,Jf,ci,qd="__VUE_INSTANCE_SETTERS__";(ci=pu()[qd])||(ci=pu()[qd]=[]),ci.push(e=>pt=e),Jf=e=>{ci.length>1?ci.forEach(t=>t(e)):ci[0](e)};const Ti=e=>{Jf(e),e.scope.on()},Fr=()=>{pt&&pt.scope.off(),Jf(null)};function ag(e){return e.vnode.shapeFlag&4}let qo=!1;function B3(e,t=!1){qo=t;const{props:n,children:r}=e.vnode,o=ag(e);w3(e,n,o,t),y3(e,r);const i=o?k3(e,t):void 0;return qo=!1,i}function k3(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Tp(new Proxy(e.ctx,c3));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?M3(e):null;Ti(e),eo();const i=sr(r,e,0,[e.props,o]);if(to(),Fr(),dp(i)){if(i.then(Fr,Fr),t)return i.then(s=>{Gd(e,s,t)}).catch(s=>{Ic(s,e,0)});e.asyncDep=i}else Gd(e,i,t)}else cg(e,t)}function Gd(e,t,n){Pe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:et(t)&&(e.setupState=Rp(t)),cg(e,n)}let Kd;function cg(e,t,n){const r=e.type;if(!e.render){if(!t&&Kd&&!r.render){const o=r.template||Qf(e).template;if(o){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ut(ut({isCustomElement:i,delimiters:a},s),c);r.render=Kd(o,l)}}e.render=r.render||tn}Ti(e),eo(),l3(e),to(),Fr()}function R3(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Bt(e,"get","$attrs"),t[n]}}))}function M3(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return R3(e)},slots:e.slots,emit:e.emit,expose:t}}function $c(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Rp(Tp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Bo)return Bo[n](e)},has(t,n){return n in t||n in Bo}}))}function $3(e,t=!0){return Pe(e)?e.displayName||e.name:e.name||t&&e.__name}function N3(e){return Pe(e)&&"__vccOpts"in e}const Yt=(e,t)=>O2(e,t,qo);function lg(e,t,n){const r=arguments.length;return r===2?et(t)&&!Ee(t)?_u(t)?vt(e,null,[t]):vt(e,t):vt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_u(n)&&(n=[n]),vt(e,t,n))}const U3=Symbol.for("v-scx"),F3=()=>Fn(U3),L3="3.3.4",j3="http://www.w3.org/2000/svg",Br=typeof document<"u"?document:null,Qd=Br&&Br.createElement("template"),W3={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?Br.createElementNS(j3,e):Br.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>Br.createTextNode(e),createComment:e=>Br.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Br.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,o,i){const s=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Qd.innerHTML=r?`<svg>${e}</svg>`:e;const a=Qd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function z3(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function H3(e,t,n){const r=e.style,o=ft(n);if(n&&!o){if(t&&!ft(t))for(const i in t)n[i]==null&&Su(r,i,"");for(const i in n)Su(r,i,n[i])}else{const i=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Zd=/\s*!important$/;function Su(e,t,n){if(Ee(n))n.forEach(r=>Su(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=V3(e,t);Zd.test(n)?e.setProperty(Xi(r),n.replace(Zd,""),"important"):e[r]=n}}const Yd=["Webkit","Moz","ms"],Pl={};function V3(e,t){const n=Pl[t];if(n)return n;let r=En(t);if(r!=="filter"&&r in e)return Pl[t]=r;r=Pc(r);for(let o=0;o<Yd.length;o++){const i=Yd[o]+r;if(i in e)return Pl[t]=i}return t}const Jd="http://www.w3.org/1999/xlink";function q3(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Jd,t.slice(6,t.length)):e.setAttributeNS(Jd,t,n);else{const i=Ym(t);n==null||i&&!gp(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function G3(e,t,n,r,o,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,o,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=gp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function hi(e,t,n,r){e.addEventListener(t,n,r)}function K3(e,t,n,r){e.removeEventListener(t,n,r)}function Q3(e,t,n,r,o=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[a,c]=Z3(t);if(r){const l=i[t]=X3(r,o);hi(e,a,l,c)}else s&&(K3(e,a,s,c),i[t]=void 0)}}const Xd=/(?:Once|Passive|Capture)$/;function Z3(e){let t;if(Xd.test(e)){t={};let r;for(;r=e.match(Xd);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xi(e.slice(2)),t]}let Dl=0;const Y3=Promise.resolve(),J3=()=>Dl||(Y3.then(()=>Dl=0),Dl=Date.now());function X3(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;nn(e5(r,n.value),t,5,[r])};return n.value=e,n.attached=J3(),n}function e5(e,t){if(Ee(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const eh=/^on[a-z]/,t5=(e,t,n,r,o=!1,i,s,a,c)=>{t==="class"?z3(e,r,o):t==="style"?H3(e,n,r):Ec(t)?Rf(t)||Q3(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):n5(e,t,r,o))?G3(e,t,r,i,s,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),q3(e,t,r,o))};function n5(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&eh.test(t)&&Pe(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||eh.test(t)&&ft(n)?!1:t in e}const th=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Ee(t)?n=>ma(t,n):t};function r5(e){e.target.composing=!0}function nh(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const i5={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=th(o);const i=r||o.props&&o.props.type==="number";hi(e,t?"change":"input",s=>{if(s.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=hu(a)),e._assign(a)}),n&&hi(e,"change",()=>{e.value=e.value.trim()}),t||(hi(e,"compositionstart",r5),hi(e,"compositionend",nh),hi(e,"change",nh))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},i){if(e._assign=th(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&hu(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},o5=ut({patchProp:t5},W3);let rh;function s5(){return rh||(rh=x3(o5))}const a5=(...e)=>{const t=s5().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=c5(r);if(!o)return;const i=t._component;!Pe(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t};function c5(e){return ft(e)?document.querySelector(e):e}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const pi=typeof window<"u";function l5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Le=Object.assign;function Il(e,t){const n={};for(const r in t){const o=t[r];n[r]=on(o)?o.map(e):e(o)}return n}const Ro=()=>{},on=Array.isArray,u5=/\/$/,f5=e=>e.replace(u5,"");function Tl(e,t,n="/"){let r,o={},i="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),o=e(i)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=g5(r??t,n),{fullPath:r+(i&&"?")+i+s,path:r,query:o,hash:s}}function d5(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ih(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function h5(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Oi(t.matched[r],n.matched[o])&&ug(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Oi(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ug(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!p5(e[n],t[n]))return!1;return!0}function p5(e,t){return on(e)?oh(e,t):on(t)?oh(t,e):e===t}function oh(e,t){return on(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function g5(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let i=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Go;(function(e){e.pop="pop",e.push="push"})(Go||(Go={}));var Mo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Mo||(Mo={}));function w5(e){if(!e)if(pi){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),f5(e)}const b5=/^[^#]+#/;function m5(e,t){return e.replace(b5,"#")+t}function y5(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Nc=()=>({left:window.pageXOffset,top:window.pageYOffset});function v5(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=y5(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function sh(e,t){return(history.state?history.state.position-t:-1)+e}const Pu=new Map;function x5(e,t){Pu.set(e,t)}function A5(e){const t=Pu.get(e);return Pu.delete(e),t}let C5=()=>location.protocol+"//"+location.host;function fg(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,c=o.slice(a);return c[0]!=="/"&&(c="/"+c),ih(c,"")}return ih(n,e)+r+o}function E5(e,t,n,r){let o=[],i=[],s=null;const a=({state:g})=>{const w=fg(e,location),b=n.value,v=t.value;let A=0;if(g){if(n.value=w,t.value=g,s&&s===b){s=null;return}A=v?g.position-v.position:0}else r(w);o.forEach(_=>{_(n.value,b,{delta:A,type:Go.pop,direction:A?A>0?Mo.forward:Mo.back:Mo.unknown})})};function c(){s=n.value}function l(g){o.push(g);const w=()=>{const b=o.indexOf(g);b>-1&&o.splice(b,1)};return i.push(w),w}function u(){const{history:g}=window;g.state&&g.replaceState(Le({},g.state,{scroll:Nc()}),"")}function f(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function ah(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Nc():null}}function _5(e){const{history:t,location:n}=window,r={value:fg(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:C5()+e+c;try{t[u?"replaceState":"pushState"](l,"",g),o.value=l}catch(w){console.error(w),n[u?"replace":"assign"](g)}}function s(c,l){const u=Le({},t.state,ah(o.value.back,c,o.value.forward,!0),l,{position:o.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Le({},o.value,t.state,{forward:c,scroll:Nc()});i(u.current,u,!0);const f=Le({},ah(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:o,push:a,replace:s}}function S5(e){e=w5(e);const t=_5(e),n=E5(e,t.state,t.location,t.replace);function r(i,s=!0){s||n.pauseListeners(),history.go(i)}const o=Le({location:"",base:e,go:r,createHref:m5.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function P5(e){return typeof e=="string"||e&&typeof e=="object"}function dg(e){return typeof e=="string"||typeof e=="symbol"}const Yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hg=Symbol("");var ch;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ch||(ch={}));function Bi(e,t){return Le(new Error,{type:e,[hg]:!0},t)}function Rn(e,t){return e instanceof Error&&hg in e&&(t==null||!!(e.type&t))}const lh="[^/]+?",D5={sensitive:!1,strict:!1,start:!0,end:!0},I5=/[.+*?^${}()[\]/\\]/g;function T5(e,t){const n=Le({},D5,t),r=[];let o=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let f=0;f<l.length;f++){const g=l[f];let w=40+(n.sensitive?.25:0);if(g.type===0)f||(o+="/"),o+=g.value.replace(I5,"\\$&"),w+=40;else if(g.type===1){const{value:b,repeatable:v,optional:A,regexp:_}=g;i.push({name:b,repeatable:v,optional:A});const m=_||lh;if(m!==lh){w+=10;try{new RegExp(`(${m})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${b}" (${m}): `+x.message)}}let C=v?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;f||(C=A&&l.length<2?`(?:/${C})`:"/"+C),A&&(C+="?"),o+=C,w+=20,A&&(w+=-8),v&&(w+=-20),m===".*"&&(w+=-50)}u.push(w)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(l){const u=l.match(s),f={};if(!u)return null;for(let g=1;g<u.length;g++){const w=u[g]||"",b=i[g-1];f[b.name]=w&&b.repeatable?w.split("/"):w}return f}function c(l){let u="",f=!1;for(const g of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const w of g)if(w.type===0)u+=w.value;else if(w.type===1){const{value:b,repeatable:v,optional:A}=w,_=b in l?l[b]:"";if(on(_)&&!v)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const m=on(_)?_.join("/"):_;if(!m)if(A)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=m}}return u||"/"}return{re:s,score:r,keys:i,parse:a,stringify:c}}function O5(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function B5(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=O5(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(uh(r))return 1;if(uh(o))return-1}return o.length-r.length}function uh(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const k5={type:0,value:""},R5=/[a-zA-Z0-9_]/;function M5(e){if(!e)return[[]];if(e==="/")return[[k5]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(w){throw new Error(`ERR (${n})/"${l}": ${w}`)}let n=0,r=n;const o=[];let i;function s(){i&&o.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function g(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),s()):c===":"?(f(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:R5.test(c)?g():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),s(),o}function $5(e,t,n){const r=T5(M5(e.path),n),o=Le(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function N5(e,t){const n=[],r=new Map;t=hh({strict:!1,end:!0,sensitive:!1},t);function o(u){return r.get(u)}function i(u,f,g){const w=!g,b=U5(u);b.aliasOf=g&&g.record;const v=hh(t,u),A=[b];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of C)A.push(Le({},b,{components:g?g.record.components:b.components,path:x,aliasOf:g?g.record:b}))}let _,m;for(const C of A){const{path:x}=C;if(f&&x[0]!=="/"){const E=f.record.path,P=E[E.length-1]==="/"?"":"/";C.path=f.record.path+(x&&P+x)}if(_=$5(C,f,v),g?g.alias.push(_):(m=m||_,m!==_&&m.alias.push(_),w&&u.name&&!dh(_)&&s(u.name)),b.children){const E=b.children;for(let P=0;P<E.length;P++)i(E[P],_,g&&g.children[P])}g=g||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&c(_)}return m?()=>{s(m)}:Ro}function s(u){if(dg(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(s),f.alias.forEach(s))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&B5(u,n[f])>=0&&(u.record.path!==n[f].record.path||!pg(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!dh(u)&&r.set(u.record.name,u)}function l(u,f){let g,w={},b,v;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw Bi(1,{location:u});v=g.record.name,w=Le(fh(f.params,g.keys.filter(m=>!m.optional).map(m=>m.name)),u.params&&fh(u.params,g.keys.map(m=>m.name))),b=g.stringify(w)}else if("path"in u)b=u.path,g=n.find(m=>m.re.test(b)),g&&(w=g.parse(b),v=g.record.name);else{if(g=f.name?r.get(f.name):n.find(m=>m.re.test(f.path)),!g)throw Bi(1,{location:u,currentLocation:f});v=g.record.name,w=Le({},f.params,u.params),b=g.stringify(w)}const A=[];let _=g;for(;_;)A.unshift(_.record),_=_.parent;return{name:v,path:b,params:w,matched:A,meta:L5(A)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function fh(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function U5(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:F5(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function F5(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function dh(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function L5(e){return e.reduce((t,n)=>Le(t,n.meta),{})}function hh(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function pg(e,t){return t.children.some(n=>n===e||pg(e,n))}const gg=/#/g,j5=/&/g,W5=/\//g,z5=/=/g,H5=/\?/g,wg=/\+/g,V5=/%5B/g,q5=/%5D/g,bg=/%5E/g,G5=/%60/g,mg=/%7B/g,K5=/%7C/g,yg=/%7D/g,Q5=/%20/g;function Xf(e){return encodeURI(""+e).replace(K5,"|").replace(V5,"[").replace(q5,"]")}function Z5(e){return Xf(e).replace(mg,"{").replace(yg,"}").replace(bg,"^")}function Du(e){return Xf(e).replace(wg,"%2B").replace(Q5,"+").replace(gg,"%23").replace(j5,"%26").replace(G5,"`").replace(mg,"{").replace(yg,"}").replace(bg,"^")}function Y5(e){return Du(e).replace(z5,"%3D")}function J5(e){return Xf(e).replace(gg,"%23").replace(H5,"%3F")}function X5(e){return e==null?"":J5(e).replace(W5,"%2F")}function $a(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function ey(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(wg," "),s=i.indexOf("="),a=$a(s<0?i:i.slice(0,s)),c=s<0?null:$a(i.slice(s+1));if(a in t){let l=t[a];on(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function ph(e){let t="";for(let n in e){const r=e[n];if(n=Y5(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&Du(i)):[r&&Du(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function ty(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=on(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const ny=Symbol(""),gh=Symbol(""),e0=Symbol(""),vg=Symbol(""),Iu=Symbol("");function yo(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function er(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((s,a)=>{const c=f=>{f===!1?a(Bi(4,{from:n,to:t})):f instanceof Error?a(f):P5(f)?a(Bi(2,{from:t,to:f})):(i&&r.enterCallbacks[o]===i&&typeof f=="function"&&i.push(f),s())},l=e.call(r&&r.instances[o],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Ol(e,t,n,r){const o=[];for(const i of e)for(const s in i.components){let a=i.components[s];if(!(t!=="beforeRouteEnter"&&!i.instances[s]))if(ry(a)){const l=(a.__vccOpts||a)[t];l&&o.push(er(l,n,r,i,s))}else{let c=a();o.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${i.path}"`));const u=l5(l)?l.default:l;i.components[s]=u;const g=(u.__vccOpts||u)[t];return g&&er(g,n,r,i,s)()}))}}return o}function ry(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wh(e){const t=Fn(e0),n=Fn(vg),r=Yt(()=>t.resolve(Ur(e.to))),o=Yt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const g=f.findIndex(Oi.bind(null,u));if(g>-1)return g;const w=bh(c[l-2]);return l>1&&bh(u)===w&&f[f.length-1].path!==w?f.findIndex(Oi.bind(null,c[l-2])):g}),i=Yt(()=>o.value>-1&&ay(n.params,r.value.params)),s=Yt(()=>o.value>-1&&o.value===n.matched.length-1&&ug(n.params,r.value.params));function a(c={}){return sy(c)?t[Ur(e.replace)?"replace":"push"](Ur(e.to)).catch(Ro):Promise.resolve()}return{route:r,href:Yt(()=>r.value.href),isActive:i,isExactActive:s,navigate:a}}const iy=Vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:wh,setup(e,{slots:t}){const n=Rs(wh(e)),{options:r}=Fn(e0),o=Yt(()=>({[mh(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[mh(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:lg("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),oy=iy;function sy(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ay(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!on(o)||o.length!==r.length||r.some((i,s)=>i!==o[s]))return!1}return!0}function bh(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mh=(e,t,n)=>e??t??n,cy=Vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Fn(Iu),o=Yt(()=>e.route||r.value),i=Fn(gh,0),s=Yt(()=>{let l=Ur(i);const{matched:u}=o.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Yt(()=>o.value.matched[s.value]);xa(gh,Yt(()=>s.value+1)),xa(ny,a),xa(Iu,o);const c=Kt();return ya(()=>[c.value,a.value,e.name],([l,u,f],[g,w,b])=>{u&&(u.instances[f]=l,w&&w!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=w.leaveGuards),u.updateGuards.size||(u.updateGuards=w.updateGuards))),l&&u&&(!w||!Oi(u,w)||!g)&&(u.enterCallbacks[f]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=o.value,u=e.name,f=a.value,g=f&&f.components[u];if(!g)return yh(n.default,{Component:g,route:l});const w=f.props[u],b=w?w===!0?l.params:typeof w=="function"?w(l):w:null,A=lg(g,Le({},b,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return yh(n.default,{Component:A,route:l})||A}}});function yh(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const xg=cy;function ly(e){const t=N5(e.routes,e),n=e.parseQuery||ey,r=e.stringifyQuery||ph,o=e.history,i=yo(),s=yo(),a=yo(),c=P2(Yn);let l=Yn;pi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Il.bind(null,N=>""+N),f=Il.bind(null,X5),g=Il.bind(null,$a);function w(N,q){let H,Y;return dg(N)?(H=t.getRecordMatcher(N),Y=q):Y=N,t.addRoute(Y,H)}function b(N){const q=t.getRecordMatcher(N);q&&t.removeRoute(q)}function v(){return t.getRoutes().map(N=>N.record)}function A(N){return!!t.getRecordMatcher(N)}function _(N,q){if(q=Le({},q||c.value),typeof N=="string"){const B=Tl(n,N,q.path),L=t.resolve({path:B.path},q),W=o.createHref(B.fullPath);return Le(B,L,{params:g(L.params),hash:$a(B.hash),redirectedFrom:void 0,href:W})}let H;if("path"in N)H=Le({},N,{path:Tl(n,N.path,q.path).path});else{const B=Le({},N.params);for(const L in B)B[L]==null&&delete B[L];H=Le({},N,{params:f(B)}),q.params=f(q.params)}const Y=t.resolve(H,q),he=N.hash||"";Y.params=u(g(Y.params));const I=d5(r,Le({},N,{hash:Z5(he),path:Y.path})),T=o.createHref(I);return Le({fullPath:I,hash:he,query:r===ph?ty(N.query):N.query||{}},Y,{redirectedFrom:void 0,href:T})}function m(N){return typeof N=="string"?Tl(n,N,c.value.path):Le({},N)}function C(N,q){if(l!==N)return Bi(8,{from:q,to:N})}function x(N){return h(N)}function E(N){return x(Le(m(N),{replace:!0}))}function P(N){const q=N.matched[N.matched.length-1];if(q&&q.redirect){const{redirect:H}=q;let Y=typeof H=="function"?H(N):H;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=m(Y):{path:Y},Y.params={}),Le({query:N.query,hash:N.hash,params:"path"in Y?{}:N.params},Y)}}function h(N,q){const H=l=_(N),Y=c.value,he=N.state,I=N.force,T=N.replace===!0,B=P(H);if(B)return h(Le(m(B),{state:typeof B=="object"?Le({},he,B.state):he,force:I,replace:T}),q||H);const L=H;L.redirectedFrom=q;let W;return!I&&h5(r,Y,H)&&(W=Bi(16,{to:L,from:Y}),ve(Y,Y,!0,!1)),(W?Promise.resolve(W):F(L,Y)).catch(V=>Rn(V)?Rn(V,2)?V:Ne(V):te(V,L,Y)).then(V=>{if(V){if(Rn(V,2))return h(Le({replace:T},m(V.to),{state:typeof V.to=="object"?Le({},he,V.to.state):he,force:I}),q||L)}else V=ie(L,Y,!0,T,he);return z(L,Y,V),V})}function D(N,q){const H=C(N,q);return H?Promise.reject(H):Promise.resolve()}function $(N){const q=Ae.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(N):N()}function F(N,q){let H;const[Y,he,I]=uy(N,q);H=Ol(Y.reverse(),"beforeRouteLeave",N,q);for(const B of Y)B.leaveGuards.forEach(L=>{H.push(er(L,N,q))});const T=D.bind(null,N,q);return H.push(T),xe(H).then(()=>{H=[];for(const B of i.list())H.push(er(B,N,q));return H.push(T),xe(H)}).then(()=>{H=Ol(he,"beforeRouteUpdate",N,q);for(const B of he)B.updateGuards.forEach(L=>{H.push(er(L,N,q))});return H.push(T),xe(H)}).then(()=>{H=[];for(const B of I)if(B.beforeEnter)if(on(B.beforeEnter))for(const L of B.beforeEnter)H.push(er(L,N,q));else H.push(er(B.beforeEnter,N,q));return H.push(T),xe(H)}).then(()=>(N.matched.forEach(B=>B.enterCallbacks={}),H=Ol(I,"beforeRouteEnter",N,q),H.push(T),xe(H))).then(()=>{H=[];for(const B of s.list())H.push(er(B,N,q));return H.push(T),xe(H)}).catch(B=>Rn(B,8)?B:Promise.reject(B))}function z(N,q,H){a.list().forEach(Y=>$(()=>Y(N,q,H)))}function ie(N,q,H,Y,he){const I=C(N,q);if(I)return I;const T=q===Yn,B=pi?history.state:{};H&&(Y||T?o.replace(N.fullPath,Le({scroll:T&&B&&B.scroll},he)):o.push(N.fullPath,he)),c.value=N,ve(N,q,H,T),Ne()}let le;function we(){le||(le=o.listen((N,q,H)=>{if(!Se.listening)return;const Y=_(N),he=P(Y);if(he){h(Le(he,{replace:!0}),Y).catch(Ro);return}l=Y;const I=c.value;pi&&x5(sh(I.fullPath,H.delta),Nc()),F(Y,I).catch(T=>Rn(T,12)?T:Rn(T,2)?(h(T.to,Y).then(B=>{Rn(B,20)&&!H.delta&&H.type===Go.pop&&o.go(-1,!1)}).catch(Ro),Promise.reject()):(H.delta&&o.go(-H.delta,!1),te(T,Y,I))).then(T=>{T=T||ie(Y,I,!1),T&&(H.delta&&!Rn(T,8)?o.go(-H.delta,!1):H.type===Go.pop&&Rn(T,20)&&o.go(-1,!1)),z(Y,I,T)}).catch(Ro)}))}let ge=yo(),oe=yo(),Q;function te(N,q,H){Ne(N);const Y=oe.list();return Y.length?Y.forEach(he=>he(N,q,H)):console.error(N),Promise.reject(N)}function Be(){return Q&&c.value!==Yn?Promise.resolve():new Promise((N,q)=>{ge.add([N,q])})}function Ne(N){return Q||(Q=!N,we(),ge.list().forEach(([q,H])=>N?H(N):q()),ge.reset()),N}function ve(N,q,H,Y){const{scrollBehavior:he}=e;if(!pi||!he)return Promise.resolve();const I=!H&&A5(sh(N.fullPath,0))||(Y||!H)&&history.state&&history.state.scroll||null;return $p().then(()=>he(N,q,I)).then(T=>T&&v5(T)).catch(T=>te(T,N,q))}const me=N=>o.go(N);let ce;const Ae=new Set,Se={currentRoute:c,listening:!0,addRoute:w,removeRoute:b,hasRoute:A,getRoutes:v,resolve:_,options:e,push:x,replace:E,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:i.add,beforeResolve:s.add,afterEach:a.add,onError:oe.add,isReady:Be,install(N){const q=this;N.component("RouterLink",oy),N.component("RouterView",xg),N.config.globalProperties.$router=q,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Ur(c)}),pi&&!ce&&c.value===Yn&&(ce=!0,x(o.location).catch(he=>{}));const H={};for(const he in Yn)Object.defineProperty(H,he,{get:()=>c.value[he],enumerable:!0});N.provide(e0,q),N.provide(vg,Pp(H)),N.provide(Iu,c);const Y=N.unmount;Ae.add(N),N.unmount=function(){Ae.delete(N),Ae.size<1&&(l=Yn,le&&le(),le=null,c.value=Yn,ce=!1,Q=!1),Y()}}};function xe(N){return N.reduce((q,H)=>q.then(()=>$(H)),Promise.resolve())}return Se}function uy(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let s=0;s<i;s++){const a=t.matched[s];a&&(e.matched.find(l=>Oi(l,a))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find(l=>Oi(l,c))||o.push(c))}return[n,r,o]}const fy="1.10.12",dy=e=>e,Uc=e=>e,hy=()=>`viem@${fy}`;class ee extends Error{constructor(t,n={}){var i;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:hy()});const r=n.cause instanceof ee?n.cause.details:(i=n.cause)!=null&&i.message?n.cause.message:n.details,o=n.cause instanceof ee&&n.cause.docsPath||n.docsPath;this.message=[t||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=o,this.metaMessages=n.metaMessages,this.shortMessage=t}walk(t){return Ag(this,t)}}function Ag(e,t){return t!=null&&t(e)?e:e&&typeof e=="object"&&"cause"in e?Ag(e.cause,t):t?null:e}class Tu extends ee{constructor({blockNumber:t,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...t&&r.blockCreated&&r.blockCreated>t?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}let py=class extends ee{constructor({chain:t,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};class gy extends ee{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class Cg extends ee{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}function Eg({chain:e,currentChainId:t}){if(!e)throw new gy;if(t!==e.id)throw new py({chain:e,currentChainId:t})}function t0(e,t={}){const{fees:n=e.fees,formatters:r=e.formatters,serializers:o=e.serializers}=t;return{...e,fees:n,formatters:r,serializers:o}}function no({blockNumber:e,chain:t,contract:n}){var o;const r=(o=t==null?void 0:t.contracts)==null?void 0:o[n];if(!r)throw new Tu({chain:t,contract:{name:n}});if(e&&r.blockCreated&&r.blockCreated>e)throw new Tu({blockNumber:e,chain:t,contract:{name:n,blockCreated:r.blockCreated}});return r.address}class wy extends ee{constructor({max:t,min:n,signed:r,size:o,value:i}){super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class by extends ee{constructor(t){super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class my extends ee{constructor({givenSize:t,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function _n(e,{strict:t=!0}={}){return!e||typeof e!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")}function ot(e){return _n(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function Lr(e,{dir:t="left"}={}){let n=typeof e=="string"?e.replace("0x",""):e,r=0;for(let o=0;o<n.length-1&&n[t==="left"?o:n.length-o-1].toString()==="0";o++)r++;return n=t==="left"?n.slice(r):n.slice(0,n.length-r),typeof e=="string"?(n.length===1&&t==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class _g extends ee{constructor({offset:t,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class Sg extends ee{constructor({size:t,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function ro(e,{dir:t,size:n=32}={}){return typeof e=="string"?ar(e,{dir:t,size:n}):yy(e,{dir:t,size:n})}function ar(e,{dir:t,size:n=32}={}){if(n===null)return e;const r=e.replace("0x","");if(r.length>n*2)throw new Sg({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[t==="right"?"padEnd":"padStart"](n*2,"0")}`}function yy(e,{dir:t,size:n=32}={}){if(n===null)return e;if(e.length>n)throw new Sg({size:e.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let o=0;o<n;o++){const i=t==="right";r[i?o:n-o-1]=e[i?o:e.length-o-1]}return r}const vy=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Gn(e,t={}){return typeof e=="number"||typeof e=="bigint"?De(e,t):typeof e=="string"?n0(e,t):typeof e=="boolean"?Pg(e,t):Ko(e,t)}function Pg(e,t={}){const n=`0x${Number(e)}`;return typeof t.size=="number"?(br(n,{size:t.size}),ro(n,{size:t.size})):n}function Ko(e,t={}){let n="";for(let o=0;o<e.length;o++)n+=vy[e[o]];const r=`0x${n}`;return typeof t.size=="number"?(br(r,{size:t.size}),ro(r,{dir:"right",size:t.size})):r}function De(e,t={}){const{signed:n,size:r}=t,o=BigInt(e);let i;r?n?i=(1n<<BigInt(r)*8n-1n)-1n:i=2n**(BigInt(r)*8n)-1n:typeof e=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof i=="bigint"&&n?-i-1n:0;if(i&&o>i||o<s){const c=typeof e=="bigint"?"n":"";throw new wy({max:i?`${i}${c}`:void 0,min:`${s}${c}`,signed:n,size:r,value:`${e}${c}`})}const a=`0x${(n&&o<0?(1n<<BigInt(r*8))+BigInt(o):o).toString(16)}`;return r?ro(a,{size:r}):a}const xy=new TextEncoder;function n0(e,t={}){const n=xy.encode(e);return Ko(n,t)}const Ay=new TextEncoder;function Hr(e,t={}){return typeof e=="number"||typeof e=="bigint"?Ey(e,t):typeof e=="boolean"?Cy(e,t):_n(e)?r0(e,t):Ln(e,t)}function Cy(e,t={}){const n=new Uint8Array(1);return n[0]=Number(e),typeof t.size=="number"?(br(n,{size:t.size}),ro(n,{size:t.size})):n}function r0(e,t={}){let n=e;t.size&&(br(n,{size:t.size}),n=ro(n,{dir:"right",size:t.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const o=new Uint8Array(r.length/2);for(let i=0;i<o.length;i++){const s=i*2,a=r.slice(s,s+2),c=Number.parseInt(a,16);if(Number.isNaN(c)||c<0)throw new ee(`Invalid byte sequence ("${a}" in "${r}").`);o[i]=c}return o}function Ey(e,t){const n=De(e,t);return r0(n)}function Ln(e,t={}){const n=Ay.encode(e);return typeof t.size=="number"?(br(n,{size:t.size}),ro(n,{dir:"right",size:t.size})):n}function br(e,{size:t}){if(ot(e)>t)throw new my({givenSize:ot(e),maxSize:t})}function Fc(e,t={}){const{signed:n}=t;t.size&&br(e,{size:t.size});const r=BigInt(e);if(!n)return r;const o=(e.length-2)/2,i=(1n<<BigInt(o)*8n-1n)-1n;return r<=i?r:r-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function _y(e,t={}){let n=e;if(t.size&&(br(n,{size:t.size}),n=Lr(n)),Lr(n)==="0x00")return!1;if(Lr(n)==="0x01")return!0;throw new by(n)}function Ct(e,t={}){return Number(Fc(e,t))}function i0(e,t={}){let n=r0(e);return t.size&&(br(n,{size:t.size}),n=Lr(n,{dir:"right"})),new TextDecoder().decode(n)}const Dg={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function Ig(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?Ct(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?Ct(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?Dg[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip2930"&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}function Tg(e){var n;const t=(n=e.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:Ig(r));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}function sn(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}const Sy={"0x0":"reverted","0x1":"success"};function Py(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(t=>sn(t)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Ct(e.transactionIndex):null,status:e.status?Sy[e.status]:null,type:e.type?Dg[e.type]||e.type:null}}const Dy={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Lc(e){return{...e,gas:typeof e.gas<"u"?De(e.gas):void 0,gasPrice:typeof e.gasPrice<"u"?De(e.gasPrice):void 0,maxFeePerGas:typeof e.maxFeePerGas<"u"?De(e.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof e.maxPriorityFeePerGas<"u"?De(e.maxPriorityFeePerGas):void 0,nonce:typeof e.nonce<"u"?De(e.nonce):void 0,type:typeof e.type<"u"?Dy[e.type]:void 0,value:typeof e.value<"u"?De(e.value):void 0}}class Qo extends ee{constructor({address:t}){super(`Address "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}const Iy={gwei:9,wei:18},Ty={ether:-9,wei:9},Oy={ether:-18,gwei:-9};function Na(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[o,i]=[n.slice(0,n.length-t),n.slice(n.length-t)];return i=i.replace(/(0+)$/,""),`${r?"-":""}${o||"0"}${i?`.${i}`:""}`}function Tt(e,t="wei"){return Na(e,Ty[t])}class vi extends ee{constructor({cause:t,message:n}={}){var o;const r=(o=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(vi,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(vi,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Ua extends ee{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Tt(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(Ua,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Ou extends ee{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Tt(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(Ou,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Bu extends ee{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Bu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class ku extends ee{constructor({cause:t,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(ku,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class Ru extends ee{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(Ru,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Mu extends ee{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Mu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class $u extends ee{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty($u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Nu extends ee{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Nu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Uu extends ee{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Uu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class Fa extends ee{constructor({cause:t,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Tt(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Tt(r)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(Fa,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class jc extends ee{constructor({cause:t}){super(`An error occurred while executing: ${t==null?void 0:t.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const By=/^0x[a-fA-F0-9]{40}$/;function ki(e){return By.test(e)}function Wn(e){return typeof e[0]=="string"?o0(e):ky(e)}function ky(e){let t=0;for(const o of e)t+=o.length;const n=new Uint8Array(t);let r=0;for(const o of e)n.set(o,r),r+=o.length;return n}function o0(e){return`0x${e.reduce((t,n)=>t+n.replace("0x",""),"")}`}function s0(e,t="wei"){return Na(e,Iy[t])}function Ms(e){const t=Object.entries(e).map(([r,o])=>o===void 0||o===!1?null:[r,o]).filter(Boolean),n=t.reduce((r,[o])=>Math.max(r,o.length),0);return t.map(([r,o])=>`  ${`${r}:`.padEnd(n+1)}  ${o}`).join(`
`)}class Ry extends ee{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class My extends ee{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Ms(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class $y extends ee{constructor(t,{account:n,docsPath:r,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:g}){const w=Ms({chain:o&&`${o==null?void 0:o.name} (id: ${o==null?void 0:o.id})`,from:n==null?void 0:n.address,to:f,value:typeof g<"u"&&`${s0(g)} ${(o==null?void 0:o.nativeCurrency.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${Tt(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Tt(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Tt(l)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}}class Og extends ee{constructor({blockHash:t,blockNumber:n,blockTag:r,hash:o,index:i}){let s="Transaction";r&&i!==void 0&&(s=`Transaction at block time "${r}" at index "${i}"`),t&&i!==void 0&&(s=`Transaction at block hash "${t}" at index "${i}"`),n&&i!==void 0&&(s=`Transaction at block number "${n}" at index "${i}"`),o&&(s=`Transaction with hash "${o}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class Bg extends ee{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class Ny extends ee{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}function Uy(e){if(e.type)return e.type;if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new My({transaction:e})}const Fy=t0({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Ea=t0({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),kg=t0({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}});var Rg=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},Un=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function La(e){return typeof e=="string"?Number.parseInt(e,e.trim().substring(0,2)==="0x"?16:10):typeof e=="bigint"?Number(e):e}var oI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ly(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Mg(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var $g={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function o(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function i(c,l,u,f,g){if(typeof u!="function")throw new TypeError("The listener must be a function");var w=new o(u,f||c,g),b=n?n+l:l;return c._events[b]?c._events[b].fn?c._events[b]=[c._events[b],w]:c._events[b].push(w):(c._events[b]=w,c._eventsCount++),c}function s(c,l){--c._eventsCount===0?c._events=new r:delete c._events[l]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],u,f;if(this._eventsCount===0)return l;for(f in u=this._events)t.call(u,f)&&l.push(n?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},a.prototype.listeners=function(l){var u=n?n+l:l,f=this._events[u];if(!f)return[];if(f.fn)return[f.fn];for(var g=0,w=f.length,b=new Array(w);g<w;g++)b[g]=f[g].fn;return b},a.prototype.listenerCount=function(l){var u=n?n+l:l,f=this._events[u];return f?f.fn?1:f.length:0},a.prototype.emit=function(l,u,f,g,w,b){var v=n?n+l:l;if(!this._events[v])return!1;var A=this._events[v],_=arguments.length,m,C;if(A.fn){switch(A.once&&this.removeListener(l,A.fn,void 0,!0),_){case 1:return A.fn.call(A.context),!0;case 2:return A.fn.call(A.context,u),!0;case 3:return A.fn.call(A.context,u,f),!0;case 4:return A.fn.call(A.context,u,f,g),!0;case 5:return A.fn.call(A.context,u,f,g,w),!0;case 6:return A.fn.call(A.context,u,f,g,w,b),!0}for(C=1,m=new Array(_-1);C<_;C++)m[C-1]=arguments[C];A.fn.apply(A.context,m)}else{var x=A.length,E;for(C=0;C<x;C++)switch(A[C].once&&this.removeListener(l,A[C].fn,void 0,!0),_){case 1:A[C].fn.call(A[C].context);break;case 2:A[C].fn.call(A[C].context,u);break;case 3:A[C].fn.call(A[C].context,u,f);break;case 4:A[C].fn.call(A[C].context,u,f,g);break;default:if(!m)for(E=1,m=new Array(_-1);E<_;E++)m[E-1]=arguments[E];A[C].fn.apply(A[C].context,m)}}return!0},a.prototype.on=function(l,u,f){return i(this,l,u,f,!1)},a.prototype.once=function(l,u,f){return i(this,l,u,f,!0)},a.prototype.removeListener=function(l,u,f,g){var w=n?n+l:l;if(!this._events[w])return this;if(!u)return s(this,w),this;var b=this._events[w];if(b.fn)b.fn===u&&(!g||b.once)&&(!f||b.context===f)&&s(this,w);else{for(var v=0,A=[],_=b.length;v<_;v++)(b[v].fn!==u||g&&!b[v].once||f&&b[v].context!==f)&&A.push(b[v]);A.length?this._events[w]=A.length===1?A[0]:A:s(this,w)}return this},a.prototype.removeAllListeners=function(l){var u;return l?(u=n?n+l:l,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a})($g);var jy=$g.exports;const Wy=Ly(jy);var a0=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},We=(e,t,n)=>(a0(e,t,"read from private field"),n?n.call(e):t.get(e)),Pt=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Zo=(e,t,n,r)=>(a0(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ct=(e,t,n)=>(a0(e,t,"access private method"),n),c0=class extends Wy{constructor({chains:e=[Ea,Fy],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){const{default:t,...n}=e.blockExplorers??{};if(t)return[t.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}};function mr(e,{includeName:t=!1}={}){if(e.type!=="function"&&e.type!=="event"&&e.type!=="error")throw new tv(e.type);return`${e.name}(${Wc(e.inputs,{includeName:t})})`}function Wc(e,{includeName:t=!1}={}){return e?e.map(n=>zy(n,{includeName:t})).join(t?", ":","):""}function zy(e,{includeName:t}){return e.type.startsWith("tuple")?`(${Wc(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}class Hy extends ee{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class vh extends ee{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l0 extends ee{constructor({data:t,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${Wc(n,{includeName:!0})})`,`Data:   ${t} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=n,this.size=r}}class zc extends ee{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class Vy extends ee{constructor({expectedLength:t,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${t}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class qy extends ee{constructor({expectedSize:t,value:n}){super(`Size of bytes "${n}" (bytes${ot(n)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class Gy extends ee{constructor({expectedLength:t,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class Ng extends ee{constructor(t,{docsPath:n}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}}class Ky extends ee{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class Qy extends ee{constructor(t,{docsPath:n}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class xh extends ee{constructor(t,{docsPath:n}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class ja extends ee{constructor(t,{docsPath:n}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class Zy extends ee{constructor(t,{docsPath:n}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class Yy extends ee{constructor({expectedSize:t,givenSize:n}){super(`Expected bytes${t}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class Vr extends ee{constructor({abiItem:t,data:n,params:r,size:o}){super([`Data size of ${o} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${Wc(r,{includeName:!0})})`,`Data:   ${n} (${o} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=n,this.params=r,this.size=o}}class io extends ee{constructor({abiItem:t,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${mr(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}}class Jy extends ee{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class Xy extends ee{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class ev extends ee{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class tv extends ee{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class nv extends ee{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}const rv=/((function|event)\s)?(.*)(\((.*)\))/;function Ug(e){const t=e.match(rv),n=(t==null?void 0:t[2])||void 0,r=t==null?void 0:t[3],o=(t==null?void 0:t[5])||void 0;return{type:n,name:r,params:o}}function iv(e){return Ug(e).name}function ov(e){const t=Ug(e).params,n=t==null?void 0:t.split(",").map(r=>r.trim().split(" "));return n==null?void 0:n.map(r=>({type:r[0],name:r[1]==="indexed"?r[2]:r[1],...r[1]==="indexed"?{indexed:!0}:{}}))}function Ah(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function Fg(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function Ch(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function sv(e,t){Fg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const la=BigInt(2**32-1),Eh=BigInt(32);function av(e,t=!1){return t?{h:Number(e&la),l:Number(e>>Eh&la)}:{h:Number(e>>Eh&la)|0,l:Number(e&la)|0}}function cv(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let o=0;o<e.length;o++){const{h:i,l:s}=av(e[o],t);[n[o],r[o]]=[i,s]}return[n,r]}const lv=(e,t,n)=>e<<n|t>>>32-n,uv=(e,t,n)=>t<<n|e>>>32-n,fv=(e,t,n)=>t<<n-32|e>>>64-n,dv=(e,t,n)=>e<<n-32|t>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const hv=e=>e instanceof Uint8Array,pv=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gv=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!gv)throw new Error("Non little-endian hardware is not supported");function wv(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function Lg(e){if(typeof e=="string"&&(e=wv(e)),!hv(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}class bv{clone(){return this._cloneInto()}}function mv(e){const t=r=>e().update(Lg(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}const[jg,Wg,zg]=[[],[],[]],yv=BigInt(0),vo=BigInt(1),vv=BigInt(2),xv=BigInt(7),Av=BigInt(256),Cv=BigInt(113);for(let e=0,t=vo,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],jg.push(2*(5*r+n)),Wg.push((e+1)*(e+2)/2%64);let o=yv;for(let i=0;i<7;i++)t=(t<<vo^(t>>xv)*Cv)%Av,t&vv&&(o^=vo<<(vo<<BigInt(i))-vo);zg.push(o)}const[Ev,_v]=cv(zg,!0),_h=(e,t,n)=>n>32?fv(e,t,n):lv(e,t,n),Sh=(e,t,n)=>n>32?dv(e,t,n):uv(e,t,n);function Sv(e,t=24){const n=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let s=0;s<10;s++)n[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,l=n[c],u=n[c+1],f=_h(l,u,1)^n[a],g=Sh(l,u,1)^n[a+1];for(let w=0;w<50;w+=10)e[s+w]^=f,e[s+w+1]^=g}let o=e[2],i=e[3];for(let s=0;s<24;s++){const a=Wg[s],c=_h(o,i,a),l=Sh(o,i,a),u=jg[s];o=e[u],i=e[u+1],e[u]=c,e[u+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=e[s+a];for(let a=0;a<10;a++)e[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}e[0]^=Ev[r],e[1]^=_v[r]}n.fill(0)}class u0 extends bv{constructor(t,n,r,o=!1,i=24){if(super(),this.blockLen=t,this.suffix=n,this.outputLen=r,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Ah(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=pv(this.state)}keccak(){Sv(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){Ch(this);const{blockLen:n,state:r}=this;t=Lg(t);const o=t.length;for(let i=0;i<o;){const s=Math.min(n-this.pos,o-i);for(let a=0;a<s;a++)r[this.pos++]^=t[i++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:n,pos:r,blockLen:o}=this;t[r]^=n,n&128&&r===o-1&&this.keccak(),t[o-1]^=128,this.keccak()}writeInto(t){Ch(this,!1),Fg(t),this.finish();const n=this.state,{blockLen:r}=this;for(let o=0,i=t.length;o<i;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,i-o);t.set(n.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Ah(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(sv(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:n,suffix:r,outputLen:o,rounds:i,enableXOF:s}=this;return t||(t=new u0(n,r,o,s,i)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=i,t.suffix=r,t.outputLen=o,t.enableXOF=s,t.destroyed=this.destroyed,t}}const Pv=(e,t,n)=>mv(()=>new u0(t,e,n)),Dv=Pv(1,136,256/8);function Dt(e,t){const n=t||"hex",r=Dv(_n(e,{strict:!1})?Hr(e):e);return n==="bytes"?r:Gn(r)}const Hg=e=>Dt(Hr(e));function Vg(e){const t=iv(e),n=ov(e)||[];return Hg(`${t}(${n.map(({type:r})=>r).join(",")})`)}function qg(e){return Hg(mr(e))}const f0=e=>typeof e=="string"?Vg(e):qg(e);function rt(e,t,n,{strict:r}={}){return _n(e,{strict:!1})?Tv(e,t,n,{strict:r}):Iv(e,t,n,{strict:r})}function Gg(e,t){if(typeof t=="number"&&t>0&&t>ot(e)-1)throw new _g({offset:t,position:"start",size:ot(e)})}function Kg(e,t,n){if(typeof t=="number"&&typeof n=="number"&&ot(e)!==n-t)throw new _g({offset:n,position:"end",size:ot(e)})}function Iv(e,t,n,{strict:r}={}){Gg(e,t);const o=e.slice(t,n);return r&&Kg(o,t,n),o}function Tv(e,t,n,{strict:r}={}){Gg(e,t);const o=`0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;return r&&Kg(o,t,n),o}function $s(e,t){if(e.length!==t.length)throw new Gy({expectedLength:e.length,givenLength:t.length});const n=Ov({params:e,values:t}),r=h0(n);return r.length===0?"0x":r}function Ov({params:e,values:t}){const n=[];for(let r=0;r<e.length;r++)n.push(d0({param:e[r],value:t[r]}));return n}function d0({param:e,value:t}){const n=Hc(e.type);if(n){const[r,o]=n;return kv(t,{length:r,param:{...e,type:o}})}if(e.type==="tuple")return Uv(t,{param:e});if(e.type==="address")return Bv(t);if(e.type==="bool")return Mv(t);if(e.type.startsWith("uint")||e.type.startsWith("int")){const r=e.type.startsWith("int");return $v(t,{signed:r})}if(e.type.startsWith("bytes"))return Rv(t,{param:e});if(e.type==="string")return Nv(t);throw new Jy(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function h0(e){let t=0;for(let i=0;i<e.length;i++){const{dynamic:s,encoded:a}=e[i];s?t+=32:t+=ot(a)}const n=[],r=[];let o=0;for(let i=0;i<e.length;i++){const{dynamic:s,encoded:a}=e[i];s?(n.push(De(t+o,{size:32})),r.push(a),o+=ot(a)):n.push(a)}return Wn([...n,...r])}function Bv(e){if(!ki(e))throw new Qo({address:e});return{dynamic:!1,encoded:ar(e.toLowerCase())}}function kv(e,{length:t,param:n}){const r=t===null;if(!Array.isArray(e))throw new ev(e);if(!r&&e.length!==t)throw new Vy({expectedLength:t,givenLength:e.length,type:`${n.type}[${t}]`});let o=!1;const i=[];for(let s=0;s<e.length;s++){const a=d0({param:n,value:e[s]});a.dynamic&&(o=!0),i.push(a)}if(r||o){const s=h0(i);if(r){const a=De(i.length,{size:32});return{dynamic:!0,encoded:i.length>0?Wn([a,s]):a}}if(o)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:Wn(i.map(({encoded:s})=>s))}}function Rv(e,{param:t}){const[,n]=t.type.split("bytes"),r=ot(e);if(!n){let o=e;return r%32!==0&&(o=ar(o,{dir:"right",size:Math.ceil((e.length-2)/2/32)*32})),{dynamic:!0,encoded:Wn([ar(De(r,{size:32})),o])}}if(r!==parseInt(n))throw new qy({expectedSize:parseInt(n),value:e});return{dynamic:!1,encoded:ar(e,{dir:"right"})}}function Mv(e){return{dynamic:!1,encoded:ar(Pg(e))}}function $v(e,{signed:t}){return{dynamic:!1,encoded:De(e,{size:32,signed:t})}}function Nv(e){const t=n0(e),n=Math.ceil(ot(t)/32),r=[];for(let o=0;o<n;o++)r.push(ar(rt(t,o*32,(o+1)*32),{dir:"right"}));return{dynamic:!0,encoded:Wn([ar(De(ot(t),{size:32})),...r])}}function Uv(e,{param:t}){let n=!1;const r=[];for(let o=0;o<t.components.length;o++){const i=t.components[o],s=Array.isArray(e)?o:i.name,a=d0({param:i,value:e[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?h0(r):Wn(r.map(({encoded:o})=>o))}}function Hc(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}const p0=e=>rt(typeof e=="string"?Vg(e):qg(e),0,4);function Ns({abi:e,args:t=[],name:n}){const r=_n(n,{strict:!1}),o=e.filter(i=>r?i.type==="function"?p0(i)===n:i.type==="event"?f0(i)===n:!1:"name"in i&&i.name===n);if(o.length!==0){if(o.length===1)return o[0];for(const i of o){if(!("inputs"in i))continue;if(!t||t.length===0){if(!i.inputs||i.inputs.length===0)return i;continue}if(!i.inputs||i.inputs.length===0||i.inputs.length!==t.length)continue;if(t.every((a,c)=>{const l="inputs"in i&&i.inputs[c];return l?Fu(a,l):!1}))return i}return o[0]}}function Fu(e,t){const n=typeof e,r=t.type;switch(r){case"address":return ki(e);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in t?Object.values(t.components).every((o,i)=>Fu(Object.values(e)[i],o)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(o=>Fu(o,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Us({abi:e,eventName:t,args:n}){var a;let r=e[0];if(t&&(r=Ns({abi:e,args:n,name:t}),!r))throw new xh(t,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new xh(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const o=mr(r),i=f0(o);let s=[];if(n&&"inputs"in r){const c=(a=r.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),l=Array.isArray(n)?n:Object.values(n).length>0?(c==null?void 0:c.map(u=>n[u.name]))??[]:[];l.length>0&&(s=(c==null?void 0:c.map((u,f)=>Array.isArray(l[f])?l[f].map((g,w)=>Ph({param:u,value:l[f][w]})):l[f]?Ph({param:u,value:l[f]}):null))??[])}return[i,...s]}function Ph({param:e,value:t}){if(e.type==="string"||e.type==="bytes")return Dt(Hr(t));if(e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/))throw new nv(e.type);return $s([e],[t])}function Vc(e,{method:t}){var r,o;const n={};return e.transport.type==="fallback"&&((o=(r=e.transport).onResponse)==null||o.call(r,({method:i,response:s,status:a,transport:c})=>{a==="success"&&t===i&&(n[s]=c.request)})),i=>n[i]||e.request}async function Qg(e,{address:t,abi:n,args:r,eventName:o,fromBlock:i,strict:s,toBlock:a}){const c=Vc(e,{method:"eth_newFilter"}),l=o?Us({abi:n,args:r,eventName:o}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof i=="bigint"?De(i):i,toBlock:typeof a=="bigint"?De(a):a,topics:l}]});return{abi:n,args:r,eventName:o,id:u,request:c(u),strict:s,type:"event"}}function Ht(e){return typeof e=="string"?{address:e,type:"json-rpc"}:e}function yr({abi:e,args:t,functionName:n}){let r=e[0];if(n&&(r=Ns({abi:e,args:t,name:n}),!r))throw new ja(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new ja(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const o=mr(r),i=p0(o),s="inputs"in r&&r.inputs?$s(r.inputs,t??[]):void 0;return o0([i,s??"0x"])}const Zg={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},Fv={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},Lv={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function g0(e,t){const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),r=Dt(Ln(n),"bytes"),o=(t?n.substring(`${t}0x`.length):n).split("");for(let i=0;i<40;i+=2)r[i>>1]>>4>=8&&o[i]&&(o[i]=o[i].toUpperCase()),(r[i>>1]&15)>=8&&o[i+1]&&(o[i+1]=o[i+1].toUpperCase());return`0x${o.join("")}`}function rn(e,t){if(!ki(e))throw new Qo({address:e});return g0(e,t)}function qc(e,t){if(t==="0x"&&e.length>0)throw new zc;if(ot(t)&&ot(t)<32)throw new l0({data:t,params:e,size:ot(t)});return jv({data:t,params:e})}function jv({data:e,params:t}){const n=[];let r=0;for(let o=0;o<t.length;o++){if(r>=ot(e))throw new l0({data:e,params:t,size:ot(e)});const i=t[o],{consumed:s,value:a}=Si({data:e,param:i,position:r});n.push(a),r+=s}return n}function Si({data:e,param:t,position:n}){const r=Hc(t.type);if(r){const[i,s]=r;return zv(e,{length:i,param:{...t,type:s},position:n})}if(t.type==="tuple")return Kv(e,{param:t,position:n});if(t.type==="string")return Gv(e,{position:n});if(t.type.startsWith("bytes"))return Vv(e,{param:t,position:n});const o=rt(e,n,n+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return qv(o,{param:t});if(t.type==="address")return Wv(o);if(t.type==="bool")return Hv(o);throw new Xy(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function Wv(e){return{consumed:32,value:g0(rt(e,-20))}}function zv(e,{param:t,length:n,position:r}){if(!n){const s=Ct(rt(e,r,r+32,{strict:!0})),a=Ct(rt(e,s,s+32,{strict:!0}));let c=0;const l=[];for(let u=0;u<a;++u){const f=Si({data:rt(e,s+32),param:t,position:c});c+=f.consumed,l.push(f.value)}return{value:l,consumed:32}}if(Wa(t)){const s=Hc(t.type),a=!(s!=null&&s[0]);let c=0;const l=[];for(let u=0;u<n;++u){const f=Ct(rt(e,r,r+32,{strict:!0})),g=Si({data:rt(e,f),param:t,position:a?c:u*32});c+=g.consumed,l.push(g.value)}return{value:l,consumed:32}}let o=0;const i=[];for(let s=0;s<n;++s){const a=Si({data:e,param:t,position:r+o});o+=a.consumed,i.push(a.value)}return{value:i,consumed:o}}function Hv(e){return{consumed:32,value:_y(e)}}function Vv(e,{param:t,position:n}){const[r,o]=t.type.split("bytes");if(!o){const s=Ct(rt(e,n,n+32,{strict:!0})),a=Ct(rt(e,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:rt(e,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:rt(e,n,n+parseInt(o),{strict:!0})}}function qv(e,{param:t}){const n=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?Fc(e,{signed:n}):Ct(e,{signed:n})}}function Gv(e,{position:t}){const n=Ct(rt(e,t,t+32,{strict:!0})),r=Ct(rt(e,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:i0(Lr(rt(e,n+32,n+32+r,{strict:!0})))}}function Kv(e,{param:t,position:n}){const r=t.components.length===0||t.components.some(({name:s})=>!s),o=r?[]:{};let i=0;if(Wa(t)){const s=Ct(rt(e,n,n+32,{strict:!0}));for(let a=0;a<t.components.length;++a){const c=t.components[a],l=Si({data:rt(e,s),param:c,position:i});i+=l.consumed,o[r?a:c==null?void 0:c.name]=l.value}return{consumed:32,value:o}}for(let s=0;s<t.components.length;++s){const a=t.components[s],c=Si({data:e,param:a,position:n+i});i+=c.consumed,o[r?s:a==null?void 0:a.name]=c.value}return{consumed:i,value:o}}function Wa(e){var r;const{type:t}=e;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return(r=e.components)==null?void 0:r.some(Wa);const n=Hc(e.type);return!!(n&&Wa({...e,type:n[1]}))}function Qv({abi:e,data:t}){const n=rt(t,0,4);if(n==="0x")throw new zc;const o=[...e||[],Fv,Lv].find(i=>i.type==="error"&&n===p0(mr(i)));if(!o)throw new Ng(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:o,args:"inputs"in o&&o.inputs&&o.inputs.length>0?qc(o.inputs,rt(t,4)):void 0,errorName:o.name}}const Et=(e,t,n)=>JSON.stringify(e,(r,o)=>{const i=typeof o=="bigint"?o.toString():o;return typeof t=="function"?t(r,i):i},n);function Yg({abiItem:e,args:t,includeFunctionName:n=!0,includeName:r=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${n?e.name:""}(${e.inputs.map((o,i)=>`${r&&o.name?`${o.name}: `:""}${typeof t[i]=="object"?Et(t[i]):t[i]}`).join(", ")})`}class Jg extends ee{constructor(t,{account:n,docsPath:r,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:g}){const w=n?Ht(n):void 0,b=Ms({from:w==null?void 0:w.address,to:f,value:typeof g<"u"&&`${s0(g)} ${(o==null?void 0:o.nativeCurrency.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${Tt(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Tt(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Tt(l)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}}class w0 extends ee{constructor(t,{abi:n,args:r,contractAddress:o,docsPath:i,functionName:s,sender:a}){const c=Ns({abi:n,args:r,name:s}),l=c?Yg({abiItem:c,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=c?mr(c,{includeName:!0}):void 0,f=Ms({address:o&&dy(o),function:u,args:l&&l!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${l}`,sender:a});super(t.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:t,docsPath:i,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",f].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=t,this.contractAddress=o,this.functionName=s,this.sender=a}}class Lu extends ee{constructor({abi:t,data:n,functionName:r,message:o}){let i,s,a,c;if(n&&n!=="0x")try{s=Qv({abi:t,data:n});const{abiItem:u,errorName:f,args:g}=s;if(f==="Error")c=g[0];else if(f==="Panic"){const[w]=g;c=Zg[w]}else{const w=u?mr(u,{includeName:!0}):void 0,b=u&&g?Yg({abiItem:u,args:g,includeFunctionName:!1,includeName:!1}):void 0;a=[w?`Error: ${w}`:"",b&&b!=="()"?`       ${[...Array((f==null?void 0:f.length)??0).keys()].map(()=>" ").join("")}${b}`:""]}}catch(u){i=u}else o&&(c=o);let l;i instanceof Ng&&(l=i.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${r}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${r}" reverted.`,{cause:i,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=c,this.signature=l}}class Zv extends ee{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class b0 extends ee{constructor({data:t,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}class $o extends ee{constructor({body:t,details:n,headers:r,status:o,url:i}){super("HTTP request failed.",{details:n,metaMessages:[o&&`Status: ${o}`,`URL: ${Uc(i)}`,t&&`Request body: ${Et(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=r,this.status=o,this.url=i}}class Yv extends ee{constructor({body:t,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${Uc(r)}`,`Request body: ${Et(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class m0 extends ee{constructor({body:t,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${Uc(r)}`,`Request body: ${Et(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class ju extends ee{constructor({body:t,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Uc(n)}`,`Request body: ${Et(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const Jv=-1;class Rt extends ee{constructor(t,{code:n,docsPath:r,metaMessages:o,shortMessage:i}){super(i,{cause:t,docsPath:r,metaMessages:o||(t==null?void 0:t.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof m0?t.code:n??Jv}}class oo extends Rt{constructor(t,n){super(t,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class Yo extends Rt{constructor(t){super(t,{code:Yo.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Yo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Jo extends Rt{constructor(t){super(t,{code:Jo.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Jo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Xo extends Rt{constructor(t){super(t,{code:Xo.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Xo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class es extends Rt{constructor(t){super(t,{code:es.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(es,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Ri extends Rt{constructor(t){super(t,{code:Ri.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Ri,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class qr extends Rt{constructor(t){super(t,{code:qr.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(qr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class ts extends Rt{constructor(t){super(t,{code:ts.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(ts,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Mi extends Rt{constructor(t){super(t,{code:Mi.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Mi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class ns extends Rt{constructor(t){super(t,{code:ns.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(ns,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class rs extends Rt{constructor(t){super(t,{code:rs.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(rs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class is extends Rt{constructor(t){super(t,{code:is.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(is,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class os extends Rt{constructor(t){super(t,{code:os.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(os,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class It extends oo{constructor(t){super(t,{code:It.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(It,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class ss extends oo{constructor(t){super(t,{code:ss.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(ss,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class as extends oo{constructor(t){super(t,{code:as.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(as,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class cs extends oo{constructor(t){super(t,{code:cs.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(cs,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class ls extends oo{constructor(t){super(t,{code:ls.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(ls,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class zn extends oo{constructor(t){super(t,{code:zn.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(zn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class Xv extends Rt{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const e6=3;function us(e,{abi:t,address:n,args:r,docsPath:o,functionName:i,sender:s}){const{code:a,data:c,message:l,shortMessage:u}=e instanceof b0?e:e instanceof ee?e.walk(g=>"data"in g)||e.walk():{};let f=e;return e instanceof zc?f=new Zv({functionName:i}):[e6,Ri.code].includes(a)&&(c||l||u)&&(f=new Lu({abi:t,data:typeof c=="object"?c.data:c,functionName:i,message:u??l})),new w0(f,{abi:t,args:r,contractAddress:n,docsPath:o,functionName:i,sender:s})}class so extends ee{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class t6 extends ee{constructor(t,{account:n,docsPath:r,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:g}){const w=Ms({from:n==null?void 0:n.address,to:f,value:typeof g<"u"&&`${s0(g)} ${(o==null?void 0:o.nativeCurrency.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${Tt(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Tt(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Tt(l)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}}function y0(e,t){const n=(e.details||"").toLowerCase(),r=e.walk(o=>o.code===vi.code);return r instanceof ee?new vi({cause:e,message:r.details}):vi.nodeMessage.test(n)?new vi({cause:e,message:e.details}):Ua.nodeMessage.test(n)?new Ua({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):Ou.nodeMessage.test(n)?new Ou({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):Bu.nodeMessage.test(n)?new Bu({cause:e,nonce:t==null?void 0:t.nonce}):ku.nodeMessage.test(n)?new ku({cause:e,nonce:t==null?void 0:t.nonce}):Ru.nodeMessage.test(n)?new Ru({cause:e,nonce:t==null?void 0:t.nonce}):Mu.nodeMessage.test(n)?new Mu({cause:e}):$u.nodeMessage.test(n)?new $u({cause:e,gas:t==null?void 0:t.gas}):Nu.nodeMessage.test(n)?new Nu({cause:e,gas:t==null?void 0:t.gas}):Uu.nodeMessage.test(n)?new Uu({cause:e}):Fa.nodeMessage.test(n)?new Fa({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas,maxPriorityFeePerGas:t==null?void 0:t.maxPriorityFeePerGas}):new jc({cause:e})}function n6(e,{docsPath:t,...n}){let r=y0(e,n);return r instanceof jc&&(r=e),new t6(r,{docsPath:t,...n})}function v0(e,{format:t}){return t?Object.keys(t({})).reduce((r,o)=>(e!=null&&e.hasOwnProperty(o)&&(r[o]=e[o]),r),{}):{}}function Fs(e){const{account:t,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:o,to:i}=e,s=t?Ht(t):void 0;if(s&&!ki(s.address))throw new Qo({address:s.address});if(i&&!ki(i))throw new Qo({address:i});if(typeof n<"u"&&(typeof r<"u"||typeof o<"u"))throw new Ry;if(r&&r>2n**256n-1n)throw new Ua({maxFeePerGas:r});if(o&&r&&o>r)throw new Fa({maxFeePerGas:r,maxPriorityFeePerGas:o})}class r6 extends ee{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class x0 extends ee{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class i6 extends ee{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Tt(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class o6 extends ee{constructor({blockHash:t,blockNumber:n}){let r="Block";t&&(r=`Block at hash "${t}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function lr(e,{blockHash:t,blockNumber:n,blockTag:r,includeTransactions:o}={}){var u,f,g;const i=r??"latest",s=o??!1,a=n!==void 0?De(n):void 0;let c=null;if(t?c=await e.request({method:"eth_getBlockByHash",params:[t,s]}):c=await e.request({method:"eth_getBlockByNumber",params:[a||i,s]}),!c)throw new o6({blockHash:t,blockNumber:n});return(((g=(f=(u=e.chain)==null?void 0:u.formatters)==null?void 0:f.block)==null?void 0:g.format)||Tg)(c)}async function A0(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function s6(e,t){return Xg(e,t)}async function Xg(e,t){var i,s,a;const{block:n,chain:r=e.chain,request:o}=t||{};if(typeof((i=r==null?void 0:r.fees)==null?void 0:i.defaultPriorityFee)=="function"){const c=n||await lr(e);return r.fees.defaultPriorityFee({block:c,client:e,request:o})}else if((s=r==null?void 0:r.fees)!=null&&s.defaultPriorityFee)return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const c=await e.request({method:"eth_maxPriorityFeePerGas"});return Fc(c)}catch{const[c,l]=await Promise.all([n?Promise.resolve(n):lr(e),A0(e)]);if(typeof c.baseFeePerGas!="bigint")throw new x0;const u=l-c.baseFeePerGas;return u<0n?0n:u}}async function a6(e,t){return Wu(e,t)}async function Wu(e,t){var g,w;const{block:n,chain:r=e.chain,request:o,type:i="eip1559"}=t||{},s=await(async()=>{var b,v;return typeof((b=r==null?void 0:r.fees)==null?void 0:b.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:e,request:o}):((v=r==null?void 0:r.fees)==null?void 0:v.baseFeeMultiplier)??1.2})();if(s<1)throw new r6;const c=10**(((g=s.toString().split(".")[1])==null?void 0:g.length)??0),l=b=>b*BigInt(Math.ceil(s*c))/BigInt(c),u=n||await lr(e);if(typeof((w=r==null?void 0:r.fees)==null?void 0:w.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:e,multiply:l,request:o,type:i});if(i==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new x0;const b=o!=null&&o.maxPriorityFeePerGas?o.maxPriorityFeePerGas:await Xg(e,{block:u,chain:r,request:o}),v=l(u.baseFeePerGas);return{maxFeePerGas:(o==null?void 0:o.maxFeePerGas)??v+b,maxPriorityFeePerGas:b}}return{gasPrice:(o==null?void 0:o.gasPrice)??l(await A0(e))}}async function ew(e,{address:t,blockTag:n="latest",blockNumber:r}){const o=await e.request({method:"eth_getTransactionCount",params:[t,r?De(r):n]});return Ct(o)}async function Gc(e,t){const{account:n=e.account,chain:r,gas:o,nonce:i,type:s}=t;if(!n)throw new so;const a=Ht(n),c=await lr(e,{blockTag:"latest"}),l={...t,from:a.address};if(typeof i>"u"&&(l.nonce=await ew(e,{address:a.address,blockTag:"pending"})),typeof s>"u")try{l.type=Uy(l)}catch{l.type=typeof c.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(l.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:f}=await Wu(e,{block:c,chain:r,request:l});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<f)throw new i6({maxPriorityFeePerGas:f});l.maxPriorityFeePerGas=f,l.maxFeePerGas=u}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new x0;const{gasPrice:u}=await Wu(e,{block:c,chain:r,request:l,type:"legacy"});l.gasPrice=u}return typeof o>"u"&&(l.gas=await C0(e,{...l,account:{address:a.address,type:"json-rpc"}})),Fs(l),l}async function C0(e,t){var o,i,s;const n=t.account??e.account;if(!n)throw new so({docsPath:"/docs/actions/public/estimateGas"});const r=Ht(n);try{const{accessList:a,blockNumber:c,blockTag:l,data:u,gas:f,gasPrice:g,maxFeePerGas:w,maxPriorityFeePerGas:b,nonce:v,to:A,value:_,...m}=r.type==="local"?await Gc(e,t):t,x=(c?De(c):void 0)||l;Fs(t);const E=((s=(i=(o=e.chain)==null?void 0:o.formatters)==null?void 0:i.transactionRequest)==null?void 0:s.format)||Lc,P=E({...v0(m,{format:E}),from:r.address,accessList:a,data:u,gas:f,gasPrice:g,maxFeePerGas:w,maxPriorityFeePerGas:b,nonce:v,to:A,value:_}),h=await e.request({method:"eth_estimateGas",params:x?[P,x]:[P]});return BigInt(h)}catch(a){throw n6(a,{...t,account:r,chain:e.chain})}}async function c6(e,{abi:t,address:n,args:r,functionName:o,...i}){const s=yr({abi:t,args:r,functionName:o});try{return await C0(e,{data:s,to:n,...i})}catch(a){const c=i.account?Ht(i.account):void 0;throw us(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:o,sender:c==null?void 0:c.address})}}const Bl="/docs/contract/decodeFunctionResult";function ao({abi:e,args:t,functionName:n,data:r}){let o=e[0];if(n&&(o=Ns({abi:e,args:t,name:n}),!o))throw new ja(n,{docsPath:Bl});if(o.type!=="function")throw new ja(void 0,{docsPath:Bl});if(!o.outputs)throw new Zy(o.name,{docsPath:Bl});const i=qc(o.outputs,r);if(i&&i.length>1)return i;if(i&&i.length===1)return i[0]}const l6="modulepreload",u6=function(e){return"/"+e},Dh={},fs=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=u6(i),i in Dh)return;Dh[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let u=o.length-1;u>=0;u--){const f=o[u];if(f.href===i&&(!s||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":l6,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i})},zu=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],tw=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],nw=[...tw,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],f6=[...tw,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],Ih=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],Th=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],d6=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],h6="0x82ad56cb";function p6(e,{docsPath:t,...n}){let r=y0(e,n);return r instanceof jc&&(r=e),new Jg(r,{docsPath:t,...n})}const kl=new Map;function E0({fn:e,id:t,shouldSplitBatch:n,wait:r=0}){const o=async()=>{const l=a();i();const u=l.map(({args:f})=>f);u.length!==0&&e(u).then(f=>{l.forEach(({pendingPromise:g},w)=>{var b;return(b=g.resolve)==null?void 0:b.call(g,[f[w],f])})}).catch(f=>{l.forEach(({pendingPromise:g})=>{var w;return(w=g.reject)==null?void 0:w.call(g,f)})})},i=()=>kl.delete(t),s=()=>a().map(({args:l})=>l),a=()=>kl.get(t)||[],c=l=>kl.set(t,[...a(),l]);return{flush:i,async schedule(l){const u={},f=new Promise((b,v)=>{u.resolve=b,u.reject=v});return(n==null?void 0:n([...s(),l]))&&o(),a().length>0?(c({args:l,pendingPromise:u}),f):(c({args:l,pendingPromise:u}),setTimeout(o,r),f)}}}async function Kc(e,t){var _,m,C,x;const{account:n=e.account,batch:r=!!((_=e.batch)!=null&&_.multicall),blockNumber:o,blockTag:i="latest",accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:g,to:w,value:b,...v}=t,A=n?Ht(n):void 0;try{Fs(t);const P=(o?De(o):void 0)||i,h=((x=(C=(m=e.chain)==null?void 0:m.formatters)==null?void 0:C.transactionRequest)==null?void 0:x.format)||Lc,D=h({...v0(v,{format:h}),from:A==null?void 0:A.address,accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:f,nonce:g,to:w,value:b});if(r&&g6({request:D}))try{return await w6(e,{...D,blockNumber:o,blockTag:i})}catch(F){if(!(F instanceof Cg)&&!(F instanceof Tu))throw F}const $=await e.request({method:"eth_call",params:P?[D,P]:[D]});return $==="0x"?{data:void 0}:{data:$}}catch(E){const P=b6(E),{offchainLookup:h,offchainLookupSignature:D}=await fs(()=>import("./ccip-a6d6cdae.js"),[]);if((P==null?void 0:P.slice(0,10))===D&&w)return{data:await h(e,{data:P,to:w})};throw p6(E,{...t,account:A,chain:e.chain})}}function g6({request:e}){const{data:t,to:n,...r}=e;return!(!t||t.startsWith(h6)||!n||Object.values(r).filter(o=>typeof o<"u").length>0)}async function w6(e,t){var v;const{batchSize:n=1024,wait:r=0}=typeof((v=e.batch)==null?void 0:v.multicall)=="object"?e.batch.multicall:{},{blockNumber:o,blockTag:i="latest",data:s,multicallAddress:a,to:c}=t;let l=a;if(!l){if(!e.chain)throw new Cg;l=no({blockNumber:o,chain:e.chain,contract:"multicall3"})}const f=(o?De(o):void 0)||i,{schedule:g}=E0({id:`${e.uid}.${f}`,wait:r,shouldSplitBatch(A){return A.reduce((m,{data:C})=>m+(C.length-2),0)>n*2},fn:async A=>{const _=A.map(x=>({allowFailure:!0,callData:x.data,target:x.to})),m=yr({abi:zu,args:[_],functionName:"aggregate3"}),C=await e.request({method:"eth_call",params:[{data:m,to:l},f]});return ao({abi:zu,args:[_],functionName:"aggregate3",data:C||"0x"})}}),[{returnData:w,success:b}]=await g({data:s,to:c});if(!b)throw new b0({data:w});return w==="0x"?{data:void 0}:{data:w}}function b6(e){if(!(e instanceof ee))return;const t=e.walk();return typeof t.data=="object"?t.data.data:t.data}async function ur(e,{abi:t,address:n,args:r,functionName:o,...i}){const s=yr({abi:t,args:r,functionName:o});try{const{data:a}=await Kc(e,{data:s,to:n,...i});return ao({abi:t,args:r,functionName:o,data:a||"0x"})}catch(a){throw us(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:o})}}async function m6(e,{abi:t,address:n,args:r,dataSuffix:o,functionName:i,...s}){const a=s.account?Ht(s.account):void 0,c=yr({abi:t,args:r,functionName:i});try{const{data:l}=await Kc(e,{batch:!1,data:`${c}${o?o.replace("0x",""):""}`,to:n,...s});return{result:ao({abi:t,args:r,functionName:i,data:l||"0x"}),request:{abi:t,address:n,args:r,dataSuffix:o,functionName:i,...s}}}catch(l){throw us(l,{abi:t,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:i,sender:a==null?void 0:a.address})}}const Rl=new Map,Oh=new Map;let y6=0;function co(e,t,n){const r=++y6,o=()=>Rl.get(e)||[],i=()=>{const u=o();Rl.set(e,u.filter(f=>f.id!==r))},s=()=>{const u=Oh.get(e);o().length===1&&u&&u(),i()},a=o();if(Rl.set(e,[...a,{id:r,fns:t}]),a&&a.length>0)return s;const c={};for(const u in t)c[u]=(...f)=>{const g=o();g.length!==0&&g.forEach(w=>{var b,v;return(v=(b=w.fns)[u])==null?void 0:v.call(b,...f)})};const l=n(c);return typeof l=="function"&&Oh.set(e,l),s}async function za(e){return new Promise(t=>setTimeout(t,e))}function Ls(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let o=!0;const i=()=>o=!1;return(async()=>{let a;t&&(a=await e({unpoll:i}));const c=await(n==null?void 0:n(a))??r;await za(c);const l=async()=>{o&&(await e({unpoll:i}),await za(r),l())};l()})(),i}const Bh="/docs/contract/decodeEventLog";function js({abi:e,data:t,strict:n,topics:r}){const o=n??!0,[i,...s]=r;if(!i)throw new Ky({docsPath:Bh});const a=e.find(b=>b.type==="event"&&i===f0(mr(b)));if(!(a&&"name"in a)||a.type!=="event")throw new Qy(i,{docsPath:Bh});const{name:c,inputs:l}=a,u=l==null?void 0:l.some(b=>!("name"in b&&b.name));let f=u?[]:{};const g=l.filter(b=>"indexed"in b&&b.indexed);if(s.length>0)for(let b=0;b<g.length;b++){const v=g[b],A=s[b];if(!A)throw new io({abiItem:a,param:v});f[v.name||b]=v6({param:v,value:A})}const w=l.filter(b=>!("indexed"in b&&b.indexed));if(w.length>0){if(t&&t!=="0x")try{const b=qc(w,t);if(b)if(u)f=[...f,...b];else for(let v=0;v<w.length;v++)f[w[v].name]=b[v]}catch(b){if(o)throw b instanceof l0?new Vr({abiItem:a,data:b.data,params:b.params,size:b.size}):b}else if(o)throw new Vr({abiItem:a,data:"0x",params:w,size:0})}return{eventName:c,args:Object.values(f).length>0?f:void 0}}function v6({param:e,value:t}){return e.type==="string"||e.type==="bytes"||e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(qc([e],t)||[])[0]}const x6=new Map,A6=new Map;function C6(e){const t=(o,i)=>({clear:()=>i.delete(o),get:()=>i.get(o),set:s=>i.set(o,s)}),n=t(e,x6),r=t(e,A6);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function E6(e,{cacheKey:t,cacheTime:n=1/0}){const r=C6(t),o=r.response.get();if(o&&n>0&&new Date().getTime()-o.created.getTime()<n)return o.data;let i=r.promise.get();i||(i=e(),r.promise.set(i));try{const s=await i;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const _6=e=>`blockNumber.${e}`;async function Ws(e,{cacheTime:t=e.cacheTime,maxAge:n}={}){const r=await E6(()=>e.request({method:"eth_blockNumber"}),{cacheKey:_6(e.uid),cacheTime:n??t});return BigInt(r)}async function Qc(e,{filter:t}){const n="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map(o=>{var i;if(typeof o=="string")return o;try{const{eventName:s,args:a}="abi"in t&&t.abi?js({abi:t.abi,data:o.data,topics:o.topics,strict:n}):{eventName:void 0,args:void 0};return sn(o,{args:a,eventName:s})}catch(s){let a,c;if(s instanceof Vr||s instanceof io){if("strict"in t&&t.strict)return;a=s.abiItem.name,c=(i=s.abiItem.inputs)==null?void 0:i.some(l=>!("name"in l&&l.name))}return sn(o,{args:c?[]:{},eventName:a})}}).filter(Boolean)}async function _0(e,{address:t,blockHash:n,fromBlock:r,toBlock:o,event:i,events:s,args:a,strict:c}={}){const l=c??!1,u=s??(i?[i]:void 0);let f=[];u&&(f=[u.flatMap(w=>Us({abi:[w],eventName:w.name,args:a}))],i&&(f=f[0]));let g;return n?g=await e.request({method:"eth_getLogs",params:[{address:t,topics:f,blockHash:n}]}):g=await e.request({method:"eth_getLogs",params:[{address:t,topics:f,fromBlock:typeof r=="bigint"?De(r):r,toBlock:typeof o=="bigint"?De(o):o}]}),g.map(w=>{var b;try{const{eventName:v,args:A}=u?js({abi:u,data:w.data,topics:w.topics,strict:l}):{eventName:void 0,args:void 0};return sn(w,{args:A,eventName:v})}catch(v){let A,_;if(v instanceof Vr||v instanceof io){if(l)return;A=v.abiItem.name,_=(b=v.abiItem.inputs)==null?void 0:b.some(m=>!("name"in m&&m.name))}return sn(w,{args:_?[]:{},eventName:A})}}).filter(Boolean)}async function Zc(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function S6(e,{abi:t,address:n,args:r,batch:o=!0,eventName:i,onError:s,onLogs:a,poll:c,pollingInterval:l=e.pollingInterval,strict:u}){return(typeof c<"u"?c:e.transport.type!=="webSocket")?(()=>{const b=Et(["watchContractEvent",n,r,o,e.uid,i,l]),v=u??!1;return co(b,{onLogs:a,onError:s},A=>{let _,m,C=!1;const x=Ls(async()=>{var E;if(!C){try{m=await Qg(e,{abi:t,address:n,args:r,eventName:i,strict:v})}catch{}C=!0;return}try{let P;if(m)P=await Qc(e,{filter:m});else{const h=await Ws(e);_&&_!==h?P=await _0(e,{address:n,args:r,fromBlock:_+1n,toBlock:h,event:Ns({abi:t,name:i})}):P=[],_=h}if(P.length===0)return;o?A.onLogs(P):P.forEach(h=>A.onLogs([h]))}catch(P){m&&P instanceof qr&&(C=!1),(E=A.onError)==null||E.call(A,P)}},{emitOnBegin:!0,interval:l});return async()=>{m&&await Zc(e,{filter:m}),x()}})})():(()=>{let b=!0,v=()=>b=!1;return(async()=>{try{const A=i?Us({abi:t,eventName:i,args:r}):[],{unsubscribe:_}=await e.transport.subscribe({params:["logs",{address:n,topics:A}],onData(m){var x;if(!b)return;const C=m.result;try{const{eventName:E,args:P}=js({abi:t,data:C.data,topics:C.topics,strict:u}),h=sn(C,{args:P,eventName:E});a([h])}catch(E){let P,h;if(E instanceof Vr||E instanceof io){if(u)return;P=E.abiItem.name,h=(x=E.abiItem.inputs)==null?void 0:x.some($=>!("name"in $&&$.name))}const D=sn(C,{args:h?[]:{},eventName:P});a([D])}},onError(m){s==null||s(m)}});v=_,b||v()}catch(A){s==null||s(A)}})(),v})()}function P6(e,{docsPath:t,...n}){let r=y0(e,n);return r instanceof jc&&(r=e),new $y(r,{docsPath:t,...n})}async function ds(e){const t=await e.request({method:"eth_chainId"});return Ct(t)}async function S0(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}async function P0(e,t){var v,A,_;const{account:n=e.account,chain:r=e.chain,accessList:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:g,...w}=t;if(!n)throw new so({docsPath:"/docs/actions/wallet/sendTransaction"});const b=Ht(n);try{Fs(t);let m;if(r!==null&&(m=await ds(e),Eg({currentChainId:m,chain:r})),b.type==="local"){const E=await Gc(e,{account:b,accessList:o,chain:r,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:g,...w});m||(m=await ds(e));const P=(v=r==null?void 0:r.serializers)==null?void 0:v.transaction,h=await b.signTransaction({...E,chainId:m},{serializer:P});return await S0(e,{serializedTransaction:h})}const C=((_=(A=r==null?void 0:r.formatters)==null?void 0:A.transactionRequest)==null?void 0:_.format)||Lc,x=C({...v0(w,{format:C}),accessList:o,data:i,from:b.address,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:u,to:f,value:g});return await e.request({method:"eth_sendTransaction",params:[x]})}catch(m){throw P6(m,{...t,account:b,chain:t.chain||void 0})}}async function D6(e,{abi:t,address:n,args:r,dataSuffix:o,functionName:i,...s}){const a=yr({abi:t,args:r,functionName:i});return await P0(e,{data:`${a}${o?o.replace("0x",""):""}`,to:n,...s})}async function I6(e,{chain:t}){const{id:n,name:r,nativeCurrency:o,rpcUrls:i,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:De(n),chainName:r,nativeCurrency:o,rpcUrls:i.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const Hu=256;let ua=Hu,fa;function T6(e=11){if(!fa||ua+e>Hu*2){fa="",ua=0;for(let t=0;t<Hu;t++)fa+=(256+Math.random()*256|0).toString(16).substring(1)}return fa.substring(ua,ua+++e)}function rw(e){const{batch:t,cacheTime:n=e.pollingInterval??4e3,key:r="base",name:o="Base Client",pollingInterval:i=4e3,type:s="base"}=e,a=e.chain,c=e.account?Ht(e.account):void 0,{config:l,request:u,value:f}=e.transport({chain:a,pollingInterval:i}),g={...l,...f},w={account:c,batch:t,cacheTime:n,chain:a,key:r,name:o,pollingInterval:i,request:u,transport:g,type:s,uid:T6()};function b(v){return A=>{const _=A(v);for(const C in w)delete _[C];const m={...v,..._};return Object.assign(m,{extend:b(m)})}}return Object.assign(w,{extend:b(w)})}function iw(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((o,i)=>{const s=async({count:a=0}={})=>{const c=async({error:l})=>{const u=typeof t=="function"?t({count:a,error:l}):t;u&&await za(u),s({count:a+1})};try{const l=await e();o(l)}catch(l){if(a<n&&await r({count:a,error:l}))return c({error:l});i(l)}};s()})}const ow=e=>"code"in e?e.code!==-1&&e.code!==-32004&&e.code!==-32005&&e.code!==-32042&&e.code!==-32603:e instanceof $o&&e.status?e.status!==403&&e.status!==408&&e.status!==413&&e.status!==429&&e.status!==500&&e.status!==502&&e.status!==503&&e.status!==504:!1;function O6(e,{retryDelay:t=150,retryCount:n=3}={}){return async r=>iw(async()=>{try{return await e(r)}catch(o){const i=o;switch(i.code){case Yo.code:throw new Yo(i);case Jo.code:throw new Jo(i);case Xo.code:throw new Xo(i);case es.code:throw new es(i);case Ri.code:throw new Ri(i);case qr.code:throw new qr(i);case ts.code:throw new ts(i);case Mi.code:throw new Mi(i);case ns.code:throw new ns(i);case rs.code:throw new rs(i);case is.code:throw new is(i);case os.code:throw new os(i);case It.code:throw new It(i);case ss.code:throw new ss(i);case as.code:throw new as(i);case cs.code:throw new cs(i);case ls.code:throw new ls(i);case zn.code:throw new zn(i);case 5e3:throw new It(i);default:throw o instanceof ee?o:new Xv(i)}}},{delay:({count:o,error:i})=>{var s;if(i&&i instanceof $o){const a=(s=i==null?void 0:i.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<o)*t},retryCount:n,shouldRetry:({error:o})=>!ow(o)})}function Yc({key:e,name:t,request:n,retryCount:r=3,retryDelay:o=150,timeout:i,type:s},a){return{config:{key:e,name:t,request:n,retryCount:r,retryDelay:o,timeout:i,type:s},request:O6(n,{retryCount:r,retryDelay:o}),value:a}}function D0(e,t={}){const{key:n="custom",name:r="Custom Provider",retryDelay:o}=t;return({retryCount:i})=>Yc({key:n,name:r,request:e.request.bind(e),retryCount:t.retryCount??i,retryDelay:o,type:"custom"})}function kh(e,t={}){const{key:n="fallback",name:r="Fallback",rank:o=!1,retryCount:i,retryDelay:s}=t;return({chain:a,pollingInterval:c=4e3,timeout:l})=>{let u=e,f=()=>{};const g=Yc({key:n,name:r,async request({method:w,params:b}){const v=async(A=0)=>{const _=u[A]({chain:a,retryCount:0,timeout:l});try{const m=await _.request({method:w,params:b});return f({method:w,params:b,response:m,transport:_,status:"success"}),m}catch(m){if(f({error:m,method:w,params:b,transport:_,status:"error"}),ow(m)||A===u.length-1)throw m;return v(A+1)}};return v()},retryCount:i,retryDelay:s,type:"fallback"},{onResponse:w=>f=w,transports:u.map(w=>w({chain:a,retryCount:0}))});if(o){const w=typeof o=="object"?o:{};B6({chain:a,interval:w.interval??c,onTransports:b=>u=b,sampleCount:w.sampleCount,timeout:w.timeout,transports:u,weights:w.weights})}return g}}function B6({chain:e,interval:t=4e3,onTransports:n,sampleCount:r=10,timeout:o=1e3,transports:i,weights:s={}}){const{stability:a=.7,latency:c=.3}=s,l=[],u=async()=>{const f=await Promise.all(i.map(async b=>{const v=b({chain:e,retryCount:0,timeout:o}),A=Date.now();let _,m;try{await v.request({method:"net_listening"}),m=1}catch{m=0}finally{_=Date.now()}return{latency:_-A,success:m}}));l.push(f),l.length>r&&l.shift();const g=Math.max(...l.map(b=>Math.max(...b.map(({latency:v})=>v)))),w=i.map((b,v)=>{const A=l.map(E=>E[v].latency),m=1-A.reduce((E,P)=>E+P,0)/A.length/g,C=l.map(E=>E[v].success),x=C.reduce((E,P)=>E+P,0)/C.length;return x===0?[0,v]:[c*m+a*x,v]}).sort((b,v)=>v[0]-b[0]);n(w.map(([,b])=>i[b])),await za(t),u()};u()}class sw extends ee{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var gi=null;typeof WebSocket<"u"?gi=WebSocket:typeof MozWebSocket<"u"?gi=MozWebSocket:typeof global<"u"?gi=global.WebSocket||global.MozWebSocket:typeof window<"u"?gi=window.WebSocket||window.MozWebSocket:typeof self<"u"&&(gi=self.WebSocket||self.MozWebSocket);const da=gi;function aw(e,{errorInstance:t,timeout:n,signal:r}){return new Promise((o,i)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():i(t)},n)),o(await e({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&i(t),i(a)}finally{clearTimeout(s)}})()})}let Vu=0;async function k6(e,{body:t,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:o,method:i,signal:s}=n;try{const c=await aw(async({signal:u})=>await fetch(e,{...n,body:Array.isArray(t)?Et(t.map(g=>({jsonrpc:"2.0",id:g.id??Vu++,...g}))):Et({jsonrpc:"2.0",id:t.id??Vu++,...t}),headers:{...o,"Content-Type":"application/json"},method:i||"POST",signal:s||(r>0?u:void 0)}),{errorInstance:new ju({body:t,url:e}),timeout:r,signal:!0});let l;if((a=c.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?l=await c.json():l=await c.text(),!c.ok)throw new $o({body:t,details:Et(l.error)||c.statusText,headers:c.headers,status:c.status,url:e});return l}catch(c){throw c instanceof $o||c instanceof ju?c:new $o({body:t,details:c.message,url:e})}}const Ml=new Map;async function $l(e){let t=Ml.get(e);if(t)return t;const{schedule:n}=E0({id:e,fn:async()=>{let i=da;da.constructor||(i=da.WebSocket);const s=new i(e),a=new Map,c=new Map,l=({data:f})=>{const g=JSON.parse(f),w=g.method==="eth_subscription",b=w?g.params.subscription:g.id,v=w?c:a,A=v.get(b);A&&A({data:f}),w||v.delete(b)},u=()=>{Ml.delete(e),s.removeEventListener("close",u),s.removeEventListener("message",l)};return s.addEventListener("close",u),s.addEventListener("message",l),s.readyState===da.CONNECTING&&await new Promise((f,g)=>{s&&(s.onopen=f,s.onerror=g)}),t=Object.assign(s,{requests:a,subscriptions:c}),Ml.set(e,t),[t]}}),[r,[o]]=await n();return o}function R6(e,{body:t,onResponse:n}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new Yv({body:t,url:e.url,details:"Socket is closed."});const r=Vu++,o=({data:i})=>{var a;const s=JSON.parse(i);typeof s.id=="number"&&r!==s.id||(n==null||n(s),t.method==="eth_subscribe"&&typeof s.result=="string"&&e.subscriptions.set(s.result,o),t.method==="eth_unsubscribe"&&e.subscriptions.delete((a=t.params)==null?void 0:a[0]))};return e.requests.set(r,o),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:r})),e}async function M6(e,{body:t,timeout:n=1e4}){return aw(()=>new Promise(r=>Pi.webSocket(e,{body:t,onResponse:r})),{errorInstance:new ju({body:t,url:e.url}),timeout:n})}const Pi={http:k6,webSocket:R6,webSocketAsync:M6};function $6(e,t={}){const{batch:n,fetchOptions:r,key:o="http",name:i="HTTP JSON-RPC",retryDelay:s}=t;return({chain:a,retryCount:c,timeout:l})=>{const{batchSize:u=1e3,wait:f=0}=typeof n=="object"?n:{},g=t.retryCount??c,w=l??t.timeout??1e4,b=e||(a==null?void 0:a.rpcUrls.default.http[0]);if(!b)throw new sw;return Yc({key:o,name:i,async request({method:v,params:A}){const _={method:v,params:A},{schedule:m}=E0({id:`${e}`,wait:f,shouldSplitBatch(P){return P.length>u},fn:P=>Pi.http(b,{body:P,fetchOptions:r,timeout:w})}),C=async P=>n?m(P):[await Pi.http(b,{body:P,fetchOptions:r,timeout:w})],[{error:x,result:E}]=await C(_);if(x)throw new m0({body:_,error:x,url:b});return E},retryCount:g,retryDelay:s,timeout:w,type:"http"},{url:e})}}function I0(e,t){var r,o,i;if(!(e instanceof ee))return!1;const n=e.walk(s=>s instanceof Lu);return n instanceof Lu?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((o=n.data)==null?void 0:o.errorName)==="ResolverWildcardNotSupported"||(i=n.reason)!=null&&i.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&n.reason===Zg[50]):!1}function cw(e){if(e.length!==66||e.indexOf("[")!==0||e.indexOf("]")!==65)return null;const t=`0x${e.slice(1,65)}`;return _n(t)?t:null}function _a(e){let t=new Uint8Array(32).fill(0);if(!e)return Ko(t);const n=e.split(".");for(let r=n.length-1;r>=0;r-=1){const o=cw(n[r]),i=o?Hr(o):Dt(Ln(n[r]),"bytes");t=Dt(Wn([t,i]),"bytes")}return Ko(t)}function N6(e){return`[${e.slice(2)}]`}function U6(e){const t=new Uint8Array(32).fill(0);return e?cw(e)||Dt(Ln(e)):Ko(t)}function Jc(e){const t=e.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);const n=new Uint8Array(Ln(t).byteLength+2);let r=0;const o=t.split(".");for(let i=0;i<o.length;i++){let s=Ln(o[i]);s.byteLength>255&&(s=Ln(N6(U6(o[i])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function F6(e,{blockNumber:t,blockTag:n,coinType:r,name:o,universalResolverAddress:i}){let s=i;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=no({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=yr({abi:Th,functionName:"addr",...r!=null?{args:[_a(o),BigInt(r)]}:{args:[_a(o)]}}),c=await ur(e,{address:s,abi:nw,functionName:"resolve",args:[Gn(Jc(o)),a],blockNumber:t,blockTag:n});if(c[0]==="0x")return null;const l=ao({abi:Th,args:r!=null?[_a(o),BigInt(r)]:void 0,functionName:"addr",data:c[0]});return l==="0x"||Lr(l)==="0x00"?null:l}catch(a){if(I0(a,"resolve"))return null;throw a}}class L6 extends ee{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class xo extends ee{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class T0 extends ee{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class j6 extends ee{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const W6=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,z6=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,H6=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,V6=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function q6(e){try{const t=await fetch(e,{method:"HEAD"});if(t.status===200){const n=t.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=e})}}function Rh(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function lw({uri:e,gatewayUrls:t}){const n=H6.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};const r=Rh(t==null?void 0:t.ipfs,"https://ipfs.io"),o=Rh(t==null?void 0:t.arweave,"https://arweave.net"),i=e.match(W6),{protocol:s,subpath:a,target:c,subtarget:l=""}=(i==null?void 0:i.groups)||{},u=s==="ipns:/"||a==="ipns/",f=s==="ipfs:/"||a==="ipfs/"||z6.test(e);if(e.startsWith("http")&&!u&&!f){let w=e;return t!=null&&t.arweave&&(w=e.replace(/https:\/\/arweave.net/g,t==null?void 0:t.arweave)),{uri:w,isOnChain:!1,isEncoded:!1}}if((u||f)&&c)return{uri:`${r}/${u?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&c)return{uri:`${o}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let g=e.replace(V6,"");if(g.startsWith("<svg")&&(g=`data:image/svg+xml;base64,${btoa(g)}`),g.startsWith("data:")||g.startsWith("{"))return{uri:g,isOnChain:!0,isEncoded:!1};throw new T0({uri:e})}function uw(e){if(typeof e!="object"||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new L6({data:e});return e.image||e.image_url||e.image_data}async function G6({gatewayUrls:e,uri:t}){try{const n=await fetch(t).then(o=>o.json());return await O0({gatewayUrls:e,uri:uw(n)})}catch{throw new T0({uri:t})}}async function O0({gatewayUrls:e,uri:t}){const{uri:n,isOnChain:r}=lw({uri:t,gatewayUrls:e});if(r||await q6(n))return n;throw new T0({uri:t})}function K6(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[n,r,o]=t.split("/"),[i,s]=n.split(":"),[a,c]=r.split(":");if(!i||i.toLowerCase()!=="eip155")throw new xo({reason:"Only EIP-155 supported"});if(!s)throw new xo({reason:"Chain ID not found"});if(!c)throw new xo({reason:"Contract address not found"});if(!o)throw new xo({reason:"Token ID not found"});if(!a)throw new xo({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:c,tokenID:o}}async function Q6(e,{nft:t}){if(t.namespace==="erc721")return ur(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return ur(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new j6({namespace:t.namespace})}async function Z6(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?Y6(e,{gatewayUrls:t,record:n}):O0({uri:n,gatewayUrls:t})}async function Y6(e,{gatewayUrls:t,record:n}){const r=K6(n),o=await Q6(e,{nft:r}),{uri:i,isOnChain:s,isEncoded:a}=lw({uri:o,gatewayUrls:t});if(s&&(i.includes("data:application/json;base64,")||i.startsWith("{"))){const l=a?atob(i.replace("data:application/json;base64,","")):i,u=JSON.parse(l);return O0({uri:uw(u),gatewayUrls:t})}let c=r.tokenID;return r.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),G6({gatewayUrls:t,uri:i.replace(/(?:0x)?{id}/,c)})}async function fw(e,{blockNumber:t,blockTag:n,name:r,key:o,universalResolverAddress:i}){let s=i;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=no({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=await ur(e,{address:s,abi:nw,functionName:"resolve",args:[Gn(Jc(r)),yr({abi:Ih,functionName:"text",args:[_a(r),o]})],blockNumber:t,blockTag:n});if(a[0]==="0x")return null;const c=ao({abi:Ih,functionName:"text",data:a[0]});return c===""?null:c}catch(a){if(I0(a,"resolve"))return null;throw a}}async function J6(e,{blockNumber:t,blockTag:n,gatewayUrls:r,name:o,universalResolverAddress:i}){const s=await fw(e,{blockNumber:t,blockTag:n,key:"avatar",name:o,universalResolverAddress:i});if(!s)return null;try{return await Z6(e,{record:s,gatewayUrls:r})}catch{return null}}async function X6(e,{address:t,blockNumber:n,blockTag:r,universalResolverAddress:o}){let i=o;if(!i){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");i=no({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}const s=`${t.toLowerCase().substring(2)}.addr.reverse`;try{return(await ur(e,{address:i,abi:f6,functionName:"reverse",args:[Gn(Jc(s))],blockNumber:n,blockTag:r}))[0]}catch(a){if(I0(a,"reverse"))return null;throw a}}async function e4(e,{blockNumber:t,blockTag:n,name:r,universalResolverAddress:o}){let i=o;if(!i){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");i=no({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[s]=await ur(e,{address:i,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Gn(Jc(r))],blockNumber:t,blockTag:n});return s}async function t4(e){const t=Vc(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}async function dw(e,{address:t,args:n,event:r,events:o,fromBlock:i,strict:s,toBlock:a}={}){const c=o??(r?[r]:void 0),l=Vc(e,{method:"eth_newFilter"});let u=[];c&&(u=[c.flatMap(g=>Us({abi:[g],eventName:g.name,args:n}))],r&&(u=u[0]));const f=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof i=="bigint"?De(i):i,toBlock:typeof a=="bigint"?De(a):a,...u.length?{topics:u}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:i,id:f,request:l(f),strict:s,toBlock:a,type:"event"}}async function hw(e){const t=Vc(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}async function n4(e,{address:t,blockNumber:n,blockTag:r="latest"}){const o=n?De(n):void 0,i=await e.request({method:"eth_getBalance",params:[t,o||r]});return BigInt(i)}async function r4(e,{blockHash:t,blockNumber:n,blockTag:r="latest"}={}){const o=n!==void 0?De(n):void 0;let i;return t?i=await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):i=await e.request({method:"eth_getBlockTransactionCountByNumber",params:[o||r]}),Ct(i)}async function i4(e,{address:t,blockNumber:n,blockTag:r="latest"}){const o=n!==void 0?De(n):void 0,i=await e.request({method:"eth_getCode",params:[t,o||r]});if(i!=="0x")return i}function o4(e){var t;return{baseFeePerGas:e.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:(t=e.reward)==null?void 0:t.map(n=>n.map(r=>BigInt(r)))}}async function s4(e,{blockCount:t,blockNumber:n,blockTag:r="latest",rewardPercentiles:o}){const i=n?De(n):void 0,s=await e.request({method:"eth_feeHistory",params:[De(t),i||r,o]});return o4(s)}async function a4(e,{filter:t}){const n=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(o=>{var i;try{const{eventName:s,args:a}="abi"in t&&t.abi?js({abi:t.abi,data:o.data,topics:o.topics,strict:n}):{eventName:void 0,args:void 0};return sn(o,{args:a,eventName:s})}catch(s){let a,c;if(s instanceof Vr||s instanceof io){if("strict"in t&&t.strict)return;a=s.abiItem.name,c=(i=s.abiItem.inputs)==null?void 0:i.some(l=>!("name"in l&&l.name))}return sn(o,{args:c?[]:{},eventName:a})}}).filter(Boolean)}async function c4(e,{address:t,blockNumber:n,blockTag:r="latest",slot:o}){const i=n!==void 0?De(n):void 0;return await e.request({method:"eth_getStorageAt",params:[t,o,i||r]})}async function B0(e,{blockHash:t,blockNumber:n,blockTag:r,hash:o,index:i}){var u,f,g;const s=r||"latest",a=n!==void 0?De(n):void 0;let c=null;if(o?c=await e.request({method:"eth_getTransactionByHash",params:[o]}):t?c=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,De(i)]}):(a||s)&&(c=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,De(i)]})),!c)throw new Og({blockHash:t,blockNumber:n,blockTag:s,hash:o,index:i});return(((g=(f=(u=e.chain)==null?void 0:u.formatters)==null?void 0:f.transaction)==null?void 0:g.format)||Ig)(c)}async function l4(e,{hash:t,transactionReceipt:n}){const[r,o]=await Promise.all([Ws(e),t?B0(e,{hash:t}):void 0]),i=(n==null?void 0:n.blockNumber)||(o==null?void 0:o.blockNumber);return i?r-i+1n:0n}async function qu(e,{hash:t}){var o,i,s;const n=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!n)throw new Bg({hash:t});return(((s=(i=(o=e.chain)==null?void 0:o.formatters)==null?void 0:i.transactionReceipt)==null?void 0:s.format)||Py)(n)}async function u4(e,t){var v;const{allowFailure:n=!0,batchSize:r,blockNumber:o,blockTag:i,contracts:s,multicallAddress:a}=t,c=r??(typeof((v=e.batch)==null?void 0:v.multicall)=="object"&&e.batch.multicall.batchSize||1024);let l=a;if(!l){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");l=no({blockNumber:o,chain:e.chain,contract:"multicall3"})}const u=[[]];let f=0,g=0;for(let A=0;A<s.length;A++){const{abi:_,address:m,args:C,functionName:x}=s[A];try{const E=yr({abi:_,args:C,functionName:x});g+=(E.length-2)/2,c>0&&g>c&&u[f].length>0&&(f++,g=(E.length-2)/2,u[f]=[]),u[f]=[...u[f],{allowFailure:!0,callData:E,target:m}]}catch(E){const P=us(E,{abi:_,address:m,args:C,docsPath:"/docs/contract/multicall",functionName:x});if(!n)throw P;u[f]=[...u[f],{allowFailure:!0,callData:"0x",target:m}]}}const w=await Promise.allSettled(u.map(A=>ur(e,{abi:zu,address:l,args:[A],blockNumber:o,blockTag:i,functionName:"aggregate3"}))),b=[];for(let A=0;A<w.length;A++){const _=w[A];if(_.status==="rejected"){if(!n)throw _.reason;for(let C=0;C<u[A].length;C++)b.push({status:"failure",error:_.reason,result:void 0});continue}const m=_.value;for(let C=0;C<m.length;C++){const{returnData:x,success:E}=m[C],{callData:P}=u[A][C],{abi:h,address:D,functionName:$,args:F}=s[b.length];try{if(P==="0x")throw new zc;if(!E)throw new b0({data:x});const z=ao({abi:h,args:F,data:x,functionName:$});b.push(n?{result:z,status:"success"}:z)}catch(z){const ie=us(z,{abi:h,address:D,args:F,docsPath:"/docs/contract/multicall",functionName:$});if(!n)throw ie;b.push({error:ie,result:void 0,status:"failure"})}}}if(b.length!==s.length)throw new ee("multicall results mismatch");return b}const f4=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,d4=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function h4({domain:e,message:t,primaryType:n,types:r}){const o=typeof e>"u"?{}:e,i={EIP712Domain:yw({domain:o}),...r};mw({domain:o,message:t,primaryType:n,types:i});const s=["0x1901"];return o&&s.push(p4({domain:o,types:i})),n!=="EIP712Domain"&&s.push(pw({data:t,primaryType:n,types:i})),Dt(Wn(s))}function p4({domain:e,types:t}){return pw({data:e,primaryType:"EIP712Domain",types:t})}function pw({data:e,primaryType:t,types:n}){const r=gw({data:e,primaryType:t,types:n});return Dt(r)}function gw({data:e,primaryType:t,types:n}){const r=[{type:"bytes32"}],o=[g4({primaryType:t,types:n})];for(const i of n[t]){const[s,a]=bw({types:n,name:i.name,type:i.type,value:e[i.name]});r.push(s),o.push(a)}return $s(r,o)}function g4({primaryType:e,types:t}){const n=Gn(w4({primaryType:e,types:t}));return Dt(n)}function w4({primaryType:e,types:t}){let n="";const r=ww({primaryType:e,types:t});r.delete(e);const o=[e,...Array.from(r).sort()];for(const i of o)n+=`${i}(${t[i].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function ww({primaryType:e,types:t},n=new Set){const r=e.match(/^\w*/u),o=r==null?void 0:r[0];if(n.has(o)||t[o]===void 0)return n;n.add(o);for(const i of t[o])ww({primaryType:i.type,types:t},n);return n}function bw({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:"bytes32"},Dt(gw({data:r,primaryType:n,types:e}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Dt(r)];if(n==="string")return[{type:"bytes32"},Dt(Gn(r))];if(n.lastIndexOf("]")===n.length-1){const o=n.slice(0,n.lastIndexOf("[")),i=r.map(s=>bw({name:t,type:o,types:e,value:s}));return[{type:"bytes32"},Dt($s(i.map(([s])=>s),i.map(([,s])=>s)))]}return[{type:n},r]}function mw({domain:e,message:t,primaryType:n,types:r}){const o=r,i=(s,a)=>{for(const c of s){const{name:l,type:u}=c,f=u,g=a[l],w=f.match(d4);if(w&&(typeof g=="number"||typeof g=="bigint")){const[A,_,m]=w;De(g,{signed:_==="int",size:parseInt(m)/8})}if(f==="address"&&typeof g=="string"&&!ki(g))throw new Qo({address:g});const b=f.match(f4);if(b){const[A,_]=b;if(_&&ot(g)!==parseInt(_))throw new Yy({expectedSize:parseInt(_),givenSize:ot(g)})}const v=o[f];v&&i(v,g)}};if(o.EIP712Domain&&e&&i(o.EIP712Domain,e),n!=="EIP712Domain"){const s=o[n];i(s,t)}}function yw({domain:e}){return[typeof(e==null?void 0:e.name)=="string"&&{name:"name",type:"string"},(e==null?void 0:e.version)&&{name:"version",type:"string"},typeof(e==null?void 0:e.chainId)=="number"&&{name:"chainId",type:"uint256"},(e==null?void 0:e.verifyingContract)&&{name:"verifyingContract",type:"address"},(e==null?void 0:e.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const Nl="/docs/contract/encodeDeployData";function vw({abi:e,args:t,bytecode:n}){if(!t||t.length===0)return n;const r=e.find(i=>"type"in i&&i.type==="constructor");if(!r)throw new Hy({docsPath:Nl});if(!("inputs"in r))throw new vh({docsPath:Nl});if(!r.inputs||r.inputs.length===0)throw new vh({docsPath:Nl});const o=$s(r.inputs,t);return o0([n,o])}function b4(e,t){const n=(()=>typeof e=="string"?Ln(e):e.raw instanceof Uint8Array?e.raw:Hr(e.raw))(),r=Ln(`Ethereum Signed Message:
${n.length}`);return Dt(Wn([r,n]),t)}const m4="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function y4(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function v4(e,t){const n=_n(e)?Hr(e):e,r=_n(t)?Hr(t):t;return y4(n,r)}async function xw(e,{address:t,hash:n,signature:r,...o}){const i=_n(r)?r:Gn(r);try{const{data:s}=await Kc(e,{data:vw({abi:d6,args:[t,n,i],bytecode:m4}),...o});return v4(s??"0x0","0x1")}catch(s){if(s instanceof Jg)return!1;throw s}}async function x4(e,{address:t,message:n,signature:r,...o}){const i=b4(n);return xw(e,{address:t,hash:i,signature:r,...o})}async function A4(e,{address:t,signature:n,message:r,primaryType:o,types:i,domain:s,...a}){const c=h4({message:r,primaryType:o,types:i,domain:s});return xw(e,{address:t,hash:c,signature:n,...a})}function Aw(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:o,poll:i,pollingInterval:s=e.pollingInterval}){const a=typeof i<"u"?i:e.transport.type!=="webSocket";let c;return a?(()=>{const f=Et(["watchBlockNumber",e.uid,t,n,s]);return co(f,{onBlockNumber:r,onError:o},g=>Ls(async()=>{var w;try{const b=await Ws(e,{cacheTime:0});if(c){if(b===c)return;if(b-c>1&&n)for(let v=c+1n;v<b;v++)g.onBlockNumber(v,c),c=v}(!c||b>c)&&(g.onBlockNumber(b,c),c=b)}catch(b){(w=g.onError)==null||w.call(g,b)}},{emitOnBegin:t,interval:s}))})():(()=>{let f=!0,g=()=>f=!1;return(async()=>{try{const{unsubscribe:w}=await e.transport.subscribe({params:["newHeads"],onData(b){var A;if(!f)return;const v=Fc((A=b.result)==null?void 0:A.number);r(v,c),c=v},onError(b){o==null||o(b)}});g=w,f||g()}catch(w){o==null||o(w)}})(),g})()}async function C4(e,{confirmations:t=1,hash:n,onReplaced:r,pollingInterval:o=e.pollingInterval,timeout:i}){const s=Et(["waitForTransactionReceipt",e.uid,n]);let a,c,l,u=!1;return new Promise((f,g)=>{i&&setTimeout(()=>g(new Ny({hash:n})),i);const w=co(s,{onReplaced:r,resolve:f,reject:g},b=>{const v=Aw(e,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:o,async onBlockNumber(A){if(u)return;let _=A;const m=C=>{v(),C(),w()};try{if(l){if(t>1&&(!l.blockNumber||_-l.blockNumber+1n<t))return;m(()=>b.resolve(l));return}if(a||(u=!0,await iw(async()=>{a=await B0(e,{hash:n}),a.blockNumber&&(_=a.blockNumber)},{delay:({count:C})=>~~(1<<C)*200,retryCount:6}),u=!1),l=await qu(e,{hash:n}),t>1&&(!l.blockNumber||_-l.blockNumber+1n<t))return;m(()=>b.resolve(l))}catch(C){if(a&&(C instanceof Og||C instanceof Bg))try{c=a;const E=(await lr(e,{blockNumber:_,includeTransactions:!0})).transactions.find(({from:h,nonce:D})=>h===c.from&&D===c.nonce);if(!E||(l=await qu(e,{hash:E.hash}),t>1&&(!l.blockNumber||_-l.blockNumber+1n<t)))return;let P="replaced";E.to===c.to&&E.value===c.value?P="repriced":E.from===E.to&&E.value===0n&&(P="cancelled"),m(()=>{var h;(h=b.onReplaced)==null||h.call(b,{reason:P,replacedTransaction:c,transaction:E,transactionReceipt:l}),b.resolve(l)})}catch(x){m(()=>b.reject(x))}else m(()=>b.reject(C))}}})})})}function E4(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:o,onError:i,includeTransactions:s,poll:a,pollingInterval:c=e.pollingInterval}){const l=typeof a<"u"?a:e.transport.type!=="webSocket",u=s??!1;let f;return l?(()=>{const b=Et(["watchBlocks",e.uid,n,r,u,c]);return co(b,{onBlock:o,onError:i},v=>Ls(async()=>{var A;try{const _=await lr(e,{blockTag:t,includeTransactions:u});if(_.number&&(f!=null&&f.number)){if(_.number===f.number)return;if(_.number-f.number>1&&n)for(let m=(f==null?void 0:f.number)+1n;m<_.number;m++){const C=await lr(e,{blockNumber:m,includeTransactions:u});v.onBlock(C,f),f=C}}(!(f!=null&&f.number)||t==="pending"&&!(_!=null&&_.number)||_.number&&_.number>f.number)&&(v.onBlock(_,f),f=_)}catch(_){(A=v.onError)==null||A.call(v,_)}},{emitOnBegin:r,interval:c}))})():(()=>{let b=!0,v=()=>b=!1;return(async()=>{try{const{unsubscribe:A}=await e.transport.subscribe({params:["newHeads"],onData(_){var x,E,P;if(!b)return;const C=(((P=(E=(x=e.chain)==null?void 0:x.formatters)==null?void 0:E.block)==null?void 0:P.format)||Tg)(_.result);o(C,f),f=C},onError(_){i==null||i(_)}});v=A,b||v()}catch(A){i==null||i(A)}})(),v})()}function _4(e,{address:t,args:n,batch:r=!0,event:o,events:i,onError:s,onLogs:a,poll:c,pollingInterval:l=e.pollingInterval,strict:u}){const f=typeof c<"u"?c:e.transport.type!=="webSocket",g=u??!1;return f?(()=>{const v=Et(["watchEvent",t,n,r,e.uid,o,l]);return co(v,{onLogs:a,onError:s},A=>{let _,m,C=!1;const x=Ls(async()=>{var E;if(!C){try{m=await dw(e,{address:t,args:n,event:o,events:i,strict:g})}catch{}C=!0;return}try{let P;if(m)P=await Qc(e,{filter:m});else{const h=await Ws(e);_&&_!==h?P=await _0(e,{address:t,args:n,event:o,events:i,fromBlock:_+1n,toBlock:h}):P=[],_=h}if(P.length===0)return;r?A.onLogs(P):P.forEach(h=>A.onLogs([h]))}catch(P){m&&P instanceof qr&&(C=!1),(E=A.onError)==null||E.call(A,P)}},{emitOnBegin:!0,interval:l});return async()=>{m&&await Zc(e,{filter:m}),x()}})})():(()=>{let v=!0,A=()=>v=!1;return(async()=>{try{const _=i??(o?[o]:void 0);let m=[];_&&(m=[_.flatMap(x=>Us({abi:[x],eventName:x.name,args:n}))],o&&(m=m[0]));const{unsubscribe:C}=await e.transport.subscribe({params:["logs",{address:t,topics:m}],onData(x){var P;if(!v)return;const E=x.result;try{const{eventName:h,args:D}=js({abi:_,data:E.data,topics:E.topics,strict:g}),$=sn(E,{args:D,eventName:h});a([$])}catch(h){let D,$;if(h instanceof Vr||h instanceof io){if(u)return;D=h.abiItem.name,$=(P=h.abiItem.inputs)==null?void 0:P.some(z=>!("name"in z&&z.name))}const F=sn(E,{args:$?[]:{},eventName:D});a([F])}},onError(x){s==null||s(x)}});A=C,v||A()}catch(_){s==null||s(_)}})(),A})()}function S4(e,{batch:t=!0,onError:n,onTransactions:r,poll:o,pollingInterval:i=e.pollingInterval}){return(typeof o<"u"?o:e.transport.type!=="webSocket")?(()=>{const l=Et(["watchPendingTransactions",e.uid,t,i]);return co(l,{onTransactions:r,onError:n},u=>{let f;const g=Ls(async()=>{var w;try{if(!f)try{f=await hw(e);return}catch(v){throw g(),v}const b=await Qc(e,{filter:f});if(b.length===0)return;t?u.onTransactions(b):b.forEach(v=>u.onTransactions([v]))}catch(b){(w=u.onError)==null||w.call(u,b)}},{emitOnBegin:!0,interval:i});return async()=>{f&&await Zc(e,{filter:f}),g()}})})():(()=>{let l=!0,u=()=>l=!1;return(async()=>{try{const{unsubscribe:f}=await e.transport.subscribe({params:["newPendingTransactions"],onData(g){if(!l)return;const w=g.result;r([w])},onError(g){n==null||n(g)}});u=f,l||u()}catch(f){n==null||n(f)}})(),u})()}function P4(e){return{call:t=>Kc(e,t),createBlockFilter:()=>t4(e),createContractEventFilter:t=>Qg(e,t),createEventFilter:t=>dw(e,t),createPendingTransactionFilter:()=>hw(e),estimateContractGas:t=>c6(e,t),estimateGas:t=>C0(e,t),getBalance:t=>n4(e,t),getBlock:t=>lr(e,t),getBlockNumber:t=>Ws(e,t),getBlockTransactionCount:t=>r4(e,t),getBytecode:t=>i4(e,t),getChainId:()=>ds(e),getEnsAddress:t=>F6(e,t),getEnsAvatar:t=>J6(e,t),getEnsName:t=>X6(e,t),getEnsResolver:t=>e4(e,t),getEnsText:t=>fw(e,t),getFeeHistory:t=>s4(e,t),estimateFeesPerGas:t=>a6(e,t),getFilterChanges:t=>Qc(e,t),getFilterLogs:t=>a4(e,t),getGasPrice:()=>A0(e),getLogs:t=>_0(e,t),estimateMaxPriorityFeePerGas:t=>s6(e,t),getStorageAt:t=>c4(e,t),getTransaction:t=>B0(e,t),getTransactionConfirmations:t=>l4(e,t),getTransactionCount:t=>ew(e,t),getTransactionReceipt:t=>qu(e,t),multicall:t=>u4(e,t),prepareTransactionRequest:t=>Gc(e,t),readContract:t=>ur(e,t),sendRawTransaction:t=>S0(e,t),simulateContract:t=>m6(e,t),verifyMessage:t=>x4(e,t),verifyTypedData:t=>A4(e,t),uninstallFilter:t=>Zc(e,t),waitForTransactionReceipt:t=>C4(e,t),watchBlocks:t=>E4(e,t),watchBlockNumber:t=>Aw(e,t),watchContractEvent:t=>S6(e,t),watchEvent:t=>_4(e,t),watchPendingTransactions:t=>S4(e,t)}}function Mh(e){const{key:t="public",name:n="Public Client"}=e;return rw({...e,key:t,name:n,type:"publicClient"}).extend(P4)}function D4(e,{abi:t,args:n,bytecode:r,...o}){const i=vw({abi:t,args:n,bytecode:r});return P0(e,{...o,data:i})}async function I4(e){return(await e.request({method:"eth_accounts"})).map(n=>g0(n))}async function T4(e){return await e.request({method:"wallet_getPermissions"})}async function O4(e){return(await e.request({method:"eth_requestAccounts"})).map(n=>rn(n))}async function B4(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function k4(e,{account:t=e.account,message:n}){if(!t)throw new so({docsPath:"/docs/actions/wallet/signMessage"});const r=Ht(t);if(r.type==="local")return r.signMessage({message:n});const o=(()=>typeof n=="string"?n0(n):n.raw instanceof Uint8Array?Gn(n.raw):n.raw)();return e.request({method:"personal_sign",params:[o,r.address]})}async function R4(e,t){var l,u,f,g;const{account:n=e.account,chain:r=e.chain,...o}=t;if(!n)throw new so({docsPath:"/docs/actions/wallet/signTransaction"});const i=Ht(n);Fs({account:i,...t});const s=await ds(e);r!==null&&Eg({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((l=e.chain)==null?void 0:l.formatters),c=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||Lc;return i.type==="local"?i.signTransaction({chainId:s,...o},{serializer:(g=(f=e.chain)==null?void 0:f.serializers)==null?void 0:g.transaction}):await e.request({method:"eth_signTransaction",params:[{...c(o),chainId:De(s),from:i.address}]})}async function M4(e,{account:t=e.account,domain:n,message:r,primaryType:o,types:i}){if(!t)throw new so({docsPath:"/docs/actions/wallet/signTypedData"});const s=Ht(t),a={EIP712Domain:yw({domain:n}),...i};if(mw({domain:n,message:r,primaryType:o,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:o,types:a,message:r});const c=Et({domain:n??{},primaryType:o,types:a,message:r},(l,u)=>_n(u)?u.toLowerCase():u);return e.request({method:"eth_signTypedData_v4",params:[s.address,c]})}async function $4(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:De(t)}]})}async function N4(e,t){return await e.request({method:"wallet_watchAsset",params:t})}function U4(e){return{addChain:t=>I6(e,t),deployContract:t=>D4(e,t),getAddresses:()=>I4(e),getChainId:()=>ds(e),getPermissions:()=>T4(e),prepareTransactionRequest:t=>Gc(e,t),requestAddresses:()=>O4(e),requestPermissions:t=>B4(e,t),sendRawTransaction:t=>S0(e,t),sendTransaction:t=>P0(e,t),signMessage:t=>k4(e,t),signTransaction:t=>R4(e,t),signTypedData:t=>M4(e,t),switchChain:t=>$4(e,t),watchAsset:t=>N4(e,t),writeContract:t=>D6(e,t)}}function k0(e){const{key:t="wallet",name:n="Wallet Client",transport:r}=e;return rw({...e,key:t,name:n,transport:i=>r({...i,retryCount:0}),type:"walletClient"}).extend(U4)}function F4(e,t={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:o}=t;return({chain:i,retryCount:s,timeout:a})=>{var f;const c=t.retryCount??s,l=a??t.timeout??1e4,u=e||((f=i==null?void 0:i.rpcUrls.default.webSocket)==null?void 0:f[0]);if(!u)throw new sw;return Yc({key:n,name:r,async request({method:g,params:w}){const b={method:g,params:w},v=await $l(u),{error:A,result:_}=await Pi.webSocketAsync(v,{body:b,timeout:l});if(A)throw new m0({body:b,error:A,url:u});return _},retryCount:c,retryDelay:o,timeout:l,type:"webSocket"},{getSocket(){return $l(u)},async subscribe({params:g,onData:w,onError:b}){const v=await $l(u),{result:A}=await new Promise((_,m)=>Pi.webSocket(v,{body:{method:"eth_subscribe",params:g},onResponse(C){if(C.error){m(C.error),b==null||b(C.error);return}if(typeof C.id=="number"){_(C);return}C.method==="eth_subscription"&&w(C.params)}}));return{subscriptionId:A,async unsubscribe(){return new Promise(_=>Pi.webSocket(v,{body:{method:"eth_unsubscribe",params:[A]},onResponse:_}))}}}})}}function L4(e){var n;if(!e)return"Injected";const t=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=e.providers)!=null&&n.length){const r=new Set;let o=1;for(const s of e.providers){let a=t(s);a||(a=`Unknown Wallet #${o}`,o+=1),r.add(a)}const i=[...r];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}var Sa,Cw=class extends c0{constructor({chains:e,options:t}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const o=window.ethereum;return o!=null&&o.providers?o.providers[0]:o},...t};super({chains:e,options:n}),this.id="injected",Pt(this,Sa,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=o=>{o.length===0?this.emit("disconnect"):this.emit("change",{account:rn(o[0])})},this.onChainChanged=o=>{const i=La(o),s=this.isChainUnsupported(i);this.emit("change",{chain:{id:i,unsupported:s}})},this.onDisconnect=async o=>{var i;o.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((i=this.storage)==null||i.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const o=L4(r);n.name?this.name=n.name(o):typeof o=="string"?this.name=o:this.name=o[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:e}={}){var t;try{const n=await this.getProvider();if(!n)throw new Un;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),o=rn(r[0]);let i=await this.getChainId(),s=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,s=this.isChainUnsupported(i)),this.options.shimDisconnect&&((t=this.storage)==null||t.setItem(this.shimDisconnectKey,!0)),{account:o,chain:{id:i,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new It(n):n.code===-32002?new Mi(n):n}}async disconnect(){var t;const e=await this.getProvider();e!=null&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((t=this.storage)==null||t.removeItem(this.shimDisconnectKey)))}async getAccount(){const e=await this.getProvider();if(!e)throw new Un;const t=await e.request({method:"eth_accounts"});return rn(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new Un;return e.request({method:"eth_chainId"}).then(La)}async getProvider(){const e=this.options.getProvider();return e&&Zo(this,Sa,e),We(this,Sa)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(o=>o.id===e);if(!t)throw new Error("provider is required.");return k0({account:n,chain:r,transport:D0(t)})}async isAuthorized(){var e;try{if(this.options.shimDisconnect&&!((e=this.storage)!=null&&e.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new Un;return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r,o,i;const t=await this.getProvider();if(!t)throw new Un;const n=De(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===e&&s()}))]),this.chains.find(s=>s.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(c=>c.id===e);if(!a)throw new Rg({chainId:e,connectorId:this.id});if(s.code===4902||((o=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:o.code)===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((i=a.rpcUrls.public)==null?void 0:i.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==e)throw new It(new Error("User rejected switch after adding network."));return a}catch(c){throw new It(c)}throw this.isUserRejectedRequestError(s)?new It(s):new zn(s)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){const o=await this.getProvider();if(!o)throw new Un;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}isUserRejectedRequestError(e){return e.code===4001}};Sa=new WeakMap;var R0=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},Ul=(e,t,n)=>(R0(e,t,"read from private field"),n?n.call(e):t.get(e)),Fl=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},ha=(e,t,n,r)=>(R0(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),j4=(e,t,n)=>(R0(e,t,"access private method"),n);const W4=e=>(t,n,r)=>{const o=r.subscribe;return r.subscribe=(s,a,c)=>{let l=s;if(a){const u=(c==null?void 0:c.equalityFn)||Object.is;let f=s(r.getState());l=g=>{const w=s(g);if(!u(f,w)){const b=f;a(f=w,b)}},c!=null&&c.fireImmediately&&a(f,f)}return o(l)},e(t,n,r)},z4=W4;function H4(e,t){let n;try{n=e()}catch{return}return{getItem:o=>{var i;const s=c=>c===null?null:JSON.parse(c,t==null?void 0:t.reviver),a=(i=n.getItem(o))!=null?i:null;return a instanceof Promise?a.then(s):s(a)},setItem:(o,i)=>n.setItem(o,JSON.stringify(i,t==null?void 0:t.replacer)),removeItem:o=>n.removeItem(o)}}const hs=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return hs(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return hs(r)(n)}}}},V4=(e,t)=>(n,r,o)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:A=>A,version:0,merge:(A,_)=>({..._,...A}),...t},s=!1;const a=new Set,c=new Set;let l;try{l=i.getStorage()}catch{}if(!l)return e((...A)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...A)},r,o);const u=hs(i.serialize),f=()=>{const A=i.partialize({...r()});let _;const m=u({state:A,version:i.version}).then(C=>l.setItem(i.name,C)).catch(C=>{_=C});if(_)throw _;return m},g=o.setState;o.setState=(A,_)=>{g(A,_),f()};const w=e((...A)=>{n(...A),f()},r,o);let b;const v=()=>{var A;if(!l)return;s=!1,a.forEach(m=>m(r()));const _=((A=i.onRehydrateStorage)==null?void 0:A.call(i,r()))||void 0;return hs(l.getItem.bind(l))(i.name).then(m=>{if(m)return i.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==i.version){if(i.migrate)return i.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var C;return b=i.merge(m,(C=r())!=null?C:w),n(b,!0),f()}).then(()=>{_==null||_(b,void 0),s=!0,c.forEach(m=>m(b))}).catch(m=>{_==null||_(void 0,m)})};return o.persist={setOptions:A=>{i={...i,...A},A.getStorage&&(l=A.getStorage())},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>v(),hasHydrated:()=>s,onHydrate:A=>(a.add(A),()=>{a.delete(A)}),onFinishHydration:A=>(c.add(A),()=>{c.delete(A)})},v(),b||w},q4=(e,t)=>(n,r,o)=>{let i={storage:H4(()=>localStorage),partialize:v=>v,version:0,merge:(v,A)=>({...A,...v}),...t},s=!1;const a=new Set,c=new Set;let l=i.storage;if(!l)return e((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...v)},r,o);const u=()=>{const v=i.partialize({...r()});return l.setItem(i.name,{state:v,version:i.version})},f=o.setState;o.setState=(v,A)=>{f(v,A),u()};const g=e((...v)=>{n(...v),u()},r,o);let w;const b=()=>{var v,A;if(!l)return;s=!1,a.forEach(m=>{var C;return m((C=r())!=null?C:g)});const _=((A=i.onRehydrateStorage)==null?void 0:A.call(i,(v=r())!=null?v:g))||void 0;return hs(l.getItem.bind(l))(i.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==i.version){if(i.migrate)return i.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var C;return w=i.merge(m,(C=r())!=null?C:g),n(w,!0),u()}).then(()=>{_==null||_(w,void 0),w=r(),s=!0,c.forEach(m=>m(w))}).catch(m=>{_==null||_(void 0,m)})};return o.persist={setOptions:v=>{i={...i,...v},v.storage&&(l=v.storage)},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>b(),hasHydrated:()=>s,onHydrate:v=>(a.add(v),()=>{a.delete(v)}),onFinishHydration:v=>(c.add(v),()=>{c.delete(v)})},i.skipHydration||b(),w||g},G4=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?V4(e,t):q4(e,t),K4=G4,$h=e=>{let t;const n=new Set,r=(c,l)=>{const u=typeof c=="function"?c(t):c;if(!Object.is(u,t)){const f=t;t=l??typeof u!="object"?u:Object.assign({},t,u),n.forEach(g=>g(t,f))}},o=()=>t,a={setState:r,getState:o,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{n.clear()}};return t=e(r,o,a),a},Q4=e=>e?$h(e):$h;function Ew(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,o]of e)if(!Object.is(o,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function Z4(e){let t=0;function n(){return e[t++]<<8|e[t++]}let r=n(),o=1,i=[0,1];for(let E=1;E<r;E++)i.push(o+=n());let s=n(),a=t;t+=s;let c=0,l=0;function u(){return c==0&&(l=l<<8|e[t++],c=8),l>>--c&1}const f=31,g=2**f,w=g>>>1,b=w>>1,v=g-1;let A=0;for(let E=0;E<f;E++)A=A<<1|u();let _=[],m=0,C=g;for(;;){let E=Math.floor(((A-m+1)*o-1)/C),P=0,h=r;for(;h-P>1;){let F=P+h>>>1;E<i[F]?h=F:P=F}if(P==0)break;_.push(P);let D=m+Math.floor(C*i[P]/o),$=m+Math.floor(C*i[P+1]/o)-1;for(;!((D^$)&w);)A=A<<1&v|u(),D=D<<1&v,$=$<<1&v|1;for(;D&~$&b;)A=A&w|A<<1&v>>>1|u(),D=D<<1^w,$=($^w)<<1|w|1;m=D,C=1+$-D}let x=r-4;return _.map(E=>{switch(E-x){case 3:return x+65792+(e[a++]<<16|e[a++]<<8|e[a++]);case 2:return x+256+(e[a++]<<8|e[a++]);case 1:return x+e[a++];default:return E-1}})}function Y4(e){let t=0;return()=>e[t++]}function _w(e){return Y4(Z4(J4(e)))}function J4(e){let t=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((o,i)=>t[o.charCodeAt(0)]=i);let n=e.length,r=new Uint8Array(6*n>>3);for(let o=0,i=0,s=0,a=0;o<n;o++)a=a<<6|t[e.charCodeAt(o)],s+=6,s>=8&&(r[i++]=a>>(s-=8));return r}function X4(e){return e&1?~e>>1:e>>1}function e8(e,t){let n=Array(e);for(let r=0,o=0;r<e;r++)n[r]=o+=X4(t());return n}function fr(e,t=0){let n=[];for(;;){let r=e(),o=e();if(!o)break;t+=r;for(let i=0;i<o;i++)n.push(t+i);t+=o+1}return n}function Sw(e){return ps(()=>{let t=fr(e);if(t.length)return t})}function Pw(e){let t=[];for(;;){let n=e();if(n==0)break;t.push(t8(n,e))}for(;;){let n=e()-1;if(n<0)break;t.push(n8(n,e))}return t.flat()}function ps(e){let t=[];for(;;){let n=e(t.length);if(!n)break;t.push(n)}return t}function Dw(e,t,n){let r=Array(e).fill().map(()=>[]);for(let o=0;o<t;o++)e8(e,n).forEach((i,s)=>r[s].push(i));return r}function t8(e,t){let n=1+t(),r=t(),o=ps(t);return Dw(o.length,1+e,t).flatMap((s,a)=>{let[c,...l]=s;return Array(o[a]).fill().map((u,f)=>{let g=f*r;return[c+f*n,l.map(w=>w+g)]})})}function n8(e,t){let n=1+t();return Dw(n,1+e,t).map(o=>[o[0],o.slice(1)])}function r8(e){let t=[],n=fr(e);return o(r([]),[]),t;function r(i){let s=e(),a=ps(()=>{let c=fr(e).map(l=>n[l]);if(c.length)return r(c)});return{S:s,B:a,Q:i}}function o({S:i,B:s},a,c){if(!(i&4&&c===a[a.length-1])){i&2&&(c=a[a.length-1]),i&1&&t.push(a);for(let l of s)for(let u of l.Q)o(l,[...a,u],c)}}}var an=_w("AEITLAk1DSsBxwKEAQMBOQDpATAAngDUAHsAoABoAM4AagCNAEQAhABMAHIAOwA9ACsANgAmAGIAHgAvACgAJwAXAC0AGgAjAB8ALwAUACkAEgAeAAkAGwARABkAFgA5ACgALQArADcAFQApABAAHgAiABAAGAAeABMAFwAXBOcF2QEXE943ygXaALgArkYBbgCsCAPMAK6GNjY2NgE/rgwQ8gAEB0YG6zgFXgVfAD0yOQf2vRgFDc/IABUDz546AswKNgKOqAKG3z+Vb5ACxdICg/kBJuYQAPK0AUgCNJQKRpYA6gDpChwAHtvAzxMSRKQEIn4BBAJAGMQP8hAGMPAMBIhuDSIHNACyAHCY76ychgBiBpoCKgbwACIAQgyaFwKqAspCINYIwjADuBRCAPc0cqoAqIQfAB4ELALeHQEkAMAZ1AUBECBTPgmeCY8lIlZgTOqDSQAaABMAHAAVclsAKAAVAE71HN89+gI5X8qc5jUKFyRfVAJfPfMAGgATABwAFXIgY0CeAMPyACIAQAzMFsKqAgHavwViBekC0KYCxLcCClMjpGwUehp0TPwAwhRuAugAEjQ0kBfQmAKBggETIgDEFG4C6AASNAFPUCyYTBEDLgIFLxDecB60Ad5KAHgyEn4COBYoAy4uwD5yAEDoAfwsAM4O0rwBImqIALgMAAwCAIraUAUi3HIeAKgu2AGoBgYGBgYrNAOiAG4BCiA+9Dd7BB8eALEBzgIoAgDmMhJ6OvpQtzOoLjVPBQAGAS4FYAVftr8FcDtkQhlBWEiee5pmZqH/EhoDzA4s+H4qBKpSAlpaAnwisi4BlqqsPGIDTB4EimgQANgCBrJGNioCBzACQGQAcgFoJngAiiQgAJwBUL4ALnAeAbbMAz40KEoEWgF2YAZsAmwA+FAeAzAIDABQSACyAABkAHoAMrwGDvr2IJSGBgAQKAAwALoiTgHYAeIOEjiXf4HvABEAGAA7AEQAPzp3gNrHEGYQYwgFTRBMc0EVEgKzD60L7BEcDNgq0tPfADSwB/IDWgfyA1oDWgfyB/IDWgfyA1oDWgNaA1ocEfAh2scQZg9PBHQFlQWSBN0IiiZQEYgHLwjZVBR0JRxOA0wBAyMsSSM7mjMSJUlME00KCAM2SWyufT8DTjGyVPyQqQPSMlY5cwgFHngSpwAxD3ojNbxOhXpOcacKUk+1tYZJaU5uAsU6rz//CigJmm/Cd1UGRBAeJ6gQ+gw2AbgBPg3wS9sE9AY+BMwfgBkcD9CVnwioLeAM8CbmLqSAXSP4KoYF8Ev3POALUFFrD1wLaAnmOmaBUQMkARAijgrgDTwIcBD2CsxuDegRSAc8A9hJnQCoBwQLFB04FbgmE2KvCww5egb+GvkLkiayEyx6/wXWGiQGUAEsGwIA0i7qhbNaNFwfT2IGBgsoI8oUq1AjDShAunhLGh4HGCWsApRDc0qKUTkeliH5PEANaS4WUX8H+DwIGVILhDyhRq5FERHVPpA9SyJMTC8EOIIsMieOCdIPiAy8fHUBXAkkCbQMdBM0ERo3yAg8BxwwlycnGAgkRphgnQT6ogP2E9QDDgVCCUQHFgO4HDATMRUsBRCBJ9oC9jbYLrYCklaDARoFzg8oH+IQU0fjDuwIngJoA4Yl7gAwFSQAGiKeCEZmAGKP21MILs4IympvI3cDahTqZBF2B5QOWgeqHDYVwhzkcMteDoYLKKayCV4BeAmcAWIE5ggMNV6MoyBEZ1aLWxieIGRBQl3/AjQMaBWiRMCHewKOD24SHgE4AXYHPA0EAnoR8BFuEJgI7oYHNbgz+zooBFIhhiAUCioDUmzRCyom/Az7bAGmEmUDDzRAd/FnrmC5JxgABxwyyEFjIfQLlU/QDJ8axBhFVDEZ5wfCA/Ya9iftQVoGAgOmBhY6UDPxBMALbAiOCUIATA6mGgfaGG0KdIzTATSOAbqcA1qUhgJykgY6Bw4Aag6KBXzoACACqgimAAgA0gNaADwCsAegABwAiEQBQAMqMgEk6AKSA5YINM4BmDIB9iwEHsYMGAD6Om5NAsO0AoBtZqUF4FsCkQJMOAFQKAQIUUpUA7J05ADeAE4GFuJKARiuTc4d5kYB4nIuAMoA/gAIOAcIRAHQAfZwALoBYgs0CaW2uAFQ7CwAhgAYbgHaAowA4AA4AIL0AVYAUAVc/AXWAlJMARQ0Gy5aZAG+AyIBNgEQAHwGzpCozAoiBHAH1gIQHhXkAu8xB7gEAyLiE9BCyAK94VgAMhkKOwqqCqlgXmM2CTR1PVMAER+rPso/UQVUO1Y7WztWO1s7VjtbO1Y7WztWO1sDmsLlwuUKb19IYe4MqQ3XRMs6TBPeYFRgNRPLLboUxBXRJVkZQBq/Jwgl51UMDwct1mYzCC80eBe/AEIpa4NEY4keMwpOHOpTlFT7LR4AtEulM7INrxsYREMFSnXwYi0WEQolAmSEAmJFXlCyAF43IwKh+gJomwJmDAKfhzgeDgJmPgJmKQRxBIIDfxYDfpU5CTl6GjmFOiYmAmwgAjI5OA0CbcoCbbHyjQI2akguAWoA4QDkAE0IB5sMkAEBDsUAELgCdzICdqVCAnlORgJ4vSBf3kWxRvYCfEICessCfQwCfPNIA0iAZicALhhJW0peGBpKzwLRBALQz0sqA4hSA4fpRMiRNQLypF0GAwOxS9FMMCgG0k1PTbICi0ICitvEHgogRmoIugKOOgKOX0OahAKO3AKOX3tRt1M4AA1S11SIApP+ApMPAOwAH1UhVbJV0wksHimYiTLkeGlFPjwCl6IC77VYJKsAXCgClpICln+fAKxZr1oMhFAAPgKWuAKWUVxHXNQCmc4CmWdczV0KHAKcnjnFOqACnBkCn54CnruNACASNC0SAp30Ap6VALhAYTdh8gKe1gKgcQGsAp6iIgKeUahjy2QqKC4CJ7ICJoECoP4CoE/aAqYyAqXRAqgCAIACp/Vof2i0AAZMah9q1AKs5gKssQKtagKtBQJXIAJV3wKx5NoDH1FsmgKywBACsusabONtZm1LYgMl0AK2Xz5CbpMDKUgCuGECuUoYArktenA5cOQCvRwDLbUDMhQCvotyBQMzdAK+HXMlc1ICw84CwwdzhXROOEh04wM8qgADPJ0DPcICxX8CxkoCxhOMAshsVALIRwLJUgLJMQJkoALd1Xh8ZHixeShL0wMYpmcFAmH3GfaVJ3sOXpVevhQCz24Cz28yTlbV9haiAMmwAs92ASztA04Vfk4IAtwqAtuNAtJSA1JfA1NiAQQDVY+AjEIDzhnwY0h4AoLRg5AC2soC2eGEE4RMpz8DhqgAMgNkEYZ0XPwAWALfaALeu3Z6AuIy7RcB8zMqAfSeAfLVigLr9gLpc3wCAur8AurnAPxKAbwC7owC65+WrZcGAu5CA4XjmHxw43GkAvMGAGwDjhmZlgL3FgORcQOSigL3mwL53AL4aZofmq6+OpshA52GAv79AR4APJ8fAJ+2AwWQA6ZtA6bcANTIAwZtoYuiCAwDDEwBEgEiB3AGZLxqCAC+BG7CFI4ethAAGng8ACYDNhJQA4yCAWYqJACM8gAkAOamCqKUCLoGIqbIBQCuBRjCBfAkREUEFn8Fbz5FRzJCKEK7X3gYX8MAlswFOQCQUyCbwDstYDkYutYONhjNGJDJ/QVeBV8FXgVfBWoFXwVeBV8FXgVfBV4FXwVeBV9NHAjejG4JCQkKa17wMgTQA7gGNsLCAMIErsIA7kcwFrkFTT5wPndCRkK9X3w+X+8AWBgzsgCNBcxyzAOm7kaBRC0qCzIdLj08fnTfccH4GckscAFy13U3HgVmBXHJyMm/CNZQYgcHBwqDXoSSxQA6P4gAChbYBuy0KgwAjMoSAwgUAOVsJEQrJlFCuELDSD8qXy5gPS4/KgnIRAUKSz9KPn8+iD53PngCkELDUElCX9JVVnFUETNyWzYCcQASdSZf5zpBIgluogppKjJDJC1CskLDMswIzANf0BUmNRAPEAMGAQYpfqTfcUE0UR7JssmzCWzI0tMKZ0FmD+wQqhgAk5QkTEIsG7BtQM4/Cjo/Sj53QkYcDhEkU05zYjM0Wui8GQqE9CQyQkYcZA9REBU6W0pJPgs7SpwzCogiNEJGG/wPWikqHzc4BwyPaPBlCnhk0GASYDQqdQZKYCBACSIlYLoNCXIXbFVgVBgIBQZk7mAcYJxghGC6YFJgmG8WHga8FdxcsLxhC0MdsgHCMtTICSYcByMKJQGAAnMBNjecWYcCAZEKv04hAOsqdJUR0RQErU3xAaICjqNWBUdmAP4ARBEHOx1egRKsEysmwbZOAFYTOwMAHBO+NVsC2RJLbBEiAN9VBnwEESVhADgAvQKhLgsWdrI5P6YgAWIBjQoDA+D0FgaxBlEGwAAky1ywYRC7aBOQCy1GDsIBwgEpCU4DYQUvLy8nJSYoMxktDSgTlABbAnVel1CcCHUmBA94TgHadRbVWCcgsLdN8QcYBVNmAP4ARBEHgQYNK3MRjhKsPzc0zrZdFBIAZsMSAGpKblAoIiLGADgAvQKhLi1CFdUClxiCAVDCWM90eY7epaIO/KAVRBvzEuASDQ8iAwHOCUEQmgwXMhM9EgBCALrVAQkAqwDoAJuRNgAbAGIbzTVzfTEUyAIXCUIrStroIyUSG4QCggTIEbHxcwA+QDQOrT8u1agjB8IQABBBLtUYIAB9suEjD8IhThzUqHclAUQqZiMC8qAPBFPz6x9sDMMNAQhDCkUABccLRAJSDcIIww1DCUMKwy7VqDEOwgyYCCIPkhroBCILwhZCAKcLQhDCCwUYp3vjADtyDEMAAq0JwwUi1/UMBQ110QaCAAfCEmIYEsMBCADxCAAAexViDRbSG/x2F8IYQgAuwgLyqMIAHsICXCcxhgABwgAC6hVDFcIr8qPCz6hCCgKlJ1IAAmIA5+QZwg+lYhW/ywD7GoIIqAUR/3cA38KnwhjiARrCo5J5eQcCqaKKABLCDRsSAAOaAG3CDQALwqdCCBpCAsEIqJzRDwIHx6lCBQDhgi+9bcUDTwAD8gAVwgAHAgAJwgBpkgAawgAOwgkYwo5wFgIAAWIADnIALlIlAAbCABfCCCgADVEAusItAAPCAA6iKvIAsmEAHCIAG8IAAfIKqAAFzQscFeIAB6IAQsIBCQBpwgALggAdwgAIwgmoAAXRAG6mGdwAmAgoAAXRAAFCAAfiAB2iCCgABqEACYIAGzIAbSIA5sKHAAhiAAhCABTCAwBpAgkoAAbRAOOSAAlCC6gOy/tmAAdCAG6jQE8ATgAKwgsAA0IACbQDPgAHIgAZggACEqcCAAoiAApCAAoCp/IGwgAJIgADEgAQQgcAFEIAEXIAD5IADfIADcIAGRINFiIAFUIAbqIWugHCAMEAE0IKAGkyEQDhUgACQgAEWQAXggUiAAbXABjCBCUBgi9ZAEBMALYPBxQMeQAvMXcBqwwIZQJzKhMGBBAOdlJzZjGQJgWHGwVpND0DqAq7BgjfAB0DAgp1AX15TlkbKANWAhxFATMGCnpNxIJZgUcAMAA4CAACAAAAWhHiAIKXMwEyAH3sFBg5TQhRAF4MAAhXAQ6R0wB/QgQnrABhAN0cAJxvPiaSANRyuADW2wEdD8l8eiIfXSQQ2AGPl7IpWlpUTxlDyZAAAACGIz5HMDLnGJ5WAHkBMCw3KUkgFgM3XAT+zPUAUmzjAHECeAJGEYE6zng1NdwCAQwXGSYLGw60tQIBAQEABQIEAgIAGdMCACwBAAUFBQUFBQQEBAQEBAMEBQYHCAMEBAQEAwEBIQCMAI8AlDwA6QC6ANsAo0MAwQCxAKwApwDtAKUA2QCiAOYBBwECAMYAgABhANEA0wECAN0A8QCPAKgBMADpAN4A2woACA4xOtnZ2dm7xeHS1dNINxwBUQFbNEwBWQFoAWcBWgFLUEhKbRIBUhoMDwo5PRINACYTKiwuMT0/P0JCQkNEE0UFI1ZWVlZYWFdYLllaXFtbImJmZmVnZilrbXV0d3d3d3d3eXl5eXl5eXl5eXl7e3x7emEAQ/EASACZAHcAMQBl9wCNAFYAVgA2AnXuAIoABPf3AGMAkvEAngBOAGEAY/7+rwCEAIQAaABVALAAIwC1AIICPwJCAPsA5gD9AP0A5wD+AOgA6ADnAOUALgJ6AVABPwE9AVMBPQE9AT0BOAE3ATcBNwEbAVcWADAPBwAAUh4RHQocHRUAjQCVAKUAUABpHwIwAHUAbgCWAxQDJjEDIEhFTjAAkAJOAMYCVgKjAL8ClQKVApUClQKVApUCigKVApUClQKVApUClQKUApQClwKfApYClQKVApMCkwKTApMCkQKUAnQB0wKWAp4ClQKVApQdgBIEAP0MA54CYAI5HgFTFzwC4RgRMhoBTT4aVJgBeqtDAWhgAQQDQE4BBQCYMB4flnEAMGcAcAA1AJADm8yS8LWLYQzBMhXJARgIpNx7MQsEKmFzAbkA5IWHhoWHhYiJiYWKjYuFjI+Nh46Jj4mQhZGFkoWTkZSFlYWWiZeFmIWZhZqFm4qcj52JnoUAiXMrc6cAinNzBEIEPwRBBEQEQgRIBEUEQARGBEgERwRDBEUESACqA45zANBYc3MA1nMCE3MA/WFzAP0BIAD9APsA+wD8APvbA4sqbMUA/QD7APsA/AD7I3NzAJBhcwD9AJABIAD9AJAC8wD9AJDbA4sqbMUjcwD+YXMBIAD9AP0A+wD7APwA+wD+APsA+wD8APvbA4sqbMUjc3MAkGFzASAA/QCQAP0AkALzAP0AkNsDiypsxSNzAkoBPXMCUQFAcwJSyHNzA6UC8wOl2wOLKmzFI3NzAJBhcwEgA6UAkAOlAJAC8wOlAJDbA4sqbMUjcwQ3cwCQBDgAkA2UOHQnATNz3QdFdQoqcwEEAM1hCXNzAFthAAUaOQlzcwCQCXNE3wBQc90JcwCdbXNzQ4CD8BW5tNbewS6T/Np1iIh1Iy3DtPDAAXjPx9ENpwOgreI1z2BewtbX8Yi21FG1bBeCk7aB4sFY/Hi+/ekcwwyBHP+f0YI9G/iFY/5bObtuyY4MTYyHeQiZ62eBq/P8+68/rJI6cCQTfucgoskxeeDzvfo6MGQtbufZbw0FPGPpUNSG9SSs7NDWGUbpnlDGReZvnpkqvyGbE9edMaFydt2lujOB9XLYEAXRfM2Kx0lHbXJ4cszHh5aoooqxDeYXz4qvSy3ahNyE6DBY8J7v31dfMFEdiyjfirJ6hX3Pa2ygMOeuVytsRijRhyF9mVnMu2RxuZv3hI/Amu/2xe54SmySPFpHGxTUY0pe8SZ3I+HauujP4GbIzZYg6enubuUlyP0funGhg8HHYTHFSQD9Hm7HGbFy4n0sziYcpwdArgmsyy41VMV2ppGXMiMR4deCi34NNmlnftVdxoyCJzK+r1GvJvWDtbf4dPnrf0G9qOgEs2CpD3n+1P6MHu+kHtsR6lMcf3NcCDlg2BVcCpSVRHQRiw7qolVbxHeM9xvBMbdwjpFKXi7QUZOi6YaKam2q+tP/4Q5El2aNNWkj5UfSZY4ugEdPUnNXG3TnvpCSZ5IpiIvjM/Q7pZNYYv80gD+OdT5J+D+8K7RPkhzH4w8mJHEG67poqLR0JygXeOe4Qz7fpS6uh/vOXaryaHpamD78JfCU/VdaCwy9bCrfgh13NQynhoIdWRr1IQREtBfsr9bRjkodN4IdiTUMDdlCuM8mKFhoQzu5fn+1PZwtWpT+RAfPcOYqFvyg15NH3r44CwuiNOuJa3QiXx/LenV02OWmQIs/SX/g9e97kXeFyzzC5o3GZEj1A4edoQL/Hfudd5DbKP9jRl8TN4J6Kc1PFyNVAX5Xac6bdFhUIzF/y2fxEOMqCLdbgMjAScVBfo62Fi65kWkU5AuSnpXNEa53A8jiHAFWPQRbvChz7XzIQ1/JFkW4oI8xBV6UfjKIPDLC7squNvW2nzcUx+fOUY3Ocin2ftqIvHfTUJTRNcd7Ke70yAIwvqOtwoyPaZMBpoXD8wnXXhGcZwxMUx5c5bPIUoEI0NmMFTasTLrC3msRFOTj05Bautfl1sY/SvMF/LAsyI9YLxLDyLAdk5DR3UM3aUic2osD5OeVdqZVW/Q1m1ebiFPdS2jIqNLulNQ8bGE2SLfELriR1KiTO9P5+lrvWYO1fSrGrUt2bWuylLbZPkwOvWGZpLOHyarck2ZRqWS6sCGey7WyzKtSLDf8N998dc1hh6BN4lUthsFzHww9KK8RpC1vUV1amMjRDMR+KvY6u8hOpZEzHdLMb13izFQP3ijwSQCEFVH7Js8hL21h1Vgxap8exSPY1CBI89DYkx6Tv5XhsKTqejQ6qbBFVPb0FeZ+D1SdjxYgqAq6uvJHq7PW8hluldBOJ7puqANPsXDOtG/su5LwU1PnRExiBpZNO+7blORJ7i9gQYmu2AXSSiKxSZIyyJ+0umdON6y4aPTTM0FbgQzMWfO3PXOymBuZ9DjNH4dcMJSwm9PsU05clrl3w1WkZ04jCxhragJpQ4w9q2B/PX0G25bXPNnUGKSL3EAHAUkcsOzO66BRomJQr0Z8uQAcdKYDE3iFkuZQy+yZq2C3vghrwhw2d8jCgn3V2SEF0Obph80afZ5zohDVBkZps5UEZmSaeyACcgZ6Ecj/Z3Shx0cxedqpF4rbvSD14by33Qb4gSiKqHx0WH7WjNWW+fZz2t1PtJAPWvC6IaLarFyTSGtiv46IG1Q3YMBw5bDrisQFBnBi22oUgsO/eSzcLI5+wpv1ZX3aTHBQ79qiLoPd5uu6JrnhGzEeM0/gRT5wwCJ6uPDv35Qi4MGUO2s9+aimuET6TexV/KC9BGv9ibvW0+9hFedmTLXfrk2/sgHRe5wZPR6ao7kFwN3Egab8d2ApFPLOUgTY+d32/+XKglFsszuassqJBzo6MTbCwlYKO4yYdfk2gfjuHXxxdIjaUUcqePg/jf4AWUOsz7EjkKaPqLCzwTwkuPoskO+HPvSSIj56NBqwhlukh/SUlBPCAvpc+1hWM5aIt7e+NWicwHeXmf7JihSLmAxjDWNDmv6lSpQAYgl3KGYcLR/SwD/UbzS+YBYGKLhVlwwyGYf2autLOFuC7hdVncxFH6lx4+53/q/z8ukeP5C9jWhZLQvvvXJkWbnwQUbH8WW8VDTl7dYYgEw/d8e8PZVIP8QO8aJwNBObbcAh1bZg/ev/mIcRpHqvapWZBZJccfvQ55WYxxTdBLqYbSDjLNfI0d/IB7j1JaX07Z1abn2SGfV7zm8TU65Tqui5ZG/m8fTS7ZJVkQbJqcHfdRPbFKgIm9Q6lqhbspKIufB0JN5lyRQHiZp5cOyRLL44fHhfM56Ukt8hCMN0cSOYZcp5mvcoAcpVNPjMcA/siqAhaIn3EO6j0+ArsfN/wEexl90dGjecxE+R4JAHU9hBGZrDrJJ0L3FasUPVvPdmvrRUYY0LSEJpgUBo4pykiQr4GRZ9cAVKhzBxs86T9E+h0iOclANvJaS1ozReL9coKT4XJH2R15ed78yO6xqF3vPVSvwW+hApUYHspT4xNknEfEBks2ZT80sBfcq+kKqQeraVh2FtwOkIyPZc2PIZqDVqS2OfSXUEJ+aPajbV+aVHDMxPd4ak0ln8Lm3mlBsJjoNzm1LCOw1FWMbUNFmAyj82fesmdYwbtO9hz97ErIjkGBD8ojAOzSZzPT7bq7FxmZzdfzjVX5lq0DgHNm/HtOP0Fha40VmytaL4VvkkkmaH1vfbxgid+hNPqf//ggLAH9wOu9cN3TPGf7RkhvnFBg9Ue9dEMIY0QnUn6WfZwgFnf37KcfXeA/7qvv2NJesfukMgngn3pyJLjhbJ8DGZvbF61Q19ZVHZ/HfiOf3XZwiD/xlEDb+fuGzUrWRq7IMm/Qsd6SJc6Lqt4i6YC+L5h62FwYHiS63//p0lyL3iAb18QEPtnpbEUty0Zrt0fktA9L/YFLfrzYT6atdQjL6OMhCrZ4O3UUaYR0yme/4GNO/yHHufyAVpH/OIPEf2OzptXJ19+tA+NpivJNqCKOwUsJHqTzrT2G77O9dBe4ZcGyF0mPkzzJEpTJOjkgCt47TXZnFahlCXR9VbZ0lb1c1wAqXTKUqyPVaxz4Eu3rPJHiM3IXQQ0NjTvzUPG258V7vbrgoezETHlADY7B1WeyNMFYVE/LaWY7bSfQb7lKJ/KMRmoFwCrkwMEEkDen5KTEXCfVJrN+v4OeBxxE44mtzJOKdlLb7tqPfXrxftovGQyuaJhwlI3qpYBgfatKX2BJFeGTK5b4b9aSrMIv0QoyWUKQxoWaM41bP4QW5RbSawNQdN/0wv7aL9Jkk5J66IDpo7KQGXAKznLFeMn7t0F83ZTXPCDUhEjgWM2SA9ChmM5YEHa5l1hI1fsf77dxeRWfVHKPsN3Pbl3Dy5b4QIYb6N4Pm9jAAQLmQlaBBhZw5Ia7PfQ+xKgKJFQbR4F32mFfupbsbWLM9jDeqYdACLyf6uAKgVu9AJQpYtNbCj5wj9nXAWUWbWQL1cXcTXoVZqxjtyS/BsoaURCQi3dk09KVzUA0V6ZlrQ53Kj5AnQOcl+5F45QK+I7z2+zhbRVGq2VwcLCugx3BCQZwoiwsqtS8RQRixu4k8uRiaKZ/k7rmghRah8nMGZhmN6r12o0TqdMaPiD/n4TLE9VhVaO0KPZEGCIhU8QX+UXBAqICxssIsyKn1OrvUgTYYTO4jXEpu2+kVS6L6T5gjC1tufk8YssX4CRRcvyMaWoJuzmhC3Bq/DBUCuPaMuhQPIQfcmps2oqp9AqlngtSCo26+n5fKqSzEU3lpH1SMPRDrw6OdD/LhpNrs1YTHgMmP068bb8qMgF+/ASQedI7CvWdu04rAtlsP7kSnTDkyMw2LiZnpMx+i+ayXB7c3ckJcjFuig7H00vq2OQzM5PPevRdYi+cZJifcz1t3cNSD0yuvsuFXD/Nk2j60H5RpUU+Zrlp99wSgKEAkuC8nBJJnZ9PR+DkXPe3s4UeOKoq99964VWB9Pnva6uKI779pgq9oaspNcGV8vSOMCM8ACQn9kUPweu9UwI2n5+goo05CFaR5kALF5jhYmybPavdtAxmaC//LVF0ZLRkIcU+NGJzY3OdUKILkQKUDGABumIZHHzKw/jCOmPL+Zl8t46Wkz0WFvi9Gu4zuSn4okuXcj0BSeDVzHIf7sqCBjmC4zCJ+jyS/+Gq2fPUkgfW0bxdgVFMY+zY3TQuMfygLLiF9MzfKQiZXIgzRm4z85AALjRtWp3nO7kFP7ApIqqe2zn0NfjROHgw/hqbhgKGKjsXzu+rrdu5HeSlhWO8hxwDmVaQObSdcyTFMG/YiFD6lJGKdFb4NNS1HnW8T1P6nNQPqraOBTSnQKxz5tTGqNrbaAE4Iio3Cj50ZUqo6/O5OAtJ6Bznp4gKMgBetgD11fCO++j1RdcFdTbD0tkgfxXgzJTUtWCUmdYjl93RR27ifZGYzgK23MdwF4zvKNem782m0dQnmh47Rxz3+2MVhiiS85nTOXxmaODvzAWBE2IQowSrbzE12IJ82fOrvritWvRIF0aLCLdEytK+NVdDxLvmdW+dFeKOa/ocw1Son0O6OzX0lBLmjYSMQSrFe5X5yf6WE2ehsLrv6M8Cqjvwr+u9X+kP/f3iAk31TV+K9yZKQqAn3QOWy+9Hz7iVWRMuM9hs35+avVy4pXASFbOjGdXM1fSQkLOWmFUhyadKWYPjRZoZo0g3CS0qhz+mjygAvmtkYRBcGNpYAEYoIDEwQaswtATb9HLzTetQL8aK79YSb0vJNPSYzsij3FcXbmfnMiaOJIGrrBJnAPRqg2lmCZFXOFah9l2GRBm8HJMGeiupFvR0aRN41otN6X6tGTxS53wk+2+w+Q5ABTdCd15LYZm/a/3bxe9RDQJ5HZhLzr5x1ccTkxBkbxlYBGd8AKvkL2IR3V283R5noyhAM5o/2rKEi4U6kxCV5efr8llvLFrgjPIwS8iES5jxmV5zyPzj7TyzJTJze+9tgDNGYRyyXPkU4mtAh8XUy9vMigfO+1+ZKYW2WCFjDUfvyNiplha4LliPPg8Rc890ZT+F9pMYPAmEg3JJVUm3fp5N0IPNMAYKmbdj8dkIpjDhDJUd6o3G858DgYwPhSC+z3a78QpEmqq+tRaHEcQ30ZN5KVVdASN8NMTnLKoA+IJdapqCRgooGTkhyjB1yEmjSy52110hPaqe1upiUeObsTXtGELTk2p2NZw/3PzU281tafWNmFUPAmooj83DhoQgKPIB7f+NGTDlTOtyPgN8pIB/lnFLL/gcwigZPKDW7p6hnW/GnAzyNS46gLJAl0Eyhqx6UWLeQTU7odMYORK5zf/FV79JGVPOQpNUA58rlB0ugHsyeub8Lnf9QQ4/N5sRKaUjEEhdpF28vfgPZACBbg5UHuVHl8Lby8mVGsrtI7TjL9U3mbtcF+cXQI/5AxT2i0MyciXEKZ8OjvPoQHHU/YSnCXtEp2r08SJxUAHIz1zM+FwdRCYPffQNi2NhkPWTiYTxJ00WVZIrHwmG7jzOLcfWnquJkpOmdPzXfAu+s5EADm0X4VmatqLjVa86dS7Os55qXuRa1Y7dWGvv57LjBlKKgqsbI7lwfyBN3qkKBqe7nwUDn6xqhGPiUPT7j7s+oD52AF6oj6SFXhYWlRXy+1FL7YSbjFxfFvJt5tVXMAr8/voIg8YRiBsKB6eLeIG5Y/KmGmFBxxYzSH7W0IaK3IId+cBlEk6H3Y5BqIBfvhOOBtInLWnsAoRpqlkxd7o/+LP9UXEahdcYlifFlURgUJl0Ly6LHjSZN1CfHB7OORacnBdpIM1lRpBcvwkeyXUvndU4zrfqwtuBEpxqvk4PZPJMByJXUbXie52mfUB689h9GRV99U4gzn1aTbHPWjbB0DQ0Aes2E/ZzoCTxCef56sExSu8ynaPxuDOOeD31OWT0zHo1XxSPQbclDivD+4/v1aWdhGXLR1Ui+NzuQK1NTedznX44c5T3b+2GZZjl5RqH8KR7FTVjLAXvg64Gpc1RROH24J9jrNDyvrMxY453DRUjZ/K3zYJC+M1JxcvLkuZALsXVQ4Z7sj0EuLbRnhTKzRGwFrpXcixvnCgRbJrCl3+RjyWVipph0VLB0nDop/tvjfFmysZ+d2/k6baJMxYoqnE7PFceicrxUYyoJ2LMxicgJqrgvSR3mNJTkvfTU8BIoZz3PpSIS+Y7Ey3MXecxcxYZTeX62egI5Nub2z8Bj4Eg71YCz8Oiapkinw4RRlL+0c2/6jDqc8UK4Zzi1X4aIpgYsPJQOEz2YWBdvH6z5CuY7UvWK2F0Mg4ofRVBArX1p9Gv5VLqWYyL/raRVWkPNI4FEv9+ePcdmBSQR4CFSO6TG13hIV+cm1dkd0/Nt3r28H4NU2knSniDCeozM/Btc4i/ni4H83S2/ktAAvUM7UKJPT+RO8LOlvxhuI8HQmAuJCzVH23R/0JovidxgdJ7g7whCdVQa9/TLFUJWmNSYAaPRAXW/kk2UBmAz6f6POK1zcMlmI8P9tqW2qVXABN0L0zHarXbWHlhtYpXMEda/pIHLwu8RHqmWWMgMzkyKicSFKK10UvZRdcO8fCiSijtFIY8qW7CscvtzpP92lm+c648urehw35v1EOfO3kdny+CQm/Y0u+zPuevhCrQKhTsUq4G1rNPoGuVzvhf2Ui1f8jzvx9fJbQR69A0ETLUUC2ndk1YFQNi22yLwyZyw4xU8P3RGLM5qojKNwHAZAMAEudzg8UdfV6i4VktOLbhhHUPqpCn6dtpnr16rINs5hWJGMYXaEn0irFCuoYnJEVhdJ4PZLKuTkrP1UUVWZ0SMgJ3F2I8YRhtLwK4dhh/oKk0hdVgEH/l2/0c+cLlF7kpDuF3lC4fsFw3V0QrwH3GLNb2waS18OmYB07yaLEqhd58bSaGJZzePoroV5v3UK46/sWdKczstFIiYLmmKeaVGRNo3IWk+dYUqWy5aJClXj5tf/v47ijlkmMDP+ROUxoGk7LFzne4/0CRPl/5SUyOa679jibvdVQFZ1o0H9kBux7OSC9B+qVKE1trxr4xqTkjc1ZGZBpY0zyKBiu8wr+/KXc37u0cdXGJwY/aTic3kGj4jt3y4ZwleKskyXMFHKGwVhqpFH3ba02boSzGHyPMAe/reVqWSTT2Uz47+uYvHZGNASqYQ23uZoxalHK+PGoH9trTVaw2KB4dH8fNrXRLhiyxGdRtS0x8k3feeOvsOdKEdaOf3IrfWCZM/n3+hVJizA4zoX8MzsIf6bDfuFXIIRR2RN0rICZcMRmnRxUXT+YMOid50gg+Nt4Uucemmbd9kvJG/O04PVC0vm5gGDlIY3THI2+l1rZcMOuSDWBp6I4Eltp7naHZCdaPUWnQ07VqO49znDgCmtu5Tb+SSEQJV+rJsiXgCqoeeQciher8cqF616P8qlZeonKihdVkj+RTnjOcnoERWubvyaeFO6Ub3dhh0qmm2RD4enszxE1JaAaiezuSoCayJQP931HGcy0NmuVr/UV0pvbwICLpBbVkxC6qebjLGRXucTG0dbQDFPz049hMem2pb/FOTGYRLR0uPCa0oIwc9Z/g+Iy/zYFDThHi1cqbK824savKGMLMj7j87RT9NMwxaI0eKTfMFioi9SyLq5sN9pV8be2FrOc7xMOdv6btXyqFx63y9fIGMBP2T9Wmeeg61ZGdTE4IwybcGlXLJ3qLbRRpQ8vSzcqFobN+QPtL+51hadAWtRbF6aJpeb7Gca4/Ldh7BDvEbrUuEm+gTyVMeRQ3Ypf9uyFjVstrQIcdY+aur3LC5I5OOnJck1zLUKxLobjy9slG3hv6zylhtKbAbpX5p8Hc910fCT7FNH5/t9xEJX9kkeZ9IMCHAk9zn7L3pXEGZVvdaf85NtlemPpY7iSgSC7zRGsI5W6/UEwX6jDtNVZ9VqPDBe/EqmEEsGcs7jZPQPhi3xpj9UXWQLiy6tsxv/ft9aKQnUg0Sps/x3AZ2uK3ETGTQogPTMQPOnoU6p5KuS3uY6DfW0GeGQ1wNpGzGoUdRJRvHP9MDQpWRSZqZkE/rcNnQ5lS9BmMDW/umgZQD1C2YXfZMy7fIVXo121293Gfx9n7DQP6OxSqiSTNx48KId9kfGYOnV2Wg2TQQywNBRB0mSmqa/jwoBDYVDl6B0XFrVEAwbnhLyqGp5BH9bzsWrrFlu0x285RpqTylTZk3rgcm57prav0DUAKUd02vXdYyNBf7sfX7VYn0Syug9++ey/dHoG7GQzMbhXhtEuRXv6YR20SQgSOrgDUGPR4HhS+Qvk2zOtyH8N/lHYfQxNKt/f7uCpsBBh5eGZaeWNRTBdOObWOvyKJMfD8FLEX1v/5ywtRV27weRzSNaHEQFE0hIzzS4VPzgWtg/4bcetwXpabsePP192muNPyXiRzRZkoeudA9D9x/oVWfRieLfjdXbi/41RGNB3aIj0IxCBHSvUN7LzntO6Oh910zV9u4Glrouyr5odjs8/fW9r0buiTMWTjjLbi2k5tZ3m/134ci/d9f8zuv+4BI7F13Mjb7DTTD5ukfqNTlNC4V9PnfbGAJdKLEDJgBPKyYXCaAL9U5Cxi2j5j+IWmNg6NSnWcATzmOO4+dNBmefy6ceyd8J9/Q7amUWVVkuNVSq3iWEb3UJP7kG+P8wfL4xS0ZNuSKYuo9KpdkJ3b4PYRNSzF+8OXKDWqXuWsan/wconybIRBoGWHMuCkb35BtGfiqZ4hc2CCapKiLmrWnBLlRT+9GA0Qcykkg1B6C3kESJMu2dWyGabbhRwxUeMxARHqbXzHmHpr4Z3vmOxHZ6b1q6MJ0Vb/XKkaPF4xn/VindEJ3S8/9xcGF+PNFuAXc2Jf9uZLLtjxDAEeohd7wjie66LHvcNT0UpWif4uCox2YR/liegMgx8vEbvQClJBMBub7zJQMCr1C/Vf8siWQASp0Ewd7D2uP6f9YTISdEaUAzF9rST9JTHxez310BfdgtWKU1ZYoRuDZvGn2tj9DPjXrkgCr/13OHsP4MOC5b6YqHSedYMW9bEfS5M3nO7zTGS85BzpLTIFqAGhZJLEyLFcZXS7hDhDYVvlm10RLEslMK0cUL/9xqTMOX2iR65umsC8dW4hT0Sg6Tf3T2HAxsHKcNzoqFwuM9k3/LpYekhRc0C+f1I+vMQ4thkfSotx9GUt/cdRosaE8XwqV0k+8ZtU+jv8nn3lbcNxfXXKi5l0SL5kMmrCdrxeVVqxBobrFF+tb0wtkN+DMm88I4jWH/DcdJOjcMOLEsN70vlsfIi+NexpaT0ZsnfewPoTvUSXqqfhRcRk3jA7AdYHEFk4l6O3fe65uZNIMf1lbtJNCNaK2+c5hGKLcTSrBmwWv9TP6JDfZ6UY96g4baayVCbrDpXePgXTG6xO3rT0DAXG9OuPxkSEPLJnqxQViyYQhCp36Q2yFpF6cR04RO7Ab5HPrECqGR0Fnr2gzmjx49XjQf8N5Bk5XH0dh8NOoB62acHwMhlBM8duW9tghc7CN7oz91UEyd8fOtwDK/j7SykdllCAN5kUrcawufMV9y/EqUoKHtP5i8MgQY9RlZFZzi0BeT9Ang4mMIvWAFChZCNnb4tT5cS20jeit8JEN4tz4mUmZxDwiWkEucI1KF/FyAnvE4wybWvbaxBYjT2jdhlzd4y/eTmTl3im5YImADc2unOtmNTcgMdOb9kUgJmgzY/hDaAxqvwLEulLsjq0bsfSE3tRYCRn6xb0uv5B5yFshhewdO5KgoLcaGeqeg0pa9k2RXM32g1jE1UDWO0CaMobavPk+4u26Tmgg6VindBdYdRxpGqlvkxai0K/atC5CWUxlHuukX5b+hg83khzsZK7AVRVptyVNicu0sfQToTDEeIeDdFvDrReJUiJGZcXAhpRL3OufhL4aDfO1zsCmfGq8qFspBiJe13lgS9GguiMsdmgpWOhHkSTVkWnMOnUeIJgqZks/AwL/1yKPm00t6x6qLXQrCJrysUwR+ILJdyyyuUN4BuEtCDUXMXPU5srsAnDUhSfFM/j4RK+cK01o6lXAVbhiOLaaQtpYN6mCOwtJNcVqEpyrxXuWxvE4mbVCytBu/qKO4X2BI1NUSlj/g6FQEiYsXMAQuM9wnHngXKLZRWFHcgroF7URRzLPrMQUfALjbga6S+tGc3Tshv6PA6xeSqRPDbLG+X+0qt9crNzbaxGbStSCfYhdRY4t5BSVY9Pxl9trcYFiUdsV1BSwaZM5u8K+hUm8HV6PoLD/jlsRRzgUq6O+Qw3asFkTKm3clSTo8VtXdpTdzFAZP+tVvAjkfGq3MkSLyTYi08pvQ3h/L9o0JpUnnQeKxXk3qIsGGsH1BXzcZT+voCNv39FSdg6gNY51z9Cyq5Dql8wER5ylTwnLVeHlHAn/HNwxGYeUqrrc2gcmIybVKVD1XAPXjKks2+oHZk4OXYP6+LwVaFEApqEMyEusTgVFTzdjVa2BAaELvpyVhOSMW/ae3NwMfWId4Ue28z5IzumOF/CmY1GmXBOWBf2hgp/r3qS0GU7nGETmj+7Tudbjd1cKhgP39tVtWogjxHt6NLXz8OCbV1nIBG+mmrrZDCbH/o4Vgn3gZkRkq+iHOVW82LunJPXBZjX/ntmptWsqP8nDZBSb3TzAD4vSQeQ1GmtgGWAYfB951YKUnFVJb0z1YRjQqVksL5VpD4N/Vy31vtYY/2g9TmyMADPgCwwA6MhjQ9bd1JFJ3Vls7lD2RYjdIwQwhWzBRPfrxpKcYeu03F0/odRbEc9RZ11TxVY8mXqgJx/vDk0eF4MPV7lgBxYqxoGfEtGZBC1kZlxbcez4Ts4/TuXJ/QsfWT95Fwpc4CtiGCgU4i7LHgoDalqmBabvzV5xvq2pMVourJYZ4paytzilEG+lADOGx7qf9O5/4cP5SqyTCMG4I16I/6I5o4Y/QkWX9ctABry/8Adxz+ZB8AI1yUyNXk1Z073ECiDJ1EuVT69eIDEAlbnv24j4DJGeqIV1b1GDCHJ+OFD4W0gXUs/1bMkNESNKl2ON6DZzAXvqmr8X68yRDgIReKbX1SUwtzYnyadBLhEWS0WTE7T1IxC2SHChb1NFD+2rtJSN8OPTIZRqiizaoh7OSSNpBXJMkKcUQZV8sXw8VkU5ea8j0WZ/YK35loUxE1aG30SL/JYxZWlUenDyKrfbHWJ+z6JOsV0e1Xfw7VGavtHACLwn0tTG9e3lf++w1MCVjFIyU57uOlbTkUSnxAjzmA71qvjTzHeMDWcK099tm9rS8cnfuwxq+YRWANkfmLbCl+74mg4bccPsNY5zz7cjbaFAL0hAwId61yM5uqhMBr4Wcew3b2spG5tkKFOnADeXkGkH4vk+f+an92mWXemOFCpjRsFeEnPEAIsLemM3QfMoME5/w+7Y48y/SvkBN6/KSRVmB7/rHiW7iVkXF6Y1T853OaDg66cIfWkD5TqCDugrlaXlEL1fFjxPoKRHkP5GD/xDiscNH+Dp2fXEKUpwAvC8JTNC+k9JpaMXUB7oj4p77qiAOjXD2pT4v/v0Ukid02LpuYsS7/ScDL1SxB9hxxbkeGOMyPyL4HZPAbyagOgP5Xe2pCqMPyj/KJ0blDHzFVBqzeLIO5D4yq7IpSi9p/QlHa50sCHzGoMqrBS8l9IfRyhq8IDQtOZzjgdvgQDwH7cqa/sybwdfcQse9THS08maKkkgnOi0ShO8Gyf+WL4K9DX11CF9uIbVwJUaCv8r/6FDVOdsEjeumisIJlLJQsjjkEL2QfEc68oqsevnNAEdp4YMJivwBJnE0R2GiBFRTJZNkq/MHDP9O5unQoRoivMJkPm+A0K8CQNXL6V3apC4ROBTyJSW9oOGNF4YrwoTFyz/pexIkeWQADpi+M7q8gBlmGRUune0k7cXyacdbOsD0Q1JQat9T8nmHhyO8PNd2k4qjZsQCs6lEcmaThpVUzGzWOJQGGf2oz7+F/bMfUMARo1PD0/yIhVDK+8MGRo/uByG5UAwPfNeHAd09gkMFpZmTN2rZgoqdSjwv1SbFnFRAqYuzwW8P4+Rk9fE3PVu80HKcXyIEvPfit+o+pnlHDUKKo32HapcVtQhsNiIdH80j/lRnJ2y5RYRbECyY4vl20j/NiBAD0Z5jxWWiL6xAZIonSEJb1qhwmdRp3hISLL9Q1QYOt6C/OixU3eUtXblgBu+fGPAQE0o");const Nh=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]),Uh=4;function i8(e){return e.toString(16).toUpperCase().padStart(2,"0")}function Iw(e){return`{${i8(e)}}`}function o8(e){let t=[];for(let n=0,r=e.length;n<r;){let o=e.codePointAt(n);n+=o<65536?1:2,t.push(o)}return t}function $i(e){let n=e.length;if(n<4096)return String.fromCodePoint(...e);let r=[];for(let o=0;o<n;)r.push(String.fromCodePoint(...e.slice(o,o+=4096)));return r.join("")}function s8(e,t){let n=e.length,r=n-t.length;for(let o=0;r==0&&o<n;o++)r=e[o]-t[o];return r}var M0=_w("AEUDTAHBCFQATQDRADAAcgAgADQAFAAsABQAHwAOACQADQARAAoAFwAHABIACAAPAAUACwAFAAwABAAQAAMABwAEAAoABQAIAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACgANAA0AAwAKAAkABAAdAAYAZwDSAdsDJgC0CkMB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgsj26PTQyy8FfEQ8AY8IPAGcEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJF8AJpIBpob5AERSMAKNoAXqaQLUBMCzEiACnwRZEkkVsS7tANAsBG0RuAQLEPABv9HICTUBXigPZwRBApMDOwAamhtaABqEAY8KvKx3LQ4ArAB8UhwEBAVSagD8AEFZADkBIadVj2UMUgx5Il4ANQC9AxIB1BlbEPMAs30CGxlXAhwZKQIECBc6EbsCoxngzv7UzRQA8M0BawL6ZwkN7wABAD33OQRcsgLJCjMCjqUChtw/km+NAsXPAoP2BT84PwURAK0RAvptb6cApQS/OMMey5HJS84UdxpxTPkCogVFITaTOwERAK5pAvkNBOVyA7q3BKlOJSALAgUIBRcEdASpBXqzABXFSWZOawLCOqw//AolCZdvv3dSBkEQGyelEPcMMwG1ATsN7UvYBPEGOwTJH30ZGQ/NlZwIpS3dDO0m4y6hgFoj9SqDBe1L9DzdC01RaA9ZC2UJ4zpjgU4DIQENIosK3Q05CG0Q8wrJaw3lEUUHOQPVSZoApQcBCxEdNRW1JhBirAsJOXcG+xr2C48mrxMpevwF0xohBk0BKRr/AM8u54WwWjFcHE9fBgMLJSPHFKhQIA0lQLd4SBobBxUlqQKRQ3BKh1E2HpMh9jw9DWYuE1F8B/U8BRlPC4E8nkarRQ4R0j6NPUgiSUwsBDV/LC8niwnPD4UMuXxyAVkJIQmxDHETMREXN8UIOQcZLZckJxUIIUaVYJoE958D8xPRAwsFPwlBBxMDtRwtEy4VKQUNgSTXAvM21S6zAo9WgAEXBcsPJR/fEFBH4A7pCJsCZQODJesALRUhABcimwhDYwBfj9hTBS7LCMdqbCN0A2cU52ERcweRDlcHpxwzFb8c4XDIXguGCCijrwlbAXUJmQFfBOMICTVbjKAgQWdTi1gYmyBhQT9d/AIxDGUVn0S9h3gCiw9rEhsBNQFzBzkNAQJ3Ee0RaxCVCOuGBDW1M/g6JQRPIYMgEQonA09szgsnJvkM+GkBoxJiAww0PXfuZ6tgtiQX/QcZMsVBYCHxC5JPzQycGsEYQlQuGeQHvwPzGvMn6kFXBf8DowMTOk0z7gS9C2kIiwk/AEkOoxcH1xhqCnGM0AExiwG3mQNXkYMCb48GNwcLAGcLhwV55QAdAqcIowAFAM8DVwA5Aq0HnQAZAIVBAT0DJy8BIeUCjwOTCDHLAZUvAfMpBBvDDBUA9zduSgLDsQKAamaiBd1YAo4CSTUBTSUEBU5HUQOvceEA2wBLBhPfRwEVq0rLGuNDAd9vKwDHAPsABTUHBUEBzQHzbQC3AV8LMQmis7UBTekpAIMAFWsB1wKJAN0ANQB/8QFTAE0FWfkF0wJPSQERMRgrV2EBuwMfATMBDQB5BsuNpckHHwRtB9MCEBsV4QLvLge1AQMi3xPNQsUCvd5VoWACZIECYkJbTa9bNyACofcCaJgCZgkCn4Q4GwsCZjsCZiYEbgR/A38TA36SOQY5dxc5gjojIwJsHQIyNjgKAm3HAm2u74ozZ0UrAWcA3gDhAEoFB5gMjQD+C8IADbUCdy8CdqI/AnlLQwJ4uh1c20WuRtcCfD8CesgCfQkCfPAFWQUgSABIfWMkAoFtAoAAAoAFAn+uSVhKWxUXSswC0QEC0MxLJwOITwOH5kTFkTIC8qFdAwMDrkvOTC0lA89NTE2vAos/AorYwRsHHUNnBbcCjjcCjlxAl4ECjtkCjlx4UbRTNQpS1FSFApP7ApMMAOkAHFUeVa9V0AYsGymVhjLheGZFOzkCl58C77JYIagAWSUClo8ClnycAKlZrFoJgU0AOwKWtQKWTlxEXNECmcsCmWRcyl0HGQKcmznCOp0CnBYCn5sCnriKAB0PMSoPAp3xAp6SALU9YTRh7wKe0wKgbgGpAp6fHwKeTqVjyGQnJSsCJ68CJn4CoPsCoEwCot0CocQCpi8Cpc4Cp/8AfQKn8mh8aLEAA0lqHGrRAqzjAqyuAq1nAq0CAlcdAlXcArHh1wMfTmyXArK9DQKy6Bds4G1jbUhfAyXNArZcOz9ukAMpRQK4XgK5RxUCuSp3cDZw4QK9GQK72nCWAzIRAr6IcgIDM3ECvhpzInNPAsPLAsMEc4J0SzVFdOADPKcDPJoDPb8CxXwCxkcCxhCJAshpUQLIRALJTwLJLgJknQLd0nh5YXiueSVL0AMYo2cCAmH0GfOVJHsLXpJeuxECz2sCz2wvS1PS8xOfAMatAs9zASnqA04SfksFAtwnAtuKAtJPA1JcA1NfAQEDVYyAiT8AyxbtYEWCHILTgs6DjQLaxwLZ3oQQhEmnPAOGpQAvA2QOhnFZ+QBVAt9lAt64c3cC4i/tFAHzMCcB9JsB8tKHAuvzAulweQLq+QLq5AD5RwG5Au6JAuuclqqXAwLuPwOF4Jh5cOBxoQLzAwBpA44WmZMC9xMDkW4DkocC95gC+dkC+GaaHJqruzebHgOdgwL++gEbADmfHJ+zAwWNA6ZqA6bZANHFAwZqoYiiBQkDDEkCwAA/AwDhQRdTARHzA2sHl2cFAJMtK7evvdsBiZkUfxEEOQH7KQUhDp0JnwCS/SlXxQL3AZ0AtwW5AG8LbUEuFCaNLgFDAYD8AbUmAHUDDgRtACwCFgyhAAAKAj0CagPdA34EkQEgRQUhfAoABQBEABMANhICdwEABdUDa+8KxQIA9wqfJ7+xt+UBkSFBQgHpFH8RNMCJAAQAGwBaAkUChIsABjpTOpSNbQC4Oo860ACNOME63AClAOgAywE6gTo7Ofw5+Tt2iTpbO56JOm85GAFWATMBbAUvNV01njWtNWY1dTW2NcU1gjWRNdI14TWeNa017jX9NbI1wTYCNhE1xjXVNhY2JzXeNe02LjY9Ni41LSE2OjY9Njw2yTcIBJA8VzY4Nt03IDcPNsogN4k3MAoEsDxnNiQ3GTdsOo03IULUQwdC4EMLHA8PCZsobShRVQYA6X8A6bABFCnXAukBowC9BbcAbwNzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgBFLWZAu0BhQCjBcEAbykBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUABavAj626xQAJP0A3etzuf4NNRA7efy2Z9NQrCnC0OSyANz5BBIbJ5IFDR6miIavYS6tprjjmuKebxm5C74Q225X1pkaYYPb6f1DK4k3xMEBb9S2WMjEibTNWhsRJIA+vwNVEiXTE5iXs/wezV66oFLfp9NZGYW+Gk19J2+bCT6Ye2w6LDYdgzKMUabk595eLBCXANz9HUpWbATq9vqXVx9XDg+Pc9Xp4+bsS005SVM/BJBM4687WUuf+Uj9dEi8aDNaPxtpbDxcG1THTImUMZq4UCaaNYpsVqraNyKLJXDYsFZ/5jl7bLRtO88t7P3xZaAxhb5OdPMXqsSkp1WCieG8jXm1U99+blvLlXzPCS+M93VnJCiK+09LfaSaBAVBomyDgJua8dfUzR7ga34IvR2Nvj+A9heJ6lsl1KG4NkI1032Cnff1m1wof2B9oHJK4bi6JkEdSqeNeiuo6QoZZincoc73/TH9SXF8sCE7XyuYyW8WSgbGFCjPV0ihLKhdPs08Tx82fYAkLLc4I2wdl4apY7GU5lHRFzRWJep7Ww3wbeA3qmd59/86P4xuNaqDpygXt6M85glSBHOCGgJDnt+pN9bK7HApMguX6+06RZNjzVmcZJ+wcUrJ9//bpRNxNuKpNl9uFds+S9tdx7LaM5ZkIrPj6nIU9mnbFtVbs9s/uLgl8MVczAwet+iOEzzBlYW7RCMgE6gyNLeq6+1tIx4dpgZnd0DksJS5f+JNDpwwcPNXaaVspq1fbQajOrJgK0ofKtJ1Ne90L6VO4MOl5S886p7u6xo7OLjG8TGL+HU1JXGJgppg4nNbNJ5nlzSpuPYy21JUEcUA94PoFiZfjZue+QnyQ80ekOuZVkxx4g+cvhJfHgNl4hy1/a6+RKcKlar/J29y//EztlbVPHVUeQ1zX86eQVAjR/M3dA9w4W8LfaXp4EgM85wOWasli837PzVMOnsLzR+k3o75/lRPAJSE1xAKQzEi5v10ke+VBvRt1cwQRMd+U5mLCTGVd6XiZtgBG5cDi0w22GKcVNvHiu5LQbZEDVtz0onn7k5+heuKXVsZtSzilkLRAUmjMXEMB3J9YC50XBxPiz53SC+EhnPl9WsKCv92SM/OFFIMJZYfl0WW8tIO3UxYcwdMAj7FSmgrsZ2aAZO03BOhP1bNNZItyXYQFTpC3SG1VuPDqH9GkiCDmE+JwxyIVSO5siDErAOpEXFgjy6PQtOVDj+s6e1r8heWVvmZnTciuf4EiNZzCAd7SOMhXERIOlsHIMG399i9aLTy3m2hRLZjJVDNLS53iGIK11dPqQt0zBDyg6qc7YqkDm2M5Ve6dCWCaCbTXX2rToaIgz6+zh4lYUi/+6nqcFMAkQJKHYLK0wYk5N9szV6xihDbDDFr45lN1K4aCXBq/FitPSud9gLt5ZVn+ZqGX7cwm2z5EGMgfFpIFyhGGuDPmso6TItTMwny+7uPnLCf4W6goFQFV0oQSsc9VfMmVLcLr6ZetDZbaSFTLqnSO/bIPjA3/zAUoqgGFAEQS4IhuMzEp2I3jJzbzkk/IEmyax+rhZTwd6f+CGtwPixu8IvzACquPWPREu9ZvGkUzpRwvRRuaNN6cr0W1wWits9ICdYJ7ltbgMiSL3sTPeufgNcVqMVWFkCPDH4jG2jA0XcVgQj62Cb29v9f/z/+2KbYvIv/zzjpQAPkliaVDzNrW57TZ/ZOyZD0nlfMmAIBIAGAI0D3k/mdN4xr9v85ZbZbbqfH2jGd5hUqNZWwl5SPfoGmfElmazUIeNL1j/mkF7VNAzTq4jNt8JoQ11NQOcmhprXoxSxfRGJ9LDEOAQ+dmxAQH90iti9e2u/MoeuaGcDTHoC+xsmEeWmxEKefQuIzHbpw5Tc5cEocboAD09oipWQhtTO1wivf/O+DRe2rpl/E9wlrzBorjJsOeG1B/XPW4EaJEFdNlECEZga5ZoGRHXgYouGRuVkm8tDESiEyFNo+3s5M5puSdTyUL2llnINVHEt91XUNW4ewdMgJ4boJfEyt/iY5WXqbA+A2Fkt5Z0lutiWhe9nZIyIUjyXDC3UsaG1t+eNx6z4W/OYoTB7A6x+dNSTOi9AInctbESqm5gvOLww7OWXPrmHwVZasrl4eD113pm+JtT7JVOvnCXqdzzdTRHgJ0PiGTFYW5Gvt9R9LD6Lzfs0v/TZZHSmyVNq7viIHE6DBK7Qp07Iz55EM8SYtQvZf/obBniTWi5C2/ovHfw4VndkE5XYdjOhCMRjDeOEfXeN/CwfGduiUIfsoFeUxXeQXba7c7972XNv8w+dTjjUM0QeNAReW+J014dKAD/McQYXT7c0GQPIkn3Ll6R7gGjuiQoZD0TEeEqQpKoZ15g/0OPQI17QiSv9AUROa/V/TQN3dvLArec3RrsYlvBm1b8LWzltdugsC50lNKYLEp2a+ZZYqPejULRlOJh5zj/LVMyTDvwKhMxxwuDkxJ1QpoNI0OTWLom4Z71SNzI9TV1iXJrIu9Wcnd+MCaAw8o1jSXd94YU/1gnkrC9BUEOtQvEIQ7g0i6h+KL2JKk8Ydl7HruvgWMSAmNe+LshGhV4qnWHhO9/RIPQzY1tHRj2VqOyNsDpK0cww+56AdDC4gsWwY0XxoucIWIqs/GcwnWqlaT0KPr8mbK5U94/301i1WLt4YINTVvCFBrFZbIbY8eycOdeJ2teD5IfPLCRg7jjcFTwlMFNl9zdh/o3E/hHPwj7BWg0MU09pPrBLbrCgm54A6H+I6v27+jL5gkjWg/iYdks9jbfVP5y/n0dlgWEMlKasl7JvFZd56LfybW1eeaVO0gxTfXZwD8G4SI116yx7UKVRgui6Ya1YpixqXeNLc8IxtAwCU5IhwQgn+NqHnRaDv61CxKhOq4pOX7M6pkA+Pmpd4j1vn6ACUALoLLc4vpXci8VidLxzm7qFBe7s+quuJs6ETYmnpgS3LwSZxPIltgBDXz8M1k/W2ySNv2f9/NPhxLGK2D21dkHeSGmenRT3Yqcdl0m/h3OYr8V+lXNYGf8aCCpd4bWjE4QIPj7vUKN4Nrfs7ML6Y2OyS830JCnofg/k7lpFpt4SqZc5HGg1HCOrHvOdC8bP6FGDbE/VV0mX4IakzbdS/op+Kt3G24/8QbBV7y86sGSQ/vZzU8FXs7u6jIvwchsEP2BpIhW3G8uWNwa3HmjfH/ZjhhCWvluAcF+nMf14ClKg5hGgtPLJ98ueNAkc5Hs2WZlk2QHvfreCK1CCGO6nMZVSb99VM/ajr8WHTte9JSmkXq/i/U943HEbdzW6Re/S88dKgg8pGOLlAeNiqrcLkUR3/aClFpMXcOUP3rmETcWSfMXZE3TUOi8i+fqRnTYLflVx/Vb/6GJ7eIRZUA6k3RYR3iFSK9c4iDdNwJuZL2FKz/IK5VimcNWEqdXjSoxSgmF0UPlDoUlNrPcM7ftmA8Y9gKiqKEHuWN+AZRIwtVSxye2Kf8rM3lhJ5XcBXU9n4v0Oy1RU2M+4qM8AQPVwse8ErNSob5oFPWxuqZnVzo1qB/IBxkM3EVUKFUUlO3e51259GgNcJbCmlvrdjtoTW7rChm1wyCKzpCTwozUUEOIcWLneRLgMXh+SjGSFkAllzbGS5HK7LlfCMRNRDSvbQPjcXaenNYxCvu2Qyznz6StuxVj66SgI0T8B6/sfHAJYZaZ78thjOSIFumNWLQbeZixDCCC+v0YBtkxiBB3jefHqZ/dFHU+crbj6OvS1x/JDD7vlm7zOVPwpUC01nhxZuY/63E7g");function Po(e){return e>>24&255}function Tw(e){return e&16777215}const a8=new Map(Sw(M0).flatMap((e,t)=>e.map(n=>[n,t+1<<24]))),c8=new Set(fr(M0)),Ow=new Map,Gu=new Map;for(let[e,t]of Pw(M0)){if(!c8.has(e)&&t.length==2){let[n,r]=t,o=Gu.get(n);o||(o=new Map,Gu.set(n,o)),o.set(r,e)}Ow.set(e,t.reverse())}const gs=44032,Ha=4352,Va=4449,qa=4519,Bw=19,kw=21,Ni=28,Ga=kw*Ni,l8=Bw*Ga,u8=gs+l8,f8=Ha+Bw,d8=Va+kw,h8=qa+Ni;function Rw(e){return e>=gs&&e<u8}function p8(e,t){if(e>=Ha&&e<f8&&t>=Va&&t<d8)return gs+(e-Ha)*Ga+(t-Va)*Ni;if(Rw(e)&&t>qa&&t<h8&&(e-gs)%Ni==0)return e+(t-qa);{let n=Gu.get(e);return n&&(n=n.get(t),n)?n:-1}}function Mw(e){let t=[],n=[],r=!1;function o(i){let s=a8.get(i);s&&(r=!0,i|=s),t.push(i)}for(let i of e)for(;;){if(i<128)t.push(i);else if(Rw(i)){let s=i-gs,a=s/Ga|0,c=s%Ga/Ni|0,l=s%Ni;o(Ha+a),o(Va+c),l>0&&o(qa+l)}else{let s=Ow.get(i);s?n.push(...s):o(i)}if(!n.length)break;i=n.pop()}if(r&&t.length>1){let i=Po(t[0]);for(let s=1;s<t.length;s++){let a=Po(t[s]);if(a==0||i<=a){i=a;continue}let c=s-1;for(;;){let l=t[c+1];if(t[c+1]=t[c],t[c]=l,!c||(i=Po(t[--c]),i<=a))break}i=Po(t[s])}}return t}function g8(e){let t=[],n=[],r=-1,o=0;for(let i of e){let s=Po(i),a=Tw(i);if(r==-1)s==0?r=a:t.push(a);else if(o>0&&o>=s)s==0?(t.push(r,...n),n.length=0,r=a):n.push(a),o=s;else{let c=p8(r,a);c>=0?r=c:o==0&&s==0?(t.push(r),r=a):(n.push(a),o=s)}}return r>=0&&t.push(r,...n),t}function $w(e){return Mw(e).map(Tw)}function w8(e){return g8(Mw(e))}const Nw=65039,Uw=".",Fw=1,Fh=45;function lo(){return new Set(fr(an))}const b8=new Map(Pw(an)),m8=lo(),Ka=lo(),Lh=new Set(fr(an).map(function(e){return this[e]},[...Ka])),y8=lo();lo();const v8=Sw(an);function jh(){return new Set([fr(an).map(e=>v8[e]),fr(an)].flat(2))}const x8=an(),ws=ps(e=>{let t=ps(an).map(n=>n+96);if(t.length){let n=e>=x8;t[0]-=32,t=$i(t),n&&(t=`Restricted[${t}]`);let r=jh(),o=jh(),i=[...r,...o].sort((a,c)=>a-c),s=!an();return{N:t,P:r,M:s,R:n,V:new Set(i)}}}),Wh=lo(),bs=new Map;[...Wh,...lo()].sort((e,t)=>e-t).map((e,t,n)=>{let r=an(),o=n[t]=r?n[t-r]:{V:[],M:new Map};o.V.push(e),Wh.has(e)||bs.set(e,o)});for(let{V:e,M:t}of new Set(bs.values())){let n=[];for(let o of e){let i=ws.filter(a=>a.V.has(o)),s=n.find(({G:a})=>i.some(c=>a.has(c)));s||(s={G:new Set,V:[]},n.push(s)),s.V.push(o),i.forEach(a=>s.G.add(a))}let r=n.flatMap(({G:o})=>[...o]);for(let{G:o,V:i}of n){let s=new Set(r.filter(a=>!o.has(a)));for(let a of i)t.set(a,s)}}let ms=new Set,Lw=new Set;for(let e of ws)for(let t of e.V)(ms.has(t)?Lw:ms).add(t);for(let e of ms)!bs.has(e)&&!Lw.has(e)&&bs.set(e,Fw);const A8=new Set([...ms,...$w(ms)]);class C8 extends Array{get is_emoji(){return!0}}const E8=r8(an).map(e=>C8.from(e)).sort(s8),jw=new Map;for(let e of E8){let t=[jw];for(let n of e){let r=t.map(o=>{let i=o.get(n);return i||(i=new Map,o.set(n,i)),i});n===Nw?t.push(...r):t=r}for(let n of t)n.V=e}function Xc(e,t=Iw){let n=[];D8(e[0])&&n.push("◌");let r=0,o=e.length;for(let i=0;i<o;i++){let s=e[i];Ww(s)&&(n.push($i(e.slice(r,i))),n.push(t(s)),r=i+1)}return n.push($i(e.slice(r,o))),n.join("")}function $0(e){return(Ww(e)?"":`${N0(Xc([e]))} `)+Iw(e)}function N0(e){return`"${e}"‎`}function _8(e){if(e.length>=4&&e[2]==Fh&&e[3]==Fh)throw new Error(`invalid label extension: "${$i(e.slice(0,4))}"`)}function S8(e){for(let n=e.lastIndexOf(95);n>0;)if(e[--n]!==95)throw new Error("underscore allowed only at start")}function P8(e){let t=e[0],n=Nh.get(t);if(n)throw No(`leading ${n}`);let r=e.length,o=-1;for(let i=1;i<r;i++){t=e[i];let s=Nh.get(t);if(s){if(o==i)throw No(`${n} + ${s}`);o=i+1,n=s}}if(o==r)throw No(`trailing ${n}`)}function D8(e){return Ka.has(e)}function Ww(e){return y8.has(e)}function I8(e){return k8(T8(e,w8,$8))}function T8(e,t,n){if(!e)return[];let r=0;return e.split(Uw).map(o=>{let i=o8(o),s={input:i,offset:r};r+=i.length+1;let a;try{let c=s.tokens=M8(i,t,n),l=c.length,u;if(l)if(a=c.flat(),S8(a),!(s.emoji=l>1||c[0].is_emoji)&&a.every(g=>g<128))_8(a),u="ASCII";else{let g=c.flatMap(w=>w.is_emoji?[]:w);if(!g.length)u="Emoji";else{if(Ka.has(a[0]))throw No("leading combining mark");for(let v=1;v<l;v++){let A=c[v];if(!A.is_emoji&&Ka.has(A[0]))throw No(`emoji + combining mark: "${$i(c[v-1])} + ${Xc([A[0]])}"`)}P8(a);let w=[...new Set(g)],[b]=B8(w);R8(b,g),O8(b,w),u=b.N}}else throw new Error("empty label");s.type=u}catch(c){s.error=c}return s.output=a,s})}function O8(e,t){let n,r=[];for(let o of t){let i=bs.get(o);if(i===Fw)return;if(i){let s=i.M.get(o);if(n=n?n.filter(a=>s.has(a)):[...s],!n.length)return}else r.push(o)}if(n){for(let o of n)if(r.every(i=>o.V.has(i)))throw new Error(`whole-script confusable: ${e.N}/${o.N}`)}}function B8(e){let t=ws;for(let n of e){let r=t.filter(o=>o.V.has(n));if(!r.length)throw ws.some(o=>o.V.has(n))?Hw(t[0],n):zw(n);if(t=r,r.length==1)break}return t}function k8(e){return e.map(({input:t,error:n,output:r})=>{if(n){let o=n.message;throw new Error(e.length==1?o:`Invalid label ${N0(Xc(t))}: ${o}`)}return $i(r)}).join(Uw)}function zw(e){return new Error(`disallowed character: ${$0(e)}`)}function Hw(e,t){let n=$0(t),r=ws.find(o=>o.P.has(t));return r&&(n=`${r.N} ${n}`),new Error(`illegal mixture: ${e.N} + ${n}`)}function No(e){return new Error(`illegal placement: ${e}`)}function R8(e,t){let{V:n,M:r}=e;for(let o of t)if(!n.has(o))throw Hw(e,o);if(r){let o=$w(t);for(let i=1,s=o.length;i<s;i++)if(Lh.has(o[i])){let a=i+1;for(let c;a<s&&Lh.has(c=o[a]);a++)for(let l=i;l<a;l++)if(o[l]==c)throw new Error(`duplicate non-spacing marks: ${$0(c)}`);if(a-i>Uh)throw new Error(`excessive non-spacing marks: ${N0(Xc(o.slice(i-1,a)))} (${a-i}/${Uh})`);i=a}}}function M8(e,t,n){let r=[],o=[];for(e=e.slice().reverse();e.length;){let i=N8(e);if(i)o.length&&(r.push(t(o)),o=[]),r.push(n(i));else{let s=e.pop();if(A8.has(s))o.push(s);else{let a=b8.get(s);if(a)o.push(...a);else if(!m8.has(s))throw zw(s)}}}return o.length&&r.push(t(o)),r}function $8(e){return e.filter(t=>t!=Nw)}function N8(e,t){let n=jw,r,o=e.length;for(;o&&(n=n.get(e[--o]),!!n);){let{V:i}=n;i&&(r=i,t&&t.push(...e.slice(o).reverse()),e.length=o)}return r}function U8(e){return I8(e)}function F8(e,t,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:o,retryCount:i,retryDelay:s,stallTimeout:a}={}){if(!e.length)throw new Error("must have at least one chain");let c=[];const l={},u={};for(const f of e){let g=!1;for(const w of t){const b=w(f);b&&(g=!0,c.some(({id:v})=>v===f.id)||(c=[...c,b.chain]),l[f.id]=[...l[f.id]||[],...b.rpcUrls.http],b.rpcUrls.webSocket&&(u[f.id]=[...u[f.id]||[],...b.rpcUrls.webSocket]))}if(!g)throw new Error([`Could not find valid provider configuration for chain "${f.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:c,publicClient:({chainId:f})=>{const g=c.find(v=>v.id===f)??e[0],w=l[g.id];if(!w||!w[0])throw new Error(`No providers configured for chain "${g.id}"`);const b=Mh({batch:n,chain:g,transport:kh(w.map(v=>$6(v,{timeout:a})),{rank:o,retryCount:i,retryDelay:s}),pollingInterval:r});return Object.assign(b,{chains:c})},webSocketPublicClient:({chainId:f})=>{const g=c.find(v=>v.id===f)??e[0],w=u[g.id];if(!w||!w[0])return;const b=Mh({batch:n,chain:g,transport:kh(w.map(v=>F4(v,{timeout:a})),{rank:o,retryCount:i,retryDelay:s}),pollingInterval:r});return Object.assign(b,{chains:c})}}}var L8=class extends Error{constructor({activeChain:e,targetChain:t}){super(`Chain mismatch: Expected "${t}", received "${e}".`),this.name="ChainMismatchError"}},j8=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},W8=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},z8=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},H8=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},Ku=(e,{find:t,replace:n})=>e&&t(e)?n(e):typeof e!="object"?e:Array.isArray(e)?e.map(r=>Ku(r,{find:t,replace:n})):e instanceof Object?Object.entries(e).reduce((r,[o,i])=>({...r,[o]:Ku(i,{find:t,replace:n})}),{}):e;function V8(e){const t=JSON.parse(e);return Ku(t,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function q8(e){return{accessList:e.accessList,account:e.account,blockNumber:e.blockNumber,blockTag:e.blockTag,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}function zh(e){return typeof e=="number"?e:e==="wei"?0:Math.abs(Oy[e])}function Hh(e,t){return e.slice(0,t).join(".")||"."}function Vh(e,t){const{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function G8(e,t){const n=typeof e=="function",r=typeof t=="function",o=[],i=[];return function(a,c){if(typeof c=="object")if(o.length){const l=Vh(o,this);l===0?o[o.length]=this:(o.splice(l),i.splice(l)),i[i.length]=a;const u=Vh(o,c);if(u!==0)return r?t.call(this,a,c,Hh(i,u)):`[ref=${Hh(i,u)}]`}else o[0]=c,i[0]=a;return n?e.call(this,a,c):c}}function K8(e,t,n,r){return JSON.stringify(e,G8((o,i)=>{const s=typeof i=="bigint"?`#bigint.${i.toString()}`:i;return(t==null?void 0:t(o,s))||s},r),n??void 0)}var Q8={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function Z8({deserialize:e=V8,key:t="wagmi",serialize:n=K8,storage:r}){return{...r,getItem:(o,i=null)=>{const s=r.getItem(`${t}.${o}`);try{return s?e(s):i}catch(a){return console.warn(a),i}},setItem:(o,i)=>{if(i===null)r.removeItem(`${t}.${o}`);else try{r.setItem(`${t}.${o}`,n(i))}catch(s){console.error(s)}},removeItem:o=>r.removeItem(`${t}.${o}`)}}var qh="store",wi,Do,Qu,Vw,Y8=class{constructor({autoConnect:e=!1,connectors:t=[new Cw],publicClient:n,storage:r=Z8({storage:typeof window<"u"?window.localStorage:Q8}),logger:o={warn:console.warn},webSocketPublicClient:i}){var l,u;Fl(this,Qu),this.publicClients=new Map,this.webSocketPublicClients=new Map,Fl(this,wi,void 0),Fl(this,Do,void 0),this.args={autoConnect:e,connectors:t,logger:o,publicClient:n,storage:r,webSocketPublicClient:i};let s="disconnected",a;if(e)try{const f=r.getItem(qh),g=(l=f==null?void 0:f.state)==null?void 0:l.data;s=g!=null&&g.account?"reconnecting":"connecting",a=(u=g==null?void 0:g.chain)==null?void 0:u.id}catch{}const c=typeof t=="function"?t():t;c.forEach(f=>f.setStorage(r)),this.store=Q4(z4(K4(()=>({connectors:c,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:qh,storage:r,partialize:f=>{var g,w;return{...e&&{data:{account:(g=f==null?void 0:f.data)==null?void 0:g.account,chain:(w=f==null?void 0:f.data)==null?void 0:w.chain}},chains:f==null?void 0:f.chains}},version:2}))),this.storage=r,ha(this,Do,r==null?void 0:r.getItem("wallet")),j4(this,Qu,Vw).call(this),e&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var e,t;return(t=(e=this.data)==null?void 0:e.chain)==null?void 0:t.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t=typeof e=="function"?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var e,t;this.connector&&await((t=(e=this.connector).disconnect)==null?void 0:t.call(e)),ha(this,wi,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Ul(this,wi))return;ha(this,wi,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const e=Ul(this,Do)?[...this.connectors].sort(n=>n.id===Ul(this,Do)?-1:1):this.connectors;let t=!1;for(const n of e){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const o=await n.connect();this.setState(i=>({...i,connector:n,chains:n==null?void 0:n.chains,data:o,status:"connected"})),t=!0;break}return t||this.setState(n=>({...n,data:void 0,status:"disconnected"})),ha(this,wi,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t=typeof e=="function"?e():e;t.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.publicClients.get(e??-1),t))return t;const{publicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,this.publicClients.set(e??-1,t),t}setPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(o=>({...o,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.webSocketPublicClients.get(e??-1),t))return t;const{webSocketPublicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(o=>({...o,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){var t;(t=this.storage)==null||t.setItem("wallet",e)}};wi=new WeakMap;Do=new WeakMap;Qu=new WeakSet;Vw=function(){const e=a=>{this.setState(c=>({...c,data:{...c.data,...a}}))},t=()=>{this.clearState()},n=a=>{this.setState(c=>({...c,error:a}))};this.store.subscribe(({connector:a})=>a,(a,c)=>{var l,u,f,g,w,b;(l=c==null?void 0:c.off)==null||l.call(c,"change",e),(u=c==null?void 0:c.off)==null||u.call(c,"disconnect",t),(f=c==null?void 0:c.off)==null||f.call(c,"error",n),a&&((g=a.on)==null||g.call(a,"change",e),(w=a.on)==null||w.call(a,"disconnect",t),(b=a.on)==null||b.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:o}=this.args;(typeof r=="function"||typeof o=="function")&&this.store.subscribe(({data:a})=>{var c;return(c=a==null?void 0:a.chain)==null?void 0:c.id},a=>{this.setState(c=>({...c,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var Zu;function J8(e){const t=new Y8(e);return Zu=t,t}function Tn(){if(!Zu)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Zu}async function Gh({chainId:e,connector:t}){const n=Tn(),r=n.connector;if(r&&t.id===r.id)throw new W8;try{n.setState(i=>({...i,status:"connecting"}));const o=await t.connect({chainId:e});return n.setLastUsedConnector(t.id),n.setState(i=>({...i,connector:t,chains:t==null?void 0:t.chains,data:o,status:"connected"})),n.storage.setItem("connected",!0),{...o,connector:t}}catch(o){throw n.setState(i=>({...i,status:i.connector?"connected":"disconnected"})),o}}async function X8(){const e=Tn();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}var ex=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],tx=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function vr({chainId:e}={}){const t=Tn();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function qw({chainId:e}={}){var r,o;return await((o=(r=Tn().connector)==null?void 0:r.getWalletClient)==null?void 0:o.call(r,{chainId:e}))||null}async function nx({abi:e,address:t,args:n,chainId:r,functionName:o,walletClient:i,...s}){const a=vr({chainId:r}),c=i??await qw({chainId:r});if(!c)throw new Un;r&&Kw({chainId:r});const{account:l,accessList:u,blockNumber:f,blockTag:g,gas:w,gasPrice:b,maxFeePerGas:v,maxPriorityFeePerGas:A,nonce:_,value:m}=q8(s),{result:C,request:x}=await a.simulateContract({abi:e,address:t,functionName:o,args:n,account:l||c.account,accessList:u,blockNumber:f,blockTag:g,gas:w,gasPrice:b,maxFeePerGas:v,maxPriorityFeePerGas:A,nonce:_,value:m}),E=e.filter(P=>"name"in P&&P.name===o);return{mode:"prepared",request:{...x,abi:E,chainId:r},result:C}}async function rx({chainId:e,contracts:t,blockNumber:n,blockTag:r,...o}){const i=vr({chainId:e});if(!i.chains)throw new z8;if(e&&i.chain.id!==e)throw new j8({chainId:e});return i.multicall({allowFailure:o.allowFailure??!0,blockNumber:n,blockTag:r,contracts:t})}async function Yu({address:e,account:t,chainId:n,abi:r,args:o,functionName:i,blockNumber:s,blockTag:a}){return vr({chainId:n}).readContract({abi:r,address:e,account:t,functionName:i,args:o,blockNumber:s,blockTag:a})}async function ix({contracts:e,blockNumber:t,blockTag:n,...r}){const{allowFailure:o=!0}=r;try{const i=vr(),s=e.reduce((u,f,g)=>{const w=f.chainId??i.chain.id;return{...u,[w]:[...u[w]||[],{contract:f,index:g}]}},{}),a=()=>Object.entries(s).map(([u,f])=>rx({allowFailure:o,chainId:parseInt(u),contracts:f.map(({contract:g})=>g),blockNumber:t,blockTag:n})),c=(await Promise.all(a())).flat(),l=Object.values(s).flatMap(u=>u.map(({index:f})=>f));return c.reduce((u,f,g)=>(u&&(u[l[g]]=f),u),[])}catch(i){if(i instanceof w0)throw i;const s=()=>e.map(a=>Yu({...a,blockNumber:t,blockTag:n}));return o?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function Kh(e){const t=await qw({chainId:e.chainId});if(!t)throw new Un;e.chainId&&Kw({chainId:e.chainId});let n;if(e.mode==="prepared")n=e.request;else{const{chainId:o,mode:i,...s}=e;n=(await nx(s)).request}return{hash:await t.writeContract({...n,chain:null})}}async function ox({address:e,chainId:t,formatUnits:n,token:r}){const o=Tn(),i=vr({chainId:t});if(r){const l=async({abi:u})=>{const f={abi:u,address:r,chainId:t},[g,w,b]=await ix({allowFailure:!1,contracts:[{...f,functionName:"balanceOf",args:[e]},{...f,functionName:"decimals"},{...f,functionName:"symbol"}]});return{decimals:w,formatted:Na(g??"0",zh(n??w)),symbol:b,value:g}};try{return await l({abi:ex})}catch(u){if(u instanceof w0){const{symbol:f,...g}=await l({abi:tx});return{symbol:i0(Lr(f,{dir:"right"})),...g}}throw u}}const s=[...o.publicClient.chains||[],...o.chains??[]],a=await i.getBalance({address:e}),c=s.find(l=>l.id===i.chain.id);return{decimals:(c==null?void 0:c.nativeCurrency.decimals)??18,formatted:Na(a??"0",zh(n??18)),symbol:(c==null?void 0:c.nativeCurrency.symbol)??"ETH",value:a}}function vn(){const{data:e,connector:t,status:n}=Tn();switch(n){case"connected":return{address:e==null?void 0:e.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!!(e!=null&&e.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function Qa(){var o,i,s,a;const e=Tn(),t=(i=(o=e.data)==null?void 0:o.chain)==null?void 0:i.id,n=e.chains??[],r=[...((s=e.publicClient)==null?void 0:s.chains)||[],...n].find(c=>c.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...r,...(a=e.data)==null?void 0:a.chain,id:t}:void 0,chains:n}}async function sx({chainId:e}){const{connector:t}=Tn();if(!t)throw new Un;if(!t.switchChain)throw new H8({connector:t});return t.switchChain(e)}function U0(e,{selector:t=n=>n}={}){const n=Tn(),r=()=>e(vn());return n.subscribe(({data:i,connector:s,status:a})=>t({address:i==null?void 0:i.account,connector:s,status:a}),r,{equalityFn:Ew})}function Gw(e,{selector:t=n=>n}={}){const n=Tn(),r=()=>e(Qa());return n.subscribe(({data:i,chains:s})=>{var a;return t({chainId:(a=i==null?void 0:i.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:Ew})}async function ax({name:e,chainId:t}){return await vr({chainId:t}).getEnsAvatar({name:U8(e)})}async function cx({address:e,chainId:t}){return vr({chainId:t}).getEnsName({address:rn(e)})}async function Qh({chainId:e,confirmations:t=1,hash:n,onReplaced:r,timeout:o=0}){const i=vr({chainId:e}),s=await i.waitForTransactionReceipt({hash:n,confirmations:t,onReplaced:r,timeout:o});if(s.status==="reverted"){const a=await i.getTransaction({hash:s.transactionHash}),c=await i.call({...a,gasPrice:a.type!=="eip1559"?a.gasPrice:void 0,maxFeePerGas:a.type==="eip1559"?a.maxFeePerGas:void 0,maxPriorityFeePerGas:a.type==="eip1559"?a.maxPriorityFeePerGas:void 0}),l=i0(`0x${c.substring(138)}`);throw new Error(l)}return s}function Kw({chainId:e}){var o,i;const{chain:t,chains:n}=Qa(),r=t==null?void 0:t.id;if(r&&e!==r)throw new L8({activeChain:((o=n.find(s=>s.id===r))==null?void 0:o.name)??`Chain ${r}`,targetChain:((i=n.find(s=>s.id===e))==null?void 0:i.name)??`Chain ${e}`})}const lx=Symbol(),Zh=Object.getPrototypeOf,Ju=new WeakMap,ux=e=>e&&(Ju.has(e)?Ju.get(e):Zh(e)===Object.prototype||Zh(e)===Array.prototype),fx=e=>ux(e)&&e[lx]||null,Yh=(e,t=!0)=>{Ju.set(e,t)},Ll=e=>typeof e=="object"&&e!==null,tr=new WeakMap,Io=new WeakSet,dx=(e=Object.is,t=(l,u)=>new Proxy(l,u),n=l=>Ll(l)&&!Io.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),r=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},o=new WeakMap,i=(l,u,f=r)=>{const g=o.get(l);if((g==null?void 0:g[0])===u)return g[1];const w=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return Yh(w,!0),o.set(l,[u,w]),Reflect.ownKeys(l).forEach(b=>{if(Object.getOwnPropertyDescriptor(w,b))return;const v=Reflect.get(l,b),A={value:v,enumerable:!0,configurable:!0};if(Io.has(v))Yh(v,!1);else if(v instanceof Promise)delete A.value,A.get=()=>f(v);else if(tr.has(v)){const[_,m]=tr.get(v);A.value=i(_,m(),f)}Object.defineProperty(w,b,A)}),Object.preventExtensions(w)},s=new WeakMap,a=[1,1],c=l=>{if(!Ll(l))throw new Error("object required");const u=s.get(l);if(u)return u;let f=a[0];const g=new Set,w=($,F=++a[0])=>{f!==F&&(f=F,g.forEach(z=>z($,F)))};let b=a[1];const v=($=++a[1])=>(b!==$&&!g.size&&(b=$,_.forEach(([F])=>{const z=F[1]($);z>f&&(f=z)})),f),A=$=>(F,z)=>{const ie=[...F];ie[1]=[$,...ie[1]],w(ie,z)},_=new Map,m=($,F)=>{if(g.size){const z=F[3](A($));_.set($,[F,z])}else _.set($,[F])},C=$=>{var F;const z=_.get($);z&&(_.delete($),(F=z[1])==null||F.call(z))},x=$=>(g.add($),g.size===1&&_.forEach(([z,ie],le)=>{const we=z[3](A(le));_.set(le,[z,we])}),()=>{g.delete($),g.size===0&&_.forEach(([z,ie],le)=>{ie&&(ie(),_.set(le,[z]))})}),E=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),h=t(E,{deleteProperty($,F){const z=Reflect.get($,F);C(F);const ie=Reflect.deleteProperty($,F);return ie&&w(["delete",[F],z]),ie},set($,F,z,ie){const le=Reflect.has($,F),we=Reflect.get($,F,ie);if(le&&(e(we,z)||s.has(z)&&e(we,s.get(z))))return!0;C(F),Ll(z)&&(z=fx(z)||z);let ge=z;if(z instanceof Promise)z.then(oe=>{z.status="fulfilled",z.value=oe,w(["resolve",[F],oe])}).catch(oe=>{z.status="rejected",z.reason=oe,w(["reject",[F],oe])});else{!tr.has(z)&&n(z)&&(ge=c(z));const oe=!Io.has(ge)&&tr.get(ge);oe&&m(F,oe)}return Reflect.set($,F,ge,ie),w(["set",[F],z,we]),!0}});s.set(l,h);const D=[E,v,i,x];return tr.set(h,D),Reflect.ownKeys(l).forEach($=>{const F=Object.getOwnPropertyDescriptor(l,$);"value"in F&&(h[$]=l[$],delete F.value,delete F.writable),Object.defineProperty(E,$,F)}),h})=>[c,tr,Io,e,t,n,r,o,i,s,a],[hx]=dx();function un(e={}){return hx(e)}function el(e,t,n){const r=tr.get(e);let o;const i=[],s=r[3];let a=!1;const l=s(u=>{if(i.push(u),n){t(i.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,a&&t(i.splice(0))}))});return a=!0,()=>{a=!1,l()}}function sI(e,t){const n=tr.get(e),[r,o,i]=n;return i(r,o(),t)}function Qw(e){return Io.add(e),e}function On(e,t,n,r){let o=e[t];return el(e,()=>{const i=e[t];Object.is(o,i)||n(o=i)},r)}const Pa={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3},Me={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const e=navigator.userAgent.toLowerCase();return Me.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return Me.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=Pa.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=Pa.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+Pa.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function o(){e(...r)}n&&clearTimeout(n),n=setTimeout(o,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(Me.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(e,t){if(!Me.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise((n,r)=>{const o=new Image;o.onload=n,o.onerror=r,o.crossOrigin="anonymous",o.src=e});return Promise.race([t,Me.wait(2e3)])},formatBalance(e,t){let n;return e==="0.0"?n="0":typeof e=="string"&&e.length>6?n=e.substring(0,6):typeof e=="string"&&(n=e),n?`${n} ${t}`:"0.0000"}},it=un({isConnected:!1}),qe={state:it,subscribe(e){return el(it,()=>e(it))},subscribeKey(e,t){return On(it,e,t)},setIsConnected(e){it.isConnected=e},setCaipAddress(e){it.caipAddress=e,it.address=e?Me.getPlainAddress(e):void 0},setBalance(e,t){it.balance=e,it.balanceSymbol=t},setProfileName(e){it.profileName=e},setProfileImage(e){it.profileImage=e},setAddressExplorerUrl(e){it.addressExplorerUrl=e},resetAccount(){it.isConnected=!1,it.caipAddress=void 0,it.address=void 0,it.balance=void 0,it.balanceSymbol=void 0,it.profileName=void 0,it.profileImage=void 0,it.addressExplorerUrl=void 0}};class Zw{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).json()}async getBlob({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).blob()}async post({body:t,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0})).json()}async put({body:t,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0})).json()}async delete({body:t,headers:n,...r}){const o=this.createUrl(r);return(await fetch(o,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0})).json()}createUrl({path:t,params:n}){const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([o,i])=>{i&&r.searchParams.append(o,i)}),r}}const jl="WALLETCONNECT_DEEPLINK_CHOICE",Jh="@w3m/recent",Gr={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(jl,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(jl);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(jl)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=Gr.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(Jh,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(Jh);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},Jn=un({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Cn={state:Jn,subscribeNetworkImages(e){return el(Jn.networkImages,()=>e(Jn.networkImages))},subscribeKey(e,t){return On(Jn,e,t)},setWalletImage(e,t){Jn.walletImages[e]=t},setNetworkImage(e,t){Jn.networkImages[e]=t},setConnectorImage(e,t){Jn.connectorImages[e]=t},setTokenImage(e,t){Jn.tokenImages[e]=t}},li=un({connectors:[]}),Kr={state:li,subscribeKey(e,t){return On(li,e,t)},setConnectors(e){li.connectors=e},addConnector(e){li.connectors.push(e)},removeConnectorById(e){li.connectors=li.connectors.filter(t=>t.id!==e)}},wt=un({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Ye={state:wt,subscribeKey(e,t){return On(wt,e,t)},_getClient(){if(!wt._client)throw new Error("NetworkController client not set");return wt._client},setClient(e){wt._client=Qw(e)},setCaipNetwork(e){wt.caipNetwork=e},setDefaultCaipNetwork(e){wt.caipNetwork=e,wt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){wt.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();wt.supportsAllNetworks=e.supportsAllNetworks,wt.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),wt.caipNetwork=e},resetNetwork(){wt.isDefaultCaipNetwork||(wt.caipNetwork=void 0),wt.approvedCaipNetworkIds=void 0,wt.supportsAllNetworks=!0}},hn=un({projectId:""}),tt={state:hn,subscribeKey(e,t){return On(hn,e,t)},setProjectId(e){hn.projectId=e},setIncludeWalletIds(e){hn.includeWalletIds=e},setExcludeWalletIds(e){hn.excludeWalletIds=e},setFeaturedWalletIds(e){hn.featuredWalletIds=e},setTokens(e){hn.tokens=e},setTermsConditionsUrl(e){hn.termsConditionsUrl=e},setPrivacyPolicyUrl(e){hn.privacyPolicyUrl=e},setCustomWallets(e){hn.customWallets=e}},pn=new Zw({baseUrl:"https://api.web3modal.com"}),px="40",Xh="4",gx="w3m",dt=un({sdkVersion:"html-wagmi-undefined",page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),Oe={state:dt,subscribeKey(e,t){return On(dt,e,t)},setSdkVersion(e){dt.sdkVersion=e},_getApiHeaders(){return{"x-project-id":tt.state.projectId,"x-sdk-type":gx,"x-sdk-version":dt.sdkVersion}},async _fetchWalletImage(e){const t=`${pn.baseUrl}/getWalletImage/${e}`,n=await pn.getBlob({path:t,headers:Oe._getApiHeaders()});Cn.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${pn.baseUrl}/public/getAssetImage/${e}`,n=await pn.getBlob({path:t,headers:Oe._getApiHeaders()});Cn.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${pn.baseUrl}/public/getAssetImage/${e}`,n=await pn.getBlob({path:t,headers:Oe._getApiHeaders()});Cn.setConnectorImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=Ye.state,t=e==null?void 0:e.map(({imageId:n})=>n).filter(Boolean);t&&await Promise.allSettled(t.map(n=>Oe._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=Kr.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>Oe._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=tt.state;if(e!=null&&e.length){const{data:t}=await pn.get({path:"/getWallets",headers:Oe._getApiHeaders(),params:{page:"1",entries:e!=null&&e.length?String(e.length):Xh,include:e==null?void 0:e.join(",")}}),n=t.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>Oe._fetchWalletImage(r))),dt.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=tt.state,r=[...t??[],...n??[]].filter(Boolean),{data:o,count:i}=await pn.get({path:"/getWallets",headers:Oe._getApiHeaders(),params:{page:"1",entries:Xh,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),s=Gr.getRecentWallets(),a=o.map(l=>l.image_id).filter(Boolean),c=s.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(l=>Oe._fetchWalletImage(l))),dt.recommended=o,dt.count=i??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=tt.state,o=[...dt.recommended.map(({id:c})=>c),...n??[],...r??[]].filter(Boolean),{data:i,count:s}=await pn.get({path:"/getWallets",headers:Oe._getApiHeaders(),params:{page:String(e),entries:px,include:t==null?void 0:t.join(","),exclude:o.join(",")}}),a=i.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>Oe._fetchWalletImage(c)),Me.wait(300)]),dt.wallets=[...dt.wallets,...i],dt.count=s>dt.count?s:dt.count,dt.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=tt.state;dt.search=[];const{data:r}=await pn.get({path:"/getWallets",headers:Oe._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t==null?void 0:t.join(","),exclude:n==null?void 0:n.join(",")}}),o=r.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...o.map(i=>Oe._fetchWalletImage(i)),Me.wait(300)]),dt.search=r},prefetch(){dt.prefetchPromise=Promise.race([Promise.allSettled([Oe.fetchFeaturedWallets(),Oe.fetchRecommendedWallets(),Oe.fetchNetworkImages(),Oe.fetchConnectorImages()]),Me.wait(3e3)])}},ht=un({view:"Connect",history:["Connect"]}),Te={state:ht,subscribeKey(e,t){return On(ht,e,t)},push(e,t){e!==ht.view&&(ht.view=e,ht.history.push(e),ht.data=t)},reset(e){ht.view=e,ht.history=[e]},replace(e){ht.history.length>1&&ht.history.at(-1)!==e&&(ht.view=e,ht.history[ht.history.length-1]=e)},goBack(){if(ht.history.length>1){ht.history.pop();const[e]=ht.history.slice(-1);e&&(ht.view=e)}}},pa=un({open:!1}),lt={state:pa,subscribeKey(e,t){return On(pa,e,t)},async open(e){await Oe.state.prefetchPromise,e!=null&&e.view?Te.reset(e.view):qe.state.isConnected?Te.reset("Account"):Te.reset("Connect"),pa.open=!0},close(){pa.open=!1}},at=un({wcError:!1,buffering:!1}),Fe={state:at,subscribeKey(e,t){return On(at,e,t)},_getClient(){if(!at._client)throw new Error("ConnectionController client not set");return at._client},setClient(e){at._client=Qw(e)},connectWalletConnect(){at.wcPromise=this._getClient().connectWalletConnect(e=>{at.wcUri=e,at.wcPairingExpiry=Me.getPairingExpiry()})},async connectExternal(e){var t,n;await((n=(t=this._getClient()).connectExternal)==null?void 0:n.call(t,e))},checkInjectedInstalled(e){var t,n;return(n=(t=this._getClient()).checkInjectedInstalled)==null?void 0:n.call(t,e)},resetWcConnection(){at.wcUri=void 0,at.wcPairingExpiry=void 0,at.wcPromise=void 0,at.wcLinking=void 0,at.recentWallet=void 0,Gr.deleteWalletConnectDeepLink()},setWcLinking(e){at.wcLinking=e},setWcError(e){at.wcError=e,at.buffering=!1},setRecentWallet(e){at.recentWallet=e},setBuffering(e){at.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},Mn=un({message:"",variant:"success",open:!1}),Xt={state:Mn,subscribeKey(e,t){return On(Mn,e,t)},showSuccess(e){Mn.message=e,Mn.variant="success",Mn.open=!0},showError(e){Mn.message=e,Mn.variant="error",Mn.open=!0},hide(){Mn.open=!1}},ui=un({themeMode:"dark",themeVariables:{}}),Mt={state:ui,subscribe(e){return el(ui,()=>e(ui))},setThemeMode(e){ui.themeMode=e},setThemeVariables(e){ui.themeVariables={...ui.themeVariables,...e}}},wx=new Zw({baseUrl:"https://rpc.walletconnect.com"}),bx={fetchIdentity({caipChainId:e,address:t}){return wx.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:tt.state.projectId}})}},At={getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return Cn.state.walletImages[e.image_id]},getNetworkImage(e){if(e!=null&&e.imageId)return Cn.state.networkImages[e.imageId]},getConnectorImage(e){if(e!=null&&e.imageId)return Cn.state.connectorImages[e.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Da=window,F0=Da.ShadowRoot&&(Da.ShadyCSS===void 0||Da.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L0=Symbol(),e1=new WeakMap;let Yw=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==L0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(F0&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=e1.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&e1.set(n,t))}return t}toString(){return this.cssText}};const wn=e=>new Yw(typeof e=="string"?e:e+"",void 0,L0),de=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new Yw(n,e,L0)},mx=(e,t)=>{F0?e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):t.forEach(n=>{const r=document.createElement("style"),o=Da.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)})},t1=F0?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return wn(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wl;const Za=window,n1=Za.trustedTypes,yx=n1?n1.emptyScript:"",r1=Za.reactiveElementPolyfillSupport,Xu={toAttribute(e,t){switch(t){case Boolean:e=e?yx:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Jw=(e,t)=>t!==e&&(t==t||e==e),zl={attribute:!0,type:String,converter:Xu,reflect:!1,hasChanged:Jw},ef="finalized";let bi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((n,r)=>{const o=this._$Ep(r,n);o!==void 0&&(this._$Ev.set(o,r),t.push(o))}),t}static createProperty(t,n=zl){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){return{get(){return this[n]},set(o){const i=this[t];this[n]=o,this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||zl}static finalize(){if(this.hasOwnProperty(ef))return!1;this[ef]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,r=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of r)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(t1(o))}else t!==void 0&&n.push(t1(t));return n}static _$Ep(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(n=>n(this))}addController(t){var n,r;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var t;const n=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return mx(n,this.constructor.elementStyles),n}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostConnected)===null||r===void 0?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostDisconnected)===null||r===void 0?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n,r=zl){var o;const i=this.constructor._$Ep(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:Xu).toAttribute(n,r.type);this._$El=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(t,n){var r;const o=this.constructor,i=o._$Ev.get(t);if(i!==void 0&&this._$El!==i){const s=o.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?s.converter:Xu;this._$El=i,this[i]=a.fromAttribute(n,s.type),this._$El=null}}requestUpdate(t,n,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Jw)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let n=!1;const r=this._$AL;try{n=this.shouldUpdate(r),n?(this.willUpdate(r),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(r)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(r)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)===null||n===void 0||n.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((n,r)=>this._$EO(r,this[r],n)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};bi[ef]=!0,bi.elementProperties=new Map,bi.elementStyles=[],bi.shadowRootOptions={mode:"open"},r1==null||r1({ReactiveElement:bi}),((Wl=Za.reactiveElementVersions)!==null&&Wl!==void 0?Wl:Za.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hl;const Ya=window,Ui=Ya.trustedTypes,i1=Ui?Ui.createPolicy("lit-html",{createHTML:e=>e}):void 0,tf="$lit$",nr=`lit$${(Math.random()+"").slice(9)}$`,Xw="?"+nr,vx=`<${Xw}>`,Qr=document,ys=()=>Qr.createComment(""),vs=e=>e===null||typeof e!="object"&&typeof e!="function",eb=Array.isArray,xx=e=>eb(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Vl=`[ 	
\f\r]`,Ao=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,o1=/-->/g,s1=/>/g,Dr=RegExp(`>|${Vl}(?:([^\\s"'>=/]+)(${Vl}*=${Vl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),a1=/'/g,c1=/"/g,tb=/^(?:script|style|textarea|title)$/i,nb=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),R=nb(1),fe=nb(2),Zr=Symbol.for("lit-noChange"),nt=Symbol.for("lit-nothing"),l1=new WeakMap,Rr=Qr.createTreeWalker(Qr,129,null,!1);function rb(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return i1!==void 0?i1.createHTML(t):t}const Ax=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",s=Ao;for(let a=0;a<n;a++){const c=e[a];let l,u,f=-1,g=0;for(;g<c.length&&(s.lastIndex=g,u=s.exec(c),u!==null);)g=s.lastIndex,s===Ao?u[1]==="!--"?s=o1:u[1]!==void 0?s=s1:u[2]!==void 0?(tb.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Dr):u[3]!==void 0&&(s=Dr):s===Dr?u[0]===">"?(s=o??Ao,f=-1):u[1]===void 0?f=-2:(f=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?Dr:u[3]==='"'?c1:a1):s===c1||s===a1?s=Dr:s===o1||s===s1?s=Ao:(s=Dr,o=void 0);const w=s===Dr&&e[a+1].startsWith("/>")?" ":"";i+=s===Ao?c+vx:f>=0?(r.push(l),c.slice(0,f)+tf+c.slice(f)+nr+w):c+nr+(f===-2?(r.push(void 0),a):w)}return[rb(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};let nf=class ib{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=t.length-1,c=this.parts,[l,u]=Ax(t,n);if(this.el=ib.createElement(l,r),Rr.currentNode=this.el.content,n===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(o=Rr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const f=[];for(const g of o.getAttributeNames())if(g.endsWith(tf)||g.startsWith(nr)){const w=u[s++];if(f.push(g),w!==void 0){const b=o.getAttribute(w.toLowerCase()+tf).split(nr),v=/([.?@])?(.*)/.exec(w);c.push({type:1,index:i,name:v[2],strings:b,ctor:v[1]==="."?Ex:v[1]==="?"?Sx:v[1]==="@"?Px:tl})}else c.push({type:6,index:i})}for(const g of f)o.removeAttribute(g)}if(tb.test(o.tagName)){const f=o.textContent.split(nr),g=f.length-1;if(g>0){o.textContent=Ui?Ui.emptyScript:"";for(let w=0;w<g;w++)o.append(f[w],ys()),Rr.nextNode(),c.push({type:2,index:++i});o.append(f[g],ys())}}}else if(o.nodeType===8)if(o.data===Xw)c.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(nr,f+1))!==-1;)c.push({type:7,index:i}),f+=nr.length-1}i++}}static createElement(t,n){const r=Qr.createElement("template");return r.innerHTML=t,r}};function Fi(e,t,n=e,r){var o,i,s,a;if(t===Zr)return t;let c=r!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[r]:n._$Cl;const l=vs(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((i=c==null?void 0:c._$AO)===null||i===void 0||i.call(c,!1),l===void 0?c=void 0:(c=new l(e),c._$AT(e,n,r)),r!==void 0?((s=(a=n)._$Co)!==null&&s!==void 0?s:a._$Co=[])[r]=c:n._$Cl=c),c!==void 0&&(t=Fi(e,c._$AS(e,t.values),c,r)),t}let Cx=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:r},parts:o}=this._$AD,i=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:Qr).importNode(r,!0);Rr.currentNode=i;let s=Rr.nextNode(),a=0,c=0,l=o[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new j0(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new Dx(s,this,t)),this._$AV.push(u),l=o[++c]}a!==(l==null?void 0:l.index)&&(s=Rr.nextNode(),a++)}return Rr.currentNode=Qr,i}v(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},j0=class ob{constructor(t,n,r,o){var i;this.type=2,this._$AH=nt,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Fi(this,t,n),vs(t)?t===nt||t==null||t===""?(this._$AH!==nt&&this._$AR(),this._$AH=nt):t!==this._$AH&&t!==Zr&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):xx(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==nt&&vs(this._$AH)?this._$AA.nextSibling.data=t:this.$(Qr.createTextNode(t)),this._$AH=t}g(t){var n;const{values:r,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=nf.createElement(rb(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===i)this._$AH.v(r);else{const s=new Cx(i,this),a=s.u(this.options);s.v(r),this.$(a),this._$AH=s}}_$AC(t){let n=l1.get(t.strings);return n===void 0&&l1.set(t.strings,n=new nf(t)),n}T(t){eb(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new ob(this.k(ys()),this.k(ys()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,n);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var n;this._$AM===void 0&&(this._$Cp=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}};class tl{constructor(t,n,r,o,i){this.type=1,this._$AH=nt,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=nt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)t=Fi(this,t,n,0),s=!vs(t)||t!==this._$AH&&t!==Zr,s&&(this._$AH=t);else{const a=t;let c,l;for(t=i[0],c=0;c<i.length-1;c++)l=Fi(this,a[r+c],n,c),l===Zr&&(l=this._$AH[c]),s||(s=!vs(l)||l!==this._$AH[c]),l===nt?t=nt:t!==nt&&(t+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(t)}j(t){t===nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let Ex=class extends tl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===nt?void 0:t}};const _x=Ui?Ui.emptyScript:"";let Sx=class extends tl{constructor(){super(...arguments),this.type=4}j(t){t&&t!==nt?this.element.setAttribute(this.name,_x):this.element.removeAttribute(this.name)}};class Px extends tl{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){var r;if((t=(r=Fi(this,t,n,0))!==null&&r!==void 0?r:nt)===Zr)return;const o=this._$AH,i=t===nt&&o!==nt||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==nt&&(o===nt||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,r;typeof this._$AH=="function"?this._$AH.call((r=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}}let Dx=class{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Fi(this,t)}};const u1=Ya.litHtmlPolyfillSupport;u1==null||u1(nf,j0),((Hl=Ya.litHtmlVersions)!==null&&Hl!==void 0?Hl:Ya.litHtmlVersions=[]).push("2.8.0");const Ix=(e,t,n)=>{var r,o;const i=(r=n==null?void 0:n.renderBefore)!==null&&r!==void 0?r:t;let s=i._$litPart$;if(s===void 0){const a=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new j0(t.insertBefore(ys(),a),a,void 0,n??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ql,Gl;let ae=class extends bi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,n;const r=super.createRenderRoot();return(t=(n=this.renderOptions).renderBefore)!==null&&t!==void 0||(n.renderBefore=r.firstChild),r}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ix(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Zr}};ae.finalized=!0,ae._$litElement$=!0,(ql=globalThis.litElementHydrateSupport)===null||ql===void 0||ql.call(globalThis,{LitElement:ae});const f1=globalThis.litElementPolyfillSupport;f1==null||f1({LitElement:ae});((Gl=globalThis.litElementVersions)!==null&&Gl!==void 0?Gl:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=e=>t=>typeof t=="function"?((n,r)=>(customElements.define(n,r),r))(e,t):((n,r)=>{const{kind:o,elements:i}=r;return{kind:o,elements:i,finisher(s){customElements.define(n,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tx=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},Ox=(e,t,n)=>{t.constructor.createProperty(n,e)};function M(e){return(t,n)=>n!==void 0?Ox(e,t,n):Tx(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(e){return M({...e,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kl;((Kl=window.HTMLSlotElement)===null||Kl===void 0?void 0:Kl.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=e=>e??nt;var Kn=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Sn=class extends ae{constructor(){super(),this.unsubscribe=[],this.networkImages=Cn.state.networkImages,this.disabled=!1,this.balance="show",this.address=qe.state.address,this.balanceVal=qe.state.balance,this.balanceSymbol=qe.state.balanceSymbol,this.profileName=qe.state.profileName,this.profileImage=qe.state.profileImage,this.network=Ye.state.caipNetwork,this.unsubscribe.push(qe.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Ye.subscribeKey("caipNetwork",t=>this.network=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var r;const t=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return R`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${ke(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${ke(t)}
        avatarSrc=${ke(this.profileImage)}
        balance=${n?Me.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){lt.open()}};Kn([M({type:Boolean})],Sn.prototype,"disabled",void 0);Kn([M()],Sn.prototype,"balance",void 0);Kn([Ce()],Sn.prototype,"address",void 0);Kn([Ce()],Sn.prototype,"balanceVal",void 0);Kn([Ce()],Sn.prototype,"balanceSymbol",void 0);Kn([Ce()],Sn.prototype,"profileName",void 0);Kn([Ce()],Sn.prototype,"profileImage",void 0);Kn([Ce()],Sn.prototype,"network",void 0);Sn=Kn([re("w3m-account-button")],Sn);var ri=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let dr=class extends ae{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=qe.state.isConnected,this.unsubscribe.push(qe.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?R`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${ke(this.balance)}
          >
          </w3m-account-button>
        `:R`
          <w3m-connect-button
            size=${ke(this.size)}
            label=${ke(this.label)}
            loadingLabel=${ke(this.loadingLabel)}
          ></w3m-connect-button>
        `}};ri([M({type:Boolean})],dr.prototype,"disabled",void 0);ri([M()],dr.prototype,"balance",void 0);ri([M()],dr.prototype,"size",void 0);ri([M()],dr.prototype,"label",void 0);ri([M()],dr.prototype,"loadingLabel",void 0);ri([Ce()],dr.prototype,"isAccount",void 0);dr=ri([re("w3m-button")],dr);var zs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Li=class extends ae{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=lt.state.open,this.unsubscribe.push(lt.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return R`
      <wui-connect-button
        size=${ke(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?lt.close():lt.open()}};zs([M()],Li.prototype,"size",void 0);zs([M()],Li.prototype,"label",void 0);zs([M()],Li.prototype,"loadingLabel",void 0);zs([Ce()],Li.prototype,"open",void 0);Li=zs([re("w3m-connect-button")],Li);let xi;function Bx(e,t){xi=document.createElement("style"),xi.id="wui-theme",xi.textContent=ab(e).cssText,document.head.appendChild(xi),sb(t)}function sb(e){document.documentElement.setAttribute("suppressHydrationWarning","true"),document.documentElement.setAttribute("data-wui-theme",e)}function kx(e){xi&&(xi.textContent=ab(e).cssText)}function ab(e){return de`
    :root {
      --w3m-color-mix-strength: ${wn(e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
      --w3m-font-family: ${wn(e["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
      --w3m-font-size-master: ${wn(e["--w3m-font-size-master"]||"10px")};
      --w3m-border-radius-master: ${wn(e["--w3m-border-radius-master"]||"4px")};
      --w3m-z-index: ${wn(e["--w3m-z-index"]||100)};

      --wui-font-family: var(--w3m-font-family);

      --wui-font-size-micro: var(--w3m-font-size-master);
      --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
      --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
      --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
      --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

      --wui-border-radius-5xs: var(--w3m-border-radius-master);
      --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
      --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
      --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
      --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
      --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
      --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
      --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
      --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

      --wui-font-weight-regular: 500;
      --wui-font-weight-medium: 600;
      --wui-font-weight-bold: 700;

      --wui-letter-spacing-large: -0.8px;
      --wui-letter-spacing-paragraph: -0.64px;
      --wui-letter-spacing-small: -0.56px;
      --wui-letter-spacing-tiny: -0.48px;
      --wui-letter-spacing-micro: -0.2px;

      --wui-spacing-0: 0px;
      --wui-spacing-4xs: 2px;
      --wui-spacing-3xs: 4px;
      --wui-spacing-xxs: 6px;
      --wui-spacing-2xs: 7px;
      --wui-spacing-xs: 8px;
      --wui-spacing-1xs: 10px;
      --wui-spacing-s: 12px;
      --wui-spacing-m: 14px;
      --wui-spacing-l: 16px;
      --wui-spacing-2l: 18px;
      --wui-spacing-xl: 20px;
      --wui-spacing-xxl: 24px;
      --wui-spacing-3xl: 40px;

      --wui-icon-box-size-xs: 20px;
      --wui-icon-box-size-sm: 24px;
      --wui-icon-box-size-md: 32px;
      --wui-icon-box-size-lg: 40px;

      --wui-icon-size-inherit: inherit;
      --wui-icon-size-xxs: 10px;
      --wui-icon-size-xs: 12px;
      --wui-icon-size-sm: 14px;
      --wui-icon-size-md: 16px;
      --wui-icon-size-lg: 20px;

      --wui-wallet-image-size-inherit: inherit;
      --wui-wallet-image-size-sm: 40px;
      --wui-wallet-image-size-md: 56px;
      --wui-wallet-image-size-lg: 80px;

      --wui-box-size-md: 100px;
      --wui-box-size-lg: 120px;

      --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
      --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

      --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
      --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
      --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

      --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

      --wui-duration-lg: 200ms;
      --wui-duration-md: 125ms;
      --wui-duration-sm: 75ms;

      --wui-path-network: path(
        'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
      );

      --wui-path-network-lg: path(
        'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
      );

      --wui-z-index: var(--w3m-z-index);

      --wui-color-inherit: inherit;

      --wui-color-inverse-100: #fff;
      --wui-color-inverse-000: #000;

      --wui-cover: rgba(0, 0, 0, 0.3);

      --wui-color-blue-100: var(--wui-color-blue-base-100);
      --wui-color-blue-015: var(--wui-color-accent-base-015);

      --wui-color-accent-100: var(--wui-color-accent-base-100);
      --wui-color-accent-090: var(--wui-color-accent-base-090);
      --wui-color-accent-080: var(--wui-color-accent-base-080);

      --wui-accent-glass-090: var(--wui-accent-glass-base-090);
      --wui-accent-glass-080: var(--wui-accent-glass-base-080);
      --wui-accent-glass-020: var(--wui-accent-glass-base-020);
      --wui-accent-glass-015: var(--wui-accent-glass-base-015);
      --wui-accent-glass-010: var(--wui-accent-glass-base-010);
      --wui-accent-glass-005: var(--wui-accent-glass-base-005);
      --wui-accent-glass-002: var(--wui-accent-glass-base-002);

      --wui-color-fg-100: var(--wui-color-fg-base-100);
      --wui-color-fg-125: var(--wui-color-fg-base-125);
      --wui-color-fg-150: var(--wui-color-fg-base-150);
      --wui-color-fg-175: var(--wui-color-fg-base-175);
      --wui-color-fg-200: var(--wui-color-fg-base-200);
      --wui-color-fg-225: var(--wui-color-fg-base-225);
      --wui-color-fg-250: var(--wui-color-fg-base-250);
      --wui-color-fg-275: var(--wui-color-fg-base-275);
      --wui-color-fg-300: var(--wui-color-fg-base-300);

      --wui-color-bg-100: var(--wui-color-bg-base-100);
      --wui-color-bg-125: var(--wui-color-bg-base-125);
      --wui-color-bg-150: var(--wui-color-bg-base-150);
      --wui-color-bg-175: var(--wui-color-bg-base-175);
      --wui-color-bg-200: var(--wui-color-bg-base-200);
      --wui-color-bg-225: var(--wui-color-bg-base-225);
      --wui-color-bg-250: var(--wui-color-bg-base-250);
      --wui-color-bg-275: var(--wui-color-bg-base-275);
      --wui-color-bg-300: var(--wui-color-bg-base-300);

      --wui-color-success-100: var(--wui-color-success-base-100);
      --wui-color-error-100: var(--wui-color-error-base-100);

      --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
      --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
      --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
      --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

      --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

      --wui-avatar-border: var(--wui-avatar-border-base);

      --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
    }

    @supports (background: color-mix(in srgb, white 50%, black)) {
      :root {
        --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

        --wui-color-accent-090: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 90%,
          var(--w3m-default)
        );
        --wui-color-accent-080: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 80%,
          var(--w3m-default)
        );

        --wui-color-accent-090: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 90%,
          transparent
        );
        --wui-color-accent-080: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 80%,
          transparent
        );

        --wui-accent-glass-090: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 90%,
          transparent
        );
        --wui-accent-glass-080: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 80%,
          transparent
        );
        --wui-accent-glass-020: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 20%,
          transparent
        );
        --wui-accent-glass-015: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 15%,
          transparent
        );
        --wui-accent-glass-010: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 10%,
          transparent
        );
        --wui-accent-glass-005: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 5%,
          transparent
        );
        --wui-color-accent-002: color-mix(
          in srgb,
          var(--wui-color-accent-base-100) 2%,
          transparent
        );

        --wui-color-fg-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-100)
        );
        --wui-color-fg-125: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-125)
        );
        --wui-color-fg-150: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-150)
        );
        --wui-color-fg-175: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-175)
        );
        --wui-color-fg-200: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-200)
        );
        --wui-color-fg-225: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-225)
        );
        --wui-color-fg-250: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-250)
        );
        --wui-color-fg-275: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-275)
        );
        --wui-color-fg-300: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-fg-base-300)
        );

        --wui-color-bg-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-100)
        );
        --wui-color-bg-125: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-125)
        );
        --wui-color-bg-150: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-150)
        );
        --wui-color-bg-175: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-175)
        );
        --wui-color-bg-200: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-200)
        );
        --wui-color-bg-225: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-225)
        );
        --wui-color-bg-250: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-250)
        );
        --wui-color-bg-275: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-275)
        );
        --wui-color-bg-300: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-bg-base-300)
        );

        --wui-color-success-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-success-base-100)
        );
        --wui-color-error-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-color-error-base-100)
        );

        --wui-icon-box-bg-error-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-icon-box-bg-error-base-100)
        );
        --wui-icon-box-bg-accent-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-icon-box-bg-blue-base-100)
        );
        --wui-icon-box-bg-success-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-icon-box-bg-success-base-100)
        );
        --wui-icon-box-bg-inverse-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-icon-box-bg-inverse-base-100)
        );

        --wui-all-wallets-bg-100: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-all-wallets-bg-base-100)
        );

        --wui-avatar-border: color-mix(
          in srgb,
          var(--w3m-color-mix) var(--w3m-color-mix-strength),
          var(--wui-avatar-border-base)
        );
      }
    }

    [data-wui-theme='dark'] {
      --w3m-color-mix: ${wn(e["--w3m-color-mix"]||"#fff")};
      --w3m-accent: ${wn(e["--w3m-accent"]||"#47a1ff")};
      --w3m-default: #fff;

      --wui-color-blue-base-100: #47a1ff;

      --wui-color-accent-base-100: var(--w3m-accent);
      --wui-color-accent-base-090: #59aaff;
      --wui-color-accent-base-080: #6cb4ff;

      --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
      --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
      --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
      --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
      --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
      --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
      --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

      --wui-color-fg-base-100: #e4e7e7;
      --wui-color-fg-base-125: #d0d5d5;
      --wui-color-fg-base-150: #a8b1b1;
      --wui-color-fg-base-175: #a8b0b0;
      --wui-color-fg-base-200: #949e9e;
      --wui-color-fg-base-225: #868f8f;
      --wui-color-fg-base-250: #788080;
      --wui-color-fg-base-275: #788181;
      --wui-color-fg-base-300: #6e7777;

      --wui-color-bg-base-100: #141414;
      --wui-color-bg-base-125: #191a1a;
      --wui-color-bg-base-150: #1e1f1f;
      --wui-color-bg-base-175: #222525;
      --wui-color-bg-base-200: #272a2a;
      --wui-color-bg-base-225: #2c3030;
      --wui-color-bg-base-250: #313535;
      --wui-color-bg-base-275: #363b3b;
      --wui-color-bg-base-300: #3b4040;

      --wui-color-success-base-100: #26d962;
      --wui-color-error-base-100: #f25a67;

      --wui-icon-box-bg-error-base-100: #3c2426;
      --wui-icon-box-bg-blue-base-100: #20303f;
      --wui-icon-box-bg-success-base-100: #1f3a28;
      --wui-icon-box-bg-inverse-base-100: #243240;

      --wui-all-wallets-bg-base-100: #222b35;

      --wui-avatar-border-base: #252525;

      --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
      --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
      --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
      --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
      --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
      --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
      --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
      --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
      --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
      --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
    }

    [data-wui-theme='light'] {
      --w3m-color-mix: ${wn(e["--w3m-color-mix"]||"#000")};
      --w3m-accent: ${wn(e["--w3m-accent"]||"#3396ff")};
      --w3m-default: #000;

      --wui-color-blue-base-100: #3396ff;

      --wui-color-accent-base-100: var(--w3m-accent);
      --wui-color-accent-base-090: #2d7dd2;
      --wui-color-accent-base-080: #2978cc;

      --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
      --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
      --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
      --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
      --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
      --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
      --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

      --wui-color-fg-base-100: #141414;
      --wui-color-fg-base-125: #2d3131;
      --wui-color-fg-base-150: #474d4d;
      --wui-color-fg-base-175: #636d6d;
      --wui-color-fg-base-200: #798686;
      --wui-color-fg-base-225: #828f8f;
      --wui-color-fg-base-250: #8b9797;
      --wui-color-fg-base-275: #95a0a0;
      --wui-color-fg-base-300: #9ea9a9;

      --wui-color-bg-base-100: #ffffff;
      --wui-color-bg-base-125: #f5fafa;
      --wui-color-bg-base-150: #f3f8f8;
      --wui-color-bg-base-175: #eef4f4;
      --wui-color-bg-base-200: #eaf1f1;
      --wui-color-bg-base-225: #e5eded;
      --wui-color-bg-base-250: #e1e9e9;
      --wui-color-bg-base-275: #dce7e7;
      --wui-color-bg-base-300: #d8e3e3;

      --wui-color-success-base-100: #26b562;
      --wui-color-error-base-100: #f05142;

      --wui-icon-box-bg-error-base-100: #f4dfdd;
      --wui-icon-box-bg-blue-base-100: #d9ecfb;
      --wui-icon-box-bg-success-base-100: #daf0e4;
      --wui-icon-box-bg-inverse-base-100: #dcecfc;

      --wui-all-wallets-bg-base-100: #e8f1fa;

      --wui-avatar-border-base: #f3f4f4;

      --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
      --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
      --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
      --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
      --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
      --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
      --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
      --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
      --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
      --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
    }
  `}const _e=de`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    backface-visibility: hidden;
    font-family: var(--wui-font-family);
  }
`,st=de`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,W0=de`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`,Rx=de`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;var Mx=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let rf=class extends ae{render(){return R`<slot></slot>`}};rf.styles=[_e,Rx];rf=Mx([re("wui-card")],rf);const $x=de`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Nx=fe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ux=fe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Fx=fe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Lx=fe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,jx=fe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Wx=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,zx=fe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,Hx=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Vx=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,qx=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Gx=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Kx=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Qx=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Zx=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Yx=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Jx=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,Xx=fe` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,eA=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,tA=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,nA=fe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,rA=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,iA=fe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,oA=fe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,sA=fe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,aA=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,cA=fe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,lA=fe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,uA=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,fA=fe`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,dA=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,hA=fe`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,pA=fe`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,gA=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,wA=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,bA=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,mA=fe`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,yA=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,vA=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,xA=fe`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,AA=fe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,CA=fe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,EA=fe`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,_A=fe`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,SA=fe`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,PA=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,DA=fe`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,IA=fe`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,TA=fe`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;var nl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const OA={allWallets:TA,apple:Nx,arrowBottom:Ux,arrowLeft:Fx,arrowRight:Lx,arrowTop:jx,browser:Wx,checkmark:zx,chevronBottom:Hx,chevronLeft:Vx,chevronRight:qx,chevronTop:Gx,clock:Kx,close:Qx,compass:Yx,coinPlaceholder:Zx,copy:Jx,cursor:Xx,desktop:eA,disconnect:tA,discord:nA,etherscan:rA,extension:iA,externalLink:oA,facebook:sA,filters:aA,github:cA,google:lA,helpCircle:uA,infoCircle:fA,mail:dA,mobile:hA,networkPlaceholder:pA,nftPlaceholder:gA,off:wA,qrCode:bA,refresh:mA,search:yA,swapHorizontal:vA,swapVertical:xA,telegram:AA,twitch:CA,twitter:EA,twitterIcon:_A,wallet:PA,walletConnect:DA,walletPlaceholder:SA,warningCircle:IA};let ji=class extends ae{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,R`${OA[this.name]}`}};ji.styles=[_e,W0,$x];nl([M()],ji.prototype,"size",void 0);nl([M()],ji.prototype,"name",void 0);nl([M()],ji.prototype,"color",void 0);ji=nl([re("wui-icon")],ji);const BA=de`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var z0=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let xs=class extends ae{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return R`<img src=${this.src} alt=${this.alt} />`}};xs.styles=[_e,W0,BA];z0([M()],xs.prototype,"src",void 0);z0([M()],xs.prototype,"alt",void 0);xs=z0([re("wui-image")],xs);const kA=de`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var RA=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let of=class extends ae{render(){return R`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};of.styles=[_e,kA];of=RA([re("wui-loading-hexagon")],of);const MA=de`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var H0=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let As=class extends ae{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,R`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};As.styles=[_e,MA];H0([M()],As.prototype,"color",void 0);H0([M()],As.prototype,"size",void 0);As=H0([re("wui-loading-spinner")],As);const $A=de`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var cb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ja=class extends ae{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,o=116+r,i=245+r,s=360+r*1.75;return R`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Ja.styles=[_e,$A];cb([M({type:Number})],Ja.prototype,"radius",void 0);Ja=cb([re("wui-loading-thumbnail")],Ja);const NA=de`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var rl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Wi=class extends ae{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,R`<slot></slot>`}};Wi.styles=[NA];rl([M()],Wi.prototype,"width",void 0);rl([M()],Wi.prototype,"height",void 0);rl([M()],Wi.prototype,"borderRadius",void 0);Wi=rl([re("wui-shimmer")],Wi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lb={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ub=e=>(...t)=>({_$litDirective$:e,values:t});let fb=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const UA=ub(class extends fb{constructor(e){var t;if(super(e),e.type!==lb.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,r;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!(!((n=this.nt)===null||n===void 0)&&n.has(i))&&this.it.add(i);return this.render(t)}const o=e.element.classList;this.it.forEach(i=>{i in t||(o.remove(i),this.it.delete(i))});for(const i in t){const s=!!t[i];s===this.it.has(i)||!((r=this.nt)===null||r===void 0)&&r.has(i)||(s?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return Zr}}),FA=de`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var il=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let zi=class extends ae{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,R`<slot class=${UA(t)}></slot>`}};zi.styles=[_e,FA];il([M()],zi.prototype,"variant",void 0);il([M()],zi.prototype,"color",void 0);il([M()],zi.prototype,"align",void 0);zi=il([re("wui-text")],zi);const LA=fe`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,jA=fe`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,WA=fe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,zA=fe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,HA=fe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,VA=fe`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,qA=fe`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,GA=fe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,KA=fe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,QA=fe`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,ZA=fe`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,YA=fe`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,JA=fe`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,XA=de`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var db=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const eC={browser:LA,dao:jA,defi:WA,defiAlt:zA,eth:HA,layers:VA,lock:qA,login:GA,network:KA,nft:QA,noun:ZA,profile:YA,system:JA};let Xa=class extends ae{constructor(){super(...arguments),this.name="browser"}render(){return R`${eC[this.name]}`}};Xa.styles=[_e,XA];db([M()],Xa.prototype,"name",void 0);Xa=db([re("wui-visual")],Xa);const Ze={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString(e,t,n){return e.length<=t?e:n==="end"?`${e.substring(0,t)}...`:n==="start"?`...${e.substring(e.length-t)}`:`${e.substring(0,Math.floor(t/2))}...${e.substring(e.length-Math.floor(t/2))}`},generateAvatarColors(e){const n=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),o=[];for(let i=0;i<5;i+=1){const s=this.tintColor(r,.15*i);o.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
   `},hexToRgb(e){const t=parseInt(e,16),n=t>>16&255,r=t>>8&255,o=t&255;return[n,r,o]},tintColor(e,t){const[n,r,o]=e,i=Math.round(n+(255-n)*t),s=Math.round(r+(255-r)*t),a=Math.round(o+(255-o)*t);return[i,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},tC=de`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Nt=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let _t=class extends ae{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ze.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ze.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ze.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ze.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ze.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ze.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ze.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ze.getSpacingStyles(this.margin,3)};
    `,R`<slot></slot>`}};_t.styles=[_e,tC];Nt([M()],_t.prototype,"flexDirection",void 0);Nt([M()],_t.prototype,"flexWrap",void 0);Nt([M()],_t.prototype,"flexBasis",void 0);Nt([M()],_t.prototype,"flexGrow",void 0);Nt([M()],_t.prototype,"flexShrink",void 0);Nt([M()],_t.prototype,"alignItems",void 0);Nt([M()],_t.prototype,"justifyContent",void 0);Nt([M()],_t.prototype,"columnGap",void 0);Nt([M()],_t.prototype,"rowGap",void 0);Nt([M()],_t.prototype,"gap",void 0);Nt([M()],_t.prototype,"padding",void 0);Nt([M()],_t.prototype,"margin",void 0);_t=Nt([re("wui-flex")],_t);const nC=de`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var ol=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Hi=class extends ae{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return R`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",R`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=Ze.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};Hi.styles=[_e,nC];ol([M()],Hi.prototype,"imageSrc",void 0);ol([M()],Hi.prototype,"alt",void 0);ol([M()],Hi.prototype,"address",void 0);Hi=ol([re("wui-avatar")],Hi);const rC=de`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var xr=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Pn=class extends ae{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t="xxs";switch(this.size){case"lg":t="lg";break;case"md":t="md";break;case"sm":t="xs";break;default:t="xxs"}const n=this.size==="lg",r=n?"12%":"16%",o=n?"xxs":"3xl",i=this.background==="opaque",s=this.backgroundColor==="accent-100"&&i||this.backgroundColor==="success-100"&&i||this.backgroundColor==="error-100"&&i||this.backgroundColor==="inverse-100"&&i;return this.style.cssText=`
       --local-bg-value: ${s?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${s?"100%":r};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,R` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};Pn.styles=[_e,st,rC];xr([M()],Pn.prototype,"size",void 0);xr([M()],Pn.prototype,"backgroundColor",void 0);xr([M()],Pn.prototype,"iconColor",void 0);xr([M()],Pn.prototype,"background",void 0);xr([M({type:Boolean})],Pn.prototype,"border",void 0);xr([M()],Pn.prototype,"borderColor",void 0);xr([M()],Pn.prototype,"icon",void 0);Pn=xr([re("wui-icon-box")],Pn);const iC=de`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var ii=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Hn=class extends ae{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return R`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${ke(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Ze.getTruncateString(this.address,8,this.isProfileName?"end":"middle")}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const t=this.networkSrc?R`<wui-image src=${this.networkSrc}></wui-image>`:R`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return R`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Hn.styles=[_e,st,iC];ii([M()],Hn.prototype,"networkSrc",void 0);ii([M()],Hn.prototype,"avatarSrc",void 0);ii([M()],Hn.prototype,"balance",void 0);ii([M({type:Boolean})],Hn.prototype,"disabled",void 0);ii([M({type:Boolean})],Hn.prototype,"isProfileName",void 0);ii([M()],Hn.prototype,"address",void 0);Hn=ii([re("wui-account-button")],Hn);const oC=de`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var Hs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Yr=class extends ae{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),R` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?R`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?R`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:R`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Yr.styles=[_e,oC];Hs([M()],Yr.prototype,"size",void 0);Hs([M()],Yr.prototype,"name",void 0);Hs([M()],Yr.prototype,"imageSrc",void 0);Hs([M()],Yr.prototype,"walletIcon",void 0);Yr=Hs([re("wui-wallet-image")],Yr);const sC=de`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var hb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Ql=4;let ec=class extends ae{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Ql;return R`${this.walletImages.slice(0,Ql).map(({src:n,walletName:r})=>R`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${ke(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(Ql-this.walletImages.length)].map(()=>R` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};ec.styles=[_e,sC];hb([M({type:Array})],ec.prototype,"walletImages",void 0);ec=hb([re("wui-all-wallets-image")],ec);const aC=de`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Vs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Jr=class extends ae{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.variant==="fullWidth"?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const t=this.size==="md"?"paragraph-600":"small-600";return R`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?R`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:R``}};Jr.styles=[_e,st,aC];Vs([M()],Jr.prototype,"size",void 0);Vs([M({type:Boolean})],Jr.prototype,"disabled",void 0);Vs([M({type:Boolean})],Jr.prototype,"loading",void 0);Vs([M()],Jr.prototype,"variant",void 0);Jr=Vs([re("wui-button")],Jr);const pb=fe`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,cC=de`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var gb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let tc=class extends ae{constructor(){super(...arguments),this.type="wallet"}render(){return R`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?R` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${pb}`:R`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tc.styles=[_e,st,cC];gb([M()],tc.prototype,"type",void 0);tc=gb([re("wui-card-select-loader")],tc);const lC=fe`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,uC=de`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var qs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Xr=class extends ae{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const t=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,R`${this.templateVisual()} ${t?lC:pb}`}templateVisual(){return this.imageSrc?R`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:R`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Xr.styles=[_e,uC];qs([M()],Xr.prototype,"size",void 0);qs([M()],Xr.prototype,"name",void 0);qs([M()],Xr.prototype,"imageSrc",void 0);qs([M({type:Boolean})],Xr.prototype,"selected",void 0);Xr=qs([re("wui-network-image")],Xr);const fC=de`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var uo=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let hr=class extends ae{constructor(){super(...arguments),this.name="unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return R`
      <button data-selected=${ke(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?R`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${ke(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:R`
      <wui-wallet-image size="md" imageSrc=${ke(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};hr.styles=[_e,st,fC];uo([M()],hr.prototype,"name",void 0);uo([M()],hr.prototype,"type",void 0);uo([M()],hr.prototype,"imageSrc",void 0);uo([M({type:Boolean})],hr.prototype,"disabled",void 0);uo([M({type:Boolean})],hr.prototype,"selected",void 0);hr=uo([re("wui-card-select")],hr);const dC=de`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var fo=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pr=class extends ae{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const t=this.variant==="transparent"?"small-600":"paragraph-600";return R`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${Ze.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?R`<wui-image src=${this.imageSrc}></wui-image>`:null}};pr.styles=[_e,st,dC];fo([M()],pr.prototype,"variant",void 0);fo([M()],pr.prototype,"imageSrc",void 0);fo([M({type:Boolean})],pr.prototype,"disabled",void 0);fo([M()],pr.prototype,"icon",void 0);fo([M()],pr.prototype,"href",void 0);pr=fo([re("wui-chip")],pr);const hC=de`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var V0=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Cs=class extends ae{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return R`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?R`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Cs.styles=[_e,st,hC];V0([M()],Cs.prototype,"size",void 0);V0([M({type:Boolean})],Cs.prototype,"loading",void 0);Cs=V0([re("wui-connect-button")],Cs);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pC=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo=(e,t)=>{var n,r;const o=e._$AN;if(o===void 0)return!1;for(const i of o)(r=(n=i)._$AO)===null||r===void 0||r.call(n,t,!1),Uo(i,t);return!0},nc=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},wb=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),bC(t)}};function gC(e){this._$AN!==void 0?(nc(this),this._$AM=e,wb(this)):this._$AM=e}function wC(e,t=!1,n=0){const r=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(r))for(let i=n;i<r.length;i++)Uo(r[i],!1),nc(r[i]);else r!=null&&(Uo(r,!1),nc(r));else Uo(this,e)}const bC=e=>{var t,n,r,o;e.type==lb.CHILD&&((t=(r=e)._$AP)!==null&&t!==void 0||(r._$AP=wC),(n=(o=e)._$AQ)!==null&&n!==void 0||(o._$AQ=gC))};class mC extends fb{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),wb(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,o;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)===null||r===void 0||r.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),n&&(Uo(this,t),nc(this))}setValue(t){if(pC(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bb=()=>new yC;class yC{}const Zl=new WeakMap,mb=ub(class extends mC{render(e){return nt}update(e,[t]){var n;const r=t!==this.G;return r&&this.G!==void 0&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.dt=(n=e.options)===null||n===void 0?void 0:n.host,this.ot(this.lt=e.element)),nt}ot(e){var t;if(typeof this.G=="function"){const n=(t=this.dt)!==null&&t!==void 0?t:globalThis;let r=Zl.get(n);r===void 0&&(r=new WeakMap,Zl.set(n,r)),r.get(this.G)!==void 0&&this.G.call(this.dt,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){var e,t,n;return typeof this.G=="function"?(t=Zl.get((e=this.dt)!==null&&e!==void 0?e:globalThis))===null||t===void 0?void 0:t.get(this.G):(n=this.G)===null||n===void 0?void 0:n.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),vC=de`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var oi=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Vn=class extends ae{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=bb()}render(){const t=`wui-size-${this.size}`;return R` ${this.templateIcon()}
      <input
        ${mb(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${ke(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?R`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Vn.styles=[_e,st,vC];oi([M()],Vn.prototype,"size",void 0);oi([M()],Vn.prototype,"icon",void 0);oi([M({type:Boolean})],Vn.prototype,"disabled",void 0);oi([M()],Vn.prototype,"placeholder",void 0);oi([M()],Vn.prototype,"type",void 0);oi([M()],Vn.prototype,"keyHint",void 0);Vn=oi([re("wui-input-text")],Vn);const xC=de`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var yb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let rc=class extends ae{render(){return R`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?R`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};rc.styles=[_e,xC];yb([M()],rc.prototype,"errorMessage",void 0);rc=yb([re("wui-email-input")],rc);const AC=de`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Gs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ei=class extends ae{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return R`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ei.styles=[_e,st,W0,AC];Gs([M()],ei.prototype,"size",void 0);Gs([M({type:Boolean})],ei.prototype,"disabled",void 0);Gs([M()],ei.prototype,"icon",void 0);Gs([M()],ei.prototype,"iconColor",void 0);ei=Gs([re("wui-icon-link")],ei);const CC=de`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var vb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ic=class extends ae{constructor(){super(...arguments),this.icon="copy"}render(){return R`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ic.styles=[_e,st,CC];vb([M()],ic.prototype,"icon",void 0);ic=vb([re("wui-input-element")],ic);const EC=de`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var xb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let oc=class extends ae{constructor(){super(...arguments),this.disabled=!1}render(){return R`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};oc.styles=[_e,st,EC];xb([M({type:Boolean})],oc.prototype,"disabled",void 0);oc=xb([re("wui-input-numeric")],oc);const _C=de`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Ab=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let sc=class extends ae{constructor(){super(...arguments),this.disabled=!1}render(){return R`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};sc.styles=[_e,st,_C];Ab([M({type:Boolean})],sc.prototype,"disabled",void 0);sc=Ab([re("wui-link")],sc);const SC=de`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Qn=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let cn=class extends ae{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return R`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return R`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=this.iconVariant==="blue"?"accent-100":"fg-200";return R`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size="md"
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?R`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:R``}chevronTemplate(){return this.chevron?R`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};cn.styles=[_e,st,SC];Qn([M()],cn.prototype,"icon",void 0);Qn([M()],cn.prototype,"variant",void 0);Qn([M()],cn.prototype,"iconVariant",void 0);Qn([M({type:Boolean})],cn.prototype,"disabled",void 0);Qn([M()],cn.prototype,"imageSrc",void 0);Qn([M()],cn.prototype,"alt",void 0);Qn([M({type:Boolean})],cn.prototype,"chevron",void 0);Qn([M({type:Boolean})],cn.prototype,"loading",void 0);cn=Qn([re("wui-list-item")],cn);const PC=de`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var q0=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const DC=["withdrawed","buy","cryptoSent","nftSent"],d1=["deposited","received","bought","minted"],h1=["minted","bought","nftSent"],IC=["deposited","withdrawed","cryptoSent","buy","received"];let Es=class extends ae{constructor(){super(...arguments),this.type="buy"}render(){let t="accent-100",n="arrowTop";return DC.includes(this.type)?(t="accent-100",n="arrowTop"):d1.includes(this.type)&&h1.includes(this.type)||d1.includes(this.type)&&IC.includes(this.type)?(t="success-100",n="arrowBottom"):(t="accent-100",n="swapVertical"),this.dataset.type=this.type,R`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        .icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?R`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:h1.includes(this.type)?R`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:R`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};Es.styles=[_e,PC];q0([M()],Es.prototype,"type",void 0);q0([M()],Es.prototype,"imageSrc",void 0);Es=q0([re("wui-transaction-visual")],Es);const TC=de`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`;var ho=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let gr=class extends ae{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){const n=this.type==="nftSent"||this.type==="cryptoSent"?"Sent":this.type,r=Ze.getFormattedDate(this.date);return R`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${n}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${r}</wui-text>
      </button>
    `}};gr.styles=[_e,st,TC];ho([M()],gr.prototype,"type",void 0);ho([M({type:Boolean})],gr.prototype,"disabled",void 0);ho([M()],gr.prototype,"imageSrc",void 0);ho([M({attribute:!1})],gr.prototype,"date",void 0);ho([M()],gr.prototype,"transactionDetail",void 0);gr=ho([re("wui-list-transaction")],gr);const OC=de`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var Cb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ac=class extends ae{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,R`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};ac.styles=[_e,OC];Cb([M()],ac.prototype,"variant",void 0);ac=Cb([re("wui-tag")],ac);const BC=de`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Bn=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let zt=class extends ae{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return R`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?R` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?R` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?R`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?R`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?R`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?R`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};zt.styles=[_e,st,BC];Bn([M({type:Array})],zt.prototype,"walletImages",void 0);Bn([M()],zt.prototype,"imageSrc",void 0);Bn([M()],zt.prototype,"name",void 0);Bn([M()],zt.prototype,"tagLabel",void 0);Bn([M()],zt.prototype,"tagVariant",void 0);Bn([M()],zt.prototype,"icon",void 0);Bn([M()],zt.prototype,"walletIcon",void 0);Bn([M({type:Boolean})],zt.prototype,"disabled",void 0);Bn([M({type:Boolean})],zt.prototype,"showAllWallets",void 0);zt=Bn([re("wui-list-wallet")],zt);const kC=de`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Eb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let cc=class extends ae{constructor(){super(...arguments),this.logo="google"}render(){return R`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};cc.styles=[_e,kC];Eb([M()],cc.prototype,"logo",void 0);cc=Eb([re("wui-logo")],cc);const RC=de`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var G0=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let _s=class extends ae{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return R`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};_s.styles=[_e,st,RC];G0([M()],_s.prototype,"logo",void 0);G0([M({type:Boolean})],_s.prototype,"disabled",void 0);_s=G0([re("wui-logo-select")],_s);const MC=de`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var K0=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ss=class extends ae{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return R`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?R`<wui-image src=${this.imageSrc}></wui-image>`:R`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Ss.styles=[_e,st,MC];K0([M()],Ss.prototype,"imageSrc",void 0);K0([M({type:Boolean})],Ss.prototype,"disabled",void 0);Ss=K0([re("wui-network-button")],Ss);const $C=de`
  :host {
    position: relative;
    display: block;
  }
`;var _b=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let lc=class extends ae{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,n)=>{const r=t.target,o=this.getInputElement(r),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(t.key)&&t.preventDefault();const s=o.selectionStart;switch(t.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":o.value===""?this.focusInputField("prev",n):o.value="";break;case"Backspace":o.value===""?this.focusInputField("prev",n):o.value="";break}},this.focusInputField=(t,n)=>{if(t==="next"){const r=n+1,o=this.numerics[r<this.length?r:n],i=o?this.getInputElement(o):void 0;i&&i.focus()}if(t==="prev"){const r=n-1,o=this.numerics[r>-1?r:n],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return R`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,n)=>R`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,n){const r=t.target,o=this.getInputElement(r);if(o){const i=o.value;t.inputType==="insertFromPaste"?this.handlePaste(o,i,n):Ze.isNumber(i)&&t.data?(o.value=t.data,this.focusInputField("next",n)):o.value=""}}handlePaste(t,n,r){const o=n[0];if(o&&Ze.isNumber(o)){t.value=o;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,s,r+1)}else this.focusInputField("next",r)}else t.value=""}getInputElement(t){var n;return(n=t.shadowRoot)!=null&&n.querySelector("input")?t.shadowRoot.querySelector("input"):null}};lc.styles=[_e,$C];_b([M({type:Number})],lc.prototype,"length",void 0);lc=_b([re("wui-otp")],lc);var Ks={},NC=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Sb={},Ut={};let Q0;const UC=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Ut.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};Ut.getSymbolTotalCodewords=function(t){return UC[t]};Ut.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};Ut.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Q0=t};Ut.isKanjiModeEnabled=function(){return typeof Q0<"u"};Ut.toSJIS=function(t){return Q0(t)};var sl={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,o){if(e.isValid(r))return r;try{return t(r)}catch{return o}}})(sl);function Pb(){this.buffer=[],this.length=0}Pb.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var FC=Pb;function Qs(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Qs.prototype.set=function(e,t,n,r){const o=e*this.size+t;this.data[o]=n,r&&(this.reservedBit[o]=!0)};Qs.prototype.get=function(e,t){return this.data[e*this.size+t]};Qs.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};Qs.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var LC=Qs,Db={};(function(e){const t=Ut.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,i=t(r),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const o=[],i=e.getRowColCoords(r),s=i.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([i[a],i[c]]);return o}})(Db);var Ib={};const jC=Ut.getSymbolSize,p1=7;Ib.getPositions=function(t){const n=jC(t);return[[0,0],[n-p1,0],[0,n-p1]]};var Tb={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,c=0,l=null,u=null;for(let f=0;f<i;f++){a=c=0,l=u=null;for(let g=0;g<i;g++){let w=o.get(f,g);w===l?a++:(a>=5&&(s+=t.N1+(a-5)),l=w,a=1),w=o.get(g,f),w===u?c++:(c>=5&&(s+=t.N1+(c-5)),u=w,c=1)}a>=5&&(s+=t.N1+(a-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*t.N2},e.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,c=0;for(let l=0;l<i;l++){a=c=0;for(let u=0;u<i;u++)a=a<<1&2047|o.get(l,u),u>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(u,l),u>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let c=0;c<s;c++)i+=o.data[c];return Math.abs(Math.ceil(i*100/s/5)-10)*t.N4};function n(r,o,i){switch(r){case e.Patterns.PATTERN000:return(o+i)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(o+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return o*i%2+o*i%3===0;case e.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case e.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)i.isReserved(c,a)||i.xor(c,a,n(o,c,a))},e.getBestMask=function(o,i){const s=Object.keys(e.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){i(l),e.applyMask(l,o);const u=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(l,o),u<c&&(c=u,a=l)}return a}})(Tb);var al={};const ir=sl,ga=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],wa=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];al.getBlocksCount=function(t,n){switch(n){case ir.L:return ga[(t-1)*4+0];case ir.M:return ga[(t-1)*4+1];case ir.Q:return ga[(t-1)*4+2];case ir.H:return ga[(t-1)*4+3];default:return}};al.getTotalCodewordsCount=function(t,n){switch(n){case ir.L:return wa[(t-1)*4+0];case ir.M:return wa[(t-1)*4+1];case ir.Q:return wa[(t-1)*4+2];case ir.H:return wa[(t-1)*4+3];default:return}};var Ob={},cl={};const Fo=new Uint8Array(512),uc=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)Fo[n]=t,uc[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)Fo[n]=Fo[n-255]})();cl.log=function(t){if(t<1)throw new Error("log("+t+")");return uc[t]};cl.exp=function(t){return Fo[t]};cl.mul=function(t,n){return t===0||n===0?0:Fo[uc[t]+uc[n]]};(function(e){const t=cl;e.mul=function(r,o){const i=new Uint8Array(r.length+o.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=t.mul(r[s],o[a]);return i},e.mod=function(r,o){let i=new Uint8Array(r);for(;i.length-o.length>=0;){const s=i[0];for(let c=0;c<o.length;c++)i[c]^=t.mul(o[c],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},e.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let i=0;i<r;i++)o=e.mul(o,new Uint8Array([1,t.exp(i)]));return o}})(Ob);const Bb=Ob;function Z0(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Z0.prototype.initialize=function(t){this.degree=t,this.genPoly=Bb.generateECPolynomial(this.degree)};Z0.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const r=Bb.mod(n,this.genPoly),o=this.degree-r.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(r,o),i}return r};var WC=Z0,kb={},Ar={},Y0={};Y0.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var kn={};const Rb="[0-9]+",zC="[A-Z $%*+\\-./:]+";let Ps="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ps=Ps.replace(/u/g,"\\u");const HC="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ps+`)(?:.|[\r
]))+`;kn.KANJI=new RegExp(Ps,"g");kn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");kn.BYTE=new RegExp(HC,"g");kn.NUMERIC=new RegExp(Rb,"g");kn.ALPHANUMERIC=new RegExp(zC,"g");const VC=new RegExp("^"+Ps+"$"),qC=new RegExp("^"+Rb+"$"),GC=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");kn.testKanji=function(t){return VC.test(t)};kn.testNumeric=function(t){return qC.test(t)};kn.testAlphanumeric=function(t){return GC.test(t)};(function(e){const t=Y0,n=kn;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},e.getBestModeForData=function(i){return n.testNumeric(i)?e.NUMERIC:n.testAlphanumeric(i)?e.ALPHANUMERIC:n.testKanji(i)?e.KANJI:e.BYTE},e.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},e.isValid=function(i){return i&&i.bit&&i.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(i,s){if(e.isValid(i))return i;try{return r(i)}catch{return s}}})(Ar);(function(e){const t=Ut,n=al,r=sl,o=Ar,i=Y0,s=7973,a=t.getBCHDigit(s);function c(g,w,b){for(let v=1;v<=40;v++)if(w<=e.getCapacity(v,b,g))return v}function l(g,w){return o.getCharCountIndicator(g,w)+4}function u(g,w){let b=0;return g.forEach(function(v){const A=l(v.mode,w);b+=A+v.getBitsLength()}),b}function f(g,w){for(let b=1;b<=40;b++)if(u(g,b)<=e.getCapacity(b,w,o.MIXED))return b}e.from=function(w,b){return i.isValid(w)?parseInt(w,10):b},e.getCapacity=function(w,b,v){if(!i.isValid(w))throw new Error("Invalid QR Code version");typeof v>"u"&&(v=o.BYTE);const A=t.getSymbolTotalCodewords(w),_=n.getTotalCodewordsCount(w,b),m=(A-_)*8;if(v===o.MIXED)return m;const C=m-l(v,w);switch(v){case o.NUMERIC:return Math.floor(C/10*3);case o.ALPHANUMERIC:return Math.floor(C/11*2);case o.KANJI:return Math.floor(C/13);case o.BYTE:default:return Math.floor(C/8)}},e.getBestVersionForData=function(w,b){let v;const A=r.from(b,r.M);if(Array.isArray(w)){if(w.length>1)return f(w,A);if(w.length===0)return 1;v=w[0]}else v=w;return c(v.mode,v.getLength(),A)},e.getEncodedBits=function(w){if(!i.isValid(w)||w<7)throw new Error("Invalid QR Code version");let b=w<<12;for(;t.getBCHDigit(b)-a>=0;)b^=s<<t.getBCHDigit(b)-a;return w<<12|b}})(kb);var Mb={};const sf=Ut,$b=1335,KC=21522,g1=sf.getBCHDigit($b);Mb.getEncodedBits=function(t,n){const r=t.bit<<3|n;let o=r<<10;for(;sf.getBCHDigit(o)-g1>=0;)o^=$b<<sf.getBCHDigit(o)-g1;return(r<<10|o)^KC};var Nb={};const QC=Ar;function Vi(e){this.mode=QC.NUMERIC,this.data=e.toString()}Vi.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Vi.prototype.getLength=function(){return this.data.length};Vi.prototype.getBitsLength=function(){return Vi.getBitsLength(this.data.length)};Vi.prototype.write=function(t){let n,r,o;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),o=parseInt(r,10),t.put(o,10);const i=this.data.length-n;i>0&&(r=this.data.substr(n),o=parseInt(r,10),t.put(o,i*3+1))};var ZC=Vi;const YC=Ar,Yl=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function qi(e){this.mode=YC.ALPHANUMERIC,this.data=e}qi.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};qi.prototype.getLength=function(){return this.data.length};qi.prototype.getBitsLength=function(){return qi.getBitsLength(this.data.length)};qi.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Yl.indexOf(this.data[n])*45;r+=Yl.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(Yl.indexOf(this.data[n]),6)};var JC=qi,XC=function(t){for(var n=[],r=t.length,o=0;o<r;o++){var i=t.charCodeAt(o);if(i>=55296&&i<=56319&&r>o+1){var s=t.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){n.push(i);continue}if(i<2048){n.push(i>>6|192),n.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){n.push(i>>12|224),n.push(i>>6&63|128),n.push(i&63|128);continue}if(i>=65536&&i<=1114111){n.push(i>>18|240),n.push(i>>12&63|128),n.push(i>>6&63|128),n.push(i&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const e7=XC,t7=Ar;function Gi(e){this.mode=t7.BYTE,typeof e=="string"&&(e=e7(e)),this.data=new Uint8Array(e)}Gi.getBitsLength=function(t){return t*8};Gi.prototype.getLength=function(){return this.data.length};Gi.prototype.getBitsLength=function(){return Gi.getBitsLength(this.data.length)};Gi.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var n7=Gi;const r7=Ar,i7=Ut;function Ki(e){this.mode=r7.KANJI,this.data=e}Ki.getBitsLength=function(t){return t*13};Ki.prototype.getLength=function(){return this.data.length};Ki.prototype.getBitsLength=function(){return Ki.getBitsLength(this.data.length)};Ki.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=i7.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var o7=Ki,Ub={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,r,o){var i={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var c,l,u,f,g,w,b,v,A;!a.empty();){c=a.pop(),l=c.value,f=c.cost,g=n[l]||{};for(u in g)g.hasOwnProperty(u)&&(w=g[u],b=f+w,v=s[u],A=typeof s[u]>"u",(A||v>b)&&(s[u]=b,a.push(u,b),i[u]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var _=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(_)}return i},extract_shortest_path_from_predecessor_list:function(n,r){for(var o=[],i=r;i;)o.push(i),n[i],i=n[i];return o.reverse(),o},find_path:function(n,r,o){var i=t.single_source_shortest_paths(n,r,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(n){var r=t.PriorityQueue,o={},i;n=n||{};for(i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);return o.queue=[],o.sorter=n.sorter||r.default_sorter,o},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var o={value:n,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Ub);var s7=Ub.exports;(function(e){const t=Ar,n=ZC,r=JC,o=n7,i=o7,s=kn,a=Ut,c=s7;function l(_){return unescape(encodeURIComponent(_)).length}function u(_,m,C){const x=[];let E;for(;(E=_.exec(C))!==null;)x.push({data:E[0],index:E.index,mode:m,length:E[0].length});return x}function f(_){const m=u(s.NUMERIC,t.NUMERIC,_),C=u(s.ALPHANUMERIC,t.ALPHANUMERIC,_);let x,E;return a.isKanjiModeEnabled()?(x=u(s.BYTE,t.BYTE,_),E=u(s.KANJI,t.KANJI,_)):(x=u(s.BYTE_KANJI,t.BYTE,_),E=[]),m.concat(C,x,E).sort(function(h,D){return h.index-D.index}).map(function(h){return{data:h.data,mode:h.mode,length:h.length}})}function g(_,m){switch(m){case t.NUMERIC:return n.getBitsLength(_);case t.ALPHANUMERIC:return r.getBitsLength(_);case t.KANJI:return i.getBitsLength(_);case t.BYTE:return o.getBitsLength(_)}}function w(_){return _.reduce(function(m,C){const x=m.length-1>=0?m[m.length-1]:null;return x&&x.mode===C.mode?(m[m.length-1].data+=C.data,m):(m.push(C),m)},[])}function b(_){const m=[];for(let C=0;C<_.length;C++){const x=_[C];switch(x.mode){case t.NUMERIC:m.push([x,{data:x.data,mode:t.ALPHANUMERIC,length:x.length},{data:x.data,mode:t.BYTE,length:x.length}]);break;case t.ALPHANUMERIC:m.push([x,{data:x.data,mode:t.BYTE,length:x.length}]);break;case t.KANJI:m.push([x,{data:x.data,mode:t.BYTE,length:l(x.data)}]);break;case t.BYTE:m.push([{data:x.data,mode:t.BYTE,length:l(x.data)}])}}return m}function v(_,m){const C={},x={start:{}};let E=["start"];for(let P=0;P<_.length;P++){const h=_[P],D=[];for(let $=0;$<h.length;$++){const F=h[$],z=""+P+$;D.push(z),C[z]={node:F,lastCount:0},x[z]={};for(let ie=0;ie<E.length;ie++){const le=E[ie];C[le]&&C[le].node.mode===F.mode?(x[le][z]=g(C[le].lastCount+F.length,F.mode)-g(C[le].lastCount,F.mode),C[le].lastCount+=F.length):(C[le]&&(C[le].lastCount=F.length),x[le][z]=g(F.length,F.mode)+4+t.getCharCountIndicator(F.mode,m))}}E=D}for(let P=0;P<E.length;P++)x[E[P]].end=0;return{map:x,table:C}}function A(_,m){let C;const x=t.getBestModeForData(_);if(C=t.from(m,x),C!==t.BYTE&&C.bit<x.bit)throw new Error('"'+_+'" cannot be encoded with mode '+t.toString(C)+`.
 Suggested mode is: `+t.toString(x));switch(C===t.KANJI&&!a.isKanjiModeEnabled()&&(C=t.BYTE),C){case t.NUMERIC:return new n(_);case t.ALPHANUMERIC:return new r(_);case t.KANJI:return new i(_);case t.BYTE:return new o(_)}}e.fromArray=function(m){return m.reduce(function(C,x){return typeof x=="string"?C.push(A(x,null)):x.data&&C.push(A(x.data,x.mode)),C},[])},e.fromString=function(m,C){const x=f(m,a.isKanjiModeEnabled()),E=b(x),P=v(E,C),h=c.find_path(P.map,"start","end"),D=[];for(let $=1;$<h.length-1;$++)D.push(P.table[h[$]].node);return e.fromArray(w(D))},e.rawSplit=function(m){return e.fromArray(f(m,a.isKanjiModeEnabled()))}})(Nb);const ll=Ut,Jl=sl,a7=FC,c7=LC,l7=Db,u7=Ib,af=Tb,cf=al,f7=WC,fc=kb,d7=Mb,h7=Ar,Xl=Nb;function p7(e,t){const n=e.size,r=u7.getPositions(t);for(let o=0;o<r.length;o++){const i=r[o][0],s=r[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||n<=i+a))for(let c=-1;c<=7;c++)s+c<=-1||n<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?e.set(i+a,s+c,!0,!0):e.set(i+a,s+c,!1,!0))}}function g7(e){const t=e.size;for(let n=8;n<t-8;n++){const r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function w7(e,t){const n=l7.getPositions(t);for(let r=0;r<n.length;r++){const o=n[r][0],i=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,i+a,!0,!0):e.set(o+s,i+a,!1,!0)}}function b7(e,t){const n=e.size,r=fc.getEncodedBits(t);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+n-8-3,s=(r>>a&1)===1,e.set(o,i,s,!0),e.set(i,o,s,!0)}function eu(e,t,n){const r=e.size,o=d7.getEncodedBits(t,n);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?e.set(i,8,s,!0):i<8?e.set(i+1,8,s,!0):e.set(r-15+i,8,s,!0),i<8?e.set(8,r-i-1,s,!0):i<9?e.set(8,15-i-1+1,s,!0):e.set(8,15-i-1,s,!0);e.set(r-8,8,1,!0)}function m7(e,t){const n=e.size;let r=-1,o=n-1,i=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!e.isReserved(o,a-c)){let l=!1;s<t.length&&(l=(t[s]>>>i&1)===1),e.set(o,a-c,l),i--,i===-1&&(s++,i=7)}if(o+=r,o<0||n<=o){o-=r,r=-r;break}}}function y7(e,t,n){const r=new a7;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),h7.getCharCountIndicator(c.mode,e)),c.write(r)});const o=ll.getSymbolTotalCodewords(e),i=cf.getTotalCodewordsCount(e,t),s=(o-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return v7(r,e,t)}function v7(e,t,n){const r=ll.getSymbolTotalCodewords(t),o=cf.getTotalCodewordsCount(t,n),i=r-o,s=cf.getBlocksCount(t,n),a=r%s,c=s-a,l=Math.floor(r/s),u=Math.floor(i/s),f=u+1,g=l-u,w=new f7(g);let b=0;const v=new Array(s),A=new Array(s);let _=0;const m=new Uint8Array(e.buffer);for(let h=0;h<s;h++){const D=h<c?u:f;v[h]=m.slice(b,b+D),A[h]=w.encode(v[h]),b+=D,_=Math.max(_,D)}const C=new Uint8Array(r);let x=0,E,P;for(E=0;E<_;E++)for(P=0;P<s;P++)E<v[P].length&&(C[x++]=v[P][E]);for(E=0;E<g;E++)for(P=0;P<s;P++)C[x++]=A[P][E];return C}function x7(e,t,n,r){let o;if(Array.isArray(e))o=Xl.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const u=Xl.rawSplit(e);l=fc.getBestVersionForData(u,n)}o=Xl.fromString(e,l||40)}else throw new Error("Invalid data");const i=fc.getBestVersionForData(o,n);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=y7(t,n,o),a=ll.getSymbolSize(t),c=new c7(a);return p7(c,t),g7(c),w7(c,t),eu(c,n,0),t>=7&&b7(c,t),m7(c,s),isNaN(r)&&(r=af.getBestMask(c,eu.bind(null,c,n))),af.applyMask(r,c),eu(c,n,r),{modules:c,version:t,errorCorrectionLevel:n,maskPattern:r,segments:o}}Sb.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let r=Jl.M,o,i;return typeof n<"u"&&(r=Jl.from(n.errorCorrectionLevel,Jl.M),o=fc.from(n.version),i=af.from(n.maskPattern),n.toSJISFunc&&ll.setToSJISFunction(n.toSJISFunc)),x7(t,o,r,i)};var Fb={},J0={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},e.getImageWidth=function(r,o){const i=e.getScale(r,o);return Math.floor((r+o.margin*2)*i)},e.qrToImageData=function(r,o,i){const s=o.modules.size,a=o.modules.data,c=e.getScale(s,i),l=Math.floor((s+i.margin*2)*c),u=i.margin*c,f=[i.color.light,i.color.dark];for(let g=0;g<l;g++)for(let w=0;w<l;w++){let b=(g*l+w)*4,v=i.color.light;if(g>=u&&w>=u&&g<l-u&&w<l-u){const A=Math.floor((g-u)/c),_=Math.floor((w-u)/c);v=f[a[A*s+_]?1:0]}r[b++]=v.r,r[b++]=v.g,r[b++]=v.b,r[b]=v.a}}})(J0);(function(e){const t=J0;function n(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(i,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=r()),c=t.getOptions(c);const u=t.getImageWidth(i.modules.size,c),f=l.getContext("2d"),g=f.createImageData(u,u);return t.qrToImageData(g.data,i,c),n(f,l,u),f.putImageData(g,0,0),l},e.renderToDataURL=function(i,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=e.render(i,s,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(Fb);var Lb={};const A7=J0;function w1(e,t){const n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function tu(e,t,n){let r=e+t;return typeof n<"u"&&(r+=" "+n),r}function C7(e,t,n){let r="",o=0,i=!1,s=0;for(let a=0;a<e.length;a++){const c=Math.floor(a%t),l=Math.floor(a/t);!c&&!i&&(i=!0),e[a]?(s++,a>0&&c>0&&e[a-1]||(r+=i?tu("M",c+n,.5+l+n):tu("m",o,0),o=0,i=!1),c+1<t&&e[a+1]||(r+=tu("h",s),s=0)):o++}return r}Lb.render=function(t,n,r){const o=A7.getOptions(n),i=t.modules.size,s=t.modules.data,a=i+o.margin*2,c=o.color.light.a?"<path "+w1(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+w1(o.color.dark,"stroke")+' d="'+C7(s,i,o.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+u+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof r=="function"&&r(null,g),g};const E7=NC,lf=Sb,jb=Fb,_7=Lb;function X0(e,t,n,r,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!E7())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=n,n=t,t=r=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=r=void 0):s===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(c,l){try{const u=lf.create(n,r);c(e(u,t,r))}catch(u){l(u)}})}try{const c=lf.create(n,r);o(null,e(c,t,r))}catch(c){o(c)}}Ks.create=lf.create;Ks.toCanvas=X0.bind(null,jb.render);Ks.toDataURL=X0.bind(null,jb.renderToDataURL);Ks.toString=X0.bind(null,function(e,t,n){return _7.render(e,n)});const S7=.1,b1=2.5,$n=7;function nu(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+S7}function P7(e,t){const n=Array.prototype.slice.call(Ks.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((o,i,s)=>(s%r===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const D7={generate(e,t,n){const r="#141414",o="transparent",s=[],a=P7(e,"Q"),c=t/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:v,y:A})=>{const _=(a.length-$n)*c*v,m=(a.length-$n)*c*A,C=.45;for(let x=0;x<l.length;x+=1){const E=c*($n-x*2);s.push(fe`
            <rect
              fill=${x===2?r:o}
              width=${x===0?E-5:E}
              rx= ${x===0?(E-5)*C:E*C}
              ry= ${x===0?(E-5)*C:E*C}
              stroke=${r}
              stroke-width=${x===0?5:0}
              height=${x===0?E-5:E}
              x= ${x===0?m+c*x+5/2:m+c*x}
              y= ${x===0?_+c*x+5/2:_+c*x}
            />
          `)}});const u=Math.floor((n+25)/c),f=a.length/2-u/2,g=a.length/2+u/2-1,w=[];a.forEach((v,A)=>{v.forEach((_,m)=>{if(a[A][m]&&!(A<$n&&m<$n||A>a.length-($n+1)&&m<$n||A<$n&&m>a.length-($n+1))&&!(A>f&&A<g&&m>f&&m<g)){const C=A*c+c/2,x=m*c+c/2;w.push([C,x])}})});const b={};return w.forEach(([v,A])=>{var _;b[v]?(_=b[v])==null||_.push(A):b[v]=[A]}),Object.entries(b).map(([v,A])=>{const _=A.filter(m=>A.every(C=>!nu(m,C,c)));return[Number(v),_]}).forEach(([v,A])=>{A.forEach(_=>{s.push(fe`<circle cx=${v} cy=${_} fill=${r} r=${c/b1} />`)})}),Object.entries(b).filter(([v,A])=>A.length>1).map(([v,A])=>{const _=A.filter(m=>A.some(C=>nu(m,C,c)));return[Number(v),_]}).map(([v,A])=>{A.sort((m,C)=>m<C?-1:1);const _=[];for(const m of A){const C=_.find(x=>x.some(E=>nu(m,E,c)));C?C.push(m):_.push([m])}return[v,_.map(m=>[m[0],m[m.length-1]])]}).forEach(([v,A])=>{A.forEach(([_,m])=>{s.push(fe`
              <line
                x1=${v}
                x2=${v}
                y1=${_}
                y2=${m}
                stroke=${r}
                stroke-width=${c/(b1/2)}
                stroke-linecap="round"
              />
            `)})}),s}},I7=de`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.2);
  }
`;var po=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let wr=class extends ae{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,R`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return fe`
      <svg height=${t} width=${t}>
        ${D7.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?R`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:R`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};wr.styles=[_e,I7];po([M()],wr.prototype,"uri",void 0);po([M({type:Number})],wr.prototype,"size",void 0);po([M()],wr.prototype,"theme",void 0);po([M()],wr.prototype,"imageSrc",void 0);po([M()],wr.prototype,"alt",void 0);wr=po([re("wui-qr-code")],wr);const T7=de`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var O7=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let uf=class extends ae{constructor(){super(...arguments),this.inputComponentRef=bb()}render(){return R`
      <wui-input-text
        ${mb(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};uf.styles=[_e,T7];uf=O7([re("wui-search-bar")],uf);const B7=de`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Zs=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ti=class extends ae{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return R`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};ti.styles=[_e,B7];Zs([M()],ti.prototype,"backgroundColor",void 0);Zs([M()],ti.prototype,"iconColor",void 0);Zs([M()],ti.prototype,"icon",void 0);Zs([M()],ti.prototype,"message",void 0);ti=Zs([re("wui-snackbar")],ti);const k7=de`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var Cr=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Dn=class extends ae{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,n)=>{const r=n===this.activeTab;return R`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,n){const r=this.buttons[this.activeTab],o=this.buttons[t],i=r==null?void 0:r.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),c=s==null?void 0:s.getBoundingClientRect();r&&i&&!n&&t!==this.activeTab&&(i.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&c&&s&&(t!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,o.animate([{width:`${a.width+c.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:250,delay:n?0:50,fill:"forwards",easing:"ease"}))}};Dn.styles=[_e,st,k7];Cr([M({type:Array})],Dn.prototype,"tabs",void 0);Cr([M()],Dn.prototype,"onTabChange",void 0);Cr([M({type:Array})],Dn.prototype,"buttons",void 0);Cr([M({type:Boolean})],Dn.prototype,"disabled",void 0);Cr([Ce()],Dn.prototype,"activeTab",void 0);Cr([Ce()],Dn.prototype,"localTabWidth",void 0);Cr([Ce()],Dn.prototype,"isDense",void 0);Dn=Cr([re("wui-tabs")],Dn);const R7=de`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var ed=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ds=class extends ae{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return R`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Ds.styles=[_e,st,R7];ed([M()],Ds.prototype,"placement",void 0);ed([M()],Ds.prototype,"message",void 0);Ds=ed([re("wui-tooltip")],Ds);const M7=de`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Vt=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let kt=class extends ae{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ze.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ze.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ze.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ze.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ze.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ze.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ze.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ze.getSpacingStyles(this.margin,3)};
    `,R`<slot></slot>`}};kt.styles=[_e,M7];Vt([M()],kt.prototype,"gridTemplateRows",void 0);Vt([M()],kt.prototype,"gridTemplateColumns",void 0);Vt([M()],kt.prototype,"justifyItems",void 0);Vt([M()],kt.prototype,"alignItems",void 0);Vt([M()],kt.prototype,"justifyContent",void 0);Vt([M()],kt.prototype,"alignContent",void 0);Vt([M()],kt.prototype,"columnGap",void 0);Vt([M()],kt.prototype,"rowGap",void 0);Vt([M()],kt.prototype,"gap",void 0);Vt([M()],kt.prototype,"padding",void 0);Vt([M()],kt.prototype,"margin",void 0);kt=Vt([re("wui-grid")],kt);const $7=de`
  :host {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--wui-cover);
    z-index: var(--wui-z-index);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    :host {
      align-items: flex-start;
    }

    ::slotted(wui-card) {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }
`;var N7=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let ff=class extends ae{render(){return R`<slot></slot>`}};ff.styles=[_e,$7];ff=N7([re("wui-overlay")],ff);const U7=de`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var Wb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let dc=class extends ae{constructor(){super(...arguments),this.text=""}render(){return R`${this.template()}`}template(){return this.text?R`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};dc.styles=[_e,U7];Wb([M()],dc.prototype,"text",void 0);dc=Wb([re("wui-separator")],dc);const F7=de`
  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  @media (max-width: 430px) {
    wui-overlay {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var zb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const m1="scroll-lock";let Is=class extends ae{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=lt.state.open,this.initializeTheming(),Oe.prefetch(),this.unsubscribe.push(lt.subscribeKey("open",t=>t?this.onOpen():this.onClose()))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?R`
          <wui-overlay @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-overlay>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&lt.close()}initializeTheming(){const{themeVariables:t,themeMode:n}=Mt.state;Bx(t,n);const r=Ze.getColorTheme(n);Mt.setThemeMode(r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Xt.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){const{body:t}=document,{innerHeight:n}=window,o=(t==null?void 0:t.scrollHeight)>n?"scrollbar-gutter: stable;":"",i=document.createElement("style");i.dataset.w3m=m1,i.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
        min-height: 100vh;
       ${o}
      }
    `,document.head.appendChild(i)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${m1}"]`);t&&t.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")lt.close();else if(r.key==="Tab"){const{tagName:o}=r.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}};Is.styles=F7;zb([Ce()],Is.prototype,"open",void 0);Is=zb([re("w3m-modal")],Is);const L7=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Is}},Symbol.toStringTag,{value:"Module"}));var Ys=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Qi=class extends ae{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.networkImages=Cn.state.networkImages,this.network=Ye.state.caipNetwork,this.connected=qe.state.isConnected,this.unsubscribe.push(Ye.subscribeKey("caipNetwork",t=>this.network=t),qe.subscribeKey("isConnected",t=>this.connected=t),Cn.subscribeNetworkImages(t=>this.networkImages={...t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var n,r;const t=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return R`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${ke(t)}
        @click=${this.onClick.bind(this)}
      >
        ${((r=this.network)==null?void 0:r.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){lt.open({view:"Networks"})}};Ys([M({type:Boolean})],Qi.prototype,"disabled",void 0);Ys([Ce()],Qi.prototype,"networkImages",void 0);Ys([Ce()],Qi.prototype,"network",void 0);Ys([Ce()],Qi.prototype,"connected",void 0);Qi=Ys([re("w3m-network-button")],Qi);const j7=de`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Hb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let hc=class extends ae{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=Te.state.view,this.unsubscribe.push(Te.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{const n=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return R`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return R`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return R`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return R`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return R`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return R`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return R`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return R`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return R`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return R`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return R`<w3m-get-wallet-view></w3m-get-wallet-view>`;default:return R`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(t){const{history:n}=Te.state;let r=-10,o=10;n.length<this.prevHistoryLength&&(r=10,o=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};hc.styles=j7;Hb([Ce()],hc.prototype,"view",void 0);hc=Hb([re("w3m-router")],hc);const W7=de`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Er=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let In=class extends ae{constructor(){super(),this.usubscribe=[],this.networkImages=Cn.state.networkImages,this.address=qe.state.address,this.profileImage=qe.state.profileImage,this.profileName=qe.state.profileName,this.balance=qe.state.balance,this.balanceSymbol=qe.state.balanceSymbol,this.network=Ye.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(qe.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):lt.close()}),Ye.subscribeKey("caipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return R`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ke(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Ze.getTruncateString(this.profileName,20,"end"):Ze.getTruncateString(this.address,8,"middle")}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${Me.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>
            <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
              <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
              Block Explorer
              <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
            </wui-button>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ke(t)}
          ?chevron=${this.isMultiNetwork()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}isMultiNetwork(){const{requestedCaipNetworks:t}=Ye.state;return t?t.length>1:!1}onCopyAddress(){try{this.address&&(Me.copyToClopboard(this.address),Xt.showSuccess("Address copied"))}catch{Xt.showError("Failed to copy")}}onNetworks(){this.isMultiNetwork()&&Te.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await Fe.disconnect(),lt.close()}catch{Xt.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:t}=qe.state;t&&Me.openHref(t,"_blank")}};In.styles=W7;Er([Ce()],In.prototype,"address",void 0);Er([Ce()],In.prototype,"profileImage",void 0);Er([Ce()],In.prototype,"profileName",void 0);Er([Ce()],In.prototype,"balance",void 0);Er([Ce()],In.prototype,"balanceSymbol",void 0);Er([Ce()],In.prototype,"network",void 0);Er([Ce()],In.prototype,"disconecting",void 0);In=Er([re("w3m-account-view")],In);var Vb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let df=class extends ae{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=Me.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return R`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?R`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:R`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return Me.isMobile()?R`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Te.push("ConnectingWalletConnect")}};Vb([Ce()],df.prototype,"search",void 0);df=Vb([re("w3m-all-wallets-view")],df);const z7=de`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var qb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pc=class extends ae{constructor(){super(),this.unsubscribe=[],this.connectors=Kr.state.connectors,this.unsubscribe.push(Kr.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return R`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(Me.isMobile())return null;const t=this.connectors.find(n=>n.type==="WALLET_CONNECT");return t?R`
      <wui-list-wallet
        imageSrc=${ke(At.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:t}=tt.state;return t!=null&&t.length?this.filterOutRecentWallets(t).map(r=>R`
        <wui-list-wallet
          imageSrc=${ke(At.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>Te.push("ConnectingWalletConnect",{wallet:r})}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:t}=Oe.state;return t.length?this.filterOutRecentWallets(t).map(r=>R`
        <wui-list-wallet
          imageSrc=${ke(At.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>Te.push("ConnectingWalletConnect",{wallet:r})}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Gr.getRecentWallets().map(n=>R`
        <wui-list-wallet
          imageSrc=${ke(At.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>Te.push("ConnectingWalletConnect",{wallet:n})}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(t=>{if(t.type==="WALLET_CONNECT")return null;let n,r;if(t.type==="INJECTED"){if(!Fe.checkInjectedInstalled())return null;n="installed",r="success"}return R`
        <wui-list-wallet
          imageSrc=${ke(At.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${ke(n)}
          tagVariant=${ke(r)}
        >
        </wui-list-wallet>
      `})}allWalletsTemplate(){return R`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${()=>Te.push("AllWallets")}
        tagLabel=${`${Oe.state.count}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:t,featured:n}=Oe.state,{customWallets:r}=tt.state;if(!t.length||n.length||r!=null&&r.length)return null;const[o,i]=this.filterOutRecentWallets(t);return[o,i].map(s=>R`
        <wui-list-wallet
          imageSrc=${ke(At.getWalletImage(s))}
          name=${(s==null?void 0:s.name)??"Unknown"}
          @click=${()=>Te.push("ConnectingWalletConnect",{wallet:s})}
        >
        </wui-list-wallet>
      `)}onConnector(t){t.type==="WALLET_CONNECT"?Me.isMobile()?Te.push("AllWallets"):Te.push("ConnectingWalletConnect"):Te.push("ConnectingExternal",{connector:t})}filterOutRecentWallets(t){const r=Gr.getRecentWallets().map(i=>i.id);return t.filter(i=>!r.includes(i.id))}};pc.styles=z7;qb([Ce()],pc.prototype,"connectors",void 0);pc=qb([re("w3m-connect-view")],pc);const H7=de`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-button {
    display: none;
  }

  [data-retry='true'] wui-button {
    display: block;
    opacity: 1;
  }
`;var go=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};class Ft extends ae{constructor(){var t,n,r,o;super(),this.wallet=(t=Te.state.data)==null?void 0:t.wallet,this.connector=(n=Te.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=At.getWalletImage(this.wallet)??At.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=Fe.state.wcUri,this.error=Fe.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.onRetry=void 0,this.unsubscribe.push(Fe.subscribeKey("wcUri",i=>{var s;this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Fe.subscribeKey("wcError",i=>this.error=i),Fe.subscribeKey("buffering",i=>this.buffering=i))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),R`
      <wui-flex
        data-error=${ke(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ke(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?R`
            <wui-flex .padding=${["0","xl","xl","xl"]}>
              <wui-button variant="fullWidth" @click=${this.onCopyUri}>
                <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-button>
            </wui-flex>
          `:null}
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var t,n;this.buffering||(Fe.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const t=Mt.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return R`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(Me.copyToClopboard(this.uri),Xt.showSuccess("Link copied"))}catch{Xt.showError("Failed to copy")}}}Ft.styles=H7;go([Ce()],Ft.prototype,"uri",void 0);go([Ce()],Ft.prototype,"error",void 0);go([Ce()],Ft.prototype,"ready",void 0);go([Ce()],Ft.prototype,"showRetry",void 0);go([Ce()],Ft.prototype,"buffering",void 0);go([M()],Ft.prototype,"onRetry",void 0);var V7=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let y1=class extends Ft{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await Fe.connectExternal(this.connector.id),lt.close())}catch{this.error=!0}}};y1=V7([re("w3m-connecting-external-view")],y1);var td=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let gc=class extends ae{constructor(){var t;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(t=Te.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Pa.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),R`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):R`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{const{wcPairingExpiry:n}=Fe.state;(t||Me.isPairingExpired(n))&&(Fe.connectWalletConnect(),await Fe.state.wcPromise,this.storeWalletConnectDeeplink(),lt.close())}catch{Fe.setWcError(!0),Me.isAllowedRetry(this.lastRetry)&&(Xt.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}storeWalletConnectDeeplink(){const{wcLinking:t,recentWallet:n}=Fe.state;t&&Gr.setWalletConnectDeepLink(t),n&&Gr.setWeb3ModalRecent(n)}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{connectors:t}=Kr.state,{mobile_link:n,desktop_link:r,webapp_link:o,injected:i}=this.wallet,s=(i==null?void 0:i.map(({injected_id:b})=>b).filter(Boolean))??[],a=s.length,c=n,l=o,u=t.find(b=>b.type==="INJECTED"),f=Fe.checkInjectedInstalled(s),g=a&&f&&u,w=r&&!Me.isMobile();g&&this.platforms.push("injected"),c&&this.platforms.push(Me.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),w&&this.platforms.push("desktop"),!g&&a&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"injected":return R`<w3m-connecting-wc-injected></w3m-connecting-wc-injected>`;case"desktop":return R`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return R`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return R`
          <w3m-connecting-wc-mobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return R`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return R`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?R`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};td([Ce()],gc.prototype,"platform",void 0);td([Ce()],gc.prototype,"platforms",void 0);gc=td([re("w3m-connecting-wc-view")],gc);var q7=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const G7="https://walletconnect.com/explorer";let v1=class extends ae{render(){return R`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{Me.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:n}=Oe.state,{customWallets:r}=tt.state;return[...n,...r??[],...t].slice(0,4).map(i=>R`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${ke(At.getWalletImage(i))}
          @click=${()=>{Me.openHref(i.homepage??G7,"_blank")}}
        ></wui-list-wallet>
      `)}};v1=q7([re("w3m-get-wallet-view")],v1);const K7=de`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ul=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Zi=class extends ae{constructor(){var t;super(),this.network=(t=Te.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=Ye.state.caipNetwork,this.unsubscribe.push(Ye.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&Te.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return R`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ke(At.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:R`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&await Ye.switchActiveNetwork(this.network)}catch{this.error=!0}}};Zi.styles=K7;ul([Ce()],Zi.prototype,"showRetry",void 0);ul([Ce()],Zi.prototype,"error",void 0);ul([Ce()],Zi.prototype,"currentNetwork",void 0);Zi=ul([re("w3m-network-switch-view")],Zi);var Gb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let hf=class extends ae{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Ye.state.caipNetwork,this.unsubscribe.push(Ye.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return R`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${()=>Te.push("WhatIsANetwork")}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:n,supportsAllNetworks:r}=Ye.state,o=t,i=n;return o!=null&&o.length&&(i==null||i.sort((s,a)=>o.indexOf(a.id)-o.indexOf(s.id))),i==null?void 0:i.map(s=>{var a;return R`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${ke(At.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(o!=null&&o.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(t){const{isConnected:n}=qe.state,{approvedCaipNetworkIds:r,supportsAllNetworks:o,caipNetwork:i}=Ye.state;n&&(i==null?void 0:i.id)!==t.id?r!=null&&r.includes(t.id)?await Ye.switchActiveNetwork(t):o&&Te.push("SwitchNetwork",{network:t}):n||(Ye.setCaipNetwork(t),Te.push("Connect"))}};Gb([Ce()],hf.prototype,"caipNetwork",void 0);hf=Gb([re("w3m-networks-view")],hf);var Q7=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const Z7=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let x1=class extends ae{render(){return R`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Z7}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{Me.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};x1=Q7([re("w3m-what-is-a-network-view")],x1);var Y7=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const J7=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let A1=class extends ae{render(){return R`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${J7}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${()=>Te.push("GetWallet")}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}};A1=Y7([re("w3m-what-is-a-wallet-view")],A1);const X7=de`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Js=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const C1="local-paginator";let ni=class extends ae{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Oe.state.wallets.length,this.wallets=Oe.state.wallets,this.recommended=Oe.state.recommended,this.featured=Oe.state.featured,this.unsubscribe.push(Oe.subscribeKey("wallets",t=>this.wallets=t),Oe.subscribeKey("recommended",t=>this.recommended=t),Oe.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return R`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&t&&(await Oe.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>R`
        <wui-card-select-loader type="wallet" id=${ke(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>R`
        <wui-card-select
          imageSrc=${ke(At.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:r,count:o}=Oe.state,i=window.innerWidth<352?3:4,s=t.length+n.length;let c=Math.ceil(s/i)*i-s+i;return c-=t.length?r.length%i:0,o===0||[...r,...t,...n].length<o?this.shimmerTemplate(c,C1):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${C1}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:o,count:i,wallets:s}=Oe.state;s.length<i&&Oe.fetchWallets({page:o+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){const{connectors:n}=Kr.state,r=n.find(({explorerId:o})=>o===t.id);r?Te.push("ConnectingExternal",{connector:r}):Te.push("ConnectingWalletConnect",{wallet:t})}};ni.styles=X7;Js([Ce()],ni.prototype,"initial",void 0);Js([Ce()],ni.prototype,"wallets",void 0);Js([Ce()],ni.prototype,"recommended",void 0);Js([Ce()],ni.prototype,"featured",void 0);ni=Js([re("w3m-all-wallets-list")],ni);const e9=de`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var nd=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Ts=class extends ae{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?R`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Oe.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:t}=Oe.state;return t.length?R`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(n=>R`
            <wui-card-select
              imageSrc=${ke(At.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:R`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){const{connectors:n}=Kr.state,r=n.find(({explorerId:o})=>o===t.id);r?Te.push("ConnectingExternal",{connector:r}):Te.push("ConnectingWalletConnect",{wallet:t})}};Ts.styles=e9;nd([Ce()],Ts.prototype,"loading",void 0);nd([M()],Ts.prototype,"query",void 0);Ts=nd([re("w3m-all-wallets-search")],Ts);var fl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let Os=class extends ae{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Fe.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return R`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="injected"?{label:"Browser",icon:"extension",platform:"injected"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var r;const n=this.platformTabs[t];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};fl([M({type:Array})],Os.prototype,"platforms",void 0);fl([M()],Os.prototype,"onSelectPlatfrom",void 0);fl([Ce()],Os.prototype,"buffering",void 0);Os=fl([re("w3m-connecting-header")],Os);var t9=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let E1=class extends Ft{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this)}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var t;(t=this.onConnect)==null||t.call(this)},250))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:o,href:i}=Me.formatNativeUrl(n,this.uri);Fe.setWcLinking({name:r,href:i}),Fe.setRecentWallet(this.wallet),Me.openHref(o,"_self")}catch{this.error=!0}}};E1=t9([re("w3m-connecting-wc-desktop")],E1);var n9=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let _1=class extends Ft{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-injected: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this)}async onConnectProxy(){try{this.error=!1,await Fe.connectExternal("injected"),lt.close()}catch{this.error=!0}}};_1=n9([re("w3m-connecting-wc-injected")],_1);var r9=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let S1=class extends Ft{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:o,href:i}=Me.formatNativeUrl(n,this.uri);Fe.setWcLinking({name:r,href:i}),Fe.setRecentWallet(this.wallet),Me.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const t=Me.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(Fe.setBuffering(!0),setTimeout(()=>{Fe.setBuffering(!1)},5e3))}};S1=r9([re("w3m-connecting-wc-mobile")],S1);const i9=de`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var o9=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let pf=class extends Ft{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),R`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-button variant="fullWidth" @click=${this.onCopyUri}>
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-button>
      </wui-flex>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},250))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Fe.setWcLinking(void 0),Fe.setRecentWallet(this.wallet),R`<wui-qr-code
      size=${t}
      theme=${Mt.state.themeMode}
      uri=${this.uri}
      imageSrc=${ke(At.getWalletImage(this.wallet))}
      alt=${ke(n)}
    ></wui-qr-code>`}};pf.styles=i9;pf=o9([re("w3m-connecting-wc-qrcode")],pf);var s9=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let P1=class extends ae{constructor(){var t;super(...arguments),this.wallet=(t=Te.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");return R`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ke(At.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-flex flexDirection="column" alignItems="center" gap="xxs">
          <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
          <wui-text variant="small-500" color="fg-200" align="center">
            Download and install ${this.wallet.name} to continue
          </wui-text>
        </wui-flex>

        ${this.downloadBtnTemplate()}
      </wui-flex>
    `}downloadBtnTemplate(){if(!this.wallet)throw new Error("w3m-connecting-wc-unsupported:onDownload No wallet provided");const{homepage:t}=this.wallet;return t?R`
      <wui-button
        size="sm"
        variant="fill"
        @click=${()=>Me.openHref(t,"_blank")}
      >
        <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        Download
      </wui-button>
    `:null}};P1=s9([re("w3m-connecting-wc-unsupported")],P1);var a9=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let D1=class extends Ft{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink"}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:o,href:i}=Me.formatUniversalUrl(n,this.uri);Fe.setWcLinking({name:r,href:i}),Fe.setRecentWallet(this.wallet),Me.openHref(o,"_blank")}catch{this.error=!0}}};D1=a9([re("w3m-connecting-wc-web")],D1);const c9=de`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var dl=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};function I1(){var o,i,s,a,c,l;const e=(i=(o=Te.state.data)==null?void 0:o.connector)==null?void 0:i.name,t=(a=(s=Te.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(l=(c=Te.state.data)==null?void 0:c.network)==null?void 0:l.name,r=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet"}}let Yi=class extends ae{constructor(){super(),this.unsubscribe=[],this.heading=I1()[Te.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(Te.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),Fe.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return R`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${lt.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}titleTemplate(){return R`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:t}=Te.state,n=t==="Connect";return this.showBack?R`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${Te.goBack}
      ></wui-icon-link>`:R`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${()=>Te.push("WhatIsAWallet")}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?R`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const o=I1()[t];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:t}=Te.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Yi.styles=[c9];dl([Ce()],Yi.prototype,"heading",void 0);dl([Ce()],Yi.prototype,"buffering",void 0);dl([Ce()],Yi.prototype,"showBack",void 0);Yi=dl([re("w3m-header")],Yi);var Kb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let gf=class extends ae{constructor(){super(...arguments),this.data=[]}render(){return R`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>R`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(n=>R`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};Kb([M({type:Array})],gf.prototype,"data",void 0);gf=Kb([re("w3m-help-widget")],gf);const l9=de`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var u9=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};let wf=class extends ae{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=tt.state;return!t&&!n?null:R`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=tt.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=tt.state;return t?R`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=tt.state;return t?R`<a href=${t}>Privacy Policy</a>`:null}};wf.styles=[l9];wf=u9([re("w3m-legal-footer")],wf);const f9=de`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var Qb=globalThis&&globalThis.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i};const d9={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let wc=class extends ae{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Xt.state.open,this.unsubscribe.push(Xt.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:n}=Xt.state,r=d9[n];return R`
      <wui-snackbar
        message=${t}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Xt.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};wc.styles=f9;Qb([Ce()],wc.prototype,"open",void 0);wc=Qb([re("w3m-snackbar")],wc);let T1=!1;class h9{constructor(t){this.initPromise=void 0,this.setIsConnected=n=>{qe.setIsConnected(n)},this.setCaipAddress=n=>{qe.setCaipAddress(n)},this.setBalance=(n,r)=>{qe.setBalance(n,r)},this.setProfileName=n=>{qe.setProfileName(n)},this.setProfileImage=n=>{qe.setProfileImage(n)},this.resetAccount=()=>{qe.resetAccount()},this.setCaipNetwork=n=>{Ye.setCaipNetwork(n)},this.getCaipNetwork=()=>Ye.state.caipNetwork,this.setRequestedCaipNetworks=n=>{Ye.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>Ye.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Ye.resetNetwork()},this.setConnectors=n=>{Kr.setConnectors(n)},this.resetWcConnection=()=>{Fe.resetWcConnection()},this.fetchIdentity=n=>bx.fetchIdentity(n),this.setAddressExplorerUrl=n=>{qe.setAddressExplorerUrl(n)},this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),lt.open(t)}async close(){await this.initOrContinue(),lt.close()}getThemeMode(){return Mt.state.themeMode}getThemeVariables(){return Mt.state.themeVariables}setThemeMode(t){Mt.setThemeMode(t),sb(Mt.state.themeMode)}setThemeVariables(t){Mt.setThemeVariables(t),kx(Mt.state.themeVariables)}subscribeTheme(t){return Mt.subscribe(t)}initControllers(t){Ye.setClient(t.networkControllerClient),Ye.setDefaultCaipNetwork(t.defaultChain),tt.setProjectId(t.projectId),tt.setIncludeWalletIds(t.includeWalletIds),tt.setExcludeWalletIds(t.excludeWalletIds),tt.setFeaturedWalletIds(t.featuredWalletIds),tt.setTokens(t.tokens),tt.setTermsConditionsUrl(t.termsConditionsUrl),tt.setPrivacyPolicyUrl(t.privacyPolicyUrl),tt.setCustomWallets(t.customWallets),Fe.setClient(t.connectionControllerClient),Oe.setSdkVersion(t._sdkVersion),t.themeMode&&Mt.setThemeMode(t.themeMode),t.themeVariables&&Mt.setThemeVariables(t.themeVariables)}async initOrContinue(){return!this.initPromise&&!T1&&Me.isClient()&&(T1=!0,this.initPromise=new Promise(async t=>{await Promise.all([fs(()=>import("./index-a79a2d8a.js"),[]),fs(()=>Promise.resolve().then(()=>L7),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),t()})),this.initPromise}}const Mr="walletConnect",rd="injected",id="coinbaseWallet",od="safe",sd="ledger",bn="eip155",p9="wallet_addEthereumChain",g9="wagmi.wallet",w9="https://rpc.walletconnect.com",Zb="3.0.0-beta.1",bf={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},b9={[id]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[od]:"461db637-8616-43ce-035a-d89b8a1d5800",[sd]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Mr]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[rd]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},m9={[id]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[od]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[sd]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},y9={[rd]:"Browser Wallet",[Mr]:"WalletConnect",[id]:"Coinbase",[sd]:"Ledger",[od]:"Safe"},v9={[rd]:"INJECTED",[Mr]:"WALLET_CONNECT"};function x9(e){if(e)return{id:`${bn}:${e.id}`,name:e.name,imageId:bf[e.id]}}function A9(e){if(!e)return;const t={};return Object.entries(e).forEach(([n,r])=>{t[`${bn}:${n}`]=r}),t}class C9 extends h9{constructor(t){const{wagmiConfig:n,chains:r,defaultChain:o,_sdkVersion:i,tokens:s,...a}=t;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!n.connectors.find(u=>u.id===Mr))throw new Error("web3modal:constructor - WalletConnectConnector is required");const c={switchCaipNetwork:async u=>{const f=this.caipNetworkIdToNumber(u==null?void 0:u.id);f&&await sx({chainId:f})},async getApprovedCaipNetworksData(){var f,g,w,b;const u=localStorage.getItem(g9);if(u!=null&&u.includes(Mr)){const v=n.connectors.find(x=>x.id===Mr);if(!v)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const _=(g=(f=(await v.getProvider()).signer)==null?void 0:f.session)==null?void 0:g.namespaces,m=(w=_==null?void 0:_[bn])==null?void 0:w.methods,C=(b=_==null?void 0:_[bn])==null?void 0:b.chains;return{supportsAllNetworks:m==null?void 0:m.includes(p9),approvedCaipNetworkIds:C}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},l={connectWalletConnect:async u=>{var w;const f=n.connectors.find(b=>b.id===Mr);if(!f)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");f.on("message",b=>{b.type==="display_uri"&&(u(b.data),f.removeAllListeners())});const g=this.caipNetworkIdToNumber((w=this.getCaipNetwork())==null?void 0:w.id);await Gh({connector:f,chainId:g})},connectExternal:async u=>{var w;const f=n.connectors.find(b=>b.id===u);if(!f)throw new Error("connectionControllerClient:connectExternal - connector is undefined");const g=this.caipNetworkIdToNumber((w=this.getCaipNetwork())==null?void 0:w.id);await Gh({connector:f,chainId:g})},checkInjectedInstalled(u){return window!=null&&window.ethereum?u?u.some(f=>{var g;return!!((g=window.ethereum)!=null&&g[String(f)])}):!!window.ethereum:!1},disconnect:X8};super({networkControllerClient:c,connectionControllerClient:l,defaultChain:x9(o),tokens:A9(s),_sdkVersion:i??`html-wagmi-${Zb}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(r),this.syncConnectors(n.connectors),U0(()=>this.syncAccount()),Gw(()=>this.syncNetwork())}syncRequestedNetworks(t){const n=t==null?void 0:t.map(r=>({id:`${bn}:${r.id}`,name:r.name,imageId:bf[r.id]}));this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:t,isConnected:n}=vn(),{chain:r}=Qa();if(this.resetAccount(),n&&t&&r){const o=`${bn}:${r.id}:${t}`;this.setIsConnected(n),this.setCaipAddress(o),await Promise.all([this.syncProfile(t),this.syncBalance(t,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var o,i;const{address:t,isConnected:n}=vn(),{chain:r}=Qa();if(r){const s=String(r.id),a=`${bn}:${s}`;if(this.setCaipNetwork({id:a,name:r.name,imageId:bf[r.id]}),n&&t){const c=`${bn}:${r.id}:${t}`;if(this.setCaipAddress(c),(i=(o=r.blockExplorers)==null?void 0:o.default)!=null&&i.url){const l=`${r.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(l)}this.hasSyncedConnectedAccount&&await this.syncBalance(t,r)}}}async syncProfile(t){try{const{name:n,avatar:r}=await this.fetchIdentity({caipChainId:`${bn}:${Ea.id}`,address:t});this.setProfileName(n),this.setProfileImage(r)}catch{const n=await cx({address:t,chainId:Ea.id});if(n){this.setProfileName(n);const r=await ax({name:n,chainId:Ea.id});r&&this.setProfileImage(r)}}}async syncBalance(t,n){var o,i,s;const r=await ox({address:t,chainId:n.id,token:(s=(i=(o=this.options)==null?void 0:o.tokens)==null?void 0:i[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(t){const n=t.map(({id:r,name:o})=>({id:r,explorerId:m9[r],imageId:b9[r],name:y9[r]??o,type:v9[r]??"EXTERNAL"}));this.setConnectors(n??[])}caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0}}var Yb={},hl={};hl.byteLength=S9;hl.toByteArray=D9;hl.fromByteArray=O9;var An=[],Lt=[],E9=typeof Uint8Array<"u"?Uint8Array:Array,ru="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var fi=0,_9=ru.length;fi<_9;++fi)An[fi]=ru[fi],Lt[ru.charCodeAt(fi)]=fi;Lt["-".charCodeAt(0)]=62;Lt["_".charCodeAt(0)]=63;function Jb(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function S9(e){var t=Jb(e),n=t[0],r=t[1];return(n+r)*3/4-r}function P9(e,t,n){return(t+n)*3/4-n}function D9(e){var t,n=Jb(e),r=n[0],o=n[1],i=new E9(P9(e,r,o)),s=0,a=o>0?r-4:r,c;for(c=0;c<a;c+=4)t=Lt[e.charCodeAt(c)]<<18|Lt[e.charCodeAt(c+1)]<<12|Lt[e.charCodeAt(c+2)]<<6|Lt[e.charCodeAt(c+3)],i[s++]=t>>16&255,i[s++]=t>>8&255,i[s++]=t&255;return o===2&&(t=Lt[e.charCodeAt(c)]<<2|Lt[e.charCodeAt(c+1)]>>4,i[s++]=t&255),o===1&&(t=Lt[e.charCodeAt(c)]<<10|Lt[e.charCodeAt(c+1)]<<4|Lt[e.charCodeAt(c+2)]>>2,i[s++]=t>>8&255,i[s++]=t&255),i}function I9(e){return An[e>>18&63]+An[e>>12&63]+An[e>>6&63]+An[e&63]}function T9(e,t,n){for(var r,o=[],i=t;i<n;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(e[i+2]&255),o.push(I9(r));return o.join("")}function O9(e){for(var t,n=e.length,r=n%3,o=[],i=16383,s=0,a=n-r;s<a;s+=i)o.push(T9(e,s,s+i>a?a:s+i));return r===1?(t=e[n-1],o.push(An[t>>2]+An[t<<4&63]+"==")):r===2&&(t=(e[n-2]<<8)+e[n-1],o.push(An[t>>10]+An[t>>4&63]+An[t<<2&63]+"=")),o.join("")}var ad={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ad.read=function(e,t,n,r,o){var i,s,a=o*8-r-1,c=(1<<a)-1,l=c>>1,u=-7,f=n?o-1:0,g=n?-1:1,w=e[t+f];for(f+=g,i=w&(1<<-u)-1,w>>=-u,u+=a;u>0;i=i*256+e[t+f],f+=g,u-=8);for(s=i&(1<<-u)-1,i>>=-u,u+=r;u>0;s=s*256+e[t+f],f+=g,u-=8);if(i===0)i=1-l;else{if(i===c)return s?NaN:(w?-1:1)*(1/0);s=s+Math.pow(2,r),i=i-l}return(w?-1:1)*s*Math.pow(2,i-r)};ad.write=function(e,t,n,r,o,i){var s,a,c,l=i*8-o-1,u=(1<<l)-1,f=u>>1,g=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=r?0:i-1,b=r?1:-1,v=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),s+f>=1?t+=g/c:t+=g*Math.pow(2,1-f),t*c>=2&&(s++,c/=2),s+f>=u?(a=0,s=u):s+f>=1?(a=(t*c-1)*Math.pow(2,o),s=s+f):(a=t*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;e[n+w]=a&255,w+=b,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;e[n+w]=s&255,w+=b,s/=256,l-=8);e[n+w-b]|=v*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=hl,n=ad,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=m,e.INSPECT_MAX_BYTES=50;const o=2147483647;e.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=i(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function i(){try{const y=new Uint8Array(1),d={foo:function(){return 42}};return Object.setPrototypeOf(d,Uint8Array.prototype),Object.setPrototypeOf(y,d),y.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(y){if(y>o)throw new RangeError('The value "'+y+'" is invalid for option "size"');const d=new Uint8Array(y);return Object.setPrototypeOf(d,a.prototype),d}function a(y,d,p){if(typeof y=="number"){if(typeof d=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f(y)}return c(y,d,p)}a.poolSize=8192;function c(y,d,p){if(typeof y=="string")return g(y,d);if(ArrayBuffer.isView(y))return b(y);if(y==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y);if(J(y,ArrayBuffer)||y&&J(y.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(J(y,SharedArrayBuffer)||y&&J(y.buffer,SharedArrayBuffer)))return v(y,d,p);if(typeof y=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const S=y.valueOf&&y.valueOf();if(S!=null&&S!==y)return a.from(S,d,p);const O=A(y);if(O)return O;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof y[Symbol.toPrimitive]=="function")return a.from(y[Symbol.toPrimitive]("string"),d,p);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof y)}a.from=function(y,d,p){return c(y,d,p)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function l(y){if(typeof y!="number")throw new TypeError('"size" argument must be of type number');if(y<0)throw new RangeError('The value "'+y+'" is invalid for option "size"')}function u(y,d,p){return l(y),y<=0?s(y):d!==void 0?typeof p=="string"?s(y).fill(d,p):s(y).fill(d):s(y)}a.alloc=function(y,d,p){return u(y,d,p)};function f(y){return l(y),s(y<0?0:_(y)|0)}a.allocUnsafe=function(y){return f(y)},a.allocUnsafeSlow=function(y){return f(y)};function g(y,d){if((typeof d!="string"||d==="")&&(d="utf8"),!a.isEncoding(d))throw new TypeError("Unknown encoding: "+d);const p=C(y,d)|0;let S=s(p);const O=S.write(y,d);return O!==p&&(S=S.slice(0,O)),S}function w(y){const d=y.length<0?0:_(y.length)|0,p=s(d);for(let S=0;S<d;S+=1)p[S]=y[S]&255;return p}function b(y){if(J(y,Uint8Array)){const d=new Uint8Array(y);return v(d.buffer,d.byteOffset,d.byteLength)}return w(y)}function v(y,d,p){if(d<0||y.byteLength<d)throw new RangeError('"offset" is outside of buffer bounds');if(y.byteLength<d+(p||0))throw new RangeError('"length" is outside of buffer bounds');let S;return d===void 0&&p===void 0?S=new Uint8Array(y):p===void 0?S=new Uint8Array(y,d):S=new Uint8Array(y,d,p),Object.setPrototypeOf(S,a.prototype),S}function A(y){if(a.isBuffer(y)){const d=_(y.length)|0,p=s(d);return p.length===0||y.copy(p,0,0,d),p}if(y.length!==void 0)return typeof y.length!="number"||X(y.length)?s(0):w(y);if(y.type==="Buffer"&&Array.isArray(y.data))return w(y.data)}function _(y){if(y>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return y|0}function m(y){return+y!=y&&(y=0),a.alloc(+y)}a.isBuffer=function(d){return d!=null&&d._isBuffer===!0&&d!==a.prototype},a.compare=function(d,p){if(J(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),J(p,Uint8Array)&&(p=a.from(p,p.offset,p.byteLength)),!a.isBuffer(d)||!a.isBuffer(p))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(d===p)return 0;let S=d.length,O=p.length;for(let k=0,U=Math.min(S,O);k<U;++k)if(d[k]!==p[k]){S=d[k],O=p[k];break}return S<O?-1:O<S?1:0},a.isEncoding=function(d){switch(String(d).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(d,p){if(!Array.isArray(d))throw new TypeError('"list" argument must be an Array of Buffers');if(d.length===0)return a.alloc(0);let S;if(p===void 0)for(p=0,S=0;S<d.length;++S)p+=d[S].length;const O=a.allocUnsafe(p);let k=0;for(S=0;S<d.length;++S){let U=d[S];if(J(U,Uint8Array))k+U.length>O.length?(a.isBuffer(U)||(U=a.from(U)),U.copy(O,k)):Uint8Array.prototype.set.call(O,U,k);else if(a.isBuffer(U))U.copy(O,k);else throw new TypeError('"list" argument must be an Array of Buffers');k+=U.length}return O};function C(y,d){if(a.isBuffer(y))return y.length;if(ArrayBuffer.isView(y)||J(y,ArrayBuffer))return y.byteLength;if(typeof y!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof y);const p=y.length,S=arguments.length>2&&arguments[2]===!0;if(!S&&p===0)return 0;let O=!1;for(;;)switch(d){case"ascii":case"latin1":case"binary":return p;case"utf8":case"utf-8":return V(y).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return p*2;case"hex":return p>>>1;case"base64":return G(y).length;default:if(O)return S?-1:V(y).length;d=(""+d).toLowerCase(),O=!0}}a.byteLength=C;function x(y,d,p){let S=!1;if((d===void 0||d<0)&&(d=0),d>this.length||((p===void 0||p>this.length)&&(p=this.length),p<=0)||(p>>>=0,d>>>=0,p<=d))return"";for(y||(y="utf8");;)switch(y){case"hex":return Be(this,d,p);case"utf8":case"utf-8":return we(this,d,p);case"ascii":return Q(this,d,p);case"latin1":case"binary":return te(this,d,p);case"base64":return le(this,d,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ne(this,d,p);default:if(S)throw new TypeError("Unknown encoding: "+y);y=(y+"").toLowerCase(),S=!0}}a.prototype._isBuffer=!0;function E(y,d,p){const S=y[d];y[d]=y[p],y[p]=S}a.prototype.swap16=function(){const d=this.length;if(d%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let p=0;p<d;p+=2)E(this,p,p+1);return this},a.prototype.swap32=function(){const d=this.length;if(d%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let p=0;p<d;p+=4)E(this,p,p+3),E(this,p+1,p+2);return this},a.prototype.swap64=function(){const d=this.length;if(d%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let p=0;p<d;p+=8)E(this,p,p+7),E(this,p+1,p+6),E(this,p+2,p+5),E(this,p+3,p+4);return this},a.prototype.toString=function(){const d=this.length;return d===0?"":arguments.length===0?we(this,0,d):x.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(d){if(!a.isBuffer(d))throw new TypeError("Argument must be a Buffer");return this===d?!0:a.compare(this,d)===0},a.prototype.inspect=function(){let d="";const p=e.INSPECT_MAX_BYTES;return d=this.toString("hex",0,p).replace(/(.{2})/g,"$1 ").trim(),this.length>p&&(d+=" ... "),"<Buffer "+d+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(d,p,S,O,k){if(J(d,Uint8Array)&&(d=a.from(d,d.offset,d.byteLength)),!a.isBuffer(d))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof d);if(p===void 0&&(p=0),S===void 0&&(S=d?d.length:0),O===void 0&&(O=0),k===void 0&&(k=this.length),p<0||S>d.length||O<0||k>this.length)throw new RangeError("out of range index");if(O>=k&&p>=S)return 0;if(O>=k)return-1;if(p>=S)return 1;if(p>>>=0,S>>>=0,O>>>=0,k>>>=0,this===d)return 0;let U=k-O,pe=S-p;const ye=Math.min(U,pe),Re=this.slice(O,k),Ke=d.slice(p,S);for(let ze=0;ze<ye;++ze)if(Re[ze]!==Ke[ze]){U=Re[ze],pe=Ke[ze];break}return U<pe?-1:pe<U?1:0};function P(y,d,p,S,O){if(y.length===0)return-1;if(typeof p=="string"?(S=p,p=0):p>2147483647?p=2147483647:p<-2147483648&&(p=-2147483648),p=+p,X(p)&&(p=O?0:y.length-1),p<0&&(p=y.length+p),p>=y.length){if(O)return-1;p=y.length-1}else if(p<0)if(O)p=0;else return-1;if(typeof d=="string"&&(d=a.from(d,S)),a.isBuffer(d))return d.length===0?-1:h(y,d,p,S,O);if(typeof d=="number")return d=d&255,typeof Uint8Array.prototype.indexOf=="function"?O?Uint8Array.prototype.indexOf.call(y,d,p):Uint8Array.prototype.lastIndexOf.call(y,d,p):h(y,[d],p,S,O);throw new TypeError("val must be string, number or Buffer")}function h(y,d,p,S,O){let k=1,U=y.length,pe=d.length;if(S!==void 0&&(S=String(S).toLowerCase(),S==="ucs2"||S==="ucs-2"||S==="utf16le"||S==="utf-16le")){if(y.length<2||d.length<2)return-1;k=2,U/=2,pe/=2,p/=2}function ye(Ke,ze){return k===1?Ke[ze]:Ke.readUInt16BE(ze*k)}let Re;if(O){let Ke=-1;for(Re=p;Re<U;Re++)if(ye(y,Re)===ye(d,Ke===-1?0:Re-Ke)){if(Ke===-1&&(Ke=Re),Re-Ke+1===pe)return Ke*k}else Ke!==-1&&(Re-=Re-Ke),Ke=-1}else for(p+pe>U&&(p=U-pe),Re=p;Re>=0;Re--){let Ke=!0;for(let ze=0;ze<pe;ze++)if(ye(y,Re+ze)!==ye(d,ze)){Ke=!1;break}if(Ke)return Re}return-1}a.prototype.includes=function(d,p,S){return this.indexOf(d,p,S)!==-1},a.prototype.indexOf=function(d,p,S){return P(this,d,p,S,!0)},a.prototype.lastIndexOf=function(d,p,S){return P(this,d,p,S,!1)};function D(y,d,p,S){p=Number(p)||0;const O=y.length-p;S?(S=Number(S),S>O&&(S=O)):S=O;const k=d.length;S>k/2&&(S=k/2);let U;for(U=0;U<S;++U){const pe=parseInt(d.substr(U*2,2),16);if(X(pe))return U;y[p+U]=pe}return U}function $(y,d,p,S){return j(V(d,y.length-p),y,p,S)}function F(y,d,p,S){return j(ne(d),y,p,S)}function z(y,d,p,S){return j(G(d),y,p,S)}function ie(y,d,p,S){return j(Z(d,y.length-p),y,p,S)}a.prototype.write=function(d,p,S,O){if(p===void 0)O="utf8",S=this.length,p=0;else if(S===void 0&&typeof p=="string")O=p,S=this.length,p=0;else if(isFinite(p))p=p>>>0,isFinite(S)?(S=S>>>0,O===void 0&&(O="utf8")):(O=S,S=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const k=this.length-p;if((S===void 0||S>k)&&(S=k),d.length>0&&(S<0||p<0)||p>this.length)throw new RangeError("Attempt to write outside buffer bounds");O||(O="utf8");let U=!1;for(;;)switch(O){case"hex":return D(this,d,p,S);case"utf8":case"utf-8":return $(this,d,p,S);case"ascii":case"latin1":case"binary":return F(this,d,p,S);case"base64":return z(this,d,p,S);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,d,p,S);default:if(U)throw new TypeError("Unknown encoding: "+O);O=(""+O).toLowerCase(),U=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function le(y,d,p){return d===0&&p===y.length?t.fromByteArray(y):t.fromByteArray(y.slice(d,p))}function we(y,d,p){p=Math.min(y.length,p);const S=[];let O=d;for(;O<p;){const k=y[O];let U=null,pe=k>239?4:k>223?3:k>191?2:1;if(O+pe<=p){let ye,Re,Ke,ze;switch(pe){case 1:k<128&&(U=k);break;case 2:ye=y[O+1],(ye&192)===128&&(ze=(k&31)<<6|ye&63,ze>127&&(U=ze));break;case 3:ye=y[O+1],Re=y[O+2],(ye&192)===128&&(Re&192)===128&&(ze=(k&15)<<12|(ye&63)<<6|Re&63,ze>2047&&(ze<55296||ze>57343)&&(U=ze));break;case 4:ye=y[O+1],Re=y[O+2],Ke=y[O+3],(ye&192)===128&&(Re&192)===128&&(Ke&192)===128&&(ze=(k&15)<<18|(ye&63)<<12|(Re&63)<<6|Ke&63,ze>65535&&ze<1114112&&(U=ze))}}U===null?(U=65533,pe=1):U>65535&&(U-=65536,S.push(U>>>10&1023|55296),U=56320|U&1023),S.push(U),O+=pe}return oe(S)}const ge=4096;function oe(y){const d=y.length;if(d<=ge)return String.fromCharCode.apply(String,y);let p="",S=0;for(;S<d;)p+=String.fromCharCode.apply(String,y.slice(S,S+=ge));return p}function Q(y,d,p){let S="";p=Math.min(y.length,p);for(let O=d;O<p;++O)S+=String.fromCharCode(y[O]&127);return S}function te(y,d,p){let S="";p=Math.min(y.length,p);for(let O=d;O<p;++O)S+=String.fromCharCode(y[O]);return S}function Be(y,d,p){const S=y.length;(!d||d<0)&&(d=0),(!p||p<0||p>S)&&(p=S);let O="";for(let k=d;k<p;++k)O+=se[y[k]];return O}function Ne(y,d,p){const S=y.slice(d,p);let O="";for(let k=0;k<S.length-1;k+=2)O+=String.fromCharCode(S[k]+S[k+1]*256);return O}a.prototype.slice=function(d,p){const S=this.length;d=~~d,p=p===void 0?S:~~p,d<0?(d+=S,d<0&&(d=0)):d>S&&(d=S),p<0?(p+=S,p<0&&(p=0)):p>S&&(p=S),p<d&&(p=d);const O=this.subarray(d,p);return Object.setPrototypeOf(O,a.prototype),O};function ve(y,d,p){if(y%1!==0||y<0)throw new RangeError("offset is not uint");if(y+d>p)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(d,p,S){d=d>>>0,p=p>>>0,S||ve(d,p,this.length);let O=this[d],k=1,U=0;for(;++U<p&&(k*=256);)O+=this[d+U]*k;return O},a.prototype.readUintBE=a.prototype.readUIntBE=function(d,p,S){d=d>>>0,p=p>>>0,S||ve(d,p,this.length);let O=this[d+--p],k=1;for(;p>0&&(k*=256);)O+=this[d+--p]*k;return O},a.prototype.readUint8=a.prototype.readUInt8=function(d,p){return d=d>>>0,p||ve(d,1,this.length),this[d]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(d,p){return d=d>>>0,p||ve(d,2,this.length),this[d]|this[d+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(d,p){return d=d>>>0,p||ve(d,2,this.length),this[d]<<8|this[d+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(d,p){return d=d>>>0,p||ve(d,4,this.length),(this[d]|this[d+1]<<8|this[d+2]<<16)+this[d+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(d,p){return d=d>>>0,p||ve(d,4,this.length),this[d]*16777216+(this[d+1]<<16|this[d+2]<<8|this[d+3])},a.prototype.readBigUInt64LE=ue(function(d){d=d>>>0,T(d,"offset");const p=this[d],S=this[d+7];(p===void 0||S===void 0)&&B(d,this.length-8);const O=p+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24,k=this[++d]+this[++d]*2**8+this[++d]*2**16+S*2**24;return BigInt(O)+(BigInt(k)<<BigInt(32))}),a.prototype.readBigUInt64BE=ue(function(d){d=d>>>0,T(d,"offset");const p=this[d],S=this[d+7];(p===void 0||S===void 0)&&B(d,this.length-8);const O=p*2**24+this[++d]*2**16+this[++d]*2**8+this[++d],k=this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+S;return(BigInt(O)<<BigInt(32))+BigInt(k)}),a.prototype.readIntLE=function(d,p,S){d=d>>>0,p=p>>>0,S||ve(d,p,this.length);let O=this[d],k=1,U=0;for(;++U<p&&(k*=256);)O+=this[d+U]*k;return k*=128,O>=k&&(O-=Math.pow(2,8*p)),O},a.prototype.readIntBE=function(d,p,S){d=d>>>0,p=p>>>0,S||ve(d,p,this.length);let O=p,k=1,U=this[d+--O];for(;O>0&&(k*=256);)U+=this[d+--O]*k;return k*=128,U>=k&&(U-=Math.pow(2,8*p)),U},a.prototype.readInt8=function(d,p){return d=d>>>0,p||ve(d,1,this.length),this[d]&128?(255-this[d]+1)*-1:this[d]},a.prototype.readInt16LE=function(d,p){d=d>>>0,p||ve(d,2,this.length);const S=this[d]|this[d+1]<<8;return S&32768?S|4294901760:S},a.prototype.readInt16BE=function(d,p){d=d>>>0,p||ve(d,2,this.length);const S=this[d+1]|this[d]<<8;return S&32768?S|4294901760:S},a.prototype.readInt32LE=function(d,p){return d=d>>>0,p||ve(d,4,this.length),this[d]|this[d+1]<<8|this[d+2]<<16|this[d+3]<<24},a.prototype.readInt32BE=function(d,p){return d=d>>>0,p||ve(d,4,this.length),this[d]<<24|this[d+1]<<16|this[d+2]<<8|this[d+3]},a.prototype.readBigInt64LE=ue(function(d){d=d>>>0,T(d,"offset");const p=this[d],S=this[d+7];(p===void 0||S===void 0)&&B(d,this.length-8);const O=this[d+4]+this[d+5]*2**8+this[d+6]*2**16+(S<<24);return(BigInt(O)<<BigInt(32))+BigInt(p+this[++d]*2**8+this[++d]*2**16+this[++d]*2**24)}),a.prototype.readBigInt64BE=ue(function(d){d=d>>>0,T(d,"offset");const p=this[d],S=this[d+7];(p===void 0||S===void 0)&&B(d,this.length-8);const O=(p<<24)+this[++d]*2**16+this[++d]*2**8+this[++d];return(BigInt(O)<<BigInt(32))+BigInt(this[++d]*2**24+this[++d]*2**16+this[++d]*2**8+S)}),a.prototype.readFloatLE=function(d,p){return d=d>>>0,p||ve(d,4,this.length),n.read(this,d,!0,23,4)},a.prototype.readFloatBE=function(d,p){return d=d>>>0,p||ve(d,4,this.length),n.read(this,d,!1,23,4)},a.prototype.readDoubleLE=function(d,p){return d=d>>>0,p||ve(d,8,this.length),n.read(this,d,!0,52,8)},a.prototype.readDoubleBE=function(d,p){return d=d>>>0,p||ve(d,8,this.length),n.read(this,d,!1,52,8)};function me(y,d,p,S,O,k){if(!a.isBuffer(y))throw new TypeError('"buffer" argument must be a Buffer instance');if(d>O||d<k)throw new RangeError('"value" argument is out of bounds');if(p+S>y.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(d,p,S,O){if(d=+d,p=p>>>0,S=S>>>0,!O){const pe=Math.pow(2,8*S)-1;me(this,d,p,S,pe,0)}let k=1,U=0;for(this[p]=d&255;++U<S&&(k*=256);)this[p+U]=d/k&255;return p+S},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(d,p,S,O){if(d=+d,p=p>>>0,S=S>>>0,!O){const pe=Math.pow(2,8*S)-1;me(this,d,p,S,pe,0)}let k=S-1,U=1;for(this[p+k]=d&255;--k>=0&&(U*=256);)this[p+k]=d/U&255;return p+S},a.prototype.writeUint8=a.prototype.writeUInt8=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,1,255,0),this[p]=d&255,p+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,2,65535,0),this[p]=d&255,this[p+1]=d>>>8,p+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,2,65535,0),this[p]=d>>>8,this[p+1]=d&255,p+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,4,4294967295,0),this[p+3]=d>>>24,this[p+2]=d>>>16,this[p+1]=d>>>8,this[p]=d&255,p+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,4,4294967295,0),this[p]=d>>>24,this[p+1]=d>>>16,this[p+2]=d>>>8,this[p+3]=d&255,p+4};function ce(y,d,p,S,O){I(d,S,O,y,p,7);let k=Number(d&BigInt(4294967295));y[p++]=k,k=k>>8,y[p++]=k,k=k>>8,y[p++]=k,k=k>>8,y[p++]=k;let U=Number(d>>BigInt(32)&BigInt(4294967295));return y[p++]=U,U=U>>8,y[p++]=U,U=U>>8,y[p++]=U,U=U>>8,y[p++]=U,p}function Ae(y,d,p,S,O){I(d,S,O,y,p,7);let k=Number(d&BigInt(4294967295));y[p+7]=k,k=k>>8,y[p+6]=k,k=k>>8,y[p+5]=k,k=k>>8,y[p+4]=k;let U=Number(d>>BigInt(32)&BigInt(4294967295));return y[p+3]=U,U=U>>8,y[p+2]=U,U=U>>8,y[p+1]=U,U=U>>8,y[p]=U,p+8}a.prototype.writeBigUInt64LE=ue(function(d,p=0){return ce(this,d,p,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=ue(function(d,p=0){return Ae(this,d,p,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(d,p,S,O){if(d=+d,p=p>>>0,!O){const ye=Math.pow(2,8*S-1);me(this,d,p,S,ye-1,-ye)}let k=0,U=1,pe=0;for(this[p]=d&255;++k<S&&(U*=256);)d<0&&pe===0&&this[p+k-1]!==0&&(pe=1),this[p+k]=(d/U>>0)-pe&255;return p+S},a.prototype.writeIntBE=function(d,p,S,O){if(d=+d,p=p>>>0,!O){const ye=Math.pow(2,8*S-1);me(this,d,p,S,ye-1,-ye)}let k=S-1,U=1,pe=0;for(this[p+k]=d&255;--k>=0&&(U*=256);)d<0&&pe===0&&this[p+k+1]!==0&&(pe=1),this[p+k]=(d/U>>0)-pe&255;return p+S},a.prototype.writeInt8=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,1,127,-128),d<0&&(d=255+d+1),this[p]=d&255,p+1},a.prototype.writeInt16LE=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,2,32767,-32768),this[p]=d&255,this[p+1]=d>>>8,p+2},a.prototype.writeInt16BE=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,2,32767,-32768),this[p]=d>>>8,this[p+1]=d&255,p+2},a.prototype.writeInt32LE=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,4,2147483647,-2147483648),this[p]=d&255,this[p+1]=d>>>8,this[p+2]=d>>>16,this[p+3]=d>>>24,p+4},a.prototype.writeInt32BE=function(d,p,S){return d=+d,p=p>>>0,S||me(this,d,p,4,2147483647,-2147483648),d<0&&(d=4294967295+d+1),this[p]=d>>>24,this[p+1]=d>>>16,this[p+2]=d>>>8,this[p+3]=d&255,p+4},a.prototype.writeBigInt64LE=ue(function(d,p=0){return ce(this,d,p,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=ue(function(d,p=0){return Ae(this,d,p,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Se(y,d,p,S,O,k){if(p+S>y.length)throw new RangeError("Index out of range");if(p<0)throw new RangeError("Index out of range")}function xe(y,d,p,S,O){return d=+d,p=p>>>0,O||Se(y,d,p,4),n.write(y,d,p,S,23,4),p+4}a.prototype.writeFloatLE=function(d,p,S){return xe(this,d,p,!0,S)},a.prototype.writeFloatBE=function(d,p,S){return xe(this,d,p,!1,S)};function N(y,d,p,S,O){return d=+d,p=p>>>0,O||Se(y,d,p,8),n.write(y,d,p,S,52,8),p+8}a.prototype.writeDoubleLE=function(d,p,S){return N(this,d,p,!0,S)},a.prototype.writeDoubleBE=function(d,p,S){return N(this,d,p,!1,S)},a.prototype.copy=function(d,p,S,O){if(!a.isBuffer(d))throw new TypeError("argument should be a Buffer");if(S||(S=0),!O&&O!==0&&(O=this.length),p>=d.length&&(p=d.length),p||(p=0),O>0&&O<S&&(O=S),O===S||d.length===0||this.length===0)return 0;if(p<0)throw new RangeError("targetStart out of bounds");if(S<0||S>=this.length)throw new RangeError("Index out of range");if(O<0)throw new RangeError("sourceEnd out of bounds");O>this.length&&(O=this.length),d.length-p<O-S&&(O=d.length-p+S);const k=O-S;return this===d&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(p,S,O):Uint8Array.prototype.set.call(d,this.subarray(S,O),p),k},a.prototype.fill=function(d,p,S,O){if(typeof d=="string"){if(typeof p=="string"?(O=p,p=0,S=this.length):typeof S=="string"&&(O=S,S=this.length),O!==void 0&&typeof O!="string")throw new TypeError("encoding must be a string");if(typeof O=="string"&&!a.isEncoding(O))throw new TypeError("Unknown encoding: "+O);if(d.length===1){const U=d.charCodeAt(0);(O==="utf8"&&U<128||O==="latin1")&&(d=U)}}else typeof d=="number"?d=d&255:typeof d=="boolean"&&(d=Number(d));if(p<0||this.length<p||this.length<S)throw new RangeError("Out of range index");if(S<=p)return this;p=p>>>0,S=S===void 0?this.length:S>>>0,d||(d=0);let k;if(typeof d=="number")for(k=p;k<S;++k)this[k]=d;else{const U=a.isBuffer(d)?d:a.from(d,O),pe=U.length;if(pe===0)throw new TypeError('The value "'+d+'" is invalid for argument "value"');for(k=0;k<S-p;++k)this[k+p]=U[k%pe]}return this};const q={};function H(y,d,p){q[y]=class extends p{constructor(){super(),Object.defineProperty(this,"message",{value:d.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${y}]`,this.stack,delete this.name}get code(){return y}set code(O){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:O,writable:!0})}toString(){return`${this.name} [${y}]: ${this.message}`}}}H("ERR_BUFFER_OUT_OF_BOUNDS",function(y){return y?`${y} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),H("ERR_INVALID_ARG_TYPE",function(y,d){return`The "${y}" argument must be of type number. Received type ${typeof d}`},TypeError),H("ERR_OUT_OF_RANGE",function(y,d,p){let S=`The value of "${y}" is out of range.`,O=p;return Number.isInteger(p)&&Math.abs(p)>2**32?O=Y(String(p)):typeof p=="bigint"&&(O=String(p),(p>BigInt(2)**BigInt(32)||p<-(BigInt(2)**BigInt(32)))&&(O=Y(O)),O+="n"),S+=` It must be ${d}. Received ${O}`,S},RangeError);function Y(y){let d="",p=y.length;const S=y[0]==="-"?1:0;for(;p>=S+4;p-=3)d=`_${y.slice(p-3,p)}${d}`;return`${y.slice(0,p)}${d}`}function he(y,d,p){T(d,"offset"),(y[d]===void 0||y[d+p]===void 0)&&B(d,y.length-(p+1))}function I(y,d,p,S,O,k){if(y>p||y<d){const U=typeof d=="bigint"?"n":"";let pe;throw k>3?d===0||d===BigInt(0)?pe=`>= 0${U} and < 2${U} ** ${(k+1)*8}${U}`:pe=`>= -(2${U} ** ${(k+1)*8-1}${U}) and < 2 ** ${(k+1)*8-1}${U}`:pe=`>= ${d}${U} and <= ${p}${U}`,new q.ERR_OUT_OF_RANGE("value",pe,y)}he(S,O,k)}function T(y,d){if(typeof y!="number")throw new q.ERR_INVALID_ARG_TYPE(d,"number",y)}function B(y,d,p){throw Math.floor(y)!==y?(T(y,p),new q.ERR_OUT_OF_RANGE(p||"offset","an integer",y)):d<0?new q.ERR_BUFFER_OUT_OF_BOUNDS:new q.ERR_OUT_OF_RANGE(p||"offset",`>= ${p?1:0} and <= ${d}`,y)}const L=/[^+/0-9A-Za-z-_]/g;function W(y){if(y=y.split("=")[0],y=y.trim().replace(L,""),y.length<2)return"";for(;y.length%4!==0;)y=y+"=";return y}function V(y,d){d=d||1/0;let p;const S=y.length;let O=null;const k=[];for(let U=0;U<S;++U){if(p=y.charCodeAt(U),p>55295&&p<57344){if(!O){if(p>56319){(d-=3)>-1&&k.push(239,191,189);continue}else if(U+1===S){(d-=3)>-1&&k.push(239,191,189);continue}O=p;continue}if(p<56320){(d-=3)>-1&&k.push(239,191,189),O=p;continue}p=(O-55296<<10|p-56320)+65536}else O&&(d-=3)>-1&&k.push(239,191,189);if(O=null,p<128){if((d-=1)<0)break;k.push(p)}else if(p<2048){if((d-=2)<0)break;k.push(p>>6|192,p&63|128)}else if(p<65536){if((d-=3)<0)break;k.push(p>>12|224,p>>6&63|128,p&63|128)}else if(p<1114112){if((d-=4)<0)break;k.push(p>>18|240,p>>12&63|128,p>>6&63|128,p&63|128)}else throw new Error("Invalid code point")}return k}function ne(y){const d=[];for(let p=0;p<y.length;++p)d.push(y.charCodeAt(p)&255);return d}function Z(y,d){let p,S,O;const k=[];for(let U=0;U<y.length&&!((d-=2)<0);++U)p=y.charCodeAt(U),S=p>>8,O=p%256,k.push(O),k.push(S);return k}function G(y){return t.toByteArray(W(y))}function j(y,d,p,S){let O;for(O=0;O<S&&!(O+p>=d.length||O>=y.length);++O)d[O+p]=y[O];return O}function J(y,d){return y instanceof d||y!=null&&y.constructor!=null&&y.constructor.name!=null&&y.constructor.name===d.name}function X(y){return y!==y}const se=function(){const y="0123456789abcdef",d=new Array(256);for(let p=0;p<16;++p){const S=p*16;for(let O=0;O<16;++O)d[S+O]=y[p]+y[O]}return d}();function ue(y){return typeof BigInt>"u"?be:y}function be(){throw new Error("BigInt not supported")}})(Yb);var up;typeof window<"u"&&(window.Buffer||(window.Buffer=Yb.Buffer),window.global||(window.global=window),window.process||(window.process={}),(up=window.process)!=null&&up.env||(window.process={env:{}}));var To,mi,B9=class extends c0{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,Pt(this,To,void 0),Pt(this,mi,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:rn(n[0])})},this.onChainChanged=n=>{const r=La(n),o=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:o}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await t.enable(),r=rn(n[0]);let o=await this.getChainId(),i=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,i=this.isChainUnsupported(o)),{account:r,chain:{id:o,unsupported:i}}}catch(t){throw/(user closed modal|accounts received is empty)/i.test(t.message)?new It(t):t}}async disconnect(){if(!We(this,mi))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const t=await(await this.getProvider()).request({method:"eth_accounts"});return rn(t[0])}async getChainId(){const e=await this.getProvider();return La(e.chainId)}async getProvider(){var e;if(!We(this,mi)){let t=(await fs(()=>import("./index-6ca48010.js").then(s=>s.i),["assets/index-6ca48010.js","assets/events-10f28eca.js"])).default;typeof t!="function"&&typeof t.default=="function"&&(t=t.default),Zo(this,To,new t(this.options));const n=(e=We(this,To).walletExtension)==null?void 0:e.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],o=this.options.chainId||(r==null?void 0:r.id),i=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);Zo(this,mi,We(this,To).makeWeb3Provider(i,o))}return We(this,mi)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(o=>o.id===e);if(!t)throw new Error("provider is required.");return k0({account:n,chain:r,transport:D0(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r;const t=await this.getProvider(),n=De(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(o=>o.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(o){const i=this.chains.find(s=>s.id===e);if(!i)throw new Rg({chainId:e,connectorId:this.id});if(o.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[((r=i.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(s){throw new It(s)}throw new zn(o)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}};To=new WeakMap;mi=new WeakMap;var cd={},pl={},Ie={},Xb={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(a,c){var l=a>>>16&65535,u=a&65535,f=c>>>16&65535,g=c&65535;return u*g+(l*g+u*f<<16>>>0)|0}e.mul=Math.imul||t;function n(a,c){return a+c|0}e.add=n;function r(a,c){return a-c|0}e.sub=r;function o(a,c){return a<<c|a>>>32-c}e.rotl=o;function i(a,c){return a<<32-c|a>>>c}e.rotr=i;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}e.isInteger=Number.isInteger||s,e.MAX_SAFE_INTEGER=9007199254740991,e.isSafeInteger=function(a){return e.isInteger(a)&&a>=-e.MAX_SAFE_INTEGER&&a<=e.MAX_SAFE_INTEGER}})(Xb);Object.defineProperty(Ie,"__esModule",{value:!0});var em=Xb;function k9(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16}Ie.readInt16BE=k9;function R9(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])>>>0}Ie.readUint16BE=R9;function M9(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])<<16>>16}Ie.readInt16LE=M9;function $9(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])>>>0}Ie.readUint16LE=$9;function tm(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>8,t[n+1]=e>>>0,t}Ie.writeUint16BE=tm;Ie.writeInt16BE=tm;function nm(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t}Ie.writeUint16LE=nm;Ie.writeInt16LE=nm;function mf(e,t){return t===void 0&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}Ie.readInt32BE=mf;function yf(e,t){return t===void 0&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}Ie.readUint32BE=yf;function vf(e,t){return t===void 0&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}Ie.readInt32LE=vf;function xf(e,t){return t===void 0&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}Ie.readUint32LE=xf;function bc(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>24,t[n+1]=e>>>16,t[n+2]=e>>>8,t[n+3]=e>>>0,t}Ie.writeUint32BE=bc;Ie.writeInt32BE=bc;function mc(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24,t}Ie.writeUint32LE=mc;Ie.writeInt32LE=mc;function N9(e,t){t===void 0&&(t=0);var n=mf(e,t),r=mf(e,t+4);return n*4294967296+r-(r>>31)*4294967296}Ie.readInt64BE=N9;function U9(e,t){t===void 0&&(t=0);var n=yf(e,t),r=yf(e,t+4);return n*4294967296+r}Ie.readUint64BE=U9;function F9(e,t){t===void 0&&(t=0);var n=vf(e,t),r=vf(e,t+4);return r*4294967296+n-(n>>31)*4294967296}Ie.readInt64LE=F9;function L9(e,t){t===void 0&&(t=0);var n=xf(e,t),r=xf(e,t+4);return r*4294967296+n}Ie.readUint64LE=L9;function rm(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),bc(e/4294967296>>>0,t,n),bc(e>>>0,t,n+4),t}Ie.writeUint64BE=rm;Ie.writeInt64BE=rm;function im(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),mc(e>>>0,t,n),mc(e/4294967296>>>0,t,n+4),t}Ie.writeUint64LE=im;Ie.writeInt64LE=im;function j9(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,o=1,i=e/8+n-1;i>=n;i--)r+=t[i]*o,o*=256;return r}Ie.readUintBE=j9;function W9(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,o=1,i=n;i<n+e/8;i++)r+=t[i]*o,o*=256;return r}Ie.readUintLE=W9;function z9(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!em.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var o=1,i=e/8+r-1;i>=r;i--)n[i]=t/o&255,o*=256;return n}Ie.writeUintBE=z9;function H9(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!em.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var o=1,i=r;i<r+e/8;i++)n[i]=t/o&255,o*=256;return n}Ie.writeUintLE=H9;function V9(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t)}Ie.readFloat32BE=V9;function q9(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t,!0)}Ie.readFloat32LE=q9;function G9(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t)}Ie.readFloat64BE=G9;function K9(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t,!0)}Ie.readFloat64LE=K9;function Q9(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e),t}Ie.writeFloat32BE=Q9;function Z9(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e,!0),t}Ie.writeFloat32LE=Z9;function Y9(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e),t}Ie.writeFloat64BE=Y9;function J9(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e,!0),t}Ie.writeFloat64LE=J9;var fn={};Object.defineProperty(fn,"__esModule",{value:!0});function X9(e){for(var t=0;t<e.length;t++)e[t]=0;return e}fn.wipe=X9;Object.defineProperty(pl,"__esModule",{value:!0});var bt=Ie,Af=fn,eE=20;function tE(e,t,n){for(var r=1634760805,o=857760878,i=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],c=n[7]<<24|n[6]<<16|n[5]<<8|n[4],l=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],f=n[19]<<24|n[18]<<16|n[17]<<8|n[16],g=n[23]<<24|n[22]<<16|n[21]<<8|n[20],w=n[27]<<24|n[26]<<16|n[25]<<8|n[24],b=n[31]<<24|n[30]<<16|n[29]<<8|n[28],v=t[3]<<24|t[2]<<16|t[1]<<8|t[0],A=t[7]<<24|t[6]<<16|t[5]<<8|t[4],_=t[11]<<24|t[10]<<16|t[9]<<8|t[8],m=t[15]<<24|t[14]<<16|t[13]<<8|t[12],C=r,x=o,E=i,P=s,h=a,D=c,$=l,F=u,z=f,ie=g,le=w,we=b,ge=v,oe=A,Q=_,te=m,Be=0;Be<eE;Be+=2)C=C+h|0,ge^=C,ge=ge>>>32-16|ge<<16,z=z+ge|0,h^=z,h=h>>>32-12|h<<12,x=x+D|0,oe^=x,oe=oe>>>32-16|oe<<16,ie=ie+oe|0,D^=ie,D=D>>>32-12|D<<12,E=E+$|0,Q^=E,Q=Q>>>32-16|Q<<16,le=le+Q|0,$^=le,$=$>>>32-12|$<<12,P=P+F|0,te^=P,te=te>>>32-16|te<<16,we=we+te|0,F^=we,F=F>>>32-12|F<<12,E=E+$|0,Q^=E,Q=Q>>>32-8|Q<<8,le=le+Q|0,$^=le,$=$>>>32-7|$<<7,P=P+F|0,te^=P,te=te>>>32-8|te<<8,we=we+te|0,F^=we,F=F>>>32-7|F<<7,x=x+D|0,oe^=x,oe=oe>>>32-8|oe<<8,ie=ie+oe|0,D^=ie,D=D>>>32-7|D<<7,C=C+h|0,ge^=C,ge=ge>>>32-8|ge<<8,z=z+ge|0,h^=z,h=h>>>32-7|h<<7,C=C+D|0,te^=C,te=te>>>32-16|te<<16,le=le+te|0,D^=le,D=D>>>32-12|D<<12,x=x+$|0,ge^=x,ge=ge>>>32-16|ge<<16,we=we+ge|0,$^=we,$=$>>>32-12|$<<12,E=E+F|0,oe^=E,oe=oe>>>32-16|oe<<16,z=z+oe|0,F^=z,F=F>>>32-12|F<<12,P=P+h|0,Q^=P,Q=Q>>>32-16|Q<<16,ie=ie+Q|0,h^=ie,h=h>>>32-12|h<<12,E=E+F|0,oe^=E,oe=oe>>>32-8|oe<<8,z=z+oe|0,F^=z,F=F>>>32-7|F<<7,P=P+h|0,Q^=P,Q=Q>>>32-8|Q<<8,ie=ie+Q|0,h^=ie,h=h>>>32-7|h<<7,x=x+$|0,ge^=x,ge=ge>>>32-8|ge<<8,we=we+ge|0,$^=we,$=$>>>32-7|$<<7,C=C+D|0,te^=C,te=te>>>32-8|te<<8,le=le+te|0,D^=le,D=D>>>32-7|D<<7;bt.writeUint32LE(C+r|0,e,0),bt.writeUint32LE(x+o|0,e,4),bt.writeUint32LE(E+i|0,e,8),bt.writeUint32LE(P+s|0,e,12),bt.writeUint32LE(h+a|0,e,16),bt.writeUint32LE(D+c|0,e,20),bt.writeUint32LE($+l|0,e,24),bt.writeUint32LE(F+u|0,e,28),bt.writeUint32LE(z+f|0,e,32),bt.writeUint32LE(ie+g|0,e,36),bt.writeUint32LE(le+w|0,e,40),bt.writeUint32LE(we+b|0,e,44),bt.writeUint32LE(ge+v|0,e,48),bt.writeUint32LE(oe+A|0,e,52),bt.writeUint32LE(Q+_|0,e,56),bt.writeUint32LE(te+m|0,e,60)}function om(e,t,n,r,o){if(o===void 0&&(o=0),e.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var i,s;if(o===0){if(t.length!==8&&t.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");i=new Uint8Array(16),s=i.length-t.length,i.set(t,s)}else{if(t.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");i=t,s=o}for(var a=new Uint8Array(64),c=0;c<n.length;c+=64){tE(a,i,e);for(var l=c;l<c+64&&l<n.length;l++)r[l]=n[l]^a[l-c];rE(i,0,s)}return Af.wipe(a),o===0&&Af.wipe(i),r}pl.streamXOR=om;function nE(e,t,n,r){return r===void 0&&(r=0),Af.wipe(n),om(e,t,n,n,r)}pl.stream=nE;function rE(e,t,n){for(var r=1;n--;)r=r+(e[t]&255)|0,e[t]=r&255,r>>>=8,t++;if(r>0)throw new Error("ChaCha: counter overflow")}var sm={},_r={};Object.defineProperty(_r,"__esModule",{value:!0});function iE(e,t,n){return~(e-1)&t|e-1&n}_r.select=iE;function oE(e,t){return(e|0)-(t|0)-1>>>31&1}_r.lessOrEqual=oE;function am(e,t){if(e.length!==t.length)return 0;for(var n=0,r=0;r<e.length;r++)n|=e[r]^t[r];return 1&n-1>>>8}_r.compare=am;function sE(e,t){return e.length===0||t.length===0?!1:am(e,t)!==0}_r.equal=sE;(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=_r,n=fn;e.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=e.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var c=a[0]|a[1]<<8;this._r[0]=c&8191;var l=a[2]|a[3]<<8;this._r[1]=(c>>>13|l<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(l>>>10|u<<6)&7939;var f=a[6]|a[7]<<8;this._r[3]=(u>>>7|f<<9)&8191;var g=a[8]|a[9]<<8;this._r[4]=(f>>>4|g<<12)&255,this._r[5]=g>>>1&8190;var w=a[10]|a[11]<<8;this._r[6]=(g>>>14|w<<2)&8191;var b=a[12]|a[13]<<8;this._r[7]=(w>>>11|b<<5)&8065;var v=a[14]|a[15]<<8;this._r[8]=(b>>>8|v<<8)&8191,this._r[9]=v>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,c,l){for(var u=this._fin?0:2048,f=this._h[0],g=this._h[1],w=this._h[2],b=this._h[3],v=this._h[4],A=this._h[5],_=this._h[6],m=this._h[7],C=this._h[8],x=this._h[9],E=this._r[0],P=this._r[1],h=this._r[2],D=this._r[3],$=this._r[4],F=this._r[5],z=this._r[6],ie=this._r[7],le=this._r[8],we=this._r[9];l>=16;){var ge=a[c+0]|a[c+1]<<8;f+=ge&8191;var oe=a[c+2]|a[c+3]<<8;g+=(ge>>>13|oe<<3)&8191;var Q=a[c+4]|a[c+5]<<8;w+=(oe>>>10|Q<<6)&8191;var te=a[c+6]|a[c+7]<<8;b+=(Q>>>7|te<<9)&8191;var Be=a[c+8]|a[c+9]<<8;v+=(te>>>4|Be<<12)&8191,A+=Be>>>1&8191;var Ne=a[c+10]|a[c+11]<<8;_+=(Be>>>14|Ne<<2)&8191;var ve=a[c+12]|a[c+13]<<8;m+=(Ne>>>11|ve<<5)&8191;var me=a[c+14]|a[c+15]<<8;C+=(ve>>>8|me<<8)&8191,x+=me>>>5|u;var ce=0,Ae=ce;Ae+=f*E,Ae+=g*(5*we),Ae+=w*(5*le),Ae+=b*(5*ie),Ae+=v*(5*z),ce=Ae>>>13,Ae&=8191,Ae+=A*(5*F),Ae+=_*(5*$),Ae+=m*(5*D),Ae+=C*(5*h),Ae+=x*(5*P),ce+=Ae>>>13,Ae&=8191;var Se=ce;Se+=f*P,Se+=g*E,Se+=w*(5*we),Se+=b*(5*le),Se+=v*(5*ie),ce=Se>>>13,Se&=8191,Se+=A*(5*z),Se+=_*(5*F),Se+=m*(5*$),Se+=C*(5*D),Se+=x*(5*h),ce+=Se>>>13,Se&=8191;var xe=ce;xe+=f*h,xe+=g*P,xe+=w*E,xe+=b*(5*we),xe+=v*(5*le),ce=xe>>>13,xe&=8191,xe+=A*(5*ie),xe+=_*(5*z),xe+=m*(5*F),xe+=C*(5*$),xe+=x*(5*D),ce+=xe>>>13,xe&=8191;var N=ce;N+=f*D,N+=g*h,N+=w*P,N+=b*E,N+=v*(5*we),ce=N>>>13,N&=8191,N+=A*(5*le),N+=_*(5*ie),N+=m*(5*z),N+=C*(5*F),N+=x*(5*$),ce+=N>>>13,N&=8191;var q=ce;q+=f*$,q+=g*D,q+=w*h,q+=b*P,q+=v*E,ce=q>>>13,q&=8191,q+=A*(5*we),q+=_*(5*le),q+=m*(5*ie),q+=C*(5*z),q+=x*(5*F),ce+=q>>>13,q&=8191;var H=ce;H+=f*F,H+=g*$,H+=w*D,H+=b*h,H+=v*P,ce=H>>>13,H&=8191,H+=A*E,H+=_*(5*we),H+=m*(5*le),H+=C*(5*ie),H+=x*(5*z),ce+=H>>>13,H&=8191;var Y=ce;Y+=f*z,Y+=g*F,Y+=w*$,Y+=b*D,Y+=v*h,ce=Y>>>13,Y&=8191,Y+=A*P,Y+=_*E,Y+=m*(5*we),Y+=C*(5*le),Y+=x*(5*ie),ce+=Y>>>13,Y&=8191;var he=ce;he+=f*ie,he+=g*z,he+=w*F,he+=b*$,he+=v*D,ce=he>>>13,he&=8191,he+=A*h,he+=_*P,he+=m*E,he+=C*(5*we),he+=x*(5*le),ce+=he>>>13,he&=8191;var I=ce;I+=f*le,I+=g*ie,I+=w*z,I+=b*F,I+=v*$,ce=I>>>13,I&=8191,I+=A*D,I+=_*h,I+=m*P,I+=C*E,I+=x*(5*we),ce+=I>>>13,I&=8191;var T=ce;T+=f*we,T+=g*le,T+=w*ie,T+=b*z,T+=v*F,ce=T>>>13,T&=8191,T+=A*$,T+=_*D,T+=m*h,T+=C*P,T+=x*E,ce+=T>>>13,T&=8191,ce=(ce<<2)+ce|0,ce=ce+Ae|0,Ae=ce&8191,ce=ce>>>13,Se+=ce,f=Ae,g=Se,w=xe,b=N,v=q,A=H,_=Y,m=he,C=I,x=T,c+=16,l-=16}this._h[0]=f,this._h[1]=g,this._h[2]=w,this._h[3]=b,this._h[4]=v,this._h[5]=A,this._h[6]=_,this._h[7]=m,this._h[8]=C,this._h[9]=x},s.prototype.finish=function(a,c){c===void 0&&(c=0);var l=new Uint16Array(10),u,f,g,w;if(this._leftover){for(w=this._leftover,this._buffer[w++]=1;w<16;w++)this._buffer[w]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,w=2;w<10;w++)this._h[w]+=u,u=this._h[w]>>>13,this._h[w]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,l[0]=this._h[0]+5,u=l[0]>>>13,l[0]&=8191,w=1;w<10;w++)l[w]=this._h[w]+u,u=l[w]>>>13,l[w]&=8191;for(l[9]-=8192,f=(u^1)-1,w=0;w<10;w++)l[w]&=f;for(f=~f,w=0;w<10;w++)this._h[w]=this._h[w]&f|l[w];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,g=this._h[0]+this._pad[0],this._h[0]=g&65535,w=1;w<8;w++)g=(this._h[w]+this._pad[w]|0)+(g>>>16)|0,this._h[w]=g&65535;return a[c+0]=this._h[0]>>>0,a[c+1]=this._h[0]>>>8,a[c+2]=this._h[1]>>>0,a[c+3]=this._h[1]>>>8,a[c+4]=this._h[2]>>>0,a[c+5]=this._h[2]>>>8,a[c+6]=this._h[3]>>>0,a[c+7]=this._h[3]>>>8,a[c+8]=this._h[4]>>>0,a[c+9]=this._h[4]>>>8,a[c+10]=this._h[5]>>>0,a[c+11]=this._h[5]>>>8,a[c+12]=this._h[6]>>>0,a[c+13]=this._h[6]>>>8,a[c+14]=this._h[7]>>>0,a[c+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var c=0,l=a.length,u;if(this._leftover){u=16-this._leftover,u>l&&(u=l);for(var f=0;f<u;f++)this._buffer[this._leftover+f]=a[c+f];if(l-=u,c+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(l>=16&&(u=l-l%16,this._blocks(a,c,u),c+=u,l-=u),l){for(var f=0;f<l;f++)this._buffer[this._leftover+f]=a[c+f];this._leftover+=l}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();e.Poly1305=r;function o(s,a){var c=new r(s);c.update(a);var l=c.digest();return c.clean(),l}e.oneTimeAuth=o;function i(s,a){return s.length!==e.DIGEST_LENGTH||a.length!==e.DIGEST_LENGTH?!1:t.equal(s,a)}e.equal=i})(sm);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=pl,n=sm,r=fn,o=Ie,i=_r;e.KEY_LENGTH=32,e.NONCE_LENGTH=12,e.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function c(l){if(this.nonceLength=e.NONCE_LENGTH,this.tagLength=e.TAG_LENGTH,l.length!==e.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(l)}return c.prototype.seal=function(l,u,f,g){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var w=new Uint8Array(16);w.set(l,w.length-l.length);var b=new Uint8Array(32);t.stream(this._key,w,b,4);var v=u.length+this.tagLength,A;if(g){if(g.length!==v)throw new Error("ChaCha20Poly1305: incorrect destination length");A=g}else A=new Uint8Array(v);return t.streamXOR(this._key,w,u,A,4),this._authenticate(A.subarray(A.length-this.tagLength,A.length),b,A.subarray(0,A.length-this.tagLength),f),r.wipe(w),A},c.prototype.open=function(l,u,f,g){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var w=new Uint8Array(16);w.set(l,w.length-l.length);var b=new Uint8Array(32);t.stream(this._key,w,b,4);var v=new Uint8Array(this.tagLength);if(this._authenticate(v,b,u.subarray(0,u.length-this.tagLength),f),!i.equal(v,u.subarray(u.length-this.tagLength,u.length)))return null;var A=u.length-this.tagLength,_;if(g){if(g.length!==A)throw new Error("ChaCha20Poly1305: incorrect destination length");_=g}else _=new Uint8Array(A);return t.streamXOR(this._key,w,u.subarray(0,u.length-this.tagLength),_,4),r.wipe(w),_},c.prototype.clean=function(){return r.wipe(this._key),this},c.prototype._authenticate=function(l,u,f,g){var w=new n.Poly1305(u);g&&(w.update(g),g.length%16>0&&w.update(s.subarray(g.length%16))),w.update(f),f.length%16>0&&w.update(s.subarray(f.length%16));var b=new Uint8Array(8);g&&o.writeUint64LE(g.length,b),w.update(b),o.writeUint64LE(f.length,b),w.update(b);for(var v=w.digest(),A=0;A<v.length;A++)l[A]=v[A];w.clean(),r.wipe(v),r.wipe(b)},c}();e.ChaCha20Poly1305=a})(cd);var cm={},Xs={},ld={};Object.defineProperty(ld,"__esModule",{value:!0});function aE(e){return typeof e.saveState<"u"&&typeof e.restoreState<"u"&&typeof e.cleanSavedState<"u"}ld.isSerializableHash=aE;Object.defineProperty(Xs,"__esModule",{value:!0});var gn=ld,cE=_r,lE=fn,lm=function(){function e(t,n){this._finished=!1,this._inner=new t,this._outer=new t,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var o=0;o<r.length;o++)r[o]^=54;this._inner.update(r);for(var o=0;o<r.length;o++)r[o]^=106;this._outer.update(r),gn.isSerializableHash(this._inner)&&gn.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),lE.wipe(r)}return e.prototype.reset=function(){if(!gn.isSerializableHash(this._inner)||!gn.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){gn.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),gn.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(t){return this._inner.update(t),this},e.prototype.finish=function(t){return this._finished?(this._outer.finish(t),this):(this._inner.finish(t),this._outer.update(t.subarray(0,this.digestLength)).finish(t),this._finished=!0,this)},e.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},e.prototype.saveState=function(){if(!gn.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(t){if(!gn.isSerializableHash(this._inner)||!gn.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(t),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(t){if(!gn.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(t)},e}();Xs.HMAC=lm;function uE(e,t,n){var r=new lm(e,t);r.update(n);var o=r.digest();return r.clean(),o}Xs.hmac=uE;Xs.equal=cE.equal;Object.defineProperty(cm,"__esModule",{value:!0});var O1=Xs,B1=fn,fE=function(){function e(t,n,r,o){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=t,this._info=o;var i=O1.hmac(this._hash,r,n);this._hmac=new O1.HMAC(t,i),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var t=this._counter[0];if(t===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),t>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(t){for(var n=new Uint8Array(t),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},e.prototype.clean=function(){this._hmac.clean(),B1.wipe(this._buffer),B1.wipe(this._counter),this._bufpos=0},e}(),dE=cm.HKDF=fE,gl={},wl={},bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.BrowserRandomSource=void 0;const k1=65536;class hE{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const t=typeof self<"u"?self.crypto||self.msCrypto:null;t&&t.getRandomValues!==void 0&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(t);for(let r=0;r<n.length;r+=k1)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,k1)));return n}}bl.BrowserRandomSource=hE;function pE(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ml={};const gE={},wE=Object.freeze(Object.defineProperty({__proto__:null,default:gE},Symbol.toStringTag,{value:"Module"})),bE=Mg(wE);Object.defineProperty(ml,"__esModule",{value:!0});ml.NodeRandomSource=void 0;const mE=fn;class yE{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof pE<"u"){const t=bE;t&&t.randomBytes&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(t);if(n.length!==t)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(t);for(let o=0;o<r.length;o++)r[o]=n[o];return(0,mE.wipe)(n),r}}ml.NodeRandomSource=yE;Object.defineProperty(wl,"__esModule",{value:!0});wl.SystemRandomSource=void 0;const vE=bl,xE=ml;class AE{constructor(){if(this.isAvailable=!1,this.name="",this._source=new vE.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new xE.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(t){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(t)}}wl.SystemRandomSource=AE;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.randomStringForEntropy=e.randomString=e.randomUint32=e.randomBytes=e.defaultRandomSource=void 0;const t=wl,n=Ie,r=fn;e.defaultRandomSource=new t.SystemRandomSource;function o(l,u=e.defaultRandomSource){return u.randomBytes(l)}e.randomBytes=o;function i(l=e.defaultRandomSource){const u=o(4,l),f=(0,n.readUint32LE)(u);return(0,r.wipe)(u),f}e.randomUint32=i;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(l,u=s,f=e.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let g="";const w=u.length,b=256-256%w;for(;l>0;){const v=o(Math.ceil(l*256/b),f);for(let A=0;A<v.length&&l>0;A++){const _=v[A];_<b&&(g+=u.charAt(_%w),l--)}(0,r.wipe)(v)}return g}e.randomString=a;function c(l,u=s,f=e.defaultRandomSource){const g=Math.ceil(l/(Math.log(u.length)/Math.LN2));return a(g,u,f)}e.randomStringForEntropy=c})(gl);var yl={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Ie,n=fn;e.DIGEST_LENGTH=32,e.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=e.DIGEST_LENGTH,this.blockSize=e.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(c,l){if(l===void 0&&(l=c.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=l,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&l>0;)this._buffer[this._bufferLength++]=c[u++],l--;this._bufferLength===this.blockSize&&(i(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(l>=this.blockSize&&(u=i(this._temp,this._state,c,u,l),l%=this.blockSize);l>0;)this._buffer[this._bufferLength++]=c[u++],l--;return this},a.prototype.finish=function(c){if(!this._finished){var l=this._bytesHashed,u=this._bufferLength,f=l/536870912|0,g=l<<3,w=l%64<56?64:128;this._buffer[u]=128;for(var b=u+1;b<w-8;b++)this._buffer[b]=0;t.writeUint32BE(f,this._buffer,w-8),t.writeUint32BE(g,this._buffer,w-4),i(this._temp,this._state,this._buffer,0,w),this._finished=!0}for(var b=0;b<this.digestLength/4;b++)t.writeUint32BE(this._state[b],c,b*4);return this},a.prototype.digest=function(){var c=new Uint8Array(this.digestLength);return this.finish(c),c},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(c){return this._state.set(c.state),this._bufferLength=c.bufferLength,c.buffer&&this._buffer.set(c.buffer),this._bytesHashed=c.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(c){n.wipe(c.state),c.buffer&&n.wipe(c.buffer),c.bufferLength=0,c.bytesHashed=0},a}();e.SHA256=r;var o=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function i(a,c,l,u,f){for(;f>=64;){for(var g=c[0],w=c[1],b=c[2],v=c[3],A=c[4],_=c[5],m=c[6],C=c[7],x=0;x<16;x++){var E=u+x*4;a[x]=t.readUint32BE(l,E)}for(var x=16;x<64;x++){var P=a[x-2],h=(P>>>17|P<<32-17)^(P>>>19|P<<32-19)^P>>>10;P=a[x-15];var D=(P>>>7|P<<32-7)^(P>>>18|P<<32-18)^P>>>3;a[x]=(h+a[x-7]|0)+(D+a[x-16]|0)}for(var x=0;x<64;x++){var h=(((A>>>6|A<<26)^(A>>>11|A<<21)^(A>>>25|A<<7))+(A&_^~A&m)|0)+(C+(o[x]+a[x]|0)|0)|0,D=((g>>>2|g<<32-2)^(g>>>13|g<<32-13)^(g>>>22|g<<32-22))+(g&w^g&b^w&b)|0;C=m,m=_,_=A,A=v+h|0,v=b,b=w,w=g,g=h+D|0}c[0]+=g,c[1]+=w,c[2]+=b,c[3]+=v,c[4]+=A,c[5]+=_,c[6]+=m,c[7]+=C,u+=64,f-=64}return u}function s(a){var c=new r;c.update(a);var l=c.digest();return c.clean(),l}e.hash=s})(yl);var ud={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.sharedKey=e.generateKeyPair=e.generateKeyPairFromSeed=e.scalarMultBase=e.scalarMult=e.SHARED_KEY_LENGTH=e.SECRET_KEY_LENGTH=e.PUBLIC_KEY_LENGTH=void 0;const t=gl,n=fn;e.PUBLIC_KEY_LENGTH=32,e.SECRET_KEY_LENGTH=32,e.SHARED_KEY_LENGTH=32;function r(x){const E=new Float64Array(16);if(x)for(let P=0;P<x.length;P++)E[P]=x[P];return E}const o=new Uint8Array(32);o[0]=9;const i=r([56129,1]);function s(x){let E=1;for(let P=0;P<16;P++){let h=x[P]+E+65535;E=Math.floor(h/65536),x[P]=h-E*65536}x[0]+=E-1+37*(E-1)}function a(x,E,P){const h=~(P-1);for(let D=0;D<16;D++){const $=h&(x[D]^E[D]);x[D]^=$,E[D]^=$}}function c(x,E){const P=r(),h=r();for(let D=0;D<16;D++)h[D]=E[D];s(h),s(h),s(h);for(let D=0;D<2;D++){P[0]=h[0]-65517;for(let F=1;F<15;F++)P[F]=h[F]-65535-(P[F-1]>>16&1),P[F-1]&=65535;P[15]=h[15]-32767-(P[14]>>16&1);const $=P[15]>>16&1;P[14]&=65535,a(h,P,1-$)}for(let D=0;D<16;D++)x[2*D]=h[D]&255,x[2*D+1]=h[D]>>8}function l(x,E){for(let P=0;P<16;P++)x[P]=E[2*P]+(E[2*P+1]<<8);x[15]&=32767}function u(x,E,P){for(let h=0;h<16;h++)x[h]=E[h]+P[h]}function f(x,E,P){for(let h=0;h<16;h++)x[h]=E[h]-P[h]}function g(x,E,P){let h,D,$=0,F=0,z=0,ie=0,le=0,we=0,ge=0,oe=0,Q=0,te=0,Be=0,Ne=0,ve=0,me=0,ce=0,Ae=0,Se=0,xe=0,N=0,q=0,H=0,Y=0,he=0,I=0,T=0,B=0,L=0,W=0,V=0,ne=0,Z=0,G=P[0],j=P[1],J=P[2],X=P[3],se=P[4],ue=P[5],be=P[6],y=P[7],d=P[8],p=P[9],S=P[10],O=P[11],k=P[12],U=P[13],pe=P[14],ye=P[15];h=E[0],$+=h*G,F+=h*j,z+=h*J,ie+=h*X,le+=h*se,we+=h*ue,ge+=h*be,oe+=h*y,Q+=h*d,te+=h*p,Be+=h*S,Ne+=h*O,ve+=h*k,me+=h*U,ce+=h*pe,Ae+=h*ye,h=E[1],F+=h*G,z+=h*j,ie+=h*J,le+=h*X,we+=h*se,ge+=h*ue,oe+=h*be,Q+=h*y,te+=h*d,Be+=h*p,Ne+=h*S,ve+=h*O,me+=h*k,ce+=h*U,Ae+=h*pe,Se+=h*ye,h=E[2],z+=h*G,ie+=h*j,le+=h*J,we+=h*X,ge+=h*se,oe+=h*ue,Q+=h*be,te+=h*y,Be+=h*d,Ne+=h*p,ve+=h*S,me+=h*O,ce+=h*k,Ae+=h*U,Se+=h*pe,xe+=h*ye,h=E[3],ie+=h*G,le+=h*j,we+=h*J,ge+=h*X,oe+=h*se,Q+=h*ue,te+=h*be,Be+=h*y,Ne+=h*d,ve+=h*p,me+=h*S,ce+=h*O,Ae+=h*k,Se+=h*U,xe+=h*pe,N+=h*ye,h=E[4],le+=h*G,we+=h*j,ge+=h*J,oe+=h*X,Q+=h*se,te+=h*ue,Be+=h*be,Ne+=h*y,ve+=h*d,me+=h*p,ce+=h*S,Ae+=h*O,Se+=h*k,xe+=h*U,N+=h*pe,q+=h*ye,h=E[5],we+=h*G,ge+=h*j,oe+=h*J,Q+=h*X,te+=h*se,Be+=h*ue,Ne+=h*be,ve+=h*y,me+=h*d,ce+=h*p,Ae+=h*S,Se+=h*O,xe+=h*k,N+=h*U,q+=h*pe,H+=h*ye,h=E[6],ge+=h*G,oe+=h*j,Q+=h*J,te+=h*X,Be+=h*se,Ne+=h*ue,ve+=h*be,me+=h*y,ce+=h*d,Ae+=h*p,Se+=h*S,xe+=h*O,N+=h*k,q+=h*U,H+=h*pe,Y+=h*ye,h=E[7],oe+=h*G,Q+=h*j,te+=h*J,Be+=h*X,Ne+=h*se,ve+=h*ue,me+=h*be,ce+=h*y,Ae+=h*d,Se+=h*p,xe+=h*S,N+=h*O,q+=h*k,H+=h*U,Y+=h*pe,he+=h*ye,h=E[8],Q+=h*G,te+=h*j,Be+=h*J,Ne+=h*X,ve+=h*se,me+=h*ue,ce+=h*be,Ae+=h*y,Se+=h*d,xe+=h*p,N+=h*S,q+=h*O,H+=h*k,Y+=h*U,he+=h*pe,I+=h*ye,h=E[9],te+=h*G,Be+=h*j,Ne+=h*J,ve+=h*X,me+=h*se,ce+=h*ue,Ae+=h*be,Se+=h*y,xe+=h*d,N+=h*p,q+=h*S,H+=h*O,Y+=h*k,he+=h*U,I+=h*pe,T+=h*ye,h=E[10],Be+=h*G,Ne+=h*j,ve+=h*J,me+=h*X,ce+=h*se,Ae+=h*ue,Se+=h*be,xe+=h*y,N+=h*d,q+=h*p,H+=h*S,Y+=h*O,he+=h*k,I+=h*U,T+=h*pe,B+=h*ye,h=E[11],Ne+=h*G,ve+=h*j,me+=h*J,ce+=h*X,Ae+=h*se,Se+=h*ue,xe+=h*be,N+=h*y,q+=h*d,H+=h*p,Y+=h*S,he+=h*O,I+=h*k,T+=h*U,B+=h*pe,L+=h*ye,h=E[12],ve+=h*G,me+=h*j,ce+=h*J,Ae+=h*X,Se+=h*se,xe+=h*ue,N+=h*be,q+=h*y,H+=h*d,Y+=h*p,he+=h*S,I+=h*O,T+=h*k,B+=h*U,L+=h*pe,W+=h*ye,h=E[13],me+=h*G,ce+=h*j,Ae+=h*J,Se+=h*X,xe+=h*se,N+=h*ue,q+=h*be,H+=h*y,Y+=h*d,he+=h*p,I+=h*S,T+=h*O,B+=h*k,L+=h*U,W+=h*pe,V+=h*ye,h=E[14],ce+=h*G,Ae+=h*j,Se+=h*J,xe+=h*X,N+=h*se,q+=h*ue,H+=h*be,Y+=h*y,he+=h*d,I+=h*p,T+=h*S,B+=h*O,L+=h*k,W+=h*U,V+=h*pe,ne+=h*ye,h=E[15],Ae+=h*G,Se+=h*j,xe+=h*J,N+=h*X,q+=h*se,H+=h*ue,Y+=h*be,he+=h*y,I+=h*d,T+=h*p,B+=h*S,L+=h*O,W+=h*k,V+=h*U,ne+=h*pe,Z+=h*ye,$+=38*Se,F+=38*xe,z+=38*N,ie+=38*q,le+=38*H,we+=38*Y,ge+=38*he,oe+=38*I,Q+=38*T,te+=38*B,Be+=38*L,Ne+=38*W,ve+=38*V,me+=38*ne,ce+=38*Z,D=1,h=$+D+65535,D=Math.floor(h/65536),$=h-D*65536,h=F+D+65535,D=Math.floor(h/65536),F=h-D*65536,h=z+D+65535,D=Math.floor(h/65536),z=h-D*65536,h=ie+D+65535,D=Math.floor(h/65536),ie=h-D*65536,h=le+D+65535,D=Math.floor(h/65536),le=h-D*65536,h=we+D+65535,D=Math.floor(h/65536),we=h-D*65536,h=ge+D+65535,D=Math.floor(h/65536),ge=h-D*65536,h=oe+D+65535,D=Math.floor(h/65536),oe=h-D*65536,h=Q+D+65535,D=Math.floor(h/65536),Q=h-D*65536,h=te+D+65535,D=Math.floor(h/65536),te=h-D*65536,h=Be+D+65535,D=Math.floor(h/65536),Be=h-D*65536,h=Ne+D+65535,D=Math.floor(h/65536),Ne=h-D*65536,h=ve+D+65535,D=Math.floor(h/65536),ve=h-D*65536,h=me+D+65535,D=Math.floor(h/65536),me=h-D*65536,h=ce+D+65535,D=Math.floor(h/65536),ce=h-D*65536,h=Ae+D+65535,D=Math.floor(h/65536),Ae=h-D*65536,$+=D-1+37*(D-1),D=1,h=$+D+65535,D=Math.floor(h/65536),$=h-D*65536,h=F+D+65535,D=Math.floor(h/65536),F=h-D*65536,h=z+D+65535,D=Math.floor(h/65536),z=h-D*65536,h=ie+D+65535,D=Math.floor(h/65536),ie=h-D*65536,h=le+D+65535,D=Math.floor(h/65536),le=h-D*65536,h=we+D+65535,D=Math.floor(h/65536),we=h-D*65536,h=ge+D+65535,D=Math.floor(h/65536),ge=h-D*65536,h=oe+D+65535,D=Math.floor(h/65536),oe=h-D*65536,h=Q+D+65535,D=Math.floor(h/65536),Q=h-D*65536,h=te+D+65535,D=Math.floor(h/65536),te=h-D*65536,h=Be+D+65535,D=Math.floor(h/65536),Be=h-D*65536,h=Ne+D+65535,D=Math.floor(h/65536),Ne=h-D*65536,h=ve+D+65535,D=Math.floor(h/65536),ve=h-D*65536,h=me+D+65535,D=Math.floor(h/65536),me=h-D*65536,h=ce+D+65535,D=Math.floor(h/65536),ce=h-D*65536,h=Ae+D+65535,D=Math.floor(h/65536),Ae=h-D*65536,$+=D-1+37*(D-1),x[0]=$,x[1]=F,x[2]=z,x[3]=ie,x[4]=le,x[5]=we,x[6]=ge,x[7]=oe,x[8]=Q,x[9]=te,x[10]=Be,x[11]=Ne,x[12]=ve,x[13]=me,x[14]=ce,x[15]=Ae}function w(x,E){g(x,E,E)}function b(x,E){const P=r();for(let h=0;h<16;h++)P[h]=E[h];for(let h=253;h>=0;h--)w(P,P),h!==2&&h!==4&&g(P,P,E);for(let h=0;h<16;h++)x[h]=P[h]}function v(x,E){const P=new Uint8Array(32),h=new Float64Array(80),D=r(),$=r(),F=r(),z=r(),ie=r(),le=r();for(let Q=0;Q<31;Q++)P[Q]=x[Q];P[31]=x[31]&127|64,P[0]&=248,l(h,E);for(let Q=0;Q<16;Q++)$[Q]=h[Q];D[0]=z[0]=1;for(let Q=254;Q>=0;--Q){const te=P[Q>>>3]>>>(Q&7)&1;a(D,$,te),a(F,z,te),u(ie,D,F),f(D,D,F),u(F,$,z),f($,$,z),w(z,ie),w(le,D),g(D,F,D),g(F,$,ie),u(ie,D,F),f(D,D,F),w($,D),f(F,z,le),g(D,F,i),u(D,D,z),g(F,F,D),g(D,z,le),g(z,$,h),w($,ie),a(D,$,te),a(F,z,te)}for(let Q=0;Q<16;Q++)h[Q+16]=D[Q],h[Q+32]=F[Q],h[Q+48]=$[Q],h[Q+64]=z[Q];const we=h.subarray(32),ge=h.subarray(16);b(we,we),g(ge,ge,we);const oe=new Uint8Array(32);return c(oe,ge),oe}e.scalarMult=v;function A(x){return v(x,o)}e.scalarMultBase=A;function _(x){if(x.length!==e.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);const E=new Uint8Array(x);return{publicKey:A(E),secretKey:E}}e.generateKeyPairFromSeed=_;function m(x){const E=(0,t.randomBytes)(32,x),P=_(E);return(0,n.wipe)(E),P}e.generateKeyPair=m;function C(x,E,P=!1){if(x.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(E.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const h=v(x,E);if(P){let D=0;for(let $=0;$<h.length;$++)D|=h[$];if(D===0)throw new Error("X25519: invalid shared key")}return h}e.sharedKey=C})(ud);function fd(e){return globalThis.Buffer!=null?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function um(e=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?fd(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function R1(e,t){t||(t=e.reduce((o,i)=>o+i.length,0));const n=um(t);let r=0;for(const o of e)n.set(o,r),r+=o.length;return fd(n)}function CE(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var o=0;o<e.length;o++){var i=e.charAt(o),s=i.charCodeAt(0);if(n[s]!==255)throw new TypeError(i+" is ambiguous");n[s]=o}var a=e.length,c=e.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function f(b){if(b instanceof Uint8Array||(ArrayBuffer.isView(b)?b=new Uint8Array(b.buffer,b.byteOffset,b.byteLength):Array.isArray(b)&&(b=Uint8Array.from(b))),!(b instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(b.length===0)return"";for(var v=0,A=0,_=0,m=b.length;_!==m&&b[_]===0;)_++,v++;for(var C=(m-_)*u+1>>>0,x=new Uint8Array(C);_!==m;){for(var E=b[_],P=0,h=C-1;(E!==0||P<A)&&h!==-1;h--,P++)E+=256*x[h]>>>0,x[h]=E%a>>>0,E=E/a>>>0;if(E!==0)throw new Error("Non-zero carry");A=P,_++}for(var D=C-A;D!==C&&x[D]===0;)D++;for(var $=c.repeat(v);D<C;++D)$+=e.charAt(x[D]);return $}function g(b){if(typeof b!="string")throw new TypeError("Expected String");if(b.length===0)return new Uint8Array;var v=0;if(b[v]!==" "){for(var A=0,_=0;b[v]===c;)A++,v++;for(var m=(b.length-v)*l+1>>>0,C=new Uint8Array(m);b[v];){var x=n[b.charCodeAt(v)];if(x===255)return;for(var E=0,P=m-1;(x!==0||E<_)&&P!==-1;P--,E++)x+=a*C[P]>>>0,C[P]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");_=E,v++}if(b[v]!==" "){for(var h=m-_;h!==m&&C[h]===0;)h++;for(var D=new Uint8Array(A+(m-h)),$=A;h!==m;)D[$++]=C[h++];return D}}}function w(b){var v=g(b);if(v)return v;throw new Error(`Non-${t} character`)}return{encode:f,decodeUnsafe:g,decode:w}}var EE=CE,_E=EE;const SE=e=>{if(e instanceof Uint8Array&&e.constructor.name==="Uint8Array")return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")},PE=e=>new TextEncoder().encode(e),DE=e=>new TextDecoder().decode(e);class IE{constructor(t,n,r){this.name=t,this.prefix=n,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class TE{constructor(t,n,r){if(this.name=t,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(t){if(typeof t=="string"){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(t){return fm(this,t)}}class OE{constructor(t){this.decoders=t}or(t){return fm(this,t)}decode(t){const n=t[0],r=this.decoders[n];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const fm=(e,t)=>new OE({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class BE{constructor(t,n,r,o){this.name=t,this.prefix=n,this.baseEncode=r,this.baseDecode=o,this.encoder=new IE(t,n,r),this.decoder=new TE(t,n,o)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const vl=({name:e,prefix:t,encode:n,decode:r})=>new BE(e,t,n,r),ea=({prefix:e,name:t,alphabet:n})=>{const{encode:r,decode:o}=_E(n,t);return vl({prefix:e,name:t,encode:r,decode:i=>SE(o(i))})},kE=(e,t,n,r)=>{const o={};for(let u=0;u<t.length;++u)o[t[u]]=u;let i=e.length;for(;e[i-1]==="=";)--i;const s=new Uint8Array(i*n/8|0);let a=0,c=0,l=0;for(let u=0;u<i;++u){const f=o[e[u]];if(f===void 0)throw new SyntaxError(`Non-${r} character`);c=c<<n|f,a+=n,a>=8&&(a-=8,s[l++]=255&c>>a)}if(a>=n||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s},RE=(e,t,n)=>{const r=t[t.length-1]==="=",o=(1<<n)-1;let i="",s=0,a=0;for(let c=0;c<e.length;++c)for(a=a<<8|e[c],s+=8;s>n;)s-=n,i+=t[o&a>>s];if(s&&(i+=t[o&a<<n-s]),r)for(;i.length*n&7;)i+="=";return i},gt=({name:e,prefix:t,bitsPerChar:n,alphabet:r})=>vl({prefix:t,name:e,encode(o){return RE(o,r,n)},decode(o){return kE(o,r,n,e)}}),ME=vl({prefix:"\0",name:"identity",encode:e=>DE(e),decode:e=>PE(e)}),$E=Object.freeze(Object.defineProperty({__proto__:null,identity:ME},Symbol.toStringTag,{value:"Module"})),NE=gt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),UE=Object.freeze(Object.defineProperty({__proto__:null,base2:NE},Symbol.toStringTag,{value:"Module"})),FE=gt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),LE=Object.freeze(Object.defineProperty({__proto__:null,base8:FE},Symbol.toStringTag,{value:"Module"})),jE=ea({prefix:"9",name:"base10",alphabet:"0123456789"}),WE=Object.freeze(Object.defineProperty({__proto__:null,base10:jE},Symbol.toStringTag,{value:"Module"})),zE=gt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),HE=gt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),VE=Object.freeze(Object.defineProperty({__proto__:null,base16:zE,base16upper:HE},Symbol.toStringTag,{value:"Module"})),qE=gt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),GE=gt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),KE=gt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),QE=gt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),ZE=gt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),YE=gt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),JE=gt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),XE=gt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),e_=gt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),t_=Object.freeze(Object.defineProperty({__proto__:null,base32:qE,base32hex:ZE,base32hexpad:JE,base32hexpadupper:XE,base32hexupper:YE,base32pad:KE,base32padupper:QE,base32upper:GE,base32z:e_},Symbol.toStringTag,{value:"Module"})),n_=ea({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),r_=ea({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),i_=Object.freeze(Object.defineProperty({__proto__:null,base36:n_,base36upper:r_},Symbol.toStringTag,{value:"Module"})),o_=ea({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),s_=ea({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),a_=Object.freeze(Object.defineProperty({__proto__:null,base58btc:o_,base58flickr:s_},Symbol.toStringTag,{value:"Module"})),c_=gt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),l_=gt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),u_=gt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),f_=gt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),d_=Object.freeze(Object.defineProperty({__proto__:null,base64:c_,base64pad:l_,base64url:u_,base64urlpad:f_},Symbol.toStringTag,{value:"Module"})),dm=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),h_=dm.reduce((e,t,n)=>(e[n]=t,e),[]),p_=dm.reduce((e,t,n)=>(e[t.codePointAt(0)]=n,e),[]);function g_(e){return e.reduce((t,n)=>(t+=h_[n],t),"")}function w_(e){const t=[];for(const n of e){const r=p_[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);t.push(r)}return new Uint8Array(t)}const b_=vl({prefix:"🚀",name:"base256emoji",encode:g_,decode:w_}),m_=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:b_},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const M1={...$E,...UE,...LE,...WE,...VE,...t_,...i_,...a_,...d_,...m_};function hm(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const $1=hm("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),iu=hm("ascii","a",e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},e=>{e=e.substring(1);const t=um(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}),pm={utf8:$1,"utf-8":$1,hex:M1.base16,latin1:iu,ascii:iu,binary:iu,...M1};function en(e,t="utf8"){const n=pm[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?fd(globalThis.Buffer.from(e,"utf-8")):n.decoder.decode(`${n.prefix}${e}`)}function ln(e,t="utf8"){const n=pm[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):n.encoder.encode(e).substring(1)}var N1=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))},y_=function(){function e(t,n,r){this.name=t,this.version=n,this.os=r,this.type="browser"}return e}(),v_=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=process.platform}return e}(),x_=function(){function e(t,n,r,o){this.name=t,this.version=n,this.os=r,this.bot=o,this.type="bot-device"}return e}(),A_=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),C_=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),E_=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,__=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,U1=3,S_=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",E_]],F1=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function P_(e){return e?L1(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new C_:typeof navigator<"u"?L1(navigator.userAgent):T_()}function D_(e){return e!==""&&S_.reduce(function(t,n){var r=n[0],o=n[1];if(t)return t;var i=o.exec(e);return!!i&&[r,i]},!1)}function L1(e){var t=D_(e);if(!t)return null;var n=t[0],r=t[1];if(n==="searchbot")return new A_;var o=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);o?o.length<U1&&(o=N1(N1([],o,!0),O_(U1-o.length),!0)):o=[];var i=o.join("."),s=I_(e),a=__.exec(e);return a&&a[1]?new x_(n,i,s,a[1]):new y_(n,i,s)}function I_(e){for(var t=0,n=F1.length;t<n;t++){var r=F1[t],o=r[0],i=r[1],s=i.exec(e);if(s)return o}return null}function T_(){var e=typeof process<"u"&&process.version;return e?new v_(process.version.slice(1)):null}function O_(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}var jr={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Cf=function(e,t){return Cf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])},Cf(e,t)};function B_(e,t){Cf(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Ef=function(){return Ef=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ef.apply(this,arguments)};function k_(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function R_(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}function M_(e,t){return function(n,r){t(n,r,e)}}function $_(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function N_(e,t,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(u){try{l(r.next(u))}catch(f){s(f)}}function c(u){try{l(r.throw(u))}catch(f){s(f)}}function l(u){u.done?i(u.value):o(u.value).then(a,c)}l((r=r.apply(e,t||[])).next())})}function U_(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(u){l=[6,u],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function F_(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}function L_(e,t){for(var n in e)n!=="default"&&!t.hasOwnProperty(n)&&(t[n]=e[n])}function _f(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function gm(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],s;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function j_(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(gm(arguments[t]));return e}function W_(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),o=0,t=0;t<n;t++)for(var i=arguments[t],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function Bs(e){return this instanceof Bs?(this.v=e,this):new Bs(e)}function z_(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(g){r[g]&&(o[g]=function(w){return new Promise(function(b,v){i.push([g,w,b,v])>1||a(g,w)})})}function a(g,w){try{c(r[g](w))}catch(b){f(i[0][3],b)}}function c(g){g.value instanceof Bs?Promise.resolve(g.value.v).then(l,u):f(i[0][2],g)}function l(g){a("next",g)}function u(g){a("throw",g)}function f(g,w){g(w),i.shift(),i.length&&a(i[0][0],i[0][1])}}function H_(e){var t,n;return t={},r("next"),r("throw",function(o){throw o}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(o,i){t[o]=e[o]?function(s){return(n=!n)?{value:Bs(e[o](s)),done:o==="return"}:i?i(s):s}:i}}function V_(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof _f=="function"?_f(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(s){return new Promise(function(a,c){s=e[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}function q_(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function G_(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function K_(e){return e&&e.__esModule?e:{default:e}}function Q_(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function Z_(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}const Y_=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return Ef},__asyncDelegator:H_,__asyncGenerator:z_,__asyncValues:V_,__await:Bs,__awaiter:N_,__classPrivateFieldGet:Q_,__classPrivateFieldSet:Z_,__createBinding:F_,__decorate:R_,__exportStar:L_,__extends:B_,__generator:U_,__importDefault:K_,__importStar:G_,__makeTemplateObject:q_,__metadata:$_,__param:M_,__read:gm,__rest:k_,__spread:j_,__spreadArrays:W_,__values:_f},Symbol.toStringTag,{value:"Module"})),xl=Mg(Y_);var ou={},Co={},j1;function J_(){if(j1)return Co;j1=1,Object.defineProperty(Co,"__esModule",{value:!0}),Co.delay=void 0;function e(t){return new Promise(n=>{setTimeout(()=>{n(!0)},t)})}return Co.delay=e,Co}var Ir={},su={},Tr={},W1;function X_(){return W1||(W1=1,Object.defineProperty(Tr,"__esModule",{value:!0}),Tr.ONE_THOUSAND=Tr.ONE_HUNDRED=void 0,Tr.ONE_HUNDRED=100,Tr.ONE_THOUSAND=1e3),Tr}var au={},z1;function eS(){return z1||(z1=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ONE_YEAR=e.FOUR_WEEKS=e.THREE_WEEKS=e.TWO_WEEKS=e.ONE_WEEK=e.THIRTY_DAYS=e.SEVEN_DAYS=e.FIVE_DAYS=e.THREE_DAYS=e.ONE_DAY=e.TWENTY_FOUR_HOURS=e.TWELVE_HOURS=e.SIX_HOURS=e.THREE_HOURS=e.ONE_HOUR=e.SIXTY_MINUTES=e.THIRTY_MINUTES=e.TEN_MINUTES=e.FIVE_MINUTES=e.ONE_MINUTE=e.SIXTY_SECONDS=e.THIRTY_SECONDS=e.TEN_SECONDS=e.FIVE_SECONDS=e.ONE_SECOND=void 0,e.ONE_SECOND=1,e.FIVE_SECONDS=5,e.TEN_SECONDS=10,e.THIRTY_SECONDS=30,e.SIXTY_SECONDS=60,e.ONE_MINUTE=e.SIXTY_SECONDS,e.FIVE_MINUTES=e.ONE_MINUTE*5,e.TEN_MINUTES=e.ONE_MINUTE*10,e.THIRTY_MINUTES=e.ONE_MINUTE*30,e.SIXTY_MINUTES=e.ONE_MINUTE*60,e.ONE_HOUR=e.SIXTY_MINUTES,e.THREE_HOURS=e.ONE_HOUR*3,e.SIX_HOURS=e.ONE_HOUR*6,e.TWELVE_HOURS=e.ONE_HOUR*12,e.TWENTY_FOUR_HOURS=e.ONE_HOUR*24,e.ONE_DAY=e.TWENTY_FOUR_HOURS,e.THREE_DAYS=e.ONE_DAY*3,e.FIVE_DAYS=e.ONE_DAY*5,e.SEVEN_DAYS=e.ONE_DAY*7,e.THIRTY_DAYS=e.ONE_DAY*30,e.ONE_WEEK=e.SEVEN_DAYS,e.TWO_WEEKS=e.ONE_WEEK*2,e.THREE_WEEKS=e.ONE_WEEK*3,e.FOUR_WEEKS=e.ONE_WEEK*4,e.ONE_YEAR=e.ONE_DAY*365}(au)),au}var H1;function wm(){return H1||(H1=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=xl;t.__exportStar(X_(),e),t.__exportStar(eS(),e)}(su)),su}var V1;function tS(){if(V1)return Ir;V1=1,Object.defineProperty(Ir,"__esModule",{value:!0}),Ir.fromMiliseconds=Ir.toMiliseconds=void 0;const e=wm();function t(r){return r*e.ONE_THOUSAND}Ir.toMiliseconds=t;function n(r){return Math.floor(r/e.ONE_THOUSAND)}return Ir.fromMiliseconds=n,Ir}var q1;function nS(){return q1||(q1=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=xl;t.__exportStar(J_(),e),t.__exportStar(tS(),e)}(ou)),ou}var di={},G1;function rS(){if(G1)return di;G1=1,Object.defineProperty(di,"__esModule",{value:!0}),di.Watch=void 0;class e{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const o=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:o})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return di.Watch=e,di.default=e,di}var cu={},Eo={},K1;function iS(){if(K1)return Eo;K1=1,Object.defineProperty(Eo,"__esModule",{value:!0}),Eo.IWatch=void 0;class e{}return Eo.IWatch=e,Eo}var Q1;function oS(){return Q1||(Q1=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),xl.__exportStar(iS(),e)}(cu)),cu}(function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=xl;t.__exportStar(nS(),e),t.__exportStar(rS(),e),t.__exportStar(oS(),e),t.__exportStar(wm(),e)})(jr);var Ve={};Object.defineProperty(Ve,"__esModule",{value:!0});Ve.getLocalStorage=Ve.getLocalStorageOrThrow=Ve.getCrypto=Ve.getCryptoOrThrow=mm=Ve.getLocation=Ve.getLocationOrThrow=dd=Ve.getNavigator=Ve.getNavigatorOrThrow=bm=Ve.getDocument=Ve.getDocumentOrThrow=Ve.getFromWindowOrThrow=Ve.getFromWindow=void 0;function si(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}Ve.getFromWindow=si;function wo(e){const t=si(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}Ve.getFromWindowOrThrow=wo;function sS(){return wo("document")}Ve.getDocumentOrThrow=sS;function aS(){return si("document")}var bm=Ve.getDocument=aS;function cS(){return wo("navigator")}Ve.getNavigatorOrThrow=cS;function lS(){return si("navigator")}var dd=Ve.getNavigator=lS;function uS(){return wo("location")}Ve.getLocationOrThrow=uS;function fS(){return si("location")}var mm=Ve.getLocation=fS;function dS(){return wo("crypto")}Ve.getCryptoOrThrow=dS;function hS(){return si("crypto")}Ve.getCrypto=hS;function pS(){return wo("localStorage")}Ve.getLocalStorageOrThrow=pS;function gS(){return si("localStorage")}Ve.getLocalStorage=gS;var hd={};Object.defineProperty(hd,"__esModule",{value:!0});var ym=hd.getWindowMetadata=void 0;const Z1=Ve;function wS(){let e,t;try{e=Z1.getDocumentOrThrow(),t=Z1.getLocationOrThrow()}catch{return null}function n(){const f=e.getElementsByTagName("link"),g=[];for(let w=0;w<f.length;w++){const b=f[w],v=b.getAttribute("rel");if(v&&v.toLowerCase().indexOf("icon")>-1){const A=b.getAttribute("href");if(A)if(A.toLowerCase().indexOf("https:")===-1&&A.toLowerCase().indexOf("http:")===-1&&A.indexOf("//")!==0){let _=t.protocol+"//"+t.host;if(A.indexOf("/")===0)_+=A;else{const m=t.pathname.split("/");m.pop();const C=m.join("/");_+=C+"/"+A}g.push(_)}else if(A.indexOf("//")===0){const _=t.protocol+A;g.push(_)}else g.push(A)}}return g}function r(...f){const g=e.getElementsByTagName("meta");for(let w=0;w<g.length;w++){const b=g[w],v=["itemprop","property","name"].map(A=>b.getAttribute(A)).filter(A=>A?f.includes(A):!1);if(v.length&&v){const A=b.getAttribute("content");if(A)return A}}return""}function o(){let f=r("name","og:site_name","og:title","twitter:title");return f||(f=e.title),f}function i(){return r("description","og:description","twitter:description","keywords")}const s=o(),a=i(),c=t.origin,l=n();return{description:a,url:c,icons:l,name:s}}ym=hd.getWindowMetadata=wS;var ks={},bS=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),vm="%[a-f0-9]{2}",Y1=new RegExp("("+vm+")|([^%]+?)","gi"),J1=new RegExp("("+vm+")+","gi");function Sf(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],Sf(n),Sf(r))}function mS(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(Y1)||[],n=1;n<t.length;n++)e=Sf(t,n).join(""),t=e.match(Y1)||[];return e}}function yS(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=J1.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{var r=mS(n[0]);r!==n[0]&&(t[n[0]]=r)}n=J1.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),i=0;i<o.length;i++){var s=o[i];e=e.replace(new RegExp(s,"g"),t[s])}return e}var vS=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return yS(e)}},xS=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];const n=e.indexOf(t);return n===-1?[e]:[e.slice(0,n),e.slice(n+t.length)]},AS=function(e,t){for(var n={},r=Object.keys(e),o=Array.isArray(t),i=0;i<r.length;i++){var s=r[i],a=e[s];(o?t.indexOf(s)!==-1:t(s,a,e))&&(n[s]=a)}return n};(function(e){const t=bS,n=vS,r=xS,o=AS,i=m=>m==null,s=Symbol("encodeFragmentIdentifier");function a(m){switch(m.arrayFormat){case"index":return C=>(x,E)=>{const P=x.length;return E===void 0||m.skipNull&&E===null||m.skipEmptyString&&E===""?x:E===null?[...x,[u(C,m),"[",P,"]"].join("")]:[...x,[u(C,m),"[",u(P,m),"]=",u(E,m)].join("")]};case"bracket":return C=>(x,E)=>E===void 0||m.skipNull&&E===null||m.skipEmptyString&&E===""?x:E===null?[...x,[u(C,m),"[]"].join("")]:[...x,[u(C,m),"[]=",u(E,m)].join("")];case"colon-list-separator":return C=>(x,E)=>E===void 0||m.skipNull&&E===null||m.skipEmptyString&&E===""?x:E===null?[...x,[u(C,m),":list="].join("")]:[...x,[u(C,m),":list=",u(E,m)].join("")];case"comma":case"separator":case"bracket-separator":{const C=m.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(E,P)=>P===void 0||m.skipNull&&P===null||m.skipEmptyString&&P===""?E:(P=P===null?"":P,E.length===0?[[u(x,m),C,u(P,m)].join("")]:[[E,u(P,m)].join(m.arrayFormatSeparator)])}default:return C=>(x,E)=>E===void 0||m.skipNull&&E===null||m.skipEmptyString&&E===""?x:E===null?[...x,u(C,m)]:[...x,[u(C,m),"=",u(E,m)].join("")]}}function c(m){let C;switch(m.arrayFormat){case"index":return(x,E,P)=>{if(C=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!C){P[x]=E;return}P[x]===void 0&&(P[x]={}),P[x][C[1]]=E};case"bracket":return(x,E,P)=>{if(C=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!C){P[x]=E;return}if(P[x]===void 0){P[x]=[E];return}P[x]=[].concat(P[x],E)};case"colon-list-separator":return(x,E,P)=>{if(C=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!C){P[x]=E;return}if(P[x]===void 0){P[x]=[E];return}P[x]=[].concat(P[x],E)};case"comma":case"separator":return(x,E,P)=>{const h=typeof E=="string"&&E.includes(m.arrayFormatSeparator),D=typeof E=="string"&&!h&&f(E,m).includes(m.arrayFormatSeparator);E=D?f(E,m):E;const $=h||D?E.split(m.arrayFormatSeparator).map(F=>f(F,m)):E===null?E:f(E,m);P[x]=$};case"bracket-separator":return(x,E,P)=>{const h=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!h){P[x]=E&&f(E,m);return}const D=E===null?[]:E.split(m.arrayFormatSeparator).map($=>f($,m));if(P[x]===void 0){P[x]=D;return}P[x]=[].concat(P[x],D)};default:return(x,E,P)=>{if(P[x]===void 0){P[x]=E;return}P[x]=[].concat(P[x],E)}}}function l(m){if(typeof m!="string"||m.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(m,C){return C.encode?C.strict?t(m):encodeURIComponent(m):m}function f(m,C){return C.decode?n(m):m}function g(m){return Array.isArray(m)?m.sort():typeof m=="object"?g(Object.keys(m)).sort((C,x)=>Number(C)-Number(x)).map(C=>m[C]):m}function w(m){const C=m.indexOf("#");return C!==-1&&(m=m.slice(0,C)),m}function b(m){let C="";const x=m.indexOf("#");return x!==-1&&(C=m.slice(x)),C}function v(m){m=w(m);const C=m.indexOf("?");return C===-1?"":m.slice(C+1)}function A(m,C){return C.parseNumbers&&!Number.isNaN(Number(m))&&typeof m=="string"&&m.trim()!==""?m=Number(m):C.parseBooleans&&m!==null&&(m.toLowerCase()==="true"||m.toLowerCase()==="false")&&(m=m.toLowerCase()==="true"),m}function _(m,C){C=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},C),l(C.arrayFormatSeparator);const x=c(C),E=Object.create(null);if(typeof m!="string"||(m=m.trim().replace(/^[?#&]/,""),!m))return E;for(const P of m.split("&")){if(P==="")continue;let[h,D]=r(C.decode?P.replace(/\+/g," "):P,"=");D=D===void 0?null:["comma","separator","bracket-separator"].includes(C.arrayFormat)?D:f(D,C),x(f(h,C),D,E)}for(const P of Object.keys(E)){const h=E[P];if(typeof h=="object"&&h!==null)for(const D of Object.keys(h))h[D]=A(h[D],C);else E[P]=A(h,C)}return C.sort===!1?E:(C.sort===!0?Object.keys(E).sort():Object.keys(E).sort(C.sort)).reduce((P,h)=>{const D=E[h];return D&&typeof D=="object"&&!Array.isArray(D)?P[h]=g(D):P[h]=D,P},Object.create(null))}e.extract=v,e.parse=_,e.stringify=(m,C)=>{if(!m)return"";C=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},C),l(C.arrayFormatSeparator);const x=D=>C.skipNull&&i(m[D])||C.skipEmptyString&&m[D]==="",E=a(C),P={};for(const D of Object.keys(m))x(D)||(P[D]=m[D]);const h=Object.keys(P);return C.sort!==!1&&h.sort(C.sort),h.map(D=>{const $=m[D];return $===void 0?"":$===null?u(D,C):Array.isArray($)?$.length===0&&C.arrayFormat==="bracket-separator"?u(D,C)+"[]":$.reduce(E(D),[]).join("&"):u(D,C)+"="+u($,C)}).filter(D=>D.length>0).join("&")},e.parseUrl=(m,C)=>{C=Object.assign({decode:!0},C);const[x,E]=r(m,"#");return Object.assign({url:x.split("?")[0]||"",query:_(v(m),C)},C&&C.parseFragmentIdentifier&&E?{fragmentIdentifier:f(E,C)}:{})},e.stringifyUrl=(m,C)=>{C=Object.assign({encode:!0,strict:!0,[s]:!0},C);const x=w(m.url).split("?")[0]||"",E=e.extract(m.url),P=e.parse(E,{sort:!1}),h=Object.assign(P,m.query);let D=e.stringify(h,C);D&&(D=`?${D}`);let $=b(m.url);return m.fragmentIdentifier&&($=`#${C[s]?u(m.fragmentIdentifier,C):m.fragmentIdentifier}`),`${x}${D}${$}`},e.pick=(m,C,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[s]:!1},x);const{url:E,query:P,fragmentIdentifier:h}=e.parseUrl(m,x);return e.stringifyUrl({url:E,query:o(P,C),fragmentIdentifier:h},x)},e.exclude=(m,C,x)=>{const E=Array.isArray(C)?P=>!C.includes(P):(P,h)=>!C(P,h);return e.pick(m,E,x)}})(ks);const CS={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},ES=":";function MT(e){const[t,n]=e.split(ES);return{namespace:t,reference:n}}function $T(e,t=[]){const n=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;const o=e[r];n.push(...o.accounts)}),n}function xm(e,t){return e.includes(":")?[e]:t.chains||[]}const Am="base10",Ot="base16",Pf="base64pad",pd="utf8",Cm=0,ta=1,_S=0,X1=1,Df=12,gd=32;function NT(){const e=ud.generateKeyPair();return{privateKey:ln(e.secretKey,Ot),publicKey:ln(e.publicKey,Ot)}}function UT(){const e=gl.randomBytes(gd);return ln(e,Ot)}function FT(e,t){const n=ud.sharedKey(en(e,Ot),en(t,Ot),!0),r=new dE(yl.SHA256,n).expand(gd);return ln(r,Ot)}function LT(e){const t=yl.hash(en(e,Ot));return ln(t,Ot)}function jT(e){const t=yl.hash(en(e,pd));return ln(t,Ot)}function SS(e){return en(`${e}`,Am)}function Al(e){return Number(ln(e,Am))}function WT(e){const t=SS(typeof e.type<"u"?e.type:Cm);if(Al(t)===ta&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?en(e.senderPublicKey,Ot):void 0,r=typeof e.iv<"u"?en(e.iv,Ot):gl.randomBytes(Df),o=new cd.ChaCha20Poly1305(en(e.symKey,Ot)).seal(r,en(e.message,pd));return PS({type:t,sealed:o,iv:r,senderPublicKey:n})}function zT(e){const t=new cd.ChaCha20Poly1305(en(e.symKey,Ot)),{sealed:n,iv:r}=Em(e.encoded),o=t.open(r,n);if(o===null)throw new Error("Failed to decrypt");return ln(o,pd)}function PS(e){if(Al(e.type)===ta){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return ln(R1([e.type,e.senderPublicKey,e.iv,e.sealed]),Pf)}return ln(R1([e.type,e.iv,e.sealed]),Pf)}function Em(e){const t=en(e,Pf),n=t.slice(_S,X1),r=X1;if(Al(n)===ta){const a=r+gd,c=a+Df,l=t.slice(r,a),u=t.slice(a,c),f=t.slice(c);return{type:n,sealed:f,iv:u,senderPublicKey:l}}const o=r+Df,i=t.slice(r,o),s=t.slice(o);return{type:n,sealed:s,iv:i}}function HT(e,t){const n=Em(e);return DS({type:Al(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?ln(n.senderPublicKey,Ot):void 0,receiverPublicKey:t==null?void 0:t.receiverPublicKey})}function DS(e){const t=(e==null?void 0:e.type)||Cm;if(t===ta){if(typeof(e==null?void 0:e.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(e==null?void 0:e.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e==null?void 0:e.senderPublicKey,receiverPublicKey:e==null?void 0:e.receiverPublicKey}}function VT(e){return e.type===ta&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}var IS=Object.defineProperty,ep=Object.getOwnPropertySymbols,TS=Object.prototype.hasOwnProperty,OS=Object.prototype.propertyIsEnumerable,tp=(e,t,n)=>t in e?IS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,np=(e,t)=>{for(var n in t||(t={}))TS.call(t,n)&&tp(e,n,t[n]);if(ep)for(var n of ep(t))OS.call(t,n)&&tp(e,n,t[n]);return e};const BS="ReactNative",$t={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},kS="js";function _m(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function wd(){return!bm()&&!!dd()&&navigator.product===BS}function bd(){return!_m()&&!!dd()}function na(){return wd()?$t.reactNative:_m()?$t.node:bd()?$t.browser:$t.unknown}function RS(e,t){let n=ks.parse(e);return n=np(np({},n),t),e=ks.stringify(n),e}function qT(){return ym()||{name:"",description:"",url:"",icons:[""]}}function MS(){if(na()===$t.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const e=P_();if(e===null)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function $S(){var e;const t=na();return t===$t.browser?[t,((e=mm())==null?void 0:e.host)||"unknown"].join(":"):t}function NS(e,t,n){const r=MS(),o=$S();return[[e,t].join("-"),[kS,n].join("-"),r,o].join("/")}function GT({protocol:e,version:t,relayUrl:n,sdkVersion:r,auth:o,projectId:i,useOnCloseEvent:s}){const a=n.split("?"),c=NS(e,t,r),l={auth:o,ua:c,projectId:i,useOnCloseEvent:s||void 0},u=RS(a[1]||"",l);return a[0]+"?"+u}function $r(e,t){return e.filter(n=>t.includes(n)).length===e.length}function KT(e){return Object.fromEntries(e.entries())}function QT(e){return new Map(Object.entries(e))}function ZT(e=jr.FIVE_MINUTES,t){const n=jr.toMiliseconds(e||jr.FIVE_MINUTES);let r,o,i;return{resolve:s=>{i&&r&&(clearTimeout(i),r(s))},reject:s=>{i&&o&&(clearTimeout(i),o(s))},done:()=>new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(t))},n),r=s,o=a})}}function YT(e,t,n){return new Promise(async(r,o)=>{const i=setTimeout(()=>o(new Error(n)),t);try{const s=await e;r(s)}catch(s){o(s)}clearTimeout(i)})}function Sm(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function JT(e){return Sm("topic",e)}function XT(e){return Sm("id",e)}function eO(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if(t==="topic"&&typeof n=="string")r.topic=n;else if(t==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);return r}function tO(e,t){return jr.fromMiliseconds((t||Date.now())+jr.toMiliseconds(e))}function nO(e){return Date.now()>=jr.toMiliseconds(e)}function rO(e,t){return`${e}${t?`:${t}`:""}`}function lu(e=[],t=[]){return[...new Set([...e,...t])]}async function iO({id:e,topic:t,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let o=r==null?void 0:r.href;if(typeof o!="string")return;o.endsWith("/")&&(o=o.slice(0,-1));const i=`${o}/wc?requestId=${e}&sessionTopic=${t}`,s=na();s===$t.browser?i.startsWith("https://")?window.open(i,"_blank","noreferrer noopener"):window.open(i,"_self","noreferrer noopener"):s===$t.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(i)}catch(r){console.error(r)}}const US="irn";function oO(e){return(e==null?void 0:e.relay)||{protocol:US}}function sO(e){const t=CS[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var FS=Object.defineProperty,rp=Object.getOwnPropertySymbols,LS=Object.prototype.hasOwnProperty,jS=Object.prototype.propertyIsEnumerable,ip=(e,t,n)=>t in e?FS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,WS=(e,t)=>{for(var n in t||(t={}))LS.call(t,n)&&ip(e,n,t[n]);if(rp)for(var n of rp(t))jS.call(t,n)&&ip(e,n,t[n]);return e};function zS(e,t="-"){const n={},r="relay"+t;return Object.keys(e).forEach(o=>{if(o.startsWith(r)){const i=o.replace(r,""),s=e[o];n[i]=s}}),n}function aO(e){const t=e.indexOf(":"),n=e.indexOf("?")!==-1?e.indexOf("?"):void 0,r=e.substring(0,t),o=e.substring(t+1,n).split("@"),i=typeof n<"u"?e.substring(n):"",s=ks.parse(i);return{protocol:r,topic:HS(o[0]),version:parseInt(o[1],10),symKey:s.symKey,relay:zS(s)}}function HS(e){return e.startsWith("//")?e.substring(2):e}function VS(e,t="-"){const n="relay",r={};return Object.keys(e).forEach(o=>{const i=n+t+o;e[o]&&(r[i]=e[o])}),r}function cO(e){return`${e.protocol}:${e.topic}@${e.version}?`+ks.stringify(WS({symKey:e.symKey},VS(e.relay)))}var qS=Object.defineProperty,GS=Object.defineProperties,KS=Object.getOwnPropertyDescriptors,op=Object.getOwnPropertySymbols,QS=Object.prototype.hasOwnProperty,ZS=Object.prototype.propertyIsEnumerable,sp=(e,t,n)=>t in e?qS(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,YS=(e,t)=>{for(var n in t||(t={}))QS.call(t,n)&&sp(e,n,t[n]);if(op)for(var n of op(t))ZS.call(t,n)&&sp(e,n,t[n]);return e},JS=(e,t)=>GS(e,KS(t));function bo(e){const t=[];return e.forEach(n=>{const[r,o]=n.split(":");t.push(`${r}:${o}`)}),t}function XS(e){const t=[];return Object.values(e).forEach(n=>{t.push(...bo(n.accounts))}),t}function eP(e,t){const n=[];return Object.values(e).forEach(r=>{bo(r.accounts).includes(t)&&n.push(...r.methods)}),n}function tP(e,t){const n=[];return Object.values(e).forEach(r=>{bo(r.accounts).includes(t)&&n.push(...r.events)}),n}function lO(e,t){const n=fP(e,t);if(n)throw new Error(n.message);const r={};for(const[o,i]of Object.entries(e))r[o]={methods:i.methods,events:i.events,chains:i.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function Pm(e){return e.includes(":")}function nP(e){return Pm(e)?e.split(":")[0]:e}function Dm(e){var t,n,r;const o={};if(!md(e))return o;for(const[i,s]of Object.entries(e)){const a=Pm(i)?[i]:s.chains,c=s.methods||[],l=s.events||[],u=nP(i);o[u]=JS(YS({},o[u]),{chains:lu(a,(t=o[u])==null?void 0:t.chains),methods:lu(c,(n=o[u])==null?void 0:n.methods),events:lu(l,(r=o[u])==null?void 0:r.events)})}return o}const rP={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},iP={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function rr(e,t){const{message:n,code:r}=iP[e];return{message:t?`${n} ${t}`:n,code:r}}function Ji(e,t){const{message:n,code:r}=rP[e];return{message:t?`${n} ${t}`:n,code:r}}function Cl(e,t){return Array.isArray(e)?typeof t<"u"&&e.length?e.every(t):!0:!1}function md(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function Wr(e){return typeof e>"u"}function qt(e,t){return t&&Wr(e)?!0:typeof e=="string"&&!!e.trim().length}function yd(e,t){return t&&Wr(e)?!0:typeof e=="number"&&!isNaN(e)}function uO(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),o=Object.keys(n);let i=!0;return $r(o,r)?(r.forEach(s=>{const{accounts:a,methods:c,events:l}=e.namespaces[s],u=bo(a),f=n[s];(!$r(xm(s,f),u)||!$r(f.methods,c)||!$r(f.events,l))&&(i=!1)}),i):!1}function yc(e){return qt(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function oP(e){if(qt(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const n=t[0]+":"+t[1];return!!t[2]&&yc(n)}}return!1}function fO(e){if(qt(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function dO(e){var t;return(t=e==null?void 0:e.proposer)==null?void 0:t.publicKey}function hO(e){return e==null?void 0:e.topic}function pO(e,t){let n=null;return qt(e==null?void 0:e.publicKey,!1)||(n=rr("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}function ap(e){let t=!0;return Cl(e)?e.length&&(t=e.every(n=>qt(n,!1))):t=!1,t}function sP(e,t,n){let r=null;return Cl(t)&&t.length?t.forEach(o=>{r||yc(o)||(r=Ji("UNSUPPORTED_CHAINS",`${n}, chain ${o} should be a string and conform to "namespace:chainId" format`))}):yc(e)||(r=Ji("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function aP(e,t,n){let r=null;return Object.entries(e).forEach(([o,i])=>{if(r)return;const s=sP(o,xm(o,i),`${t} ${n}`);s&&(r=s)}),r}function cP(e,t){let n=null;return Cl(e)?e.forEach(r=>{n||oP(r)||(n=Ji("UNSUPPORTED_ACCOUNTS",`${t}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=Ji("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function lP(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const o=cP(r==null?void 0:r.accounts,`${t} namespace`);o&&(n=o)}),n}function uP(e,t){let n=null;return ap(e==null?void 0:e.methods)?ap(e==null?void 0:e.events)||(n=Ji("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=Ji("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}function Im(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const o=uP(r,`${t}, namespace`);o&&(n=o)}),n}function gO(e,t,n){let r=null;if(e&&md(e)){const o=Im(e,t);o&&(r=o);const i=aP(e,t,n);i&&(r=i)}else r=rr("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}function fP(e,t){let n=null;if(e&&md(e)){const r=Im(e,t);r&&(n=r);const o=lP(e,t);o&&(n=o)}else n=rr("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function dP(e){return qt(e.protocol,!0)}function wO(e,t){let n=!1;return t&&!e?n=!0:e&&Cl(e)&&e.length&&e.forEach(r=>{n=dP(r)}),n}function bO(e){return typeof e=="number"}function mO(e){return typeof e<"u"&&typeof e!==null}function yO(e){return!(!e||typeof e!="object"||!e.code||!yd(e.code,!1)||!e.message||!qt(e.message,!1))}function vO(e){return!(Wr(e)||!qt(e.method,!1))}function xO(e){return!(Wr(e)||Wr(e.result)&&Wr(e.error)||!yd(e.id,!1)||!qt(e.jsonrpc,!1))}function AO(e){return!(Wr(e)||!qt(e.name,!1))}function CO(e,t){return!(!yc(t)||!XS(e).includes(t))}function EO(e,t,n){return qt(n,!1)?eP(e,t).includes(n):!1}function _O(e,t,n){return qt(n,!1)?tP(e,t).includes(n):!1}function SO(e,t,n){let r=null;const o=hP(e),i=pP(t),s=Object.keys(o),a=Object.keys(i),c=cp(Object.keys(e)),l=cp(Object.keys(t)),u=c.filter(f=>!l.includes(f));return u.length&&(r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),$r(s,a)||(r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(t).forEach(f=>{if(!f.includes(":")||r)return;const g=bo(t[f].accounts);g.includes(f)||(r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${f}
        Required: ${f}
        Approved: ${g.toString()}`))}),s.forEach(f=>{r||($r(o[f].methods,i[f].methods)?$r(o[f].events,i[f].events)||(r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${f}`)):r=rr("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${f}`))}),r}function hP(e){const t={};return Object.keys(e).forEach(n=>{var r;n.includes(":")?t[n]=e[n]:(r=e[n].chains)==null||r.forEach(o=>{t[o]={methods:e[n].methods,events:e[n].events}})}),t}function cp(e){return[...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function pP(e){const t={};return Object.keys(e).forEach(n=>{if(n.includes(":"))t[n]=e[n];else{const r=bo(e[n].accounts);r==null||r.forEach(o=>{t[o]={accounts:e[n].accounts.filter(i=>i.includes(`${o}:`)),methods:e[n].methods,events:e[n].events}})}}),t}function PO(e,t){return yd(e,!1)&&e<=t.max&&e>=t.min}function DO(){const e=na();return new Promise(t=>{switch(e){case $t.browser:t(gP());break;case $t.reactNative:t(wP());break;case $t.node:t(bP());break;default:t(!0)}})}function gP(){return bd()&&(navigator==null?void 0:navigator.onLine)}async function wP(){if(wd()&&typeof global<"u"&&global!=null&&global.NetInfo){const e=await(global==null?void 0:global.NetInfo.fetch());return e==null?void 0:e.isConnected}return!0}function bP(){return!0}function IO(e){switch(na()){case $t.browser:mP(e);break;case $t.reactNative:yP(e);break}}function mP(e){bd()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)))}function yP(e){wd()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(t=>e(t==null?void 0:t.isConnected)))}const uu={};class TO{static get(t){return uu[t]}static set(t,n){uu[t]=n}static delete(t){delete uu[t]}}var Tm="eip155",vP="store",Om="requestedChains",If="wallet_addEthereumChain",Xe,Lo,Ia,Tf,vd,Bm,Ta,Of,Bf,km,vc,xd,yi,Oo,xc,Ad,Ac,Cd,Cc,Ed,xP=class extends c0{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),Pt(this,Ia),Pt(this,vd),Pt(this,Ta),Pt(this,Bf),Pt(this,vc),Pt(this,yi),Pt(this,xc),Pt(this,Ac),Pt(this,Cc),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,Pt(this,Xe,void 0),Pt(this,Lo,void 0),this.onAccountsChanged=t=>{t.length===0?this.emit("disconnect"):this.emit("change",{account:rn(t[0])})},this.onChainChanged=t=>{const n=Number(t),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{ct(this,yi,Oo).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},ct(this,Ia,Tf).call(this)}async connect({chainId:e,pairingTopic:t}={}){var n,r,o,i,s;try{let a=e;if(!a){const b=(n=this.storage)==null?void 0:n.getItem(vP),v=(i=(o=(r=b==null?void 0:b.state)==null?void 0:r.data)==null?void 0:o.chain)==null?void 0:i.id;v&&!this.isChainUnsupported(v)?a=v:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const c=await this.getProvider();ct(this,Bf,km).call(this);const l=ct(this,Ta,Of).call(this);if(c.session&&l&&await c.disconnect(),!c.session||l){const b=this.chains.filter(v=>v.id!==a).map(v=>v.id);this.emit("message",{type:"connecting"}),await c.connect({pairingTopic:t,chains:[a],optionalChains:b.length?b:void 0}),ct(this,yi,Oo).call(this,this.chains.map(({id:v})=>v))}const u=await c.enable(),f=rn(u[0]),g=await this.getChainId(),w=this.isChainUnsupported(g);return{account:f,chain:{id:g,unsupported:w}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new It(a):a}}async disconnect(){const e=await this.getProvider();try{await e.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{ct(this,vc,xd).call(this),ct(this,yi,Oo).call(this,[])}}async getAccount(){const{accounts:e}=await this.getProvider();return rn(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return We(this,Xe)||await ct(this,Ia,Tf).call(this),e&&await this.switchChain(e),We(this,Xe)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),r=this.chains.find(o=>o.id===e);if(!t)throw new Error("provider is required.");return k0({account:n,chain:r,transport:D0(t)})}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),n=ct(this,Ta,Of).call(this);if(!e)return!1;if(n&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){var n,r;const t=this.chains.find(o=>o.id===e);if(!t)throw new zn(new Error("chain not found on connector."));try{const o=await this.getProvider(),i=ct(this,Ac,Cd).call(this),s=ct(this,Cc,Ed).call(this);if(!i.includes(e)&&s.includes(If)){await o.request({method:If,params:[{chainId:De(t.id),blockExplorerUrls:[(r=(n=t.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const c=ct(this,xc,Ad).call(this);c.push(e),ct(this,yi,Oo).call(this,c)}return await o.request({method:"wallet_switchEthereumChain",params:[{chainId:De(e)}]}),t}catch(o){const i=typeof o=="string"?o:o==null?void 0:o.message;throw/user rejected request/i.test(i)?new It(o):new zn(o)}}};Xe=new WeakMap;Lo=new WeakMap;Ia=new WeakSet;Tf=async function(){return!We(this,Lo)&&typeof window<"u"&&Zo(this,Lo,ct(this,vd,Bm).call(this)),We(this,Lo)};vd=new WeakSet;Bm=async function(){const{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:n}=await fs(()=>import("./index.es-c56c52d2.js"),["assets/index.es-c56c52d2.js","assets/events-10f28eca.js"]),[r,...o]=this.chains.map(({id:i})=>i);if(r){const{projectId:i,showQrModal:s=!0,qrModalOptions:a,metadata:c,relayUrl:l}=this.options;Zo(this,Xe,await e.init({showQrModal:s,qrModalOptions:a,projectId:i,optionalMethods:n,optionalEvents:t,chains:[r],optionalChains:o.length?o:void 0,rpcMap:Object.fromEntries(this.chains.map(u=>[u.id,u.rpcUrls.default.http[0]])),metadata:c,relayUrl:l}))}};Ta=new WeakSet;Of=function(){if(ct(this,Cc,Ed).call(this).includes(If)||!this.options.isNewChainsStale)return!1;const t=ct(this,xc,Ad).call(this),n=this.chains.map(({id:o})=>o),r=ct(this,Ac,Cd).call(this);return r.length&&!r.some(o=>n.includes(o))?!1:!n.every(o=>t.includes(o))};Bf=new WeakSet;km=function(){We(this,Xe)&&(ct(this,vc,xd).call(this),We(this,Xe).on("accountsChanged",this.onAccountsChanged),We(this,Xe).on("chainChanged",this.onChainChanged),We(this,Xe).on("disconnect",this.onDisconnect),We(this,Xe).on("session_delete",this.onDisconnect),We(this,Xe).on("display_uri",this.onDisplayUri),We(this,Xe).on("connect",this.onConnect))};vc=new WeakSet;xd=function(){We(this,Xe)&&(We(this,Xe).removeListener("accountsChanged",this.onAccountsChanged),We(this,Xe).removeListener("chainChanged",this.onChainChanged),We(this,Xe).removeListener("disconnect",this.onDisconnect),We(this,Xe).removeListener("session_delete",this.onDisconnect),We(this,Xe).removeListener("display_uri",this.onDisplayUri),We(this,Xe).removeListener("connect",this.onConnect))};yi=new WeakSet;Oo=function(e){var t;(t=this.storage)==null||t.setItem(Om,e)};xc=new WeakSet;Ad=function(){var e;return((e=this.storage)==null?void 0:e.getItem(Om))??[]};Ac=new WeakSet;Cd=function(){var r,o,i;if(!We(this,Xe))return[];const e=(r=We(this,Xe).session)==null?void 0:r.namespaces;return e?((i=(o=Dm(e)[Tm])==null?void 0:o.chains)==null?void 0:i.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};Cc=new WeakSet;Ed=function(){var r,o;if(!We(this,Xe))return[];const e=(r=We(this,Xe).session)==null?void 0:r.namespaces;return e?((o=Dm(e)[Tm])==null?void 0:o.methods)??[]:[]};function AP({projectId:e}){return function(n){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(n.id))return null;const o=`${w9}/v1/?chainId=${bn}:${n.id}&projectId=${e}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[o]}}},rpcUrls:{http:[o]}}}}function Rm({projectId:e,chains:t,appName:n}){const{publicClient:r,webSocketPublicClient:o}=F8(t,[AP({projectId:e})]);return J8({autoConnect:!0,connectors:[new xP({chains:t,options:{projectId:e,showQrModal:!1}}),new Cw({chains:t,options:{shimDisconnect:!0}}),new B9({chains:t,options:{appName:n}})],publicClient:r,webSocketPublicClient:o})}let mn;function Mm(e){return mn||(mn=new C9({...e,_sdkVersion:`vue-wagmi-${Zb}`})),mn}function $m(){if(!mn)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" composable');async function e(n){await(mn==null?void 0:mn.open(n))}async function t(){await(mn==null?void 0:mn.close())}return Rs({open:e,close:t})}const _d=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},CP={setup(){let e=vn(),t=$m(),n=Kt(!1);function r(){t.open()}return U0(async o=>{o.isConnected==!0?n.value=!0:n.value=!1}),{account:e,openWalletModal:r,accountActive:n}}},EP={class:"navbar"},_P=Mc('<a style="cursor:pointer;" href="/"><div class="logo"><h2>Verse Labs</h2></div></a><div class="links"><ul><li><a href="/">Get Ticket</a></li><li><a href="/tickets">View Tickets</a></li></ul></div>',2),SP={class:"wallet"};function PP(e,t,n,r,o,i){const s=o3("w3m-button");return je(),He("div",EP,[_P,K("div",SP,[r.accountActive?Je("",!0):(je(),He("button",{key:0,class:"btn btn-connect",onClick:t[0]||(t[0]=(...a)=>r.openWalletModal&&r.openWalletModal(...a))},"Connect Wallet")),r.accountActive?(je(),og(s,{key:1})):Je("",!0)])])}const DP=_d(CP,[["render",PP]]);const IP=K("header",null,null,-1),lp="b30bc40c0cdef6000cd5066be1febf74",TP={__name:"App",setup(e){const t=[kg],n=Rm({chains:t,projectId:lp,appName:"Verse Labs"});return Mm({tokens:{137:{address:"0xc708d6f2153933daa50b2d0758955be0a93a8fec",image:"https://assets.coingecko.com/coins/images/28424/small/verselogo.png?1670461811"}},includeWalletIds:["107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c","c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96","19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"],wagmiConfig:n,projectId:lp,chains:t}),(r,o)=>(je(),He(Qt,null,[IP,K("body",null,[vt(DP),vt(Ur(xg))])],64))}},fu=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}],OP=[{inputs:[{internalType:"address",name:"giftAddress",type:"address"}],name:"buyScratchTicket",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"claimPrize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_vrfCoordinatorV2Address",type:"address"},{internalType:"uint256",name:"_maxTickets",type:"uint256"},{internalType:"uint256",name:"_ticketCost",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"address",name:"have",type:"address"},{internalType:"address",name:"want",type:"address"}],name:"OnlyCoordinatorCanFulfill",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"drawId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"requestId",type:"uint256"},{indexed:!0,internalType:"address",name:"ticketReceiver",type:"address"}],name:"DrawRequest",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"uint256",name:"requestId",type:"uint256"},{internalType:"uint256[]",name:"randomWords",type:"uint256[]"}],name:"rawFulfillRandomWords",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"drawId",type:"uint256"},{indexed:!0,internalType:"uint256",name:"requestId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"maxNumber",type:"uint256"},{indexed:!1,internalType:"uint32",name:"result",type:"uint32"}],name:"requestFulfilled",type:"event"},{inputs:[{internalType:"uint256[]",name:"keys",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"setPrizes",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"claimedPrize",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"drawId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"drawIdToRequestId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"prizeMapping",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"requestIdToDrawing",outputs:[{internalType:"uint32",name:"result",type:"uint32"},{internalType:"uint256",name:"maximumNumber",type:"uint256"},{internalType:"uint256",name:"drawId",type:"uint256"},{internalType:"address payable",name:"ticketReceiver",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ticketCost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"ticketsRemaining",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],BP="/assets/scratch_advertisement-8ed941f5.png";const Nm="b30bc40c0cdef6000cd5066be1febf74",Um=[kg],kP=Rm({chains:Um,projectId:Nm,appName:"Verse Labs"}),du="0xa38a1a7e437ef9c27077a62e0e9796be171e164d";Mm({tokens:{137:{address:"0xc708d6f2153933daa50b2d0758955be0a93a8fec",image:"https://assets.coingecko.com/coins/images/28424/small/verselogo.png?1670461811"}},includeWalletIds:["107bb20463699c4e614d3a2fb7b961e66f48774cb8f6d6c1aee789853280972c","c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96","19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"],wagmiConfig:kP,projectId:Nm,chains:Um});const RP={setup(){let e=vn(),t=$m(),n=Kt(!1),r=Kt(!0),o=Kt(!1),i=Kt(0),s=Kt(0),a=Kt(!1),c=Kt(""),l=Kt(0),u=Kt(!1);function f(){o.value=!o.value}async function g(m){let C=3e21;m&&(C=3e28),c.value="waiting for wallet approval..",a.value=!0;const{hash:x}=await Kh({address:"0xc708d6f2153933daa50b2d0758955be0a93a8fec",abi:fu,functionName:"approve",chainId:137,args:[du,C]});c.value="waiting for transaction to finish..",await Qh({hash:x}),b()}async function w(m){try{c.value="waiting for wallet approval..",a.value=!0;let C=vn().address;m&&m.length>0&&(C=m);const{hash:x}=await Kh({address:du,abi:OP,functionName:"buyScratchTicket",chainId:137,args:[C]});c.value="waiting for tx confirmation",await Qh({hash:x});let E=20;const P=setInterval(()=>{E--,c.value=`payment success! issuing ticket to your wallet and awaiting final confirmation. Expected arrival in ${E} seconds!`,E<=0&&(clearInterval(P),a.value=!1,l.value=4)},1e3)}catch(C){a.value=!1,console.log(C)}}async function b(){try{a.value=!0;const m=await Yu({address:"0xc708d6f2153933daa50b2d0758955be0a93a8fec",abi:fu,functionName:"allowance",args:[vn().address,du]});if(a.value=!1,m){let C=m.toString();s.value=parseFloat(C)/Math.pow(10,18),i.value>=3e3&&l.value<3&&(l.value=3)}}catch(m){console.log(m),a.value=!1}}async function v(){try{a.value=!0;const m=await Yu({address:"0xc708d6f2153933daa50b2d0758955be0a93a8fec",abi:fu,functionName:"balanceOf",args:[vn().address]});if(a.value=!1,m){let C=m.toString();i.value=parseFloat(C)/Math.pow(10,18),i.value>=3e3&&l.value<2&&(l.value=2,b())}}catch(m){console.log(m),a.value=!1}}Gw(m=>{m.chain&&m.chain.id!=137?r.value=!1:r.value=!0}),U0(async()=>{vn().address&&vn().address.length!=null?(n.value=!0,l.value<1&&(l.value=1),v()):(console.log("disable account"),n.value=!1,l.value=0)});function A(){t.open(),f()}function _(){u.value=!u.value}return{getBalance:v,connectAndClose:A,account:e,buyStep:l,modal:t,accountActive:n,correctNetwork:r,approve:g,modalActive:o,toggleModal:f,modalLoading:a,verseBalance:i,verseAllowance:s,loadingMessage:c,purchaseTicket:w,giftTicket:u,toggleGift:_}}},Ge=e=>(jp("data-v-2efdd51f"),e=e(),Wp(),e),MP={key:0,class:"backdrop"},$P={key:0,class:"modal"},NP={key:0},UP={style:{"text-align":"center"}},FP=Ge(()=>K("div",{style:{"text-align":"center"}},[K("div",{class:"lds-ring"},[K("div"),K("div"),K("div"),K("div")])],-1)),LP={key:1},jP={class:"iholder"},WP=Ge(()=>K("h3",null,"Connect Wallet",-1)),zP=Ge(()=>K("p",null,"Connect your wallet to get started",-1)),HP=Ge(()=>K("button",{class:"btn btn-modal verse"},"Connect Wallet",-1)),VP=[HP],qP={key:1,class:"modal"},GP={key:0},KP={style:{"text-align":"center"}},QP=Ge(()=>K("div",{style:{"text-align":"center"}},[K("div",{class:"lds-ring"},[K("div"),K("div"),K("div"),K("div")])],-1)),ZP={key:1},YP={class:"iholder"},JP=Ge(()=>K("h3",null,"Purchase Ticket",-1)),XP=Ge(()=>K("p",null,"You need 3000 Verse on Polygon in order to purchase a lottery ticket",-1)),eD=Ge(()=>K("br",null,null,-1)),tD=Mc('<a class="" target="_blank" href="https://verse.bitcoin.com/" data-v-2efdd51f><button class="btn btn-modal verse" data-v-2efdd51f>Buy on Verse Dex</button></a><a class="" target="_blank" href="https://wallet.polygon.technology/polygon/bridge" data-v-2efdd51f><button class="btn btn-modal uniswap" data-v-2efdd51f>Bridge Verse from Ethereum</button></a><p style="color:white;" data-v-2efdd51f><small style="color:white;" data-v-2efdd51f>Need more help or want to purchase Verse by Credit Card? Learn more about getting Verse at our <a target="blank" style="text-decoration:none;color:#ffaa00;" href="https://www.bitcoin.com/get-started/how-to-buy-verse/" data-v-2efdd51f>Verse Buying Guide</a></small></p>',3),nD={key:2,class:"modal"},rD={class:"iholder"},iD={key:0},oD={style:{"text-align":"center"}},sD=Ge(()=>K("div",{style:{"text-align":"center"}},[K("div",{class:"lds-ring"},[K("div"),K("div"),K("div"),K("div")])],-1)),aD={key:1},cD=Ge(()=>K("h3",null,"Purchase Step 1/2",-1)),lD=Ge(()=>K("p",null,[jt("You need to set approval for 3000 verse from your wallet, this approval is used to purchase your ticket. "),K("br"),K("br"),jt("Alternatively you can choose to set an unlimited allowance, this way you can skip this step on your next purchase.")],-1)),uD=Ge(()=>K("button",{class:"btn btn-modal verse"},"Approve 3000 Verse",-1)),fD=[uD],dD=Ge(()=>K("button",{class:"btn btn-modal uniswap"},"Set infinite approval",-1)),hD=[dD],pD=Ge(()=>K("p",{style:{color:"white"}},[K("small",{style:{color:"white"}},[jt("Approvals are part of the default contract that Polygon tokens use. Learn more at "),K("a",{target:"blank",style:{"text-decoration":"none",color:"#ffaa00"},href:"https://revoke.cash/learn/approvals/what-are-token-approvals"},"the token approval faq")])],-1)),gD={key:3,class:"modal"},wD={class:"iholder"},bD={key:0},mD={style:{"text-align":"center"}},yD=Ge(()=>K("div",{style:{"text-align":"center"}},[K("div",{class:"lds-ring"},[K("div"),K("div"),K("div"),K("div")])],-1)),vD={key:1},xD=Ge(()=>K("h3",null,"Purchase Step 2/2",-1)),AD=Ge(()=>K("p",null,[jt("It seems that you have 3000 Verse in your wallet and the contract approval has been set! "),K("br"),K("br"),jt("Choose if you want to buy a ticket for yourself or a friend.")],-1)),CD=Ge(()=>K("button",{class:"btn btn-modal verse"},"Purchase Ticket for myself",-1)),ED=[CD],_D={class:"",target:"_blank"},SD=Ge(()=>K("hr",{style:{"margin-top":"20px","border-color":"black"}},null,-1)),PD={key:0,class:"p-gift"},DD={key:0,class:"btn btn-modal uniswap"},ID=Ge(()=>K("p",{style:{color:"white"}},[K("small",{style:{color:"white"}},[jt("Approvals are part of the default contract that Polygon tokens use. Learn more at "),K("a",{target:"blank",style:{"text-decoration":"none",color:"#ffaa00"},href:"https://revoke.cash/learn/approvals/what-are-token-approvals"},"the token approval faq")])],-1)),TD={key:4,class:"modal"},OD={class:"iholder"},BD={key:0},kD={style:{"text-align":"center"}},RD=Ge(()=>K("div",{style:{"text-align":"center"}},[K("div",{class:"lds-ring"},[K("div"),K("div"),K("div"),K("div")])],-1)),MD={key:1},$D=Ge(()=>K("h3",null,"Purchase Completed",-1)),ND=Ge(()=>K("p",null,"Time to scratch your ticket!",-1)),UD=Ge(()=>K("a",{class:"",href:"/tickets"},[K("button",{class:"btn btn-modal verse"},"View your tickets!")],-1)),FD=[$D,ND,UD],LD={key:1,class:"wrongNetworkWarning"},jD={class:"page"},WD={class:"float-holder clearfix"},zD={class:"card-info"},HD=Mc('<h2 data-v-2efdd51f>Scratch &amp; Win</h2><h3 class="tit" style="margin-top:10px;margin-bottom:20px;" data-v-2efdd51f>On-Chain Scratch Tickets Powered by Verse</h3><div class="clearfix" data-v-2efdd51f><div class="bubble" data-v-2efdd51f><p data-v-2efdd51f>Scratch Tickets</p></div><div class="bubble" data-v-2efdd51f><p data-v-2efdd51f>Entry: 3000 Verse</p></div><div class="bubble" data-v-2efdd51f><p data-v-2efdd51f>Jackpot 100.000 Verse</p></div><div class="bubble" data-v-2efdd51f><p data-v-2efdd51f>100 tickets available</p></div></div><p class="subtitle" style="font-weight:300;margin-bottom:20px;padding-left:0;" data-v-2efdd51f>Enjoy the thrill of instant wins and discover your fate with our scratch tickets. Instant payouts, secured by the Polygon blockchain.</p>',4),VD=Ge(()=>K("i",{class:"fa-solid fa-gift"},null,-1)),qD=Mc('<a href="/tickets" data-v-2efdd51f><button class="btn-view" data-v-2efdd51f><i class="fa-solid fa-list" data-v-2efdd51f></i> View My Tickets</button></a><p class="instant" data-v-2efdd51f><i class="fa fa-solid fa-bolt-lightning" data-v-2efdd51f></i> Instant Delivery</p>',2),GD=Ge(()=>K("div",{class:"card-holder"},[K("img",{class:"animate__animated animate__fadeInDownBig",src:BP})],-1));function KD(e,t,n,r,o,i){return je(),He(Qt,null,[r.modalActive?(je(),He("div",MP,[r.buyStep==0?(je(),He("div",$P,[r.modalLoading?(je(),He("div",NP,[K("p",UP,ai(r.loadingMessage),1),FP])):Je("",!0),r.modalLoading?Je("",!0):(je(),He("div",LP,[K("p",jP,[K("i",{onClick:t[0]||(t[0]=s=>r.toggleModal()),class:"fa fa-times"})]),WP,zP,K("a",{onClick:t[1]||(t[1]=s=>r.connectAndClose())},VP)]))])):Je("",!0),r.buyStep==1?(je(),He("div",qP,[r.modalLoading?(je(),He("div",GP,[K("p",KP,ai(r.loadingMessage),1),QP])):Je("",!0),r.modalLoading?Je("",!0):(je(),He("div",ZP,[K("p",YP,[K("i",{onClick:t[2]||(t[2]=s=>r.toggleModal()),class:"fa fa-times"})]),JP,XP,K("p",null,[jt("Wallet Balance"),eD,jt(),K("strong",null,ai(r.verseBalance?r.verseBalance.toFixed(2):0)+" Verse",1)]),tD,K("p",null,[K("small",null,[jt("Bought Verse? click "),K("a",{onClick:t[3]||(t[3]=s=>r.getBalance()),style:{"font-weight":"500",cursor:"pointer","text-decoration":"none",color:"#fac63b"}},"here"),jt(" to refresh your balance")])])]))])):Je("",!0),r.buyStep==2?(je(),He("div",nD,[K("p",rD,[K("i",{onClick:t[4]||(t[4]=s=>r.toggleModal()),class:"fa fa-times"})]),r.modalLoading?(je(),He("div",iD,[K("p",oD,ai(r.loadingMessage),1),sD])):Je("",!0),r.modalLoading?Je("",!0):(je(),He("div",aD,[cD,lD,K("a",{class:"",target:"_blank",onClick:t[5]||(t[5]=s=>r.approve())},fD),K("a",{class:"",target:"_blank",onClick:t[6]||(t[6]=s=>r.approve(!0))},hD),pD]))])):Je("",!0),r.buyStep==3?(je(),He("div",gD,[K("p",wD,[K("i",{onClick:t[7]||(t[7]=s=>r.toggleModal()),class:"fa fa-times"})]),r.modalLoading?(je(),He("div",bD,[K("p",mD,ai(r.loadingMessage),1),yD])):Je("",!0),r.modalLoading?Je("",!0):(je(),He("div",vD,[xD,AD,K("a",{class:"",target:"_blank",onClick:t[8]||(t[8]=s=>r.purchaseTicket())},ED),K("a",_D,[r.giftTicket?Je("",!0):(je(),He("button",{key:0,class:"btn btn-modal uniswap",onClick:t[9]||(t[9]=s=>r.toggleGift())},"Gift a ticket"))]),SD,r.giftTicket?(je(),He("p",PD,"Polygon address to send gift to")):Je("",!0),r.giftTicket==!0?q2((je(),He("input",{key:1,class:"giftInput","onUpdate:modelValue":t[10]||(t[10]=s=>e.ticketInputAddress=s),type:"text"},null,512)),[[i5,e.ticketInputAddress]]):Je("",!0),K("a",{class:"",target:"_blank",onClick:t[11]||(t[11]=s=>r.purchaseTicket(e.ticketInputAddress))},[r.giftTicket?(je(),He("button",DD,"Gift ticket")):Je("",!0)]),ID]))])):Je("",!0),r.buyStep==4?(je(),He("div",TD,[K("p",OD,[K("i",{onClick:t[12]||(t[12]=s=>r.toggleModal()),class:"fa fa-times"})]),r.modalLoading?(je(),He("div",BD,[K("p",kD,ai(r.loadingMessage),1),RD])):Je("",!0),r.modalLoading?Je("",!0):(je(),He("div",MD,FD))])):Je("",!0)])):Je("",!0),r.correctNetwork==!1?(je(),He("div",LD,"Wrong network selected, please switch network to Polygon")):Je("",!0),K("div",jD,[K("div",WD,[K("div",zD,[HD,K("button",{class:"btn-buy",onClick:t[13]||(t[13]=s=>r.toggleModal())},[VD,jt(" Get Ticket")]),qD]),GD])])],64)}const QD=_d(RP,[["render",KD],["__scopeId","data-v-2efdd51f"]]);const ZD={},YD=e=>(jp("data-v-c286161d"),e=e(),Wp(),e),JD={class:"page"},XD=YD(()=>K("h2",null,"My Tickets",-1)),eI=[XD];function tI(e,t){return je(),He("div",JD,eI)}const nI=_d(ZD,[["render",tI],["__scopeId","data-v-c286161d"]]),rI=ly({history:S5("/"),routes:[{path:"/",name:"home",component:QD},{path:"/tickets",name:"tickets",component:nI}]}),Fm=a5(TP);Fm.use(rI);Fm.mount("#app");export{ee as $,cn as A,gr as B,zt as C,_s as D,cc as E,Ss as F,Xr as G,lc as H,wr as I,uf as J,ti as K,Dn as L,ac as M,Ds as N,Es as O,Yr as P,_t as Q,kt as R,ff as S,dc as T,Ze as U,Ly as V,rf as W,un as X,el as Y,sI as Z,fs as _,kx as a,XT as a$,Uc as a0,Et as a1,ki as a2,Qo as a3,Qv as a4,Kc as a5,Wn as a6,$s as a7,$o as a8,_n as a9,FT as aA,LT as aB,DS as aC,VT as aD,WT as aE,HT as aF,zT as aG,Em as aH,Al as aI,Ot as aJ,YT as aK,DO as aL,GT as aM,IO as aN,ta as aO,tO as aP,cO as aQ,aO as aR,ZT as aS,rO as aT,Ji as aU,nO as aV,mO as aW,fO as aX,qt as aY,eO as aZ,JT as a_,de as aa,M as ab,Ce as ac,ae as ad,fe as ae,R as af,UA as ag,ke as ah,re as ai,Ks as aj,oI as ak,xl as al,Mg as am,jr as an,Ie as ao,fn as ap,gl as aq,en as ar,ln as as,R1 as at,Wr as au,dO as av,hO as aw,rr as ax,NT as ay,UT as az,ji as b,wd as b0,bd as b1,_m as b2,KT as b3,QT as b4,jT as b5,oO as b6,sO as b7,Cl as b8,qT as b9,Yb as bA,B_ as bB,md as ba,lO as bb,iO as bc,uO as bd,TO as be,wO as bf,gO as bg,fP as bh,SO as bi,yO as bj,dP as bk,pO as bl,CO as bm,vO as bn,EO as bo,PO as bp,xO as bq,AO as br,_O as bs,bO as bt,nP as bu,Pm as bv,lu as bw,MT as bx,$T as by,bE as bz,xs as c,of as d,As as e,Ja as f,Wi as g,zi as h,Bx as i,Xa as j,Hn as k,ec as l,Hi as m,Jr as n,tc as o,hr as p,pr as q,Cs as r,sb as s,rc as t,Pn as u,ei as v,ic as w,oc as x,Vn as y,sc as z};
