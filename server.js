const express = require('express');
var express = require('express');

const app = express();

app.listen(3000, function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening on port 3000');
  }
});

