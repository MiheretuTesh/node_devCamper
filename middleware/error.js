const ErroraHandler = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {

    let error = { ...err };

    error.message = err.message;

    console.log(err.stack.red);

    console.log(err);

    //Mongoose bad ObjectId
    if(err.name == "CasstError"){
        const message = `Bootcamp with ID ${err.value} not found`;
        error = new ErrorHandler(message, 404);
    }

    // Mongoose duplicate key error handlling

    if(err.code==11000){
        const message = 'Duplicate field value entered';
        error = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode || 500).json({ 
        status: false,
        error: err.message || "Server Error"
    })
}

module.exports = errorHandler;