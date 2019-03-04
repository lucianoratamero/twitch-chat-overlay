// chrome.browserAction.onClicked.addListener(function(tab) { alert('icon clicked')});

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "toggleHide.js"});
});
