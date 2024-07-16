# Screenshot Extension

A simple Chrome extension to take screenshots of the current tab and display them in a new tab.

## Author

Samuel Shola

## Features

- Capture a screenshot of the currently active tab.
- Open the screenshot in a new tab.

## Installation

1. Clone or download this repository to your local machine.

2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" using the toggle switch in the top right.

4. Click the "Load unpacked" button and select the directory where you saved the files.

## Usage

1. Click the extension icon in the Chrome toolbar.

2. Click the "Take Screenshot" button in the popup.

3. A new tab will open displaying the screenshot of the current tab.

## File Structure

- `manifest.json` - The manifest file that describes the extension.
- `popup.html` - The HTML file for the popup interface.
- `popup.js` - The JavaScript file to handle the screenshot functionality.
- `background.js` - The background script to handle screenshot requests.
- `screenshot.html` - The HTML file to display the screenshot.
- `screenshot.js` - The JavaScript file to handle displaying the screenshot.
- `icon.png` - The icon for the extension.

## manifest.json

```json
{
  "manifest_version": 3,
  "name": "Screenshot Extension",
  "version": "1.0",
  "description": "A simple Chrome extension to take screenshots.",
  "permissions": [
    "activeTab",
    "scripting"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon.png",
      "48": "icon.png",
      "128": "icon.png"
    }
  },
  "background": {
    "service_worker": "background.js"
  }
}
