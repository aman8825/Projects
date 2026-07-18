import express from "express";
import multer from "multer";
import {
  RestaurantUpdateProfile,
  RestaurantGetData,
  RestaurantUpdateInformation,
  RestaurantUpdateCoreDetails
} from "../controller/restaurant.controller.js";
import { RestaurantAuthProtect } from "../middleware/auth.middelware.js";

const upload = multer();
const router = express.Router();

router.post(
  "/update-profile",
  RestaurantAuthProtect,
  upload.single("coverImage"),
  upload.array("restaurantImage", 10),
  RestaurantUpdateProfile,
);

router.put("/update-restaurantinfo", RestaurantAuthProtect,RestaurantUpdateInformation,)
router.put("/update-coredetails", RestaurantAuthProtect,RestaurantUpdateCoreDetails)
// router.put("/update-restaurantPhoto", RestaurantAuthProtect,RestaurantUpdatePhoto,)


router.get("/get-resturant-data", RestaurantAuthProtect, RestaurantGetData);

export default router;