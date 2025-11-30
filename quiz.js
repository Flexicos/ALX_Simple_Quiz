// 1. Function Declaration
function checkAnswer() {

    // 2. Identify the Correct Answer
    const correctAnswer = "4";

    // 3. Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // 4. Compare Answers and Display Feedback
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// 5. Add Event Listener to the Submit Button
document.getElementById("submit-answer")
    .addEventListener("click", checkAnswer);
