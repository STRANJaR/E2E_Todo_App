import axios from "axios"
import { useState } from "react"

function CreateTodo() {
  const [title, setTitle] = useState("")

  const handleTodo = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:8000/api/v1/todo/add-todo',
      {
        title
      },
      // {
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   withCredentials: true
      // }
      )
      
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <form onSubmit={handleTodo}>
      <input 
      type="text"
      value={title}
      onChange={((e)=>setTitle(e.target.value))}
      placeholder="Enter todo"
      />
      <button type="submit">Add</button>
    </form>
    </>
  )
}

export default CreateTodo