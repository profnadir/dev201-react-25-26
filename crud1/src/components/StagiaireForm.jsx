import React, { useEffect, useState } from 'react'

export default function StagiaireForm({ handleSubmitApp, stagiaireToEdit }) {
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [note, setNote] = useState('')

    useEffect(() => {
        if(stagiaireToEdit){
            setNom(stagiaireToEdit.nom);
            setPrenom(stagiaireToEdit.prenom);
            setNote(stagiaireToEdit.note);
        }
    } , [stagiaireToEdit])

    const handleSubmit = event => {
        event.preventDefault();

        if(stagiaireToEdit){
            const stagiaireUpdated = {
                id: stagiaireToEdit.id,
                nom,
                prenom,
                note
            }
            handleSubmitApp(stagiaireUpdated)

        }
        else{
            const newStagiaire = {
                nom,
                prenom,
                note
            }

            handleSubmitApp(newStagiaire)
        }



        setNom("");
        setPrenom("");
        setNote("");



    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Nom</label>
                    <input type="text" value={nom}
                        onChange={e => setNom(e.target.value)} />
                    {/*  {nom.length < 4 ? "nom must have 4 chars" : ""} */}
                </div>
                <div>
                    <label>Prenom</label>
                    <input type="text" value={prenom}
                        onChange={e => setPrenom(e.target.value)} />
                </div>
                <div>
                    <label>Note</label>
                    <input type="text" value={note}
                        onChange={e => setNote(e.target.value)} />
                </div>
                <button>{stagiaireToEdit ? 'Modifier' : 'Ajouter'}</button>
            </form>
        </>
    )
}
