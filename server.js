"use strict";

console.log("server is starting");

const fs = require("fs");
const express = require("express");
const app = express();
const server = app.listen(3000, listening);

function listening() {
  console.log("listening...");
}

app.use(express.static("website/html"));
app.use("*/css", express.static("website/css"));
app.use("*/js", express.static("website/js"));
app.use(express.json({ limit: "1mb" }));

app.post("/api", (request, response) => {
  console.log(request.body);
  const data = request.body;
  const jsonData = JSON.stringify(data);
  const jsonFileName = request.body.fileName;
  console.log(jsonData);
  saveToJson(jsonData, jsonFileName);
  response.json({
    status: "success",
  });
});

app.post("/api_2", (request, response) => {
  console.log(request.body);
  const jsonFileName = request.body.fileName;
  const jsonDel = `website/js/json/${jsonFileName}.json`;
  fs.unlink(jsonDel, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  response.json({
    status: "success",
  });
});

function saveToJson(jsonData, fileName) {
  fs.writeFile(`website/js/json/${fileName}.json`, jsonData, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

app.get("/fileNames", function (req, res) {
  const fileName = req.body;
  console.log(fileName);
  const files = fs.readdirSync("website/js/json");
  console.log(files);
  res.send(files);
});
