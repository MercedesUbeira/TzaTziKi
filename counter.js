let counter = 0;

const counternumber = document.getElementById('counternumber');
const plusbutton = document.getElementById('plusbutton');
const minusbutton = document.getElementById('minusbutton');

// To increment the value of counter
plusbutton.addEventListener('click', () => {
	counter++;
	counternumber.innerHTML = counter;
});

// To decrement the value of counter
minusbutton.addEventListener('click', () => {
	counter--;
	counternumber.innerHTML = counter;
});
