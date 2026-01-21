import { useState } from 'react'
import './App.css'

function App() {

  const stagiaires = [
    { id: 1, nom: "john", prenom: "doe", note: 15 },
    { id: 2, nom: "jane", prenom: "doe", note: 19 },
    { id: 3, nom: "james", prenom: "doe", note: 17 },
  ]

  const [stagiaireList, setStagiaireList] = useState(stagiaires)

  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = function(event){

    event.preventDefault();

    const newStagiaire = {
      id:stagiaireList.length+1,
      nom,
      prenom,
      note
    }

    setStagiaireList([...stagiaireList,newStagiaire])

    setNom("");
    setPrenom("");
    setNote("");
    
  }

  const handleDelete = function(id) {
    setStagiaireList([...stagiaireList.filter(s => s.id != id)])
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Nom</label>
          <input type="text" value={nom}
            onChange={e => setNom(e.target.value)}/>
         {/*  {nom.length < 4 ? "nom must have 4 chars" : ""} */}
        </div>
        <div>
          <label>Prenom</label>
          <input type="text" value={prenom}
          onChange={e => setPrenom(e.target.value)}/>
        </div>
        <div>
          <label>Note</label>
          <input type="text" value={note}
          onChange={e => setNote(e.target.value)}/>
        </div>
        <button>Ajouter</button>
      </form>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOM</th>
            <th>Prénom</th>
            <th>Note</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            stagiaireList.map(s =>
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.nom}</td>
                <td>{s.prenom}</td>
                <td>{s.note}</td>
                <td>
                  <button style={{ backgroundColor: "orange" }}>update</button>
                  <button 
                    style={{ background: "red" }}
                    onClick={() => handleDelete(s.id)}  >delete</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default App
