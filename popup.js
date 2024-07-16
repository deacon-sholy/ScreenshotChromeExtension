document.getElementById('screenshotButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'take_screenshot' });
  });
  