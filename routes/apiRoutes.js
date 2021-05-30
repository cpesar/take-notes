const app = require('express').Router();
const fs = require('fs');

var db = require('../db/db.json');



app.get('/notes', (req, res) => {
  db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'))
  res.json(db);
})

module.exports = app;