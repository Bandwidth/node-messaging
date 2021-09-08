# Bandwidth Node Messaging SDK

Note: As of version 3.0.0, this package has been upgraded to TypeScript

## Getting Started

### Installation

```
npm install @bandwidth/messaging
```

### Initialize

```
import { Client, ApiController, MessageRequest } from '@bandwidth/messaging';
const client = new Client({
    basicAuthUserName: "username",
    basicAuthPassword: "password"
});

const controller = new ApiController(client);
const accountId = "12345";
```

### Send A Text Message
```
var applicationId = "3-a-b-c";
var toPhoneNumber = "+15554443333";
var fromPhoneNumber = "+15553334444";
var text = "Hello world";
var body = {
    applicationId: applicationId,
    to: [toPhoneNumber],
    from: fromPhoneNumber,
    text: text 
};

var createMessageResponse = await controller.createMessage(accountId, body);
console.log(createMessageResponse.result.id);
```

## Supported Node Versions

This package can be used with Node >= 10

## Documentation

Documentation for this package can be found at https://dev.bandwidth.com/sdks/node.html

## Credentials

Information for credentials for this package can be found at https://dev.bandwidth.com/guides/accountCredentials.html
