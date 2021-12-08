"use strict"

// global variables
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

let redSound = new Audio("sounds/red.mp3");
let blueSound = new Audio("sounds/blue.mp3");
let greenSound = new Audio("sounds/green.mp3");
let yellowSound = new Audio("sounds/yellow.mp3");
let wrongSound = new Audio("sounds/wrong.mp3");
let userClickedPattern = [];
let level = 0;
let gameStarted = false;

// random color generator for sequencing
function nextSequence() {
	// reset  user clicked pattern for next sequence
	userClickedPattern = [];
	
	level++;
	$('h1').html("Level " + level)
	let randomNum = Math.floor(Math.random() * 4);
	let randomChosenColor = buttonColors[randomNum];
	gamePattern.push(randomChosenColor);
	
	$('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColor)
	
}

// function to play sound for appropriate color
function playSound(color) {
	switch (color) {
		case "red":
			redSound.play();
			break;
		case "blue":
			blueSound.play();
			break;
		case "green":
			greenSound.play();
			break;
		case "yellow":
			yellowSound.play();
			break;
		default:
			wrongSound.play();
	}
}

// function to animate the pressed button
function animatePress(currentColor) {
	$('#' + currentColor).addClass('pressed');
	setTimeout(function () {
		$('#' + currentColor).removeClass('pressed');
	}, 100)
}

// click event to play sound
$('.btn').click(function () {
	let userChosenColor = $(this).attr("id");
	playSound(userChosenColor);
	animatePress(userChosenColor);
	userClickedPattern.push(userChosenColor);
	checkAnswer(userClickedPattern[userClickedPattern -1 ])
	// console.log(userClickedPattern);
})

function checkAnswer(currentLevel) {
	
	// if statement to check if most recent answer is the same as game answer
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		console.log("success")
		if (userClickedPattern.length === gamePattern.length) {
			// call nextSequence after 1 second
			setTimeout(() => {nextSequence()}, 1000);
		}
	} else {
		console.log("wrong")
	}
}

$(document).keypress(function () {
	if (!gameStarted) {
		$('h1').html("Level " + level);
		nextSequence();
		gameStarted = true;
	}
	// level++;
})

