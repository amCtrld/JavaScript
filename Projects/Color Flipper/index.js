const changeColorButton = document.getElementById('changeColor');

let currentColorIndex = 0;

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black'];

changeColorButton.addEventListener('click', () => {
  const color = colors[currentColorIndex];
  document.body.style.backgroundColor = color;
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});