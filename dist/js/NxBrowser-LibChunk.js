/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
"use strict";(self.webpackChunknexus=self.webpackChunknexus||[]).push([[645],{906:(t,e,n)=>{n.d(e,{Je:()=>r,hy:()=>i,qv:()=>o,WA:()=>a,Fp:()=>l});
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
const r="https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@latest/dist/js/NxIO.js",i="https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus@latest/dist/css/NexusI.min.css",o=".nx-instance",a="#Nexus",l="en"},937:(t,e,n)=>{n.d(e,{tB:()=>l,pm:()=>u,WN:()=>c});var r=n(698),i=n(754);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
const o=window.location.href,a=(0,r.hj)(o),l=(0,i.pN)(o),s=new URLSearchParams(window.location.search.slice(1));function u(t){return s.has(t)}function c(t){return t.length&&"http"!==t.substring(0,4)?a+t.replace(/^\.?\/?/,""):t}},988:(t,e,n)=>{n.d(e,{Xb:()=>b});var r=n(698),i=n(171),o=n(498),a=n(676),l=n(115);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
const s=new Event("mediaReady");function u(t,e){(0,i.cj)(t.tagName,e).then((()=>{e.dispatchEvent(s)}))}function c(t,e,n){if("A"!==n.tagName){var i="load",a=n;["VIDEO","AUDIO"].includes(n.tagName)&&(i="loadedmetadata","VIDEO "===n.tagName&&(a=n.firstChild)),n.addEventListener(i,(function(){u(n,e)})),a.addEventListener("error",(function(){(0,o.fZ)("Unable to load requested media",t);var r=f(t);n.replaceWith(r),u(r,e)})),a.src=t}else n.textContent||(n.textContent=(0,r.Fj)(t,!0)),u(n,e),n.href=t;e.append(n)}function d(t,e="src",n=null){n&&t.setAttribute(e,n)}function f(t=null){var e=document.createElement("A");return e.target="_blank",t&&(e.textContent=(0,r.Fj)(t,!0),e.setAttribute("href",t)),e}function p(t=null){var e=document.createElement("VIDEO");e.setAttribute("controls",!0);var n=document.createElement("SOURCE");return e.append(n),d(n,"src",t),e}function h(t=null){var e=document.createElement("AUDIO");return e.setAttribute("controls",!0),d(e,"src",t),e}function m(t=null){var e=document.createElement("IMG");return d(e,"src",t),e}function v(t=null){var e=document.createElement("IFRAME");return e.scrolling="no",e.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",e.allowfullscreen=!0,d(e,"src",t),e}function g(t,e=null){var n;switch(l.S3.includes(t)&&(t="iframe"),t){case"image":n=m;break;case"video":n=p;break;case"audio":n=h;break;case"iframe":n=v;break;default:n=f}return n(e)}function y(t,e,n){(function(t,e){var n=(0,a.VG)(t),i=function(){return{type:e,url:n}},l=function(){return{type:"page",url:t}};if(n)return Promise.resolve(i());var s=(0,r.ip)(t,e,720);return s?(0,r.ie)(s).then((e=>(n=e.html.split('src="')[1].split('"')[0],(0,a.q1)(t,n),i()))).catch((e=>((0,o.fZ)("Failed to resolved oembed media",{url:t,err:e.message}),l()))):Promise.resolve(l())})(t,e).then((t=>{c(t.url,n,g(t.type))}))}function b(t,e,n){l.S3.includes(e)?y(t,e,n):c(t,n,g(e))}},1:(t,e,n)=>{n.d(e,{T:()=>i});var r=n(906);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */function i(t,e=null,n=null,i=null){var o="";i&&(o=' data-lang="'+i+'"');var a="";return e&&(a=' data-style="'+e+'"'),n||(n=r.Je),`<div id="Nexus" data-src="${t}"${a}${o}></div>\n<script src="${n}"><\/script>`}},990:(t,e,n)=>{n.d(e,{$:()=>r});
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
class r{constructor(t,e=[],n=100){this.spinContainer=t,e.length?""!==e.length[0]&&e.unshift(""):e=["","/","–","\\","|"],this.spinStates=e,this.speed=n,this.spinPosition=-1}endSpin(){this.spinPosition=-1}startSpin(){this.spinPosition=0;var t=window.setInterval(function(){-1===this.spinPosition?(this.spinContainer.textContent="",clearInterval(t)):(this.spinContainer.textContent=this.spinStates[this.spinPosition],this.spinPosition===this.spinStates.length?this.spinPosition=1:this.spinPosition++)}.bind(this),this.speed)}}},798:(t,e,n)=>{n.d(e,{Pn:()=>f,pV:()=>d});var r=n(893),i=n(498),o=n(698),a=n(754),l=n(906),s=n(937);var u=n(52);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
const c={customSelector:null,forceLog:!1,forceStyle:null,customSignatureRule:null,appDefaultCss:null,appDefaultLang:null};function d(t=null){var e,n=[l.WA];t&&t!==l.WA&&n.unshift(t);for(var r=0;r<2;r++)if(e=document.querySelector(n[r]))return e;return(e=document.createElement("DIV")).id=l.WA,e}function f(t={}){var e={};return e.options=Object.assign({},c,t),document.cookie="Nx=Instance; SameSite=None; Secure",function(t=!1){(t||(0,s.pm)("log"))&&(0,i.V0)(!0)}(e.options.forceLog),e.nxelm=d(e.options.customSelector),e.request=
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
function(t,e=null,n=null){e||(e=l.hy),n||(n=l.Fp);var r={url:null,id:"",style:e,lang:n};if(t&&t.dataset){if(t.dataset.src){var i=(0,a.pN)((0,s.WN)(t.dataset.src));i.url&&(r.url=i.url,r.id=i.id)}if(t.dataset.id&&(0,a.Q0)(t.dataset.id)&&(r.id=t.dataset.id),t.dataset.style){var u=(0,s.WN)(t.dataset.style);(0,o.HH)(u)&&(r.style=u)}t.dataset.lang&&(r.lang=t.dataset.lang)}return s.tB.id&&(r.id=s.tB.id),r}(e.nxelm,e.options.appDefaultCss,e.options.appDefaultLang),function(t,e=null,n=null,i=null){var o=t.style;return n?(o=n,e&&e!==n||(e=t.style)):e===o&&(e=null),(0,r.A)(o,i,e)}(e.request,e.options.appDefaultCss,e.options.forceStyle,e.options.customSignatureRule).then((t=>{return e.styleUrl=t,(n=e.request).url?(0,u.P_)(n.url).then((t=>t)):Promise.reject(new Error(0));var n})).then((t=>(e.nxdata=t,e))).catch((t=>{var e=t.message;throw Number.isInteger(e)||((0,i.fZ)("Nexus Init Failed",e),e=400),new Error(e)}))}},52:(t,e,n)=>{n.d(e,{HE:()=>l,eD:()=>s,P_:()=>u});var r=n(698),i=n(498),o=n(676),a=n(754);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
function l(t){var e=[];return t.threads.forEach((t=>{e.push(t.id)})),e}function s(t){return t.target.files.length?"application/json"===t.target.files[0].type?new Promise(((e,n)=>{var r=new FileReader;return r.onload=function(r){var o=function(t){var e=JSON.parse(t.target.result);return!(!e||!(e=(0,a.wJ)(e)))&&e}(r);o?e(o):((0,i.fZ)("Invalid source",t.target.files[0]),n(new Error(400)))},r.readAsText(t.target.files[0])})):((0,i.fZ)("Invalid file type",t.target.files[0]),Promise.reject(new Error(400))):((0,i.fZ)("No file selected"),Promise.reject(new Error(400)))}function u(t){var e=(0,o.Yb)(t);return null!==e?Number.isInteger(e)?Promise.reject(new Error(e)):Promise.resolve(e):function(t){return(0,r._l)(t).then((e=>(e=(0,a.wJ)(e))?((0,o.pH)(t,e),e):((0,i.fZ)("Invalid source",t),Promise.reject(new Error(400))))).catch((e=>{var n=400;return 400!==e.message&&(n=404,(0,i.fZ)("No response",e.message)),(0,o.pH)(t,n),Promise.reject(new Error(n))}))}(t)}},893:(t,e,n)=>{n.d(e,{A:()=>a,o:()=>l});var r=n(698),i=n(498),o=n(906);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
function a(t=null,e=null,n=null){return t||(t=o.hy),e||(e=o.qv),n||t===o.hy||(n=o.hy),(0,r.Yc)(e,t).then((()=>Promise.resolve(t))).catch((t=>((0,i.fZ)("Theme not found",t.message),n?a(n):Promise.reject(new Error(404)))))}function l(t=null,e=null){return t||(t=o.hy),e||(e=o.qv),(0,r.Av)(e,o.hy)}},498:(t,e,n)=>{n.d(e,{V0:()=>o,fZ:()=>a});
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
var r=[],i=!1;function o(t=!0){i=t}function a(t,e=null){var n={msg:t};e&&(n.detail=e),r.push(n),i&&console.log("Nexus/Error: "+JSON.stringify(n))}},676:(t,e,n)=>{n.d(e,{EW:()=>s,Ih:()=>u,Dy:()=>c,of:()=>d,pH:()=>f,Yb:()=>p,q1:()=>h,VG:()=>m,eG:()=>v,XU:()=>g});var r=n(389),i={},o={},a={};
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */const l="nx-edit#";function s(t,e){(0,r.H_)(l+t,e,"local")}function u(t){return(0,r.Wq)(l+t,"local")}function c(t,e){Object.prototype.hasOwnProperty.call(i,t)||(0,r.H_)(t,e,"local",i)}function d(t,e){var n=function(t){return(0,r.Wq)(t,"local",i)}(t);return!n||!(!e||n===e)}function f(t,e){(0,r.H_)(t,e,"session",o)}function p(t){return(0,r.Wq)(t,"session",o)}function h(t,e){(0,r.H_)(t,e,"local",a)}function m(t){return(0,r.Wq)(t,"local",a)}function v(t){(0,r.H_)("nx-lang",t,"local")}function g(){return(0,r.Wq)("nx-lang","local")}},389:(t,e,n)=>{n.d(e,{H_:()=>s,Wq:()=>u});var r=n(383);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */const i=(0,r.$o)(),o=(0,r.G)();function a(t){t&&!t.getItem("available")&&t.setItem("available",5e3)}function l(t){return"session"===t?o:i}function s(t,e,n="session",i=null){var o=JSON.stringify(e);i&&(i[t]=o);var a=l(n);if(null!=a){var s=(0,r.$w)(o,!0,!0);if(s>2e3)return;var u=a.getItem("available");u<1e3&&(u=5e3-(0,r.hh)(a,2e3)),u-=s,a.setItem(t,o),a.setItem("available",Math.ceil(u))}}function u(t,e="session",n=null){if(null!==n&&Object.prototype.hasOwnProperty.call(n,t))return JSON.parse(n[t]);var r=l(e);if(r){var i=r.getItem(t);if(i)return n&&(n[t]=i),JSON.parse(i)}return null}a(i),a(o)},472:(t,e,n)=>{n.d(e,{Ye:()=>f,VQ:()=>p,GY:()=>h,uM:()=>u,FC:()=>d});var r=n(789),i=n(676);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
var o={fr:{author:"auteur·e",handle:"pseudonyme",about:"à propos",url:"url",id:"id",title:"titre",description:"description",timestamp:"date",main:"corps",aside:"aparté",media:"média",type:"type",caption:"légende",index:"index",distant:"distant",local:"local",threads:"fils",linked:"liés",content:"contenu",history:"historique",copied:"copié",embed:"intégré",source:"source",saved:"sauvegardé","local thread":"fil local","linked threads":"fils liés","No valid thread":"Aucun fil valide","Duplicate thread id":"Identifiant du fil en double","Duplicate linked thread":"Fil lié en double","Invalid linked thread":"Fil lié non valide","Invalid url":"Url non valide","Invalid thread id":"Identifiant de fil non valide","Invalid length":"Longueur non valide","Invalid min length":"Longueur minimale non valide","Invalid max length":"Longueur maximale non valide","Unable to cut string":"Impossible de raccourcir le texte","Invalid timestamp":"Horodatage non valide","Unknown field":"Champ inconnu","Invalid field type":"Type de champ non valide","Field is empty":"Le champ est vide","Unable to extend string":"Impossible de prolonger le texte","Unknown characters limits category":"Catégorie de limite de caractères inconnue","Unknown items limits category":"Catégorie de limite d'éléments inconnue","Invalid media type":"Type de media non valide","Invalid app url":"Url de l'application non valide","Too many linked threads":"Trop de fils liés","Too many threads":"Trop de fils","Init failed":"L'initialisation a échoué","Theme not found":"Thème non trouvé","No response":"Aucune réponse","Invalid source":"Source non valide","Invalid Nexus data":"Données Nexus non valides"}},a=Object.keys(o);a.push("en");var l=(0,i.XU)();null==l||c(l)||(l=null,(0,i.eG)(null));var s=null;function u(t){l||d(t)}function c(t){return(0,r.fw)(t)&&a.includes(t)}function d(t){return!(!c(t)||t===s)&&(s=t,function(t){l!==t&&((0,i.eG)(t),l=t)}(t),!0)}function f(){return a}function p(){return s}function h(t){var e=t;return"en"!==s&&o[s][t]&&(e=o[s][t]),e}l?s=l:c(s=document.querySelector("html").lang)||(s="en")},929:(t,e,n)=>{n.d(e,{To:()=>l,wu:()=>s});var r=n(472),i=n(491),o={};function a(t,e){(0,i.Tt)(t,(0,r.GY)(e),50)}function l(t){if((0,r.FC)(t))for(const[t,e]of Object.entries(o))e.forEach((e=>{a(e,t)}))}function s(t,e){o[e]||(o[e]=[]),o[e].push(t)}},115:(t,e,n)=>{n.d(e,{Gd:()=>r,Ln:()=>i,m2:()=>o,SO:()=>a,S3:()=>l,WS:()=>s,og:()=>u,Q1:()=>c,Ni:()=>d});
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
const r="https://nexus-dock.github.io/",i={nxdata:"Object",nexus:"String",author:"Object",handle:"String",about:"String",url:"String",threads:"Array","threads.item":"Object",id:"String",title:"String",description:"String",content:"Object",timestamp:"String",main:"String",aside:"String",media:"Object",type:"String",caption:"String",linked:"Array","linked.item":"String"},o={handle:[3,30],about:[0,400],title:[3,30],description:[0,400],main:[1,1e3],aside:[0,400],caption:[0,200]},a={threads:[1,100],linked:[0,100]},l=["youtube","vimeo","soundcloud"],s=["page","video","image","audio"].concat(l),u="^[0-9]{4}(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?((T|s)(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]))?)?$",c="^[a-zA-Z0-9-]{3,36}$",d="^https?://.*"},754:(t,e,n)=>{n.d(e,{pN:()=>h,Q0:()=>m,wJ:()=>w});var r=n(789),i=n(171),o=n(698),a=n(115),l=n(498);n(937);
/*! Nexus | (c) 2021-22 I-is-as-I-does | AGPLv3 license */
function s(t){return Object.prototype.hasOwnProperty.call(a.m2,t)?a.m2[t]:((0,l.fZ)("Unknown characters limits category",t),!1)}function u(t){return Object.prototype.hasOwnProperty.call(a.SO,t)?a.SO[t]:((0,l.fZ)("Unknown items limits category",t),!1)}function c(t,e,n=!0){return d(t,e,n)||(t=""),!function(t,e){var n=s(e);if(!1!==n){if(t.length>=n[0])return!0;(0,l.fZ)("Invalid min length",e)}return!1}(t,e)?t=function(t,e){var n=s(e);if(!1!==n){var r=n[0]-t.length;return r>0&&(t="-".repeat(r)+t),t}return(0,l.fZ)("Unable to extend string",e),null}(t,e):function(t,e){var n=s(e);if(!1!==n){if(t.length<=n[1])return!0;(0,l.fZ)("Invalid max length",e)}return!1}(t,e)||(t=function(t,e){var n=s(e);if(!1!==n)return(0,i.Oq)(t,n[1]);return(0,l.fZ)("Unable to cut string",e),""}(t,e)),t}function d(t,e,n=!0){if(Object.prototype.hasOwnProperty.call(a.Ln,e)){var i=a.Ln[e];if(null!=t&&t.constructor.name===i){if(!n||!(0,r.xb)(t))return!0;(0,l.fZ)("Field is empty",e)}else(0,l.fZ)("Invalid field type",e)}else(0,l.fZ)("Unknown field",e);return!1}function f(t){if(d(t,"media",!0)&&v(t.url)&&(d(n=t.type,"type",!0)&&a.WS.includes(n)||((0,l.fZ)("Invalid media type",n),0))){var e={};return e.url=t.url,e.type=t.type,e.caption="",t.caption&&(e.caption=c(t.caption,"caption",!1)),e}var n;return{url:"",type:"",caption:""}}function p(t){if(d(t,"content",!0)&&function(t,e=!1){return!(!d(t,"timestamp",!0)||!(t.match(a.og)||!e&&(0,r.iX)(t)))||((0,l.fZ)("Invalid timestamp",t),!1)}(t.timestamp)&&d(t.main,"main",!0)){var e=c(t.main,"main");if(e){var n={};return n.timestamp=t.timestamp,n.main=e,n.aside="",t.aside&&(n.aside=c(t.aside,"aside",!1)),n.media=f(t.media),n}}return null}function h(t){var e={url:null,id:""};if((0,o.HH)(t)&&(e.url=t,t.includes("#"))){var n=t.split("#"),r=n.pop();e.url=n.join("#"),r&&m(r)&&(e.id=r)}return e}function m(t){return!(!d(t,"id",!0)||!t.match(a.Q1))||((0,l.fZ)("Invalid thread id",t),!1)}function v(t){return!!(0,o.HH)(t)||((0,l.fZ)("Invalid url",t),!1)}function g(t){return!(!d(t,"linked.item",!0)||!v(t))||((0,l.fZ)("Invalid linked thread"),!1)}function y(t){if(d(t,"threads.item",!0)&&m(t.id)){var e=p(t.content);if(null!=e){var n={};return n.id=t.id,n.title=c(t.title,"title"),n.description="",t.description&&(n.description=c(t.description,"description",!1)),n.content=e,n.linked=function(t){var e=[];if(d(t,"linked",!1)){var n=t.length,r=u("linked")[1];n>r&&((0,l.fZ)("Too many linked threads",n+" /"+r),n=r);for(var i=0;i<n;i++)if(g(t[i])){var o=h(t[i]),a=o.url;if(o.id&&(a+="#"+o.id),!e.includes(a)){e.push(a);continue}(0,l.fZ)("Duplicate linked thread",t[i])}}return e}(t.linked),n}}return null}function b(t){return function(t){return!(!v(t)||t!==a.Gd)||((0,l.fZ)("Invalid app url"),!1)}(t)||(t=a.Gd),t}function w(t){if(d(t,"nxdata",!0)){var e={};if(e.nexus=b(t.nexus),e.author=function(t){if(d(t,"author",!0)&&v(t.url)){var e=c(t.handle,"handle");if(e){var n={};return n.handle=e,n.about="",t.about&&(n.about=c(t.about,"about",!1)),n.url=t.url,n}}return null}(t.author),e.author&&(e.threads=function(t){var e=[];if(d(t,"threads",!0)){var n=t.length,r=u("threads")[1];n>r&&((0,l.fZ)("Too many threads",n+" /"+r),n=r);for(var i=[],o=0;o<n;o++){var a=y(t[o]);if(null!==a){if(!i.includes(a.id)){i.push(a.id),e.push(a);continue}(0,l.fZ)("Duplicate thread id",a.id)}}if(e.length)return e}return(0,l.fZ)("No valid thread"),[]}(t.threads),e.threads.length))return e}return null}},272:(t,e,n)=>{function r(t,e=200,n=null){t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.boxSizing="border-box",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout((()=>{t.style.display="none",t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),"function"==typeof n&&n()}),e)}function i(t,e=200,n=null){h(t);let r=t.offsetHeight;t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.boxSizing="border-box",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=r+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout((()=>{t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),"function"==typeof n&&n()}),e)}function o(t,e=null){t.style.opacity=1,function n(){(t.style.opacity-=.1)<0?(t.style.display="none",t.style.opacity=1,"function"==typeof e&&e()):requestAnimationFrame(n)}()}function a(t,e=null){t.style.opacity=0,h(t),function n(){var r=parseFloat(t.style.opacity);(r+=.1)>1?"function"==typeof e&&e():(t.style.opacity=r,requestAnimationFrame(n))}()}function l(t,e=200,n=null){var r=[o,a];m(t)&&r.reverse();r[0](t,(function(){"function"==typeof n&&n(),window.setTimeout((()=>{r[1](t)}),e)}))}function s(t,e=200,n=null){o(t),r(t,e,n)}function u(t,e=200,n=null){t.style.opacity=0;var r=e-200;r<200&&(r=200),setTimeout((function(){a(t,n)}),r),i(t,e,n)}function c(t,e,n=20){var r,i,o,a=t.textContent.split(""),l=e.split(""),s=a.length,u=l.length;s>u?(r=s,i=0,o=function(){r>u?a.pop():a[r-1]=l[r-1],r--}):(r=0,i=u,o=function(){r<s?a[r]=l[r]:a.push(l[r]),r++});var c=setInterval((function(){o(),t.textContent=a.join(""),r==i&&clearInterval(c)}),n)}function d(t,e,n=!1,r=!0,o=200,a=null){var l,s;e.style.display="none",r?(e.style.opacity=0,l=u):l=i,s=n?function(){t.prepend(e)}:function(){t.append(e)};return p(t,e,s,(function(){l(e,o,a)}))}function f(t,e,n=null){e.style.opacity=0;var r=t.parentNode,i=t.offsetHeight,l=function(){t.replaceWith(e)},s=function(){var t=e.offsetHeight;!function(t,e,n,r=null){e===n?a(t,r):u(t,200,r)}(e,i,t,n)};o(t,(function(){p(r,e,l,s)}))}function p(t,e,n,r=null){t instanceof Element||(t=document.body);var i="m"+Math.random().toString(20).substring(2);return e.classList.add(i),new Promise((o=>{var a=new MutationObserver((()=>{t.querySelector("."+i)&&(e.classList.remove(i),a.disconnect(),"function"==typeof r&&r(),o(!0))}));a.observe(t,{childList:!0}),n()}))}function h(t){t.style.removeProperty("display");let e=window.getComputedStyle(t).display;"none"===e&&(e="block"),t.style.display=e}function m(t){if(!t)return!1;do{if(t instanceof Element){if(t.hidden||!t.offsetHeight)return!0;var e=window.getComputedStyle(t);if("0"==e.width||"0"==e.height||"0"==e.opacity||"none"==e.display||"hidden"==e.visibility)return!0}}while(t=t.parentNode);return!1}n.d(e,{Vn:()=>l,Vv:()=>s,YQ:()=>u,Po:()=>c,am:()=>d,Mo:()=>f})},491:(t,e,n)=>{n.d(e,{Tt:()=>a});const r={spacing:["padding-top","padding-bottom","margin-top","margin-bottom"],transitions:["transition-duration","transition-timing-function","transition-property"],heights:["height","overflow"]},i={target:"height, margin, padding",toReset:["height"].concat(r.spacing),removeInFirst:r.spacing,removeInThen:r.heights.concat(r.transitions),removeOut:r.heights.concat(r.spacing,r.transitions)},o={target:"opacity",toReset:["opacity"],removeInFirst:["opacity"],removeInThen:r.transitions,removeOut:["opacity"].concat(r.transitions)};["opacity"].concat(i.toReset),r.spacing.concat(["opacity"]),["opacity"].concat(i.removeOut);function a(t,e,n=20){var r,i,o,a=t.textContent.split(""),l=e.split(""),s=a.length,u=l.length;s>u?(r=s,i=0,o=function(){r>u?a.pop():a[r-1]=l[r-1],r--}):(r=0,i=u,o=function(){r<s?a[r]=l[r]:a.push(l[r]),r++});var c=setInterval((function(){o(),t.textContent=a.join(""),r===i&&clearInterval(c)}),n)}},789:(t,e,n)=>{function r(t){return("string"==typeof t||t instanceof String)&&t.length}function i(t){return r(t)&&!isNaN(new Date(t))}function o(t){return"object"==typeof t?!Object.keys(t).length:!t||!t.length}n.d(e,{fw:()=>r,iX:()=>i,xb:()=>o})},171:(t,e,n)=>{function r(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function i(t,e,n=!1){if((t=t.trimEnd()).length<=e)return t;if(e<6)return"(...)";if(n||!t.match(/\s/))return t.substring(0,e-5)+"(...)";for(var r=t.split(/\s/),i=r.length-1;i>-1&&!((t=t.slice(0,-(r[i].length+1))).length+6<e);i--);return t+=" (...)"}function o(t=10){var e=1;t>10&&(e+=Math.ceil(t/10));for(var n="",r=0;r<e;r++)n+=Math.random().toString(36).substring(2,10);return n.substring(0,t)}function a(t,e=null){return e&&e instanceof Element||(e=document.body),new Promise((n=>{var r=e.querySelector(t);if(r)return n(r);var i=new MutationObserver((()=>{(r=e.querySelector(t))&&(i.disconnect(),n(r))}));i.observe(e,{childList:!0,subtree:!0})}))}function l(t){if(""===t||0===t.length)return"";for(var e={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ă:"a",ą:"a",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",ð:"e",ę:"e",Ç:"C",ç:"c",ć:"c",č:"c",Ð:"D",đ:"d",ğ:"g",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ł:"L",ł:"l",Ñ:"N",ñ:"n",ń:"n",Š:"S",š:"s",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ÿ:"Y",ÿ:"y",ý:"y",Ž:"Z",ž:"z",Ż:"Z",ż:"z",ɶ:"oe",Œ:"OE",æ:"ae",Æ:"AE",ß:"ss"},n=Object.keys(e),r=0;r<n.length;r++){var i=n[r],o=e[i];t=t.replace(i,o)}return t}function s(t){return t.split(/(\r\n|\n|\r)/gm)}n.d(e,{Iy:()=>r,Oq:()=>i,O1:()=>o,cj:()=>a,V7:()=>l,_e:()=>s})},383:(t,e,n)=>{function r(){return l("localStorage")?localStorage:null}function i(){return l("sessionStorage")?sessionStorage:null}function o(t,e=!0){var n,r=(n=JSON.stringify(t),(new TextEncoder).encode(n).length);return e&&(r/=1e3),r}function a(t,e=2e3){for(var n=o(t,!0),r=0;r<t.length&&!(n<e);r++){var i=t.key(r),a=o(t.getItem(i),!0);t.removeItem(i),n-=a}return n}function l(t){var e;try{e=window[t];var n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e&&0!==e.length}}function s(t,e){navigator.clipboard.writeText(t).then((()=>e()))}n.d(e,{$o:()=>r,G:()=>i,$w:()=>o,hh:()=>a,vQ:()=>s})},473:(t,e,n)=>{function r(t){t.scrollIntoView({block:"end",behavior:"smooth"})}n.d(e,{SZ:()=>r})},698:(t,e,n)=>{function r(t){let e;try{e=new URL(t)}catch(t){return!1}return"http:"===e.protocol||"https:"===e.protocol}function i(t){return fetch(t).then((t=>t.json()))}function o(t,e,n=null,r=null){e=e.toLowerCase();var i={youtube:"https://youtube.com/oembed?url=",vimeo:"https://vimeo.com/api/oembed.json?url=",soundcloud:"https://soundcloud.com/oembed?format=json&url="};return!!Object.prototype.hasOwnProperty.call(i,e)&&(t=i[e]+encodeURIComponent(t),null!=n&&(t+="&maxwidth="+n),null!=r&&(t+="&maxheight="+r),t)}function a(t){return i(t).then((t=>{if(t&&Object.prototype.hasOwnProperty.call(t,"html"))return t;throw new Error("invalid oembed response")}))}function l(t){return t.split(/[\\/]/).pop()}function s(t,e){if(document.styleSheets.length)for(var n=l(e),r=0;r<document.styleSheets.length;r++){var i=document.styleSheets[r].href;if(i){if(i===e||l(i)===n)return!0;if(i.startsWith(window.location.origin)&&Object.prototype.hasOwnProperty.call(document.styleSheets[r],"cssRules")){var o=document.styleSheets[r].cssRules;for(let e=0;e<o.length;e++)if(o[e].selectorText===t)return!0}}}return!1}function u(t,e,n=null){return n||!s(t,e)?new Promise(((t,r)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onload=t,i.onerror=r,i.href=e,n?n.append(i):document.head.append(i)})):Promise.resolve(!0)}function c(t){return t.replace(/^(https?:\/\/)?/,"")}function d(t,e=!0){var n=c(t).split("/");if(n[n.length-1]||n.pop(),t=n[0],e&&n.length>1){n.length>2&&(t+="/...");var r=n.pop();r.length>18&&(r="..."+r.substring(-15)),t+="/"+r}return t}function f(t){for(var e=t.replace(/^(https?:\/\/)?(www.)?/,"").split(":")[0].split("/")[0].split("."),n=0;n<e.length;n++)if(e[n].includes("-"))e[n]=e[n].split("-").map((t=>t[0])).join("-");else{for(var r=e[n].split(""),i=0,o=0;o<r.length;o++)["a","e","i","o","u","y"].includes(r[o])&&(0!==i&&o!==i+1?r[o]="":i=o);e[n]=r.join("")}return e.join(".")}function p(t){return t.lastIndexOf("/")<8&&"http"===t.substring(0,4)&&(t+="/"),t.substring(0,t.lastIndexOf("/")+1)}n.d(e,{HH:()=>r,_l:()=>i,ip:()=>o,ie:()=>a,Av:()=>s,Yc:()=>u,Fj:()=>d,AB:()=>f,hj:()=>p})}}]);