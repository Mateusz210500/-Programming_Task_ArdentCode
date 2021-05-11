"use strict";

const button = document.getElementById("export");

button.addEventListener("click", () => {
  const text = document.querySelector(".content").textContent;
  console.log("click");
  localStorage.setItem(text, JSON.stringify(text));
});
