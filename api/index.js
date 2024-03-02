const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const {User} = require('./models/User');
const app = express();
app.use(cors());
app.use(express.json());
const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    await User.create({username,password});
    res.json({requestData:{username,password}});
});

app.listen(4000);

