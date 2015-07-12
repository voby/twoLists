module.exports = function(app) {
	require('./People.controller.js')(app);
	require('./People.directive.js')(app);
};