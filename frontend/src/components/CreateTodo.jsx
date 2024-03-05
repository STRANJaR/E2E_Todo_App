import axios from "axios"
import { useContext, useState, useEffect } from "react"
import toast from 'react-hot-toast'
import { Toaster } from "react-hot-toast"
import { AuthContext } from "../context/AuthContext"
import Cookies from "js-cookie"
import { SERVER } from "../main"

function CreateTodo() {
  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([])

  const AuthStatus = useContext(AuthContext)

  const accessToken = Cookies.get("accessToken")


  useEffect(()=> {
    axios.get(`${SERVER}/api/v1/todo/all-todos/${AuthStatus.userId}`)
    .then((res)=>{
        setTodos(res.data.data);
    })

}, [])


  const handleTodo = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(`${SERVER}/api/v1/todo/add-todo`,
      {
        title
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": accessToken
          
        },
        withCredentials: false
      }
      
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
        <div className="bg-shadeGray h-screen text-center">
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

          {todos.length > 0 ? 
          <div>
            {todos.map((item)=> item.title)}
          </div> : 
          <div>
            <h1>Todos not found</h1>
          </div> }
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