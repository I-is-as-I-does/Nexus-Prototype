/*! Nexus | (c) 2021 I-is-as-I-does | AGPLv3 license */
"use strict";(self.webpackChunknexus=self.webpackChunknexus||[]).push([[689],{425:(n,t,e)=>{e.d(t,{gd:()=>p,IW:()=>v,rH:()=>f,ao:()=>x,eV:()=>h,Q$:()=>g,Sb:()=>m,Zx:()=>I,j1:()=>D,iy:()=>k,wI:()=>C});var r=e(931),a=e(881),o=e(158),i=e(180),d=e(142),c=e(75),l=e(696);function s(n){var t="/";return n.threadId&&"/"!=n.threadId&&(t=n.srcData.threads[n.threadIndex].name),t}function u(n,t,e){e.dataUrl&&t.dataUrl==e.dataUrl&&t.threadId==e.threadId?n.classList.add("nx-on-display"):n.classList.remove("nx-on-display")}function p(n,t){var e=document.createElement(n);return t&&(e.className=t),e}function v(n,t,e=[],r="viewer"){var a=p("DIV","nx-instance nx-"+r),o=p("HEADER");o.append(...n);var i=p("MAIN");if(i.append(...t),a.append(o,i),e.length){var d=p("FOOTER");d.append(...e),a.append(d)}return a}function f(n,t=null,e=null,r=!1){var a,o,i=p("SECTION","nx-"+n+"  nx-block");if(r&&i.append(((o=p("SPAN","nx-landmark nx-landmark-"+(a=n))).textContent=(0,c.GY)(a),(0,d.w)(o,a),o)),t){var l=p("HEADER");l.append(...t),i.append(l)}return e&&i.append(...e),i}function x(){var n=(0,a.ah)();n.length||(n=["Init failed"]);var t=p("P");(0,o.o)()?t.className="nx-error":(t.style.margin="0 auto",t.style.fontFamily='"Courier New", Courier, monospace',t.style.fontSize="13px");var e=p("BR"),r=p("SPAN");return r.textContent="—/ — ",t.append(r,e),n.forEach((n=>{var r=p("SPAN");r.textContent=(0,c.GY)(n),(0,d.w)(r,n),t.append(r,e.cloneNode())})),t}function h(n){n.position>0?n.ctrls.prev.elm.classList.remove("nx-nav-end"):n.ctrls.prev.elm.classList.add("nx-nav-end"),n.position<n.count-1?n.ctrls.next.elm.classList.remove("nx-nav-end"):n.ctrls.next.elm.classList.add("nx-nav-end")}function g(n,t){Object.keys(n.ctrls).forEach((e=>{n.ctrls[e].elm=p("A","nx-nav-ctrl nx-nav-end"),n.ctrls[e].elm.textContent=n.ctrls[e].symbol,n.ctrls[e].elm.addEventListener("click",(function(){n.ctrls[e].elm.classList.contains("nx-nav-end")||("next"==e?n.position++:n.position--,t(e),h(n))}))}))}function m(n,t,e=null,r=null){var a="nx-selected";t.classList.add("nx-select-toggle");var o,i="INPUT"==t.tagName;i?(t.setAttribute("autocomplete","off"),o=t.value):o=t.textContent;var d=p("UL","nx-select-list"),c=p("DIV","nx-select");return r&&c.classList.add(r),c.append(t,d),t.addEventListener("click",(()=>{var n="none";d.style.display==n&&(n="block"),d.style.display=n})),n.forEach((n=>{var r=p("LI");r.textContent=n,r.dataset.item=n,n==o&&r.classList.add(a),d.append(r),r.addEventListener("click",(()=>{var n=r.textContent;if((i?t.value:t.textContent)!=n){if(!r.classList.contains(a)){var o=d.querySelector(".nx-selected");o&&o.classList.remove(a),r.classList.add(a)}i?t.value=n:t.textContent=n,t.dispatchEvent(new window.Event("change")),"function"==typeof e&&e(n)}d.style.display="none"}))})),d.style.display="none",c}function I(n,t){u(n,t,(0,i.Mq)()),(0,i.Ek)((function(e){u(n,t,e)}))}function D(n,t=!1){var e=p("A","nx-view-link");return e.append(k(n,t)),e}function k(n,t=!1){var e=p("SPAN","nx-thread-name");return e.textContent=s(n),t&&(0,i.Ek)((function(n){var t=s(n);(0,r.Po)(e,t,15)})),e}function C(){return f("app",null,[(t=p("A","nx-app-link nx-external-link"),t.target="_blank",t.href=l.Gd,t.title="Nexus",t.textContent="Nexus",t),(n=p("P"),n.textContent=(0,c.VQ)(),m((0,c.Ye)(),n,(function(n){(0,d.T)(n)}),"nx-lang-switch"))],!1);var n,t}},694:(n,t,e)=>{e.d(t,{D:()=>cn});var r=e(931),a=e(425),o=e(180),i=e(85);function d(n,t){n.classList.contains("nx-on-display")?(n.classList.remove("nx-unseen"),n.lastChild.textContent=""):(0,i.$3)(t)&&(n.classList.add("nx-unseen"),n.lastChild.textContent="*")}function c(n,t=!1){var e=(0,a.gd)("SPAN","nx-handle");return n.srcData&&(e.textContent=n.srcData.author.handle),t&&(0,o.Ek)((function(n){(0,r.Po)(e,n.srcData.author.handle,20)}),!0),e}function l(n,t=!1){var e=(0,a.gd)("SPAN","nx-author-url"),d=[];["[","]"].forEach((n=>{var t=(0,a.gd)("SPAN","nx-author-url-brackets");t.textContent=n,d.push(t)}));var c=(0,a.gd)("A","nx-external-link");c.target="_blank";var l="";return n.srcData&&(l=n.srcData.author.url),c.href=l,n.srcData&&(c.textContent=(0,i.KR)(n.srcData.author.url)),e.append(d[0],c,d[1]),t&&(0,o.Ek)((function(n){c.href=n.srcData.author.url,(0,r.Po)(c,(0,i.KR)(n.srcData.author.url),20)}),!0),e}function s(n,t=!1){var e=(0,a.j1)(n,t);return"/"!=n.threadId&&((0,a.Zx)(e,n),function(n,t){n.append((0,a.gd)("SPAN","nx-new-tag")),d(n,t),(0,o.Ek)((function(){d(n,t)}))}(e,n)),e.addEventListener("click",(()=>{(0,o.f2)(n)})),e}function u(n,t=!1){var e=(0,a.gd)("A","nx-author-link");e.append(c(n,t));var r={dataUrl:n.dataUrl,srcData:n.srcData,threadId:"/",threadIndex:-1};return e.addEventListener("click",(function(){(0,o.f2)(r,"/")})),e}var p=e(954),v=!1,f=null,x=null,h={dataUrl:null,srcData:null,threadId:"/",threadIndex:-1},g={ctrls:{prev:{symbol:"<",elm:null},next:{symbol:">",elm:null}},position:0,count:1};function m(n){var t=document.createElement("LI");return t.append(...function(n){return[u(n,!1),l(n,!1),I(n)]}(n)),t}function I(n){var t=(0,a.j1)(n,!1);return(0,a.Zx)(t,n),t.addEventListener("click",(()=>{v=!0,(0,o.f2)(n,!0),v=!1})),t}function D(n){return function(n){f=(0,a.gd)("UL","nx-history-list");var t=(0,a.gd)("LI");t.textContent="...",f.append(t),n.srcData&&f.append(m(n)),(x=(0,a.gd)("DIV","nx-history-drawer")).append(f),x.style.display="none",(0,o.Ek)((function(n){!function(n){if(!v&&(n.dataUrl!=h.dataUrl||n.threadId!=h.threadId)){h=n,g.count>100?f.children[1].remove():g.count++,g.position=g.count-1;var t=m(n);(0,r.am)(f,t,!1,!0,200,(function(){(0,p.SZ)(f)})),(0,a.eV)(g)}}(n)}))}(n),(0,a.rH)("history",null,[(e=(0,a.gd)("DIV","nx-history-nav"),(0,a.Q$)(g,(function(n){var t=g.position;"prev"==n&&(t+=1),f.children[t].querySelector(".nx-thread-name").click()})),e.append(g.ctrls.prev.elm,((t=(0,a.gd)("A","nx-history-toggle")).textContent="≚",t.addEventListener("click",(()=>{"≙"==t.textContent?(t.textContent="≚",t.classList.remove("nx-active"),(0,r.Vv)(x,200)):(t.textContent="≙",t.classList.add("nx-active"),(0,r.YQ)(x,200),(0,p.SZ)(f))})),t),g.ctrls.next.elm),e),x],!1);var t,e}var k=null;function C(n){var t=(0,a.gd)("DIV","nx-about-author");return t.append(y(n)),(0,o.Ek)((function(n){(0,r.Mo)(t.firstChild,y(n))}),!0),t}function y(n){var t=(0,a.gd)("P");return n.srcData&&(t.textContent=n.srcData.author.about),t}function E(n,t,e){var r=Object.assign({},n);r.threadId=t,r.threadIndex=e;var o=(0,a.gd)("LI");return o.append(s(r,!1)),o}var L=e(811),V=e(618),b=e(142),A=e(75),N=e(25),P=null,w=!1;function U(n,t){var e=(0,a.gd)("A","nx-source-"+n);return e.textContent=t,e}function S(n){return n.dataUrl?'{"url": "'+n.dataUrl+'", "id": "'+n.threadId+'"}':""}function M(n,t){var e=(0,a.gd)("TEXTAREA");return e.spellcheck=!1,e.textContent=t(n),(0,o.Ek)((function(n){e.textContent=t(n)})),e}function O(n,t){var e,o,i,d,c,l=(0,a.gd)("DIV","nx-"+n+"-snippet");return l.append(t,(e=t,d=U("copy","⧉"),o=(0,A.GY)("copied"),(i=(0,a.gd)("SPAN","nx-source-copy-tooltip")).textContent=o,i.style.opacity=0,i.hidden=!0,(0,b.w)(i,o),c=i,d.append(c),d.addEventListener("click",(()=>(0,L.vQ)(e.textContent,(()=>{(0,r.Vn)(c,1e3)})))),d)),l}function j(n){if(n.srcData)return JSON.stringify(n.srcData)}function H(n){return n.dataUrl?'<div id="Nexus" data-src="'+n.dataUrl+'" data-id="'+n.threadId+'" data-style="'+(0,V.B)("style")+'" data-lang="'+(0,A.VQ)()+'"></div>\r\n<script src="'+N.Je+'"><\/script>':""}function Q(n,t=!1){return t&&(w=!0),(0,a.rH)("source",null,function(n){P=(0,a.gd)("DIV","nx-source-drawer"),w?P.append(function(n){return O("source",M(n,j))}(n)):P.append(function(n){return O("json",M(n,S))}(n),function(n){return O("embed",M(n,H))}(n)),P.style.display="none";var t,e,o=(0,a.gd)("DIV","nx-source-toggle"),i=(t="< />",(e=U("snippets","</>")).addEventListener("click",(()=>{e.textContent==t?(e.textContent="</>",e.classList.remove("nx-active"),(0,r.Vv)(P,200)):(e.textContent=t,e.classList.add("nx-active"),(0,r.YQ)(P,100,(function(){P.scrollIntoView({block:"end",behavior:"smooth",inline:"nearest"})})))})),e);return o.append(i),[o,P]}(n),!1)}var R,T,q,G,Y=e(368),Z=e(753),$=e(881);function F(n){var t=(0,a.gd)("DIV","nx-boken-media");return t.append(function(n){var t=(0,a.gd)("A","nx-external-link");return t.target="_blank",t.href=n,t.textContent=(0,Z.Fj)(n,!0),t}(n)),t}function _(n){var t=(0,a.gd)("A","nx-external-link");return t.href=n,t.target="_blank",t.textContent=(0,Z.Fj)(n,!0),t}function B(n){var t=(0,a.gd)("VIDEO");t.setAttribute("controls",!0);var e=(0,a.gd)("SOURCE");return e.src=n,t.append(e),e.onerror=()=>{(0,r.Mo)(t,F(n))},t}function J(n){var t=(0,a.gd)("AUDIO");return t.setAttribute("controls",!0),t.src=n,t.onerror=()=>{(0,r.Mo)(t,F(n))},t}function K(n){var t=(0,a.gd)("IMG");return t.src=n,t.onerror=()=>{(0,r.Mo)(t,F(n))},t}function W(n){var t=(0,a.gd)("DIV","nx-record-media");return R=(0,a.gd)("DIV"),function(n){n&&n.record.media.type&&function(n,t,e=null){var a={page:_,image:K,video:B,audio:J},o=function(t){R.className="nx-"+n+"-media",e?(0,r.Mo)(e,t):(0,r.am)(R,t,!1,!0,200)};if(a.hasOwnProperty(n))o(a[n](t));else{var d=(0,i.VG)(t);d?o((0,Z.qm)(d)):(0,Z.ie)((0,Z.ip)(t,n,360)).then((n=>{(0,i.q1)(t,n),o((0,Z.qm)(n))})).catch((n=>{(0,$.Pr)(n),o(F(t))}))}}(n.record.media.type,n.record.media.url)}(n),t.append(R,function(n){return dn(n,["record","media","caption"])}(n)),t}var z=[],X={ctrls:{prev:{symbol:"⊼",elm:null},next:{symbol:"⊻",elm:null}},position:0,count:1};function nn(n){var t=null;return n.threadId&&"/"!=n.threadId&&(t=n.srcData.threads[n.threadIndex]),t}function tn(n){var t=function(){var n=(0,a.gd)("DIV");return T=(0,a.gd)("DIV","nx-distant-link"),(0,a.Q$)(X,an),n.append(X.ctrls.prev.elm,T,X.ctrls.next.elm),n}();return rn(n),(0,a.rH)("distant",null,[t],!0)}function en(n,t){var e=(0,a.iy)(n,!0);return function(n){(q=(0,a.gd)("DIV","nx-thread-description")).append(dn(n,["description"]))}(t),function(n){(G=(0,a.gd)("DIV","nx-local-record")).append(on(n))}(t),(0,a.rH)("local",[e],[q,G],!0)}function rn(n){(function(n){if(null!=n&&n.linked.length){var t=[],e=[],r=[],i=[];return n.linked.forEach((n=>{if(n.url){var d=(0,o.t$)(n.url,n.id).then((n=>{var o=n.dataUrl+"#"+n.threadId;if(!r.includes(o)){r.push(o);var i=function(n){var t=[u(n,!1),l(n,!1),s(n,!1)],e=(0,a.gd)("DIV");return e.append(...t),e}(n);"/"==n.threadId?e.push(i):(i.append(on(nn(n))),t.push(i))}}));i.push(d)}})),Promise.all(i).then((()=>{z=t.concat(e)}))}var d=(0,a.gd)("DIV");return d.textContent="...",Promise.resolve(d).then((()=>{z=[d]}))})(n).then((()=>{X.position=0,X.count=z.length,(0,a.eV)(X),an()}))}function an(){var n,t=z[X.position],e=T.firstChild;n=e?(0,r.Mo)(e,t):(0,r.am)(T,t,!1,!0,200),(0,r.T2)(X.ctrls.next.elm,n,!0,200,400,!1)}function on(n){var t=(0,a.gd)("DIV","nx-record");return t.append(function(n){var t=(0,a.gd)("DIV","nx-record-meta"),e=dn(n,["record","timestamp"]);return t.append(e),t}(n),function(n){var t=(0,a.gd)("DIV","nx-record-body");return t.append(dn(n,["record","main"]),dn(n,["record","aside"])),t}(n),W(n)),t}function dn(n,t){var e=(0,a.gd)("P","nx-"+t.join("-"));return e.textContent=function(n,t=[]){if(n){for(var e=Object.assign({},n),r=0;r<t.length;r++)e=e[t[r]];if((0,Y.fw)(e))return e}return""}(n,t),e}function cn(n){var t=(0,a.gd)("DIV");t.append(function(n){!function(n){if(k=(0,a.gd)("UL"),n.srcData){var t=n.srcData.index;if(t.length)for(var e=0;e<t.length;e++)k.append(E(n,t[e],e));(0,o.Ek)((function(n){!function(n){var t=k.childNodes,e=n.srcData.index,a=e.length,o=t.length,i=0;if(o)for(var d=function(n){(0,r.Vv)(n,200,(function(){n.remove()}))},c=0;c<o;c++)if(a>c){var l=E(n,e[c],c);(0,r.Mo)(t[c],l),i++}else d(t[c]);if(i<a)for(var s=i;s<a;s++)(0,r.am)(k,E(n,e[s],s),!1,!0,200)}(n)}),!0)}}(n);var t=[c(n,!0),l(n,!0)],e=[C(n),k];return(0,a.rH)("index",t,e,!0)}(n));var e=(0,a.gd)("DIV");return e.append(...function(n){var t=nn(n),e=[en(n,t),tn(t)];return(0,o.Ek)((function(n){!function(n){var t=nn(n),e=on(t),a=dn(t,["description"]);(0,r.Mo)(q.firstChild,a),(0,r.Mo)(G.firstChild,e),rn(t)}(n)})),e}(n)),(0,a.IW)([(0,a.wI)(),D(n)],[t,e],[Q(n)])}}}]);