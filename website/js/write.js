"use strict";

// const button = document.getElementById("export");

// button.addEventListener("click", () => {
//   const text = document.querySelector(".content").textContent;
//   console.log("click");
//   localStorage.setItem(text, JSON.stringify(text));
// });

function setup() {
  loadJSON("website/js/new.json", gotData);
  console.log("running");
  let button = select("#export");
  button.mousePressed(saveData);
}

function saveData() {
  let text = select("#content").html();
  console.log(text);
}

function gotData(data) {
  console.log(data);
}
