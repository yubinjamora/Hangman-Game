var things = ["daenerys", "jonsnow", "cersei", "sansa", "arya", "bronn", "hodor"];
var blanks = [];
var wrong = [];

var wins = 0;
var loses = 0;

var guessesLeft = 8;
var userGeuss = null;




var randomPick = things[Math.floor(Math.random() * things.length)];


function initialScreen() {
    blanks = [];
    wrong = [];
    randomPick = things[Math.floor(Math.random() * things.length)];
    wins = 0;
    guessesLeft = 8;

    var getStarted = '<img src = "assets/images/gameofthrone.jpg" width="800" height="400" id="images">' + "<p><h3>Press any key to get started!</h3></p>";
    document.getElementById("instruction").innerHTML = getStarted;

    for (var i = 0; i < randomPick.length; i++) {
        blanks.push("_ ");
    }
    
}


initialScreen();


document.onkeyup = function(event) {


    var userGuess = event.key;

    if (randomPick.indexOf(userGuess) < 0) {

        guessesLeft--;
        wrong.push(userGuess);

        if (guessesLeft <= 0) {
            console.log("You Lost");
            guessesLeft = 8;
            initialScreen();
        }


    } else {
        for (var i = 0; i < randomPick.length; i++) {
            if (randomPick[i] === userGuess) {
                guessesLeft--;
                blanks[i] = userGuess;

                var blanksJoin = blanks.join("");

                if (blanksJoin === randomPick) {
                    wins++;
                    console.log("You Win");
                    initialScreen();
                }
            }
        }
    }
    blanksJoin = blanks.join("");
    var html2 = "<p><h4>Wins: " + wins + "</h4></p>" +
        "<p><h4>Current Words:      " + blanksJoin + "</h4></p>" + "<p><h4>Number of Guesses Remaining: " +
        guessesLeft + "</h4></p>" + "<p><h4>Letters Already Geussed: "; 

    var guessessSoFar = wrong.join("")

    document.getElementById("initial").innerHTML = html2;
    document.getElementById("wrong-ones").innerHTML = "<h4><p>" + guessessSoFar + "</h4></p>";

}