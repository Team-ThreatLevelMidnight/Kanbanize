const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema=new Schema({
    tasklist: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model("todo", TodoSchema);