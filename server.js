const express = require("express");
const bodyParder = require("body-parser");

const app = express();
app.use(bodyParder.urlencoded({ extedned: false }));
app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/profile", (req, res) => {
  res.send("Hello profile!");
});
app.listen(3000);
