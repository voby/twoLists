module.exports = function(app) {
	require('./Goods.controller.js')(app);
	require('./Goods.directive.js')(app);
};