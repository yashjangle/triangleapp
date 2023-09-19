const formQuiz = document.querySelector(".form-quiz");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");

const correctanswers = ["right", "180°", "360°", "36°", "120°"];

function selectAnswer() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(formQuiz);
    for (let value of formResults.values
        ()) {
        if (value === correctanswers[index]) {
            score = score + 1
        }
        index = index + 1
    }
    output.innerText = "Your score is " + score
}

submitButton.addEventListener("click", selectAnswer)