import express from "express";

const app = express(); // creating the API

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

export default app; // exporting the app
