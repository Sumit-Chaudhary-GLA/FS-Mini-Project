const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');  // Import jsonwebtoken
const customersModel = require("./models/customers");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/customers");

const SECRET_KEY = 'your_secret_key';  // Ideally, store this in an environment variable

// Login Route
app.post('/login', (req, res) => {
    const { userName, password } = req.body;
    
    customersModel.findOne({ userName: userName })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    // Generate a JWT token on successful login
                    const token = jwt.sign({ userId: user._id, userName: user.userName }, SECRET_KEY, { expiresIn: '1h' });

                    // Send the token in the response
                    res.json({ status: "Success", token });
                } else {
                    res.json("Incorrect Password !");
                }
            } else {
                res.json("Can not find user");
            }
        })
        .catch(err => res.json({ error: err.message }));
});

// Register Route
app.post('/register', (req, res) => {
    customersModel.create(req.body)
        .then(customer => res.json(customer))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
