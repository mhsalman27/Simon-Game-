let gameSeq = [];
let userSeq = [];


let btns = ["red", "yellow", "green", "purple"];

let level = 0;
let started = false;
let highScr = 0;// for max score

let h2 = document.querySelector('h2');
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game Start");
        started = true;
        levelUp();
    }
});

function gameFlash(btnw) {
    btnw.classList.add('flash');
    setTimeout(() => {
        btnw.classList.remove('flash');
    }, 300);

}
function userFlash(btnw) {
    btnw.classList.add('userflash');
    setTimeout(() => {
        btnw.classList.remove('userflash');
    }, 200);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randIdx);
    // console.log(btnCol);
    // console.log(randBtn);
    gameSeq.push(randCol);
    // console.log(gameSeq);
    gameFlash(randBtn);
}



function checkAns(idx) {

    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 2500);
        }
    } else {
        if(highScr<level){
            highScr = level;
        }
        h2.innerHTML = `Game over !<br> Your score was :<b>${level}</b><br><b>Highest Score : ${highScr}</b><br> Press any to start : `;

        reset();
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white";
        }, 200);
    }
}


function btnpress() {
    // console.log("btn press");
    let btn = this;
    // console.log(btn);
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    // console.log(userColor);

    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll('.btn');


for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


