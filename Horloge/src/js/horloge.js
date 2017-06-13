(function() {
  'use strict';

  const delay = 1000;

  class Horloge {
    constructor(conteneur) {
      this._conteneur = conteneur;
    }

    _update() {
      this._conteneur.textContent = new Date();
    }

    start() {
      this._update();
      setInterval(this._update.bind(this), delay);
    }
  }

  window.Horloge = Horloge;
}());

