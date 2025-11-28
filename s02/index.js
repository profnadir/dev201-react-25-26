const clients = [
    { nom: "Rami", montant: 4500 },
    { nom: "Karimi", montant: 2300 },
    { nom: "Chaouki", montant: 5500 },
    { nom: "Ramoun", montant: 7700 },
];

const montants = clients.map(function (element) {
    return element.montant;
})

const total = clients.reduce(function (save, element) {
    return save = save + element.montant;
}, 0)

console.log(total);


const stagiaires = [
    { nom: "Rami", note: 15 },
    { nom: "Karimi", note: 19 },
    { nom: "Chaouki", note: 11 },
    { nom: "Ramoun", note: 16 },
];

const moy = stagiaires.reduce(function (total, element) {
    return total = total + element.note;
}, 0) / stagiaires.length

const moy2 = stagiaires.reduce((t, s) => t += s.note, 0) / stagiaires.length

console.log(moy);
console.log(moy2);




const totalMontants = clients.reduce(function (total, client) {
    return total += client.montant
}, 0);

console.log(totalMontants)


const a = 5;
const b = a;

//b=5

const tab1 = [1000, 2000, 3000];
const tab2 = tab1;

// tab2 = ref tab1

// spread operateur

// dev1
console.log(tab1[1]);
// envoyer la somme de 2000dh au client


//dev2
console.log(tab2[1])
tab2[1] = 50;

console.log(tab1[1]);

const [a1, b1, c1] = [10, 20, 30];

console.log(a1, b1, c1);


const personne = {
    nom: "fatihi",
    age: 23,
    note: 15
}

/* const nom = personne.nom;
const age = personne.age;
const note = personne.note; */

const { nom, age, note } = personne;

console.log(nom, age, note);

const notes = [15, 19, 17, 14, 16, 13]

/* const n1 = notes[0];
const n2 = notes[1];
const n3 = notes[2]; */

const [n1, n2, n3, ...rest] = notes;

console.log(n1, n2, n3);
console.log(rest);


const notes2 = [...notes];
console.log(notes2);



const tab10 = [1000, 2000, 3000];
const tab20 = [...tab10];

// tab2 = ref tab1

// spread operateur

// dev1
console.log(tab10[1]);
// envoyer la somme de 2000dh au client


//dev2
console.log(tab20[1])
tab20[1] = 50;

console.log(tab10[1]);


function salutation(nom, presentation) {
    presentation(nom)
}

/* function salutation(nom) { 
    return "hi "+nom;
}

hi nadir */


function hello(nom) {
    console.log(`hello ${nom.toUpperCase()}`)
}

function salut(nom) {
    console.log(`salut ${nom.toUpperCase()}`)
}

salutation("rami", hello)

salutation("fahmi", salut)


function login(email, password) {
    if (email == "nadir@ofppt.ma" && password == "123456") {
        return "ok";
    }
}

function login(email, password, method) {
    method(email, password);
}

// dev1 facebook;
function loginWithFacebook(email, password) {
    //logic
}

// dev2 google
function loginWithGoogle(email, password) {
    //logic
}

// dev3 default DB
function loginDefault(email, password) {
    if (email == "nadir@ofppt.ma" && password == "123456") {
        return "ok";
    }
}

login("email", "password", loginWithFacebook);
login("email", "password", loginWithGoogle);
login("email", "password", loginDefault);


let livres = [
    { id: 10, titre: "POO", auteur: "RAMI", prix: 300 },
    { id: 11, titre: "JS ES6", auteur: "FAMI", prix: 230 },
    { id: 12, titre: "Algorithme", auteur: "KARIMI", prix: 330 },
    { id: 13, titre: "HTMH & CSS", auteur: "RAMI", prix: 340 }
]

const newLivre = { id: 14, titre: "VUEJS", auteur: "RAMI", prix: 440 };

//5. Créer un Array mesLivres copie de livre 

let mesLivres = [...livres.filter(l=>l.id!=11)];

console.log(livres);

console.log(mesLivres);

mesLivres = [...mesLivres, newLivre];

console.log(mesLivres);

