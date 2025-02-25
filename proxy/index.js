"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uf");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("ua");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("us");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("ue");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uc");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
