/* set up comprehension check on instructions slide */
	
// display question: happens in conditions.js

// set up button behavior
$('.slide#surveys button').click(function() {
	var keyCondName = surveysSlide.condition.condName;
	var keyWording = surveysSlide.condition.wording;

	if ($('textarea#comprehensionCheck').val() == "") {
	window.alert("Please write a description before continuing.");
	} else if ($('textarea#comprehensionCheck').val().toLowerCase().indexOf(keyCondName.toLowerCase()) > -1) {
	window.alert("Please use your own words to describe what this means. Do not use the word '"+keyCondName.toLowerCase()+"'.");
	} else if ($('textarea#comprehensionCheck').val().toLowerCase().indexOf(keyWording.toLowerCase()) > -1) {
	window.alert("Please use your own words to describe what this means. Do not use the words '"+keyWording.toLowerCase()+"'.");
	} else {
		// record data
		experiment.newData.comprehensionCheck = $('textarea#comprehensionCheck').val();

		// set parameters of this session
		experiment.newData.condition = surveysSlide.condition.condName;
		experiment.newData.wording = surveysSlide.condition.wording;

		// go to first trial
		experiment.next();
		window.scrollTo(0, 0);
	}

});