const express = require('express'); 
const cors = require('cors');
const app = express();
const mongoose = require('mongoose')
require('dotenv').config();
const port = process.env.PORT || 9000;
const { MongoClient, ServerApiVersion } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());



mongoose.connect(process.env.MONGO_URL).then(console.log('Connected To MongoDB')).catch((err)=> {
    console.log(err)
});

app.use('/', (req, res)=> {
    console.log('Hey this is main Url')
})



app.listen(port, ()=> {
    console.log(`Backend is running on port ${port}`)
})







const uri = "mongodb+srv://rakibulnayon:dVmb3wJaAfwC0ciX@cluster0.tq9s1nj.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});