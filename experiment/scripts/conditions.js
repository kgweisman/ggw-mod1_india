/* set up list of conditions with wordings */ 

function addCondition(condName, wording, compCheckText) {
	function Condition(condName, wording, compCheckText) {
		this.condName = condName;
		this.wording = wording;
		this.compCheckText = compCheckText;
	};
	newCondition = new Condition(condName, wording, compCheckText);
	conditions[newCondition.condName] = newCondition;
};

conditions = {};
addCondition("Communication", 
	"conveying thoughts or feelings to others",
	"They can express to other people how they feel or what they think");
addCondition("Consciousness", 
	"having experiences and being aware of things",
	"They are aware of what is going on around them");
addCondition("Desire", 
	"longing or hoping for things",
	"They sometimes want things");
addCondition("Embarrassment", 
	"experiencing embarrassment",
	"They can sometimes feel ashamed or humiliated");
addCondition("Emotion Recognition", 
	"understanding how others are feeling",
	"They can figure out what other people's emotions are");
addCondition("Fear", 
	"feeling afraid or fearful",
	"They can sometimes feel scared");
addCondition("Hunger", 
	"feeling hungry",
	"They sometimes feel the need to eat food");
addCondition("Joy", 
	"experiencing joy",
	"They can sometimes feel very happy, delighted, or exuberant");
addCondition("Memory", 
	"remembering things",
	"They are able to recollect what has happened in the past");
addCondition("Morality", 
	"telling right from wrong and trying to do the right thing",
	"They are able to decide what actions are good and bad");
addCondition("Pain", 
	"experiencing physical or emotional pain",
	"They sometimes feel discomfort or hurt");
addCondition("Personality", 
	"having personality traits that make it unique from others",
	"They have their own personal character");
addCondition("Planning", 
	"making plans and working toward a goal",
	"They can think ahead to what they will do in the future");
addCondition("Pleasure", 
	"experiencing physical or emotional pleasure",
	"They sometimes feel satisfaction or pleasant sensations");
addCondition("Pride", 
	"experiencing pride",
	"They sometimes feel good about what they or their loved ones have accomplished");
addCondition("Rage", 
	"experiencing violent or uncontrolled anger",
	"They can sometimes feel furious");
addCondition("Self-Control", 
	"exercising self-restraint over desires, emotions, or impulses",
	"They can hold back from doing something if they decide not to do it");
addCondition("Thought", 
	"thinking",
	"They can reflect on things and have ideas");

// set up button behaviors for surveys slide: happens in compcheck.js

// $('.slide#surveys button').click(function() { // select condition
// 	experiment.newData.condition = surveysSlide.condition.condName;
// 	experiment.newData.wording = surveysSlide.condition.wording;
// 	experiment.next();
// 	window.scrollTo(0, 0);
// });

// set up how to display surveys slide

var surveysSlide = {
	list: Object.keys(conditions).map(function (key) {return conditions[key]}),
	order: [],
	condition: ""
}

// fill in compCheck choices

// function fillChoice(condition) {
// 	$('label.radio').filter(value === condition.condName.toLowerCase()).text(condition.compCheckText)
// }

// choose condition randomly

surveysSlide.condition = randomElementNR(surveysSlide.list);

// show random subset of 9 compCheck choices

var conditionsList = surveysSlide.list.slice();
var choiceIndices = [0,1,2,3,4,5,6,7,8];

var chosenIndex = randomElementNR(choiceIndices);
$('#comp-check-choices label').eq(chosenIndex).append(surveysSlide.condition.compCheckText);
$('#comp-check-choices input').eq(chosenIndex).val(surveysSlide.condition.condName.toLowerCase().replace(/\s+/g, ''));

while (choiceIndices.length > 0) {
	var chosenConditionRadio = randomElementNR(conditionsList); 
	var chosenIndexRadio = randomElementNR(choiceIndices);

	while ((surveysSlide.condition === "Joy" && chosenConditionRadio.condName === "Pleasure") || (surveysSlide.conditionsList === "Pleasure" && chosenConditionRadio.condName === "Joy")) {
		chosenConditionRadio = randomElementNR(conditionsList);
	}

	$('#comp-check-choices label').eq(chosenIndexRadio).append(chosenConditionRadio.compCheckText);
	$('#comp-check-choices input').eq(chosenIndexRadio).val(chosenConditionRadio.condName.toLowerCase().replace(/\s+/g, ''));
}

$('.slide#surveys span#survey-descrip1').text(surveysSlide.condition.condName)
$('.slide#surveys span#survey-descrip2').text(surveysSlide.condition.wording);