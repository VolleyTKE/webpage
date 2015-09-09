

/* Controllers */
var App = angular.module('App', []);

App.controller('ItemManagerCtrl', ['$scope','$http', function ($scope,$http) {
	$scope.item = {};
	//get all tasks
	
	$http.get('http://localhost:8001/api/getAllItems').success(function(data) {
	$scope.items = data;});	
	$scope.name = "World";
	
  
    //add a new task
	
	
 $scope.addItem = function addItem() {
	 console.log("I was hit!");
  
   $http.post('http://localhost:8001/api/addItem', {
             upc: $scope.upc,
             itemName: $scope.itemName,
             company: $scope.company,
			 dateEntered: $scope.dateEntered,
			 expirationDate: $scope.expirationDate
             
         }).
    success(function(data, status, headers) {
		$scope.item = {}; 
		$scope.items.push(data);
    console.log("Task added");
             //var newTaskUri = headers()["location"];
             //console.log("Might be good to GET " + newTaskUri + " and append the task.");
             // Refetching EVERYTHING every time can get expensive over time
             // Better solution would be to $http.get(headers()["location"]) and add it to the list
             //findAllTasks();
	});
  
  
 };
  
  $scope.orderProp = 'expirationDate';
}]);

