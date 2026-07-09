import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { MdChevronRight } from "react-icons/md";
import { LuReceiptText, LuTicket } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext'
const recentOrders = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    name: "Margherita Pizza",
    from: "Pizza Palace",
    price: "₹249",
    date: "May 29, 2025",
    status: "Delivered",
    class: "mt-2 font-mono text-green-600",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=600",
    name: "Chicken Biryani",
    from: "Biryani House",
    price: "₹320",
    date: "May 28, 2025",
    status: "Preparing",
    class: "mt-2 font-mono text-yellow-600",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    name: "Veg Burger",
    from: "Burger Hub",
    price: "₹189",
    date: "May 27, 2025",
    status: "Delivered",
    class: "mt-2 font-mono text-green-600",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600",
    name: "Hakka Noodles",
    from: "Chinese Wok",
    price: "₹210",
    date: "May 26, 2025",
    status: "Delivered",
    class: "mt-2 font-mono text-green-600",
  },

  {
    id: 5,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600",
    name: "Butter Chicken",
    from: "Royal Kitchen",
    price: "₹399",
    date: "May 25, 2025",
    status: "Cancelled",
    class: "mt-2 font-mono text-red-600",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600",
    name: "Chicken Tikka",
    from: "Tandoori Point",
    price: "₹349",
    date: "May 24, 2025",
    status: "Delivered",
    class: "mt-2 font-mono text-green-600",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    name: "Farmhouse Pizza",
    from: "Pizza Hut",
    price: "₹429",
    date: "May 23, 2025",
    status: "Preparing",
    class: "mt-2 font-mono text-yellow-600",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600",
    name: "Fish Curry",
    from: "Sea Food Hub",
    price: "₹380",
    date: "May 22, 2025",
    status: "Delivered",
    class: "mt-2 font-mono text-green-600",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    name: "Mutton Rogan Josh",
    from: "Mughlai House",
    price: "₹499",
    date: "May 21, 2025",
    status: "Cancelled",
    class: "mt-2 font-mono text-red-600",
  },
];
const Orders = () => {
  const {user}=useAuth()
  
  
  return (
    <>
      <div className=" ">
        <div className="text-2xl font-bold"><h1>Hi, {user?.fullName} 👋</h1></div>
        <div className="flex justify-between mt-4 ">
          <div className=" p-1 w-1/6 rounded-xl shadow-2xl">
            <div className="flex gap-3 p-3 ">
              <div className="text-5xl text-(--color-primary)">
                <AiOutlineShopping />
              </div>
              <div>
                <h1 className="font-semibold">Total Order</h1>
                <h2 className="text-2xl font-medium">24</h2>
              </div>
            </div>
            <div className="flex text-(--color-primary) gap-4">
              <span>View all orders</span>
              <span className="text-xl mt-1">
                <MdChevronRight />
              </span>
            </div>
          </div>
          <div className=" p-1 w-1/6 rounded-xl shadow-2xl">
            <div className="flex gap-3 p-3 ">
              <div className="text-5xl text-green-400">
                <LuReceiptText />
              </div>
              <div>
                <h1 className="font-semibold">Total Spent</h1>
                <h2 className="text-2xl font-medium">₹ 8,540</h2>
              </div>
            </div>
            <div className="flex text-(--color-primary) gap-4">
              <span>View details</span>
              <span className="text-xl mt-1">
                <MdChevronRight />
              </span>
            </div>
          </div>
          <div className=" p-1 w-1/6 rounded-xl shadow-2xl">
            <div className="flex gap-3 p-3 ">
              <div className="text-5xl text-gray-400">
                <LuTicket />
              </div>
              <div>
                <h1 className="font-semibold">Offers Unlocked</h1>
                <h2 className="text-2xl font-medium">6</h2>
              </div>
            </div>
            <div className="flex text-(--color-primary) gap-4">
              <span>View offer</span>
              <span className="text-xl mt-1">
                <MdChevronRight />
              </span>
            </div>
          </div>
          <div className=" p-1 w-1/6 rounded-xl shadow-2xl">
            <div className="flex gap-3 p-3 ">
              <div className="text-5xl text-yellow-400">
                <FaRegStar />
              </div>
              <div>
                <h1 className="font-semibold">Craving Points</h1>
                <h2 className="text-2xl font-medium">340</h2>
              </div>
            </div>
            <div className="flex text-(--color-primary) gap-4">
              <span>View rewards</span>
              <span className="text-xl mt-1">
                <MdChevronRight />
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 mt-5 me-42">
          <div className="flex justify-between">
<div>
  <h1 className="text-2xl font-bold">Recent Order</h1>
</div>
<div className="flex text-(--color-primary) font-semibold">
              <span>View all orders</span>
              <span className="text-xl  mt-1">
                <MdChevronRight />
              </span>
            </div>
          </div>
          
          <div className="p-5 px-9 grid gap-4">
            {recentOrders.map((item)=>{
              return(
 <div className="flex justify-between ">
              <div className="flex gap-12">
                <div className="w-28 h-16 overflow-hidden rounded-2xl">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-normal">{item.name}</h2>
                  <p>{item.from}</p>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                  <p className="text-xl font-semibold">{item.price}</p>
                  <p>{item.date}</p>
                </div>
                <div>
                  <p className={item.class}>{item.status}</p>
                </div>
              </div>
            </div>
              )
            })}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
