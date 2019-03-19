// FriendFinder by WBM, 1/18/19, server.js file

// To run: node server.js (will start Express server and run application)

// Prereqs on the CLI:
// npm init -y
// npm install express
// npm install path -- https://nodejs.org/docs/latest/api/path.html

// Your server.js file should require the basic npm packages we've used in class: express and path.

// Dependencies
var express = require("express");    

// Create express app instance.
var app = express();

// Set the port of our application -- process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Start server to listen for client requests
app.listen(PORT, function() {
  console.log("App listening on localhost: " + PORT);
});
