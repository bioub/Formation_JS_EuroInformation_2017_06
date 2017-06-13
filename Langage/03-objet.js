// 1 - On manipule des objets prédéfinis
console.log(typeof Math); // object
console.log(typeof console); // object
console.log(typeof process); // object (ou undefined dans le browser)
console.log(typeof document); // undefined (ou object dans le browser)

// 2 - un objet est un système clé/valeur (dans d'autres langages :
// dictionnaire, hashmap, hashtable, struct, tableau associatifs...)

// on peut ajouter des membres
console.log(Math.sum); // undefined
Math.sum = function(a, b) {
  return a + b;
};
console.log(Math.sum); // function
console.log(Math.sum('1', '2')); // '12'

// attention à ne pas se tromper de clé (ici innerHtml au lieu
// de innerHTML) :
/*
var div = document.getElementById('box');
div.innerHtml = 'Un contenu';
*/

// on peut modifier des membres
Math.sum = function(a, b) {
  return Number(a) + Number(b);
};
console.log(Math.sum); // function
console.log(Math.sum('1', '2')); // 3

// on peut supprimer des clés
delete Math.sum;
console.log(Math.sum); // undefined

// Attention modifier des objets existants dans le langage ou
// l'environnement avec des membres non-standard (ex: Math.sum)
// est une mauvaise pratique

// 3 - si besoin ponctuel d'objet, on utilise la syntaxe
// object literal (pas très éloigné de JSON)
let contact = {
  prenom: 'Romain',
  hello: function() {
    return 'Je m\'appelle ' + this.prenom;
  }
};

console.log(contact.prenom); // Romain
console.log(contact.hello()); // Je m'appelle Romain

// autres syntaxes literales (à privilégier, + perfs)
// new String() -> '', "" ou ``
// new Array() -> []
// new RegExp() -> //
// new Object() -> {}

// 4 - si besoin récurrent, on utilise une fonction constructeur

const Contact = function(prenom) {
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Je m\'appelle ' + this.prenom;
};


// En ES6
/*
class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }

  hello() {
    return `Je m'appelle ${this.prenom}`;
  }
}
*/


const romain = new Contact('Romain');
console.log(typeof Contact); // function
console.log(typeof romain); // object
console.log(romain.prenom); // Romain
console.log(romain instanceof Contact); // true
console.log(romain.hello()); // Je m'appelle Romain

const eric = new Contact('Eric');
console.log(eric.prenom); // Eric
console.log(eric.hello()); // Je m'appelle Eric
console.log(romain.hello === eric.hello); // true

