// Get all of our friend data
var data = require('../yoga.json');

exports.view = function(req, res){
	console.log(data);
	res.render('yoga', data);
};