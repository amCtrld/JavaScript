document.addEventListener('DOMContentLoaded', function() {
    // Create header
    const header = document.createElement("h1");
    header.textContent = "Counter App";
    header.classList.add('w3-center');
    document.body.appendChild(header);
  
    // Counter object
    const counter = {
      count: 0,
      element: document.createElement("span"),
      display: document.createElement("p"),
      updateDisplay: function() {
        this.display.textContent = `Count: ${this.count}`;
      },
      increase: function() {
        this.count++;
        this.updateDisplay();
      },
      decrease: function() {
        this.count--;
        this.updateDisplay();
      },
      reset: function() {
        this.count = 0;
        this.updateDisplay();
      }
    };
  
    // Initialize counter display
    counter.element.id = "count";
    counter.element.textContent = counter.count;
    counter.display.id = "countContainer";
    counter.display.classList.add('w3-center');
    counter.display.appendChild(counter.element);
    document.body.appendChild(counter.display);
  
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
  
    const addButton = createButton("Add", 'w3-green', 'add', counter.increase.bind(counter));
    const minusButton = createButton("Minus", 'w3-red', 'remove', counter.decrease.bind(counter));
    const resetButton = createButton("Reset", 'w3-yellow', 'refresh', counter.reset.bind(counter));
  
    // Create container
    const housingContainer = document.createElement("div");
    housingContainer.classList.add('w3-container', 'w3-center');
    housingContainer.appendChild(counter.display);
    housingContainer.appendChild(minusButton);
    housingContainer.appendChild(resetButton);
    housingContainer.appendChild(addButton);
    document.body.appendChild(housingContainer);
  
    // Initial display update
    counter.updateDisplay();
  });
  