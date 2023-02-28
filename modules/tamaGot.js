export class Tamagotchi1 {
    #name;
    #type;
    #hunger;
    #happiness;
    #intervalIdHunger;
    #intervalIdHappiness;

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
        this.#hunger = Math.floor(Math.random() * 7) + 3;
        this.#happiness = Math.floor(Math.random() * 7) + 3;
    }

    getName() {
        return this.#name;
    }

    getType() {
        return this.#type;
    }

    getHunger() {
        return this.#hunger;
    }

    getHappiness() {
        return this.#happiness;
    }

    setHunger(value) {
        this.#hunger = value;
    }

    setHappiness(value) {
        this.#happiness = value;
    }

    updateStatus(statusHunger, statusHappiness) {
        const hungerText = `Hunger: ${this.#hunger}`;
        statusHunger.innerText = hungerText;

        const happinessText = `Happiness: ${this.#happiness}`;
        statusHappiness.innerText = happinessText;
    }

    updateHunger(status) {
        const hungerText = `Hunger: ${this.#hunger}`;
        status.innerText = hungerText;
        if (this.#hunger === 0) {
            this.die();
        }
    }

    updateHappiness(status) {
        const happinessText = `Happiness: ${this.#happiness}`;
        status.innerText = happinessText;
        if (this.#happiness === 0) {
            this.die();
        }
    }

    die() {
        console.log(`Your Tamagotchi ${this.getName()} has died!`);
        clearInterval(this.#intervalIdHappiness);
        clearInterval(this.#intervalIdHunger);
        
        const tamagotchiElement = document.querySelector(`[data-tama="${this.getName()}-${this.getType()}"]`);
        tamagotchiElement.classList.add('dead');
        tamagotchiElement.dispatchEvent(new Event('tamagotchi-die'));
      }
      

    startCountdown(statusHunger, statusHappiness) {
        this.#intervalIdHunger = setInterval(() => {
            if (this.#hunger > 0) {
                this.#hunger--;
                this.updateHunger(statusHunger);
            } 
        }, 1000);
    
        this.#intervalIdHappiness = setInterval(() => {
            if (this.#happiness > 0) {
                this.#happiness--;
                this.updateHappiness(statusHappiness);
             } 
        }, 2000);
    
        this.updateStatus(statusHunger, statusHappiness);
    }
}

