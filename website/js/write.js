"use strict";

function setup() {
  console.log("running");
  const text = select("#content").html();
  const exportButton = select("#export");
  const importButton = select("#import");
  const saveButton = select("#save");
  importButton.mousePressed(loadData);
  exportButton.mousePressed(saveData);
  saveButton.mousePressed(loadFileNames);
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

async function loadFileNames() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
  };
  const response = await fetch("/fileNames", options);
  const json = await response.json();
  console.log(`lista: ${json}`);
  document.querySelector(".fileList").innerHTML = `<li>${json.join(
    "</li><li>"
  )}</li>`;
}

async function loadData() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "default",
  };
  fetch("website/js/json/new.json", options)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".content").innerHTML += ` ${data.text}`;
    });
}
