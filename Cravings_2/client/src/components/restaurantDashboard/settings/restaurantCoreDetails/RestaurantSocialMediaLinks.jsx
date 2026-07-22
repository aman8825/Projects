import React from 'react'
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../../../context/AuthContext";
import api from "../../../../config/ApiConfig";
import toast from "react-hot-toast";
import { MdOutlineAddAPhoto, MdOutlineLockReset } from "react-icons/md";
// import RunningLoader from "../../../../../assets/runningLoader.gif";

const RestaurantSocialMediaLinks = () => {
     const handleSocialMediaChange = (index, field, value) => {
    const updated = restaurantFormData.socialMediaLinks.map((link, i) =>
      i === index ? { ...link, [field]: value } : link,
    );
    setRestaurantFormData({ ...restaurantFormData, socialMediaLinks: updated });
  };

  const addSocialMediaLink = () => {
    setRestaurantFormData({
      ...restaurantFormData,
      socialMediaLinks: [
        ...restaurantFormData.socialMediaLinks,
        { platform: "", url: "" },
      ],
    });
  };

  const removeSocialMediaLink = (index) => {
    setRestaurantFormData({
      ...restaurantFormData,
      socialMediaLinks: restaurantFormData.socialMediaLinks.filter(
        (_, i) => i !== index,
      ),
    });
  };
  return (
<>
    <div>
        {/* Social Media Links */}
              <div className="bg-(--color-base-100) rounded-lg p-3 h-full flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-(--color-primary)">
                    Social Media Links
                  </label>

                  <button
                    type="button"
                    onClick={addSocialMediaLink}
                    className="text-xs bg-(--color-primary) text-(--color-primary-content) px-2 py-0.5 rounded"
                  >
                    + Add Link
                  </button>
                </div>
                <div className="flex flex-col gap-2 h-27 overflow-y-auto">
                  {restaurantFormData.socialMediaLinks.map((link, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 gap-2 items-center"
                    >
                      <input
                        type="text"
                        placeholder="Platform (e.g. Instagram)"
                        value={link.platform}
                        onChange={(e) =>
                          handleSocialMediaChange(
                            index,
                            "platform",
                            e.target.value,
                          )
                        }
                        className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded text-sm`}
                        disabled={!editingRestaurant}
                      />
                      <div className="flex gap-2">
                        <input
                          type="url"
                          placeholder="URL"
                          value={link.url}
                          onChange={(e) =>
                            handleSocialMediaChange(
                              index,
                              "url",
                              e.target.value,
                            )
                          }
                          className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingRestaurant ? "bg-white" : "bg-(--color-base-100)"} rounded text-sm`}
                          disabled={!editingRestaurant}
                        />

                        <button
                          type="button"
                          onClick={() => removeSocialMediaLink(index)}
                          className="text-red-500 text-sm px-1"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                  {restaurantFormData.socialMediaLinks.length === 0 && (
                    <p className="text-xs text-(--color-secondary)">
                      No social media links added.
                    </p>
                  )}
                </div>
              </div>
    </div>
</>
  )
}

export default RestaurantSocialMediaLinks