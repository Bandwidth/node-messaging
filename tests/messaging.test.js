import { Client, ApiController, FileWrapperi, ApiError } from '../src';

let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BANDWIDTH_USERNAME,
        basicAuthPassword: process.env.BANDWIDTH_PASSWORD
    });

    controller = new ApiController(client);
});

describe('messaging', () => {
    /*
    it('should create message with proper values', async () => {
        const accountId = process.env.BANDWIDTH_ACCOUNT_ID;
        const body: MessageRequest = {
            applicationId: process.env.MESSAGING_APPLICATION_ID,
            to: string[] = [process.env.PHONE_NUMBER_INBOUND],
            from: process.env.PHONE_NUMBER_OUTBOUND,
            text: 'TS messaging test'
        };

        const createMessageResponse = await controller.createMessage(accountId, body);
        expect(createmessageResponse.result.applicationId).toBeDefined();
    });
    */

    it('should catch error on invalid values', async () => {
        const accountId = process.env.BANDWIDTH_ACCOUNT_ID;
        const body: MessageRequest = {
            applicationId: process.env.MESSAGING_APPLICATION_ID,
            to: string[] = [process.env.PHONE_NUMBER_INBOUND],
            from: process.env.PHONE_NUMBER_OUTBOUND,
            text: 'TS messaging test'
        };

        expect(async () => {await controller.createMessage(accountId, body)}).toThrow(ApiError);
    });
});
