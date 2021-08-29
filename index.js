const express = require('express');
const dotenv = require('dotenv');
const morgan = require("morgan");
dotenv.config();

const app = express();

if (process.env.NODE_ENV == "DEVELOPMENT") {
    app.use(morgan("dev"));
  }

const port = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`sever is running on port ${port}`);
});