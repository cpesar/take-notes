//REQUIRED MODULES
var path = require("path");
var express = require("express");
var app = express();

                  //GET ROUTE FOR notes.html
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

                  //GET ROUTE FOR index.html
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//EXPORT GET ROUTES
module.exports = app;