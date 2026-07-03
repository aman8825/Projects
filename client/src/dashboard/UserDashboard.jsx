import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Overview from "../components/userDashboard/Overview";
import Orders from "../components/userDashboard/Orders";
import Wishlist from "../components/userDashboard/Wishlist";
import Settings from "../components/userDashboard/Settings";
import Sidebar from "../components/userDashboard/Sidebar";
const UserDashboard = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Overview");
const [open, setOpen] = useState(false);
 const {
    user,
    setUser,
    setIsLogin
  } = useAuth();




  return (
    <>

      <div className="flex max-xl:h-full min-h-[90vh]">
        <div className={`${open?"w-1/6" :"w-1/16"}  h-full`}>
          <Sidebar active={active} open={open} setActive={setActive} setOpen={setOpen} />
        </div>
        <div className={`${open?"w-5/6" :"w-15/16"} h-full`}>
          {active === "Overview" && <Overview />}
          {active === "Orders" && <Orders />}
          {active === "WishList" && <Wishlist />}
          {active === "Settings" && <Settings />}
        </div>
      </div>
    
    
      
    </>
  );
};

export default UserDashboard;