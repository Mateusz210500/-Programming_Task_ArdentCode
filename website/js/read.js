"use strict";

// const fs = require("fs");

// function preload() {
//   let words = loadJSON("website/js/new.json");
//   console.log(words);
// }

function setup() {
  console.log("running read.js");
  let importButton = select("#import");
  let text = select("#content").html();
  importButton.mousePressed(loadData);
}
function loadData() {
  let words = loadJSON("website/js/new.json", gotData);
  console.log("click");
}

// function gotData(data) {
//   console.log(data);
// }
