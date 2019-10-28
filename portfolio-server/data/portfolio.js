'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /portfolio
 */
module.exports = {
    /**
     * summary: Retrieves the user&#39;s current stock portfolio
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     * operationId: portfolio_get
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/portfolio',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
