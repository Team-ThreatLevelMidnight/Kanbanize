const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InprogressSchema=new Schema({
    tasklist: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model("inprogress", InprogressSchema);