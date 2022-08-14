'use strict';



let secretValue = Math.trunc((Math.random() * 20) + 1); 
// console.log(secretValue);

// document.querySelector(".number").textContent =  secretValue; 
// let score = document.querySelector(".score").textContent;
let score = 20; 

let highscore = parseInt(document.querySelector(".highscore").textContent);
console.log(highscore, `highscore`);




const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    let guessedValue = parseInt(document.querySelector(".guess").value);
    console.log(guessedValue);
    

    highscore = parseInt(document.querySelector(".highscore").textContent);
    console.log(`highscore is ${highscore}`);
    // if guessed value is correct
    if (secretValue === guessedValue) {
        displayMessage(`🎉🎈💃 You Won `);
        document.querySelector(".number").textContent =  secretValue; 
        document.querySelector("body").style.background = "green";
        document.querySelector(".number").style.width = `30rem`
        if (score > highscore) {
            document.querySelector(".highscore").textContent = score;
        }
    // if guessed value is less than secret value
    } else if (guessedValue < secretValue && guessedValue > 0) {
        if (score > 1) {

            displayMessage(`🔻 Too low `);
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = `Please try again`;
            document.querySelector(".score").textContent = 0;
        }
    // if guessed value is greater than secret value
    } else if (guessedValue > secretValue && guessedValue < 21) {
        if (score > 1) {
            displayMessage(`🔺 Too high `);
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage(`Please try again`);
            document.querySelector(".score").textContent = 0;
        }
    // if guessed value is not 0 (falsy value) or input blank
    } else if (!guessedValue && guessedValue !== 0) {
        displayMessage(` 🚫 no number `);
    // if guessed value is less than 1 or greater than 20
    } else if (guessedValue < 1 || guessedValue > 20) {
        document.querySelector(".message").textContent = `Please guess number b/w  ▶ 1 & 20 ◀`;
        displayMessage(`Please guess number b/w  ▶ 1 & 20 ◀`);
    }
});

// Eventlistener to "again" button in dom
document.querySelector(".again").addEventListener("click", function () {
    secretValue = Math.trunc((Math.random() * 20) + 1);
    // console.log(secretValue);
    document.querySelector(".number").textContent =  `?`; 
    

    displayMessage(`Start guessing...`);
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.background = "#222";
    document.querySelector(".number").style.width = `15rem`;
    document.querySelector(".guess").value = "";
})
