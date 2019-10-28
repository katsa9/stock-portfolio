'use strict';
var dataProvider = require('../data/sell.js');
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
     */
    put: function portfolio-sell(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
