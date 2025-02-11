// Create web server

// Load the express module
var express = require('express');

// Load the fs module
var fs = require('fs');

// Create an express server
var app = express();

// Create a route for the home page
app.get('/', function(req, res) {
  // Read the comments from the file
  fs.readFile('comments.json', 'utf8', function(err, data) {
    // Parse the JSON data
    var comments = JSON.parse(data);
    // Create an HTML string of the comments
    var html = '<h1>Comments</h1>';
    html += '<ul>';
    comments.forEach(function(comment) {
      html += '<li>' + comment.name + ': ' + comment.comment + '</li>';
    });
    html += '</ul>';
    // Send the HTML string to the client
    res.send(html);
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});