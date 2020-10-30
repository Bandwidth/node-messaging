# Getting started

## Developer Docs
* [Bandwidth API Developer Docs](https://dev.bandwidth.com)

## Other Node SDKs
* Numbers: https://github.com/Bandwidth/node-numbers
* Voice: https://github.com/Bandwidth/node-voice

## Installation

```bash
npm install @bandwidth/messaging
```

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const BandwidthMessaging = require('@bandwidth/messaging');

// Configuration parameters and credentials
BandwidthMessaging.Configuration.basicAuthUserName = "apitoken"; // The username to use with basic authentication
BandwidthMessaging.Configuration.basicAuthPassword = "apisecret"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [APIController](#api_controller)

## <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed from the API Client.

```javascript
var controller = BandwidthMessaging.APIController;
```

### <a name="create_message"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.createMessage") createMessage

> createMessage


```javascript
function createMessage(userId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = 'userId';
    var body = new BandwidthMessaging.MessageRequest({"key":"value"});

    controller.createMessage(userId, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | 400 Request is malformed or invalid |
| 401 | 401 The specified user does not have access to the account |
| 403 | 403 The user does not have access to this API |
| 404 | 404 Path not found |
| 415 | 415 The content-type of the request is incorrect |
| 429 | 429 The rate limit has been reached |




### <a name="list_media"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.listMedia") listMedia

> listMedia


```javascript
function listMedia(userId, continuationToken, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |
| continuationToken |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = 'userId';
    var continuationToken = 'Continuation-Token';

    controller.listMedia(userId, continuationToken, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | 400 Request is malformed or invalid |
| 401 | 401 The specified user does not have access to the account |
| 403 | 403 The user does not have access to this API |
| 404 | 404 Path not found |
| 415 | 415 The content-type of the request is incorrect |
| 429 | 429 The rate limit has been reached |




### <a name="get_media"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.getMedia") getMedia

> getMedia


```javascript
function getMedia(userId, mediaId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |
| mediaId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = 'userId';
    var mediaId = 'mediaId';

    controller.getMedia(userId, mediaId, function(error, response, context) {

    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | 400 Request is malformed or invalid |
| 401 | 401 The specified user does not have access to the account |
| 403 | 403 The user does not have access to this API |
| 404 | 404 Path not found |
| 415 | 415 The content-type of the request is incorrect |
| 429 | 429 The rate limit has been reached |




### <a name="upload_media"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.uploadMedia") uploadMedia

> uploadMedia


```javascript
function uploadMedia(userId, mediaId, contentLength, body, contentType, cacheControl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |
| mediaId |  ``` Required ```  | TODO: Add a parameter description |
| contentLength |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |
| contentType |  ``` Optional ```  | TODO: Add a parameter description |
| cacheControl |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = 'userId';
    var mediaId = 'mediaId';
    var contentLength = 217;
    var body = 'body';
    var contentType = 'Content-Type';
    var cacheControl = 'Cache-Control';

    controller.uploadMedia(userId, mediaId, contentLength, body, contentType, cacheControl, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | 400 Request is malformed or invalid |
| 401 | 401 The specified user does not have access to the account |
| 403 | 403 The user does not have access to this API |
| 404 | 404 Path not found |
| 415 | 415 The content-type of the request is incorrect |
| 429 | 429 The rate limit has been reached |




### <a name="delete_media"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.deleteMedia") deleteMedia

> deleteMedia


```javascript
function deleteMedia(userId, mediaId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |
| mediaId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = 'userId';
    var mediaId = 'mediaId';

    controller.deleteMedia(userId, mediaId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | 400 Request is malformed or invalid |
| 401 | 401 The specified user does not have access to the account |
| 403 | 403 The user does not have access to this API |
| 404 | 404 Path not found |
| 415 | 415 The content-type of the request is incorrect |
| 429 | 429 The rate limit has been reached |




[Back to List of Controllers](#list_of_controllers)




