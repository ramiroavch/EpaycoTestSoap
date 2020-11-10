const PaymentService = require('../application/payment-service');

const PaymentController = {
  paymentController: {
    paymentFunctions: {
      makePayment: async function (arguments  , callback ) {
        try {
          const payment  =  await PaymentService.makePayment(arguments.document.$value,arguments.amount.$value,
                                                            getRandomdigits(6));
          return {
            success:true,
          };
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
      authPayment: async function (arguments  , callback ) {
        try {
          const payment  =  await PaymentService.authPayment(arguments.document.$value,arguments.token.$value);
          return {
            success:true,
          };
        } catch (error) {
          callback({
            Fault: {
              success:false,
              error: error.message ,
              statusCode: error.statusCode? error.statusCode : 500
            }
          })
        }
      }
    },
  },
};

const getRandomdigits= (length)=> {
    var randomChars = '01234567899876543210';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

module.exports ={
    PaymentController
}
