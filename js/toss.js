var toss = true;

function showStartBtn() {
	var startButton = document.getElementById("startButton");
	startButton.style.display = "block";
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

function setCoinImage(state) {
	var coinImage = document.getElementById("coinImage");
	if (state == 1) {
		coinImage.src = "img/coinHead.png";
	} else if (state == 0) {
		coinImage.src = "img/coinTail.png";
	}
}

function tailCoinBtn(coinValue) {
	toss = false;
	setCoinImage(coinValue);
	setBattingBool(false);
}

function headCoinBtn(coinValue) {
	toss = true;
	setCoinImage(coinValue);
	setBattingBool(true);
}

function tossBtnFun() {
	showStartBtn();
	//	document.getElementById("startBtn") = startButtonFun(toss);
	hideTossWinChoice();
}
