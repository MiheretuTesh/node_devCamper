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

//models
const Bootcamp = require("../models/Bootcamp");

//middlewares
const advancedResult = require("../middleware/advancedResults");
const { protect } = require("../middleware/auth");

const router = express.Router();

//Re-route into other  resource routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router.route("/:id/photo").put(bootcampPhotoUpload);
router
  .route("/")
  .get(advancedResult(Bootcamp, "courses"), getBootcamps)
  .post(protect, createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, updateBootcamp)
  .delete(protect, deleteBootcamp);

module.exports = router;
