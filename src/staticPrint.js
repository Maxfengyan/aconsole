import { renderDom } from "./console";
import logLevel from "./logLevel";
function staticPrint(message, className) {
  let findConsole = document.getElementsByClassName(className)[0];
  renderDom(message, logLevel.ERROR, findConsole)
}

export default staticPrint;
