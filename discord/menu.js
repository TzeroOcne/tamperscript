/* globals waitForSelector, $ */
// ==UserScript==
// @name         Discord Custom Menu
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @require      https://cdn.jsdelivr.net/npm/waitforselector-js@0.1.0/index.min.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js
// @grant        none
// ==/UserScript==

window.waitForSelector = waitForSelector;
/** @type {(string) => Promise<HTMLElement>} */
const waitForElem = waitForSelector;

const leftIconStr = `
<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
  <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/>
</svg>
`;

(function() {
    'use strict';

    // Your code here...
    console.log('Using strict');
})();

$(async () => {
  console.log('Monkey here');

  /** @type {HTMLScriptElement} */
  // const fontAwesomeScript = document.createElement('script');
  // fontAwesomeScript.src = 'https://kit.fontawesome.com/354b05a8cb.js';
  // fontAwesomeScript.crossOrigin = 'anonymous';
  // document.head.appendChild(fontAwesomeScript);

  const sidebar = await waitForElem('[class*="sidebar"]');

  const hideSidebarButton = document.createElement('div');
  hideSidebarButton.id = "nnryscript";
  hideSidebarButton.innerHTML = leftIconStr;
  sidebar.appendChild(hideSidebarButton);

  // const fontAwesomeElement = document.createElement('i');
  // fontAwesomeElement.classList.add('fa-solid', 'fa-thumbs-up', 'fa-5x');
  // hideSidebarButton.appendChild(fontAwesomeElement);
});
