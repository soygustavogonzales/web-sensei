myApp.controller('ctrlSearch', ['$scope', function ($scope) {
	console.log($scope.search)
	$scope.$watch('search',function(){
		console.log($scope.search)
	})
}])
		