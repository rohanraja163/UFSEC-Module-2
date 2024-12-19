let soup="Chicken noodle soup";
const customerbanned = true;
let response= customerbanned
    ? "Sorry no soup for you"
    : soup
    ? `Yes we have ${soup} today`
    : "Sorry no soup today";
console.log(response);

let score = 89
let grade = score > 89? "A"
     : score > 79? "B"
     : score > 69? "C"
     : score > 59? "D"
     : "F";
console.log(`My grade is ${grade}`)

let playerOne = "rock", computer = "paper";
let result = playerOne === computer ? "Tie game!"
    : playerOne === "rock" && computer === "paper" ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors" ? "Compuer wins!"
    : playerOne === "scissors" && computer === "rock" ? "Computer wins!"
    : "playerOne wins!";
console.log(result);