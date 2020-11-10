const ClientService = require('../application/client-service');

const ClientController = {
  clientController: {
    clientFunctions: {
      getBalance: async function (arguments  , callback ) {
        try {
          const client  =  await ClientService.consultWallet(arguments.document.$value,arguments.phone.$value);
          return {
            success:true,
            balance:client.balance.toFixed(2)
          };
        } catch (error) {
          callback({
            Fault: {
              success:false,
              error: error.message ,
              statusCode: error.code? error.code : 500
            }
          })
        }
      },
      payWallet: async function (arguments  , callback ) {
        try {
          const client  =  await ClientService.payWallet(arguments.document.$value,arguments.phone.$value,parseFloat(arguments.amount.$value));
          return {
            success:true
          };
        } catch (error) {
          callback({
            Fault: {
              success:false,
              error: error.message ,
              statusCode: error.code? error.code : 500
            }
          })
        }
      },
      registerClient: async function (arguments , callback ) {
        try {
          const client  =  await ClientService.createClient(arguments.document.$value,arguments.name.$value,
                                                              arguments.lastname.$value,arguments.email.$value,arguments.phone.$value);
          return {
            success:true
          };
        } catch (error) {
          callback({
            Fault: {
              success:false,
              error: error.message ,
              statusCode: error.code? error.code : 500
            }
          })
        }
      }
    },
  },
};

module.exports ={
  ClientController
}
