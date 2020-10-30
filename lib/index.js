/**
  * @module MessagingLib
  *
  * Bandwidth's HTTP Messaging platform
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const APIController = require('./Controllers/APIController');
const Media = require('./Models/Media');
const Tag = require('./Models/Tag');
const DeferredResult = require('./Models/DeferredResult');
const BandwidthCallbackMessage = require('./Models/BandwidthCallbackMessage');
const BandwidthMessage = require('./Models/BandwidthMessage');
const MessageRequest = require('./Models/MessageRequest');
const MessagingException = require('./Exceptions/MessagingException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of MessagingLib
    Configuration,
    Environments,
    // controllers of MessagingLib
    APIController,
    // models of MessagingLib
    Media,
    Tag,
    DeferredResult,
    BandwidthCallbackMessage,
    BandwidthMessage,
    MessageRequest,
    // exceptions of MessagingLib
    MessagingException,
    APIException,
};

module.exports = initializer;
