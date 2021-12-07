"use strict"

// global variables
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);
$('#' + randomChosenColor).fadeOut(100).fadeIn(100);

let redSound = new Audio("sounds/red.mp3");
let blueSound = new Audio("sounds/blue.mp3");
let greenSound = new Audio("sounds/green.mp3");
let yellowSound = new Audio("sounds/yellow.mp3");
let wrongSound = new Audio("sounds/wrong.mp3");
let userClickedPattern = [];

// random color generator for sequencing
function nextSequence() {
	let randomNum = Math.floor(Math.random() * 4) + 0;
	return randomNum;
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

// click event to play sound
$('div').click(function (e) {
	let userChosenColor = e.target.id;
	// console.log(e);
	playSound(e.target.id);
	$('#' + e.target.id).fadeOut(100).fadeIn(100);
	userClickedPattern.push(userChosenColor);
	console.log(userClickedPattern);
})

// console.log(userClickedPattern);