import * as AWS from 'aws-sdk';

AWS.config.apiVersions = {
    dynamodb: '2012-08-10'
};
import {APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const response: APIGatewayProxyResult = {
        statusCode: 200,
        body: 'Hello World Panda'
    };

    console.log('BELOW IS THE EVENT');
    console.log(JSON.stringify(event));

    if (event.httpMethod === 'POST') {
        console.log('Post Method is called for webhook');
        // if (event.body === null) {
        //     response.statusCode = 400;
        //     response.body = 'Username and Password are required';
        //     return response;
        // }
        // const requestBody = JSON.parse(event.body);
        // if (event.path === '/auth') {
        //     return await authUser(requestBody.phoneNumber, requestBody.password);
        // }
        //
        // return await registerUser(requestBody);
    }

    return response;
};