function handleBind($el, eventType, fn, useCapture) {
  $el.addEventListener(eventType, fn, !!useCapture);
}

export default handleBind