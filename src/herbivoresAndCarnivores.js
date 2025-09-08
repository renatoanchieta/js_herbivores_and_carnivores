'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    // Adiciona o animal à lista de vivos
    Animal.alive.push(this);
  }

  // Remove da lista se morrer
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
  constructor(name) {
    super(name);
  }

  bite(target) {
    // Só pode morder herbívoros não escondidos
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
