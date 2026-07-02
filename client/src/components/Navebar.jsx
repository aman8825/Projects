import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { AiOutlineLogout } from "react-icons/ai";
const Navebar = () => {
  const {user,setUser,isLogin,setIsLogin}=useAuth()
  const navigate=useNavigate();

  const handleLogout=()=>{
    sessionStorage.removeItem("UserData")
    setIsLogin(false)
    setUser(false);
    navigate("/")
  }
  return (
<>
    <div className='bg-(--color-primary) text-(--text-light) flex justify-between top-0 z-50 sticky px-5  '>

        <div className='h-16 w-40'>
           <Link to="/"><img src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png" alt="" className='h-full ' /></Link>
        </div>
      {isLogin ? (
            <div className="border-s-2 border-white flex justify-center items-center gap-4 px-4">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={user.photo}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <Link
                to={"/user/dashboard"}
                className=" text-(--color-primary-content)  hover:underline "
              >
                {user.fullName}
              </Link>
              <button
                onClick={handleLogout}
                className="text-white"
              >
                <AiOutlineLogout />
              </button>
            </div>
          ) : (

          <>
           <div className=' flex gap-4 h-1/2 font-medium m-4'  >

         
<Link to={"/login "}className="text-(--color-primary-content) p-2 border border-transparent hover:border-white rounded-lg transition-all">Login</Link>
          

 <Link to={"/register" }className='text-(--color-primary) bg-(--color-primary-content) p-2 rounded '>Register</Link>

       
        </div>
          </>
       
          )}
    </div>
</>
  )
}

export default Navebar