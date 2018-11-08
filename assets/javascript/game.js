

var letters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = [];
var losses = [];
var guessLeft = 9;
var guessedLetters = [];

//alert("Ready to play?");
document.onkeyup = function (event) {
    var playerChoice = event.key; //input key from user
    guessedLetters.push(playerChoice); // The push () method adds elements to the array, returns length
    var computerChoice  = letters[Math.floor(Math.random() * guessedLetters.length)];

    //clears the number of guesses when guessLeft is 0
    var reset = function () {
        guessLeft = 9;
        guessLeft = [];
    }
    
    if (playerChoice === computerChoice ){
        wins++;
        guessLeft = 9;
    }

    else {
        guessLeft--;
        losses++;
    }


}