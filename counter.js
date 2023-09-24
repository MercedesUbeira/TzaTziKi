let counter = 0;

const counternumber = document.querySelector(".counternumber");
const plusbutton = document.querySelector(".plusbutton");
const minusbutton = document.querySelector(".minusbutton");

// To increment the value of counter
plusbutton.addEventListener("click", () => {
  counter++;
  counternumber.innerHTML = counter;
});

// To decrement the value of counter
minusbutton.addEventListener("click", () => {
  counter--;
  counternumber.innerHTML = counter;
});
