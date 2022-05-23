const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: "../../config/config.env" });

app.use(express.static(path.join(__dirname, "../../../dist/public/main.js")))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../dist/public/index.html"));
});
app.get("/other", (req, res) => {
  res.sendFile(path.join(__dirname, "./other.html"));
});

const PORT = process.env.PORT || 8200;
app.listen(PORT, console.log("EXPRESS"));
