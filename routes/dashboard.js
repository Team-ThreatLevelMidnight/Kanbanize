const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const zoom=require("../zoom");

// Loading schemas
const User = require("../models/UserSchema");
const Requested = require("../models/RequestedSchema");
const Todo = require("../models/TodoSchema");
const Inprogress = require("../models/InprogressSchema");
const Done = require("../models/DoneSchema");

function checkName(name) {
    temp=name.split('@');
    if(temp[0]=="Zoom")
    {
        return True;
    }
    return False;
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
        temp=(req.body.name).split('@'); // specify data format = YYYY-MM-DDTHH:MM:SSZ
        zoom.StartZoomMeeting(temp[1],temp[2],temp[3]);
    }
});

router.post("/dashboard/done", (req,res) => {
    const newTask = new Done({
        tasklist:req.body.name
    });
    newTask.save().then(res.json(req.body.name)).catch(err => console.log(err));
});

module.exports=router;