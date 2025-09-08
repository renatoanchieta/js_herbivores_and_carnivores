'use strict';

class Animal {
  constructor(name, health = 100) {
        this.name = name;
        this.health = health;
        Animal.alive.push(this);
    }

    static alive = [];

    set health(value) {
        this._health = value;
        if (this._health <= 0) {
            this.die();
        }
    }

    get health() {
        return this._health;
    }

    die() {
        const index = Animal.alive.indexOf(this);
        if (index > -1) {
            Animal.alive.splice(index, 1);
        }
    }
}

class Herbivore extends Animal {
      constructor(name, health) {
        super(name, health);
        this.hidden = false;
    }

    hide() {
        this.hidden = true;
    }
}

class Carnivore extends Animal {
      constructor(name, health) {
        super(name, health);
    }

    bite(herbivore) {
        if (herbivore instanceof Herbivore && !herbivore.hidden) {
            herbivore.health -= 50;
        }
    }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
