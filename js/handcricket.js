var totalBalls = 0;
var totalScore = 0;

function addScore(x) {
    totalScore = totalScore + x;
}

function count() {
    totalBalls += 1;
}

function dec() {
    totalBalls -= 1;
}

function displayScore(totalBalls, totalScore, playerName) {
    var overs = Math.floor(totalBalls / 6);
    var ballsPlayed = Math.floor(totalBalls % 6);
    ballInfo = overs + " Overs, and " + ballsPlayed + " Balls";
    document.getElementById("Score").innerHTML = totalScore;
    document.getElementById("Name").innerHTML = playerName;
    document.getElementById("Balls").innerHTML = ballInfo;
}

function mainGame(userInput) {

    var freeHit = false;
    count();
    if (userInput == "exit") {
        return;
    }
    if (userInput <= 6 && userInput >= 0) {
        var genNum = Math.floor(Math.random() * 6) + 1;
        console.log(genNum);
        document.getElementById("genN").value = genNum;
        if (freeHit == false) {
            if (userInput == genNum) {
                window.alert("Empire says Your 'OUT' ");
                var playerName = window.prompt("Please enter your name", "Harry Potter");
                displayScore(totalBalls, totalScore, playerName);
                return;
            }
        } else {
            if (userInput == 6 || userInput == 4) {
                alert("Empire says 'ITS A SHOT'");
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
}

function input() {
    'use strict';
    var userInput = document.getElementById("userN").value;
    mainGame(Number(userInput));
}
