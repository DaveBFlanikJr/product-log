import * as dotenv from "dotenv";
dotenv.config();

import app from "./server"; // using the app we creating in server.js

const ip = 3001;

app.listen(ip, () => {
  console.log(`connected to server: ${ip}`);
});
