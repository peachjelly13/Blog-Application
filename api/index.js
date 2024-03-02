const express = require('express')
require('dotenv').config();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User.js');
const app = express();
app.use(cors());
app.use(express.json());
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
            password
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



app.listen(4000);

