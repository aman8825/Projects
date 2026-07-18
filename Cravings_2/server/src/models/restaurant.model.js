// import mongoose from "mongoose";

// const RestaurantSchema = mongoose.Schema(
//   {
//     managerId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "user",
//       required: true,
//     },
//     restaurantName: { type: String, required: true },
//     address: { type: String, required: true },
//     city: { type: String, required: true },
//     state: { type: String, required: true },
//     pinCode: { type: String, required: true },
//     country: { type: String, required: true },
//     geoLocation: {
//       type: {
//         lat: {
//           type: String,
//         },
//         lon: {
//           type: String,
//         },
//       },
//     },

//     documents: {
//       type: {
//         legalName: { type: String, required: true },
//         companyType: { type: String, required: true },
//         gstCertificate: { type: String, required: true },
//         fssaiCertificate: { type: String, required: true },
//         panCard: { type: String, required: true },
//       },
//     },
//     financialDetails: {
//       type: {
//         bankName: { type: String, required: true },
//         accountNumber: { type: String, required: true },
//         ifscCode: { type: String, required: true },
//       },
//     },
//     contactDetails: {
//       type: {
//         email: { type: String, required: true },
//         phone: { type: String, required: true },
//       },
//     },
//     servingHours: {
//       type: {
//         openingTime: { type: String, required: true },
//         closingTime: { type: String, required: true },
//       },
//     },
//     isOpen: { type: Boolean, default: false },
//     status: {
//       type: String,
//       enum: ["active", "inactive", "blocked"],
//       default: "inactive",
//     },
//     averageRating: { type: Number, default: 0 },
//     cuisineTypes: {
//       type: [String],
//       required: true,
//     },
//     restaurantImage: {
//       type: [
//         {
//           url: { type: String, required: true },
//           publicId: { type: String, required: true },
//         },
//       ],
//       required: true,
//     },
//     coverImage: {
//       type: {
//         url: { type: String, required: true },
//         publicId: { type: String, required: true },
//       },
//       required: true,
//     },
//     description: { type: String, required: true },
//     restaurantType: {
//       type: String,
//       enum: ["veg", "non-veg", "jain", "vegan", "both"],
//       required: true,
//     },
//     socialMediaLinks: {
//       type: [
//         {
//           platform: { type: String, required: true },
//           url: { type: String, required: true },
//         },
//       ],
//     },
//   },
//   { timestamps: true },
// );

// const Restaurant = mongoose.model("restaurant", RestaurantSchema);

// export default Restaurant;

import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema(
  {
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    // Basic Information
    restaurantName: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    pinCode: {
      type: String,
      default: "",
    },

    country: {
      type: String,
      default: "",
    },

    geoLocation: {
      lat: {
        type: String,
        default: "",
      },
      lon: {
        type: String,
        default: "",
      },
    },

    // Legal Documents
    documents: {
      legalName: {
        type: String,
        default: "",
      },

      companyType: {
        type: String,
        default: "",
      },

      gstCertificate: {
        type: String,
        default: "",
      },

      fssaiCertificate: {
        type: String,
        default: "",
      },

      panCard: {
        type: String,
        default: "",
      },
    },

    // Bank Details
    financialDetails: {
      bankName: {
        type: String,
        default: "",
      },

      accountNumber: {
        type: String,
        default: "",
      },

      ifscCode: {
        type: String,
        default: "",
      },
    },

    // Contact
    contactDetails: {
      email: {
        type: String,
        default: "",
      },

      phone: {
        type: String,
        default: "",
      },
    },

    // Serving Hours
    servingHours: {
      openingTime: {
        type: String,
        default: "",
      },

      closingTime: {
        type: String,
        default: "",
      },
    },

    isOpen: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "blocked"],
      default: "inactive",
    },

    averageRating: {
      type: Number,
      default: 0,
    },

    cuisineTypes: {
      type: [String],
      default: [],
    },

    restaurantImage: {
      type: [
        {
          url: {
            type: String,
            default: "",
          },

          publicId: {
            type: String,
            default: "",
          },
        },
      ],
      default: [],
    },

    coverImage: {
      url: {
        type: String,
        default: "",
      },

      publicId: {
        type: String,
        default: "",
      },
    },

    description: {
      type: String,
      default: "",
    },

    restaurantType: {
      type: String,
      enum: ["veg", "non-veg", "jain", "vegan", "both", ""],
      default: "",
    },

    socialMediaLinks: {
      type: [
        {
          platform: {
            type: String,
            default: "",
          },

          url: {
            type: String,
            default: "",
          },
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("restaurant", RestaurantSchema);

export default Restaurant;