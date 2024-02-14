
import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{
    fetch('http://localhost:8000/api/v1/user/register')
    .then((response)=>{
      console.log(response)
    }).catch((err)=>{
      console.log(err)
    })
  })

  return (
    <h1 className='text-3xl text-white text-center'>Todo App</h1>
  )
}

export default App
