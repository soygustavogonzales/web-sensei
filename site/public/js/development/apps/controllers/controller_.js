
myApp.controller('ctrlContentVideos', ['$scope','$interval', function ($scope,$interval) {//controla la zona de videos
	var total = 12;
	$scope.listVideos = [];
	$scope.listVideos.length = 0;
	$scope.hideVideos = function(){
		if($scope.listVideos.length=total){

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
		
	$scope.showVideos = function(){
			var i = 1;
			var stop = $interval(function(){
				//console.log(srvData.data)
				$scope.listVideos.push({urlImage:'/img/home/fondos/fondo'+i+'.jpg',urlVideo:''});
				i++;
				if(i>total){
					$interval.cancel(stop);
					//stop = undefined;
					i = 1;
				}
			},100)

	}


}])



		