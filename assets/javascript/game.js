

var letters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessedLetters = [];
var winningLetters = [];



var reset = function () {
    guessLeft = 9;
    load ();
}

var load = function () {
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessLeft;
document.getElementById("guessedLetters").innerHTML = guessedLetters;
document.getElementById("winning").innerHTML = winningLetters;
};

load ();

alert("Ready to play?");
document.onkeyup = function (event) {
    var playerChoice = event.key.toUpperCase(); //input key from user
    guessedLetters.push(playerChoice);
    load (); // The push () method adds elements to the array, returns length

    var computerChoice  = letters[Math.floor(Math.random() * guessedLetters.length)];

    //clears the number of guesses when guessLeft is 0

    
    if (playerChoice === computerChoice ){
        wins++;
        guessedLetters = [];
        winningLetters = (playerChoice == computerChoice);
        guessLeft = 9;

    }
    else {
        guessLeft--;
    }

    if (guessLeft === 0) {
        losses++;
        guessLeft = 0;
        guessedLetters = [];
        reset();
      }


}