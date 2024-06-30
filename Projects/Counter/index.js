document.addEventListener('DOMContentLoaded', function() {
    // Create header
    const header = document.createElement("h1");
    header.textContent = "Counter App";
    header.classList.add('w3-center');
    document.body.appendChild(header);
  
    // Create count display
    const countHolder = document.createElement("p");
    countHolder.id = "countContainer";
    countHolder.textContent = "Count: ";
    countHolder.classList.add('w3-center');
    document.body.appendChild(countHolder);
  
    const count = document.createElement("span");
    count.id = "count";
    count.textContent = 0;
    countHolder.appendChild(count);
  
    // Create buttons
    function createButton(text, className, icon, onClick) {
      const button = document.createElement("button");
      button.classList.add('w3-button', className);
      button.type = "button";
      button.onclick = onClick;
  
      const iconElement = document.createElement('i');
      iconElement.classList.add('material-icons');
      iconElement.textContent = icon;
      button.appendChild(iconElement);
  
      return button;
    }
  
    const addButton = createButton("Add", 'w3-green', 'add', increase);
    const minusButton = createButton("Minus", 'w3-red', 'remove', decrease);
    const resetButton = createButton("Reset", 'w3-yellow', 'refresh', reset);
  
    // Create housing container
    const housingContainer = document.createElement("div");
    housingContainer.classList.add('w3-container', 'w3-center');
    housingContainer.appendChild(countHolder);
    housingContainer.appendChild(minusButton);
    housingContainer.appendChild(resetButton);
    housingContainer.appendChild(addButton);
    document.body.appendChild(housingContainer);
  
    // Get elements
    const increaseD = document.getElementById("count");
    const decreaseD = document.getElementById("count");
  
    // Event listeners
    increaseD.addEventListener("click", increase);
    decreaseD.addEventListener("click", decrease);
    resetButton.addEventListener("click", reset);
  
    // Functions
    function increase() {
      let i = parseInt(increaseD.textContent);
      i++;
      increaseD.textContent = i;
      console.log(i);
    }
  
    function decrease() {
      let i = parseInt(decreaseD.textContent);
      i--;
      decreaseD.textContent = i;
      console.log(i);
    }
  
    function reset() {
      increaseD.textContent = 0;
    }
  });
  