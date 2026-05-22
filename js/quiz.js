// HTML Elements
const question = document.getElementById("question");
const option_one = document.getElementById("option-one");
const option_two = document.getElementById("option-two");
const option_three = document.getElementById("option-three");

// Documents Variables
const questions_data = JSON.parse(sessionStorage.getItem("quiz_questions"));
console.log(questions_data);