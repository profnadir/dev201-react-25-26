import axios from 'axios'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  /* const [users, setUsers] = useState({});
  const [id, setId] = useState(1); */
  // composant de type fonction :
  // axios : sync
  /* useEffect(function(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {setUsers(res.data);console.log('test');})
  },[]); */
  // axios : async
  /*  useEffect(function(){
     const getData = async function(){
       const res =await axios.get("https://jsonplaceholder.typicode.com/users");
       setUsers(res.data);
     }
     getData();
   },[]); */

  // fetch : syn
 /*  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { console.log(response); return response.json() })
    .then((users)=>{console.log(users); setUsers(users)})
  } , []) */

   // fetch : asyn
 /*  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const users = await response.json();
      setUsers(users);
    }

    getData();
  } , [id]) */

  
  // composant de type class :
  // axios : sync + async
  // fetch : sync + async

  return (
    <>
      {/* <h1>Users : {users.length}</h1>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <p>{users.name}</p> */}
      {/* <ul>
        {users.map(u => <li key={u.id}>{u.name} - {u.email}</li>)}
      </ul> */}

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        

      
      
      
    </>
  )
}

export default App
