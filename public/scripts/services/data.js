app.service('dataService', function() {
	this.inputDay = function (){
		if (window.location.pathname.includes("index2") ){//what is the current webpage 
				return 1;
			} else {
				return 0;
			}
	}
});



