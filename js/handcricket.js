var totalBalls = 0;
var totalScore = 0;
var userInput = 0;

function addScore(x) {
	totalScore = totalScore + x;
}

function count() {
	totalBalls += 1;
}

function dec() {
	totalBalls -= 1;
}

function setValue(value) {
	userInput = Number(value);
	id = "userHandImage"
	setImage(value, id);
	//	alert("Value set :"+value);
}

function myFunction() {
	var x = document.getElementById("startButton");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function startButtonFun() {
	var start = document.getElementById("startButton");
	var game = document.getElementById("gameBlock");
	start.style.display = "none";
	game.style.display = "block";
}

function setImage(value, id) {
	var pic = document.getElementById(id);
	if (0 == value) {
		pic.src = "img/orange0.png";
	} else if (1 == value) {
		pic.src = "img/orange1.png";
	} else if (2 == value) {
		pic.src = "img/orange2.png";
	} else if (3 == value) {
		pic.src = "img/orange3.png";
	} else if (4 == value) {
		pic.src = "img/orange4.png";
	} else if (5 == value) {
		pic.src = "img/orange5.png";
	} else if (6 == value) {
		pic.src = "img/orange6.png";
	}
}

function displayScore(playerName) {
	var overs = Math.floor(totalBalls / 6);
	var ballsPlayed = Math.floor(totalBalls % 6);
	ballInfo = overs + " Overs, and " + ballsPlayed + " Balls";
	document.getElementById("Score").innerHTML = totalScore;
	document.getElementById("Name").innerHTML = playerName;
	document.getElementById("Balls").innerHTML = ballInfo;
}

function gameFinished() {
	var drop = document.getElementById("drop");
	var finish = document.getElementById("finish");
	drop.style.display = "none";
	finish.style.display = "block";
}

function restartFun(){
	location.reload(true);
}

function finishFun() {
	var final = document.getElementById("final");
	var finish = document.getElementById("finish");
	var restart = document.getElementById("restart");
	var gameBlock = document.getElementById("gameBlock");
	var playerName = window.prompt("Please enter your name", "Harry Potter");
	finish.style.display = "none";
	restart.style.display = "block";
	final.style.display = "block";
	gameBlock.style.display = "none";
	displayScore(playerName);
}

function mainGame() {

	var idc = "compHandImage"
	var freeHit = false;
	count();
	if (userInput == "exit") {
		return;
	}
	if (userInput <= 6 && userInput >= 0) {
		var genNum = Math.floor(Math.random() * 6) + 1;
		setImage(genNum, idc);
		console.log(genNum);
		document.getElementById("genN").value = genNum;
		if (freeHit == false) {
			if (userInput == genNum) {
				window.alert("Empire says Your 'OUT' ");
				gameFinished();
				return;
			}
		}
		freeHit = 0;
		if (genNum != 0) {
			addScore(userInput);
		} else {
			window.alert("Oops no ball \n you got a free hit");
			dec();
			freeHit = true;
		}
	} else {
		window.alert("ERROR: Enter a score in the range [0,6]");
	}
	document.getElementById("currentScore").innerHTML = totalScore;
}


function input() {
	'use strict';
	//	alert(userInput);
	//    var userInput = document.getElementById("userN").value;
	//    mainGame(Number(userInput));
	mainGame();
}

//function alert_value(z) {
//	//	var z = document.getElementById("userScoreId").value;
//	alert(z);
//}
