let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");
let turnO=true;//playerX playerY
const winpattern=[//array of arrays 2d array
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
turnO=true;
enablebtn();
msgcont.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO)
    {
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
const disablebtn=()=>{
    for(let box of boxes){
     box.disabled=true;
    }
};
const enablebtn=()=>{
    for(let box of boxes){
     box.disabled=false;
     box.innerText="";
    }
};

const showwinner=(winner)=>{
msg.innerText=`Congratulations Winner is ${winner}`;
msgcont.classList.remove("hide");
disablebtn();
}
const checkWinner=()=>{
    for(let pattern of winpattern)
    {
    // {  console.log(pattern[0],pattern[1],pattern[2]);
    //     console.log(boxes[pattern[0]].innerText,boxes[pattern[1]],innerText,boxes[pattern[2]].innerText);

        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!="")
        {
            if(pos1==pos2&&pos2==pos3&&pos3==pos1){
                console.log("winner",pos1);
                showwinner(pos1);
            }
        }
    }
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);