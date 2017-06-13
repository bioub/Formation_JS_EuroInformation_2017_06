const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * On renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)
 */
function getRandom() {
  return Math.random();
}

/**
 * On renvoie un nombre aléatoire entre une valeur min (incluse)
 * et une valeur max (exclue)
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * On renvoie un entier aléatoire entre une valeur min (incluse)
 * et une valeur max (exclue).
 * Attention : si on utilisait Math.round(), on aurait une distribution
 * non uniforme !
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * On renvoie un entier aléatoire entre une valeur min (incluse)
 * et une valeur max (incluse).
 * Attention : si on utilisait Math.round(), on aurait une distribution
 * non uniforme !
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

const jouer = function() {

  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Saisir un nombre : ', (saisie) => {

    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné !!!');
    rl.close();
  });
};

jouer();

