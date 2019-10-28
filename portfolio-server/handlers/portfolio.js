'use strict';
var dataProvider = require('../data/portfolio.js');
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
     */
    get: function portfolio_get(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var message = 'it sent portfolio';
        var provider = dataProvider['get']['200'];
        var data = provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
        });
        res.json(data);
        res.status(status).send(message);
    }
};
