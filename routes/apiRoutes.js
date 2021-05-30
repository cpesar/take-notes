//Start an instance of router
const app = require('express').Router();
const fs = require('fs');
const path = require('path');

// var db = require('../db/db.json');


//GET ROUTE TO READ THE db.json FILE AND RETURN ALL SAVED NOTES 
//GET route = server to client
app.get('/notes', (req, res) => {
  let db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'))
  res.json(db);
});


//POST ROUTE TO SAVE NEW NOTE TO THE BODY, ADD TO db.json AND RETURN A NEW NOTE TO THE CLIENT
//POST route = client to server
//This allows users to populate the server with data by sending data from the client side of the application to the server
//Use Insomnia Core to test routes
app.post('/notes', (req, res) => {
  let newNote = { 
    //id attaches a number that can be referenced for deleting the note
    id: Math.floor(Math.random() * 5000),
    title: req.body.title,
    text: req.body.text
  };
  //read file before append
  let db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'))
  db.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(db), function(err, res) {
    if (err) {
        throw err;
    }
  });
  res.json(db);
});




                //HANDLE REQUESTS FOR A SPECIFIC NOTE ID:
// GET ROUTE
app.get('/notes/:id', (req, res) => {
  
  let db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'))
  const result = db.filter(note => note.id === req.params.id)
  if(result){
    res.json(result);
  } else {
    res.send(404);
  }
});


//DELETE ROUTE
app.delete('/notes/:id', (req, res) => {

  let db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'))
  //The filter() method will loop through the JSON data and find the note that is selected to be deleted
  const deleteNote = db.filter(note => note.id != req.params.id)

  fs.writeFileSync("./db/db.json", JSON.stringify(deleteNote), function(err, res) {
    if (err) {
        throw err;
    }
  });
  res.json(deleteNote);
});

  
              
//EXPORT THE APP
module.exports = app;