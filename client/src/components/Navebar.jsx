// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import toast from "react-hot-toast";
// import { AiOutlineLogout } from "react-icons/ai";

// const Navebar = () => {
//  const { user, isLogin, role, setUser, setIsLogin, setRole } = useAuth();
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     //console.log("Handle Navigate", role);

//     if (role === "restaurant") {
//       navigate("/restaurant-dashboard");
//     } else if (role === "rider") {
//       navigate("/rider-dashboard");
//     } else if (role === "admin") {
//       navigate("/admin-dashboard");
//     } else {
//       navigate("/customer-dashboard");
//     }
//   };
//    const handleLogout = async () => {
//     try {
//       const res = await api.get("/auth/logout");
//       toast.success(res.data.message);

//       sessionStorage.removeItem("cravingUser");
//       setUser(null);
//       setIsLogin(false);
//       setRole(null);
//       navigate("/");
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Unknown error occurred during registration. Please try again.",
//       );
//     }
//   };

//   return (
//     <>
//       <div className="bg-(--color-primary) text-(--text-light) flex justify-between top-0 z-50 sticky px-5  ">
//         <div className="h-16 w-40">
//           <Link to="/">
//             <img
//               src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png"
//               alt=""
//               className="h-full "
//             />
//           </Link>
//         </div>
//         {isLogin ? (
//           <div className="border-s-2 border-white flex justify-center items-center gap-4 px-4">
//             <div className="w-8 h-8 rounded-full overflow-hidden">
//               <img
//                  src={user?.photo.url}
//                 alt={user?.fullName}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <Link
//               to={"/user/dashboard"}
//               className=" text-(--color-primary-content)  hover:underline "
//             >
//               {user.fullName}
//             </Link>
//             <span className="text-xs text-(--color-primary-content)/80 uppercase">
//                   {role}
//                 </span>
//             <button
//               onClick={handleLogout}
//               className="text-2xl text-red-600 rounded-2xl bg-white hover:scale-90 hover:"
//             >
//               <AiOutlineLogout />
//             </button>
//           </div>
//         ) : (
//           <>
//             <div className=" flex gap-4 h-1/2 font-medium m-4">
//               <Link
//                 to={"/login "}
//                 className="text-(--color-primary-content) p-2 border border-transparent hover:border-white rounded-lg transition-all"
//               >
//                 Login
//               </Link>

//               <Link
//                 to={"/register"}
//                 className="text-(--color-primary) bg-(--color-primary-content) p-2 rounded "
//               >
//                 Register
//               </Link>
//             </div>
//           </>
//         )}
       
//       </div>
//     </>
//   );
// };

// export default Navebar;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import logoLight from "../assets/transparentLogoLight.png";
import { useAuth } from "../context/AuthContext";
import { FaPowerOff } from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../config/api.Config";

const Navbar = () => {
  const { user, isLogin, role, setUser, setIsLogin, setRole } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    //console.log("Handle Navigate", role);

    if (role === "restaurant") {
      navigate("/restaurant-dashboard");
    } else if (role === "rider") {
      navigate("/rider-dashboard");
    } else if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/customer-dashboard");
    }
  };

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      toast.success(res.data.message);

      sessionStorage.removeItem("cravingUser");
      setUser(null);
      setIsLogin(false);
      setRole(null);
      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unknown error occurred during registration. Please try again.",
      );
    }
  };

  return (
    <>
      <div className="sticky top-0 z-99 flex items-center justify-between px-12 py-1 bg-(--color-primary) text-white w-full h-16 shadow-md">
        <div className="h-full">
          <Link to="/">
            <img src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png" alt="Logo" className="w-fit h-full" />{" "}
          </Link>
        </div>

        {isLogin ? (
          <div className="flex items-center gap-2">
            <button
              className="flex gap-2 items-center text-(--color-primary-content) border border-transparent hover:border-(--color-primary-content)  px-3 py-1 rounded"
              title="Go to Dashboard"
              onClick={handleNavigate}
            >
              <img
                src={user?.photo.url}
                alt={user?.fullName}
                className="w-12 h-12 rounded-full object-cover object-top"
              />
              <div className="flex flex-col items-start">
                <span className="text-base">{user?.fullName}</span>
                <span className="text-xs text-(--color-primary-content)/80 uppercase">
                  {role}
                </span>
              </div>
            </button>
            <button
              onClick={handleLogout}
              className="text-(--color-primary-content) border border-transparent hover:border-(--color-primary-content) hover:bg-(--color-error) px-3 py-3 rounded"
              title="Logout"
            >
              <FaPowerOff />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="text-(--color-primary-content) border border-transparent hover:border-(--color-primary-content) px-3 py-1 rounded"
            >
              Login
            </Link>
            <Link
              to="/register/customer"
              className="bg-(--color-primary-content) text-(--color-primary) hover:bg-(--color-primary) hover:text-(--color-primary-content) border px-3 py-1 rounded"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;