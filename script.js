//computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    let computerOption = ["Rock", "Paper", "Scissors"]
    let computerSelection = computerOption[Math.floor(Math.random() * computerOption.length)]
    console.log(computerSelection)
    return computerSelection
}

function playerPlay(){}

//function that plays a single round of Rock Paper Scissors
function playOneRound(){
    computerSelectionCaseSensitive = computerPlay();
    playerSelectionCaseSensitive = prompt("Please insert rock, paper or scissors");
    let computerSelection = computerSelectionCaseSensitive.toUpperCase();
    let playerSelection = playerSelectionCaseSensitive.toUpperCase();

        if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
            console.log("Its a draw, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
            console.log("Its a draw, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
            console.log("Its a draw, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
            console.log("Computer win, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
            console.log("Player win, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
            console.log("Computer win, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
            console.log("Player win, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
            console.log("Computer win, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
            console.log("Player win, player choose: " + playerSelection + " while computer choose: " + computerSelection)
        } else {
            console.log("error occured, user entered incorrect input")
            console.log("user input " + playerSelection + " while computer was throwing " + computerSelection)
        }

}

//function that plays a single round of Rock Paper Scissors using switch 
function playOneRoundinSwitch(){
    computerSelectionCaseSensitive = computerPlay();
    playerSelectionCaseSensitive = prompt("Please insert rock, paper or scissors");
    let computerSelection = computerSelectionCaseSensitive.toUpperCase();
    let playerSelection = playerSelectionCaseSensitive.toUpperCase();

    switch (computerSelection){
        case "SCISSORS":
            if (playerSelection === "SCISSORS"){
                console.log("Its a draw, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            } else if (playerSelection === "PAPER"){
            console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            } else if (playerSelection === "ROCK"){
            console.log("Player won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            }
        break;

        case "PAPER":
            if (playerSelection === "PAPER"){
                console.log("Its a draw, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            } else if (playerSelection === "ROCK"){
            console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            } else if (playerSelection === "SCISSORS"){
            console.log("Player won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            }
        break;

        case "ROCK":
            if (playerSelection === "ROCK"){
                console.log("Its a draw, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            } else if (playerSelection === "SCISSORS"){
            console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            } else if (playerSelection === "PAPER"){
            console.log("Player won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            }
    }}


    //function that plays a single round with more optimized use of switch and if..else (credits to mokwangquan)
    function playOneRoundOptimize(){
        
            computerSelectionCaseSensitive = computerPlay();
            playerSelectionCaseSensitive = prompt("Please insert rock, paper or scissors");
            let computerSelection = computerSelectionCaseSensitive.toUpperCase();
            let playerSelection = playerSelectionCaseSensitive.toUpperCase();

            console.log("player wrote: " + playerSelection);
            console.log("computer choose: " + computerSelection);

            if (computerSelection === playerSelection){
                console.log("Its a draw, player choose: " + playerSelection + " while computer choose: " + computerSelection)
            } else if (computerSelection !== playerSelection){
                switch (playerSelection){
                    case "SCISSORS":
                        if (computerSelection === "PAPER"){
                        console.log("Player won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        } else if (computerSelection === "ROCK"){
                        console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        }
                    break;
                    case "PAPER":
                        if (computerSelection === "ROCK"){
                        console.log("Player won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        } else if (computerSelection === "SCISSORS"){
                        console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        }
                    break;
                    case "ROCK":
                        if (computerSelection === "SCISSORS"){
                        console.log("Player won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        } else if (computerSelection === "PAPER"){
                        console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        }
                    default: 
                    alert("Somehow you ended up here, wrong data entry");
                    playOneRoundOptimize();
                }

                } 
            }

