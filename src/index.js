/**
* * * * * * * * * * * * * * *
* author: 马丰彦
* date: 2021-02-18
* function: class
* * * * * * * * * * * * * * *
*/
import createBackground from "./background.js";
import { printParams } from "./console.js";
import logLevel from "./logLevel.js";
import UserAgent from "./userAgent.js";
import staticPrint from "./staticPrint.js";
import handleFocus from "./focus.js";
import toggleSpread from "./spreadOrshrink.js";
// create class
class Mconsole {
  constructor(params) {
    this.logArr = [];
    this.focus = params ? params.focus || false : false;
    this.spread = params ? params.spread || false : false;
    this.createBg(params);
    this.print(window.location ? window.location.href : "not browser environment", { name: "URL" });
    this.print(UserAgent(), { name: "UserAgent" });
    this.log({ name: "xiaoming", age: "23", love: "baseball", numz: [12, 344, 565, 4353], single: { aa: 123, cc: 123123, dd: [123, 13, 4, 343] } });
    this.trace(window.location ? window.location.href : "not browser environment");
    this.debug(window.location ? window.location.href : "not browser environment");
    this.log(window.location ? window.location.href : "not browser environment");
    this.info(window.location ? window.location.href : "not browser environment");
    this.warn(window.location ? window.location.href : "not browser environment");
    this.error(window.location ? window.location.href : "not browser environment");
  }

  // init background
  createBg(params) {
    this.root = createBackground(params, Mconsole.className);
  }

  // show
  show() {
    this.root ? (this.root.style.display = "block") : null;
  }

  // hide
  hide() {
    this.root ? (this.root.style.display = "none") : null;
  }

  // print log
  print(content, level) {
    this.logArr.push(printParams(content, level, this.root, this.focus, this.spread));
  }

  static printError(errorMessage) {
    staticPrint(errorMessage, Mconsole.className);
  }

  trace(input) {
    this.print(input, logLevel.TRACE);
  }

  debug(input) {
    this.print(input, logLevel.DEBUG);
  }

  log(input, level) {
    if (level && level !== 4) {
      if (level == 1) {
        this.print(input, logLevel.ERROR);
      } else if (level == 2) {
        this.print(input, logLevel.WARN);
      } else if (level == 3) {
        this.print(input, logLevel.INFO);
      } else if (level == 5) {
        this.print(input, logLevel.DEBUG);
      } else {
        this.print(input, logLevel.TRACE);
      }
    } else {
      this.print(input, logLevel.LOG);
    }
  }

  info(input) {
    this.print(input, logLevel.INFO);
  }

  warn(input) {
    this.print(input, logLevel.WARN);
  }

  error(input) {
    this.print(input, logLevel.ERROR);
  }

  // get dom
  getDom() {
    return this.root;
  }

  // clear input log
  clearAll() {
    this.root ? (this.root.innerHTML = "") : null;
  }

  // clear single
  clear() {
    let currentDom = document.getElementsByClassName("focus")[0];
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
      this.root.removeChild(currentDom);
    }
  }

  // page down
  pageDown() {
    this.root ? (this.root.scrollTop = this.root.scrollTop + 100) : null;
  }

  // page up
  pageUp() {
    this.root ? (this.root.scrollTop = this.root.scrollTop - 100) : null;
  }

  // focus down
  moveDown() {
    if (this.focus) {
      handleFocus("down", this.root);
    }
  }

  // focus up
  moveUp() {
    if ((this.focus, this.root)) {
      handleFocus("up", this.root);
    }
  }

  // toggleSpread
  toggle() {
    toggleSpread(document.getElementsByClassName("focus")[0]);
  }
}

// class name
Mconsole.className = "mconsole";

// catch error info
window.onerror = function (msg, url, lineNo, columnNo, error) {
  let message = msg + " in " + "(" + url + " line " + lineNo + ")";
  Mconsole.printError(message);
};

let obj = {
  position: "left",
  size: "50%",
  id: "console",
  parent: "body",
  focus: true,
  zindex: 9999,
  spread: true,
  fontsize: "30px",
  bgcolor: "rgba(85,85,85,.8)",
};

let _mconsole = new Mconsole({ focus: true, spread: true });
_mconsole.show();
/*
_mconsole.log(true)
_mconsole.log(undefined)
_mconsole.log(null)
_mconsole.log(document.createElement("div"))
_mconsole.log(document.createElement("span"))
_mconsole.log(document.getElementsByTagName("div")) */
document.addEventListener("keydown", function (event) {
  let code = event.keyCode;
  if (code == 13) {
    // _mconsole.clearAll();
    // _mconsole.toggle();
    _mconsole.clear();
  }
  if (code == 32) {
    _mconsole.log(document.createElement("div"), 2);
  }
  if (code == 34) {
    _mconsole.pageDown();
  }
  if (code == 33) {
    _mconsole.pageUp();
  }
  if (code == 40) {
    _mconsole.moveDown();
  }
  if (code == 38) {
    _mconsole.moveUp();
  }
});

export default Mconsole;
