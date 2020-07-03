// import jquery-3.4.0
//document.write('<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>');
//document.write('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>');

// import `utils.js`
document.write('<script type="text/javascript" src="./js/utils.js"></script>');



// import w3-include
//document.write('<script src="http://www.w3schools.com/lib/w3data.js"></script>');

function showAbout() {
	/*var about = document.getElementById("about");
	about.style.display = initial;

	var about = document.getElementById("skills");
	about.style.display = initial;

	var element = document.getElementById("training");
	element.style.display = none;

	var element = document.getElementById("education");
	element.style.display = none;

	var element = document.getElementById("experience");
	element.style.display = none;*/
	$("#about").show();
	$("#skills").show();
	$("#training").hide();
	$("#education").hide();
	$("#experience").hide();
}

function showTraining() {
	$("#training").show();
	$("#skills").hide();
	$("#about").hide();
	$("#education").hide();
	$("#experience").hide();
}

function showEducation() {
	$("#education").show();
	$("#skills").hide();
	$("#about").hide();
	$("#training").hide();
	$("#experience").hide();
}

function showExperience() {
	$("#experience").show();
	$("#skills").hide();
	$("#about").hide();
	$("#education").hide();
	$("#training").hide();
}

