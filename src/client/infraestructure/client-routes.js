const Express = require('express');
const {ClientController} = require('../../client/infraestructure/client-controller');
const {ClientWsdl} = require('../../client/domain/client-wsdl')
const {soap} = require('express-soap');
const ClientRoutes = Express.Router();

//clientRoutes.use('/',clientController.registerClient);
//clientRoutes.use('/payWallet',clientController.payWallet);
ClientRoutes.use("/get-balance", soap({services:ClientController,wsdl:
    ClientWsdl}));

module.exports = ClientRoutes;