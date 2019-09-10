var util = require('util');

module.exports = function(restClient) {
  var module = {};

  module.list = function(searchCriteria) {
    var query = 'searchCriteria=' + searchCriteria;
    var endpointUrl = util.format('/transactions?%s', query);
    return restClient.get(endpointUrl);
  };

  module.get = function(transactionId) {
    return restClient.get(util.format('/transactions/%id', transactionId));
  };

  return module;
};
