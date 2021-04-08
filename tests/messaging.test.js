import { Client, ApiController, FileWrapperi, MessagingExceptionError, MessageRequest } from '../src';

let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BANDWIDTH_USERNAME,
        basicAuthPassword: process.env.BANDWIDTH_PASSWORD
    });

    controller = new ApiController(client);
});

describe('messaging', () => {
    
    it('should create message with proper values', async () => {
        const accountId = process.env.BANDWIDTH_ACCOUNT_ID;
        const applicationId = process.env.MESSAGING_APPLICATION_ID;
        const body = {
            applicationId: applicationId,
            to: [process.env.PHONE_NUMBER_INBOUND],
            from: process.env.PHONE_NUMBER_OUTBOUND,
            text: 'TS messaging test'
        };

        const createMessageResponse = await controller.createMessage(accountId, body);
        expect(createMessageResponse.result.applicationId).toEqual(applicationId);
    });
    

    it('should throw an error on an invalid to number', async () => {
        const accountId = process.env.BANDWIDTH_ACCOUNT_ID;
        const body = {
            applicationId: process.env.MESSAGING_APPLICATION_ID,
            to: ["+1invalid"],
            from: process.env.PHONE_NUMBER_OUTBOUND,
            text: 'TS messaging test'
        };

        const t = async () => {
            await controller.createMessage(accountId, body);
        }

        expect(t).rejects.toThrow(MessagingExceptionError);
    });
});
