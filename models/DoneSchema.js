const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoneSchema=new Schema({
    tasklist: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model("done", DoneSchema);