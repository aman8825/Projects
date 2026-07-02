import React from "react";
import { Link } from "react-router-dom";
const footerLinks = [
  {
    id: 1,
    title: "Quick Links",
    links: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Order Now",
        path: "/restaurants",
      },
    ],
  },
  {
    id: 2,
    title: "For Restaurants",
    links: [
      {
        name: "Partner With Us",
        path: "/partner-with-us",
      },
      {
        name: "Restaurant Dashboard",
        path: "/restaurant/dashboard",
      },
    ],
  },
  {
    id: 3,
    title: "For Riders",
    links: [
      {
        name: "Become a Rider",
        path: "/become-a-rider",
      },
      {
        name: "Rider Dashboard",
        path: "/rider/dashboard",
      },
    ],
  },
  {
    id: 4,
    title: "Feedback & Support",
    links: [
      {
        name: "Submit Feedback",
        path: "/feedback",
      },
      {
        name: "Help Center",
        path: "/help-center",
      },
      {
        name: "Contact Us",
        path: "/contact-us",
      },
    ],
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-(--color-secondary) text-(--color-primary-content) p-3 px-32">
        <p className="text-center">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>

        <div className="flex justify-between mt-4 ">
          <div className="w-36 h-36 rounded-full overflow-hidden">
            <img
              src="https://cravings.ricr.in/assets/circleLogo-DpCri5UD.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div 
              className="flex flex-col "
              key={section.id}>
                {" "}
                <h5 className="font-semibold text-xl mb-3">{section.title}</h5>
                {section.links.map((link) => (
                  <Link to={link.path} 
                  className="hover:text-(--color-primary)"
                  >{link.name}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
