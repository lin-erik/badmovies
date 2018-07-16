var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();

var apiHelpers = require('./apiHelpers.js');

app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, res) {
    // get the search genre
    console.log('Search body', req.query.genreId);

    apiHelpers.search(req.query.genreId, (err, data) => {
      res.send(data);
    });
});

app.get('/genres', function(req, res) {
    // make an axios request to get the list of official genres
    apiHelpers.genre( (err, data) => {
        res.send(data);
    });
});

app.post('/save', function(req, res) {

});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
