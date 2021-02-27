const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const users = require("./routes/api/users");
const dashboard = require("./routes/dashboard");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(bodyParser.json());

const dbURL =  "mongodb+srv://testdb:testdb@cluster0.ygzcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || dbURL,
    { useUnifiedTopology:true, useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888/%27);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Routes
app.use("/api/users", users);
app.use("/dashboard", dashboard);


if(process.env.NODE_ENV === 'production') {
   
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*',(req, res) => {
      res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}


const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server up and running on port ${port}`));
