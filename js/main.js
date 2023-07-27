// global variable
let questionResult = 0;
let rightAnswer = 0;
let wrongAnswer = 0;


// timer set here

function starCounter() {
    let timeSet = 4;
    const timeSetElement = document.getElementById('timer');

    const countDownHandler = setInterval(() => {
        timeSet--;
        timeSetElement.textContent = timeSet;

        if (timeSet === 0) {
            clearInterval(countDownHandler)
            starCounter();
            generateNumber();
        }
    }, 1000)
}
starCounter()

// generate random input and question result
function generateNumber() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);

    // let operator generator

    let operators = ['+', '-', '*']
    let operator = operators[Math.floor(Math.random() * operators.length)]

    const showQuestion = document.getElementById('question')

    showQuestion.innerText = num1 + ` ${operator} ` + num2 + " = ? ";

    if (operator === "+") {
        questionResult = num1 + num2;
    } else if (operator === "-") {
        questionResult = num1 - num2;
    } else {
        questionResult = num1 * num2;
    }


    document.getElementById('answer').value = '';
    document.getElementById('errors').innerText = '';
}
generateNumber()



// check answer
function checkAnswer() {

    let getAnswer = document.getElementById('answer').value;
    let finalAnswer = parseInt(getAnswer)
    // level call
    let getLevel = document.getElementById('level')
    // error call
    const getError = document.getElementById('errors');
    console.log(finalAnswer);

    if (getAnswer === '') {
        getError.innerText = 'Answer Not Empty'
        getError.style.color = 'red'
        /*  alert('Answer Not Empty') */
    } else {

        if (finalAnswer === questionResult) {
            rightAnswer += 1;
            getError.innerText = 'Answer Is Correct'
            getError.style.color = 'green'
        } else {
            wrongAnswer += 1;
            getError.innerText = 'Answer Is InCorrect'
            getError.style.color = 'yellow'
        }

        // level decrease
        if (wrongAnswer === 1) {
            getLevel.style.width = '66.33%'
        } else if (wrongAnswer === 2) {
            getLevel.style.width = '33.33%'
        }
        else if (wrongAnswer === 3) {
            getLevel.style.width = '0%'
            const value = rightAnswer;
            setTimeout(() => {
                window.location.href = "result.html?data=" + encodeURIComponent(value);
            }, 1000)

        } else {
            return;
        }

    }

}

// feature
// timer
// start game
// result game
// automatic data change