app.controller('mainCtrl', function($scope, dataService) {
	$scope.list = [];
	$scope.text = 'City, State'; 

	inputDay = dataService.inputDay();
	
	$scope.submit = function() {
		if ($scope.text) {
			inputCity_value=this.text;

			$.simpleWeather({	// v3.1.0, Docs at http://simpleweatherjs.com
				location: inputCity_value,
				woeid: '',
				unit: 'f',
				success: function(weather) { 
					//show weather info
					html = '<h2><i class="icon-'+weather.forecast[inputDay].code+'"></i> '+weather.forecast[inputDay].high+'&deg;'+weather.units.temp+'</h2>';
					html += '<ul><li>'+weather.city+', '+weather.region+'</li><p/>';
					html += '<li class="currently">'+weather.currently+'</li><p/>';
					html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
					$("#weather").html(html);
								
					//select cloth imagine and show cloth imagine
						if (weather.forecast[inputDay].high > 80) {
							clothImagine = 'img/cloth/Tshirt.jpg'					
						} else if (weather.forecast[inputDay].high > 60){
							clothImagine = 'img/cloth/shirt.jpg'
						} else if (weather.forecast[inputDay].high > 40){
							clothImagine = 'img/cloth/jacket.jpg'
						} else {
							clothImagine = 'img/cloth/Coat.jpg'
						}
						htmlImg = '<img src="' + clothImagine + '" alt="clothOfWeather" style="width:228px;height:228px;">';
						$("#cloth").html(htmlImg);
				},//end of success
				error: function(error) {
				  $("#weather").html('<p>'+error+'</p>');
				}//end of error
			});//end of simpleWeather
		};//end of if
	};//end of $scope.submit
});//end of controller

