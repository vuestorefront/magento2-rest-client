var util = require('util');
module.exports = function (restClient) {
    var module = {};
    
    module.create = function (customerData) {
        return restClient.post('/customers', customerData);
    }

    module.token = function (loginData) {
        
        return restClient.consumerToken(loginData)
    }    

    module.me = function (requestToken) {
        
        return restClient.get('/customers/me', requestToken)
    }        
    module.orderHistory = function (requestToken) {
        
        return restClient.get('/customers/me', requestToken).then((result) => {
            var query = 'searchCriteria=&searchCriteria[filterGroups][0][filters][0][field]=customer_id&' +
            'searchCriteria[filterGroups][0][filters][0][value]=' + result.id + '&' +
            'searchCriteria[filterGroups][0][filters][0][condition_type]=eq&searchCriteria[pageSize]=20&' +
            'searchCriteria[sortOrders][0][field]=entity_id&searchCriteria[sortOrders][0][direction]=desc';
            var endpointUrl = util.format('/orders?%s', query);
            return restClient.get(endpointUrl);            
        })
    }        
    module.resetPassword = function (emailData) {
        
        return restClient.put('/customers/password', emailData)
    }

    module.resetPasswordUsingResetToken = function (resetPasswordData) {

        return restClient.post('/customers/resetPassword', resetPasswordData)
    }

    module.update = function (userData) {
        return restClient.put('/customers/me', userData.body, userData.token)
    }

    module.changePassword = function (passwordData) {
        return restClient.put('/customers/me/password', passwordData.body, passwordData.token)
    }
    
    return module;
}
