import logLevel from "./logLevel.js";
export function handleClearAll(root) {
  if (root) {
    root.innerHTML = "";
  }
}

export function handleClearItem(target, root) {
  let currentDom = target;
  let targetDom;
  if (currentDom && currentDom.previousSibling) {
    targetDom = currentDom.previousSibling;
    currentDom.previousSibling.setAttribute("class", "focus");
  } else if (currentDom && currentDom.nextSibling) {
    targetDom = currentDom.nextSibling;
    currentDom.nextSibling.setAttribute("class", "focus");
  } else {

  }
  if (targetDom) {
    targetDom.style.backgroundColor = logLevel.FOCUS.backgroundColor;
    targetDom.style.color = logLevel.FOCUS.color;
    targetDom.style.transform = "scale(1.02)";
    targetDom.style["-webkit-transform"] = "scale(1.02)";
    targetDom.style["-moz-transform"] = "scale(1.02)";
    targetDom.style["-o-transform"] = "scale(1.02)";
    targetDom.style["-ms-transform"] = "scale(1.02)";
  }
  if (currentDom) {
    root.removeChild(currentDom);
  }
}
