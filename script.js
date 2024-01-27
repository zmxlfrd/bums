// script.js

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {
  document.getElementById('username').innerText = username;
}

function startGame() {
  const username = document.getElementById('username').value;

  if (username) {
    // Open the new game page
    window.location.href = `game.html?username=${encodeURIComponent(username)}`;
  } else {
    alert('Please enter your name.');
  }
}

function sendBums(choice) {
  if (choice === 'yes') {
    alert("Good Shot, I am online on Whatsapp!");
  }
}

let noButtonClickable = true;

function runAway() {
  if (noButtonClickable) {
    moveNoButton();
    noButtonClickable = false;
  }
}

function moveNoButton() {
  const button = document.getElementById("no-button");
  const newPositionX = Math.random() * (window.innerWidth - button.offsetWidth);
  const newPositionY = Math.random() * (window.innerHeight - button.offsetHeight);

  button.style.position = "absolute";
  button.style.left = newPositionX + "px";
  button.style.top = newPositionY + "px";
}
