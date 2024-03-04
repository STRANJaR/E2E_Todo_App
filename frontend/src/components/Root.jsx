import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Root() {
    const [todos, setTodos] = useState('')
    const AuthValue = useContext(AuthContext)

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/v1/todo/all-todos/${AuthValue._id}`)
    }, [])


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

    <h1>Fetch User Todos </h1>
    )
}

export default Root