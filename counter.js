const counterDisplay = document.getElementById("counter");
const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const resetButton = document.getElementById("reset");

let counterValue = 0;

function updateCounter() {
  counterDisplay.textContent = counterValue;
}

addButton.addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

removeButton.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
    updateCounter();
  }
});

resetButton.addEventListener("click", () => {
  counterValue = 0;
  updateCounter();
});
