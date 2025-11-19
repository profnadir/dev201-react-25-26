const stagiaire1 = {
    nom: "john",
    prenom: "doe",
    note:18,
    age:30
}

/* const nom = stagiaire1.nom;
const prenom = stagiaire1.prenom;
const note = stagiaire1.note; */

const {nom, prenom, note} = stagiaire1; //destructing


console.log(nom);
console.log(prenom);
console.log(note);

function sayHi({nom, prenom, note}) {
    console.log(`hi ${nom} - ${prenom} - ${note}`);
}

sayHi(stagiaire1)

function add(a,b) {
    return a+b;
}

function sayHi2(nom) {
    console.log(`hi ${nom}`);
}

add(5,3) // 8
sayHi2("john")

const personnes = [
    { nom: "Rami", age: 33, estMember: true },
    { nom: "Fatihi", age: 24, estMember: false },
    { nom: "Chakib", age: 45, estMember: true },
    { nom: "Mounir", age: 37, estMember: false },
];

console.log(personnes.find(p=>p.age>30).nom );
 


// afficher les noms des membres?

/* const membres = personnes.filter(p => p.estMember == true); 
const noms2 = membres.map(m=>m.nom) */

const noms2 = personnes.filter(p=>p.estMember == true).map(m=>m.nom);

/* console.log(membres); */
console.log(noms2);







for (let i = 0; i < personnes.length; i++) {
    console.log(personnes[i].nom);
}

const noms = personnes.map( p => p.nom )

/* const noms = personnes.map(p=>p.nom); */

console.log(noms);

const ages = personnes.map(p => p.age);

// =>tableau(n) (selection) =>tableau(n)

const a = 5;

if(a==5){
    console.log("msemen");
}else{
    console.log("petit pain");
}

(a==6) ?  console.log("msemen") : console.log("petit pain");




/* function add(a,b) {
    return a+b;
} */

/* add = function(a,b){
    return a+b;
} */

add = (a,b) => a+b;

console.log(add(5,3));


const input = [1, 2, 3, 4, 5]


console.log(input.map(i=>i*i));


/* let a = 5;
let b = a; */
/* b => 5 */


let t1 = [1,2];
let t2 = t1;
/* t2 => [1,2]  */

/* let khdari = 2;

console.log(khdarI); */


let numbers=[3,7,2,5,9,4,10]
console.log(numbers.find(n=>n==6))


function salutation(nom, presentation){ 
    presentation(nom) 
}

function login(email, password, method ) {
    method(email,password);
}


function simple(login,password) {
    
}

function facebook(login,password){
    
}

function hello(nom){
 console.log(`hello ${nom.toUpperCase()}`)
}

function salut(nom){
 console.log(`salut ${nom.toUpperCase()}`)
}

//dev1
salutation("rami",hello)
//dev2
salutation("fahmi",salut)
