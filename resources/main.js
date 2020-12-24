// DOOR IMAGES
const doorOne = document.getElementById('door1');
const doorTwo = document.getElementById('door2');
const doorThree = document.getElementById('door3');
let closedDoor = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let currentlyPlaying = true;

// IMAGES BEHIND THE DOORS
const chorImg = "https://content.codecademy.com/projects/chore-door/images/robot.svg" ;
const beachImg = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceImg = "https://content.codecademy.com/projects/chore-door/images/space.svg";

// PLAY BUTTON
const playButton = document.getElementById('but-net');

// CREATE RANDOM IMAGES

let doorCount = 3;

let randomDoorOne;
let randomDoorTwo;
let randomDoorThree;

function isClicked(door) {
    if (door.src === closedDoor) {
        return false;
    } else {
        return true;
    }     
};

const isBot = (door) => {
    if(door.src === chorImg) {
      return true;
    } else {
      return false;
  }
};

function defineWinner(door) {
    doorCount--;
    if (doorCount === 0) {
    gameOver('win');
    } else if (isBot(door)) {
        gameOver('loose');
    }
};

function randomDoorGenerator() {
    let randomGen = Math.floor(Math.random() * doorCount);
    if(randomGen === 0) {
        randomDoorOne = chorImg;
        randomDoorTwo = beachImg;
        randomDoorThree = spaceImg;
    } else if (randomGen === 1) {
        randomDoorOne = beachImg;
        randomDoorTwo = chorImg;
        randomDoorThree = spaceImg;
    } else {
        randomDoorOne = spaceImg;
        randomDoorTwo = beachImg;
        randomDoorThree = chorImg;
    }
};





doorOne.onclick = () => {
    if(currentlyPlaying && !isClicked(doorOne)){
    doorOne.src = randomDoorOne;
    defineWinner(doorOne);
    }
};

doorTwo.onclick = () => {
    if(currentlyPlaying && !isClicked(doorTwo)){
    doorTwo.src = randomDoorTwo;
    defineWinner(doorTwo);
    }
};

doorThree.onclick = () => {
    if(currentlyPlaying && !isClicked(doorThree)){
    doorThree.src = randomDoorThree;
    defineWinner(doorThree);
    }
};

playButton.onclick = () => {
    if (currentlyPlaying === false) {
    resetGame()
    }
};

function resetGame() {
    doorCount = 3;
    currentlyPlaying = true;
    doorOne.src = closedDoor;
    doorTwo.src = closedDoor;
    doorThree.src = closedDoor;
    playButton.innerHTML = 'Play Game';
    randomDoorGenerator();
};

const gameOver = (status) => {
    if (status === 'win') {
        playButton.innerHTML = 'You Win - Game Over - Play Again?';
    } else if (status === 'loose') {
        playButton.innerHTML = 'You Lost - Game Over - Play Again?';
    }
    currentlyPlaying = false;
};


randomDoorGenerator();