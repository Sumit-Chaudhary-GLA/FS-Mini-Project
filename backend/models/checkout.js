const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    eventType: String,
    eventDate: Date,
    location: String,
    hoursRequired: Number,
    specialInstructions: String,
    // cardDetails: {
    //   cardholderName: String,
    //   cardNumber: String,
    //   cardType: String,
    //   expiryDate: Date,
    //   cvv: String,
    // },
    // promoCode: String,
    total: Number,
  });

  const Checkout = mongoose.model("Checkout", checkoutSchema);

  module.exports = Checkout;