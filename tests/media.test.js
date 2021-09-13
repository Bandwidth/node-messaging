import { Client, ApiController, FileWrapper } from '../src';

let controller;

beforeEach(() => {
    const client = new Client({
        basicAuthUserName: process.env.BW_USERNAME,
        basicAuthPassword: process.env.BW_PASSWORD
    });

    controller = new ApiController(client);
});

describe('media', () => {
    it('should upload and download media', async () => {
        const content = 'Hello world!';
    
        const accountId = process.env.BW_ACCOUNT_ID;
        const mediaId = `${process.env.GITHUB_RUN_ID}-media-up-down`;
        const body = new FileWrapper(Buffer.from(content));
        const contentType = 'text/plain';
    
        // Upload the media content.
        const uploadMediaResponse = await controller.uploadMedia(accountId, mediaId, body, contentType);
        
        expect(uploadMediaResponse.statusCode).toBe(204);

        // Get the media which we've just uploaded.
        const getMediaResponse = await controller.getMedia(accountId, mediaId);
        
        expect(getMediaResponse.statusCode).toBe(200);
        expect(getMediaResponse.headers['content-type']).toBe(contentType);
        
        const chunks = [];
        for await (let chunk of getMediaResponse.result) {
            chunks.push(chunk);
        }
        
        // Ensure that the data grabbed via getMedia is equivalent to what we uploaded.
        expect(Buffer.concat(chunks).toString()).toBe(content);
    });
});
