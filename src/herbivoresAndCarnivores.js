'use strict';

export class Animal {
    constructor(name, health = 100) {
        this.name = name;
        this._health = health;
        if (this._health > 0) {
            Animal.alive.push(this);
        }
    }

    static alive = [];

    set health(value) {
        this._health = value;
        if (this._health <= 0) {
            this.die();
        }
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
        Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
}

export class Herbivore extends Animal {
    constructor(name, health) {
        super(name, health);
        this.hidden = false;
    }

    hide() {
        this.hidden = true;
    }
}

export class Carnivore extends Animal {
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
