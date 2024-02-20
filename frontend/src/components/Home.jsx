import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";

function Home() {
//   return (
//     <div className="h-32 w-full ">
//         <div className=" bg-slate-700 mx-80 rounded-full ">
//             <ul className="flex justify-center ">
//                 <Link 
//                 to="/"
//                 className="px-5 py-2 m-3 bg-violet-500  rounded-full  cursor-pointer">
//                     Home</Link>

//                 <Link
//                 to="api/v1/user/register"
//                 className="px-5 py-2 m-3 bg-violet-500   rounded-full cursor-pointer">
//                     SignUp</Link>

//                 <Link
//                 to="api/v1/user/login"
//                 className="px-5 py-2 m-3 bg-violet-500  rounded-full cursor-pointer">
//                     LogIn</Link>
//             </ul>
//         </div>
//     </div>
//   )
// }

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
    [e.target.name] : value
   }
   )
  };

  // const handleChange = (e) =>{
  //   const value = e.target.value;
  //   setData(...value)
  // }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userData = {
      fullName: data.fullName,
      email: data.email,
      username: data.username,
      password: data.password
    };
    axios.post("http://localhost:8000/api/v1/user/register", userData)
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
        console.log("ERROR: ", err)
    })
  }
  return (
    <div>
    <h1>SignUp Account</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">
            fullName: 
        <input className="text-black" type="text" name="fullName" id="fullName" defaultValue={data.fullName} onChange={handleChange} />
        </label>
        
        <label htmlFor="email">
            Email: 
        <input className="text-black" type="email" name="email" id="email" defaultValue={data.email} onChange={handleChange} />
        </label>

        <label htmlFor="username">
            Username: 
        <input className="text-black" type="text" name="username" id="username" defaultValue={data.username} onChange={handleChange} />
        </label>

        <label htmlFor="password">
            Password: 
        <input className="text-black" type="password" name="password" id="password" defaultValue={data.password} onChange={handleChange} />
        </label>
    
        <button className="bg-purple-500 p-2 rounded-sm" type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Home