// let myName = prompt('please fill in your name')

// let age = prompt ('how old are you')

// let gender = prompt ('what is your gender')

// let address = prompt ('Where do you live')

// alert ('Thank you ' + myName + ',' + 'you are'+ age +' years old , you are ' + gender + ', whos live in ,' + address)

// document.write ('Thank you ' + myName + ',' + 'you are'+ age +' years old , you are ' + gender + ', whos live in ,' + address)

let myName= prompt("Is my name is Sang ? (answer it format Yes/No)");
let name = myName.toLocaleLowerCase();

function guessName(name) {
  if ((name === "Yes" || "Y")) {
    document.write ('Correct'), 
    alert("Correct");
  } else {
    document.write ('Correct')
    alert("Wrong");
  }
}




let age = prompt("Am I 29 years old? (answer it format Yes/No)");
let Age = age.toLocaleLowerCase();

function guessAge(Age) {
  if (Age === "Yes" || "Y") {
    return alert("Correct");
  } else {
    return alert("Wrong");
  }
}

let gender = prompt(" Am I Male ? (answer it format Yes/No)");
let Gender = gender.toLowerCase();
function guessAge(Gender) {
  if ((Gender === "Yes" || "Y")) {
    return alert("Correct");
  } else {
    return "wrong";
  }
}

let address = prompt("Am I live in Hochiminh city? (answer it format Yes/No)");
let Address = address.toLocaleLowerCase();

function guessAdress(Address) {
  if ((Address === "Yes" || "Y")) {
    return alert("Correct");
  } else {
    return alert("Wrong");
  }
}

let workExp = prompt(
  "Am I a junior in Fullstack web dev (answer it format Yes/No) "
)

let WorkExp = workExp.toLocaleLowerCase();

function guessWorkExp(WorkExp) {
  if ((Address === "Yes" || "Y")) {
    return alert("Correct");
  } else {
    return "Wrong";
  }
}