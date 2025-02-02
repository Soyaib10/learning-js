/*
1- generate random number for every dice
2- for every random number make a new image
3- select the source
4- select the image you want to change
5- make sure the change

*/


var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

// make new image with source
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

// selcet the iamges i want to change
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

// update the images
img1.setAttribute("src", randomDiceImage1);
img2.setAttribute("src", randomDiceImage2);

// determine the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }



