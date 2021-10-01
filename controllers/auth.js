const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const color = require("colors");
const asyncHandler = require("../middleware/asyncHandler");

//@desc Register User
//@route /api/v1/bootcamp/register
//@access public

exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
 