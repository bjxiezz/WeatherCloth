'use strict';
var express = require('express');
var clothes = require ('../../mock/clothes.json');
var router = express.Router();

router.get('/clothes', function(req, res){
	res.json({clothes:clothes});
});

module.exports = router;
