// Module
// Module IIFE (Immediately Invoked Function Expression)
(function () {
  'use strict';

  const conteneur = document.getElementById('horloge');
  const horloge = new Horloge(conteneur);
  horloge.start();
}());