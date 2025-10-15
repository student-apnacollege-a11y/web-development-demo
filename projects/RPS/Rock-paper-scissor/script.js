let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
//computer choice
const message = document.querySelector(".message")
const genCompChoice = ()=>{
    const options = ["rock","paper","scissor"];
   const randIndx = Math.floor(Math.random()*3);
   return options[randIndx];
}
const drawGame = ()=>{
    message.innerText = "Game was Draw";
    console.log("Game was draw.");
    message.style.backgroundColor = "#081b31";
   }
const showWinner = (userWin)=>{
    if(userWin){
        console.log("You Win!");
        message.innerText = "You Win!";
         message.style.backgroundColor = "green";
         userScore++;
         userScorePara.innerText = userScore;

    }else{
        console.log("You lose!");
        message.innerText = "You lose!";
         message.style.backgroundColor = "red";
         compScore++;
          compScorePara.innerText = compScore;
    }
}
const playGame = (userChoice)=>{
console.log("user choice =",userChoice);
//generate computer choice:
const compChoice = genCompChoice();
console.log("comp choice =",compChoice);
if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissors,paper
       userWin = compChoice === "paper"?false:true;
     } else if(userChoice === "paper"){
        //rock,scissor
      userWin =  compChoice ==="scissor"?false:true;
       }else{
        //rock,paper
      userWin =  compChoice === "rock"?false:true;
       }
    showWinner(userWin);
}
}
choices.forEach((choice)=>{
    // console.log(choice);
choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id")
playGame(userChoice);
});
});