myApp.service('srvData', [function () {
	this.data = [];

}])

myApp.controller('ctrlContentProfesores', ['$scope','srvData','$interval', function ($scope,srvData,$interval) {
	var totalTeachers = 6;
	$scope.listTeachers = [];

	$scope.showTeachers = function(){
			var i = 1;
			var stop = $interval(function(){
				//console.log(srvData.data)
				$scope.listTeachers.push({urlImage:'/img/home/fondos/fondo'+i+'.jpg',urlVideo:''});
				i++;
				if(i>totalTeachers){
					$interval.cancel(stop);
					//stop = undefined;
					i = 1;
				}
			},100)
	}
	$scope.hideTeachers = function(){
		if($scope.listTeachers.length=totalTeachers){

			var i = 11;
			var finish = $interval(function(){
				$scope.listTeachers.splice(i,1)
				i--;
				if(i==-1){
					$interval.cancel(finish);
					//stop = undefined;
					i = 11;
				}			
			},100)
		}
			
			//$scope.listTeachers.length = 0;
	}	
}])

myApp.controller('ctrlContentVideos', ['$scope','srvData','$interval', function ($scope,srvData,$interval) {//controla la zona de videos
	var totalVideos = 12;
	$scope.listVideos = [];

	$scope.$watch('listVideos',function(){
		if($scope.listVideos.length)
			console.log($scope.listVideos)
	})

	$scope.showVideos = function(){
			var i = 1;
			var stop = $interval(function(){
				//console.log(srvData.data)
				$scope.listVideos.push({urlImage:'/img/home/fondos/fondo'+i+'.jpg',urlVideo:''});
				i++;
				if(i>totalVideos){
					$interval.cancel(stop);
					//stop = undefined;
					i = 1;
				}
			},100)
	}
	$scope.hideVideos = function(){
		if($scope.listVideos.length=totalVideos){

			var i = 11;
			var finish = $interval(function(){
				$scope.listVideos.splice(i,1)
				i--;
				if(i==-1){
					$interval.cancel(finish);
					//stop = undefined;
					i = 11;
				}			
			},100)
		}
			
			//$scope.listVideos.length = 0;
	}



}])

myApp.controller('ctrlSlidesZone', ['$scope','srvData', function ($scope,srvData) {
	console.log(srvData)
			$('.btnLogin').click(function(event) {
				event.preventDefault();
					$.fn.fullpage.moveTo(1, 1);//seccion 1 , slide  de indice: 1
			});
		var readyData = function(){
			srvData.data.length = 0;
			for (var i = 12 ; i > 0; i--){
				srvData.data.push({urlImage:'/img/home/fondos/fondo'+i+'.jpg',urlVideo:''});
			}
			console.log(srvData.data)
		}
			$('.btnRegister').click(function(event) {
				event.preventDefault();
					$.fn.fullpage.moveTo(1, 2);//seccion 1 , slide  de indice: 2
			});

}])

myApp.controller('ctrlSearch', ['$scope', function ($scope) {

	$scope.$watch('search',function(){
		if($scope.search)
			console.log($scope.search)
	})

	var btnSearch = angular.element('.btnSearch');

	btnSearch.click(function(e) {
		//Nos transportamos hacia donde se encuentran los profesores segun el math
					$.fn.fullpage.moveTo(2, 1);//seccion 2 , slide  de indice: 1
	});

	var inputSearch = angular.element('.inputSearch')

	inputSearch.keypress(function(e) {

		if(e.keyCode == 13){
				//Nos transportamos hacia donde se encuentran los profesores segun el math
					$.fn.fullpage.moveTo(2, 1);//seccion 2 , slide  de indice: 1
		}

	});
}])
		