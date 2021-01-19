let todoElt = document.getElementById("todo");
let squareElt = document.getElementById("square");
let arrowElt = document.getElementById("arrow");
let blueareaElt = document.getElementById("bluearea");
let gameElt = document.getElementById("game");
let theendElt = document.getElementById("theend");
let youwinElt = document.getElementById("youwin");
let ayayaElt = document.getElementById("ayaya");
let orangesquareElt = document.getElementById("orangesquare");
let redsquareElt = document.getElementById("redsquare");
let yellowsquareElt = document.getElementById("yellowsquare");
let purplesquareElt = document.getElementById("purplesquare");
let gameOverElt = document.getElementById("gameOver");
let youloseElt = document.getElementById("youlose");
let smugElt = document.getElementById("smug");
let timewinElt = document.getElementById("timewin");

let compteurElt = document.getElementById("compteur");
let intervalId = setInterval(diminuerCompteur, 1000);
let movingX = 0;
let movingY = 0;

let xOrange = 200;
let yOrange = 0;
let orangeDirection = 'down';

let xYellow = 400;
let yYellow = 0;

let xPurple = 0;
let yPurple = 400;
let countPurple = 0;
let purpleDirection;

document.body.style.margin = "0";
document.body.style.fontFamily = "'Acme', sans-serif";

todoElt.style.textAlign = "center";


gameElt.style.position = "relative";
gameElt.style.width = "1000px";
gameElt.style.height = "800px";
gameElt.style.margin = "0 auto";
gameElt.style.backgroundColor = "#eafaff";

theendElt.style.display = "none";
gameOverElt.style.display = "none";


squareElt.style.width = "100px";
squareElt.style.height = "100px";
squareElt.style.border = "1px solid cyan";
squareElt.style.backgroundColor = "black";
squareElt.style.display = "flex";
squareElt.style.justifyContent = "center";
squareElt.style.alignItems = "center";
squareElt.style.position = "absolute";
squareElt.style.zIndex = "10";
squareElt.style.color = "white";

blueareaElt.style.width = "100px";
blueareaElt.style.height = "300px";
blueareaElt.style.display = "flex";
blueareaElt.style.alignItems = "center";
blueareaElt.style.justifyContent = "center";
blueareaElt.style.position = "absolute";
blueareaElt.style.right = "0px";
blueareaElt.style.top = "250px";
blueareaElt.style.backgroundColor = "cyan";
blueareaElt.style.color = "white";
blueareaElt.style.zIndex = "0";

arrowElt.style.color = "white";

youwinElt.style.fontSize = "5rem";
youwinElt.style.textAlign = "center";

ayayaElt.style.fontSize = "1.6rem";
ayayaElt.style.textAlign = "center";

smugElt.style.fontSize = "1.6rem";
smugElt.style.textAlign = "center";

youloseElt.style.fontSize = "5rem";
youloseElt.style.textAlign = "center";

orangesquareElt.style.width = "100px";
orangesquareElt.style.height = "100px";
orangesquareElt.style.backgroundColor = "orange";
orangesquareElt.style.position = "absolute";
orangesquareElt.style.top = yOrange + "px";
orangesquareElt.style.left = xOrange + "px";
orangesquareElt.style.textAlign = "center";
orangesquareElt.style.display = "flex";
orangesquareElt.style.alignItems = "center";
orangesquareElt.style.justifyContent = "center";
orangesquareElt.style.color = "white";

redsquareElt.style.width = "100px";
redsquareElt.style.height = "100px";
redsquareElt.style.backgroundColor = "red";
redsquareElt.style.position = "absolute";
redsquareElt.style.top = "150px";
redsquareElt.style.left = "300px";
redsquareElt.style.textAlign = "center";
redsquareElt.style.display = "flex";
redsquareElt.style.alignItems = "center";
redsquareElt.style.justifyContent = "center";
redsquareElt.style.color = "white";

yellowsquareElt.style.width = "100px";
yellowsquareElt.style.height = "100px";
yellowsquareElt.style.backgroundColor = "#ffe400";
yellowsquareElt.style.position = "absolute";
yellowsquareElt.style.top = yYellow + "px";
yellowsquareElt.style.left = xYellow + "px";
yellowsquareElt.style.textAlign = "center";
yellowsquareElt.style.display = "flex";
yellowsquareElt.style.alignItems = "center";
yellowsquareElt.style.justifyContent = "center";
yellowsquareElt.style.color = "white";

purplesquareElt.style.width = "100px";
purplesquareElt.style.height = "100px";
purplesquareElt.style.backgroundColor = "purple";
purplesquareElt.style.position = "absolute";
purplesquareElt.style.top = yPurple + "px";
purplesquareElt.style.left = xPurple + "px";
purplesquareElt.style.textAlign = "center";
purplesquareElt.style.display = "flex";
purplesquareElt.style.alignItems = "center";
purplesquareElt.style.justifyContent = "center";
purplesquareElt.style.color = "white";

compteurElt.style.position = "absolute";
compteurElt.style.top = "0px";
compteurElt.style.right = "20px";
compteurElt.style.zIndex = "10";
compteurElt.style.fontSize = "4rem";

compteurElt.style.margin = "0px";

timewinElt.style.fontSize = "2rem";
timewinElt.style.textAlign = "center";

document.addEventListener("keydown", function(e){
  if (e.keyCode == "39") {
    movingRight();
    endGame();
    gameOverf();
  }
});
document.addEventListener("keydown", function(e){
  if (e.keyCode == "37") {
    movingLeft();
    gameOverf();
  }
});
document.addEventListener("keydown", function(e){
  if (e.keyCode == "38") {
    movingTop();
    gameOverf();
  }
});
document.addEventListener("keydown", function(e){
  if (e.keyCode == "40") {
    movingBottom();
    gameOverf();
  }
});

function movingRight(){
  squareElt.style.left = (movingX += 10) + "px";
  arrow.textContent = "→";
};
function movingLeft(){
  squareElt.style.left = (movingX -= 10) + "px";
  arrow.textContent = "←"
};
function movingTop(){
  squareElt.style.top = (movingY -= 10) + "px";
  arrow.textContent = "↑"
};
function movingBottom(){
  squareElt.style.top = (movingY += 10) + "px";
  arrow.textContent = "↓";
};

function endGame(){
  if (((movingX >= 810) && (movingY >= 160 && movingY <= 540))){
    gameElt.style.display = "none";
    theendElt.style.display = "block";
    timewinElt.textContent = "Il t'a quand même fallu " + (12 - compteur) + " secondes pour faire ça.";
    clearInterval(intervalId);
  }
}

function gameOverf(){
  if ((((movingX > 200 && movingX < 400) && (movingY > 50 && movingY < 250))) || ((movingX > (xYellow - 100) && movingX < (xYellow + 100)) && (movingY > (yYellow - 100) && (movingY < (yYellow + 100)))) || ((movingX > (xOrange - 100) && movingX < (xOrange + 100)) && (movingY > (yOrange - 100) && (movingY < (yOrange + 100)))) || ((movingX > (xPurple - 100) && movingX < (xPurple + 100)) && (movingY > (yPurple - 100) && (movingY < (yPurple + 100))))){
    gameElt.style.display = "none";
    gameOver.style.display = "block";
  }
}

function diminuerCompteur( ){
  compteur = Number(compteurElt.textContent);
  if (compteur > 0){
  compteurElt.textContent = compteur - 1;
  }else{
    gameElt.style.display = "none";
  gameOver.style.display = "block";
  clearInterval(intervalId);
  }
}


setInterval(movingOrange, 500);

function movingOrange( ){
  if (orangeDirection == 'down') {
    orangesquareElt.style.top = (yOrange += 50) + "px";
    gameOverf();
    if (yOrange == 700) {
      orangeDirection = 'up';
    }
  }else if (orangeDirection == 'up') {
    orangesquareElt.style.top = (yOrange -= 50) + "px";
    gameOverf();
    if (yOrange == 0) {
      orangeDirection = 'down';
    }
  }
}

setInterval(movingYellow, 500);

function movingYellow( ){
  if (yYellow < 700) {
    yellowsquareElt.style.top = (yYellow += 50) + "px";
    gameOverf();
  } else if (yYellow = 700) {
    yellowsquareElt.style.top = (yYellow = 0) + "px";
    gameOverf();
  }
}

setInterval(movingPurple, 110);

getRandomInt(4, "assign");

function movingPurple() {

  if (countPurple == 8) {
    countPurple = 0;
    getRandomInt(4, "assign");
  }

  if (purpleDirection == 'down') {

    if (yPurple >= 700) {
      countPurple = 0;
      purpleDirection = 'up';
      movingPurple();
      return;
    }

    purplesquareElt.style.top = (yPurple += 50) + "px";
  }
  else if (purpleDirection == 'up') {

    if (yPurple <= 0) {
      countPurple = 0;
      purpleDirection = 'down';
      movingPurple();
      return;
    }

    purplesquareElt.style.top = (yPurple -= 50) + "px";
  }
  else if (purpleDirection == 'right') {

    if (xPurple >= 900) {
      countPurple = 0;
      purpleDirection = 'left';
      movingPurple();
      return;
    }

    purplesquareElt.style.left = (xPurple += 50) + "px";
  }
  else if (purpleDirection == 'left') {

    if (xPurple <= 0) {
      countPurple = 0;
      purpleDirection = 'right';
      movingPurple();
      return;
    }

    purplesquareElt.style.left = (xPurple -= 50) + "px";
  }

  countPurple++;
}

function getRandomInt(max, comportement) {
  if (comportement == 'draw') {
    return Math.floor(Math.random() * Math.floor(max));
  }else if (comportement == 'assign') {
    let newDirection = getRandomInt(max, 'draw');
    if (newDirection == 0) {
      purpleDirection = "down";
    }else if (newDirection == 1) {
      purpleDirection = "up";
    }else if (newDirection == 2) {
      purpleDirection = "right";
    }else if (newDirection == 3) {
      purpleDirection = "left";
    }
  }
}
