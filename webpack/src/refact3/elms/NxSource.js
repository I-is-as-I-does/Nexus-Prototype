import { copyToClipboard } from "../../libr/Jack/Trades/Stock.js";
import { timedFadeToggle, easeOut, easeIn } from "../../libr/Valva/Valva.js";
import { blockWrap, getElm } from "./NxMeta.js";
import { NxTranslate } from "../NxTranslate.js";
import {
  NxState
} from "../NxState.js";
import { NxInstance } from "../NxInstance.js";


const defaultIO = "https://cdn.jsdelivr.net/gh/I-is-as-I-does/Nexus-Prototype@0.2.0/cdn/js/NxViewerIO.js";
var drawerElm = null;
var editMode = false;

function actionLink(action, text) {
  var lk = getElm("A", "nx-source-" + action);
  lk.textContent = text;
  return lk;
}

function jsonContent(state) {
  if(state.dataUrl){
  return (
    '{"url": "' + state.dataUrl + '", "threadId": "' + state.threadId + '"}'
  );
}
return "";
}

function toolTip(className, text) {
  var tooltip = getElm("SPAN", className);
  tooltip.textContent = text;
  tooltip.style.opacity = 0;
  tooltip.hidden = true;
  NxState.registerTranslElm(tooltip, text);
  return tooltip;
}

function toggleLink() {
  var text = "</>";
  var altText = "< />";
  var lk = actionLink("snippets", text);

  lk.addEventListener("click", () => {
    if (lk.textContent == altText) {
      lk.textContent = text;
      lk.classList.remove("nx-active");
      easeOut(drawerElm, 100);
    } else {
      lk.textContent = altText;
      lk.classList.add("nx-active");
      easeIn(drawerElm, 100, function () {
        drawerElm.scrollIntoView({
          block: "end",
          behavior: "smooth",
          inline: "nearest",
        });
      });
    }
  });
  return lk;
}

function jsonSource(state){
  return codeElm("source", textAreaElm(state, sourceContent));
}

function snippetsBundle(state) {
  drawerElm = getElm("DIV", "nx-source-drawer");

  if(editMode){
    drawerElm.append(jsonSource(state));
  } else {
    drawerElm.append(jsonSnippet(state), embedSnippet(state));
  }
  
  drawerElm.style.display = "none";

  var tgg = getElm("DIV", "nx-source-toggle");
  var snippetLink = toggleLink();
  tgg.append(snippetLink);

  return [tgg, drawerElm];
}

function textAreaElm(state, callback) {
  var snpInp = getElm("TEXTAREA");
  snpInp.spellcheck = false;
  snpInp.textContent = callback(state);

  NxState.registerUpdateEvt(function (newState) {
    snpInp.textContent = callback(newState);
  });
  return snpInp;
}

function copyLink(snpElm) {
  var copyLk = actionLink("copy", "⧉");
  var copyTooltip = toolTip("nx-source-copy-tooltip", NxTranslate.getTxt("copied"));
  copyLk.append(copyTooltip);

  copyLk.addEventListener("click", () =>
    copyToClipboard(snpElm.textContent, () => {
      timedFadeToggle(copyTooltip, 1000);
    })
  );
  return copyLk;
}

function codeElm(name, elm) {
  var snp = getElm("DIV", "nx-" + name + "-snippet");
  snp.append(elm, copyLink(elm));
  return snp;
}

function jsonSnippet(state) {
  return codeElm("json", textAreaElm(state, jsonContent));
}

function embedSnippet(state) {
  return codeElm("embed", textAreaElm(state, embedContent));
}

function sourceContent(state){
  if(state.srcData){
return JSON.stringify(state.srcData);
  }
}

function embedContent(state) {
  if(state.dataUrl){
  return (
    '<div id="Nexus" data-src="' +
    state.dataUrl +
    '" data-id="' +
    state.threadId +
    '" data-style="' +
    NxInstance.opt('style') +
    '" data-lang="' +
    NxTranslate.getLang() +
    '"></div>\r\n<script src="' +
    defaultIO +
    '"></script>'
  );
  }
  return "";
}

export function sourceBlock(state, editionSource = false) {
  if(editionSource){
    editMode = true;
  }
  return blockWrap("source", null, snippetsBundle(state), false);
}