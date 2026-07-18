import Restaurant from "../models/restaurant.model.js";
import {
  uploadMultipleImages,
  deleteMultipleImages,
  uploadSingleImage,
  deleteSingleImage,
} from "../utils/image.service.js";

// export const RestaurantGetData = async (req, res, next) => {
//   try {
//     const currentUser = req.user;
//     const managerId = req.query.id;

//     console.log("Current User:", currentUser);
//     console.log("Manager ID:", managerId);


//     if (currentUser._id.toString() !== managerId) {
//       const error = new Error("Unauthorized Access");
//       error.statusCode = 401;
//       return next(error);
//     }

//     const restaurantData = await Restaurant.find({ managerId });

//     if (restaurantData) {
//       res.status(200).json({
//         message: "Restaurant Fetched Successfully",
//         data: restaurantData,
//       });
//     } else {
//       res.status(200).json({
//         message: "No restaurant Data Found",
//         data: {},
//       });
//     }
//   } catch (error) {
//     console.log(error.message);
//     next();
//   }
// };
export const RestaurantGetData = async (req, res, next) => {
  try {

    const currentUser = req.user;

    console.log("Current User :", currentUser._id);

    const restaurantData = await Restaurant.findOne({
      managerId: currentUser._id,
    });

    if (!restaurantData) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Restaurant fetched successfully",
      data: restaurantData,
    });

  } catch (error) {

    console.log(error);

    next(error);

  }
};

export const RestaurantUpdateProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const restaurantDataFromFE = req.body;
    const coverImageFromFE = req.files?.coverImage;
    const restaurantImageFromFE = req.files?.restaurantImage;

    const dataKeys = Object.keys(restaurantDataFromFE);

    dataKeys.forEach((key) => {
      if (!restaurantDataFromFE[key]) {
        const error = new Error(`Missing required field: ${key}`);
        error.statusCode = 400;
        return next(error);
      }
    });

    const existingRestaurant = await Restaurant.findOne({
      managerId: currentUser._id,
    });

    if (!existingRestaurant) {
      if (coverImageFromFE) {
        const coverImage = await uploadSingleImage(
          coverImageFromFE,
          `restaurant/${currentUser.phone}/coverPhoto`,
        );
        dataKeys.push("coverImage");
        restaurantDataFromFE.coverImage = coverImage;
      }

      if (restaurantImageFromFE && restaurantImageFromFE.length > 0) {
        const restaurantImage = await uploadMultipleImages(
          restaurantImageFromFE,
          `restaurant/${currentUser.phone}/restaurantPhotos`,
        );
        dataKeys.push("restaurantImage");
        restaurantDataFromFE.restaurantImage = restaurantImage;
      }

      const newRestaurant = await Restaurant.create({
        managerId: currentUser._id,
        ...restaurantDataFromFE,
      });
      return res.status(201).json({
        message: "Restaurant profile created successfully",
        data: newRestaurant,
      });
    } else {
      if (coverImageFromFE) {
        await deleteSingleImage(existingRestaurant.coverImage);

        const coverImage = await uploadSingleImage(
          coverImageFromFE,
          `restaurant/${currentUser.phone}/coverPhoto`,
        );
        dataKeys.push("coverImage");
        restaurantDataFromFE.coverImage = coverImage;
      }
      if (restaurantImageFromFE && restaurantImageFromFE.length > 0) {
        await deleteMultipleImages(existingRestaurant.restaurantImage);

        const restaurantImage = await uploadMultipleImages(
          restaurantImageFromFE,
          `restaurant/${currentUser.phone}/restaurantPhotos`,
        );
        dataKeys.push("restaurantImage");
        restaurantDataFromFE.restaurantImage = restaurantImage;
      }
      dataKeys.forEach((key) => {
        existingRestaurant[key] =
          restaurantDataFromFE[key] || existingRestaurant[key];
      });
      await existingRestaurant.save();
      return res.status(200).json({
        message: "Restaurant profile updated successfully",
        data: existingRestaurant,
      });
    }
  } catch (error) {
    console.log(error.message);
    next();
  }
};

export const RestaurantUpdateInformation=async (req,res,next)=>{
   try {
const currentUser = req.user;
console.log("CurrentUSer"+currentUser);

const restaurant = await Restaurant.findOne({
  managerId: currentUser._id,
});
console.log("Searching Manager ID :", currentUser._id);
console.log("Resturent"+restaurant);

const{
  restaurantName,
  description,
      restaurantType,
      cuisineTypes,
      isOpen,
      contactDetails,
      servingHours,
    } = req.body;

if(!restaurant){
  const error = new Error(`Restaurant not found`);
        error.statusCode = 400;
        return next(error);
}
restaurant.restaurantName = restaurantName;
restaurant.description = description;
restaurant.restaurantType = restaurantType;
restaurant.cuisineTypes = cuisineTypes;
restaurant.isOpen = isOpen;
restaurant.contactDetails = contactDetails;
restaurant.servingHours = servingHours;

    await restaurant.save();

    return res.status(200).json({
      message: "Restaurant information updated successfully",
      data: restaurant,
    });
} catch (error) {
   
  console.log(error);
    next();
  }
}

export const RestaurantUpdateCoreDetails=async(req,res,next)=>{

}