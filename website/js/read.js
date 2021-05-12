"use strict";

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
