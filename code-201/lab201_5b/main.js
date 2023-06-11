function FavPlaceGame() {
  let correctAnswer = 3;

  for (let i = 1; i <= 4; i++) {

    // check user input valid!!
    // check user input is a number
    // if not: loop

    let isInputValid = false;
    let userInput;

    while (!isInputValid) {

      userInput = prompt('How many places is my favorite?');

      if (!isNaN(userInput)) {
        // isNaN: true when input is not a number
        // isNaN: false when input is a number
        isInputValid = true;
      }

      console.log("userInput: ", userInput)
      console.log("isInputValid: ", isInputValid)



    }

    let guessNumberFav = Number(userInput)



    if (guessNumberFav < correctAnswer) {
      alert('Too low');
    } else if (guessNumberFav > correctAnswer) {
      alert('Too high');
    } else {
      alert('Correct!');
      break; //
    }

    // 


  }

  alert('You have exhausted all your attempts. The correct answer is 3.');
}

FavPlaceGame();
