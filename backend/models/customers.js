const mongoose = require('mongoose');

const CustomersSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true }
});

const CustomersModel = mongoose.model("registers", CustomersSchema); // Mongoose automatically pluralizes and converts the name of the model (in this case, "register") into lowercase and creates a collection named "resisters"

module.exports = CustomersModel;
