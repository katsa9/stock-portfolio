'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /addCredit
 */
module.exports = {
    /**
     * summary: Specifies the amount of money to add to the user&#39;s credit balance
     * description: 
     * parameters: amount
     * produces: application/json, text/json
     * responses: 200
     * operationId: portfolio_add_credit
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/addCredit',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
