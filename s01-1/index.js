/* import Etud, { centre as c, hi } from "./Etudiant.js"; */
import Etudiant, { centre as c, hi } from "./Etudiant.js";
import Stagiaire from "./Stagiaire.js";

/* const e1 = new Etud("john","doe");
const e2 = new Etud("jane","doe"); */

const e1 = new Etudiant("john","doe");
const e2 = new Etudiant("jane","doe");

console.log(e1.info());
console.log(e2.info());

const s1 = new Stagiaire("john","doe",19);
const s2 = new Stagiaire("jane","doe",18);

console.log(s1.info());
console.log(s2.info());

/* console.log(centre); */
console.log(c);

/* hi(); */


