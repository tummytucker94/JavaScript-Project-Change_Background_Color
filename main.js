//Goal: Everytime that the button is clicked, the background changes colors.

const button = document.querySelector('button');

const body = document.querySelector('body');
const coolColors = ['blue', 'green', 'purple'];

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

function changeBackground(){
  const colorIndex = parseInt(Math.random()*coolColors.length);
body.style.backgroundColor = coolColors[colorIndex]
}
