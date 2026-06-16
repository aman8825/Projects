import React from 'react'
import { IoSearch } from "react-icons/io5";
const Hero = () => {
  return (
<>
    <div className="h-[90vh] bg-[url('https://cravings.ricr.in/assets/bgImage4-L1QELaMd.jpg')] bg-cover " >
    <div className='text-center text-(--color-primary-content) pt-32'>
        <h1 className='text-5xl font-black'>Your Favorite Food, <br />
Delivered Fast</h1>
<p className='text-xl mt-4'>Order from thousands of restaurants and get it delivered to your doorstep</p>
    </div>
    <div className='flex gap-3 justify-center mt-5'>
        <button className='bg-(--color-primary) text-(--color-primary-content) px-5 py-2 rounded font-medium hover:scale-95'>Sign up</button>
        <button className='text-(--color-primary) bg-(--color-primary-content) px-5 rounded font-medium hover:scale-95'>Order Now</button>

    </div >
    <div className='bg-(--color-primary-content) flex w-1/2  h-12 m-auto p-3 rounded mt-5 border border-orange-200 focus:border-2 focus:border-orange-500 '>
 
    <input type="text" placeholder='🔍 Search resturanta or dishes...' className='outline-none w-full' />
    </div>
   
    </div>
</>
  )
}

export default Hero