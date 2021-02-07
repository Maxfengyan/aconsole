import createBackground from "./background";
import printParams from "./console";
import logLevel from './logLevel'
require("./userAgent");

class Mconsole {
  constructor(params) {
    this.logArr = [];
    this.createBg(params);
    this.trace(window.location ? window.location.href : "not browser environment");
    this.debug(window.location ? window.location.href : "not browser environment");
    this.log(window.location ? window.location.href : "not browser environment");
    this.info(window.location ? window.location.href : "not browser environment");
    this.warn(window.location ? window.location.href : "not browser environment");
    this.error(window.location ? window.location.href : "not browser environment");
  }

  // 创建背景
  createBg(params) {
    this.root = createBackground(params);
  }

  // 展示
  show() {
    this.root ? (this.root.style.display = "block") : null;
  }

  // 隐藏
  hide() {
    this.root ? (this.root.style.display = "none") : null;
  }

  // 输出日志
  print(content, level) {
    this.logArr.push(printParams(content, level, this.root));
  }

  trace(input) {
    this.print(input, logLevel.TRACE)
  }

  debug(input) {
    this.print(input, logLevel.DEBUG)
  }

  log(input) {
    this.print(input, logLevel.LOG)
  }
  
  info(input) {
    this.print(input, logLevel.INFO)
  }

  warn(input) {
    this.print(input, logLevel.WARN)
  }

  error(input) {
    this.print(input, logLevel.ERROR)
  }

  // 得到dom
  getDom() {
    return this.root;
  }

  // 清除
  clearAll() {
    
  }
}
let obj = {
  bgPosition: "left",
  bgSize: "50%",
  id: "console",
  parent: "body",
  // fontSize: "30px",
  bgColor: "rgba(85,85,85,.8)",
};

let _mconsole = new Mconsole(obj);
_mconsole.show();
// _mconsole.log(function () {});
/*
_mconsole.log(true)
_mconsole.log(undefined)
_mconsole.log(null)
_mconsole.log(document.createElement("div"))
_mconsole.log(document.createElement("span"))
_mconsole.log(document.getElementsByTagName("div")) */
