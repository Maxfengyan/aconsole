import logLevel from "./logLevel.js"

function handleFocus(position) {
  let focusElement = document.getElementsByClassName("focus")[0];
  let currentDom
  if (position === "down") {
    currentDom = focusElement.nextSibling
    if (currentDom) {
      focusElement.className = ""
      currentDom.className = "focus";
    }
  } else {
    currentDom = focusElement.previousSibling
    if (currentDom) {
      focusElement.className = ""
      currentDom.className = "focus";
    }
  }
  renderFocus(focusElement, currentDom)
}

function renderFocus(previousDom, currentDom) {
  let levelName = previousDom.getAttribute("data-level")
  previousDom.style.backgroundColor = logLevel[levelName].backgroundColor;
  previousDom.style.color = logLevel[levelName].color;
  previousDom.style.transform = "none";
  previousDom.style["-webkit-transform"] = "none";
  previousDom.style["-moz-transform"] = "none";
  previousDom.style["-o-transform"] = "none";
  previousDom.style["-ms-transform"] = "none";

  currentDom.style.backgroundColor = logLevel.FOCUS.backgroundColor;
  currentDom.style.color = logLevel.FOCUS.color;
  currentDom.style.transform = "scale(1.02)";
  currentDom.style["-webkit-transform"] = "scale(1.02)";
  currentDom.style["-moz-transform"] = "scale(1.02)";
  currentDom.style["-o-transform"] = "scale(1.02)";
  currentDom.style["-ms-transform"] = "scale(1.02)";
}

export default handleFocus