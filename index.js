const express = require("express");
const app = express();
const path = require("path");

// view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files (CSS)
app.use(express.static("public"));

// Home Page Route
app.get("/", (req, res) => {
    res.render("index");
});

// server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});