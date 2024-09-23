chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    if (/^https?:\/\/(www\.)?x\.com(\/.*)?$/.test(details.url)) {
      chrome.tabs.update(details.tabId, {url: "https://bsky.app"});
    }
  },
  {url: [{hostEquals: "x.com"}, {hostEquals: "www.x.com"}]}
);