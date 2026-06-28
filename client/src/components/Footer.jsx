import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-(--color-secondary) text-(--color-primary-content) p-3 px-32 ">
        <p className="text-center">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>
        <div className="flex justify-between mt-4 ">
          <div className="w-36 h-36 rounded-full border overflow-hidden"><img src="https://cravings.ricr.in/assets/circleLogo-DpCri5UD.png" alt="" /></div>
          <div>
            <h5>Quick Links</h5>
            <p>Home</p>
            <p>About</p>
            <p>Order Now</p>
          </div>
          <div>
            <h5>For Restaurants</h5>
            <p>Partner With Us</p>
            <p>Restaurant Dashboard</p>
          </div>
          <div>
            <h5>For Riders</h5>
            <p>Become a Rider
</p>
            <p>Rider Dashboard</p>
          </div>
          <div>
            <h5>Feedback & Support


</h5>
            <p>Submit Feedback</p>
            <p>Help Center</p>
            <p><Link to="/contact-us">ContactUs </Link> </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
