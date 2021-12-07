"use strict"

let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let redSound = new Audio("sounds/red.mp3");
let blueSound = new Audio("sounds/blue.mp3");
let greenSound = new Audio("sounds/green.mp3");
let yellowSound = new Audio("sounds/yellow.mp3");
let wrongSound = new Audio("sounds/wrong.mp3");
// redSound.play();

function nextSequence() {
	let randomNum = Math.floor(Math.random() * 4) + 0;
	// console.log(randomNum);
	let randomChosenColor = buttonColors[randomNum];
	gamePattern.push(randomChosenColor);
	console.log(randomChosenColor)
	// playSound(randomChosenColor)
	return randomChosenColor;
	
}


function playSound(color) {
	
	// console.log(color);
	switch (color) {
		case "red":
			redSound.play().then(r => {
				console.log("red")});
			break;
		case "blue":
			blueSound.play().then(r => {
				console.log("blue")});
			break;
		case "green":
			greenSound.play().then(r => {
				console.log("green")});
			break;
		case "yellow":
			yellowSound.play().then(r => {
				console.log("yellow")});
			break;
		default:
			wrongSound.play().then(r => {
				console.log(color)})
			// console.log(color);
	}
}


//
// $('#red').click(function (e) {
// 	redSound.play();
// })


$('div').click(function (e) {
	console.log(e);
	playSound(e.target.id);
	// console.log($(this).id);
	// $(this).fadeOut(100).fadeIn(100);
})