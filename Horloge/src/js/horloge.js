'use strict';

//import moment from 'moment';
import {getRandomInt} from './random';

const delay = 1000;

export class Horloge {
  constructor(conteneur) {
    this._conteneur = conteneur;
  }

  _update() {
    this._conteneur.textContent = new Date();//moment().format('HH:mm:ss');
    const r = getRandomInt(0, 256);
    const g = getRandomInt(0, 256);
    const b = getRandomInt(0, 256);
    this._conteneur.style.color = `rgb(${r}, ${g}, ${b})`;
  }

  start() {
    this._update();
    setInterval(this._update.bind(this), delay);
  }
}
