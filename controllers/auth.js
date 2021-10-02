const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const color = require("colors");
const asyncHandler = require("../middleware/asyncHandler");

//@desc Register User
//@route /api/v1/bootcamp/register
//@access public

exports.register = asyncHandler(async (req, res, next) => {

  const {name, email, password, role} = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role
  })

  // Create Token
  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token });
});
 