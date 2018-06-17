$(document).ready(function() {

    //These are the event listeners for the game functionality
    $("time-remaining").hide();
    $("#start-btn").on('click', trivia.startGame);
    $(document).on('click', '#option', trivia.guessChecker);

})

// variables for the game
var trivia = {
    correct = 0,
    incorrect = 0,
    unanswered = 0,
    currentSet = 0,
    timer: 30,
    timerOn = false,
    timerId: '',

// the questions

questions : {
    q1:'How Many Seasons of Game of Thrones Are There?',
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
    q1:7,
    q2:16,
    q3:125,
    q4:100,
    q5:"Dwayne 'The Rock' Johnson",
    q6:1983,
    q7:1994,
    q8:1945,
    q9:"Richrd Nixon",
    q10:"Stephen Harper",

},
// methods to start the trivia game + functions
startGame: function() {
    //restart the game
    trivia.currentSet = 0;
    trivia.unanswered = 0;
    trivia.correct = 0;
    trivia.incorrect = 0; 
    clearInterval(timer.timerId);






    
}




}


