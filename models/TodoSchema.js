const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema=new Schema({
    tasklist: {
      type: task
    }
});

module.exports = mongoose.model("task", TodoSchema);