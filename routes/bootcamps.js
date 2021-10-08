const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload,
} = require("../controllers/bootcamps");

//Include other resource routers
const courseRouter = require("./courses");
const reviewRouter = require("./reviews");

//models
const Bootcamp = require("../models/Bootcamp");

//middlewares
const advancedResult = require("../middleware/advancedResults");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

//Re-route into other  resource routers
router.use("/:bootcampId/courses", courseRouter);
router.use("/:bootcampId/reviews", reviewRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router
  .route("/:id/photo")
  .put(protect, authorize("admin", "publisher"), bootcampPhotoUpload);
router
  .route("/")
  .get(advancedResult(Bootcamp, "courses"), getBootcamps)
  .post(protect, createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, authorize("admin", "publisher"), updateBootcamp)
  .delete(protect, authorize("admin", "publisher"), deleteBootcamp);

module.exports = router;
