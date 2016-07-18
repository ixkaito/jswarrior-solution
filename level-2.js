jsWarrior.turn = function(warrior) {
  if (warrior.check() == 'enemy') {
    warrior.attack();
  } else {
    warrior.walk();
  }
}
