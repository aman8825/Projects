import React ,{ useState } from 'react'
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../../../context/AuthContext";
import api from "../../../../config/ApiConfig";
import toast from "react-hot-toast";
import { MdOutlineAddAPhoto, MdOutlineLockReset } from "react-icons/md";
// import  from "../../../assets/.gif";

const RestaurantAddress = () => {
  const { user, setUser } = useAuth();

  // Common State variables 
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] =
    useState(false);

  // Restaurant handlers
  const [isLoadingRestaurant, setIsLoadingRestaurant] = useState(false);
  const [loadingRestaurantError, setLoadingRestaurantError] = useState(null);
  const [restaurantData, setRestaurantData] = useState();
  const [editingRestaurant, setEditingRestaurant] = useState(false);
  const [restaurantFormData, setRestaurantFormData] = useState({
    restaurantName: restaurantData?.restaurantName || "",
    address: restaurantData?.address || "",
    city: restaurantData?.city || "",
    state: restaurantData?.state || "",
    pinCode: restaurantData?.pinCode || "",
    country: restaurantData?.country || "",
    description: restaurantData?.description || "",
    restaurantType: restaurantData?.restaurantType || "",
    cuisineTypes: restaurantData?.cuisineTypes?.join(", ") || "",
    isOpen: restaurantData?.isOpen || false,
    contactEmail: restaurantData?.contactDetails?.email || "",
    contactPhone: restaurantData?.contactDetails?.phone || "",
    openingTime: restaurantData?.servingHours?.openingTime || "",
    closingTime: restaurantData?.servingHours?.closingTime || "",
    geoLat: restaurantData?.geoLocation?.lat || "",
    geoLon: restaurantData?.geoLocation?.lon || "",
    socialMediaLinks: restaurantData?.socialMediaLinks || [],
  });

  const handleRestaurantChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRestaurantFormData({
      ...restaurantFormData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
const handleSaveRestaurant = async () => {
    try {
      setIsLoading(true);

      // Prepare payload for restaurant update
      console.log("restaurantFormData", restaurantFormData);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update restaurant",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelRestaurant = () => {
    setRestaurantFormData({
      restaurantName: restaurantData?.restaurantName || "",
      address: restaurantData?.address || "",
      city: restaurantData?.city || "",
      state: restaurantData?.state || "",
      pinCode: restaurantData?.pinCode || "",
      country: restaurantData?.country || "",
      description: restaurantData?.description || "",
      restaurantType: restaurantData?.restaurantType || "",
      cuisineTypes: restaurantData?.cuisineTypes?.join(", ") || "",
      isOpen: restaurantData?.isOpen || false,
      contactEmail: restaurantData?.contactDetails?.email || "",
      contactPhone: restaurantData?.contactDetails?.phone || "",
      openingTime: restaurantData?.servingHours?.openingTime || "",
      closingTime: restaurantData?.servingHours?.closingTime || "",
      geoLat: restaurantData?.geoLocation?.lat || "",
      geoLon: restaurantData?.geoLocation?.lon || "",
      socialMediaLinks: restaurantData?.socialMediaLinks || [],
    });
    setEditingRestaurant(false);
  };

  return (
<>
    <div>
        <>
         {/* Address Information */}
              <div className="bg-(--color-base-100) rounded-lg p-3">
                <div className="flex justify-between items-center border-b border-(--color-secondary) pb-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="w-full text-sm font-semibold text-(--color-primary)">
                      Address
                    </h3>
                  </div>

                  {!editingRestaurant ? (
                    <div className="flex gap-3">
                      <button
                        onClick={() => setEditingRestaurant(true)}
                        className="flex items-center gap-2 bg-(--color-primary) text-(--color-primary-content) px-2 py-0.5 rounded text-xs"
                      >
                        <MdEdit /> Edit
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={handleSaveRestaurant}
                        className="flex items-center gap-2 bg-(--color-primary) text-(--color-primary-content) px-2 py-0.5 rounded text-xs"
                        disabled={isLoading}
                      >
                        {isLoading ? "Saving..." : "Save Changes"}
                      </button>
                      <button
                        onClick={handleCancelRestaurant}
                        className="flex items-center gap-2 bg-(--color-secondary) text-(--color-secondary-content) px-2 py-0.5 rounded text-xs"
                        disabled={isLoading}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center">
                  <div className="w-full">
                    <label className="text-xs font-semibold">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={restaurantFormData?.address || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">City</label>
                    <input
                      type="text"
                      name="city"
                      value={restaurantFormData?.city || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">State</label>
                    <input
                      type="text"
                      name="state"
                      value={restaurantFormData?.state || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">Pin Code</label>
                    <input
                      type="text"
                      name="pinCode"
                      value={restaurantFormData?.pinCode || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={restaurantFormData?.country || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>

                  <div className="w-full grid grid-cols-2 gap-2">
                    <div className="w-full">
                      <label className="text-xs font-semibold">Latitude</label>
                      <input
                        type="text"
                        name="geoLat"
                        value={restaurantFormData?.geoLat || ""}
                        onChange={handleRestaurantChange}
                        placeholder="e.g. 28.6139"
                        className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                        disabled={!editingRestaurant}
                      />
                    </div>

                    <div className="w-full">
                      <label className="text-xs font-semibold">Longitude</label>
                      <input
                        type="text"
                        name="geoLon"
                        value={restaurantFormData?.geoLon || ""}
                        onChange={handleRestaurantChange}
                        placeholder="e.g. 77.2090"
                        className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                        disabled={!editingRestaurant}
                      />
                    </div>
                  </div>
                </div>
              </div>
        </>
    </div>
</>
  )
}

export default RestaurantAddress