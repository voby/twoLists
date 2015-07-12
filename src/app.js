var angular = require('angular');

var app = angular.module('twoLists', []);

require('./goods/index.js')(app);
require('./people/index.js')(app);

require('./styles/index.styl');
