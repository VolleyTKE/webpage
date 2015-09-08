var pantryItemApp = angular.module('pantryItemApp', []);

pantryItemApp.controller('ItemManagerCtrl', function ($scope) {
	$scope.name = "World";
  $scope.items = [
    {"itemId":1,
	"upc":2147483647,
	"itemName":"flour",
	"company":"gold medal",
	"dateEntered":2015,
	"expirationDate":2017,
	"quantity":2},
	{"itemId":2,
	"upc":1234567890,
	"itemName":"sugar",
	"company":"C & H",
	"dateEntered":2015,
	"expirationDate":2020,
	"quantity":2},
	{"itemId":3,
	"upc":198765432,
	"itemName":"chocolate chips",
	"company":"nestle",
	"dateEntered":2015,
	"expirationDate":2020,
	"quantity":3},
{"itemId":4,"upc":2147483647,"itemName":"eggs","company":"farm fresh","dateEntered":2015,"expirationDate":2015,"quantity":4},
{"itemId":5,"upc":1234567890,"itemName":"rasberries","company":"Driscol","dateEntered":2015,"expirationDate":2015,"quantity":3},
{"itemId":6,"upc":198765432,"itemName":"blueberries","company":"Driscol","dateEntered":2015,"expirationDate":2015,"quantity":3},
{"itemId":7,"upc":2147483647,"itemName":"postTest","company":"post","dateEntered":2015,"expirationDate":2017,"quantity":2}	
  ];
  
  $scope.orderProp = 'expirationDate';
});

