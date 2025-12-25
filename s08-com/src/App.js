import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ResultatList from './components/ResultatList';
import ChercheBar from './components/ChercheBar';

function App() {

  const [type,setType]=useState('')


  const list = [
    { nom: "banane", type: "fruit" },
    { nom: "orange", type: "fruit" },
    { nom: "pomme", type: "fruit" },
    { nom: "raisins", type: "fruit" },
    { nom: "kiwi", type: "fruit" },
    { nom: "tomate", type: "legume" },
    { nom: "carotte", type: "legume" },
    { nom: "pomme de terre", type: "legume" },
    { nom: "navet", type: "legume" },
    { nom: "poivron", type: "legume" }
  ]

  const [resultas, setResultas] = useState(list)


  function onChercheSubmitApp(type) {
    setType(type)
    setResultas(list.filter((item) => item.type == type)) 
  }

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [somme, setSomme] = useState();


  return (
    <div className="App">
      <ChercheBar onChercheSubmit={onChercheSubmitApp} />
      <p>Type : {type}</p>
      <hr />
      <ResultatList resultas={resultas} />
      <hr/>
      <form>
        <div>
          <label>Num1</label>
          <input type="text" 
            value={num1} onChange={e => setNum1(e.target.value)}/>
        </div>
        +
         <div>
          <label>Num2</label>
          <input type="text" value={num2}
            onChange={e => setNum2(e.target.value)}/>
            {Number(num2) > 18 ? "ok" : "ko"}
        </div>
        <span>{Number(num1) + Number(num2)}</span>
      </form>
    </div>
  );
}

export default App;
