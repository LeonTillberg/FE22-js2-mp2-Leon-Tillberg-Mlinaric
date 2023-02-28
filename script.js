import { Tamagotchi1 } from "./modules/tamaGot.js";
import { printTamagotchi } from "./modules/tamaGame.js";

const form = document.querySelector('form');
const nameInput = document.querySelector('#tama-name');
const typeInput = document.querySelector('#tama-type');
const gameContainer = document.querySelector('#tama-container')

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const type = typeInput.value;

  const tama = new Tamagotchi1(name, type);
  printTamagotchi(tama, gameContainer);
});
