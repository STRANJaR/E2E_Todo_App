import { Link } from "react-router-dom"


function Home() {
  return (

    <>
    <section className="h-screen bg-bodyPrimary">
      <div className="h-96">
        <div className="font-mona text-shadeGray flex flex-col text-center text-8xl p-10 mx-32">
          Be Productive, Be
          more with Protick
        </div>
        <div className="text-center text-dimmedText text-2xl mx-96 py-1">
        We are Protick - All In One Productivity App. Not only a Productive app we are more ! 
        </div>
        <div className="text-center p-8">
          <Link
          to="/register"
          className="bg-primaryColor  text-whiteText hover:shadow-md px-8 py-4 rounded-full transition-all outline-none"
          >Register Now</Link>

          <Link 
          target="_blank" 
          className="px-9 py-5 mx-5 outline-none rounded-full transition-all hover:shadow-md"
          >Learn more !</Link>
        </div>

      </div>
    </section>
    </>
  )
}

export default Home