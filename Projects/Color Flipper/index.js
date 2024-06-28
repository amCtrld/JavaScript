const changeColorButton = document.getElementById("changeColor");
const iconSpan = document.createElement("span");
iconSpan.id = "icon";

let currentColorIndex = 0;

const colors = ["white", "black"];

const paragraph = document.createElement('p');
paragraph.textContent = 'Click on the button to switch theme';
paragraph.classList.add('w3-center', 'w3-large', 'w3-text-blue');

const button = document.createElement('button');
button.classList.add('w3-button', 'w3-blue');
button.type = "button";
button.id = "changeColor";

const icon = document.createElement('i');
icon.classList.add('material-icons');
button.appendChild(icon);

const container = document.createElement('div');
container.classList.add('w3-container', 'w3-center', 'w3-margin-top', 'w3-display-middle');
container.appendChild(paragraph);
container.appendChild(button);

document.body.appendChild(container);

changeColorButton.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const color = colors[currentColorIndex];
  document.body.style.backgroundColor = color;

  if (colors[currentColorIndex] === "white") {
    icon.innerHTML = '<i class="material-icons">brightness_2</i>'; // Moon icon
    document.body.style.color = "black";
  } else {
    icon.innerHTML = '<i class="material-icons">brightness_high</i>'; // Sun icon
    document.body.style.color = "white";
  }
});