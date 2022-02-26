# Magento2 REST client

---------

# #TechForUkraine

<table>
  <tr>
    <td style="width:40%;">
       <img src="https://user-images.githubusercontent.com/1626923/155853691-d6d0a541-d3b9-40bf-b8f5-2d38303e9e49.png" />
    </td>
    <td>
      <h2><strong>Ongoing tensions on Ukrainian territory close the space for civil society.</strong></h2>
      <h3>How can you support Ukrainian civil society?</h3>
      All the help is valid, and if you are not able to help locally, by giving shelter to a fellow Ukraine, there are some ways that you can help also:
      <ul>
        <li>
          Support the Ukraine Armed forces directly by sending funding to the open special accounts.<br />
          <a href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi" target="_blank">NBU Opens Special Account to Raise Funds for Ukraine’s Armed Forces</a>
        </li>
        <li>
          Help the ICRC (Red Cross) with donations.<br />
          <a href="https://www.icrc.org/en/where-we-work/europe-central-asia/ukraine" target="_blank">Ukrainian Red Cross Society</a>
        </li>
        <li>
          Donate to the United Help Ukraine.<br />
          <a href="https://unitedhelpukraine.org/" target="_blank">United Help Ukraine</a>
        </li>
        <li>
          Donate to Voices of Children<br />
          <a href="https://voices.org.ua/en/" target="_blank">Voices of Children</a>
        </li>
    </td>
  </tr>
</table>

---------

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
