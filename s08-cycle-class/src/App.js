import logo from './logo.svg';
import './App.css';
import Compteur from './components/Compteur';
import { useEffect, useState } from 'react';

function App() {

  /* useEffect(function(){

  },b) */ // b : vide / [] / [show]

  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Afficher</button>
      <button onClick={() => setShow(false)}>Masquer</button>
      {show && <Compteur/>}
    </div>
  );
}

export default App;
