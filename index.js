//VARIABLES
let userChoice; // get value from R/P/S buttons
let compChoice; // random choice of R/P/S
let userScore = 0, compScore = 0; // Keep track of wins/losses
let resultMessage;

// Statup functionality *NOT A FUNCTION*
// Add event listeners to all 3 buttons
// Onclick call getInput function
document.getElementById("rock").addEventListener("click", function() {
  getInput(this.id);
});
document.getElementById("paper").addEventListener("click", function() {
  getInput(this.id);
});
document.getElementById("scissors").addEventListener("click", function() {
  getInput(this.id);
});

// Get input (User's Choice of RPS)
function getInput(choice)
{
  userChoice = choice;
  // console.log(choice);
  getRandomChoice();
}

// Get random computer's choice of RPS
function getRandomChoice()
{
  compChoice = Math.floor(Math.random() * 3); // sets compChoice equal to 0,1, or 2
  // 0 is rock
  // 1 is paper
  // 2 is scissors
  //console.log(compChoice)
  compareChoices();
}

// Comparing user vs. comp choices
function compareChoices()
{
  // switch statment for ALL possibilities
  switch (userChoice + compChoice) {
    case "rock0": // rock vs rock
    case "paper1": // paper vs paper
    case "scissors2": // scissors vs scissors
    resultMessage = "Draw!";
      break;
      case "rock1": // rock vs paper
      case "paper2": // paper vs scissors
      case "scissors0": // scissors vs rock
        resultMessage = "You Lose!";
        updateScore("comp");
        break;
        case "rock2": // rock vs scissors
        case "paper0": // paper vs rock
        case "scissors1": // scissors vs paper
          resultMessage = "You Win!";
          updateScore("user");
          break;

    default:
    resultMessage = "YOU BROKE IT! HOW DARE YOU!";
  }
  displayResult();
  //console.log(compareChoices);
}

// Display the round's winner
function displayResult()
{
  // get HTML element to display the text and assign resultMessage
  document.getElementById("result").textContent = resultMessage;

}

//Update score
function updateScore(winner)
{
  if(winner == "user")
  {
    userScore++;
  }
  else
  {
    compScore++;
  }
  // increment user or comp score base on round winner
  // update score on screen
  winner++;
  console.log(compScore + " : " + userScore);
}

//Reset Score
function resetScore()
{
  // set user and comp score to 0
  // update score on screen
}
