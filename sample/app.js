const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(PORT, () => console.log(`Successfully running on port ${PORT}`));
