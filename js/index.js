// HTML Elements
const add_button = document.querySelector("input[name='add-question']");
const question_input = document.querySelector("input[name='question']");
const option_one = document.querySelector("input[name='option-one']");
const option_two = document.querySelector("input[name='option-two']");
const option_three = document.querySelector("input[name='option-three']");
const option_one_radio = document.getElementById("option-one-radio");
const option_two_radio = document.getElementById("option-two-radio");
const option_three_radio = document.getElementById("option-three-radio");
const user_advice = document.getElementById("user-advice");
const start_quiz_button = document.getElementById("start-button");

// Document Variables
var list_of_questions = [];

// When "+" button is pressed on the home page, the following will run:
add_button.addEventListener("click", () => {

    if (!question_input.value || !option_one.value || !option_two.value || !option_three.value) {
        
        // Executes if either of the input fields are empty
        user_advice.textContent = "Fill all the fields!"

    } else if (option_one_radio.checked || option_two_radio.checked || option_three_radio.checked) {

        // Executes if all inputs fields are filled and one of the radio buttons is checked
        let question = {
            question: question_input.value,
            question_option_one: {
                option_content: option_one.value,
                status: option_one_radio.checked
            },
            question_option_two: {
                option_content: option_two.value,
                status: option_two_radio.checked
            },
            question_option_three: {
                option_content: option_three.value,
                status: option_three_radio.checked
            }
        }

        list_of_questions.push(question);

        document.querySelector(".top-bar > p").textContent = list_of_questions.length;

        user_advice.textContent = "Great! Any more questions?";
        
        // Stores all entered quiz questions into session storage for later use
        sessionStorage.setItem('quiz_questions', JSON.stringify(list_of_questions));

        // Clears input fields
        question_input.value = "";
        option_one.value = "";
        option_two.value = "";
        option_three.value = "";
        option_one_radio.checked = false;
        option_two_radio.checked = false;
        option_three_radio.checked = false;

    } else {

        user_advice.textContent = "Pick a right answer!"

    }

});

// What to do when the "start quiz" button is pressed on the home page.
start_quiz_button.addEventListener("click", () => {
    if (list_of_questions.length > 0) {
        window.location = "../quiz.html";
    } else {
        user_advice.textContent = "You don't have any questions!";
    }
});