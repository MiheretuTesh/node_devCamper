const express = require("express");
const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");
const router = express.Router({ mergeParams: true });

//model
const Course = require("../models/Course");

//midlleware
const advancedResults = require("../middleware/advancedResults");

router
  .route("/")
  .get(
    advancedResults(Course, {
      path: "bootcamp",
      select: "name description",
    }),
    getCourses
  )
  .post(addCourse);

router.route("/:id").get(getCourse).put(updateCourse).delete(deleteCourse);
// .post(addCourse);
// router.route("/:id").get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;
