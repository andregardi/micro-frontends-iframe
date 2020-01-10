const sendReceivedMessageToAllIframes = event => {
  document
    .querySelectorAll("iframe")
    .forEach(iframe => iframe.contentWindow.postMessage(event.data, "*"));
};
window.addEventListener("message", sendReceivedMessageToAllIframes);
