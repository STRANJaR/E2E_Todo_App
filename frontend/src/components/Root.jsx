import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";
import { SERVER } from "../main";



function Root() {
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState({ title: "" })
    const AuthValue = useContext(AuthContext)
    const accessToken = Cookies.get("accessToken")


        // Handle delete 
        const handleDelete = async (_id) => {
            try {
                const { data } = await axios.delete(`${SERVER}/api/v1/todo/delete-todo/${_id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": accessToken
                    },
                    withCredentials: false
                })
                
                toast.success(data.message);
                
            } catch (error) {
                console.log(error);
                toast.error('Todo not deleted')
            }
        }


        // TODO: Handle Edit 
        const handleEdit = () => {

        }


    useEffect(()=> {
        axios.get(`${SERVER}/api/v1/todo/all-todos/${AuthValue.userId}`)
        .then((res)=>{
            setTodos(res.data.data);
        })

    }, [handleDelete])




    return (
        
        <div className="bg-shadeGray h-screen">
            <Toaster/>
            <div className=" relative left-28 top-10 rounded-md h-auto flex p-6 max-w-6xl flex-col">

            {todos.length > 0 ? 
          <div>
            {todos.map((item)=> {
                const {title, _id} = item
                return (
                <div key={item._id} className="bg-dimmedText text-whiteText p-4 m-4 rounded-md flex justify-between">
                    <div className="flex justify-center items-center">

                    <input 
                    type="checkbox" 
                    name="" id="" 
                    onClick={''}
                    />
                    <h1 className="ml-4">{title}</h1>

                    </div>

                    <div className="flex justify-center items-center text-2xl">
                    <FaEdit 
                    onClick={()=> handleEdit(_id)}
                    className="cursor-pointer mr-4" 
                    />

                    <MdDelete                     
                    onClick={()=> handleDelete(_id)}
                    className="cursor-pointer text-primaryColor"
                    />

                    </div>

                </div>
            )})}
          </div> : 
          <div className="bg-shadeGray h-screen text-whiteText">
          <div className="relative text-center top-24 font-semibold text-3xl ">
    
          <h1>Todos Not Found </h1>
          </div>
        </div> }

          </div>

        </div>
    )
}

export default Root