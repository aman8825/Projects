import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import api from "../../config/ApiConfig";
import toast from "react-hot-toast";
import { MdOutlineAddAPhoto, MdOutlineLockReset } from "react-icons/md";

import PasswordChangeModal from "../commomModals/PasswordChangeModal";
const RiderSetting = () => {
  const { user, setUser } = useAuth();
  const [editingProfile, setEditingProfile] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordChangeModalOpen, setIsPasswordChangeModalOpen] =
    useState(false);

  // const [formData, setFormData] = useState({
  //   fullName: user?.fullName || "",
  //   email: user?.email || "",
  //   phone: user?.phone || "",
  // });
const [profileFormData, setProfileFormData] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });
  // Profile handlers
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveProfile = async () => {
    try {
      setIsLoading(true);

      const payload = new FormData();
      payload.append("fullName", formData.fullName);
      payload.append("email", formData.email.toLowerCase());
      payload.append("phone", formData.phone);

      payload.append("displayPic", profilePic);

      const response = await api.put(`/user/edit-profile`, payload);

      setUser(response.data.data);
      sessionStorage.setItem("cravingUser", JSON.stringify(response.data.data));

      setEditingProfile(false);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelProfile = () => {
    setFormData({
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
    });
    setProfilePicPreview(null);
    setEditingProfile(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    setProfilePicPreview(URL.createObjectURL(file));
    setProfilePic(file);
  };

  return (
    <>
      <div className="overflow-y-auto h-full p-6 space-y-6">
        {/* rider Profile Section */}
        <div className="bg-(--color-base-200) rounded-lg shadow-xl  p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Profile Information</h3>
            {!editingProfile ? (
              <div className="flex gap-3">
                <button
                  onClick={() => setEditingProfile(true)}
                  className="flex items-center gap-2 bg-(--color-primary) text-(--color-primary-content) px-3 py-1 rounded text-sm"
                >
                  <MdEdit /> Edit
                </button>
                <button
                  onClick={() => setIsPasswordChangeModalOpen(true)}
                  className="flex items-center gap-2 border border-(--color-primary) text-(--color-primary) px-3 py-1 rounded text-sm hover:bg-(--color-primary) hover:text-(--color-primary-content)"
                >
                  <MdOutlineLockReset /> Change Password
                </button>
              </div>
            ) : (
              <div className="flex gap-2 justify-end">
                <button
                  onClick={handleSaveProfile}
                  className="flex items-center gap-2 bg-(--color-primary) text-(--color-primary-content) px-3 py-1 rounded text-sm"
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={handleCancelProfile}
                  className="flex items-center gap-2 bg-(--color-secondary) text-(--color-secondary-content) px-3 py-1 rounded text-sm"
                  disabled={isLoading}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-24 h-24">
                  <img
                    src={profilePicPreview || user.photo.url}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-2 border-(--color-primary)"
                  />
                </div>

                {editingProfile && (
                  <div
                   className="absolute cursor-pointer bottom-1 right-1 border p-2 rounded-full w-fit bg-(--color-base-200)"
                    title="Change Photo"
                  >
                    <label htmlFor="profilePic" className="cursor-pointer">
                      <MdOutlineAddAPhoto className="text-xl" />
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      name="profilePic"
                      id="profilePic"
                      className="hidden"
                      onChange={handleProfilePicChange}
                    />
                  </div>
                )}
              </div>

              <div className="space-y-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="w-full ">
                    <label className="text-xs font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={profileFormData.fullName}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={profileFormData.email}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) disabled:bg-(--secondary) cursor-not-allowed  rounded`}
                      disabled
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileFormData.phone}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-(--color-base-200) rounded-lg p-3 shadow-xl">
 <div className=" justify-between pb-2 mb-2">
              <div className=" items-center gap-3">
                <h3 className="w-full text-l font-semibold">
                  vechicle Details
                </h3>

            </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="w-full ">
                    <label className="text-xs font-semibold">Vechile Type</label>
                    <input
                      type="text"
                      name="fullName"
                       value={profileFormData.fullName}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">Vechile Number</label>
                    <input
                      type="email"
                      name="email"
                       value={profileFormData.fullName}
                      onChange={handleProfileChange}
                     className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">Vechile Model</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileFormData.fullName}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">Vechile Color</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileFormData.fullName}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                </div>

      </div>    
      <div className=" justify-between pb-2 mb-2">
              <div className=" items-center gap-3">
                <h3 className="w-full text-l font-semibold">
                 Document
                </h3>

            </div>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="w-full ">
                    <label className="text-xs font-semibold">Driving Licence</label>
                    <input
                      type="file"
                      name="drivingLicence"
                       value={profileFormData.drivingLicence}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                    
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">Vechile Registation Certificate</label>
                    <input
                      type="file"
                      name="registationCertificate"
                       value={profileFormData.registationCertificate}
                      onChange={handleProfileChange}
                     className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">Insurance Certificate</label>
                    <input
                       type="file"
                      name="insuranceCertificate"
                      value={profileFormData.insuranceCertificate}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">Aadhar Card</label>
                    <input
                       type="file"
                      name="aadharCard"
                      value={profileFormData.aadharCard}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                   <div className="w-full">
                    <label className="text-xs font-semibold">Pan Card</label>
                    <input
                       type="file"
                      name="panCard"
                      value={profileFormData.panCard}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                </div>

      </div>   
      <div className=" justify-between pb-2 mb-2">
              <div className=" items-center gap-3">
                <h3 className="w-full text-l font-semibold">
                Current Address
                </h3>

            </div>
             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="w-full ">
                    <label className="text-xs font-semibold">Address</label>
                    <input
                      type="text"
                      name="address"
                       value={profileFormData.address}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">City</label>
                    <input
                      type="text"
                      name="city"
                       value={profileFormData.city}
                      onChange={handleProfileChange}
                     className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>

                  <div className="w-full">
                    <label className="text-xs font-semibold">State</label>
                    <input
                      type="text"
                      name="state"
                      value={profileFormData.state}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">Pin Code</label>
                    <input
                      type="text"
                      name="pinCode"
                      value={profileFormData.pinCode}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-xs font-semibold">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={profileFormData.country}
                      onChange={handleProfileChange}
                      className={`w-full px-1.5 py-1 border border-(--color-secondary) ${editingProfile ? "bg-(--color-base-100)" : "bg-(--color-base-200)"} rounded`}
                      disabled={!editingProfile}
                    />
                  </div>
                </div>

      </div>      
        </div>
      </div>

      {isPasswordChangeModalOpen && (
        <PasswordChangeModal
          open={isPasswordChangeModalOpen}
          onClose={() => setIsPasswordChangeModalOpen(false)}
        />
      )}
    </>
  );
};

export default RiderSetting;