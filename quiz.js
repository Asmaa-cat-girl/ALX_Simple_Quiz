function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4"; // String value to represent the correct answer

    // Retrieve the User's Answer
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked'); // Select the checked radio button
    if (!selectedRadioButton) {
        alert("Please select an answer.");
        return; // Exit function if no answer is selected
    }
    const userAnswer = selectedRadioButton.value;

    // Compare the User's Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);



