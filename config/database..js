const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = async (params) => {
    try {
  await  mongoose.connect(process.env.MONGOURL)
  console.log("connection successful with db")
    } catch (error) {
      console.log(error)    
      process.exit(1);
    }
}
module.exports = dbconnect;