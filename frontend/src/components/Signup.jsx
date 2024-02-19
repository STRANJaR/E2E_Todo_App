import { useState } from "react"
import axios from "axios"


function Signup() {

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
    e.preventDefault();
    const userData = {
      fullName: data.fullName,
      email: data.email,
      username: data.username,
      password: data.password
    };
    axios.post("http://localhost:8000/api/v1/user/registerhttp://localhost:8000/api/v1/user/register", userData)
    .then((response)=>{
      console.log(response.status, response.data.token);
    })
  }
  return (
    <div>
      <h1>SignUp Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input type="text" value={data.fullName} onChange={handleChange} />
        </label>
        
        <label htmlFor="email">
          Email: <input type="email" value={data.email} onChange={handleChange} />
        </label>

        <label htmlFor="username">
          <input type="text" value={data.username} onChange={handleChange} />
        </label>

        <label htmlFor="password">
          <input type="password" value={data.password} onChange={handleChange} />
        </label>
      </form>
    </div>
  )
}

export default Signup