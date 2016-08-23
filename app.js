var myApp = angular.module('myApp', ['ngTouch','ui.grid','ui.grid.selection']);

myApp.controller('MainCtrl', ['$scope','uiGridConstants', function($scope, uiGridConstants){

	$scope.myData = [
	    {
	        "firstName": "Cox",
	        "lastName": "Carney",
	        "company": "Enormo",
	        "employed": true
	    },
	    {
	        "firstName": "Lorraine",
	        "lastName": "Wise",
	        "company": "Comveyer",
	        "employed": false
	    },
	    {
	        "firstName": "Nancy",
	        "lastName": "Waters",
	        "company": "Fuelton",
	        "employed": false
	    }
	];

	$scope.gridOptions = { 
		data: $scope.myData,
		enableRowSelection: true,
		enableSelectAll: true,
		selectionRowHeaderWidth: 35,
		rowHeight: 35,
		showGridFooter:true
	};
	

	$scope.options = [
		{
			"value":"1",
			"label":"Claim"
		},
		{
			"value":"2",
			"label":"This"
		},
		{
			"value":"3",
			"label":"That"
		},

	]

}])