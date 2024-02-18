import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="h-32 w-full ">
        <div className=" bg-slate-700 mx-80 rounded-full ">
            <ul className="flex justify-center ">
                <Link 
                to="/"
                className="px-5 py-2 m-3 bg-violet-500  rounded-full  cursor-pointer">
                    Home</Link>

                <Link
                to="api/v1/user/register"
                className="px-5 py-2 m-3 bg-violet-500   rounded-full cursor-pointer">
                    SignUp</Link>

                <Link
                to="api/v1/user/login"
                className="px-5 py-2 m-3 bg-violet-500  rounded-full cursor-pointer">
                    LogIn</Link>
            </ul>
        </div>
    </div>
  )
}

export default Home