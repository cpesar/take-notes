// https://www.smashingmagazine.com/2018/01/understanding-using-rest-api/


 //REQUIRED MODULES
 var express = require("express");
 //INSTANTIATE THE SERVER
 var app = express();
 
 var PORT = process.env.PORT || 3000;
 //ROUTES FOR API AND HTML FILES
 var apiRoutes = require("./routes/apiRoutes.js");
 var htmlRoutes = require("./routes/htmlRoutes.js");
 
 
 app.use(express.urlencoded({ extended: true }));
   // PARSE INCOMING JSON DATA 
   //express.json() METHOD- takes incoming POST data in the form of a JSON object and parses it into the req.body javascript object
 app.use(express.json());
 
  //USE THIS MIDDLEWARE ANYTIME WE CREATE A SERVER THAT HAS BOTH JSON DATA AND FRONT-END CODE
 app.use(express.static("public"));
 app.use("/api", apiRoutes);
 app.use("/", htmlRoutes);
 
 //METHOD TO MAKE THE SERVER LISTEN
 app.listen(PORT, function() {
     console.log("App listening on http://localhost:" + PORT);
 });