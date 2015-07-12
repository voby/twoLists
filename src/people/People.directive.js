module.exports = function(app) {
	app.directive('peopleList', function() {
		return {
			restrict: 'E',
			template: require('./People.template.html'),
			controller: 'PeopleController',
			controllerAs: 'peopleCtrl'
		};
	});
};
