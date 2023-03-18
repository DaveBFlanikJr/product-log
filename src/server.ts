import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";

const app = express(); // creating the API

//Setting up middleware
app.use(cors()); // cross origin research sharing
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extends: true }));

//setting up routes
app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", router);

export default app; // exporting the app
