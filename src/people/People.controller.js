module.exports = function(app) {
	app.controller('PeopleController', function() {
		var vm = this;

		vm.showList = true;
		vm.toggleList = toggleList;
		vm.addPerson = addPerson;
		vm.deletePerson = deletePerson;
		vm.list = [
			{name: 'Louie', city: 'NY', age: 47, userpic: 'louie'},
			{name: 'Steve', city: 'LA', age: 69, userpic: 'steve'},
			{name: 'Chris', city: 'NY', age: 50, userpic: 'chris'},
		];

		function toggleList() {
			vm.showList = !vm.showList;
		}

		function addPerson(name, city) {
			var age = Math.floor(Math.random() * 100);
			var newPerson = {name: name, age: age, city: city, userpic: 'default'};
			vm.list.push(newPerson);
			vm.personName = '';
			vm.personCity = '';
		}

		function deletePerson(index) {
			vm.list.splice(index, 1);
		}
	});	
};
