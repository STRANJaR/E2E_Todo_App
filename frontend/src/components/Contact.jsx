import axios from 'axios'
import { useState } from 'react'

function Contact() {
  const [profile, setProfile] = useState({})


  useState(()=> {
    try {
      
      const data = axios.get('https://api.github.com/users/stranjar')
      .then((res)=> {
        console.log(res.data);
        setProfile(res.data)
      })
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <section className="h-screen bg-blueShade">
    {/* <h1 className="text-whiteText text-3xl text-center">Hii</h1> */}

    <div className='bg-shadeGray h-auto w-full text-whiteText'>
      <div className=' px-40 py-10'>
        <img 
        className='h-32'
        src={profile.avatar_url} 
        alt="profile_img" />

        <h1 className='py-3 font-bold text-2xl text-primaryColor'>{profile.name}</h1>

        <div>
          <p className='text-whiteText opacity-80'>I am extremely proficient in Front-End Development using HTML5, CSS3 (Cascade Style Sheets), 
            Tailwind CSS, Advance JavaScript, React.js & apart from Front-End, I have good knowledge in Back-End using Node.js also Exress.js for making APIs & MongoDB 
            and continuously engage in trying to extend my skills with new technology and tech stacks.</p>
        </div>

        <div>
          <p className='opacity-80 pt-10 pb-6'>For more : </p>
          <button
          className='px-5  rounded-md py-3 bg-primaryColor hover:text-whiteText transition-all'
          
          >
           <a href={profile.html_url} target='_blank'>
            GitHub
            </a></button>

          <button
          className='px-5  rounded-md py-3 bg-blueShade hover:text-whiteText transition-all ml-5'
          >
            <a href="https://www.linkedin.com/in/rohit-shrivastav-dev/" target='_blank'>
            LinkedIn
              </a></button>
        </div>
      </div>
    </div>

</section>
  )
}

export default Contact