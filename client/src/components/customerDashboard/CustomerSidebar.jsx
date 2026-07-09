import React from "react";
import { MdOutlineDashboard, MdOutlineFastfood } from "react-icons/md";
import { PiListHeartLight } from "react-icons/pi";
import { BsPersonGear } from "react-icons/bs";
import { IoReorderThreeSharp,IoClose } from "react-icons/io5";
import { useState } from "react";
const MenuItems = [
  { name: "Overview", icon: <MdOutlineDashboard /> },
  { name: "Orders", icon: <MdOutlineFastfood /> },
  { name: "WishList", icon: <PiListHeartLight /> },
  { name: "Settings", icon: <BsPersonGear /> },
];
let display = "hidden";


const CustomerSidebar = ({ active, setActive,open, setOpen }) => {
  
  return (
    <>
    <div className={`${open ?" bg-gradient-to-b from-(--color-primary) via-(--color-base-300) to-(--color-base-100)" :"bg-transparent" }`}>
 <div
       className={`p-3 text-4xl font-medium cursor-pointer  `}
       onClick={() => setOpen(!open)}
       >
          {open ? <IoClose  /> : <IoReorderThreeSharp  />}
      </div>

      <div
        className={`${open ? "block" : "hidden"} `}
      >
        {/* <div className="p-2 border-b-2 text-center text-xl font-medium  bg-(--color-primary-content) text-(--color-primary) rounded">User Dashboard</div> */}

        <div className="space-y-1 p-4  ">
          {MenuItems.map((item, idx) => (
            <button
              key={idx}
              className={`flex gap-3 font-semibold items-center border border-transparent hover:border-(--color-primary) w-full p-3 rounded-lg ${active === item.name && "bg-(--color-primary) text-(--color-primary-content)"}`}
              onClick={() => setActive(item.name)}
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
     
    </>
  );
};

export default CustomerSidebar;
