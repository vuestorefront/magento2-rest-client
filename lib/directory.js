var util = require('util');

module.exports = function (restClient) {
    var module = {};

    module.countries = function () {
        var endpointUrl = util.format('/directory/countries', query);
        return restClient.get(endpointUrl);
    }
    
    module.countries = function () {
        var endpointUrl = util.format('/directory/currency', query);
        return restClient.get(endpointUrl);
    }
    return module;
}
