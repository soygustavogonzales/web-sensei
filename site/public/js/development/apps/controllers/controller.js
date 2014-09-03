myApp.service('srvData', [function () {
	this.data = [];

}])

myApp.controller('ctrlContentProfesores', ['$scope','srvData','efx','$interval', function ($scope,srvData,efx,$interval) {

	var totalTeachers = 13;
	$scope.listTeachers = [];
	var uploadTeachers = function(){
		var cont = totalTeachers;
		while(--cont){
			$scope.listTeachers.push({urlImage:'/img/home/fondos/fondo'+cont+'.jpg',urlVideo:''})
		}	
	}
	
	uploadTeachers();

	var downloadTeachers = function(){
		var cont = totalTeachers;
		while(--cont){
			$scope.listTeachers.splice(cont,1)
		}
	}

	efx.startMixiupTeachers();

}])

myApp.controller('ctrlContentVideos', ['$scope','srvData','efx','$interval', function ($scope,srvData,efx,$interval) {//controla la zona de videos

	var totalTeachers = 13+4;
	$scope.listVideos = [];
		$('.showVideos,.hideVideos').click(function(event) {
			console.log("click "+this.className)
		});

	var uploadVideos = function(callback){
		var cont = totalTeachers;
		while(--cont){
			$scope.listVideos.push({urlImage:'/img/home/fondos/fondo'+cont+'.jpg',urlVideo:''})
		}
		return callback()	
	}
	
	uploadVideos(function(){
		//efx.startSlimScrollVideos();
		efx.startMixiupVideos();

	});

	var downloadVideos = function(){
		var cont = totalTeachers;
		while(--cont){
			$scope.listVideos.splice(cont,1)
		}
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
		