/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface BandwidthMessageItem {
  /** The message id */
  messageId?: string;
  /** The account id of the message */
  accountId?: string;
  /** The source phone number of the message */
  sourceTn?: string;
  /** The recipient phone number of the message */
  destinationTn?: string;
  /** The status of the message */
  messageStatus?: string;
  /** The direction of the message relative to Bandwidth. INBOUND or OUTBOUND */
  messageDirection?: string;
  /** The type of message. sms or mms */
  messageType?: string;
  /** The number of segments the message was sent as */
  segmentCount?: number;
  /** The numeric error code of the message */
  errorCode?: number;
  /** The ISO 8601 datetime of the message */
  receiveTime?: string;
  /** The name of the carrier. Not currently supported for MMS, coming soon */
  carrierName?: string;
}

export const bandwidthMessageItemSchema: Schema<BandwidthMessageItem> = object({
  messageId: ['messageId', optional(string())],
  accountId: ['accountId', optional(string())],
  sourceTn: ['sourceTn', optional(string())],
  destinationTn: ['destinationTn', optional(string())],
  messageStatus: ['messageStatus', optional(string())],
  messageDirection: ['messageDirection', optional(string())],
  messageType: ['messageType', optional(string())],
  segmentCount: ['segmentCount', optional(number())],
  errorCode: ['errorCode', optional(number())],
  receiveTime: ['receiveTime', optional(string())],
  carrierName: ['carrierName', optional(string())],
});
