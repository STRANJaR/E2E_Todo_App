import axios from "axios"
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
function Login() {
//   let cookieValue;

//   const navigate = useNavigate();

// const [data, setData] = useState({
//   username: "",
//   email: "",
//   password: "" 
// });

// const { isAuthenticated, setIsAuthenticated } = useContext(Context);


// const handleChange = (e) =>{
//   const value = e.target.value;
//   setData({
//     ...data,
//     [e.target.name] : value
//   })
// };

// const handleSubmit = (e) =>{
//   e.preventDefault();
//   const userData = {
//     username: data.username,
//     email: data.email,
//     password: data.password
//   };

//   axios.post("http://localhost:8000/api/v1/user/login", userData)
//   .then((response)=>{

//     // ASSIGNMENT: Taking accessToken from res 
//     const Token = response.data.data.accessToken

//     if(!Token) alert("something went wrong while requiring accessToken from response");

//     cookieValue = Cookies.set("accessToken", Token)

   

//     if(!cookieValue) console.log("Cookie not found")


//     // if(response.status === 200) navigate("/root")

//     if(response.status === 200){
//       toast.success(response.data.message)
//       // setIsAuthenticated(true)
//       Navigate("/create-todo")
//     } 

//     if(!response.status === 200){
//       toast.error('Something went wrong !')
//     }

//   })
// }



// -----------LOG IN CODEBASE--------------// 
 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const AuthState = useContext(AuthContext)
  console.log(AuthState);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:8000/api/v1/user/login',
      {
        email,
        password
      },
      // {
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   withCredentials: true
      // }
      );

      Cookies.set('_id', data.data.user._id)
      toast.success(data.message)
      AuthState.setIsAuthenticated(true)
      AuthState.setUserId(Cookies.get('_id'))

    } catch (error) {
      if(error.response.status === 404) toast.error("User not found");
      console.log(error);
      Cookies.remove('_id')
      AuthState.setIsAuthenticated(false)

    } 
  }

  if(AuthState.isAuthenticated) return  <Navigate to={"/create-todo"}/>
  return (
    <>
    <div><Toaster/></div>
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

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col"> 

              <label 
              className="text-xs py-2"
              htmlFor="email"
              >
                Email: 
              </label>

                <input 
                className="p-3 outline-none border w-96"
                placeholder="Enter Your email..."
                type="email" 
                name="email" 
                defaultValue={email} 
                onChange={((e)=> setEmail(e.target.value))} 
                required={true} />

              <label 
              htmlFor="password"
              className="text-xs py-2"
              >
                Password: 
              </label>

                <input 
                className="p-3 outline-none border w-96"
                placeholder="Enter Your Password..."
                type="password" 
                name="password" 
                defaultValue={password} 
                onChange={((e)=> setPassword(e.target.value))} 
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
    </>

    
  )
}

export default Login