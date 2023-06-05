// let myName = prompt('please fill in your name')

// let age = prompt ('how old are you')

// let gender = prompt ('what is your gender')

// let address = prompt ('Where do you live')

// alert ('Thank you ' + myName + ',' + 'you are'+ age +' years old , you are ' + gender + ', whos live in ,' + address)

// document.write ('Thank you ' + myName + ',' + 'you are'+ age +' years old , you are ' + gender + ', whos live in ,' + address)

let myName= prompt("Is my name is Sang ? (answer it format Yes/No)");
let standardName = myName.toLowerCase();

function guessName(myName) {
  if ((myName === "yes" || myName === "y")) {
    document.write ('Correct'), 
    alert("Correct");
  } else {
    document.write ('Wrong'),
    alert("Wrong");
  }
}

guessName(standardName)


let age = prompt("Am I 29 years old? (answer it format Yes/No)");
let Age = age.toLocaleLowerCase();

function guessAge(age) {
  if ((age === "yes" || age === "y")) {
    document.write ('Correct'), 
    alert("Correct");
  } else {
    document.write ('Wrong'),
    alert("Wrong");
  }
}

guessAge(Age)

let gender = prompt(" Am I Male ? (answer it format Yes/No)");
let Gender = gender.toLowerCase();
function guessGender(gender) {
  if ((age === "yes" || age === "y")) {
    document.write ('Correct'), 
    alert("Correct");
  } else {
    document.write ('Wrong'),
    alert("Wrong");
  }
}

guessGender(Gender)





let address = prompt("Am I live in Hochiminh city? (answer it format Yes/No)");
let Address = address.toLocaleLowerCase();

function guessAdress(Address) {
  if ((address === "yes" || address === "y")) {
    document.write ('Correct'), 
    alert("Correct");
  } else {
    document.write ('Wrong'),
    alert("Wrong");
  }
}

guessAdress(address)


let workExp = prompt(
  "Am I a junior in Fullstack web dev (answer it format Yes/No) "
)

let WorkExp = workExp.toLocaleLowerCase();

function guessWorkExp(workExp) {
  if ((workExp === "yes" || workExp === "y")) {
    document.write ('Correct'), 
    alert("Correct");
  } else {
    document.write ('Wrong'),
    alert("Wrong");
  }
}

guessWorkExp(WorkExp)