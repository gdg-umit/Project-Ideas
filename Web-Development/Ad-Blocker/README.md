## What is an Ad Blocker?

An ad blocker is a software or program that prevents advertisements from being displayed on a website or web page. Ad blockers work by blocking the loading of ads from specific domains or by hiding ad elements on a webpage.

Ad blockers typically work by:

1. Blocking requests to known ad servers or domains
2. Hiding ad elements on a webpage using CSS or JavaScript
3. Removing ad scripts from a webpage

To set up an ad blocker as a Chrome extension, you'll need to create a few files:

1. manifest.json
This file contains metadata about your extension, such as its name, description, and permissions.

2. contentScript.js
This file contains the JavaScript code that will be injected into web pages to block ads.


## Loading the Extension in Chrome

To load the extension in Chrome, follow these steps:

1. Go to the Chrome extensions page by typing chrome://extensions/ in the address bar.
2. Enable developer mode by toggling the switch in the top-right corner.
3. Click "Load unpacked".
4. Select the folder that contains your extension's files.
Testing the Extension

To test the extension, visit a website with ads and verify that they are blocked. You can also check the popup (if you created one) to see the number of ads blocked.

Note: This is a basic example of an ad blocker, and you may need to modify the code to suit your specific needs. Additionally, keep in mind that ad blockers can be against the terms of service of some websites, so use this extension responsibly.