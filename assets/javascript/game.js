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
var songSelection = [Math.floor(Math.random()*songList.length)]
var randomWord=songList[songSelection];


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
	document.getElementById("guessesNumber").innerHTML=guessesRemaining;
	var wordConstruction;
		
		for (j=0; j<randomWord.length; j++){
			
			if (userGuessCaps===randomWord[j]){
				blankWord[j]=randomWord[j]
				document.getElementById("currentWord").innerHTML=blankWord;
				wordConstruction = blankWord.join("");
			}
		}

		if (wordConstruction===randomWord){
			numberOfWins+=1;
			document.getElementById("winsNumber").innerHTML=numberOfWins;
			console.log(songSelection);

			if (songSelection==0){
				document.getElementById("songTitle").innerHTML="Tom Sawyer";
				document.getElementById("album").innerHTML="Moving Pictures";
				document.getElementById("myAudio"); myAudio.src='assets/music/tomsawyer.mp3'; myAudio.load(); playAudio();
				document.getElementById("albumArt").src='assets/images/movingpictures.jpg';
			}
			else if (songSelection==1){
				document.getElementById("myAudio"); myAudio.src='assets/music/redbarchetta.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="Red Barchetta";
				document.getElementById("album").innerHTML="Moving Pictures";
				document.getElementById("albumArt").src='assets/images/movingpictures.jpg';
			}
			else if (songSelection==2){
				document.getElementById("myAudio"); myAudio.src='assets/music/thetwilighzone.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="The Twilight Zone";
				document.getElementById("album").innerHTML="2112";
				document.getElementById("albumArt").src='assets/images/2112.jpg';
			}
			else if (songSelection==3){
				document.getElementById("myAudio"); myAudio.src='assets/music/yyz.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="YYZ";
				document.getElementById("album").innerHTML="Moving Pictures";
				document.getElementById("albumArt").src='assets/images/movingpictures.jpg';
			}
			else if (songSelection==4){
				document.getElementById("myAudio"); myAudio.src='assets/music/limelight.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="Limelight";
				document.getElementById("album").innerHTML="Moving Pictures";
				document.getElementById("albumArt").src='assets/images/movingpictures.jpg';
			}
			else if (songSelection==5){
				document.getElementById("myAudio"); myAudio.src='assets/music/makingmemories.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="Making Memories";
				document.getElementById("album").innerHTML="Fly By Night";
				document.getElementById("albumArt").src='assets/images/flybynight.jpg';
			}
			else {
				document.getElementById("myAudio"); myAudio.src='assets/music/crossroads.mp3'; myAudio.load(); playAudio();
				document.getElementById("songTitle").innerHTML="Crossroads";
				document.getElementById("album").innerHTML="Feedback";
				document.getElementById("albumArt").src='assets/images/feedback.jpg';
			}		
			

		}
 
}



	




document.getElementById("gameboard").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("gameboard").innerHTML = "YOU CLICKED ME!";
}




