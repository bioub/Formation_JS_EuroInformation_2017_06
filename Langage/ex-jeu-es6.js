// 0 - utiliser le mode strict

const readline = require('readline');

const Random = {
  /**
   * On renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)
   */
  // 1 - retirer à chaque retirer ": function"
  get: function () {
    return Math.random();
  },

  /**
   * On renvoie un nombre aléatoire entre une valeur min (incluse)
   * et une valeur max (exclue)
   */
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  /**
   * On renvoie un entier aléatoire entre une valeur min (incluse)
   * et une valeur max (exclue).
   * Attention : si on utilisait Math.round(), on aurait une distribution
   * non uniforme !
   */
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  /**
   * On renvoie un entier aléatoire entre une valeur min (incluse)
   * et une valeur max (incluse).
   * Attention : si on utilisait Math.round(), on aurait une distribution
   * non uniforme !
   */
  getIntInclusive: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
};

// 2 - Utiliser le mot clé class
const Jeu = function(options) {
  // 3 - Pour option utiliser la valeur par défaut
  options = options || {};

  // Ne pas toucher à ces 2 lignes
  const min = options.min || 0;
  const max = options.max || 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  this._entierAlea = Random.getIntInclusive(min, max);
  this._essais = [];
};

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    // 4 - Utiliser une template string
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }

  this._rl.question('Saisir un nombre : ', (saisie) => {

    // 5 - Privilégier Number.parseInt
    // et Number.isNaN
    const entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un entier');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné !!!');
    this._rl.close();
  });
};

const jeu = new Jeu();
jeu.jouer();