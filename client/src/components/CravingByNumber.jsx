import React from 'react'

const CravingByNumber = () => {
  return (
<>
    <div>
        <div className='text-center h-1/2'>
            <h1 className='text-3xl font-bold mb-1'>Cravings by the Numbers</h1>
        <p>See why millions trust us for their daily food delivery needs</p>
        </div>
        <div className='flex justify-evenly items-center m-5 mb-20'>
            <div className='w-48 p-2 rounded shadow-2xl text-center m-4' >
                <h1 className='text-3xl font-bold text-(--color-primary)'>2.5M +</h1>
                <h4 className='font-semibold'>Successful Deliveries</h4>
                <p >Orders delivered with care and precision</p>
            </div>
            <div className='w-48 p-2 rounded shadow-2xl text-center m-4' >
                <h1 className='text-3xl font-bold  text-pink-500'>500K+</h1>
                <h4 className='font-semibold'>Happy Customers</h4>
                <p >Satisfied users enjoying delicious food</p>
            </div>
            <div className='w-48 p-2 rounded shadow-2xl text-center m-4' >
                <h1 className='text-3xl font-bold text-(--color-primary)'>5K+</h1>
                <h4 className='font-semibold'>Partner Restaurants</h4>
                <p >Restaurants serving amazing cuisine</p>
            </div>
            <div className='w-48 p-2 rounded shadow-2xl text-center m-4' >
                <h1 className='text-3xl font-bold text-pink-500'>1K+</h1>
                <h4 className='font-semibold'>Active Delivery Partners</h4>
                <p >Riders ensuring quick and safe delivery</p>
            </div>
        </div>
    </div>
</>
  )
}

export default CravingByNumber