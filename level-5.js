jsWarrior.turn = function(warrior) {
  if (!warrior._health) {
    warrior._health = warrior.getHealth();
  }

  if (warrior.check() == 'diamond') {
    warrior.collect();
  } else if (warrior.getHealth() < 20 && warrior.getHealth() >= warrior._health) {
    warrior.rest();
  } else if (warrior.check() == 'enemy') {
    warrior.attack();
  } else {
    warrior.walk();
  }

  warrior._health = warrior.getHealth();
}
