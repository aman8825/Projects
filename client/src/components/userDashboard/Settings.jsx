
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import api from "../../config/api.config.js";
import toast from "react-hot-toast";

const Settings = () => {
  const { user, setUser, setIsLogin } = useAuth();
  const [isEditable, setIsEditable] = useState(false);
  const [tempUser, setTempUser] = useState(user);
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsEditable(false);

    const payLoad = {
      email: tempUser.email.toLowerCase(),
      fullName: tempUser.fullName,
      phone: tempUser.phone,
    };

    console.log(payLoad);
     try {
      const res = await api.put("/user/edit-profile", payLoad);
      setUser(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        error.response.status + " | " + error.response?.data?.message ||
          error.message ||  "Something went wrong"
      );
    }
  };

  const divClass="flex gap-6 mt-4 text-xl  "
const elementClass="w-24 font-normal"
  return (
<>
    <div className="w-96 m-5 mb-4 rounded-2xl border border-gray-100 shadow-xl shadow-gray-400 p-6  hover:shadow-2xl ">
  <div className="bg-(--color-primary) rounded-xl py-3 shadow-md">
  <h1 className="text-3xl font-bold text-white text-center ">
    Welcome Back ! 👋
  </h1>
</div>

<div className={divClass}>
  <div className="w-24 h-24 rounded-full overflow-hidden border border-(--color-primary) ">
        <img
          src={user.photo}
          alt=""
          className="w-full h-full object-cover  "
        />
        
      </div>
      <div >
        <h1 className="font-bold mt-1 text-2xl ">{user.fullName} </h1>
        <p>Customer</p>
      </div>
</div>
{isEditable === true ? (
        <>
          <div className="grid w-m gap-3 mt-4">
            <input
              type="text"
              name="fullName"
              value={tempUser.fullName}
             className='p-2 border-2 border-orange-200 focus:border-2 focus:border-orange-500 outline-none '
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={tempUser.email}
              className="p-2 border-2 border-orange-200 focus:border-2 bg-orange-200 outline-none disabled:cursor-not-allowed"
              disabled
            />
            <input
              type="tel"
              name="phone"
              value={tempUser.phone}
              className='p-2 border-2 border-orange-200 focus:border-2 focus:border-orange-500 outline-none '
              onChange={handleChange}
            />
          </div>
        </>
        
      ) : (
        <>
<div className={divClass}>
  <div  className={elementClass}>Full Name</div>
  <div> {user.fullName}</div>
</div>
<div className={divClass}>
  <div className={elementClass}>Email</div>
  <div className="flex-1 break-all">{user.email}</div>
</div>
<div className={divClass}>
  <div className={elementClass}>Phone</div>
  <div>{user.phone}</div>
</div>
 </>
      )}

     
        
       
      <div className="flex justify-between p-4">
   {isEditable === true ? (
        <>
  <button onClick={() => setIsEditable(false)}
   className='text-(--color-primary) bg-(--color-primary-content) p-2  border border-(--color-primary) hover:scale-95  rounded-lg transition-all'  >Cancel</button>
  <button onClick={handleSave} className="text-(--color-primary-content) bg-(--color-primary) p-2 px-4 rounded-lg hover:scale-95"  >Save</button>
    </>
      ) : (
        <>
       
  <button onClick={() => setIsEditable(true)}
   className='text-(--color-primary) bg-(--color-primary-content) p-2  border border-(--color-primary) hover:scale-95  rounded-lg transition-all'  >Edit Profile</button>
   
  <button className="text-(--color-primary-content) bg-(--color-primary) p-2 rounded-lg hover:scale-95" onClick={()=>{
    sessionStorage.removeItem("UserData")
    setIsLogin(false)
    setUser(false);
    navigate("/")
  }}>Logout</button>
   </>
  )}
</div>
</div> 
</>
  )
}

export default Settings