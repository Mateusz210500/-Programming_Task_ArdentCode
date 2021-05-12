"use strict";

function setup() {
  console.log("running");
  let text = select("#content").html();
  let exportButton = select("#export");
  let importButton = select("#import");
  importButton.mousePressed(loadData);
  exportButton.mousePressed(saveData);
}

async function saveData() {
  const text = select("#content").html();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  };
  const response = await fetch("/api", options);
  const json = await response.json();
  console.log(json);
}

async function loadData() {
  // document.querySelector(".content").textContent += ` ${words}`;
  // console.log(words);
  // return words["text"];
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
  };
  fetch("website/js/new.json", options)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".content").textContent += ` ${data.text}`;
    });
}
