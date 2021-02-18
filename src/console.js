/**
 * * * * * * * * * * * * * * *
 * author: 马丰彦
 * date: 2020-02-07
 * function: 输出console
 * Object/Function/Array/String/Boolean/Number/Date/RegExp/Error/EvalError/RangeError/ReferenceError/SyntaxError/TypeError/URIError/Date/RegExp
 * * * * * * * * * * * * * * *
 */
import logLevel from "./logLevel";

export function printParams(content, level, root, focus, spread) {
  let paramType = handleType(content);
  let paramResult;
  let htmlStr;
  if (paramType === "Array" || paramType === "Object") {
    if (spread) {
      htmlStr = JSON.stringify(content, null, 4);
      paramResult = htmlStr.replace(/\n/g, '<br>').replace(/\s/g, '&nbsp');
    } else {
      paramResult = JSON.stringify(content, null, 4);
    }
  } else if (~paramType.indexOf("HTML")) {
    paramResult = content.outerHTML;
  } else {
    paramResult = content;
  }
  renderDom(paramResult, level, root, focus, spread, paramType);
  return paramResult;
}

function handleType(param) {
  let paramsType = Object.prototype.toString.call(param);
  return paramsType.substring(paramsType.indexOf(" "), paramsType.length - 1).trim();
}

export function renderDom(content, level, root, focus, spread, paramType) {
  let contentItem = document.createElement("div");
  let nowDate = new Date();
  let realDate = new Date(nowDate.getTime() - nowDate.getTimezoneOffset() * 60 * 1000).toJSON();
  let findSpot = realDate.indexOf(".");
  let modelDate = realDate.slice(0, findSpot);
  ~paramType.indexOf("HTML") ? contentItem.textContent = `${modelDate}[${level.name.toUpperCase()}]  ${content}` : contentItem.innerHTML = `${modelDate}[${level.name.toUpperCase()}]  ${content}`;
  // contentItem.innerHTML = `${modelDate}[${level.name.toUpperCase()}]  ${content}`
  // contentItem.textContent = `${modelDate}[${level.name.toUpperCase()}]  ${content}`;
  contentItem.setAttribute("data-level", level.name.toUpperCase())
  contentItem.setAttribute("data-spread", spread)
  contentItem.setAttribute("data-type", paramType)
  contentItem.style.marginTop = "3px";
  contentItem.style.marginBottom = "3px";
  contentItem.style.borderRadius = "7px";
  contentItem.style.padding = "4px 12px";
  contentItem.style.color = level.color || "rgba(0, 0, 0, 0.8)";
  contentItem.style.backgroundColor = level.backgroundColor || "rgba(41, 182, 246, 0.8)";
  contentItem.style.borderColor = "rgba(0, 0, 0, .2)";
  contentItem.style.borderStyle = "solid";
  contentItem.style.transition = "transform ease 0.5s";
  contentItem.style["-webkit-transition"] = "transform ease 0.5s";
  contentItem.style["-moz-transition"] = "transform ease 0.5s";
  contentItem.style["-o-transition"] = "transform ease 0.5s";
  contentItem.style["-ms-transition"] = "transform ease 0.5s";
  contentItem.style.opacity = "1";
  // focus model
  if (focus && level.name === "URL") {
    contentItem.focus()
    contentItem.setAttribute("class", "focus")
    contentItem.style.backgroundColor = logLevel.FOCUS.backgroundColor;
    contentItem.style.color = logLevel.FOCUS.color;
    contentItem.style.transform = "scale(1.02)";
    contentItem.style["-webkit-transform"] = "scale(1.02)";
    contentItem.style["-moz-transform"] = "scale(1.02)";
    contentItem.style["-o-transform"] = "scale(1.02)";
    contentItem.style["-ms-transform"] = "scale(1.02)";
  }
  root.appendChild(contentItem);
}
