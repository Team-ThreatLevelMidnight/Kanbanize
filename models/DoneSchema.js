const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoneSchema=new Schema({
    tasklist: {
      type: String
    }
});

module.exports = mongoose.model("task", DoneSchema);