import { useState } from 'react'
import './App.css'
import Stagiaires from './components/Stagiaires'
import StagiaireForm from './components/StagiaireForm'

function App() {

  const stagiaires = [
    { id: 1, nom: "john", prenom: "doe", note: 15 },
    { id: 2, nom: "jane", prenom: "doe", note: 19 },
    { id: 3, nom: "james", prenom: "doe", note: 17 },
  ]

  const [stagiaireList, setStagiaireList] = useState(stagiaires)

  const [stagiaireToEdit,setStagiaireToEdit] = useState(null);

  

  const handleSubmitApp = (stagiaire) => {
    
    if(stagiaire.id){
      setStagiaireList([...stagiaireList.map(s => s.id==stagiaire.id ? {...stagiaire} : s)])
      setStagiaireToEdit(null)
    }else{
      setStagiaireList([...stagiaireList, {...stagiaire, id:stagiaireList.length+1}])
    }
    
  }


  const handleDeleteApp = id => {
    setStagiaireList([...stagiaireList.filter(s => s.id != id)])
  }

  const handleEditApp = stagaire => {
    setStagiaireToEdit(stagaire)
  }



  return (
    <>
      <StagiaireForm handleSubmitApp={handleSubmitApp} stagiaireToEdit={stagiaireToEdit}/>
      <hr />
      <Stagiaires stagiaireList={stagiaireList} handleDeleteApp={handleDeleteApp} handleEditApp={handleEditApp}/>
    </>
  )
}

export default App
