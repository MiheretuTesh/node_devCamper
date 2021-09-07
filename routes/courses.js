const express = require("express");
const {
  getCourses
} = require("../controllers/bootcamps");
const router = express.Router();

router.route('/').get(getCourses);