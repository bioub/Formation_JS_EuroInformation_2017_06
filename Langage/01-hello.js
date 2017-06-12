/**
 * Génère un nombre aléatoire entre 0 (inclus) et 1 (exclus)
 * @return {number} Le nombre aléatoire
 */
const getRand = function() {
  return Math.random();
};

for (let i=0; i<10; i++) {
  const nbAlea = getRand();
  if (nbAlea > 0.5) {
    console.log(nbAlea);
  }
}
