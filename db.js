const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB, {
    // useCreateIndex: true,
    // useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoBD connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
