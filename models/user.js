const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: "Phone no is required",
    },
    userType: {
      type: String,
      required: [true, "user type is required"],
      default: "client",
      enum: ["client", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
