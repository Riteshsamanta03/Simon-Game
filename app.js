let gameseq =[];
let userseq = [];

let started = false;
let level = 0;

let btns = ["yellow","red","blue","green"];
let highscore = 0;

let h3 = document.querySelector("h3");
let para = document.querySelector("h2");

// document.addEventListener("keypress",function(){
//     if(started == false){
//         console.log("game started");
//         started = true;
//         levelup();
//     }
// });
let start = document.querySelector(".start");
start.addEventListener("click",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },150)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150)
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML = `Game over! Your score is <b>${level}</b> <br> Start again `;
        
        if(level > highscore){
            highscore = level;
         }
        console.log(highscore);
         para.innerHTML = `Your highest score is <b> ${highscore}</b>`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
    }
}
function levelup(){
    userseq =[];
    level++;
    h3.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
}

function btnpress(){
    
    let btn = this;
    userflash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}


function reset(){
    started = false;
    level = 0;
    gameseq=[];
    userseq= [];
}