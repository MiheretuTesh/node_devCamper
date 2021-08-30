const Bootcamp = require("../models/Bootcamp");

//@desc GET all bootcamps
//@route /api/v1/bootcamps
//@access public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res.status(200).json({
      status: true,
      count: bootcamp.length,
      bootcamp,
    });
  } catch (error) {
    console.log(error);
  }
};

//@desc GET  bootcamps by id
//@route /api/v1/bootcamps/:id
//@access public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({
        status: false,
        message: "Invalid ID",
      });
    }
    res.status(200).json({
      status: true,
      bootcamp,
    });
  } catch (error) {
    next(error);
  }
};

//@desc POST bootcamp
//@route /api/v1/bootcamps
//@access public
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({
      status: true,
      bootcamp,
    });
  } catch (err) {
    console.log(err);
  }
};

//@desc UPDATE bootcamp by id
//@route /api/v1/bootcamps/:id
//@access public
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res.status(400).json({
        status: false,
        message: "Bootcamp not found",
      });
    }
    res.status(200).json({
      status: true,
      bootcamp,
    });
  } catch (error) {
    console.log(error);
  }
};

//@desc DELETE bootcamp by id
//@route /api/v1/bootcamps/:id
//@access public
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcomp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcomp) {
      return res
        .status(400)
        .json({ status: false, message: "Bootcamp with this ID not found" });
    }
    res.status(200).json({ status: true, bootcomp: null });
  } catch (error) {
    console.log(error);
  }
};
