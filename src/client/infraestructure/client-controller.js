const ClientService = require('../application/client-service');

const ClientController = {
  clientController: {
    clientFunctions: {
      getBalance: async function (arguments  , callback ) {
        try {
          console.log(arguments);
          const client  =  await ClientService.consultWallet(arguments.document,arguments.phone);
          return arguments;
        } catch (error) {
          callback({
            Fault: {
              success:false,
              error: error.message ,
              statusCode: error.statusCode? error.statusCode : 500
            }
          })
        }
      },
      rechargeWallet: async function (arguments  , callback ) {
        try {
          console.log(arguments.document.$value);
          
          console.log(arguments.phone.$value);
          
          console.log(arguments.amount.$value);

          const client  =  await ClientService.payWallet(arguments.document.$value,arguments.phone.$value,arguments.amount.$value);
          console.log(client);
          console.log('Recharge wallet')
          return arguments;
        } catch (error) {
          callback({
            Fault: {
              success:false,
              error: error.message ,
              statusCode: error.statusCode? error.statusCode : 500
            }
          })
        }
      },
    },
  },
};

module.exports ={
  ClientController
}
