import { PiPlusBold } from "react-icons/pi";

function Root() {
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