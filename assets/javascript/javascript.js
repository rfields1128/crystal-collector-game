

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

        function randomInt(min,max){
            min = Math.ceil(12);
            max = Math.floor(1);
        redCrystal = Math.floor(Math.random() * (max - min)) + min;
        blueCrystal = Math.floor(Math.random() * (max - min)) + min;
        orangeCrystal = Math.floor(Math.random() * (max - min)) + min;
        greenCrystal = Math.floor(Math.random() * (max - min)) + min;
        };

        randomInt();


        function getRandom(min, max) {
            min = Math.ceil(19);
            max = Math.floor(120);
            return targetNumber = Math.floor(Math.random() * (max - min)) + min;
        };

        getRandom();

        

        $("#crystal-red").on("click", function () {
            totalScore = totalScore + redCrystal
            console.log(redCrystal)
            $("#total-score").html(totalScore)
            if (totalScore == targetNumber) {
                win();
            }
            else if (totalScore > targetNumber) {
                loss();
            }
        });

        $("#crystal-blue").on("click", function () {
            totalScore = totalScore + blueCrystal
            console.log(blueCrystal)
            $("#total-score").html(totalScore)
            if (totalScore == targetNumber) {
                win();
            }
            else if (totalScore > targetNumber) {
                loss();
            }
        });

        $("#crystal-orange").on("click", function () {
            totalScore = totalScore + orangeCrystal
            console.log(orangeCrystal)
            $("#total-score").html(totalScore)
            if (totalScore == targetNumber) {
                win();
            }
            else if (totalScore > targetNumber) {
                loss();
            }
        });

        $("#crystal-green").on("click", function () {
            totalScore = totalScore + greenCrystal
            console.log(greenCrystal)
            $("#total-score").html(totalScore)
            if (totalScore == targetNumber) {
                win();
            }
            else if (totalScore > targetNumber) {
                loss();
            }
        });

        $("#wins").text(winsTotal)
        $("#losess").text(lossTotal)

        $("#target-score").html(targetNumber)

    function reset() {
        getRandom();
        $("#target-score").html(targetNumber)
        $('#target-score').text(targetNumber);
        redCrystal = Math.floor(Math.random() * 10);
        blueCrystal = Math.floor(Math.random() * 10);
        orangeCrystal = Math.floor(Math.random() * 10);
        greenCrystal = Math.floor(Math.random() * 10);
        totalScore = 0;
        $("#total-score").text(totalScore);
    }
    function win() {
        alert("You Win! You aren't a complete disapointment!");
        winsTotal++;
        $('#wins').text(winsTotal);
        reset();
    }

    function loss() {
        alert("You lose. You are a disapointment!!");
        lossTotal++;
        $('#losses').text(lossTotal);
        reset()
    }
    


});






// each  crystal in itself has a random number 



// when ever the  user clicks a crystal, the total score is updated


// check to see if total score is greater than random number,
//if it is then updated losses


// check to see if  total score is eqal to random number, 
//if it is then update wins. 
