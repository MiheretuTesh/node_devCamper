//@desc GET all bootcamps
//@route /api/v1/bootcamps
//@access public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "show all bootcamps",
  });
};

//@desc GET  bootcamps by id
//@route /api/v1/bootcamps/:id
//@access public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `show bootcamp ${req.params.id}`,
  });
};

//@desc POST bootcamp
//@route /api/v1/bootcamps
//@access public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Create a new Bootcamp",
  });
};


//@desc UPDATE bootcamp by id
//@route /api/v1/bootcamps/:id
//@access public
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Update bootcamp with ${req.params.id} ID`,
  });
};


//@desc DELETE bootcamp by id
//@route /api/v1/bootcamps/:id
//@access public
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    status: true,
    message: `Delete bootcamp with ${req.params.id}`,
  });
};
