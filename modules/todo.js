const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({

    title : {
    type : String,
    required : true,
    maxlength : 50
   },
   description : {
    type  : String,
    required : true,
    maxlength: 50
   },
   createdat : {
    type: Date,
    default : Date.now,
   },
   updatedat : {
   type : Date,
    default : Date.now
   }
})

module.exports = mongoose.model("TODO",todoschema);