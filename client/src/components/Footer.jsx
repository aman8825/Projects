import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {

  return (
    <>
      <div className="bg-(--color-secondary) text-(--color-primary-content) p-3 px-32">
        <p className="text-center">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>
        <div className="flex justify-between mt-4 ">
          <div className="w-36 h-36 rounded-full overflow-hidden"><img src="https://cravings.ricr.in/assets/circleLogo-DpCri5UD.png" alt="" className="w-full h-full object-cover" /></div>
          <div>
            <h5 className="font-semibold text-xl mb-3">Quick Links</h5>
            <p className="hover:text-(--color-primary)">Home</p>
            <p className="hover:text-(--color-primary)">About</p>
            <p className="hover:text-(--color-primary)">Order Now</p>
          </div>
          <div>
            <h5 className="font-semibold text-xl mb-3">For Restaurants</h5>
            <p className="hover:text-(--color-primary)">Partner With Us</p>
            <p className="hover:text-(--color-primary)">Restaurant Dashboard</p>
          </div>
          <div>
            <h5 className="font-semibold text-xl mb-3">For Riders</h5>
            <p className="hover:text-(--color-primary)">Become a Rider
</p>
            <p className="hover:text-(--color-primary)">Rider Dashboard</p>
          </div>
          <div>
            <h5 className="font-semibold text-xl mb-3">Feedback & Support


</h5>
            <p className="hover:text-(--color-primary)">Submit Feedback</p>
            <p className="hover:text-(--color-primary)">Help Center</p>
            <p className="hover:text-(--color-primary)"><Link to="/contact-us">ContactUs </Link> </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
