const prenoms = ['Romain', 'Jean', 'Eric'];

console.log('-- forEach -- ');
prenoms.forEach(function(prenom, i, array) {
  console.log(prenom);
});

console.log('-- filter -- ');
const prenoms4Lettres = prenoms.filter(function(prenom) {
  return prenom.length === 4;
});
console.log(prenoms4Lettres.join(', '));

console.log('-- find (ES6) --');
const prenom5Lettres = prenoms.find(function(prenom) {
  return prenom.length === 6;
});
console.log(prenom5Lettres);


console.log('-- findIndex (ES6) --');
const indexPrenom5Lettres = prenoms.findIndex(function(prenom) {
  return prenom.length === 6;
});
console.log(indexPrenom5Lettres);

const contacts = [{
  prenom: 'Romain',
  nom: 'Bohdanowicz',
}, {
  prenom: 'Eric',
  nom: 'Martin',
}];
console.log('-- map --');
const prenomsFromContact = contacts.map(function(contact) {
  return contact.prenom;
});
console.log(prenomsFromContact.join(', '));

console.log('-- sort --');
const contactsTries = contacts.sort(function(c1, c2) {
  if (c1.prenom < c2.prenom) {
    return -1;
  }
  if (c1.prenom > c2.prenom) {
    return 1;
  }
  return 0;
});
console.log(contactsTries);

console.log('-- reduce --');
const nbs = [3, 4, 2];
const sum = nbs.reduce(function(acc, nb) {
  return acc + nb;
}, 0);
console.log(sum);

// acc: 0, nb: 3, return 3
// acc: 3, nb: 4, return 7
// acc: 7, nb: 2, return 9
