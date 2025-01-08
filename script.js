// script.js

console.log("js script loaded");

// show current year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").innerHTML = new Date().getFullYear();
});