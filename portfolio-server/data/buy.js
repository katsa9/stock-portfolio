'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /buy
 */
module.exports = {
    /**
     * summary: Specifies a stock ticker and a number of shares to purchase
     * description: 
     * parameters: ticker, amount
     * produces: application/json, text/json
     * responses: 200
     * operationId: portfolio-buy
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/buy',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
