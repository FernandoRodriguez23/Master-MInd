"use scrict"

let colors = ["red", "orange", "yellow", "blue", "green", "purple", "pink", "white", "black"];
let turns = 1;
let answer = [];
let guessCount = 0;
let guessArray = [];

document.getElementById("submitButton").onclick = function () { submitGuess(); }

document.getElementById("clearButton").onclick = function () { clearGuess(); }


let youWin = function () {
    document.getElementsById("guessText").textContent = "Winner";

    document.getElementsById("clearButton").textContent = "You Won";

    document.getElementById("clearButton").onclick = function () { };

    document.getElementsById("submitButton").textContent = "Reset";

    document.getElementById("submitButton").onclick = function () { resetGame(); }

}

let youLose = () => {
    document.getElementsById("guessText").textContent = "Correct Answer";

    for(let marble = 1; marble <= 4; marble++){
        document.getElementsById(`g${marble}`).classList.add(answer[marble]);
    }

    document.getElementsById("clearButton").textContent = "You Lose";

    document.getElementById("clearButton").onclick = function () { };

    document.getElementsById("submitButton").textContent = "Reset";

    document.getElementById("submitButton").onclick = function () { resetGame(); }

}

let resetGame = () => {
    turns = 1;
    answer = [];
    guessCount = 0;
    guessArray = [];

    let elemList = document.getElementsById("main");

    for(let item = 0; item < elemList; item++){
        for(let color = 0; color < colors.length; color++){
            if(elemList[item].classList.contains(colors[color])){
                elemList[item].classList.remove(colors[color]);
            }
        }
    }

    clearGuess();

    document.getElementsById("guessText").textContent = "Guess";
    document.getElementsById("clearButton").textContent = "Clear";
    document.getElementsById("submitButton").textContent = "Submit";

    document.getElementById("submitButton").onclick = function () { submitGuess(); }
    document.getElementById("clearButton").onclick = function () { clearGuess(); }

    createAnswer();

}




let createAnswer = function () {
    answer = [];
    for(let marble = 1; marble <= 4;){
        let newColor = colors[Math.floor(Math.random() * 7)];
        if(answer.includes(newColor)){
            continue;
        }else{
            answer[marble] = newColor;
            marble++;
        }
    }
    console.log(answer);
}

createAnswer();

function isCorrect() {
    let correct = 0;
    let semiCorrect = 0;

    for(let marble= 1; marble <= 4; marble++){
        if(answer.includes(guessArray[marble])){
            if(answer[marble == guessArray[marble]]){
                correct++;
            }else{
                semiCorrect++;
            }
        }
    }

    let corrMarbleLocation = 1;

    for(corrMarbleLocation; corrMarbleLocation <= correct; corrMarbleLocation++){
        let marbleName = `c${turn}${corrMarbleLocation}`;
        document.getElementById(marbleName).classList.add(`white`);
    }

    if(correct == 4){
        youWin();
    }

    for(corrMarbleLocation; corrMarbleLocation <= correct + semiCorrect; corrMarbleLocation++){
        let marbleName = `c${turn}${corrMarbleLocation}`;
        document.getElementById(marbleName).classList.add(`black`)
    }

    clearGuess();
}






function submitGuess(){
    if(guessArray.length > 4){
        for(let i = 1; i < 5; i++){
            let guess = `${turns}${i}`;
            document.getElementsById(guess).classList.add(guessArray[i]);
        }
        isCorrect();
        turn++;
        if(turns > 9){
            youLose();
        }
    }
}








function clearGuess(){
    let elemList = document.getElementsByClassName('guess');
    for(let i = 0; i < elemList.length; i++){
        let elemListItems = elemList[i];
        for(let j = 0; j < color.length; j++){
            if(elemListItems.classList.contains(color[j])){
                elemListItems.classList.remove(color[j]);
            }
        }
    }
    guessCount = 0;
    guessArray = [];
}


let choseColor = function (color) {
    
    let elemList = document.getElementsByClassName('guess');

    for(let i = 0; i < elemList.length; i++){
        let elemListItem = elemList[i];
        if(elemListItem.classList.contains(color)){
            return;
        }
    }

    if(guessCount < 4){
        guessCount++;
        let guessName = `g${guessCount}`;
        document.getElementById(guessName).classList.add(color);
        guessArray[guessCount] = color;
    }
}

