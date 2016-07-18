jsWarrior.turn = function(warrior) {
  if (!warrior._health) {
    warrior._health = warrior.getHealth();
  }

  if (warrior.check() == 'enemy') {
    warrior.attack();
  } else if (warrior.getHealth() < 20 && warrior.getHealth() >= warrior._health) {
    warrior.rest();
  } else {
    warrior.walk();
  }

  warrior._health = warrior.getHealth();
}
