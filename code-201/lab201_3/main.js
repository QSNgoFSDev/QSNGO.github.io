// // let myName = prompt('please fill in your name')

// // let age = prompt ('how old are you')

// // let gender = prompt ('what is your gender')

// // let address = prompt ('Where do you live')

// // alert ('Thank you ' + myName + ',' + 'you are'+ age +' years old , you are ' + gender + ', whos live in ,' + address)

// // document.write ('Thank you ' + myName + ',' + 'you are'+ age +' years old , you are ' + gender + ', whos live in ,' + address)

// let myName= prompt("Is my name is Sang ? (answer it format Yes/No)");
// let standardName = myName.toLowerCase();

// function guessName(myName) {
//   if ((myName === "yes" || myName === "y")) {
//     document.write ('Correct'), 
//     alert("Correct");
//   } else {
//     document.write ('Wrong'),
//     alert("Wrong");
//   }
// }

// guessName(standardName)


// let age = prompt("Am I 29 years old? (answer it format Yes/No)");
// let Age = age.toLocaleLowerCase();

// function guessAge(age) {
//   if ((age === "yes" || age === "y")) {
//     document.write ('Correct'), 
//     alert("Correct");
//   } else {
//     document.write ('Wrong'),
//     alert("Wrong");
//   }
// }

// guessAge(Age)

// let gender = prompt (" Am I Male ? (answer it format Yes/No)");
// let Gender = gender.toLowerCase();


// function guessGender(gender) {
//   if ((age === "yes" || age === "y")) {
//     document.write ('Correct'), 
//     alert("Correct");
//   } else {
//     document.write ('Wrong'),
//     alert("Wrong");
//   }
// }

// guessGender(Gender)





// let address = prompt("Am I live in Hochiminh city? (answer it format Yes/No)");
// let Address = address.toLocaleLowerCase();

// function guessAdress(address) {
//   if ((address === "yes" || address === "y")) {
//     document.write ('Correct'), 
//     alert("Correct");
//   } else {
//     document.write ('Wrong'),
//     alert("Wrong");
//   }
// }

// guessAdress(address)


// let workExp = prompt(
//   "Am I a junior in Fullstack web dev (answer it format Yes/No) "
// )

// let WorkExp = workExp.toLocaleLowerCase();

// function guessWorkExp(workExp) {
//   if ((workExp === "yes" || workExp === "y")) {
//     document.write ('Correct'), 
//     alert("Correct");
//   } else {
//     document.write ('Wrong'),
//     alert("Wrong");
//   }
// }

// guessWorkExp(WorkExp)


// // 6th question


// // let GuessNumberFav = prompt ('how many places is my favorites ?')


// // function FavPlaceGame(GuessNumberFav) {

// //     // we know exactly 4 times to loops, so we use loop "for"
// //     for (i =0; i <= 4; i++ )

// //     {

// //         let GNFinside = prompt ('how many places is my favorites ?')

// //         if (GuessNumberFav < 2  ) {
// //             alert ('too low')




// //         }

// //         else if (GuessNumberFav > 4) {

// //             alert ('too high')
// //         }

// //         else if (GuessNumberFav == 3){


// //         alert ('correct')}





// //     }

// //     alert ('Number of my favorite places is 3')
// //     document.write ('number of my favorite places is 3 ')


// // }

// // FavPlaceGame(GuessNumberFav)


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


// function FavPlaceGame() {
//   let correctAnswers = ['Paris', 'London', 'Rome', 'Tokyo', 'New York', 'Sydney'];
//   let attempts = 6;

//   for (let i = 1; i <= attempts; i++) {
//     let guess = prompt('Guess one of my favorite places:');

//     if (correctAnswers.includes(guess)) {
//       alert('Correct!');
//       return; 
//     //   exit if correct
//     } else {
//       alert('Incorrect!');
//     }
//   }

//   alert('You have run out of attempts. The correct answers are: ' + correctAnswers.join(', '));
// }

// FavPlaceGame();