var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generate random number from 1-6
var leftDice = "./images/dice" + randomNumber1 + ".png"; // Create variable with the image source + randomNumber

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generate random number from 1-6
var rightDice = "./images/dice" + randomNumber2 + ".png"; // Create variable with the image source + randomNumber

// Select the image element and set the "src" attribute with the previously created variable
document.querySelector(".img1").setAttribute("src", leftDice);

// Select the image element and set the "src" attribute with the previously created variable
document.querySelector(".img2").setAttribute("src", rightDice);

// If statement to display a message according to the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw!";
} else {
    document.querySelector("h1").innerText = "Player 2 Wins!";
}