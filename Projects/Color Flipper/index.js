const changeColorButton = document.createElement('button');
changeColorButton.classList.add('w3-button', 'w3-border', 'w3-round-large');
changeColorButton.type = "button";
changeColorButton.id = "changeColorButton";

const iconElement = document.createElement('i');
iconElement.classList.add('material-icons');
iconElement.textContent = 'brightness_2';
changeColorButton.appendChild(iconElement);

const paragraph = document.createElement('p');
paragraph.textContent = 'Click on the button to switch theme';
paragraph.classList.add('w3-center', 'w3-large');

const container = document.createElement('div');
container.classList.add('w3-container', 'w3-center', 'w3-margin-top', 'w3-display-middle');
container.appendChild(paragraph);
container.appendChild(changeColorButton);

document.body.appendChild(container);

let currentColorIndex = 0;

const colors = ["white", "black"];

changeColorButton.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const color = colors[currentColorIndex];
  document.body.style.backgroundColor = color;

  if (colors[currentColorIndex] === "white") {
    iconElement.innerHTML = '<i class="material-icons">brightness_2</i>'; // Moon icon
    document.body.style.color = "black";
  } else {
    iconElement.innerHTML = '<i class="material-icons">brightness_high</i>'; // Sun icon
    document.body.style.color = "white";
  }
});