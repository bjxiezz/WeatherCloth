'use strict';
//connect mongoDB and JS
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/clothes', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});
