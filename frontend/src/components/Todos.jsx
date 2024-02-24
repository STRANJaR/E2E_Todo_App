import axios from 'axios'
import Cookies from 'js-cookie';

function Todos() {

    const logOutUser = () =>{

    
 axios.post("http://localhost:8000/api/v1/user/logout")
 .then((response)=>{
    console.log(response);
    if(response.status === 200){
        Cookies.remove(response.data.data.accessToken)
    }
 })
 .catch((err)=>{
    console.log(err);
 })

 
    }

    
  return (
    <button 
    className='bg-blueShade px-6 py-3 text-whiteText'
    onClick={logOutUser}>
        Logout
    </button>
  )
}

export default Todos