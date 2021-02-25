const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InprogressSchema=new Schema({
    tasklist: {
      type: String
    }
});

module.exports = mongoose.model("task", InprogressSchema);