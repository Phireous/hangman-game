// make Array of Word Options (all lowercase)
var wordsList = ['ironman', 'hulk', 'thor', 'blackwidow', 'falcon', 'antman', 'wolverine', 'cyclops', 'gambit', 'iceman', 'spiderman'];
var win = 0;
var loss = 0;
var letterGuessed;
var numBlanks;
var blanksAndSuccesses;
var randomWord;
var numberOfGuesses;
var wrong = [];
var correct;
// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {
  // Reset the guesses back to 0.
  var guess = 0
  // Solution is chosen randomly from wordList. (Like RPS)
  randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  // The word is broken into individual letters. (convert string to array of letters)
  console.log(randomWord);
  // We count the number of letters in the word. (tells us the number of `numBlanks`)
  correct = randomWord.split('');
  numBlanks = randomWord.split('').length;
  // We print the solution in console (for testing).
  
  // reset the guess and success array at each round. Array of letters (first array, for succesful guesses)
  
  // reset the wrong guesses from the previous round. Array of letters (second arrays, one for fails)
  wrong = [];

  // Fill up the blanksAndSuccesses list with appropriate number of blanks.
  blanksAndSuccesses = [];
  // This is based on number of letters in solution.
  for (var i = 0; i < numBlanks; i++) {
    // make a list of `_`
    // ex dog = ['d', 'o','g'] and generate a new array like ['_', '_', '_']
    blanksAndSuccesses.push('_');

  document.querySelector("#score").innerHTML = "<p>wins: " + win + "</p>" + "<p>loss: " + loss + "</p>"


  }
  console.log(blanksAndSuccesses);
  
  
  // update html on the page

  
  

  // set #guesses-left to numberOfGuesses
  numberOfGuesses = 10;
  document.querySelector("#guesses-left").innerHTML = 'guesses remaining: ' + numberOfGuesses;

  // set #word-blanks to the blanks at the beginning of each round in the HTML
  document.querySelector("#blank-word").innerHTML = blanksAndSuccesses.join(' ');
  // set #wrong-guesses to empty / clears the wrong guesses from the previous round by
  document.querySelector("#wrong-guesses").innerHTML = wrong;
}

// checkLetters() function
// It's where we will do all of the comparisons for matches.
// Again, it's not being called here. It's just being made for future use.
function checkLetters(letter) {

  var letterInWord = false;
  // Check if a letter exists inside the array at all. (by looping thru the word as an array)
  for (var i = 0; i < numBlanks; i++) {
      // If the letter exists then toggle this boolean to true. This will be used in the next step.
      if (randomWord.split('')[i] === letterGuessed){
      letterInWord = true;
    }
  }

  // If `letterInWord`, then figure out exactly where (which indices).
  if (letterInWord === true) {
    for (var i = 0; i < numBlanks; i++){
      if (randomWord.split('')[i] === letterGuessed){
        blanksAndSuccesses.splice(i, 1, letterGuessed);
        console.log(blanksAndSuccesses);
        document.querySelector("#blank-word").innerHTML = blanksAndSuccesses.join(' ');
      }
    }
    
    // Loop through the word, one letter at a time
      // Populate the blanksAndSuccesses with every instance of the letter.
      // if chosenWord letter is the same as letter
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
  }
  else {
    wrong.push(letterGuessed);

    document.querySelector("#wrong-guesses").innerHTML = 'incorrect guesses: ' + wrong;
    numberOfGuesses --;
    document.querySelector("#guesses-left").innerHTML = 'guesses remaining: ' + numberOfGuesses;
  }

}

  // If the letter doesn't exist at all...
    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.


// roundComplete() function
// Here we will have all of the code that needs to be run after each guess is made
function roundComplete() {

  // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  // Update #word-blanks to show any correct guesses
  
  // Update #wrong-guesses to show the wrong guesses

  // If we have gotten all the letters to match the solution...
    // ..add to the win counter & give the user an alert.
  if (blanksAndSuccesses.join('') === correct.join('')){
      win ++;
      

    // Update the win counter in the HTML & restart the game.
      var html = "<p>wins: " + win + "</p>" +
                "<p>loss: " + loss + "</p>";

      document.querySelector("#score").innerHTML = html;
      alert(randomWord + '! You got it!');
      startGame();
    }

  // If we've run out of guesses..
    if (numberOfGuesses === 0) {
      loss ++;
      alert('you loss this round, better luck next time!')
      var html = "<p>wins: " + win + "</p>" +
                "<p>loss: " + loss + "</p>";

      document.querySelector("#score").innerHTML = html;
      startGame();

    }
    // Add to the loss counter.
    // Give the user an alert.
    // Update the loss counter in the HTML.
    // Restart the game.
    
}


// on initial page load Starts the Game by running the startGame() function
startGame();

// Then initiate the function for capturing key clicks.
document.onkeyup = function(event) {
  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(letterGuessed)
  // console.log(letterGuessed)
  // Runs the code to check for correctness.
  checkLetters(letterGuessed);
  // Runs the code after each round is done.
  roundComplete();
};
