# Getting Started with Messaging

## Getting Started

### Introduction

Bandwidth's HTTP Messaging platform

### Installation

The following section explains how to use the bandwidthLib library in a new project.

### Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

#### Fields

| Name | Description |
|  --- | --- |
| production | **Default** |
| custom | - |

### Initialize the API Client

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `baseUrl` | `string` | *Default*: `'https://www.example.com'` |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Production`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `basicAuthUserName` | `string` | The username to use with basic authentication |
| `basicAuthPassword` | `string` | The password to use with basic authentication |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.Production
  basicAuthUserName: 'BasicAuthUserName',
  basicAuthPassword: 'BasicAuthPassword',
})
```

### Authorization

This API uses `Basic Authentication`.

## Client Class Documentation

### MessagingClient

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

### Controllers

| Name | Description |
|  --- | --- |
| aPI | Provides access to ApiController |

## API Reference

### List of APIs

* [API](#api)

### API

#### List Media

listMedia

```ts
async listMedia(
  userId: string,
  continuationToken?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Media[]>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | User's account ID |
| `continuationToken` | `string` | Header, Optional | Continuation token used to retrieve subsequent media. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`Media[]`](#media)

##### Example Usage

```ts
const userId = '900000';
const continuationToken = '12345';
try {
  const { result, ...httpResponse } = await apiController.listMedia(userId, continuationToken);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | 400 Request is malformed or invalid | [`MessagingExceptionError`](#messaging-exception) |
| 401 | 401 The specified user does not have access to the account | [`MessagingExceptionError`](#messaging-exception) |
| 403 | 403 The user does not have access to this API | [`MessagingExceptionError`](#messaging-exception) |
| 404 | 404 Path not found | [`MessagingExceptionError`](#messaging-exception) |
| 415 | 415 The content-type of the request is incorrect | [`MessagingExceptionError`](#messaging-exception) |
| 429 | 429 The rate limit has been reached | [`MessagingExceptionError`](#messaging-exception) |

#### Get Media

getMedia

```ts
async getMedia(
  userId: string,
  mediaId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | User's account ID |
| `mediaId` | `string` | Template, Required | Media ID to retrieve<br>**Constraints**: *Pattern*: `.+` |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`NodeJS.ReadableStream | Blob`

##### Example Usage

```ts
const userId = '900000';
const mediaId = '0a610655-ba58';
try {
  const { result, ...httpResponse } = await apiController.getMedia(userId, mediaId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | 400 Request is malformed or invalid | [`MessagingExceptionError`](#messaging-exception) |
| 401 | 401 The specified user does not have access to the account | [`MessagingExceptionError`](#messaging-exception) |
| 403 | 403 The user does not have access to this API | [`MessagingExceptionError`](#messaging-exception) |
| 404 | 404 Path not found | [`MessagingExceptionError`](#messaging-exception) |
| 415 | 415 The content-type of the request is incorrect | [`MessagingExceptionError`](#messaging-exception) |
| 429 | 429 The rate limit has been reached | [`MessagingExceptionError`](#messaging-exception) |

#### Upload Media

uploadMedia

```ts
async uploadMedia(
  userId: string,
  mediaId: string,
  contentLength: number,
  body: FileWrapper,
  contentType?: string,
  cacheControl?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | User's account ID |
| `mediaId` | `string` | Template, Required | The user supplied custom media ID<br>**Constraints**: *Pattern*: `.+` |
| `contentLength` | `number` | Header, Required | The size of the entity-body |
| `body` | `FileWrapper` | Body, Required | - |
| `contentType` | `string` | Header, Optional | The media type of the entity-body<br>**Default**: `'application/octet-stream'` |
| `cacheControl` | `string` | Header, Optional | General-header field is used to specify directives that MUST be obeyed by all caching mechanisms along the request/response chain. |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const userId = '900000';
const mediaId = 'my-media-id';
const contentLength = 500;
const body = new FileWrapper(fs.createReadStream('dummy_file'));
const contentType = 'audio/wav';
const cacheControl = 'no-cache';
try {
  const { result, ...httpResponse } = await apiController.uploadMedia(userId, mediaId, contentLength, body, contentType, cacheControl);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | 400 Request is malformed or invalid | [`MessagingExceptionError`](#messaging-exception) |
| 401 | 401 The specified user does not have access to the account | [`MessagingExceptionError`](#messaging-exception) |
| 403 | 403 The user does not have access to this API | [`MessagingExceptionError`](#messaging-exception) |
| 404 | 404 Path not found | [`MessagingExceptionError`](#messaging-exception) |
| 415 | 415 The content-type of the request is incorrect | [`MessagingExceptionError`](#messaging-exception) |
| 429 | 429 The rate limit has been reached | [`MessagingExceptionError`](#messaging-exception) |

#### Delete Media

deleteMedia

```ts
async deleteMedia(
  userId: string,
  mediaId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | User's account ID |
| `mediaId` | `string` | Template, Required | The media ID to delete<br>**Constraints**: *Pattern*: `.+` |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

`void`

##### Example Usage

```ts
const userId = '900000';
const mediaId = 'tjdla-4562ld';
try {
  const { result, ...httpResponse } = await apiController.deleteMedia(userId, mediaId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | 400 Request is malformed or invalid | [`MessagingExceptionError`](#messaging-exception) |
| 401 | 401 The specified user does not have access to the account | [`MessagingExceptionError`](#messaging-exception) |
| 403 | 403 The user does not have access to this API | [`MessagingExceptionError`](#messaging-exception) |
| 404 | 404 Path not found | [`MessagingExceptionError`](#messaging-exception) |
| 415 | 415 The content-type of the request is incorrect | [`MessagingExceptionError`](#messaging-exception) |
| 429 | 429 The rate limit has been reached | [`MessagingExceptionError`](#messaging-exception) |

#### Get Messages

getMessages

```ts
async getMessages(
  userId: string,
  messageId?: string,
  sourceTn?: string,
  destinationTn?: string,
  messageStatus?: string,
  errorCode?: number,
  fromDateTime?: string,
  toDateTime?: string,
  pageToken?: string,
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BandwidthMessagesList>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | User's account ID |
| `messageId` | `string` | Query, Optional | The ID of the message to search for. Special characters need to be encoded using URL encoding |
| `sourceTn` | `string` | Query, Optional | The phone number that sent the message |
| `destinationTn` | `string` | Query, Optional | The phone number that received the message |
| `messageStatus` | `string` | Query, Optional | The status of the message. One of RECEIVED, QUEUED, SENDING, SENT, FAILED, DELIVERED, DLR_EXPIRED |
| `errorCode` | `number` | Query, Optional | The error code of the message |
| `fromDateTime` | `string` | Query, Optional | The start of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. |
| `toDateTime` | `string` | Query, Optional | The end of the date range to search in ISO 8601 format. Uses the message receive time. The date range to search in is currently 14 days. |
| `pageToken` | `string` | Query, Optional | A base64 encoded value used for pagination of results |
| `limit` | `number` | Query, Optional | The maximum records requested in search result. Default 100. The sum of limit and after cannot be more than 10000 |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`BandwidthMessagesList`](#bandwidth-messages-list)

##### Example Usage

```ts
const userId = '900000';
const messageId = '9e0df4ca-b18d-40d7-a59f-82fcdf5ae8e6';
const sourceTn = '%2B15554443333';
const destinationTn = '%2B15554443333';
const messageStatus = 'RECEIVED';
const errorCode = 9902;
const fromDateTime = '2016-09-14T18:20:16.000Z';
const toDateTime = '2016-09-14T18:20:16.000Z';
const pageToken = 'gdEewhcJLQRB5';
const limit = 50;
try {
  const { result, ...httpResponse } = await apiController.getMessages(userId, messageId, sourceTn, destinationTn, messageStatus, errorCode, fromDateTime, toDateTime, pageToken, limit);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | 400 Request is malformed or invalid | [`MessagingExceptionError`](#messaging-exception) |
| 401 | 401 The specified user does not have access to the account | [`MessagingExceptionError`](#messaging-exception) |
| 403 | 403 The user does not have access to this API | [`MessagingExceptionError`](#messaging-exception) |
| 404 | 404 Path not found | [`MessagingExceptionError`](#messaging-exception) |
| 415 | 415 The content-type of the request is incorrect | [`MessagingExceptionError`](#messaging-exception) |
| 429 | 429 The rate limit has been reached | [`MessagingExceptionError`](#messaging-exception) |

#### Create Message

createMessage

```ts
async createMessage(
  userId: string,
  body: MessageRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BandwidthMessage>>
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | User's account ID |
| `body` | [`MessageRequest`](#message-request) | Body, Required | - |
| `requestOptions` | `RequestOptions` | Optional | Pass additional request options. |

##### Response Type

[`BandwidthMessage`](#bandwidth-message)

##### Example Usage

```ts
const userId = '900000';
const bodyTo: string[] = ['+15554443333', '+15552223333'];
const body: MessageRequest = {
  applicationId: '93de2206-9669-4e07-948d-329f4b722ee2',
  to: bodyTo,
  from: '+15551113333',
};

try {
  const { result, ...httpResponse } = await apiController.createMessage(userId, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

##### Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | 400 Request is malformed or invalid | [`MessagingExceptionError`](#messaging-exception) |
| 401 | 401 The specified user does not have access to the account | [`MessagingExceptionError`](#messaging-exception) |
| 403 | 403 The user does not have access to this API | [`MessagingExceptionError`](#messaging-exception) |
| 404 | 404 Path not found | [`MessagingExceptionError`](#messaging-exception) |
| 415 | 415 The content-type of the request is incorrect | [`MessagingExceptionError`](#messaging-exception) |
| 429 | 429 The rate limit has been reached | [`MessagingExceptionError`](#messaging-exception) |

## Model Reference

### Structures

* [Bandwidth Messages List](#bandwidth-messages-list)
* [Bandwidth Message Item](#bandwidth-message-item)
* [Page Info](#page-info)
* [Media](#media)
* [Tag](#tag)
* [Deferred Result](#deferred-result)
* [Bandwidth Callback Message](#bandwidth-callback-message)
* [Bandwidth Message](#bandwidth-message)
* [Message Request](#message-request)

#### Bandwidth Messages List

##### Class Name

`BandwidthMessagesList`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalCount` | `number` | Optional | Total number of messages matched by the search |
| `pageInfo` | [`PageInfo`](#page-info) | Optional | - |
| `messages` | [`BandwidthMessageItem[]`](#bandwidth-message-item) | Optional | - |

##### Example (as JSON)

```json
{
  "totalCount": null,
  "pageInfo": null,
  "messages": null
}
```

#### Bandwidth Message Item

##### Class Name

`BandwidthMessageItem`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageId` | `string` | Optional | The message id |
| `accountId` | `string` | Optional | The account id of the message |
| `sourceTn` | `string` | Optional | The source phone number of the message |
| `destinationTn` | `string` | Optional | The recipient phone number of the message |
| `messageStatus` | `string` | Optional | The status of the message |
| `messageDirection` | `string` | Optional | The direction of the message relative to Bandwidth. INBOUND or OUTBOUND |
| `messageType` | `string` | Optional | The type of message. sms or mms |
| `segmentCount` | `number` | Optional | The number of segments the message was sent as |
| `errorCode` | `number` | Optional | The numeric error code of the message |
| `receiveTime` | `string` | Optional | The ISO 8601 datetime of the message |
| `carrierName` | `string` | Optional | The name of the carrier. Not currently supported for MMS, coming soon |

##### Example (as JSON)

```json
{
  "messageId": null,
  "accountId": null,
  "sourceTn": null,
  "destinationTn": null,
  "messageStatus": null,
  "messageDirection": null,
  "messageType": null,
  "segmentCount": null,
  "errorCode": null,
  "receiveTime": null,
  "carrierName": null
}
```

#### Page Info

##### Class Name

`PageInfo`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `prevPage` | `string` | Optional | The link to the previous page for pagination |
| `nextPage` | `string` | Optional | The link to the next page for pagination |
| `prevPageToken` | `string` | Optional | The isolated pagination token for the previous page |
| `nextPageToken` | `string` | Optional | The isolated pagination token for the next page |

##### Example (as JSON)

```json
{
  "prevPage": null,
  "nextPage": null,
  "prevPageToken": null,
  "nextPageToken": null
}
```

#### Media

##### Class Name

`Media`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `inputStream` | `unknown` | Optional | - |
| `content` | `string` | Optional | - |
| `url` | `string` | Optional | - |
| `contentLength` | `string` | Optional | - |
| `contentType` | `string` | Optional | - |
| `tags` | [`Tag[]`](#tag) | Optional | - |
| `userId` | `string` | Optional | User's account ID |
| `mediaName` | `string` | Optional | - |
| `mediaId` | `string` | Optional | - |
| `cacheControl` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "inputStream": null,
  "content": null,
  "url": null,
  "contentLength": null,
  "contentType": null,
  "tags": null,
  "userId": null,
  "mediaName": null,
  "mediaId": null,
  "cacheControl": null
}
```

#### Tag

##### Class Name

`Tag`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `key` | `string` | Optional | - |
| `value` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "key": null,
  "value": null
}
```

#### Deferred Result

##### Class Name

`DeferredResult`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | `unknown` | Optional | - |
| `setOrExpired` | `boolean` | Optional | - |

##### Example (as JSON)

```json
{
  "result": null,
  "setOrExpired": null
}
```

#### Bandwidth Callback Message

##### Class Name

`BandwidthCallbackMessage`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `time` | `string` | Optional | - |
| `type` | `string` | Optional | - |
| `to` | `string` | Optional | - |
| `errorCode` | `string` | Optional | - |
| `description` | `string` | Optional | - |
| `message` | [`BandwidthMessage`](#bandwidth-message) | Optional | - |

##### Example (as JSON)

```json
{
  "time": null,
  "type": null,
  "to": null,
  "errorCode": null,
  "description": null,
  "message": null
}
```

#### Bandwidth Message

##### Class Name

`BandwidthMessage`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Optional | The id of the message |
| `owner` | `string` | Optional | The Bandwidth phone number associated with the message |
| `applicationId` | `string` | Optional | The application ID associated with the message |
| `time` | `string` | Optional | The datetime stamp of the message in ISO 8601 |
| `segmentCount` | `number` | Optional | The number of segments the original message from the user is broken into before sending over to carrier networks |
| `direction` | `string` | Optional | The direction of the message relative to Bandwidth. Can be in or out |
| `to` | `string[]` | Optional | The phone number recipients of the message<br>**Constraints**: *Unique Items Required* |
| `from` | `string` | Optional | The phone number the message was sent from |
| `media` | `string[]` | Optional | The list of media URLs sent in the message<br>**Constraints**: *Unique Items Required* |
| `text` | `string` | Optional | The contents of the message |
| `tag` | `string` | Optional | The custom string set by the user |
| `priority` | `string` | Optional | The priority specified by the user |

##### Example (as JSON)

```json
{
  "id": null,
  "owner": null,
  "applicationId": null,
  "time": null,
  "segmentCount": null,
  "direction": null,
  "to": null,
  "from": null,
  "media": null,
  "text": null,
  "tag": null,
  "priority": null
}
```

#### Message Request

##### Class Name

`MessageRequest`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applicationId` | `string` |  | The ID of the Application your from number is associated with in the Bandwidth Phone Number Dashboard. |
| `to` | `string[]` |  | The phone number(s) the message should be sent to in E164 format<br>**Constraints**: *Unique Items Required* |
| `from` | `string` |  | One of your telephone numbers the message should come from in E164 format |
| `text` | `string` | Optional | The contents of the text message. Must be 2048 characters or less. |
| `media` | `string[]` | Optional | A list of URLs to include as media attachments as part of the message. |
| `tag` | `string` | Optional | A custom string that will be included in callback events of the message. Max 1024 characters |
| `priority` | [`PriorityEnum`](#priority) | Optional | The message's priority, currently for toll-free or short code SMS only. Messages with a priority value of `"high"` are given preference over your other traffic. |

##### Example (as JSON)

```json
{
  "applicationId": "93de2206-9669-4e07-948d-329f4b722ee2",
  "to": [
    "+15554443333",
    "+15552223333"
  ],
  "from": "+15551113333"
}
```

### Enumerations

* [Priority](#priority)

#### Priority

The message's priority, currently for toll-free or short code SMS only. Messages with a priority value of `"high"` are given preference over your other traffic.

##### Class Name

`PriorityEnum`

##### Fields

| Name |
|  --- |
| `default` |
| `high` |

##### Example

```
default
```

### Exceptions

* [Messaging Exception](#messaging-exception)

#### Messaging Exception

##### Class Name

`MessagingExceptionError`

##### Fields

| Name | Type | Description |
|  --- | --- | --- |
| `type` | `string` | - |
| `description` | `string` | - |

##### Example (as JSON)

```json
{
  "type": "type0",
  "description": "description0"
}
```

