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
    put: function portfolio_sell(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200, message;
        var portfolio = global.portfolio;
        var sharePrice = 0;  //get share price from api

        //check if user has shares greater or equal to desired sell amount for specific share
        var provider = dataProvider['put']['200'];
        var data = provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
        });
        res.status(status).send(message);
    }
};
