'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /sell
 */
module.exports = {
    /**
     * summary: Specifies a stock ticker and a number of shares to sell
     * description: 
     * parameters: ticker, amount
     * produces: application/json, text/json
     * responses: 200
     * operationId: portfolio-sell
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/sell',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
