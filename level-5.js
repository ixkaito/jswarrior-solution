jsWarrior.turn = function(warrior) {
  if (!warrior._health) {
    warrior._health = warrior.getHealth();
  }

  if (warrior.check() == 'diamond') {
    warrior.collect();
  } else if (warrior.check() == 'enemy') {
    warrior.attack();
  } else if (warrior.getHealth() < warrior._health) {
    warrior.walk();
  } else if (warrior.getHealth() < 20) {
    warrior.rest();
  } else {
    warrior.walk();
  }

  warrior._health = warrior.getHealth();
}
