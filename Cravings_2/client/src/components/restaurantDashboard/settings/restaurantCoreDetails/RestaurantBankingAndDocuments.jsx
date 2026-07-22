import React,{ useState } from 'react'
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../../../context/AuthContext";
import api from "../../../../config/ApiConfig";
import toast from "react-hot-toast";
import { MdOutlineAddAPhoto, MdOutlineLockReset } from "react-icons/md";


const RestaurantBankingAndDocuments = () => {
   const [documentInfo, setDocumentInfo] = useState(false);
   
  return (
<>
    <div>
      <>
       {/* Banking and Document */}
              <div className="bg-(--color-base-100) rounded-lg p-3">
                <div className="flex justify-between items-center border-b border-(--color-secondary) pb-2 mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="w-full text-sm font-semibold text-(--color-primary)">
                      Banking & Documents
                    </h3>
                  </div>

                  {!documentInfo ? (
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
                    <label className="text-xs font-semibold">Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      value={restaurantFormData?.address || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">
                      Account Number
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={restaurantFormData?.city || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">IFSC Code</label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={restaurantFormData?.state || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">
                      Pan Card Number
                    </label>
                    <input
                      type="text"
                      name="panCard"
                      value={restaurantFormData?.pinCode || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">GST Number</label>
                    <input
                      type="text"
                      name="gst"
                      value={restaurantFormData?.country || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">fssai Code</label>
                    <input
                      type="text"
                      name="fssai"
                      value={restaurantFormData?.country || ""}
                      onChange={handleRestaurantChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded`}
                      disabled={!editingRestaurant}
                    />
                  </div>
                </div>
              </div>
      </>
    </div>
</>
  )
}

export default RestaurantBankingAndDocuments