const p1 = 'Jean';
let p2 = p1;

/* Idem pour les passages de params
const modify = (p2) => {
  p2 = 'Eric';
};
modify(p1);
*/

p2 = 'Eric';
console.log(p1); // Jean

const o1 = {p: 'Jean'};
const o2 = o1;
o2.p = 'Eric';
console.log(o1.p); // Eric

