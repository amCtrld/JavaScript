document.addEventListener('DOMContentLoaded', function()
{
    const header = document.createElement("h1");
header.innerHTML = "Counter App";
header.classList.add('w3-center');
document.body.appendChild(header);


const countHolder = document.createElement("p");
countHolder.id = "countContainer";
countHolder.innerHTML = "Count: ";
countHolder.classList.add('w3-center');
document.body.appendChild(countHolder);

const count = document.createElement("span");
count.id = "count";
count.innerHTML = 0;
countHolder.appendChild(count);



const add = document.createElement("button");
add.classList.add('w3-button', 'w3-green');
add.type = "button";
add.onclick = increase;
add.id = "increase";

const iconElementOne = document.createElement('i');
iconElement.classList.add('material-icons');
iconElement.textContent = 'add';
add.appendChild(iconElement);

const minus = document.createElement("button");
minus.classList.add('w3-button', 'w3-red');
minus.type = "button";
minus.onclick = decrease;
minus.id = "decrease";

const iconElementTwo = document.createElement('i');
iconElement.classList.add('material-icons');
iconElement.textContent = 'remove';
minus.appendChild(iconElement);

const resetCount = document.createElement("button");
resetCount.classList.add('w3-button', 'w3-yellow');
resetCount.type = "button";
resetCount.onclick = reset;
resetCount.id = "reset";

const iconElementThree = document.createElement('i');
iconElement.classList.add('material-icons');
iconElement.textContent = 'refresh';
resetCount.appendChild(iconElement);

const housingContainer = document.createElement("div");
housingContainer.classList.add('w3-container', 'w3-center');
housingContainer.appendChild(countHolder);
housingContainer.appendChild(add);
housingContainer.appendChild(resetCount);
housingContainer.appendChild(minus);

document.body.appendChild(housingContainer)


var increaseD = document.getElementById("count");
var decreaseD = document.getElementById("count");
var resetButton = document.getElementById("reset");


increaseD.addEventListener("click", increase);
decreaseD.addEventListener("click", decrease);
resetButton.addEventListener("click", reset);



function increase() {
    let i = parseInt(increaseD.innerHTML);
    i++;

    increaseD.innerHTML = i;
    console.log(i);
}

function decrease() {
    let i = parseInt(decreaseD.innerHTML);
    i--;

    decreaseD.innerHTML = i;
    console.log(i);
}

function reset() {
    increaseD.innerHTML = 0; // Set the count to 0
}
});