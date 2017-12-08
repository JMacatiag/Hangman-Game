var songList = ["TOM-SAWYER", "RED-BARCHETTA", "THE-TWILIGHT-ZONE", "YYZ", "LIMELIGHT", "MAKING-MEMORIES", "CROSSROADS" ];
var usedLetters=[];
var numberOfWins=0;
var guessesRemaining=12;
var blankWord=[]
var userGuess;
var userGuessCaps;

var randomWord=songList[Math.floor(Math.random()*songList.length)];

var wordLetter = randomWord.split("");

for (i=0; i<wordLetter.length; i++){
	if (wordLetter[i] === "-"){
			blankWord.push("-");
	}
	else {
		blankWord.push("_");
	}
}

document.getElementById("currentWord").innerHTML= blankWord;



	document.onkeyup = function (event){
		userGuess=event.key;
		userGuessCaps=userGuess.toUpperCase();
		usedLetters.push(userGuessCaps);
		console.log(usedLetters);
		document.getElementById("dislayUsedLetters").innerHTML=usedLetters;
		
		

			for (j=0; j<randomWord.length; j++){
			
				if (userGuessCaps===randomWord[j]){
					blankWord[j]=randomWord[j]
					document.getElementById("currentWord").innerHTML=blankWord;
					
				}
				else {


				}

			}





	}



	




document.getElementById("gameboard").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("gameboard").innerHTML = "YOU CLICKED ME!";
}




