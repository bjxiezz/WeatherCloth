app.controller('ChangeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.n = 0;
	$scope.count = 0;
    $scope.changeClothing = function() {
		$scope.count++;
		//console.log("ChangeCtrl: " + $rootScope.selectedClothes);
		$scope.n = $scope.count % $rootScope.selectedClothes.length;
		$scope.clothImagine = $rootScope.selectedClothes[$scope.n].ClothImg;
		//console.log($scope.clothImagine);//img file name
		$scope.clothImagine = 'img/cloth/' + $scope.clothImagine;//add path to clothImagine 
		htmlImg = '<img src="' + $scope.clothImagine + '" alt="clothOfWeather" style="width:228px;height:228px;">';
		$("#cloth").html(htmlImg);
    };
	
}]);//end of controller

