const Bootcamp = require("../models/Bootcamp");
const ErrorResponse = require("../utils/errorResponse");
const color = require('colors')
const asyncHandler = require('../middleware/asyncHandler');

//@desc GET all bootcamps
//@route /api/v1/bootcamps
//@access public

exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({
      status: true,
      count: bootcamp.length,
      bootcamp,
    });
});

//@desc GET  bootcamps by id
//@route /api/v1/bootcamps/:id
//@access public
exports.getBootcamp = asyncHandler( async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp with ID ${req.params.id} not found`, 404)
      );
    }
    res.status(200).json({
      status: true,
      bootcamp,
    });
});

//@desc POST bootcamp
//@route /api/v1/bootcamps
//@access public
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({
      status: true,
      bootcamp,
    });
  } catch (err) {
    next(err);
  }
});

//@desc UPDATE bootcamp by id
//@route /api/v1/bootcamps/:id
//@access public
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp with ID ${req.params.id} not found`, 404)
      );
    }
    res.status(200).json({
      status: true,
      bootcamp,
    });
  } catch (error) {
    next(err);
  }
});

//@desc DELETE bootcamp by id
//@route /api/v1/bootcamps/:id
//@access public
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  try {
    const bootcomp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcomp) {
      return next(
        new ErrorResponse(`Bootcamp with ID ${req.params.id} not found`, 404)
      );
    }
    res.status(200).json({ status: true, bootcomp: null });
  } catch (error) {
    next(err);
  }
});

//@desc GET bootcamps within a radius
//@route /api/v1/bootcamps/radius/:zipcode/:distance
//@access private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  try {
    const bootcomp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcomp) {
      return next(
        new ErrorResponse(`Bootcamp with ID ${req.params.id} not found`, 404)
      );
    }
    res.status(200).json({ status: true, bootcomp: null });
  } catch (error) {
    next(err);
  }
});

