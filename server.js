
const express = require("express");
const path = require("path");

const app = express();

app.use("/img", express.static(path.join(__dirname, "img")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index2.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index2.html"));
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
