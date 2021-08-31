const ErroraHandler = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {

    let error = { ...err };

    error.message = err.message;

    console.log(err.stack.red);

    //Mongoose bad ObjectId
    if(err.name == "CasstError"){
        const message = `Bootcamp with ID ${err.value} not found`;
        error = new ErrorHandler(message, 404);
    }


    res.status(err.statusCode || 500).json({ 
        status: false,
        error: err.message || "Server Error"
    })
}

module.exports = errorHandler;