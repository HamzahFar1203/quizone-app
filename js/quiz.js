// HTML Elements
const question = document.getElementById("question");
const option_one = document.getElementById("option-one");
const option_two = document.getElementById("option-two");
const option_three = document.getElementById("option-three");
const total_score = document.getElementById("total-score");

// Document Variables
const questions_data = JSON.parse(sessionStorage.getItem("quiz_questions"));
const total_questions = questions_data.length;
var score = 0;

// Saves the question object returned by the nextQuestion function
var current_question = nextQuestion();

// When the page loads, the first selected question is displayed
window.onload = function () {
    displayQuestion();
}

/*

    EVENT LISTENERS FOR THE THREE OPTIONS FOR EACH QUIZ QUESTION
    
    Each event listener checks if that options status property is
    equal to true. If it is, then add +1 to the score. Then pick
    the next question and display it.

*/

option_one.addEventListener("click", () => {

    if (current_question.question_option_one.status === true) {
        score++;
    }

    current_question = nextQuestion();
    displayQuestion();

});

option_two.addEventListener("click", () => {

    if (current_question.question_option_two.status === true) {
        score++;
    }

    current_question = nextQuestion();
    displayQuestion();

});

option_three.addEventListener("click", () => {

    if (current_question.question_option_three.status === true) {
        score++;
    }

    current_question = nextQuestion();
    displayQuestion();

});

// Displays the question content on the page
function displayQuestion () {

    question.textContent = current_question.question;
    option_one.textContent = current_question.question_option_one.option_content;
    option_two.textContent = current_question.question_option_two.option_content;
    option_three.textContent = current_question.question_option_three.option_content;
    total_score.textContent = `${score}/${total_questions}`;

}

// Picks a new question, and checks if the app has hit the end of the array
function nextQuestion () {

    if (questions_data.length !== 0) {

        // Picks a random question from the questions_data array
        let random_index = Math.floor(Math.random() * ((questions_data.length - 1) - 0 + 1)) + 0;
        var chosen_question = questions_data[random_index];

        // Removes the current question from the questions_data array
        questions_data.splice(random_index, 1);

        return chosen_question;

    } else {

        // If there are no more questions left, run this:
        sessionStorage.setItem("quiz_score", score);
        window.location = "../results.html";

    }

}