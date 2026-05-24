// HTML Elements
const score_text = document.querySelector("#wrapper p");
const start_new_button = document.getElementById("start-new");
const retry_button = document.getElementById("retry");

// Document Variables
const questions_data = JSON.parse(sessionStorage.getItem("quiz_questions"));
const score = sessionStorage.getItem("quiz_score");

// Displays the user's score once the page is loaded
window.onload = function () {

    score_text.textContent = `You got a ${score}/${questions_data.length}`;

}

// Wipes sessionStorage and sends user to the home page to enter new questions
start_new_button.addEventListener("click", () => {

    sessionStorage.clear();

    window.location = "../index.html";

});

// Sends user to the quiz page to retake the quiz
retry_button.addEventListener("click", () => {

    window.location = "../quiz.html";

}); 