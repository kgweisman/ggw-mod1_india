/* set up comprehension check on instructions slide */
	
// display question: happens in conditions.js

// set up attempts counter
var attempts = [];

// set up button behavior
$('.slide#surveys button').click(function() {

	// store condition
	var keyCondName;
	if (surveysSlide.condition.condName === "Emotion Recognition") {
		keyCondName = "emotionRecognition";
	} else if (surveysSlide.condition.condName === "Self-Control") {
		keyCondName = "selfControl";
	} else {
		keyCondName = surveysSlide.condition.condName.toLowerCase();
	}

	// store answer
	var answer = $('input[name=compCheck]:checked', '#comp-check-form').val();

	if (answer === undefined) {

		// request answer
		window.alert ("Please select the best answer from the options provided.");			

	} else if (answer !== keyCondName) {

		// record attempt
		attempts.push(answer);

		if (attempts.length >= 3) {
			// give sterner warning
			window.alert("That is not the correct answer. You need to find the correct answer before you can continue this survey. If you are unable to find the correct answer, please return this HIT.");

		} else {
			// give another try
			window.alert ("That is not the correct answer. Please try again.");				
		}

	} else {

		// record attempt
		attempts.push(answer);

		// record data
		experiment.newData.comprehensionCheck = attempts;

		// set parameters of this session
		experiment.newData.condition = surveysSlide.condition.condName;
		experiment.newData.wording = surveysSlide.condition.wording;

		// go to first trial
		experiment.next();
		window.scrollTo(0, 0);
	}

});