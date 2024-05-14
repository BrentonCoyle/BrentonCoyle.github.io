// quiz.js

let questionNoElement, questionElement;
let Questions = [];
let Answers = [];
let Index = 0;
let Score = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Assign the elements here, within the DOMContentLoaded event listener
    questionNoElement = document.getElementById('questionNo');
    questionElement = document.getElementById('question');

    // Fetch the JSON file
    fetch('/JSON/quiz.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(quizData => {
            
            Questions = quizData.map(item => item.question);
            Answers = quizData.map(item => item.answer);
            setUp();
            
        })
        .catch(error => {
            console.error('Error fetching quiz data:', error);
        });
});

function setUp() {
    questionNoElement.innerHTML = "Question " + (Index + 1);
    questionElement.innerHTML = Questions[Index];
}

function check() {
    if (document.getElementById("text-field").value == Answers[Index]) {
        Score ++;
        
    }
}

function clickButton() {
    check();
    Index += 1;
    setUp(); // Update the UI to display the next question
    document.getElementById("text-field").value = "";
    if(Index > Questions.length-1)
        {
            document.getElementById("text-field").remove()
            document.getElementById("button").remove()
            questionElement.innerHTML = `${Score}/${Questions.length}`
            questionNoElement.innerHTML = "Score"

        }
    
}
