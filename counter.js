// Hello hello! Here is a quick explanation of what is going on here:

//Here, we select all the buttons that have the same class .plusbutton and .minusbutton
const plusButtons = document.querySelectorAll(".plusbutton");
const minusButtons = document.querySelectorAll(".minusbutton");

//Now we add an eventlistener, which basically means that we tell the browser that when something happens (in this case when the user clicks the btn), some function will be activated.
// the "forEach" means that this is gonna happen in each of the buttons, and not only the first one.

plusButtons.forEach((plusButton) => {
  plusButton.addEventListener("click", () => {
    const counternumber =
      plusButton.parentElement.querySelector(".counternumber"); //then we go and select the counternumber, which is 0 in our HTML file.
    counternumber.textContent = parseInt(counternumber.textContent) + 1; //so every time the user clicks the btn we will get that value, whatever it is and add 1 and return the sum.
  });
});

//same logic but for the minus
minusButtons.forEach((minusButton) => {
  minusButton.addEventListener("click", () => {
    const counternumber =
      minusButton.parentElement.querySelector(".counternumber");
    const currentValue = parseInt(counternumber.textContent);
    if (currentValue > 0) {
      //line 23 makes sure that the counter doesn't go below 0. We shouldn't be able to order -1 tzatziki, right?
      counternumber.textContent = currentValue - 1;
    }
  });
});
