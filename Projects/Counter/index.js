var increaseD = document.getElementById("count");
var decreaseD = document.getElementById("count");
var resetButton = document.getElementById("reset");


increaseD.addEventListener("click", increase);
decreaseD.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);



function increase() {
    let i = 0;
    i++;

    increaseD.innerHTML = i;
    console.log(i);
}

function decrease() {
    let i = 0;
    i--;

    decreaseD.innerHTML = i;
    console.log(i);
}

function reset() {
    increaseD.innerHTML = 0; // Set the count to 0
}