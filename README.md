This project is to fufill the requirement of CodeLouisville training for JavaScrip
The detail requirments:
https://docs.google.com/presentation/d/1A1P955ZlZKez2w3ENOrERpRln67Z9hfIxFPj5U1Ig6I/edit#slide=id.p
https://github.com/CodeLouisville/Student-Resources/wiki/Project-Requirements


Here are some examples of projects built using the MEAN stack (full-stack JavaScript): http://www.fullstackacademy.com/student-gallery

You’re the first group to learn/use the MEAN stack, so we don’t have any full-stack JS examples to show from prior Code Louisville graduates, 
but you can find a list of demo videos (we no longer record these) on our YouTube channel, here: 
https://www.youtube.com/playlist?list=PLKFlVlvK_fALmJ2QLM9PxOMb3qTubclsz


Git commands to update files at Github
	(right click on the folder, and select "Git Bash Here")
	git init //only used for the 1st time
	git add .
	git commit -m 'some message for the update'
	git remote -v
	git remote add origin https://github.com/bjxiezz/Weather.git // only for the first time
	git push origin master
	
	--copy from gitHub to local computer drive
	git clone https://github.com/bjxiezz/Weather.git

Cities to test the app (We can use any city all over the world)
	Prudhoe bay, AL
	Louisville, KY
	Manaus, Brazil
	Punta Arenas, Chile
	Puerto Montt, Chile
	

History of this project
(1) jQuery plugin simpleweatherjs working locally
	estabolish a html/css/JS website using jquery plugin "simpleWeather"
		version 3.1.0, website: http://simpleweatherjs.com/
(2) fix font problem
	download all font files used in style.css and save them in the folder ../font/
	change the links in the css file to pointing to the new location of the font files
(3) add a form with a submit button to change the input city
	html, form: example from http://www.w3schools.com/html/html_forms.asp
	JS/jQuery.submit()example from https://api.jquery.com/submit/
(4) add cloth
	cloth image from website: https://www.thenorthface.com/
(5) switch to Angular and put on 3 pages structure
	remove cloth
	angular submition of a form, and Enables binding angular expressions to onsubmit events
		example from: https://docs.angularjs.org/api/ng/directive/ngSubmit
		'use strict' does not work for controller
(6) Show cloth with if selection based on highest temp 
		using JavaScript if ... else statement
(7) finish 3 page structure
(8) using Angular service 
	change ng-app in index.html index2.html "submitCity" to "weatherCloth", and move to body tag
	change controller name from ExampleController to mainCtrl
	test angular service using example at http://www.w3schools.com/angular/angular_services.asp
	using angular service to determine today/tomorrow based on current url
(9) fix the alignment problem at about.html
(10) add angular directives for about.html
(11) add node.js and express (static part)
(12) add mock data
(13) tried move scripts to app directory, but failed
(14) Added Change the cloth function 
(15) Setting Up MongoDB
(16) Fixed screen width problem
		
