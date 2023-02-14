let score = 0;
let life = 3;
let time = 0;

// Get the score board element
const scoreBoard = document.getElementById("score_board");

// Update the text content with the current score
scoreBoard.textContent = "Score: " + score;

// Get the life board element
const lifeBoard = document.getElementById("life_board");

// Update the text content with the current life count
lifeBoard.textContent = "Life: " + life;

// Get the time board element
const timeBoard = document.getElementById("time_board");

// Update the text content with the current time value
timeBoard.textContent = "Time: " + time;
