# Bandwidth Node Messaging SDK

[![Test](https://github.com/Bandwidth/node-messaging/actions/workflows/test.yml/badge.svg)](https://github.com/Bandwidth/node-messaging/actions/workflows/test.yml)

| **OS** | **Node** |
|:---:|:---:|
| Windows 2016 | 12, 14, 16 |
| Windows 2019 | 12, 14, 16 |
| Ubuntu 20.04 | 12, 14, 16 |
| Ubuntu 22.04 | 12, 14, 16 |

Note: As of version 3.0.0, this package has been upgraded to TypeScript

## Getting Started

### Installation

```
npm install @bandwidth/messaging
```

### Initialize

```js
import { Client, ApiController, MessageRequest } from '@bandwidth/messaging';
const client = new Client({
    basicAuthUserName: "username",
    basicAuthPassword: "password"
});

const controller = new ApiController(client);
const accountId = "12345";
```

### Send A Text Message
```js
const applicationId = "3-a-b-c";
const toPhoneNumber = "+15554443333";
const fromPhoneNumber = "+15553334444";
const text = "Hello world";
const body = {
    applicationId: applicationId,
    to: [toPhoneNumber],
    from: fromPhoneNumber,
    text: text 
};

const createMessageResponse = await controller.createMessage(accountId, body);
console.log(createMessageResponse.result.id);
```

## Supported Node Versions

This package can be used with Node >= 10

## Documentation

Documentation for this package can be found at https://dev.bandwidth.com/sdks/node.html

## Credentials

Information for credentials for this package can be found at https://dev.bandwidth.com/guides/accountCredentials.html
