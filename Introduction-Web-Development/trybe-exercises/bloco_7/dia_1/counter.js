window.onload = () => {
  setEvents();
}

let count = 0;

let increment = (event) => {
  count += 1;
  const element = event.target;
  if (count !== 0) {
    element.innerText = `Voce me clicou ${count} vezes`.toUpperCase();
  }
}

const setEvents = () => {
  const buttonElement = document.querySelector('#counter-button');
  buttonElement.addEventListener('click', increment);
};