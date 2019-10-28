'use strict';
var dataProvider = require('../data/buy.js');
/**
 * Operations on /buy
 */
module.exports = {
    /**
     * summary: Specifies a stock ticker and a number of shares to purchase
     * description: 
     * parameters: ticker, amount
     * produces: application/json, text/json
     * responses: 200,400
     */
    put: function portfolio_buy (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */

        var status = 200, message;
        var credit = global.credit;
        var toPay = 0;  //get share value from api

        //add check for sufficient credit for price to pay

        if (credit > 0) {
            var provider = dataProvider['put']['200'];
            var data = provider(req, res, function (err, data) {
                if (err) {
                    next(err);
                    return;
                }
            });
            res.json(data);
        } else {
            status = 400;
            message = "You need to add credit to your account before you can buy shares.";
        }
        res.status(status).send(message);
    }
};
