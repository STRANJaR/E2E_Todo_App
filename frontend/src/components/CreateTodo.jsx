import axios from "axios"
import { useContext, useState } from "react"
import toast from 'react-hot-toast'
import { Toaster } from "react-hot-toast"
import { AuthContext } from "../context/AuthContext"

function CreateTodo() {
  const [title, setTitle] = useState("")
  const AuthStatus = useContext(AuthContext)

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
      toast.success(data.message)
      console.log(data.message);

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div><Toaster/></div>
    {AuthStatus.isAuthenticated === true ? 
  //   <form onSubmit={handleTodo}>
  //   <input 
  //   type="text"
  //   value={title}
  //   onChange={((e)=>setTitle(e.target.value))}
  //   placeholder="Enter todo"
  //   />
  //   <button type="submit">Add</button>
  // </form>

  <section className="h-screen w-full bg-dimmedText">
        <div className="bg-blueShade h-screen text-center">
          <div className="relative top-8">

            <form onSubmit={handleTodo}>
                <input 
                placeholder="Type to add a new todo..."
                className="p-5 w-2/4 outline-none border "
                type="text" 
                value={title}
                onChange={((e)=> setTitle(e.target.value))}
                />
                <button
                type="submit"
                className="outline-none bg-primaryColor text-whiteText px-5 py-5"
                > Add
                </button>
            </form>
            </div>

        </div>
    </section>
    : 
    <div className="bg-shadeGray h-screen text-whiteText">
      <div className="relative text-center top-40 font-semibold text-3xl ">

      <h1>Please login to Add Todo</h1>
      </div>
    </div>  }
    
    </>
  )
}

export default CreateTodo