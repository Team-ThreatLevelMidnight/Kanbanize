const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestedSchema=new Schema({
    tasklist: {
      type: String
    }
});

module.exports = mongoose.model("requested", RequestedSchema);