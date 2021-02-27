const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");
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
app.use(cors()); 

app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

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
