import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem("UserData")));
  }, []);
  
const divClass="flex gap-6 mt-4 text-xl  "
const elementClass="w-24 font-normal"
  return (
    <>

<div className="w-96 m-5 mb-4 rounded-2xl border border-gray-100 shadow-xl shadow-gray-400 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
  <div className="bg-(--color-primary) rounded-xl py-3 shadow-md">
  <h1 className="text-3xl font-bold text-white text-center ">
    Welcome Back ! 👋
  </h1>
</div>

<div className={divClass}>
  <div className="w-24 h-24 rounded-full overflow-hidden ">
        <img
          src={userData.photo}
          alt=""
          className="w-full h-full object-cover "
        />
        
      </div>
      <div >
        <h1 className="font-bold mt-1 text-2xl ">{userData.fullName} </h1>
        <p>Customer</p>
      </div>
</div>
<div className={divClass}>
  <div  className={elementClass}>Full Name</div>
  <div> {userData.fullName}</div>
</div>
<div className={divClass}>
  <div className={elementClass}>Email</div>
  <div className="flex-1 break-all">{userData.email}</div>
</div>
<div className={divClass}>
  <div className={elementClass}>Phone</div>
  <div>{userData.phone}</div>
</div>

<div className="flex justify-between p-4">
  <button className='text-(--color-primary) bg-(--color-primary-content) p-2  border border-(--color-primary) hover:scale-95  rounded-lg transition-all'  >Edit Profile</button>
  <button className="text-(--color-primary-content) bg-(--color-primary) p-2 rounded-lg hover:scale-95">Logout</button>
</div>
     
</div>
    

    
      
    </>
  );
};

export default UserDashboard;