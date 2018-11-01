//Run the quiz entirely in JS - Original version was running primarily out of HTML which was bad practice

var panel = $("#quiz-table")

//Questions 

var questions = [{
    question: "What Marvel Movie has the titan Thanos as the main villain?",
    answers: ["Infinity War","Ant-Man","Captain America: Winter Soldier","Black Panther"],
    correctAnswer:"Infinity War"
}, {
    question:" In the movie Keanu with Key and Peele, who is Keanu?",
    answers:["Their friend","A cat","A dog","An alpaca"],
    correctAnswer:"A cat"
}, {
    question:"In the movie John Wick, what causes John to seek vengeance?",
    answers:["His dog is murdered","His wife dies","He tries to escape a debt","A need for justice"],
    correctAnswer:"His dog is murdered"
}, {
    question:"Who is the villain in the James Bond movie Spectre?",
    answers:["Blofed","Goldfinger","Jaws","Oddjob"],
    correctAnswer:"Blofed"
}];

//Variable for the setInterval timer 
var timer;


var game = {

    correct: 0,
    incorrect: 0,
    counter: 60,

    countdown: function() {
        game.counter--;
        $("#counter-number").html(game.counter);
        // If time hits 0, then stop the function and run game.done()
        if (game.counter === 0) {
            console.log("Out of Time");
            game.done();
        }
    },

    start: function() {
        timer = setInterval(game.countdown, 1000);
        //prepend inserts the counter into the div on HTML 
        $("#count-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>60</span>&nbspSeconds</h2> ");
        // Removes the start button 
        $("#start").remove();
     
       

        //adds the questions to the quiz area wrapper - including a radio to tie them to the function
        for (var i=0; i < questions.length; i++) {
            panel.append("<h2>" + questions[i].question + "</h2>")
            for (var j=0; j < questions[i].answers.length; j++) {
            panel.append("<input type='radio' name='question'" + i + 
        "'value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
            }
        }


    },

    //function handling the quiz completion - tied to the submit button
    done: function() {
        //checks the answers for each question, and increments the correct or incorrect answers accordingly
        $.each($("input[name='question-0']:checked"), function() {
            if($(this).val() === questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

    $.each($("input[name='question-1]:checked"), function() {
        if($(this).val() === questions[1].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });


    $.each($("input[name='question-2]:checked"), function() {
        if($(this).val() === questions[2].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });


    $.each($("input[name='question-3]:checked"), function() {
        if($(this).val() === questions[3].correctAnswer) {
            game.correct++;
        } else {
            game.incorrect++;
        }
    });

    //runs the result function to generate the incorrect/correct answers for the user
    this.result();
    },

    result: function() {
        clearInterval(timer);
        // removes the timer H2 from view 
        $("#count-wrapper h2").remove();
    
    //Displays end message, Correct/Incorrect/Unanswered Results 
    panel.html("<h2>Thanks for playing!</h2>");
    panel.append("<h3>Correct: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect: " + this.incorrect + "</h3>");
    //Subtracts Incorrect and Correct from total to find the Unanswered questions
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    
    }
};



//Click handle events to actually run the game
// Start button handle
$(document).on("click","#start", function() {
    game.start();
});

//Submit button handle
$(document).on("click","#submit-btn",function() {
    console.log('Button responding');
    game.done();
});

