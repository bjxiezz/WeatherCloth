app.service('dataService', function($http, $q) {
	this.inputDay = function (){
		if (window.location.pathname.includes("index2") ){//what is the current webpage 
				return 1;
			} else {
				return 0;
			}
	}
	
	this.getClothes = function(cb) {
		$http.get('/api/clothes').then(cb);
	};
	

});



