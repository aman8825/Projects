import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ContactUs from "./pages/ContactUs";
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./dashboard/userDashboard";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Navebar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact-us" element={<ContactUs />} />
{/* Dashboard Routs */}
<Route path="/user/dashboard" element={<UserDashboard/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;