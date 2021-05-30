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
                        playerWin++
                        } else if (computerSelection === "ROCK"){
                        console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        computerWin++
                        }
                    break;
                    case "PAPER":
                        if (computerSelection === "ROCK"){
                        console.log("Player won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        playerWin++
                        } else if (computerSelection === "SCISSORS"){
                        console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        computerWin++
                        }
                    break;
                    case "ROCK":
                        if (computerSelection === "SCISSORS"){
                        console.log("Player won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        playerWin++
                        } else if (computerSelection === "PAPER"){
                        console.log("Computer won!, player choose: " + playerSelection + " while computer choose: " + computerSelection)
                        computerWin++
                        }
                    break;
                    default: 
                    alert("Somehow you ended up here, wrong data entry");
                    playOneRoundOptimize();
                }
                } 
             
                console.log("TEST" + computerWin + " " + playerWin)
                return computerWin, playerWin
            }
    //write a new function called game
    let computerWin = 0; 
    let playerWin = 0;
    function game(){
        
        while (computerWin < 5 && playerWin < 5){
        playOneRoundOptimize()
        console.log("the counter for computer is " + computerWin + "while the counter for player win is " + playerWin);
        if (computerWin == 5){
            console.log("The computer has won with a score of: " + computerWin + " against the player who only won: " + playerWin)
            console.log("Skynet conquers humanity =(")
        }
        else if (playerWin == 5){
            console.log("The player has won with a score of: " + playerWin + " against the computer who only won: " +  computerWin)
            console.log("Human Victorious")
        }
    }

    
    }