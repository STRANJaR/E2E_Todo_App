import { useCallback, useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link, Navigate } from "react-router-dom";
import { SERVER } from "../main";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
// import signUpImage from '../assests/signup.jpeg'

function Signup() {
  const AuthStatus = useContext(AuthContext)
  const [data, setData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) =>{
    const value = e.target.value;
    setData({
      ...data,
    [e.target.name]: value
    });
  };

  const handleSubmit = (e) =>{
    try {
      e.preventDefault();
      const userData = {
        fullName: data.fullName,
        email: data.email,
        username: data.username,
        password: data.password
      };
      axios.post(`${SERVER}/api/v1/user/register`, userData)
      .then((response)=>{
        
  
        if(response.status === 201){
          toast.success(response.data.message)
          AuthStatus.setIsAuthenticated(true)
        } 
      })
    } catch (error) {
      console.log(error.message);
      AuthStatus.setIsAuthenticated(false)
      toast.error('Something went wrong !')
    }
   
  }
  
  setTimeout(() => {
    if(AuthStatus.isAuthenticated) return <Navigate to={"/create-todo"}/>
    
  }, 1000);

  return (
    // <div>
    //   <h1>SignUp Account</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">
    //       <input type="text" value={data.fullName} onChange={handleChange} />
    //     </label>
        
    //     <label htmlFor="email">
    //       Email: <input type="email" value={data.email} onChange={handleChange} />
    //     </label>

    //     <label htmlFor="username">
    //       <input type="text" value={data.username} onChange={handleChange} />
    //     </label>

    //     <label htmlFor="password">
    //       <input type="password" value={data.password} onChange={handleChange} />
    //     </label>
    //   </form>
    // </div>

    <section className="h-screen w-full bg-bodyPrimary">
      <Toaster/>
      <div className="bg-bodyPrimary h-screen flex justify-around  mx-20">

        {/* Left side image  */}
        <div className="w-full bg-blueShade text-center">
          {/* <img src={""} width="400"  alt="" /> */}
          <h1 className="relative top-64 font-semibold text-whiteText text-3xl">TODO APP</h1>

        </div>

        {/* Right side signup  */}
        <div className="h-auto w-full p-4 ml-12">

          <h1 className="text-3xl py-5 p">Register</h1>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col"> 

              <label 
              className="text-xs py-2"
              htmlFor="fullName"
              >
                Full Name: 
              </label>

                <input 
                className="p-3 outline-none border w-96"
                placeholder="Enter Your Full Name..."
                type="text" 
                name="fullName" 
                defaultValue={data.fullName} 
                onChange={handleChange} 
                required={true} />

              <label 
              htmlFor="email"
              className="text-xs py-2"
              >
                Email: 
              </label>

                <input 
                className="p-3 outline-none border w-96"
                placeholder="Enter Your Email..."
                type="email" 
                name="email" 
                defaultValue={data.email} 
                onChange={handleChange} 
                required={true} />

              <label 
              className="text-xs py-2"
              htmlFor="username">
                Username: 
                </label>

                <input 
                className="p-3 outline-none border w-96"
                placeholder="Enter Your Username..."
                type="text" 
                name="username" 
                defaultValue={data.username} 
                onChange={handleChange} 
                required={true}/>
              

              <lable 
              className="text-xs py-2"
              htmlFor="password"
              >
                Password: 
                </lable>

                <input 
                className="p-3 outline-none  border w-96"
                placeholder="Enter Your Password..."
                type="password" 
                name="password" 
                defaultValue={data.password} 
                onChange={handleChange} 
                required={true} />
          
              <button 
              className="bg-primaryColor text-whiteText rounded-sm p-3 w-96 mt-4"
              type="submit"
              >Register
              </button>

              <p className="pt-5">Already registerd?
              <Link
              to="/login"
              className="font-medium hover:underline"
              >
              Sign in to your account
              </Link> 
              </p>
            </div>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Signup