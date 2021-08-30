const express = require('express');
const dotenv = require('dotenv');
const morgan = require("morgan");
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require("./db");
dotenv.config();

//connect to database
connectDB();


// Rout Files
const bootcamps = require('./routes/bootcamps');

const app = express();

//body pareser
app.use(express.json());

if(process.env.NODE_ENV !== 'DEVELOPMENRT'){
  app.use(morgan('dev'));
}

//Mount routers

app.use('/api/v1/bootcamps', bootcamps);

// Error middleware
app.use(errorHandler);

// if (process.env.NODE_ENV == "DEVELOPMENT") {
//     app.use(morgan("dev"));
//   }

const port = process.env.PORT || 5000;

const server = app.listen(5000, () => {
    console.log(`sever is running on port ${port}`.yellow.bold);
});

// handel unhandled promise rejections to

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err}`);

  server.close(() => process.exit(1));
})