var totalBallsUser = 0;
var totalScoreUser = 0;
var userInput = 0;
var totalBallsSys = 0;
var totalScoreSys = 0;
var battingBool;
var battingCompleted = false;
var bowlingCompleted = false;
var tossResult = 1;


function setBattingBool(toss) {
	battingBool = toss;
}

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
	id = "userHandImage";
	setImage(value, id);
	pingGame();
}

function setValueBall(value) {
	userInput = Number(value);
	id = "userHandImageBowl";
	setImage(value, id);
	pingGame();
}

function hideBattingBlock() {
	var batGameBlock = document.getElementById("batGameBlock");
	batGameBlock.style.display = "none";
}

function hideBowlingBlock() {
	var ballGameBlock = document.getElementById("ballGameBlock");
	ballGameBlock.style.display = "none";
}

function showBowlingBlock() {
	var ballGameBlock = document.getElementById("ballGameBlock");
	ballGameBlock.style.display = "block";
	document.getElementById("header").innerHTML = "Bowling Time";
}

function showBattingBlock() {
	var batGameBlock = document.getElementById("batGameBlock");
	batGameBlock.style.display = "block";
	document.getElementById("header").innerHTML = "Batting Time";
}

function showNextButton() {
	var nextBat = document.getElementById("nextBat");
	var nextBall = document.getElementById("nextBall");
	nextBall.style.display = "block";
	nextBat.style.display = "block";
}

function hideNextButton() {
	var nextBat = document.getElementById("nextBat");
	var nextBall = document.getElementById("nextBall");
	nextBall.style.display = "none";
	nextBat.style.display = "none";
}

function showScoreBoard() {
	var scoreBoard = document.getElementById("scoreBoard");
	scoreBoard.style.display = "block";
}

function showRestartBtn() {
	var restart = document.getElementById("restart");
	restart.style.display = "block";
}

function gameCompletion() {
	if (battingCompleted == true && bowlingCompleted == true) {
		hideBattingBlock();
		hideBowlingBlock();
		hideNextButton();
		finishFun();
		return (true)
	} else {
		return false;
	}
}

//next Button Function
function nextBtn() {
	var select;
	hideNextButton();
	select = gameCompletion();
	if (select == false) {
		gamePlayChanger();

		if (battingBool == true) {
			showBattingBlock();
			hideBowlingBlock();
		} else {
			showBowlingBlock();
			hideBattingBlock();
		}
	} else {
		document.getElementById("header").innerHTML = "Game Over";
	}
}

//start game accordingly
function pingGame() {
	if (battingBool == true) {
		hideNextButton();
		showBattingBlock();
		hideBowlingBlock();
		mainGameBatting();
	} else {
		hideNextButton();
		hideBattingBlock();
		showBowlingBlock();
		mainGameBowling();
	}
}

//On clicking start button
function startButtonFun() {
	var start = document.getElementById("startButton");
	start.style.display = "none";
	userInput = 0;
	genNum = 0;
	if (battingBool == true) {
		showBattingBlock();
	} else {
		showBowlingBlock();
	}
}

//On clicking the number pad images changes
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

//Announcing Winner at the end
function winnerBanner(name, state, diff, player) {
	var winBlock = document.getElementById("winBlock");
	var winNameBlock = document.getElementById("winNameBlock");
	var winName = document.getElementById("winName");
	var winState = document.getElementById("winState");
	var summary = document.getElementById("summary");
	winBlock.style.display = "block";
	if (state == true) {
		winNameBlock.style.display = "block";
		if (player == true) {
			winBlock.classList.add("alert-success");
			if (name != null) {
				winName.innerHTML = "Congrats..!! You Won the match";
			} else {
				window.alert("Error");
			}
		} else {
			winBlock.classList.add("alert-danger");
			winName.innerHTML = "Oops..!! " + name + " Wins the Match";
		}
		summary.innerHTML = "Scored over " + diff + " Runs more, that was a good game";
	} else {
		winBlock.classList.add("alert-info");
		winState.innerHTML = "Draw";
		summary.innerHTML = "Wow! that was fierce Game";
	}
}

//to show Results at the end of match
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

function setBattingCompleted() {
	battingCompleted = true;
}

function setBowlingCompleted() {
	bowlingCompleted = true;
}


//after every session game play changes or let know that game is completed
function gamePlayChanger() {
	if (battingBool == true) {
		battingBool = false;
	} else {
		battingBool = true;
	}
}

//Disabling Batting button pad
function disableBatBtn() {
	document.getElementById("batBtn0").disabled = true;
	document.getElementById("batBtn1").disabled = true;
	document.getElementById("batBtn2").disabled = true;
	document.getElementById("batBtn3").disabled = true;
	document.getElementById("batBtn4").disabled = true;
	document.getElementById("batBtn5").disabled = true;
	document.getElementById("batBtn6").disabled = true;
}

//Disabling Bowling button pad
function disableBallBtn() {
	document.getElementById("ballBtn0").disabled = true;
	document.getElementById("ballBtn1").disabled = true;
	document.getElementById("ballBtn2").disabled = true;
	document.getElementById("ballBtn3").disabled = true;
	document.getElementById("ballBtn4").disabled = true;
	document.getElementById("ballBtn5").disabled = true;
	document.getElementById("ballBtn6").disabled = true;
}

//Game
function gameFinished() {
	var finish = document.getElementById("finishBat");
	finish.style.display = "block";
	disableBatBtn();
}

function gameBowlingFinished() {
	var finish = document.getElementById("finish");
	finish.style.display = "block";
	disableBallBtn();
}

//Restart Function
function restartFun() {
	location.reload(true);
}

function finishFun() {
	var playerName = window.prompt("Please enter your name", "HarryPotter");
	showScoreBoard();
	showRestartBtn();
	displayScoreUser(playerName);
}

function updateBalls() {
	var overs = Math.floor(totalBallsSys / 6);
	var ballsPlayed = Math.floor(totalBallsSys % 6);
	ballInfo = overs + " overs, and " + ballsPlayed + " balls";
	var currentBalls = document.getElementById("currentBalls");
	currentBalls.value = ballInfo;
}

function scoreCheck() {
	if (battingCompleted == true || bowlingCompleted == true) {
		if (battingCompleted == true) {
			if (totalScoreSys > totalScoreUser) {
				disableBallBtn();
				setBowlingCompleted();
				showNextButton();
			}
		} else {
			if (totalScoreSys < totalScoreUser) {
				disableBatBtn();
				setBattingCompleted();
				showNextButton();
			}
		}
	}
}

function mainGameBatting() {
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
				document.getElementById("header").innerHTML = "You are Out";
				disableBatBtn();
				setBattingCompleted();
				showNextButton();
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

	document.getElementById("currentScore").value = totalScoreUser;
	scoreCheck();
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
				window.alert("Empire says Your 'OUT' ");
				document.getElementById("header").innerHTML = "Computer is Out";
				disableBallBtn();
				setBowlingCompleted();
				showNextButton();
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
	scoreCheck();
}

function testAlert() {
	alert("Working");
}

//function input() {
//	'use strict';
//	//	alert(userInput);
//	//    var userInput = document.getElementById("userN").value;
//	//    mainGame(Number(userInput));
//	mainGame();
//}

//function alert_value(z) {
//	//	var z = document.getElementById("userScoreId").value;
//	alert(z);
//}

//function pingBowling() {
//	showBowlingBlock();
//	hideBattingBlock();
//}
