import React from 'react';
import { render } from 'react-dom';

import Panel from './Panel';
import './index.css';

render(<Panel />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();


/*{
  "manifest_version": 3,
  "version": "1.0.0",
  "name": "Take It And Leave It",
  "description": "For things not worth favoriting but not to be forgotten.",
  "options_page": "options.html",
  "background": { "service_worker": "background.bundle.js" },
  "action": {
    "default_popup": "popup.html",
    "default_icon": "icon-34.png"
  },
  "chrome_url_overrides": {
    "newtab": "newtab.html"
  },
  "icons": {
    "128": "icon-128.png"
  },
  "content_scripts": [
    {
      "matches": ["http://*/*", "https://*/*", "<all_urls>"],
//       "js": ["contentScript.bundle.js"],
//       "css": ["content.styles.css"]
//     }
//   ],
//   "devtools_page": "devtools.html",
//   "web_accessible_resources": [
//     {
//       "resources": ["content.styles.css", "icon-128.png", "icon-34.png"],
//       "matches": []
//     }
//   ]
// }

// */