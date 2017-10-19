var toss = true;

function showStartBtn() {
	var startButton = document.getElementById("startButton");
	startButton.style.display = "block";
	document.getElementById("header").innerHTML = "All set";
}

function hideStartBtn() {
	var startButton = document.getElementById("startButton");
	startButton.style.display = "none";
}

function showTossWinChoice() {
	var tossWinChoice = document.getElementById("tossWinChoice");
	tossWinChoice.style.display = "block";
}

function hideTossWinChoice() {
	var tossWinChoice = document.getElementById("tossWinChoice");
	tossWinChoice.style.display = "none";
}

function showGameChoiceBlock() {
	var gameChoiceBlock = document.getElementById("gameChoiceBlock");
	gameChoiceBlock.style.display = "block";
	document.getElementById("header").innerHTML = "Choose your play";
}

function hideGameTossingBlock() {
	var gameTossingBlock = document.getElementById("gameTossingBlock");
	gameTossingBlock.style.display = "none";
}

function showGameTossingBlock() {
	var gameTossingBlock = document.getElementById("gameTossingBlock");
	gameTossingBlock.style.display = "block";
}

function hideGameChoiceBlock() {
	var gameChoiceBlock = document.getElementById("gameChoiceBlock");
	gameChoiceBlock.style.display = "none";
}

function setCoinImage(state) {
	var coinImage = document.getElementById("coinImage");
	if (state == 1) {
		coinImage.src = "img/coinHead.png";
	} else if (state == 0) {
		coinImage.src = "img/coinTail.png";
	}
}

function setPlayImage(state) {
	var playImage = document.getElementById("playImage");
	if (state == 1) {
		playImage.src = "img/batPlay.png";
	} else if (state == 0) {
		playImage.src = "img/ballPlay.png";
	}
}

function battingBtnFunction(batValue) {
	setPlayImage(batValue);
	setBattingBool(true);
}

function bowllingBtnFunction(batValue) {
	setPlayImage(batValue);
	setBattingBool(false);
}

function tailCoinBtn(coinValue) {
	toss = false;
	setCoinImage(coinValue);
}

function headCoinBtn(coinValue) {
	toss = true;
	setCoinImage(coinValue);
}

function randomBoolGenerator() {
	compGenBool = Math.floor(Math.random() * 2);
	if (compGenBool == 1) {
		generated = true;
	} else if (compGenBool == 0) {
		generated = false;
	} else {
		console.log("Computer generating Bool error");
		window.alert("Error");
	}
	return generated;
}

function jumpBtn() {
	document.getElementById("header2").style.display = "none";
	document.getElementById("tossWinChoice").style.display = "block";
	document.getElementById("header").innerHTML = "Toss";
	document.getElementById("jumpButton").style.display = "none";
}

function tossingCoin() {
	var tossBtn = document.getElementById("tossBtn");
	tossBtn.innerHTML = "Tossed";
	tossBtn.disabled = "true";
	tossed = randomBoolGenerator();
	if (tossed == toss) {
		window.alert("You Won the toss");
		showGameChoiceBlock();
		hideGameTossingBlock();
	} else {
		window.alert("You lost the toss");
		gameSelect = randomBoolGenerator();
		//		alert(gameSelect);
		if (gameSelect == true) {
			setBattingBool(false);
			window.alert("Computer Choose Batting");
		} else {
			setBattingBool(true);
			window.alert("Computer choose Bowling");
		}
		hideGameTossingBlock();
		showStartBtn();
	}
}

function tossBtnFun() {
	tossingCoin();
}

function goBtnFun() {
	showStartBtn();
	//	document.getElementById("startBtn") = startButtonFun(toss);
	hideTossWinChoice();
}
