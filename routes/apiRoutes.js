//Start an instance of router
const app = require('express').Router();
const fs = require('fs');

var db = require('../db/db.json');


//GET ROUTE TO READ THE db.json FILE AND RETURN ALL SAVED NOTES 
//GET route = server to client
app.get('/notes', (req, res) => {
  db = JSON.parse(fs.readFileSync('./db/db.json', 'UTF-8'))
  res.json(db);
});


//POST ROUTE TO SAVE NEW NOTE TO THE BODY, ADD TO db.json AND RETURN A NEW NOTE TO THE CLIENT
//POST route = client to server
//This allows users to populate the server with data by sending data from the client side of the application to the server
//Use Insomnia Core to test routes
app.post('/notes', (req, res) => {
  var newNote = req.body;
  db.push(newNote);
  updateDb();
  if(errors){
    res.status(400).json({ errors: errors });
    return;
  }
});




                //HANDLE REQUESTS FOR A SPECIFIC NOTE ID:
//GET ROUTE
app.get('/notes/:id', (req, res) => {
  const result = res.json(req.params.id, notes);
  if(result){
    res.json(result);
  } else {
    res.send(404);
  }
});


//DELETE ROUTE
app.delete('/notes/:id', (req, res) => {
  const params = [req.params.id];

  db.query(params, (err, result) => {
    if(err){
      res.statusMessage(400).json({ error: res.message });
      res.json({
        message: 'Note not found'
      });
    } else {
      res.json ({
        message: 'deleted',
        id: req.params.id
      });
    }
  });
});

  
              
//EXPORT THE APP
module.exports = app;