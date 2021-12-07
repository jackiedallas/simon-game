"use strict"

let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
	let randomNum = Math.floor(Math.random() * 4) + 0;
	return randomNum;
}

let randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);

$('#' + randomChosenColor).click(function () {
	$(this).fadeOut(100).fadeIn(100);
})