
myApp.controller('ctrlSlidesZone', ['$scope', function ($scope) {

			$('.btnLogin').click(function(event) {
				event.preventDefault();
					$.fn.fullpage.moveTo(1, 1);//seccion 1 , slide  de indice: 1
			});

			$('#fullpage').fullpage({
				anchors: ['1'],
				scrollingSpeed: 2000
			});
	
}])

myApp.controller('ctrlSearch', ['$scope', function ($scope) {

	$scope.$watch('search',function(){
		console.log($scope.search)
	})

	var btnSearch = angular.element('.btnSearch');

	btnSearch.click(function(e) {
		console.log("click en search")
		//$('.container-medium').animatescroll({scrollSpeed:2000})
		
	});

	var inputSearch = angular.element('.inputSearch')

	inputSearch.keypress(function(e) {

		if(e.keyCode == 13){
			console.log(true)
			//$('.container-medium').animatescroll({scrollSpeed:2000})
		}

	});
}])
		