import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Todos() {
   const [data, setData] = useState([])

   useEffect(()=>{

   axios.get('http://localhost:8000/api/v1/todo/all-todos/65c68206ab10ba575c0b1e1c')
   setData(response)
})

  return (
    <div>Todos</div>
  )
}

export default Todos