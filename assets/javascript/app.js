const quizContainer = document.getElementsById("quiz");
const resultsContainer = document.getElementsById("results");
const submitButton = document.getElementsById("submit");


function buildQuiz();
function showResults();

// display quiz right away
buildQuiz();

// show results on submit
submitButton.addEventlistener('click', showResults); 

const my Questions = [
    {question: "How many seasons of Game of Thrones are there?",
    amswers: {
        a: "3",
        b: "5",
        c: "7",
        d: "8",
    },
    correctAnswer: "d"
},

{
    question: ""
}
    
    
    
    }
]