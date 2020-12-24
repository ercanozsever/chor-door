// DOOR IMAGES
const doorOne = document.getElementById('door1');
const doorTwo = document.getElementById('door2');
const doorThree = document.getElementById('door3');

// IMAGES BEHIND THE DOORS
const chorImg = "https://content.codecademy.com/projects/chore-door/images/robot.svg" ;
const beachImg = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceImg = "https://content.codecademy.com/projects/chore-door/images/space.svg";

doorOne.onclick = () => {
    doorOne.src = chorImg;
};

doorTwo.onclick = () => {
    doorTwo.src = chorImg;
};

doorThree.onclick = () => {
    doorThree.src = chorImg;
};