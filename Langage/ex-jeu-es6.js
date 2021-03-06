'use strict';

const readline = require('readline');

const Random = {
  /**
   * On renvoie un nombre aléatoire entre 0 (inclus) et 1 (exclus)
   */
  get() {
    return Math.random();
  },

  /**
   * On renvoie un nombre aléatoire entre une valeur min (incluse)
   * et une valeur max (exclue)
   */
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  /**
   * On renvoie un entier aléatoire entre une valeur min (incluse)
   * et une valeur max (exclue).
   * Attention : si on utilisait Math.round(), on aurait une distribution
   * non uniforme !
   */
  getInt(min, max) {
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
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
};

class Jeu {
  constructor({min = 0, max = 100} = {}) {
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._entierAlea = Random.getIntInclusive(min, max);
    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')} !!!`);
    }

    this._rl.question('Saisir un nombre : ', (saisie) => {

      const entierSaisi = Number.parseInt(saisie);

      if (Number.isNaN(entierSaisi)) {
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
  }
}

const jeu = new Jeu();
jeu.jouer();
