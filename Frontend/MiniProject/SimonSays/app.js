let gameSeq =[];
let userSeq =[];
let h2 = document.querySelector("h2");
let btns =["red","yellow","green","purpel"];

let started = false;
let level =0;
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started =true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")},250
    );
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")},250
    );
}

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randBtn);
    // console.log(randColor);
    btnFlash(randBtn);
}

function checkAns(idx){
    // let idx = level-1;
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        h2.innerHTML = `Game Over! You score is <b>${level}<b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor ="brown";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },500);
        reset();
    }
}


function btnPress(){
   let  btn = this;
   userFlash(btn);
   userColor = btn.getAttribute("id");
   console.log(userSeq);
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");

for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}

 function reset(){
    started =false;
    let gameSeq =[];
    let userSeq =[];
       level=0;
}