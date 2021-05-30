//REQUIRED MODULES
var path = require("path");
var express = require("express");
var app = express();

            //GET ROUTE TO RETURN notes.html FILE
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

            //GET ROUTE TO RETURN index.html FILE
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//EXPORT GET ROUTES
module.exports = app;