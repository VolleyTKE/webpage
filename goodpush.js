

/* Controllers */
var App = angular.module('App', []);

App.controller('ItemManagerCtrl', ['$scope','$http', function ($scope,$http) {
	$http.get('http://localhost:8001/api/getAllItems').success(function(data) {
	$scope.items = data;});	
	$scope.name = "World";
  
    
  
  $scope.orderProp = 'expirationDate';
}]);
