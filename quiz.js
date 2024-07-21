function checkAnswer() {
    // Get the user's selected answer
    const answerElements = document.querySelectorAll('input[name="quiz"]');
    let selectedAnswer;
    for (const element of answerElements) {
        if (element.checked) {
            selectedAnswer = element.value;
            break;
        }
    }

    // Check if an answer is selected
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    // Check if the answer is correct (assuming the correct answer is 4)
    const correctAnswer = 4;
    const userAnswer = parseInt(selectedAnswer); // Convert the selected answer to a number

    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done."; // Updated feedback message
    } else {
        feedbackElement.textContent = "Incorrect. The answer is " + correctAnswer + ".";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);


