// common js
//this is the connection to mongodb file.

const mongoose = require('mongoose');

require('dotenv').config();
async function connectDB(){
    await mongoose.connect(process.env.MONGODBATLAS_URI);
    console.log("Connected to MongoDB");
}

module.exports = {connectDB, mongoose};