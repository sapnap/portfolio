// Get all of our friend data
var data = require('../projects.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', data);
};