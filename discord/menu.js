/* globals waitForSelector, $ */
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @require      https://cdn.jsdelivr.net/npm/waitforselector-js@0.1.0/index.min.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3.7.0/dist/jquery.min.js
// @grant        none
// ==/UserScript==

window.waitForSelector = waitForSelector;

(function() {
    'use strict';

    // Your code here...
    console.log('Using strict');
})();

$(async () => {
  console.log('Monkey here');

  const sidebar = await waitForSelector('[class*="sidebar"]');

  const hideSidebarButton = document.createElement('div');
  hideSidebarButton.id = "nnryscript";
  sidebar.appendChild(hideSidebarButton);
});

