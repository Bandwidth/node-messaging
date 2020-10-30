# Getting started

Bandwidth's HTTP Messaging platform

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Messaging-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Messaging-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `MessagingLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Messaging-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Messaging-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Messaging-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Messaging-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  MessagingController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=MessagingController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [APIController](#api_controller)

## <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed from the API Client.

```javascript
var controller = lib.APIController;
```

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

    TestHelper.getFileContents('url', function(data) {
        controller.getMedia(userId, mediaId, function(error, response, context) {

        });
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
| contentType |  ``` Optional ```  ``` DefaultValue ```  | TODO: Add a parameter description |
| cacheControl |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = 'userId';
    var mediaId = 'mediaId';
    var contentLength = 180;
    var body = data;
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
    var body = new MessageRequest({"key":"value"});

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




[Back to List of Controllers](#list_of_controllers)



