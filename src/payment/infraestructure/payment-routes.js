const express = require("express");
const {PaymentController} = require('../infraestructure/payment-controller');
const PaymentRoutes = express.Router();
const {PaymentWsdl} = require('../domain/payment-wsdl');
const {soap} = require('express-soap');

PaymentRoutes.use('/',soap({services:PaymentController,wsdl:PaymentWsdl}));

PaymentRoutes.use('/auth',soap({services:PaymentController,wsdl:PaymentWsdl}));

module.exports = PaymentRoutes;