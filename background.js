chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'take_screenshot') {
      chrome.tabs.captureVisibleTab(null, {}, (image) => {
        // Create a new tab and display the screenshot
        chrome.tabs.create({ url: 'screenshot.html' }, (tab) => {
          // Send the screenshot data to the new tab
          chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
            if (tabId === tab.id && changeInfo.status === 'complete') {
              chrome.tabs.sendMessage(tabId, { image });
              chrome.tabs.onUpdated.removeListener(listener);
            }
          });
        });
      });
    }
  });
  