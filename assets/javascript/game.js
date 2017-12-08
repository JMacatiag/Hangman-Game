var songList = ["TOM-SAWYER", "RED-BARCHETTA", "THE-TWILIGHT-ZONE", "YYZ", "LIMELIGHT", "MAKING-MEMORIES", "CROSSROADS" ];
var usedLetters=[];
var numberOfWins=0;
var guessesRemaining=12;
var blankWord=[]
var userGuess;
var userGuessCaps;

var x = document.getElementById("myAudio"); 

function playAudio() { 
    x.play(); 
} 

function pauseAudio() { 
    x.pause(); 
} 

// chooses random long from the song list
var randomWord=songList[Math.floor(Math.random()*songList.length)];

// converts the sing into letters and puts letters into an array
var wordLetter = randomWord.split("");

// creates the blank output
for (i=0; i<wordLetter.length; i++){
	if (wordLetter[i] === "-"){
			blankWord.push("-");
	}
	else {
		blankWord.push("_");
	}
}
document.getElementById("currentWord").innerHTML= blankWord;


// checks user input to see if it matches the letters of the current song
document.onkeyup = function (event){
	userGuess=event.key;
	userGuessCaps=userGuess.toUpperCase();
	usedLetters.push(userGuessCaps);
	document.getElementById("dislayUsedLetters").innerHTML=usedLetters;
	guessesRemaining-=1;
	console.log(guessesRemaining);
	document.getElementById("guessesRemaining").innerHTML=guessesRemaining;
		
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




