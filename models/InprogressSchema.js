const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InprogressSchema=new Schema({
    tasklist: {
      type: task
    }
});

module.exports = mongoose.model("task", InprogressSchema);