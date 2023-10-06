let counterValueEl = document.getElementById("counterValue");
let clearBtnEl = document.getElementById("clearBtn");

let counter = 0;

let counterContainer = function () {
  counter = counter + 1;
  counterValueEl.textContent = counter;
};

let counterId = setInterval(counterContainer, 1000);

clearBtnEl.onclick = function () {
  clearInterval(counterId);
};
