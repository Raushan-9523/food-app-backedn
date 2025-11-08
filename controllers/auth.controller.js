const User = require("../models/user");
const register = async (req, res) => {
  try {
    const { userName, email, password, address, phone, userType, profile } =
      req.body;

    if (!userName || !email || !password || !address || !phone) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Email already registered , please login",
      });
    }

    const user = await User.create({
      userName,
      email,
      password,
      address,
      phone,
    });

    res.status(201).send({ success: true, message: "Successfully Registered" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! try again error in register api",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide email or Password",
      });
    }
    const userResult = await User.findOne({ email });

    if (!userResult) {
      return res
        .status(404)
        .send({ success: false, message: "User Name not found" });
    }

    res.status(200).send({});
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: "Error in Login API Something went wrong , please try again!",
    });
  }
};

module.exports = { register, login };
