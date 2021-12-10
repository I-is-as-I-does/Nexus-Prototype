/*! Nexus | (c) 2021 I-is-as-I-does | AGPLv3 license */
"use strict";(self.webpackChunknexus=self.webpackChunknexus||[]).push([[22],{176:(t,n,e)=>{e.d(n,{N:()=>pt});var a=e(425),d=e(220),i=e(696),r=e(931),c=e(947),l=e(371),s=e(75),o=e(85),u=e(451),p=e(253);function h(){var t=(0,c.O1)(10);return{nexus:i.Gd,author:{handle:"Anonymous-"+(0,c.Iy)(100,999),about:"",url:"http://"},threads:[f(t)],index:[t]}}function f(t){return{id:t,title:t,description:"...",content:{timestamp:(new Date).toISOString().substring(0,16),main:"...",aside:"",media:{url:"",type:"",caption:""}},linked:[]}}var v=e(549),x=e(142);function g(){var t=(0,a.gd)("BUTTON","nx-add-link");return t.type="button",t.textContent="+",t}const D=["youtube","vimeo","soundcloud"],m={image:["jpg","jpeg","gif","svg","png","webp"],video:["mp4","webm"],audio:["mp3"]};var b=e(618);const k=(0,l.hb)();var I,E,y,O,N,T={dataUrl:"nexus-tmp",srcData:null,threadId:"/",threadIndex:-1},C=null,L=new CustomEvent("IndexChange"),S=!1,U={ctrls:{prev:{symbol:"↶",elm:null},next:{symbol:"↷",elm:null}},position:0,count:1},w=[],V=null,j=null,A=null,B={up:"↑",down:"↓"},P={handle:null,url:null,about:null},F=null;function J(t,n){T.srcData.index.splice(n,0,T.srcData.index.splice(t,1)[0]),T.srcData.threads.splice(n,0,T.srcData.threads.splice(t,1)[0])}function M(t,n){var e=T.srcData.index.indexOf(t);n.up.disabled=0==e,e+1==T.srcData.index.length?n.down.disabled=!0:n.down.disabled=!1}function Q(t,n){V.removeChild(t),V.insertBefore(t,n),n.dispatchEvent(L),t.dispatchEvent(L)}function R(t,n){var e=(0,a.gd)("DIV","nx-edit-move"),d={up:null,down:null};t.addEventListener("IndexChange",(function(){M(n,d)})),Object.keys(d).forEach((i=>{d[i]=(0,a.gd)("BUTTON","nx-edit-move-"+i),d[i].type="button",d[i].textContent=B[i],e.append(d[i]),d[i].addEventListener("click",(function(){!function(t,n,e){var a=function(a){var d=T.srcData.index.indexOf(e),i="up"==n;a||(i=!i),i&&0!=d?(J(d,d-1),Q(t,t.previousSibling)):i||d+1==T.srcData.index.length||(J(d,d+1),Q(t.nextSibling,t))};q(a),a(!0)}(t,i,n)}))})),M(n,d),t.append(e)}function W(t,n){var e=(0,a.gd)("FORM","nx-thread-local-form"),d=(0,a.gd)("FIELDSET");d.append(_(["threads",t,"title"],n)),d.append(_(["threads",t,"description"]));var i=(0,a.gd)("FIELDSET");["timestamp","main","aside"].forEach((n=>{i.append(_(["threads",t,"content",n]))}));var r=(0,a.gd)("FIELDSET"),c=_(["threads",t,"content","media","type"]);return r.append(_(["threads",t,"content","media","url"],(function(t,n){if(n){var e=c.querySelector("[data-item="+function(t){for(var n=0;n<D.length;n++)if(t.includes(D[n]))return D[n];var e=t.split(".").pop();for(let[t,n]of Object.entries(m))if(n.includes(e))return t;return"page"}(t)+"]");e&&e.click()}}))),r.append(c),r.append(_(["threads",t,"content","media","caption"])),e.append((0,a.a)("local thread"),d,(0,a.a)("content"),i,(0,a.a)("media",2),r),e}function Y(t,n,e){var d=(0,a.gd)("DIV","nx-edit-distant-link"),l={url:null,id:null,list:(0,a.gd)("DIV","nx-distant-ids")},s={id:null,url:null};l.id=_(["threads",n,"linked",e,"id"],null,s),l.url=_(["threads",n,"linked",e,"url"],(function(t,n){!function(t,n,e,d){var r=function(e=[]){var d=t.id.value;d&&e.includes(d)||(t.id.value="/"),e.unshift("/"),t.id.pattern="("+e.join("|")+")";var i=(0,a.Sb)(e,t.id,null,"nx-edit-linked-id");n.id.lastChild.replaceWith(i)};e&&d?(0,v.P)(e).then((t=>{r(Array.from(t.index))})).catch((()=>{t.url.pattern=i.Ni+"(?<!"+(0,c.hr)(e)+")",t.url.dispatchEvent(new window.Event("change"))})):r()}(s,l,t,n)}),s),Object.values(l).forEach((t=>{t&&(0,r.am)(d,t,!1,!0,200)}));var o,u=((o=(0,a.gd)("BUTTON","nx-delete-link")).type="button",o.textContent="-",o),p=(0,a.gd)("DIV","nx-distant-link-action");p.append(u),d.append(p),u.addEventListener("click",(()=>{var a=function(a){if(a)(0,r.Vv)(d,200,(function(){d.remove()}));else if(e==T.srcData.threads[n].linked.length-1)(0,r.am)(t,d,!1,!0,200);else{var i=t.childNodes[e];t.insertBefore(d,i),(0,r.YQ)(d,200)}};q(a),a(!0)})),t.append(d)}function G(t,n){var e=(0,a.gd)("LI");return e.append(n),T.threadId!=t&&(e.style.display="none"),(0,l.Ek)((function(n){n.dataUrl==T.dataUrl&&(T=n,n.threadId==t?setTimeout((function(){(0,r.YQ)(e,200)}),200):(0,r.Vv)(e,200))})),e}function H(t,n){var e=Object.assign({},T);return e.threadId=n,e.threadIndex=t,e}function $(t,n){var e={index:{parent:V,child:null,link:null,del:null},local:{parent:j,child:null},distant:{parent:A,child:null}};e.index.child=(0,a.gd)("LI"),e.index.link=function(t,n){var e=H(t,n),d=(0,a.j1)(e,!1);return(0,a.I$)(d,e),d.addEventListener("click",(()=>{var t=T.srcData.index.indexOf(n);(0,l.f2)(H(t,n),!0)})),d}(t,n),e.index.child.append(e.index.link),R(e.index.child,n);return e.distant.child=G(n,function(t,n){var e=(0,a.gd)("FORM","nx-thread-distant-form"),d=T.srcData.threads[t].linked;if(d.length)for(var i=0;i<d.length;i++)Y(e,t,i);var r=(0,a.gd)("DIV"),c=g();return c.addEventListener("click",(()=>{var t=T.srcData.index.indexOf(n),a=T.srcData.threads[t].linked.length;T.srcData.threads[t].linked.push({url:"",id:"/"}),Y(e,t,a)})),r.append((0,a.a)("linked threads"),e,c),r}(t,n)),e.local.child=G(n,W(t,(function(n,a){if(a){var d=(i=n,(0,c.V7)(i.trim().replace(/[\s_]/,"-")));e.index.link.firstChild.textContent=d,X(["threads",t,"id"],d)}var i}))),e.index.del=function(t,n,e){var d=(0,a.gd)("BUTTON","nx-delete-thread");return d.type="button",d.textContent="-",d.addEventListener("click",(function(){!function(t,n,e){var a=T.srcData.index.indexOf(e),d=V.childNodes[a],i=T.srcData.index.length,c={index:e,threads:T.srcData.threads[a]},l=function(e){if(e)Object.keys(c).forEach((t=>{T.srcData[t].splice(a,1)})),T.threadId="/",T.threadIndex=-1,[n,t,d].forEach((t=>{(0,r.Vv)(t,200,(function(){t.remove()}))})),i>1&&(0===a?d.nextSibling.dispatchEvent(L):a===i-1&&d.previousSibling.dispatchEvent(L));else{if(Object.keys(c).forEach((t=>{T.srcData[t].splice(a,0,c[t])})),a<i-1){var l=V.childNodes[a];V.insertBefore(d,l),0===a&&l.dispatchEvent(L)}else V.append(d),i>1&&d.previousSibling.dispatchEvent(L);(0,r.YQ)(d,200),j.append(t),A.append(n),d.firstChild.click()}};q(l),l(!0)}(t,n,e)})),d}(e.local.child,e.distant.child,n),e.index.child.append(e.index.del),e}function q(t){U.position!=U.count-1&&(w.splice(U.position),U.count=w.length+1),10===U.count?w.splice(0,1):U.count++,w.push(t),U.position=U.count-1,(0,a.eV)(U),E.disabled=!1}function X(t,n){return null===T.srcData&&(T.srcData={}),"author"==t[0]?function(t,n){T.srcData.author||(T.srcData.author={}),T.srcData.author[t[1]]=n}(t,n):(function(t){T.srcData.threads?void 0===T.srcData.threads[t[1]]&&(T.srcData.threads[t[1]]={}):T.srcData.threads=[]}(t),["linked","content"].includes(t[2])?("content"==t[2]&&function(t,n){T.srcData.threads[t[1]].content||(T.srcData.threads[t[1]].content={}),"media"==t[3]?(T.srcData.threads[t[1]].content.media||(T.srcData.threads[t[1]].content.media={}),T.srcData.threads[t[1]].content.media[t[4]]=n):T.srcData.threads[t[1]].content[t[3]]=n}(t,n),void function(t,n){T.srcData.threads[t[1]].linked?void 0===T.srcData.threads[t[1]].linked[t[3]]&&(T.srcData.threads[t[1]].linked[t[3]]={}):T.srcData.threads[t[1]].linked=[],T.srcData.threads[t[1]].linked[t[3]][t[4]]=n}(t,n)):function(t,n){T.srcData.threads[t[1]][t[2]]=n}(t,n))}function _(t,n=null,e=null){var d,r=function(t){return T.srcData?"author"==t[0]?T.srcData[t[0]][t[1]]:["linked","content"].includes(t[2])?"content"==t[2]?"media"!=t[3]?T.srcData.threads[t[1]].content[t[3]]:T.srcData.threads[t[1]].content.media[t[4]]:T.srcData.threads[t[1]].linked[t[3]][t[4]]:T.srcData.threads[t[1]][t[2]]:""}(t),c=t[t.length-1],l=t[t.length-2];Number.isInteger(l)&&(l=t[t.length-3]),d=["about","description","main","aside","caption"].includes(c)?function(t){var n=(0,a.gd)("TEXTAREA","nx-edit-textarea");return n.textContent=t,n}(r):"timestamp"==c?function(t){var n=(0,a.gd)("INPUT");return n.type="datetime-local",n.value=t,n}(r):function(t){var n=(0,a.gd)("INPUT","nx-edit-text");return n.type="text",n.value=t,n}(r);var o=t.join("-");d.id=o,d.name=o,["handle","title","main","id","url","type","timestamp"].includes(c)&&(d.required=!0);var u=function(t){var n=(0,a.gd)("LABEL","nx-edit-label");n.for=t;var e=(0,a.gd)("SPAN","nx-edit-title");return e.textContent=(0,s.GY)(t),(0,x.w)(e,t),n.append(e),n}(c),p=(0,a.gd)("SPAN","nx-edit-indication"),h=(0,a.gd)("SPAN","nx-edit-feedback");switch(u.append(p,h),c){case"url":p.textContent="[http]",d.pattern=i.Ni;break;case"id":t.includes("linked")?d.pattern=i.bt:d.pattern=i.Q1;break;case"type":d.pattern="("+i.WS.join("|")+")";break;case"timestamp":break;default:var f=i.m2[c];p.textContent="["+f[0]+"-"+f[1]+"]",d.setAttribute("maxlength",f[1]),d.setAttribute("minlength",f[0])}e&&(e[c]=d);var v=(0,a.gd)("DIV","nx-edit-input nx-edit-"+l+"-"+c);if(v.append(u),"type"==c||"id"==c&&"linked"==t[2]){var g=[];"type"==c?g=i.WS:(g=["/"],"/"!=r&&g.push(r)),v.append((0,a.Sb)(g,d,null,"nx-edit-"+t[2]+"-"+c))}else v.append(d);return function(t,n,e,a){var d="",i=n.value;n.addEventListener("focus",(function(){i=n.value})),n.addEventListener("change",(function(){z(t,n,e,a),q((function(r){r?n.value=d:(d=n.value,n.value=i),z(t,n,e,a)}))}))}(t,d,h,n),z(t,d,h,n),v}function z(t,n,e,a){var d=!1;n.checkValidity()?(d=!0,X(t,n.value),e.textContent="✓"):e.textContent="✗","function"==typeof a&&a(n.value,d)}function K(t){if(!S){var n=U.position,e=!1;"next"==t&&(n-=1,e=!0),w[n](e),setTimeout(function(){S=!1}.bind(this),k),E.disabled=!1}}function Z(){var t=!0;C!=JSON.stringify(T.srcData)&&(t=!1),y.disabled!==t&&(y.disabled=t)}function tt(t){var n=Object.assign({},T.srcData);null===t&&(t=h());var e=function(e){T.srcData.threads.length&&[V,j,A].forEach((t=>{Array.from(t.childNodes).forEach((t=>{(0,r.Vv)(t,150,(function(){t.remove()}))}))})),T.srcData=e?t:n,T.threadIndex=0,T.threadId=T.srcData.threads[0].id,function(){for(let[t,n]of Object.entries(P))n.value=T.srcData.author[t]}(),dt(!0)};q(e),e(!0)}function nt(){var t=function(){var t=(0,a.gd)("INPUT");return t.type="file",t.accept="application/json",t.addEventListener("change",(function(t){(0,v.e)(t).then((t=>{tt(t)})).catch((()=>{et("Invalid source")}))})),t.style.display="none",t}(),n=(0,a.gd)("BUTTON","nx-open-file");n.type="button",n.textContent="🗁",n.addEventListener("click",(function(){t.click()}));var e=(0,a.gd)("SPAN");return e.append(t,n),e}function et(t){var n=(0,s.GY)(t);F&&clearTimeout(F),(0,r.Po)(O,n,20),F=setTimeout((function(){(0,r.Po)(O,"",20)}),2e3+20*n.length)}function at(){var t=(0,a.gd)("DIV","nx-edit-nav");O=(0,a.gd)("SPAN","nx-action-feedback"),(y=(0,a.gd)("BUTTON","nx-reset")).type="button",y.textContent="⭯",Z(),y.addEventListener("click",(function(){y.disabled||(tt(JSON.parse(C)),y.disabled=!0)})),(E=(0,a.gd)("BUTTON","nx-save")).type="button",E.textContent="🖫",E.disabled=!0,E.addEventListener("click",(function(){E.disabled||((0,o.EW)(T.dataUrl,T.srcData),et("saved"),E.disabled=!0,Z())}));var n,e,d=(0,a.gd)("DIV");return d.append(y,((e=(0,a.gd)("BUTTON","nx-new")).type="button",e.textContent="🗋",e.addEventListener("click",(function(){tt(h())})),e),nt(),E,((n=(0,a.gd)("BUTTON","nx-download")).type="button",n.textContent="⇣",n.addEventListener("click",(function(t){var n=Object.assign({},T.srcData);delete n.index,(0,u.wJ)(n)||et("Invalid Nexus data"),n=JSON.stringify(n,void 0,2);var e="data:text/json;charset=utf-8,"+encodeURIComponent(n),d=(0,a.gd)("A");d.setAttribute("href",e),d.setAttribute("download","nexus.json"),(0,p.X)().appendChild(d),d.click(),d.remove()})),n)),t.append(O,d),t}function dt(t=!1){var n=T.srcData.index;if(n.length)for(var e=0;e<n.length;e++)it(e,n[e],t)}function it(t,n,e=!1){var a=$(t,n);for(let[t,d]of Object.entries(a))!e||"index"!=t&&n!=T.threadId?d.parent.append(d.child):(0,r.am)(d.parent,d.child,!1,!0,200)}function rt(){I=(0,a.gd)("FORM","nx-edit-author"),["handle","url","about"].forEach((t=>{I.append(_(["author",t],null,P))}));var t=(0,a.gd)("DIV","nx-edit-author-form");return t.append((0,a.a)("author"),I),t}function ct(){var t,n=(0,a.gd)("DIV","nx-edit-list");return n.append((0,a.a)("threads"),V,((t=g()).addEventListener("click",(function(){var t=(0,c.O1)(10),n=T.srcData.index.length;T.srcData.threads.push(f(t)),T.srcData.index.push(t);var e=$(n,t);["local","distant"].forEach((t=>{e[t].parent.append(e[t].child)}));var a=null;V.childNodes.length&&(a=function(){V.childNodes[n-1].dispatchEvent(L)}),(0,r.am)(e.index.parent,e.index.child,!1,!0,200,a),E.disabled=!1})),t)),n}function lt(t,n){return(N=(0,a.gd)("BUTTON","nx-edit-switch")).textContent="👁",N.addEventListener("click",(function(){"✎"==N.textContent?(N.textContent="👁",(0,r.Mo)(t,n)):((0,l.f2)(T,!0,!0),N.textContent="✎",(0,r.Mo)(n,t))})),N}function st(){var t,n=(0,a.gd)("DIV","nx-edit-menu");return n.append(at(),(t=(0,a.gd)("DIV","nx-edit-actions nx-history-nav"),(0,a.Q$)(U,K),t.append(U.ctrls.prev.elm,U.ctrls.next.elm),t)),n}function ot(t){var n,e="nexus-tmp";(0,b.pm)("new")?(n=h(),t={}):(t.dataUrl&&(e=t.dataUrl),null===(n=(0,o.Ih)(e))&&(n=null!==t.srcData?t.srcData:h(),(0,o.EW)(e,n))),C=null!==t.srcData?JSON.stringify(t.srcData):JSON.stringify(n);var d=n.threads[0].id,i=0;t&&"/"!=t.threadId&&n.index.includes(t.threadId)&&(d=t.threadId,i=n.index.indexOf(t.threadId)),T=function(t,n="nexus-tmp",e="/",a=-1){return{dataUrl:n,srcData:t,threadId:e,threadIndex:a}}(n,e,d,i),V=(0,a.gd)("UL","nx-edit-index"),j=(0,a.gd)("UL","nx-edit-local"),A=(0,a.gd)("UL","nx-edit-distant"),dt()}function ut(){return(0,a.rH)("index",null,[rt(),ct()],!1)}function pt(t){ot(t);var n=(0,d.D)(t)[0],e=(0,a.gd)("DIV");e.append(ut());var i=(0,a.gd)("DIV");i.append((0,a.rH)("local",null,[j],!1),(0,a.rH)("distant",null,[A],!1));var r=(0,a._$)([st()],[e,i],[],"edit");return[r,lt(n,r)]}}}]);