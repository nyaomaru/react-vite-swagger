'use strict';

// // Import the required modules
var express = require('express');
var cors = require('cors');

// Import the Login controller
var loginController = require('./controllers/Login');

// Create an Express application
var app = express();

// Add CORS middleware to handle CORS headers
app.use(cors());

app.get('/login', loginController.loginGET);

// Handle OPTIONS requests explicitly
app.options('*', cors()); // Enable pre-flight across all routes

// Start the server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port);
});
