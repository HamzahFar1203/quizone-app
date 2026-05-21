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

// Document Variables
var list_of_questions = [];

// DELETE LATER: Console logs
console.log(question_input);
console.log(option_one);
console.log(option_two);
console.log(option_three);

// When "+" button is pressed on the home page, the following will run:
add_button.addEventListener("click", () => {
    if (!question_input.value || !option_one.value || !option_two.value || !option_three.value) {

        user_advice.textContent = "Fill all the fields!"

    } else if (option_one_radio.checked || option_two_radio.checked || option_three_radio.checked) {

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