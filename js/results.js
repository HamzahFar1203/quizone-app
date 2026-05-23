const score_text = document.querySelector("#wrapper p");

const questions_data = JSON.parse(sessionStorage.getItem("quiz_questions"));
const score = sessionStorage.getItem("saved_score");

score_text.textContent = `You got a ${score}/${questions_data.length}`;

/*

    TO DO: WRITE FUNCTIONALITY FOR START NEW AND RETRY BUTTONS!

*/