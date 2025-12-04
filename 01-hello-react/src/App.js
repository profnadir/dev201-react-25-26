import logo from './logo.svg';
import './App.css';

function App() {

  var langages = ["html","css","js","react"]

  return (
    <div className="App">
      
     <p>hi dev201</p>

     <ul>
      {langages.map((l,i) => <li key={i}>{l}</li> )}
     </ul>

    </div>
  );
}

export default App;
