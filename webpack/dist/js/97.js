/*! For license information please see 97.js.LICENSE.txt */
"use strict";(self.webpackChunknexus=self.webpackChunknexus||[]).push([[97],{653:(t,e,n)=>{n.d(e,{wI:()=>d});var a=n(306),r=n(450),i=n(359),o=n(93);function d(){return(0,r.rH)("app",null,[(e=(0,r.gd)("A","nx-app-link nx-external-link"),e.target="_blank",e.href=a.Gd,e.title="Nexus",e.textContent="Nexus",e),(t=(0,r.gd)("P"),t.textContent=(0,i.VQ)(),(0,r.Sb)((0,i.Ye)(),t,(function(t){(0,o.T)(t)}),"nx-lang-switch"))],!1);var t,e}},450:(t,e,n)=>{n.d(e,{gd:()=>l,IW:()=>c,rH:()=>u,ao:()=>p,eV:()=>f,Q$:()=>v,Sb:()=>h,I$:()=>y,j1:()=>x,iy:()=>g});var a=n(931),r=n(268),i=n(906),o=n(769),d=n(93),s=n(359);function l(t,e){var n=document.createElement(t);return e&&(n.className=e),n}function c(t,e,n){var a=l("DIV","nx-instance"),r=l("HEADER");r.append(...t);var i=l("MAIN");i.append(...e);var o=l("FOOTER");return o.append(...n),a.append(r,i,o),a}function u(t,e=null,n=null,a=!1){var r,i,o=l("SECTION","nx-"+t+"  nx-block");if(a&&o.append(((i=l("SPAN","nx-landmark nx-landmark-"+(r=t))).textContent=(0,s.GY)(r),(0,d.w)(i,r),i)),e){var c=l("HEADER");c.append(...e),o.append(c)}return n&&o.append(...n),o}function p(){var t=(0,r.ah)();t.length||(t=["Init failed"]);var e=l("P");(0,i.o)()?e.className="nx-error":(e.style.margin="0 auto",e.style.fontFamily='"Courier New", Courier, monospace',e.style.fontSize="13px");var n=l("BR"),a=l("SPAN");return a.textContent="—/ — ",e.append(a,n),t.forEach((t=>{var a=l("SPAN");a.textContent=(0,s.GY)(t),(0,d.w)(a,t),e.append(a,n.cloneNode())})),e}function f(t){t.position>0?t.ctrls.prev.elm.classList.remove("nx-nav-end"):t.ctrls.prev.elm.classList.add("nx-nav-end"),t.position<t.count-1?t.ctrls.next.elm.classList.remove("nx-nav-end"):t.ctrls.next.elm.classList.add("nx-nav-end")}function v(t,e){Object.keys(t.ctrls).forEach((n=>{t.ctrls[n].elm=l("A","nx-nav-end"),t.ctrls[n].elm.textContent=t.ctrls[n].symbol,t.ctrls[n].elm.addEventListener("click",(function(){t.ctrls[n].elm.classList.contains("nx-nav-end")||("next"==n?t.position++:t.position--,e(n),f(t))}))}))}function h(t,e,n=null,a=null){var r="nx-selected";e.classList.add("nx-select-toggle");var i,o="INPUT"==e.tagName;i=o?e.value:e.textContent;var d=l("UL","nx-select-list");t.forEach((t=>{var a=l("LI");a.textContent=t,a.dataset.item=t,t==i&&a.classList.add(r),a.addEventListener("click",(()=>{if(!a.classList.contains(r)){var t=a.textContent;d.querySelector(".nx-selected").classList.remove(r),a.classList.add(r),o?e.value=t:e.textContent=t,"function"==typeof n&&n(t),d.style.display="none"}})),d.append(a)})),d.style.display="none";var s=l("DIV","nx-select");return a&&s.classList.add(a),s.append(e,d),e.addEventListener("click",(()=>{var t="none";d.style.display==t&&(t="block"),d.style.display=t})),s}function y(t,e){m(t,e,(0,o.Mq)()),(0,o.Ek)((function(n){m(t,e,n)}))}function m(t,e,n){n.dataUrl&&e.dataUrl==n.dataUrl&&e.threadId==n.threadId?t.classList.add("nx-on-display"):t.classList.remove("nx-on-display")}function x(t,e=!1){var n=l("A","nx-view-link");return n.append(g(t,e)),n}function g(t,e=!1){var n=l("SPAN","nx-thread-name");return n.textContent=D(t),e&&(0,o.Ek)((function(t){var e=D(t);(0,a.Po)(n,e,15)})),n}function D(t){var e="/";return t.threadId&&"/"!=t.threadId&&(e=t.srcData.threads[t.threadIndex].name),e}},931:(t,e,n)=>{function a(t,e=200,n=null){f(t);let a=t.offsetHeight;t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,t.offsetHeight,t.style.boxSizing="border-box",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=a+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout((()=>{t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),"function"==typeof n&&n()}),e)}function r(t,e=null){t.style.opacity=1,function n(){(t.style.opacity-=.1)<0?(t.style.display="none","function"==typeof e&&e()):requestAnimationFrame(n)}()}function i(t,e=null){t.style.opacity=0,f(t),function n(){var a=parseFloat(t.style.opacity);(a+=.1)>1?"function"==typeof e&&e():(t.style.opacity=a,requestAnimationFrame(n))}()}function o(t,e=200,n=null){var a=[r,i];v(t)&&a.reverse(),a[0](t,(function(){"function"==typeof n&&n(),window.setTimeout((()=>{a[1](t)}),e)}))}function d(t,e=200,n=null){r(t),function(t,e=200,n=null){t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.boxSizing="border-box",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.overflow="hidden",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0,t.style.marginTop=0,t.style.marginBottom=0,window.setTimeout((()=>{t.style.display="none",t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),"function"==typeof n&&n()}),e)}(t,e,n)}function s(t,e=200,n=null){t.style.opacity=0;var r=e-200;r<200&&(r=200),setTimeout((function(){i(t,n)}),r),a(t,e,n)}function l(t,e,n=20){var a,r,i,o=t.textContent.split(""),d=e.split(""),s=o.length,l=d.length;s>l?(a=s,r=0,i=function(){a>l?o.pop():o[a-1]=d[a-1],a--}):(a=0,r=l,i=function(){a<s?o[a]=d[a]:o.push(d[a]),a++});var c=setInterval((function(){i(),t.textContent=o.join(""),a==r&&clearInterval(c)}),n)}function c(t,e,n=!1,r=!0,i=200,o=null){var d,l;return e.style.display="none",r?(e.style.opacity=0,d=s):d=a,l=n?function(){t.prepend(e)}:function(){t.append(e)},p(t,e,l,(function(){d(e,i,o)}))}function u(t,e,n=null){e.style.opacity=0;var a=t.parentNode,o=t.offsetHeight,d=function(){t.replaceWith(e)},l=function(){var t=e.offsetHeight;!function(t,e,n,a=null){e===n?i(t,a):s(t,200,a)}(e,o,t,n)};r(t,(function(){p(a,e,d,l)}))}function p(t,e,n,a=null){t instanceof Element||(t=document.body);var r="m"+Math.random().toString(20).substr(2);return e.classList.add(r),new Promise((i=>{var o=new MutationObserver((()=>{t.querySelector("."+r)&&(e.classList.remove(r),o.disconnect(),"function"==typeof a&&a(),i(!0))}));o.observe(t,{childList:!0}),n()}))}function f(t){t.style.removeProperty("display");let e=window.getComputedStyle(t).display;"none"===e&&(e="block"),t.style.display=e}function v(t){if(!t)return!1;do{if(t instanceof Element){if(t.hidden||!t.offsetHeight)return!0;var e=window.getComputedStyle(t);if("0"==e.width||"0"==e.height||"0"==e.opacity||"none"==e.display||"hidden"==e.visibility)return!0}}while(t=t.parentNode);return!1}n.d(e,{Vn:()=>o,Vv:()=>d,YQ:()=>s,Po:()=>l,am:()=>c,Mo:()=>u,RP:()=>v})},97:(t,e,n)=>{n.r(e),n.d(e,{editorContent:()=>H});var a=n(653),r=n(306),i=n(450),o=n(931),d=n(947),s=n(769),l=n(93),c=n(359),u=n(27);const p=(0,s.hb)(),f=["youtube","vimeo","soundcloud"],v={image:["jpg","jpeg","gif","svg","png","webp"],video:["mp4","webm"],audio:["mp3"]};var h={dataUrl:"NxEdit",srcData:null,threadId:"/",threadIndex:-1},y=new CustomEvent("IndexChange"),m=!1,x={ctrls:{prev:{symbol:"↶",elm:null},next:{symbol:"↷",elm:null}},position:0,count:1},g=[],D=null,b=null,k=null,E={up:"↑",down:"↓"};function I(t,e){h.srcData.index.splice(e,0,h.srcData.index.splice(t,1)[0]),h.srcData.threads.splice(e,0,h.srcData.threads.splice(t,1)[0])}function C(t,e){var n=h.srcData.index.indexOf(t);e.up.disabled=0==n,n+1==h.srcData.index.length?e.down.disabled=!0:e.down.disabled=!1}function w(t,e){D.removeChild(t),D.insertBefore(t,e),e.dispatchEvent(y),t.dispatchEvent(y)}function P(t,e){for(var n=(0,i.gd)("P","nx-edit-category"),a=0;a<e;a++){var r=(0,i.gd)("SPAN","nx-edit-category-indent");r.textContent="|",n.append(r)}var o=(0,i.gd)("SPAN");return o.textContent=(0,c.GY)(t),(0,l.w)(o,t),n.append(o),n}function L(t,e,n){var a=(0,i.gd)("DIV","nx-distant-link");["url","id"].forEach((t=>{(0,o.am)(a,V(["threads",e,"linked",n,t]),!1,!0,200)}));var r,d=((r=(0,i.gd)("BUTTON","nx-delete-link")).type="button",r.textContent="-",r),s=(0,i.gd)("DIV","nx-distant-link-action");s.append(d),a.append(s),d.addEventListener("click",(()=>{var r=function(r){if(r)(0,o.Vv)(a,200,(function(){a.remove()}));else if(n==h.srcData.threads[e].linked.length-1)(0,o.am)(t,a,!1,!0,200);else{var i=t.childNodes[n];t.insertBefore(a,i),(0,o.YQ)(a,200)}};A(r),r(!0)})),t.append(a)}function N(t,e,n){var a=(0,i.gd)("LI");return a.append(n),h.threadId!=e&&(a.style.display="none"),(0,s.Ek)((function(n){if(n.dataUrl==h.dataUrl){h=n;var r=(0,o.RP)(a);n.threadId==e&&n.threadIndex==t&&r?setTimeout((function(){(0,o.YQ)(a,200)}),200):r||(0,o.Vv)(a,200)}})),a}function S(t,e){var n=Object.assign({},h);return n.threadId=e,n.threadIndex=t,n}function T(t,e){var n=(0,i.gd)("LI"),a=function(t,e){var n=S(t,e),a=(0,i.j1)(n,!1);return(0,i.I$)(a,n),a.addEventListener("click",(()=>{(0,s.f2)(n)})),a}(t,e);n.append(a),function(t,e){var n=(0,i.gd)("DIV","nx-edit-move"),a={up:null,down:null};t.addEventListener("IndexChange",(function(){C(e,a)})),Object.keys(a).forEach((r=>{a[r]=(0,i.gd)("BUTTON"),a[r].type="button",a[r].textContent=E[r],n.append(a[r]),a[r].addEventListener("click",(function(){!function(t,e,n){var a=function(a){var r=h.srcData.index.indexOf(n),i="up"==e;a||(i=!i),i&&0!=r?(I(r,r-1),w(t,t.previousSibling)):i||r+1==h.srcData.index.length||(I(r,r+1),w(t.nextSibling,t))};A(a),a(!0)}(t,r,e)}))})),C(e,a),t.append(n)}(n,e);var r=N(t,e,function(t,e){var n=(0,i.gd)("FORM","nx-thread-local-form");return n.append(V(["threads",t,"name"],e)),n.append(V(["threads",t,"description"])),n.append(P("record",1)),["timestamp","main","aside"].forEach((e=>{n.append(V(["threads",t,"record",e]))})),n.append(P("media",2)),n.append(V(["threads",t,"record","media","url"],(function(t){!function(t,e){var n=t.querySelector(".nx-select-list li[data-item="+function(t){for(var e=0;e<f.length;e++)if(t.includes(f[e]))return f[e];var n=t.split(".").pop();for(let[t,e]of Object.entries(v))if(e.includes(n))return t;return"page"}(e)+"]");n&&n.click()}(n,t)}))),["type","caption"].forEach((e=>{n.append(V(["threads",t,"record","media",e]))})),n}(t,(function(e){var n,r=(n=e,(0,d.V7)(n.trim().replace(/[\s_]/,"-")));a.firstChild.textContent=r,O(["threads",t,"id"],r)}))),u=N(t,e,function(t,e){var n=(0,i.gd)("FORM","nx-thread-distant-form"),a=h.srcData.threads[t].linked;if(a.length)for(var r=0;r<a.length;r++)L(n,t,r);var d=(0,i.gd)("DIV");return d.append(n,function(t,e){var n=(0,i.gd)("BUTTON","nx-add-link");return n.type="button",n.textContent="+",n.addEventListener("click",(()=>{var n=h.srcData.index.indexOf(e),a=function(e){if(e){var a=h.srcData.threads[n].linked.length;h.srcData.threads[n].linked.push({url:"http",id:"/"}),L(t,n,a)}else h.srcData.threads[n].linked.pop(),(0,o.Vv)(t.lastChild,200,(function(){t.lastChild.remove()}))};A(a),a(!0)})),n}(n,e)),d}(t,e));r.append(function(t,e,n){var a=(0,i.gd)("BUTTON","nx-delete-thread");return a.type="button",a.textContent=(0,c.GY)("del"),(0,l.w)(a,"del"),a.addEventListener("click",(function(){!function(t,e,n){var a=h.srcData.index.indexOf(n),r=D.childNodes[a],i=h.srcData.index.length,d={index:n,threads:h.srcData.threads[a]},l=function(n){if(n)(0,s.f2)(S(-1,"/")),Object.keys(d).forEach((t=>{h.srcData[t].splice(a,1)})),[e,t,r].forEach((t=>{(0,o.Vv)(t,200,(function(){t.remove()}))})),i>1&&(0===a?r.nextSibling.dispatchEvent(y):a===i-1&&r.previousSibling.dispatchEvent(y));else{if(Object.keys(d).forEach((t=>{h.srcData[t].splice(a,0,d[t])})),a<i-1){var l=D.childNodes[a];D.insertBefore(r,l),0===a&&l.dispatchEvent(y)}else D.append(r),i>1&&r.previousSibling.dispatchEvent(y);(0,o.YQ)(r,200),b.append(t),k.append(e),r.firstChild.click()}};A(l),l(!0)}(t,e,n)})),a}(r,u,e)),D.append(n),b.append(r),k.append(u)}function A(t){x.position!=x.count-1&&(g.splice(x.position),x.count=g.length+1),10===x.count?g.splice(0,1):x.count++,g.push(t),x.position=x.count-1,(0,i.eV)(x)}function O(t,e){return h.srcData||(h.srcData={}),"author"==t[0]?function(t,e){h.srcData.author||(h.srcData.author={}),h.srcData.author[t[1]]=e}(t,e):(function(t){h.srcData.threads?void 0===h.srcData.threads[t[1]]&&(h.srcData.threads[t[1]]={}):h.srcData.threads=[]}(t),["linked","record"].includes(t[2])?("record"==t[2]&&function(t,e){h.srcData.threads[t[1]].record||(h.srcData.threads[t[1]].record={}),"media"==t[3]?(h.srcData.threads[t[1]].record.media||(h.srcData.threads[t[1]].record.media={}),h.srcData.threads[t[1]].record.media[t[4]]=e):h.srcData.threads[t[1]].record[t[3]]=e}(t,e),void function(t,e){h.srcData.threads[t[1]].linked?void 0===h.srcData.threads[t[1]].linked[t[3]]&&(h.srcData.threads[t[1]].linked[t[3]]={}):h.srcData.threads[t[1]].linked=[],h.srcData.threads[t[1]].linked[t[3]][t[4]]=e}(t,e)):function(t,e){h.srcData.threads[t[1]][t[2]]=e}(t,e))}function V(t,e=null){var n,a=function(t){return h.srcData?"author"==t[0]?h.srcData[t[0]][t[1]]:["linked","record"].includes(t[2])?"record"==t[2]?"media"!=t[3]?h.srcData.threads[t[1]].record[t[3]]:h.srcData.threads[t[1]].record.media[t[4]]:h.srcData.threads[t[1]].linked[t[3]][t[4]]:h.srcData.threads[t[1]][t[2]]:""}(t),o=t[t.length-1],d=t[t.length-2];Number.isInteger(d)&&(d=t[t.length-3]),n=["about","description","main","aside","caption"].includes(o)?function(t){var e=(0,i.gd)("TEXTAREA","nx-edit-textarea");return e.textContent=t,e}(a):"timestamp"==o?function(t){var e=(0,i.gd)("INPUT");return e.type="datetime-local",e.value=t,e}(a):function(t){var e=(0,i.gd)("INPUT","nx-edit-text");return e.type="text",e.value=t,e}(a);var s=t.join("-");n.id=s,n.name=s,["handle","name","main","id","url","type","timestamp"].includes(o)&&(n.required=!0);var u=function(t){var e=(0,i.gd)("LABEL","nx-edit-label");e.for=t;var n=(0,i.gd)("SPAN","nx-edit-title");return n.textContent=(0,c.GY)(t),(0,l.w)(n,t),e.append(n),e}(o),p=(0,i.gd)("SPAN","nx-edit-indication"),f=(0,i.gd)("SPAN","nx-edit-feedback");switch(u.append(p,f),o){case"url":p.textContent="[http]",n.pattern="^https?://\\w+\\.\\w+.*";break;case"id":n.pattern=r.Q1;break;case"type":n.pattern="("+r.WS.join("|")+")";break;case"timestamp":break;default:var v=r.m2[o];p.textContent="["+v[0]+"-"+v[1]+"]",n.setAttribute("maxlength",v[1]),n.setAttribute("minlength",v[0])}!function(t,e,n,a){var r="",i=e.value;e.addEventListener("focus",(function(){i=e.value})),e.addEventListener("change",(function(){U(t,e,n,a),A((function(o){o?e.value=r:(r=e.value,e.value=i),U(t,e,n,a)}))}))}(t,n,f,e),U(t,n,f,e);var y=(0,i.gd)("DIV","nx-edit-input nx-edit-"+d+"-"+o);return y.append(u),"type"==o?y.append((0,i.Sb)(r.WS,n,null,"nx-edit-media-type")):y.append(n),y}function U(t,e,n,a){e.checkValidity()?(O(t,e.value),"function"==typeof a&&a(e.value),n.textContent="✓"):n.textContent="✗"}function j(t){if(!m){var e=x.position,n=!1;"next"==t&&(e-=1,n=!0),g[e](n),setTimeout(function(){m=!1}.bind(this),p)}}function H(t,e){if(!t)return(0,i.ao)();!function(t){if(t&&t.srcData)(0,u.EW)(t.srcData);else{var e=(0,u.Ih)();if(!e)return;t={dataUrl:"NxEdit",srcData:e,threadId:"/",threadIndex:-1}}D=(0,i.gd)("UL","nx-edit-index"),b=(0,i.gd)("UL","nx-edit-local"),k=(0,i.gd)("UL","nx-edit-distant");var n=(h=t).srcData.index;if(n.length)for(var a=0;a<n.length;a++)T(a,n[a])}(e);var n,r=(0,i.gd)("DIV");r.append((0,i.rH)("index",null,[(n=(0,i.gd)("FORM","nx-edit-author"),["handle","url","about"].forEach((t=>{n.append(V(["author",t]))})),n),D],!0));var o=(0,i.gd)("DIV");o.append((0,i.rH)("local",null,[b],!0),(0,i.rH)("distant",null,[k],!0));var d,s=(0,i.IW)([(0,a.wI)(),(d=(0,i.gd)("DIV","nx-edit-actions nx-history-nav"),(0,i.Q$)(x,j),d.append(x.ctrls.prev.elm,x.ctrls.next.elm),d)],[r,o],[]);return s.classList.add("nx-edit"),s}},93:(t,e,n)=>{n.d(e,{T:()=>d,w:()=>s});var a=n(359),r=n(931),i={};function o(t,e){(0,r.Po)(t,(0,a.GY)(e),50)}function d(t){if((0,a.FC)(t))for(let[t,e]of Object.entries(i))e.forEach((e=>{o(e,t)}))}function s(t,e){i[e]||(i[e]=[]),i[e].push(t)}}}]);