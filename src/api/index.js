'use strict';
var express = require('express');
var Clothing = require('../models/clothing');
//var clothes = require ('../../mock/clothes.json');
var router = express.Router();

router.get('/clothes', function(req, res){
	Clothing.find({}, function(err, clothes) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({clothes:clothes});
  });	
});

module.exports = router;
