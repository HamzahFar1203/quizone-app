/*
    TO DO: Look over code and clean it as necessary!
    TO DO: Add better comments!
*/

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

// Generates a random index and collects the question at that index from questions_data
var current_question = nextQuestion();

window.onload = function () {
    displayQuestion();
}

// Event listeners for each quiz option
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

        sessionStorage.setItem("saved_score", score);
        window.location = "../results.html";

    }
}