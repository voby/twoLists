module.exports = function(app) {
	app.directive('goodsList', function() {
		return {
			restrict: 'E',
			template: require('./Goods.template.html'),
			controllerAs: 'goodsCtrl',
			controller: 'GoodsController'
		};
	});
};