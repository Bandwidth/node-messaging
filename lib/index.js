/**
  * @module MessagingLib
  *
  * Bandwidth's HTTP Messaging platform
  */

'use strict';

const Configuration = require('./configuration');
const APIController = require('./Controllers/APIController');
const FieldError = require('./Models/FieldError');
const Media = require('./Models/Media');
const Tag = require('./Models/Tag');
const DeferredResult = require('./Models/DeferredResult');
const BandwidthCallbackMessage = require('./Models/BandwidthCallbackMessage');
const BandwidthMessage = require('./Models/BandwidthMessage');
const MessageRequest = require('./Models/MessageRequest');
const GenericClientException = require('./Exceptions/GenericClientException');
const PathClientException = require('./Exceptions/PathClientException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of MessagingLib
    Configuration,
    // controllers of MessagingLib
    APIController,
    // models of MessagingLib
    FieldError,
    Media,
    Tag,
    DeferredResult,
    BandwidthCallbackMessage,
    BandwidthMessage,
    MessageRequest,
    // exceptions of MessagingLib
    GenericClientException,
    PathClientException,
    APIException,
};

module.exports = initializer;
