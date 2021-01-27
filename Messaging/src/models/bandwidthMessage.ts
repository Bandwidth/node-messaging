/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface BandwidthMessage {
  /** The id of the message */
  id?: string;
  /** The Bandwidth phone number associated with the message */
  owner?: string;
  /** The application ID associated with the message */
  applicationId?: string;
  /** The datetime stamp of the message in ISO 8601 */
  time?: string;
  /** The number of segments the original message from the user is broken into before sending over to carrier networks */
  segmentCount?: number;
  /** The direction of the message relative to Bandwidth. Can be in or out */
  direction?: string;
  /** The phone number recipients of the message */
  to?: string[];
  /** The phone number the message was sent from */
  from?: string;
  /** The list of media URLs sent in the message */
  media?: string[];
  /** The contents of the message */
  text?: string;
  /** The custom string set by the user */
  tag?: string;
}

export const bandwidthMessageSchema: Schema<BandwidthMessage> = object({
  id: ['id', optional(string())],
  owner: ['owner', optional(string())],
  applicationId: ['applicationId', optional(string())],
  time: ['time', optional(string())],
  segmentCount: ['segmentCount', optional(number())],
  direction: ['direction', optional(string())],
  to: ['to', optional(array(string()))],
  from: ['from', optional(string())],
  media: ['media', optional(array(string()))],
  text: ['text', optional(string())],
  tag: ['tag', optional(string())],
});
