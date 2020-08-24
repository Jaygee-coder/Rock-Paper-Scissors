const playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
//console.log(playerSelection);

var computerPlay = Math.random();
  if (computerPlay< 0.34) {
	computerPlay = "rock";
  } else if(computerPlay<= 0.67) {
	computerPlay = "paper";
  } else {
	computerPlay = "scissors";
  } 
//console.log("Computer chooses: " + computerPlay);

const computerSelection = computerPlay;

const playerSelection = prompt("Do you choose Rock, Paper or Scissors?");
//console.log(playerSelection);

function playRound(computerSelection, playerSelection) {
    
    if (computerSelection === playerSelection) {
        return "It's a draw!" + " " + "Lets play again." ;
    }
    
    else if (playerSelection === "rock") {
        
        if (computerSelection === "scissors") {
            return "You win!" + " " + "Rock crushes scissors.";
        }
        else {
            return "You lose!" + " " + "Paper covers rock.";
        }
    }

    else if (playerSelection === "scissors") {
        
        if (computerSelection === "rock") {
            return "You lose!" + " " + "Rock crushes scissors.";
        }
        else {
            return "You win" + " " + "Scissors cuts paper!";
        }
    }
    
    else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") {
            return "You win!" + " " + "Paper covers rock.";
        }
        else {
            return "You lose!" + " " + "Scissors cuts paper.";
        }
            
    }
}

console.log("Computer chose: " + computerPlay);
console.log("You chose: " + playerSelection);
console.log(playRound(computerSelection, playerSelection)); 

function sayHi(counter){
    console.log(`I should be printed ${counter} time`)
}

for( i = 0; i < 5; i += 1){
    sayHi(i)
}

