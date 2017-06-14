const nbs1 = [1, 2, 3];
const nbs2 = nbs1.slice();
console.log(nbs1);
console.log(nbs2);
console.log(nbs1 === nbs2); // false

const c1 = {prenom: 'Romain'};
const c2 = Object.assign({}, c1);
console.log(c1);
console.log(c2);
console.log(c1 === c2); // false

// Attention aux objets imbriqués
const o1 = {adresse: {cp: '69001', ville: 'Lyon'}};
const o2 = Object.assign({}, o1);
console.log(o1);
console.log(o2);
console.log(o1 === o2); // false
console.log(o1.adresse === o2.adresse); // true
// Pour des méthodes un peu plus haut niveau
// du genre cloneDeep, utiliser la bibliothèque
// lodash (remplacant de underscore.js)

