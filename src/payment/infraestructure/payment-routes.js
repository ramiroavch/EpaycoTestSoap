const express = require("express");
const paymentController = require('./payment-controller');
const paymentRoutes = express.Router();

//paymentRoutes.post('/',paymentController.makePayment);

//paymentRoutes.post('/auth',paymentController.authPayment);

module.exports = paymentRoutes;