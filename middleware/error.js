const ErrorResponse = require('../utils/errorResponse');
const chalk = require('chalk');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // log to console for dev
  console.log(chalk.red(err));

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const msg = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(msg, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const msg = 'Duplicate field value entered';
    error = new ErrorResponse(msg, 400);
  }

  // Mongosse validate error
  if (err.name === 'ValidationError') {
    const msg = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(msg, 400);
  }

  res
    .status(error.statusCode || 500)
    .json({ sucess: false, error: error.message || ' Server Error ' });
};

module.exports = errorHandler;