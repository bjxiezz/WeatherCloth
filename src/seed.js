'use strict';

var Clothing = require('./models/clothing');

var clothes = [
	{"clothType": "Tshirt", "ClothImg": "Tshirt.jpg"},
	{"clothType": "Tshirt", "ClothImg": "Tshirt2.jpg"},
	{"clothType": "Tshirt", "ClothImg": "Tshirt3.jpg"},
	{"clothType": "shirt", "ClothImg": "shirt.jpg"},
	{"clothType": "shirt", "ClothImg": "shirt2.jpg"},
	{"clothType": "shirt", "ClothImg": "shirt3.jpg"},
	{"clothType": "jacket", "ClothImg": "jacket.jpg"},
	{"clothType": "jacket", "ClothImg": "jacket2.jpg"},
	{"clothType": "jacket", "ClothImg": "jacket3.jpg"},
	{"clothType": "coat", "ClothImg": "coat.jpg"},
	{"clothType": "coat", "ClothImg": "coat2.jpg"},
	{"clothType": "coat", "ClothImg": "coat3.jpg"}
];

clothes.forEach(function (clothing, index) {
  Clothing.find({ 'ClothImg': clothing.ClothImg}, function(err, clothes) {
  	if (!err && !clothes.length) {
      Clothing.create({ clothType: clothing.clothType, ClothImg: clothing.ClothImg});
  	}
  });
});
