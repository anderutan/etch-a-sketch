let color = 'black';

document.addEventListener('DOMContentLoaded', function () {
  createBoard(16);

  let btn_popup = document.querySelector('#popup');
  btn_popup.addEventListener('click', function () {
    let size = getSize();
    createBoard(size);
  });
});

function createBoard(size) {
  let board = document.querySelector('.container');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv);
    board.insertAdjacentElement('beforeend', div);
  }
}

function getSize() {
  let userInput = prompt('What will be the size of the board?');
  let message = document.querySelector('#message');
  if (userInput === '') {
    message.textContent = 'Please provide a number';
  } else if (userInput < 2 || userInput > 100) {
    message.textContent = 'Provide a number between 2 and 100';
  } else {
    message.textContent = 'Now you play!';
    return userInput;
  }
}

function colorDiv() {
  if (color == 'random') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = 'black';
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll('div');
  divs.forEach((div) => (div.style.backgroundColor = 'white'));
}
