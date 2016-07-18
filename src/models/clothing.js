'use strict';

var mongoose = require('mongoose');

// clothing.clothType
// clothing.ClothImg

var clothingSchema = new mongoose.Schema({
	clothType: String,
	ClothImg: String
});

var model = mongoose.model('Clothing', clothingSchema);

module.exports = model;
