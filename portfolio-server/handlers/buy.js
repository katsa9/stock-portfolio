'use strict';
var dataProvider = require('../data/buy.js');
const fetch = require('node-fetch');
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

        let status = 200, message;
        global.credit = {
            value: 3434555
        }
        let credit = global.credit;
        let toPay = 0;  
        let shareCountToBuy = req.query.amount;
        let ticker = req.query.ticker;

        if(credit === undefined || credit === 0) {
            status = 400;
            message = "You need to add credit to your account before you can buy shares.";
            res.status(status).send(message);
        } 

        let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=5IO11U7YDDNXHR1J`;
        fetch(url)
        .then(res => res.json())
        .then(json => {
            let obj = Object.values(json);
            let shareP = Object.values(obj[0])[4]
            toPay = shareP * shareCountToBuy;
            if(toPay > credit.value) {
                status = 400;
                message = "You have insufficent credit to buy the selected amount of shares.";
            } else {
                var provider = dataProvider['put']['200'];
                var data = provider(req, toPay, function (err, data) {
                    if (err) {
                        next(err);
                        return;
                    }
                });
                res.json(data);
            }
            res.status(status).send(message);
        });

    }
};
