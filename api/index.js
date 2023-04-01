const express = require('express'); 
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const port = process.env.PORT || 9000;


// middleware
app.use(cors());
app.use(express.json());


// Connecting MongoDB by Mongoose 
mongoose.connect(process.env.MONGO_URL).then(console.log('Connected To MongoDB')).catch((err)=> {
    console.log(err)
});



app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);




app.listen(port, ()=> {
    console.log(`Backend is running on port ${port}`)
})

