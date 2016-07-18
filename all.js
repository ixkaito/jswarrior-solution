jsWarrior.turn = function(warrior) {
  if (!warrior._health) {
    warrior._health = warrior.getHealth();
  }

  warrior._full_health = (warrior.getHealth() >= 20);
  warrior._low_health = (warrior.getHealth() < 10);
  warrior._under_attack = (warrior.getHealth() < warrior._health);

  if (warrior.check() == 'wall') {
    warrior.pivot();
  } else if (warrior._under_attack && warrior._low_health) {
    warrior.walk('backward');
  } else if (!warrior._under_attack && !warrior._full_health) {
    warrior.rest();
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
  } else if (warrior.check() == 'enemy') {
    warrior.attack();
  } else {
    warrior.walk();
  }

  warrior._health = warrior.getHealth();
}
