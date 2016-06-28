
var $inputCity = $("#inputCity");

  
$("form").submit(function(event){
	event.preventDefault(); 
    //alert(inputCity.value);

  
  $.simpleWeather({	// v3.1.0, Docs at http://simpleweatherjs.com
    location: inputCity.value,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
      $("#weather").html(html);
	  
	  
	  alert(weather.temp);
	  htmlImg = '<img src="img/cloth/summer_man.png" alt="clothOfWeather" style="width:228px;height:228px;">';
	  $("#cloth").html(htmlImg);
    },//end of success
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }//end of error
  });//end of simpleWeather
  
  
  
}); //end of form.sumbit  
  
