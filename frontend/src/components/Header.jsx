import { NavLink, Navigate } from "react-router-dom"
import { FcTodoList } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { BiUser } from "react-icons/bi";
import Cookies from "js-cookie";


 
function Header() {
    const AuthState = useContext(AuthContext)
    
    // Handle Logout 
    const handleLogout = () =>{
        Cookies.remove("accessToken")
        Cookies.remove("_id")
        AuthState.setIsAuthenticated(false)
    }

    // if(AuthState.isAuthenticated === false) return <Navigate to="/" />

  return (
    <div className="h-20 w-full bg-primaryColor ">
        <div className="bg-bodySecondary shadow-sm flex justify-around content-center px-16">
            {/* Left side nav  */}
                <div className="flex p-3">

                <div className="text-5xl">
                    <FcTodoList/>
                </div>
                {/* <div className="text-primaryColor">
                    TODO App
                </div> */}
            </div>

            {/* Middle side nav  */}
            <div className="p-4">
                <ul className="flex text-dimmedText p-3">
                    <li>
                    <NavLink
                    to="/"
                    className={({isActive})=> `${isActive? "bg-primaryColor text-whiteText": "bg-bodySecondary"} px-5  mx-3 rounded-full  py-3 hover:bg-primaryColor hover:text-whiteText transition-all`}
                    >Home</NavLink>
                    </li>

                    <li>
                    <NavLink
                    to="/create-todo"
                    className={({isActive})=> `${isActive? "bg-primaryColor text-whiteText": "bg-bodySecondary"} px-5  mx-3 rounded-full  py-3 hover:bg-primaryColor hover:text-whiteText transition-all`}
                    > Create Todo

                    </NavLink>
                    </li>

                    <li>
                    <NavLink
                    to="/root"
                    className={({isActive})=> `${isActive? "bg-primaryColor text-whiteText": "bg-bodySecondary"} px-5  mx-3 rounded-full  py-3 hover:bg-primaryColor hover:text-whiteText transition-all`}
                    >Todos</NavLink>
                    </li>

                    <li>
                    <NavLink
                    to="/contact"
                    className={({isActive})=> `${isActive? "bg-primaryColor text-whiteText": "bg-bodySecondary"} px-5  mx-3 rounded-full  py-3 hover:bg-primaryColor hover:text-whiteText transition-all`}
                    >Dev </NavLink>
                    </li>

                </ul>
            </div>

            {/* Right side nav  */}
            <div>
                {AuthState.isAuthenticated === true ? 
                <div className="p-4">

                <ul className="flex text-shadeGray p-3">
                    <li className="">
                        <BiUser className="text-2xl mr-6 hover:bg-hoverColor rounded-full"/>
                    </li>
                    <li>
                        <NavLink 
                        className="px-5  mx-3  rounded-md text-whiteText shadow-lg py-3 bg-primaryColor"
                        onClick={handleLogout}
                        >

                            Logout
                        </NavLink>
                    </li>
                </ul> 
                </div>
                : <div className="p-4">
                <ul className="flex text-shadeGray p-3">
                    <li>
                    <NavLink
                    to="/login"
                    
                    className="px-5  mx-3 rounded-md  py-3 text-dimmedText hover:text-shadeGray transition-all shadow-md"
                    >Login</NavLink>
                    </li>

                    <li>
                    <NavLink
                    to="/register"
                    className="px-5  mx-3  rounded-md text-whiteText shadow-lg py-3 bg-primaryColor"
                    >Sign Up</NavLink>
                    </li>

                </ul>
            </div>}
            </div>
            


        </div>
    </div>
  )
}

export default Header