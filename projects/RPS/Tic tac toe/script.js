let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-button");
let newButton = document.querySelector("#new-button");
let messageContainer = document.querySelector(".message-container");
let message = document.querySelector("#message");
let drawMsg = document.querySelector("#drawMsg");
let turno = true;//playero and playerX
let winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = ()=>{
    turno = true;
    count = false;
    enableBoxes();
    messageContainer.classList.add("hide");
}


let count = 0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       count++;
        if(turno){
            box.innerText = "O";
            box.style.color = "green";
            turno = false;
        }else{
            
            box.innerText = "X";
            box.style.color = "red";
            turno = true;
            
            
        }
        box.disabled = true;
        checkWinner();
    })
});

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
       
    }
}
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
message.innerText = `congratulations,winner is ${winner}`;
messageContainer.classList.remove("hide");
disableBoxes();
}
const checkWinner = () =>{
for( let pattern of winningPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
       if(count === 9){
        message.innerText = `Unfortunately, the game was draw`;
       }
         if(pos1val === pos2val && pos2val === pos3val){
            
             showWinner(pos1val);
        }
    }
}
};
newButton.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
