function buildQuiz() {
    // store HTML output
    const output = [];

    /* For brevity, we’re using an arrow function to perform our operations on each question. 
    Because this is in a forEach loop, we get the current value, the index (the position number of the current item in the array), 
    and the array itself as parameters. We only need the current value and the index, which for our purposes, 
    we’ll name currentQuestion and questionNumber respectively. */

    // for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //store list of answer choices
            const answers = [];

            // for each available answer
            for (letter in currentQuestion.answers) {
                //HTML radio button

                answers.push(
                    <label>
                        <input type="radio" name="question${questionNumber}" value="${letter}"></input>
                        ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>
                );
            }

            // add this questions and its answers to output
            output.push(
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")}</div>

            );
        });
    quizContainer.innerHTML = output.join("");
}

function showResults() {
    // gather answer containers from quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    //keep track of user's answers
    let numCorrect = 0;

    // for each question
    myQuestions.forEach((currentQuestion, questionNumber) => {

        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = 'input[name=question' + questionNumber + ']:checked';
        const userAnswer = (answerContainer.querySelector(selector) ||
            {}).value

        //if answer is RIGHT
        if (userAnswer === currentQuestion.correctAnswer) {
            //add to number of correct answers
            numCorrect++;

            //color the answers to green
            answerContainers[questionNumber].style.colore = 'green'
        }
        // if answer is WRONG
        else {
            answerContainers[questionNumber].style.colors = 'red';
        }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

const quizContainer = document.getElementsById("quiz");
const resultsContainer = document.getElementsById("results");
const submitButton = document.getElementsById("submit");

const myQuestions = [
    {
        question: "How many seasons of Game of Thrones are there?",
        amswers: {
            a: "3",
            b: "5",
            c: "7",
            d: "8",
        },
        correctAnswer: "d"
    },

    {
        question: "Who is the criminal mastermind main character of Blacklist?",
        answers: {
            a: "Raymond Reddington",
            b: "Steven Seagal",
            c: "General Kilgore",
            d: "John Diefenbaker",
        },
        correctAnswer: "a"
    },
    {
        question: "The famous speech from Blade Runner is called Tears in the _____",
        answers: {
            a: "Snow",
            b: "Sun",
            c: "Rain",
            d: "Tornado",
        },
        correctAnswer: "c"
    },
    {
        question: "What drug is Bryan Cranston's character in Breaking Bad very good at making?",
        answers: {
            a: "Cocaine",
            b: "Meth",
            c: "Heroin",
            d: "MDMA",
        },
        correctAnswer: "b"
    },
    {
        question: "Frank Underwood begins in what government position in the tv show House of Cards?",
        answers: {
            a: "Majority Whip",
            b: "Senate Aide",
            c: "Vice President",
            d: "President",
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of Anthony Bourdain's most recent food and travel show?",
        answers: {
            a: "Parts Unknown",
            b: "Kitchen Confidential",
            c: "Diners, Drive-Ins and Dives",
            d: "Mind of a Chef",
        },
        correctAnswer: "a"
    },
    {
        question: "Who is Tony Soprano's wife in The Sopranos?",
        answers: {
            a: "Meadow",
            b: "Christina Melfi",
            c: "Gloria",
            d: "Carmella",
        },
        correctAnswer: "d"
    },
    {
        question: "What Disney movie has the Dwayne the Rock Johnson playing a Hawaiian demi-god?",
        answers: {
            a: "Hercules",
            b: "Dumbo",
            c: "Moana",
            d: "Lilo and Stitch",
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the most famous nemesis of Dexter Morgan's in the tv show Dexter?",
        answers: {
            a: "The Doomsday Killer",
            b: "The Trinity Killer",
            c: "Sergeant Doakes",
            d: "Detective Bautista",
        },
        correctAnswer: "b"
    },
    {
        question: "Who marries Monica in the tv show friends?",
        answers: {
            a: "Ross",
            b: "Joey",
            c: "Chandler",
            d: "Richard",
        },
        correctAnswer: "c"
    },

];


// display quiz right away
buildQuiz();

// show results on submit
submitButton.addEventlistener('click', showResults);

