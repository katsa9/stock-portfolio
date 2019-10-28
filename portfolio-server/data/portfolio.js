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
                // var portfolio = global.portfolio;

                var portfolio = {
                    goog: {
                        ticker: "goog",
                        shareCount: 3,
                        totalValue: 0
                    },
                    msft: {
                        ticker: "msft",
                        shareCount: 4,
                        totalValue: 0
                    }
                }
                return Object.values(portfolio);
        }
    }
};
