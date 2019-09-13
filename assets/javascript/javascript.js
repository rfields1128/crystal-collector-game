

// generate a random number and assign it to a variable
var targetNumber
// score of crystals collected
var totalScore = 0
// create variables to hold wins, loses
var winsTotal = 0
var lossTotal = 0
// display each crystal
var redCrystal
var blueCrystal
var yellowCrystal
var greenCrystal
// holds random number 
var randomNumber
// add a onclick event listener to each crystal
$(document).ready(function () {

    function startRound() {
        redCrystal = Math.floor(Math.random() * 10);
        blueCrystal = Math.floor(Math.random() * 10);
        orangeCrystal = Math.floor(Math.random() * 10);
        greenCrystal = Math.floor(Math.random() * 10);


        function getRandom(min, max) {
            min = Math.ceil(50);
            max = Math.floor(100);
            return targetNumber = Math.floor(Math.random() * (max - min)) + min; 
        }

        getRandom();
        $("#target-score").html("<h2>" + targetNumber + "</h2>")

        $("#crystal-red").on("click", function () {
            totalScore = totalScore + redCrystal
            console.log(totalScore = totalScore + redCrystal)
            $("#total-score").html("<h2>" + totalScore + "</h2>")
        });

        $("#crystal-blue").on("click", function () {
            totalScore = totalScore + blueCrystal
            console.log(totalScore = totalScore + blueCrystal)
            $("#total-score").html("<h2>" + totalScore + "</h2>")
        });

        $("#crystal-orange").on("click", function () {
            totalScore = totalScore + orangeCrystal
            console.log(totalScore = totalScore + orangeCrystal)
            $("#total-score").html("<h2>" + totalScore + "</h2>")
        });

        $("#crystal-green").on("click", function () {
            totalScore = totalScore + greenCrystal
            console.log(totalScore = totalScore + greenCrystal)
            $("#total-score").html("<h2>" + totalScore + "</h2>")
        });

        // $(totalScore).on("click", function(){
        //     for(var i = 0; i < targetNumber;)

        // })

        function checkScore () {
            if(targetNumber === totalScore) {
                alert("You Win!")
                startRound();
            }
        }   
        checkScore();


    };
    startRound();
  
});






// each  crystal in itself has a random number 



// when ever the  user clicks a crystal, the total score is updated


// check to see if total score is greater than random number,
//if it is then updated losses


// check to see if  total score is eqal to random number, 
//if it is then update wins. 
