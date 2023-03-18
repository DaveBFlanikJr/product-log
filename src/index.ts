import * as dotenv from "dotenv";
dotenv.config();

import app from "./server"; // using the app we creating in server.js

app.listen(3001, () => {
  console.log("connected to http://localhost:3001");
});
