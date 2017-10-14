var totalBallsUser = 0;
var totalScoreUser = 0;
var userInput = 0;
var totalBallsSys = 0;
var totalScoreSys = 0;

function addScore(x) {
	totalScoreUser = totalScoreUser + x;
}

function count() {
	totalBallsUser += 1;
}

function dec() {
	totalBallsUser -= 1;
}

function addScoreSys(x) {
	totalScoreSys = totalScoreSys + x;
}

function countSys() {
	totalBallsSys += 1;
}

function decSys() {
	totalBallsSys -= 1;
}

function setValueBat(value) {
	userInput = Number(value);
	id = "userHandImage"
	setImage(value, id);
	//	alert("Value set :"+value);
}

function setValueBall(value) {
	userInput = Number(value);
	id = "userHandImageBowl"
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
	var game = document.getElementById("batGameBlock");
	//	var headerBlock = document.getElementById("headerBlock");
	//	headerBlock.style.display = "none";
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

function winnerBanner(name, state, diff, player) {
	var winBlock = document.getElementById("winBlock");
	var winNameBlock = document.getElementById("winNameBlock");
	var winName = document.getElementById("winName");
	var winState = document.getElementById("winState");
	var summary = document.getElementById("summary");
	winBlock.style.display = "block";
	if (state == true) {
		winNameBlock.style.display = "block";
		if (player == "true") {
			winName.innerHTML = "Congrates..!! " + name + " Wins the Match";
		} else {
			winName.innerHTML = "Oops..!! " + name + " Wins the Match";			
		}
		//		winState.innerHTML = "Winner";
		summary.innerHTML = "Scored over " + diff + " Runs more, that was a good game"
	} else {
		winState.innerHTML = "Draw";
		summary.innerHTML = "Wow! game was fierce Game"
	}
}

function displayScoreUser(playerName) {
	var winName, winState, diff, player;
	var overs = Math.floor(totalBallsUser / 6);
	var ballsPlayed = Math.floor(totalBallsUser % 6);
	var oversSys = Math.floor(totalBallsSys / 6);
	var ballsPlayedSys = Math.floor(totalBallsSys % 6);
	ballUserInfo = overs + " overs, and " + ballsPlayed + " balls";
	ballCompInfo = oversSys + " overs, and " + ballsPlayedSys + " balls";
	document.getElementById("Score").innerHTML = totalScoreUser;
	document.getElementById("Name").innerHTML = playerName;
	document.getElementById("Balls").innerHTML = ballUserInfo;
	document.getElementById("ScoreSys").innerHTML = totalScoreSys;
	document.getElementById("BallsSys").innerHTML = ballCompInfo;
	if (totalScoreUser > totalScoreSys) {
		winName = playerName;
		winState = true;
		player = true;
		diff = totalScoreUser - totalScoreSys;
	} else if (totalScoreUser == totalScoreSys) {
		winState = false;
	} else {
		winName = "Computer";
		winState = true;
		player = false;
		diff = totalScoreSys - totalScoreUser;
	}
	winnerBanner(winName, winState, diff, player);
}

function gameFinished() {
	var drop = document.getElementById("dropBat");
	var finish = document.getElementById("finishBat");
	drop.style.display = "none";
	finish.style.display = "block";
}

function pingBowling() {
	var batGameBlock = document.getElementById("batGameBlock");
	var ballGameBlock = document.getElementById("ballGameBlock");
	batGameBlock.style.display = "none";
	ballGameBlock.style.display = "block";
}

function restartFun() {
	location.reload(true);
}

function finishFun() {
	var final = document.getElementById("final");
	var finish = document.getElementById("finish");
	var restart = document.getElementById("restart");
	var ballGameBlock = document.getElementById("ballGameBlock");
	var playerName = window.prompt("Please enter your name", "Harry Potter");
	finish.style.display = "none";
	restart.style.display = "block";
	final.style.display = "block";
	ballGameBlock.style.display = "none";
	displayScoreUser(playerName);
}

function updateBalls() {
	var overs = Math.floor(totalBallsSys / 6);
	var ballsPlayed = Math.floor(totalBallsSys % 6);
	ballInfo = overs + " overs, and " + ballsPlayed + " balls";
	var currentBalls = document.getElementById("currentBalls");
	currentBalls.innerHTML = ballInfo;
}

function gameBowlingFinished() {
	//	var ballGameBlock = document.getElementById("ballGameBlock");
	//	ballGameBlock.style.display = "none";
	var dropBall = document.getElementById("dropBall");
	var finish = document.getElementById("finish");
	dropBall.style.display = "none";
	finish.style.display = "block";
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
	document.getElementById("currentScore").innerHTML = totalScoreUser;
}

function mainGameBowling() {

	var idc = "compHandImageBowl"
	var freeHit = false;
	countSys();
	if (userInput == "exit") {
		return;
	}
	if (userInput <= 6 && userInput >= 0) {
		var genNum = Math.floor(Math.random() * 6) + 1;
		setImage(genNum, idc);
		console.log(genNum);
		if (freeHit == false) {
			if (userInput == genNum) {
				window.alert("Empire says Computer is 'OUT' ");
				gameBowlingFinished();
				return;
			}
		}
		freeHit = 0;
		if (userInput != 0) {
			addScoreSys(genNum);
		} else {
			window.alert("Oops no ball \n Computer got a free hit");
			decSys();
			freeHit = true;
		}
	} else {
		window.alert("ERROR: Enter a score in the range [0,6]");
	}
	updateBalls();
	document.getElementById("currentScoreSys").value = totalScoreSys;
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
