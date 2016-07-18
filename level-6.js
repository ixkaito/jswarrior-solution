jsWarrior.turn = function(warrior) {
  if (!warrior._health) {
    warrior._health = warrior.getHealth();
  }

  if (warrior.check() == 'enemy') {
    warrior.attack();
  } else if (warrior.getHealth() < warrior._health) {
    if (warrior.getHealth() < 10) {
      warrior.walk('backward');
    } else {
      warrior.walk();
    }
  } else if (warrior.getHealth() < 20) {
    warrior.rest();
  } else {
    warrior.walk();
  }

  warrior._health = warrior.getHealth();
}
