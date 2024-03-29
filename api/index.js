const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcryptjs');
const app = express();
let salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const secret = "abbsbsbhjsskksjksksk";


app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
const corsOptions = {
  origin: '*', // or specify your frontend URL if it's hosted elsewhere
  methods: ['GET', 'POST'], // specify the methods your frontend intends to use
  allowedHeaders: ['Content-Type'], // specify the headers your frontend intends to use
};

app.options('*', cors(corsOptions)); // enable preflight for all routes

const URI = process.env.MONGO_URI;
mongoose.set('strictQuery', false);



mongoose.connect(URI,)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


  app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const UserDocument = await User.create({
            username,
            password:bcrypt.hashSync(password,salt)  //salt here is used to protect the password
        }); 
        res.json(UserDocument);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.username) {
            // Duplicate key error for the username field
            res.status(400).json({ error: 'Username is already taken' });
        } else {
            console.error('Error registering user:', error.message);
            res.status(500).json({ error: 'Failed to register user' });
        }
    }
});

app.post('/login',async(req,res)=>{
  const{username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password,userDoc.password);
  if(passOk){
    jwt.sign({username,id:userDoc._id},secret,{},(err,token)=>{
      if(err){
        throw err;
      }
      res.cookie('token',token).json('ok');

    })
  }
  else{
    res.status(400).json('wrong credentials')
  }
})
app.listen(4000);

