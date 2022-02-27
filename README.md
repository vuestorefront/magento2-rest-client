# Magento2 REST client


### Stay connected

![GitHub Repo stars](https://img.shields.io/github/stars/vuestorefront/vue-storefront?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/vuestorefront?style=social)
![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCkm1F3Cglty3CE1QwKQUhhg?style=social)
[![Discord](https://img.shields.io/discord/770285988244750366?label=join%20discord&logo=Discord&logoColor=white)](https://discord.vuestorefront.io)

This Node.js library enables JavaScript applications to communicate with Magento2 sites using their REST API.
This module based on the magento2-rest-client module created by Marko Novak (2016).

This module is used by the [Vue Storefront - first Progressive Web App for eCommerce](https://github.com/DivanteLtd/vue-storefront).

**NOTE: the library is not finished yet! Only a subset of Magento2 API is currently implemented.**


## Installation

The library can be installed using the Npm package manager:

```
    npm install --save github:DivanteLtd/magento2-rest-client
```

## Usage

The code sample below shows the usage of the library:

```javascript
    var Magento2Client = require('magento2-rest-client').Magento2Client;

    var options = {
          'url': 'http://www.test.com/index.php/rest',
          'consumerKey': '<OAuth 1.0a consumer key>',
          'consumerSecret': '<OAuth 1.0a consumer secret>',
          'accessToken': '<OAuth 1.0a access token>',
          'accessTokenSecret': '<OAuth 1.0a access token secret>'
    };
    var client = Magento2Client(options);
    client.categories.list()
        .then(function (categories) {
            assert.equal(categories.parentId, 1);
        })
```

You can extend the API by adding Your own modules or adding methods to the existing modules!
```javascript
    var Magento2Client = require('magento2-rest-client').Magento2Client;

    var options = {
          'url': 'http://www.test.com/index.php/rest',
          'consumerKey': '<OAuth 1.0a consumer key>',
          'consumerSecret': '<OAuth 1.0a consumer secret>',
          'accessToken': '<OAuth 1.0a access token>',
          'accessTokenSecret': '<OAuth 1.0a access token secret>'
    };
    var client = Magento2Client(options);

    client.addMethods('categories', function (restClient) {
            var module = {};
            module.listEx = function () {
                return restClient.get('/categories');
            }
            return module;
        }
    )

    client.addMethods('newModule', function (restClient) {
            var module = {};
            module.newMethod = function () {
                return restClient.post('/custom_magento_api_endpoint');
            }
            return module;
        }
    )

    client.categories.listEx()
        .then(function (categories) {
            assert.equal(categories.parentId, 1);
        })
    client.newModule.newMethod()
        .then(function (resultJson) {
        })
```


## Contributing

### usefull resources

Magento API with Swagger: https://devdocs.magento.com/swagger/

Entry Page of REST API Documentation of Magento: https://devdocs.magento.com/guides/v2.3/rest/bk-rest.html
filter response: https://devdocs.magento.com/guides/v2.3/rest/retrieve-filtered-responses.html

## Credit

This Repository is an independent fork of https://github.com/nouvak/magento2-rest-client created by Marko Novak.
