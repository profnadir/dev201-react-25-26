function handleSubmit(event){
    event.preventDefault();

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    const resultat = document.getElementById("resultat");

    console.log(num1);

    if(isNaN(num1) || isNaN(num2)){
        resultat.textContent = "Not Valid";
    }else{
        resultat.textContent = num1 + num2;
    }

}

/* `Etudiant nom:${this.nom} - prénom :${this.prenom}` */