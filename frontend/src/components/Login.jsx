import axios from "axios"
import { useState } from "react"

function Login() {
const [data, setData] = useState({
  username: "",
  password: "" 
});

  return (
    <section className="h-screen w-full bg-bodyPrimary">
      <div className="bg-bodyPrimary h-screen flex justify-around  mx-20">

        {/* Left side image  */}
        <div className="w-full bg-blueShade text-center">
          {/* <img src={""} width="400"  alt="" /> */}
          <h1 className="relative top-64 font-semibold text-whiteText text-3xl">TODO APP</h1>

        </div>

        {/* Right side signup  */}
        <div className="h-auto w-full p-4 ml-12">

          <h1 className="text-3xl py-5 p">Log In</h1>

          <form onSubmit={""}>
            <div className="flex flex-col"> 

              <label 
              className="text-xs py-2"
              htmlFor="useroremail"
              >
                Email or username: 
              </label>

                <input 
                className="p-3 outline-none border w-96"
                placeholder="Enter Your Full Name..."
                type="text" 
                name="useroremail" 
                defaultValue={""} 
                onChange={""} 
                required={true} />

              <label 
              htmlFor="password"
              className="text-xs py-2"
              >
                Password: 
              </label>

                <input 
                className="p-3 outline-none border w-96"
                placeholder="Enter Your Email..."
                type="password" 
                name="password" 
                defaultValue={""} 
                onChange={""} 
                required={true} />


              <button 
              className="bg-primaryColor text-whiteText rounded-sm p-3 w-96 mt-4"
              type="submit"
              >Log In
              </button>

            </div>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Login