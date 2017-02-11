var express = require('express');

// Create our app
var app = express();

app.use(express.static('build'));

app.listen(9191, function () {
  console.log('Express server is up on port 9191');
});
