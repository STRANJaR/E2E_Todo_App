import axios from 'axios'
import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function Todos() {
  const [todo, setTodo] = useState([])
  
console.log()
  const handleDeleteTodo = () => {

    axios.delete('http://localhost:8000/api/v1/todo/delete-todo/65d83e0eba07c911eccab759')
    .then((res)=>{
      console.log(res)
    })
  }

  useState(()=>{

    axios.get('http://localhost:8000/api/v1/todo/all-todos/65d4c58103e02ad7b2c4ca9e')
    .then((res)=>{
      const data = res.data.data;
      setTodo(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[handleDeleteTodo])

  return (
    <div className='flex flex-col items-center'>
      {
        todo && todo.map((value) => (
          <div 
          className="bg-primaryColor w-96 p-4 m-2 h-auto rounded-md  " 
          key={value._id}
          >
            <div className='flex items-center justify-between text-shadeGray'>
              <h1 className='text-whiteText text'>{value._id} </h1>
              <div className='flex items-center'>
                <FaCheck className='text-[23px] mx-2 cursor-pointer'/>

                <MdDelete 
                className='text-3xl cursor-pointer'
                onClick={handleDeleteTodo}
                />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Todos