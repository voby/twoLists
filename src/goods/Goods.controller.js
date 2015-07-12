module.exports = function(app) {	
	app.controller('GoodsController', function() {
			var vm = this;

			vm.showList = true;
			vm.toggle = toggle;
			vm.onSubmit = onSubmit;
			vm.list = [
				{name: "Milk", price: "2.99"},
				{name: "Water", price: "0.99"},
				{name: "Pastry", price: "1.39"},
				{name: "Pizza", price: "9.99"},
				{name: "Cake", price: "3.99"},
			];

			function toggle() {
				vm.showList = !vm.showList;
			}

			function onSubmit(itemName) {
				var itemPrice = Math.random()*10;
				var newItem = {name: itemName, price:itemPrice};
				vm.list.push(newItem);
				vm.itemName = '';
			}
	});
};