const Course = require("../models/Course");
const ErrorResponse = require("../utils/errorResponse");
const color = require("colors");
const asyncHandler = require("../middleware/asyncHandler");

exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;
  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Course.find();
  }

  const courses = await query;
  res.status(200).json({
    sucess: true,
    count: courses.length(),
    courses,
  });
});
