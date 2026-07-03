import React, { useState } from 'react'
import { FaStar,FaRegHeart,FaHeart  } from "react-icons/fa";

 const wishlistData = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    price: "₹299",
    rating: 4.8,
  },
  {
  id: 2,
  name: "Chicken Biryani",
  image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
  price: "₹320",
  rating: 4.8,
},
  {
    id: 3,
    name: "Veg Biryani",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    price: "₹250",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Veg Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    price: "₹199",
    rating: 4.5,
  },
  {
    id: 5,
    name: "French Fries",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
    price: "₹149",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Hakka Noodles",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600",
    price: "₹220",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Chocolate Brownie",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
    price: "₹180",
    rating: 4.9,
  },
  {
    id: 8,
    name: "Cold Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    price: "₹120",
    rating: 4.3,
  },
];
const Wishlist = () => {
  const [liked,setLiked] =useState(false)
  return (
<>
    <div className='p-3'>
      <h1 className='text-2xl font-semibold'>  Wishlist </h1>
      <div className='grid  grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-6'>
  {wishlistData.map((data)=>{
        return(
          <div className=' w-52 h-72 m-7 rounded-2xl    overflow-hidden shadow-2xl  bg-gradient-to-b from-(--color-primary) via-(--color-base-300) to-(--color-base-100)'>
        <div className='w-full h-1/2 object-cover relative'>
          <img src={data.image} alt={data.name} className='w-full h-full' />
       <div className='absolute top-3 right-5 text-xl  w-8 h-6 rounded-full bg-white shadow-lg flex items-center justify-center  cursor-pointer'
       onClick={()=> setLiked(!liked)}
       >
        {liked ?<FaHeart className="text-red-500" /> :<FaRegHeart className="text-red-500" /> }
        
       </div>
        </div>
        <div className='p-3 '>
 <h2 className='text-xl ms-1'>{data.name} </h2>
        <div className='flex m-2'>
          <FaStar className='text-sm m-1 ms-2 text-amber-300'/>
 <span >  
  {data.rating} 
 </span>
 <span className='ms-7'>{data.price} </span>
        </div>
       <button className='p-1 px-8 m-1.5 mt-3  ms-5 rounded  border border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-primary-content) active:scale-95'>
        Add to Cart
       </button>
        </div>
       

      </div>
        )

      })}
      </div>
    
      
    </div>
</>
  )
}

export default Wishlist