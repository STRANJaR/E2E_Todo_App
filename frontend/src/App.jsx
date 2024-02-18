
import { useEffect } from 'react'
import './App.css'
import axios from "axios"
import Signup from './components/Signup'

function App() {

  useEffect(()=>{
    axios.get("http://localhost:8000/health")
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log("ERROR: ", err);
    })
  })

  return (
    <Signup/>
    
  )
}

export default App
