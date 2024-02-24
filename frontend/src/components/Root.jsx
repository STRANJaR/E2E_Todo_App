import axios from "axios";
import { PiPlusBold } from "react-icons/pi";

function Root() {
    axios.get("http://localhost:8000/api/v1/todo/all-todos/665d4c58103e02ad7b2c4ca9e")
    .then((response) => {
        console.log(response)
    })
    .catch((err)=> {
        console.log(err)
    })
    return (
    <section className="h-screen w-full bg-dimmedText">
        <div className="bg-blueShade h-96 text-center mt-6">
            <form action="">
                <input 
                placeholder="Type to add a new todo..."
                className="p-5 w-2/4 outline-none border "
                type="text" 
                />
                <button
                className="outline-none bg-primaryColor text-whiteText px-5 py-6 shrink-0"
                >
                <PiPlusBold / >
                </button>
            </form>
        </div>
    </section>
    )
}

export default Root