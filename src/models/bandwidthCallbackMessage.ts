/**
 * bandwidthLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { BandwidthMessage, bandwidthMessageSchema } from './bandwidthMessage';

export interface BandwidthCallbackMessage {
  time?: string;
  type?: string;
  to?: string;
  errorCode?: string;
  description?: string;
  message?: BandwidthMessage;
}

export const bandwidthCallbackMessageSchema: Schema<BandwidthCallbackMessage> = object(
  {
    time: ['time', optional(string())],
    type: ['type', optional(string())],
    to: ['to', optional(string())],
    errorCode: ['errorCode', optional(string())],
    description: ['description', optional(string())],
    message: ['message', optional(lazy(() => bandwidthMessageSchema))],
  }
);