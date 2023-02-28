export function printTamagotchi(tama, container) {
  const divs = document.createElement('div');
  divs.setAttribute('class', 'tamagotchi');
  divs.setAttribute('data-tama', `${tama.getName()}-${tama.getType()}`);
  container.append(divs);

  const name = document.createElement('div');
  name.innerText = tama.getName() + ' the ' + tama.getType();
  name.classList.add('tamagotchi-name');
  divs.append(name);

  const statusHunger = document.createElement('div');
  statusHunger.setAttribute('class', 'tamagotchi-hunger')
  divs.append(statusHunger);

  const statusHappiness = document.createElement('div');
  statusHappiness.setAttribute('class', 'tamagotchi-happiness')
  divs.append(statusHappiness);

  const feedClickHandler = () => {
    if (tama.getHunger() < 10) {
      tama.setHunger(tama.getHunger() + 1);
      if (statusHunger) {
        tama.updateHunger(statusHunger);
      }
    }
  };

  const playClickHandler = () => {
    if (tama.getHappiness() < 10) {
      tama.setHappiness(tama.getHappiness() + 1);
      if (statusHappiness) {
        tama.updateHappiness(statusHappiness);
      }
    }
  };

  const feedBtn = document.createElement('button');
  feedBtn.innerText = 'Feed';
  feedBtn.setAttribute('class', 'tamagotchi-feedBtn')
  feedBtn.addEventListener('click', feedClickHandler);
  divs.append(feedBtn);

  const playBtn = document.createElement('button');
  playBtn.innerText = 'Play';
  playBtn.setAttribute('class', 'tamagotchi-playBtn');
  playBtn.addEventListener('click', playClickHandler);
  divs.append(playBtn);

  tama.startCountdown(statusHunger, statusHappiness);

  divs.addEventListener('tamagotchi-die', () => {
    const buttons = divs.querySelectorAll('button');
    buttons.forEach(button => {
      button.disabled = true;
      divs.style.backgroundColor = 'red';
    });
  });
}