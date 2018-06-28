 //All GLOBAL VARIABLES + FUNCTIONS SHOULD BE DECLARED AT THE TOP - running code goes after//


// variables for the game
var trivia = {
    correct : 0,
    incorrect : 0,
    unanswered : 0,
    currentSet : 0,
    timer : 30,
    timerOn : false,
    timerId : '',
    questionCounter : 0, 

// the questions

questions : {
    q1:'How Many Sesasons of Game of Thrones Are There?',
    q2:'How many ounces in a pound?',
    q3:'What is the highest level you can reach in World of Warcraft?',
    q4:'How many players are there in a game of Fortnite?',
    q5:'Who is the highest paid actor in Hollywood?',
    q6:'What year was the internet created?',
    q7:'What year was the first text message sent?',
    q8:'What year did World War II end?',
    q9:'Who was the President of the United States in 1969?',
    q10: 'Who was the Prime Minister of Canada in 2009?',
},

options : {
    q1:[3, 4, 7, 8],
    q2:[16, 20, 5, 14],
    q3:[60, 80, 125, 100],
    q4:[10, 100, 50, 25],
    q5:["Dwayne 'The Rock' Johnson", "Brad Pitt", "George Clooney","Steven Seagal"],
    q6:[1990, 1983, 1967, 1945],
    q7:[1994, 1999, 2002, 2000],
    q8:[1985, 1942, 1939, 1945],
    q9:["Steven Seagal", "Richard Nixon", "John F. Kennedy", "Lyndon B. Johnson"],
    q10:["Justin Trudeau","Stephen Harper", "Jean Chretien", "John Diefenbaker"]

},

answers : {
    q1: 7,
    q2: 16,
    q3: 125,
    q4: 100,
    q5: "Dwayne 'The Rock' Johnson",
    q6: 1983,
    q7: 1994,
    q8: 1945,
    q9: "Richard Nixon",
    q10: "Stephen Harper",

},

 // Evaluating the click options - function
 guessChecker:  function() {

    //answer to the current asked question
    var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];

    // correct answer method
    if ($(this).text() === currentAnswer) {
        trivia.correct++;
        clearInterval(trivia.timerId);
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h2>Correct Answer!</h2>');
    }
    else {
        trivia.incorrect++;
        resultId = setTimeout(trivia.guessResult, 1000);
        $('#results').html('<h2>Incorrect Answer!</h2>');
    }

},

// methods to start the trivia game + functions
startGame: function() {
    //restart the game
    trivia.currentSet = 0;
    trivia.unanswered = 0;
    trivia.correct = 0;
    trivia.incorrect = 0;
    clearInterval(timer.timerId);

// make the game section show
$('#game').show();

// reset previous results
$('#results').html('');

// timer
$('#timer').text(trivia.timer);

// hide the start button
$('#start-btn').hide();

$('#time-remaining').show();

//start questions
trivia.nextQuestion();

},
//questions and options loop
nextQuestion : function() {
    var questionArray = Object.keys(trivia.questions); //['q1', 'q2']
    var questionKey = questionArray[this.questionCounter]; // 'q1'
    var questionText = trivia.questions[questionKey]; 
    console.log(questionText);
    $('#question').text(questionText);
    
 //30 second timer
    trivia.timer = 30;
    $('#timer').text(trivia.timer);

//timer function - prevent speed up
    if(!trivia.timerOn) {
        trivia.timerID = setInterval(timerRunning, 1000);
    }

}

};
//create trivia questions in html
function createOptions() {
    $.each(trivia.options, function(index, key) {
        $('#options').append('<button class="option-btn">'+ key +"</button>");
    })

}
//if the timer runs out, make it count as "unanswered"
function timerRunning() {
    // if timer still has time left and not all questions have been asked
    if(trivia.timer > -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
        $('#timer').text(trivia.timer);
        trivia.timer--;
        }
    // time is up and unanswered is calculated, run the result
    else if(trivia.timer === -1) {
        trivia.unanswered++;
        clearInterval(trivia.timerId);
        resultID = setTimeout(trivia.guessResult, 1000);
        //generate the results in the HTML
        $('#finalResults').html('<h2>Out of time! The answers were ' + Object.values(trivia.answers) +'</h2');
    }
    // if all questiosn shown at the end, show the results
    else if(trivia.currentSet === Object.key(trivia.questions).length) {

        //add game results up - CHANGE THIS TO FILL IN RESULTS CONTAINER

            $('#gameContainer').html('<h2>Thanks for playing!</h2>');
            $('#correct').html("Correct: " + trivia.correct);
            $('#incorrect') + trivia.correct;
            $('#unanswered') + trivia.unanswered;

        // hide the game section

            $('#game'),hide();

        // show start button again

            $('#start-btn').show();
    }
   

    // removing previous questionr esults and options
    function guessResult() {
        // next question set
        trivia.currentSet++;

        //remove the options and results
        $('#options').remove();
        $('#results').remove();

        //next question
        trivia.nextQuestion();
    }
    }

$(document).ready(function() {

    //These are the event listeners for the game functionality
    $("time-remaining").hide();
    $("#start-btn").on('click', function() {
        trivia.startGame();
        createOptions();
        timerRunning();
        trivia.guessChecker();

    })

});
