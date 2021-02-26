const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Loading schemas
const User = require("../models/UserSchema");
const Requested = require("../models/RequestedSchema");
const Todo = require("../models/TodoSchema");
const Inprogress = require("../models/InprogressSchema");
const Done = require("../models/DoneSchema");
const zoom=require("../zoom");
function checkName(name) {
    const temp=name.split('@');
    if(temp[0]=="Zoom")
    {
        return true;
    }
    return false;
}

// Endpoints to populate db
router.post("/dashboard/requested", (req,res) => {
    const newTask = new Requested({
        tasklist:req.body.name
    });
    newTask.save().then(res.json(req.body.name)).catch(err => console.log(err));
});

router.post("/dashboard/todo", (req,res) => {
    const newTask = new Todo({
        tasklist:req.body.name
    });
    newTask.save().then(res.json(req.body.name)).catch(err => console.log(err));
});

router.post("/dashboard/inprogress", (req,res) => {
    const newTask = new Inprogress({
        tasklist:req.body.name
    });
    newTask.save().then(res.json(req.body.name)).catch(err => console.log(err));
    if(checkName(req.body.name))
    {
        const temp=req.body.name; // specify data format = YYYY-MM-DDTHH:MM:SSZ
        console.log(temp);
        const format=temp.split('@');
        zoom.StartZoomMeeting(format[1],format[2]);
    }
});

router.post("/dashboard/done", (req,res) => {
    const newTask = new Done({
        tasklist:req.body.name
    });
    newTask.save().then(res.json(req.body.name)).catch(err => console.log(err));
});

module.exports=router;