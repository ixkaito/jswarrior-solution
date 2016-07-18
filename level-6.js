jsWarrior.turn = function(warrior) {
  if (!warrior._health) {
    warrior._health = warrior.getHealth();
  }

  if (warrior.getHealth() < warrior._health && warrior.getHealth() < 10) {
    warrior.walk('backward');
  } else if (warrior.getHealth() >= warrior._health && warrior.getHealth() < 20) {
    warrior.rest();
  } else if (warrior.check() == 'enemy') {
    warrior.attack();
  } else {
    warrior.walk();
  }

  warrior._health = warrior.getHealth();
}
