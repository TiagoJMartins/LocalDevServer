module.exports = function(app) {

	// WILDCARD
	app.get('*', function(req, res) {
		res.redirect('/');
	});
	
}