const changeColorButton = document.getElementById("changeColor");
const iconSpan = document.getElementById("icon");

let currentColorIndex = 0;

const colors = ["white", "black"];

changeColorButton.addEventListener("click", () => {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const color = colors[currentColorIndex];
  document.body.style.backgroundColor = color;

  if (colors[currentColorIndex] === "white") {
    iconSpan.innerHTML = '<i class="material-icons">brightness_2</i>'; // Moon icon
    document.body.style.color = "black";
  } else {
    iconSpan.innerHTML = '<i class="material-icons">brightness_high</i>'; // Sun icon
    document.body.style.color = "white";
  }
});
