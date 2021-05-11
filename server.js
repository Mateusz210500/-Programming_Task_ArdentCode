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
app.use("*/js", express.static("libraries"));
