chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.image) {
      document.getElementById('screenshot').src = request.image;
    }
  });
  