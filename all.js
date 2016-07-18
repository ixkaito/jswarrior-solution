jsWarrior.turn = function(warrior) {
  if (!warrior._health) {
    warrior._health = warrior.getHealth();
  }

  if (warrior.check() == 'wall') {
    warrior.pivot();
  } else if (warrior.check() == 'diamond') {
    warrior.collect();
  } else if (warrior.check('backward') == 'diamond') {
    warrior.collect('backward');
  } else if (!warrior._back_end) {
    if (warrior.check('backward') == 'wall') {
      warrior._back_end = true;
      warrior.walk();
    } else {
      warrior.walk('backward');
    }
  } else if (warrior.getHealth() < warrior._health && warrior.getHealth() < 10) {
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
