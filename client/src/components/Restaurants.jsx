import React from "react";
const restaurant = [
  {
    id: 1,
    name: "Under The Mango Tree",
    image:
      "https://res.cloudinary.com/dpl3xwf1z/image/upload/v1775671325/restaurants/69c58f340d577beee548c195/njneiftngfspzpn2wdig.avif",
    rating: 3.6,
    description:
      "Enjoy the thrill of grill and barbecue at Under The Mango Tree restaurant at Jehan Numa Palace, Bhopal. Head here now!",
    cuisines: ["Indian", "Chinese", "Italian"],
  },
  {
    id: 2,
    name: "Raj Darbar",
    image:
      "https://res.cloudinary.com/dpl3xwf1z/image/upload/v1774557305/restaurants/69c58f4b0d577beee548c198/fpdlv1viy4gucm1vrh7u.webp",
    rating: 4.8,
    description:
      "Raj Darbar is a one-of-a-kind Indian restaurant that offers a unique dining experience for families and friends with a dhaba-style theme.",
    cuisines: ["Indian", "Chinese", "Italian"],
  },
  {
    id: 3,
    name: "Countryside Culture",
    image:
      "https://res.cloudinary.com/dpl3xwf1z/image/upload/v1774557446/restaurants/69c590150d577beee548c19b/htwjijdrr2gbjdaf355s.webp",
    rating: 4.1,
    description:
      "A hidden gem away from the city, offering lush green meadows and peaceful walking paths for relaxation.",
    cuisines: ["Indian", "Chinese"],
  },
];

const Restaurants = () => {
  return (
    
    <>
    
      <div className="w-full h-full bg-linear-to-b from-(--color-primary)  to-(--color-base-100)">
        <div className="p-5 px-40">
          <div className="text-white">
            <h1 className="text-3xl font-bold ">Featured Restaurants</h1>
            <h5>3 restaurants available</h5>
          </div>
<div className="flex gap-6 justify-evenly flex-wrap mt-8">
  {restaurant.map((restaurant)=>(
<div 
 key={restaurant.id}
  className="w-96 h-full mt-8  bg-white rounded-xl shadow hover:scale-105">
            <div className="w-full relative overflow-hidden">
              <img
                src={restaurant.image}
               alt={restaurant.name}
                className="w-full h-60 object-cover rounded-t-xl"
              />
               <div className="absolute top-4 right-4 bg-(--color-primary) text-white px-4 py-1 rounded-full flex items-center gap-1 font-semibold ">
   ⭐ {restaurant.rating}
  </div>
            </div>
            <div className="p-4">
              <h1 className="text-2xl font-semibold mb-3">{restaurant.name}</h1>
              <p className="text-gray-500">
                 {restaurant.description}
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
          {restaurant.cuisines.map((item, index) => (
            <div
              key={index}
              className="bg-(--color-base-300) px-2 py-1 rounded"
            >
              {item}
            </div>
          ))}
        </div>
               <button className="w-full text-white font-medium bg-(--color-primary) p-1 rounded mt-3 hover:bg-orange-500">Explore Menu</button>
            </div>
           
          </div>
   
  ))}

</div>
          
        </div>
      </div>
    </>
  );
};

export default Restaurants;
