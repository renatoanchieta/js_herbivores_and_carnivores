'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  _checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // ✅ construtor removido — era inútil

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      target._checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
