function toggleSpread(target) {
  let spread = target.getAttribute("data-spread");
  let type = target.getAttribute("data-type");
  if (type == "Object" || type == "Array") {
    let text
    let firstIndex
    let resultObj
    let resultInfo
    if (spread == "false") {
      text = target.textContent;
      firstIndex = text.indexOf("{");
      resultObj = text.substring(firstIndex, text.length);
      resultInfo = text.substring(0, firstIndex);
      target.setAttribute("data-spread", true);
      target.innerHTML = resultInfo + resultObj.replace(/\n/g, "<br>").replace(/\s/g, "&nbsp");
    } else {
      text = target.innerHTML;
      firstIndex = text.indexOf("{");
      resultObj = text.substring(firstIndex, text.length);
      resultInfo = text.substring(0, firstIndex);
      target.setAttribute("data-spread", false);
      target.innerHTML = resultInfo + resultObj.replace(/&nbsp;/g, ' ').replace(/<br>/g, '\n');
      console.log(target.innerHTML)
    }
  }
}

export default toggleSpread;
