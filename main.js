// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeSendHeaders

"use strict";

const targetPage = "*://*.youtube.com/tv*";

const ua =
  "Mozilla/5.0 (Linux; Tizen 2.3) AppleWebKit/538.1 (KHTML, like Gecko) Version/2.3 TV Safari/538.1";

function rewriteUserAgentHeader(e) {
  const h = e.requestHeaders.find((h) => h.name === "User-Agent");
  h.value = ua;
  return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
  rewriteUserAgentHeader,
  { urls: [targetPage] },
  ["blocking", "requestHeaders"],
);
