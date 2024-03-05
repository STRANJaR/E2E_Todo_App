import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



function Root() {
    const [todos, setTodos] = useState([])
    const AuthValue = useContext(AuthContext)

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/v1/todo/all-todos/${AuthValue.userId}`)
        .then((res)=>{
            setTodos(res.data.data);
        })

    }, [])


    // Handle delete 
    const handleDelete = async (_id) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/todo/delete-todo/${_id}`)
            
        } catch (error) {
            console.log(error);
        }
    }
    console.log(todos);

    return (
    // <section className="h-screen w-full bg-dimmedText">
    //     <div className="bg-blueShade h-96 text-center mt-6">
    //         <form action="">
    //             <input 
    //             placeholder="Type to add a new todo..."
    //             className="p-5 w-2/4 outline-none border "
    //             type="text" 
    //             />
    //             <button
    //             className="outline-none bg-primaryColor text-whiteText px-5 py-6 shrink-0"
    //             >
    //             <PiPlusBold / >
    //             </button>
    //         </form>
    //     </div>
    // </section>
        <div className="bg-shadeGray h-screen">
            <div className=" relative left-28 top-10 rounded-md h-auto flex p-6 max-w-6xl flex-col">

            {todos.length > 0 ? 
          <div>
            {todos.map((item)=> {
                const {title, _id} = item
                return (
                <div key={item._id} className="bg-dimmedText text-whiteText p-4 m-4 rounded-md flex justify-between">
                    <div className="flex justify-center items-center">
                    <input type="checkbox" name="" id="" />
                    <h1 className="ml-4">{item.title}</h1>

                    </div>

                    <div className="flex justify-center items-center text-2xl">
                    <FaEdit 
                    className="cursor-pointer mr-4" 
                    onClick={()=> handleDelete(_id)}
                    />
                    <MdDelete className="cursor-pointer text-primaryColor"/>

                    </div>

                </div>
            )})}
          </div> : 
          <div>
            <h1>Todos not found</h1>
          </div> }

          </div>

        </div>
    )
}

export default Root