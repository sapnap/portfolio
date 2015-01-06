// Get all of our friend data
var data = require('../drawing_data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('drawing', data);
};