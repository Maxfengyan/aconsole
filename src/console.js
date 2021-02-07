/**
 * * * * * * * * * * * * * * *
 * author: 马丰彦
 * date: 2020-02-07
 * function: 输出console
 * Object/Function/Array/String/Boolean/Number/Date/RegExp/Error/EvalError/RangeError/ReferenceError/SyntaxError/TypeError/URIError/Date/RegExp
 * * * * * * * * * * * * * * *
 */

function printParams(content, level, root) {
  let paramType = handleType(content);
  let paramResult
  if (paramType === "Array" || paramType === "Object") {
    paramResult = JSON.stringify(content)
  } else if (~paramType.indexOf("HTML")) {
    paramResult = content.outerHTML
  } else {
    paramResult = content
  }

  renderDom(content, level, root)
  return paramResult
}


function handleType(param) {
  let paramsType = Object.prototype.toString.call(param);
  return paramsType.substring(paramsType.indexOf(" "), paramsType.length - 1).trim();
}

function renderDom(content, level, root) {
  let contentItem = document.createElement("div");
  let nowDate = new Date();
  let realDate = new Date(nowDate.getTime() - (nowDate.getTimezoneOffset() * 60 * 1000)).toJSON()
  let findSpot = realDate.indexOf(".")
  let modelDate = realDate.slice(0, findSpot)
  contentItem.innerHTML = `${modelDate}[${level.name.toUpperCase()}]  ${content}`
  contentItem.style.marginTop = "3px";
  contentItem.style.marginBottom = "3px";
  contentItem.style.padding = "4px 12px";
  contentItem.style.color = level.color;
  contentItem.style.backgroundColor = level.backgroundColor;
  contentItem.style.borderColor = 'rgba(0, 0, 0, .2)';
  contentItem.style.borderStyle = 'solid';
  contentItem.style.opacity = '1';
  root.appendChild(contentItem)
}
export default printParams;
