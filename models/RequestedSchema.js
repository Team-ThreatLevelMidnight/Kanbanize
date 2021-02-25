const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestedSchema=new Schema({
    tasklist: {
      type: task
    }
});

module.exports = mongoose.model("requested", RequestedSchema);