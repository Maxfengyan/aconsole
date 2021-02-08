import Mconsole from './index.js'
console.log(Mconsole);
window.onerror = function (msg, url, lineNo, columnNo, error) {
  console.log(msg);
  console.log(url);
  console.log(lineNo);
  console.log(columnNo);
  console.log(error);
  // Mconsole.prientError(1312312312)
  // 处理错误信息
}