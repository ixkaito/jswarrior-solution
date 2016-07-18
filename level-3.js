jsWarrior.turn = function(warrior) {
  if (warrior.check() == 'enemy') {
    warrior.attack();
  } else if (warrior.getHealth() < 20) {
    warrior.rest();
  } else {
    warrior.walk();
  }
}
