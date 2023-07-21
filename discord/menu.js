/* globals waitForSelector */
// ==UserScript==
// @name         Discord Menu
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/channels/558322816416743459/732948529030365184
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/waitforselector-js@0.1.0/index.min.js
// ==/UserScript==

/** @type {(string) => Promise<Element>} */
const waitForSelector = waitForSelector;

/** @type {HTMLElement} */
const sidebar = waitForSelector('[class*="sidebar"]');

const hideSidebarButton = document.createElement('div');
hideSidebarButton.id = "nnryscript";
sidebar.appendChild(hideSidebarButton);
