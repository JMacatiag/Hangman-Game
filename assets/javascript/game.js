var songList = ["TOM-SAWYER", "RED-BARCHETTA", "THE-TWILIGHT-ZONE", "YYZ", "LIMELIGHT", "MAKING-MEMORIES", "CROSSROADS" ];
var usedLetters=[];
var numberOfWins=0;
var guessesRemaining=12;



var wordLetter = songList[0].split("");

	for (i=0; i<wordLetter.length; i++){
		if (wordLetter[i] === "-"){
			document.write("- ");
		}
		else {
			document.write("_ ");
		}
}

document.getElementById("gameboard").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("gameboard").innerHTML = "YOU CLICKED ME!";
}




