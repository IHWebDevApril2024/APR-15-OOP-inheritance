// INHERITANCE

class Character {
  constructor(lives, mana) {
    this.lives = lives;
    this.mana = mana;
    this.attackPoints; // we don't set a value because we'll do that in inherited classes
  }
  attack(target) {
    // this methods are valid for all the inherited classes
    console.log("ATTACK! FROM: ", this);
    target.lives -= this.attackPoints;
    if (target.lives <= 0) {
      target.lives = 0;
      console.log("This character is dead: ", target);
    }
  }
}

class Player extends Character {
  constructor(lives, mana) {
    super(lives, mana); // super class is using the constructor of the superior class (Character)
    this.spells = ["Fire", "LightBolt"]; // we can add new properties
    this.attackPoints = 100;
  }
}

class Enemy extends Character {
  constructor(lives) {
    super(lives);

    this.area = "Corruption";
    delete this.mana; // Maybe we don't want to have this property initially?
    this.attackPoints = 10;
  }
}

class FireEnemy extends Enemy {
  constructor(lives) {
    super(lives);
    this.area = "Volcano";
    this.spells = ["Fire"];
    this.attackPoints = 50;
  }
}

const player1 = new Player(10, 100);
const enemy1 = new Enemy(1);
const fireEnemy1 = new FireEnemy(20);

player1.attack(enemy1);

console.log(enemy1);
