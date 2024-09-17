'use strict';

document.addEventListener('DOMContentLoaded', function (event) {
    const theQuestion = document.getElementById('theQuestion');
    const displayEight = document.getElementById('displayEight');
    const showAnswer = document.getElementById('showAnswer');
    const visitorForm = document.getElementById('visitorForm');

    theQuestion.addEventListener('submit', showButton);

    function showButton(event) {
        event.preventDefault();
        displayEight.style.transition = 'opacity 2s';
        displayEight.style.opacity = '0';
        setTimeout(() => {
            displayEight.style.display = 'none';
        }, 2000); 
    };

    document.getElementById('submitButton').addEventListener('click', function() {
        const allAnswers = [
            "6×7", "7×6", "3!×7", "√1764", "21×2", "42", "84/2", "2⁵+10", 
            "e^ln42", "log₇7⁴²", "√(49×36)", "ln(e⁴²)", "10×4+2", 
            "log₃3⁴²", "2⁶-22", "φ×26", "2⁵.39", "7×6", 
            "√(42²)", "sin42", "4²+26", "8×5+2", "9×4+6", "5×8+2", 
            "36+6", "8+34", "21+21", "48-6", "3×14", "log₇7⁴²", 
            "cos42", "√1764", "42/1", "43-1", "2×21", "ln42", 
            "14×3", "84/2", "6+36", "5!÷5-3", "4²+26"
        ];        
        const randomizedAnswers = Math.floor(Math.random() * allAnswers.length);
        const actualAnswer = allAnswers[randomizedAnswers];
        showAnswer.innerText = actualAnswer;
        submitButton.style.transition = 'opacity 2s';
        submitButton.style.opacity = '0';
        setTimeout(() => {
            submitButton.style.display = 'none'; 
        }, 2000);
    });

    document.getElementById('visitorForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const visitorName = document.getElementById('visitorName').value;
        const visitorEmail = document.getElementById('visitorEmail').value;
        const visitorComment = document.getElementById('visitorComment').value;

        if (!visitorComment) {
            alert('Comment section must not be empty.');
            return;
        }
    });

    const preventEnterSubmission = function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    document.getElementById('visitorName').addEventListener('keypress', preventEnterSubmission);
    document.getElementById('visitorEmail').addEventListener('keypress', preventEnterSubmission);
});