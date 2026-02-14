
import { getServerSession } from "next-auth"
import Link from 'next/link';

const Navbar = async () => {

   
      const session = await getServerSession();
      console.log(session);

     
       const Logout =() =>{
        return(
        <button className="text-white border border-white rounded-2xl m-2 py-0.5 px-1  md:py-1 md:px-2  hover:bg-blue-400 ">
         <Link href={"/api/auth/signout"}>SignOut</Link>     
        </button>
        )
      }

      const LoginButton =  () => {
      return(
      <Link href={"api/auth/signin"}>
      <button className="text-white border border-white rounded-2xl py-2 px-4 md:py-1 md:px-2 hover:bg-blue-400">
              Sign In
      </button>
      </Link>
      )
    }
        

  return (
    <div className='w-full h-20 bg-gray-800 text-white flex items-center justify-around flex-wrap  px-4'>
        <div className="w-full md:w-auto flex justify-center ">
          Smart Bookmark App
        </div>
        <div className="flex ">
          {
          session && (<div className="flex items-center">
           <img src={session.user?.image || "/public/backupImage.jpg"} alt="Profile Picture" className="w-8 h-8 rounded-full inline-block" />
           <span className="p-4">{session.user?.name}</span> 
           </div>)
        }
          {
           !session && <LoginButton />
        }
        {
          session &&  <Logout/>
        }
        
        </div>
    </div>
  )
}

export default Navbar