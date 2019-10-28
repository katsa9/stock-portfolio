'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /credit
 */
module.exports = {
    /**
     * summary: Returns the amount of credit the user has.
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: portfolio_credit
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/credit',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
