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
        const body = {
            applicationId: process.env.MESSAGING_APPLICATION_ID,
            to: [process.env.PHONE_NUMBER_INBOUND],
            from: process.env.PHONE_NUMBER_OUTBOUND,
            text: 'TS messaging test'
        };

        const createMessageResponse = await controller.createMessage(accountId, body);
        expect(createMessageResponse.result.applicationId).toBeDefined();
    });
    

    it('should throw error on invalid values', async () => {
        const accountId = 'not-a-real-account-id';
        const body = {
            applicationId: 'not-a-real-application-id',
            to: ['+1444'],
            from: '+1555',
            text: 'TS messaging test'
        };

        const t = async () => {
            await controller.createMessage(accountId, body);
        }

        expect(t).rejects.toThrow(MessagingExceptionError);
    });
});
