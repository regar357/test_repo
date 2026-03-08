const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD, welcome, 123, last");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
