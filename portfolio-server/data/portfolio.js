'use strict';
var Mockgen = require('./mockgen.js');
const fetch = require('node-fetch');
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
            var assets = {
                MSFT: {
                    ticker: "MSFT",
                    totalValue: 658870,
                    shareCount: 3
                },
                GOOG: {
                    ticker: "GOOG",
                    shareCount: 7,
                    totalValue: 800000
                }
            };
            if (assets === undefined || assets === null) {
                return {
                    ticker: "You have no shares",
                    totalValue: 0,
                    shareCount: 0
                }
            } else {
                return assets;
                // let updated = Object.values(assets).map(item => module.exports.updateShareValue(item, module.exports.onSharePriceReceived))
                // global.portfolio = updated;
                // return updated;
            }
            // var portfolio = {
            //     goog: {
            //         ticker: "goog",
            //         shareCount: 3,
            //         totalValue: 0
            //     },
            //     msft: {
            //         ticker: "msft",
            //         shareCount: 4,
            //         totalValue: 0
            //     }
            // }
            // return Object.values(portfolio);
        }

    }
    // ,
    // onSharePriceReceived: function(item, shareCost) {
    //     let updated = {
    //         ...item,
    //         [item.totalValue]: shareCost * item.shareCount
    //     }
    //     return updated;
    // },

    // updateShareValue: function(item, callback){
    //     console.log("item", item);
    //     let ticker = item.ticker;
    //     let url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=5IO11U7YDDNXHR1J`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(json => {
    //         let shareCost = json.price
    //         console.log("SHARE COST", shareCost);
    //         callback(item, shareCost);
    //     });
    // }

};
