const path = require('path');
const express = require('express');
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});
const morgan = require("morgan");
const colors = require('colors');
const fileUpload = require('express-fileupload');
const errorHandler = require('./middleware/error');
const connectDB = require("./db");
// dotenv.config();

//connect to database
connectDB();


// Rout Files
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');


const app = express();

//body pareser
app.use(express.json());

if(process.env.NODE_ENV !== 'DEVELOPMENRT'){
  app.use(morgan('dev'));
}

//File upload middleware

app.use(fileUpload());

// set static folder

app.use(express.static(path.join(__dirname, 'public')));

//Mount routers

app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);
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