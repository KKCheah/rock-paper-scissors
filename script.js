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