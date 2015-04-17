/* set up comprehension check on instructions slide */
	
// display question: happens in conditions.js

// set up button behavior
$('.slide#surveys button').click(function() {

	if ($('textarea#comprehensionCheck').val() == "") {
	window.alert("Please write a description before continuing.");
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