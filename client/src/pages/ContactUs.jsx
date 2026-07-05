import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../config/api.config";
const ContactUs = () => {
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !contactData.fullName ||
      !contactData.email ||
      !contactData.phone ||
      !contactData.subject ||
      !contactData.message
    ) {
       toast.error("All fields are required");
      return;
    }
   

    const payload = {
      fullName: contactData.fullName,
      email: contactData.email.toLowerCase(),
      phone: contactData.phone,
      subject: contactData.subject,
      message: contactData.message,
    };
     try {
      const res = await api.post("/public/contact-us", payload);
       toast.success(res.data.message);
    } catch (error) {
    toast.error(error.response?.data?.message || error.message);
    }

    // Reset form after submission
    setTimeout(() => {
      setContactData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };
  return (
    <>
      <div className="h-full  grid-cols-2 p-20 bg-[url('https://cravings.ricr.in/contactPage.jpg')] bg-cover ">
        <div className="w-md bg-(--color-base-200) rounded-2xl shadow p-10 flex flex-col justify-center ">
          <h1 className="font-bold text-3xl text-(--color-primary) text-center">
            Contact Us
          </h1>

          <p className="text-(--color-secondary) text-center ">
            Have a question? We'd love to hear from you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 w-full mt-2.5">
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                value={contactData.fullName}
                placeholder="Enter your name"
                className="p-2 border-1 border-orange-200  focus:border-orange-500 outline-none "
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={contactData.email}
                placeholder="Enter your email"
                className="p-2 border-1 border-orange-200  focus:border-orange-500 outline-none "
              />
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                value={contactData.phone}
                placeholder="Enter your phone number"
               className="p-2 border-1 border-orange-200  focus:border-orange-500 outline-none "
              />
              <input
                type="text"
                name="subject"
                onChange={handleChange}
                value={contactData.subject}
                placeholder="What is this about?"
                className="p-2 border-1 border-orange-200  focus:border-orange-500 outline-none "
              />
              <textarea
                name="message"
                onChange={handleChange}
                value={contactData.message}
                placeholder="Write your message here..."
               className="p-2 border-1 min-h-20 max-h-52 border-orange-200  focus:border-orange-500 outline-none "
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 bg-(--color-primary) text-white py-2 px-4 rounded hover:scale-95 w-full font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
