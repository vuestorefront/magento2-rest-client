
module.exports = function (restClient) {
    var module = {};

    /**
     *
     * @see https://devdocs.magento.com/guides/v2.3/rest/retrieve-filtered-responses.html
     * @see salesOrderRepositoryV1: GET /V1/orders/{id}
     *
     * @param oderId
     * @returns {Promise<{increment_id: String}>}
     */
    module.incrementIdById = function (oderId) {
        return restClient.get('/orders/' + oderId + '?fields=increment_id');
    };

    module.pending = function () {
        return restClient.get('/orders/pending');
    };
    module.searchOrderByOrderId = function (orderId) {
        return restClient.get('/orders/?searchCriteria[filter_groups][0][filters][0][field]=entity_id&' +
            'searchCriteria[filter_groups][0][filters][0][value]='+orderId+'&' +
            'searchCriteria[filter_groups][0][filters][0][condition_type]=eq');
    };
    module.searchOrderByIncrementId = function (increment_id) {
        return restClient.get('/orders/?searchCriteria[filter_groups][0][filters][0][field]=increment_id&' +
            'searchCriteria[filter_groups][0][filters][0][value]='+increment_id+'&' +
            'searchCriteria[filter_groups][0][filters][0][condition_type]=eq');
    };


    return module;
}
