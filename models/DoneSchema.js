const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoneSchema=new Schema({
    tasklist: {
      type: task
    }
});

module.exports = mongoose.model("task", DoneSchema);