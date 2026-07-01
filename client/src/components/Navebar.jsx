import React from 'react'
import { Link } from 'react-router-dom'
const Navebar = () => {
  return (
<>
    <div className='bg-(--color-primary) text-(--text-light) flex justify-between top-0 z-50 sticky px-5  '>

        <div className='h-16 w-40'>
           <Link to="/"><img src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png" alt="" className='h-full ' /></Link>
        </div>
        <div className=' flex gap-4 h-1/2 font-medium m-4'  >
         
<Link to="/login" className="text-(--color-primary-content) p-2 border border-transparent hover:border-white rounded-lg transition-all">Login</Link>
          

 <Link to="/register" className='text-(--color-primary) bg-(--color-primary-content) p-2 rounded '>Register</Link>

       
        </div>
        
    </div>
</>
  )
}

export default Navebar