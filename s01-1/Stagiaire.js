import Etudiant from "./Etudiant.js";

export default class Stagiaire extends Etudiant{
    constructor(nom,prenom,note){
        super(nom,prenom)
        this.note = note;
    }

    info(){
        //return "hi nom : " + this.nom + " prenom " + this.prenom;ù
        return `${super.info()} note : ${this.note}`;
    }
}

//export default Stagiaire;