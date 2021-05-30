const app = require('express').Router();
const fs = require('fs');

var db = require('../db/db.json');


        //GET ROUTE TO READ THE db.json FILE AND RETURN ALL SAVED NOTES 
app.get('/notes', (req, res) => {
  db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'))
  res.json(db);
});


    //POST ROUTE TO SAVE NEW NOTE TO THE BODY, ADD TO db.json AND RETURN A NEW NOTE TO THE CLIENT
app.post('/notes', (req, res) => {

})

module.exports = app;