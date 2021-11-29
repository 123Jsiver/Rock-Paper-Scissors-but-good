//VARIABLES
let userChoice; // get value from R/P/S buttons
let compChoice; // random choice of R/P/S
let userScore = 0, compScore = 0; // Keep track of wins/losses
//let result; maybe result variable

// Statup functionality *NOT A FUNCTION*
// Add event listeners to all 3 buttons
// Onclick call getInput function
document.getElementbyId("rock").addEventListener("click", function() {
  getinput(this.id);
});
document.getElementbyId("paper").addEventListener("click", function() {
  getinput(this.id);
});
document.getElementbyId("scissors").addEventListener("click", function() {
  getinput(this.id);
});

// Get input (User's Choice of RPS)
function getInput(choice)
{
  userChoice = choice;
  // console.log(choice);
}

// Get random computer's choice of RPS
function getRandomChoice()
{
  // randomly chose 1 of 3 options
}

// Comparing user vs. comp choices
function compareChoices()
{
  // switch statment for ALL possibilities
}

// Display the round's winner
function displayresult()
{
  // get HTML element to display the text
  // assign string value
}

//Update score
function updateScore()
{
  // increment user ir comp score base on round winner
  // update score on screen
}

//Reset Score
function resetScore()
{
  // set user and comp score to 0
  // update score on screen
}
