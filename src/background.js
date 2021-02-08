/**
 * * * * * * * * * * * * * * *
 * author: 马丰彦
 * date: 2021-02-07
 * function: 渲染背景
 * * * * * * * * * * * * * * *
 */

function createBackground(backParam, className) {
  let backObj = typeof backParam === "undefined" ? {} : backParam;
  let bgcolor = backObj.bgcolor || "rgba(85,85,85,.8)";
  let bgSize = backObj.size || "40%";
  let bgposition = backObj.position || "right";
  let zIndex = parseInt(backObj.zindex) || "9999";
  let fontSize = backObj.fontsize || "1rem";
  let color = "#ffffff";
  let padding = backObj.padding || "1px 6px";
  let id = backObj.id || "console";
  let parentDom = backObj.parent || "body";
  let bgDom = document.createElement("div");

  let positionObj = handlePosition(bgposition, bgSize);
  for (let key in positionObj) {
    bgDom.style[key] = positionObj[key];
  }

  bgDom.setAttribute("id", id);
  bgDom.setAttribute("class", className);
  bgDom.style.backgroundColor = bgcolor;
  bgDom.style.padding = padding;
  bgDom.style.fontSize = fontSize;
  bgDom.style.color = color;
  bgDom.style.wordBreak = "normal";
  bgDom.style.overflowWrap = "anywhere";
  bgDom.style.zIndex = zIndex;
  bgDom.style.overflow = "hidden";
  bgDom.style.position = "fixed";
  bgDom.style.display = "none";

  if (parentDom && parentDom !== "body") {
    let parentArr = parentDom.split("");
    if (parentArr[0] == "#") {
      parentArr.shift()
      let domId = parentArr.join("")
      document.getElementById(domId).appendChild(bgDom);  
    } else if (parentArr[0] == ".") {
      parentArr.shift()
      let domId = parentArr.join("")
      document.getElementsByClassName(domId)[0].appendChild(bgDom);  
    } else {
      if (document.getElementById(parentDom)) {
        document.getElementById(parentDom).appendChild(bgDom);
      } else if (document.getElementsByClassName(parentDom).length > 0) {
        document.getElementsByClassName(parentDom)[0].appendChild(bgDom);
      } else {
        document.body.appendChild(bgDom);
      }
    }
  } else {
    document.body.appendChild(bgDom);
  }

  return bgDom;
}

function handlePosition(position, size) {
  let positionArr = ["left", "right", "top", "bottom"];
  let bgposition;
  let bgSize;
  if (!~positionArr.indexOf(position)) {
    bgposition = "right";
  } else {
    bgposition = position;
  }

  if (typeof parseInt(size) !== "number") {
    bgSize = "30%";
  } else {
    bgSize = size;
  }

  if (typeof size === "number") {
    bgSize = size + "px";
  }

  let obj = {};

  Object.defineProperties(obj, {
    _left: {
      set: function () {
        this.left = 0;
        this.bottom = 0;
        this.top = 0;
        this.width = bgSize;
        this.height = "100%";
      },
    },
    _right: {
      set: function () {
        this.right = 0;
        this.bottom = 0;
        this.top = 0;
        this.width = bgSize;
        this.height = "100%";
      },
    },
    _top: {
      set: function () {
        this.top = 0;
        this.left = 0;
        this.right = 0;
        this.height = bgSize;
        this.width = "100%";
      },
    },
    _bottom: {
      set: function () {
        this.bottom = 0;
        this.left = 0;
        this.bottom = 0;
        this.height = bgSize;
        this.width = "100%";
      },
    },
  });
  obj["_" + bgposition] = bgSize;
  return obj;
}

export default createBackground;
