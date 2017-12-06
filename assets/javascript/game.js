var songList = ["TOM SAWYER", "RED BARCHETTA", "THE TWILIGHT ZONE", "YYZ", "LIMELIGHT", "MAKING MEMORIES", "CROSSROADS" ];
var usedLetters=[];
var numberOfWins=0;
var guessesRemaining=12;

console.log(songList);

document.getElementById("gameboard").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("gameboard").innerHTML = "YOU CLICKED ME!";
}
