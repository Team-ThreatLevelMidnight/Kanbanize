const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema=new Schema({
    tasklist: {
      type: String
    }
});

module.exports = mongoose.model("task", TodoSchema);