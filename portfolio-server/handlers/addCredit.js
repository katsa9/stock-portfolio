'use strict';
var dataProvider = require('../data/addCredit.js');
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
     */
    put: function portfolio-add-credit(req, res, next) {
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
