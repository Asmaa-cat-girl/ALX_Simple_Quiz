function checkAnswer() {
    const answerElements = document.querySelectorAll('input[name="quiz"]');
    let selectedAnswer;
    for (const element of answerElements) {
        if (element.checked) {
            selectedAnswer = element.value;
            break;
        }
    }

    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }
    const correctAnswer = 4;
    const userAnswer = parseInt(selectedAnswer);

    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect. The answer is " + correctAnswer + ".";
    }
}

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);

