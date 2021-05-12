"use strict";

// const button = document.getElementById("export");

// button.addEventListener("click", () => {
//   const text = document.querySelector(".content").textContent;
//   console.log("click");
//   localStorage.setItem(text, JSON.stringify(text));
// });

function setup() {
  // loadJSON("website/js/new.json", gotData);
  console.log("running");
  let text = select("#content").html();
  let exportButton = select("#export");
  let importButton = select("#import");
  importButton.mousePressed(loadData);
  exportButton.mousePressed(saveData);
}

function saveData() {
  const data = select("#content").html();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  };
  fetch("/api", options).then((response) => {
    console.log(response);
  });
}

function loadData() {
  // let words = loadJSON("website/js/new.json");
  document.querySelector(".content").textContent += ` ${words}`;
  console.log(words);
  return words["text"];
}
