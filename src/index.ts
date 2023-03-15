import app from "./server"; // using the app we creating in server.js

app.listen(3001, () => {
  console.log("connected to http://localhost:3001");
});
