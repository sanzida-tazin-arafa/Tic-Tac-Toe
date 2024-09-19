let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetbtn");
let mszcontainer=document.querySelector(".msz-container");
let msz =document.querySelector("#msz");

let turnO=true;//playerO,playerX
const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    resetbutton.innerText="Reset Game";
    turnO=true;
    enableBoxes();
    mszcontainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msz.innerText=`Congratulations! The winner is team ${winner}`;
    mszcontainer.classList.remove("hide");
    disableBoxes();
    resetbutton.innerText="New Game";
};

const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val  &&  pos2val==pos3val){
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

resetbutton.addEventListener("click", resetGame);