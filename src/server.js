const express = require("express");

app = express(); // creating the API

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

module.exports = app; // exporting the app
