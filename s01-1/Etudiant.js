class Etudiant {

    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }

   info(){
        //return "hi nom : " + this.nom + " prenom " + this.prenom;ù
        return `hi nom : ${this.nom} prenom : ${this.prenom}`;
   }
}

const centre = "CFPM";
function hi() {
    alert('hi');
}

export { centre, hi };
export default Etudiant;