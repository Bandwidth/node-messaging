import { Client, ApiController, FileWrapperi, MessagingExceptionError, MessageRequest } from '../src';
import { HttpClient } from '../src/http/httpClient';


let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BW_USERNAME,
        basicAuthPassword: process.env.BW_PASSWORD
    });

    controller = new ApiController(client);
});

describe('http client', () => {
    const httpClient = new HttpClient();
    it('should throw error on unknown body type', async () => {
        const httpRequest = {
            body: {
                type: "somethingmadeup"
            }
        };
        expect(() => httpClient.convertHttpRequest(httpRequest)).toThrow("HTTP client encountered unknown body type 'somethingmadeup'. Could not execute HTTP request.");
    });

    it('should not throw error on known body type', async () => {
        const httpRequest = {
            body: {
                type: "text"
            }
        };
        expect(httpClient.convertHttpRequest(httpRequest)).toBeDefined();
    });
});


describe('messaging', () => {
    
    it('should create message with proper values', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;
        const applicationId = process.env.BW_MESSAGING_APPLICATION_ID;
        const toPhoneNumber = process.env.USER_NUMBER;
        const fromPhoneNumber = process.env.BW_NUMBER;
        const text = 'TS messaging test';
        const body = {
            applicationId: applicationId,
            to: [toPhoneNumber],
            from: fromPhoneNumber,
            text: text 
        };

        const createMessageResponse = await controller.createMessage(accountId, body);
        expect(createMessageResponse.result.applicationId).toEqual(applicationId);
        expect(createMessageResponse.result.to[0]).toEqual(toPhoneNumber);
        expect(createMessageResponse.result.from).toEqual(fromPhoneNumber);
        expect(createMessageResponse.result.text).toEqual(text);
    });

    it('should get messages', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;
        const phoneNumber = process.env.BW_NUMBER;

        const listMessagesResponse = await controller.getMessages(accountId, undefined, phoneNumber);
        expect(listMessagesResponse.result.messages[0].messageId.length).toEqual(29);
        expect(listMessagesResponse.result.messages[0].accountId).toEqual(accountId);
        expect(listMessagesResponse.result.messages[0].sourceTn).toEqual(phoneNumber);
    });
    

    it('should throw an error on an invalid to number', async () => {
        const accountId = process.env.BW_ACCOUNT_ID;
        const body = {
            applicationId: process.env.BW_MESSAGING_APPLICATION_ID,
            to: ["+1invalid"],
            from: process.env.BW_NUMBER,
            text: 'TS messaging test'
        };

        const t = async () => {
            await controller.createMessage(accountId, body);
        }

        expect(t).rejects.toThrow(MessagingExceptionError);
    });
});
